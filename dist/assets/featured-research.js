(() => {
  'use strict';

  const cards = [...document.querySelectorAll('.research-showcase .home-research-card[data-article-slug]')];
  if (cards.length !== 3) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const rotationInterval = 4600;
  const fadeOutDuration = 200;
  const shouldPause = () => document.hidden || reducedMotion.matches ||
    cards.some(card => card.matches(':hover, :focus-within, :active'));

  // The original slug identifies the illustration. The displayed slug follows the copy.
  cards.forEach(card => {
    card.dataset.displayedArticle = card.dataset.articleSlug;
  });

  fetch('/assets/article-art/manifest.json', { cache: 'no-cache' })
    .then(response => response.ok ? response.json() : null)
    .then(manifest => {
      if (!Array.isArray(manifest?.articles)) return;
      const articles = manifest.articles.filter(article =>
        article && typeof article.title === 'string' && article.title &&
        typeof article.slug === 'string' && /^[a-z0-9-]+$/.test(article.slug) &&
        article.url === '/research/' + article.slug + '/'
      );
      if (articles.length <= cards.length) return;

      let articleIndex = cards.length;
      let cardIndex = 0;
      window.setInterval(() => {
        if (shouldPause()) return;

        const article = articles[articleIndex];
        articleIndex = (articleIndex + 1) % articles.length;
        if (cards.some(card => card.dataset.displayedArticle === article.slug)) return;

        const card = cards[cardIndex];
        card.classList.add('is-changing');
        window.setTimeout(() => {
          if (!shouldPause()) {
            const [category, readTime] = card.querySelectorAll('.home-research-meta > span');
            category.textContent = article.label || article.sector || 'Research';
            readTime.textContent = (article.minutes || 7) + '-minute read';
            card.querySelector('h3').textContent = article.title;
            card.querySelector('p').textContent = article.excerpt || '';
            card.setAttribute('href', article.url);
            card.dataset.displayedArticle = article.slug;
            cardIndex = (cardIndex + 1) % cards.length;
          }
          card.classList.remove('is-changing');
        }, fadeOutDuration);
      }, rotationInterval);
    })
    .catch(() => {
      // The three articles in the homepage markup work when the manifest is unavailable.
    });
})();
