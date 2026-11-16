# What Is an AI Bill of Materials?

Source: https://lowob.com/research/what-is-an-ai-bill-of-materials/
Publisher: lowob (https://lowob.com)
Published: 2026-10-01 · Updated: 2026-11-16
Function: Strategy

> Summary: An AI bill of materials, or AI-BOM, is a structured inventory of the components of an AI system: models, datasets, software dependencies and infrastructure, with versions and provenance. In May 2026 CISA and G7 partners published voluntary minimum elements in seven clusters. For most firms it is something to ask vendors for, not to build.

An AI bill of materials (AI-BOM) is a structured, usually machine-readable list of what an AI system is made of: the models and their lineage, the datasets used to train and test them, the software libraries and services they depend on, and the infrastructure they run on. It extends the software bill of materials (SBOM) that security teams already use. In May 2026, CISA and G7 partners published voluntary minimum elements for one. For most 20 to 500 person firms it is something to request from vendors, not something to produce.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What an AI bill of materials means

An SBOM lists the software components inside a product, so that when a vulnerability is found in a library, a firm can tell quickly whether it is affected. An AI system has extra components that an SBOM does not capture well. The model has a lineage: a base model, fine-tunes, adapters. It was trained on datasets with their own provenance, licences and sensitivity. Its behaviour depends on infrastructure and on settings that change between versions.

The AI-BOM records those parts. The OWASP AIBOM project puts the aim as providing "transparency into how AI models are built, trained, and deployed".

| Document | What it covers | Who writes it |
| --- | --- | --- |
| SBOM | Software components, versions, licences, dependencies | The software supplier |
| AI-BOM | SBOM content plus models, datasets, infrastructure, security and performance properties | The AI system supplier |
| [Model card](https://lowob.com/research/what-is-a-model-card/) | One model's intended use, evaluation, limits and training data, in prose | The model developer |
| AI inventory | Every AI use in your firm, with owner, purpose, data and autonomy level | You |

## What the 2026 guidance asks for

The CISA and G7 document is the first government-backed baseline. Morgan Lewis's summary sets out the seven clusters.

| Cluster | Examples of what it records |
| --- | --- |
| Metadata | Author of the BOM, version, format, signature, timestamp |
| System-level properties | The AI system as a whole and how its parts fit |
| Models | Model identity, lineage and training properties |
| Datasets | Provenance and sensitivity of training and test data |
| Infrastructure | Compute and hosting the system depends on |
| Security properties | Controls against adversarial attack and prompt injection |
| Key performance indicators | Measures of how the system performs |

Some fields carry over from ordinary SBOMs: component identifiers, cryptographic hashes, licence information and dependency relationships. CISA's announcement stresses that the elements reflect G7 expert consensus and will expand over time.

The guidance creates no legal duty. It is relevant to firms selling into governments and critical infrastructure, where SBOM requests are more established, and it gives every buyer a checklist for vendor questions. The EU AI Act's documentation duties for providers, such as Annex XII information for downstream providers, ask for overlapping facts in prose.

### Formats

Two open formats dominate. OWASP CycloneDX added machine-learning BOM support in version 1.5; a model is declared as a component of type "machine-learning-model" and datasets as data components, and model card data can sit inside the BOM. SPDX 3.0, the other main format, has AI and Dataset profiles for the same purpose. A buyer does not need to read either format directly, but should ask that one is used, so the file can be loaded into existing tools.

## How a buyer should use one

Morgan Lewis suggests several uses for buyers. Three fit a mid-size firm well.

| Use | What to do |
| --- | --- |
| Procurement | Ask AI vendors which models, third-party components and datasets their product relies on, and for limits on performance |
| Contract | For higher-risk uses, require updated AI-BOM information when models, datasets or components change |
| Incident response | When a model, dataset or library is reported compromised, check which tools are affected |

The second use matters most. AI products change their models more often than ordinary software changes libraries, and a model swap can alter behaviour without any visible release. A clause asking for notice of model changes is easier to obtain than a full AI-BOM, and covers much of the same risk. See [What is model drift?](https://lowob.com/research/what-is-model-drift/) for why that matters.

## The **lowob** view

An AI-BOM answers what is inside a vendor's system. It does not answer what the firm has allowed that system to do. **lowob**'s position is that the second question is the one a firm must own. Keep the vendor's AI-BOM, or its answers to the questions above, attached to the tool's line in your AI inventory, next to its owner, autonomy level and approver. When a model changes, the BOM tells you something moved; the inventory tells you who decides whether the approval still stands.

## lowob takeaways

- **It extends the SBOM.** An AI-BOM adds models, datasets, infrastructure and performance to the software list.
- **There is now a baseline.** CISA and G7 partners published seven clusters of voluntary minimum elements in May 2026.
- **Ask, do not build.** Most mid-size firms need vendor answers, not their own AI-BOM.
- **Get notice of model changes.** It is the clause that covers the most risk for the least negotiation.

## Sources and notes

- [CISA, CISA and G7 partners release joint guidance on the minimum elements of a software bill of materials for AI](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/416bd74), 12 May 2026. US government announcement; the guidance is voluntary.
- [Morgan Lewis, US CISA, G7 partners in Europe and Asia release minimum elements for AI software bills of materials](https://www.morganlewis.com/ru/pubs/2026/06/us-cisa-g7-partners-in-europe-and-asia-release-minimum-elements-for-ai-software-bills-of-materials), June 2026. Law firm summary of the seven clusters; not legal advice.
- [OWASP, AI Bill of Materials (AIBOM) project](https://owasp.org/www-project-aibom), accessed November 2026. Open community project; tooling still in development.
- [OWASP CycloneDX, Authoritative Guide to AI/ML-BOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-AI-ML-BOM-en.pdf), First Edition Revision 1, 10 June 2026. Open standard guidance for one of the two main formats.
- [Bennet et al., Implementing AI Bill of Materials (AI BOM) with SPDX 3.0, arXiv:2504.16743](https://arxiv.org/pdf/2504.16743), October 2024. arXiv preprint; describes the SPDX 3.0 AI and Dataset profiles.

## Related research

- [What Is a Model Card?](https://lowob.com/research/what-is-a-model-card/)
- [SOC 2 for AI Vendors](https://lowob.com/research/soc-2-for-ai-vendors/)
- [The pilot that survives security review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [What Is AI Governance?](https://lowob.com/research/what-is-ai-governance/)

## Next move

Send your three most important AI vendors one question this week: which models and versions does your product call, and will you notify us before changing them? Record the answers on your AI inventory.

[Start a conversation](https://lowob.com/contact/)
