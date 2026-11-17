# LLM Observability Pricing Compared (2026)

Source: https://lowob.com/research/llm-observability-pricing-compared/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: LLM observability platforms bill in different units: tracing units, seats and traces, spans and gigabytes, scores, or model-call spans. This comparison sets out list prices, included usage, overage and retention for five platforms as listed on 16 November 2026, prices a small-team workload, and lists the costs that do not appear on pricing pages.

LLM observability tools bill in five different units: Langfuse by tracing unit, LangSmith by seat and trace, Arize by span and gigabyte, Braintrust by gigabyte and score, and Datadog by model call, with first paid plans from $29 to $249 a month in November 2026. The unit matters more than the headline price.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

These are list prices for the five platforms in our ranking of the [top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/), read on each vendor's page on 16 November 2026, in US dollars a month. For the general logic of usage pricing, see [seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/).

## How much does LLM observability cost in 2026?

Small workloads often fit a free tier; production workloads cost from a few hundred to several thousand dollars a month at list price.

The spread at volume comes from the billing unit. Per-span billing charges for every step of an agent run; per-model-call billing ignores tool and retrieval steps; per-gigabyte billing charges for prompt and output size; per-seat billing charges for people.

## How do LLM observability pricing models compare?

The table sets out the published terms for each platform as of 16 November 2026. "Not stated" means the pricing page did not publish the figure.

| Platform | Free tier | First paid plan | Billing unit | Included in paid plan | Overage | Retention at list price | Self-hosting |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Langfuse | Hobby: 50,000 units, 2 users | Core $29; Pro $199; Enterprise $2,499 | Unit: a trace, observation or score | 100,000 units; unlimited users | $8 per 100,000 to 1 million, then $7, $6.50 and $6 at volume | 30 days Hobby; 90 days Core; 3 years Pro and Enterprise | Open source free; Enterprise custom |
| LangSmith | Developer: 1 seat, 5,000 base traces | Plus $39 per seat | Seat plus trace | 10,000 base traces | Pay as you go; rate not stated | 14 days base; 180 days extended, fee not stated | Enterprise add-on |
| Arize AX | Free: 25,000 spans, 1 GB | Pro $50 | Span plus GB | 50,000 spans; 10 GB | $0.0008 per span; $3 per GB | 15 days Free; 30 days Pro | Enterprise only |
| Braintrust | Starter: 1 GB, 10,000 scores | Pro $249 | GB processed plus score | 5 GB; 50,000 scores; unlimited users | $3 per GB; $1.50 per 1,000 scores | 14 days Starter; 30 days Pro, extendable at $0.50 per GB a month | Enterprise only |
| Datadog | Free: up to 40,000 LLM spans | Pro $160 | LLM span: one call to a model provider | Up to 100,000 LLM spans | On-demand; rate not stated | 15 days; add-ons to 30, 60 or 90 days | Not offered |

Three details change real bills. Datadog's page says tool, workflow, agent, embedding and retrieval spans are not billed, only model calls. Braintrust's Starter and Pro plans include $10 and $100 of model credits a month. Langfuse's Pro plan needs a Teams add-on at $300 a month for SSO and project-level access control, bringing it to $499.

## What does LLM observability cost for a small team?

Often nothing, or under $120 a month, at list price; the difference is retention and users.

The example is illustrative. A team of three runs an agent 8,000 times a month. Each run produces one trace with 10 spans, of which 3 are model calls, plus one quality score and about 20 KB of data. The per-run assumptions match our pillar's production example.

| Platform and plan | Billed quantity | Monthly list cost | Retention |
| --- | --- | --- | --- |
| Langfuse Core | 96,000 units (trace, 10 observations, 1 score per run) | $29 | 90 days |
| LangSmith Plus | 8,000 traces, within 10,000; 3 seats | $117 | 14 days |
| Arize AX Pro | 80,000 spans: 30,000 over at $0.0008 | $74 | 30 days |
| Braintrust Starter | 0.16 GB and 8,000 scores, within free limits | $0 | 14 days |
| Datadog Free | 24,000 LLM spans, within 40,000 | $0 | 15 days |

Langfuse Hobby (50,000 units, 2 users) and LangSmith Developer (1 seat, 5,000 traces) do not fit. The two free options that do keep data for two weeks, which suits debugging but not a review cycle.

> At small volume the price is in the retention column. At large volume it is in the billing unit.

## What does LLM observability cost at production volume?

At 600,000 agent runs a month, published list prices range from about $705 to $4,810, and two vendors need a quote. These figures come from the worked example in our [top 5 ranking](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/), using November 2026 list prices and the same per-run assumptions as above.

In that example, Langfuse Pro came to $705 with 3-year retention, Braintrust Pro to $1,095, and Arize AX Pro to $4,810 before any data charge, which is why a team at that volume would move to Arize's custom Enterprise pricing. LangSmith Plus and Datadog Pro could not be priced, because neither publishes the overage rate needed.

## Which LLM observability costs are not on the pricing page?

Judge-model calls, add-ons, longer retention and self-hosting infrastructure, each of which can exceed the platform fee.

