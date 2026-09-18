(() => {
  const search = document.querySelector("[data-preview-search]");
  const list = document.querySelector("[data-preview-list]");
  const count = document.querySelector("[data-preview-count]");
  const empty = document.querySelector("[data-preview-empty]");
  const filterGroup = document.querySelector("[data-preview-filters]");
  if (!search || !list || !count || !empty || !filterGroup) return;

  const records = [...list.querySelectorAll("[data-record]")];
  let activeMarket = "all";

  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;

    records.forEach((record) => {
      const marketMatch = activeMarket === "all" || record.dataset.market === activeMarket;
      const searchMatch = !query || record.dataset.search.includes(query);
      const show = marketMatch && searchMatch;
      record.hidden = !show;
      if (show) visible += 1;
    });

    count.textContent = `${visible} ${visible === 1 ? "record" : "records"} shown`;
    empty.hidden = visible !== 0;
  };

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeMarket = button.dataset.filter;
    filterGroup.querySelectorAll("button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    update();
  });

  search.addEventListener("input", update);
  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === "Escape" && document.activeElement === search) {
      search.value = "";
      search.blur();
      update();
    }
  });
})();
