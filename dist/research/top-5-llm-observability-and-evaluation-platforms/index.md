# Top 5 LLM observability and evaluation platforms

Source: https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/
Publisher: lowob (https://lowob.com)
Published: 2026-10-20 · Updated: 2026-11-16
Function: Strategy

> Summary: The top five LLM observability and evaluation platforms, ranked for regulated teams, are Langfuse, LangSmith, Arize, Braintrust and Datadog. The deciding questions are whether you can self-host, whether it supports OpenTelemetry so you are not locked in, and whether human review is logged alongside traces. This guide compares them side by side, prices them at production volume and sets out where the OpenTelemetry standard stands.

The top five LLM observability and evaluation platforms for regulated teams are Langfuse, LangSmith, Arize, Braintrust and Datadog, in that order. For a regulated firm the deciding questions are whether you can host it yourself, whether it speaks the OpenTelemetry standard so you are not locked in, and whether human review is logged alongside the traces. The category consolidated hard in 2026: Humanloop is gone, Helicone is in maintenance mode and Galileo is now part of Cisco. Skip this list if you only need basic logs for a prototype.

This list is for teams that need to trace what their agents did, evaluate quality and show a supervisor the record. If the terms are new, start with [what LLM observability is](https://lowob.com/research/what-is-llm-observability/) and [how it differs from application monitoring](https://lowob.com/research/llm-observability-vs-apm/). The reason regulated firms care is the record itself: an [AI audit trail](https://lowob.com/research/what-is-an-ai-audit-trail/) has to show what the system saw, what it did and who approved it.

## How we ranked

| Criterion | Weight | Why it matters |
| --- | --- | --- |
| Self-hosting and data control | 30% | Many regulated firms cannot send prompts and outputs to a third-party cloud. |
| Open standards | 25% | OpenTelemetry support means your traces outlive your vendor. |
| Agent tracing and human review | 25% | The trace a supervisor needs includes tool calls and who approved what. |
| Price at production volume | 20% | Free tiers are small; real usage is where the bills differ. |

Every vendor fact and price below was checked on the vendor's own pages in November 2026. Prices are monthly list prices in US dollars. The ranks are unchanged from our October edition; where a fact has changed, we say so.

## The list

### 1. Langfuse

**Best for:** regulated teams that must self-host.

**Why it ranks first:** the core product is open source under the MIT licence and free to self-host "without any limitations", using Docker Compose or Kubernetes. Cloud plans run in US, EU or Japan regions. It accepts OpenTelemetry traces over HTTP at `/api/public/otel`, and spans carrying `gen\_ai.\*` attributes become generations with model, token and cost fields. ClickHouse acquired Langfuse on 16 January 2026 and said it "remains 100% open-source under its existing MIT license for core features" and that for self-hosted deployments "nothing changes". Fintechs Ramp and Trade Republic appear among the testimonials on its enterprise page.

**Watch out for:** roadmap risk after the acquisition. SOC 2 Type II and ISO 27001 certify Langfuse Cloud, not your self-hosted copy. Audit logs, project-level access control and data retention management are paid Self-Hosted Enterprise features. Air-gapped deployment is listed under a separate Government edition, and Langfuse's enterprise FAQ says full air-gapped documentation is still in development.

**Pricing (November 2026):** Hobby free with 50,000 units; Core $29, Pro $199 and Enterprise $2,499 a month, each with 100,000 units. Overage is graduated per 100,000 units: $8 up to 1 million, $7 to 10 million, $6.50 to 50 million and $6 above. A unit is any tracing data point: a trace, an observation or a score. Self-hosted Enterprise is custom-priced.

**What would change its rank:** any move away from the open-source core.

### 2. LangSmith

**Best for:** teams building on LangChain or LangGraph.

**Why it ranks here:** deep integration with LangChain's frameworks, an OTLP endpoint at `/otel` that maps `gen\_ai.\*` attributes to LangSmith fields, and annotation queues for human feedback. Its documentation also shows how to send the same OpenTelemetry traces to other backends through a collector, which is the portability test in practice.

**Watch out for:** self-hosted and hybrid deployment are listed only on Enterprise. Base traces are kept for 14 days; extended traces are kept for 180 days at an extra fee that the pricing page does not state. Hosted data is stored in Google Cloud's us-central-1 region. The pull towards the LangChain ecosystem is real.

**Pricing (November 2026):** Developer free for one seat with 5,000 base traces; Plus $39 per seat a month with 10,000 base traces, then pay as you go; Enterprise custom, invoiced annually.

**What would change its rank:** self-hosting below the Enterprise tier.

### 3. Arize (Phoenix and AX)

**Best for:** teams that want a free tool to start and an enterprise product to grow into.

**Why it ranks here:** Phoenix is free to self-host, and from version 15.10.0 (May 2026) converts OpenTelemetry GenAI attributes to Arize's OpenInference format on arrival, including tool calls. On 11 August 2026 Arize AX added native ingestion of `gen\_ai.\*` spans, keeping the original attributes on each span.

**Watch out for:** the Pro tier covers 50,000 spans a month with 30-day retention, so production use means Enterprise pricing. Self-hosting AX is Enterprise only. Human-review logging was the least documented of the five in the pages we checked.

**Pricing (November 2026):** AX Free with 25,000 spans and 15-day retention; Pro $50 a month; Enterprise custom. Listed overage is $0.0008 per span and $3 per GB.

**What would change its rank:** clearer human-review features.

### 4. Braintrust

**Best for:** teams whose main problem is evaluation, not monitoring.

**Why it ranks here:** built around experiments, scoring and human review, with unlimited users, playgrounds and experiments on every plan, configurable human review scores, OTLP ingestion at `api.braintrust.dev/otel/v1/traces` and SOC 2 Type II.

**Watch out for:** no open-source edition is listed, on-premises deployment is an Enterprise option, and a HIPAA business associate agreement is Enterprise only. We found no named regulated financial customers on the pages we checked. In October we cited a reported funding round and named customers; we could not reconfirm them on a primary source for this edition and have removed them.

**Pricing (November 2026):** Starter free; Pro $249 a month with 5 GB of processed data ($3 per GB after) and 50,000 scores ($1.50 per 1,000 after); Enterprise custom. Pro retention is 30 days, extendable to 180 days at $0.50 per GB a month.

**What would change its rank:** a regulated reference customer.

### 5. Datadog LLM Observability

**Best for:** firms already running Datadog for everything else.

**Why it ranks here:** tracing across "prompts, retrieval steps, tool calls, and agent decisions", evaluations, annotations and human review, and OpenTelemetry ingestion, inside the monitoring tool many operations teams already use. Datadog now markets the product as Agent Observability.

**Watch out for:** SaaS only; the local tracing option is for development, not a self-hosted backend. Default retention is 15 days, with paid add-ons to 30, 60 or 90.

**Pricing (November 2026):** Free up to 40,000 LLM spans; Pro $160 a month for up to 100,000 LLM spans, where an LLM span is one call to a model provider. On-demand use above that is billed at a rate the page does not state. In October we could not confirm pricing at all; it is now published, which narrows but does not remove this watch-out.

**What would change its rank:** a self-hosted option, or a published overage rate.

## Side by side

|  | Langfuse | LangSmith | Arize | Braintrust | Datadog |
| --- | --- | --- | --- | --- | --- |
| Self-hosting | Yes, free (MIT core); paid Enterprise adds audit logs and retention controls | Enterprise only (self-hosted, hybrid, BYOC) | Phoenix free; AX on Enterprise | Enterprise only | No |
| OpenTelemetry | OTLP over HTTP; maps `gen\_ai.\*` | OTLP; maps `gen\_ai.\*`; documents fan-out export | Native `gen\_ai.\*` in AX (Aug 2026) and Phoenix (May 2026) | OTLP endpoint; GenAI mapping not named on page | Accepts OpenTelemetry |
| Agent and tool tracing | Yes | Yes | Yes | Yes | Yes |
| Human review logging | Scores on traces and observations | Annotation queues | Least documented | Human review scores | Annotations and human review |
| Retention at list price | 30 days (Hobby) to 3 years (Pro, Enterprise) | 14 days base, 180 days extended | 15 to 30 days; configurable on Enterprise | 14 to 30 days; up to 180 paid | 15 days; add-ons to 90 |
| Pricing model | Platform fee plus graduated per-unit | Per seat plus per trace | Tier plus per span and per GB | Platform fee plus per GB and per score | Tier per LLM span |

> A trace that expires after 14 days is a debugging aid. A supervisor's record has to outlast the review cycle.

## Where the OpenTelemetry GenAI standard stands

The case for OpenTelemetry is that your traces outlive your vendor. The status of the standard tempers that case without undoing it.

Every `gen\_ai.\*` span, metric and attribute is at Development status, the first of three levels before Release Candidate and Stable. Dash0's guide, updated in September 2026, notes that only three attributes on a GenAI span are stable, all inherited from the core conventions, and that GenAI attributes can be renamed between releases. On 12 June 2026, in version 1.42.0, the GenAI conventions moved out of the core repository into a separate `semantic-conventions-genai` repository, which covers spans, metrics and events for GenAI clients, MCP and provider-specific conventions. That repository has no tagged release and lists its schema URL as "TODO".

The conventions already define agent operations such as `invoke\_agent` and `execute\_tool`, and an agent calling a tool over MCP emits the same `execute\_tool` shape as a direct call. Vendors are converging on them in different ways. Arize maps them into its own OpenInference schema and keeps the originals; LangSmith maps them and flags some as deprecated; Langfuse turns them into generations.

| What the status means | Practical step |
| --- | --- |
| Attribute names can change without a deprecation window | Pin the instrumentation library version and record which schema it targets |
| Vendors map `gen\_ai.\*` into their own schemas | Ask whether the original attributes are kept on export |
| No stable release yet | Treat OTLP export as the exit route, and test it before you need it |
| Agent and MCP spans are defined but not stable | Check that tool calls and agent steps survive a round trip to a second backend |

Our explainer on [AI evals](https://lowob.com/research/what-are-ai-evals/) covers what the scores attached to these traces should measure.

## What it costs at volume: a worked example

The example is illustrative. A team runs an agent 20,000 times a day, or 600,000 runs in a 30-day month. Each run produces one trace with 10 spans, of which 3 are model calls, plus one quality score. Each run carries about 20 KB of prompt and output data. The calculation uses each vendor's mid-tier plan at November 2026 list prices.

| Vendor and plan | Billed quantity | Calculation | Monthly list cost | Retention |
| --- | --- | --- | --- | --- |
| Langfuse Pro | 7.2 million units (trace, 10 observations and a score per run) | $199 + 9 × $8 (to 1 million) + 62 × $7 (to 7.2 million) | $705 | 3 years |
| Braintrust Pro | 12 GB processed; 600,000 scores | $249 + 7 GB × $3 + 550 × $1.50 | $1,095 | 30 days |
| Arize AX Pro | 6 million spans | $50 + 5.95 million × $0.0008, before any GB charge | $4,810 | 30 days |
| LangSmith Plus | 600,000 traces, plus seats at $39 | Per-trace rate not stated on the pricing page | Ask for a quote | 14 days |
| Datadog Pro | 1.8 million LLM spans | $160 covers 100,000; on-demand rate not stated | Ask for a quote | 15 days |

Three things follow. The cheapest list price here also comes with the longest retention, which supports Langfuse's rank. The billing unit drives the answer as much as the rate: Braintrust charges by data and scores, so the same workload with 100 KB per run would add about $144 in data, while scoring every run is the largest line. And at this volume Arize Pro is no longer the right plan; the figure shows why a team would move to Enterprise pricing. Self-hosting Langfuse or Phoenix replaces the licence fee with your own infrastructure and staff cost, which this table does not price.

## Gone, folded in, or left out

**Humanloop.** Its changelog announced "Humanloop joins Anthropic" and the platform was sunset on 8 September 2025, after which its data became permanently inaccessible.

**Helicone.** Acquired by Mintlify, announced 3 March 2026. Helicone says its services "will remain live for the foreseeable future in maintenance mode", with security fixes and new models still shipping, and Mintlify is helping customers migrate.

**Galileo.** Cisco has completed its acquisition, and Splunk now sells it as "Galileo, now Splunk Agent Observability".

**W&B Weave.** Now part of CoreWeave, a GPU cloud; its roadmap may follow that business.

**PromptLayer.** Strong on prompt management, narrower on full observability.

Analysts are catching up. Gartner published its first *Market Guide for AI Evaluation and Observability Platforms* on 2 February 2026, and, as quoted by Comet, predicted that 60% of software engineering teams will adopt such platforms by 2028, up from 18% in 2025. The Humanloop case is the strongest argument for the export test below: a vendor that closes can take three years of records with it.

## Buyer's checklist

Three questions for any vendor. Can we run it entirely inside our own environment, and what features do we lose? If we leave, can we export every trace in OpenTelemetry format? Show us one agent run with its tool calls and the human approval, on one screen.

The checklist below turns those questions into a test you can run in a two-week trial. Our pieces on [governance and audit trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/) and on [reviewer minutes per useful decision](https://lowob.com/research/reviewer-minutes-per-useful-decision/) cover what happens to the record after it leaves the observability layer.

## lowob takeaways

- **Langfuse ranks first for regulated teams that must self-host.** Check which controls, such as audit logs, sit in the paid self-hosted edition.
- **Self-hosting is an Enterprise line item everywhere else.** Datadog does not offer it.
- **OpenTelemetry is the exit route, not yet a guarantee.** The GenAI conventions are at Development status; pin versions and test export.
- **Price the workload, not the plan.** Units, spans, traces and gigabytes give very different bills for the same agent.
- **Retention is a compliance question.** Fourteen days suits debugging; a supervisor needs the review cycle covered.

Gateway card

### Before you sign an observability contract

- A self-hosted or in-region deployment option, with the list of features it lacks
- An OTLP export of a full agent run, re-imported into a second backend, with tool calls intact
- One agent run showing tool calls and the human approval on one screen
- Retention at your plan level that covers your review and audit cycle
- A monthly cost calculated on your own runs, spans and data volume, including overage
- A written answer on data residency, certifications for the deployment you will use, and what happens to your data if the product is sold or closed

## Sources and notes

- [Langfuse, Pricing](https://langfuse.com/pricing.md), accessed 16 November 2026. Vendor pricing page.
- [Langfuse, Self-hosted pricing](https://langfuse.com/pricing-self-host.md), accessed 16 November 2026. Vendor page; Enterprise and Government prices not published.
- [Langfuse, Enterprise](https://langfuse.com/enterprise.md), accessed 16 November 2026. Vendor page; customer testimonials are vendor-selected.
- [Langfuse, OpenTelemetry languages guide](https://langfuse.com/resources/engineering/opentelemetry-languages.md), accessed 16 November 2026. Vendor documentation.
- [ClickHouse, ClickHouse welcomes Langfuse](https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability), 16 January 2026. Acquirer's announcement; commitments are statements of intent.
- [LangChain, Pricing](https://www.langchain.com/pricing), accessed 16 November 2026. Vendor pricing page; per-trace rates not stated.
- [LangChain, Trace with OpenTelemetry](https://docs.langchain.com/langsmith/trace-with-opentelemetry), accessed 16 November 2026. Vendor documentation.
- [LangChain, LangSmith observability](https://www.langchain.com/langsmith/observability), accessed 16 November 2026. Vendor product page.
- [Arize, AX pricing and usage](https://arize.com/docs/ax/get-started/pricing-and-usage), accessed 16 November 2026. Vendor documentation; overage rates not clearly assigned to a plan.
- [Arize, Arize AX adds native support for OpenTelemetry GenAI semantic conventions](https://arize.com/blog/arize-ax-opentelemetry-genai-semantic-conventions/), 11 August 2026. Vendor announcement.
- [Arize, Phoenix release note: OTel semconv conversion](https://arize.com/docs/phoenix/release-notes/05-2026/05-15-2026-otel-semconv-conversion.md), 15 May 2026. Vendor release note.
- [Braintrust, Pricing](https://braintrust.dev/pricing), accessed 16 November 2026. Vendor pricing page; plan coverage of SOC 2 not clear.
- [Braintrust, OpenTelemetry integration](https://braintrust.dev/docs/integrations/sdk-integrations/opentelemetry), accessed 16 November 2026. Vendor documentation.
- [Datadog, Agent Observability](https://datadoghq.com/product/llm-observability), accessed 16 November 2026. Vendor product page; on-demand and add-on rates not stated.
- [OpenTelemetry, semantic-conventions-genai repository](https://github.com/open-telemetry/semantic-conventions-genai), accessed 16 November 2026. Primary standards repository; no tagged release.
- [Dash0, OpenTelemetry GenAI semantic conventions explained](https://www.dash0.com/knowledge/opentelemetry-genai-semantic-conventions-explained), updated September 2026. Observability vendor's guide; source for the stability detail and the 12 June 2026 move.
- [Humanloop, Changelog](https://humanloop.com/docs/changelog), 13 August 2025. Vendor sunset notice.
- [Helicone, Helicone joins Mintlify](https://helicone.ai/blog/joining-mintlify), 3 March 2026. Vendor announcement.
- [Splunk, Galileo acquisition](https://www.splunk.com/en_us/about-splunk/acquisitions/galileo.html), accessed 16 November 2026. Acquirer's page; closing date not stated.
- [Comet, Comet recognized in 2026 Gartner Market Guide](https://www.comet.com/site/blog/gartner-market-guide-february2026/), February 2026. Vendor blog quoting Gartner; we did not open the Gartner report itself.
- The ranking weights, side-by-side table, worked example and checklist are **lowob**'s analysis. The example's volumes and data sizes are assumptions.

## Related research

- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)
- [LLM Observability vs Application Monitoring](https://lowob.com/research/llm-observability-vs-apm/)
- [What Is an AI Audit Trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [Top 5 AI governance and audit trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)

## Next move

Take one week of your own agent runs and count traces, spans, model calls, scores and gigabytes. Price that workload on your two shortlisted vendors at list price, then ask each to export one full run in OpenTelemetry format and load it into the other.

[Start a conversation](https://lowob.com/contact/)
