import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bootRadar } from './radar.js';
import { commercialScore } from './score.js';

gsap.registerPlugin(ScrollTrigger);

const page = document.body.dataset.visualLab;
const radarRoot = document.querySelector('[data-lowob-radar]');
const radarReady = radarRoot && bootRadar(radarRoot);
const figure = document.querySelector('.vl-score');
const score = figure && commercialScore(figure);
const chapters = [...document.querySelectorAll('.vl-system-chapters > .preview-service-section')];

if (page) {
  const heading = document.querySelector('h1');
  const motion = gsap.matchMedia();

  motion.add('(prefers-reduced-motion: no-preference)', context => {
    const hero = heading?.closest('section') ?? heading?.parentElement;
    const lines = hero?.querySelectorAll('.vl-title-line');
    if (lines?.length) {
      gsap.from(lines, { yPercent: 105, duration: .96, stagger: .11, ease: 'expo.out', clearProps: 'transform' });
    } else if (heading) {
      gsap.from(heading, { clipPath: 'inset(0 100% 0 0)', duration: .74, ease: 'power3.out', clearProps: 'clipPath' });
    }

    const index = document.querySelector('#site-index');
    if (index) {
      let transition;
      context.add('showIndex', () => {
        transition?.revert();
        transition = gsap.from(index.querySelectorAll('nav a'), {
          y: 16, opacity: .32, duration: .4, stagger: .04, ease: 'power2.out'
        });
      });
      const observer = new MutationObserver(() => {
        if (index.classList.contains('open')) context.showIndex();
        else transition?.pause();
      });
      observer.observe(index, { attributes: true, attributeFilter: ['aria-hidden'] });
      context.add(() => () => observer.disconnect());
    }

    if (page === 'home') {
      gsap.from('.hero .hero-actions', { y: 14, opacity: 0, duration: .55, delay: .33, clearProps: 'opacity,transform' });
    }

    if (radarReady) {
      context.add('startRadar', radar => {
        if (!radar?.ctx) return;
        const draw = () => radar.draw();
        if (radar.visible || radar.stage.getBoundingClientRect().top < innerHeight) {
          gsap.fromTo(radar.pose, { build: 0, bearing: -.50 }, {
            build: 1, bearing: 0, duration: 1.7, ease: 'power3.inOut', onUpdate: draw, onInterrupt: draw
          });
        }
        gsap.to(radar.pose, {
          fold: 1, duration: 1, ease: 'none', onUpdate: draw,
          scrollTrigger: { trigger: radarRoot, start: 'center 50%', end: 'bottom 12%', scrub: .65 }
        });
      });
      let active = true;
      radarReady.then(radar => { if (active) context.startRadar(radar); });
      context.add(() => () => {
        active = false;
        radarReady.then(radar => {
          if (!radar) return;
          Object.assign(radar.pose, { build: 1, fold: 0, bearing: 0 });
          radar.draw();
        });
      });
    }

    if (score && chapters.length) {
      const { model, paint } = score;
      const phaseTo = gsap.quickTo(model, 'phase', { duration: .38, ease: 'power2.out', onUpdate: paint });
      const update = (animate = true) => {
        const marker = window.innerHeight * .52;
        let index = chapters.length - 1;
        while (index > 0 && chapters[index].getBoundingClientRect().top > marker) index--;
        const chapter = chapters[index];
        const rect = chapter.getBoundingClientRect();
        const phase = index + gsap.utils.clamp(0, .999, (marker - rect.top) / rect.height);
        if (animate) phaseTo(phase);
        else {
          model.phase = phase;
          paint();
        }
      };
      ScrollTrigger.create({
        trigger: '.vl-system-chapters',
        start: 'top 92%',
        end: 'bottom 25%',
        onUpdate: () => update(),
        onRefresh: () => update(false)
      });

      for (const chapter of chapters) {
        const title = chapter.querySelector('.service-detail-hero h2');
        gsap.from(title, {
          y: 22, duration: .58, ease: 'power2.out', clearProps: 'transform',
          scrollTrigger: { trigger: chapter, start: 'top 84%', once: true }
        });
      }
    }
  });
}

if (score) {
  const syncHash = () => {
    const index = chapters.findIndex(chapter => '#' + chapter.id === location.hash);
    if (index >= 0 && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      score.model.phase = index;
      score.paint();
    }
  };
  syncHash();
  window.addEventListener('hashchange', syncHash);
}
