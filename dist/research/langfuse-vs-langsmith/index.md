# Langfuse vs LangSmith: Which LLM Observability Tool to Choose

Source: https://lowob.com/research/langfuse-vs-langsmith/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: Langfuse and LangSmith cover the same core jobs: tracing, evaluation, human review and OpenTelemetry ingestion. They differ in licence, how self-hosting is sold, how usage is billed and how long data is kept at list price. This comparison sets out the facts from both vendors' pages as of 16 November 2026 and the situations where each fits.

Langfuse and LangSmith both trace, evaluate and monitor LLM applications; the main structural difference is that Langfuse's core is MIT-licensed and free to self-host, while LangSmith self-hosting is an Enterprise add-on and its paid cloud plan charges $39 per seat a month. Feature coverage is close; the choice turns on hosting, billing shape and your framework.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

Both tools appear in our ranking of the [top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/), which weights self-hosting heavily for regulated teams. This comparison sets the two side by side so you can weight the differences yourself. Every fact comes from the vendors' own pages, read on 16 November 2026.

## What is the difference between Langfuse and LangSmith?

Both trace, evaluate and review LLM applications and agents. They differ in licence, hosting, billing and ownership, not core features.

Langfuse is open source and has been owned by ClickHouse since an acquisition announced on 16 January 2026. ClickHouse said Langfuse "remains 100% open-source under its existing MIT license for core features". Its repository licence puts `ee/` directories under a separate enterprise licence.

LangSmith is built by LangChain, the company behind the LangChain and LangGraph frameworks. Its client SDK is MIT-licensed; the platform needs a licence key to self-host. LangChain's pricing page also bundles deployment products, such as an Agent Server on Plus.

## How do Langfuse and LangSmith compare?

They match on most features and differ on hosting, billing and retention, as listed by each vendor on 16 November 2026.

|  | Langfuse | LangSmith |
| --- | --- | --- |
| Licence | Core MIT; enterprise features under a separate licence | Platform proprietary; SDK MIT |
| Self-hosting | Free open-source edition; paid Self-Hosted Enterprise and Government editions, custom-priced | Enterprise add-on only, with licence key |
| Self-host stack | PostgreSQL, ClickHouse, Redis or Valkey, blob storage; Docker Compose for testing, Kubernetes for production | ClickHouse, PostgreSQL, Redis or Valkey, optional blob storage; Kubernetes with Helm |
| Free cloud tier | Hobby: 50,000 units, 2 users, 30-day data access | Developer: 1 seat, 5,000 base traces |
| Paid cloud plans | Core $29, Pro $199, Enterprise $2,499 a month, each with 100,000 units | Plus $39 per seat a month with 10,000 base traces; Enterprise custom |
| Billing unit | Unit: any trace, observation or score | Seat, plus trace |
| Overage | $8 per 100,000 units, falling to $6 above 50 million | Pay as you go; per-trace rate not stated on the pricing page |
| Users | Unlimited from Core | Every user, including invited users, is a billed seat |
| Retention at list price | 30 days Hobby, 90 days Core, 3 years Pro and Enterprise | 14 days base traces, 180 days extended at an unstated extra fee |
| Evaluation | Datasets, experiments, LLM-as-a-judge, custom scores, user feedback | Datasets, experiments, LLM-as-judge, code, pairwise and human evaluators |
| Human review | Annotation queues: 1 on Hobby, 3 on Core, unlimited on Pro | Annotation queues, single-run and pairwise |
| OpenTelemetry | OTLP at `/api/public/otel`; `gen\_ai.\*` spans become generations | OTLP at `/otel`; maps `gen\_ai.\*`, reads deprecated spellings |
| Framework ties | No framework required; any OpenTelemetry exporter can send traces | Built-in integration with LangChain and LangGraph; any OpenTelemetry client also works |

## Which is cheaper, Langfuse or LangSmith?

It depends on your usage. Langfuse charges by data point, not user; LangSmith charges by user and trace.

Langfuse's unit counts every trace, observation and score, so a deep agent run uses many units. LangSmith's FAQ says a trace "can include many individual steps", so depth does not change the count. But LangSmith bills every user as a $39 seat on Plus, while Langfuse includes unlimited users from its $29 Core plan. A large team with shallow traces will usually pay less on Langfuse at list price; a small team with very deep traces may not.

