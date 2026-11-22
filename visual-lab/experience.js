import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { connectRadar } from './radar.js';
import { commercialScore } from './score.js';
import { typeLines } from './type-lines.js';

gsap.registerPlugin(ScrollTrigger);

const MOTION = '(prefers-reduced-motion: no-preference)';
const WIDE = '(min-width: 851px) and (min-height: 680px)';
const MAX_TRAVEL = 4.36;
const stops = [1.06, 2.00, 2.94, 3.88];
const limit = gsap.utils.clamp(0, 1);
const firstChapter = stops[0];
const chapterStep = stops[1] - firstChapter;
const motion = gsap.matchMedia();

function sessionHasIntro() {
  try { return sessionStorage.getItem('lowob-signal-intro') === 'seen'; }
  catch { return false; }
}

function rememberIntro() {
  try { sessionStorage.setItem('lowob-signal-intro', 'seen'); }
  catch { /* Session storage is optional. */ }
}

function releaseLoading() {
  delete document.documentElement.dataset.labLoading;
}

function buildDeck(frame, state) {
  const hero = frame.querySelector('[data-hero]');
  const deck = frame.querySelector('[data-deck]');
  const film = frame.querySelector('[data-film]');
  const title = deck.querySelector('h2');
  const enter = hero.querySelector('[data-enter-deck]');
  const tabs = [...deck.querySelectorAll('.lab-slat-tab')];
  const chapters = tabs.map(tab => tab.closest('[data-slat]'));
  const copies = chapters.map(chapter => chapter.querySelector('.lab-slat-copy'));
  const radarContents = [...hero.querySelectorAll('.lab-radar-logo, [data-radar-targets]')];
  // Fade out static copy and controls before the independently rendered radar travels.
  const retiringContent = [
    hero.querySelector('.lab-hero-copy'),
    hero.querySelector('.lab-radar-ui'),
    hero.querySelector('.lab-hero-foot')
  ];
  const positioned = { chapter: -1, focusDeck: false };
  let scene;
  let reveal;
  let transition;

  function selectChapter(index) {
    if (positioned.chapter === index) return;
    positioned.chapter = index;
    for (const [i, chapter] of chapters.entries()) {
      const isActive = i === index;
      chapter.classList.toggle('is-active', isActive);
      tabs[i].setAttribute('aria-expanded', String(isActive));
      copies[i].inert = !isActive;
    }
    reveal?.kill();
    gsap.set(copies, { clearProps: 'opacity,transform' });
    reveal = gsap.fromTo(copies[index], { opacity: 0, x: 18, y: 5 }, {
      opacity: 1, x: 0, y: 0, duration: .6, delay: .1, ease: 'power2.out',
      clearProps: 'opacity,transform'
    });
  }

  function update() {
    const phase = state.travel;
    const heroOpacity = 1 - limit((phase - .12) / .63);
    // The dial completes its movement at travel=.98. Keep the destination
    // completely clear until then, rather than cross-fading behind the dial.
    const systemOpacity = limit((phase - .98) / .08);
    const deckActive = phase >= 1.02;
    const heroActive = heroOpacity > .45;
    gsap.set(hero, { autoAlpha: heroOpacity });
    gsap.set(retiringContent, { autoAlpha: 1 - limit((phase - .02) / .22) });
    // The transparent WebGL surface needs an opaque backing while the radar
    // crosses between page compositions. Otherwise text ghosts through it.
    const handoff = phase > .18 && phase < 1.12;
    const maskIn = limit((phase - .18) / .10);
    const maskOut = 1 - limit((phase - .98) / .12);
    frame.classList.toggle('is-handoff', handoff);
    film.style.setProperty('--lab-handoff-mask', String(maskIn * maskOut));
    // Fade the radar's contents gradually before the header completes its transition.
    // Keep the WebGL dial and the surrounding header animation unchanged.
    gsap.set(radarContents, { opacity: 1 - limit((phase - .02) / .73) });
    gsap.set(deck, { autoAlpha: systemOpacity });
    hero.classList.toggle('is-visible', heroActive);
    deck.classList.toggle('is-visible', deckActive);
    hero.inert = !heroActive;
    deck.inert = !deckActive;
    if (deckActive && positioned.focusDeck) {
      positioned.focusDeck = false;
      title.focus({ preventScroll: true });
    }
    selectChapter(Math.min(3, Math.max(0, Math.round((phase - firstChapter) / chapterStep))));
    state.dirty = true;
  }

  function goTo(index, behavior = 'smooth') {
    if (!scene) return;
    const ratio = stops[index] / MAX_TRAVEL;
    window.scrollTo({ top: scene.start + (scene.end - scene.start) * ratio, behavior });
  }

  function scrollToDeck(event) {
    event.preventDefault();
    positioned.focusDeck = event.detail === 0;
    if (location.hash !== '#services') history.pushState(null, '', '#services');
    goTo(0);
  }

  function tabAction(event) {
    goTo(tabs.indexOf(event.currentTarget));
  }

  frame.classList.add('is-pinned');
  tabs.forEach(tab => {
    tab.hidden = false;
    tab.addEventListener('click', tabAction);
  });
  title.tabIndex = -1;
  enter.addEventListener('click', scrollToDeck);
  update();

  const topbar = document.querySelector('.topbar');
  transition = gsap.to(state, {
    travel: MAX_TRAVEL, ease: 'none', onUpdate: update,
    scrollTrigger: {
      trigger: frame,
      start: () => 'top top+=' + (topbar?.offsetHeight ?? 0),
      end: () => '+=' + Math.round(frame.clientHeight * 4.25),
      pin: true,
      pinSpacing: true,
      scrub: .63,
      invalidateOnRefresh: true,
      onRefresh: () => { state.dirty = true; }
    }
  });
  scene = transition.scrollTrigger;
  let deepLink = 0;
  if (location.hash === '#services') {
    deepLink = requestAnimationFrame(() => goTo(0, 'instant'));
  }

  return () => {
    cancelAnimationFrame(deepLink);
    enter.removeEventListener('click', scrollToDeck);
    tabs.forEach(tab => {
      tab.hidden = true;
      tab.setAttribute('aria-expanded', 'false');
      tab.removeEventListener('click', tabAction);
    });
    scene.kill();
    transition.kill();
    reveal?.kill();
    gsap.set([hero, deck, ...copies], { clearProps: 'opacity,visibility,transform' });
    gsap.set(radarContents, { clearProps: 'opacity' });
    gsap.set(retiringContent, { clearProps: 'opacity,visibility' });
    frame.classList.remove('is-handoff');
    film.style.removeProperty('--lab-handoff-mask');
    frame.classList.remove('is-pinned');
    hero.inert = deck.inert = false;
    hero.classList.remove('is-visible');
    deck.classList.remove('is-visible');
    title.removeAttribute('tabindex');
    chapters.forEach(chapter => chapter.classList.remove('is-active'));
    copies.forEach(copy => { copy.inert = false; });
  };
}