- **Judge model tokens.** Automated scoring runs extra model calls. Langfuse's documentation, read on 16 November 2026, estimates a typical evaluation at $0.01 to $0.10 per assessment. Our explainer on [LLM-as-a-judge](https://lowob.com/research/llm-as-a-judge-explained/) covers why most teams score a sample.
- **Security and access add-ons.** Langfuse's Teams add-on is $300 a month on Pro. LangSmith lists custom SSO and role-based access on Enterprise.
- **Retention.** Datadog bills retention add-ons per 10,000 LLM spans, and LangSmith's extended-retention fee is not stated. Braintrust charges $0.50 per GB a month beyond 30 days on Pro.
- **Self-hosting.** Langfuse's self-hosting documentation lists PostgreSQL, ClickHouse, Redis or Valkey and blob storage; LangSmith's lists a similar stack on Kubernetes. Your infrastructure and staff time replace the licence fee.
- **Exit.** A product that closes can take your history with it, so test an OpenTelemetry export, as our explainer on the [GenAI conventions](https://lowob.com/research/opentelemetry-genai-semantic-conventions-explained/) describes.

## How do you compare LLM observability quotes fairly?

Price your own workload in each vendor's unit, at the retention you need. Measure a week of real runs, convert it to each vendor's unit with published overage, add the retention your review cycle needs and the judge-model cost for the runs you will score, and ask in writing for any rate the page does not state.

## lowob takeaways

- **The unit decides the bill.** Units, seats, spans, gigabytes and model calls give different answers for the same agent.
- **Free tiers buy two weeks.** Retention on the free options that fit a small team was 14 or 15 days.
- **Some rates need a quote.** LangSmith and Datadog did not publish the overage rates needed at volume.
- **Budget beyond the platform.** Judge calls, add-ons and retention can exceed the plan fee.

## Common questions

### How much does LLM observability cost?

As listed on 16 November 2026, paid entry plans range from $29 a month (Langfuse Core) to $249 (Braintrust Pro), with LangSmith at $39 per seat, Arize AX Pro at $50 and Datadog Pro at $160. Free tiers cover small workloads. At 600,000 agent runs a month, published list prices range from about $705 to $4,810.

### What is the cheapest LLM observability tool?

For small workloads, the free tiers of Braintrust and Datadog can cost nothing, with 14- and 15-day retention. Self-hosting Langfuse's open-source edition has no licence fee but needs your own infrastructure. At 600,000 runs a month, Langfuse Pro had the lowest calculable list price in our November 2026 example, at about $705.

### How is LLM observability priced?

By different units. Langfuse bills tracing units, counting each trace, observation and score. LangSmith bills seats plus traces. Arize bills spans plus gigabytes. Braintrust bills gigabytes processed plus scores. Datadog bills LLM spans, meaning calls to a model provider only. Convert your own workload into each unit before comparing.

### Does LLM observability pricing include evaluation costs?

Usually only partly. Platforms may charge for storing scores, as Braintrust does above 50,000 a month on Pro, but the model calls that produce automated scores are billed by your model provider or as credits. Langfuse estimated a typical judge call at $0.01 to $0.10 per assessment in November 2026.

## Sources and notes

- [Langfuse, Pricing](https://langfuse.com/pricing.md), accessed 16 November 2026. Vendor pricing page.
- [Langfuse, Self-host Langfuse](https://langfuse.com/docs/self-hosting), accessed 16 November 2026. Vendor documentation.
- [Langfuse, LLM-as-a-Judge](https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge), accessed 16 November 2026. Vendor documentation; cost range is the vendor's estimate.
- [LangChain, Pricing](https://www.langchain.com/pricing), accessed 16 November 2026. Vendor pricing page; per-trace and extended retention rates not stated.
- [LangChain, Self-hosted LangSmith](https://docs.langchain.com/langsmith/self-hosted), accessed 16 November 2026. Vendor documentation.
- [Arize, AX pricing and usage](https://arize.com/docs/ax/get-started/pricing-and-usage), accessed 16 November 2026. Vendor documentation.
- [Braintrust, Pricing](https://braintrust.dev/pricing), accessed 16 November 2026. Vendor pricing page.
- [Datadog, Agent Observability](https://datadoghq.com/product/llm-observability), accessed 16 November 2026. Vendor product page; on-demand and add-on rates not stated.
- The small-team example and its volumes are **lowob**'s assumptions. The production figures are from **lowob**'s worked example in the top 5 ranking, calculated on the same pages.

## Related research

- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [Langfuse vs LangSmith: Which LLM Observability Tool to Choose](https://lowob.com/research/langfuse-vs-langsmith/)
- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [LLM-as-a-Judge Explained: When Model Graders Work and When They Fail](https://lowob.com/research/llm-as-a-judge-explained/)
- [What Is Model Drift?](https://lowob.com/research/what-is-model-drift/)

## Next move

Export last week's traces and count runs, spans, model calls, scores, gigabytes and users. Price that workload on your two shortlisted platforms at the retention your review cycle needs, and send each vendor the rates you could not find.

[Start a conversation](https://lowob.com/contact/)
