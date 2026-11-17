# What Is a Small Language Model?

Source: https://lowob.com/research/what-is-a-small-language-model/
Publisher: lowob (https://lowob.com)
Published: 2026-11-13 · Updated: 2026-11-17
Function: Strategy

> Summary: A small language model uses the same design as a large one with far fewer parameters, typically under about 10 billion, so it runs on modest hardware at lower cost. It suits narrow, repeated tasks such as classification, extraction and routing. The practical pattern is a mix: small models for routine steps, a large model where open-ended judgment is needed.

A small language model (SLM) is a language model compact enough to run on ordinary hardware, such as a laptop, a phone or a single server, rather than a large cloud cluster. There is no fixed cut-off; NVIDIA researchers treat most models below about 10 billion parameters as small as of 2025. SLMs are cheaper and faster per request and can run where data must stay. They hold less general knowledge and handle open-ended reasoning less well, so they suit narrow, repeated tasks.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What a small language model means

A small language model uses the same Transformer design as a [large language model](https://lowob.com/research/what-is-a-large-language-model/) with far fewer parameters. What counts as small moves as hardware improves.

The NVIDIA Research position paper "Small Language Models are the Future of Agentic AI" avoids a fixed parameter count. Its working definition is a model that "can fit onto a common consumer electronic device" and respond fast enough to serve one user's agent. As of 2025, the authors would treat "most models below 10bn parameters in size" as SLMs.

Microsoft's Phi-3 report, from April 2024, is a common reference point. For Phi-3-mini, with 3.8 billion parameters, its developers report overall performance that rivals Mixtral 8x7B and GPT-3.5, from a model "small enough to be deployed on a phone". Google's Gemma documentation, accessed November 2026, lists open-weight models from about 2 billion effective parameters, aimed at phones and browsers, up to 31 billion for servers.

Many SLMs are released as [open-weight models](https://lowob.com/research/what-is-an-open-weight-model/), which is why they can run on a firm's own hardware. Others are offered only through a provider's API, usually as its lowest-cost tier.

|  | Small language model | Large language model |
| --- | --- | --- |
| Typical size | Under about 10 billion parameters | Tens to hundreds of billions |
| Where it runs | Laptop, phone, single server, or a provider's cheapest tier | Provider's cloud infrastructure |
| Cost per request | Low | Higher |
| Speed | Fast | Slower |
| General knowledge | Narrower | Broader |
| Best at | Classification, extraction, routing, short drafts | Open-ended reasoning, synthesis, long writing |
| Customisation | Practical to fine-tune for one task | Usually used as supplied |

## Why it matters for a commercial team

Most AI calls in a commercial workflow are narrow: tagging an inbound enquiry by segment, pulling renewal dates from contracts, routing a support ticket. These need consistency, speed and a low cost per call, not broad knowledge.

Cost compounds in agents. Each step of an [agent loop](https://lowob.com/research/what-is-an-agent-loop/) is a model call, and many steps are routine. The NVIDIA paper argues that SLMs should be the default in agentic systems, with large models "invoked selectively and sparingly". It cites estimates that serving a 7-billion-parameter model is 10 to 30 times cheaper, in latency, energy and compute, than serving a 70-to-175-billion-parameter one. Those ranges come from cited work and describe serving cost, not list prices; see [AI inference cost](https://lowob.com/research/what-is-ai-inference-cost/).

Gartner's April 2025 prediction points the same way. It expects organisations to implement small, task-specific models with usage at least three times that of general-purpose LLMs by 2027. It pairs the prediction with a condition: tuning depends on company data that has been prepared, quality-checked and versioned.

Location matters for regulated firms. A small model running on the firm's own servers keeps prompts and records inside its perimeter, which can simplify [data residency](https://lowob.com/research/what-is-data-residency-for-ai/) questions. It also moves patching, monitoring and capacity planning onto the firm.

The limits are real. Smaller models know less, follow long multi-part instructions less reliably and are weaker on open-ended reasoning. [Fine-tuning](https://lowob.com/research/what-is-fine-tuning/) a small model on one narrow task can close much of the gap for that task, but not for others. Benchmark scores for small models are mostly self-reported by their developers and rarely reflect commercial documents.

In **lowob**'s model of the brain, the reasoning layer is rented and replaceable. Small models make that more true: the model becomes a component chosen per step, while the instructions, test sets and decision record stay with the firm.

## How to decide where a small model fits

| Question | Points to a small model | Points to a large model |
| --- | --- | --- |
| Is the task narrow and repeated? | The same task thousands of times | Each request is different |
| Is the output short and structured? | Labels, fields, yes or no | Long synthesis or argument |
| Must data stay on your hardware? | Yes | No constraint |
| Is response time user-facing? | Needs to feel instant | Can wait |
| Can you test it? | 50 or more labelled examples exist | No test set yet |

Run the same labelled set through a small model and your current one, and choose the smallest that meets the accuracy bar. Recheck when either model changes.

## lowob takeaways

- **Small is relative.** Most models under about 10 billion parameters counted as small in 2025, and the line moves.
- **Narrow tasks suit small models.** Classification, extraction and routing rarely need a frontier model.
- **Mix models per step.** Use a large model only where open-ended judgment is required.
- **Test on your own cases.** Benchmarks for small models are mostly self-reported.

## Common questions

### What is the difference between an SLM and an LLM?

Mainly size, and therefore cost, speed and breadth. An SLM has far fewer parameters, runs on modest hardware and is cheaper per request, but holds less general knowledge and reasons less well on open-ended tasks.

### How many parameters does a small language model have?

There is no standard. NVIDIA researchers suggest most models under about 10 billion parameters counted as small in 2025; Microsoft's Phi-3-mini, for example, has 3.8 billion.

### Can a small language model run on a laptop or phone?

Many can. Microsoft designed Phi-3-mini to run on a phone, and Google's Gemma line includes models aimed at phones and browsers.

### Are small language models good enough for business use?

For narrow, repeated tasks with clear outputs, often yes, especially after fine-tuning. Test one on your own labelled examples before replacing a larger model.

## Sources and notes

- [Belcak et al. (NVIDIA Research), Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153), first posted June 2025. Position paper by researchers at a hardware vendor; cost ranges are drawn from cited work.
- [Microsoft, Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone](https://arxiv.org/abs/2404.14219), April 2024, revised August 2024. Developer's own benchmark results.
- [Gartner, Gartner Predicts by 2027, Organizations Will Use Small, Task-Specific AI Models Three Times More Than General-Purpose Large Language Models](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models), 9 April 2025. Analyst prediction, not measured data.
- [Google, Gemma models overview](https://ai.google.dev/gemma/docs/core), accessed November 2026. Vendor documentation; the model line-up changes often.

## Related research

- [What Is a Large Language Model (LLM)?](https://lowob.com/research/what-is-a-large-language-model/)
- [What Is an Open-Weight Model?](https://lowob.com/research/what-is-an-open-weight-model/)
- [What Is Fine-Tuning, and When Is It Worth It?](https://lowob.com/research/what-is-fine-tuning/)
- [What Is AI Inference Cost?](https://lowob.com/research/what-is-ai-inference-cost/)
- [What Is Reverse ETL?](https://lowob.com/research/what-is-reverse-etl/)

## Next move

List the AI steps in one commercial workflow and mark each as narrow (label, extract, route) or open-ended. Run 50 labelled examples of one narrow step through a small model and compare cost and accuracy with your current model.

[Start a conversation](https://lowob.com/contact/)