function runIntro(frame, state, paint) {
  const blackout = frame.querySelector('[data-blackout]');
  const skip = blackout.querySelector('[data-skip]');
  const topbar = document.querySelector('.topbar');
  const lines = [...frame.querySelectorAll('.lab-hero h1 > span > *')];
  const parts = [...frame.querySelectorAll('[data-hero-secondary], [data-radar-targets]')];
  const focusBefore = document.activeElement;
  let intro;

  const finish = () => {
    if (intro) intro.kill();
    state.build = state.dock = 1;
    gsap.set([topbar, ...lines, ...parts], { clearProps: 'opacity,visibility,transform' });
    blackout.hidden = true;
    skip.removeEventListener('click', finish);
    window.removeEventListener('wheel', finish);
    window.removeEventListener('touchmove', finish);
    window.removeEventListener('keydown', interrupt);
    if (document.activeElement === skip) focusBefore?.focus({ preventScroll: true });
    paint();
  };

  function interrupt(event) {
    if (event.key === 'Escape' || event.key === 'Tab' || event.key === 'PageDown') finish();
  }

  rememberIntro();
  state.build = 0;
  state.dock = 0;
  blackout.hidden = false;
  gsap.set([topbar, ...parts], { autoAlpha: 0 });
  gsap.set(lines, { autoAlpha: 0, yPercent: 109 });
  intro = gsap.timeline({ onComplete: finish });
  intro.to(state, { build: 1, duration: 1.50, ease: 'power3.inOut', onUpdate: paint }, .07);
  intro.to(state, { dock: 1, duration: 1.12, ease: 'power4.inOut', onUpdate: paint }, .71);
  intro.to(topbar, { autoAlpha: 1, duration: .30 }, 1.21);
  intro.to(lines, { yPercent: 0, autoAlpha: 1, duration: .82, stagger: .10, ease: 'expo.out' }, 1.23);
  intro.to(parts, { autoAlpha: 1, duration: .52, stagger: .047, ease: 'power2.out' }, 1.49);
  skip.addEventListener('click', finish);
  window.addEventListener('wheel', finish, { passive: true });
  window.addEventListener('touchmove', finish, { passive: true });
  window.addEventListener('keydown', interrupt);
  paint();
  releaseLoading();
  return finish;
}

