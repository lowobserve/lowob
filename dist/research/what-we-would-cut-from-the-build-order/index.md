# What We Would Cut From the Build Order

Source: https://lowob.com/research/what-we-would-cut-from-the-build-order/
Publisher: lowob (https://lowob.com)
Published: 2026-09-03 · Updated: 2026-11-16
Function: Strategy

> Summary: After thirteen parts, a retrospective. The evidence on AI project failure points more often to over-building than under-building: RAND's interviews name chasing technology over the problem as a leading cause, and Anthropic's own guidance is to find the simplest solution that works. For firms under about 50 people, several steps in The Build Order shrink to a habit or disappear. Four do not: a named owner, one recorded decision class, nothing sends without a person, and a handover that keeps the reasoning.

The Build Order was written for firms of 20 to 500 people, and at the small end parts of it are too heavy. A 25-person firm does not need a formal Gateway 0, a purchased context layer, a decision-record system, a value at stake on every decision class or a Gateway 3. It needs a named owner, one decision class recorded in a shared table with outcomes, a rule that nothing sends without a person, and a handover habit that keeps the reasoning when someone leaves. The wider evidence supports cutting. RAND's study of failed AI projects names chasing the latest technology over the user's problem as one of the most frequent pathways to failure, and Anthropic's guidance on agents recommends the simplest solution possible, adding complexity only when it demonstrably improves outcomes. What should not be cut is the part that is cheapest: writing down why.

*Figure: The Build Order, end to end. This piece maps the whole route.*

A series that argues for a sequence owes its readers a view of where the sequence is wrong. Thirteen parts have added steps: three decisions before any tool, a context layer, a record with six fields, a first agent, three gateways and a permission review. Each was argued on evidence. Taken together, for a firm of 25 people with one person running sales, they describe more process than the firm can carry.

This piece goes back through the order and marks what we would cut, by size, and what we would keep regardless. It also sets out what the evidence says about over-engineering, because the most common failure we see is not a firm that built too little. It is a firm that bought for the stage after next.

## What the evidence says about over-engineering

The failure literature on AI projects is consistent on one point: complexity added before the problem is understood is a leading cause of waste.

| Source | Finding | What it implies for the order |
| --- | --- | --- |
| RAND, 2024 | Five root causes from 65 practitioner interviews, including focusing on the latest technology rather than real problems for users; "chasing the latest and greatest advances in AI for their own sake is one of the most frequent pathways to failure" | Start from a decision, not a tool |
| Anthropic, 2024 | Find the simplest solution possible and increase complexity only when needed; frameworks can obscure prompts and responses | Workflows before agents; no framework until one is needed |
| Gartner, 2025 | Over 40% of agentic projects cancelled by 2027 on cost and unclear value; about 130 genuine agentic vendors among thousands | Most "agent" purchases are not what they claim |
| MIT NANDA, 2025 | Generic tools such as ChatGPT outperformed bespoke enterprise tools in the study, even on the same underlying models | Rent the general assistant before building a custom one |
| McKinsey, 2025 | Redesigning individual workflows was among the strongest contributors to impact; high performers nearly three times as likely to have done it | Change the work, not the stack |

RAND's report also cites estimates that more than 80% of AI projects fail, about twice the rate of other IT projects. That figure is an estimate the authors quote rather than measure, and RAND notes its interviewees were mostly engineers, who may be quicker to blame leadership. The direction is still clear, and it matches the Gartner and MIT findings from different angles: the expensive mistake is building or buying ahead of a defined problem.

There is a counterweight. The US Census Bureau's Business Trends and Outlook Survey found 19.8% of US businesses using AI in any business function as of May 2026, with use under 20% among firms of four or fewer employees, 32% at 100 to 249, and 37% at 250 or more. For small firms the larger risk may be not starting at all. A lighter order is meant to make starting easier, not to argue for waiting.

## Part by part: what we would cut

The table marks each step for three size bands. "Keep" means as written; "shrink" means a lighter version; "cut" means skip until the firm reaches the next band. These are judgments, not measurements.

| Step in the order | 20 to 50 people | 50 to 200 people | 200 to 500 people |
| --- | --- | --- | --- |
| Gateway 0: owner, suite, CRM | Shrink: name the owner; suite and CRM are usually already settled | Keep | Keep |
| Assistant seats on the commercial line | Keep, for the people who sell | Keep | Keep |
| A purchased context layer | Cut: use the suite's native assistant and connectors | Shrink: native connectors plus the CRM | Keep |
| Permission review before connection | Shrink: one hour on the shared drive's broadest shares | Keep | Keep |
| Decision record with six fields | Shrink: one shared table, one decision class | Keep, two or three classes | Keep |
| First agent | Shrink: a prompt template or saved workflow, not an agent | Keep | Keep |
| Gateway 1: nothing sends without a person | Keep | Keep | Keep |
| Gateway 2: a dollar figure on every decision | Shrink: on one class, compared against expectation | Keep | Keep |
| Gateway 3: extend to other functions | Cut: sales and delivery are usually the same people | Shrink: delivery handover only | Keep |
| Governance platform, agent framework, memory layer | Cut | Cut | Shrink: only where an obligation requires it |

Five cuts deserve a sentence each.

**A formal Gateway 0.** In a firm of 25 the suite and the CRM were chosen years ago. The one decision that still matters is who owns the build and how many hours a week they have for it.

**A purchased context layer.** Native connectors in Microsoft 365 or Google Workspace, plus the CRM's own assistant, cover most of what a small commercial team needs. The rule in [*Buy context, own judgment*](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/) still applies: rent the wiring, and at this size the suite is the rental.

**A record system.** A shared table with the six fields is enough below about 50 people, provided it can be exported. The fields matter; the software does not.

**A first agent.** For a small team, a saved prompt that prepares meeting briefs from the CRM and the inbox does the job [Part 7](https://lowob.com/research/the-first-ai-agent-should-be-boring/) assigned to the first agent. Anthropic's distinction is useful here: a workflow follows a predefined path, an agent directs its own. Most small-firm needs are workflows.

**Value at stake on every class.** [Part 11](https://lowob.com/research/gateway-two-a-dollar-figure-on-every-commercial-decision/) noted that below about ten decisions a month in a class, comparison groups are too thin. A small firm should put a dollar figure on its one recorded class and compare outcomes against what was expected at the time.

> Cut the software before you cut the habit. The fields of a decision record cost nothing; the system that holds them can wait.

## What we would never cut

Four steps stay at every size because they are cheap and their absence is expensive.

1. **A named owner with protected time.** Without one, the build is a purchase, not a change in how the firm works.
2. **One decision class recorded with reasons and outcomes.** This is the only part of the brain a firm cannot rent and cannot recover later.
3. **Nothing sends without a person.** At small sizes one bad message reaches a larger share of the client base.
4. **No agent with private data, untrusted content and an outbound channel at once.** [Part 12](https://lowob.com/research/the-permission-problem-when-commercial-context-leaks/)'s structural control costs nothing to apply and does not depend on firm size.

## Where the order is underbuilt: handovers

The retrospective found one place where the sequence asks for too little. Small firms lose more reasoning per departure than large ones, because each person carries a larger share of what the firm knows. A ten-person firm losing its head of sales loses most of its commercial memory in a single notice period.

The series has treated handovers as a later concern, something for the transitions a growing firm meets. For a small firm it is the first record. In [*Handovers are where reasoning pours out*](https://lowob.com/research/handovers-are-where-reasoning-pours-out/) we set out a five-part handover pack: recent decisions extracted in a structured interview, open threads, relationships, the graveyard of abandoned approaches, and a 90-day question log. A handover is scheduled, has a motivated owner in the incoming person, and produces visible value. For a firm under 50 people, a handover pack for every commercial role may do more for the brain than any tool in the order.

## What would change our mind

The cuts above are judgments, and they can be tested.

| If we saw this | We would conclude |
| --- | --- |
| Small firms that skip the record and still stop repeating the same commercial mistakes | The record is less necessary at small sizes than we argue |
| Small firms that buy a full context layer early and get measurable value without rework | The cut was too aggressive |
| Firms that pass Gateway 2 without an owner with protected time | Ownership matters less than the series claims |
| Native suite assistants failing on basic commercial preparation for small teams | Renting the suite is not enough, and a purchased layer belongs earlier |

We have not seen the first three. The fourth is plausible, and it is the cut we hold most loosely.

Illustrative example: the light build order

Decision
:   Run a shortened build for a 30-person firm: owner named, native assistant seats for the four people who sell, a shared table recording pursue-or-pass decisions, a rule that nothing reaches a client unapproved, and a handover pack for the departing head of business development.

Reason and owner
:   The full order would have taken a quarter before anything changed. Owned by the managing director, with two protected hours a week.

What changed
:   Within a quarter the table showed which pitches the firm should stop pursuing, and the handover pack captured the reasons behind three live client relationships before the departure.

Illustrative: a composite of a small professional services firm, built from patterns across engagements.

## lowob takeaways

- **The evidence favours cutting.** Most AI waste comes from building ahead of a defined problem.
- **Below about 50 people, most steps shrink.** The context layer becomes the suite, the record becomes a table, and Gateway 3 waits.
- **Four steps stay at every size.** Owner, one recorded class, nothing sends without a person, no lethal trifecta.
- **Handovers are the small firm's first record.** Each departure carries a larger share of what the firm knows.

Gateway card

### Before you build more than you need

- Firm size band identified, and the table above applied to it
- A named owner with protected hours
- One decision class recorded with reasons and outcomes
- Nothing reaches a client without a person
- No agent combining private data, untrusted input and an outbound channel
- A handover pack scheduled for the next commercial departure
- No platform, framework or memory layer bought without a named obligation or problem

## Sources and notes

- [RAND, The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed](https://www.rand.org/pubs/research_reports/RRA2680-1.html), August 2024. 65 practitioner interviews; mostly engineers; the 80% figure is a quoted estimate.
- [Anthropic, Building effective agents](https://anthropic.com/engineering/building-effective-agents), December 2024. Guidance from a model provider.
- Gartner forecast and agent-washing estimate, June 2025, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says). Analyst estimates.
- MIT NANDA, The GenAI Divide, as reported by [The Register](https://www.theregister.com/2025/08/18/generative_ai_zero_return_95_percent), August 2025. Small interview and survey sample.
- [McKinsey, The state of AI in 2025](https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025). 1,993 participants; correlation, not causation.
- [US Census Bureau, Large firms with at least 20 employees biggest AI users](https://census.gov/library/stories/2026/05/ai-use-businesses.html), May 2026. Business Trends and Outlook Survey; question wording changed in November 2025.
- The size bands, cuts and falsifiers are **lowob**'s judgments, drawn from patterns across engagements, not a measured study.

## Related research

- [Handovers are where reasoning pours out](https://lowob.com/research/handovers-are-where-reasoning-pours-out/)
- [Buy Context. Own Judgment.](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [The scale ladder](https://lowob.com/research/the-scale-ladder/)
- [The first AI agent should be boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [Gateway 0: three decisions before any AI tool](https://lowob.com/research/gateway-zero-three-decisions-before-any-ai-tool/)

## Next move

Find your size band in the table and strike every step marked "cut". Then check the four you can never cut: if any is missing, that is this month's work, before anything else is bought.

[Start a conversation](https://lowob.com/contact/)
