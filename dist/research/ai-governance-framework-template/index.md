# AI Governance Framework Template for Mid-Size Financial Firms

Source: https://lowob.com/research/ai-governance-framework-template/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: An AI governance framework sets who owns AI risk, what AI the firm runs, how each use is tiered and approved, how people oversee it, how vendors are controlled and what records prove it worked. This template sets out eleven components for a mid-size financial firm, each anchored to NIST's AI RMF, the OCC's November 2026 framework, the FCA's October 2026 review, SR 26-2, DORA and the EU AI Act.

An AI governance framework for a mid-size financial firm is a short written system of named owners, an AI inventory, risk tiers, approval gates, oversight rules, vendor controls, monitoring and records, mapped to the rules that bind the firm. It should fit on a few pages and be provable from records, not from slides.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

Mid-size financial firms sit in an awkward place on AI. They are too regulated to run AI informally and usually too small for a dedicated AI risk function. The answer is a framework short enough to be used, built on the risk, compliance and vendor processes the firm already has. Our pillar guide [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/) explains why the records the framework produces matter most under examination.

This template draws on public supervisory texts and labelled readings. It is not legal advice; adapt it with your compliance function to the rules that apply to you.

## What is an AI governance framework?

It is the written set of roles, rules and records through which a firm decides which AI uses are allowed, who answers for each, and how risk is found and controlled. Our explainer [What is AI governance?](https://lowob.com/research/what-is-ai-governance/) covers the concept; this page is the template.

Three public references shape most frameworks. NIST's AI RMF is voluntary and structured around Govern, Map, Measure and Manage; NIST says it "is being revised as part of the White House AI Action Plan." ISO/IEC 42001 is a certifiable management system standard, covered in our explainer [What is ISO/IEC 42001?](https://lowob.com/research/what-is-iso-42001/). For banks, the OCC's November 2026 framework shows what examiners will look for, though the bulletin says it "does not establish supervisory expectations for banks."

## What should an AI governance framework template include?

Eleven components. The table is the template; fill the middle columns for your firm.

| # | Component | What to write down | Typical owner | Evidence | Anchors |
| --- | --- | --- | --- | --- | --- |
| 1 | Scope and definitions | What counts as AI, including vendor features and agents; what is out of scope | Chief risk officer | Definition in policy | SR 26-2 model definition; OCC defined purpose |
| 2 | Roles and accountability | Board role, one accountable senior manager, an owner per AI system, second-line review, internal audit | Board and CEO | Responsibilities map | FCA SMF mapping; DORA Art. 5(2)(a); NIST GOVERN 2.1 |
| 3 | Inventory | Every AI system, agent and vendor AI feature, with owner, provider, permissions and status | AI governance lead | Live inventory | NIST GOVERN 1.6; FCA agent inventory; DORA Art. 8 |
| 4 | Risk tiering | Tiers and the factors behind them | Second line | Tier per system with reasoning | OCC illustrative tiers; SR 26-2 materiality |
| 5 | Approval gates | Who approves at intake, before production and after material change | Accountable senior manager | Approval records | OCC "approval authority at meaningful lifecycle gates" |
| 6 | Human oversight and autonomy | Autonomy level per system, review points, override and escalation rules, reviewer competence | System owner | Procedures, training records | OCC human-in-the-loop component; AI Act Art. 26(2); FINRA 2026 report |
| 7 | Third-party AI | Due diligence, contract terms, change notice, data use, exit plans | Procurement and vendor risk | Contracts, register entries | DORA Art. 28 and 30; FCA; NIST GOVERN 6.1 |
| 8 | Testing and monitoring | Pre-deployment tests, ongoing metrics, drift checks, outcomes analysis | System owner, second line | Test reports, monitoring logs | SR 26-2 validation and monitoring; NIST MANAGE 4.1 |
| 9 | Records and audit trail | Decision-level record fields, storage, retention | Compliance | Sample reconstructed decision | FINRA 2026 report; SEA Rule 17a-4(f); AI Act Art. 12, 19, 26 |
| 10 | Incidents and shutdown | What counts as an AI incident, who can stop a system, how fast, who is told | Operations risk | Incident log, shutdown tests | DORA Art. 17 and 19; OCC kill switches; NIST GOVERN 4.3 |
| 11 | Review and reporting | Annual framework review, board reporting, internal audit scope | Accountable senior manager | Review minutes, audit reports | DORA Art. 6(5); SR 26-2 internal audit role |

Two principles keep it small. First, attach components to processes the firm already runs: new product approval, vendor onboarding, change management, incident management. The OCC tells examiners not to require "a separate SI risk appetite." Second, make every component produce a record, so the framework can be shown working rather than described.

## Who should own AI governance in a mid-size firm?

One named senior manager, with a board that receives regular reporting. The FCA's 19 October 2026 review describes good practice as firms that mapped AI responsibilities across senior management functions, with a senior person accountable for overall oversight, and "accountability assigned at the beginning."

Under DORA Article 5(2)(a), the management body bears "the ultimate responsibility for managing the financial entity's ICT risk", which includes AI systems. SR 26-2 describes internal audit's role as evaluating "whether the model risk management practices are rigorous and effective", not duplicating them. Large firms often add an AI board or ethics committee, which the FCA also observed. For a mid-size firm, a standing agenda item at the existing risk committee usually does the same job.

## How should a firm tier its AI uses?

By consequence, not technical sophistication. The OCC's framework scores each use case against seven common factors and maps the result to an illustrative four-tier scale. The factors are decision consequence, reversibility, customer or financial impact, autonomy level, data sensitivity, explainability and provenance. Arnold & Porter's 11 November 2026 reading notes that banks may choose their own number and type of categories.

The OCC gives the two ends of the scale: "a simple internal productivity tool with no customer or financial data exposure sits at Tier 4", whereas "a fully autonomous, customer-facing payment agent sits at Tier 1, regardless of how well it performs in testing."

| OCC tier | OCC description (abridged) | **lowob** autonomy dial | Controls to require (illustrative) |
| --- | --- | --- | --- |
| 1 Critical | Direct action, low or no reversibility, high impact, autonomous or partly autonomous | 3 act and report, or 4 act alone | Independent validation, board-level approval, real-time monitoring, tested shutdown |
| 2 High | Direct action or high-weight decision support, human-on-the-loop, moderate-to-high impact | 2 act with approval, or 3 | Independent validation, senior approval, full decision records |
| 3 Moderate | Decision support with mandatory human-in-the-loop, limited data sensitivity, reversible | 1 draft, or 2 | Owner testing, second-line review, sampled decision records |
| 4 Low | No customer or financial data, no direct action, fully human-controlled | 0 answer, or 1 | Inventory entry and owner; light monitoring |

The dial is **lowob**'s five-step scale for how much a system may do without a person: 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone. Our explainer [What is human-in-the-loop AI?](https://lowob.com/research/what-is-human-in-the-loop-ai/) covers the oversight models behind it.

## Which rules should the framework map to?

Only the ones that bind the firm, plus one voluntary reference. A mapping column that lists every framework in existence helps no one.

| Firm type | Binding or supervisory texts to map | Voluntary reference |
| --- | --- | --- |
| US bank | SR 26-2 for traditional models; OCC framework for generative and agentic AI at national banks | NIST AI RMF |
| US broker-dealer | FINRA Rules 3110, 2210 and 4511; SEA Rule 17a-4; FINRA 2026 report | NIST AI RMF |
| UK bank or insurer | FCA Handbook, including SM&CR; PRA SS1/23 where it applies; FCA October 2026 review | ISO/IEC 42001 or NIST AI RMF |
| EU financial entity | DORA; EU AI Act for high-risk uses from 2 December 2027 | ISO/IEC 42001 |

Our comparison [NIST AI RMF vs ISO/IEC 42001](https://lowob.com/research/nist-ai-rmf-vs-iso-42001/) helps choose the voluntary reference.

## How can a mid-size firm put the framework in place?

In three steps that each produce records. The sequence below is **lowob**'s suggestion, not a regulatory requirement.

1. **Inventory and owners.** List every AI system, agent and vendor AI feature, with a named owner. The FCA's review praised firms that kept "clear inventories of AI use cases and the models they were built on."
2. **Tiers and gates.** Tier each system, then route new uses and material changes through approval at the right level. Our [documentation template](https://lowob.com/research/how-to-document-an-ai-model-for-regulators/) sets out what each tier must record.
3. **Records and a test.** Specify the decision-level record for tier 1 to 3 systems using our [AI audit trail checklist](https://lowob.com/research/ai-audit-trail-checklist/), then rebuild one real decision from records alone.

Gateway card

### Before the framework goes to the board

- One accountable senior manager named, with responsibilities written down
- An inventory that includes vendor AI features and agents
- A tier for every system, with the reasoning recorded
- Approval gates attached to existing product, change and vendor processes
- A tested way to stop each tier 1 and tier 2 system
- One decision reconstructed end to end from records

## lowob takeaways

- **Extend existing risk management.** The OCC tells examiners not to treat AI as a separate risk category; build on current processes.
- **Name one owner.** The FCA's good practice puts accountability with a senior manager from the design stage.
- **Tier by consequence.** A simple agent that moves money can outrank a sophisticated model that drafts internal notes.
- **Prove it with records.** Each component should leave evidence an examiner can read.

## Common questions

### What should an AI governance framework include?

Eleven components cover most needs: scope and definitions, roles and accountability, an AI inventory, risk tiering, approval gates, human oversight and autonomy rules, third-party AI controls, testing and monitoring, records and audit trail, incident and shutdown procedures, and periodic review and reporting. Each should produce a record so the framework can be shown working in an examination.

### Is there an official AI governance framework for banks?

Not a binding one in the US. SR 26-2 covers traditional models and excludes generative and agentic AI. The OCC's November 2026 framework for generative and agentic AI is a resource for its examiners and sets no supervisory expectations for banks. NIST's AI RMF is voluntary. In the UK and EU, firms rely on existing FCA, PRA and DORA rules.

### How should AI systems be risk-tiered?

By consequence rather than technical sophistication. The OCC's illustrative method scores each use on seven factors, including decision consequence, reversibility, customer or financial impact, autonomy and data sensitivity, then assigns one of four tiers from critical to low. A fully autonomous customer-facing payment agent is critical; an internal drafting tool with no customer data is low.

### Who is accountable for AI risk in a financial firm?

Senior management and the board. The FCA's October 2026 review describes good practice as mapping AI responsibilities to senior management functions with one senior person accountable for oversight. Under DORA, the management body bears ultimate responsibility for ICT risk, including AI systems, and firms stay fully responsible for AI services bought from vendors.

## In the news

- 11 November 2026 · Arnold & Porter[Law firms read the OCC's new AI examiner framework](https://lowob.com/news/#2026-11-11-law-firms-read-the-occ-s-new-ai-examiner-framework)Outside counsel are already telling banks what examiners will ask for. Expect the questions to land on vendors before they land on policy.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

## Sources and notes

- [NIST, AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework). Primary; release date, voluntary status and revision notice.
- [NIST AI Resource Center, AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/). Primary; GOVERN, MEASURE and MANAGE subcategories.
- [OCC, Bulletin 2026-54: Super Intelligence: Supervisory Framework](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-54.html), [News Release 2026-97](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-97.html) and [framework document](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-97a.pdf), 4 November 2026. Primary; examiner resource, non-binding.
- [Arnold & Porter, OCC issues supervisory framework for bank use of "Super Intelligence"](https://www.arnoldporter.com/en/perspectives/advisories/2026/11/occ-issues-supervisory-framework-for-bank-use-of-super-intelligence), 11 November 2026. Law-firm reading; not legal advice.
- [FCA, AI in financial services: good practice and areas for improvement](https://www.fca.org.uk/publications/good-poor-practice/ai-financial-services), 19 October 2026. Primary; examples only, no new requirements.
- [Federal Reserve, SR 26-2 attached guidance](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf), 17 April 2026. Primary; materiality and internal audit.
- [Elvinger Hoss Prussen, DORA brochure](https://elvingerhoss.lu/sites/default/files/upload/media/document/2025-04/Brochure%20DORA.pdf), April 2025. Law-firm compilation of the DORA text.
- [FINRA, 2026 Annual Regulatory Oversight Report: GenAI](https://www.finra.org/rules-guidance/guidance/reports/2026-finra-annual-regulatory-oversight-report/gen-ai), December 2025. Primary; considerations, not rule text.
- The eleven-component template, the tier-to-control mapping, the autonomy dial and the three-step sequence are **lowob**'s framework.

## Related research

- [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [How to Document an AI Model for Regulators: A Practical Template](https://lowob.com/research/how-to-document-an-ai-model-for-regulators/)
- [What Is AI Governance?](https://lowob.com/research/what-is-ai-governance/)
- [Top 5 AI Governance and Audit-Trail Tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [FINRA and AI in 2026: What Broker-Dealers Must Record and Supervise](https://lowob.com/research/finra-ai-guidance-2026/)

## Next move

Fill the "typical owner" column of the template with real names this week. Every blank is a component nobody runs yet.

[Start a conversation](https://lowob.com/contact/)
