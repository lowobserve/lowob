# Gateway 1: Nothing Sends Without a Person

Source: https://lowob.com/research/nothing-sends-without-a-person/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Distribution

> Summary: Gateway 1 is a single rule: nothing an agent produces leaves the company until a named person approves it, and every approval is logged with who, when and what they saw. It is the most common control in serious agent deployments because it addresses the leading security risks for AI systems, gives regulated firms the evidence supervisors ask for, and keeps the first mistakes internal. It only works if reviewers actually check, so the gate needs its own measures.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## Key points

- OWASP's 2025 list ranks prompt injection first and excessive agency sixth; both are contained by limiting permissions and requiring approval for high-risk actions.
- Supervisors in financial services expect firms to reconstruct the chain of automated activity; a logged approval is the core of that chain.
- Design the gate as a queue with three outcomes (approve, edit, return), a matrix of who approves what, a kill switch and spend caps.
- Approval rates rise with reviewer fatigue as well as with quality; measure the gate with spot-checks and seeded errors.
- The gate is also where autonomy is raised, one task at a time, on evidence.

Every commercial agent eventually produces something meant for someone outside the company: a follow-up email, a proposal, a quote, a reply to a community question. The first time one goes out with the wrong figure, the wrong name or a claim the company cannot support, the programme loses the trust it needs to continue.

The control that prevents this is not new or sophisticated. It is a person who approves outbound work before it leaves, and a log that records the approval. It is also the one design choice that every credible agent architecture we reviewed for this series shares.

## Why the gate is the industry's answer

**Security.** OWASP's 2025 Top 10 for LLM applications ranks prompt injection as the leading risk and lists excessive agency (a model with too many tools and too much permission) sixth. The two combine dangerously in a commercial agent that reads inbound email, holds a user's access and can send messages. OWASP's recommended mitigations are architectural: minimise tool scope and permissions, require explicit approval for high-risk actions such as sending or deleting, and log every tool call with its parameters. A human gate before anything outbound implements the middle control directly.

**Supervision.** In financial services, supervisors increasingly expect firms to reconstruct the full chain of automated activity behind a client outcome. In *Regulators want the chain, not the model* we argued that what gets inspected is the sequence of evidence, approval and outcome, not the model's internals. A logged approval is the anchor of that chain.

**Trust.** Gartner's forecast that over 40% of agentic projects will be cancelled by 2027 cites inadequate risk controls among the causes. A visible gate is how a sponsor shows the board that the first mistakes will be caught internally.

> The gate is not a lack of nerve. It is how autonomy is earned.

## Designing the gate

*Figure: Five plug points: identity and limits, context in, precedent in, the gate, and the outcome written back.*

### A queue, not an inbox

Drafts land in a queue owned by the person accountable for the client relationship. Each item carries the draft, the sources the agent used and a one-line reason. The reviewer has three actions:

| Action | When | What gets logged |
| --- | --- | --- |
| Approve | The draft is correct as written | Approver, time, version sent |
| Edit and approve | The draft is close; the reviewer changes it | Approver, time, the edits made |
| Return | The draft is wrong or should not be sent | Approver, time, a short reason |

The edits and the return reasons are the most valuable data the gate produces. They show where the agent is weak and become precedent for the next run.

### Who approves what

| Output | Approver | Notes |
| --- | --- | --- |
| Routine follow-up to an existing client | Account owner | Fast path; spot-checked weekly |
| First contact with a new prospect | Account owner | Check claims and personalisation |
| Proposal or pricing | Account owner plus a second approver for non-standard terms | Discounts beyond standard need finance |
| Public post or community reply | Named communications owner | Strictest in crypto and fintech |
| Anything regulated (financial promotion, health claim) | Compliance reviewer | Existing review rules apply unchanged |

### The guardrails around the gate

- **Kill switch.** One named person can stop every agent immediately, and everyone knows who it is.
- **Spend caps.** Each agent has a usage budget with an alert well before the limit.
- **Test before change.** Any change to an agent's instructions runs against a small set of past cases before it goes live.
- **Logs with cost.** Every action is recorded with what the agent saw, what it did and what it cost.

## When the gate becomes a rubber stamp

