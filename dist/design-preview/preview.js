(() => {
  if (!document.body.classList.contains("preview-only")) return;

  // Featured homepage article cards: pointer-following hover gradients.
  // Use the same eased motion as the existing lowob research cards.
  const featuredCards = [...document.querySelectorAll(
    ".research-showcase .home-research-grid > .home-research-card"
  )];
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    featuredCards.forEach((card) => {
      const restX = 82;
      const restY = 22;
      const state = { x: restX, y: restY, targetX: restX, targetY: restY, frame: 0 };
      const render = () => {
        state.x += (state.targetX - state.x) * 0.12;
        state.y += (state.targetY - state.y) * 0.12;
        card.style.setProperty("--glow-x", state.x + "%");
        card.style.setProperty("--glow-y", state.y + "%");
        if (Math.abs(state.targetX - state.x) > 0.04 ||
            Math.abs(state.targetY - state.y) > 0.04) {
          state.frame = requestAnimationFrame(render);
        } else {
          state.frame = 0;
        }
      };
      const animateTo = (x, y) => {
        state.targetX = x;
        state.targetY = y;
        if (!state.frame) state.frame = requestAnimationFrame(render);
      };
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        animateTo(Math.max(4, Math.min(96, x)), Math.max(4, Math.min(96, y)));
      });
      card.addEventListener("pointerleave", () => animateTo(restX, restY));
    });
  }

  // The curated library is the main Research destination for preview navigation.
  document.querySelectorAll('a[href="/design-preview/research/"]').forEach(link => {
    const label=link.textContent.trim().toLowerCase();
    if(label==="research" || label==="all research") link.setAttribute("href","/design-preview/featured/");
  });

  // On the consolidated System page, Index links point to sections on this
  // same document. Close the overlay with the site's existing toggle handler
  // before scrolling; otherwise body overflow remains locked.
  if (window.location.pathname.replace(/\/+$/, '') === '/design-preview/system') {
    const indexLayer = document.querySelector('#site-index');
    const indexTrigger = document.querySelector('.index-trigger');
    const sections = new Set(['strategy', 'growth', 'distribution', 'revenue']);
    if (indexLayer && indexTrigger) {
      indexLayer.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest('a[href]');
        if (!link || !indexLayer.contains(link)) return;
        const url = new URL(link.href, window.location.href);
        const id = decodeURIComponent(url.hash.slice(1));
        if (url.origin !== window.location.origin ||
            url.pathname.replace(/\/+$/, '') !== '/design-preview/system' ||
            !sections.has(id)) return;
        const target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();
        // clone.js owns the real overlay state (aria-expanded, aria-hidden,
        // trigger label, and body scroll lock). Use its existing close action.
        if (indexTrigger.getAttribute('aria-expanded') === 'true') {
          indexTrigger.click();
        }
        window.history.pushState(null, '', url.pathname + url.hash);
        window.requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
          });
        });
      });
    }
  }

  // Keep legacy article tables scrollable without altering their source text.
  document.querySelectorAll('.research-article-body table').forEach(table => {
    if(table.closest('.article-table-scroll'))return;
    const wrap=document.createElement('div');
    wrap.className='article-table-scroll';
    wrap.setAttribute('tabindex','0');
    wrap.setAttribute('role','region');
    wrap.setAttribute('aria-label','Scrollable article table');
    table.parentNode.insertBefore(wrap,table);
    wrap.append(table);
  });

  // Every archive article with a real checklist gets the tested interactive treatment.
  // The 31 refined articles contain no .archive-checklist blocks and remain untouched.
  const archiveBody=document.querySelector('.research-article-body[data-visual-only="true"]');
  if (archiveBody) {
    const articleSlug=archiveBody.getAttribute('data-original-slug')||window.location.pathname.split('/').filter(Boolean).pop()||'research';
    const checklists=[...archiveBody.querySelectorAll('.archive-checklist')];
    checklists.forEach((checklist,listIndex)=>{
      const items=[...checklist.children].filter(node=>node.tagName==='P');
      if (!items.length) return;
      const storageKey='lowob:checklist:'+articleSlug+(checklists.length>1?':'+listIndex:'');
      let previous=[];
      try {
        const stored=JSON.parse(window.localStorage.getItem(storageKey)||'[]');
        if (Array.isArray(stored)) previous=stored;
      } catch (_) { /* Disabled storage must not disable the checklist. */ }
      const boxes=[];
      items.forEach((paragraph,index)=>{
        const label=document.createElement('label');
        label.className='archive-checklist-interactive-item';
        const input=document.createElement('input');
        input.type='checkbox';
        input.className='archive-checklist-input';
        input.checked=previous[index]===true;
        const copy=document.createElement('span');
        copy.className='archive-checklist-item-copy';
        while(paragraph.firstChild) copy.append(paragraph.firstChild);
        label.append(input,copy);
        paragraph.replaceWith(label);
        boxes.push(input);
        input.addEventListener('change',()=>{
          try { window.localStorage.setItem(storageKey,JSON.stringify(boxes.map(box=>box.checked))); }
          catch (_) { /* Still works for this visit. */ }
        });
      });
      checklist.classList.add('archive-checklist--interactive');
    });
  }

  /* Contextual research links in article sidebars */
  const articleSidebar = document.querySelector('.research-article-aside.preview-toc');
  if (articleSidebar) {
    // Every preview research article gets a direct route back to the full library.
    const allResearchLink=document.createElement('a');
    allResearchLink.href='/design-preview/featured/#all';
    allResearchLink.className='toc-all-research';
    allResearchLink.textContent='All Research';
    allResearchLink.setAttribute('aria-label','Browse all lowob research');
    articleSidebar.prepend(allResearchLink);
    const featureList = [["agency","The Agency You Hired Spent $50K. What Did You Actually Get?","Growth agency results accountability"],["judgment","AI Is Making Execution Cheap. Judgment Is Becoming the Marketing Moat.","AI marketing strategy"],["article","KOL Campaigns Need More Than Impression Screenshots","Web3 creator attribution"],["case-study","What Makes a Case Study Believable","Revenue proof case studies"],["enterprise-brain","The Enterprise Brain Is a Record, Not a Mind","AI enterprise memory governance"],["web3-launch","Web3 Does Not Have One Customer. That Is Why Most Launch Plans Break.","Web3 GTM launch"],["fintech-trust","In Fintech, Trust Is the Product and the Channel Is Whoever Already Has It.","Fintech partnerships distribution"],["ai-distribution","AI Companies Have a Distribution Problem Disguised as a Model Problem.","AI growth distribution"],["account-based-marketing","What Is Account-Based Marketing? A Small-Team Version","Revenue B2B"],["conversion-optimization","What Is Conversion Rate Optimization, and When to Do It","Growth measurement"],["gtm-strategy","Your Startup Needs a GTM Strategy, Not Just a List of Tactics","Strategy GTM"],["media-plan","How to Read a Media Plan Before You Approve It","Distribution programmatic"],["ideal-customer-profile","How to Write an Ideal Customer Profile Sales Will Use","Strategy B2B GTM"],["positioning","Positioning vs Messaging vs Branding: Which Is Broken?","Strategy messaging"],["affiliate-program","Build an Affiliate Program Without Paying for Coupon Leaks","Distribution partnerships"],["programmatic-guide","What Is Programmatic Advertising? A Plain-English Guide","Distribution programmatic"],["growth-motions","Product-Led vs Sales-Led vs Partner-Led Growth","Strategy growth"],["signal-outbound","Cold Outreach Works Better With a Real Reason to Talk","Revenue outbound"],["community-audience","Audience vs Community: What Actually Makes the Difference?","Growth community"],["social-account-roles","Founder, Brand and Community Accounts Need Different Jobs","Growth social"],["gtm-for-founders","What Go-to-Market Means: A Plain Guide for Founders","Strategy GTM"],["marketing-rfp","How to Run a Marketing RFP Without Wasting a Quarter","Strategy agency"],["attribution-incrementality","Attribution vs Incrementality: What Did Your Marketing Actually Cause?","Growth measurement"],["partner-programs","Affiliate vs Partner vs Referral Programs: What's the Difference?","Revenue partnerships"],["marketing-funnel","What Is a Marketing Funnel, and When Does It Help?","Growth measurement"],["buy-context-judgment","Buy Context. Own Judgment. What Enterprise AI Teams Should Build","AI enterprise governance"],["modular-gtm","The Modular GTM Team: Specialist Depth Without a Full-Service Agency","AI Web3 GTM"],["claude-gtm","Claude Is Not Your Intern. Build a Repeatable GTM Workflow","AI growth operations"],["marketing-ai-workflows","How Marketing Teams Actually Use AI Tools","AI marketing operations"],["ai-answer-engines","How AI Answer Engines Choose Which Sources to Cite","AI search distribution"],["llm-optimization","LLM Optimization Checklist for Content and Marketing","AI search distribution"]];
    const headline = document.querySelector('.research-article-hero h1')?.textContent || document.title;
    const current = window.location.pathname;
    const stop = new Set(['what','where','when','with','that','this','from','your','the','and','for','are','which','into','than','about','without','like','does','need','needs','more','best','guide']);
    const terms = s => new Set(String(s).toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2 && !stop.has(w)));
    const sourceTerms = terms(headline);
    const candidates = featureList
      .filter(([slug]) => !current.includes('/'+slug+'/'))
      .map(([slug,title,tags]) => {
        let points = 0;
        for (const word of terms(title+' '+tags)) if (sourceTerms.has(word)) points += 3;
        if (/AI|Claude|LLM/i.test(headline) && /AI|Claude|LLM/.test(tags)) points += 1;
        if (/crypto|Web3|DeFi/i.test(headline) && /Web3/.test(tags)) points += 1;
        if (/fintech/i.test(headline) && /Fintech/.test(tags)) points += 1;
        return { slug, title, points };
      })
      .sort((a,b) => b.points-a.points || a.title.localeCompare(b.title));
    const related = candidates.slice(0,2);
    if(related.length) {
      const box=document.createElement('section');
      box.className='toc-featured-links';
      const heading=document.createElement('h3');
      heading.textContent='Featured research';
      box.append(heading);
      related.forEach(({slug,title})=>{
        const link=document.createElement('a');
        link.href='/design-preview/'+slug+'/';
        link.className='toc-featured-link';
        const thumb=document.createElement('span');
        thumb.className='toc-featured-thumb';
        // Keep Featured research thumbnails consistent throughout the preview.
        thumb.classList.add('toc-featured-thumb-logo');
        const mark=document.createElement('img');
        mark.src='/assets/favicon.svg';
        mark.alt='';
        mark.width=56;
        mark.height=56;
        mark.loading='lazy';
        mark.decoding='async';
        thumb.append(mark);
        const caption=document.createElement('span');
        caption.className='toc-featured-title';
        caption.textContent=title;
        link.append(thumb,caption);
        box.append(link);
      });
      articleSidebar.append(box);
    }
  }
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