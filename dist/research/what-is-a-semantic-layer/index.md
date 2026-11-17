# What Is a Semantic Layer (Shared Definitions for AI)?

Source: https://lowob.com/research/what-is-a-semantic-layer/
Publisher: lowob (https://lowob.com)
Published: 2026-05-21 · Updated: 2026-11-17
Function: Strategy

> Summary: A semantic layer fixes the meaning of business terms and metrics once, so that dashboards, people and AI agents calculate them the same way. In data teams it is a tool category with an emerging open standard. For a mid-size commercial team it starts as five written definitions, each with an owner, read by every agent.

A semantic layer is a shared set of business definitions, such as revenue, active client or qualified lead, that every report, person and AI agent reads the same way. In data teams it is software that maps business terms to the tables and calculations underneath. For a commercial team it starts more simply: a handful of written definitions, each with an owner. Without one, two agents asked the same question can give two confident and different answers.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What a semantic layer means

Every company has terms that mean different things to different teams. Finance counts revenue when it is invoiced; sales counts it when the contract is signed. One team calls an account "active" if it bought this year, another if anyone has spoken to it this quarter. People resolve this in conversation; an agent does not. It picks whichever definition it finds first and presents the answer with the same confidence either way.

A semantic layer removes the choice. It is the part of the context layer that fixes meaning. dbt Labs' MetricFlow, which powers the dbt Semantic Layer, defines semantic models, entities, dimensions and metrics in YAML. Metric logic is written once, committed to version control, reviewed by data and business teams as the single source of truth, and queried by every connected tool.

| Element | What it fixes | Commercial example |
| --- | --- | --- |
| Entity | What a thing is, and how records join | An account is the parent company, not each subsidiary |
| Dimension | How results are sliced | Region, segment, source, quarter |
| Metric | How a number is calculated | Net revenue retention, on a stated formula |
| Definition | What a term means in words | "Qualified" means budget, owner and timeline confirmed |
| Owner | Who can change it | Head of revenue operations |

## Why it matters for AI

Agents answer questions by turning words into queries. Shared definitions make a measurable difference to how often they get it right. Juan Sequeda, Dean Allemang and Bryon Jacob tested GPT-4 on enterprise questions over an insurance company's SQL schema in 2023. Asked directly against the tables, it answered 16% correctly. When the same data was described through a knowledge graph that carried business meaning, accuracy rose to 54%. The authors work at data.world, a data-catalogue vendor, so treat the result as vendor research on a single domain. The model had the same data in both tests; what changed was whether the business meaning was explicit.

The industry is moving towards a common format. In September 2025, Snowflake, Salesforce, dbt Labs and others launched the Open Semantic Interchange to standardise how semantic models are defined and shared between tools. In 2026 it entered the Apache Incubator as Apache Ossie, a YAML-based specification. IT Brief reported in July 2026 that the coalition had grown from 17 founding partners to more than 50 organisations. For a buyer, the point is portability: definitions in an open format survive a change of tool.

## How to start without a data team

A 20-to-500-person firm rarely needs semantic-layer software on day one. It needs the definitions written down, agreed and read by every agent. Start with five.

| Term | Typical disagreement | Write down |
| --- | --- | --- |
| Active client | Bought this year, or engaged this quarter? | One test, with a date window |
| Qualified | Any meeting, or budget and owner confirmed? | The criteria, in order |
| Won and lost | Signed, invoiced or paid? Lost, or stalled? | The event that changes the stage |
| Owner | Who sourced it, or who manages it now? | One named person per account |
| Source | Free text, or a fixed list? | The list, and who can add to it |

Give each definition an owner and a date. When a definition changes, record the change as a new version with its reason, rather than editing the old text, so past reports can still be read on the terms they used. Then put them where every agent will read them, such as a pinned document or the CRM's field descriptions.

## lowob takeaways

- **Meaning is part of the context layer.** Connectors find the data; definitions decide what it means.
- **Shared definitions change answers.** Benchmarks show large accuracy gains when business meaning is explicit.
- **Start with five terms.** Active client, qualified, won and lost, owner and source.
- **Version the definitions.** A changed term gets a new version and a reason, not a silent edit.

## Common questions

### What is a semantic layer in simple terms?

A single agreed set of business definitions and metric calculations that every report, dashboard and AI agent uses, so the same question gets the same answer.

### Why do AI agents need a semantic layer?

Because they turn words into queries. Without fixed definitions they choose one silently, and two agents can return different numbers for "revenue" or "active clients" with equal confidence.

### What is the Open Semantic Interchange (OSI)?

An industry initiative launched in September 2025 by Snowflake, Salesforce, dbt Labs and others to standardise semantic model definitions. It entered the Apache Incubator as Apache Ossie in 2026.

### Do small companies need semantic layer software?

Usually not at first. Five written definitions, each with an owner and read by every agent, cover most commercial questions.

## Sources and notes

- [Sequeda, Allemang and Jacob, A Benchmark to Understand the Role of Knowledge Graphs on LLM Accuracy for Question Answering on Enterprise SQL Databases](https://arxiv.org/abs/2311.07509v1), November 2023. Authors are from a data-catalogue vendor.
- [dbt Labs documentation, About MetricFlow](https://docs.getdbt.com/docs/build/about-metricflow). Vendor documentation.
- [TechTarget, New consortium to aid AI by standardizing semantic modeling](https://www.techtarget.com/searchdatamanagement/news/366631576/New-consortium-to-aid-AI-by-standardizing-semantic-modeling), September 2025.
- [IT Brief UK, Apache Ossie joins incubator to standardise metrics](https://itbrief.co.uk/story/apache-ossie-joins-incubator-to-standardise-metrics), July 2026. Membership figures as reported.
- The five starting definitions are **lowob**'s recommendation for mid-size commercial teams.

## Related research

- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [The 5 Enterprise Context Platforms, Ranked for Regulated Firms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/)
- [How to Write an Ideal Customer Profile Sales Will Use](https://lowob.com/research/how-to-write-an-icp/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)

## Next move

Ask two people on your team, separately, how many active clients you have. If the numbers differ, write the definition this week, name its owner and give it to every assistant you use.

[Start a conversation](https://lowob.com/contact/)
