# What Is an AI Agent, and Where Does It Fit in the Brain?

Source: https://lowob.com/research/what-is-an-ai-agent/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: An AI agent is a model working in a loop toward a goal: it chooses its next step, acts through tools, checks the result and repeats until it finishes or a limit stops it. Agents can now complete long, well-specified software tasks, and most large companies report using them, but reliability falls sharply as tasks lengthen and most production agents still hand work back to a person. They become valuable to a business when they are plugged into a company's brain: the wiring that connects its systems, the record of what it decided and why, a gate before anything leaves the building, and a path for outcomes to flow back.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- An agent has five parts: a goal, a loop, tools, context and limits. Without the loop it is automation; without tools it is a chat assistant; without limits it is a liability.
- METR's measurements show agents completing multi-hour expert software tasks at a 50% success rate in 2026, but far shorter tasks at 80%. Plan around the reliable figure.
- Enterprise surveys report agents in production at most large firms, yet most deployed agents still need a person to finish the job, and Gartner expects over 40% of agentic projects to be cancelled by the end of 2027.
- Agents plug into the brain at five points: identity and limits, context in, precedent in, the approval gate, and outcomes written back.
- Agents make a company faster. Only the record and the outcome loop make it better.

The word "agent" now covers almost everything sold with a model inside it. A chat window that answers questions, a workflow that runs the same five steps every night, and a system that decides its own next move while holding a user's email permissions are routinely marketed under the same label. Gartner has a name for the practice, "agent washing", and in mid-2025 it estimated that only about 130 of the thousands of vendors making agentic claims offered genuine agentic capability.

The confusion matters because the label decides what gets bought, what gets approved and who is accountable when something goes wrong. A chat assistant can give a wrong answer. An agent can take a wrong action, confidently, with real permissions. This piece sets out a working definition, what the evidence says agents can do today, and how they connect to the system we call the enterprise brain. It is the reference point for the rest of The Build Order.

## A working definition of an AI agent

An AI agent is a model working in a loop toward a goal. It decides what to do next, uses tools to act, observes the result, and repeats until the goal is met or a limit stops it.

We wrote in *A loop with good context* that the loop itself is becoming a commodity. The frameworks that run it are converging, and the protocols that connect it to tools are standardising. What separates a useful agent from a risky one is everything around the loop. Five components define it:

1. **Goal.** A statement of what done looks like and when to stop: "a two-page brief for Tuesday's meeting", "every deal with no activity in 30 days flagged", "a draft quote for this request using the current price book".
2. **Loop.** Reason about the next step, act, observe, decide again. This is the defining feature. A script follows a fixed path; an agent chooses its path.
3. **Tools.** The actions available to it: search the CRM, read an inbox, query a database, draft an email, update a record, call another agent.
4. **Context.** What it can see before and during the task: documents, data, shared definitions and, most often missing, the company's past decisions on similar cases.
5. **Limits.** What it may touch, what it may spend, which actions need human approval, and when it must stop and ask.

### Three things sold as agents

|  | Chat assistant | Workflow automation | AI agent |
| --- | --- | --- | --- |
| Who chooses the next step | The person | The designer, in advance | The model, within limits |
| Acts on company systems | Rarely | Yes, in fixed ways | Yes, in ways it selects |
| Typical failure | A wrong or invented answer | Breaks when inputs change | A wrong action, taken confidently |
| Best suited to | Questions, drafts, analysis | Stable, repeatable steps | Varied tasks with a clear goal |
| Main control | Reader judgment | Testing the workflow | Permissions, approval gates, logs |

Gartner's own guidance draws the same line: many use cases positioned as agentic do not need agentic implementations, and automation remains the better tool for routine, stable workflows. A useful test for any product labelled an agent is to ask what it decides for itself. If the answer is nothing, it is automation, and it should be bought, tested and priced as automation.

### Autonomy is a dial, not a switch

The more useful question is how much an agent may do without a person. We use a five-level scale.

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

| Level | What the agent does | Commercial example |
| --- | --- | --- |
| 0. Answer | Responds to a question | "What did we propose to this client last year?" |
| 1. Draft | Prepares work for a person to review | A meeting brief; a follow-up email waiting in a queue |
| 2. Act with approval | Takes an action once a named person approves | Updates deal stages after a manager signs off |
| 3. Act and report | Acts within fixed bounds, then reports | Tags lead sources overnight and sends a summary |
| 4. Act alone | Acts with no review inside hard limits | Rare in commercial work, and rarely wise today |

