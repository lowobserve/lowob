# What Is the Agent2Agent (A2A) Protocol?

Source: https://lowob.com/research/what-is-the-agent2agent-protocol/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: The Agent2Agent (A2A) protocol is an open standard that lets AI agents built by different vendors find each other, hand off tasks and report progress. Google launched it in April 2025 and transferred it to the Linux Foundation two months later. Where MCP connects one agent to tools and data, A2A connects agents to other agents. For most mid-size firms it matters first as a buying criterion, not something to build on.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- Google announced A2A on 9 April 2025 with more than 50 technology partners, including Salesforce, SAP, ServiceNow, Atlassian and Workday.
- The Linux Foundation took over the project in June 2025, and in August 2026 it moved into the Agentic AI Foundation, which also hosts MCP.
- Agents publish their capabilities in a JSON "Agent Card"; other agents send them tasks and receive status updates.
- A2A is built on existing web standards: HTTP, JSON-RPC and server-sent events.
- By April 2026 over 150 organisations supported A2A, with integrations in Microsoft Azure AI Foundry, Copilot Studio and Amazon Bedrock AgentCore.

## What A2A means

As companies adopt agents from several vendors, those agents need a way to cooperate. A CRM vendor's agent, an HR platform's agent and a custom-built internal agent each see only their own system. Without a shared protocol, connecting them means custom code for every pair.

A2A defines that shared protocol. Google introduced it at Cloud Next in April 2025, describing it as a complement to Anthropic's Model Context Protocol rather than a replacement. In June 2025 Google handed it to the Linux Foundation, which launched the Agent2Agent project as "an open protocol for secure agent-to-agent communication and collaboration." Supporters named in the Linux Foundation's April 2026 update include AWS, Cisco, Google, IBM, Microsoft, Salesforce, SAP and ServiceNow. In August 2026, after version 1.0 was finalised, the project moved into the Agentic AI Foundation, the Linux Foundation fund that has hosted MCP since December 2025.

The same update reported a first stable version, 1.0, with signed Agent Cards for cryptographic identity checks and SDKs in Python, JavaScript, Java, Go and .NET.

|  | MCP | A2A |
| --- | --- | --- |
| Connects | An agent to tools and data | An agent to other agents |
| Typical exchange | "Run this query", "read this file" | "Handle this task and report back" |
| Unit of work | A tool call, usually short | A task, which may be long-running |
| Originated by | Anthropic, November 2024 | Google, April 2025 |
| Governed by | Agentic AI Foundation (Linux Foundation) | Agentic AI Foundation (Linux Foundation), since August 2026 |

## How it works, and why it matters for a commercial team

A2A has two roles. A client agent formulates a task. A remote agent receives it and does the work. The remote agent advertises what it can do in an Agent Card, a JSON document listing its capabilities, so client agents can find the right one. The protocol supports long-running tasks, with notifications and status updates while work is in progress.

Consider a deal desk. An internal agent preparing a renewal proposal could ask a finance platform's agent for the account's payment history and a contract system's agent for the current terms. Each remote agent works inside its own system's permissions and returns a result. The internal agent assembles the draft.

That example shows where the value lies and where the risk lies. Value: work crosses system boundaries without staff copying data between screens. Risk: a decision now passes through several agents from several vendors. If the proposal contains a wrong discount, the question is which agent introduced it, on what information, and who approved it.

This is why **lowob**'s view is that the record matters more than the wiring. A2A, like MCP, is wiring. It moves tasks; it does not capture the decision, the reason, the owner or the expected outcome. Any multi-agent process on the commercial line needs that record kept outside the agents, and a person approving anything that reaches a client.

## How to evaluate A2A today

Most firms with 20 to 500 people will not build A2A agents themselves in the near term. They will meet the protocol inside vendor products. That makes it a procurement question.

| Question for a vendor | Why it matters |
| --- | --- |
| Does your agent publish an A2A Agent Card? | Shows it can be called by agents from other platforms |
| Is the Agent Card signed? | Version 1.0 supports signed cards for identity checks |
| What permissions does a remote request run under? | A delegated task should not exceed the caller's rights |
| Is every inbound and outbound task logged with its result? | Needed to trace a multi-agent decision afterwards |
| Can tasks be set to return drafts rather than act? | Keeps client-facing actions behind a person |

A common mistake is to treat interoperability as a reason to add agents. More agents mean more hand-offs and more places for an error to enter. Start with one agent on one internal job, add a second only when there is a clear task to delegate, and keep the log.

## lowob takeaways

- **A2A connects agents; MCP connects agents to tools.** Most real systems will use both.
- **It is now neutral infrastructure.** The Agentic AI Foundation, under the Linux Foundation, hosts it alongside MCP, and the major clouds support it.
- **Delegation spreads accountability.** Keep the decision record outside the agents.
- **Treat it as a buying criterion.** Ask vendors about Agent Cards, permissions and logs before building anything.

## Common questions

### What is the A2A protocol?

The Agent2Agent protocol is an open standard that lets AI agents from different vendors discover each other, delegate tasks and exchange status updates. It is hosted by the Agentic AI Foundation under the Linux Foundation, alongside MCP.

### What is the difference between A2A and MCP?

MCP connects an AI agent to tools and data sources. A2A connects one agent to another so they can share tasks. Google designed A2A to complement MCP.

### Who supports the Agent2Agent protocol?

More than 150 organisations by April 2026, according to the Linux Foundation, including AWS, Cisco, Google, IBM, Microsoft, Salesforce, SAP and ServiceNow.

### Do small businesses need A2A?

Rarely as something to build. It matters when choosing vendors, because it determines whether their agents can work with others you already use.

## Sources and notes

- [Agentic AI Foundation, A2A v1.0: a builder's guide, part 1](https://aaif.io/blog/a2a-v1-0-a-builder-s-guide-part-1-discovery-tasks-and-clients), 27 August 2026. Foundation blog by an individual contributor; source for the August 2026 move into the foundation.
- [The New Stack, Google's Agent2Agent protocol helps AI agents talk to each other](https://thenewstack.io/googles-agent2agent-protocol-helps-ai-agents-talk-to-each-other/), April 2025. Trade press report of Google's launch.
- [SD Times, Google's Agent2Agent protocol finds new home at the Linux Foundation](https://sdtimes.com/ai/googles-agent2agent-protocol-finds-new-home-at-the-linux-foundation/), 23 June 2025, and [Help Net Security](https://www.helpnetsecurity.com/2025/06/24/the-linux-foundation-agent2agent/), 24 June 2025. Trade press.
- [Linux Foundation, A2A protocol surpasses 150 organisations](https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year), 9 April 2026. Project host's press release; supporter counts are self-reported.
- The vendor questions and deal-desk example are **lowob**'s working method; the example is illustrative.

## Related research

- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [Top 5 Agent Frameworks for Production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/)

## Next Move

Add the five A2A questions to your AI vendor checklist. At your next renewal or evaluation, ask each vendor whether its agent publishes an Agent Card and how delegated tasks are logged.

[Start a conversation](https://lowob.com/contact/)
