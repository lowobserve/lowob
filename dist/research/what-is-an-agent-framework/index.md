# What Is an Agent Framework?

Source: https://lowob.com/research/what-is-an-agent-framework/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: An agent framework is software that runs agent loops for you. It calls the model, executes the tools the model asks for, keeps state between steps, pauses for a person's approval and records what happened. LangGraph, the OpenAI Agents SDK, Microsoft Agent Framework and Google's Agent Development Kit are the best-known options. Choose one on how it handles state, approvals and tracing rather than on demos, and keep your instructions, tests and decision record outside it.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- LangGraph describes itself as "a low-level orchestration framework and runtime for building, managing, and deploying long-running, stateful agents", and names Klarna, Uber and J.P. Morgan as users.
- The OpenAI Agents SDK has three core primitives (agents, handoffs and guardrails) and is described as a production-ready upgrade of OpenAI's earlier Swarm experiment.
- Microsoft announced Agent Framework on 1 October 2025, combining AutoGen and Semantic Kernel; version 1.0 followed in April 2026, and AutoGen now receives only bug fixes and security patches.
- Google's Agent Development Kit is open source and available in Python, TypeScript, Go and Java.
- Frameworks are cheap to switch if tools sit behind a standard such as MCP and the record lives elsewhere.

## What an agent framework means

Without a framework, a team writes the [agent loop](https://lowob.com/research/what-is-an-agent-loop/) by hand: send the prompt, parse any tool call, run the tool, append the result, handle errors, retry, enforce a turn limit, save state, and log every step. A framework packages that work. Our glossary's definition is short: software that runs agent loops, manages state and pauses for approval.

It helps to place a framework among the other layers an agent depends on.

| Layer | What it does | Examples |
| --- | --- | --- |
| Model | Reads context and decides the next step | Claude, GPT, Gemini |
| Protocol | Standard way to reach tools or other agents | MCP for tools, A2A for agent-to-agent |
| Framework | Runs the loop, state, approvals, tracing | LangGraph, OpenAI Agents SDK, Microsoft Agent Framework, Google ADK, Claude Agent SDK |
| Hosting | Runs agents at scale | Azure AI Foundry, Google Cloud Run, a team's own servers |
| Record | What was decided, why, by whom, and with what result | Yours to keep |

A framework is not a model and not an agent. It is the harness one or more agents run in.

## What frameworks provide

The main options converge on a similar feature list, with different emphasis.

**State and durable execution.** LangGraph lists durable execution as a core capability, so agents "persist through failures and can run for extended periods". For commercial work this matters when a run must wait days for an approval and then resume where it stopped.

**Human in the loop.** LangGraph lets people inspect and modify agent state mid-run. The OpenAI Agents SDK lists built-in mechanisms for involving humans during runs. This is where autonomy levels are enforced in code.

**Guardrails.** OpenAI's SDK treats input and output validation as a primitive. A guardrail can block a draft that quotes a price outside policy before anyone sees it.

**Tracing.** OpenAI's SDK has built-in tracing; Microsoft says it contributed to OpenTelemetry, an open observability standard, so agent traces can flow into existing monitoring tools.

**Multi-agent patterns.** Microsoft's 1.0 release supports sequential, concurrent, handoff and group-chat orchestration. Google's ADK supports fixed "workflow agents" alongside model-led routing. Many commercial tasks need none of these at first.

**Open standards.** Microsoft names MCP, A2A and OpenAPI support. Standard tool interfaces are what keep a framework replaceable.

## Why it matters for a commercial team

Most mid-size firms do not need to choose a framework first. An assistant with connectors covers answering and drafting, levels 0 and 1 on **lowob**'s dial. A framework becomes necessary when a firm builds its own agent that acts on systems: updating CRM records, routing approvals, or running overnight jobs at level 3.

The framework is wiring for the reasoning layer. Rent it. What should not live inside it are the things that carry a firm's judgment: the instructions, the precedents, the evaluation cases and the decision record. If those sit in plain files and databases you control, moving from one framework to another is an engineering task, not a loss of history. We compare five production options in [Top 5 agent frameworks for production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/).

## What to check before choosing

| Question | Why it matters | What good looks like |
| --- | --- | --- |
| Can a run pause for approval and resume days later? | Commercial approvals are slow | Checkpointed state that survives restarts |
| Can it stop before a named action? | Enforces the autonomy level | Per-tool approval or blocking hooks |
| Is every step traced and exportable? | Audit and debugging | Standard trace format, exportable logs |
| Does it support several model providers? | Avoids lock-in to one model | Documented support for more than one |
| Are tools connected through MCP or OpenAPI? | Keeps tools reusable | Standard interfaces, not custom glue |
| Is there a long-term support commitment? | Frameworks are young and change | Stable release with stated support |

## lowob takeaways

- **A framework runs the loop.** It handles state, tools, approvals and tracing.
- **Most firms need one later than they think.** Assistants with connectors cover answering and drafting.
- **Choose on state and approvals.** Demos show the happy path; pauses and resumes show the product.
- **Keep judgment outside it.** Instructions, precedents, tests and records stay yours.

## Common questions

### What are AI agent frameworks?

Software libraries that handle the repeated work of running an AI agent: calling the model, executing tools, keeping state, pausing for approval and logging each step. Examples include LangGraph, the OpenAI Agents SDK, Microsoft Agent Framework and Google ADK.

### Do I need an agent framework to use AI agents?

Not to start. Assistants with connectors cover answering and drafting. A framework matters when you build your own agent that acts on systems or runs unattended.

### What replaced AutoGen?

Microsoft Agent Framework, announced in October 2025 and released as 1.0 in April 2026, is the successor for new work. AutoGen now receives bug fixes and security patches only.

## Sources and notes

- [LangChain, LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview), accessed November 2026. Vendor documentation; named customers are self-reported.
- [OpenAI, Agents SDK documentation](https://openai.github.io/openai-agents-python/), accessed November 2026. Vendor documentation.
- [Microsoft, Introducing Microsoft Agent Framework](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/), 1 October 2025. Vendor announcement.
- [Visual Studio Magazine, Microsoft ships production-ready Agent Framework 1.0 for .NET and Python](https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx), 6 April 2026. Trade press reporting a vendor release.
- [Google Cloud, Overview of Agent Development Kit](https://docs.cloud.google.com/agent-builder/agent-development-kit/overview), accessed November 2026. Vendor documentation.

## Related research

- [Top 5 agent frameworks for production, by state, model and cloud](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/)
- [What Is AI Orchestration?](https://lowob.com/research/what-is-ai-orchestration/)
- [Build vs Buy AI Agents: A Decision Guide for Mid-Size Firms](https://lowob.com/research/build-vs-buy-ai-agents/)
- [Buy Context, Own Judgment: What to Build at Each Size](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)

## Next Move

Before anyone picks a framework, write down the first agent's task, its autonomy level and the one action it must never take without approval. Ask each candidate framework to show that pause working.

[Start a conversation](https://lowob.com/contact/)
