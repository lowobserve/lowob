# What Is Agent Identity and an Agent Registry?

Source: https://lowob.com/research/what-is-agent-identity/
Publisher: lowob (https://lowob.com)
Published: 2026-06-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Agent identity treats each AI agent as a distinct, accountable actor with its own credentials, scoped permissions and a human sponsor. An agent registry is the inventory of those agents. NIST, the OpenID Foundation and OWASP all flag identity as a gap in current agent deployments.

Agent identity means giving each AI agent its own identity, separate from the people who use it, with its own credentials, scoped permissions and a named human owner, so that every action can be traced to the agent and to the person who authorised it. An agent registry is the inventory of those agents: what exists, who owns it, what it can reach and whether it is still in use. Together they answer the question a security team or auditor will ask first: which agents act for this company, and on whose authority.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What agent identity means

The simplest way to deploy an agent is to let it borrow an identity: it runs on the installing user's login, a shared service account or an API key in a configuration file. That works until something goes wrong, and then the logs show a person, or nobody, where the agent acted.

An agent identity separates the two. NIST's concept paper names the building blocks it wants to test with existing standards:

| Element | Question it answers | Standards named by NIST |
| --- | --- | --- |
| Identification | Is this an agent or a person, and which agent? | SPIFFE/SPIRE for workload identity |
| Authentication | Is it really that agent? | OpenID Connect |
| Authorisation | What may it do, on which data? | OAuth 2.0 and 2.1 |
| Delegation | On whose behalf is it acting? | Open question in the paper |
| Lifecycle | When was it created, changed or revoked? | SCIM |
| Audit and non-repudiation | Can its actions be proven and tied to a human approval? | Open question in the paper |

The paper also asks how agents can log their actions and intent "in a tamper-proof and verifiable manner", and calls for linking specific user identities to agents to maintain accountability.

## Why it matters for a commercial team

Commercial agents act across many systems: CRM, email, calendar, document stores, proposal tools. Each connection is a credential. Without a separate identity, three problems follow.

**Excess privilege.** OWASP's ASI03 describes agents that reuse, escalate or expose inherited credentials. An agent that runs as a sales director inherits the director's access to every account.

**Broken delegation.** The OpenID Foundation's October 2025 paper notes that today's authentication frameworks work for simple, single-organisation agents but "weren't designed for recursive delegation chains", where one agent calls another on a user's behalf. The NCCoE paper puts "on behalf of" delegation on its list of open questions.

**No accountability.** If the logs cannot separate the agent from its user, an audit trail cannot show who decided what. **lowob**'s rule that nothing sends without a person depends on knowing which agent drafted and which person approved.

> Every agent should have an owner who can be named and a permission set that can be read.

## What an agent registry holds

A registry is the inventory that makes identities manageable. Microsoft describes its Agent 365 registry as "a unified inventory of all agents operating in the organization, including both Microsoft and non-Microsoft agents", including agents without an Entra identity. A firm without that product can keep the same record in a spreadsheet or its governance tool.

| Field | Why it is needed |
| --- | --- |
| Agent name and purpose | Ties the agent to a task as written |
| Human owner or sponsor | Someone answers for it and approves changes |
| Identity and credential type | Shows whether it runs as itself or borrows a person's access |
| Systems and scopes | The real extent of its agency |
| Autonomy level | 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone |
| Model and instruction version | Links runs to the configuration that produced them |
| Status and review date | Retires agents nobody uses, before they become a risk |

The registry is also the starting point for AI governance. An inventory of models and tools misses the agents built on top of them, and those are the ones that act.

## lowob takeaways

- **Give agents their own identity.** Borrowed logins make actions untraceable and access too broad.
- **Name a human owner.** Every agent needs a sponsor who answers for its behaviour.
- **Keep a registry.** List every agent, its scopes and autonomy level, and review it on a schedule.
- **Use existing standards first.** OAuth, OpenID Connect, SPIFFE and SCIM cover much of the need today.

## Sources and notes

- [NIST NCCoE, Accelerating the Adoption of Software and AI Agent Identity and Authorization (concept paper)](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf), February 2026, with [NIST's announcement](https://www.nist.gov/news-events/news/2026/02/new-concept-paper-identity-and-authority-software-agents). Draft for comment; not final guidance.
- [OpenID Foundation, New whitepaper tackles AI agent identity challenges](https://openid.net/new-whitepaper-tackles-ai-agent-identity-challenges/), 7 October 2025. Standards body summary of its whitepaper.
- [TechRepublic, OWASP drops first AI agent risk list](https://www.techrepublic.com/article/news-owasp-ai-agent-risk-list/), 19 December 2025. Press summary of the OWASP Top 10 for Agentic Applications.
- [Microsoft Learn, Agent registry convergence with Microsoft Agent 365](https://learn.microsoft.com/en-us/entra/agent-id/agent-registry-convergence) and [What's new in Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id), 2026. Vendor documentation, cited as an example of the category.

## Related research

- [What is an AI agent?](https://lowob.com/research/what-is-an-ai-agent/)
- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Top 5 AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [Top 5 agent frameworks for production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/)

## Next move

List every agent and automation that connects to your CRM or email, and note whose credentials each one uses. Any that run on a named person's login are the first to move to their own identity.

[Start a conversation](https://lowob.com/contact/)
