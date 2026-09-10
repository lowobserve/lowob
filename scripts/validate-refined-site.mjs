import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import researchBodies from "./research-bodies.mjs";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const articleRoutes = Object.keys(researchBodies).map((slug) => `research/${slug}`);
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
    'href="/assets/refined.css?v=18"',
  ]) {
    if (!html.includes(required)) throw new Error(`${label} is missing ${required}`);
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
  if (hasUnboldedLowob(html)) throw new Error(`${label} contains an unbolded lowob text mention`);
  if (/#(?:39ff72|cfff35)/i.test(html)) throw new Error(`${label} contains an outdated green value`);

  if (route && />\s*Back\s*</.test(html)) {
    throw new Error(`${label} still contains a standalone Back control`);
  }

  const visibleText = html
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/<!--.*?-->/g, " ");
  if (visibleText.includes("--")) throw new Error(`${label} contains a visible double dash`);
  if (/ground\s*control/i.test(visibleText)) throw new Error(`${label} still exposes Ground Control`);

  for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) {
    const href = match[1].split("#")[0].replace(/\/$/, "");
    if (!href || href === "") continue;
    if (!routeSet.has(href)) throw new Error(`${label} links to missing route ${href}`);
  }
}

const research = await readFile(join(dist, "research", "index.html"), "utf8");
if ((research.match(/data-research-card/g) || []).length !== 33) throw new Error("Research library is missing articles");
for (const required of ['data-research-filter="All"', 'data-research-filter="Strategy"', 'data-research-filter="AI"']) {
  if (!research.includes(required)) throw new Error(`Research page is missing ${required}`);
}
if (!research.includes('data-filter-group="function"') || !research.includes('data-filter-group="market"')) throw new Error("Research filters are not split into two tiers");
if (/href="https:\/\/www\.lowob\.com\/research\//.test(research)) throw new Error("Research cards still link to the old site");

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
if (!home.includes("Four Functions, One Commercial Solution")) throw new Error("Homepage commercial-system heading is missing");
if (!home.includes('href="/strategy" style="--signal:#a879ff"')) throw new Error("Strategy is not using the ultraviolet signal");
if (!home.includes('class="primary-action" href="/strategy" style="--signal:#39FF14"')) throw new Error("Homepage primary action is not using radar green");
if (!home.includes('<div><a href="/contact">Start a conversation</a><a href="/about">About</a></div></section>')) throw new Error("Homepage operator actions are not ordered correctly");
if (/About\s*(?:<strong>)?lowob/i.test(home)) throw new Error("Homepage About button still includes the lowob name");
if (home.includes('class="eyebrow"')) throw new Error("Homepage still contains the removed eyebrow");
if (!home.includes("connects positioning, growth, distribution, partnerships and revenue into one system, and stays in the work from the decision to the execution.")) throw new Error("Homepage is missing the new commercial-system statement");
if (!home.includes('<span class="primary-action-label">Enter Strategy</span>')) throw new Error("Homepage primary action label is malformed");
if (!home.includes("INDUSTRY INSIGHTS")) throw new Error("Homepage research band is missing Industry Insights");
if (!home.includes('class="research-lockup"><div class="lowob-mark"')) throw new Error("Homepage research lockup is missing the Lowob mark");

const about = await readFile(join(dist, "about", "index.html"), "utf8");
if (!about.includes("I've watched that problem from every seat.")) throw new Error("About page is missing the longer founder quote");
if (!about.includes("Nobody else is standing in that gap")) throw new Error("About page founder quote is incomplete");
const aboutBoxes = about.match(/<section class="detail-grid about-grid refined-about-grid">[\s\S]*?<\/section>/)?.[0] || "";
if (/>\s*(?:<strong>)?lowob(?:<\/strong>)?\b/i.test(aboutBoxes)) throw new Error("About boxes still contain the lowob name");
if (about.includes('class="footer-locations"')) throw new Error("Footer city list was not removed");

for (const route of ["terms", "privacy"]) {
  const html = await readFile(join(dist, route, "index.html"), "utf8");
  if (!html.includes('class="legal-page-copy"')) throw new Error(`${route} is not a dedicated legal page`);
}

const contact = await readFile(join(dist, "contact", "index.html"), "utf8");
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

for (const asset of ["site.css", "refined.css", "clone.js", "chris-wells.jpeg"]) {
  await access(join(dist, "assets", asset));
}

for (const stylesheet of ["site.css", "refined.css"]) {
  const css = await readFile(join(dist, "assets", stylesheet), "utf8");
  if (/#(?:39ff72|cfff35)/i.test(css)) throw new Error(`${stylesheet} contains an outdated green value`);
}

console.log(`Validated ${routes.length} pages, navigation, research, dedicated legal pages, form, links, and assets.`);
