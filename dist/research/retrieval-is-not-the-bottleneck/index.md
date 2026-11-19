# Retrieval Is Not the Bottleneck

Source: https://lowob.com/research/retrieval-is-not-the-bottleneck/
Publisher: lowob (https://lowob.com)
Published: 2026-08-28 · Updated: 2026-11-17
Function: Strategy

> Summary: Independent benchmarks find that AI memory systems usually retrieve the right evidence and then fail to use it, especially when facts have changed. Better search will not fix that. Giving every piece of evidence a standing, with status, validity dates, provenance and supersession links, and answering change questions with a timeline, will.

The right evidence is usually there. Memory systems fail at weighing and applying it, especially when it has changed. A June 2026 benchmark found that when memory systems failed, the relevant evidence was retrievable about ten times more often than it was missing, and that questions about how a fact changed were the weakest category. Better search will not fix that. Giving every piece of evidence a standing, with status, validity dates, provenance and links to what it replaced, will.

*Figure: Where this piece sits in The Build Order: the context layer.*

Most memory roadmaps assume the hard problem is finding the right fact. So the investment goes into better embeddings, a knowledge graph, re-ranking, a bigger context window. The independent evidence of the last two years points somewhere else. Our explainer on [agent memory](https://lowob.com/research/what-is-agent-memory/) covers the main designs; this piece is about why they fail.

## What the benchmarks actually found

MemTrace, a benchmark released on arXiv on 15 June 2026 by Xianxuan Long and colleagues, probed 835 knowledge points, each a single typed fact about a user, across 13 memory-system configurations in four paradigms. Its central finding is in the abstract: when systems fail, "the evidence was retrievable 10× more often than it was missing". In a 300-probe replay, the gap attributable to reaching the evidence was 7.0%; the gap attributable to using it was 73.3%. The authors treat the ratio as directional, because it depends on the single retriever they used.

The weakest category was trajectory questions: how did this change, and when. The best systems answered about half of those correctly on fresh data. Mem-T scored 47.2% fresh and fell to 19.8% once its store had filled up; HippoRAG-v2 fell from 33.0% to 13.4%. Performance got worse as memory grew, which is the opposite of what a brain should do.

This is consistent with earlier work. LongMemEval, first published in October 2024 and revised in March 2025, tested five memory abilities including temporal reasoning and knowledge updates. Its authors report that long-context models showed a 30 to 60% performance drop on the larger version of the benchmark, and that "simplistic memory designs perform poorly on temporal reasoning questions".

| Study | What it tested | Finding that matters here |
| --- | --- | --- |
| MemTrace (June 2026) | 835 facts, 13 memory configurations | Evidence retrievable 10 times more often than missing when systems failed |
| MemTrace, trajectory questions | How a fact changed over time | Best systems about half right fresh, about one in five once memory filled |
| LongMemEval (2024, revised 2025) | 500 questions over long chat histories | 30 to 60% drop for long-context models; temporal reasoning weak |
| Stanford RegLab legal tools (May 2024) | Retrieval-backed legal research products | Wrong answers in more than 17% of queries, despite retrieval |

The legal study is a useful outside check because the products were built on retrieval. Stanford researchers found Lexis+ AI and Ask Practical Law AI gave incorrect information more than 17% of the time and Westlaw's AI-Assisted Research more than 34%. Part of the cause, they wrote, was retrieved sources that did not apply to the question's jurisdiction or time period. The system found documents. It could not tell which ones still governed.

## What it looks like in practice

The system retrieves both the March view and the June view of the same account. It blends them into one confident paragraph, or it picks whichever is written more fluently. Nothing in the store says which one superseded which, who asserted each, or whether either was verified. The model is asked to adjudicate with no basis for doing so.

> The system found the documents. It could not tell which ones still governed.

## Give evidence a standing

The fix is structural, and it is mostly about metadata the model can reason over.

| Field | Values | What it lets the model do |
| --- | --- | --- |
| Status | Current, superseded, disputed, unverified | Prefer what still governs |
| Validity dates | When the claim became true, when it stopped | Answer "as of when" questions |
| Provenance | Who asserted it, from what source, whether anyone checked | Weigh a verified primary source above a summary |
| Supersession link | Pointer to the claim it replaced, with a reason | Explain the change instead of blending |

Retrieval then returns evidence with its standing, and the instructions tell the model how to use standing. Verified beats unverified. Current beats superseded. Primary source beats summary. When two current claims conflict, say so rather than choose.

At least one memory vendor builds this in. Zep's published architecture records, for each fact, when it was true and when it was ingested, and when new information contradicts an existing fact it marks the old one invalid from the new one's start date rather than deleting it. That is a vendor's own design paper, but it shows the approach is practical. Our piece [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) sets out the record design, and [Keep the sources; let the summary regenerate](https://lowob.com/research/keep-the-sources-let-the-summary-regenerate/) covers provenance.

## Answer change questions with a timeline

For trajectory questions, top-k retrieval is the wrong shape. Ten relevant fragments sorted by similarity hide the order of events. Return the ordered sequence of states for the entity in question, with dates and the reason for each change. The model is much better at reading a timeline than reconstructing one, and MemTrace's trajectory results show how badly reconstruction goes once memory is full.

## A note on graphs

Graphs help with some of this and cost more than teams expect. Microsoft Research's GraphRAG work found that baseline retrieval "struggles to connect the dots" and does poorly on questions that need aggregation across a whole dataset. One practitioner write-up, published in April 2026, reports vector search better for specific lookups (54% against 35%) and graph retrieval about three to four times better for aggregation and cross-document questions. The same piece states that production graphs without automated refresh drift 15 to 20% from ground truth per quarter, and that teams report spending two to three times more engineering on freshness than on the initial build. It gives no underlying study for those last two figures, so treat them as practitioner estimates. The direction is still the useful part: budget for upkeep, or do not build the graph. Our comparison of [vector databases and knowledge graphs](https://lowob.com/research/vector-database-vs-knowledge-graph/) goes further.

## In practice

Add status, validity dates, provenance and supersession links to the records your agents retrieve. Write explicit precedence rules into the instructions that consume them. Build twenty trajectory questions from your own history ("how did our view of X change in 2026?") and score your system on them, once with a fresh store and again after a few months of use.

If you run a graph, put its refresh cost in the budget before its build cost.

**What would prove this wrong:** a retrieval-only improvement, with no standing metadata, that closes most of the gap on trajectory and knowledge-update questions in an independent benchmark.

## lowob takeaways

- **The evidence is usually there.** MemTrace found it retrievable ten times more often than missing when systems failed.
- **Change questions are the weak point.** Trajectory accuracy fell from about half to about one in five as memory filled.
- **Give evidence a standing.** Status, validity dates, provenance and supersession links, with written precedence rules.
- **Return timelines, not fragments.** Ordered states with dates and reasons answer "how did this change".
- **Budget graph upkeep first.** Freshness costs more than the build.

## Common questions

### Why do AI memory systems give wrong answers when the data is there?

The failure usually comes after retrieval, in how evidence is used. MemTrace, a June 2026 benchmark of 835 facts across 13 memory configurations, found the relevant evidence retrievable about ten times more often than it was missing when systems failed.

### How do I stop an AI agent mixing up old and new information?

Give each record a status (current, superseded, disputed or unverified), validity dates, provenance and links to what it replaced, and write precedence rules: verified beats unverified, current beats superseded, primary source beats summary, and conflicting current claims are flagged.

### Does RAG stop AI hallucinations?

Not on its own. Stanford researchers found retrieval-backed legal research tools gave wrong answers in more than 17% of queries, partly because they retrieved sources that did not apply to the question's jurisdiction or time period.

### Are knowledge graphs better than vector search for RAG?

For different questions. Practitioner tests find vector search better for specific lookups and graphs better for aggregation and cross-document questions, but graphs need continuous refresh, so budget for upkeep before building one.

## Sources and notes

- [Long et al., MemTrace: Probing What Final Accuracy Misses in Long-Term Memory](https://arxiv.org/pdf/2606.17328), 15 June 2026. Academic preprint; 20 users from one dataset; the ten-to-one ratio depends on one retriever.
- [Wu et al., LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://arxiv.org/abs/2410.10813v2), October 2024, revised March 2025. Academic preprint; synthetic chat histories.
- [Stanford HAI, AI on Trial: Legal Models Hallucinate in 1 out of 6 (or More) Benchmarking Queries](https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries), 23 May 2024, updated 30 May 2024. Academic study of commercial legal tools in 2024; products have changed since.
- [Rasmussen et al., Zep: A Temporal Knowledge Graph Architecture for Agent Memory](https://arxiv.org/html/2501.13956), January 2025. Vendor research paper by Zep's own team.
- [Microsoft Research, GraphRAG: LLM discovery on narrative private data](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/), February 2024. Vendor research blog.
- [Tian Pan, GraphRAG in Production: When Vector Search Hits Its Ceiling](https://tianpan.co/blog/2026-04-09-graphrag-production-when-vector-search-hits-ceiling), 9 April 2026. Practitioner blog; drift and freshness figures are not tied to a cited study.
- The standing fields and precedence rules are **lowob**'s working method.

## Related research

- [What Is Agent Memory?](https://lowob.com/research/what-is-agent-memory/)
- [Vector Database vs Knowledge Graph](https://lowob.com/research/vector-database-vs-knowledge-graph/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [The 5 Agent Memory Layers Worth Testing, and How to Test Them](https://lowob.com/research/the-5-agent-memory-layers-worth-testing-and-how-to-test-them/)

## Next move

Write twenty "how did our view of X change" questions from your own history this week, and score your current memory or search setup on them. If it blends old and new views, add status and supersession links before you buy better search.

[Start a conversation](https://lowob.com/contact/)
