/* GROUND CONTROL / 2027 — refreshes the homepage board from /assets/gc-2027.json.
   No dependencies. If the JSON can't be read, the HTML fallback stays and only the
   day counts are worked out. The form itself is still handled by ground-control-entry.js. */
(function () {
  var root = document.querySelector('.gc27');
  if (!root) return;

  var DATA_URL = '/assets/gc-2027.json';
  var SHOW_GATES = 4;
  var SOON_DAYS = 30;
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function $(sel) { return root.querySelector('[data-gc27="' + sel + '"]'); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function parse(iso) { var p = iso.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function today() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function daysLeft(iso) { return Math.round((parse(iso) - today()) / 86400000); }
  function fmt(iso) { var d = parse(iso); return ('0' + d.getDate()).slice(-2) + ' ' + MONTHS[d.getMonth()]; }
  function fmtLong(iso) { var d = parse(iso); return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear(); }

  // Day counts; drop anything already closed.
  function tick() {
    var rows = root.querySelectorAll('.gc27-gates li[data-date]');
    var shown = 0;
    for (var i = 0; i < rows.length; i++) {
      var n = daysLeft(rows[i].getAttribute('data-date'));
      var el = rows[i].querySelector('.gc27-days');
      if (n < 0 || shown >= SHOW_GATES) { rows[i].hidden = true; continue; }
      shown++;
      el.textContent = n === 0 ? 'Closes today' : n === 1 ? '1 day' : n + ' days';
      el.classList.toggle('is-soon', n <= SOON_DAYS);
    }
    var list = $('closing');
    if (list && shown === 0) list.innerHTML = '<li><span class="gc27-gate">New dates are being checked. The next letter has them.</span></li>';
  }

  function render(d) {
    if (d.lastVerified && $('verified')) $('verified').textContent = 'Last verified ' + fmtLong(d.lastVerified);

    if (d.closing && d.closing.length && $('closing')) {
      $('closing').innerHTML = d.closing.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; }).map(function (g) {
        return '<li data-date="' + esc(g.date) + '"><time datetime="' + esc(g.date) + '">' + fmt(g.date) + '</time>' +
          '<span class="gc27-gate"><b>' + esc(g.name) + '</b> ' + esc(g.gate) + '</span><span class="gc27-days"></span></li>';
      }).join('');
    }

    if (d.findings && d.findings.length && $('findings')) {
      $('findings').innerHTML = d.findings.slice(0, 3).map(function (f) {
        return '<li><a href="' + esc(f.url) + '"><span class="gc27-tag">' + esc(f.tag) + '</span><b>' + esc(f.title) + '</b><span>' + esc(f.body) + '</span></a></li>';
      }).join('');
    }

    if (d.forecast) {
      if (d.forecast.body && $('forecast')) $('forecast').textContent = d.forecast.body;
      if (d.forecast.markets && $('markets')) $('markets').textContent = d.forecast.markets.join(' · ');
    }

    if (d.allDatesUrl && $('all-dates')) $('all-dates').setAttribute('href', d.allDatesUrl);
  }

  // Hide "See every date" until the Ground Control page is actually live.
  function checkAllDates() {
    var a = $('all-dates');
    if (!a || !window.fetch) return;
    fetch(a.getAttribute('href'), { method: 'HEAD' }).then(function (r) { if (!r.ok) a.hidden = true; }).catch(function () { a.hidden = true; });
  }

  // Send the chosen markets as one readable field as well (Formspree keeps the last of repeated names).
  var form = document.getElementById('gc-beta-form');
  if (form) {
    var joined = document.createElement('input');
    joined.type = 'hidden'; joined.name = 'markets_selected';
    form.appendChild(joined);
    form.addEventListener('submit', function () {
      var picks = form.querySelectorAll('.gc27-markets input:checked');
      joined.value = Array.prototype.map.call(picks, function (p) { return p.value; }).join(', ') || 'none';
    }, true);
  }

  tick();
  checkAllDates();
  if (window.fetch) {
    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw r; return r.json(); })
      .then(function (d) { render(d); tick(); checkAllDates(); })
      .catch(function () { /* keep the HTML fallback */ });
  }
})();