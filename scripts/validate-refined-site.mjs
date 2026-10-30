import homepageFeatures from './homepage-features.mjs';
import releaseArticles from './research-release.mjs';
import { scanSite, meta, schemas, attributes, textOnly, normalizeSite } from './site-meta.mjs';
import originalBodyHashes from './research-original-hashes.mjs';
import { existsSync } from 'node:fs';
import { access, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";
import researchBodies from "./research-bodies.mjs";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const articleRoutes = [...Object.keys(researchBodies), ...releaseArticles.map(a=>a.slug)].map((slug) => `research/${slug}`);
const routes = ["", "strategy", "growth", "distribution", "revenue", "research", ...articleRoutes, "about", "contact", "terms", "privacy"];
const routeSet = new Set(routes.filter(Boolean).map((route) => `/${route}`));

function hasUnboldedLowob(html) {
  const skipped = new Set(["script", "style", "title", "textarea", "option", "strong", "b"]);
  const voidElements = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
  const stack = [];
  for (const token of html.split(/(<[^>]+>)/g)) {
    if (!token.startsWith("<")) {
      if (!stack.some((tag) => skipped.has(tag)) && /\blowob\b/i.test(token)) return true;
      continue;
    }
    const closing = token.match(/^<\/([a-z0-9-]+)/i);
    if (closing) {
      const index = stack.lastIndexOf(closing[1].toLowerCase());
      if (index !== -1) stack.splice(index, 1);
      continue;
    }
    const opening = token.match(/^<([a-z0-9-]+)/i);
    if (opening && !token.endsWith("/>") && !voidElements.has(opening[1].toLowerCase())) stack.push(opening[1].toLowerCase());
  }
  return false;
}

for (const route of routes) {
  const file = route ? join(dist, route, "index.html") : join(dist, "index.html");
  const html = await readFile(file, "utf8");
  const label = route || "home";
  const expectedCanonical = `https://lowob.com/${route ? `${route}/` : ""}`;

  for (const required of [
    'class="topbar"',
    'class="top-conversation"',
    'class="index-trigger"',
    'class="architecture-footer"',
    'class="footer-links-grid"',
    'href="/terms"',
    'href="/privacy"',
    'href="/assets/favicon.svg"',
    'href="/assets/site.css?v=18"',
    'href="/assets/refined.css?v=28"',
    'href="/assets/scroll-reveal.css?v=6"',
    'src="/assets/clone.js?v=4"',
    'src="/assets/scroll-reveal.js?v=6"',
  ]) {
    if (!html.includes(required)) throw new Error(`${label} is missing ${required}`);
  }

  if (!html.includes(`<link rel="canonical" href="${expectedCanonical}">`)) {
    throw new Error(`${label} is missing its apex-domain canonical URL`);
  }
  if (!html.includes('<meta name="robots" content="index, follow">')) {
    throw new Error(`${label} is not indexable`);
  }

  if (html.includes('href="/ways-to-work')) {
    throw new Error(`${label} still links to a removed core page`);
  }

  if (html.includes('class="legal-dialog"')) throw new Error(`${label} still contains a legal modal`);
  if (html.includes('class="footer-locations"')) throw new Error(`${label} still contains the removed city list`);
  if (html.includes('<span>commercial studio</span>')) throw new Error(`${label} still contains the removed footer descriptor`);
  const footerHtml = html.match(/<footer class="architecture-footer">[\s\S]*?<\/footer>/)?.[0] || "";
  if (!/<div class="footer-links-grid">[\s\S]*?<\/div><p class="footer-copyright">/.test(footerHtml)) throw new Error(`${label} does not place copyright beneath the footer links block`);
  if (footerHtml.includes('mailto:chris@lowob.com')) throw new Error(`${label} still contains the footer email`);
  if (!releaseArticles.some(a=>route===`research/${a.slug}`) && hasUnboldedLowob(html)) throw new Error(`${label} contains an unbolded lowob text mention`);
  if (/#(?:39ff72|cfff35)/i.test(html)) throw new Error(`${label} contains an outdated green value`);

  if (route && />\s*Back\s*</.test(html)) {
    throw new Error(`${label} still contains a standalone Back control`);
  }

  const visibleText = html
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/<!--.*?-->/g, " ");
  if (!releaseArticles.some(a=>route===`research/${a.slug}`) && visibleText.includes("--")) throw new Error(`${label} contains a visible double dash`);
  if (route && !releaseArticles.some(a=>route===`research/${a.slug}`) && /ground\s*control/i.test(visibleText)) throw new Error(`${label} unexpectedly exposes Ground Control`);

  for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) {
    const href = match[1].split("#")[0].replace(/\/$/, "");
    if (!href || href === "") continue;
    if (!routeSet.has(href) && !existsSync(join(dist, href))) throw new Error(`${label} links to missing route ${href}`);
  }
}

