# Vector Database vs Knowledge Graph

Source: https://lowob.com/research/vector-database-vs-knowledge-graph/
Publisher: lowob (https://lowob.com)
Published: 2026-10-07 · Updated: 2026-11-17
Function: Strategy

> Summary: A vector database finds passages that resemble a question; a knowledge graph follows explicit, typed relationships between things. The two are converging, with graph databases adding vector indexes and Postgres adding vectors. For a commercial team, the vector index is a rebuildable convenience and the relationships in the record are the asset worth owning.

A vector database stores text as embeddings, lists of numbers that capture meaning, and finds the items closest to a question. A knowledge graph stores facts as entities and the named relationships between them, such as "account A is owned by person B". Vectors are good at "find me things like this". Graphs are good at "show me how these things connect, and prove it". Many AI systems use both, and the products are converging.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What the two terms mean

A [vector database](https://lowob.com/research/what-is-a-vector-database/) holds embeddings. Each document chunk, email or call note is turned into a long list of numbers, and items with similar meaning end up close together. A question is embedded the same way, and the database returns the nearest items. Most systems use an index such as HNSW (hierarchical navigable small world) to make this fast. The open-source pgvector extension, now at version 0.8.7, adds the same capability to Postgres with HNSW and IVFFlat indexes and cosine, inner product and Euclidean distance.

A [knowledge graph](https://lowob.com/research/what-is-a-knowledge-graph/) holds things and the links between them. In the W3C's RDF 1.1 standard, a graph is "a set of RDF triples", each one a subject, a predicate and an object. Property graph databases use nodes and relationships with attributes. Either way, the relationship is stored explicitly: "contract X renews on date Y", "deal Z was approved by person W". A query follows those links rather than measuring resemblance.

| Dimension | Vector database | Knowledge graph |
| --- | --- | --- |
| Stores | Embeddings of text, images or records | Entities and typed relationships |
| Question it answers well | "Find passages like this one" | "How are these connected, and through what?" |
| How a query works | Nearest neighbours by similarity score | Traversal along named links |
| Exactness | Approximate by design | Exact, if the data is right |
| Effort to build | Low: chunk, embed, index | Higher: define entity types, resolve duplicates, maintain links |
| How it explains a result | A similarity score | A path you can read |
| Typical weakness | Multi-step and whole-corpus questions | Nuance in unstructured text, and gaps in coverage |
| Examples | pgvector, dedicated vector databases, vector indexes in search engines | RDF triple stores, property graph databases |
| Place in the brain loop | Wiring: a retrieval index | Store and record: the structure of what is known |

## Where each one breaks

Vector search struggles when the answer is not in any single passage. The GraphRAG paper by Edge and colleagues at Microsoft names the problem directly: questions that need an understanding of a whole corpus are summarisation tasks, not retrieval tasks. Their method uses a language model to extract an entity graph from the text, then summarises clusters of related entities. On two datasets of about 1 million and 1.7 million tokens, it produced more comprehensive and diverse answers to whole-corpus questions than a vector baseline.

Vectors also blur exact facts. Two contracts with different renewal dates may embed almost identically. A seller asking "which accounts share a parent company with our largest client" needs a relationship, not a resemblance.

Graphs break in a different place. Someone has to decide what the entities are and keep them clean. If the same company appears under three names, the graph has three companies, which is why [entity resolution](https://lowob.com/research/what-is-entity-resolution/) matters more for graphs than for vectors.

The benchmark by Sequeda, Allemang and Jacob shows what structure buys. GPT-4 answered questions over an enterprise SQL database with 16% accuracy when asked directly, and 54% when the same data was exposed as a knowledge graph. It is one benchmark on the authors' own test set, so treat the size of the gain as directional.

## The products are converging

The choice is less binary than vendor marketing suggests. Neo4j, a graph database, now offers vector indexes built on Apache Lucene's HNSW implementation, with cosine similarity as the default for text embeddings. Postgres, a relational database, gains vector search through pgvector. A common pattern is to find candidate passages by vector similarity, then use the graph to expand, filter or verify them. GraphRAG runs the other way, using a model to build the graph from text.

## Which to choose

| If your main question is | Start with | Notes |
| --- | --- | --- |
| "Find the policy, case study or past answer that matches this" | Vector index | Fast to stand up from existing documents |
| "Who owns this account, and who approved its last discount?" | Graph or relational record | An exact fact with a named owner |
| "What themes run through two years of lost-deal notes?" | Graph-based summarisation, or a long-context model | Whole-corpus question |
| "Which contacts link these two accounts?" | Graph | Multi-hop relationship |
| "Brief me before this call" | Both | Vectors find the notes; the graph supplies the structure |

A short checklist before buying either:

- **Write down ten real questions.** Mark each one "resemblance" or "relationship".
- **Check what you already run.** Postgres or an existing graph database may cover both needs.
- **Count your entity types.** Accounts, contacts, deals and decisions are a small, valuable graph. Modelling everything is not.
- **Ask who maintains the links.** A graph nobody updates is worse than none.

## The **lowob** view

The enterprise brain is a loop: store, wiring, record, reasoning, learning. A vector index belongs to the wiring. It is derived from documents and can be regenerated whenever the embedding model changes, so it is a sensible thing to rent. We make the same point in [Keep the Sources, Let the Summary Regenerate](https://lowob.com/research/keep-the-sources-let-the-summary-regenerate/).

The record is different. A decision record links a decision to an account, an owner, a reason, an expected outcome and the earlier decision it replaced. That is graph-shaped data, whether it sits in a graph database or in well-linked relational tables. It cannot be regenerated, because the reasons were written once by the people who made the call. Own it, keep it structured, and [supersede rather than overwrite](https://lowob.com/research/supersede-never-overwrite/). The learning stage then writes outcomes back onto the same links, which is what lets the next brief show what happened last time.

## lowob takeaways

- **Vectors find resemblance.** Use them to locate passages that match a question.
- **Graphs hold relationships.** Use them where the answer is an exact, traceable connection.
- **You may already have both.** Graph databases add vector indexes and Postgres adds vectors.
- **Own the links; rent the index.** The relationships in the record are the asset; the index can be rebuilt.

## Common questions

### What is the difference between a vector database and a knowledge graph?

A vector database finds items by similarity of meaning using embeddings. A knowledge graph stores entities and named relationships, and answers by following those links.

### Is a knowledge graph better than a vector database for RAG?

For questions about exact relationships or whole-corpus themes, graphs often do better. For finding relevant passages in documents, vector search is faster to build. Many systems combine both.

### What is GraphRAG?

A Microsoft Research method that uses a language model to build a knowledge graph from documents, summarises clusters of related entities, and answers questions that need a view of the whole corpus.

## Sources and notes

- [pgvector on PGXN](https://pgxn.org/dist/vector), version 0.8.7, October 2026. Open-source project documentation.
- [Neo4j, Cypher Manual: Vector indexes](https://www.neo4j.com/docs/cypher-manual/25/indexes/semantic-indexes/vector-indexes/), accessed November 2026. Vendor documentation.
- [W3C, RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/), 25 February 2014. Standards body Recommendation.
- [Edge et al., From Local to Global: A Graph RAG Approach to Query-Focused Summarization](https://arxiv.org/abs/2404.16130), arXiv, April 2024, revised February 2025. Microsoft-authored preprint; results on the authors' own datasets.
- [Sequeda, Allemang and Jacob, A Benchmark to Understand the Role of Knowledge Graphs on LLM Accuracy for Question Answering on Enterprise SQL Databases](https://arxiv.org/abs/2311.07509), arXiv, November 2023. Single benchmark on the authors' own test set.
- The decision table, checklist and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is a Vector Database?](https://lowob.com/research/what-is-a-vector-database/)
- [What Is a Knowledge Graph (for AI)?](https://lowob.com/research/what-is-a-knowledge-graph/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [What Is Entity Resolution?](https://lowob.com/research/what-is-entity-resolution/)
- [What Are Embeddings?](https://lowob.com/research/what-are-embeddings/)

## Next move

Write down ten questions your sellers ask before a call and mark each one "resemblance" or "relationship". If most are relationships, fix how accounts, owners and decisions link in your record before you buy a vector database.

[Start a conversation](https://lowob.com/contact/)
