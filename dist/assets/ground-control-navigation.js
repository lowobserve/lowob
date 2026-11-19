/* Ground Control: progressive enhancement for the five public beta tabs.
 * Ordinary links still work if JavaScript or the same-origin fetch fails.
 * Direct URLs, deep links, HTML metadata and browser history remain valid. */
(() => {
  "use strict";

  const rootPath = "/research/ground-control/";
  const paths = new Set([
    rootPath,
    rootPath + "deadlines/",
    rootPath + "events/",
    rootPath + "regulation/",
    rootPath + "directory/"
  ]);

  if (!document.body.classList.contains("gc-page") ||
      !document.querySelector(".detail-workspace > .gc-tabs")) return;

  let activeRequest = null;
  let sequence = 0;
  const route = (path) => path === rootPath ? "overview" : path.slice(rootPath.length).replace(/\/$/, "");

  function permitted(href) {
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin && paths.has(url.pathname) ? url : null;
    } catch {
      return null;
    }
  }

  document.body.dataset.gcSection = route(window.location.pathname);
  // The browser must not restore an old full-page scroll offset after
  // Back/Forward between these in-place beta tabs.
  if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

  function syncMetadata(nextDocument) {
    document.title = nextDocument.title;
    const selectors = [
      "link[rel='canonical']",
      "meta[name='description']",
      "meta[name='robots']",
      "meta[property='og:title']",
      "meta[property='og:description']",
      "meta[property='og:url']",
      "meta[property='og:image']",
      "meta[name='twitter:title']",
      "meta[name='twitter:description']",
      "meta[name='twitter:image']"
    ];
    selectors.forEach((selector) => {
      const source = nextDocument.head.querySelector(selector);
      const target = document.head.querySelector(selector);
      if (!source || !target) return;
      const attr = source.tagName === "LINK" ? "href" : "content";
      target.setAttribute(attr, source.getAttribute(attr) || "");
    });
  }

  // Each generated beta page has one trusted, page-specific inline initializer
  // for countdowns and filter controls. Run that on the newly inserted content.
  function initializePage(nextDocument) {
    const initializer = [...nextDocument.body.querySelectorAll("script:not([src])")]
      .find((script) => script.textContent.includes('querySelectorAll("[data-due]")') &&
                        script.textContent.includes("data-gc-filter"));
    if (!initializer) throw new Error("Ground Control page initializer missing");
    const script = document.createElement("script");
    script.textContent = initializer.textContent;
    document.body.appendChild(script);
    script.remove();
  }

  function swapPage(nextDocument, url, pushHistory) {
    const live = document.querySelector(".detail-workspace");
    const incoming = nextDocument.querySelector(".detail-workspace");
    if (!live || !incoming) throw new Error("Ground Control workspace not found");

    const hero = live.querySelector(":scope > .gc-hero");
    const tabs = live.querySelector(":scope > .gc-tabs");
    const footer = live.querySelector(":scope > footer.architecture-footer");
    const nextHero = incoming.querySelector(":scope > .gc-hero");
    const nextTabs = incoming.querySelector(":scope > .gc-tabs");
    const nextFooter = incoming.querySelector(":scope > footer.architecture-footer");
    if (!hero || !tabs || !footer || !nextHero || !nextTabs || !nextFooter) {
      throw new Error("Ground Control tab layout mismatch");
    }

    // The tab bar stays in the DOM, so a click never destroys the focused
    // control or scrolls the page to the top. Measure its viewport position
    // before replacing the content to cancel any hero-height layout shift.
    const tabTop = tabs.getBoundingClientRect().top;
    const fragment = document.createDocumentFragment();
    let item = nextTabs.nextSibling;
    while (item && item !== nextFooter) {
      const next = item.nextSibling;
      const imported = document.importNode(item, true);
      if (imported.nodeType === 1) imported.classList.add("gc-tab-enter");
      fragment.appendChild(imported);
      item = next;
    }
    if (item !== nextFooter) throw new Error("Ground Control footer boundary missing");

    item = tabs.nextSibling;
    while (item && item !== footer) {
      const next = item.nextSibling;
      item.remove();
      item = next;
    }
    if (item !== footer) throw new Error("Ground Control live footer boundary missing");
    footer.before(fragment);

    // Update the section heading in place, without replacing the hero itself
    // or jumping to the top of the newly fetched document.
    hero.replaceChildren(...[...nextHero.childNodes].map((node) => document.importNode(node, true)));
    tabs.querySelectorAll("a[href]").forEach((link) => {
      const active = new URL(link.href, window.location.href).pathname === url.pathname;
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    syncMetadata(nextDocument);
    document.body.dataset.gcSection = route(url.pathname);
    initializePage(nextDocument);
    document.body.dataset.gcActivePath = url.pathname;
    if (pushHistory) window.history.pushState({ lowobGroundControl: true }, "", url.pathname + url.search + url.hash);

    // Keep the same tab-bar position in the viewport even if a headline or
    // description above it changes height. This is an instant correction,
    // not an animated scroll or scroll-to-top.
    const shift = tabs.getBoundingClientRect().top - tabTop;
    if (Math.abs(shift) > 0.5) {
      window.scrollBy({ top: shift, left: 0, behavior: "instant" });
    }
  }

  async function navigate(url, pushHistory) {
    if (activeRequest) activeRequest.abort();
    const controller = new AbortController();
    activeRequest = controller;
    const turn = ++sequence;
    document.querySelector(".gc-tabs")?.setAttribute("aria-busy", "true");

    try {
      const response = await fetch(url.pathname + url.search, {
        signal: controller.signal,
        credentials: "same-origin",
        headers: { Accept: "text/html" }
      });
      if (!response.ok) throw new Error("Ground Control tab request failed");
      const html = await response.text();
      if (turn !== sequence) return;
      const next = new DOMParser().parseFromString(html, "text/html");
      if (!next.body.classList.contains("gc-page")) throw new Error("Not a Ground Control page");
      swapPage(next, url, pushHistory);
    } catch (error) {
      if (error.name !== "AbortError" && turn === sequence) {
        window.location.assign(url.href);
      }
    } finally {
      if (turn === sequence) {
        activeRequest = null;
        document.querySelector(".gc-tabs")?.removeAttribute("aria-busy");
      }
    }
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.(".gc-tabs a[href]");
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        (link.target && link.target !== "_self")) return;
    const url = permitted(link.href);
    if (!url) return;
    event.preventDefault();
    if (url.pathname === document.body.dataset.gcActivePath) {
      if (activeRequest) {
        activeRequest.abort();
        activeRequest = null;
        ++sequence;
        document.querySelector(".gc-tabs")?.removeAttribute("aria-busy");
      }
      return;
    }
    navigate(url, true);
  });

  window.addEventListener("popstate", () => {
    const url = permitted(window.location.href);
    if (!url) return window.location.assign(window.location.href);
    if (url.pathname === document.body.dataset.gcActivePath) return;
    navigate(url, false);
  });

  // Track committed content separately from a URL that might be in navigation.
  document.body.dataset.gcActivePath = window.location.pathname;
})();
