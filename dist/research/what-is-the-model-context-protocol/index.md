# What Is the Model Context Protocol (MCP)?

Source: https://lowob.com/research/what-is-the-model-context-protocol/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: The Model Context Protocol (MCP) is an open standard for connecting AI applications to the systems where data and tools live, such as a CRM, a document store or a database. Instead of building a custom integration for every pairing of AI tool and business system, each system exposes one MCP server and any MCP-compatible assistant can use it. It is now supported by most major AI products. It is wiring, not judgment, so it needs permissions and logs around it.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- Anthropic released MCP as an open standard on 25 November 2024, with prebuilt servers for Google Drive, Slack, GitHub, Git, Postgres and Puppeteer.
- MCP has two sides: servers expose data and tools, and clients (AI applications) connect to them.
- By December 2025 there were more than 10,000 active public MCP servers and over 97 million monthly SDK downloads.
- In December 2025 Anthropic donated MCP to the Agentic AI Foundation, a directed fund under the Linux Foundation co-founded with Block and OpenAI.
- The main risks are tool poisoning and over-broad credentials; the Cloud Security Alliance recommends scoped, short-lived credentials and append-only logs.

## What MCP means

Before MCP, every connection between an AI assistant and a business system was a one-off build. Anthropic's launch post described models as "trapped behind information silos and legacy systems", with each new data source needing its own integration. Five assistants and ten systems meant up to fifty integrations.

MCP replaces that with one protocol. A system exposes its data and actions through an MCP server. An AI application acts as an MCP client and connects to any server it is allowed to use. Anthropic's launch named early adopters including Block and Apollo, and development tool makers including Zed, Replit, Codeium and Sourcegraph.

Adoption since then has been broad. Anthropic's December 2025 announcement listed support in ChatGPT, Cursor, Gemini, Microsoft Copilot and Visual Studio Code, alongside Claude. The same month, MCP became a founding project of the Agentic AI Foundation (AAIF) under the Linux Foundation, with support from Google, Microsoft, AWS, Cloudflare and Bloomberg. MCP's maintainers keep control of the technical direction; the foundation provides neutral governance.

| MCP is | MCP is not |
| --- | --- |
| A standard way for AI applications to reach tools and data | A model, an agent or an AI product |
| A connector layer each system implements once | A data store or a CRM |
| A way to expose actions such as "search deals" or "create task" | A permission system on its own |
| Vendor-neutral, governed under the Linux Foundation | A guarantee that a given server is safe |

## How it works, and why it matters for a commercial team

An MCP server describes what it offers: tools the model can call, data it can read and prompts it can use. The AI application reads those descriptions, decides which tool fits the task and calls it. A CRM's MCP server might offer "find account", "list open deals" and "add note". A calendar server might offer "list meetings this week".

For a commercial team, the practical effect is that an assistant can assemble account context from several systems at once. A meeting brief can draw on the CRM, the last email thread and the shared drive without anyone building three integrations.

In **lowob**'s model of the enterprise brain, MCP sits in the wiring stage, between the store (where data lives) and reasoning (where models and agents work). The principle is to rent the wiring and own the record. MCP is a good thing to rent: it is a standard, many vendors maintain servers for their own products, and switching assistants does not mean rebuilding connections. What MCP does not provide is the record of what was decided, by whom and why. That remains yours to keep.

## Common mistakes and how to start safely

The same openness that makes MCP useful makes it a security surface. The Cloud Security Alliance's May 2026 paper on MCP security describes two main risks. Tool poisoning is a form of indirect prompt injection, where hostile instructions are hidden in a server's tool descriptions. The confused deputy problem arises when a server holding powerful credentials is manipulated into using them for an action its owner never intended.

| Risk | What it looks like | Mitigation |
| --- | --- | --- |
| Tool poisoning | A third-party server's description tells the model to send data elsewhere | Approve servers like software suppliers; pin and review versions |
| Over-broad credentials | One token gives an assistant full CRM admin rights | Scope each connection to read-only or narrow write access |
| Silent actions | The assistant updates records with no trace | Keep append-only logs of every tool call |
| Client-facing sends | An email tool is exposed with "send" as well as "draft" | Expose draft actions only; nothing sends without a person |

A safe start has three steps. Connect read-only servers first, so the assistant can answer questions but not change anything. Add draft-only write tools next, such as creating a note or a task for review. Only after several weeks of logs should any server be allowed to make changes without approval.

## lowob takeaways

- **MCP is a plug, not a brain.** It connects assistants to systems; it does not decide or remember.
- **Rent it.** It is an open, widely supported standard governed under the Linux Foundation.
- **Scope every connection.** Start read-only, then draft-only, and log every call.
- **Vet servers as suppliers.** A tool description is code the model will follow.

## Common questions

### What is MCP in AI?

MCP, the Model Context Protocol, is an open standard that lets AI applications connect to external tools and data through one common interface. Anthropic released it in November 2024.

### Who owns the Model Context Protocol?

Since December 2025 MCP has been a project of the Agentic AI Foundation, a directed fund under the Linux Foundation. Its maintainers still set technical direction.

### Is MCP secure?

The protocol can be used securely, but servers can carry risks such as tool poisoning and over-broad credentials. Scope permissions narrowly, vet third-party servers and log every tool call.

### What is the difference between MCP and an API?

An API is specific to one system. MCP is a common layer on top, so any compatible AI application can discover and use a system's tools without a custom integration.

## Sources and notes

- [Anthropic, Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol), 25 November 2024. Vendor announcement.
- [Anthropic, Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), 9 December 2025. Vendor-reported usage figures.
- [MCP blog, MCP joins the Agentic AI Foundation](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/), 9 December 2025. Project's own account of governance.
- [Cloud Security Alliance, MCP security: tool poisoning and the confused deputy problem](https://labs.cloudsecurityalliance.org/research-rb/csa-whitepaper-mcp-security-agentic-attack-surface-20260516/), 16 May 2026. Industry body research note.
- The wiring stage and staged rollout are **lowob**'s working method.

## Related research

- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [Buy Context, Own Judgment: What to Build at Each Size](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)

## Next Move

List the systems your commercial team uses daily and check which already offer an official MCP server. Connect one, read-only, to the assistant your team already uses.

[Start a conversation](https://lowob.com/contact/)