Two gaps limit exact comparison. LangChain's pricing page did not state its per-trace rate or extended-retention fee on 16 November 2026. Langfuse's self-hosted Enterprise pricing is unpublished and described as "additive to your ClickHouse commercial plan". Our [LLM observability pricing comparison](https://lowob.com/research/llm-observability-pricing-compared/) works through examples.

## Can you self-host Langfuse or LangSmith?

Yes, both, but on different terms. Langfuse's open-source edition can be self-hosted free; LangSmith self-hosting requires an Enterprise contract.

Langfuse's documentation lists Docker Compose for testing, a "Single VM without high availability, scaling, or backups", and Kubernetes with Helm for production. Its paid self-hosted edition adds audit logs, SCIM provisioning, project-level access control and data retention management; a Government edition adds FIPS 140-3 modules and air-gapped deployment.

LangSmith's documentation runs it in "your own Kubernetes cluster" with Helm, with Terraform offered for provisioning. Its pricing page also lists a hybrid option on Enterprise, with a SaaS control plane and a self-hosted data plane. Both stacks use ClickHouse for traces and PostgreSQL for operational data.

> The feature lists are close. The contract you need to run it inside your own walls is not.

## Do you need LangChain to use LangSmith?

No. LangChain's OpenTelemetry documentation, read on 16 November 2026, says you can "send traces from any OpenTelemetry-compatible agent" and trace an agent "with a standard OpenTelemetry client".

The integration is deeper for LangChain and LangGraph users, a real advantage if your agents use them. Both map OpenTelemetry GenAI attributes into their own data models, so test an export first; our explainer on the [OpenTelemetry GenAI conventions](https://lowob.com/research/opentelemetry-genai-semantic-conventions-explained/) covers why.

## How do their evaluation features compare?

Both support offline evaluation on datasets and online evaluation of production traces, with model, code and human graders.

LangSmith documents pairwise evaluators that "compare outputs from two application versions", pairwise annotation queues, and Tuned Evaluators in public beta for US Plus and Cloud Enterprise plans. Langfuse documents a GitHub Action that fails a build when an experiment score crosses a threshold. Its documentation says trace-level evaluators stop producing results on Langfuse Cloud after its version 4 cutover on 16 November 2026, so existing users should check their setup.

## Which should you choose?

Neither is better in general. Choose on hosting first, then billing shape, then framework.

**Langfuse tends to fit** teams that must self-host without an enterprise contract, have many users or want long retention at list price. Weigh the roadmap risk after an acquisition, and note that audit logs sit in the paid self-hosted edition.

**LangSmith tends to fit** teams building on LangChain or LangGraph, or wanting LangChain's deployment products or pairwise evaluation. Weigh per-seat cost as the team grows, 14-day base retention and the unstated trace overage rate.

**For either**, export one full agent run in OpenTelemetry format and load it into the other before you sign.

## lowob takeaways

- **Features are close.** Both trace agents, run evals and support human review and OpenTelemetry.
- **Hosting terms differ most.** Langfuse self-hosts free under MIT; LangSmith self-hosting is Enterprise only.
- **Billing shapes differ.** Units and unlimited users against seats and traces favour different teams.
- **Test the exit either way.** Both map OpenTelemetry data into their own models.

## Common questions

### Is Langfuse better than LangSmith?

Neither is better in general. Langfuse's core is MIT-licensed and free to self-host, with unlimited users from $29 a month on its cloud. LangSmith offers deep LangChain and LangGraph integration and pairwise evaluation, at $39 per seat a month, with self-hosting on Enterprise only. Choose on hosting needs, team size and framework.

### Is LangSmith open source?

The LangSmith client SDK is MIT-licensed, but the LangSmith platform is not open source. Self-hosting it requires an Enterprise plan and a licence key, as LangChain's documentation stated on 16 November 2026. Langfuse's core platform is open source under the MIT licence, with some enterprise features under a separate licence.

### How much does LangSmith cost compared with Langfuse?

As listed on 16 November 2026, LangSmith Developer is free for one seat with 5,000 base traces, and Plus is $39 per seat a month with 10,000 base traces, then pay as you go. Langfuse Hobby is free with 50,000 units; Core is $29, Pro $199 and Enterprise $2,499 a month, each with 100,000 units.

### Can I use LangSmith without LangChain?

Yes. LangChain's documentation says LangSmith accepts traces from any OpenTelemetry-compatible agent through its OTLP endpoint, using a standard OpenTelemetry client. LangChain and LangGraph have a built-in integration, which is deeper, but they are not required. Langfuse also accepts OpenTelemetry traces over its own OTLP endpoint.

## Sources and notes

- [Langfuse, Pricing](https://langfuse.com/pricing.md), accessed 16 November 2026. Vendor pricing page.
- [Langfuse, Self-hosted pricing](https://langfuse.com/pricing-self-host.md), accessed 16 November 2026. Vendor page; Enterprise and Government prices not published.
- [Langfuse, Self-host Langfuse](https://langfuse.com/docs/self-hosting), accessed 16 November 2026. Vendor documentation.
- [Langfuse, Evaluation overview](https://langfuse.com/docs/evaluation/overview.md) and [LLM-as-a-Judge](https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge), accessed 16 November 2026. Vendor documentation.
- [Langfuse, OpenTelemetry languages guide](https://langfuse.com/resources/engineering/opentelemetry-languages.md), accessed 16 November 2026. Vendor documentation.
- [Langfuse, Repository licence](https://raw.githubusercontent.com/langfuse/langfuse/main/LICENSE), accessed 16 November 2026. Primary licence text.
- [ClickHouse, ClickHouse welcomes Langfuse](https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability), 16 January 2026. Acquirer's announcement; commitments are statements of intent.
- [LangChain, Pricing](https://www.langchain.com/pricing), accessed 16 November 2026. Vendor pricing page; per-trace and extended retention rates not stated.
- [LangChain, Self-hosted LangSmith](https://docs.langchain.com/langsmith/self-hosted), accessed 16 November 2026. Vendor documentation.
- [LangChain, LangSmith evaluation concepts](https://docs.langchain.com/langsmith/evaluation-concepts), accessed 16 November 2026. Vendor documentation.
- [LangChain, Trace with OpenTelemetry](https://docs.langchain.com/langsmith/trace-with-opentelemetry), accessed 16 November 2026. Vendor documentation.
- [LangChain, LangSmith SDK licence](https://raw.githubusercontent.com/langchain-ai/langsmith-sdk/main/LICENSE), accessed 16 November 2026. Primary licence text.

## Related research

- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [LLM Observability Pricing Compared (2026)](https://lowob.com/research/llm-observability-pricing-compared/)
- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)
- [OpenTelemetry GenAI Semantic Conventions Explained](https://lowob.com/research/opentelemetry-genai-semantic-conventions-explained/)
- [What Is Model Drift?](https://lowob.com/research/what-is-model-drift/)

## Next move

Count your users, monthly traces and average steps per trace, then price both tools on those three numbers. Ask LangChain for its per-trace rate and Langfuse for self-hosted Enterprise terms if you need them, in writing.

[Start a conversation](https://lowob.com/contact/)
