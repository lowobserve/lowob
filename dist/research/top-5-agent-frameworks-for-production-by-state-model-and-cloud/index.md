# Top 5 agent frameworks for production, by state model and cloud

Source: https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/
Publisher: lowob (https://lowob.com)
Published: 2026-10-19 · Updated: 2026-11-16
Function: Strategy

> Summary: Framework choice in 2026 is mostly a cloud and vendor decision, not a technical one. The serious options all connect to tools through the same protocol, MCP, so what separates them for a regulated team is narrower: whether a run can pause at a named step for a person, resume after a crash without losing state, and run on more than one model. On those tests LangGraph ranks first, followed by Microsoft Agent Framework, the Claude Agent SDK, Google's Agent Development Kit and the OpenAI Agents SDK.

*Figure: Five plug points: identity and limits, context in, precedent in, the gate, and the outcome written back.*

## Key points

- This list is for teams moving an agent from prototype to production in a firm that will be asked to show what the agent did. For a demo, almost any framework will do.
- LangGraph ranks first because its checkpointer saves graph state at every step, so a run can recover from a failure and pause for human input at any node.
- Microsoft Agent Framework 1.0 shipped on 3 April 2026, merging Semantic Kernel and AutoGen, with checkpoints at the end of every workflow superstep.
- The Claude Agent SDK runs only Claude models, but on four routes: Anthropic's API, Amazon Bedrock, Google Cloud and Microsoft Foundry.
- Kill a run halfway, test a logged approval step and swap the model before you sign anything.

A framework is the code that runs an agent's loop: it calls the model, executes the tools the model chooses, keeps state between steps and decides when to stop. Our explainer on [what an agent framework is](https://lowob.com/research/what-is-an-agent-framework/) covers the category. This list is narrower. It ranks five frameworks on what a supervisor, an auditor or an incident review will ask of a production agent, and it leaves the prototyping questions aside.

## How we ranked

| Criterion | Weight | Why it matters |
| --- | --- | --- |
| State and checkpointing | 30% | An agent that cannot resume after a failure, or pause at a named step for approval, cannot be supervised. |
| Human-approval gates | 25% | Supervisors now expect a review step that leaves evidence of who approved what. |
| Model and cloud neutrality | 25% | Locking orchestration to one model vendor is the hardest dependency to unwind later. |
| Cost transparency | 20% | Multi-agent patterns multiply model calls quietly. |

Tool connection is not on the list because it no longer separates the field. The Model Context Protocol is the shared standard for connecting agents to tools and data, covered in our explainer on [what MCP is](https://lowob.com/research/what-is-the-model-context-protocol/). Microsoft restated MCP support in its 1.0 release, and Anthropic lists MCP as a built-in SDK capability. Agent-to-agent traffic has its own standard, A2A, which shipped its first stable specification in March 2026 and became a hosted project of the Agentic AI Foundation on 17 August 2026, with more than 150 supporting organisations. Our comparison of [MCP and A2A](https://lowob.com/research/mcp-vs-a2a/) explains how the two fit together.

## The list

**1. LangGraph**

**Best for:** teams that need durable, inspectable workflows across models.

**Why it ranks first:** it models an agent as a graph of steps with a checkpointer underneath. LangChain's documentation describes checkpointers as persisting "a thread's graph state as checkpoints", and lists the jobs that depend on them: resuming after an interruption, recovering from a failure, human-in-the-loop workflows and time travel through past states. Pausing is explicit. Calling `interrupt()` inside a node suspends execution, saves the state and waits as long as needed; the run resumes when the same thread ID is invoked with a resume value. That maps directly onto what a supervisor will ask for: show me the step, show me the state, show me who released it.

**Watch out for:** more design work up front than role-based frameworks. The documentation also notes a detail that matters for side effects: on resume, the paused node restarts from its beginning, so any code before the `interrupt()` call runs again. Anything consequential before an interrupt needs to be idempotent. The commercial tracing and hosting product, LangSmith, is a separate purchase decision.

**Pricing:** the framework is open source. LangSmith's Developer plan is free for one seat and 5,000 base traces a month; Plus is $39 per seat per month with 10,000 base traces and one small serverless agent server included; Enterprise is custom, with self-hosted and hybrid options (as listed in November 2026). Hosted agent servers are metered in LangSmith units of $1.00, charged on compute and memory time.

**What would change its rank:** another framework matching its checkpointing with less engineering.

**2. Microsoft Agent Framework**

**Best for:** firms standardised on Azure and Microsoft 365.

**Why it ranks here:** version 1.0 reached general availability on 3 April 2026 with "stable APIs, and a commitment to long-term support", unifying Semantic Kernel and AutoGen. Its workflow checkpoints capture the state of every executor, pending messages, pending requests and responses, and shared state, and are written at the end of each superstep. A checkpoint can be restored into the same run or rehydrated into a new workflow instance, and Cosmos DB storage is the documented production option. It is also more model-neutral than its parentage suggests: the 1.0 release lists first-party connectors for Microsoft Foundry, Azure OpenAI, OpenAI, Anthropic Claude, Amazon Bedrock, Google Gemini and Ollama.

**Watch out for:** the cost of conversational multi-agent patterns. A group chat of four agents running five rounds is at least 20 model calls before any tool is used. At 1.0, Microsoft said A2A 1.0 support was "coming soon". Its own documentation also warns that checkpoint storage is a trust boundary: never load a checkpoint from a source that could have been tampered with.

**Pricing:** no framework fee is listed; you pay for the models and the Azure services you run it on.

**What would change its rank:** evidence of production use outside the Microsoft stack.

**3. Claude Agent SDK**

**Best for:** teams building on Claude that want the deepest support for the shared tool protocol.

**Why it ranks here:** the SDK gives developers the same tools, agent loop and context management that power Claude Code, in Python and TypeScript. MCP, permissions that decide which tools run automatically and which need approval, lifecycle hooks, subagents and resumable sessions are all built in rather than added through adapters. Anthropic's feature table shows the SDK running on every route it supports: Anthropic's own API, Amazon Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform and Microsoft Foundry. That makes it more cloud-portable than it first appears.

**Watch out for:** it runs Claude models only, so it fails the model-neutrality test by design. Some features differ by provider; web search, for example, is not available through Amazon Bedrock. Use is governed by Anthropic's Commercial Terms of Service.

**Pricing:** you pay for Claude model usage on whichever provider you choose.

**What would change its rank:** support for other model providers.

**4. Google Agent Development Kit (ADK)**

**Best for:** teams on Google Cloud that need agents to talk to other agents.

**Why it ranks here:** native support for A2A. ADK can expose an agent as an A2A server, and its `RemoteA2aAgent` client lets a local agent call a remote one as if it were a tool. Google's documentation is specific about when to use it: A2A for a separate service, an agent maintained by another team or one written in another language, and local sub-agents for internal code organisation or anything that needs shared memory. ADK is open source and available in Python, TypeScript, Go and Java.

**Watch out for:** the documented production routes are Google's own: Runtime, Cloud Run and Google Kubernetes Engine. If your firm does not run on Google Cloud, budget for the deployment work yourself.

**Pricing:** the framework is open source; you pay for models and Google Cloud hosting.

**What would change its rank:** easier, documented deployment outside Google Cloud.

**5. OpenAI Agents SDK**

**Best for:** simple, handoff-based agents on OpenAI models.

**Why it ranks here:** a clean handoff model that is quick to learn and widely documented. Its human-in-the-loop support is better than its reputation: a tool can be marked `needs\_approval`, the run pauses with a list of pending interruptions, and the run state can be serialised to a database and resumed later, even in another process. Sessions keep conversation history across runs, with backends from SQLite and Redis to SQLAlchemy, MongoDB and Dapr.

**Watch out for:** pausing for approval is built in; checkpointing every step of a long workflow and recovering mid-run after a crash are largely yours to build. OpenAI's own guidance says approval "doesn't guarantee exactly-once execution", and tells developers to use idempotency keys for consequential actions and to reconcile outcomes before retrying after a crash.

**Pricing:** the SDK is free to use; you pay for model calls.

**What would change its rank:** native durable state at the step level.

## Side by side

|  | LangGraph | Microsoft Agent Framework | Claude Agent SDK | Google ADK | OpenAI Agents SDK |
| --- | --- | --- | --- | --- | --- |
| State model | Graph state saved by a checkpointer per thread | Workflow checkpoint at the end of each superstep | Sessions that can resume or fork | Not covered in the pages we reviewed | Sessions for history; serialisable run state |
| Resume after a crash | Yes, from the last checkpoint | Yes, same run or rehydrated instance | Session resume | Not covered in the pages we reviewed | Approval pauses only; mid-run recovery is yours |
| Human approval | `interrupt()` at any node | Pending requests captured in checkpoints | Permission rules per tool | Not covered in the pages we reviewed | `needs\_approval` per tool |
| Models | Any | Seven first-party connectors, including Claude and Gemini | Claude only | Not covered in the pages we reviewed | OpenAI first; third-party adapters listed |
| Clouds | Any; LangSmith for hosting | Azure first; Cosmos DB for production checkpoints | Anthropic, AWS, Google Cloud, Microsoft Foundry | Google Cloud routes documented | Any |
| A2A | Not covered in the pages we reviewed | "Coming soon" at 1.0 | Not covered in the pages we reviewed | Native | Not covered in the pages we reviewed |
| Paid layer, as listed in November 2026 | LangSmith Plus $39 per seat per month | None listed | Model usage | Model and hosting | Model usage |

"Not covered in the pages we reviewed" means what it says. It is not a claim that the feature is missing, only that we could not confirm it on the vendor's own pages this month.

> The question for a regulated team is not which framework is cleverest. It is which one can show you the step, the state and the person who released it.

## Left out, and why

**CrewAI.** Role-based and quick to prototype with. Conversational role patterns tend to add model calls, and we did not find documentation that would place it above the five on checkpointing or logged approval. It is a reasonable choice for a demo and a harder one to defend in front of a supervisor.

**Writing your own.** Large firms with unusual workflows sometimes build a custom orchestrator that runs workflows defined in configuration. It is defensible at that scale, where the firm already runs a platform team. At most firms it is a maintenance bill, and it rebuilds checkpointing and approval logging that the frameworks above already ship. Our [build versus buy guide](https://lowob.com/research/build-vs-buy-ai-agents/) sets out the test.

## How to test any of them before you choose

Run three tests on a workflow you actually intend to ship, not on the vendor's sample.

1. **Kill the process halfway through a run.** Restart it. Does it resume from the last completed step, and can you open the saved state and read it? Check whether any tool call before the failure runs twice.
2. **Put a named step behind a person.** Make the agent wait before it sends, pays or changes a record. Confirm the approval is logged with who approved, when and what they saw. Our explainer on [approval gates](https://lowob.com/research/what-is-an-approval-gate/) lists what that log should hold.
3. **Swap the model.** Change providers and count the lines of code that change. If the answer is "the whole agent", you have chosen a model vendor, not a framework.

Add a fourth test if cost matters, which it does: run the same task in a single-agent and a multi-agent pattern and compare the number of model calls. The difference is usually larger than the team expects. An observability tool makes this visible; our [ranking of LLM observability platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/) covers the options.

## lowob takeaways

- **Rank on state, not features.** LangGraph leads because a checkpointer saves state at every step and `interrupt()` can pause any node for a person.
- **Microsoft is more neutral than it looks.** Agent Framework 1.0 ships connectors for seven model providers, including Claude and Gemini.
- **The Claude Agent SDK trades model choice for depth.** Claude only, but on four clouds, with MCP and approval permissions built in.
- **Approval is not durability.** The OpenAI SDK pauses for approval well; crash recovery mid-run is still your job.

Gateway card

### Buyer's checklist for an agent framework

- A run killed halfway resumes from the last step, and the saved state is readable
- Code before a pause or a crash does not repeat a consequential action
- At least one named step waits for a person, with who, when and what they saw logged
- Swapping the model changes configuration, not the agent
- Checkpoint storage is access-controlled and treated as a trust boundary
- Model calls per task are measured in both single-agent and multi-agent patterns

## Common questions

### What is the best AI agent framework for production in a regulated industry?

LangGraph ranks first on this list, because its checkpointer saves state at every step, so runs can recover from failures and pause for human approval at any node. Microsoft Agent Framework is the stronger fit for firms standardised on Azure.

### Does the OpenAI Agents SDK support human-in-the-loop and state persistence?

Partly. Tools can require approval, a paused run's state can be saved to a database and resumed later, and sessions keep conversation history. Checkpointing every step of a long workflow and recovering mid-run after a crash are largely yours to build.

### Can the Claude Agent SDK use models other than Claude?

No. It runs Claude models only, but it can reach them through Anthropic's API, Amazon Bedrock, Google Cloud's Agent Platform or Microsoft Foundry, so it is portable across clouds even though it is tied to one model family.

### How do I test an agent framework before choosing it?

Kill the process mid-run and check it resumes with readable state, make a named step wait for a logged human approval, and count how much code changes when you swap the model.

## Sources and notes

- [LangChain documentation, LangGraph durable execution and persistence](https://docs.langchain.com/oss/python/langgraph/durable-execution), accessed November 2026. Vendor documentation.
- [LangChain documentation, LangGraph interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts), accessed November 2026. Vendor documentation.
- [LangChain, LangSmith pricing](https://www.langchain.com/pricing-langsmith), as listed in November 2026. Vendor pricing page; overage rates not shown on the page.
- [Visual Studio Magazine, Microsoft ships production-ready Agent Framework 1.0 for .NET and Python](https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx), 6 April 2026. Trade press reporting a vendor release.
- [Microsoft Learn, Agent Framework checkpointing and resuming](https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/checkpointing-and-resuming), accessed November 2026. Vendor documentation.
- [Anthropic, Agent SDK overview](https://code.claude.com/docs/en/agent-sdk.md), accessed November 2026. Vendor documentation.
- [Anthropic, Claude Code feature availability by provider](https://code.claude.com/docs/en/feature-availability.md), accessed November 2026. Vendor documentation; provider differences change often.
- [Google, ADK with the Agent2Agent protocol](https://adk.dev/a2a/intro/), accessed November 2026. Vendor documentation.
- [Google Cloud, Overview of Agent Development Kit](https://docs.cloud.google.com/agent-builder/agent-development-kit/overview), accessed November 2026. Vendor documentation.
- [OpenAI Agents SDK, Human-in-the-loop](https://openai.github.io/openai-agents-python/human_in_the_loop/), accessed November 2026. Vendor documentation.
- [OpenAI Agents SDK, Sessions](https://openai.github.io/openai-agents-python/sessions/), accessed November 2026. Vendor documentation.
- [Agentic AI Foundation, A2A joins AAIF](https://aaif.io/blog/a2a-joins-aaif?hsLang=en), 17 August 2026. Foundation announcement; supporter count is the foundation's own.
- [Axios, Google-backed agentic A2A protocol gets a new home](https://axios.com/2026/08/17/a2a-agentic-ai-foundation-open-ai-standards), 17 August 2026. Independent press report.
- The ranking criteria, weights and tests are **lowob**'s framework.

## Related research

- [What is an agent framework?](https://lowob.com/research/what-is-an-agent-framework/)
- [What is the Model Context Protocol (MCP)?](https://lowob.com/research/what-is-the-model-context-protocol/)
- [MCP vs A2A](https://lowob.com/research/mcp-vs-a2a/)
- [What is an approval gate for AI agents?](https://lowob.com/research/what-is-an-approval-gate/)
- [Top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)

## Next Move

Pick the one workflow you intend to ship first and run the kill test on your top two frameworks this week: stop each run halfway, restart it, and write down whether it resumed, what state you could read and whether any action ran twice.

[Start a conversation](https://lowob.com/contact/)
