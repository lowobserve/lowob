/* lowob radar: a live view of what lowob is tracking.
   Centre = today. Distance from centre = distance in time (dates ahead, research behind).
   Eight sectors, one per bar of the lowob mark. No dependencies. */
(function () {
  'use strict';

  var LIME = '#39FF14', INK = '#080808', WHITE = '#f3f3ef', MUTED = '#858585', LINE = '#2c2c2c';
  var MONO = 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace';
  var DAY = 86400000;
  var SWEEP_SECONDS = 13;
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var TYPE_LABEL = { deadline: 'Deadline', event: 'Event', research: 'Research', signal: 'Signal' };

  // Ring edges as fractions of the radius, by days from today (either direction).
  var BANDS = [[0, 0.19], [7, 0.3], [30, 0.5], [90, 0.74], [365, 1]];
  var RING_LABELS = ['7D', '30D', '90D', '1Y'];

  function radiusFor(days) {
    days = Math.abs(days);
    for (var i = 1; i < BANDS.length; i++) {
      if (days <= BANDS[i][0]) {
        var a = BANDS[i - 1], b = BANDS[i];
        return a[1] + (b[1] - a[1]) * (days - a[0]) / (b[0] - a[0]);
      }
    }
    return 1;
  }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967295; }
  function parse(iso) { var p = iso.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function today() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function fmt(d) { return d.getDate() + ' ' + MONTHS[d.getMonth()]; }
  function norm(a) { a %= Math.PI * 2; return a < 0 ? a + Math.PI * 2 : a; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  function Radar(root, data) {
    this.root = root;
    this.sectors = data.sectors;
    this.reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.filter = null;
    this.lock = null; this.lockSince = 0; this.hoverUntil = 0;
    this.reticle = { x: 0, y: 0, s: 40 };
    this.sweep = -Math.PI / 2; this.last = 0; this.running = false;
    this.pointer = { x: -1, y: -1, in: false };
    this.build(data);
  }

  Radar.prototype.build = function (data) {
    var self = this, now = today(), root = this.root;
    var n = this.sectors.length, step = Math.PI * 2 / n;

    this.items = data.items.map(function (it) {
      var s = self.sectors.indexOf(it.sector); if (s < 0) return null;
      var d = parse(it.date), days = Math.round((d - now) / DAY);
      if (it.type !== 'research' && days < 0) return null; // closed: drop
      var spread = (hash(it.id) - 0.5) * step * 0.72;
      return {
        raw: it, sector: s, date: d, days: days,
        angle: norm(-Math.PI / 2 + s * step + spread),
        r: Math.min(0.97, Math.max(0.19, radiusFor(days) + (hash(it.id + 'r') - 0.5) * 0.04)),
        energy: 0, x: 0, y: 0, seen: false
      };
    }).filter(Boolean);
    this.items.sort(function (a, b) { return Math.abs(a.days) - Math.abs(b.days); });

    root.classList.add('lr-ready');
    var stage = el('div', 'lr-stage');
    this.canvas = el('canvas', 'lr-canvas');
    this.canvas.setAttribute('tabindex', '0');
    this.canvas.setAttribute('role', 'img');
    this.canvas.setAttribute('aria-label', 'Radar of upcoming deadlines, events and recent research by sector. Use arrow keys to step through signals, Enter to open.');
    stage.appendChild(this.canvas);

    // sector buttons around the ring
    this.sectorBtns = this.sectors.map(function (name, i) {
      var count = self.items.filter(function (it) { return it.sector === i; }).length;
      var b = el('button', 'lr-sector');
      b.type = 'button';
      b.innerHTML = '<span></span><b></b>';
      b.firstChild.textContent = name; b.lastChild.textContent = count;
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { self.setFilter(self.filter === i ? null : i); });
      stage.appendChild(b);
      return b;
    });

    // readout
    var ro = this.readout = el('a', 'lr-readout');
    ro.innerHTML = '<span class="lr-ro-meta"></span><b class="lr-ro-title"></b><span class="lr-ro-detail"></span><span class="lr-ro-when"></span>';

    var legend = el('div', 'lr-legend');
    legend.innerHTML = '<span><i class="lr-k-deadline"></i>Deadline</span><span><i class="lr-k-event"></i>Event</span><span><i class="lr-k-research"></i>Research</span><span class="lr-legend-note">Centre is today</span>';

    // accessible list
    var list = el('ol', 'lr-sr');
    this.items.forEach(function (it) {
      var li = el('li'), a = el(it.raw.url ? 'a' : 'span');
      if (it.raw.url) a.href = it.raw.url;
      a.textContent = TYPE_LABEL[it.raw.type] + ', ' + it.raw.sector + ': ' + it.raw.title + ', ' + it.raw.detail + ', ' + self.when(it);
      li.appendChild(a); list.appendChild(li);
    });

    root.innerHTML = '';
    root.appendChild(stage); root.appendChild(ro); root.appendChild(legend); root.appendChild(list);
    this.stage = stage;
    this.ctx = this.canvas.getContext('2d');

    this.resize();
    window.addEventListener('resize', function () { self.resize(); });
    this.bindPointer();
    this.setLock(this.items[0], performance.now());

    var start = function () { if (!self.running) { self.running = true; self.last = performance.now(); requestAnimationFrame(self.frame.bind(self)); } };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { self.visible = e[0].isIntersecting; if (self.visible) start(); }).observe(root);
    } else { this.visible = true; start(); }
    document.addEventListener('visibilitychange', function () { if (!document.hidden && self.visible) start(); });
  };

  Radar.prototype.when = function (it) {
    var d = it.days;
    if (it.raw.type === 'research') return d === 0 ? 'published today' : 'published ' + fmt(it.date);
    return fmt(it.date) + ' · ' + (d === 0 ? 'today' : d === 1 ? 'tomorrow' : 'in ' + d + ' days');
  };

  Radar.prototype.resize = function () {
    var w = this.stage.clientWidth, dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.size = w; this.dpr = dpr;
    this.canvas.width = w * dpr; this.canvas.height = w * dpr;
    this.canvas.style.width = w + 'px'; this.canvas.style.height = w + 'px';
    this.cx = w / 2; this.cy = w / 2; this.R = w * 0.4;
    var self = this, step = Math.PI * 2 / this.sectors.length;
    this.sectorBtns.forEach(function (b, i) {
      var a = -Math.PI / 2 + i * step, rr = self.R * 1.17;
      b.style.left = (self.cx + Math.cos(a) * rr) + 'px';
      b.style.top = (self.cy + Math.sin(a) * rr) + 'px';
    });
    this.items.forEach(function (it) {
      it.x = self.cx + Math.cos(it.angle) * it.r * self.R;
      it.y = self.cy + Math.sin(it.angle) * it.r * self.R;
    });
    if (this.lock) { this.reticle.x = this.lock.x; this.reticle.y = this.lock.y; }
    if (this.reduced) this.draw(performance.now());
  };

  Radar.prototype.visibleItems = function () {
    var f = this.filter; return f == null ? this.items : this.items.filter(function (i) { return i.sector === f; });
  };

  Radar.prototype.setFilter = function (i) {
    this.filter = i;
    this.sectorBtns.forEach(function (b, j) { b.setAttribute('aria-pressed', String(j === i)); b.classList.toggle('is-dim', i != null && j !== i); });
    var v = this.visibleItems();
    if (v.length) this.setLock(v[0], performance.now());
    else { this.lock = null; this.readout.classList.add('is-empty'); this.readout.querySelector('.lr-ro-title').textContent = 'Nothing on the radar here yet.'; this.readout.querySelector('.lr-ro-meta').textContent = this.sectors[i]; this.readout.querySelector('.lr-ro-detail').textContent = ''; this.readout.querySelector('.lr-ro-when').textContent = ''; this.readout.removeAttribute('href'); }
    if (this.reduced) this.draw(performance.now());
  };

  Radar.prototype.setLock = function (it, t) {
    if (!it) return;
    var first = !this.lock;
    this.lock = it; this.lockSince = t; it.energy = Math.max(it.energy, 0.9);
    if (first) { this.reticle.x = it.x; this.reticle.y = it.y; }
    this.reticle.s = 56;
    var ro = this.readout, idx = this.visibleItems().indexOf(it) + 1, total = this.visibleItems().length;
    ro.classList.remove('is-empty');
    ro.classList.toggle('is-deadline', it.raw.type === 'deadline');
    ro.querySelector('.lr-ro-meta').textContent = 'Lock ' + ('0' + idx).slice(-2) + '/' + ('0' + total).slice(-2) + ' · ' + TYPE_LABEL[it.raw.type] + ' · ' + it.raw.sector;
    ro.querySelector('.lr-ro-title').textContent = it.raw.title;
    ro.querySelector('.lr-ro-detail').textContent = it.raw.detail;
    ro.querySelector('.lr-ro-when').textContent = this.when(it) + (it.raw.url ? '  →' : '');
    if (it.raw.url) {{ ro.href = 'https://lowob.com'+it.raw.url; ro.target='_blank'; }} else ro.removeAttribute('href');
    this.sectorBtns.forEach(function (b, j) { b.classList.toggle('is-lock', j === it.sector); });
    // retrigger readout animation
    ro.classList.remove('is-flash'); void ro.offsetWidth; ro.classList.add('is-flash');
    if (this.reduced) this.draw(t);
  };

  Radar.prototype.bindPointer = function () {
    var self = this, c = this.canvas;
    function nearest(x, y) {
      var best = null, bd = 18 * 18;
      self.visibleItems().forEach(function (it) { var dx = it.x - x, dy = it.y - y, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = it; } });
      return best;
    }
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      self.pointer = { x: x, y: y, in: true };
      var it = nearest(x, y);
      c.style.cursor = it && it.raw.url ? 'pointer' : 'default';
      if (it) { self.hoverUntil = performance.now() + 6000; if (it !== self.lock) self.setLock(it, performance.now()); }
    });
    c.addEventListener('pointerleave', function () { self.pointer.in = false; });
    c.addEventListener('click', function (e) {
      var r = c.getBoundingClientRect(), it = nearest(e.clientX - r.left, e.clientY - r.top);
      if (it && it.raw.url) window.open('https://lowob.com'+it.raw.url,'_blank');
    });
    c.addEventListener('keydown', function (e) {
      var v = self.visibleItems(); if (!v.length) return;
      var i = Math.max(0, v.indexOf(self.lock));
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); self.hoverUntil = performance.now() + 10000; self.setLock(v[(i + 1) % v.length], performance.now()); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); self.hoverUntil = performance.now() + 10000; self.setLock(v[(i - 1 + v.length) % v.length], performance.now()); }
      else if (e.key === 'Enter' && self.lock && self.lock.raw.url) { window.open('https://lowob.com'+self.lock.raw.url,'_blank'); }
    });
  };

  Radar.prototype.frame = function (t) {
    if (!this.visible || document.hidden) { this.running = false; return; }
    var dt = Math.min(0.05, (t - this.last) / 1000); this.last = t;
    if (!this.reduced) {
      var prev = this.sweep;
      this.sweep = norm(this.sweep + dt * Math.PI * 2 / SWEEP_SECONDS);
      var self = this, crossed = [];
      this.items.forEach(function (it) {
        var a0 = norm(prev), a1 = self.sweep, a = it.angle;
        var hit = a0 <= a1 ? (a > a0 && a <= a1) : (a > a0 || a <= a1);
        if (hit) { it.energy = 1; crossed.push(it); }
        it.energy *= Math.exp(-dt / 2.6);
      });
      // auto lock on what the sweep just found
      if (t > this.hoverUntil && t - this.lockSince > 2600) {
        var v = this.visibleItems();
        for (var i = 0; i < crossed.length; i++) if (v.indexOf(crossed[i]) >= 0) { this.setLock(crossed[i], t); break; }
      }
    }
    this.draw(t);
    if (!this.reduced) requestAnimationFrame(this.frame.bind(this));
    else this.running = false;
  };

  Radar.prototype.draw = function (t) {
    var ctx = this.ctx, d = this.dpr, cx = this.cx, cy = this.cy, R = this.R, w = this.size, self = this;
    var step = Math.PI * 2 / this.sectors.length;
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.clearRect(0, 0, w, w);

    // sector wedges (filter / lock highlight)
    for (var s = 0; s < this.sectors.length; s++) {
      var a = -Math.PI / 2 + s * step;
      var hl = this.filter === s ? 0.07 : (this.lock && this.lock.sector === s ? 0.035 : 0);
      if (hl) {
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, a - step / 2, a + step / 2); ctx.closePath();
        ctx.fillStyle = 'rgba(57,255,20,' + hl + ')'; ctx.fill();
      }
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(a - step / 2) * R * 0.1, cy + Math.sin(a - step / 2) * R * 0.1);
      ctx.lineTo(cx + Math.cos(a - step / 2) * R, cy + Math.sin(a - step / 2) * R);
      ctx.strokeStyle = 'rgba(243,243,239,0.05)'; ctx.lineWidth = 1; ctx.stroke();
    }

    // rings
    ctx.font = '9px ' + MONO; ctx.textBaseline = 'middle';
    for (var i = 1; i < BANDS.length; i++) {
      var rr = BANDS[i][1] * R;
      ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2);
      ctx.strokeStyle = i === BANDS.length - 1 ? 'rgba(243,243,239,0.16)' : 'rgba(243,243,239,0.08)';
      ctx.setLineDash(i === BANDS.length - 1 ? [] : [2, 4]); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(133,133,133,0.8)';
      ctx.fillText(RING_LABELS[i - 1], cx + Math.cos(-Math.PI / 2 + step / 2) * rr + 4, cy + Math.sin(-Math.PI / 2 + step / 2) * rr);
    }
    // ticks on outer ring
    for (var k = 0; k < 72; k++) {
      var ta = k * Math.PI * 2 / 72, len = k % 9 === 0 ? 7 : 3;
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(ta) * R, cy + Math.sin(ta) * R); ctx.lineTo(cx + Math.cos(ta) * (R + len), cy + Math.sin(ta) * (R + len));
      ctx.strokeStyle = 'rgba(243,243,239,0.18)'; ctx.stroke();
    }

    // sweep
    if (!this.reduced) {
      var sw = this.sweep, trail = Math.PI / 3.2, slices = 24;
      for (var j = 0; j < slices; j++) {
        var a0 = sw - trail * (j + 1) / slices, a1 = sw - trail * j / slices;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, a0, a1); ctx.closePath();
        ctx.fillStyle = 'rgba(57,255,20,' + (0.11 * Math.pow(1 - j / slices, 2)) + ')'; ctx.fill();
      }
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(sw) * R, cy + Math.sin(sw) * R);
      var g = ctx.createLinearGradient(cx, cy, cx + Math.cos(sw) * R, cy + Math.sin(sw) * R);
      g.addColorStop(0, 'rgba(57,255,20,0.05)'); g.addColorStop(1, 'rgba(57,255,20,0.85)');
      ctx.strokeStyle = g; ctx.lineWidth = 1.2; ctx.stroke(); ctx.lineWidth = 1;
    }

    // blips
    var vis = this.visibleItems();
    this.items.forEach(function (it) {
      var on = vis.indexOf(it) >= 0;
      var e = self.reduced ? 0.55 : it.energy;
      var alpha = on ? 0.32 + 0.68 * e : 0.07;
      var isLock = it === self.lock;
      var col = it.raw.type === 'deadline' ? '57,255,20' : '243,243,239';
      var x = it.x, y = it.y;
      // urgency pulse for deadlines within 30 days
      if (on && it.raw.type === 'deadline' && it.days <= 30 && !self.reduced) {
        var p = (t / 1600) % 1;
        ctx.beginPath(); ctx.arc(x, y, 4 + p * 16, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(57,255,20,' + (0.5 * (1 - p)) + ')'; ctx.stroke();
      }
      if (on && e > 0.15) { // phosphor glow
        var gg = ctx.createRadialGradient(x, y, 0, x, y, 14);
        gg.addColorStop(0, 'rgba(' + col + ',' + (0.35 * e) + ')'); gg.addColorStop(1, 'rgba(' + col + ',0)');
        ctx.fillStyle = gg; ctx.fillRect(x - 14, y - 14, 28, 28);
      }
      ctx.fillStyle = 'rgba(' + col + ',' + (isLock ? 1 : alpha) + ')';
      ctx.strokeStyle = ctx.fillStyle;
      var sz = isLock ? 4.2 : 3.2;
      if (it.raw.type === 'deadline') { ctx.fillRect(x - sz, y - sz, sz * 2, sz * 2); }
      else if (it.raw.type === 'event') { ctx.beginPath(); ctx.arc(x, y, sz + 0.6, 0, Math.PI * 2); ctx.lineWidth = 1.4; ctx.stroke(); ctx.lineWidth = 1; }
      else { ctx.beginPath(); ctx.arc(x, y, sz - 0.6, 0, Math.PI * 2); ctx.fill(); }
    });

    // reticle + tether to the locked blip
    if (this.lock) {
      var rt = this.reticle, L = this.lock;
      rt.x += (L.x - rt.x) * 0.18; rt.y += (L.y - rt.y) * 0.18; rt.s += (18 - rt.s) * 0.14;
      if (this.reduced) { rt.x = L.x; rt.y = L.y; rt.s = 18; }
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(rt.x, rt.y);
      ctx.strokeStyle = 'rgba(57,255,20,0.28)'; ctx.setLineDash([1, 3]); ctx.stroke(); ctx.setLineDash([]);
      var h = rt.s / 2, c = 5;
      ctx.strokeStyle = LIME; ctx.lineWidth = 1.2; ctx.beginPath();
      [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(function (q) {
        var x0 = rt.x + q[0] * h, y0 = rt.y + q[1] * h;
        ctx.moveTo(x0, y0 - q[1] * c); ctx.lineTo(x0, y0); ctx.lineTo(x0 - q[0] * c, y0);
      });
      ctx.stroke(); ctx.lineWidth = 1;
    }

    // centre: the lowob mark, one bar per sector; the locked sector's bar lights
    var ms = R * 0.135 / 33;
    var rotation = this.sweep + Math.PI / 2; // The first blade points up before rotation.
    for (var b = 0; b < this.sectors.length; b++) {
      var lit = this.lock && this.lock.sector === b, filt = this.filter === b;
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(rotation + b * step);
      ctx.fillStyle = lit || filt ? LIME : 'rgba(243,243,239,0.92)';
      ctx.fillRect(-3 * ms, -29 * ms, 6 * ms, 22 * ms);
      ctx.restore();
    }
  };

  function boot() {
    var nodes = document.querySelectorAll('[data-lowob-radar]');
    Array.prototype.forEach.call(nodes, function (root) {
      var inline = root.querySelector('script[type="application/json"]');
      var fallback = null;
      try { fallback = inline ? JSON.parse(inline.textContent) : null; } catch (e) {}
      var src = root.getAttribute('data-src');
      var go = function (data) { if (data && data.items) new Radar(root, data); };
      if (src && window.fetch) fetch(src, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw r; return r.json(); }).then(go).catch(function () { go(fallback); });
      else go(fallback);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
