# What Is a Knowledge Graph (for AI)?

Source: https://lowob.com/research/what-is-a-knowledge-graph/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: A knowledge graph represents information as entities, such as accounts, people and contracts, joined by named relationships. It lets an AI system answer questions that need connections across many documents, which plain vector search handles poorly. Microsoft's GraphRAG showed language models can build such graphs from text, but a graph is only as current as the facts written into it.

A knowledge graph stores information as entities, such as companies, people, products and contracts, connected by named relationships, such as "works at", "signed" or "replaced". For AI, it gives a model a map of how facts connect, so it can answer questions that need several hops across sources. Text search finds similar passages; a graph follows links. Graphs help most where relationships matter and least where nobody maintains them.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What a knowledge graph means

A knowledge graph is a way of storing facts as a network. Each node is an entity, a thing with an identity. Each edge is a relationship with a name. For example, the sentence "a mid-size logistics client renewed its contract on 1 March" becomes a set of linked facts: the client, the contract, the renewal, the date, and the person who signed it.

The idea is older than the current AI wave. The W3C's Resource Description Framework (RDF) standardises the basic unit; its 1.1 version, a 2014 W3C Recommendation, states that an RDF triple consists of a subject, a predicate and an object, and that a graph is a set of triples. Google's Knowledge Graph, launched in May 2012, made the idea familiar to search users. Its launch post described a graph of more than 500 million objects and over 3.5 billion facts and relationships, designed to understand "real-world entities and their relationships to one another: things, not strings."

| Knowledge graph | Vector index | Relational database |
| --- | --- | --- |
| Stores entities and named relationships | Stores embeddings of text chunks | Stores rows in fixed tables |
| Answers "how is A connected to B" | Answers "what text is similar to this" | Answers "which rows match these values" |
| Good for multi-step, relational questions | Good for finding relevant passages | Good for transactions and reporting |
| Needs a schema or extraction step | Needs an embedding model | Needs a fixed schema |

## How it works for AI

A language model can either query an existing graph, often fed by pipelines from systems such as a CRM, or build the graph itself from documents.

Microsoft Research's GraphRAG, announced in February 2024, is a widely cited example of the second approach. A language model reads a document collection, extracts entities and relationships into a graph, groups closely related entities into clusters and writes a summary of each cluster in advance. At question time, those summaries and graph links feed the model's context.

Microsoft's post set out the weakness of standard RAG it was designed to address. Its researchers found that vector-based retrieval "struggles to connect the dots" when an answer requires linking separate pieces of information, and performs poorly on questions about a whole dataset, such as "What are the top 5 themes in the data?" The accompanying paper by Edge and colleagues reported substantial improvements in the comprehensiveness and diversity of answers on such global questions, tested on datasets of around one million tokens.

## Why it matters for a commercial team, and when to use one

Commercial questions are often relational: which open deals depend on a partner whose contract ends this quarter, or which proposal superseded which. Text search struggles because the answer is not written in any single document.

| Use a knowledge graph when | Avoid one when |
| --- | --- |
| Questions follow relationships across records | Questions are answered by finding one passage |
| Entities are stable and well defined, such as accounts and contracts | Entities are vague or change meaning often |
| Someone owns keeping relationships current | Nobody will maintain it after the build |
| You need to explain why an answer was reached | A ranked list of documents is enough |

The common mistake is to treat a graph built once by a language model as a source of truth. Extraction makes errors, and a graph does not update itself when a contract is renewed or a contact changes role. A stale edge is worse than a missing one, because the model will follow it with confidence.

In **lowob**'s model, the most valuable graph on the commercial line is a small one: decisions linked to the accounts, owners and outcomes they concern, with each decision able to supersede an earlier one rather than overwrite it. That is the record stage of the enterprise brain. Rent the extraction tools if useful; own the record of what was decided.

## lowob takeaways

- **Graphs store connections.** Entities and named relationships let AI follow links that text search misses.
- **They complement vectors.** Use similarity search to find passages and a graph to answer how things relate.
- **Language models can build them.** GraphRAG shows the method, but extracted graphs need checking.
- **Maintenance decides value.** A graph without an owner goes stale and misleads.

## Sources and notes

- [Google, Introducing the Knowledge Graph: things, not strings](https://blog.google/products/search/introducing-knowledge-graph-things-not/), 16 May 2012. Vendor announcement; figures are from launch.
- [W3C, RDF 1.1 Concepts and Abstract Syntax](https://w3.org/TR/rdf11-concepts/), 25 February 2014. Standards body Recommendation.
- [Microsoft Research blog, GraphRAG announcement](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/), 13 February 2024. Vendor research.
- [Edge et al., From Local to Global: A Graph RAG Approach to Query-Focused Summarization](https://arxiv.org/abs/2404.16130v1), arXiv, April 2024. Microsoft-authored paper; results on the authors' own test sets.
- The decision graph and usage guidance are **lowob**'s working method.

## Related research

- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [The Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)

## Next move

Write down five questions your team asks that need more than one record to answer, such as which deals depend on a single contact. If most of them involve relationships, sketch the entities and links a small graph would need.

[Start a conversation](https://lowob.com/contact/)
