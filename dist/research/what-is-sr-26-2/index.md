# What Is SR 26-2? The 2026 US Model Risk Guidance Explained

Source: https://lowob.com/research/what-is-sr-26-2/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: SR 26-2 is the Revised Guidance on Model Risk Management issued by the Federal Reserve, OCC and FDIC on 17 April 2026. It supersedes SR 11-7 and SR 21-8, is most relevant to banks above $30 billion in assets, sets no enforceable standards and places generative and agentic AI outside its scope. This explainer sets out what it covers, what it leaves out and what has happened since.

SR 26-2 is the Revised Guidance on Model Risk Management issued on 17 April 2026 by the Federal Reserve, the OCC and the FDIC, replacing SR 11-7 and aimed mainly at banking organisations with over $30 billion in total assets. It is principles-based, states that it sets no enforceable standards, and its footnote 3 places generative and agentic AI models outside its scope. Those tools are still supervised, through broader risk management.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

SR 26-2 is the reference text for model risk at large US banks, and the first revision of that guidance in 15 years. It matters well beyond banking because SR 11-7, the letter it replaced, was the template many insurers, lenders and fintechs copied. Our pillar guide [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/) places it alongside FINRA, FCA and EU AI Act expectations.

This page summarises public supervisory texts and named law-firm readings for orientation. It is not legal advice.

## What is SR 26-2?

SR 26-2 is a Federal Reserve supervision letter that transmits interagency model risk guidance. The letter, dated 17 April 2026 and signed by Randall D. Guynn as Director of the Division of Supervision and Regulation, attaches a 12-page document titled Revised Guidance on Model Risk Management.

The OCC's News Release 2026-29 of the same day says the OCC acted "in coordination with" the Federal Reserve Board and the FDIC. The OCC rescinded its own Bulletin 2011-12, Bulletin 2021-19 on BSA/AML models, Bulletin 1997-24 on credit scoring models and the Model Risk Management booklet of the Comptroller's Handbook. Arnold & Porter's November 2026 advisory identifies the OCC's issuance of the guidance as Bulletin 2026-13.

| Item | SR 26-2, as issued on 17 April 2026 |
| --- | --- |
| Full title | Revised Guidance on Model Risk Management |
| Issued by | Federal Reserve, OCC and FDIC |
| Supersedes | SR 11-7 (4 April 2011) and SR 21-8 (9 April 2021) |
| Most relevant to | Banking organisations with over $30 billion in total assets |
| Status | No enforceable standards or prescriptive requirements |
| Model definition | "A complex quantitative method, system, or approach" applying statistical, economic or financial theories |
| Excluded | Spreadsheet arithmetic, deterministic rule-based processes, generative and agentic AI |
| Structure | Seven sections, 12 pages |
| OCC counterpart | Bulletin 2026-13 |

## Who does SR 26-2 apply to?

It is aimed at banking organisations with more than $30 billion in total assets. The letter says it is "expected to be most relevant" to them, and the OCC adds that it "may also be relevant to smaller institutions with significant model risk exposure."

That is a sharp change. Sullivan & Cromwell's 29 April 2026 memo notes that SR 11-7 itself set no asset threshold, while the FDIC's 2017 adoption of it applied a $1 billion threshold. Banks between those two figures are no longer the main audience, though safety and soundness expectations still apply to their models.

## What counts as a model under SR 26-2?

A model is "a complex quantitative method, system, or approach" that applies statistical, economic or financial theories. The guidance excludes "simple arithmetic calculations, such as those found within spreadsheets", and "deterministic rulebased processes and software where there are no statistical, economic, or financial theories."

Orrick's 24 April 2026 reading points out that the word "mathematical" has gone from the definition. In practice a rules engine that applies fixed thresholds is no longer a model for this purpose, while a statistical credit score still is.

## Does SR 26-2 cover generative AI and AI agents?

