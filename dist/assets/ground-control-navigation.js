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

    const fromHero = live.querySelector(":scope > .gc-hero");
    const liveFooter = live.querySelector(":scope > footer.architecture-footer");
    const toHero = incoming.querySelector(":scope > .gc-hero");
    const toFooter = incoming.querySelector(":scope > footer.architecture-footer");
    if (!fromHero || !liveFooter || !toHero || !toFooter) {
      throw new Error("Ground Control tab layout mismatch");
    }
    const fragment = document.createDocumentFragment();
    let item = toHero;
    while (item && item !== toFooter) {
      const next = item.nextSibling;
      fragment.appendChild(document.importNode(item, true));
      item = next;
    }
    if (item !== toFooter) throw new Error("Ground Control footer boundary missing");

    item = fromHero;
    while (item && item !== liveFooter) {
      const next = item.nextSibling;
      item.remove();
      item = next;
    }
    liveFooter.before(fragment);

    syncMetadata(nextDocument);
    document.body.dataset.gcSection = route(url.pathname);
    initializePage(nextDocument);
    if (pushHistory) window.history.pushState({ lowobGroundControl: true }, "", url.pathname + url.search + url.hash);

    const tabs = live.querySelector(".gc-tabs");
    if (url.hash) {
      let anchor = null;
      try { anchor = document.getElementById(decodeURIComponent(url.hash.slice(1))); } catch {}
      anchor?.scrollIntoView({ block: "start", behavior: "auto" });
    } else if (tabs) {
      const top = tabs.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    }
    const current = tabs?.querySelector('a[aria-current="page"]');
    current?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    current?.focus({ preventScroll: true });
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
    if (url.pathname === window.location.pathname) return;
    navigate(url, true);
  });

  window.addEventListener("popstate", () => {
    const url = permitted(window.location.href);
    if (!url) return window.location.assign(window.location.href);
    if (url.pathname === document.body.dataset.gcActivePath) return;
    navigate(url, false);
  });

  // The current path is independent of the address bar while a fetch is in flight.
  document.body.dataset.gcActivePath = window.location.pathname;
  const originalSwap = swapPage;
  swapPage = function(nextDocument, url, pushHistory) {
    originalSwap(nextDocument, url, pushHistory);
    document.body.dataset.gcActivePath = url.pathname;
  };
})();
