# The Permission Problem: When Commercial Context Leaks

Source: https://lowob.com/research/the-permission-problem-when-commercial-context-leaks/
Publisher: lowob (https://lowob.com)
Published: 2026-08-18 · Updated: 2026-11-17
Function: Strategy

> Summary: Permission-aware retrieval does what it promises: it shows each user what they already have access to. In most firms that is far more than it should be, and commercial context such as pricing, discount reasons and client confidences is among the most sensitive material an assistant can surface. This piece sets out four leak paths (oversharing, cross-client leakage, prompt injection and excessive agency) and seven controls a 20- to 500-person firm can run without a security team.

The assistants and context layers sold to mid-size firms are permission-aware: they only retrieve what the user could already open. That is the right design, and it is also the problem, because most firms' permissions were never meant to be searched. A pricing sheet shared "with anyone in the company" three years ago was safe while nobody could find it. Once an assistant can, it is not. Commercial context leaks by four paths: oversharing through inherited permissions, cross-client leakage when an agent mixes one account's context with another's, prompt injection through content an outsider controls, and excessive agency when an agent holds more access than its job needs. Each has a control a firm without a security team can run. Most of them belong in the context step of the build, before any agent drafts for a client.

*Figure: Where this piece sits in The Build Order: the context layer.*

[Part 5](https://lowob.com/research/the-context-layer-followed-through-one-account/) followed one account through the context layer and showed what good wiring makes possible: the emails, call notes, proposals and invoices for a client, connected and searchable in the order a person would want them. This piece is about the other side of the same wiring. Everything that makes the context layer useful to a seller makes it useful to anyone else who can query it, including people inside the firm who should not see a given client's terms, and people outside it who can get text in front of the model.

## Permission-aware retrieval inherits your permission debt

Microsoft is clear about the design. Its guidance states that Copilot grounds its responses in the data users already have permission to access. That sentence is reassuring to a security reviewer and alarming to anyone who has audited a shared drive. Permissions accumulate. Sites are shared broadly to save time, leavers' accounts stay enabled, and folders inherit access from parents nobody remembers configuring.

Before assistants, this permission debt was mostly harmless, because finding an overshared file required knowing it existed. Retrieval removes that protection. A Gartner analyst put it plainly in 2024: "The better the information retrieval tool, the better your information governance has to be." In the same Gartner survey of 132 IT leaders, 40% said oversharing concerns had delayed their Copilot rollouts by three months or more.

Vendor data suggests the debt is near universal. Varonis's 2025 State of Data Security report, based on 1,000 IT environments and nearly 10 billion files, found 99% of organisations had sensitive data that AI could easily surface, 88% had stale but enabled "ghost" users, and only 1 in 10 had labelled their files. Varonis sells data security tools, so treat the figures as an upper bound from a motivated source. The direction matches what we see.

Commercial context is unusually exposed for two reasons. It is created fast, in shared folders and threads, by people optimising for speed. And it is unusually sensitive in combination: a rate card is mild; a rate card plus the discount reasons in the decision record plus one client's renewal thread is a negotiating brief for that client's competitor.

## Four ways commercial context leaks

| Leak path | How it happens | Commercial example | First control |
| --- | --- | --- | --- |
| Oversharing | Assistant retrieves files the user can open but was never meant to see | A junior seller asks about "standard discounts" and gets the board's pricing review | Clean up permissions on commercial sites before connecting them |
| Cross-client leakage | Context from one account enters work for another | A proposal draft for one client cites another client's terms or case | Scope agent context to one account per task |
| Prompt injection | Text an outsider controls instructs the model | A prospect's email or a supplier's PDF carries hidden instructions to summarise and send internal data | Remove the outbound channel from any agent that reads untrusted content |
| Excessive agency | An agent holds more tools or permissions than its job needs | A meeting-prep agent can also send email and edit CRM records | Grant per-task permissions, logged against a named agent identity |

The OWASP Top 10 for Large Language Model Applications, a widely used security reference for this class of system, covers each row. LLM02 (sensitive information disclosure) calls for least-privilege access and warns that instructions in a system prompt about what not to reveal "may not always be honored" and can be bypassed. LLM08 (vector and embedding weaknesses) names cross-context leaks in shared stores and recommends "permission-aware vector and embedding stores" with data partitioned by access rights. Our explainers on [*prompt injection*](https://lowob.com/research/what-is-prompt-injection/) and [*excessive agency*](https://lowob.com/research/what-is-excessive-agency/) cover the other two.

## Cross-client leakage is the commercial line's own risk

Oversharing is a general governance problem. Cross-client leakage belongs to the commercial line, and it is the one most build plans miss.

A firm with competing clients has always relied on people to keep them apart. In professional services that is a formal conflicts wall; in agencies and publishers it is often an informal understanding about who works on which account. [Part 10](https://lowob.com/research/the-same-build-in-four-industries/)'s publisher split its wiring into two context layers so that sales context never reached the newsroom. The same logic applies between clients. An assistant asked to "draft a renewal proposal using our best recent examples" will retrieve the best recent examples it can see. If the seller has access to two competing accounts, the draft may carry one client's pricing, logo or results into the other's proposal.

Permissions do not solve this, because the seller is entitled to see both accounts. What is needed is task scope: the agent preparing work for account A is given account A's context and the firm's general material, and nothing else. In practice that means three things. Account is a required field on every document and record the context layer indexes. Agent tasks are launched from an account, not from a blank prompt. And anything client-identifying in a draft is checked against the target account before the draft reaches the approver.

The decision record raises the stakes. Part 9's records hold the reason a discount was granted, often naming a competitor's quote or a client's budget pressure. That is exactly the material a seller should consult as precedent and exactly the material that must not travel into another client's document. Precedent can be retrieved as a pattern ("discounts above 10% in this segment have not improved win rates") without the client detail attached.

> Permissions decide who can see a file. They do not decide which client's work it belongs in. For an agent drafting commercial documents, the second question matters more.

## Prompt injection: the path that needs no insider

Oversharing and cross-client leakage are failures of internal boundaries. Prompt injection comes from outside, and commercial teams are its natural target, because their job is to read content from strangers: inbound emails, RFP documents, prospect websites, supplier PDFs.

The clearest public example is EchoLeak, disclosed by Aim Security and fixed by Microsoft in June 2025 as CVE-2025-32711, rated 9.3 on the CVSS scale. An attacker sent an ordinary-looking email containing hidden instructions. When the recipient later asked Copilot a routine question, the retrieval step pulled the email into the model's context alongside internal data, and the instructions caused that data to be sent out through crafted Teams and SharePoint URLs. No click was required. No exploitation in the wild was reported and the fix required no customer action, but the pattern is general.

Simon Willison's description of the "lethal trifecta" is the most useful frame for a non-specialist. An agent becomes exploitable when it has all three: access to private data, exposure to untrusted content, and the ability to communicate externally. His recommendation is to avoid the combination entirely. He is sceptical of guardrail products that claim to catch 95% of attacks, noting that in web security 95% "is very much a failing grade".

For a commercial build the implication is concrete. An agent that reads inbound email and has access to the CRM must not also be able to send, post or fetch external URLs. That is Gateway 1 doing security work: if [nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/), the third leg of the trifecta is removed for outbound messages. It does not remove links and images rendered in a draft, which is how EchoLeak exfiltrated data, so drafts produced from untrusted content should render as plain text until approved.

## Seven controls a mid-size firm can run

None of these require a dedicated security team. Most use controls already in the firm's suite.

| Control | What it does | Owner | When in the build |
| --- | --- | --- | --- |
| Permission review of commercial sites | Finds overshared folders before they are indexed | Build owner with IT | Before the context layer is connected |
| Exclude high-risk sites from AI search | Keeps board, HR and pricing-review material out of retrieval | IT | Before the context layer is connected |
| Remove ghost users and stale shares | Closes access nobody is using | IT | Before, then quarterly |
| Account as a required field | Makes task scoping possible | Revenue operations | With the CRM clean-up |
| One account per agent task | Prevents cross-client leakage | Build owner | With the first agent |
| Break the trifecta | No agent combines untrusted input, private data and an outbound channel | Build owner | With the first agent |
| Log retrieval and actions | Lets the firm reconstruct what an agent saw and did | IT | With the first agent |

On Microsoft 365, SharePoint Advanced Management, which Microsoft includes with Copilot licences, provides data access governance reports to find overshared sites, restricted content discovery to keep named sites out of Copilot, restricted access control, and site access reviews delegated to owners. Google Workspace has its own sharing and data-protection controls; the principle is the same whichever suite was chosen at Gateway 0.

Two questions come up at this point in most builds. The first is whether a dedicated governance platform is needed. For most firms under a few hundred people it is not yet; our ranking of [*AI governance and audit trail tools*](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/) was written for banks and insurers with model-risk obligations. The second is how to answer a client's or partner's security questionnaire. [*The pilot that survives security review*](https://lowob.com/research/the-pilot-that-survives-security-review/) sets out the written pack reviewers expect: where data goes, who can see it, whether it trains models, how long it is kept.

Illustrative example: the proposal that nearly carried another client's numbers

Decision
:   Scope the proposal-drafting agent to one account per task and exclude the pricing-review site from AI search.

Reason and owner
:   In testing, a draft renewal proposal for one client quoted results from a competing client's case study, which the seller was entitled to see. Owned by the head of operations, with IT running the permission review.

What changed
:   Agent tasks now launch from the account record; general case studies are tagged as cleared for reuse; the permission review closed broad sharing on most commercial folders before connection.

Illustrative: a composite of a mid-size agency, built from patterns across engagements.

## lowob takeaways

- **Permission-aware means permission debt is searchable.** Clean up commercial sites before they are connected, not after the first incident.
- **Scope by account as well as by user.** Cross-client leakage happens inside legitimate access.
- **Break the trifecta.** No agent should read untrusted content, hold private data and have an outbound channel at once.
- **Use the suite's controls first.** Dedicated governance platforms are for firms with model-risk obligations.

Gateway card

### Before commercial context is connected to an agent

- Permission review completed on every commercial site and shared drive in scope
- High-risk sites excluded from AI search
- Ghost users and stale broad shares removed
- Account recorded on every document and record to be indexed
- Every agent task scoped to one account
- No agent holds untrusted input, private data and an outbound channel together
- Retrieval and actions logged against a named agent identity

## Common questions

### What is AI oversharing?

Oversharing is when an AI assistant surfaces files a user technically has permission to open but was never meant to see, because the underlying sharing settings were broader than intended. Permission-aware tools make this existing problem searchable.

### Does Microsoft 365 Copilot respect permissions?

Yes. Microsoft states that Copilot grounds responses in data the user already has permission to access. The risk is that many organisations' permissions are broader than they realise, which is why Microsoft offers oversharing controls through SharePoint Advanced Management.

### How can prompt injection leak company data?

An attacker places hidden instructions in content the AI will read, such as an email or document. If the AI also has access to private data and a way to send information out, the instructions can make it leak that data, as the EchoLeak flaw in Microsoft 365 Copilot demonstrated in 2025.

### How do you stop an AI agent leaking one client's data into another client's work?

Scope each agent task to a single account, require an account field on every indexed document and record, and check client-identifying content in drafts against the target account before approval.

## Sources and notes

- Gartner survey of 132 IT leaders, as reported by [Computerworld](https://www.computerworld.com/article/3542000/microsoft-365-copilot-rollouts-slowed-by-data-security-roi-concerns.html), September 2024. Older survey; adoption has moved since.
- [Varonis, 2025 State of Data Security Report](https://www.varonis.com/blog/state-of-data-security-report), June 2025. Vendor research by a data security seller; 1,000 environments.
- [OWASP, LLM02:2025 Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm02/). Community standard; guidance, not regulation.
- [OWASP, LLM08:2025 Vector and Embedding Weaknesses](https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/). Community standard.
- EchoLeak (CVE-2025-32711), as reported by [The Hacker News](https://thehackernews.com/2025/06/zero-click-ai-vulnerability-exposes.html), 12 June 2025. Patched; no exploitation in the wild reported.
- [Simon Willison, The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), 16 June 2025. Practitioner analysis.
- [Microsoft Learn, SharePoint Advanced Management](https://learn.microsoft.com/en-us/sharepoint/advanced-management) and [Copilot best practices](https://learn.microsoft.com/sharepoint/sharepoint-copilot-best-practices). Vendor documentation; features and licensing change.

## Related research

- [The Pilot That Survives Security Review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [Top 5 AI Governance and Audit-Trail Tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [What Is Prompt Injection?](https://lowob.com/research/what-is-prompt-injection/)
- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [The Build Order for Healthcare and Life Sciences](https://lowob.com/research/the-build-order-for-healthcare-and-life-sciences/)

## Next move

Ask IT for a list of every commercial folder or site shared with the whole company or with external guests. Close or narrow the broadest five before any assistant is pointed at them.

[Start a conversation](https://lowob.com/contact/)
