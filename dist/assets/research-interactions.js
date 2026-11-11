(() => {
const REFINED_SLUG_MAP={"account-based-marketing":"what-is-account-based-marketing","affiliate-program":"affiliate-program-asset-or-coupon-leak","agency":"the-agency-spent-50k-and-i-have-nothing-to-point-at","ai-answer-engines":"how-llms-choose-sources","ai-distribution":"ai-companies-distribution-problem","article":"web3-kol-campaign-measurement","attribution-incrementality":"attribution-vs-incrementality","buy-context-judgment":"buy-context-own-judgment-what-to-build-at-each-size","case-study":"what-makes-a-case-study-believable","claude-gtm":"claude-gtm-operating-system","community-audience":"community-vs-audience","conversion-optimization":"what-is-conversion-rate-optimization","enterprise-brain":"the-enterprise-brain-is-a-record-not-a-mind","fintech-trust":"fintech-gtm-trust-distribution","growth-motions":"product-led-vs-sales-led-vs-partner-led","gtm-for-founders":"what-is-gtm-for-founders","gtm-strategy":"gtm-strategy-vs-tactics","ideal-customer-profile":"how-to-write-an-icp","judgment":"judgment-is-the-moat","llm-optimization":"llm-optimization-checklist","marketing-ai-workflows":"how-marketing-teams-use-ai","marketing-funnel":"what-is-a-marketing-funnel","marketing-rfp":"how-to-run-a-marketing-rfp","media-plan":"how-to-read-a-media-plan","modular-gtm":"the-modular-gtm-team","partner-programs":"affiliate-vs-partner-vs-referral","positioning":"positioning-vs-messaging-vs-branding","programmatic-guide":"what-is-programmatic-advertising","signal-outbound":"signal-based-outbound","social-account-roles":"founder-brand-community-social-strategy","web3-launch":"web3-multi-audience-launch-plan"};
  if (!document.body.classList.contains("research-live")) return;
  // The curated library is the main Research destination for preview navigation.
  document.querySelectorAll('a[href="/research/"]').forEach(link => {
    const label=link.textContent.trim().toLowerCase();
    if(label==="research" || label==="all research") link.setAttribute("href","/research/");
  });

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
    allResearchLink.href='/research/#all';
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
      .filter(([slug]) => !current.includes('/'+(REFINED_SLUG_MAP[slug]||slug)+'/'))
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
        link.href='/research/'+(REFINED_SLUG_MAP[slug]||slug)+'/';
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