import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import researchBodies from "./research-bodies.mjs";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const masterColor = "#39FF14";
const strategyColor = "#a879ff";
const faviconLink = '<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">';

const services = [
  {
    slug: "strategy",
    name: "Strategy",
    color: strategyColor,
    verb: "Understand the market.",
    lead: "Understand the market before trying to scale into it.",
    body: "We help companies understand the market, define the opportunity, sharpen their positioning, identify the right customers, and determine how the business should enter and compete.",
    input: "Market reality",
    output: "Clear commercial direction",
    capabilities: [
      "Commercial strategy",
      "Go-to-market",
      "Positioning and messaging",
      "Market intelligence",
      "Competitive analysis",
      "ICP and segmentation",
      "Market entry and launch planning",
      "Monetization",
      "Product-market definition",
      "Fractional commercial leadership",
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    color: "#23d8ff",
    verb: "Create demand.",
    lead: "Turn the strategy into activity people can see, understand, and act on.",
    body: "We turn positioning into market activity that creates awareness, attention, engagement, and customer demand.",
    input: "Positioning",
    output: "Visible demand",
    capabilities: [
      "Growth strategy",
      "Campaign development",
      "Content strategy",
      "Social and community",
      "Founder content",
      "Creators and KOLs",
      "Audience development and acquisition",
      "Launch campaigns",
      "Newsletters and educational content",
      "Events",
      "Conversion optimization",
    ],
  },
  {
    slug: "distribution",
    name: "Distribution",
    color: "#ff42d0",
    verb: "Reach the audience.",
    lead: "Put real distribution behind the strategy.",
    body: "We determine how products, messages, campaigns, and content reach the audiences that matter: paid media, publishers, creators, platforms, communities, partnerships, and other channels. We coordinate the partners and the buying infrastructure; we own none of it.",
    input: "Demand",
    output: "Audience reach",
    capabilities: [
      "Media strategy",
      "Programmatic advertising and media buying",
      "CTV, display, video, digital audio, native, DOOH",
      "Publisher and media partnerships",
      "Platform and creator distribution",
      "Audience targeting",
      "Campaign optimization",
      "Measurement and reporting",
    ],
  },
  {
    slug: "revenue",
    name: "Revenue",
    color: "#ff6b35",
    verb: "Turn attention into business.",
    lead: "Convert market activity into commercial traction.",
    body: "We help companies turn market presence into pipeline, relationships, partnerships, and commercial outcomes.",
    input: "Market presence",
    output: "Commercial traction",
    capabilities: [
      "Business development",
      "Enterprise sales strategy",
      "Strategic and channel partnerships",
      "Pipeline and outbound strategy",
      "Sponsorship and commercial integrations",
      "Distribution partnerships",
      "Ecosystem development",
      "Account strategy",
      "Commercial negotiations",
      "Revenue architecture and monetization",
    ],
  },
];

const navItems = [
  ...services.map(({ slug, name, color }) => ({ href: `/${slug}`, label: name, color })),
  { href: "/research", label: "Research", color: masterColor },
  { href: "/about", label: "About", color: masterColor },
  { href: "/contact", label: "Contact", color: masterColor },
];

const researchArticles = [
  ["Playbook", "September 5, 2026", "4-minute read", "Discord Is Not a Community Strategy. Neither Is Telegram.", "Growth", ["Crypto"], "discord-telegram-community-strategy"],
  ["Operating Model", "September 4, 2026", "9-minute read", "The Modular GTM Team: Why AI and Web3 Are Moving Beyond the Full-Service Agency", "Strategy", ["AI", "Crypto"], "the-modular-gtm-team"],
  ["Playbook", "September 1, 2026", "3-minute read", "A Distribution Plan for a Product the Platforms Restrict: One Fintech Company, Ninety Days.", "Distribution", ["Fintech", "Media"], "restricted-category-distribution-worked-example"],
  ["AI / Marketing", "August 31, 2026", "8-minute read", "AI Is Making Execution Cheap. Judgment Is Becoming the Marketing Moat.", "Strategy", ["AI"], "judgment-is-the-moat"],
  ["Web3", "August 27, 2026", "8-minute read", "From Hype to Revenue: Web3's Next Competitive Advantage Is Operating Discipline", "Revenue", ["Crypto"], "from-hype-to-revenue"],
  ["Playbook", "August 25, 2026", "6-minute read", "Web3 Does Not Have One Customer. That Is Why Most Launch Plans Break.", "Strategy", ["Crypto"], "web3-multi-audience-launch-plan"],
  ["Playbook", "August 20, 2026", "3-minute read", "Clipping Is Not a Fad. It Is Paid Distribution With a Human Face.", "Distribution", ["Media"], "clipping-paid-distribution"],
  ["Analysis", "August 16, 2026", "4-minute read", "Most KOL Campaigns Are Expensive Screenshots of Impressions.", "Growth", ["Crypto"], "web3-kol-campaign-measurement"],
  ["Playbook", "August 10, 2026", "3-minute read", "The Channels Nobody Can Take Away From You Are the Ones You Keep Neglecting.", "Distribution", ["Media"], "owned-channels-email-content"],
  ["Playbook", "August 7, 2026", "4-minute read", "Your Founder, Brand, and Community Accounts Should Not Sound Like Triplets.", "Strategy", ["Media"], "founder-brand-community-social-strategy"],
  ["Playbook", "August 2, 2026", "3-minute read", "In Emerging Tech, the Only Strategy Question Is Which Bets You Can Take Back.", "Strategy", ["Emerging technology"], "emerging-tech-reversible-bets"],
  ["Playbook", "July 29, 2026", "4-minute read", "Your Customers Already Wrote Your Messaging. Claude Can Help You Find It.", "Strategy", ["AI"], "claude-voice-of-customer-research"],
  ["Analysis", "July 22, 2026", "3-minute read", "Creator Partnerships Outside Crypto Make the Same Mistakes With Fewer Excuses.", "Growth", ["Media"], "creator-partnerships-fintech-ai"],
  ["Analysis", "July 19, 2026", "4-minute read", "Airdrops Can Buy Attention. They Cannot Buy Belief.", "Growth", ["Crypto"], "airdrops-points-community-incentives"],
  ["Analysis", "July 14, 2026", "3-minute read", "In Fintech, Trust Is the Product and the Channel Is Whoever Already Has It.", "Revenue", ["Fintech"], "fintech-gtm-trust-distribution"],
  ["Playbook", "July 8, 2026", "4-minute read", "Founder-Led GTM Is Not a Vibe. It Is a Job With an Expiration Date.", "Growth", ["Emerging technology"], "founder-led-gtm-expiration-date"],
  ["Analysis", "July 4, 2026", "3-minute read", "Attribution Is a Story You Tell Your CFO. Incrementality Is What Happened.", "Strategy", ["Media"], "attribution-vs-incrementality"],
  ["Playbook", "July 1, 2026", "4-minute read", "Claude Is Not Your Intern. It Is Your GTM Operating System.", "Strategy", ["AI"], "claude-gtm-operating-system"],
  ["Analysis", "June 24, 2026", "3-minute read", "One Channel Is Carrying You, and It Isn't Yours.", "Distribution", ["Media"], "single-channel-dependency"],
  ["Playbook", "June 20, 2026", "4-minute read", "One Founder Interview Should Produce a Month of Content. Here Is the System.", "Growth", ["Media"], "founder-interview-content-engine"],
  ["Analysis", "June 15, 2026", "3-minute read", "AI Companies Have a Distribution Problem Disguised as a Model Problem.", "Distribution", ["AI"], "ai-companies-distribution-problem"],
  ["Playbook", "June 12, 2026", "4-minute read", "Forget 10,000 Followers. Find Your First 100 People Who Actually Care.", "Growth", ["Emerging technology"], "first-100-community-members"],
  ["Analysis", "June 6, 2026", "3-minute read", "Performance Marketing Is Not a Channel. It Is a Way of Paying.", "Distribution", ["Media"], "performance-marketing-way-of-paying"],
  ["Playbook", "June 2, 2026", "3-minute read", "You Are Buying Media and You Do Not Trust the Numbers. You Are Right Not To.", "Distribution", ["Media"], "programmatic-media-numbers-you-can-trust"],
  ["Playbook", "May 28, 2026", "4-minute read", "Stop Personalizing Cold Emails. Start Personalizing the Reason to Talk.", "Revenue", ["Emerging technology"], "signal-based-outbound"],
  ["Playbook", "May 25, 2026", "3-minute read", "Your Affiliate Program Is Either an Asset You Own or a Coupon Leak You Pay For.", "Distribution", ["Media"], "affiliate-program-asset-or-coupon-leak"],
  ["Analysis", "May 18, 2026", "4-minute read", "Your \"Community\" Is Probably Just an Audience With a Chat Room.", "Growth", ["Crypto"], "community-vs-audience"],
  ["Playbook", "May 13, 2026", "3-minute read", "A $10,000 Test That Closes a Question Beats a $10,000 Bet That Leaves It Open.", "Strategy", ["Emerging technology"], "tests-that-close-questions"],
  ["Analysis", "May 9, 2026", "3-minute read", "Percent of Spend Is a Conflict of Interest With a Logo on It.", "Distribution", ["Media"], "percent-of-spend-media-fees"],
  ["Analysis", "May 3, 2026", "4-minute read", "AI Did Not Fix Your Marketing. It Made Your Mediocrity Cheaper.", "Growth", ["AI"], "ai-made-average-marketing-cheaper"],
  ["Analysis", "April 30, 2026", "3-minute read", "Thin Bidding: The Cheapest Attention Is Wherever Nobody Else Is Buying.", "Distribution", ["Media"], "thin-bidding"],
  ["Playbook", "April 25, 2026", "4-minute read", "Your Startup Does Not Have a GTM Strategy. It Has a List of Tactics.", "Strategy", ["Emerging technology"], "gtm-strategy-vs-tactics"],
  ["Playbook", "April 21, 2026", "3-minute read", "Meta Said No. That Is Not the End of Your Distribution Plan.", "Distribution", ["Fintech", "AI"], "distribution-when-ad-platforms-restrict-you"],
].map(([type, date, readTime, title, service, sectors, slug]) => ({ type, date, readTime, title, service, sectors, slug }));

const arrowRight = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
const arrowUpRight = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>';

function escapeAttribute(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function boldLowobText(html) {
  const skipped = new Set(["script", "style", "title", "textarea", "option", "strong", "b"]);
  const voidElements = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
  const stack = [];
  return html.split(/(<[^>]+>)/g).map((token) => {
    if (!token.startsWith("<")) {
      if (stack.some((tag) => skipped.has(tag))) return token;
      return token.replace(/\blowob\b/gi, (match) => `<strong>${match}</strong>`);
    }
    const closing = token.match(/^<\/([a-z0-9-]+)/i);
    if (closing) {
      const index = stack.lastIndexOf(closing[1].toLowerCase());
      if (index !== -1) stack.splice(index, 1);
      return token;
    }
    const opening = token.match(/^<([a-z0-9-]+)/i);
    if (opening && !token.endsWith("/>") && !voidElements.has(opening[1].toLowerCase())) stack.push(opening[1].toLowerCase());
    return token;
  }).join("");
}

function dateToIso(date) {
  return new Date(`${date} 00:00:00 UTC`).toISOString().slice(0, 10);
}

function normalizeResearchBody(html) {
  return html
    .replace(/<blockquote>\s*(<p>\s*<strong>lowob takeaway:<\/strong>[\s\S]*?<\/p>)\s*<\/blockquote>/gi, '<aside class="article-takeaway">$1</aside>')
    .replace(/<\/?blockquote>/g, "");
}

function mark(large = false) {
  return `<div class="lowob-mark${large ? " mark-large" : ""}" aria-hidden="true">${Array.from({ length: 8 }, (_, index) => `<span style="transform:rotate(${index * 45}deg)"></span>`).join("")}</div>`;
}

function header() {
  return `<header class="topbar"><a class="brand-lockup" href="/" aria-label="lowob home">${mark()}<strong>lowob</strong></a><div class="top-actions"><a class="top-conversation" href="/contact">Start a conversation</a><button class="index-trigger" aria-expanded="false" aria-controls="site-index"><span>Index</span><i aria-hidden="true"><b></b><b></b></i></button></div></header>${indexLayer()}`;
}

function indexLayer() {
  const points = [
    [50, 15], [77, 25], [88, 49], [73, 74], [45, 88], [19, 65], [21, 28],
  ];
  return `<div class="index-layer refined-index" id="site-index" aria-hidden="true"><nav aria-label="Site index">${navItems.map((item) => `<a href="${item.href}" style="--signal:${item.color}"><i class="nav-cue" aria-hidden="true"></i><strong>${item.label}</strong>${arrowRight}</a>`).join("")}</nav><aside><div class="index-radar" aria-hidden="true"><span class="index-ring index-ring-one"></span><span class="index-ring index-ring-two"></span><span class="index-sweep"></span>${points.map((point, index) => `<i style="--signal:${navItems[index].color};left:${point[0]}%;top:${point[1]}%"></i>`).join("")}<div class="index-core">${mark(true)}</div></div><div><span><strong>lowob</strong> / SYSTEM INDEX</span><p>Four connected commercial functions. One operating point of view.</p><div class="signal-key">${services.map((item) => `<a href="/${item.slug}" style="--signal:${item.color}"><i></i>${item.name}</a>`).join("")}</div></div></aside></div>`;
}

const legalDocuments = [
  {
    id: "terms-dialog",
    title: "Terms of use",
    intro: "The terms for reading lowob.com and its Research. Client engagements run on a written scope, which takes precedence over anything here.",
    sections: [
      ["Who we are", "lowob is a commercial studio operated by Chris Wells, trading as lowob, from Los Angeles, California. lowob is not yet incorporated; when it is, these terms will name the entity, and engagements signed before then stay with the person who signed them. These terms cover your use of lowob.com and the material on it. They do not cover client engagements: every engagement runs on a written scope signed by both sides, and where that scope and these terms differ, the scope wins."],
      ["Using the site", "You may read, link to and quote the site for your own purposes, with attribution. You may not copy it wholesale, republish it as your own, scrape it, or use it to train a model without our written permission. You may not use the site to send us anything unlawful, or to interfere with how it runs."],
      ["Research is analysis, not advice", "Research pieces are written by named people from their own experience and the numbers available to them at the time. They are published for general information. They are not investment, legal, tax or accounting advice, they do not take your circumstances into account, and they should not be the basis for a decision to buy, sell or hold any asset, token, security or product. Markets, platforms and fees change; the work does not update itself."],
      ["What advisory is, and is not", "lowob advises founders on the narrative, readiness, fit and pitch. lowob is not a broker-dealer, placement agent, investment adviser, finder or exchange, and is not registered as any of those. We do not negotiate the terms of a round, value it, handle funds, or take a percentage of anything raised. Introductions, where they happen, are part of the work and never a service we sell. Nothing on this site is an offer to sell or a solicitation to buy any security or digital asset, and no outcome from any engagement is guaranteed."],
      ["How we charge", "Engagements use a fixed fee against a written scope. Media is billed at a flat fee per account and never as a percentage of spend. Advisory is billed at a flat monthly fee and never as a percentage of money raised. Equity or tokens appear only alongside cash and are always disclosed. We never front media spend and we own no inventory. The fee for any engagement is stated in its scope before the work starts."],
      ["Ownership", "The site, the lowob name and mark, the commercial system as drawn, and every piece of Research are ours or licensed to us. Work delivered under an engagement belongs to the client once paid for, as the scope says; the methods, templates and know-how we brought to it remain ours. Third-party names and marks belong to their owners and appear only to identify them."],
      ["Third parties and links", "The site links to third-party platforms and sources. We do not control those sites and are not responsible for them. Media partners, buying platforms, publishers and creators we coordinate on a client’s behalf are contracted by the client or under the engagement scope, not through this site."],
      ["Limits", "The site and Research are provided as they are. To the extent the law allows, lowob is not liable for any loss arising from reliance on the site, including lost profit, lost revenue, lost data or any indirect or consequential loss, and our total liability in connection with the site is limited to one hundred US dollars. Nothing here limits liability that cannot be limited by law or the liability stated in a signed engagement scope."],
      ["Law and disputes", "These terms are governed by the laws of the State of California, without regard to its conflict-of-laws rules. Any dispute about the site will be brought in the state or federal courts in Los Angeles County, California, and both sides accept that venue. Consumers in the EU or UK keep any protections local law gives them that cannot be waived."],
      ["Changes", "We will change these terms when the business changes. The date at the top is the date the current version took effect; continuing to use the site after a change means you accept it. Questions go to chris@lowob.com."],
    ],
  },
  {
    id: "privacy-dialog",
    title: "Privacy policy",
    intro: "What we collect when you send a brief or read the site; why; who sees it; and how to ask us to stop.",
    sections: [
      ["Who is responsible", "Chris Wells, trading as lowob, Los Angeles, California, is the controller of the personal data described here. lowob is not yet incorporated; when it is, this policy will name the entity and the commitments below carry over unchanged. Contact for anything in this policy: chris@lowob.com."],
      ["What we collect", "When you send a brief we receive your name, email address, company, the problem and budget band you selected, and whatever you write in the form. We may also receive aggregate site-usage information and correspondence or notes connected to a conversation or engagement. We do not buy data about you and do not collect payment-card details on the site; engagements are invoiced."],
      ["Why we use it", "We use information to reply to your brief and hold the conversation it starts, understand which pages are read, keep the site working, and meet legal, accounting and tax obligations. We do not use your data for automated decisions that have a legal or similarly significant effect on you."],
      ["Who sees it", "The people at lowob who need it to reply or do the work; specialists brought into an engagement under confidentiality; service providers that process information on our instructions; and authorities where the law requires. We do not sell personal data and do not share it for cross-context behavioural advertising."],
      ["Cookies", "The site sets no advertising or tracking cookies. Analytics, if used, runs without cookies or with a short-lived first-party cookie. The brief form sets nothing beyond what is needed to submit it. If that changes, a consent mechanism will appear and the default will be off."],
      ["Where it goes", "Data may be stored in the United States and accessed from the EU. Where information about people in the EU, UK or Switzerland is transferred to the US, we rely on recognised contractual safeguards or the provider’s applicable certification."],
      ["How long we keep it", "A brief that does not become an engagement is kept for twenty-four months from our last exchange. A brief that does is kept for the life of the engagement and seven years after. Aggregate analytics may be kept for twenty-six months. Email and call notes are kept as long as the conversation or engagement they belong to."],
      ["Your rights", "You can ask what personal data we hold about you, ask us to correct or delete it, ask for a usable copy, object to certain uses, and withdraw consent where consent is the basis. Write to chris@lowob.com. We do not sell or share personal information, so there is nothing to opt out of."],
      ["Security", "Data is held with providers that encrypt it in transit and at rest, behind accounts with two-factor authentication, and is accessible only to the people who need it. No system is perfectly secure; if a breach affects your data we will tell you and the relevant authority as the law requires."],
      ["Children", "The site is for businesses. We do not knowingly collect data from anyone under eighteen, and we delete it if we learn we have."],
      ["Changes", "When this policy changes, the effective date changes. If a change materially affects how we use data you already gave us, we will contact you first. Questions go to chris@lowob.com."],
    ],
  },
];

function legalDialogs() {
  return legalDocuments.map((document) => `<dialog class="legal-dialog" id="${document.id}" aria-labelledby="${document.id}-title"><div class="legal-panel"><header><div><p class="legal-brand"><strong>lowob</strong></p><h2 id="${document.id}-title">${document.title}</h2><p>${document.intro}</p><p class="legal-meta">Effective 7 September 2026 · Chris Wells, trading as <strong>lowob</strong> · Los Angeles · chris@<strong>lowob</strong>.com</p></div><button class="dialog-close" type="button" aria-label="Close ${document.title}">Close</button></header><div class="legal-copy">${document.sections.map(([title, copy]) => `<section><h3>${title}</h3><p>${copy}</p></section>`).join("")}</div></div></dialog>`).join("");
}

function footer() {
  return `<footer class="architecture-footer"><div class="footer-identity"><a class="footer-studio-lockup" href="/" aria-label="lowob home">${mark()}<strong>lowob</strong></a><p class="footer-worldwide">DECENTRALIZED / WORLDWIDE</p></div><div class="footer-link-area"><div class="footer-links-grid"><nav aria-label="Footer navigation"><a href="/#services">Services</a><a href="/research">Research</a><a href="/about">About</a><a href="/contact">Contact</a></nav><div class="footer-contact"><a href="https://x.com/lowobco" target="_blank" rel="noreferrer">X</a><a href="https://www.linkedin.com/company/lowob" target="_blank" rel="noreferrer">LinkedIn</a><a href="/terms">Terms of use</a><a href="/privacy">Privacy policy</a></div></div><p class="footer-copyright">© <strong>lowob</strong> 2026</p></div></footer>`;
}

function systemNav() {
  return `<nav class="detail-system" aria-label="Commercial system">${services.map((item, index) => `<a href="/${item.slug}" style="--item-signal:${item.color}"><span>0${index + 1}</span>${item.name}${arrowRight.replace('width="24" height="24"', 'width="14" height="14"')}</a>`).join("")}</nav>`;
}

function documentShell({ title, description, signal, content, preload = "", head = "" }) {
  const body = boldLowobText(`<main class="lowob-shell detail-page" style="--signal:${signal}">${header()}<div class="detail-workspace">${content}${footer()}</div></main>`);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${faviconLink}${preload}<link rel="stylesheet" href="/assets/site.css?v=18"><link rel="stylesheet" href="/assets/refined.css?v=18"><title>${escapeAttribute(title)}</title><meta name="description" content="${escapeAttribute(description)}">${head}<meta name="robots" content="noindex, nofollow"></head><body data-refined="true">${body}<script src="/assets/clone.js" defer></script></body></html>`;
}

function servicePage(service, index) {
  const next = services[index + 1];
  const isRevenue = service.slug === "revenue";
  const nextHref = next ? `/${next.slug}` : isRevenue ? "/research" : "/contact";
  const nextName = next ? next.name : isRevenue ? "Industry insights" : "Start a conversation";
  const nextCopy = next ? next.verb : isRevenue ? "Read the market before you move." : "Bring us the commercial problem.";
  const nextSignal = next?.color || (isRevenue ? masterColor : service.color);
  const content = `<section class="detail-hero service-detail-hero"><span>COMMERCIAL FUNCTION / ${service.name.toUpperCase()}</span><h1>${service.name}</h1><p>${service.verb}</p></section><section class="service-overview"><div class="service-copy"><span>WHAT WE DO</span><h2>${service.lead}</h2><p>${service.body}</p></div><aside class="signal-panel hover-invert"><span>COMMERCIAL SIGNAL</span><dl><div><dt>Input</dt><dd>${service.input}</dd></div><div><dt>Output</dt><dd>${service.output}</dd></div></dl></aside></section><section class="capabilities-section"><div class="capabilities-heading"><span>CAPABILITIES</span><h2>The work inside ${service.name.toLowerCase()}.</h2></div><ul class="capability-grid">${service.capabilities.map((capability) => `<li class="hover-invert">${capability}</li>`).join("")}</ul></section><a class="service-next" href="${nextHref}" style="--next-signal:${nextSignal}"><span>NEXT MOVE</span><div><h2>${nextName}</h2><p>${nextCopy}</p></div>${arrowUpRight}</a>${systemNav()}`;
  return documentShell({ title: `${service.name} | lowob`, description: `${service.name} services from lowob: ${service.lead}`, signal: service.color, content });
}

function aboutPage() {
  const content = `<section class="detail-hero about-hero"><span>ABOUT <strong>lowob</strong></span><h1>Operator experience. Studio flexibility.</h1><p>Senior thinking stays close to the work. <strong>lowob</strong> combines direct senior involvement with a network of specialists, so the team scales around the problem without adding layers.</p></section><section class="detail-grid about-grid refined-about-grid"><article class="hover-invert"><h2>Senior-led</h2><p>The people defining the strategy remain involved in execution.</p></article><article class="hover-invert"><h2>Commercially focused</h2><p>Every engagement begins with a business objective.</p></article><article class="hover-invert"><h2>Channel-agnostic</h2><p>The right route may involve media, content, creators, partnerships, direct outreach, events, or several channels together.</p></article><article class="hover-invert"><h2>Built for complexity</h2><p>Comfortable with technical products, unfamiliar categories, emerging markets, and business models that still require explanation.</p></article></section><section class="founder-section"><img src="/assets/chris-wells.jpeg" alt="Chris Wells, founder of lowob" width="560" height="560"><div><span>FOUNDER / <strong>lowob</strong></span><h2>Chris Wells</h2><p>Chris has spent more than a decade on the operator side of revenue, partnerships, media, advertising and technology, in markets that were still being defined while he was working in them. His experience runs across media companies, technology businesses, startups and emerging-market platforms, and across the whole commercial sequence: the positioning of a product, the demand created for it, the channels that carried it, and the revenue it returned.</p><p><strong>lowob</strong> was built around a simple observation:</p><blockquote><p>Companies rarely suffer from a shortage of tactics. The harder problem is connecting positioning, growth, distribution, partnerships and revenue into one commercial system.</p><p>I've watched that problem from every seat. The strategy firm hands over a deck and leaves before it meets a customer. The growth agency inherits a story it didn't write and can't defend. The media buyer is judged on a number nobody upstream agreed to. The partnerships lead is selling a product the market hasn't been told about yet. Each of them is competent. None of them is accountable for the hand-off, and the hand-off is where the money goes missing.</p><p>Founders feel this earliest, because they have to tell one story to investors, another to customers, and build a plan that satisfies both, usually with three different vendors and no one holding the thread. Agencies don't want that job. It's too early, too unscoped and too close to the founder to productise.</p><p>That's the job <strong>lowob</strong> takes. One senior point of contact from the narrative through the pitch, the round and the system it funds, staying in the work until there's revenue to measure it against. Nobody else is standing in that gap, which is exactly why it's worth standing in.</p></blockquote></div></section><section class="working-rules"><span>HOW WE WORK</span><h2>Written down, so you do not have to ask.</h2><ul><li>Fixed fee against a written scope. Never hourly.</li><li>Media at a flat fee per account. Never a percentage of spend.</li><li>We never front media spend and we own no inventory.</li><li>The people who set the strategy stay in the work.</li><li>Defined problem, defined output. The next step is priced in the same proposal.</li><li>No client past 40% of our revenue.</li></ul></section><a class="service-next" href="/contact"><span>NEXT MOVE</span><div><h2>Discuss the work</h2><p>Bring us the commercial problem.</p></div>${arrowUpRight}</a>${systemNav()}`;
  return documentShell({ title: "About | lowob", description: "Senior commercial judgment and studio flexibility for complex markets.", signal: masterColor, content, preload: '<link rel="preload" href="/assets/chris-wells.jpeg" as="image">' });
}

function contactPage() {
  const content = `<section class="detail-hero contact-hero"><span>CONTACT</span><h1>Tell us where the business is getting stuck.</h1><p>Start with the problem rather than trying to define the engagement yourself. A focused brief is enough.</p></section><section class="contact-build"><div class="contact-form-wrap"><span>YOUR BRIEF</span><p class="contact-signal">Positioning. Growth. Distribution. Pipeline. Partnerships. Acquisition. Monetization.</p><form id="brief-form" action="https://formspree.io/f/myeyngpb" method="POST"><div class="field-pair"><label>Name<input name="name" autocomplete="name" required></label><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Company<input name="company" autocomplete="organization" required></label><label>What are you trying to solve?<select name="problem"><option>Commercial strategy / GTM</option><option>Growth / marketing</option><option>Media / distribution</option><option>Revenue / partnerships</option><option>Embedded commercial support</option><option>Not sure yet</option></select></label><label>Approximate budget<select name="budget"><option>Not sure yet</option><option>Under $10K</option><option>$10K–$25K</option><option>$25K–$50K</option><option>$50K–$100K</option><option>$100K+</option></select></label></div><label>Tell us about the challenge<textarea name="brief" required rows="6" placeholder="What are you trying to accomplish, what have you tried already, and where is progress getting stuck?"></textarea></label><p class="form-note">We reply within two working days. No proposal before a conversation.</p><div class="form-actions"><button type="submit">Send brief</button><p class="form-status" id="brief-form-status" aria-live="polite"></p></div></form></div><aside class="contact-aside"><div class="contact-box hover-invert"><span>DIRECT</span><a href="mailto:chris@lowob.com">chris@<strong>lowob</strong>.com</a></div><div class="contact-box hover-invert"><span>ELSEWHERE</span><a href="https://x.com/lowobco" target="_blank" rel="noreferrer">X · @<strong>lowob</strong>co</a><a href="https://www.linkedin.com/company/lowob" target="_blank" rel="noreferrer">LinkedIn · <strong>lowob</strong></a></div></aside></section><section class="engagement-section"><div class="engagement-heading"><span>WAYS TO ENGAGE</span><h2>Different problems require different levels of involvement.</h2></div><div class="engagement-grid"><article class="hover-invert"><h3>The Read</h3><p>One week. Where the business is getting stuck, written down and priced.</p><strong>Defined problem. Defined output.</strong></article><article class="hover-invert"><h3>Build</h3><p>Six to eight weeks. A campaign, media program, growth initiative, partner pipeline or commercial program, stood up and running.</p><strong>Strategy through execution.</strong></article><article class="hover-invert"><h3>Embedded</h3><p>Monthly senior commercial support across strategy, growth, distribution, partnerships or revenue.</p><strong>An extension of the internal team.</strong></article></div></section>${systemNav()}`;
  return documentShell({ title: "Contact | lowob", description: "Tell lowob where the business is getting stuck and send a focused commercial brief.", signal: "#ff6b35", content });
}

function researchBand() {
  return `<a class="research-band" href="/research"><div><span>INDUSTRY INSIGHTS</span><div class="research-lockup">${mark()}<strong><b>lowob</b> research</strong></div></div><div><h2>Read the market before you move.</h2><p>Practical analysis for commercial decisions across strategy, growth, distribution, and revenue.</p></div>${arrowUpRight}</a>`;
}

function researchPage() {
  const functionFilters = ["All", "Strategy", "Growth", "Distribution", "Revenue"];
  const marketFilters = ["AI", "Crypto", "Fintech", "Media", "Emerging technology"];
  const cards = researchArticles.map((article) => {
    const service = services.find((item) => item.name === article.service);
    const tags = [article.service, ...article.sectors].join("|");
    return `<a class="research-card" href="/research/${article.slug}" data-research-card data-tags="${tags}" style="--article-signal:${service?.color || masterColor}"><div class="research-card-meta"><span>${article.type}</span><span>By <strong>lowob</strong> · <time datetime="${dateToIso(article.date)}">${article.date}</time></span></div><h2>${article.title}</h2><div class="research-card-foot"><span>${article.service} · ${article.sectors.join(", ")}</span><span>${article.readTime} ${arrowUpRight.replace('width="24" height="24"', 'width="15" height="15"')}</span></div></a>`;
  }).join("");
  const content = `<section class="detail-hero research-hero"><span><strong>lowob</strong> RESEARCH</span><h1>Useful expertise.<br>Not a content mill.</h1><p>Practical analysis for companies working across strategy, growth, distribution, and revenue in markets still being defined.</p></section><section class="research-library"><div class="research-library-heading"><span>THE LIBRARY</span><p>Filter by commercial function or market.</p></div><div class="research-filter-tiers" aria-label="Filter research"><div class="research-filters research-function-filters" aria-label="Commercial function">${functionFilters.map((filter, index) => `<button type="button" data-research-filter="${filter}" data-filter-group="function" aria-pressed="${index === 0}">${filter}</button>`).join("")}</div><div class="research-filters research-market-filters" aria-label="Market">${marketFilters.map((filter) => `<button type="button" data-research-filter="${filter}" data-filter-group="market" aria-pressed="false">${filter}</button>`).join("")}</div></div><div class="research-grid">${cards}</div><p class="research-empty" data-research-empty hidden>No pieces match these filters.</p></section><a class="service-next research-next" href="/contact" style="--next-signal:${masterColor}"><span>NEXT MOVE</span><div><h2>Bring us the commercial problem.</h2><p>We’ll work backward from there.</p></div>${arrowUpRight}</a>${systemNav()}`;
  return documentShell({ title: "Research | lowob", description: "Practical Lowob research across strategy, growth, distribution, and revenue in complex markets.", signal: masterColor, content });
}

function researchArticlePage(article, index) {
  const service = services.find((item) => item.name === article.service);
  const nextArticle = researchArticles[(index + 1) % researchArticles.length];
  const body = normalizeResearchBody(researchBodies[article.slug]);
  if (!body) throw new Error(`Missing Research body for ${article.slug}`);
  const published = dateToIso(article.date);
  const schema = JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: article.title, datePublished: published, author: { "@type": "Organization", name: "lowob", url: "https://lowob.com/" }, publisher: { "@type": "Organization", name: "lowob", url: "https://lowob.com/" }, mainEntityOfPage: `https://lowob.com/research/${article.slug}/` }).replaceAll("<", "\\u003c");
  const head = `<meta name="author" content="lowob"><meta property="article:published_time" content="${published}"><script type="application/ld+json">${schema}</script>`;
  const content = `<article class="research-article"><header class="research-article-hero"><div class="research-article-meta"><span>${article.type} · ${article.service}</span><span>By <strong>lowob</strong> · <time datetime="${published}">${article.date}</time> · ${article.readTime}</span></div><h1>${article.title}</h1><p>${article.service} · ${article.sectors.join(", ")}</p></header><div class="research-article-layout"><div class="research-article-body">${body}</div><aside class="research-article-aside"><span>MARKET SIGNAL</span><strong>${article.service}</strong><p>${service?.verb || "Commercial analysis."}</p><a class="signal-button" href="/research">All research ${arrowRight.replace('width="24" height="24"', 'width="15" height="15"')}</a></aside></div></article><a class="service-next research-article-next" href="/research/${nextArticle.slug}" style="--next-signal:${services.find((item) => item.name === nextArticle.service)?.color || masterColor}"><span>READ NEXT</span><div><h2>${nextArticle.title}</h2><p>${nextArticle.type} · ${nextArticle.readTime}</p></div>${arrowUpRight}</a>${systemNav()}`;
  return documentShell({ title: `${article.title} | lowob`, description: `${article.type} from lowob Research: ${article.title}`, signal: service?.color || masterColor, content, head });
}

