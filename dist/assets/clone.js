(() => {
  const trigger = document.querySelector(".index-trigger");
  const layer = document.querySelector("#site-index");

  if (trigger && layer) {
    const label = trigger.querySelector("span");

    const setIndexOpen = (open) => {
      layer.classList.toggle("open", open);
      layer.setAttribute("aria-hidden", String(!open));
      trigger.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? "Close" : "Index";
      document.body.style.overflow = open ? "hidden" : "";
    };

    trigger.addEventListener("click", () => {
      setIndexOpen(trigger.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setIndexOpen(false);
    });
  }

  const nodes = [...document.querySelectorAll(".radar-node")];
  const readout = document.querySelector(".radar-readout");
  const primaryAction = document.querySelector(".hero-actions .primary-action");

  if (nodes.length && readout) {
    const activateNode = (node) => {
      nodes.forEach((item) => item.classList.toggle("active", item === node));

      const code = node.querySelector("small")?.textContent?.trim() || "";
      const name = node.querySelector("strong")?.textContent?.trim() || "";
      const note = (node.getAttribute("aria-label") || "").split(": ").slice(1).join(": ");
      const href = node.getAttribute("href") || "#";
      const signal = node.style.getPropertyValue("--signal");

      readout.setAttribute("href", href);
      readout.style.setProperty("--signal", signal);
      const readoutLabel = readout.querySelector(":scope > span");
      const readoutName = readout.querySelector(":scope > strong");
      const readoutNote = readout.querySelector(":scope > p");
      if (readoutLabel) readoutLabel.textContent = `ACTIVE SIGNAL / ${code}`;
      if (readoutName) readoutName.textContent = name;
      if (readoutNote) readoutNote.textContent = note;

      if (primaryAction) {
        primaryAction.setAttribute("href", href);
        primaryAction.style.setProperty("--signal", signal);
        const actionLabel = primaryAction.querySelector(".primary-action-label");
        if (actionLabel) actionLabel.textContent = `Enter ${name}`;
      }
    };

    nodes.forEach((node) => {
      node.addEventListener("mouseenter", () => activateNode(node));
      node.addEventListener("focus", () => activateNode(node));
    });
  }

  const researchFilters = [...document.querySelectorAll("[data-research-filter]")];
  const researchCards = [...document.querySelectorAll("[data-research-card]")];
  const researchEmpty = document.querySelector("[data-research-empty]");

  const applyResearchFilters = () => {
    const activeFunction = researchFilters.find((item) => item.dataset.filterGroup === "function" && item.getAttribute("aria-pressed") === "true")?.dataset.researchFilter || "All";
    const activeMarket = researchFilters.find((item) => item.dataset.filterGroup === "market" && item.getAttribute("aria-pressed") === "true")?.dataset.researchFilter || null;
    let visible = 0;
    researchCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split("|");
      const matchesFunction = activeFunction === "All" || tags.includes(activeFunction);
      const matchesMarket = !activeMarket || tags.includes(activeMarket);
      const matches = matchesFunction && matchesMarket;
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (researchEmpty) researchEmpty.hidden = visible !== 0;
  };

  researchFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.filterGroup;
      if (group === "function") {
        researchFilters.filter((item) => item.dataset.filterGroup === "function").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        if (button.dataset.researchFilter === "All") {
          researchFilters.filter((item) => item.dataset.filterGroup === "market").forEach((item) => item.setAttribute("aria-pressed", "false"));
        }
      } else {
        const wasActive = button.getAttribute("aria-pressed") === "true";
        researchFilters.filter((item) => item.dataset.filterGroup === "market").forEach((item) => item.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", String(!wasActive));
      }
      applyResearchFilters();
    });
  });

  const briefForm = document.querySelector("#brief-form");
  briefForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = briefForm.querySelector('button[type="submit"]');
    const status = document.querySelector("#brief-form-status");
    const label = button.textContent;
    button.disabled = true;
    button.textContent = "Sending…";
    status.textContent = "";
    status.classList.remove("success", "error");

    try {
      const response = await fetch(briefForm.action, {
        method: "POST",
        body: new FormData(briefForm),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      briefForm.reset();
      status.textContent = "Brief sent. We’ll be in touch.";
      status.classList.add("success");
    } catch {
      status.textContent = "Couldn’t send. Please try again.";
      status.classList.add("error");
    } finally {
      button.disabled = false;
      button.textContent = label;
    }
  });
})();
