import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
/* Scoped, reproducible five-article pilot. Publication dates and offer naming are preserved. */
const P = {
  "what-is-a-distribution-diagnostic": {
    "meta": "What a paid distribution diagnostic includes, what a one-week assessment can test, and how to choose your next channel without wasting budget.",
    "insert": [
      [
        "<h2>What one week cannot tell you</h2>",
        "<section class=\"research-example\" aria-labelledby=\"diag-sample\"><p class=\"research-eyebrow\" id=\"diag-sample\">ILLUSTRATIVE OUTPUT · NOT A CLIENT RESULT</p><p>A diagnostic should end with decisions rather than another deck. A simple channel assessment could look like this:</p><div class=\"research-table-scroll\" role=\"region\" tabindex=\"0\" aria-label=\"Hypothetical diagnostic channel decision table\"><table class=\"research-data-table\"><caption>Sample channel decision matrix</caption><thead><tr><th scope=\"col\">Channel</th><th scope=\"col\">Constraint</th><th scope=\"col\">Smallest test</th><th scope=\"col\">Decision</th></tr></thead><tbody><tr><th scope=\"row\">Paid social</th><td>Category approval required</td><td>None until approval</td><td>Reassess once approved</td></tr><tr><th scope=\"row\">Practitioner newsletter</th><td>Open; audience fit unknown</td><td>One tracked placement</td><td>Set a decision threshold</td></tr><tr><th scope=\"row\">Integration partner</th><td>Longer buying cycle</td><td>Co-marketing pilot</td><td>Revisit when ready</td></tr></tbody></table></div></section>"
      ]
    ],
    "related": [
      [
        "Restricted-Category Distribution",
        "/research/distribution-when-ad-platforms-restrict-you/"
      ],
      [
        "90-Day Worked Example",
        "/research/restricted-category-distribution-worked-example/"
      ]
    ],
    "cta": "Need to decide which channels deserve budget before committing to a campaign?"
  },
  "gtm-strategy-vs-tactics": {
    "meta": "A real GTM strategy connects market, message, sales motion and measurement. Use this four-part coherence test before funding another launch tactic.",
    "insert": [
      [
        "<h2 id=\"the-gtm-coherence-test\">The GTM coherence test</h2>",
        "<section class=\"research-example\" aria-labelledby=\"gtm-matrix\"><p class=\"research-eyebrow\" id=\"gtm-matrix\">THE FOUR-DECISION COHERENCE TEST</p><div class=\"research-table-scroll\" role=\"region\" tabindex=\"0\" aria-label=\"GTM coherence decision matrix\"><table class=\"research-data-table\"><caption>Four connected GTM decisions</caption><thead><tr><th scope=\"col\">Decision</th><th scope=\"col\">Question</th><th scope=\"col\">Evidence</th><th scope=\"col\">Failure signal</th></tr></thead><tbody><tr><th scope=\"row\">Market</th><td>Which buyer has urgent pain and budget?</td><td>Named accounts with a trigger event</td><td>“Our market is fintech”</td></tr><tr><th scope=\"row\">Message</th><td>What must the buyer believe?</td><td>Buyers describe value in their words</td><td>Buyers ask “so what?”</td></tr><tr><th scope=\"row\">Motion</th><td>How does trust become a decision?</td><td>Deals progress on a defined path</td><td>Every deal needs a different path</td></tr><tr><th scope=\"row\">Measurement</th><td>What proves the thesis is working?</td><td>Evaluation, adoption and pipeline</td><td>Activity without commercial evidence</td></tr></tbody></table></div></section>"
      ]
    ],
    "related": [
      [
        "Write an ICP Sales Will Use",
        "/research/how-to-write-an-icp/"
      ],
      [
        "Product-, Sales- and Partner-Led Growth",
        "/research/product-led-vs-sales-led-vs-partner-led/"
      ]
    ],
    "cta": "If your four GTM decisions conflict, identify the constraint before buying another tactic."
  },
  "web3-kol-campaign-measurement": {
    "meta": "Measure Web3 KOL campaigns beyond impressions: audience fit, activated wallets, retained users, full cost and the limits of attribution.",
    "insert": [
      [
        "<h2 id=\"start-with-the-behavior-not-the-personality\">Start with the behavior, not the personality</h2>",
        "<aside class=\"research-operator-note\" aria-labelledby=\"kol-operator\"><p class=\"research-eyebrow\" id=\"kol-operator\">OPERATOR OBSERVATION · PRIOR WEB3 WALLET GROWTH WORK</p><p>In previous wallet growth work, creator promotion, quests, AMAs and ecosystem distribution formed part of a broader acquisition and activation strategy. Together with the wider product and growth team, those efforts contributed during a period when the wallet reached roughly 155,000 monthly active users. That's a product-level result, <em>not</em> a claim that any individual creator or quest generated a measurable share of those users. The operational lesson is to track activation and sustained engagement alongside creator deliverables, and be precise about the limits of attribution.</p></aside>"
      ],
      [
        "<p>Where possible, use creator-specific links, codes, landing pages, survey questions, wallet cohorts, event registration fields, and CRM attribution. No method will record every influence, so combine quantitative tracking with qualitative evidence from sales and community conversations.</p>",
        "<p>A click on a creator's link does not connect to a wallet or onchain action by itself. Joining those events requires privacy-aware instrumentation, and even careful measurement misses cross-device and assisted influence. Report that uncertainty instead of turning correlation into an attribution claim.</p>"
      ],
      [
        "<p><strong>Persistence:</strong> Retention, repeat product behavior, ongoing community participation, or pipeline progression after the campaign.</p>",
        "<section class=\"research-example\" aria-labelledby=\"kol-scorecard\"><p class=\"research-eyebrow\" id=\"kol-scorecard\">ILLUSTRATIVE MEASUREMENT SCORECARD</p><div class=\"research-table-scroll\" role=\"region\" tabindex=\"0\" aria-label=\"Creator campaign measurement scorecard\"><table class=\"research-data-table\"><caption>Example metrics and windows, not universal benchmarks</caption><thead><tr><th scope=\"col\">Layer</th><th scope=\"col\">Evidence</th><th scope=\"col\">Instrumentation</th><th scope=\"col\">Window</th></tr></thead><tbody><tr><th scope=\"row\">Attention</th><td>Relevant reach and overlap</td><td>Creator reports, spot checks</td><td>Days</td></tr><tr><th scope=\"row\">Understanding</th><td>Questions and confusion</td><td>Community notes, short survey</td><td>1–2 weeks</td></tr><tr><th scope=\"row\">Action</th><td>First useful product action</td><td>Links, events, wallet cohorts</td><td>2–4 weeks</td></tr><tr><th scope=\"row\">Persistence</th><td>Repeat behavior, pipeline</td><td>Cohorts and CRM stages</td><td>30–90 days</td></tr></tbody></table></div></section>"
      ]
    ],
    "related": [
      [
        "Community vs Audience",
        "/research/community-vs-audience/"
      ],
      [
        "Attribution vs Incrementality",
        "/research/attribution-vs-incrementality/"
      ],
      [
        "Creator Partnerships Outside Crypto",
        "/research/creator-partnerships-fintech-ai/"
      ]
    ],
    "cta": "Before approving another creator package, check audience relevance, activation goals and the measurement plan."
  },
  "programmatic-media-numbers-you-can-trust": {
    "meta": "Go beyond headline CPMs: check verified impressions, inventory quality, fees and commercial outcomes before approving the next programmatic invoice.",
    "insert": [],
    "related": [
      [
        "What Is Programmatic Advertising?",
        "/research/what-is-programmatic-advertising/"
      ],
      [
        "Attribution vs Incrementality",
        "/research/attribution-vs-incrementality/"
      ],
      [
        "How to Read a Media Plan",
        "/research/how-to-read-a-media-plan/"
      ]
    ],
    "cta": "If your media plan cannot reconcile inventory quality, fees and outcomes, ask for an independent assessment before increasing spend."
  },
  "ai-companies-distribution-problem": {
    "meta": "For AI startups, model quality alone rarely solves distribution. Choose a buyer workflow, earn trust and build channels that survive the next release.",
    "insert": [
      [
        "<h2 id=\"the-wedge-again\">The wedge, again</h2>",
        "<aside class=\"research-example\" aria-labelledby=\"ai-example\"><p class=\"research-eyebrow\" id=\"ai-example\">HYPOTHETICAL APPLICATION · NOT A CLIENT CASE</p><p>Consider an AI compliance assistant sold to regulated firms. The workflow to earn is the evidence trail a risk team assembles before an audit. Trust comes from a visible audit log, a verifiable result and a peer reference. Distribution could run through an integrator the team already works with and research the buyer can circulate internally. The first useful measure is qualified evaluations, not sign-ups.</p></aside>"
      ]
    ],
    "related": [
      [
        "Fintech GTM: Trust and Distribution",
        "/research/fintech-gtm-trust-distribution/"
      ],
      [
        "Creator Partnerships Outside Crypto",
        "/research/creator-partnerships-fintech-ai/"
      ],
      [
        "Developers, Marketplaces and Answer Engines",
        "/research/developers-marketplaces-and-the-answer-engines/"
      ]
    ],
    "cta": "If model improvements are outpacing adoption, identify the buyer, proof and distribution motion before scaling spend."
  }
};
function escapeAttr(s){return s.replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;");}
function updateHead(html,desc) {
  for (const [tag,key] of [["name","description"],["property","og:description"],["name","twitter:description"]]) {
    const old=new RegExp(`<meta ${tag}="${key}" content="[^"]*">`);if(!old.test(html))throw Error("Missing head tag: "+key);html=html.replace(old,`<meta ${tag}="${key}" content="${escapeAttr(desc)}">`);
  }
  html=html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,(tag,src)=>{
    const data=JSON.parse(src);
    if(!["Article","BlogPosting"].includes(data["@type"]))return tag;
    data.description=desc;
    return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<","\\u003c")}</script>`;
  });
  return html;
}
export function enhanceResearchArticleHtml(html,slug) {
  const s=P[slug]; if(!s)return html;
  const marker='data-research-design="pilot-1"';if(html.includes(marker))return html;
  const open='<div class="research-article-body">',close='</div><aside class="research-article-aside">';
  const i=html.indexOf(open),j=html.indexOf(close,i);if(i<0||j<0)throw Error(slug+": missing body");
  let body=html.slice(i+open.length,j);
  for(const [anchor,block] of s.insert){if(!body.includes(anchor))throw Error(slug+": missing insertion anchor "+anchor.slice(0,60));body=body.replace(anchor,block+"\n"+anchor);}
  const related=`<nav class="research-related" aria-label="Related research"><h2>Related research</h2><ul>${s.related.map(([label,url])=>`<li><a href="${url}">${label}</a></li>`).join("")}</ul></nav>`;
  const next=`<aside class="research-next-action"><p class="research-eyebrow">NEXT MOVE</p><p>${s.cta} <a href="/contact/">Start a conversation <span aria-hidden="true">↗</span></a></p></aside>`;
  const insert=related+"\n"+next;
  const sources=body.search(/<p>(?:<strong>)?Selected sources:/);
  body=sources<0?body+"\n"+insert:body.slice(0,sources)+insert+"\n"+body.slice(sources);
  html=html.slice(0,i+open.length)+body+html.slice(j);
  const cls=/<article class="research-article([^"]*)">/;
  if(!cls.test(html))throw Error(slug+": missing article tag");
  html=html.replace(cls,(_,extra)=>`<article class="research-article${extra}" ${marker}>`);
  html=updateHead(html,s.meta);
  return html.replace("/assets/refined.css?v=28","/assets/refined.css?v=29");
}
export async function applyResearchPilotEnhancements(dist) {for(const slug of Object.keys(P)){const path=join(dist,"research",slug,"index.html");const original=await readFile(path,"utf8");const next=enhanceResearchArticleHtml(original,slug);if(next!==original)await writeFile(path,next);}}
