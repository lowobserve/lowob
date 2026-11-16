# Long Context Windows vs RAG

Source: https://lowob.com/research/long-context-vs-rag/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: A long context window lets a model read whole documents at once; retrieval-augmented generation (RAG) fetches only the passages a question needs. Research finds long context often scores higher when well resourced, while RAG costs far less, and both degrade in known ways. For a commercial team the deciding factors are corpus size, permissions and how often the content changes.

Long context means putting whole documents directly into the model's prompt and letting it read everything. Retrieval-augmented generation (RAG) means searching a store first and giving the model only the passages that look relevant. Long context is simpler and often more accurate on a bounded set of documents. RAG is cheaper, scales to large and changing collections, and is the natural place to enforce who may see what.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What the two approaches mean

A context window is the amount of text a model can take in one request; **lowob**'s explainer on [context engineering](https://lowob.com/research/what-is-context-engineering/) covers how teams decide what goes into it. With long context, the application loads the source material straight in: a full contract, a year of account emails, a product manual. The model reads all of it for each question.

RAG adds a retrieval step. Documents are split into passages, indexed, usually as embeddings in a vector store, and searched at question time. The model sees only the top results. Quality then depends on two things: whether retrieval found the right passages, and whether the model used them.

|  | Long context | RAG |
| --- | --- | --- |
| What the model sees | Everything loaded, every time | The passages retrieval selects |
| Setup effort | Low: load and ask | Higher: chunking, indexing, search tuning |
| Cost per question | High, scales with document size | Low, scales with passages returned |
| Corpus size | Bounded by the window | Effectively unbounded |
| Fresh content | Reload each time | Re-index changed documents |
| Typical failure | Misses facts buried in the middle | Retrieves the wrong passage, or none |
| Permissions | All-or-nothing per request | Can filter by user before the model sees anything |
| Traceability | Hard to say which part was used | Each answer can cite retrieved passages |

## What the research says

The best direct comparison is Li and colleagues' *Retrieval Augmented Generation or Long-Context LLMs?*, accepted to the EMNLP 2024 industry track. Their finding has two halves. With enough resources, long-context models outperformed RAG on average. RAG's much lower cost remained its distinct advantage. Their hybrid, Self-Route, lets the model decide per query whether retrieved passages are enough, and falls back to long context only when they are not.

Advertised window size overstates usable size. RULER, a 2024 benchmark, found that almost all 17 models tested scored near-perfectly on the basic needle-in-a-haystack test. Yet almost all showed large drops on harder tasks as inputs grew, and only half stayed satisfactory at 32,000 tokens. Liu and colleagues' *Lost in the Middle* showed the position effect: performance was highest when the relevant fact sat at the start or end of the input. Both studies tested 2023 and 2024 models, so the lesson is to measure current models on your own documents rather than trust a headline window.

Cost has moved too. Anthropic's documentation prices a five-minute cache write at 1.25 times the base input rate and a cache read at 0.1 times or less. For a document asked about repeatedly in a short period, such as one contract under negotiation, caching makes long context much cheaper than the list price suggests. It does not help a question that spans thousands of documents.

## Which to choose

| Situation | Better fit | Why |
| --- | --- | --- |
| One contract, RFP or call transcript, many questions | Long context, with caching | Bounded, and the whole document matters |
| Comparing a few long documents side by side | Long context | Cross-references are lost when text is chunked |
| Thousands of help articles, policies or past proposals | RAG | Too large for any window, and changes often |
| Users with different access rights | RAG with permission filters | Long context cannot hide part of a prompt from the reader |
| Answers that must cite a source | RAG | Retrieved passages give a natural citation |
| Mixed workload, uncertain which applies | Route per query | The Self-Route pattern: try retrieval, fall back to long context |

## The **lowob** view

**lowob**'s view is that retrieval is rarely the bottleneck, an argument made at length in [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/). In the brain loop, long context and RAG are both choices about the wiring: how material in the store reaches the reasoning step. Neither fixes a store that holds the wrong material, and neither replaces the record.

Two rules follow. First, permissions belong in the wiring, before the model. If a sales rep should not see a client's credit file, it must not enter the prompt. A long window makes that easier to get wrong. Second, the most valuable context is often a past decision with its reason: why a discount was approved, or why a deal was lost. That lives in the record and comes back through retrieval. A bigger window does not supply reasons nobody wrote down.

## lowob takeaways

- **Long context suits bounded documents.** One contract or transcript, read whole, often with caching.
- **RAG suits large, changing, permissioned collections.** It is cheaper and can cite its sources.
- **Measure the usable window.** Benchmarks show performance falls well before the advertised limit.
- **Neither fixes the record.** Reasons for past decisions have to be written down before any model can use them.

## Sources and notes

- [Li et al., Retrieval Augmented Generation or Long-Context LLMs? A Comprehensive Study and Hybrid Approach](https://arxiv.org/abs/2407.16833), arXiv, July 2024, revised October 2024. Peer-reviewed industry paper (EMNLP 2024); tested models are now superseded.
- [Hsieh et al., RULER: What's the Real Context Size of Your Long-Context Language Models?](https://arxiv.org/abs/2404.06654v2), arXiv, April 2024. Academic benchmark; results for 2024 models.
- [Liu et al., Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172v3), arXiv, July 2023, revised November 2023. Academic preprint; tested models are now superseded.
- [Anthropic, Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), accessed November 2026. Vendor documentation; multipliers vary by model and change over time.

## Related research

- [What is retrieval-augmented generation?](https://lowob.com/research/what-is-retrieval-augmented-generation/)
- [What is a context window?](https://lowob.com/research/what-is-a-context-window/)
- [RAG vs fine-tuning](https://lowob.com/research/rag-vs-fine-tuning/)
- [What is permission-aware retrieval?](https://lowob.com/research/what-is-permission-aware-retrieval/)

## Next move

Take the AI use case your team relies on most and write down its corpus size, how often it changes and who may see it. If it is small, static and shared, try long context with caching; if not, keep retrieval and check its permission filters.

[Start a conversation](https://lowob.com/contact/)
