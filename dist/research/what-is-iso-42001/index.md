# What Is ISO/IEC 42001?

Source: https://lowob.com/research/what-is-iso-42001/
Publisher: lowob (https://lowob.com)
Published: 2026-07-27 · Updated: 2026-11-16
Function: Strategy

> Summary: ISO/IEC 42001, published in December 2023, sets requirements for an AI management system and can be certified by an accredited body. It follows the familiar ISO clause structure and adds 38 reference controls in Annex A. A companion standard for certification bodies, ISO/IEC 42006, followed in July 2025, and UKAS accredited its first certifier in January 2026.

ISO/IEC 42001 is the international standard that specifies requirements for an AI management system: the policies, roles, risk processes and records through which an organisation governs the AI it builds or uses. Unlike the NIST AI RMF, it can be certified by an accredited third party. For a mid-size company it matters most when enterprise buyers start asking for proof that AI is governed, in the way they already ask for ISO 27001 or SOC 2.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What ISO/IEC 42001 means

A management system standard does not tell an organisation which AI to use or how to build it. It requires a working system for deciding, checking and improving: a defined scope, an AI policy, assigned responsibilities, a risk and impact assessment process, controls chosen in response, internal audit and management review. The certificate says that system exists and operates, not that any individual AI output is correct.

| ISO/IEC 42001 is | ISO/IEC 42001 is not |
| --- | --- |
| Requirements for an AI management system | A technical test of model accuracy or safety |
| Certifiable by an accredited body | A legal licence to operate AI |
| Applicable to AI users as well as builders | Only for companies that train models |
| Compatible with ISO 27001 and ISO 9001 | A substitute for EU AI Act compliance |

## How the standard is structured

The body follows the high-level structure shared by ISO management system standards, which makes it easier to run alongside ISO 27001 for information security.

| Clause | Topic | What an auditor looks for |
| --- | --- | --- |
| 4 | Context of the organisation | Scope of the AI management system, interested parties |
| 5 | Leadership | AI policy, roles and authorities |
| 6 | Planning | AI risk assessment, risk treatment, AI system impact assessment, objectives |
| 7 | Support | Resources, competence, awareness, documented information |
| 8 | Operation | Risk and impact assessments carried out in practice |
| 9 | Performance evaluation | Monitoring, internal audit, management review |
| 10 | Improvement | Nonconformities, corrective action, continual improvement |

Annex A lists 38 reference controls in nine sections, and Annex B gives implementation guidance for each. Annex C lists AI-related objectives and risk sources, and Annex D covers use across sectors and integration with other management system standards. As with ISO 27001, an organisation documents which controls apply and why in a statement of applicability.

The AI system impact assessment is the clause that most distinguishes 42001 from a security standard. It asks the organisation to consider consequences for individuals and groups affected by an AI system, not only risks to the organisation itself.

## How certification works

Certification is carried out by a certification body accredited by a national accreditation body, such as UKAS in the UK. The infrastructure is still young: ISO/IEC 42006, which sets the extra competence and audit requirements for those bodies, was published in July 2025, and UKAS granted its first 42001 accreditation, to BSI, in January 2026. Buyers should check that a certificate comes from an accredited body, not only from a firm that offers audits.

ISO/IEC 42001 is also the base for the EU's first harmonised AI standard. EN 18286, a quality management system standard for providers of high-risk AI, was published by the Commission on 14 October 2026 and uses the same management system structure, designed to be layered on top of 42001. Orrick notes that conforming to ISO/IEC 42001 alone does not give the presumption of conformity under the EU AI Act; EN 18286 does, for the requirements it covers.

| Stage | What happens | Typical duration (CSA guidance) |
| --- | --- | --- |
| Stage 1 | Documentation and design review: scope, policies, risk and impact methods, statement of applicability | 1 to 2 days |
| Gap | Fix findings before the main audit | Typically 4 to 12 weeks, no more than six months |
| Stage 2 | Evidence that the system operates: risk management, governance, controls | 3 to 9 or more days |
| Surveillance | Annual sampling audits to confirm continued conformity | About a third of initial audit time |

Durations depend on scope and size. A firm that uses a handful of vendor AI tools in one function can draw a narrow scope; a firm that sells an AI product will usually need a broader one.

## Who should pursue it

Certification is worth the cost when customers ask for it. That usually means selling AI-enabled services to enterprises or regulated buyers whose procurement teams have added AI questions to security reviews. For most 20 to 500 person firms the better first step is to build the parts of the system that any buyer will ask about: the inventory, the owner of each AI use, the risk and impact notes, and a record of decisions. These map to clauses 6 to 9 and become the evidence base if certification follows.

This is the **lowob** position on governance generally. The standard describes a loop of deciding, checking and improving. The decision record is where that loop leaves evidence.

## lowob takeaways

- **It certifies the system, not the model.** A 42001 certificate shows AI governance operates, not that outputs are right.
- **The structure is familiar.** Clauses 4 to 10 mirror ISO 27001, so firms with security certification can extend existing processes.
- **Check accreditation.** Certification bodies for 42001 are newly accredited; ask which accreditation body stands behind a certificate.
- **Build the record first.** Inventory, owners, impact notes and decisions are the evidence an auditor will sample.

## Sources and notes

- [IEC Webstore, ISO/IEC 42001:2023 Artificial intelligence management system](https://webstore.iec.ch/publication/90574), 18 December 2023. Standard abstract; full text is paid.
- [ISO, ISO/IEC 42006:2025](https://www.iso.org/standard/42006), July 2025. Standard listing for certification body requirements.
- [UKAS, UKAS grants first AIMS accreditation](https://www.ukas.com/resources/latest-news/ukas-grants-first-aims-accreditation/), 15 January 2026. Accreditation announcement.
- [Cloud Security Alliance, What to expect in the ISO 42001 certification process](https://cloudsecurityalliance.org/blog/2025/07/23/what-to-expect-in-the-iso-42001-certification-process), 23 July 2025. Industry body guidance; durations are typical, not prescribed.
- [Advisera, ISO 42001 requirements: clauses and structure](https://advisera.com/?p=134573), accessed November 2026. Consultancy summary of clause and annex structure; vendor content.
- [Orrick, First harmonised technical standard published under the EU AI Act](https://www.orrick.com/en/Insights/2026/10/First-Harmonised-Technical-Standard-Published-Under-the-EU-AI-Act), 27 October 2026. Law firm analysis of EN 18286 and Commission Implementing Decision (EU) 2026/2274; not legal advice.

## Related research

- [What is AI governance?](https://lowob.com/research/what-is-ai-governance/)
- [The RFP nobody can answer yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/)
- [The pilot that survives security review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [What is a decision record?](https://lowob.com/research/what-is-a-decision-record/)

## Next move

Check your last five enterprise security questionnaires for AI questions. If two or more ask about AI governance or ISO 42001, scope a gap assessment against clauses 6 to 9 this quarter.

[Start a conversation](https://lowob.com/contact/)
