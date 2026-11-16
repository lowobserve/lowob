# What Is an Open-Weight Model?

Source: https://lowob.com/research/what-is-an-open-weight-model/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: An open-weight model is an AI model whose trained parameters, called weights, are published so that anyone permitted by the licence can download, run and modify it on their own hardware. Open weights are not the same as open source. The Open Source Initiative's definition also requires the training code and detailed information about the training data, and many open-weight licences add conditions on use. For a business, open weights mean control over where the model runs, in exchange for running it.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## Key points

- The Open Source Initiative's Open Source AI Definition 1.0, published in October 2024, requires data information, complete code and the parameters, all under OSI-approved terms.
- Meta's Llama 2 licence requires a separate licence from Meta for products with more than 700 million monthly active users, and bars using its outputs to improve other large language models.
- OpenAI released two open-weight models, gpt-oss-120b and gpt-oss-20b, in August 2025 under Apache 2.0, and said the larger runs on a single 80 GB GPU.
- The US NTIA concluded in July 2024 that open model weights should not be restricted at that time, and called for active monitoring of risks.
- Open weights shift work to the buyer: hosting, patching, safety controls and evaluation become the firm's job.

## What an open-weight model means

A trained model is, at bottom, a large file of numbers, its parameters or weights. A closed model keeps them on the provider's servers, and customers send requests through an API. An open-weight model publishes the file. Anyone the licence allows can run it on a laptop, a private server or a cloud account they control.

The NTIA, the US Commerce Department agency directed to review the question, described open-weight models as letting developers build on and adapt previous work, widening access for small companies and researchers.

"Open" is used loosely, so it helps to separate four levels.

| Level | What is published | Example of terms |
| --- | --- | --- |
| Closed, API only | Nothing; access through the provider | Provider's terms of service |
| Open weights, restricted licence | Weights, usually inference code | Custom licence with use or scale limits, such as Llama 2's 700 million user clause |
| Open weights, permissive licence | Weights under a standard licence | gpt-oss under Apache 2.0 |
| Open source AI, OSI definition | Weights, full training and inference code, detailed training-data information | OSI-approved terms for every component |

The OSI definition grants four freedoms: to use the system "for any purpose and without having to ask for permission", to study it, to modify it and to share it. To exercise them, it requires the preferred form for making modifications. That means data information detailed enough for a skilled person to build a substantially equivalent system, the complete code used to train and run it, and the parameters. Most open-weight releases publish the parameters and stop there. A licence with a user cap or a field-of-use restriction also fails the "any purpose" test.

## Why it matters for a commercial team

**Where data goes.** Running a model on your own infrastructure means prompts, CRM records and contracts need not leave it. For firms with strict [data residency](https://lowob.com/research/what-is-data-residency-for-ai/) or client confidentiality terms, that can settle a procurement question an API cannot.

**What you can change.** Weights can be [fine-tuned](https://lowob.com/research/what-is-fine-tuning/) on the firm's own examples, and a version can be frozen. A closed model can be changed or retired on the provider's schedule; a downloaded one changes only when you change it.

**What it costs.** There are no per-token fees to the developer, but there is hosting. OpenAI states gpt-oss-120b runs on a single 80 GB GPU and gpt-oss-20b in about 16 GB of memory. That hardware, engineering time and patching now sit with the buyer, and at low or uneven volume an API is often cheaper; see [AI inference cost](https://lowob.com/research/what-is-ai-inference-cost/).

**Who carries safety work.** A provider's API applies its own filtering and abuse monitoring. With open weights, the controls are whatever you add. OpenAI said that before releasing gpt-oss it fine-tuned a version on specialised biology and cybersecurity data to test misuse, and that version did not reach high capability levels. Few firms will run tests like that, so their own [guardrails](https://lowob.com/research/what-are-ai-guardrails/) and [evals](https://lowob.com/research/what-are-ai-evals/) carry more weight.

**What the licence says.** Read it as a contract. The Llama 2 licence, for example, incorporates Meta's acceptable use policy, requires a separate licence above 700 million monthly active users, and bars using outputs to improve other large language models. Later Llama versions have their own licences.

In **lowob**'s terms, an open-weight model is still rented reasoning, even when the firm hosts it. The weights can be swapped next year. The record of what was decided, and why, is the asset that stays.

## How to evaluate an open-weight model

| Question | What to check |
| --- | --- |
| Licence | Standard (Apache 2.0, MIT) or custom; user or revenue caps; acceptable use policy; limits on use of outputs |
| Openness | Weights only, or code and training-data information too |
| Hardware | GPU memory needed at the precision you will run |
| Hosting route | Your own servers, your own cloud account, or a managed host serving the same weights |
| Safety | What the developer tested; what filtering and monitoring you must add |
| Fit | Accuracy on your own test set against your current API model |

## lowob takeaways

- **Open weights are downloadable parameters.** You run the model, and the prompts stay with you.
- **Open weights are not open source.** The OSI definition also requires code and training-data information.
- **Read the licence.** User caps and use restrictions vary by model and version.
- **Control comes with work.** Hosting, safety and evaluation become your job.

## Common questions

### What is the difference between open-weight and open-source AI?

Open-weight means the trained parameters are published. Open source AI, under the OSI's 2024 definition, also requires the full training and inference code and detailed training-data information, all under OSI-approved terms, with freedom to use the system for any purpose.

### Is Llama open source?

Not by the OSI's test. The Llama 2 licence publishes the weights but requires a separate licence above 700 million monthly active users and binds users to an acceptable use policy, so it does not grant use for any purpose.

### Are open-weight models safe for business data?

They can keep data inside your own infrastructure, which helps confidentiality. They also leave filtering, monitoring and patching to you, so safety depends on how you deploy them.

### Are open-weight models cheaper than API models?

Not always. You avoid per-token fees but pay for hardware and staff. At steady high volume self-hosting can cost less; at low or uneven volume an API is usually cheaper.

## Sources and notes

- [Open Source Initiative, The Open Source AI Definition 1.0](https://opensource.org/ai), October 2024. Standards body definition; voluntary, and developers' use of the word "open" is not bound by it.
- [Meta, Llama 2 Community License Agreement](https://ai.meta.com/llama/license/), July 2023. Vendor licence; later Llama versions carry their own terms.
- [OpenAI, Introducing gpt-oss](https://openai.com/index/introducing-gpt-oss/), 5 August 2025. Vendor announcement; hardware and safety claims are OpenAI's own.
- [NTIA, NTIA Supports Open Models to Promote AI Innovation](https://www.ntia.gov/press-release/2024/ntia-supports-open-models-promote-ai-innovation), 30 July 2024. US government report summary; policy may have changed since.

## Related research

- [What Is a Small Language Model?](https://lowob.com/research/what-is-a-small-language-model/)
- [What Is Data Residency for AI Tools?](https://lowob.com/research/what-is-data-residency-for-ai/)
- [What Is Fine-Tuning?](https://lowob.com/research/what-is-fine-tuning/)
- [Gateway 0: Three Decisions Before Any AI Tool](https://lowob.com/research/gateway-zero-three-decisions-before-any-ai-tool/)

## Next Move

For any open-weight model on your shortlist, have someone read the licence in full and note any user or revenue caps, limits on outputs and the acceptable use policy. Then price one month of hosting against your current API bill.

[Start a conversation](https://lowob.com/contact/)