No. Footnote 3 states that "Generative AI and agentic AI models are novel and rapidly evolving. As such, they are not within the scope of this guidance." The principles apply to "traditional statistical and quantitative models."

Orrick reads the guidance as directing banks to their broader risk management and governance for these tools. The OCC said on 17 April that the agencies plan "a request for information that addresses model risk management generally and considers, in particular, banks' use of AI, including generative AI and agentic AI and AI-based models." We found no published request by mid-November 2026.

## What does SR 26-2 expect banks to do?

It describes sound practice across the model lifecycle in seven sections: introduction, purpose and scope, overview of model risk, development and use, validation and monitoring, governance and controls, and vendor and third-party products.

| Area | What SR 26-2 says | Evidence a bank keeps |
| --- | --- | --- |
| Materiality | "Model purpose, together with model exposure, determines model materiality" | Risk rating per model, with the reasoning |
| Inventory | Should include "sufficient information to understand model risks" | A register of models in use and in development |
| Validation | Evaluates "whether models perform as expected", including reliability | Conceptual soundness review, outcomes analysis |
| Outcomes analysis | "Compares model outputs to corresponding real-world outcomes" | Predicted against actual results, over time |
| Monitoring | Whether a model "is performing as expected" | Drift checks and limits, reviewed periodically |
| Effective challenge | Critical analysis "by objective experts" | Named challengers and what they changed |
| Documentation | "Adequate documentation helps to support effective model risk management" | Records that support continuity of operations |
| Vendor models | Validation of vendor products "by internal or outside parties" | Vendor understanding, monitoring, documented customisations |

Effort scales with materiality. Orrick notes that immaterial models with low inherent risk can receive lighter oversight, such as identification and performance monitoring. For customised vendor models, sound practice involves "documenting, justifying, and evaluating adjustments made to customize the model."

