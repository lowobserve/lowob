const DAY = 86_400_000;
const TURN = Math.PI * 2;
const BANDS = [[0, .14], [7, .27], [30, .49], [90, .76], [365, 1]];
const TYPES = { deadline: 'Deadline', event: 'Event', research: 'Research', signal: 'Signal' };
const dateLabel = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
});

function radius(days) {
  const range = Math.abs(days);
  const index = BANDS.findIndex(([limit]) => limit >= range);
  if (index < 0) return .99;
  if (index === 0) return BANDS[0][1];
  const [start, inner] = BANDS[index - 1];
  const [end, outer] = BANDS[index];
  return inner + (outer - inner) * (range - start) / (end - start);
}

function spread(id) {
  let hash = 2166136261;
  for (const char of id) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return (hash >>> 0) / 4294967295 - .5;
}

function describeDate({ raw, date, days }) {
  const formatted = dateLabel.format(date);
  if (raw.type === 'research') return 'Published ' + formatted;
  if (days === 0) return 'Today · ' + formatted;
  if (days === 1) return 'Tomorrow · ' + formatted;
  return 'In ' + days + ' days · ' + formatted;
}

function getSignals(data) {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const step = TURN / data.sectors.length;

  return data.items.flatMap(raw => {
    const sector = data.sectors.indexOf(raw.sector);
    const date = new Date(raw.date + 'T00:00:00Z');
    const days = (date.getTime() - today) / DAY;
    if (sector < 0 || !Number.isFinite(days) || (raw.type !== 'research' && days < 0)) return [];
    const angle = -Math.PI / 2 + step * (sector + spread(raw.id) * .76);
    const distance = Number.isInteger(raw.featuredOrder) ? .31 + (spread(raw.id) + .5) * .57 : radius(days);
    return [{
      raw, date, days, x: Math.cos(angle) * distance, y: Math.sin(angle) * distance,
      element: null
    }];
  }).sort((first, second) => (first.raw.featuredOrder ?? 999) - (second.raw.featuredOrder ?? 999));
}

export function connectRadar(root) {
  const find = key => root.querySelector('[data-' + key + ']');
  const aperture = find('aperture');
  const controls = find('radar-controls');
  const targets = find('radar-targets');
  const fallback = find('radar-fallback');
  const sectors = find('sector');
  const count = find('signal-count');
  const title = find('readout-title');
  const meta = find('readout-meta');
  const detail = find('readout-detail');
  const status = find('radar-status');
  const pause = find('pause');
  const directory = find('signal-list');
  const steppers = [...root.querySelectorAll('[data-step]')];
  const state = { paused: false, comparing: false };
  let signals = [];
  let shown = [];
  let active = null;
  let project = null;

  function select(signal, announce) {
    active?.element.classList.remove('is-selected');
    active = signal;
    active?.element.classList.add('is-selected');
    const { raw } = signal ?? {};
    title.textContent = raw?.title ?? 'Nothing on the radar here yet.';
    meta.textContent = raw ? (TYPES[raw.type] ?? 'Signal') + ' · ' + raw.sector : '';
    detail.textContent = raw ? [raw.detail, describeDate(signal)].filter(Boolean).join(' · ') : '';
    if (raw?.url) title.href = raw.url;
    else title.removeAttribute('href');
    if (announce) status.textContent = [meta.textContent, title.textContent, detail.textContent].join('. ');
  }

  function applyFilter(preferredId, announce) {
    shown = sectors.value ? signals.filter(signal => signal.raw.sector === sectors.value) : signals;
    const visible = new Set(shown);
    signals.forEach(signal => { signal.element.hidden = !visible.has(signal); });
    steppers.forEach(stepper => { stepper.disabled = shown.length < 2; });
    count.textContent = shown.length + (shown.length === 1 ? ' signal' : ' signals');
    directory.replaceChildren(...shown.map(signal => {
      const { raw } = signal;
      const li = document.createElement('li');
      const label = document.createElement(raw.url ? 'a' : 'span');
      label.textContent = raw.title;
      if (raw.url) label.href = raw.url;
      const metadata = document.createElement('small');
      metadata.textContent = (TYPES[raw.type] ?? 'Signal') + ' · ' + raw.sector + ' · ' + describeDate(signal);
      li.append(label, metadata);
      return li;
    }));
    select(shown.find(signal => signal.raw.id === preferredId) ?? shown[0], announce);
    positionSignals();
  }

  function advance(step) {
    if (!shown.length) return;
    const index = shown.indexOf(active);
    select(shown[(index + step + shown.length) % shown.length], true);
  }

  function positionSignals(nextProject = project) {
    project = nextProject;
    if (project) {
      for (const signal of shown) {
        const [x, y] = project(signal);
        signal.element.style.left = x + 'px';
        signal.element.style.top = y + 'px';
      }
      return;
    }

    const width = aperture.clientWidth;
    const height = aperture.clientHeight;
    const diameter = Math.min(width * .955, height * .97);
    aperture.style.setProperty('--aperture-diameter', diameter + 'px');
    const radius = diameter * (state.comparing ? .45 : 1) * .484;
    for (const signal of shown) {
      const layerOffset = state.comparing ? (signal.days < 0 ? .255 : -.255) * diameter : 0;
      signal.element.style.left = width / 2 + layerOffset + signal.x * radius + 'px';
      signal.element.style.top = height / 2 + signal.y * radius + 'px';
    }
  }

  function setData(data) {
    const preferredSector = sectors.value;
    const preferredId = active?.raw.id;
    signals = getSignals(data);
    active = null;
    sectors.replaceChildren(new Option('All sectors', ''), ...data.sectors.map(sector => new Option(sector, sector)));
    if (data.sectors.includes(preferredSector)) sectors.value = preferredSector;
    targets.replaceChildren(...signals.map(signal => {
      const dot = document.createElement('span');
      dot.className = 'lab-signal';
      dot.dataset.type = signal.raw.type;
      dot.addEventListener('pointerenter', event => {
        if (event.pointerType === 'mouse') select(signal, false);
      });
      dot.addEventListener('click', () => select(signal, true));
      signal.element = dot;
      return dot;
    }));
    controls.hidden = false;
    fallback.hidden = true;
    applyFilter(preferredId, false);
  }

  const isValid = data => Array.isArray(data?.items) && Array.isArray(data?.sectors) && data.sectors.length > 0;

  try {
    const inline = JSON.parse(root.querySelector('script[type="application/json"]').textContent);
    if (isValid(inline)) setData(inline);
  } catch {
    // Keep the browse link in place until a valid feed arrives.
  }
  fetch(root.dataset.src, { cache: 'no-cache' })
    .then(response => response.ok ? response.json() : null)
    .then(data => { if (isValid(data)) setData(data); })
    .catch(() => { /* The embedded snapshot remains available offline. */ });

  sectors.addEventListener('change', () => applyFilter(null, true));
  steppers.forEach(stepper => stepper.addEventListener('click', () => advance(Number(stepper.dataset.step))));
  pause.addEventListener('click', () => {
    state.paused = !state.paused;
    pause.setAttribute('aria-pressed', String(state.paused));
    pause.setAttribute('aria-label', state.paused ? 'Resume radar sweep' : 'Pause radar sweep');
  });
  root.addEventListener('keydown', event => {
    if (!event.target.matches('[data-step], [data-readout-title]')) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    advance(event.key === 'ArrowLeft' ? -1 : 1);
  });

  if ('ResizeObserver' in window) new ResizeObserver(() => positionSignals()).observe(aperture);
  else window.addEventListener('resize', () => positionSignals());

  return { state, pause, positionSignals };
}
