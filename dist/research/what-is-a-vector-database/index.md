# What Is a Vector Database?

Source: https://lowob.com/research/what-is-a-vector-database/
Publisher: lowob (https://lowob.com)
Published: 2026-06-18 · Updated: 2026-11-17
Function: Strategy

> Summary: A vector database stores numerical representations of text, images or other data, called embeddings, and retrieves the items closest in meaning to a query. It is the usual index behind retrieval-augmented generation. Vector search has become a standard feature of existing databases such as Postgres, so most mid-size firms do not need a separate product.

A vector database stores data as embeddings, lists of numbers that capture meaning, and finds the items whose meaning is closest to a query. This lets an AI system find a proposal about "customer churn" when the user asked about "clients leaving", even though the words differ. It is the usual index behind retrieval-augmented generation. Vector search is now a feature in many standard databases, so for most mid-size firms the question is which existing system to switch it on in, not which new product to buy.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What a vector database means

Traditional databases find records by exact values: a customer ID, a date, a word. That fails when people describe the same thing in different words. An embedding model solves this by converting a piece of text into a vector, a long list of numbers, so that texts with similar meaning have vectors close together.

A vector database stores those vectors and answers one main question quickly: which stored items are nearest to this query vector. Common distance measures include cosine distance, Euclidean distance and inner product. The results are then passed to a language model, as in retrieval-augmented generation, or shown directly as search results.

| A vector database is | A vector database is not |
| --- | --- |
| An index for finding items by similarity of meaning | A system of record for customers or deals |
| Usually the retrieval layer behind RAG | The AI model that writes answers |
| Approximate by design, trading some recall for speed | A guarantee that the best match is returned |
| Often a feature of an existing database | Necessarily a separate product to buy |

## How it works

Comparing a query against every stored vector is exact but slow at scale. Most systems therefore use approximate nearest neighbour (ANN) indexes. The best known is HNSW, Hierarchical Navigable Small World graphs, introduced by Malkov and Yashunin in 2016. It builds layered graphs of connected points, so a search starts with long jumps across the top layer and narrows down through the lower ones.

The Postgres extension pgvector shows the trade-offs plainly. By default it performs exact search, with perfect recall. Adding an HNSW index gives better speed-recall trade-offs but takes longer to build and uses more memory. An IVFFlat index builds faster and uses less memory but queries less efficiently. Its documentation warns that results may change after an approximate index is added.

The market has two camps. Forrester's 2024 Wave distinguished native vector databases, purpose-built for vector workloads, from multi-model databases adding vector capabilities to existing engines. Native products had the head start; established vendors were catching up. By late 2025, commentary in VentureBeat described vector search as a "checkbox feature" in cloud data platforms rather than a standalone advantage.

## Do you need one: how to evaluate

For most firms with 20 to 500 people, the honest answer is that you need vector search, not necessarily a vector database. If your documents already live in Postgres or a cloud platform that offers vector search, start there.

| Situation | Sensible choice |
| --- | --- |
| Under about 200,000 tokens of reference material | Possibly no index at all; place it in the prompt |
| Documents already in Postgres or a cloud data platform | Turn on its vector feature, such as pgvector |
| Your AI assistant or CRM offers built-in document search | Use the vendor's index; rent the wiring |
| Millions of items, strict latency needs, dedicated team | Evaluate a native vector database |

Three mistakes recur. The first is relying on similarity alone. Similarity search returns near-misses: a query for one error code can return a neighbouring one. Practitioners now pair vectors with keyword search, metadata filters and reranking, an approach Anthropic's retrieval research also supports. The second is indexing everything. Duplicate and outdated documents sit close together in vector space and crowd out the current version. The third is treating the index as memory. A vector database finds similar text; it does not know which proposal was approved, who owns the account or what was decided.

In **lowob**'s model, the vector index sits in the wiring stage. It helps the right material reach the model. The record of decisions, with reason, owner and status, belongs in a system you own, and the index should point to it rather than replace it.

## lowob takeaways

- **It finds meaning, not words.** Embeddings let search match "clients leaving" to "customer churn".
- **It is approximate.** Fast indexes such as HNSW trade some recall for speed.
- **It is usually a feature now.** Check your existing database before buying a new one.
- **Pair it with keywords and filters.** Hybrid search avoids near-miss answers.

## Common questions

### What is a vector database used for?

Mainly for finding items by similarity of meaning, most often as the retrieval layer that supplies relevant documents to an AI model in retrieval-augmented generation.

### Do I need a vector database for RAG?

Not always a separate one. Many existing databases, including Postgres with pgvector, offer vector search. Small knowledge bases can sometimes skip retrieval entirely.

### What is the difference between a vector database and a traditional database?

A traditional database matches exact values. A vector database stores embeddings and returns the items nearest in meaning, usually by approximate search.

### What is HNSW?

Hierarchical Navigable Small World, a graph-based index for fast approximate nearest neighbour search, introduced in 2016 and used by many vector databases.

## Sources and notes

- [Malkov and Yashunin, HNSW paper, arXiv 1603.09320](https://arxiv.org/abs/1603.09320v2), March 2016. Academic paper.
- [pgvector on PGXN](https://pgxn.org/dist/vector), open-source extension documentation, version 0.8.7 (October 2026).
- [Forrester, Unleashing the first Forrester Wave for vector databases](https://www.forrester.com/blogs/unleashing-the-first-forrester-wave-for-vector-databases), 1 October 2024. Analyst evaluation; full report is paywalled.
- [VentureBeat, From shiny object to sober reality: the vector database story, two years later](https://venturebeat.com/infrastructure/from-shiny-object-to-sober-reality-the-vector-database-story-two-years-later), 16 November 2025. Opinion piece by a practitioner.
- [Anthropic, Introducing Contextual Retrieval](https://anthropic.com/research/contextual-retrieval), 19 September 2024. Vendor research; source of the 200,000-token threshold.

## Related research

- [The 5 Agent Memory Layers Worth Testing, and How to Test Them](https://lowob.com/research/the-5-agent-memory-layers-worth-testing-and-how-to-test-them/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [The 5 Enterprise Context Platforms, Ranked for Regulated Firms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)

## Next move

Check whether the database or platform that already holds your documents offers vector search. If it does, run a pilot there on one document set before evaluating any new product.

[Start a conversation](https://lowob.com/contact/)