Most of the value commercial teams report today sits at levels 1 to 3. Anything that reaches a client stays at level 2 or below until there is evidence to move it.

## What AI agents can do now

The evidence in late 2026 supports two statements at once: agent capability is improving faster than almost any other measure of AI, and the share of real business work agents can complete reliably and unsupervised is still small.

### Capability: long tasks, but at uneven reliability

The most cited independent measure is METR's task-completion time horizon. METR estimates how long a task takes a human expert, then measures the length of task at which an agent succeeds a given share of the time. Its January 2026 suite (Time Horizon 1.1) expanded to 228 tasks across software engineering, machine learning and cybersecurity, including 31 tasks estimated at eight or more human hours.

| Measure | What was reported | Source status |
| --- | --- | --- |
| METR's January 2026 update | Claude Opus 4.5 at about 320 minutes (5.3 hours) of expert work at a 50% success rate | Published by METR |
| Later 2026 assessments | About 14.5 hours at 50% for Claude Opus 4.6; about 16–20 hours at 50% and 3–4 hours at 80% for the strongest agents assessed in February–March 2026 | Reported in secondary coverage of METR's work |
| Trend | Time horizon roughly doubling every four to seven months, depending on the window measured | METR's fitted trend, as reported |
| Caveat | METR treats estimates above 16 hours as unreliable; tasks are software, ML and cyber tasks | Published by METR |

Two points matter for a business reader. First, the gap between the 50% and 80% figures is large: a task an agent completes half the time is a draft, not a delegated job. Design around the reliable number. Second, these are well-specified technical tasks with checkable answers. Commercial work is messier: goals are vaguer, data is incomplete, and success is judged weeks later.

### Adoption: broad, but mostly supervised

Surveys agree that agents are now common in large companies and disagree on how deep that goes.

| Source | Sample | Finding |
| --- | --- | --- |
| Zapier, 2026 | Enterprise leaders | 71% report agents in production, up from 40% in 2025; most agents still need a person to finish the job |
| Mayfield CXO Survey, 2026 | 266 IT and innovation leaders, Fortune 2000 | 42% in production; 72% in production or pilot |
| ChapsVision / Sinequa, 2026 | 740 executives at $1bn+ companies | 51% report agents in live production, but most deployments are assistive rather than agentic |
| Anthropic enterprise survey, 2026 | Enterprises building agents | Nearly 90% use AI in software development; 86% deploy agents for production code |
| Gartner forecast | Analyst projection | 40% of enterprise applications to include task-specific agents by end of 2026 |
| Gartner forecast | Analyst projection | Over 40% of agentic AI projects cancelled by end of 2027 on cost, unclear value or weak risk controls |

Read together, these describe agents arriving inside software companies already use, mostly at levels 1 and 2 of the dial, with coding far ahead of every other function. Vendor-run surveys tend to report higher adoption than independent ones, and "in production" is defined differently by each.

### In commercial work specifically

Salesforce's 2026 State of Sales survey of more than 4,000 sales professionals found that sellers spend about 40% of their time selling. Sellers using agents expect them to cut prospect research time by about a third and email drafting time by a similar share, and top-performing sellers were 1.7 times more likely than underperformers to use agents for prospecting. The survey is vendor-run, and expected savings are not measured savings, but the pattern is consistent with what we see: the time agents recover sits in research, preparation, data entry and first drafts.

For a mid-size commercial team, our working view of the current boundary:

| Reliable today | Useful with a person in the loop | Not yet, or not wisely |
| --- | --- | --- |
| Research an account and write a brief | Draft outbound and follow-up emails | Send client communications unsupervised |
| Summarise calls and extract next steps | Update CRM stages and fields | Set prices or approve discounts |
| De-duplicate, tag and flag stale records | Draft quotes from a price book | Make low-volume strategic calls |
| Compare delivery against what was sold | Prepare campaign variants for testing | Track what changed over months without a record |
| Monitor news and signals for named accounts | Triage and route inbound requests | Act safely on untrusted inbound content |

### Two limits that point straight at the brain

**Memory over time.** Agents struggle to track how things changed over long periods. Patronus AI's MEMTRACK benchmark, built from realistic work spread across Slack, Linear and Git, found current models and memory add-ons struggling with long-horizon state and with conflicting information. Our own reading, in *Retrieval is not the bottleneck*, is that most failures come after search: the right material is found, then weighed badly when facts have changed. A bigger memory does not solve that. A record that marks which decision is current does.

