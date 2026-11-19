# AI Agent Monitoring Checklist: What to Watch in Production

Source: https://lowob.com/research/ai-agent-monitoring-checklist/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: Monitoring an AI agent in production means watching what it did, what it cost, whether the output was any good and whether anything suspicious happened. This checklist sets out 16 items across six areas, maps each to OpenTelemetry signals where they exist, and cites the NCSC and OWASP guidance on logging and agent risks.

An AI agent monitoring checklist covers what to watch once an agent is live: every run's trace and tool calls, cost and token spend, latency, error and loop rates, sampled quality scores, human approvals and overrides, and security signals such as failed tool calls. The 16 checks below fit on one page. Most can be built from OpenTelemetry's GenAI signals, which were still at Development status on 16 November 2026.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

This checklist assumes you already trace your agents. If not, start with [what LLM observability is](https://lowob.com/research/what-is-llm-observability/), and for the tools that collect these signals see our ranking of the [top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/).

## What should you monitor on an AI agent in production?

Monitor six areas: the trace of each run, cost, performance, output quality, human oversight and security. Uptime alone is not enough, because an agent can return quickly with a success code and still do the wrong thing.

Agents add three risks that a chatbot does not have. They take actions through tools, so a wrong step changes a system of record. They loop, so one confused run can make dozens of model calls. They act under an identity, so a permission mistake has reach. The checklist is built around those three.

## The AI agent monitoring checklist

The table is the full checklist. Each item names the signal to use, with the OpenTelemetry name where the GenAI conventions define one, as read in the repository on 16 November 2026.

| # | Area | What to watch | Signal | Alert or review when |
| --- | --- | --- | --- | --- |
| 1 | Trace | Every run recorded as one trace with agent, model and tool steps | `invoke\_agent`, inference and `execute\_tool` spans | Any run lacks a trace, or tool steps are missing |
| 2 | Trace | Prompt and output content captured under a written policy | Content capture setting, default `NO\_CONTENT` | Content is captured without a retention rule |
| 3 | Trace | Model and prompt version on every run | `gen\_ai.request.model`, `gen\_ai.response.model`, your prompt version tag | A version changes without a release record |
| 4 | Cost | Tokens and cost per run, per agent and per team | `gen\_ai.client.inference.usage.\*` counters | Cost per completed task rises beyond an agreed band |
| 5 | Cost | Hard limits on spend, rate and run length | Quotas, rate limits, timeouts | A limit is hit, or no limit exists |
| 6 | Performance | End-to-end duration per run | `gen\_ai.invoke\_agent.duration` | The slowest runs grow week on week |
| 7 | Performance | Model and tool calls per run | `gen\_ai.invoke\_agent.inference\_calls`, `.tool\_calls` | A run exceeds its expected call count, a sign of looping |
| 8 | Performance | Errors by type, including provider errors and timeouts | `error.type` on spans | Error rate on any tool or model rises |
| 9 | Quality | Automated scores on a sample of runs | `gen\_ai.evaluation.result` events | A score falls below its release baseline |
| 10 | Quality | Human review of a sample, especially low-scored runs | Annotation queue outcomes | Reviewers and automated scores disagree |
| 11 | Quality | Regression set rerun on every change | Offline eval results | Regression pass rate drops below the near-100% target |
| 12 | Oversight | Approvals, edits and rejections at each approval gate | Approval events joined to the trace | Approval rate rises while edit rate falls, a sign of fatigue |
| 13 | Oversight | Escalations and hand-offs to people | Agent spans and your own events | Escalation rate moves sharply in either direction |
| 14 | Security | Failed and denied tool calls | `execute\_tool` spans with errors | Repeated failures or denials from one session |
| 15 | Security | Actions outside the agent's expected tools or permissions | Tool names and identity on spans | Any tool call not on the agent's allow list |
| 16 | Record | Trace and decision retention matched to your review cycle | Platform retention setting | Retention is shorter than your audit or review period |

## How do you monitor what an AI agent costs?

Track tokens per run and cost per completed task, and set hard limits so a single run cannot spend without bound. Average cost per call hides the problem; agent cost lives in the long tail of runs that loop.

OWASP's entry on Unbounded Consumption, from its 2025 Top 10 for LLM Applications, recommends rate limiting and user quotas, dynamic management of resource allocation, timeouts and throttling for heavy operations, and continuous monitoring of resource use to "detect and respond to unusual patterns". The OpenTelemetry token counters are described in the repository as a "proxy for cost approximation", separated into input, output, cache and reasoning tokens.

Check how your platform bills, too. Datadog's product page, read on 16 November 2026, defines its billing unit as "a single call to an LLM provider" and does not bill tool, workflow, agent, embedding or retrieval spans. Other vendors bill every span or every gigabyte. Our [LLM observability pricing comparison](https://lowob.com/research/llm-observability-pricing-compared/) sets out the differences.

## How do you monitor AI agent quality in production?

Score a sample of live runs automatically, send a share to people, and rerun a regression set on every change. Production has no reference answers, so online scoring looks for patterns rather than correctness against a key.

LangChain's LangSmith documentation, read in November 2026, describes online evaluation as targeting "runs and threads from tracing" without reference outputs, focused on quality, safety and anomalies. Langfuse's documentation describes the same practice as scoring "live incoming traces". Anthropic's guidance of 9 January 2026 says regression evals "should have a nearly 100% pass rate", which makes them a clear release gate.

Model graders need watching themselves. Our explainer on [LLM-as-a-judge](https://lowob.com/research/llm-as-a-judge-explained/) covers their biases; the short rule is to sample their scores against human review every month.

> The run that costs most is rarely the one that failed loudly. It is the one that looped quietly for forty steps.

## What security signals should you monitor on AI agents?

Watch failed tool calls, denied permissions and actions outside an agent's expected scope. These are where an injected instruction shows up before it does damage.

The UK NCSC's December 2025 guidance on prompt injection says teams should log "enough information to identify suspicious activity", and that "detecting and responding to failed tool calls or API calls could identify earlier stages of an attack". The trace that helps an engineer debug is the same one a security team needs.

OWASP's Top 10 for Agentic Applications, dated 9 December 2025, names the risks to map alerts against. As listed in TechRepublic's report of 19 December 2025, they include ASI01 Agent Goal Hijack, ASI02 Tool Misuse and Exploitation, ASI03 Identity and Privilege Abuse, ASI06 Memory and Context Poisoning and ASI08 Cascading Failures. Items 14 and 15 on the checklist address the second and third directly; item 7 is an early signal for the eighth. Our explainer on [agent identity](https://lowob.com/research/what-is-agent-identity/) covers the permission side.

## How long should you keep AI agent traces?

Keep them at least as long as your review or audit cycle, which is usually far longer than a platform's default. Retention is set by contract and plan, so check it before an incident rather than after.

The spread is wide at list price. LangChain's pricing page, read on 16 November 2026, keeps base traces for 14 days and extended traces for 180 days. Datadog's default for traces and spans is 15 days, with add-ons to 30, 60 or 90. Langfuse's pricing page gives 30 days on its free Hobby plan, 90 days on Core and 3 years on Pro and Enterprise. A regulated firm may also need the [AI audit trail](https://lowob.com/research/what-is-an-ai-audit-trail/) to sit outside the observability tool entirely.

## How do you monitor human approval of agent actions?

Join every approval, edit and rejection to the trace of the run it concerns, and watch the edit rate alongside the approval rate. A rising approval rate can mean the agent improved or that reviewers stopped reading.

Our analysis of why [approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/) sets out the pattern. In **lowob**'s model, the approval sits at an [approval gate](https://lowob.com/research/what-is-an-approval-gate/), and the record of who approved what, and why, belongs to the business, not to the observability vendor.

## lowob takeaways

- **Trace every run, including tools.** Missing tool steps hide the errors that matter most.
- **Cap cost per run.** Quotas, rate limits and timeouts stop loops before the invoice does.
- **Score a sample and read it.** Automated scores need regular human checks.
- **Alert on failed tool calls.** The NCSC treats them as an early sign of attack.
- **Set retention to the review cycle.** Platform defaults of 14 or 15 days rarely cover it.

## Common questions

### What should you monitor for AI agents in production?

Monitor the trace of every run with its model and tool steps, tokens and cost per run, duration and number of calls, errors by type, sampled quality scores, human approvals and edits, failed or denied tool calls, and trace retention. Set alerts on cost per task, call counts that suggest looping, and actions outside the agent's permitted tools.

### How do you detect an AI agent stuck in a loop?

Track the number of model and tool calls per run and alert when a run exceeds its expected range. OpenTelemetry's GenAI conventions define per-run metrics for inference calls and tool calls, as of November 2026. Pair the alert with a hard timeout or step limit, which OWASP recommends for resource-intensive operations.

### How long should AI agent traces be kept?

At least as long as your internal review or regulatory audit cycle. List-price defaults in November 2026 ranged from 14 days for LangSmith base traces and 15 days on Datadog to 3 years on Langfuse Pro. Where traces hold personal data, set retention and access rules before capturing content.

### What security risks should AI agent monitoring cover?

Prompt injection, tool misuse, privilege abuse, memory and context poisoning, and cascading failures, all named in OWASP's December 2025 Top 10 for Agentic Applications. The UK NCSC recommends logging enough to identify suspicious activity and watching failed tool or API calls, which can reveal the early stages of an attack.

## Sources and notes

- [UK National Cyber Security Centre, Prompt injection is not SQL injection (it may be worse)](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection), 8 December 2025. Government guidance.
- [OWASP, LLM10:2025 Unbounded Consumption](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/), accessed 16 November 2026. Industry security standard.
- [OWASP, Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications/), 9 December 2025. Industry security standard; the list itself is in the downloadable document.
- [TechRepublic, OWASP drops first AI agent risk list](https://www.techrepublic.com/article/news-owasp-ai-agent-risk-list/), 19 December 2025. Trade press; source for the ASI codes and names quoted.
- [OpenTelemetry, GenAI metrics](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-metrics.md) and [GenAI agent spans](https://raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/gen-ai-agent-spans.md), accessed 16 November 2026. Primary standard; Development status.
- [Datadog, Agent Observability](https://datadoghq.com/product/llm-observability), accessed 16 November 2026. Vendor product page.
- [LangChain, Pricing](https://www.langchain.com/pricing), accessed 16 November 2026. Vendor pricing page.
- [Langfuse, Pricing](https://langfuse.com/pricing.md), accessed 16 November 2026. Vendor pricing page.
- [Anthropic, Demystifying evals for AI agents](https://anthropic.com/engineering/demystifying-evals-for-ai-agents), 9 January 2026. Model vendor's engineering guidance.
- [LangChain, LangSmith evaluation concepts](https://docs.langchain.com/langsmith/evaluation-concepts), accessed 16 November 2026. Vendor documentation.
- The checklist, its thresholds and the mapping of OWASP risks to checklist items are **lowob**'s.

## Related research

- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)
- [OpenTelemetry GenAI Semantic Conventions Explained](https://lowob.com/research/opentelemetry-genai-semantic-conventions-explained/)
- [What Is an AI Audit Trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [Agentic AI vs Generative AI: What Changes When the Model Can Act](https://lowob.com/research/agentic-ai-vs-generative-ai/)
- [How to Evaluate an AI Agent: Tests, Metrics and Graders](https://lowob.com/research/how-to-evaluate-an-ai-agent/)

## Next move

Print the 16-item table and mark each item for your busiest agent as in place, partial or missing. Fix the missing cost limit or retention setting first; both are configuration, not engineering.

[Start a conversation](https://lowob.com/contact/)
