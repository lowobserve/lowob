# SOC 2 for AI Vendors: What It Covers and What It Does Not

Source: https://lowob.com/research/soc-2-for-ai-vendors/
Publisher: lowob (https://lowob.com)
Published: 2026-07-01 · Updated: 2026-11-16
Function: Strategy

> Summary: SOC 2 is an attestation report on a service organisation's controls against the AICPA Trust Services Criteria. For AI vendors it covers security, access and change management well, and model behaviour poorly. In October 2026 the AICPA proposed revised criteria with AI points of focus, effective for engagements from 31 December 2027 if approved.

SOC 2 is an independent auditor's report on whether a service organisation's controls meet the AICPA Trust Services Criteria for security and, optionally, availability, processing integrity, confidentiality and privacy. For an AI vendor it tells you a good deal about access control, change management and incident handling, and very little about whether the model is accurate, unbiased or well monitored. The current criteria date from 2017; the AICPA proposed a revision with AI-specific points of focus in October 2026.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What a SOC 2 report is

SOC 2 is an attestation, not a certification. A CPA firm examines the vendor's description of its system and tests its controls against criteria set by the AICPA's Assurance Services Executive Committee. The output is a report, generally restricted to customers and prospects under NDA, with the auditor's opinion, the system description and the tests performed with results.

| Report | What it says | Use in procurement |
| --- | --- | --- |
| SOC 2 Type 1 | Controls were suitably designed at a specified date | Acceptable for a new vendor, with a Type 2 to follow |
| SOC 2 Type 2 | Controls were suitably designed and operated effectively over a period | The standard ask for any vendor holding client data |
| SOC 3 | Same subject as SOC 2, without test detail | Public marketing document; not enough for diligence |

Security is the only mandatory category. Processing integrity is the category closest to asking whether outputs are complete and accurate.

## What it covers and what it does not

| Covered well | Covered only if scoped or chosen by the auditor | Not covered |
| --- | --- | --- |
| Logical access, including admin access to customer data | Processing integrity of model outputs | Whether the model is accurate for your use |
| Change management for code and infrastructure | Model drift detection and accuracy monitoring | Bias and fairness of outputs |
| Incident response and monitoring | Inference logging and model lineage | Training data provenance, unless chosen |
| Vendor management of subservice organisations | Controls over AI agents acting without a human request | Compliance with the EU AI Act or other AI law |
| Encryption and data retention commitments | Unsanctioned AI tools used by vendor staff | Explainability of individual decisions |

Two scoping details matter more for AI vendors than for ordinary SaaS. The first is the model provider. Most AI vendors call a third-party model, and that provider may be a subservice organisation rather than a simple supplier. Reports often carve it out of scope, which means the report covers the vendor's controls over its AI dependency, not the model provider's own controls. The second is the system description: an AI feature launched after the audit period may not appear at all.

A Cloud Security Alliance research note in August 2026 found that auditors were requesting AI evidence ad hoc and inconsistently, and that a clean SOC 2 report could include no tested controls for drift or model accuracy.

## The proposed 2027 criteria

On 28 October 2026 the AICPA published an exposure draft of revised Trust Services Criteria, the first major overhaul since 2017. A summary by the audit firm A-LIGN reports that the common criteria would consolidate from 33 to 20, and that AI appears as points of focus under 17 criteria rather than as a separate AI criterion. Proposed additions include access for AI agents and accounts, unsanctioned AI tools, model drift and data poisoning in risk assessment, and AI models, APIs and plugins as third-party components. If approved, the criteria would apply to engagements beginning on or after 31 December 2027, with early adoption allowed.

Until then, treat a SOC 2 report as evidence of operational hygiene, and ask separately about AI.

## How to read an AI vendor's SOC 2

| Check | What to look for |
| --- | --- |
| Report type and period | Type 2, period ending within the last 12 months, or a bridge letter |
| Categories in scope | Security plus confidentiality; processing integrity if outputs drive decisions |
| System description | The AI features you are buying are named and described |
| Subservice organisations | Which model providers are carved out, and what the vendor monitors |
| Exceptions | Any failed tests, and management's response |
| Complementary user controls | What you must do yourself for the controls to work |

Then ask the questions SOC 2 does not answer: how outputs are evaluated, how drift is detected, what is retained, and whether the vendor holds ISO/IEC 42001 certification. **lowob**'s view is that the buyer's own record, which AI uses are approved, at what autonomy level and with what result, is what turns a vendor report into a governed decision.

## lowob takeaways

- **SOC 2 tests controls, not models.** It is strong on access and change, weak on accuracy and bias.
- **Ask for Type 2 with the right scope.** Confidentiality and processing integrity matter for AI vendors.
- **Read the carve-outs.** The model provider is often outside the report.
- **Watch the 2027 criteria.** AI points of focus are proposed but not yet final.

## Sources and notes

- [AICPA, 2017 Trust Services Criteria with revised points of focus 2022](https://www.aicpa-cima.com/resources/article/2017-trust-services-criteria-with-revised-points-of-focus-2022), posted 30 September 2023. Primary criteria source.
- [AICPA, AICPA proposes update of SOC 2 Trust Services Criteria](https://www.aicpa-cima.com/news/article/aicpa-proposes-update-of-soc-2-r-trust-services-criteria-to-enhance-the-relevance-usability-and-value-of-cpas-reports), 28 October 2026. Primary announcement; exposure draft, not final.
- [A-LIGN, Proposed SOC 2 Trust Services Criteria updates: what you need to know](https://www.a-lign.com/articles/proposed-soc-2-trust-services-criteria-updates-what-you-need-to-know), October 2026. Audit firm summary of the draft; A-LIGN sells SOC 2 audits.
- [Cloud Security Alliance, The SOC 2 AI gap: auditors improvise where AICPA has not acted](https://labs.cloudsecurityalliance.org/research/csa-research-note-soc2-ai-controls-gap-20260830-csa-styled/), 30 August 2026. Research note; written before the exposure draft.
- [Journal of Accountancy, The 3 faces of SOC](https://www.journalofaccountancy.com/newsletters/2016/jun/3-face-of-soc/), June 2016, and [Linford & Co, AI as supply chain risk: what SOC 2 auditors need to know](https://linfordco.com/blog/ai-supply-chain-risk-soc-2/), 15 April 2026. Report types; AI providers as subservice organisations.
- [Schellman, SOC 2 Type 1 and Type 2 overview](https://www.schellman.com/blog/2015/06/soc-2-type-1-type-2-overview/), 2015. Audit firm explainer on design versus operating effectiveness and typical period length.

## Related research

- [The pilot that survives security review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [The RFP nobody can answer yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/)
- [Top 5 AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)

## Next move

Pull the SOC 2 reports for your three most-used AI vendors and check two things: whether the AI features you use appear in the system description, and which model providers are carved out.

[Start a conversation](https://lowob.com/contact/)