const socialPreview = await readFile(join(dist, "assets", "social-preview.png"));
const socialPreviewHash = createHash("sha256").update(socialPreview).digest("hex");
if (socialPreviewHash !== "db6ef2f2cf885b6f7659f1db3abb7a06314f60cf4ef577675f1a412817d55e13") throw new Error("Approved social preview image bytes changed");

const sitemap = await readFile(join(dist, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== routes.length) throw new Error(`Expected ${routes.length} sitemap URLs, found ${sitemapUrls.length}`);
for (const route of routes) {
  const expectedUrl = `https://lowob.com/${route ? `${route}/` : ""}`;
  if (!sitemapUrls.includes(expectedUrl)) throw new Error(`Sitemap is missing ${expectedUrl}`);
}
if (sitemapUrls.some((url) => !url.startsWith("https://lowob.com/"))) throw new Error("Sitemap contains a non-apex URL");

const robots = await readFile(join(dist, "robots.txt"), "utf8");
if (!robots.includes("User-agent: *\nAllow: /")) throw new Error("robots.txt does not allow crawling");
if (!robots.includes("Sitemap: https://lowob.com/sitemap.xml")) throw new Error("robots.txt does not identify the sitemap");

const research = await readFile(join(dist, "research", "index.html"), "utf8");
if ((research.match(/data-research-card/g) || []).length !== 166) throw new Error("Research library is missing articles");
for (const required of ['data-research-filter="All"', 'data-research-filter="Strategy"', 'data-research-filter="AI"']) {
  if (!research.includes(required)) throw new Error(`Research page is missing ${required}`);
}
if (!research.includes('data-filter-group="function"') || !research.includes('data-filter-group="market"')) throw new Error("Research filters are not split into two tiers");
if (/<a class="research-card" href="https:\/\/www\.lowob\.com\/research\//.test(research)) throw new Error("Research cards use absolute links instead of local routes");
if (!research.includes('<a class="service-next research-next" href="/about"')) throw new Error("Research closing banner does not link to About");
if (!research.includes("Operator experience. Studio flexibility.")) throw new Error("Research closing banner is missing its About-page heading");

let takeawayCount = 0;
for (const slug of Object.keys(researchBodies)) {
  const html = await readFile(join(dist, "research", slug, "index.html"), "utf8");
  if (!html.includes('class="research-article-body"')) throw new Error(`${slug} is missing its article body`);
  if (html.includes("<blockquote")) throw new Error(`${slug} still contains boxed editorial callouts`);
  takeawayCount += (html.match(/class="article-takeaway"/g) || []).length;
  if (!html.includes('meta name="author" content="lowob"')) throw new Error(`${slug} is missing author metadata`);
  if (!html.includes('property="article:published_time"')) throw new Error(`${slug} is missing publication-date metadata`);
  if (!html.includes('type="application/ld+json"')) throw new Error(`${slug} is missing Article structured data`);
}
if (takeawayCount !== 30) throw new Error(`Expected 30 Lowob takeaway callouts, found ${takeawayCount}`);

const home = await readFile(join(dist, "index.html"), "utf8");
if (!home.includes("service you need.<br>Tell us where the business is getting stuck.")) throw new Error("Homepage closing sentence break is missing");
if (!home.includes("Four Functions, One Commercial Solution")) throw new Error("Homepage commercial-system heading is missing");
if (!home.includes('href="/strategy" style="--signal:#a879ff"')) throw new Error("Strategy is not using the ultraviolet signal");
if (!home.includes('class="primary-action" href="/strategy" style="--signal:#a879ff"')) throw new Error("Homepage primary action is not using the default Strategy signal");
if (home.includes('class="operator-note"')) throw new Error("Homepage still contains the removed operator section");
if (/About\s*(?:<strong>)?lowob/i.test(home)) throw new Error("Homepage About button still includes the lowob name");
if (home.includes('class="eyebrow"')) throw new Error("Homepage still contains the removed eyebrow");
if (!home.includes("connects positioning, growth, distribution, partnerships and revenue into one system, and stays in the work from the decision to the execution.")) throw new Error("Homepage is missing the new commercial-system statement");
if (!home.includes('<span class="primary-action-label">Enter Strategy</span>')) throw new Error("Homepage primary action label is malformed");
if (!home.includes("INDUSTRY INSIGHTS")) throw new Error("Homepage research band is missing Industry Insights");
if (!home.includes('class="research-lockup"><div class="lowob-mark"')) throw new Error("Homepage research lockup is missing the Lowob mark");
if ((home.match(/class="home-research-card"/g) || []).length !== 3) throw new Error("Homepage must contain exactly three featured Research articles");
for (const slug of homepageFeatures.map(a=>a.slug)) {
  if (!home.includes(`href="/research/${slug}/"`)) throw new Error(`Homepage is missing featured Research article ${slug}`);
}
if (!home.includes("All research")) throw new Error("Homepage is missing the full Research-library link");
if (!home.includes('<div class="closing-layout"><h2>Bring us the commercial problem.</h2><i class="closing-divider" aria-hidden="true"></i><p class="closing-positioning"><strong>lowob</strong> brings senior commercial judgment into positioning, demand, distribution and revenue, then stays close enough to make the work executable.</p>')) throw new Error("Homepage closing section is missing the restored aligned copy layout");
if (!home.includes('<nav class="detail-system home-closing-nav" aria-label="Commercial system">')) throw new Error("Homepage is missing its standard commercial system menu");
if (home.includes('<section class="closing-dark"><span>START HERE</span>')) throw new Error("Homepage closing section still includes the excluded START HERE label");
for (const required of [
  'id="ground-control-beta"',
  'class="gc-entry-brand"><strong>groundcontrol</strong><em class="gc-beta-badge">BETA</em><span>by <b>lowob</b></span>',
  'Find the next move.',
  'id="gc-beta-form"',
  'action="https://formspree.io/f/myeyngpb"',
  'name="email"',
  'type="email"',
  'Join the beta',
  'class="gc-product-preview"',
  'class="gc-preview-shell"',
  'class="gc-preview-dashboard"',
  'class="gc-preview-radar"',
  'CONTROL ROOM / SYSTEM VIEW',
  'class="gc-boot"',
  'href="/assets/ground-control-entry.css?v=9"',
  'src="/assets/ground-control-entry.js?v=3"',
]) {
  if (!home.includes(required)) throw new Error(`Homepage Ground Control entry is missing ${required}`);
}
if ((home.match(/id="gc-beta-email"/g) || []).length !== 1) throw new Error("Homepage must contain exactly one Ground Control email field");
if ((home.match(/Find the next move\./g) || []).length !== 1) throw new Error("Ground Control preview repeats the section headline");
if (home.indexOf('class="research-band"') > home.indexOf('id="ground-control-beta"')) throw new Error("Ground Control entry must follow the homepage Research section");
if (/gc-boot-lockup[\s\S]{0,180}GROUND CONTROL/.test(home)) throw new Error("Loading screen still includes Ground Control wording");
if (!home.includes('class="gc-boot-lockup"><div class="lowob-mark"')) throw new Error("Loading screen is missing the Lowob logo and wordmark lockup");
if (home.includes('class="gc-entry-eyebrow"')) throw new Error("Ground Control entry still uses the old eyebrow treatment");
if (/<div class="gc-preview-brand">\s*<div class="lowob-mark"/.test(home)) throw new Error("Ground Control preview still includes the logo mark");
const groundControlEntry = home.match(/<section class="gc-entry"[\s\S]*?<\/section>/)?.[0] || "";
if (groundControlEntry.includes("—") || groundControlEntry.includes("--")) throw new Error("Ground Control entry contains a dash construction");
if (groundControlEntry.includes("ground-control-control-room.png")) throw new Error("Ground Control entry still uses the literal MVP screenshot");

const about = await readFile(join(dist, "about", "index.html"), "utf8");
if (!about.includes("I've watched that problem from every seat.")) throw new Error("About page is missing the longer founder quote");
if (!about.includes("Nobody else is standing in that gap")) throw new Error("About page founder quote is incomplete");
if (!about.includes('<p class="founder-observation"><strong>lowob</strong> was built around a simple observation:</p><blockquote>')) throw new Error("About founder observation is not separated above the quote");
const aboutBoxes = about.match(/<section class="detail-grid about-grid refined-about-grid">[\s\S]*?<\/section>/)?.[0] || "";
if (/>\s*(?:<strong>)?lowob(?:<\/strong>)?\b/i.test(aboutBoxes)) throw new Error("About boxes still contain the lowob name");
if (about.includes('class="footer-locations"')) throw new Error("Footer city list was not removed");
if (!about.includes('<a class="service-next" href="/contact"><span>NEXT MOVE</span><div><h2>Discuss the work</h2>')) throw new Error("About closing banner was changed unexpectedly");

for (const route of ["terms", "privacy"]) {
  const html = await readFile(join(dist, route, "index.html"), "utf8");
  if (!html.includes('class="legal-page-copy"')) throw new Error(`${route} is not a dedicated legal page`);
}

const contact = await readFile(join(dist, "contact", "index.html"), "utf8");
if (!contact.includes("engagement yourself.<br>A focused brief is enough.")) throw new Error("Contact hero sentence break is missing");
if (!contact.includes('<main class="lowob-shell detail-page" style="--signal:#39FF14">')) throw new Error("Contact page is missing its neon-green theme");
for (const required of [
  'id="brief-form"',
  'action="https://formspree.io/f/myeyngpb"',
  'name="name"',
  'name="email"',
  'name="company"',
  'name="problem"',
  'name="budget"',
  'name="brief"',
  'id="brief-form-status"',
]) {
  if (!contact.includes(required)) throw new Error(`Contact form is missing ${required}`);
}

for (const asset of ["site.css", "refined.css", "clone.js", "scroll-reveal.css", "scroll-reveal.js", "ground-control-entry.css", "ground-control-entry.js", "chris-wells.jpeg"]) {
  await access(join(dist, "assets", asset));
}

for (const stylesheet of ["site.css", "refined.css"]) {
  const css = await readFile(join(dist, "assets", stylesheet), "utf8");
  if (/#(?:39ff72|cfff35)/i.test(css)) throw new Error(`${stylesheet} contains an outdated green value`);
}

const cloneScript = await readFile(join(dist, "assets", "clone.js"), "utf8");
if (!cloneScript.includes('target.classList.add("gradient-motion")')) throw new Error("Gradient motion targets are not initialized");
if (!cloneScript.includes('window.matchMedia("(prefers-reduced-motion: reduce)")')) throw new Error("Gradient motion does not respect reduced-motion preferences");
if (!cloneScript.includes('".closing-dark"')) throw new Error("Homepage closing section is missing gradient motion");
if (!cloneScript.includes('".research-article-body"')) throw new Error("Research content pages are missing gradient motion");
if (!cloneScript.includes('".contact-box"')) throw new Error("Contact information boxes are missing gradient motion");
if (cloneScript.includes('".refined-about-grid article"')) throw new Error("About blocks must use a static resting gradient");
if (cloneScript.includes('".engagement-grid article"')) throw new Error("Contact engagement blocks must use a static resting gradient");
if (cloneScript.includes('".service-next"')) throw new Error("Bottom page links still use gradient motion");

const scrollRevealScript = await readFile(join(dist, "assets", "scroll-reveal.js"), "utf8");
if (!scrollRevealScript.includes('if (document.querySelector(".research-article-hero")) return;')) {
  throw new Error("Research article pages do not bypass the scroll reveal system");
}
for (const required of [
  'window.matchMedia("(prefers-reduced-motion: reduce)")',
  '"IntersectionObserver" in window',
  "observer.unobserve(entry.target)",
  'entry.target.classList.add("is-revealed")',
  '".hero-copy"',
  '".hero-orbit"',
  '".gc-entry-copy"',
  '".gc-product-preview"',
  '".contact-form-wrap"',
  '".engagement-heading"',
  '".research-article-body"',
  'new MutationObserver',
  'requestAnimationFrame',
  'element.style.setProperty("--scroll-delay", "600ms")',
  '".closing-divider"',
]) {
  if (!scrollRevealScript.includes(required)) throw new Error(`Scroll reveal behavior is missing ${required}`);
}
if (scrollRevealScript.includes('[".gc-beta-form"')) throw new Error("Ground Control form details are still revealed separately");
if (scrollRevealScript.includes('[".contact-form-wrap"')) throw new Error("Contact form contents are still revealed separately");
if (scrollRevealScript.includes(":scope > .hero-actions")) throw new Error("Homepage hero buttons must load immediately");
for (const excluded of ['".architecture-footer"', '".detail-system"', '".home-closing-nav"', '".research-grid"']) {
  if (scrollRevealScript.includes(excluded)) throw new Error(`Scroll reveal must not target ${excluded}`);
}
if (scrollRevealScript.includes('".hero-visual"')) throw new Error("Scroll reveal still uses the obsolete homepage radar selector");

const scrollRevealCss = await readFile(join(dist, "assets", "scroll-reveal.css"), "utf8");
for (const required of [
  "--scroll-distance:24px",
  "--scroll-duration:780ms",
  "cubic-bezier(.16,1,.3,1)",
  "scale:.99",
  ".scroll-reveal.scroll-reveal-visual",
  ".gc-product-preview.scroll-reveal-visual{--scroll-duration:250ms;translate:none;scale:1;transition:opacity var(--scroll-duration) ease-out;will-change:opacity}",
  ".gc-product-preview.scroll-reveal-visual.is-revealed{opacity:1;will-change:auto}",
  "--scroll-duration:900ms",
  "@media(max-width:780px)",
  "--scroll-distance:16px",
  "--scroll-duration:650ms",
  "@media(prefers-reduced-motion:reduce)",
]) {
  if (!scrollRevealCss.includes(required)) throw new Error(`Scroll reveal styling is missing ${required}`);
}
const refinedCss = await readFile(join(dist, "assets", "refined.css"), "utf8");
if (!refinedCss.includes(".hero-actions .primary-action{background:#0c0c0c;border-color:var(--button-signal);color:var(--button-signal)}")) throw new Error("Homepage Enter Strategy button is missing its outlined resting state");
if (!refinedCss.includes(".hero-actions a:not(.primary-action){--button-signal:var(--lime);border-color:var(--button-signal);color:var(--button-signal)}")) throw new Error("Homepage Bring us the problem button is missing its neon-green outlined state");
if (!refinedCss.includes("@keyframes ambient-gradient-drift")) throw new Error("Mobile gradient drift is missing");
if (!refinedCss.includes(".closing-dark.gradient-motion")) throw new Error("Homepage closing gradient styling is missing");
if (!refinedCss.includes(".research-article-body.gradient-motion")) throw new Error("Research content-page gradient styling is missing");
if (!refinedCss.includes(".contact-box.gradient-motion")) throw new Error("Contact information-box gradient styling is missing");
if (!refinedCss.includes(".refined-about-grid article{background:radial-gradient(ellipse 68% 92% at 82% 16%,color-mix(in srgb,var(--radar-green) 8%,transparent)")) throw new Error("About blocks are missing their softened static gradient");
if (!refinedCss.includes(".engagement-grid article{background:radial-gradient(ellipse 68% 92% at 84% 14%,color-mix(in srgb,var(--signal) 8%,transparent)")) throw new Error("Contact engagement blocks are missing their softened static gradient");
if (!refinedCss.includes(".contact-box.gradient-motion:not(:hover):not(:focus-within){--glow-rest-x:84%;--glow-rest-y:14%;background:radial-gradient")) throw new Error("Contact information boxes are missing their softened moving gradient");
if (!refinedCss.includes(".contact-box.gradient-motion:hover,.contact-box.gradient-motion:focus-within{--glow-rest-x:84%;--glow-rest-y:14%;background:radial-gradient(ellipse 68% 92% at var(--glow-x) var(--glow-y),color-mix(in srgb,var(--signal) 48%,transparent)")) throw new Error("Contact information hover gradient no longer follows the cursor");
if (!refinedCss.includes("color-mix(in srgb,var(--signal) 8%,transparent),transparent 68%),#0c0c0c!important")) throw new Error("Contact resting gradients do not preserve the dark background");
if (!refinedCss.includes(".refined-about-grid article:hover,.refined-about-grid article:focus-within{background:radial-gradient(circle at 82% 16%,color-mix(in srgb,var(--radar-green) 38%,transparent)")) throw new Error("About inverted hover treatment changed");
if (!refinedCss.includes(".contact-box:hover,.contact-box:focus-within{background:radial-gradient(circle at 84% 14%,color-mix(in srgb,var(--signal) 46%,transparent)")) throw new Error("Contact information hover treatment changed");
if (!refinedCss.includes(".engagement-grid article:hover,.engagement-grid article:focus-within{background:radial-gradient(circle at 84% 14%,color-mix(in srgb,var(--signal) 46%,transparent)")) throw new Error("Contact engagement hover treatment changed");
if (!refinedCss.includes(".footer-links-grid a:hover,.footer-links-grid a:focus-visible{background:var(--radar-green);color:#080808;box-shadow:0 0 0 4px var(--radar-green)}")) throw new Error("Footer links are missing their green square hover state");
if (refinedCss.includes(".service-next.gradient-motion")) throw new Error("Bottom page link gradient styling is still present");

const groundControlScript = await readFile(join(dist, "assets", "ground-control-entry.js"), "utf8");
for (const required of [
  'window.sessionStorage.setItem("lowob-gc-entry-seen", "1")',
  'window.matchMedia("(prefers-reduced-motion: reduce)")',
  'event.preventDefault()',
  'headers: { Accept: "application/json" }',
  'Thanks. You’re on the list for Ground Control updates and beta access.',
]) {
  if (!groundControlScript.includes(required)) throw new Error(`Ground Control behavior is missing ${required}`);
}
const groundControlCss = await readFile(join(dist, "assets", "ground-control-entry.css"), "utf8");
if (!groundControlCss.includes("@media(prefers-reduced-motion:reduce)")) throw new Error("Ground Control motion does not respect reduced-motion preferences");
if (!groundControlCss.includes("@media(max-width:700px)")) throw new Error("Ground Control entry lacks mobile styling");
if (!groundControlCss.includes(".gc-entry::before") || !groundControlCss.includes("repeating-radial-gradient")) throw new Error("Ground Control entry is missing the signal-grid treatment");
if (/\.gc-entry-copy\{[^}]*radial-gradient/.test(groundControlCss)) throw new Error("Ground Control signup copy still contains the removed corner glow");
if (!groundControlCss.includes('grid-template-areas:"title divider positioning" "support divider action"')) throw new Error("Homepage closing section does not use the restored aligned two-column layout");
if (!groundControlCss.includes(".closing-target") || !groundControlCss.includes(".closing-divider")) throw new Error("Homepage closing section is missing its target or center divider");
if (!groundControlCss.includes(".closing-dark.gradient-motion") || !groundControlCss.includes("radial-gradient(ellipse 48% 74%")) throw new Error("Homepage closing section is missing its pointer-following green glow");
if (/\.closing-dark\{[^}]*linear-gradient/.test(groundControlCss)) throw new Error("Homepage closing section still includes a grid background");
if (!groundControlCss.includes(".gc-boot-lockup .lowob-mark span{width:4px;height:15px")) throw new Error("Loading-screen logo geometry is not scaled with its container");
if (!groundControlCss.includes(".gc-preview-radar>b{position:absolute;z-index:2;left:50%;top:-12%;width:1px;height:62%")) throw new Error("Ground Control radar beam is not fully extended");

console.log(`Validated ${routes.length} pages, navigation, research, dedicated legal pages, form, links, and assets.`);

const records = scanSite(dist);
if(records.length !== 178 || records.filter(r=>r.excluded).length !== 2) throw new Error('Unexpected public/preview page count');
for(const r of records) {
  if(r.excluded) {
    if(!r.noindex || sitemap.includes(r.url)) throw new Error(`Preview indexing policy changed: ${r.p}`);
    continue;
  }
  for(const key of ['description','og:title','og:description','og:url','og:type','og:image','twitter:card','twitter:title','twitter:description','twitter:image']) if(!meta(r.head,key)) throw new Error(`${r.p}: missing ${key}`);
  if(meta(r.head,'og:url')!==r.url) throw new Error(`${r.p}: wrong og:url`);
  const image=meta(r.head,'og:image');
  if(!image.startsWith('https://lowob.com/') || !existsSync(join(dist,image.slice('https://lowob.com/'.length)))) throw new Error(`${r.p}: missing share image`);
  if(/\{\{[A-Z_]+\}\}/.test(r.html)) throw new Error(`${r.p}: unfilled placeholder`);
  if(r.article) {
    const ld=schemas(r.head), article=ld.find(j=>j['@type']==='Article');
    if(!article || article.mainEntityOfPage!==r.url || article.author.name!=='lowob') throw new Error(`${r.p}: invalid Article metadata`);
    if(!article.dateModified || Date.parse(article.dateModified)>Date.now()+60000) throw new Error(`${r.p}: missing or future dateModified`);
    if(meta(r.head,'og:type')!=='article' || image!==r.url+'share.png') throw new Error(`${r.p}: non-specific social metadata`);
    const slug=r.p.split('/')[2], release=releaseArticles.find(a=>a.slug===slug);
    const body=r.html.match(/<div class="research-article-body">([\s\S]*?)<\/div><aside class="research-article-aside">/)?.[1];
    if(!body) throw new Error(`${r.p}: missing body`);
    if(release) {
      const expectedTitle=release.searchTitle || release.title;
      if(meta(r.head,"og:title")!==expectedTitle || meta(r.head,"twitter:title")!==expectedTitle || textOnly(r.head.match(/<title>([\s\S]*?)<\/title>/)?.[1])!==expectedTitle+" | lowob") throw new Error(`${r.p}: incorrect search title`);
      const original=body.replace(/<div class="article-table-scroll"[^>]*>/g,'').replace(/<\/table><\/div>/g,'</table>').replace(/\n$/,'');
      if(createHash('sha256').update(original).digest('hex')!==release.bodyHash) throw new Error(`${r.p}: supplied body altered`);
      if(article.datePublished!==release.publishDate || !r.html.includes(`datetime="${release.publishDate}"`)) throw new Error(`${r.p}: changed publication date`);
      if(textOnly(r.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1])!==release.title) throw new Error(`${r.p}: changed editorial headline`);
      const faq=ld.find(j=>j['@type']==='FAQPage');
      if(!faq || !faq.mainEntity.length || !body.includes('In short:') || !body.includes('Key points') || !body.includes('Common questions')) throw new Error(`${r.p}: summary/FAQ incomplete`);
    } else if(createHash('sha256').update(body).digest('hex')!==originalBodyHashes[slug]) throw new Error(`${r.p}: original article body altered`);
  }
}
const libraryCards=[...research.matchAll(/<a class="research-card"[\s\S]*?<\/a>/g)].map(m=>m[0]);
const dates=libraryCards.map(h=>h.match(/datetime="([^"]+)"/)[1]);
if(dates.some((d,i)=>i>0 && d>dates[i-1])) throw new Error('Research hub is not newest-first');
if(new Set(libraryCards.map(h=>h.match(/href="([^"]+)"/)[1])).size!==166) throw new Error('Hub has duplicate/missing cards');
const check=normalizeSite(dist);
if(check.errors.length || check.changed) throw new Error(`Metadata is inconsistent: ${check.errors.join('; ')}; ${check.changed} pending changes`);
const llms=await readFile(join(dist,'llms.txt'),'utf8');
if(llms.includes('directory-preview') || sitemap.includes('directory-preview')) throw new Error('Public indexes expose private previews');
console.log('Validated all 166 article bodies, publication dates, Article/FAQ schemas, social metadata, 176 sitemap URLs, noindex previews and hub ordering.');

const featuredCards=[...home.matchAll(/<a class="home-research-card"[\s\S]*?<\/a>/g)].map(m=>m[0]);
for(const [i,a] of homepageFeatures.entries()) {
 const card=featuredCards[i];
 if(!card?.includes(`href="/research/${a.slug}/"`)) throw new Error(`Featured card ${i+1}: incorrect order or route`);
 const h=textOnly(card.match(/<h3>([\s\S]*?)<\/h3>/)?.[1]);
 const p=textOnly(card.match(/<p>([\s\S]*?)<\/p>/)?.[1]);
 const label=textOnly(card.match(/<div class="home-research-meta"><span>([\s\S]*?)<\/span>/)?.[1]);
 if(h!==a.title || p!==a.excerpt || label!==a.label) throw new Error(`Featured card ${i+1}: approved copy mismatch`);
}
console.log('Final three homepage cards match the approved copy, routes and order.');
