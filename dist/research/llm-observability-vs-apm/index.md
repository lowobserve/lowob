# LLM Observability vs Application Monitoring

Source: https://lowob.com/research/llm-observability-vs-apm/
Publisher: lowob (https://lowob.com)
Published: 2026-10-21 · Updated: 2026-11-17
Function: Strategy

> Summary: Application performance monitoring tracks latency, traffic, errors and saturation. LLM observability adds what those signals miss: prompts, retrieved context, tool calls, token cost and output quality. OpenTelemetry now defines conventions for both, so most firms should extend one telemetry pipeline rather than run two stacks.

Application performance monitoring (APM) tells you whether a service is available, fast and free of errors. LLM observability tells you what a model or agent was given, what it did, what it cost and whether the result was any good. A model call can return in under a second with a success code and still be wrong, so APM alone cannot see the failures that matter most in AI systems.

*Figure: The Build Order, end to end. This piece maps the whole route.*

## What each one measures

APM grew up around web services. Its core question is whether requests are served well. Google's *Site Reliability Engineering* book puts it simply: "If you can only measure four metrics of your user-facing system, focus on these four." Latency is the time to serve a request. Traffic is demand on the system. Errors are failed requests. Saturation is how full the service is. Traces show where time goes across services.

LLM observability starts from the same plumbing and adds a different question: was the output right, and why did the system produce it? That needs data APM tools were not built to hold. It needs the prompt and system instructions, the documents retrieved, each tool call and its result, token counts, model version, and a quality score attached afterwards.

|  | Application monitoring (APM) | LLM observability |
| --- | --- | --- |
| Core question | Is the service up and fast? | Was the answer or action right, and at what cost? |
| Unit of analysis | Request, endpoint, host | Prompt, model call, agent run, tool call |
| Main signals | Latency, traffic, errors, saturation | Tokens, cost, retrieved context, tool calls, quality scores |
| Definition of failure | Error code, timeout, resource limit | Wrong, ungrounded or unsafe output, often with a success code |
| Who reads it | Engineering and SRE | Engineering, plus the owners of the business process |
| Typical content stored | Metadata and logs | Metadata, plus prompts and outputs if opted in |
| Standard | OpenTelemetry traces, metrics, logs | OpenTelemetry GenAI conventions, at Development stability |

## Where the two overlap

The good news for a mid-size firm is that the plumbing is converging. OpenTelemetry, the open standard for traces, metrics and logs, now defines generative AI conventions. They cover inference spans named after the operation and model, an `invoke\_agent` span for an agent run, and an `execute\_tool` span for each tool call. Standard attributes include input and output token counts. Two metrics, token usage and operation duration, sit alongside ordinary service metrics, and token usage can be priced to give cost per run.

Two cautions apply. First, the GenAI conventions are at Development stability and moved to their own repository in June 2026, so pin the instrumentation version you use. Second, content is opt-in. The conventions keep prompts and outputs out of span attributes and in a separate event, because that content often holds personal data. Many teams capture full content in testing and metadata only in production, or redact before data leaves their systems.

## What APM cannot see

A support agent that answers a refund question from an out-of-date policy will show normal latency and no errors. So will a sales assistant that drafts an email quoting the wrong price. Neither is a service failure; both are judgment failures. Catching them takes evaluation on top of telemetry: sampled human review, rule checks and model-graded scoring. Zheng and colleagues found GPT-4 as a judge agreed with human preferences over 80% of the time, about the rate humans agree with each other. They also documented position, verbosity and self-enhancement biases, so model graders need human spot checks.

## Which to choose

Most firms already run some APM. The decision is how far to extend it.

| Situation | What to use |
| --- | --- |
| One model call inside an existing app, internal users only | Existing APM with GenAI spans and token metrics |
| Customer-facing answers, or retrieval over company documents | Add an LLM observability or evaluation tool with content capture and scoring |
| Agents that call tools or write to systems | LLM observability with full agent traces, plus a decision record |
| Regulated outputs: advice, pricing, credit, claims | All of the above, with retention rules and named reviewers |

For the tools themselves, see the [Top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/).

## The **lowob** view

**lowob** places observability across two steps of the brain loop (store, wiring, record, reasoning and learning). Traces describe the reasoning step: what the model saw and did. They are not the record. A trace says an agent drafted a discount at 15%. The record says who approved it, why, and what outcome was expected. The learning step joins the two when the deal closes or does not.

Keep traces for engineers and short retention. Keep the record for the business and long retention. Write outcomes back to the record so quality scores reflect real results, not only a grader's opinion.

## lowob takeaways

- **APM sees service health.** Latency, traffic, errors and saturation, but not whether an answer was right.
- **LLM observability sees the run.** Prompts, context, tool calls, tokens and quality scores.
- **Extend one pipeline.** OpenTelemetry's GenAI conventions let both share the same plumbing.
- **Traces are not the record.** Decisions, approvals and outcomes belong in a record the business owns.

## Common questions

### What is the difference between LLM observability and APM?

APM tracks whether a service is available and fast through latency, traffic, errors and saturation. LLM observability tracks what a model was given and did, its token cost, and the quality of its output.

### Can Datadog or another APM tool monitor LLMs?

Some APM tools now offer LLM features, and OpenTelemetry's GenAI spans give them a common format. Check whether a tool captures prompts, retrieved context and tool calls, and whether it supports quality scoring.

### Do I need to log prompts and responses?

For quality review, usually yes, at least on a sample. OpenTelemetry makes content capture opt-in because it often holds personal data, so set redaction and retention rules first.

## Sources and notes

- [Google, Site Reliability Engineering, chapter 6: Monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/), Rob Ewaschuk. Primary practitioner text; predates LLM workloads.
- [Dash0, OpenTelemetry GenAI semantic conventions explained](https://www.dash0.com/knowledge/opentelemetry-genai-semantic-conventions-explained), updated 15 September 2026. Vendor explainer of the specification; conventions may change.
- [OpenTelemetry, Semantic conventions for generative AI repository](https://github.com/open-telemetry/semantic-conventions-genai), accessed November 2026. Primary specification source; no tagged release at time of writing.
- [Zheng et al., Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685), arXiv, June 2023. Academic study; agreement figures are for chat preference tasks, not business outputs.

## Related research

- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)
- [What Is an AI Audit Trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [Langfuse vs LangSmith: Which LLM Observability Tool to Choose](https://lowob.com/research/langfuse-vs-langsmith/)

## Next move

Pick the one AI feature your customers see and check whether you can pull a single run's prompt, retrieved context, output and cost today. If you cannot, add GenAI spans to your existing telemetry before buying anything new.

[Start a conversation](https://lowob.com/contact/)