**Untrusted content.** OWASP's 2025 Top 10 for LLM applications ranks prompt injection first and lists "excessive agency" sixth: the risk that a model with too many tools and too much permission turns a small error into a damaging action. An agent that reads inbound email, holds a user's access and can send messages combines all three conditions. OWASP's recommended controls are architectural: minimise tool scope and permissions, require approval for high-risk actions, and log every tool call.

## How agents plug into the enterprise brain

This is the centre of the series. We define the brain as a loop, not a product: it connects what a company stores, remembers what it decided and why, reasons across both, and learns when outcomes come back. A CRM, a drive or a search index is the store. Agents are the reasoning layer, the part that connects the dots. They depend on every other layer, and they plug into it at five points.

*Figure: Five plug points: identity and limits, context in, precedent in, the gate, and the outcome written back.*

**1. Identity and limits.** Every agent should act as its own registered identity with its own permissions, not borrow a person's login. That makes each action traceable and keeps access narrow. Large vendors now treat agents as accounts to be registered and governed; Microsoft reported nearly 40 million agents registered in its control plane within two months of launch. A mid-size firm needs the same idea at small scale: a register listing each agent, what it may touch, its autonomy level and its owner.

**2. Context in, through the wiring.** The agent reads company systems through connectors. The Model Context Protocol has become the common standard: Anthropic donated it to the Linux Foundation's Agentic AI Foundation in December 2025, when more than 10,000 MCP servers had been published, and Google's Agent2Agent protocol for agent-to-agent communication also sits under the Linux Foundation. For buyers the consequence is practical: a connector built to an open standard works with more than one assistant, which makes the wiring layer less of a lock-in than it was two years ago.

**3. Precedent in, from the record.** Before acting, the agent sees the few most comparable past decisions: what was decided, the reason, the outcome, and at least one case that went badly. We call this the precedent slot. It is the difference between an agent that knows what is true and one that knows what the company does.

**4. The gate.** Anything that leaves the building passes a named person who approves it, and the approval is logged with who approved, when, and what they saw. The gate is also where autonomy is set. An agent can be promoted from level 1 to level 2 for one task, on evidence, without being trusted everywhere.

**5. Outcome written back.** When the result arrives (the deal closes, the quote is lost, the campaign underperforms), it is written back to the decision that caused it. In *The first two-fifths* we argued that this is the step almost nobody builds. It is also the step that lets the next run start from what actually happened.

> The agent's own loop runs in minutes. The brain's loop, from decision to outcome to precedent, runs over months. A company that builds only the first gets faster. A company that builds both gets better.

## How to choose and govern your first agent

The first agent should be dull: frequent, checkable, low in risk, and doing work people dislike. On the commercial line that usually means meeting preparation, CRM hygiene, or follow-up drafts that sit in a queue. Start at level 1 and earn level 2 with evidence.

Before any agent goes live, three questions should have written answers:

- What is its goal, and what is its stop condition?
- Which tools can it use, and which systems can it read?
- For one complete run, can you show what it saw, what it did and who approved the output?

If any answer is missing, it is not ready. Our guide *Top 5 agent frameworks for production* covers the engineering side: whether a run can pause for approval, survive a crash and swap models.

### Where agents earn their keep, by industry

| Industry | Where agents are useful now | The limit that matters most |
| --- | --- | --- |
| Professional services | Meeting briefs, proposal first drafts, research | Client confidentiality and conflicts |
| Financial services and fintech | Alert triage, case preparation, memo drafting | Reconstructing the chain for a supervisor |
| Media and publishing | Insertion orders, delivery reconciliation, renewal briefs | Sales context kept out of editorial |
| Crypto and digital assets | Community triage, monitoring, research | Nothing public without a person |
| B2B SaaS | Account research, expansion signals from usage | Product data permissions |
| Retail, DTC and luxury | Prompts for client advisers, order follow-up | Client consent and the human relationship |
| Industrial distribution | Draft quotes from price books and specifications | Price and lead-time accuracy |
| Healthcare and life sciences | Commercial operations support | Patient data never enters the loop |

Illustrative example: an agent register

Decision
:   Every agent in the firm gets a one-line register entry: goal, tools, systems it can read, autonomy level and owner.

Reason and owner
:   Three tools were being called agents and nobody could say what each one could touch. Owned by the head of operations.

What changed
:   An "autonomous SDR" proposal is declined; the overnight CRM clean-up is reclassified as a level 3 agent with a nightly report.

Illustrative: a composite of an 80-person advisory firm, built from patterns across engagements.

## lowob takeaways

