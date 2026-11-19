# What Is an AI Kill Switch?

Source: https://lowob.com/research/what-is-an-ai-kill-switch/
Publisher: lowob (https://lowob.com)
Published: 2026-09-11 · Updated: 2026-11-17
Function: Distribution

> Summary: An AI kill switch is a control that lets a named person halt one AI agent or all of them quickly. The EU AI Act asks for a stop button on high-risk systems and NIST's AI RMF asks for assigned responsibility to deactivate systems. In practice it is several layers, from pausing one agent to revoking its credentials, and it only counts if it has been tested.

An AI kill switch is a control that lets a named person stop an AI agent, or every agent, immediately. It is rarely one button. It is a set of layers: pause the agent, revoke its credentials, cut its tools and cap its spending. A kill switch that has never been tested is an assumption, not a control.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What an AI kill switch means

The term suggests a single red button. In a working firm it means knowing, quickly, who can stop the agents, how they do it, and what happens to work already in progress.

The glossary definition in this library is short: a control that lets a named person stop every agent immediately. The word "named" matters. A button that nobody is sure they may press does not stop anything.

Stopping can happen at different depths. Each layer stops something different.

| Layer | What it stops | Example mechanism | What it does not stop |
| --- | --- | --- | --- |
| Pause the agent | New runs of one agent | Deactivate in the agent platform | Runs already queued elsewhere; other agents |
| Revoke the identity | The agent signing in to anything | Disable its account or agent identity | Tokens already issued, unless revoked too |
| Cut the tools | Specific actions, such as sending email | Remove the connector or API key | Reading data through other routes |
| Cap the rate and spend | Volume of damage | Rate limits, daily send limits, budget caps | A single harmful action |
| Stop everything | All agent activity | A documented runbook covering all of the above | Nothing, if the runbook is complete |

## Why it matters for a commercial team

Regulation sets the expectation. Article 14(4)(e) of the EU AI Act requires that people overseeing a high-risk system can "intervene in the operation of the high-risk AI system or interrupt the system through a 'stop' button or a similar procedure". Most commercial agents are not high-risk under the Act. The principle is still the one auditors and enterprise buyers ask about.

NIST's framework puts the weight on people. MANAGE 2.4 asks that "responsibilities are assigned and understood" for deactivating systems whose "performance or outcomes" are "inconsistent with intended use". A button with no owner fails that test.

Vendors now provide the mechanisms, with caveats that matter. Microsoft's Entra Agent ID documentation describes disabling an agent identity to "prevent an agent identity from receiving tokens and authenticating". The same page warns that disabling "might have broader consequences" and that "existing agents running in your organization might begin to fail". It does not say how quickly the change takes effect. Salesforce's CLI reference says deactivating an agent "makes it unavailable to your users". Neither page describes what happens to a task halfway through.

That gap is why rate limits matter. OWASP's guidance on excessive agency recommends rate limiting "to reduce the number of undesirable actions that can take place within a given time period". An agent that can send 20 emails an hour does less harm in the minutes before someone notices than one that can send 2,000.

## How to set one up and prove it works

1. **Name the owner and a deputy.** One person can stop every agent, and a second person covers absence. Publish both names.
2. **Write the runbook.** For each agent, list where to pause it, which identity and keys to revoke, and which connectors to cut.
3. **Set caps before launch.** Daily send limits, rate limits and spend caps, so that a fault is bounded even before anyone acts.
4. **Decide what happens to in-flight work.** Queued emails, half-written CRM updates and pending approvals each need a rule: cancel, hold or finish.
5. **Run a drill.** Stop a test agent on a schedule, time how long it takes, and record what kept running. Repeat quarterly.

An agent register helps. If each agent is listed with its identity, tools, autonomy level and owner, the runbook can be written from the register rather than from memory.

## lowob takeaways

- **A kill switch is layers, not a button.** Pause, revoke, cut tools and cap volume.
- **Name the person.** NIST asks for assigned responsibility, not just a mechanism.
- **Caps limit damage before anyone notices.** Set rate and spend limits at launch.
- **Test it.** Time a drill and record what kept running.

## Common questions

### What is an AI kill switch?

A control that lets a named person stop one AI agent or all of them quickly, by pausing the agent, revoking its access and cutting its tools.

### Does the EU AI Act require a kill switch?

For high-risk AI systems, Article 14 requires that human overseers can interrupt the system through a stop button or similar procedure that brings it to a halt in a safe state.

### How do you stop an AI agent immediately?

Deactivate it in the platform that runs it, disable its identity and API keys, and remove its connectors. A written runbook makes this fast.

### Who should own the AI kill switch?

One named person with authority to stop every agent, usually in operations or security, plus a named deputy.

## Sources and notes

- [European Commission AI Act Service Desk, Article 14: Human oversight](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14). Official text; obligations apply to high-risk systems.
- [Ankura, Implementing the NIST AI Risk Management Framework: Manage](https://ankura.com/insights/implementing-the-nist-artificial-intelligence-risk-management-framework-manage). Consultancy summary quoting the MANAGE subcategories of NIST AI 100-1.
- [Microsoft Learn, Disable agent identities in your tenant](https://learn.microsoft.com/entra/agent-id/disable-agent-identities), May 2026. Vendor documentation; timing of effect not stated.
- [Salesforce CLI Command Reference, agent deactivate](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_agent_deactivate.html), undated. Vendor developer documentation.
- [OWASP Gen AI Security Project, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), 2025. Community security standard.

## Related research

- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [What Is Agent Identity and an Agent Registry?](https://lowob.com/research/what-is-agent-identity/)
- [What Is Excessive Agency in AI?](https://lowob.com/research/what-is-excessive-agency/)
- [What Is an Approval Gate for AI Agents?](https://lowob.com/research/what-is-an-approval-gate/)

## Next move

Pick one agent in use today and ask its owner to stop it while you time them. Write down how long it took, which steps they had to look up, and what kept running afterwards.

[Start a conversation](https://lowob.com/contact/)
