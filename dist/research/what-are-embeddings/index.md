# What Are Embeddings?

Source: https://lowob.com/research/what-are-embeddings/
Publisher: lowob (https://lowob.com)
Published: 2026-08-23 · Updated: 2026-11-17
Function: Strategy

> Summary: An embedding is a list of numbers that represents a piece of text, an image or another item, placed so that similar items sit close together. Embeddings power semantic search, recommendations, deduplication and retrieval for AI assistants. They measure similarity, not truth, and no single embedding model is best at every task.

An embedding is a list of numbers that represents a piece of text, an image or another item, arranged so that items with similar meaning sit close together. Comparing those numbers lets software find related content without matching exact words. Embeddings power semantic search, recommendations and retrieval for AI assistants. They measure similarity, not truth, and the right model depends on the task.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What embeddings mean

Computers compare numbers easily and meaning poorly. An embedding model bridges the gap. It reads an input, such as a sentence, an email or a product description, and outputs a fixed-length list of numbers. Each list is a point in a space with hundreds or thousands of dimensions.

The model is trained so that position carries meaning. Google's machine learning crash course uses food as its example. In a simple illustrative space, hot dog and shawarma sit near each other, while apple strudel sits further away. Real embeddings have far more dimensions; Google notes that word embeddings often use 256, 512 or 1,024, and that the individual dimensions are rarely as readable as "sandwich-ness".

The same course makes a point that matters for buyers: embeddings reflect the task they were trained for. Cereal and breakfast sausage might sit close together in a model organised by time of day and far apart in one organised by vegetarian or not.

| Embeddings are | Embeddings are not |
| --- | --- |
| Numeric representations of meaning | A summary a person can read |
| A way to measure similarity between items | A check on whether content is true |
| Produced by a separate, usually cheap, model | The language model that writes answers |
| Comparable only within the same embedding model | Portable between providers without re-embedding |

## How embeddings work, and why they matter for a commercial team

The workflow has three steps. Each document, record or passage is converted to an embedding and stored, usually in a vector database. A query is converted with the same model. The system then finds the stored items whose vectors sit closest to the query. OpenAI recommends cosine similarity, a measure of the angle between two vectors, as the distance function.

OpenAI lists the main uses as search, clustering, recommendations, anomaly detection, diversity measurement and classification. For a commercial team these translate into concrete jobs:

- Finding past proposals that answered a similar question, even when the wording differs.
- Matching inbound leads to the closest existing accounts to catch duplicates.
- Grouping win-loss notes by theme without a fixed tag list.
- Retrieving the relevant policy or case study before an assistant drafts a reply, the retrieval step in RAG.

Embedding is also cheap compared with generation. OpenAI estimates about 62,500 pages per dollar with text-embedding-3-small and about 9,615 with the large model, assuming roughly 800 tokens a page. A library of 10,000 documents can be embedded for a small one-off cost, though it must be redone when content changes or the model is replaced.

In **lowob**'s model of the enterprise brain, embeddings sit in the wiring stage. They help the context layer choose what reaches the model. They do not record what was decided or why; that belongs in the record.

## How to evaluate embeddings, and common mistakes

| Check | Why it matters |
| --- | --- |
| Test on your own queries | Public rankings average many tasks that may not match yours |
| Check language coverage | Performance varies by language and domain vocabulary |
| Decide chunk size | Whole documents blur meaning; very short passages lose context |
| Plan for re-embedding | Vectors from different models cannot be compared |
| Restrict access in the store | Embeddings derived from sensitive text remain sensitive |

The MTEB benchmark, published in October 2022 by Muennighoff and colleagues, tested 33 models and concluded that no particular method dominated across all tasks. A model that ranks first for retrieval may rank lower for clustering. Build a test set of 30 to 50 real queries with the documents a person would expect to see, and measure how often the right one appears in the top five.

The most common mistake is treating similarity as relevance. Two contracts can be close in embedding space and differ on the one clause that matters. A second is ignoring security. OWASP's 2025 Top 10 for LLM applications lists vector and embedding weaknesses as a risk category of their own. An assistant that retrieves from a shared store can surface content a user should not see. Apply the same permissions to the vector store as to the source documents.

## lowob takeaways

- **Embeddings measure closeness of meaning.** They let software find related content without exact words.
- **They are task-specific.** Test on your own queries before choosing a model.
- **Similar is not correct.** Retrieval narrows the field; a person or a check still decides.
- **Permissions travel with the data.** Secure the vector store like the source system.

## Common questions

### What are embeddings in simple terms?

They are lists of numbers that represent the meaning of text or other data. Items with similar meaning get similar numbers, so software can find related content by comparing them.

### What is the difference between embeddings and a vector database?

Embeddings are the numeric representations. A vector database stores them and finds the closest matches to a query quickly, often across millions of items.

### Are embeddings the same as a large language model?

No. Embedding models convert input into vectors for comparison. Language models generate text. Many AI systems use both: embeddings to retrieve, a language model to write.

### Can embeddings leak sensitive data?

They can. OWASP lists vector and embedding weaknesses among its 2025 LLM risks. Treat vector stores as sensitive and apply the same access rules as the source documents.

## Sources and notes

- [OpenAI, Vector embeddings guide](https://developers.openai.com/api/docs/guides/embeddings.md), accessed November 2026. Vendor documentation; page-per-dollar figures are vendor estimates.
- [Google for Developers, Machine Learning Crash Course: Embedding space](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space), accessed November 2026. Educational material; food examples are illustrative.
- [Muennighoff et al., MTEB: Massive Text Embedding Benchmark](https://arxiv.org/abs/2210.07316v3), October 2022, revised March 2023. Academic benchmark; model rankings have since changed.
- [OWASP, Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/), November 2024. Community security project.

## Related research

- [What Is a Vector Database?](https://lowob.com/research/what-is-a-vector-database/)
- [What Is Retrieval-Augmented Generation (RAG)?](https://lowob.com/research/what-is-retrieval-augmented-generation/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [What Is a Customer Data Platform?](https://lowob.com/research/what-is-a-customer-data-platform/)

## Next move

Write down 30 questions your team asks of past proposals or case studies, each with the document that should answer it. Use that list to test any search or assistant before you buy.

[Start a conversation](https://lowob.com/contact/)
