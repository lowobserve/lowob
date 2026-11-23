/* Mobile-only lowob SYSTEM accordion. Native buttons + ARIA, desktop remains unchanged. */
(() => {
  const deck = document.querySelector('.lab-deck[data-deck]');
  if (!deck) return;
  const cards = [...deck.querySelectorAll('.lab-slats > .lab-slat')];
  const mq = matchMedia('(max-width: 850px)');
  let active = 0;

  function sync() {
    cards.forEach((card, index) => {
      const button = card.querySelector('.lab-slat-tab');
      const copy = card.querySelector('.lab-slat-copy');
      if (!button || !copy) return;
      button.hidden = !mq.matches;
      const open = mq.matches && index === active;
      card.toggleAttribute('data-mobile-open', open);
      button.setAttribute('aria-expanded', String(open));
      if (mq.matches) {
        copy.hidden = !open;
        copy.inert = !open;
      } else {
        copy.hidden = false;
        copy.inert = false;
      }
    });
  }
  cards.forEach((card, index) => {
    card.querySelector('.lab-slat-tab')?.addEventListener('click', () => {
      if (!mq.matches) return;
      active = active === index ? -1 : index;
      sync();
    });
  });
  mq.addEventListener?.('change', sync);
  sync();
})();
