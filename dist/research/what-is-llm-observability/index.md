# What Is LLM Observability?

Source: https://lowob.com/research/what-is-llm-observability/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: LLM observability extends application monitoring to systems whose outputs vary from run to run. It rests on traces of each request, cost and latency data, and evaluations of quality. OpenTelemetry is standardising the format, but the conventions are still in development.

LLM observability is the practice of recording what an AI application did on every run, including the prompts, model responses, tool and retrieval steps, tokens, cost, latency and quality scores, so a team can see why it behaved as it did. Ordinary monitoring tells you a service is up. Observability for LLMs tells you whether the answer was right, what it cost and which step went wrong.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What LLM observability means

Langfuse defines observability as the ability to monitor and understand the internal states of an LLM application. The difference from conventional software is that outputs vary. A test can confirm that a function returns the right number; it cannot confirm in advance that an agent's follow-up email is accurate. Observability replaces some of that certainty with evidence gathered from real runs.

It has three layers.

| Layer | What it records | Question it answers |
| --- | --- | --- |
| Traces | Each run as a tree of steps: model calls, retrievals, tool calls, sub-agents | What happened, in what order? |
| Metrics | Tokens, cost, latency and error rates per model, agent or task | What did it cost and how fast was it? |
| Evaluations | Scores on outputs from automated judges, reviewers or users | Was the output any good? |

## How it works

**Traces.** Instrumentation wraps each step of a run. OpenTelemetry's GenAI conventions, now maintained in their own repository, name an inference span after the operation and model, for example "chat gpt-4". They require the operation name and provider, and recommend recording input and output token counts. Agent runs appear as invoke\_agent spans and tool calls as execute\_tool spans, so a multi-step agent becomes a readable tree.

**Content capture.** The conventions keep prompts and completions out of span attributes and make content capture opt-in. That matters for a commercial team: a trace of a sales agent may contain client names, pricing and email text. Decide what is retained, for how long and who can read it before turning capture on.

**Evaluations.** Langfuse lists model-based evaluations, user feedback and manual labelling as the main methods. The model-based approach, often called LLM-as-a-judge, was studied by Zheng and colleagues in 2023. Strong judges matched human preferences over 80% of the time, about the level at which humans agree with each other. The same paper documents position, verbosity and self-enhancement biases, so automated scores need periodic checks against human review.

**Security.** The UK NCSC recommends logging LLM inputs and outputs and tool or API calls in enough detail to spot suspicious activity. The trace that helps an engineer debug is the same one that helps a security team investigate a prompt injection.

> A trace tells you what the agent did. A decision record tells you why the business let it.

## What to evaluate before choosing a tool

The category includes open-source tools such as Langfuse, vendor platforms from model and framework providers, and LLM features added to existing application monitoring suites. The differences that matter to a business buyer are rarely the dashboards.

| Question | Why it matters |
| --- | --- |
| Does it accept OpenTelemetry data? | Avoids rewriting instrumentation if you change vendor |
| Can it trace agents and tools, not only model calls? | Errors can start in retrieval or tool steps, not only the model |
| How is prompt and output content stored and redacted? | Traces may hold client and personal data |
| Can it be self-hosted or kept in-region? | Matters for regulated firms and data residency |
| Does it support human review queues and scores? | Links evaluation to the approval gate |
| Can cost be split by agent, task and team? | Spend caps need per-agent numbers |

Observability is wiring, not the record. In **lowob**'s model it sits alongside the context layer: rent it, but keep decisions, approvals and outcomes in a record the business owns, so that changing tools does not erase the history.

## lowob takeaways

- **Trace every step.** Model calls alone miss errors that start in retrieval and tool steps.
- **Treat content as sensitive.** Decide what prompts and outputs are retained before capture is switched on.
- **Check the judges.** Automated scores are useful and biased; sample them against human review.
- **Prefer open formats.** OpenTelemetry support keeps the traces portable as tools change.

## Sources and notes

- [Langfuse, LLM observability FAQ](https://langfuse.com/faq/all/llm-observability.md), vendor documentation. Open-source vendor; definitions reflect its product.
- [Dash0, OpenTelemetry GenAI semantic conventions explained](https://www.dash0.com/knowledge/opentelemetry-genai-semantic-conventions-explained), September 2026. Vendor explainer of the OpenTelemetry specification.
- [Zheng et al., Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685), arXiv, June 2023. Academic study; agreement figures are for chat preference tasks.
- [UK National Cyber Security Centre, Prompt injection is not SQL injection (it may be worse)](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection), 8 December 2025. Government guidance on logging LLM inputs, outputs and tool calls.

## Related research

- [Top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/)

## Next move

Pick one live AI workflow and ask for the trace of its last bad output. If nobody can produce it within an hour, instrument that workflow before adding another.

[Start a conversation](https://lowob.com/contact/)
