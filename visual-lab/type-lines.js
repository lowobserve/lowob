import { gsap } from 'gsap';

const glyphs = '·+0123456789';

export function typeLines(elements, { stagger = .06 } = {}) {
  const timeline = gsap.timeline();
  const cleanups = [];

  elements.forEach((element, index) => {
    const originals = [...element.childNodes];
    const letters = Array.from(element.textContent.trim());
    if (!letters.length) return;

    const progress = { letters: 0 };
    const wrapper = document.createElement('span');
    const source = document.createElement('span');
    const output = document.createElement('span');
    wrapper.className = 'lab-type';
    source.className = 'lab-type-source';
    output.className = 'lab-type-output';
    output.setAttribute('aria-hidden', 'true');
    wrapper.append(source, output);

    function restore() {
      if (wrapper.parentNode === element) element.replaceChildren(...originals);
    }

    timeline.to(progress, {
      letters: letters.length,
      duration: Math.min(.71, .16 + letters.length * .031),
      ease: 'none',
      onStart() {
        source.append(...originals);
        element.replaceChildren(wrapper);
      },
      onUpdate() {
        const count = Math.floor(progress.letters);
        const phase = Math.floor(progress.letters * 3);
        const draft = count < letters.length && letters[count] !== ' ' ? glyphs[(phase + index) % glyphs.length] : '';
        output.textContent = letters.slice(0, count).join('') + draft;
      },
      onComplete: restore
    }, index * stagger);

    cleanups.push(restore);
  });

  return () => {
    timeline.kill();
    cleanups.forEach(restore);
  };
}
