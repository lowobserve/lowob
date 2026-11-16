# What Is an AI Connector?

Source: https://lowob.com/research/what-is-an-ai-connector/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: An AI connector is an integration that lets an assistant or agent read from, or act in, one business system such as a CRM, inbox or drive. Synced connectors copy content and permissions into an index; live connectors, increasingly built on MCP, fetch at query time. Connectors are wiring to rent, and the permissions they inherit are the main thing to check.

An AI connector is an integration that makes one business system, such as email, a CRM or a shared drive, readable or writable by an AI assistant or agent. Some connectors copy content into an index ahead of time; others fetch it live when someone asks, increasingly through the Model Context Protocol (MCP). A good connector carries the source system's permissions with it, which makes those permissions the first thing to check. Connectors are wiring: rent them rather than build them.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What an AI connector means

An assistant on its own knows only what is typed into it. A connector gives it a route into a system the company already runs. Our glossary's definition: an integration that makes one system (email, CRM, drive) readable or writable by an assistant or agent.

There are two main designs; Microsoft and Glean both document the two.

|  | Synced (indexed) connector | Live (federated) connector |
| --- | --- | --- |
| Where data sits | Copied into the AI vendor's index | Stays in the source system |
| Freshness | As of the last sync | Current at the moment of the query |
| Permissions | Copied with each item, as of the last sync | Checked by the source, usually through the user's own sign-in |
| Strong at | Fast search across large volumes of documents | Current records and taking actions |
| Weak at | Lag on changes, including permission changes | Speed, and depends on the source's API limits |
| Typical build | Vendor crawler or indexing API | MCP server or direct API call |

Microsoft's documentation describes the synced kind precisely. Each item ingested "includes content, metadata (like title and URL), and an access control list (ACL) that enforces permissions". Connectors periodically check for changes, and admins set the sync frequency. Federated connectors keep data in the source and fetch it "in real time when users query Copilot or Search".

Connectors can also be read-only or able to write. A connector that can create a CRM task or draft an email is an action surface, and its tools should be set to an autonomy level like any agent. A connector that can send should usually be configured not to.

## How permissions carry over

The promise of every enterprise connector is the same: a user sees through the assistant only what they could already open. Microsoft states that search and Copilot "only show items to users who have access in the source system". Glean states that results "only show a user what they're already allowed to see in the source application".

Two details decide whether that promise holds. First, the connector must know who people are. Glean's native connectors collect identities, roles, groups and access control information alongside content. If group memberships are missing or stale, permissions are wrong. Second, the credential matters. Anthropic's documentation notes that a custom connector using a shared credential can reach whatever that credential can access, regardless of who is asking. A connector set up with an administrator's token gives every user an administrator's view.

This is why [permission-aware retrieval](https://lowob.com/research/what-is-permission-aware-retrieval/) is only as good as the permissions beneath it.

## Why it matters for a commercial team

Connectors are what turn a general assistant into a commercial one. A meeting brief that draws on the CRM, the last email thread and the current proposal needs three connectors and no custom code. In **lowob**'s model they sit in the wiring stage, between the store and reasoning. The principle is to rent the wiring and own the record. Vendors maintain connectors for their own systems, and switching assistants should not mean rebuilding them.

Anthropic's documentation also notes that enabling a connector for an organisation "doesn't automatically grant anyone access": each person authenticates. That is the right default. It means access follows people, and leavers lose it when their accounts close.

## What to check before connecting

| Question | Why it matters |
| --- | --- |
| Does it use each person's own sign-in, or a shared credential? | Shared credentials flatten permissions |
| How often does it sync content and permissions? | A revoked share stays visible until the next sync |
| Which objects and fields does it read? | Pricing and notes fields are often the sensitive ones |
| Can it write, and can each write tool require approval? | Writes are actions at an autonomy level |
| Are its calls logged, and can you export the logs? | Audit and incident review |
| What happens when someone leaves? | Access should end with their account |

## lowob takeaways

- **A connector is a route into one system.** It gives an assistant read or write access.
- **Synced and live designs trade freshness for speed.** Know which one you have.
- **Permissions are inherited, good and bad.** Check credentials and sync lag.
- **Rent connectors, own the record.** Wiring is replaceable; decisions are not.

## Sources and notes

- [Microsoft Learn, Microsoft 365 Copilot connectors gallery overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/prebuilt-connectors-overview), accessed November 2026. Vendor documentation; connector count is vendor-stated.
- [Microsoft Learn, Copilot connectors overview](https://learn.microsoft.com/en-us/microsoftsearch/connectors-overview), accessed November 2026. Vendor documentation.
- [Anthropic, Use the connectors directory to extend Claude's capabilities](https://support.claude.com/en/articles/11724452-use-the-connectors-directory-to-extend-claude-s-capabilities), accessed November 2026. Vendor help article; plan features change.
- [Glean, About connectors](https://docs.glean.com/connectors/about), accessed November 2026. Vendor documentation.
- The wiring stage and "rent the wiring, own the record" are **lowob**'s working method.

## Related research

- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [What Is the Model Context Protocol (MCP)?](https://lowob.com/research/what-is-the-model-context-protocol/)
- [What Is Permission-Aware Retrieval?](https://lowob.com/research/what-is-permission-aware-retrieval/)
- [MCP vs API Integrations: What Changes and What Does Not](https://lowob.com/research/mcp-vs-api-integrations/)

## Next move

For each connector your assistant already uses, find out whether it runs on each person's sign-in or on one shared account. Any shared account connected to commercial systems goes to the top of this week's list.

[Start a conversation](https://lowob.com/contact/)