function legalPage(document) {
  const content = `<section class="legal-page-hero"><span>LEGAL / <strong>lowob</strong></span><h1>${document.title}</h1><p>${document.intro}</p><p class="legal-page-meta">Effective 7 September 2026 · Chris Wells, trading as <strong>lowob</strong> · Los Angeles · chris@<strong>lowob</strong>.com</p></section><section class="legal-page-copy">${document.sections.map(([title, copy], index) => `<section><span>${String(index + 1).padStart(2, "0")}</span><h2>${title}</h2><p>${copy}</p></section>`).join("")}</section>`;
  return documentShell({ title: `${document.title} | lowob`, description: document.intro, signal: masterColor, content });
}

function radarAmbientPoints() {
  const points = [[19, 24, -1.1], [27, 78, -3.4], [38, 34, -5.6], [47, 82, -2.2], [59, 20, -6.8], [66, 62, -4.7], [79, 31, -7.5], [84, 73, -2.9], [22, 55, -6.1], [72, 84, -4.1]];
  return points.map(([left, top, delay], index) => `<span class="radar-ambient" style="left:${left}%;top:${top}%;--ambient-delay:${delay}s;--ambient-size:${index % 3 === 0 ? 4 : 3}px"></span>`).join("");
}

function refineHome(home) {
  const headerStart = home.indexOf('<header class="topbar">');
  const workspaceStart = home.indexOf('<div class="workspace">');
  if (headerStart === -1 || workspaceStart === -1) throw new Error("Could not locate the home shell.");
  home = `${home.slice(0, headerStart)}${header()}${home.slice(workspaceStart)}`;
  if (!home.includes('data-refined="true"')) home = home.replace("<body>", '<body data-refined="true">');
  if (!home.includes('/assets/favicon.svg')) home = home.replace('</title>', `</title>${faviconLink}`);
  if (!home.includes('/assets/refined.css')) home = home.replace('<link rel="stylesheet" href="/assets/site.css" />', '<link rel="stylesheet" href="/assets/site.css"><link rel="stylesheet" href="/assets/refined.css">');
  home = home.replace(/\/assets\/site\.css(?:\?v=\d+)?/g, '/assets/site.css?v=18');
  home = home.replace(/\/assets\/refined\.css(?:\?v=\d+)?/g, '/assets/refined.css?v=18');
  home = home.replace(/<meta name="description" content="[^"]*"\s*\/>/, '<meta name="description" content="A unified commercial system for strategy, growth, distribution, revenue, and practical research in complex markets."/>');
  home = home.replace("01 / THE SYSTEM", "THE SYSTEM");
  home = home.replace("02 / OPERATOR-LED", "OPERATOR-LED");
  home = home.replace("START HERE / <strong>lowob</strong>", "START HERE");
  home = home.replace(/<span class="eyebrow"><strong>lowob<\/strong> \/ COMMERCIAL STUDIO<\/span>/, "");
  home = home.replace('<section class="section-block service-section">', '<section class="section-block service-section" id="services">');
  home = home.replace(/<p(?: class="hero-system-line")?>Four functions, one commercial motion\.?<\/p>/, '<p class="hero-system-line"><strong>lowob</strong> connects positioning, growth, distribution, partnerships and revenue into one system, and stays in the work from the decision to the execution.</p>');
  home = home.replace(/<p>Strategy, growth, distribution and revenue—connected as one operating system\.<\/p>/, '<p class="hero-system-line"><strong>lowob</strong> connects positioning, growth, distribution, partnerships and revenue into one system, and stays in the work from the decision to the execution.</p>');
  home = home.replace(/<a class="primary-action"[\s\S]*?<\/a>/, `<a class="primary-action" href="/strategy" style="--signal:${masterColor}"><span class="primary-action-label">Enter Strategy</span> ${arrowRight.replace('width="24" height="24"', 'width="16" height="16"')}</a>`);
  home = home.replace(/<a href="\/strategy" style="--signal:#[0-9a-f]+"><small>01/g, `<a href="/strategy" style="--signal:${strategyColor}"><small>01`);
  home = home.replace(/class="radar-node node-0 active" style="[^"]*"/, `class="radar-node node-0 active" style="left:45%;top:24%;--signal:${strategyColor}"`);
  home = home.replace(/class="radar-node node-1" style="[^"]*"/, 'class="radar-node node-1" style="left:75%;top:42%;--signal:#23d8ff"');
  home = home.replace(/class="radar-node node-2" style="[^"]*"/, 'class="radar-node node-2" style="left:58%;top:76%;--signal:#ff42d0"');
  home = home.replace(/class="radar-node node-3" style="[^"]*"/, 'class="radar-node node-3" style="left:27%;top:59%;--signal:#ff6b35"');
  home = home.replace(/<a class="radar-readout" href="\/strategy" style="--signal:[^"]*"/, `<a class="radar-readout" href="/strategy" style="--signal:${strategyColor}"`);
  home = home.replace(/<span class="radar-ambient"[^>]*><\/span>/g, "");
  home = home.replace('</div><div class="radar-core">', `${radarAmbientPoints()}</div><div class="radar-core">`);
  home = home.replace(/<a class="(?:groundcontrol-band(?: research-band)?|research-band)"[\s\S]*?<\/a>/, researchBand());
  home = home.replace(/<a href="\/ways-to-work">Ways to work[\s\S]*?<\/a>/, `<a href="/contact">Start a conversation ${arrowRight.replace('width="24" height="24"', 'width="16" height="16"')}</a>`);
  home = home.replace(/<section class="operator-note">([\s\S]*?)<div>[\s\S]*?<\/div><\/section>/, '<section class="operator-note">$1<div><a href="/contact">Start a conversation</a><a href="/about">About</a></div></section>');
  home = home.replace("positioning, demand, distribution and revenue—then stays", "positioning, demand, distribution and revenue, then stays");
  home = home.replace(/<h2>Four functions\.<br\/>One commercial (?:motion|solution)\.<\/h2>/, '<h2 class="system-statement">Four Functions, One Commercial Solution</h2>');
  home = home.replace(/<h2 class="system-statement"><strong>lowob<\/strong> connects positioning, growth, distribution, partnerships and revenue into one system, and stays in the work from the decision to the execution\.<\/h2>/, '<h2 class="system-statement">Four Functions, One Commercial Solution</h2>');
  home = home.replace(/<h2 class="system-statement">(?:Four commercial functions\.|Four functions, one commercial motion\.)<\/h2>/, '<h2 class="system-statement">Four Functions, One Commercial Solution</h2>');
  home = home.replace(/<footer(?: class="architecture-footer")?>[\s\S]*?<\/footer>/, footer());
  home = home.replace(/<dialog class="legal-dialog"[\s\S]*?<\/dialog>/g, "");
  home = home.replace(/#(?:39ff72|cfff35)/gi, masterColor);
  return boldLowobText(home);
}

await mkdir(dist, { recursive: true });
const home = await readFile(join(dist, "index.html"), "utf8");
await writeFile(join(dist, "index.html"), refineHome(home));

for (const [index, service] of services.entries()) {
  const output = join(dist, service.slug);
  await mkdir(output, { recursive: true });
  await writeFile(join(output, "index.html"), servicePage(service, index));
}

await mkdir(join(dist, "about"), { recursive: true });
await mkdir(join(dist, "contact"), { recursive: true });
await mkdir(join(dist, "research"), { recursive: true });
await mkdir(join(dist, "terms"), { recursive: true });
await mkdir(join(dist, "privacy"), { recursive: true });
await writeFile(join(dist, "about", "index.html"), aboutPage());
await writeFile(join(dist, "contact", "index.html"), contactPage());
await writeFile(join(dist, "research", "index.html"), researchPage());
for (const [index, article] of researchArticles.entries()) {
  const output = join(dist, "research", article.slug);
  await mkdir(output, { recursive: true });
  await writeFile(join(output, "index.html"), researchArticlePage(article, index));
}
await writeFile(join(dist, "terms", "index.html"), legalPage(legalDocuments[0]));
await writeFile(join(dist, "privacy", "index.html"), legalPage(legalDocuments[1]));

console.log("Built the refined Lowob core site.");