function setEditorialMotion() {
  const heads = gsap.utils.toArray('.news-strip h2, .research-showcase h2, .closing-layout h2');
  heads.forEach(heading => {
    gsap.from(heading, {
      y: 30, clipPath: 'inset(0 0 100% 0)', duration: .88, ease: 'power3.out',
      clearProps: 'clipPath,transform',
      scrollTrigger: { trigger: heading, start: 'top 94%', once: true }
    });
  });

  const link = document.querySelector('.closing-layout > a');
  if (!link) return;
  let stop;
  const trigger = ScrollTrigger.create({
    trigger: link,
    start: 'top 91%',
    once: true,
    onEnter: () => { stop = typeLines([link]); }
  });
  return () => {
    trigger.kill();
    stop?.();
  };
}

function activateHome(frame) {
  const radar = connectRadar(frame.querySelector('[data-lowob-radar]'));
  const aperture = frame.querySelector('[data-aperture]');
  const film = frame.querySelector('[data-film]');
  const bench = frame.querySelector('[data-instrument]');
  radar.pause.hidden = true;

  motion.add({ animated: MOTION, pinned: WIDE }, context => {
    const { animated, pinned } = context.conditions;
    if (!animated) {
      releaseLoading();
      return;
    }

    const state = {
      build: 1, dock: 1, travel: 0, sweep: -.82, compare: 0, dirty: true
    };
    const settleDeck = pinned ? buildDeck(frame, state) : null;
    const settleEditorial = setEditorialMotion();
    let instrument;
    let introFinished;
    let sizeObserver;
    let visibilityObserver;
    let visible = true;
    let active = true;
    let ticking = false;

    function paint() {
      if (!instrument) return;
      instrument.render(state);
      if (state.travel < .79) radar.positionSignals(instrument.project);
    }

    function tick(_time, delta) {
      if (!instrument || document.hidden) return;
      const sweep = state.travel < .83 && !radar.state.paused;
      const compare = Number(radar.state.comparing);
      const changing = Math.abs(compare - state.compare) > .0005;
      if (!state.dirty && !sweep && !changing) return;
      state.dirty = false;
      state.compare += (compare - state.compare) * .12;
      if (sweep) state.sweep = (state.sweep - Math.min(delta, 40) * .00038 + Math.PI * 2) % (Math.PI * 2);
      paint();
    }

    function syncTicker() {
      const shouldRun = Boolean(instrument && visible && !document.hidden);
      if (shouldRun === ticking) return;
      ticking = shouldRun;
      if (ticking) gsap.ticker.add(tick);
      else gsap.ticker.remove(tick);
    }

    function resize() {
      instrument?.measure();
      state.dirty = true;
      paint();
    }

    function loseInstrument() {
      introFinished?.();
      introFinished = null;
      sizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      window.removeEventListener('resize', resize);
      ScrollTrigger.removeEventListener('refresh', resize);
      document.removeEventListener('visibilitychange', syncTicker);
      instrument?.dispose();
      instrument = null;
      syncTicker();
      radar.pause.hidden = true;
      radar.positionSignals(null);
      delete frame.dataset.webglRadar;
      delete frame.dataset.webglDeck;
    }

    context.add('attachInstrument', mountInstrument => {
      const target = pinned ? film : aperture;
      const preview = mountInstrument({ mount: target, aperture, bench, pinned });
      instrument = preview;
      preview.canvas.addEventListener('webglcontextlost', loseInstrument, { once: true });
      paint();
      frame.dataset.webglRadar = '';
      if (pinned) frame.dataset.webglDeck = '';
      radar.pause.hidden = false;

      if ('ResizeObserver' in window) {
        sizeObserver = new ResizeObserver(resize);
        sizeObserver.observe(target);
        if (pinned) {
          sizeObserver.observe(aperture);
          sizeObserver.observe(bench);
        }
      } else window.addEventListener('resize', resize);

      if ('IntersectionObserver' in window) {
        visibilityObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          syncTicker();
        });
        visibilityObserver.observe(pinned ? frame : aperture);
      }

      ScrollTrigger.addEventListener('refresh', resize);
      document.addEventListener('visibilitychange', syncTicker);
      syncTicker();
      const mayPlay = pinned && state.travel < .04 && window.scrollY < 12 &&
        !location.hash && !sessionHasIntro() && document.documentElement.hasAttribute('data-lab-loading');
      if (mayPlay) introFinished = runIntro(frame, state, paint);
      releaseLoading();
    });

    import('./instrument.js').then(({ mountInstrument }) => {
      if (!active) return;
      try { context.attachInstrument(mountInstrument); }
      catch { loseInstrument(); releaseLoading(); }
    }).catch(releaseLoading);

    return () => {
      active = false;
      loseInstrument();
      settleDeck?.();
      settleEditorial?.();
    };
  });

  if (!matchMedia(MOTION).matches || !matchMedia(WIDE).matches || sessionHasIntro()) releaseLoading();
}