Our explainer [What is model risk management for AI?](https://lowob.com/research/what-is-model-risk-management/) explains the discipline behind these components.

## Is SR 26-2 binding?

No. The guidance states that it "does not set forth enforceable standards or prescriptive requirements" and that "non-compliance with this guidance will not result in supervisory criticism against a banking organization." Sullivan & Cromwell notes a footnote preserving supervisory action for violations of law or unsafe or unsound practices.

Our reading: supervisors will judge risk and outcomes, not checklist adherence. A bank still answers for losses caused by a bad model.

## What has happened since April 2026?

On 4 November 2026 the OCC issued Bulletin 2026-54, Super Intelligence: Supervisory Framework. The OCC uses "Super Intelligence" for "the technologies and systems previously encompassed by the term 'Artificial Intelligence'", citing Executive Order 14434.

The framework is a resource for OCC examiners, organised into 16 components across six pillars. The bulletin says it "does not establish supervisory expectations for banks" and that banks are not expected to use it for self-assessment. According to Arnold & Porter's 11 November 2026 reading, the OCC treats the model risk guidance as still applying to non-generative, non-agentic models, while the framework addresses generative and agentic systems. It is an OCC document; the Federal Reserve and FDIC are not named as co-issuers.

The framework's documentation component lists "decision traceability: inputs, outputs, context, retrieved sources, tool calls, approvals, overrides, and actions." That is close to the record our [AI audit trail checklist](https://lowob.com/research/ai-audit-trail-checklist/) sets out.

## lowob takeaways

- **SR 26-2 replaced SR 11-7.** Issued on 17 April 2026 by the Fed, OCC and FDIC, it also superseded the 2021 BSA/AML statement.
- **Scope narrowed twice.** It is aimed at banks above $30 billion and excludes spreadsheets, rule engines and generative and agentic AI.
- **Principles, not rules.** Non-compliance alone does not bring supervisory criticism; unsafe practices still do.
- **AI moved elsewhere.** Since 4 November 2026 a non-binding OCC framework guides examiners reviewing generative and agentic AI at national banks.

## Common questions

### What is SR 26-2?

SR 26-2 is the Federal Reserve letter that issued the Revised Guidance on Model Risk Management on 17 April 2026, jointly with the OCC and FDIC. It replaced SR 11-7 from 2011 and SR 21-8 from 2021, is most relevant to banks above $30 billion in total assets, and sets out principles for model development, validation, monitoring, governance and vendor models.

### Does SR 26-2 apply to generative AI?

No. Footnote 3 of SR 26-2 states that generative and agentic AI models are not within its scope because they are novel and rapidly evolving. Banks govern those tools through broader risk management. For national banks, the OCC issued a separate non-binding examiner framework for generative and agentic AI on 4 November 2026, OCC Bulletin 2026-54.

### Is SR 26-2 legally binding on banks?

No. The guidance says it does not set enforceable standards or prescriptive requirements, and that non-compliance with it will not by itself lead to supervisory criticism. A footnote keeps supervisory action available for violations of law or unsafe or unsound practices, so a weak model risk programme can still draw findings when it causes harm.

### What asset threshold does SR 26-2 use?

SR 26-2 says it is expected to be most relevant to banking organisations with over $30 billion in total assets. The OCC adds that it may also be relevant to smaller institutions with significant model risk exposure. SR 11-7 set no threshold itself, though the FDIC applied a $1 billion threshold when it adopted SR 11-7 in 2017.

## In the news

- 11 November 2026 · Arnold & Porter[Law firms read the OCC's new AI examiner framework](https://lowob.com/news/#2026-11-11-law-firms-read-the-occ-s-new-ai-examiner-framework)Outside counsel are already telling banks what examiners will ask for. Expect the questions to land on vendors before they land on policy.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

## Sources and notes

- [Federal Reserve, SR 26-2: Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm), 17 April 2026. Primary supervisory letter; scope and superseded letters.
- [Federal Reserve, Revised Guidance on Model Risk Management (attachment)](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf), 17 April 2026. Primary text; model definition, footnote 3, non-enforceability.
- [OCC, News Release 2026-29: OCC issues updated model risk management guidance](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-29.html), 17 April 2026. Primary; rescinded OCC bulletins and the planned request for information.
- [Orrick, Agencies overhaul model risk management guidance for banks: here's what changed](https://www.orrick.com/en/Insights/2026/04/Agencies-Overhaul-Model-Risk-Management-Guidance-for-Banks-Heres-What-Changed), 24 April 2026. Law-firm reading; not legal advice.
- [Sullivan & Cromwell, OCC, Fed and FDIC issue revised guidance on model risk management](https://www.sullcrom.com/insights/memo/2026/April/OCC-Fed-FDIC-Issue-Revised-Guidance-Model-Risk-Management), 29 April 2026. Law-firm reading; source for the FDIC's 2017 threshold.
- [OCC, Bulletin 2026-54: Super Intelligence: Supervisory Framework](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-54.html), 4 November 2026, and [framework document](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-97a.pdf). Primary; examiner resource, no supervisory expectations.
- [Arnold & Porter, OCC issues supervisory framework for bank use of "Super Intelligence"](https://www.arnoldporter.com/en/perspectives/advisories/2026/11/occ-issues-supervisory-framework-for-bank-use-of-super-intelligence), 11 November 2026. Law-firm reading; source for Bulletin 2026-13 and the relationship between the two documents.

## Related research

- [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [SR 26-2 vs SR 11-7: What Changed in US Model Risk Guidance](https://lowob.com/research/sr-26-2-vs-sr-11-7/)
- [What Is Model Risk Management for AI?](https://lowob.com/research/what-is-model-risk-management/)
- [AI Audit Trail Checklist: What to Log for Every AI Decision](https://lowob.com/research/ai-audit-trail-checklist/)

## Next move

List every model in your inventory that SR 26-2 now excludes, such as rule engines and generative AI tools, and name the risk framework that governs each one instead. Any item with no answer is your first gap.

[Start a conversation](https://lowob.com/contact/)
