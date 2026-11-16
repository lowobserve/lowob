# The pilot that survives security review

Source: https://lowob.com/research/the-pilot-that-survives-security-review/
Publisher: lowob (https://lowob.com)
Published: 2026-04-09 · Updated: 2026-11-16
Function: Revenue

> Summary: AI pilots die from security review, missing owners, demo-grade accuracy and pricing confusion, rarely from the product. Gartner expected at least 30% of generative AI projects to be abandoned after proof of concept. This playbook sets out the pilot design that passes: one narrow use case, real data in week one, a written success test, a security pack mapped to the questionnaires buyers actually send (SIG, CAIQ and SOC 2), a named owner and a paid fee.

AI pilots die from security review, missing owners, demo-grade accuracy and pricing confusion. Design the pilot to pass all four before you sign it. Gartner predicted that at least 30% of generative AI projects would be abandoned after proof of concept by the end of 2025, citing poor data quality, inadequate risk controls, escalating costs and unclear business value. Those are pilot design failures, and most of them can be closed before the first call.

## Why AI pilots die

Pilots rarely die from the product. They die from everything around it.

**Security and data review.** Where does the data go, who sees it, is it used for training, how long is it kept? If you cannot answer in writing, the pilot waits for you to write it.

**No owner.** A sponsor who likes the demo is not an owner. An owner has budget, a deadline and something to lose if it fails.

**Demo accuracy versus production accuracy.** The demo ran on clean examples. Production has typos, edge cases and missing fields. The gap surprises the buyer and confidence drops.

**Procurement.** Vendor onboarding, data processing agreement, insurance. A parallel track that nobody started until month three.

**Pricing confusion.** Seats, usage or outcomes? If finance cannot forecast the bill, finance will not approve it.

The external evidence lines up with that list. Gartner's 2024 prediction on abandoned generative AI projects named data quality, risk controls, cost and unclear value; its analyst noted that costs "aren't as predictable as other technologies." Andreessen Horowitz's 2025 CIO survey found that "procurement now mirrors traditional software buying," with security and cost gaining weight relative to accuracy. The good news is that pilots designed well do convert: Menlo Ventures' 2025 survey found 47% of AI deals reached production, against 25% for traditional SaaS.

## Scope one use case and get real data early

"Explore AI for the support team" is not a pilot. "Draft first replies for tier-one billing tickets in English" is.

Narrow scope makes the security review smaller, the success test clearer and the owner easier to find. It also makes the result believable. A win on one ticket type is a reference. A vague win on "support" is a slide.

Ask for real data in week one. A sanitised sample proves the demo, not the product. If real data access takes eight weeks, that is the pilot's real timeline. Better to know now than to discover it in week six.

## Write the success test before you start

Agree, in writing, what passing looks like. Three parts: metric, threshold, method.

Example shape: over a fixed volume and a fixed period, what share of outputs are used with minor or no edits, as judged by whom. Pick the number with the buyer, not for them. Then neither side can move it later.

Add a failure clause. If the test fails, the pilot ends and both sides say so. A pilot with no way to fail has no way to win either.

The test is also how the demo-to-production gap gets measured honestly. Run it on the buyer's real data, report the production number, and keep the demo number out of the result. Our explainer on [AI evals](https://lowob.com/research/what-are-ai-evals/) covers how to set up a test both sides can read, and a [mutual action plan](https://lowob.com/research/what-is-a-mutual-action-plan/) is the right place to record who signs it off and when.

> A pilot with no way to fail has no way to win either.

## The security pack

Build it before the first enterprise call. Most enterprise security questionnaires ask the same things, because most are built on a handful of standards. Answer them once, in plain language, and keep it dated.

| Questionnaire or report | Who publishes it | What it is | What to have ready |
| --- | --- | --- | --- |
| SIG (Standardized Information Gathering) | Shared Assessments | The common third-party risk questionnaire, issued in Lite, Core and Detail scopes; the 2026 edition added an ISO/IEC 42001 mapping for AI governance | Answers to the Core scope, kept current each year |
| CAIQ and AI-CAIQ | Cloud Security Alliance | Self-assessment questionnaires; the AI Controls Matrix v1.1 (July 2026) has 247 control objectives across 18 domains, and its AI-CAIQ has 320 questions | A completed AI-CAIQ, optionally filed on the STAR Registry |
| SOC 2 report | Issued by a CPA firm against AICPA criteria | An attestation on security and operational controls, not on model accuracy | A Type 1 or Type 2 report, or a dated timeline |
| Data processing agreement | Required of processors under GDPR Article 28 | Contract terms for personal data, including sub-processors | Template DPA and sub-processor list |

SOC 2 is changing. In October 2026 the AICPA proposed revised trust services criteria that add points of focus on AI governance, model monitoring, prompt manipulation and data poisoning, with comments due by 15 January 2027 and a proposed effective date for engagements beginning on or after 31 December 2027. Our explainer on [SOC 2 for AI vendors](https://lowob.com/research/soc-2-for-ai-vendors/) covers what a report does and does not prove.

Under the questionnaires, the content of the pack is the same six sections.

| Section | What to include |
| --- | --- |
| Compliance status | SOC 2 or ISO status, or a plain timeline if not yet |
| Data flow | One diagram: what enters, where it is stored, where it leaves |
| Model and vendor disclosure | Which models, which providers, whether data is used for training |
| Retention and deletion | How long, where, and how a customer gets it deleted |
| Access control | Who at your company can see customer data, and when |
| Incident process | Who gets called, how fast, what they get told |

If you are not SOC 2 yet, say so and say when. Buyers forgive gaps. They do not forgive surprises in week five.

The model and vendor section matters most for AI. Buyers want to know whose servers see their data and under what terms. Have the sub-processor list ready, and say whether your model providers offer [zero data retention](https://lowob.com/research/what-is-zero-data-retention/) on the endpoints you use. Our explainer on [data processing agreements for AI](https://lowob.com/research/what-is-a-data-processing-agreement-for-ai/) lists the clauses buyers' lawyers check first.

## Owner, money and price

**Named owner.** Get a name, a title and a budget line before you start. If nobody will own it, nobody will buy it.

**Paid pilot.** Charge something. The amount matters less than the invoice. A paid pilot gets a deadline, a purchase order and an owner, because someone had to approve the spend. Free pilots drift.

**Price after, structure before.** Fix the pilot fee now. Agree the full-contract price after the success test, but settle the structure up front. Seats, usage or outcomes. Pick one and explain it in one paragraph. Usage-based pricing on an AI product needs a cap or an estimate, or finance will block it on principle. The a16z survey found CIOs mostly preferred usage-based pricing because outcome-based terms were hard to set and measure; our piece on [seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/) covers the trade-offs.

## The checklist

| Check | Done when |
| --- | --- |
| Scope | One use case, one team, one language, written in a sentence |
| Data | Real data access agreed for week one |
| Success test | Metric, threshold and method, signed by both sides, with a failure clause |
| Security pack | Complete and dated, mapped to SIG and CAIQ, including model and vendor disclosure |
| Owner and fee | Named owner with budget, and a pilot fee on an invoice |
| Pricing | Structure chosen and explained before the pilot starts |

## lowob takeaways

- **Scope one use case.** Drafting first replies for tier-one billing tickets in English is a pilot; "AI for support" is not.
- **Write the success test first.** Metric, threshold and method, plus a failure clause.
- **Answer the standard questionnaires once.** SIG, CAIQ and a SOC 2 status cover most of what buyers send.
- **Charge for the pilot.** Free pilots drift.

## Sources and notes

- [Gartner, Gartner Predicts 30% of Generative AI Projects Will Be Abandoned After Proof of Concept By End of 2025](https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025), 29 July 2024. Analyst prediction, not a measured outcome.
- [Andreessen Horowitz, How 100 Enterprise CIOs Are Building and Buying Gen AI in 2025](https://a16z.com/ai-enterprise-2025/), 10 June 2025. Investor research; 100 CIOs, data as of May 2025.
- [Menlo Ventures, 2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/), 9 December 2025. Investor research; 495 US enterprise AI decision makers.
- [Cloud Security Alliance, AI Controls Matrix v1.1](https://cloudsecurityalliance.org/blog/2026/07/14/ai-controls-matrix-v1-1-strengthening-the-foundation-for-trustworthy-ai), 14 July 2026. Standards body announcement; mapping figures are CSA's own.
- [Mitratech, SIG 2026: Key Updates and Considerations](https://mitratech.com/resource-hub/blog/sig-2026-key-updates-and-considerations/), 5 March 2026. Vendor blog summarising the Shared Assessments release; the primary SIG pages require a login.
- [AICPA and CIMA, AICPA proposes update of SOC 2 trust services criteria](https://www.aicpa-cima.com/news/article/aicpa-proposes-update-of-soc-2-r-trust-services-criteria-to-enhance-the-relevance-usability-and-value-of-cpas-reports), 28 October 2026. Exposure draft; the criteria may change before adoption.
- The security pack, success test and checklist are **lowob**'s framework.

## Related research

- [SOC 2 for AI vendors](https://lowob.com/research/soc-2-for-ai-vendors/)
- [What is a data processing agreement for AI tools?](https://lowob.com/research/what-is-a-data-processing-agreement-for-ai/)
- [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [What Makes a Case Study Believable](https://lowob.com/research/what-makes-a-case-study-believable/)
- [The model is not the product](https://lowob.com/research/the-model-is-not-the-product/)

## Next move

Download the AI-CAIQ and answer it this week, in plain language, with a date on the front. Then turn the answers into the six-section pack and send it before the buyer asks.

[Start a conversation](https://lowob.com/contact/)
