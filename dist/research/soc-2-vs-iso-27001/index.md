# SOC 2 vs ISO 27001 for AI Vendors

Source: https://lowob.com/research/soc-2-vs-iso-27001/
Publisher: lowob (https://lowob.com)
Published: 2026-11-06 · Updated: 2026-11-16
Function: Strategy

> Summary: SOC 2 is an attestation report in which a CPA firm tests a service organisation's controls against the AICPA Trust Services Criteria. ISO/IEC 27001 is an international standard for an information security management system, certified by an accredited body. Neither currently tests model behaviour, so buyers of AI tools need both kinds of evidence plus questions of their own.

SOC 2 is an attestation: a CPA firm examines a service organisation's description of its system and tests its controls against the AICPA Trust Services Criteria, then issues a restricted report. ISO/IEC 27001 is a certification: an accredited certification body confirms that the organisation runs an information security management system (ISMS) that meets the standard's requirements. SOC 2 shows how specific controls performed; ISO/IEC 27001 shows that a management system exists and keeps improving. Neither currently tests whether an AI model is accurate or well governed.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What the two terms mean

**SOC 2** comes from the American Institute of CPAs. A licensed CPA firm examines the vendor's own description of its system and tests the controls behind it. The AICPA's guide for practitioners notes that customers and business partners typically need information about a service organisation's controls and often request a SOC 2 report. The output is an opinion, the system description and the tests performed with results. Our explainer on [SOC 2 for AI vendors](https://lowob.com/research/soc-2-for-ai-vendors/) covers Type 1 and Type 2 reports and the AI gaps in detail.

**ISO/IEC 27001** is published jointly by ISO and the IEC. It sets requirements for establishing, implementing, maintaining and continually improving an ISMS, for organisations of any size and sector. The organisation defines a scope, assesses its information security risks and selects controls, using Annex A as a reference list. An accredited certification body then audits it. ISO's own guidance asks firms to cite the full edition, "certified to ISO/IEC 27001:2022", rather than "ISO 27001". The ISO Survey 2022 counted over 70,000 certificates across about 150 countries.

| Dimension | SOC 2 | ISO/IEC 27001 |
| --- | --- | --- |
| Type of assurance | Attestation report by a CPA firm | Certification by an accredited certification body |
| Criteria owner | AICPA Trust Services Criteria | ISO and IEC |
| What is assessed | Controls for a described system, against chosen categories | A management system for a defined scope |
| Control set | Vendor designs its own controls to meet the criteria | Risk-based selection, with 93 Annex A reference controls |
| Output | Detailed report, usually shared under NDA | Certificate stating the scope; audit report stays private |
| Evidence of operation | Type 2 tests controls over a period | Annual surveillance audits within a three-year cycle |
| AI coverage today | None specific; AI points of focus proposed for 2027 | None specific; ISO/IEC 42001 is the AI counterpart |

## What each proves, and what neither proves

The two answer different questions. A SOC 2 Type 2 report says that named controls, such as access reviews or change approvals, operated effectively over a stated period, and it lists any exceptions. It is detailed and specific to one system. ISO/IEC 27001 says the organisation has a working process for finding and treating security risks, with management review and internal audit. It is broader and less detailed about any single control.

The AICPA has published a mapping between the Trust Services Criteria and ISO 27001, posted in May 2018 and available to members. Overlap is substantial, which is why many vendors hold both. Overlap is not equivalence: a certificate does not show test results, and a SOC 2 report does not show a management system.

For AI vendors, the same gaps appear in both:

- **Scope can exclude the AI.** A SOC 2 system description or an ISMS scope statement may not cover a newly launched AI feature.
- **Model providers sit outside.** Third-party model providers are often carved out of SOC 2 reports and treated as suppliers within an ISMS.
- **Model behaviour is untested.** Accuracy, drift and bias are outside both frameworks as written.

The AICPA's exposure draft of 28 October 2026 proposes points of focus on AI governance, model monitoring, prompt manipulation, data poisoning and training data management. If approved, they would apply to engagements beginning on or after 31 December 2027. For AI management itself, [ISO/IEC 42001](https://lowob.com/research/what-is-iso-42001/) is the certifiable standard.

## Which to ask for

| Situation | What to ask the vendor for |
| --- | --- |
| US enterprise buyers, or a procurement team that names SOC 2 | SOC 2 Type 2, period ending within 12 months |
| International buyers, or tenders that name ISO | ISO/IEC 27001:2022 certificate and its scope statement |
| Vendor holds client confidential data | Either, plus confidentiality in SOC 2 scope |
| AI outputs drive decisions or customer messages | SOC 2 with processing integrity, plus evaluation evidence |
| Vendor claims AI governance maturity | ISO/IEC 42001, or a written answer on drift and evaluation |
| New vendor with neither | A dated plan, and a bridge of your own controls in the meantime |

A short checklist when reading either document:

1. **Check the date and edition.** A 27001 certificate should name the 2022 edition; a SOC 2 period should be recent.
2. **Read the scope.** Confirm that the product and AI features you are buying are inside it.
3. **Find the model providers.** Ask which are carved out and how the vendor monitors them.
4. **Ask for the Statement of Applicability.** For 27001, it shows which Annex A controls were included or excluded, and why.
5. **Record what you accepted.** Note the evidence, the gaps and the review date.

## The **lowob** view

In the brain loop of store, wiring, record, reasoning and learning, an AI vendor usually supplies part of the wiring or the reasoning. SOC 2 and ISO/IEC 27001 are evidence that the vendor protects what passes through it. They say nothing about whether your firm should let the tool draft, act with approval or act alone.

That judgment is yours, and it belongs in your own record: which AI uses are approved, at what autonomy level, on what evidence, with what review date. As we argue in [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/), that chain of decisions is what scrutiny turns to. Rent the wiring, accept the vendor's certificates as hygiene, and own the decision record.

## lowob takeaways

- **Attestation versus certification.** SOC 2 tests named controls; ISO/IEC 27001 certifies a management system.
- **Overlap is not equivalence.** Many vendors need both, depending on who buys from them.
- **Read the scope first.** AI features and model providers are the most common exclusions.
- **Neither tests the model.** Ask separately about evaluation, drift and ISO/IEC 42001.

## Sources and notes

- [AICPA and CIMA, SOC 2 Reporting on an Examination of Controls at a Service Organization](https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy), accessed November 2026. Product page for the paid practitioner guide; description only.
- [AICPA, AICPA proposes update of SOC 2 Trust Services Criteria](https://www.aicpa-cima.com/news/article/aicpa-proposes-update-of-soc-2-r-trust-services-criteria-to-enhance-the-relevance-usability-and-value-of-cpas-reports), 28 October 2026. Exposure draft announcement; criteria not yet final.
- [AICPA and CIMA, Mapping 2017 Trust Services Criteria to ISO 27001](https://www.aicpa-cima.com/resources/download/mapping-2017-trust-services-criteria-to-iso-27001), posted 4 May 2018. Member-only spreadsheet; the page does not name the ISO edition mapped.
- [ISO, ISO/IEC 27001:2022](https://committee.iso.org/standard/27001), accessed November 2026. Primary standard page; certificate count is from the ISO Survey 2022.
- [Schellman, Prepare for ISO 27001:2022](https://www.schellman.com/blog/iso-certifications/prepare-for-iso-27001-2022), updated 9 January 2024. Audit firm blog; Schellman sells certification audits.
- [Amtivo, The three-year certification cycle](https://amtivo.com/the-three-year-certification-cycle/), accessed November 2026, and [INAB, Transition requirements for ISO/IEC 27001:2022](https://www.inab.ie/inab-documents/notifications/transition-requirements-for-iso-27001-2022.pdf), March 2023. Certification body guide and national accreditation body notice; cycle details vary by certifier.
- The comparison table, choice table and brain-loop placement are **lowob**'s working method.

## Related research

- [SOC 2 for AI Vendors: What It Covers and What It Does Not](https://lowob.com/research/soc-2-for-ai-vendors/)
- [What Is ISO/IEC 42001?](https://lowob.com/research/what-is-iso-42001/)
- [The Pilot That Survives Security Review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [What Is a Data Processing Agreement for AI Tools?](https://lowob.com/research/what-is-a-data-processing-agreement-for-ai/)

## Next move

For each AI vendor you use, note whether it holds SOC 2, ISO/IEC 27001:2022 or both, and whether the AI features you use sit inside the scope. Any vendor where the answer is "not in scope" goes on this month's review list.

[Start a conversation](https://lowob.com/contact/)
