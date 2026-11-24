/* Mobile-only signal board. Its own flow/layout; desktop 3D radar is unchanged. */
(() => {
  const original = document.querySelector('.lab-hero .lab-radar[data-lowob-radar]');
  const json = original?.querySelector('script[type="application/json"]')?.textContent;
  if (!original || !json) return;
  let data;
  try { data = JSON.parse(json); } catch { return; }
  const all = Array.isArray(data.items) ? data.items.filter(item => item && item.title && item.url) : [];
  if (!all.length) return;

  const mobile = document.createElement('section');
  mobile.className = 'mobile-signal-board';
  mobile.setAttribute('aria-label', 'lowob market radar');
  mobile.innerHTML = `
    <div class="mobile-signal-heading">
      <span>THE RADAR</span><span class="mobile-signal-total"></span>
    </div>
    <div class="mobile-signal-disc" aria-label="Select a signal">
      <div class="mobile-signal-sweep" aria-hidden="true">
        <div class="mobile-signal-center" aria-hidden="true"></div>
      </div>
      <div class="mobile-signal-dots"></div>
    </div>
    <div class="mobile-signal-controls">
      <label class="mobile-signal-select"><span class="mobile-signal-sr">Filter sectors</span><select aria-label="Filter radar sectors"></select></label>
      <button type="button" class="mobile-signal-prev" aria-label="Previous signal">−</button>
      <button type="button" class="mobile-signal-next" aria-label="Next signal">+</button>
      <button type="button" class="mobile-signal-pause" aria-label="Pause radar rotation" aria-pressed="false">Ⅱ</button>
    </div>
    <div class="mobile-signal-readout">
      <div class="mobile-signal-meta"></div>
      <a class="mobile-signal-title"></a>
      <p class="mobile-signal-detail"></p>
    </div>
    <details class="mobile-signal-list">
      <summary>Signal list</summary>
      <ol></ol>
    </details>`;
  original.after(mobile);
  const $ = selector => mobile.querySelector(selector);
  const select = $('select');
  const markers = $('.mobile-signal-dots');
  const total = $('.mobile-signal-total');
  const meta = $('.mobile-signal-meta');
  const title = $('.mobile-signal-title');
  const detail = $('.mobile-signal-detail');
  const list = $('.mobile-signal-list ol');
  const pause = $('.mobile-signal-pause');
  const disc = $('.mobile-signal-disc');
  const sectors = ['All sectors', ...new Set(all.map(item => item.sector).filter(Boolean))];
  for (const sector of sectors) {
    const opt = document.createElement('option');
    opt.value = sector === 'All sectors' ? '' : sector;
    opt.textContent = sector;
    select.append(opt);
  }
  const stamp = (value) => {
    if (!value) return '';
    const d = new Date(value + 'T12:00:00');
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  };
  const validUrl = url => {
    try {
      const u = new URL(url, location.origin);
      return (u.protocol === 'https:' || u.protocol === 'http:') ? u.href : '/research/';
    } catch { return '/research/'; }
  };
  let active = 0, filtered = all, timer = 0, paused = false;
  const dotButtons = new Map();
  all.forEach((item, index) => {
    const dot = document.createElement('button');
    const angle = (index * 137.508 - 90) * Math.PI / 180;
    const radius = 20 + (index % 5) * 5.1;
    dot.type = 'button';
    dot.className = 'mobile-signal-dot';
    // Varied phase and tempo make the markers pulse independently, not in unison.
    dot.style.setProperty('--dot-delay', '-' + ((index * 0.67) % 5.5).toFixed(2) + 's');
    dot.style.setProperty('--dot-duration', (2.25 + (index % 6) * 0.42).toFixed(2) + 's');
    // The once-per-revolution flare lines up with the exact sweep angle.
    const sweepPhase = ((index * 137.508) % 360 + 360) % 360;
    dot.style.setProperty('--scan-delay', ((sweepPhase / 360 - 1) * 13).toFixed(3) + 's');
    dot.style.left = (50 + Math.cos(angle) * radius) + '%';
    dot.style.top = (50 + Math.sin(angle) * radius) + '%';
    dot.setAttribute('aria-label', item.title);
    dot.setAttribute('aria-pressed', 'false');
    dot.addEventListener('click', () => {
      if (select.value && item.sector !== select.value) {
        select.value = '';
        filtered = all;
      }
      active = filtered.indexOf(item);
      paint();
    });
    markers.append(dot);
    dotButtons.set(item, dot);
  });
  const centerMark = document.querySelector('.topbar .lowob-mark');
  if (centerMark) $('.mobile-signal-center').append(centerMark.cloneNode(true));

  function paint() {
    if (!filtered.length) return;
    active = ((active % filtered.length) + filtered.length) % filtered.length;
    const item = filtered[active];
    total.textContent = String(filtered.length).padStart(2, '0') + ' SIGNALS';
    meta.textContent = [item.type || 'research', item.sector, stamp(item.date)].filter(Boolean).join('  ·  ');
    title.textContent = item.title;
    title.href = validUrl(item.url);
    detail.textContent = item.detail || item.excerpt || '';
    dotButtons.forEach((dot, datum) => {
      dot.hidden = !filtered.includes(datum);
      dot.setAttribute('aria-pressed', String(datum === item));
    });
    list.querySelectorAll('button').forEach((btn, index) => btn.setAttribute('aria-current', String(index === active)));
  }
  function buildList() {
    list.replaceChildren();
    filtered.forEach((item, index) => {
      const li = document.createElement('li'), btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = [item.type, item.title].filter(Boolean).join(' · ');
      btn.addEventListener('click', () => {
        active = index;
        paint();
        $('.mobile-signal-list').open = false;
      });
      li.append(btn);
      list.append(li);
    });
  }
  function step(amount) { active += amount; paint(); }
  function cycle() {
    clearInterval(timer);
    if (!paused && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = setInterval(() => { if (!document.hidden && matchMedia('(max-width: 850px)').matches) step(1); }, 7800);
    }
    disc.classList.toggle('is-paused', paused);
    pause.setAttribute('aria-pressed', String(paused));
    pause.setAttribute('aria-label', paused ? 'Resume radar rotation' : 'Pause radar rotation');
    pause.textContent = paused ? '▶' : 'Ⅱ';
  }
  select.addEventListener('change', () => {
    filtered = select.value ? all.filter(item => item.sector === select.value) : all;
    active = 0;
    buildList(); paint();
  });
  $('.mobile-signal-prev').addEventListener('click', () => step(-1));
  $('.mobile-signal-next').addEventListener('click', () => step(1));
  pause.addEventListener('click', () => { paused = !paused; cycle(); });
  buildList();
  paint();
  cycle();
  document.documentElement.classList.add('mobile-signal-ready');
})();
