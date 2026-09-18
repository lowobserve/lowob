(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) return;

  const startReveals = () => {
    if (document.querySelector(".research-article-hero")) return;

    const targets = new Set();
    const staggerStep = window.matchMedia("(max-width: 780px)").matches ? 65 : 90;

    const register = (element, index = 0, type = "") => {
      if (!element || targets.has(element)) return;
      targets.add(element);
      element.classList.add("scroll-reveal");
      if (type) element.classList.add(`scroll-reveal-${type}`);
      element.style.setProperty("--scroll-delay", `${Math.min(index * staggerStep, 360)}ms`);
    };

    const groups = [
      [".hero-copy", ":scope > span, :scope > h1, :scope > p"],
      [".section-heading", ":scope > span, :scope > div > h2, :scope > div > p"],
      [".system-grid", ":scope > *", "panel"],
      [".research-showcase-head", ":scope > div:first-child > span, :scope > div:first-child > .research-lockup, :scope > div:last-child > h2, :scope > div:last-child > .research-view-all"],
      [".home-research-grid", ":scope > *", "panel"],
      [".gc-entry-copy", ":scope > .gc-entry-brand, :scope > h2, :scope > .gc-entry-lead, :scope > .gc-beta-form"],
      [".closing-layout", ":scope > h2, :scope > .closing-positioning, :scope > .closing-support, :scope > a"],
      [".detail-hero", ":scope > span, :scope > h1, :scope > p"],
      [".service-copy", ":scope > span, :scope > h2, :scope > p, :scope > a"],
      [".capabilities-heading", ":scope > span, :scope > h2, :scope > p"],
      [".capability-grid", ":scope > *", "panel"],
      [".about-grid", ":scope > *", "panel"],
      [".founder-section > div", ":scope > span, :scope > h2, :scope > p, :scope > blockquote"],
      [".working-rules", ":scope > span, :scope > h2, :scope > ul"],
      [".contact-aside", ":scope > *", "panel"],
      [".engagement-heading", ":scope > span, :scope > h2, :scope > p"],
      [".engagement-grid", ":scope > *", "panel"],
      [".research-library-heading", ":scope > span, :scope > p"],
      [".research-filter-tiers", ":scope > *"],
      [".research-article-hero", ":scope > .research-article-meta, :scope > h1, :scope > p"],
      [".legal-page-hero", ":scope > span, :scope > h1, :scope > p"],
      [".legal-page-copy", ":scope > section"],
    ];

    groups.forEach(([rootSelector, childSelector, type = "", offset = 0]) => {
      document.querySelectorAll(rootSelector).forEach((root) => {
        [...root.querySelectorAll(childSelector)].forEach((element, index) => register(element, index + offset, type));
      });
    });

    document.querySelectorAll([
      ".hero-orbit",
      ".gc-product-preview",
    ].join(",")).forEach((element) => {
      register(element, 0, "visual");
      element.style.setProperty("--scroll-delay", "600ms");
    });

    document.querySelectorAll(".founder-section > img").forEach((element) => register(element, 1, "visual"));

    document.querySelectorAll([
      ".signal-panel",
      ".contact-form-wrap",
      ".service-next",
      ".research-article-aside",
      ".article-takeaway",
    ].join(",")).forEach((element) => register(element, 0, "panel"));

    document.querySelectorAll(".research-article-body").forEach((body) => {
      const intro = [...body.children].filter((element) => element.tagName === "P").slice(0, 2);
      intro.forEach((element, index) => register(element, index));
      body.querySelectorAll(":scope > h2, :scope > h3").forEach((heading) => {
        register(heading);
        if (heading.nextElementSibling?.tagName === "P") register(heading.nextElementSibling, 1);
      });
    });

    document.querySelectorAll(".closing-divider").forEach((element) => register(element, 1, "line"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -6% 0px" });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => targets.forEach((element) => observer.observe(element)));
    });
  };

  const boot = document.querySelector(".gc-boot");
  if (boot && document.body.classList.contains("gc-booting")) {
    const bootObserver = new MutationObserver(() => {
      if (document.body.contains(boot)) return;
      bootObserver.disconnect();
      startReveals();
    });
    bootObserver.observe(document.body, { childList: true });
  } else {
    startReveals();
  }
})();
