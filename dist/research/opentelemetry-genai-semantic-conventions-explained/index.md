# OpenTelemetry GenAI Semantic Conventions Explained

Source: https://lowob.com/research/opentelemetry-genai-semantic-conventions-explained/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: The OpenTelemetry GenAI semantic conventions are the open naming standard for traces of model calls, agent runs, tool calls, token use and evaluation scores. They moved to their own repository in June 2026 and every gen_ai attribute is still at Development status. This guide sets out what they define, how vendors use them and what to do while they change.

OpenTelemetry's GenAI semantic conventions are an open naming standard for recording model calls, agent runs, tool calls, token counts and evaluation scores as telemetry, so any compatible backend can read the same trace. As of 16 November 2026 every `gen\_ai` attribute is at Development status, and names are still changing. Use them as your exit route from a vendor, but pin the version you instrument against.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

These conventions are the reason trace portability is possible at all, which is why our ranking of the [top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/) weights OpenTelemetry support at 25%. If the wider topic is new, start with [what LLM observability is](https://lowob.com/research/what-is-llm-observability/).

## What are the OpenTelemetry GenAI semantic conventions?

They are a shared vocabulary for AI telemetry: agreed span, attribute and metric names for generative AI operations. OpenTelemetry publishes them so an agent instrumented once can send the same data to any backend that understands it.

The repository README, read on 16 November 2026, describes its scope as "spans, metrics, and events for GenAI clients, MCP (Model Context Protocol), and provider-specific conventions". Provider pages exist for Anthropic, Azure AI Inference, AWS Bedrock and OpenAI, and there are separate pages for MCP and the Agent2Agent protocol. Shared attributes such as `error.type` and `server.address` still come from the core conventions, and those are the parts marked Stable.

## What do the conventions define?

They define spans, metrics and events for an AI system, each with a fixed name pattern. The table summarises the main ones as they stood in the repository's main branch on 16 November 2026.

| Signal | Name or pattern | What it records |
| --- | --- | --- |
| Inference span | `{operation} {model}`, for example `chat` plus the model name | One model call; requires `gen\_ai.operation.name` and `gen\_ai.provider.name`; recommends input and output token counts |
| Agent span | `invoke\_agent {agent name}` or `invoke\_workflow` | One agent run, or a workflow whose control flow the application defines |
| Plan span | `plan {agent name}` | The step where an agent decides what to do before doing it |
| Tool span | `execute\_tool {tool name}` | One tool call; MCP tool calls are defined as compatible with it |
| Agent metrics | `gen\_ai.invoke\_agent.duration`, `.inference\_calls`, `.tool\_calls` | How long a run took and how many model and tool calls it made |
| Token metrics | `gen\_ai.client.inference.usage.*` counters and `gen\_ai.client.inference.operation.*` histograms | Tokens spent over time, including cache and reasoning tokens, as a proxy for cost |
| Evaluation event | `gen\_ai.evaluation.result` | A quality score attached to the span it judges, with name, value, label and explanation |

The evaluation event requires `gen\_ai.evaluation.name` and should be parented to the span being evaluated, so a grader's score and the run it scored travel together. Our explainer on [AI evals](https://lowob.com/research/what-are-ai-evals/) covers what those scores should measure.

## Are the GenAI conventions stable?

No. Every GenAI span, metric, event and attribute in the repository was marked Development on 16 November 2026. OpenTelemetry's maturity-level definitions say that at Development, configuration options "might break often" and a component "MAY be removed without prior notice".

Three dated facts set the position. The core repository's changelog for version 1.42.0 lists the move as a breaking change: all `gen\_ai.\*` attributes, metrics, events and spans there "are deprecated in this repository and have moved" to the new one. Dash0's guide, updated 15 September 2026, dates that move to 12 June 2026. The core conventions have since reached version 1.45.0, while the GenAI repository's changelog still shows only an "Unreleased" section.

The changes are real, not theoretical. In version 1.41.0 of the core conventions, token use was a single histogram, `gen\_ai.client.token.usage`, and workflows had their own "Invoke workflow span". In the GenAI repository's main branch on 16 November 2026, tokens are split into separate counters for input, output, cache reads, cache writes and reasoning, and `invoke\_workflow` is an operation name on the internal agent span. Dashboards and cost reports built on the old names would need rework.

## How do the conventions handle prompts and personal data?

Content is off by default. Capturing instructions, prompts, completions, tool arguments, tool results, retrieval queries and memory records requires an explicit opt-in.

The spans document, read on 16 November 2026, says an environment variable for this MUST be named `OTEL\_INSTRUMENTATION\_GENAI\_CAPTURE\_CONTENT`, with four values: `NO\_CONTENT` (the default), `SPAN\_ONLY`, `EVENT\_ONLY` and `SPAN\_AND\_EVENT`. An invalid value should fall back to no content. The conventions also define reference attributes, such as `gen\_ai.input.messages\_ref`, that point to content held in external storage rather than in the trace. Dash0's September 2026 guide describes an earlier example variable name, which shows how quickly these details move.

A sales or service agent's trace can hold client names, prices and email text, so set retention and access rules before switching capture on.

> The standard makes traces portable in principle. Pinning the version is what makes them portable in practice.

## How do observability vendors use the conventions?

Each vendor maps `gen\_ai.\*` spans into its own data model, so support means different things. These were the documented behaviours when we checked in November 2026.

- **Langfuse** accepts OTLP at `/api/public/otel`, and its guide says "OpenTelemetry spans carrying gen\_ai.\* attributes become generations", with model, token and cost fields.
- **LangSmith** accepts OTLP at its API URL plus `/otel`, maps `gen\_ai.usage.input\_tokens` and similar attributes to its own fields, and still reads deprecated spellings such as `gen\_ai.usage.prompt\_tokens`. It also documents sending the same spans to a second backend through an OpenTelemetry Collector.
- **Arize AX** added native ingestion on 11 August 2026, mapping attributes into its OpenInference format while it "also preserves the original gen\_ai.\* attributes on the span".

On exit, what matters is whether the original attributes survive conversion.

## What should a team do while the standard is in Development?

Instrument against the conventions now, and treat the version as a dependency you manage.

1. **Pin the instrumentation library** and record which conventions version or commit it targets.
2. **Keep attribute names in one place** in your code or collector configuration, so a rename is one change.
3. **Set content capture deliberately.** Start at `NO\_CONTENT` in production and enable content per workflow once retention rules exist.
4. **Emit evaluation results as events** on the span they judge, so scores are portable too.
5. **Test the exit.** Send one full agent run to a second backend through a collector and check that tool calls and scores arrive intact.

## lowob takeaways

- **The conventions are the portability layer.** They give model calls, agents, tools and scores shared names.
- **They are not stable.** Every `gen\_ai` item was at Development on 16 November 2026, with no tagged release.
- **Names have already changed.** Token metrics and workflow spans differ between version 1.41.0 and the current repository.
- **Content capture is opt-in.** Set retention and access rules before switching it on.

## Common questions

### What are OpenTelemetry GenAI semantic conventions?

They are OpenTelemetry's standard names for telemetry from generative AI systems: spans for model calls, agent runs, planning and tool calls, metrics for duration and tokens, and an event for evaluation scores. Instrumenting against them means any compatible backend can read the same traces, which reduces lock-in to one observability vendor.

### Are the OpenTelemetry GenAI conventions stable?

No. As of 16 November 2026, every GenAI span, metric, event and attribute is at Development status. The conventions moved to a separate repository in version 1.42.0 on 12 June 2026, and that repository had no tagged release. Pin your instrumentation version and expect attribute names to change.

### Where did the GenAI semantic conventions move to?

In version 1.42.0 of the core semantic conventions, dated 12 June 2026, the GenAI, OpenAI and MCP conventions moved to a dedicated repository, open-telemetry/semantic-conventions-genai. The core repository marks its old GenAI definitions as deprecated and points instrumentations to the new repository for the schema URL to use.

### Does OpenTelemetry record prompts and responses?

Only if you opt in. The conventions say capturing prompts, completions, tool arguments and results requires explicit configuration, and the environment variable `OTEL\_INSTRUMENTATION\_GENAI\_CAPTURE\_CONTENT` defaults to `NO\_CONTENT`. Content can also be stored externally and referenced from the trace, which helps when traces would otherwise hold personal data.

## Sources and notes

- [OpenTelemetry, semantic-conventions-genai README](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/README.md), accessed 16 November 2026. Primary standards repository; schema URL listed as "TODO".
- [OpenTelemetry, Semantic conventions for generative AI systems](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/README.md), accessed 16 November 2026. Primary; index of signals, all at Development.
- [OpenTelemetry, GenAI agent and framework spans](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-agent-spans.md), accessed 16 November 2026. Primary; main branch, subject to change.
- [OpenTelemetry, GenAI spans and content capture configuration](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-spans.md), accessed 16 November 2026. Primary; main branch.
- [OpenTelemetry, GenAI events](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-events.md) and [GenAI inference token metrics](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-token-metrics.md), accessed 16 November 2026. Primary; main branch.
- [OpenTelemetry, semantic-conventions changelog](https://raw.githubusercontent.com/open-telemetry/semantic-conventions/main/CHANGELOG.md), accessed 16 November 2026. Primary; v1.42.0 entry records the move; the changelog gives no dates.
- [OpenTelemetry, GenAI metrics at v1.41.0](https://raw.githubusercontent.com/open-telemetry/semantic-conventions/v1.41.0/docs/gen-ai/gen-ai-metrics.md), accessed 16 November 2026. Primary; earlier version used for comparison.
- [OpenTelemetry, Maturity levels](https://opentelemetry.io/docs/specs/otel/maturity-levels/index.md), accessed 16 November 2026. Primary; general definitions that govern document status.
- [Dash0, OpenTelemetry GenAI semantic conventions explained](https://www.dash0.com/knowledge/opentelemetry-genai-semantic-conventions-explained), updated 15 September 2026. Observability vendor's guide; source for the 12 June 2026 date.
- [LangChain, Trace with OpenTelemetry](https://docs.langchain.com/langsmith/trace-with-opentelemetry), accessed 16 November 2026. Vendor documentation.
- [Langfuse, OpenTelemetry languages guide](https://langfuse.com/resources/engineering/opentelemetry-languages.md), accessed 16 November 2026. Vendor documentation.
- [Arize, Arize AX adds native support for OpenTelemetry GenAI semantic conventions](https://arize.com/blog/arize-ax-opentelemetry-genai-semantic-conventions/), 11 August 2026. Vendor announcement.

## Related research

- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)
- [LLM Observability vs Application Monitoring](https://lowob.com/research/llm-observability-vs-apm/)
- [AI Agent Monitoring Checklist: What to Watch in Production](https://lowob.com/research/ai-agent-monitoring-checklist/)

## Next move

Find which OpenTelemetry instrumentation library your agents use and write down the version and the conventions commit it targets. Then export one full agent run to a second backend and check that tool calls arrive intact.

[Start a conversation](https://lowob.com/contact/)
