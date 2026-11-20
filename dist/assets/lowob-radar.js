(() => {
  'use strict';

  const DAY = 86_400_000;
  const TAU = Math.PI * 2;
  const BANDS = [[0, .14], [7, .27], [30, .49], [90, .76], [365, 1]];
  const TYPES = { deadline: 'Deadline', event: 'Event', research: 'Research', signal: 'Signal' };
  const GREEN = '#a6e891';
  const WHITE = '#edece5';
  const MONO = '11px ui-monospace, monospace';
  const dateLabel = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function makeButton(className, label, action) {
    const button = element('button', className, label);
    button.type = 'button';
    button.addEventListener('click', action);
    return button;
  }

  function radius(days) {
    const i = BANDS.findIndex(([limit]) => limit >= Math.abs(days));
    if (i < 0) return 1;
    if (i === 0) return BANDS[0][1];
    const [a, inner] = BANDS[i - 1];
    const [b, outer] = BANDS[i];
    return inner + (outer - inner) * (Math.abs(days) - a) / (b - a);
  }

  function spread(id) {
    let hash = 2166136261;
    for (const char of id) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
    return (hash >>> 0) / 4294967295 - .5;
  }

  function dates(item) {
    const date = dateLabel.format(item.date);
    if (item.raw.type === 'research') return 'Published ' + date;
    if (item.days === 0) return 'Today · ' + date;
    if (item.days === 1) return 'Tomorrow · ' + date;
    return 'In ' + item.days + ' days · ' + date;
  }

  class Radar {
    constructor(root, data) {
      this.root = root;
      this.sectors = data.sectors;
      this.step = TAU / data.sectors.length;
      this.motion = matchMedia('(prefers-reduced-motion: reduce)');
      this.angle = -.7;
      this.yaw = 0;
      this.targetYaw = 0;
      this.frameId = 0;
      this.paused = false;
      this.visible = !('IntersectionObserver' in window);
      this.filter = null;
      this.tick = this.tick.bind(this);

      const now = new Date();
      const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
      this.items = data.items.flatMap(raw => {
        const sector = this.sectors.indexOf(raw.sector);
        const date = new Date(raw.date + 'T00:00:00Z');
        const days = (date.getTime() - today) / DAY;
        if (sector < 0 || !Number.isFinite(days) || (raw.type !== 'research' && days < 0)) return [];
        const angle = -Math.PI / 2 + this.step * (sector + spread(raw.id) * .76);
        return [{ raw, sector, date, days, angle, r: radius(days), lower: days < 0 }];
      }).sort((a, b) => Math.abs(a.days) - Math.abs(b.days));

      this.build();
    }

    build() {
      const head = element('div', 'lr-head');
      this.count = element('span', 'lr-count');
      this.pause = makeButton('lr-pause', 'Pause sweep', () => {
        this.paused = !this.paused;
        this.syncMotion();
      });
      head.append(element('strong', 'lr-name', 'lowob radar'), this.count, this.pause);

      this.stage = element('div', 'lr-stage');
      this.canvas = element('canvas', 'lr-canvas');
      this.ctx = this.canvas.getContext('2d');
      if (this.ctx) {
        this.canvas.tabIndex = 0;
        this.canvas.setAttribute('aria-label', 'Signal plot. Use arrow keys to browse signals and Enter to open the selected source.');
        this.stage.append(this.canvas);
      }
      const axis = element('div', 'lr-axis');
      axis.setAttribute('aria-hidden', 'true');
      axis.append(element('span', '', 'Upcoming'), element('span', '', 'Past research'));
      this.stage.append(axis);

      const filters = element('div', 'lr-filters');
      filters.setAttribute('role', 'group');
      filters.setAttribute('aria-label', 'Filter signals by sector');
      this.filters = ['All', ...this.sectors].map((name, i) => {
        const sector = i === 0 ? null : i - 1;
        const button = makeButton('lr-sector', name, () => this.setFilter(sector === this.filter ? null : sector));
        filters.append(button);
        return button;
      });

      this.readout = element('div', 'lr-readout');
      const card = element('div', 'lr-signal');
      this.meta = element('span', 'lr-ro-meta');
      this.title = element('strong', 'lr-ro-title');
      this.detail = element('span', 'lr-ro-detail');
      this.when = element('span', 'lr-ro-when');
      this.source = element('a', 'lr-source', 'Open source ↗');
      this.source.target = '_blank';
      this.source.rel = 'noopener';
      this.status = element('span', 'lr-sr');
      this.status.setAttribute('role', 'status');
      card.append(this.meta, this.title, this.detail, this.when, this.source, this.status);

      const controls = element('div', 'lr-step');
      this.previous = makeButton('lr-step-button', '←', () => this.advance(-1));
      this.next = makeButton('lr-step-button', '→', () => this.advance(1));
      this.previous.setAttribute('aria-label', 'Previous signal');
      this.next.setAttribute('aria-label', 'Next signal');
      controls.append(this.previous, this.next);
      this.readout.append(card, controls);

      const footer = element('div', 'lr-footer');
      const legend = element('div', 'lr-legend');
      for (const type of ['deadline', 'event', 'research']) {
        const key = element('span');
        key.append(element('i', 'lr-key-' + type), document.createTextNode(TYPES[type]));
        legend.append(key);
      }
      const directory = element('details', 'lr-directory');
      this.list = element('ol');
      directory.append(element('summary', '', 'Signal list'), this.list);
      footer.append(legend, directory);

      this.root.replaceChildren(head, this.stage, filters, this.readout, footer);
      this.root.classList.add('lr-ready');
      this.stage.hidden = !this.ctx;
      this.pause.hidden = !this.ctx;
      this.setFilter(null, false);
      if (!this.ctx) return;

      this.bindPlot();
      this.resize();
      if ('ResizeObserver' in window) new ResizeObserver(() => this.resize()).observe(this.stage);
      else window.addEventListener('resize', () => this.resize());
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
          this.visible = entry.isIntersecting;
          this.syncMotion();
        }).observe(this.stage);
      }
      this.motion.addEventListener('change', () => this.syncMotion());
      document.addEventListener('visibilitychange', () => this.syncMotion());
      this.syncMotion();
    }

    setFilter(sector, announce = true) {
      this.filter = sector;
      this.signals = this.items.filter(item => sector === null || item.sector === sector);
      this.visibleSignals = new Set(this.signals);
      for (const [i, button] of this.filters.entries()) {
        button.setAttribute('aria-pressed', String(i === (sector === null ? 0 : sector + 1)));
      }
      const count = this.signals.length;
      this.count.textContent = count + (count === 1 ? ' signal' : ' signals');
      this.previous.disabled = this.next.disabled = count < 2;
      this.list.replaceChildren(...this.signals.map(item => {
        const entry = element('li');
        const button = makeButton('lr-list-button', item.raw.title, () => this.select(item, true));
        entry.append(button, element('span', '', TYPES[item.raw.type] + ' · ' + dates(item)));
        if (item.raw.url) {
          const source = element('a', '', 'Open source ↗');
          source.href = item.raw.url;
          source.target = '_blank';
          source.rel = 'noopener';
          source.setAttribute('aria-label', 'Open source for ' + item.raw.title);
          entry.append(source);
        }
        return entry;
      }));
      this.select(this.signals[0], announce);
    }

    select(item, announce = false) {
      this.lock = item;
      const index = this.signals.indexOf(item);
      this.meta.textContent = item ? [TYPES[item.raw.type], item.raw.sector, (index + 1) + '/' + this.signals.length].join(' / ') : 'No signals';
      this.title.textContent = item?.raw.title ?? 'No signals in this sector.';
      this.detail.textContent = item?.raw.detail ?? '';
      this.when.textContent = item ? dates(item) : '';
      this.source.hidden = !item?.raw.url;
      if (item?.raw.url) this.source.href = item.raw.url;
      else this.source.removeAttribute('href');
      if (announce) this.status.textContent = [this.title.textContent, this.meta.textContent, this.when.textContent].join('. ');
      this.draw();
    }

    advance(delta) {
      const count = this.signals.length;
      if (!count) return;
      const index = this.signals.indexOf(this.lock);
      this.select(this.signals[(index + delta + count) % count], true);
    }

    bindPlot() {
      const nearest = event => {
        const box = this.canvas.getBoundingClientRect();
        let distance = (event.pointerType === 'touch' ? 22 : 14) ** 2;
        let hit;
        for (const item of this.signals) {
          const d = (event.clientX - box.left - item.x) ** 2 + (event.clientY - box.top - item.y) ** 2;
          if (d < distance) {
            hit = item;
            distance = d;
          }
        }
        return hit;
      };

      this.canvas.addEventListener('pointermove', event => {
        if (event.pointerType === 'touch') return;
        const hit = nearest(event);
        this.canvas.style.cursor = hit ? 'pointer' : '';
        this.targetYaw = hit ? this.yaw : ((event.clientX - this.canvas.getBoundingClientRect().left) / this.width - .5) * .25;
        if (hit && hit !== this.lock) this.select(hit);
      });
      this.canvas.addEventListener('pointerleave', () => { this.targetYaw = 0; });
      let pointerType = '';
      this.canvas.addEventListener('pointerdown', event => { pointerType = event.pointerType; });
      this.canvas.addEventListener('click', event => {
        const hit = nearest(event);
        if (!hit) return;
        if (hit === this.lock && hit.raw.url && (event.pointerType || pointerType) !== 'touch') this.source.click();
        else this.select(hit, true);
      });
      this.canvas.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          event.preventDefault();
          this.advance(-1);
        } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          event.preventDefault();
          this.advance(1);
        } else if (event.key === 'Enter' && this.lock?.raw.url) {
          event.preventDefault();
          this.source.click();
        }
      });
    }

    resize() {
      this.width = this.stage.clientWidth;
      this.height = this.stage.clientHeight;
      if (!this.width || !this.height) return;
      this.dpr = Math.min(devicePixelRatio || 1, 1.75);
      this.canvas.width = Math.round(this.width * this.dpr);
      this.canvas.height = Math.round(this.height * this.dpr);
      this.radius = Math.min(this.width * .43, this.height * .58);
      this.draw();
    }

    syncMotion() {
      cancelAnimationFrame(this.frameId);
      this.pause.hidden = this.motion.matches;
      this.pause.textContent = this.paused ? 'Resume sweep' : 'Pause sweep';
      this.running = this.visible && !document.hidden && !this.paused && !this.motion.matches;
      if (this.running) {
        this.last = performance.now();
        this.frameId = requestAnimationFrame(this.tick);
      } else {
        this.yaw = this.targetYaw = 0;
        this.draw();
      }
    }

    tick(time) {
      const dt = Math.min(.05, (time - this.last) / 1000);
      this.last = time;
      this.angle = (this.angle + dt * TAU / 12) % TAU;
      this.yaw += (this.targetYaw - this.yaw) * (1 - Math.exp(-dt * 5));
      this.draw();
      this.frameId = requestAnimationFrame(this.tick);
    }

    // Project the two time planes onto glass. Distance on each plane still encodes days.
    project(angle, radius = 1, lower = false) {
      const x = Math.cos(angle + this.yaw) * radius;
      const depth = Math.sin(angle + this.yaw) * radius;
      const scale = 1 + depth * .14;
      return [
        this.width * .5 + x * this.radius * scale,
        this.height * (lower ? .61 : .39) + depth * this.radius * .53 * scale
      ];
    }

    ring(radius, lower, color, dash = []) {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.moveTo(...this.project(0, radius, lower));
      for (let i = 1; i <= 80; i++) ctx.lineTo(...this.project(i * TAU / 80, radius, lower));
      ctx.strokeStyle = color;
      ctx.setLineDash(dash);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    line(from, to, color) {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.moveTo(...from);
      ctx.lineTo(...to);
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    draw() {
      if (!this.ctx || !this.radius) return;
      const { ctx, width, height, dpr } = this;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      for (let i = 0; i < 8; i++) {
        const angle = i * TAU / 8;
        this.line(this.project(angle, 1, true), this.project(angle), '#d5e0d31c');
      }
      for (const lower of [true, false]) {
        this.ring(1, lower, lower ? '#bbc5ba45' : '#cedacd77');
        for (const [, r] of BANDS.slice(1, -1)) this.ring(r, lower, '#bbc5ba33', [2, 4]);
        for (let i = 0; i < this.sectors.length; i++) {
          const a = -Math.PI / 2 + (i - .5) * this.step;
          this.line(this.project(a, .14, lower), this.project(a, 1, lower), '#bbc5ba26');
        }
      }
      for (let i = 0; i < 72; i++) {
        const a = i * TAU / 72;
        this.line(this.project(a), this.project(a, i % 9 === 0 ? 1.055 : 1.023), '#cedacd55');
      }

      ctx.font = MONO;
      ctx.fillStyle = '#b1b7ad';
      BANDS.slice(1).forEach(([days, r]) => {
        const [x, y] = this.project(-.65, r);
        ctx.fillText(days === 365 ? '1Y' : days + 'D', x + 4, y - 3);
      });

      if (!this.motion.matches && !this.paused) {
        const origin = this.project(0, 0);
        for (let i = 12; i > 0; i--) {
          ctx.beginPath();
          ctx.moveTo(...origin);
          ctx.lineTo(...this.project(this.angle - i * .04));
          ctx.lineTo(...this.project(this.angle - (i - 1) * .04));
          ctx.fillStyle = 'rgba(166,232,145,' + (.16 * (1 - i / 13)) + ')';
          ctx.fill();
        }
        this.line(origin, this.project(this.angle), '#a6e891a0');
      }

      for (const lower of [true, false]) {
        for (const item of this.items) {
          if (item.lower !== lower || item === this.lock) continue;
          this.drawSignal(item, this.visibleSignals.has(item));
        }
      }
      if (this.lock) this.drawSignal(this.lock, true);

      const [cx, cy] = this.project(0, 0);
      ctx.fillStyle = WHITE;
      for (let i = 0; i < 8; i++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(i * TAU / 8);
        ctx.fillRect(-.9, -10, 1.8, 5);
        ctx.restore();
      }
      ctx.fillStyle = '#b1b7ad';
      ctx.fillText('TODAY', cx + 13, cy + 4);
    }

    drawSignal(item, visible) {
      const { ctx } = this;
      const [x, y] = this.project(item.angle, item.r, item.lower);
      item.x = x;
      item.y = y;
      const selected = item === this.lock;
      const type = item.raw.type;
      const sweptAngle = (this.angle - item.angle + TAU * 2) % TAU;
      const illuminated = this.running && !item.lower && sweptAngle < .65;
      ctx.globalAlpha = selected ? 1 : visible ? (illuminated ? 1 : item.lower ? .58 : .84) : .16;
      ctx.fillStyle = ctx.strokeStyle = selected || type === 'deadline' ? GREEN : WHITE;
      if (type === 'deadline') ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
      else {
        ctx.beginPath();
        ctx.arc(x, y, type === 'event' ? 3.4 : 2.6, 0, TAU);
        if (type === 'event') ctx.stroke();
        else ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (selected) {
        ctx.setLineDash([2, 4]);
        this.line(this.project(0, 0, item.lower), [x, y], '#a6e89182');
        ctx.setLineDash([]);
        ctx.strokeStyle = GREEN;
        ctx.strokeRect(x - 8.5, y - 8.5, 17, 17);
      }
    }
  }

  async function boot(root) {
    let data;
    try {
      if (root.dataset.src) {
        const response = await fetch(root.dataset.src, { cache: 'no-cache' });
        if (response.ok) data = await response.json();
      }
    } catch {
      // The homepage carries an inline snapshot for offline or failed requests.
    }
    if (!Array.isArray(data?.items) || !data?.sectors?.length) {
      try {
        data = JSON.parse(root.querySelector('script[type="application/json"]').textContent);
      } catch {
        return;
      }
    }
    if (Array.isArray(data?.items) && data?.sectors?.length) new Radar(root, data);
  }

  document.querySelectorAll('[data-lowob-radar]').forEach(boot);
})();
