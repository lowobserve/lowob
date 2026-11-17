# MCP vs API Integrations: What Changes and What Does Not

Source: https://lowob.com/research/mcp-vs-api-integrations/
Publisher: lowob (https://lowob.com)
Published: 2026-11-01 · Updated: 2026-11-17
Function: Strategy

> Summary: A traditional API integration is a fixed path a developer codes against one system. The Model Context Protocol lets an AI application discover a system's tools at run time and lets the model decide when to call them. The API usually still sits underneath, so permissions, data quality and approvals matter as much as before.

An API integration is code that a developer writes against one system's interface, following a path fixed in advance. The Model Context Protocol (MCP) is an open standard that lets an AI application connect to many systems the same way, discover what tools each one offers, and let the model decide when to call them. MCP changes who chooses the call and how connections are packaged. It does not replace the API underneath, and it does not remove the need for permissions, clean data or a person approving actions.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What the two terms mean

An API (application programming interface) is the door a system offers to other software. A CRM exposes endpoints to read a contact, create a deal or update a stage. Most modern web APIs are documented in the OpenAPI format, which the OpenAPI Initiative describes as letting people and machines understand a service without reading its source code. An API integration is the code that uses those endpoints: a sync job, a webhook handler or a workflow step. A developer chose every call when they wrote it.

MCP adds a layer designed for AI applications. In the specification's architecture, a host application, such as an AI assistant, runs one client per connection, and each client talks to an MCP server. The server exposes tools, resources and prompt templates through JSON-RPC messages. The client asks the server for its tool list, each tool described with a name and a JSON Schema for its inputs. The model reads that list and decides which tool to call, with what arguments, as the task unfolds. Our explainer on [the Model Context Protocol](https://lowob.com/research/what-is-the-model-context-protocol/) covers its history and governance.

In practice, an MCP server for a CRM is usually a thin wrapper around the CRM's existing API, which still does the work.

| Dimension | Direct API integration | MCP integration |
| --- | --- | --- |
| Built for | Developer code | AI applications and agents |
| Who decides when to call | The developer, in advance | The model, at run time, within what the host allows |
| How capabilities are found | A developer reads the documentation | The client requests a tool list from the server |
| Interface | HTTP endpoints, often described in OpenAPI | JSON-RPC tools with JSON Schema inputs |
| One connection serves | One integration | Any MCP-compatible host |
| Predictability | Same path every run | Path varies with the task |
| Main risk | A bug in a known path | A wrong or manipulated call with real permissions |

## What changes

**The cost of connecting.** Anthropic's case for MCP was that every new data source needed its own custom implementation. With MCP, a system publishes one server and any compatible host can use it.

**Who chooses the call.** In an API integration the path is written down. With MCP the model chooses, which is the point and the risk. The specification calls tools model-controlled, and recommends that applications show which tools are exposed, signal when one is invoked, and ask the user to confirm operations.

**Where trust sits.** The specification tells clients to treat tool descriptions and annotations from untrusted servers as untrusted. A poisoned tool description can steer a model, which is a form of [prompt injection](https://lowob.com/research/what-is-prompt-injection/). The 2025-11-25 architecture also states that servers "should not be able to read the whole conversation", with the host enforcing boundaries between them.

## What does not change

**The API's permissions.** An MCP server can do only what its credentials allow. If the service account can delete records, so can the model. The authorisation rules, based on OAuth 2.1 for HTTP connections, forbid passing a client's token through to downstream APIs, but they do not decide which scopes you grant. That remains your call.

**Data quality.** MCP gives a model faster access to the same fields. If stage definitions are loose or owner fields are stale, the model reads loose, stale data more quickly.

**Rate limits and cost.** The specification requires servers to rate-limit tool invocations. A model that calls a tool repeatedly still consumes the underlying API quota.

**Accountability.** The protocol says clients should log tool usage for audit purposes. It does not say who owns the outcome. That is a management decision.

## Which to choose

Both will run side by side. The test is whether the steps are fixed or chosen at run time.

| Job | Better fit | Why |
| --- | --- | --- |
| Nightly sync from CRM to the data warehouse | Direct API | Fixed path, high volume, needs to be identical each run |
| Create a CRM record from a web form | Direct API or workflow tool | Known trigger and known fields |
| Assistant that prepares a call brief from CRM, email and tickets | MCP, read-only tools | The model picks which sources to read |
| Agent that drafts follow-ups and logs activity | MCP, with write tools behind approval | Model-chosen steps that touch customer records |
| Updating prices or contract terms | Neither without a person | High blast radius |

Before switching on any MCP server, check five things:

- **Who publishes it?** Prefer the system vendor's official server over an unreviewed community one.
- **Which tools does it expose?** Start with read-only tools and add write tools one at a time.
- **What credentials does it run with?** Grant the narrowest scopes the job needs.
- **Does the host ask before acting?** Confirmation prompts should be on for anything that writes or sends.
- **Where do the logs go?** Every tool call should land somewhere a person can review.

## The **lowob** view

In the brain loop of store, wiring, record, reasoning and learning, MCP is wiring. It is a good standard to rent, because the alternative is maintaining custom connectors for every assistant you try. It does not turn a CRM into a brain, and it is not the record.

The part to own is what happens around each call: which tools an agent may use, at which point on the autonomy dial, and a record of what it read, proposed and was approved to do. Read tools can start at level 0 or 1, answer or draft. Write tools start at level 2, act with approval. The specification's own advice, a human able to deny tool invocations, matches our rule that [nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/). The learning stage then uses those logs to decide which tools have earned a notch more autonomy.

## lowob takeaways

- **MCP standardises the plug, not the system.** The API, its permissions and its data stay the same.
- **The model chooses the call.** That flexibility is useful and is also the main new risk.
- **Use direct APIs for fixed paths.** Syncs and form handlers do not need a model deciding.
- **Gate the write tools.** Start read-only, add write access behind approval, and log every call.

## Common questions

### What is the difference between MCP and an API?

An API is the interface a system exposes. MCP is a standard way for AI applications to discover and call tools, which are usually built on top of those APIs.

### Does MCP replace APIs?

No. Most MCP servers wrap an existing API. MCP changes how an AI application finds and calls a system, not how the system itself works.

### When should I use a direct API integration instead of MCP?

When the steps are fixed and should run identically every time, such as a nightly data sync or a form-to-CRM handler.

## Sources and notes

- [Anthropic, Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol), 25 November 2024. Vendor announcement by MCP's original developer.
- [Model Context Protocol specification, Tools (revision 2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/tools), accessed November 2026. Protocol specification; recommendations marked SHOULD are not mandatory.
- [Model Context Protocol specification, Authorization (revision 2025-11-25)](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization), accessed November 2026. Protocol specification; later revisions may change details.
- [Model Context Protocol specification, Architecture (revision 2025-11-25)](https://modelcontextprotocol.io/specification/2025-11-25/architecture), accessed November 2026. Protocol specification; describes design principles, not how any product implements them.
- [OpenAPI Initiative, OpenAPI Specification v3.1](https://spec.openapis.org/oas/v3.1), accessed November 2026. Standards document; version 3.2 has since been published.
- The decision table, checklist and autonomy levels are **lowob**'s working method.

## Related research

- [What Is the Model Context Protocol (MCP)?](https://lowob.com/research/what-is-the-model-context-protocol/)
- [What Is Function Calling (Tool Use) in AI?](https://lowob.com/research/what-is-function-calling/)
- [What Is an AI Connector?](https://lowob.com/research/what-is-an-ai-connector/)
- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [MCP vs A2A: How the Two Agent Protocols Fit Together](https://lowob.com/research/mcp-vs-a2a/)

## Next move

List every MCP server or AI connector your team has switched on, and for each one write down its credentials, its write tools and where its logs go. Turn off any write tool that has no named owner.

[Start a conversation](https://lowob.com/contact/)