- **An agent is a loop with tools and limits.** If it does not choose its next step, buy it as automation.
- **Plan around the reliable number.** Agents complete far longer tasks at 50% success than at 80%.
- **Agents act; the brain remembers.** Without a record and outcome write-back, agents make a company faster but not better.
- **Govern five plug points.** Identity and limits, context in, precedent in, the gate, and outcomes written back.

Gateway card

### Before you call it an agent

- A written goal and stop condition
- Every tool and system it can reach, listed
- Its autonomy level set, and who can change it
- A named owner
- One run you can replay: what it saw, what it did, who approved it

## Common questions

### What is an AI agent?

An AI agent is a model working in a loop toward a goal. It chooses its next step, uses tools to act, checks the result and repeats until the goal is met or a limit stops it.

### How is an AI agent different from a chatbot or automation?

A chatbot answers questions and leaves actions to the person. Automation follows steps designed in advance. An agent chooses its own steps within limits, which makes it more flexible and more risky.

### What can AI agents reliably do in 2026?

They reliably research accounts, summarise calls, clean records and draft work for review. Independent measurements show multi-hour software tasks completed at 50% success, but much shorter tasks at 80%, so most business deployments keep a person in the loop.

### How do AI agents connect to an enterprise brain?

Through five points: their own identity and permissions, context read through connectors, precedent from a decision record, an approval gate before anything leaves the company, and outcomes written back to the decisions that caused them.

### Why do so many agentic AI projects fail?

Gartner cites escalating costs, unclear business value and inadequate risk controls. In our experience the common root is an agent given a vague goal, broad permissions and no record of past decisions to work from.

## Sources and notes

- METR, [Measuring AI Ability to Complete Long Software Tasks](https://arxiv.org/abs/2503.14499) and [research updates](https://metr.org/research/), including Time Horizon 1.1 (January 2026). Later 2026 figures are as reported by [OfficeChai](https://officechai.com/ai/exponential-progress-claude-opus-4-6-has-50-time-horizon-of-14-5-hours-on-metr-time-horizons-benchmark) and the [AI 2027 tracker](https://ai2027-tracker.com/predictions/metr-doubling/), not confirmed on METR's own page; METR cautions that estimates above 16 hours are unreliable.
- [Zapier, 2026 AI agents survey](https://zapier.com/blog/ai-agents-survey/). Vendor survey of enterprise leaders; self-reported.
- [Mayfield, The Agentic Enterprise in 2026](https://www.mayfield.com/the-agentic-enterprise-in-2026/). Survey of 266 Fortune 2000 IT and innovation leaders.
- [ChapsVision / Sinequa, The State of Enterprise Agentic AI in 2026](https://www.sinequa.com/?p=13327). Survey of 740 executives at $1bn+ enterprises.
- [Anthropic, How enterprises are building AI agents in 2026](https://claude.com/resources/articles/how-enterprises-are-building-ai-agents-in-2026). Vendor research.
- Gartner forecasts as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says) (June 2025) and [iTWire](https://itwire.com/guest-articles/guest-research/agentic-ai-goes-mainstream-in-the-enterprise,-but-94-raise-concern-about-sprawl,-outsystems-research-finds.html).
- [Salesforce, State of Sales 2026](https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/). Survey of 4,000+ sales professionals; vendor-run, expected rather than measured savings.
- [Patronus AI, MEMTRACK](https://arxiv.org/abs/2510.01353), October 2025. Simulated multi-platform workflows.
- [OWASP Top 10 for LLM Applications 2025](https://www.hackerone.com/blog/owasp-top-10-llms-2025-how-genai-risks-are-evolving), via HackerOne's summary.
- [IT Brief, Anthropic donates MCP to new Agentic AI Foundation](https://itbrief.com.au/story/anthropic-donates-mcp-to-new-agentic-ai-foundation), January 2026.
- The capability boundary table and autonomy scale are **lowob**'s working framework for mid-size commercial teams, not a benchmark.

## Related research

- [A loop with good context](https://lowob.com/research/a-loop-with-good-context/)
- [The first two-fifths](https://lowob.com/research/the-first-two-fifths/)
- [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [Top 5 agent frameworks for production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/)
- [The 5 agent memory layers worth testing](https://lowob.com/research/the-5-agent-memory-layers-worth-testing-and-how-to-test-them/)

## Next Move

List every tool in your company that someone calls an agent. For each one, can you say what it can touch, what level of autonomy it has and who approves what it sends? If the list surprises you, start there.

[Start a conversation](https://lowob.com/contact/)
