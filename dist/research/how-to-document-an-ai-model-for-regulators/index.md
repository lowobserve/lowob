# How to Document an AI Model for Regulators: A Practical Template

Source: https://lowob.com/research/how-to-document-an-ai-model-for-regulators/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: Supervisors want AI documentation that someone outside the build team can read, check and audit. This template sets out twelve sections, from purpose and risk tier to monitoring, change history and decision records, and maps each to SR 26-2, the OCC's November 2026 examiner framework, EU AI Act Annex IV and PRA SS1/23. It also covers vendor models, proportionality and retention.

To document an AI model for regulators, keep one current file per AI system covering purpose, owner, risk tier, design and data, vendors, testing, limitations, human oversight, monitoring, change history and links to decision records, written so someone outside the build team can audit it. Scale the depth to the system's consequences.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

Most AI documentation is written for the people who built the system. Supervisors read it to answer a different question: is this use understood, controlled and checked by people with the standing to stop it? This template is built for that reader. It complements the decision-level record in our [AI audit trail checklist](https://lowob.com/research/ai-audit-trail-checklist/), and our pillar guide [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/) explains why the record of what the system did now matters as much as the model file.

The template summarises public supervisory texts for orientation. It is not legal advice, and the final form should be agreed with your compliance and model risk functions.

## What documentation do regulators expect for an AI model?

Documentation that lets an outsider understand the system, check its risk and audit its use. The texts differ in detail but agree on that test.

SR 26-2, the US model risk guidance of 17 April 2026, says "adequate documentation helps to support effective model risk management" and can "help maximize the likelihood of continuity of operations." Its predecessor SR 11-7 set the test more sharply: documentation "sufficiently detailed to allow parties unfamiliar with a model to understand how the model operates." The OCC's 4 November 2026 framework, a non-binding resource for examiners reviewing generative and agentic AI, uses the same idea and adds auditability.

For high-risk systems under the EU AI Act, Article 11 requires technical documentation "drawn up before that system is placed on the market or put into service" and "kept up-to date", containing at a minimum the elements in Annex IV. The UK PRA's SS1/23, for banks with internal model approval, applies its five principles to models "regardless of technology." The FCA's 19 October 2026 review lists poor documentation, "with limited audit trails or supporting rationale", as an area for improvement.

## What should an AI model documentation template include?

Twelve sections. The table is the template; each row names the text that asks for it.

| # | Section | What to write | Evidence to attach | Regulatory hook |
| --- | --- | --- | --- | --- |
| 1 | Identity and purpose | System name and ID, intended purpose, permitted and prohibited uses, business function | Inventory entry | OCC "defined purpose and permitted use"; Annex IV point 1(a) |
| 2 | Ownership and approval | Accountable owner, approver, approval date, review date | Signed approval | OCC governance and accountability; PRA SS1/23 governance |
| 3 | Risk tier and materiality | Tier, with the factors: consequence, reversibility, customer impact, autonomy, data sensitivity, explainability, provenance | Tiering worksheet | SR 26-2 materiality; OCC illustrative four-tier method |
| 4 | Design and architecture | Model type, provider, version, retrieval sources, tools and integrations, key design choices | Architecture diagram | Annex IV point 2(b) and (c); SR 26-2 conceptual soundness |
| 5 | Data | Training, fine-tuning and retrieval data, provenance, personal data handling | Data inventory and lineage | Annex IV point 2(d); OCC data governance |
| 6 | Third parties | Vendor, base model, hosting, subprocessors, contract terms on changes and data use | Contract extract, vendor documentation | SR 26-2 vendor section; OCC third-party component; Annex IV point 2(a) |
| 7 | Testing and validation | Test sets, metrics, results, who validated and when, open findings | Test reports, validation sign-off | SR 26-2 validation; NIST MEASURE 2.1; Annex IV point 2(g) |
| 8 | Limitations | Known failure modes, populations or tasks where performance is weak, conditions for use | Error analysis | SR 26-2: "a clear understanding of a model's limitations" |
| 9 | Human oversight | Autonomy level, review points, reviewer competence, override and escalation rules | Procedure, training records | OCC human-in-the-loop component; Annex IV point 2(e); AI Act Art. 26(2) |
| 10 | Monitoring | Metrics, thresholds, drift checks, outcome analysis, review frequency | Monitoring dashboard export | SR 26-2 ongoing monitoring and outcomes analysis; Annex IV point 9 |
| 11 | Change history | Every model, prompt, data, configuration, tool and permission change, linked to testing | Change log | OCC change logging; Annex IV point 6; DORA Art. 9(4)(e) |
| 12 | Decision records and retention | Where run-level records live, the ID that joins them, retention class and storage | Sample reconstructed decision | OCC decision traceability; AI Act Art. 19 and 26(6); SEA Rule 17a-4(f) |

Sections 1 to 8 describe the system. Sections 9 to 12 describe how the firm controls and evidences its use. Supervisors increasingly spend their time in the second half.

## How is a regulatory file different from a model card?

A model card describes the model; a regulatory file describes the firm's use of it. Model cards, proposed by Mitchell and colleagues at the FAT\* conference in January 2019, cover model details, intended use, factors, metrics, evaluation and training data, quantitative analyses, ethical considerations, and caveats and recommendations.

That covers much of sections 1, 4, 5, 7 and 8 above. It says nothing about who approved the use, who reviews outputs, how changes are controlled or where decisions are recorded. A vendor's model card is an attachment to section 6, not a substitute for the file. Our explainer [What is a model card?](https://lowob.com/research/what-is-a-model-card/) shows how a buyer should read one.

## How much AI documentation is enough?

Enough for the consequence of the use, and no more. SR 26-2 says "model purpose, together with model exposure, determines model materiality", and more material models warrant "more comprehensive and rigorous oversight."

The OCC framework is explicit about proportion. Documentation "may be proportionate to the use case and may address purpose, ownership, design, data, providers", through to "validation, monitoring, decisions, approvals, incidents, and changes." It adds that documentation "may be scaled to complexity and consequence without creating incentives to select a less suitable" approach. In other words, a team should not pick a weaker tool to avoid paperwork.

A practical scale, using the OCC's illustrative tiers:

| Tier | Example (illustrative) | Sections to complete |
| --- | --- | --- |
| 4, low | Internal drafting assistant with no customer or financial data | 1, 2, 3, 6, 11 |
| 3, moderate | Decision support with mandatory human-in-the-loop, reversible outcomes | Add 7, 8, 9 and 10 |
| 2, high | High-weight decision support or human-on-the-loop action | All twelve, with independent validation |
| 1, critical | Autonomous action with high customer or financial impact | All twelve, independent validation, board-level approval |

Under the EU AI Act, SMEs and small mid-caps may use a simplified technical documentation form for Annex IV, which the Commission is to establish under Article 11(1).

## How should vendor AI models be documented?

By recording what the firm understands about the model, how it checks the model in use, and what it changed. Firms rarely see a vendor's training data or weights; supervisors know that.

SR 26-2 calls "developing an understanding of the vendor model" sound practice, along with "ongoing monitoring and outcome analysis to assess whether vendor models" remain fit for purpose. Where vendor models are customised, it expects firms to be "documenting, justifying, and evaluating adjustments made to customize the model." The OCC framework adds contract points: whether bank data can be used to train the vendor's models, and how the bank learns when "existing vendors may add SI features, functionality or change models." In the OCC's usage, SI, or super intelligence, means the technologies previously called artificial intelligence.

For section 6, attach the vendor's own documentation, the contract clauses on change notice and data use, and the firm's own test results on its data.

## How long must AI model documentation be kept?

It depends on the regime. Under EU AI Act Article 18, providers of high-risk systems keep technical documentation for "a period ending 10 years after the high-risk AI system has been placed on the market or put into service." Providers that are financial institutions keep it "as part of the documentation kept under the relevant Union financial services law."

US guidance sets no fixed period. The OCC framework says records may be retained "for periods appropriate to legal, supervisory, audit, customer-remediation, and operational needs." Keep superseded versions of the file, not only the current one: a supervisor asking about a decision made last year needs the documentation that applied then.

## lowob takeaways

- **Write for the outsider.** The test is whether someone outside the build team can understand, evaluate and audit the system.
- **Document the use, not just the model.** Oversight, monitoring, changes and decision records are where supervisors look.
- **Scale by consequence.** Tier the system first, then complete the sections its tier requires.
- **Keep old versions.** Documentation must answer for past decisions, so supersede rather than overwrite.

## Common questions

### What documentation do regulators require for AI models?

Requirements vary by regime. US bank guidance in SR 26-2 expects adequate documentation supporting model risk management. The EU AI Act requires technical documentation with the Annex IV elements for high-risk systems. The OCC's 2026 examiner framework looks for documentation that lets people other than developers understand, evaluate and audit a system, scaled to its consequences.

### What is in EU AI Act Annex IV technical documentation?

Annex IV lists nine elements: a general description of the system, a detailed description of its elements and development, monitoring and control, performance metrics, the risk management system, lifecycle changes, harmonised standards applied, the EU declaration of conformity, and the post-market monitoring system. It applies to providers of high-risk AI systems, with a simplified form for SMEs and small mid-caps.

### Is a model card enough for regulators?

No. A model card describes a model's intended use, evaluation, training data and limitations. Regulators also ask how the firm uses the model: who approved it, who reviews outputs, how changes are controlled, how performance is monitored and where decision records are kept. Attach a vendor's model card to your file rather than relying on it alone.

### How long should AI model documentation be kept?

Under EU AI Act Article 18, providers of high-risk systems keep technical documentation for 10 years after the system is placed on the market or put into service, and financial institutions keep it within their financial services documentation. US guidance sets no fixed period; the OCC framework points to legal, supervisory, audit, remediation and operational needs.

## In the news

- 4 November 2026 · OCC[OCC publishes Bulletin 2026-54, an examiner framework for bank AI](https://lowob.com/news/#2026-11-04-occ-publishes-bulletin-2026-54-an-examiner-framework-for-ba)It is examiner guidance and sets no new expectations for banks on its own. It still tells you which records an exam will ask to see.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

## Sources and notes

- [OCC, Super Intelligence: Supervisory Framework](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-97a.pdf), 4 November 2026, with [Bulletin 2026-54](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-54.html). Primary; examiner resource that sets no supervisory expectations for banks.
- [Federal Reserve, SR 26-2 attached guidance](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf), 17 April 2026. Primary; documentation, materiality and vendor sections.
- [Federal Reserve, SR 11-7 letter and guidance](https://www.federalreserve.gov/supervisionreg/srletters/sr1107.pdf), 4 April 2011. Primary; superseded, quoted for its documentation test.
- [European Commission AI Act Service Desk, Article 11](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-11), [Annex IV](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-4) and [Article 18](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-18), as at 27 July 2026. Primary legal text.
- [Bank of England PRA, SS1/23 Model risk management principles for banks](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss), current version effective 23 April 2026. Primary.
- [FCA, AI in financial services: good practice and areas for improvement](https://www.fca.org.uk/publications/good-poor-practice/ai-financial-services), 19 October 2026. Primary; examples only, no new requirements.
- [Mitchell et al., Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993), FAT\* 2019. Academic paper.
- [NIST AI Resource Center, AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/). Primary; voluntary framework.
- The twelve-section template and the tier-to-section scale are **lowob**'s framework, adapted from the OCC's illustrative tiers.

## Related research

- [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [AI Audit Trail Checklist: What to Log for Every AI Decision](https://lowob.com/research/ai-audit-trail-checklist/)
- [AI Governance Framework Template for Mid-Size Financial Firms](https://lowob.com/research/ai-governance-framework-template/)
- [What Is a Model Card?](https://lowob.com/research/what-is-a-model-card/)
- [SOC 2 vs ISO 27001 for AI Vendors](https://lowob.com/research/soc-2-vs-iso-27001/)

## Next move

Take your highest-consequence AI system and fill sections 9 to 12 of the template first. If you cannot point to a sample reconstructed decision for section 12, start there.

[Start a conversation](https://lowob.com/contact/)
