(() => {
  if (!document.body.classList.contains("preview-only")) return;
  // The curated library is the main Research destination for preview navigation.
  document.querySelectorAll('a[href="/design-preview/research/"]').forEach(link => {
    const label=link.textContent.trim().toLowerCase();
    if(label==="research" || label==="all research") link.setAttribute("href","/design-preview/featured/");
  });
  const search=document.getElementById("preview-research-query");
  const more=document.getElementById("preview-more-research");
  if (!search || !more) return;
  const grid=document.querySelector(".research-grid");
  if (!grid) return;
  const cards=[...grid.querySelectorAll("[data-research-card]")];
  // Editorial review selection; explicit and editable, not the latest 20.
  const featured=[
    "judgment-is-the-moat","ai-made-average-marketing-cheaper","the-enterprise-brain-is-a-record-not-a-mind",
    "the-agency-spent-50k-and-i-have-nothing-to-point-at","web3-kol-campaign-measurement",
    "the-modular-gtm-team","attribution-vs-incrementality","distribution-when-ad-platforms-restrict-you",
    "founder-led-gtm-expiration-date","signal-based-outbound","programmatic-media-numbers-you-can-trust",
    "from-hype-to-revenue","what-makes-a-case-study-believable","brand-vs-performance-marketing",
    "fintech-gtm-trust-distribution","trust-is-the-product","single-channel-dependency",
    "positioning-vs-messaging-vs-branding","the-story-isnt-landing","your-first-ten-customers-are-design-partners"
  ];
  const slugForCard=card=>card.dataset.sourceSlug||(card.getAttribute("href")||"").split("/").filter(Boolean).pop();
  const byPath=new Map(cards.map(card=>[slugForCard(card),card]));
  const order=[...featured.map(slug=>byPath.get(slug)).filter(Boolean),...cards.filter(card=>!featured.includes(slugForCard(card)))];
  order.forEach(card=>grid.appendChild(card));
  let limit=20;
  const empty=document.querySelector("[data-research-empty]");
  if (empty) {empty.textContent="No research found for that search.";empty.classList.add("preview-empty")}
  const apply=()=>{
    const q=search.value.trim().toLowerCase();
    const activeFunction=document.querySelector('[data-filter-group="function"][aria-pressed="true"]')?.dataset.researchFilter||"All";
    const activeMarket=document.querySelector('[data-filter-group="market"][aria-pressed="true"]')?.dataset.researchFilter||"";
    let matched=0;
    order.forEach(card=>{
      const tags=(card.dataset.tags||"").split("|");
      const searchText=(card.textContent+" "+tags.join(" ")).toLowerCase();
      const match=(!q||searchText.includes(q))&&(activeFunction==="All"||tags.includes(activeFunction))&&(!activeMarket||tags.includes(activeMarket));
      if(match) matched++;
      card.hidden=!match||matched>limit;
    });
    if(empty) empty.hidden=matched!==0;
    more.hidden=matched<=limit;
  };
  search.addEventListener("input",()=>{limit=20;apply()});
  document.querySelectorAll("[data-research-filter]").forEach(btn=>btn.addEventListener("click",()=>{limit=20;apply()}));
  more.addEventListener("click",()=>{limit+=20;apply()});
  apply();
})();