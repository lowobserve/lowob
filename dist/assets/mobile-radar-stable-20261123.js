/* Mobile radar: the original desktop Three.js instrument, fitted to a responsive
   disc. CSS fallback is retained for mobile browsers without usable WebGL.
   The same sweep angle drives the instrument, logo, and actual dot selection. */
(() => {
  const original = document.querySelector('.lab-hero .lab-radar[data-lowob-radar]');
  const json = original?.querySelector('script[type="application/json"]')?.textContent;
  if (!original || !json) return;
  let data;
  try { data = JSON.parse(json); } catch { return; }
  const all = (Array.isArray(data.items) ? data.items : [])
    .filter(item => item && item.id && item.title && item.url);
  if (!all.length) return;

  const mobile = document.createElement('section');
  mobile.className = 'mobile-signal-board';
  mobile.setAttribute('aria-label', 'lowob market radar');
  mobile.innerHTML = [
    '<div class="mobile-signal-heading"><span>THE RADAR</span><span class="mobile-signal-total"></span></div>',
    '<div class="mobile-signal-disc" aria-label="Select a signal">',
      '<div class="mobile-signal-sweep" aria-hidden="true"><div class="mobile-signal-center"></div></div>',
      '<div class="mobile-signal-dots"></div>',
    '</div>',
    '<div class="mobile-signal-controls">',
      '<label class="mobile-signal-select"><span class="mobile-signal-sr">Filter sectors</span><select aria-label="Filter radar sectors"></select></label>',
      '<button type="button" class="mobile-signal-prev" aria-label="Previous signal">−</button>',
      '<button type="button" class="mobile-signal-next" aria-label="Next signal">+</button>',
      '<button type="button" class="mobile-signal-pause" aria-label="Pause radar rotation" aria-pressed="false">Ⅱ</button>',
    '</div>',
    '<div class="mobile-signal-readout">',
      '<div class="mobile-signal-meta"></div><a class="mobile-signal-title"></a><p class="mobile-signal-detail"></p>',
    '</div>',
    '<details class="mobile-signal-list"><summary>Signal list</summary><ol></ol></details>'
  ].join('');
  original.after(mobile);
  const $ = selector => mobile.querySelector(selector);
  const disc = $('.mobile-signal-disc');
  const sweepEl = $('.mobile-signal-sweep');
  const dotsEl = $('.mobile-signal-dots');
  const select = $('select');
  const total = $('.mobile-signal-total');
  const meta = $('.mobile-signal-meta');
  const title = $('.mobile-signal-title');
  const detail = $('.mobile-signal-detail');
  const list = $('.mobile-signal-list ol');
  const pauseButton = $('.mobile-signal-pause');
  const centerMark = document.querySelector('.topbar .lowob-mark');
  if (centerMark) $('.mobile-signal-center').append(centerMark.cloneNode(true));

  const TAU = Math.PI * 2;
  const REVOLUTION_MS = 13000;
  const sectors = Array.isArray(data.sectors) && data.sectors.length
    ? data.sectors : [...new Set(all.map(item => item.sector))];
  const sectorAngle = TAU / Math.max(sectors.length, 1);
  const nowDate = new Date();
  const startOfToday = Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
  const mod = value => ((value % TAU) + TAU) % TAU;
  const hash = string => {
    let value = 2166136261;
    for (const ch of string) value = Math.imul(value ^ ch.charCodeAt(0), 16777619);
    return (value >>> 0) / 4294967295 - 0.5;
  };
  const dayRadius = days => {
    const points = [[0,.14],[7,.27],[30,.49],[90,.76],[365,1]];
    const absolute = Math.abs(days);
    for(let i=1;i<points.length;i++) {
      if (absolute<=points[i][0]) {
        const [a,r1] = points[i-1], [b,r2] = points[i];
        return r1 + (r2-r1)*(absolute-a)/(b-a);
      }
    }
    return .99;
  };
  const records = all.map((item,index) => {
    const sector = Math.max(0, sectors.indexOf(item.sector));
    const days = (new Date(item.date + 'T00:00:00Z').getTime() - startOfToday) / 86400000;
    const noise = hash(String(item.id));
    // Reproduce the live desktop's sector wedges and radial positioning.
    const angle = -Math.PI / 2 + sectorAngle * (sector + noise * .76);
    const radius = Number.isInteger(item.featuredOrder)
      ? .31 + (noise + .5) * .57 : dayRadius(Number.isFinite(days)?days:0);
    return {item,index,x:Math.cos(angle)*radius,y:Math.sin(angle)*radius,
      days:Number.isFinite(days)?days:0,button:null,clockAngle:mod(angle),flashTimeout:0};
  });
  const byItem = new Map(records.map(record => [record.item,record]));

  const filters = ['All sectors', ...new Set(all.map(item => item.sector).filter(Boolean))];
  for (const name of filters) {
    const opt = document.createElement('option');
    opt.value = name==='All sectors' ? '' : name;
    opt.textContent = name;
    select.append(opt);
  }
  const stamp = value => {
    const date = new Date(value + 'T12:00:00');
    return Number.isNaN(date.getTime()) ? '' :
      date.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  };
  const validUrl = value => {
    try {
      const url = new URL(value,location.origin);
      return url.protocol==='https:' || url.protocol==='http:' ? url.href : '/research/';
    } catch { return '/research/'; }
  };

  let filtered = all, active = 0, paused = false;
  let renderer = null, visible = true, phase = 0, lastFrame = 0, lastChosen = 0;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const motionEnabled = () => !paused && !reduced.matches && visible && !document.hidden;
  const recordForActive = () => byItem.get(filtered[active]);

  for (const record of records) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'mobile-signal-dot';
    dot.dataset.type = record.item.type || 'research';
    dot.setAttribute('aria-label',record.item.title);
    dot.setAttribute('aria-pressed','false');
    dot.style.setProperty('--dot-delay',(-((record.index*.83)%6.2)).toFixed(2)+'s');
    dot.style.setProperty('--dot-duration',(4.0+(record.index%5)*.66).toFixed(2)+'s');
    const glow = document.createElement('span');
    glow.className = 'mobile-signal-glow';
    glow.setAttribute('aria-hidden','true');
    dot.append(glow);
    dot.addEventListener('click', () => {
      if (select.value && record.item.sector !== select.value) {
        select.value = '';
        filtered = all;
        buildList();
      }
      active = filtered.indexOf(record.item);
      lastChosen = performance.now();
      paint();
      flash(record);
    });
    dotsEl.append(dot);
    record.button = dot;
  }

  function paint() {
    if (!filtered.length) return;
    active = ((active%filtered.length)+filtered.length)%filtered.length;
    const item = filtered[active];
    total.textContent = String(filtered.length).padStart(2,'0')+' SIGNALS';
    meta.textContent = [item.type || 'research',item.sector,stamp(item.date)].filter(Boolean).join(' · ');
    title.textContent = item.title;
    title.href = validUrl(item.url);
    detail.textContent = item.detail || item.excerpt || '';
    for (const record of records) {
      record.button.hidden = !filtered.includes(record.item);
      record.button.setAttribute('aria-pressed',String(record.item===item));
    }
    list.querySelectorAll('button').forEach((button,index) => {
      button.setAttribute('aria-current',String(index===active));
    });
  }
  function buildList() {
    list.replaceChildren();
    filtered.forEach((item,index) => {
      const li=document.createElement('li'),button=document.createElement('button');
      button.type='button';
      button.textContent=[item.type,item.title].filter(Boolean).join(' · ');
      button.addEventListener('click',()=>{
        active=index;
        lastChosen=performance.now();
        paint();
        flash(byItem.get(item));
        $('.mobile-signal-list').open=false;
      });
      li.append(button);list.append(li);
    });
  }
  function flash(record) {
    if (!record || record.button.hidden) return;
    clearTimeout(record.flashTimeout);
    record.button.classList.remove('is-hit');
    // Trigger the same short white flare on each genuine sweep crossing.
    void record.button.offsetWidth;
    record.button.classList.add('is-hit');
    record.flashTimeout = setTimeout(()=>record.button.classList.remove('is-hit'),650);
  }
  function step(amount) {
    active += amount;
    lastChosen = performance.now();
    paint();
    flash(recordForActive());
  }
  function positionDots() {
    const w=disc.clientWidth,h=disc.clientHeight;
    for (const record of records) {
      let x=w*(.5+record.x*.484), y=h*(.5+record.y*.484);
      if (renderer) {
        try {
          const projected=renderer.project(record);
          if (projected.every(Number.isFinite)) [x,y]=projected;
        } catch {}
      }
      record.button.style.left=x+'px';
      record.button.style.top=y+'px';
      record.clockAngle=mod(Math.atan2(y-h/2,x-w/2));
    }
  }
  function draw() {
    const shaderSweep=-phase;
    // Desktop's shader and mark share the same phase and rotation convention.
    sweepEl.style.transform='rotate('+(Math.PI/2+phase)+'rad)';
    if (renderer) {
      renderer.render({build:1,dock:1,travel:0,sweep:shaderSweep,
        compare:0,detailOpacity:1,markOpacity:0,dirty:true});
    }
  }
  function frame(timestamp) {
    const dt=lastFrame ? Math.min(80,Math.max(0,timestamp-lastFrame)) : 0;
    lastFrame=timestamp;
    if (motionEnabled()) {
      const previous=phase;
      phase=mod(phase+dt*TAU/REVOLUTION_MS);
      const stepAngle=mod(phase-previous);
      for (const record of records) {
        if (!filtered.includes(record.item)) continue;
        if (mod(record.clockAngle-previous)<=stepAngle && stepAngle>0) {
          flash(record);
          // Select ONLY on an actual geometric pass, not on a timer.
          if (timestamp-lastChosen>1150 &&
              (Math.random()<.52 || timestamp-lastChosen>4100)) {
            active=filtered.indexOf(record.item);
            lastChosen=timestamp;
            paint();
          }
        }
      }
      draw();
    }
    requestAnimationFrame(frame);
  }
  function updatePause() {
    disc.classList.toggle('is-paused',paused || reduced.matches);
    pauseButton.setAttribute('aria-pressed',String(paused));
    pauseButton.setAttribute('aria-label',paused?'Resume radar rotation':'Pause radar rotation');
    pauseButton.textContent=paused?'▶':'Ⅱ';
    draw();
  }

  select.addEventListener('change',()=>{
    filtered=select.value?all.filter(item=>item.sector===select.value):all;
    active=0;lastChosen=performance.now();
    buildList();paint();
  });
  $('.mobile-signal-prev').addEventListener('click',()=>step(-1));
  $('.mobile-signal-next').addEventListener('click',()=>step(1));
  pauseButton.addEventListener('click',()=>{paused=!paused;updatePause();});
  reduced.addEventListener?.('change',updatePause);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting ?? true;},
      {threshold:.01}).observe(disc);
  }

  buildList();paint();positionDots();updatePause();
  document.documentElement.classList.add('mobile-signal-ready');
  requestAnimationFrame(frame);

  // Reuse the EXACT same visual instrument module as the current desktop.
  // If WebGL is unavailable, the CSS rendering/interaction remains functional.
  import('/assets/visual-lab/instrument-6GB2R6NB.js?v=neon-green-20261123')
    .then(({mountInstrument})=>{
      if (!mobile.isConnected || !matchMedia('(max-width: 850px)').matches) return;
      try {
        renderer=mountInstrument({mount:disc,aperture:disc,pinned:false});
        renderer.canvas.classList.add('mobile-radar-desktop-canvas');
        disc.classList.add('has-desktop-renderer');
        renderer.measure();draw();positionDots();
      } catch(error) {
        try {renderer?.dispose();} catch {}
        renderer=null;
        disc.classList.remove('has-desktop-renderer');
        console.warn('Mobile radar using CSS fallback',error);
      }
    })
    .catch(()=>{});
  if ('ResizeObserver' in window) {
    new ResizeObserver(()=>{
      if (renderer) renderer.measure();
      draw();positionDots();
    }).observe(disc);
  } else window.addEventListener('resize',()=>{
    if (renderer) renderer.measure();
    draw();positionDots();
  },{passive:true});
})();