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
    "meta": "Web3 KOL measurement after InfoFi: what Kaito, Cookie and decentralized creator networks reveal about attention, quests, attribution and real product adoption.",
    "insert": [
      [
        "<h2 id=\"start-with-the-behavior-not-the-personality\">Start with the behavior, not the personality</h2>",
        "<section class=\"kol-editorial-context\" aria-labelledby=\"kol-market-shift\"><h2 id=\"kol-market-shift\">InfoFi turned attention into a score. Then the rules changed.</h2>\n<p>The creator market changed quickly. Kaito introduced Yaps in late 2024, and by 2025 projects were competing for mindshare across leaderboards and incentive programs. Cookie Snaps and Wallchain offered variations on the same underlying proposition: measure contribution to the conversation, reward participation and make influence more legible to buyers. The attraction was obvious. Brands could reach beyond a handful of expensive KOL retainers, and smaller creators had a route into campaigns. But a rising mindshare score was still not evidence of a user installing a wallet or making a useful transaction. <a href=\"https://www.dwf-labs.com/research/the-emergence-of-infofi-how-this-new-sector-solves-the-overload-problem\">Background: the emergence of InfoFi</a>.</p>\n<p>On 15 January 2026, X moved to revoke API access for apps paying people to post. Kaito discontinued Yaps and incentivized leaderboards and shifted toward selected brand–creator work through Kaito Studio; Cookie shut down Snaps. This was a platform-dependency shock as much as a verdict on low-quality engagement. A rewards system can coordinate attention, but it cannot treat access to somebody else's feed or API as permanent infrastructure. <a href=\"https://www.theblock.co/news/business/2026-01-15-kaito-token-plummets-x-revises-api-policies-ban-infofi-crypto-projects-385805\">Kaito's pivot</a>; <a href=\"https://www.theblock.co/news/business/2026-01-16-x-crackdown-ai-reply-spam-infofi-seek-alternatives-criminally-unimaginative-385847\">InfoFi's January reset</a>.</p>\n<p class=\"kol-pull-statement\">The measurement problem did not disappear when the leaderboards did. Attention, distribution and product adoption are still three different things.</p>\n</section>\n<aside class=\"research-operator-note kol-operator-editorial\" aria-labelledby=\"kol-operator\"><p class=\"research-eyebrow\" id=\"kol-operator\">OPERATOR OBSERVATION · PRIOR WEB3 GROWTH WORK</p><p>In previous wallet growth roles, creator promotion, quests, AMAs and ecosystem distribution were part of a broader acquisition and activation strategy. Working alongside the wider growth and product effort, those programs contributed during a period when the wallet reached roughly <strong>155,000 monthly active users</strong>. Product growth was observable. The incremental contribution of any one creator, quest or channel required more careful attribution.</p><p>Later, while working on creator-facing growth and distribution for a Bittensor-based network, I saw participating creator accounts represent more than <strong>8 million combined YouTube subscribers and X followers</strong> in a June 2026 network snapshot. That's potential distribution capacity, not eight million unique people reached. Views, watch hours and creator activity gave us a more useful picture of actual attention. And even decentralized reward and verification infrastructure still depends on platforms to deliver and measure content.</p></aside>\n"
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
    "cta": "Before approving another creator package, check audience relevance, activation goals and the measurement plan.",
    "replace": [
      [
        "<p>Before choosing a KOL, define the audience behavior the campaign is intended to produce:</p>\n<ul>\n<li>\n<p>understand a new category;</p>\n</li>\n<li>\n<p>join an educational event;</p>\n</li>\n<li>\n<p>try a product;</p>\n</li>\n<li>\n<p>bridge or transact;</p>\n</li>\n<li>\n<p>apply to build;</p>\n</li>\n<li>\n<p>enter a qualified sales conversation;</p>\n</li>\n<li>\n<p>subscribe to ongoing research;</p>\n</li>\n<li>\n<p>reconsider a mistaken market narrative.</p>\n</li>\n</ul>\n",
        "<p>Choose the behavior first. An AMA may be designed to help a technical audience understand a new staking product. A quest may encourage a first wallet action. A specialist researcher might earn a qualified conversation with an institutional buyer. These are different assignments, not different ways to buy the same reach.</p>\n"
      ],
      [
        "<p>Follower count is the outermost and least informative layer.</p>\n<p>Evaluate:</p>\n<p><strong>Audience composition:</strong> Are the followers actually users, developers, traders, founders, institutions, or other creators?</p>\n<p><strong>Topic authority:</strong> Has the creator demonstrated credible knowledge of the subject?</p>\n<p><strong>Behavioral evidence:</strong> Do followers ask questions, attend events, test products, or follow recommendations?</p>\n<p><strong>Reputational fit:</strong> Would the association increase or reduce trust with the project's priority stakeholders?</p>\n<p><strong>Content durability:</strong> Does the creator produce material that remains useful, or only momentary reach?</p>\n<p><strong>Conflict profile:</strong> Which competitors, tokens, exchanges, or paid relationships could affect credibility?</p>\n<p>Request audience and performance evidence, but verify what matters through public interaction patterns and small tests.</p>\n",
        "<p>Follower count is potential distribution, not proof of influence. Inspect <strong>who actually participates</strong>, whether the creator has demonstrated authority on the subject, and whether followers ask substantive questions or take credible next steps. A smaller practitioner audience may have more value than a broad account built around rewards.</p>\n<p>Review audience overlap, conflicted sponsorships and the durability of the content before paying for scale. Public interaction patterns and a small paid test can tell you more than a media kit.</p>\n"
      ],
      [
        "<p>A weak brief gives the creator approved claims and asks for enthusiasm. A strong brief explains:</p>\n<ul>\n<li>\n<p>the campaign objective;</p>\n</li>\n<li>\n<p>intended audience and desired behavior;</p>\n</li>\n<li>\n<p>the real problem being addressed;</p>\n</li>\n<li>\n<p>product truth and prohibited claims;</p>\n</li>\n<li>\n<p>required disclosure;</p>\n</li>\n<li>\n<p>supporting evidence and links;</p>\n</li>\n<li>\n<p>questions the audience is likely to ask;</p>\n</li>\n<li>\n<p>creative freedom and non-negotiable boundaries;</p>\n</li>\n<li>\n<p>response and escalation process;</p>\n</li>\n<li>\n<p>tracking method and measurement window.</p>\n</li>\n</ul>\n<p>The creator should understand the product well enough to explain why it matters in their own language. Forced scripts are easy for audiences to detect and hard for creators to defend.</p>\n",
        "<p>A useful creator brief is not a list of approved slogans. It defines what the content needs to accomplish, which claims can be supported and how the result will be judged.</p>\n<section class=\"kol-brief-tool\" aria-labelledby=\"kol-brief-title\"><h3 id=\"kol-brief-title\">Creator brief essentials</h3><p class=\"kol-tool-intro\">Five decisions to make before the creator starts.</p>\n<div class=\"kol-brief-grid\">\n<div class=\"kol-brief-row\"><strong>01 / The job</strong><p>State the campaign objective, intended buyer and the audience behavior worth producing.</p></div>\n<div class=\"kol-brief-row\"><strong>02 / The truth</strong><p>Explain the real problem, product evidence, approved claims and what must not be promised.</p></div>\n<div class=\"kol-brief-row\"><strong>03 / The voice</strong><p>Share useful links and likely audience questions. Give the creator latitude to explain the product in their own language.</p></div>\n<div class=\"kol-brief-row\"><strong>04 / The guardrails</strong><p>Specify disclosure, non-negotiable boundaries, and a response or escalation contact.</p></div>\n<div class=\"kol-brief-row\"><strong>05 / The evidence</strong><p>Agree on tracking, the observation window and what would justify another campaign.</p></div>\n</div><p class=\"kol-small-note\">Illustrative framework</p></section>\n<p>The goal is a creator who can defend the explanation to their own audience, not a paid account reciting the company's copy.</p>\n"
      ],
      [
        "<p>Do not begin every relationship with a large paid package.</p>\n<p><strong>Stage one: Relevance test.</strong> Invite the creator to a private briefing or product session. Evaluate the questions they ask and whether the audience fit is real.</p>\n<p><strong>Stage two: Small activation.</strong> Run one educational post, discussion, or event with a clear audience action.</p>\n<p><strong>Stage three: Evidence review.</strong> Examine audience quality, questions, attributed behavior, and brand fit.</p>\n<p><strong>Stage four: Deeper partnership.</strong> Expand into a series, research collaboration, event, ambassador role, or market-specific program only when the evidence supports it.</p>\n<p>This reduces waste and produces better relationships than buying reach from a spreadsheet.</p>\n",
        "<p>Don't buy a long-term relationship before you have evidence the creator is right for the job. Treat each engagement as a decision gate, not just another deliverable.</p>\n<ol class=\"kol-campaign-ladder\" aria-label=\"Four-stage creator campaign ladder\">\n<li><div class=\"kol-stage-index\" aria-hidden=\"true\">01</div><div class=\"kol-stage-copy\"><span class=\"kol-stage-kicker\">Qualify</span><h3>Relevance test</h3><p>Invite the creator to a briefing or product session. Are the questions informed? Does their audience actually overlap with the buyer?</p><p class=\"kol-stage-gate\"><strong>Advance when</strong> the fit is credible and the creator understands the product.</p></div></li>\n<li><div class=\"kol-stage-index\" aria-hidden=\"true\">02</div><div class=\"kol-stage-copy\"><span class=\"kol-stage-kicker\">Activate</span><h3>Small experiment</h3><p>Run one focused explanation, discussion or event linked to a meaningful audience action.</p><p class=\"kol-stage-gate\"><strong>Advance when</strong> the signal goes beyond impressions or paid responses.</p></div></li>\n<li><div class=\"kol-stage-index\" aria-hidden=\"true\">03</div><div class=\"kol-stage-copy\"><span class=\"kol-stage-kicker\">Evaluate</span><h3>Evidence review</h3><p>Review relevance, questions, product actions where measurable, and reputational fit. Separate observed behavior from attribution estimates.</p><p class=\"kol-stage-gate\"><strong>Advance when</strong> the evidence supports another investment.</p></div></li>\n<li><div class=\"kol-stage-index\" aria-hidden=\"true\">04</div><div class=\"kol-stage-copy\"><span class=\"kol-stage-kicker\">Compound</span><h3>Deeper partnership</h3><p>Expand into recurring research, a content series, an event or an ambassador role only after the earlier stages justify it.</p><p class=\"kol-stage-gate\"><strong>Advance when</strong> the relationship delivers repeatable value, not just repeatable posting.</p></div></li>\n</ol>\n"
      ],
      [
        "<p>Use four measurement layers.</p>\n<p><strong>Attention:</strong> Qualified reach, view quality, completion, and audience overlap.</p>\n<p><strong>Understanding:</strong> Questions asked, message recall, sentiment, and reduction in recurring confusion.</p>\n<p><strong>Action:</strong> Clicks, event attendance, product activation, applications, subscriptions, or qualified conversations.</p>\n<p><strong>Persistence:</strong> Retention, repeat product behavior, ongoing community participation, or pipeline progression after the campaign.</p>\n<p>Where possible, use creator-specific links, codes, landing pages, survey questions, wallet cohorts, event registration fields, and CRM attribution. No method will record every influence, so combine quantitative tracking with qualitative evidence from sales and community conversations.</p>\n",
        "<p>A useful scorecard answers three questions: What did we observe? Which business behavior followed? And what can we responsibly attribute? There is no single metric that answers all three.</p>\n<section class=\"kol-measure-tool\" aria-labelledby=\"kol-measure-title\"><h3 id=\"kol-measure-title\">Measure the distance from attention to adoption</h3>\n<div class=\"kol-metric-grid\">\n<div><span>01 / Attention</span><strong>Did the right people notice?</strong><p>Qualified views, audience overlap, watch time and event attendance.</p></div>\n<div><span>02 / Understanding</span><strong>Did the message land?</strong><p>Relevant questions, product comprehension and changes in recurring confusion.</p></div>\n<div><span>03 / Action</span><strong>Did anyone do something useful?</strong><p>First wallet action, product activation, qualified application or meeting.</p></div>\n<div><span>04 / Persistence</span><strong>Did it last beyond the promotion?</strong><p>Retained cohorts, repeat activity and progress through the buying cycle.</p></div>\n</div><p class=\"kol-small-note\">Illustrative framework</p></section>\n<p>Use creator-specific links, event registration, product cohorts and CRM information where appropriate. A click does not automatically connect to an onchain action; privacy-aware event linking can help, but cross-device and assisted influence will remain incomplete. Don't present estimated channel contribution as a verified incremental result.</p>\n"
      ]
    ]
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
  for(const [before,after] of s.replace||[]){if(!body.includes(before))throw Error(slug+": original section missing for editorial revision");body=body.replace(before,after);}
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
  return html.replace("/assets/refined.css?v=28",slug==="web3-kol-campaign-measurement"?"/assets/refined.css?v=30":"/assets/refined.css?v=29");
}
export async function applyResearchPilotEnhancements(dist) {for(const slug of Object.keys(P)){const path=join(dist,"research",slug,"index.html");const original=await readFile(path,"utf8");const next=enhanceResearchArticleHtml(original,slug);if(next!==original)await writeFile(path,next);}}


/** Reverse only known pilot insertions, so source-body SHA-256 safeguards remain strict. */
export function originalResearchBody(body,slug) {
 const s=P[slug];if(!s)return body;
 for(const [before,after] of [...(s.replace||[])].reverse()){if(!body.includes(after))throw Error(slug+": editorial revision differs from reviewed text");body=body.replace(after,before);}
 for (const [anchor,block] of s.insert) {
   const combined=block+"\n"+anchor;
   if(!body.includes(combined))throw Error(slug+": insertion is not intact");
   body=body.replace(combined,anchor);
 }
 const related=`<nav class="research-related" aria-label="Related research"><h2>Related research</h2><ul>${s.related.map(([label,url])=>`<li><a href="${url}">${label}</a></li>`).join("")}</ul></nav>`;
 const next=`<aside class="research-next-action"><p class="research-eyebrow">NEXT MOVE</p><p>${s.cta} <a href="/contact/">Start a conversation <span aria-hidden="true">↗</span></a></p></aside>`;
 const footer=related+"\n"+next;
 if(body.includes("\n"+footer))body=body.replace("\n"+footer,"");
 else if(body.includes(footer+"\n"))body=body.replace(footer+"\n","");
 else throw Error(slug+": footer not intact");
 return body;
}
