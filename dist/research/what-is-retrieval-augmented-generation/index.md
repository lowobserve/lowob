# What Is Retrieval-Augmented Generation (RAG)?

Source: https://lowob.com/research/what-is-retrieval-augmented-generation/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: Retrieval-augmented generation (RAG) is a technique in which an AI system first searches a store of documents for passages relevant to a question, then gives those passages to a language model to write its answer. It lets a general model answer from your proposals, contracts and policies without retraining it. It reduces made-up answers but does not remove them. Most RAG failures are retrieval failures, so the quality of what goes in decides the quality of what comes out.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- The term comes from a 2020 paper by Patrick Lewis and colleagues, which combined a language model with a searchable index of Wikipedia.
- A RAG system splits documents into chunks, indexes them, retrieves the most relevant chunks for each question and adds them to the model's input.
- Stanford researchers found RAG-based legal research tools still hallucinated on more than 17% of benchmark queries in 2024.
- Anthropic reported that adding context to chunks, keyword search and reranking cut retrieval failures by 67% in its tests.
- For a knowledge base under about 200,000 tokens, Anthropic suggests placing it all in the prompt instead of building RAG.

## What RAG means

Language models know what was in their training data, up to a cut-off date. They do not know your price list, last quarter's proposals or the terms in a client's contract. Retraining a model on that material is slow and costly, and it goes stale.

RAG solves this by looking things up at the moment of the question. The term was introduced in a May 2020 paper by Lewis and colleagues, who combined a model's built-in knowledge with a retrievable index of documents. They found the combined system produced "more specific, diverse and factual language" than a model alone.

| RAG is | RAG is not |
| --- | --- |
| Looking up relevant passages before answering | Training or fine-tuning a model on your data |
| A way to ground answers in current documents | A guarantee that answers are correct |
| Only as good as the documents and search behind it | A substitute for keeping source documents current |
| Usually paired with citations to the passages used | A record of decisions or their reasons |

## How it works

A RAG system has two phases. In preparation, documents are split into chunks, usually no more than a few hundred tokens each, and indexed. The index is commonly a vector database that stores each chunk as an embedding, a list of numbers capturing its meaning, often alongside a keyword index. At question time, the system finds the chunks most similar to the question and adds them to the model's input with an instruction to answer from them.

Each step can fail. Chunking can cut a sentence from the context that gives it meaning, so a passage saying "revenue grew 3%" loses which company and which quarter. Search can return near-matches rather than the right passage. The model can ignore what it was given.

Anthropic's September 2024 work on "contextual retrieval" measured some of the fixes. Adding a short explanation of each chunk's context before indexing cut failed retrievals by 35%. Adding keyword search on top took the reduction to 49%. Reranking the results brought it to 67%. These are vendor figures from Anthropic's own test sets, but the direction is consistent with wider practice: hybrid search beats meaning-based search alone.

## Why it matters for a commercial team, and how to evaluate it

RAG is the technology behind most "chat with your documents" features in sales tools, proposal software and AI assistants. It is how an assistant answers "what did we propose to this client last year" or "what are our standard payment terms".

The main risk is trust. Vendors have described RAG as a cure for hallucination. Stanford's 2024 study tested that claim on legal research tools from LexisNexis and Thomson Reuters. Lexis+ AI and Ask Practical Law AI produced incorrect information more than 17% of the time; Westlaw AI-Assisted Research did so more than 34% of the time. These were specialist tools built on curated sources.

| Question to ask of a RAG system | What good looks like |
| --- | --- |
| Does every answer cite the passages it used? | Yes, with links to the source document |
| How fresh are the indexed documents? | Re-indexed on change, with a visible date |
| Does it combine keyword and meaning-based search? | Yes, hybrid search with reranking |
| What happens when nothing relevant is found? | It says so instead of guessing |
| Can you test it on 20 questions with known answers? | Yes, before rollout and after changes |

**lowob**'s view is that retrieval is rarely the real bottleneck. Most failures trace back to what is in the store: duplicate proposals, outdated price sheets, no record of which version was approved. RAG retrieves documents; it does not know which decision superseded which. Keeping a decision record, with status and owner, alongside the documents is what lets retrieval return the current answer rather than a plausible old one.

## lowob takeaways

- **RAG looks up before it answers.** It grounds a general model in your documents without retraining.
- **It reduces errors, not to zero.** Specialist legal RAG tools still erred on more than one query in six.
- **Retrieval quality decides results.** Context-aware chunks, hybrid search and reranking measurably help.
- **Fix the store first.** Duplicate and outdated documents produce confident wrong answers.

## Common questions

### What is RAG in simple terms?

RAG is a way for an AI model to look up relevant passages in your documents before answering, so its response draws on your own information rather than only its training data.

### Does RAG stop AI hallucinations?

No. It reduces them, but Stanford researchers found RAG-based legal tools still produced incorrect information on more than 17% of test queries.

### What is the difference between RAG and fine-tuning?

Fine-tuning changes the model itself by training it on new data. RAG leaves the model unchanged and supplies relevant documents at the moment of each question.

### Do I need a vector database for RAG?

Usually, but not always. Many systems combine a vector index with keyword search, and a small knowledge base can sometimes be placed directly in the prompt.

## Sources and notes

- [Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401), arXiv, May 2020. Academic paper that named the technique.
- [Anthropic, Introducing Contextual Retrieval](https://anthropic.com/research/contextual-retrieval), 19 September 2024. Vendor research on its own test sets.
- [Stanford HAI, AI on Trial: Legal Models Hallucinate in 1 out of 6 (or More) Benchmarking Queries](https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries), May 2024. Academic benchmark; tools have been updated since.
- The evaluation questions are **lowob**'s working method.

## Related research

- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)

## Next Move

Write 20 questions your team asks often, with the correct answer and source document for each. Run them through your current AI assistant and count how many it answers correctly with a citation.

[Start a conversation](https://lowob.com/contact/)
