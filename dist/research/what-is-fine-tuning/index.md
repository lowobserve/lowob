# What Is Fine-Tuning, and When Is It Worth It?

Source: https://lowob.com/research/what-is-fine-tuning/
Publisher: lowob (https://lowob.com)
Published: 2026-08-13 · Updated: 2026-11-16
Function: Strategy

> Summary: Fine-tuning is further training of an existing model on a set of your own examples, so it behaves more consistently on a narrow task. Vendor guidance is to start with evaluations and prompting, use retrieval for knowledge, and fine-tune only for behaviour such as format or tone. For most commercial teams it is a later step, not a first one.

Fine-tuning is further training of an existing AI model on a set of your own examples, so it behaves more consistently on a specific task. It changes how a model responds, such as its format, tone or classification choices, more reliably than it adds new facts. Vendor guidance is to write evaluations and try prompting first, use retrieval for knowledge, and fine-tune only when those fall short. For most commercial teams it is a later step.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What fine-tuning means

A general model is trained once by its provider on a broad body of text. Fine-tuning takes that trained model and continues training it on a much smaller, task-specific dataset. The result is a variant that has absorbed patterns from your examples.

OpenAI's model optimisation guide describes the main methods. Supervised fine-tuning provides examples of correct responses to prompts and suits classification, nuanced translation and fixed output formats. Direct preference optimisation provides a better and a worse response for each prompt and suits tone and summary focus. Vision fine-tuning applies the same idea to image inputs.

Full fine-tuning updates every parameter, which is expensive at scale. The LoRA method, published by Hu and colleagues in 2021, trains a small set of added parameters instead. Its authors reported 10,000 times fewer trainable parameters and a third of the GPU memory compared with full fine-tuning of the 175-billion-parameter GPT-3.

| Fine-tuning is | Fine-tuning is not |
| --- | --- |
| Training on examples to change behaviour | A reliable way to load changing facts |
| Useful for format, tone and narrow classification | A substitute for retrieval from current records |
| A new model version you must test and maintain | A one-off setting that stays correct |
| Worth it at volume on a stable task | The first step for a new use case |

## Why it matters for a commercial team

The question is usually framed as fine-tune versus prompt versus retrieve. OpenAI's accuracy guide separates two problems. If the model lacks knowledge, because the information is recent or proprietary, the fix is context, usually retrieval. If the model behaves inconsistently, with the wrong format or style, the fix may be fine-tuning. Most commercial problems are the first kind. A model drafting a renewal email needs the current contract and usage, not a retrained view of last year's accounts.

The 2020 GPT-3 paper explains why prompting goes so far. It showed that a large model could perform tasks from a few examples in the prompt, with no gradient updates. For summaries, translation and drafting, OpenAI's guide notes that prompting is often the only method needed.

Fine-tuning earns its place in three situations. First, high-volume, narrow tasks such as classifying thousands of inbound enquiries a month. OpenAI notes fine-tuning can produce a smaller, cheaper model for a specific task. Second, strict output formats that prompting cannot hold consistently. Third, shorter prompts: OpenAI notes that a tuned model can need fewer instructions per call, which reduces token cost.

There is also a supplier question. Fine-tuned models are tied to the provider and base model they were built on. When the base model is retired or the platform changes, the tuned version must be rebuilt. OpenAI's own documentation in November 2026 stated that its fine-tuning platform was no longer open to new users. In **lowob**'s terms, a fine-tuned model is rented reasoning. Your examples, labels and evaluations are the asset worth owning.

## When fine-tuning is worth it

| Signal | Fine-tune | Use prompting or retrieval |
| --- | --- | --- |
| Problem type | Inconsistent format, tone or labels | Missing or out-of-date facts |
| Volume | Thousands of calls a month on one task | Occasional or varied tasks |
| Data | Hundreds of reviewed, labelled examples | A few examples or none |
| Stability | Task definition unlikely to change | Rules or products change often |
| Measurement | An evaluation set with a baseline score | No agreed way to score outputs |

Start with the evaluation. OpenAI's loop begins by writing evals that measure output and set a baseline. Without that baseline there is no way to show a tuned model is better. Then improve the prompt and add retrieval, scoring each change. Fine-tune only if the score plateaus below the level the task needs.

The common mistake is fine-tuning to teach facts: product catalogues, pricing or account histories. Those change, and a model trained on last quarter's prices will repeat them confidently. Keep facts in the record and retrieve them at run time.

## lowob takeaways

- **Fine-tuning changes behaviour.** Use it for format, tone and narrow labels, not for facts.
- **Evals come first.** Without a baseline score, a tuned model cannot be shown to be better.
- **Prompting and retrieval usually win.** Vendor guidance treats them as the starting point.
- **Own the examples.** Tuned models are tied to a provider; your labelled data is portable.

## Sources and notes

- [OpenAI, Model optimization guide](https://developers.openai.com/api/docs/guides/model-optimization), accessed November 2026. Vendor documentation; platform availability is subject to change.
- [OpenAI, Optimizing LLM accuracy](https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy), accessed November 2026. Vendor guidance.
- [Hu et al., LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685), June 2021, revised October 2021. Academic paper; figures are the authors' own.
- [Brown et al., Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165), May 2020. OpenAI's GPT-3 paper.

## Related research

- [What Is Retrieval-Augmented Generation (RAG)?](https://lowob.com/research/what-is-retrieval-augmented-generation/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [Buy Context, Own Judgment: What to Build at Each Size](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [The Model Is Not the Product](https://lowob.com/research/the-model-is-not-the-product/)

## Next move

Before discussing fine-tuning with any vendor, write 50 test cases for the task with the answers you would accept. Score your current prompt against them to set a baseline.

[Start a conversation](https://lowob.com/contact/)