function activateSystem(figure) {
  const { model, paint } = commercialScore(figure);
  const chapters = [...document.querySelectorAll('.vl-system-chapters > .preview-service-section')];
  const update = () => {
    const marker = window.innerHeight * .53;
    let index = chapters.length - 1;
    while (index > 0 && chapters[index].getBoundingClientRect().top > marker) index--;
    const rect = chapters[index].getBoundingClientRect();
    model.phase = index + Math.min(.999, limit((marker - rect.top) / rect.height));
    paint();
  };

  ScrollTrigger.create({
    trigger: '.vl-system-chapters', start: 'top 93%', end: 'bottom 21%',
    onUpdate: update, onRefresh: update
  });

  motion.add(MOTION, () => {
    gsap.from('.vl-title-line', {
      yPercent: 110, duration: .95, stagger: .11, ease: 'expo.out',
      clearProps: 'transform'
    });
    for (const chapter of chapters) {
      gsap.from(chapter.querySelector('.service-detail-hero h2'), {
        y: 12, duration: .56, ease: 'power2.out', clearProps: 'transform',
        scrollTrigger: { trigger: chapter, start: 'top 85%', once: true }
      });
    }
  });

  const syncHash = () => {
    const index = chapters.findIndex(chapter => '#' + chapter.id === location.hash);
    if (index >= 0) {
      model.phase = index;
      paint();
    }
  };
  const initialHash = location.hash;
  const initialChapter = chapters.find(chapter => '#' + chapter.id === initialHash);
  if (initialChapter) {
    const alignChapter = () => {
      if (location.hash !== initialHash) return;
      initialChapter.scrollIntoView({ block: 'start', behavior: 'instant' });
      syncHash();
    };
    alignChapter();
    document.fonts.ready.then(() => requestAnimationFrame(alignChapter));
  }
  window.addEventListener('hashchange', syncHash);
}

const frame = document.querySelector('[data-frame]');
const figure = document.querySelector('.vl-score');
if (frame) activateHome(frame);
if (figure) activateSystem(figure);
