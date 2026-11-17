# Semantic Layer vs Knowledge Graph

Source: https://lowob.com/research/semantic-layer-vs-knowledge-graph/
Publisher: lowob (https://lowob.com)
Published: 2026-11-11 · Updated: 2026-11-17
Function: Strategy

> Summary: A semantic layer defines metrics and business terms once so every tool calculates them the same way. A knowledge graph stores entities and named relationships so a system can follow connections. Both give AI explicit business meaning; they answer different questions, and most commercial teams need the definitions before the graph.

A semantic layer fixes how business terms and numbers are calculated, such as revenue, active client or win rate, so every report and agent gets the same answer. A knowledge graph records how things connect, such as which person signed which contract and which proposal replaced which, so a system can follow those links. The semantic layer answers "how much"; the graph answers "how is this related". Both make business meaning explicit, and most commercial teams need the definitions first.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What the two terms mean

A [semantic layer](https://lowob.com/research/what-is-a-semantic-layer/) is a set of agreed business definitions mapped onto the data underneath. dbt Labs' documentation describes MetricFlow as "a SQL query generation tool designed to streamline metric creation across different data dimensions." Its parts are semantic models, which point at tables; entities, which are the join keys; dimensions, which slice results; and metrics, the calculations. Definitions live in YAML, can be committed to version control, and are approved by data and business teams as the "true and only source of information."

A [knowledge graph](https://lowob.com/research/what-is-a-knowledge-graph/) stores the facts themselves as a network. The W3C's RDF 1.1 standard, a 2014 Recommendation, makes the triple the basic unit: subject, predicate, object. It also states that identifiers "have global scope", so the same identifier means the same thing wherever it appears. OWL 2, a W3C ontology language, adds "classes, properties, individuals, and data values" with formally defined meaning. A graph can say that a person works at an account, that the account holds a contract, and that the contract superseded an earlier one.

|  | Semantic layer | Knowledge graph |
| --- | --- | --- |
| Main question | How is this number calculated? | How are these things connected? |
| Unit | Metric, dimension, entity | Triple: subject, predicate, object |
| Holds the data? | No; it sits over a warehouse and generates queries | Often yes; the facts are the graph |
| Typical output | A figure, sliced by dimensions | A path, a set of linked records, an explanation |
| Strength | Consistent aggregates across every tool | Multi-step questions across records |
| Standards | Apache Ossie (incubating); vendor formats such as dbt MetricFlow | W3C RDF 1.1 (2014) and OWL 2 (2012) |
| Typical failure | Two metrics with the same name and different logic | Stale or wrong edges that the model follows with confidence |

## Where they overlap, and where they differ

The line is blurrier than it looks. dbt's own documentation says MetricFlow works through YAML files "where a semantic graph links language to data," and calls entities the "edges between semantic models." A semantic layer is a small graph of tables and joins.

The Sequeda, Allemang and Jacob benchmark shows the overlap from the other side. Its knowledge graph was "a contextual layer incorporating an ontology and mappings" over an insurance company's SQL database. The data stayed in the database. What the graph added was explicit meaning: what a policy is, how a claim relates to it. That is the job a semantic layer does, written in graph form. GPT-4 accuracy rose from 16% to 54%. The authors work at data.world, a data-catalogue vendor, so treat it as one domain and one vendor's test. The lesson is that explicit meaning beats raw tables, whichever format holds it.

The real difference is the kind of question each one is built for.

**Semantic layers aggregate.** They are best at "what was net revenue retention in the enterprise segment last quarter", where the answer is a number and the risk is two tools calculating it differently. They rarely store individual facts about individual accounts.

**Knowledge graphs traverse.** They are best at "which open deals depend on a partner whose contract ends this quarter", where the answer is a set of links that no single table holds. Someone has to keep every edge current. Graphs also depend on [entity resolution](https://lowob.com/research/what-is-entity-resolution/): if one account appears under three names, the graph has three accounts.

Semantic definitions are moving toward portability. The Apache Ossie proposal describes "a vendor-neutral format for expressing business metrics, dimensions, and their relationships," begun as the Open Semantic Interchange in September 2025 by a coalition including Snowflake, Salesforce and dbt Labs. Graphs already have W3C standards. Definitions in an open format survive a change of tool.

## Which to choose

| If your problem is | Start with | Why |
| --- | --- | --- |
| Two dashboards or agents report different revenue | Semantic layer | The fault is in definitions, not connections |
| Agents answer metric questions from raw tables | Semantic layer | Explicit meaning raises accuracy |
| Questions need several hops across records | Knowledge graph | The answer is a path, not a total |
| Decisions need to be traced to accounts, owners and outcomes | A small knowledge graph | Supersession and links are relationships |
| The same customer appears under several names | Entity resolution first | Neither works on duplicated entities |
| No data team and fewer than 100 staff | Five written definitions | Software can follow once terms are agreed |

A short checklist before buying either:

- **Write the definitions first.** Active client, qualified, won and lost, owner and source, each with an owner.
- **List ten real questions.** Mark each as "how much" or "how connected". The split tells you which you need.
- **Name the maintainer.** A graph or a layer with no owner drifts within a quarter.
- **Ask about export.** Prefer tools that support an open format, such as RDF or Ossie.

## The **lowob** view

In **lowob**'s enterprise brain loop of store, wiring, record, reasoning and learning, the semantic layer is part of the wiring. It sits between the store and the models and fixes what words mean. It is a good thing to rent, because the standards are converging and the logic should be portable.

The most useful knowledge graph on the commercial line is narrower: decisions linked to the accounts, owners and outcomes they concern. That is the record stage. Decisions supersede rather than overwrite, and outcomes written back become new edges. That graph is worth owning, because it holds the firm's judgment rather than its arithmetic.

The [vector database vs knowledge graph](https://lowob.com/research/vector-database-vs-knowledge-graph/) comparison covers the retrieval side.

## lowob takeaways

- **Semantic layers fix calculations.** Use one when the problem is inconsistent numbers.
- **Knowledge graphs fix connections.** Use one when answers depend on following links across records.
- **Both supply explicit meaning.** A benchmark found that meaning, not more data, lifted accuracy.
- **Rent the definitions layer; own the decision graph.** The record of judgment is the part to keep.

## Common questions

### What is the difference between a semantic layer and a knowledge graph?

A semantic layer defines how business metrics and terms are calculated from underlying data. A knowledge graph stores entities and named relationships, so a system can follow connections between them.

### Is a semantic layer a type of knowledge graph?

They overlap. A semantic layer models tables and joins as a small graph, and a graph with an ontology can act as a semantic layer, but each is built for different questions.

### Do AI agents need a semantic layer or a knowledge graph?

Agents answering metric questions need consistent definitions, which a semantic layer provides. Agents answering relationship questions across records benefit from a graph. Many teams need definitions first.

### What is Apache Ossie?

An Apache Incubator project that grew from the Open Semantic Interchange, launched in September 2025. It is a vendor-neutral YAML format for business metrics, dimensions and their relationships.

## Sources and notes

- [dbt Labs documentation, About MetricFlow](https://docs.getdbt.com/docs/build/about-metricflow), accessed November 2026. Vendor documentation.
- [W3C, RDF 1.1 Concepts and Abstract Syntax](https://w3.org/TR/rdf11-concepts/), 25 February 2014, and [W3C, OWL 2 Web Ontology Language Document Overview](https://www.w3.org/TR/owl2-overview/), 11 December 2012. Standards body Recommendations.
- [Apache Incubator, Ossie proposal](https://cwiki.apache.org/confluence/spaces/INCUBATOR/pages/430408796/OssieProposal), last updated 16 June 2026. Project proposal; the specification is at version 0.1 and still changing.
- [Sequeda, Allemang and Jacob, A Benchmark to Understand the Role of Knowledge Graphs on LLM Accuracy for Question Answering on Enterprise SQL Databases](https://arxiv.org/abs/2311.07509), arXiv, November 2023. Preprint by authors at a data-catalogue vendor; one insurance domain, GPT-4 only.
- The decision table, checklist and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is a Semantic Layer (Shared Definitions for AI)?](https://lowob.com/research/what-is-a-semantic-layer/)
- [What Is a Knowledge Graph (for AI)?](https://lowob.com/research/what-is-a-knowledge-graph/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [How to Build a Company Knowledge Base for AI](https://lowob.com/research/how-to-build-a-company-knowledge-base-for-ai/)

## Next move

Write down ten questions your team asks an assistant or a dashboard each month and mark each "how much" or "how connected". If most are "how much", write the five core definitions this week and give them an owner.

[Start a conversation](https://lowob.com/contact/)
