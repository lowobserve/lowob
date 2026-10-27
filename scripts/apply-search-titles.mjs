#!/usr/bin/env node
// Separate, idempotent add-on to the lowob 133-article release.
// Uses the exact 88 search-title pairs from Chris's Oct 26 add-on.
// Only changes <title>, og:title and twitter:title in the HTML <head>.
// Does not rewrite visible H1s, dates, canonical tags, JSON-LD, descriptions or article content.
// Usage: node launch/apply-search-titles.mjs --site /path/to/dist [--dry-run]
import fs from "node:fs";
import path from "node:path";
const titles = {
  "you-dont-have-three-problems": "Fundraising, Community and Sales Are One System",
  "one-truth-three-audiences": "How to Write One Product Truth for Three Audiences",
  "raise-against-evidence-not-narrative": "What Evidence Investors Want at Seed Stage",
  "run-the-round-like-a-sales-process": "How to Run a Startup Fundraise Like a Sales Process",
  "community-is-a-job-not-a-number": "How to Measure Startup Community Success",
  "the-first-hundred": "The First 100 Members: Building a Startup Community",
  "your-first-ten-customers-are-design-partners": "How to Choose Design Partners as Your First Customers",
  "distribution-when-the-platforms-are-closed": "How to Market When Ad Platforms Won't Carry You",
  "stop-reporting-reach": "Startup Metrics to Report Instead of Reach",
  "build-it-to-run-without-you": "How to Own Your Go-to-Market System, Not Rent It",
  "the-model-is-not-the-product": "AI Startup Positioning: The Model Is Not the Product",
  "the-pilot-that-survives-security-review": "How to Run an AI Pilot That Survives Security Review",
  "developers-marketplaces-and-the-answer-engines": "AI Startup Distribution: Developers, Marketplaces, AI Search",
  "raising-for-an-ai-company": "How to Raise Funding for an AI Startup",
  "seats-usage-or-outcomes": "AI Pricing: Per Seat, Usage-Based or Outcome-Based?",
  "the-user-story-before-the-token-story": "Crypto Positioning: Lead With the User, Not the Token",
  "token-or-no-token": "Does Your Crypto Startup Need a Token?",
  "community-that-survives-the-airdrop": "How to Keep Crypto Users After an Airdrop",
  "issuers-integrations-and-curators": "Crypto Distribution: Issuers, Integrations, Curators",
  "protocol-revenue-fees-real-yield-and-what-to-report": "Protocol Revenue vs TVL: What a Protocol Should Report",
  "trust-is-the-product": "How Fintech Startups Build Customer Trust",
  "raising-in-a-regulated-category": "How to Raise Funding for a Fintech Startup",
  "distribute-through-whoever-already-holds-the-customer": "Fintech Customer Acquisition Through Partners",
  "the-people-who-vouch-for-you": "How Fintech Companies Build Community and Referrals",
  "from-funded-account-to-lifetime-value": "Fintech Revenue: From Funded Account to Lifetime Value",
  "an-audience-is-not-a-business": "Media Startups: Why an Audience Is Not a Business",
  "what-investors-fund-in-media-now": "What Investors Fund in Media Companies Now",
  "membership-is-the-job": "How to Turn a Newsletter Audience Into Paid Membership",
  "your-first-ten-sponsors-are-design-partners": "How to Sell Sponsorships for a Niche Media Company",
  "from-reach-to-recurring": "Publisher Revenue After AI Search: From Reach to Recurring",
  "selling-what-nobody-has-a-budget-line-for": "How to Sell New Technology When Buyers Have No Budget",
  "raising-for-long-cycles": "How to Raise Funding for Deep Tech and Long Cycles",
  "the-first-two-fifths": "What Enterprise Brain Products Ship, and What They Skip",
  "a-loop-with-good-context": "AI Agent Context: Add a Precedent Slot to Every Task",
  "first-customers-in-a-market-that-doesnt-exist-yet": "How to Find First Customers in a Brand-New Market",
  "the-trade-must-clear-on-the-spot": "Why Employees Don't Share Knowledge, and How to Fix It",
  "intent-not-a-destination": "How to Prompt AI for Decisions Without Biasing the Answer",
  "integrators-oems-and-channel-partners": "Selling Through Integrators, OEMs and Channel Partners",
  "ask-for-the-gap-not-the-summary": "Gap-Seeking: How a Decision System Asks the Right Question",
  "the-reason-nobody-types": "Why Decision Records Mislead, and How to Fix Them",
  "retrieval-is-not-the-bottleneck": "Why AI Memory Gives Wrong Answers When the Data Is There",
  "revenue-models-for-long-cycles": "Revenue Models for Hardware and Deep Tech Startups",
  "supersede-never-overwrite": "Supersede, Never Overwrite: Versioning AI Memory",
  "the-false-premise-is-the-expensive-failure": "False-Premise Errors: The Costliest AI Memory Failure",
  "keep-the-sources-let-the-summary-regenerate": "AI Meeting Summaries: Keep the Transcripts as the Source",
  "the-story-isnt-landing": "Why Your Pitch Isn't Landing With Investors",
  "the-field-that-makes-a-record-a-judgment": "How to Write a Falsifier for Every Business Decision",
  "calibration-is-the-honest-learning-signal": "Calibration: How to Tell if Your Judgment Is Improving",
  "dissent-is-the-data-you-are-throwing-away": "Why Committees Should Record Dissenting Views",
  "the-round-has-stalled": "What to Do When Your Fundraising Round Stalls",
  "approval-rate-measures-fatigue-too": "Human-in-the-Loop AI: Why Approval Rate Misleads",
  "the-graveyard": "How to Stop Repeating Failed Initiatives",
  "where-judgment-arrives-first": "Where AI Decision Support Works First",
  "40-000-members-and-nobody-does-anything": "Why Your Large Crypto Community Is Inactive",
  "regulators-want-the-chain-not-the-model": "AI Audit Trails: What Financial Regulators Expect",
  "a-reviewer-who-does-not-verify-is-not-a-control": "Human Review of AI Output Is Not a Control by Itself",
  "whoever-holds-the-record-holds-the-company": "Enterprise AI Lock-In: Own Your Decision Record",
  "we-shipped-everything-and-the-number-went-down": "Why Metrics Drop After a Big Product Release",
  "the-humans-carrying-context-are-the-price-signal": "Forward-Deployed Engineers and the Price of Missing Context",
  "reviewer-minutes-per-useful-decision": "The Real Cost of AI Decision Support: Reviewer Time",
  "below-the-volume-floor": "Can AI Learn a Small Company's Judgment?",
  "the-agency-spent-50k-and-i-have-nothing-to-point-at": "Agency Spent the Budget With No Results? What to Do",
  "handovers-are-where-reasoning-pours-out": "How to Write a Handover Document That Keeps the Reasoning",
  "built-to-be-kept-without-us": "How to Avoid Lock-In With a Decision Record System",
  "the-scale-ladder": "How a Company's Knowledge System Should Change as It Grows",
  "raise-rally-revenue": "Startup Go-to-Market: Fundraising, Community and Revenue",
  "two-people-the-founders-ledger": "Founder Decision Log: How Co-Founders Track Decisions",
  "ten-people-the-first-stranger": "How a 10-Person Startup Stops Founders Being the Bottleneck",
  "fifty-people-when-words-start-to-mean-different-things": "What Breaks at 50 People: Shared Definitions and Decisions",
  "two-hundred-people-reasoning-that-travels-without-its-author": "Keeping Decisions Consistent at 200 People",
  "the-enterprise-brain-is-a-record-not-a-mind": "What Is an Enterprise Brain? A Record, Not a Mind",
  "one-thousand-people-governance-arrives": "AI Governance at 1,000 Employees: What Changes",
  "ten-thousand-people-density-and-the-case-for-federation": "Enterprise Knowledge Graphs: Why Federation Beats One Brain",
  "the-5-agent-memory-layers-worth-testing-and-how-to-test-them": "Top 5 AI Agent Memory Layers to Test: Zep, Mem0, Letta",
  "top-5-agent-frameworks-for-production-by-state-model-and-cloud": "Top 5 AI Agent Frameworks for Production (2026)",
  "buy-context-own-judgment-what-to-build-at-each-size": "Build or Buy AI: Rent Context, Own Your Judgment",
  "top-5-llm-observability-and-evaluation-platforms": "Top 5 LLM Observability and Evaluation Platforms (2026)",
  "the-financial-data-providers-your-agents-can-call-today": "Financial Data Providers With MCP for AI Agents",
  "top-5-ai-notetakers-for-decision-capture": "Top 5 AI Notetakers for Capturing Decisions (2026)",
  "top-5-tools-for-a-founders-decision-ledger": "Top 5 Tools for a Startup Decision Log (2026)",
  "the-transitions-that-break-the-brain": "When Companies Lose Institutional Knowledge",
  "top-5-ai-customer-service-agents-by-pricing-model": "Top 5 AI Customer Service Agents by Pricing Model",
  "the-10-ai-regulatory-dates-to-watch-through-2027": "10 AI Regulation Dates to Watch Through 2027",
  "five-invariants-from-two-people-to-ten-thousand": "Five Principles of a Company Decision Record",
  "the-5-enterprise-context-platforms-ranked-for-regulated-firms": "Top 5 Enterprise Context Platforms for Regulated Firms",
  "top-5-ai-governance-and-audit-trail-tools": "Top 5 AI Governance and Audit Trail Tools for Banks",
  "top-10-applied-ai-events-nov-2026-jun-2027": "Top 10 AI Conferences for Banks and Insurers, 2026–27",
  "the-10-crypto-events-worth-the-trip-nov-2026-jul-2027": "Top 10 Crypto Conferences Worth Attending, 2026–27"
};
const argv = process.argv.slice(2);
const idx = argv.indexOf("--site");
const site = idx >= 0 && argv[idx+1] && !argv[idx+1].startsWith("--") ? argv[idx+1] : null;
const dry = argv.includes("--dry-run");
if (!site || !fs.existsSync(site)) {
  console.error("Usage: node launch/apply-search-titles.mjs --site /path/to/site [--dry-run]");
  process.exit(1);
}
const escapeAttr = s => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const escapeText = s => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
let updated = 0, already = 0;
const missing = [], malformed = [];
const changes = [];
for (const [slug, searchTitle] of Object.entries(titles)) {
  const file = path.join(site, "research", slug, "index.html");
  if (!fs.existsSync(file)) { missing.push(slug); continue; }
  const html = fs.readFileSync(file, "utf8");
  const end = html.search(/<\/head\s*>/i);
  if (end < 0) { malformed.push(slug + ": no </head>"); continue; }
  let head = html.slice(0, end), tail = html.slice(end);
  if (!/<title\b[^>]*>[\s\S]*?<\/title>/i.test(head)) { malformed.push(slug + ": no <title>"); continue; }
  const tags = ["og:title", "twitter:title"];
  if (tags.some(tag => !new RegExp(`<meta\\b[^>]*(?:property|name)=["']${tag.replace(':','\\:')}["'][^>]*>`,"i").test(head))) {
    malformed.push(slug + ": missing og:title or twitter:title"); continue;
  }
  const fullTitle = searchTitle + " | lowob";
  head = head.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, () => `<title>${escapeText(fullTitle)}</title>`);
  for (const [attr,key] of [["property", "og:title"],["name", "twitter:title"]]) {
    const pattern = new RegExp(`<meta\\b(?=[^>]*\\b${attr}=["']${key}["'])[^>]*>`,"i");
    head = head.replace(pattern, () => `<meta ${attr}="${key}" content="${escapeAttr(searchTitle)}">`);
  }
  const result = head + tail;
  if (result === html) { already++; continue; }
  updated++;
  changes.push([file,result]);
}
console.log(`${dry ? "[dry run] " : ""}${updated} pages ${dry ? "would be updated" : "updated"}, ${already} already done, ${missing.length} not found${malformed.length ? `, ${malformed.length} malformed` : ""}.`);
if (missing.length) console.error("Not found: " + missing.join(", "));
if (malformed.length) console.error("Malformed: " + malformed.join("; "));
// Atomic preflight: do not change ANY pages if some of the 88 pages aren't ready.
if (missing.length || malformed.length) process.exitCode = 1;
else if (!dry) for (const [file,html] of changes) fs.writeFileSync(file,html);
