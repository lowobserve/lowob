# What Is an AI Autonomy Level?

Source: https://lowob.com/research/what-is-an-ai-autonomy-level/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: An AI autonomy level is a setting that states how much an AI system may do without a person: answer a question, draft work, act once approved, act and report afterwards, or act alone. It is a design decision made for each task, separate from how capable the model is. **lowob** uses a five-step dial from 0 to 4. Most commercial value today sits at levels 1 to 3, and anything that reaches a client stays at level 2 or below until there is evidence to move it.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- **lowob**'s dial has five levels: 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone.
- A 2025 Knight First Amendment Institute paper argues autonomy is a design choice separate from capability: a capable agent can still be required to consult its user before each action.
- AWS's Agentic AI Security Scoping Matrix uses four scopes, from no agency to full agency, with stronger controls at each step.
- Anthropic's February 2026 study found experienced Claude Code users let the agent run on full auto-approve in over 40% of sessions, against roughly 20% for new users.
- Set the level per task, record it against the agent, and move it one step at a time on evidence from logs.

## What an autonomy level means

The idea comes from driving. SAE International's J3016 standard, last revised in 2021, defines six levels of driving automation, from 0 to 5, by who performs the driving task and whether a human must respond when asked. **lowob**'s dial asks the same of work: what the agent may do before a person is involved.

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

| Level | What the agent does | What the person does | Commercial example |
| --- | --- | --- | --- |
| 0. Answer | Responds to a question | Decides and acts | "What did we quote this client last year?" |
| 1. Draft | Prepares work in a queue | Reviews, edits and sends | A renewal email waiting for the account owner |
| 2. Act with approval | Acts once a named person approves | Approves each action | Moves deal stages after a manager signs off |
| 3. Act and report | Acts within fixed bounds, then reports | Reads the report, can reverse | Tags lead sources overnight and sends a summary |
| 4. Act alone | Acts with no review inside hard limits | Monitors and can switch off | Rare in commercial work today |

The level belongs to a task, not to an agent. One agent can answer pricing questions at level 0 and update CRM fields at level 3.

## How it compares with other scales

Other frameworks map onto the dial only roughly. The Knight Institute paper, by Kevin Feng, David McDonald and Amy Zhang, defines five levels by the user's role, from operator to observer, where the only control left is an emergency off-switch. It also proposes "autonomy certificates" stating the maximum level an agent may operate at. AWS's matrix, built for security teams, pairs each scope with the controls it needs.

| **lowob** dial | Nearest AWS scope | What AWS says the scope means |
| --- | --- | --- |
| 0 Answer, 1 Draft | Scope 1: No agency | Read-only; recommends but cannot change systems without a person acting |
| 2 Act with approval | Scope 2: Prescribed agency | Proposes and prepares changes; a person approves each one before it runs |
| 3 Act and report | Scope 3: Supervised agency | Acts within set limits without per-action approval; needs monitoring and shutoff |
| 4 Act alone | Scope 4: Full agency | Self-initiating, continuous, minimal oversight; needs the most advanced controls |

The mapping is **lowob**'s reading of the AWS definitions, not an AWS equivalence.

## Why it matters for a commercial team

Autonomy drifts unless someone sets it. Anthropic's study of millions of interactions found new Claude Code users (under 50 sessions) used full auto-approve in roughly 20% of sessions, rising to over 40% for experienced users. Experienced users also interrupted more often, in about 9% of turns against 5% for new users. Oversight shifted from approving each step to watching and stepping in. That is a move from level 2 to level 3, made by habit rather than by decision.

The same study shows where commercial risk concentrates. Across nearly a million API tool calls, only 0.8% of actions appeared irreversible, and Anthropic's example of one was sending an email to a customer. Software engineering accounted for nearly half of tool calls; sales, finance and customer service each took a few percentage points. Commercial agent use is early, and its riskiest actions are the ones that leave the building. That is why **lowob** holds client-facing work at level 2 or below: nothing sends without a person.

## How to set and change a level

1. **List tasks, not agents.** Record each task's level, owner and what the agent may touch. Our [agent task directory](https://lowob.com/research/what-ai-agents-can-do-task-directory/) rates sixty commercial tasks this way.
2. **Start low.** Most first agents belong at level 1.
3. **Promote on evidence.** Set a review date and a test, such as four weeks of logs with edits to drafts below an agreed rate. Approval rate alone is weak, because reviewers tire.
4. **Demote on incident.** One wrong client-facing action resets the task to level 1.
5. **Keep a switch.** From level 3 up, someone must be able to stop the agent at once.

## lowob takeaways

- **Autonomy is a dial, not a switch.** Five levels, set per task.
- **Capability does not set the level.** A strong model can still run at level 1.
- **Habit raises autonomy quietly.** Usage data shows auto-approval doubling with experience.
- **Client-facing work stays at level 2 or below.** Promote only on logged evidence.

## Common questions

### What are the levels of autonomy for AI agents?

Scales differ. **lowob** uses five: 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone. Academic and vendor scales use four to six levels, counting the user's role or the controls required.

### What autonomy level should an AI sales agent have?

For anything a client will see, level 2 or below: the agent drafts or prepares, and a named person approves before it sends. Internal housekeeping such as CRM tagging can reach level 3 with a nightly report.

### Is autonomy the same as capability?

No. Capability is what an agent can do; autonomy is what it is allowed to do without a person. A highly capable agent can be required to ask before every action.

## Sources and notes

- [Feng, McDonald and Zhang, Levels of Autonomy for AI Agents](https://knightcolumbia.org/content/levels-of-autonomy-for-ai-agents-1), Knight First Amendment Institute, 28 July 2025. Academic working paper; the certificate idea is a proposal, not a standard.
- [AWS, Agentic AI Security Scoping Matrix](https://aws.amazon.com/ai/security/agentic-ai-scoping-matrix/), undated web page, accessed November 2026. Vendor framework.
- [Anthropic, Measuring AI agent autonomy in practice](https://www.anthropic.com/research/measuring-agent-autonomy), 18 February 2026. Vendor research on its own products; human-involvement figures are stated as upper bounds.
- [ANSI blog, SAE levels of driving automation, J3016-2021](https://blog.ansi.org/sae-levels-driving-automation-j-3016-2021/). Secondary summary of a paid standard.
- The five-level dial and the promotion rules are **lowob**'s working method.

## Related research

- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [What Is an Approval Gate for AI Agents?](https://lowob.com/research/what-is-an-approval-gate/)

## Next Move

Take every AI tool your commercial team uses and write one line per task: the autonomy level it runs at today, and who decided that. Any task without a named decider is your first review.

[Start a conversation](https://lowob.com/contact/)
