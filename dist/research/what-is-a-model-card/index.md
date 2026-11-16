# What Is a Model Card?

Source: https://lowob.com/research/what-is-a-model-card/
Publisher: lowob (https://lowob.com)
Published: 2026-10-17 · Updated: 2026-11-16
Function: Strategy

> Summary: A model card is a short document published with an AI model that sets out what it is for, how it was evaluated, where it performs poorly and what it was trained on. The format comes from a 2019 paper by Mitchell and colleagues and is now standard on model hubs. It describes the model, not the use a buyer puts it to.

A model card is a short document that accompanies an AI model and reports what it is intended for, how it was evaluated, how it performs across different groups and conditions, what data it was trained on, and its known limits. The idea was proposed by Margaret Mitchell and colleagues in 2019 and is now the default format on model hubs. For a business buyer it is the first thing to read about a model, and the last word on nothing: it describes the model, not your use of it.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What a model card means

The original paper made a simple argument. Trained models were being released with no standard account of where they worked and where they failed. A short card, published with the model, would report performance broken down by the groups and conditions that matter, and say plainly which uses it was not meant for. The examples in the paper were a smiling-face detector and a toxic-comment classifier, but the authors said the format applies to any trained model.

The nine sections the paper proposed are still the core.

| Section (Mitchell et al., 2019) | What it records |
| --- | --- |
| Model details | Developer, version, type, training approach, licence, contact |
| Intended use | Primary uses and users, and uses out of scope |
| Factors | Groups, instruments and conditions that may affect performance |
| Metrics | Performance measures, decision thresholds, how uncertainty is handled |
| Evaluation data | Datasets used for the reported results, and why |
| Training data | What the model learned from, at least its distribution across factors |
| Quantitative analyses | Results by single factor and by combinations of factors |
| Ethical considerations | Sensitive data, high-stakes uses, known harms and mitigations |
| Caveats and recommendations | Remaining concerns, gaps in evaluation, suggested further tests |

## How model cards are used now

Model hubs made the format routine. Hugging Face's annotated template splits intended use into direct, downstream and out-of-scope use, and gives a section to bias, risks and limitations, which it defines carefully: a bias is "a stereotype or disproportionate performance (skew) for some subpopulations", a limitation "a likely failure mode". It also asks for hardware, hours and estimated carbon emitted.

Regulation has picked up the same idea. Article 53(1)(b) and Annex XII of the EU AI Act require providers of general-purpose AI models to give downstream providers information including the tasks the model is intended for, applicable acceptable use policies, release date, architecture and parameter count, input and output modalities, licence, and information on training, testing and validation data. That is a model card in all but name, and it is owed to firms that build products on the model.

Some model providers also publish longer "system cards" for their largest models, which usually add safety testing to performance. They are written by the developer too, and deserve the same reading.

## How a buyer should read one

A 20 to 500 person firm rarely chooses a model directly. It chooses a tool that uses one. The model card still matters, because the tool inherits the model's limits.

| Look for | Why it matters | Warning sign |
| --- | --- | --- |
| Out-of-scope uses | Your use may be listed as unsuitable | Your use case appears on the list |
| Evaluation data | Results on unlike data say little about yours | Only public benchmarks, none near your domain |
| Disaggregated results | Averages hide weak groups or languages | One headline number |
| Training data cut-off and sources | Affects freshness and copyright exposure | No information at all |
| Version and date | Cards describe one version | Card older than the model you are calling |
| Licence | Governs commercial use, especially for [open-weight models](https://lowob.com/research/what-is-an-open-weight-model/) | Licence differs from the vendor's claim |

Two limits apply to every card. It is written by the developer, so it is a disclosure, not an audit. And it says nothing about your prompts, your data or your process. Testing that is your job; see [What are AI evals?](https://lowob.com/research/what-are-ai-evals/).

US banks have a separate documentation regime. SR 26-2, issued by the Federal Reserve, OCC and FDIC on 17 April 2026, replaced SR 11-7 as model risk guidance; see [What is model risk management?](https://lowob.com/research/what-is-model-risk-management/) for its scope.

## The **lowob** view

A model card describes the model. A firm also needs a record of each use: which tool, which model and version, what it is allowed to do, at what autonomy level, who approves its output and what outcome is expected. **lowob** keeps that as a line in the AI inventory, linked to the vendor's card. When the card changes because the model changed, the use line is where the firm decides whether its own approval still holds.

## lowob takeaways

- **Read the out-of-scope section first.** It is the quickest way to rule a model out.
- **Distrust single numbers.** Useful cards report results by group and condition.
- **It is a disclosure, not an audit.** The developer wrote it; test your own use.
- **Track the version.** A card describes one model version, and vendors change models.

## Sources and notes

- [Mitchell et al., Model Cards for Model Reporting, arXiv:1810.03993](https://arxiv.org/abs/1810.03993v2), revised 14 January 2019. Peer-reviewed conference paper, FAT\* 2019; the origin of the format.
- [Hugging Face, Annotated model card template](https://huggingface.co/docs/hub/en/model-card-annotated), accessed November 2026. Platform documentation from a model hub vendor.
- [European Commission AI Act Service Desk, Annex XII](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-12), accessed November 2026. Primary legal text on information owed to downstream providers.
- [OWASP CycloneDX, Authoritative Guide to AI/ML-BOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-AI-ML-BOM-en.pdf), First Edition Revision 1, 10 June 2026. Open standard guidance; covers model cards inside an ML-BOM.
- [Federal Reserve, SR 26-2: Revised guidance on model risk management](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm), 17 April 2026. Primary supervisory letter; applies to US banking organisations.

## Related research

- [What Is an AI Bill of Materials?](https://lowob.com/research/what-is-an-ai-bill-of-materials/)
- [What Are AI Evals?](https://lowob.com/research/what-are-ai-evals/)
- [What Is an Open-Weight Model?](https://lowob.com/research/what-is-an-open-weight-model/)
- [The model is not the product](https://lowob.com/research/the-model-is-not-the-product/)

## Next move

For your two most-used AI tools, ask the vendor which model and version each feature calls, and find that model's card. Note any out-of-scope use that matches yours on your AI inventory.

[Start a conversation](https://lowob.com/contact/)