A gate works only if reviewers verify. The risk is well documented. In *Approval rate measures fatigue too* we set out how approval rates rise when reviewers tire, trust fluent text, see only easy cases, or when agents learn to produce safer, blander drafts. In *A reviewer who does not verify is not a control* we argued that an approval without verification is a signature, not a check.

Measure the gate itself:

| Measure | How | What it tells you |
| --- | --- | --- |
| Independent spot-check | A second person reviews a random few percent of approved items blind | The real error rate behind the approval rate |
| Seeded errors | Occasionally insert a draft with a known flaw | Whether reviewers catch what they should |
| Time on item | Distribution of review times | Approvals in seconds on complex items are not reviews |
| Edit and return rates | Share of items edited or returned, by agent and task | Where the agent is weak, and whether reviewers are engaged |

## Raising autonomy at the gate

The gate is also where trust is earned. When a task shows a low error rate on spot-checks for a sustained period, its autonomy can rise one level for that task only: from draft to act-with-approval, or from act-with-approval to act-and-report for reversible internal changes. Client-facing work stays at level 2 or below until there is strong evidence, and in regulated firms it may stay there permanently.

## Where the order bends

| Industry | What the gate must catch |
| --- | --- |
| Financial services and fintech | Financial promotions, suitability, anything a supervisor may reconstruct |
| Crypto and digital assets | Public statements that can move markets or create disclosure issues |
| Media and publishing | Brand safety and any blurring of editorial and commercial content |
| Healthcare and life sciences | Promotional claims and anything near patient data |
| Industrial distribution | Price, lead time and specification accuracy on quotes |
| Professional services | Confidential information from one client reaching another |

Illustrative example: catching a wrong figure

Decision
:   Route every agent-drafted client email through the account owner's queue, with sources attached, and spot-check 5% of approvals weekly.

Reason and owner
:   A draft follow-up quoted last quarter's pricing; it was caught by chance rather than by design. Owned by the head of operations.

What changed
:   Return reasons show stale pricing as the most common error, which leads to marking price documents current or superseded in the context layer.

Illustrative: a composite of a mid-size services firm, built from patterns across engagements.

## lowob takeaways

- **One rule, logged.** Nothing leaves the company without a named approver and a record of what they saw.
- **Design for three outcomes.** Approve, edit or return; the edits and returns are the most useful data.
- **Measure the gate.** Spot-checks and seeded errors, not approval rates alone.
- **Earn autonomy task by task.** Raise one level at a time, on evidence.

Gateway card

### Gateway 1

- Every outbound action has a named approver
- Approvals, edits and returns are logged with sources and time
- A kill switch with a named owner
- Spend caps and alerts per agent
- Weekly spot-checks of approved items

## Common questions

### What is human-in-the-loop for AI agents?

A design in which a named person approves an agent's output before it takes effect outside the company, with the approval logged. It limits the damage from errors and prompt injection and creates evidence for audits.

### Do AI agents need human approval?

For anything that reaches clients or the public, yes, at least until a task has a sustained record of low errors. Reversible internal changes can often run and report instead.

### How do you stop human review becoming a rubber stamp?

Measure it: blind spot-checks of approved items, occasional seeded errors, time spent per item, and edit and return rates by task.

### What is excessive agency in AI?

An OWASP risk category describing AI systems given more tools, permissions or autonomy than their task requires, so that a small error or manipulation can cause a damaging action.

## Sources and notes

- [OWASP Top 10 for LLM Applications 2025](https://www.hackerone.com/blog/owasp-top-10-llms-2025-how-genai-risks-are-evolving), via HackerOne; mitigation patterns via [this engineer's summary](https://dev.to/amasen/owasp-llm-top-10-what-every-engineer-building-with-ai-needs-to-know-in-2025-2gp8).
- Gartner forecast, June 2025, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says).
- Supervisory expectations in financial services summarised from [Snell & Wilmer on FINRA's 2026 oversight report](https://www.swlaw.com/publication/finras-2026-oversight-report-signals-a-supervisory-reckoning-for-autonomous-ai/).
- The approval matrix and gate measures are **lowob**'s working method.

## Related research

- [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [A reviewer who does not verify is not a control](https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/)
- [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [Top 5 AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)

## Next Move

Ask who would notice, today, if an agent sent a client the wrong figure. If the answer is "the client", the gate comes before the next agent.

[Start a conversation](https://lowob.com/contact/)
