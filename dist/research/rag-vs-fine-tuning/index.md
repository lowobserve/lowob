# RAG vs Fine-Tuning: Which One Your Use Case Needs

Source: https://lowob.com/research/rag-vs-fine-tuning/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Retrieval-augmented generation changes what a model reads when it answers; fine-tuning changes how the model behaves. OpenAI's own guidance treats them as two separate levers, and published comparisons find retrieval better at adding knowledge. For a commercial team, facts belong in the store and the record, not in model weights.

Retrieval-augmented generation (RAG) gives a model relevant passages from your own documents at the moment it answers. Fine-tuning further trains the model on your examples so that it behaves differently every time. RAG is the tool for knowledge: facts, prices, policies and anything that changes. Fine-tuning is the tool for behaviour: format, tone and consistency on a narrow, repeated task. Most commercial use cases need RAG first, and many never need fine-tuning at all.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What the two terms mean

RAG is a retrieval step placed in front of the model. A question arrives, a search system finds the most relevant passages in an approved set of documents, and those passages go into the prompt alongside the question. The model answers from what it was handed and can point to the source. Our explainer on [retrieval-augmented generation](https://lowob.com/research/what-is-retrieval-augmented-generation/) covers the mechanics.

Fine-tuning is further training. You give the model hundreds or thousands of example inputs with the outputs you want, and the training run adjusts its weights. OpenAI's documentation lists supervised fine-tuning, which learns from examples of correct responses, and direct preference optimisation, which learns from pairs of better and worse responses. The result is a new model version that behaves differently without being told to in every prompt.

The cleanest statement of the difference comes from OpenAI's guide to optimising accuracy. It says you optimise context when the model lacks knowledge, because it is out of date or the information is proprietary. You optimise the model when results are inconsistent, the formatting is wrong, or the tone and reasoning drift. The guide also notes that the two "stack" rather than compete.

| Dimension | RAG | Fine-tuning |
| --- | --- | --- |
| What it changes | What the model reads at answer time | How the model behaves, through its weights |
| Best for | Facts, policies, prices, account history | Format, tone, a narrow task done the same way each time |
| Keeping it current | Re-index the changed document | Run a new training job |
| Showing its source | Can cite the passage it used | Cannot point to where a learned fact came from |
| Access control | Retrieval can filter by the user's permissions | What the model learned is available to every user of that model |
| Typical failure | Retrieves the wrong or a stale passage | States an outdated fact with full confidence |
| Place in the brain loop | Wiring | Reasoning |

## What the evidence says

The research points in one direction on knowledge. Ovadia, Brief, Mishaeli and Elisha compared unsupervised fine-tuning with RAG on knowledge-intensive tasks across several subjects. Fine-tuning gave some improvement, but RAG "consistently outperforms it, both for existing knowledge encountered during training and entirely new knowledge."

The agriculture study by Balaguer and colleagues is the strongest case for using both. Testing Llama 2 13B, GPT-3.5 and GPT-4, they reported that fine-tuning raised accuracy by over 6 percentage points and RAG added about 5 more. Farming is a domain with stable knowledge and a large, curated question set. Few commercial teams have either.

Vendor guidance adds the practical case for fine-tuning: more consistent formatting, shorter prompts that save tokens at scale, and the option to train "a smaller, cheaper, faster model" for one task. OpenAI's model optimisation page now also says its fine-tuning platform is closed to new users, with existing fine-tuned models available until their base models are retired. The technique remains available elsewhere, such as on open-weight models, but the change shows where one large provider sees value.

## Which to choose

If the answer depends on facts in your documents or systems, use retrieval. If only the shape of the output is wrong, try better prompts and examples first, then consider fine-tuning.

| Use case | Start with | Why |
| --- | --- | --- |
| Answer questions from the policy library or product documentation | RAG | Knowledge that changes, and answers need a citation |
| Brief a seller before a call from CRM, email and tickets | RAG with [permission-aware retrieval](https://lowob.com/research/what-is-permission-aware-retrieval/) | Different users may see different records |
| Draft proposals in the house structure | Prompt and template | A good template usually fixes format without training |
| Classify thousands of inbound emails into a fixed taxonomy | Fine-tune a smaller model, if prompting is too slow or costly | Narrow, stable, high volume |
| Answer with current prices, discounts or terms | RAG from the system of record | Never put a price list in model weights |
| Match the firm's written tone across all outputs | Prompt with examples; fine-tune only if inconsistency persists | Behaviour, not knowledge |

A short checklist before anyone commissions a fine-tuning project:

- **Is the gap knowledge or behaviour?** If the model gives wrong facts, fine-tuning is the wrong tool.
- **Has prompting been tried properly?** OpenAI notes that prompt engineering "may be all you need".
- **Is there a labelled set of good examples?** Without hundreds of them, there is nothing to train on.
- **Will the facts change within a year?** If so, they belong in retrieval, where an update is a re-index.
- **Is there an evaluation set?** Both approaches need one, and the [long context vs RAG](https://lowob.com/research/long-context-vs-rag/) choice depends on it too.

## The **lowob** view

The enterprise brain is a loop: store, wiring, record, reasoning, learning. RAG sits in the wiring. It connects the reasoning layer to the store at the moment of the question, and it can respect who is asking. Fine-tuning changes the reasoning layer itself. Both are legitimate, but neither is where a firm's knowledge should live.

Commercial facts change weekly: who owns an account, what was agreed, which discount was approved and why. Those belong in the store and in the decision record, with an owner and a date, where they can be superseded rather than overwritten. A fine-tuned model holds a frozen snapshot that nobody can audit line by line. The learning stage writes outcomes back to the record, so the next retrieval improves without retraining.

Rent the model and the retrieval tooling. Own the documents, the record and the evaluation set. As we argue in [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/), the harder problem is usually what the record contains, not how the model reads it.

## lowob takeaways

- **Knowledge goes to retrieval.** Facts that change belong in documents and records the model reads at answer time.
- **Behaviour goes to prompts first.** Fine-tune only when a narrow task stays inconsistent after good prompting.
- **The evidence favours RAG for facts.** Published comparisons find fine-tuning a weak way to add new knowledge.
- **Neither is the record.** Decisions, owners and outcomes need a home that both approaches can read.

## Sources and notes

- [OpenAI, Optimizing LLM accuracy](https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy), accessed November 2026. Vendor guidance; source of the two-axis framing.
- [OpenAI, Model optimization](https://developers.openai.com/api/docs/guides/model-optimization), accessed November 2026. Vendor documentation; platform availability is subject to change and the page gives no fixed dates.
- [Ovadia, Brief, Mishaeli and Elisha, Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs](https://arxiv.org/abs/2312.05934), arXiv, December 2023, revised January 2024. Academic preprint; tests unsupervised fine-tuning only.
- [Balaguer et al., RAG vs Fine-tuning: Pipelines, Tradeoffs, and a Case Study on Agriculture](https://arxiv.org/abs/2401.08406), arXiv, January 2024. Preprint; results are for one domain and the authors' own evaluation method.
- The decision table, checklist and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is Retrieval-Augmented Generation (RAG)?](https://lowob.com/research/what-is-retrieval-augmented-generation/)
- [Long Context Windows vs RAG](https://lowob.com/research/long-context-vs-rag/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [The context layer, followed through one account](https://lowob.com/research/the-context-layer-followed-through-one-account/)

## Next move

Take the AI use case your team most wants and write one line for it: is the model missing knowledge or getting the behaviour wrong? If it is knowledge, list the documents and records it should read, and who owns each one.

[Start a conversation](https://lowob.com/contact/)
