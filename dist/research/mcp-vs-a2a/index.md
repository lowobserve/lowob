# MCP vs A2A: How the Two Agent Protocols Fit Together

Source: https://lowob.com/research/mcp-vs-a2a/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: The Model Context Protocol (MCP) is a standard for connecting an AI application to tools and data, such as a CRM search or a document store. The Agent2Agent protocol (A2A) is a standard for one agent to hand a task to another agent, often from a different vendor, and follow its progress. MCP is how an agent uses a tool; A2A is how an agent delegates work. Most multi-agent systems will use both, and neither keeps the record of who decided what.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- The A2A specification puts the split in one line: MCP standardises how an agent uses a tool or resource; A2A standardises how one agent delegates work to another.
- MCP uses JSON-RPC 2.0 between hosts, clients and servers; servers offer resources, prompts and tools.
- A2A agents advertise themselves in a JSON Agent Card and exchange tasks with a defined lifecycle; version 1.0 has nine task states.
- Google launched A2A on 9 April 2025 as a complement to MCP; the Agentic AI Foundation reports that A2A joined it in August 2026, alongside MCP.

## What the two protocols do

Our explainers on the [Model Context Protocol](https://lowob.com/research/what-is-the-model-context-protocol/) and the [Agent2Agent protocol](https://lowob.com/research/what-is-the-agent2agent-protocol/) cover each in full.

**MCP connects a model to capabilities.** The current specification, dated 28 July 2026, describes three roles that exchange JSON-RPC 2.0 messages. Hosts are the AI applications, clients are the connectors inside them, and servers are services that provide context and capabilities. Servers offer resources (data), prompts (templates) and tools ("functions for the AI model to execute"). The model reads a tool's description and decides when to call it: [function calling](https://lowob.com/research/what-is-function-calling/), standardised across vendors.

**A2A connects an agent to another agent.** Google's April 2025 launch post describes a client agent that formulates a task and a remote agent that acts on it. Agents advertise what they can do in an Agent Card in JSON. A task has a lifecycle and its output is an "artifact". Agents collaborate without sharing memory, tools or context, so the remote agent stays opaque: the caller sees the task and the result, not the internals.

|  | MCP | A2A |
| --- | --- | --- |
| Connects | An AI application to tools and data | One agent to another agent |
| The other side is | A server exposing defined functions | An agent that plans its own work |
| What the caller sees | Tool names, inputs and outputs | An Agent Card, task status and artifacts |
| Unit of work | A tool call, usually short | A task, which may run for hours |
| Discovery | The client lists a server's tools | The client reads an Agent Card |
| Waiting on a person | Elicitation: a server asks the user for input | Task states such as input required and auth required |
| Transport | JSON-RPC 2.0 | JSON-RPC, gRPC or HTTP with JSON bindings |
| Origin and governance | Anthropic, November 2024; Agentic AI Foundation since December 2025 | Google, April 2025; Agentic AI Foundation since August 2026 |
| Main risk | Tool poisoning, over-broad credentials | Delegation that blurs accountability |

## How they fit together

The two work at different layers of one system. A worked example, illustrative only: an internal renewal agent prepares a proposal. It uses MCP to read the account from the CRM and the contract from the document store. It then uses A2A to ask a finance platform's agent for a payment-risk view, and that agent uses its own MCP servers to reach the billing data. The renewal agent receives an artifact, never the billing system.

The Agentic AI Foundation's builder's guide to A2A 1.0 notes that one server can do both, and an A2A agent may call MCP servers to do its work.

The boundary is blurring. MCP now has an optional Tasks extension for "asynchronous execution of long-running operations", which overlaps with what A2A tasks do. The useful test for a buyer is what sits on the other side. If it is a function with predictable behaviour, it is a tool, and MCP fits. If it is a system that plans its own steps and may ask for more input, it is an agent, and A2A fits.

Governance has converged. Anthropic donated MCP to the Agentic AI Foundation, a directed fund under the Linux Foundation co-founded with Block and OpenAI, in December 2025. At that point Anthropic reported more than 10,000 active public MCP servers. The foundation's blog reports that A2A moved into it on 17 August 2026, after version 1.0 froze in March. Both protocols are now vendor-neutral, which lowers lock-in risk.

## Which to ask about, and when

Most firms of 20 to 500 people will meet both inside products rather than build on them, so the questions are for procurement.

| Situation | Protocol that matters | Question to ask the vendor |
| --- | --- | --- |
| Your assistant needs to read your CRM or drive | MCP | Is there an official server, scoped to read-only? |
| An assistant should create tasks or notes | MCP | Which tools write, and does the host ask for consent before each call? |
| A vendor's agent will take work from your agents | A2A | Does it publish an Agent Card, and what authentication does it require? |
| Your agent will delegate to a vendor's agent | A2A | Under whose permissions does the delegated task run? |
| A task crosses several agents | Both | Is every tool call and every delegated task logged with its result? |
| Anything reaches a client | Both | Can the final step return a draft for a person to approve? |

The MCP specification is direct about where responsibility sits. It says hosts must obtain explicit user consent before invoking any tool, that tool descriptions "should be considered untrusted" unless they come from a trusted server, and that MCP "cannot enforce these security principles at the protocol level." With A2A, tracing an error across two vendors' agents means joining two sets of logs. Ask for [agent identity](https://lowob.com/research/what-is-agent-identity/) and an [audit trail](https://lowob.com/research/what-is-an-ai-audit-trail/) on both sides before connecting them.

## The **lowob** view

In **lowob**'s enterprise brain loop of store, wiring, record, reasoning and learning, both protocols are wiring. MCP wires reasoning to the store. A2A wires one reasoning unit to another. Both are open and neutrally governed: rent them.

Neither protocol carries the record. An A2A artifact says what a remote agent produced, not why a discount was approved or who owned the decision. An MCP tool call says what was written, not what outcome was expected. That record lives outside the agents, in a store the firm owns, so the learning stage can compare expectation with result.

Start with MCP, read-only, on one system. Add A2A only when there is a real task to hand to another vendor's agent. See [MCP vs API integrations](https://lowob.com/research/mcp-vs-api-integrations/) for what MCP changes beneath the agent.

## lowob takeaways

- **MCP is for tools, A2A is for agents.** One reaches functions and data; the other hands off whole tasks.
- **They are designed to stack.** A delegated agent often uses MCP to do the work it was given.
- **Both are now neutral infrastructure.** The Agentic AI Foundation hosts both, which reduces lock-in.
- **Neither keeps the record.** Log every tool call and delegated task, and keep decisions in a store you own.

## Common questions

### What is the difference between MCP and A2A?

MCP standardises how an AI application connects to tools and data. A2A standardises how one agent delegates a task to another agent and receives status updates and results.

### Are MCP and A2A competitors?

No. Google launched A2A as a complement to MCP, and both are now hosted by the Agentic AI Foundation under the Linux Foundation. Many systems use both.

### Do I need A2A if I already use MCP?

Only if your agents must hand whole tasks to agents on other platforms. To connect one assistant to your systems, MCP is enough.

### Who governs MCP and A2A?

Both are projects of the Agentic AI Foundation, a directed fund under the Linux Foundation. MCP joined in December 2025 and A2A in August 2026.

## Sources and notes

- [Model Context Protocol, Specification, version 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28), July 2026. Official protocol specification.
- [Google for Developers, Announcing the Agent2Agent Protocol (A2A)](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/), 9 April 2025. Vendor launch post; describes the protocol at launch, before version 1.0.
- [Agentic AI Foundation, A2A v1.0: a builder's guide, part 1](https://aaif.io/blog/a2a-v1-0-a-builder-s-guide-part-1-discovery-tasks-and-clients), 27 August 2026. Foundation blog by an individual contributor; source of the governance move and task states.
- [Anthropic, Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), 9 December 2025. Vendor announcement; usage figures are self-reported.
- The renewal example and vendor questions are **lowob**'s working method; the example is illustrative.

## Related research

- [What Is the Model Context Protocol (MCP)?](https://lowob.com/research/what-is-the-model-context-protocol/)
- [What Is the Agent2Agent (A2A) Protocol?](https://lowob.com/research/what-is-the-agent2agent-protocol/)
- [What Is a Multi-Agent System?](https://lowob.com/research/what-is-a-multi-agent-system/)
- [The Permission Problem: When Commercial Context Leaks](https://lowob.com/research/the-permission-problem-when-commercial-context-leaks/)

## Next Move

For each AI product your team uses, note whether it supports MCP, A2A or neither, and which systems it can write to. Any product that can write but cannot show a log of its calls goes to the top of the review list.

[Start a conversation](https://lowob.com/contact/)
