const footer = document.querySelector('.architecture-footer');
const motion = matchMedia('(prefers-reduced-motion: no-preference)');

if (footer && motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(async ([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();

    try {
      const { typeLines } = await import('./type-lines.js');
      if (!motion.matches) return;

      const lines = footer.querySelectorAll('.footer-studio-lockup strong, .footer-links-grid a, .footer-copyright');
      const stop = typeLines([...lines]);
      motion.addEventListener('change', stop, { once: true });
    } catch {
      // Keep the footer readable if the motion module cannot load.
    }
  }, { threshold: .12 });

  observer.observe(footer);
}
