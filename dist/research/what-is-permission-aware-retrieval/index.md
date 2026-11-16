# What Is Permission-Aware Retrieval?

Source: https://lowob.com/research/what-is-permission-aware-retrieval/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Permission-aware retrieval filters what an AI assistant or agent can retrieve to what the requesting person is allowed to open in the source system. It is the standard design for enterprise assistants. It inherits every overshared file and lags behind permission changes, so commercial content should be audited and tested with restricted users before it is connected.

Permission-aware retrieval is search for AI systems that returns only the documents and records the requesting person could already open in the source system. It is the standard design for enterprise assistants and the right one. It also inherits every bad permission a company has: a pricing file shared with the whole firm was harmless while nobody could find it, and becomes visible once an assistant can. Audit permissions on commercial content before connecting it, and test with a restricted user.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What permission-aware retrieval means

An assistant answering from company content first retrieves relevant material, then writes from it. That is [retrieval-augmented generation](https://lowob.com/research/what-is-retrieval-augmented-generation/). Permission-aware retrieval adds one rule to the first step: nothing comes back that the person asking could not open themselves.

To do that, the system needs three things for every item: the content, a list of who may see it, and a reliable map of who each person is and which groups they belong to. Microsoft's synced connectors ingest each item with "an access control list (ACL) that enforces permissions". Glean's indexing SDK takes per-document lists of allowed users and groups, and warns against flattening groups into user lists because flattened lists go stale as memberships change.

There are four common approaches, often combined.

| Approach | How it works | Strength | Weakness |
| --- | --- | --- | --- |
| Stored ACL filter | Permissions copied into the index; results filtered at query time | Fast at scale | Only as current as the last sync |
| Live source check | Each candidate result is checked with the source system before use | Reflects current access | Slower; costly across large result sets |
| Two-stage | Filter on stored ACLs, then verify the shortlist with the source | Speed with a current check | More moving parts |
| Partitioning | Separate stores or indexes per team, client or region | Hard boundary, simple to explain | Duplication; cross-team search is harder |

AWS's October 2026 post describes the two-stage design. The first stage applies ACLs stored in the index, because "real-time API calls for every document in the index would be too costly at scale". The second checks candidates against the source using the user's own token and drops any the user cannot open.

## Why it inherits bad permissions

Permission-aware retrieval does exactly what it promises, and that is the problem. Microsoft's own guidance says it is "important that you're using the permission models available in Microsoft 365 services, such as SharePoint, to help ensure the right users or groups have the right access". Before assistants, an overshared folder was protected by obscurity: finding it required knowing it existed. Retrieval removes that protection. Our glossary puts it plainly: it inherits every bad permission in the underlying systems.

Timing is a second gap. AWS notes that pull-based syncs leave permissions out of date between runs, that some sources do not announce group changes, and that changes to a source's sharing model can expose content until connectors are updated. A person removed from a deal team may still retrieve its files until the next sync.

## Why it matters for a commercial team

Commercial content is exposed in a particular way. Rate cards, discount reasons and client renewal threads are created quickly, in shared folders, by people optimising for speed. Each is mild alone and sensitive in combination.

There is also a gap that user permissions cannot close. A senior seller may legitimately open files for two competing clients. An agent drafting for one of them should still not retrieve the other's terms. Permission-aware retrieval answers "may this person see this?". It does not answer "should this task use this?". For agents, scope retrieval to the account in hand as well as to the user. OWASP's guidance on cross-context leaks in shared stores points the same way.

Agents also need their own identity. If an agent retrieves on a shared service account, it sees what that account sees, not what the person asking may see. See [What Is Agent Identity?](https://lowob.com/research/what-is-agent-identity/).

## How to start

1. **Find the broad shares.** List commercial sites and folders shared with everyone in the company, or with anyone holding the link.
2. **Fix before connecting.** Narrow those shares, then connect.
3. **Test negatively.** Pick three documents a junior seller should not see and search for them as that seller. Glean's documentation is right that the search result is the test.
4. **Measure lag.** Remove someone's access to a test file and time how long the assistant keeps returning it.
5. **Log retrievals.** Keep a record of what was retrieved for whom, as OWASP recommends.

## lowob takeaways

- **It returns only what the person could open.** That is the right design.
- **It inherits every overshare.** Retrieval removes the obscurity that used to protect them.
- **Permissions lag.** Indexes hold a snapshot from the last sync.
- **Scope agents by task too.** User permission does not stop cross-client mixing.

## Sources and notes

- [Microsoft Learn, Data, privacy and security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot), accessed November 2026. Vendor documentation.
- [Microsoft Learn, Copilot connectors overview](https://learn.microsoft.com/en-us/microsoftsearch/connectors-overview), accessed November 2026. Vendor documentation.
- [AWS Machine Learning Blog, Rethinking access control for RAG with Amazon Quick and Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/rethinking-access-control-for-rag-with-amazon-quick-and-amazon-bedrock/), 7 October 2026. Vendor-authored; describes AWS's own design.
- [Glean Developer Platform, Indexing SDK permissions](https://developers.glean.com/libraries/indexing-sdk/permissions), accessed November 2026. Vendor documentation.
- [OWASP GenAI Security Project, LLM08:2025 Vector and Embedding Weaknesses](https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/), 2025. Community security reference.

## Related research

- [The Permission Problem: When Commercial Context Leaks](https://lowob.com/research/the-permission-problem-when-commercial-context-leaks/)
- [What Is an AI Connector?](https://lowob.com/research/what-is-an-ai-connector/)
- [What Is Agent Identity?](https://lowob.com/research/what-is-agent-identity/)
- [The 5 enterprise context platforms ranked for regulated firms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/)
- [What Is Prompt Injection?](https://lowob.com/research/what-is-prompt-injection/)

## Next move

Ask a junior member of the commercial team to search your assistant for "discount", "rate card" and "renewal". Anything they should not have seen marks the first folder to fix.

[Start a conversation](https://lowob.com/contact/)
