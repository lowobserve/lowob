# AI Agents in Sales: What They Can Do Now, Task by Task

Source: https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/
Publisher: lowob (https://lowob.com)
Published: 2026-08-21 · Updated: 2026-11-17
Function: Revenue

> Summary: A task-by-task guide to AI agents in sales, built on the seventeen sales rows of the lowob Agent Task Directory. Each task carries an autonomy level, a reliability rating, its main risk and the control it needs. The guide maps every task to the layer of the brain it reads and writes, sets a starting autonomy level, and names the first three tasks to hand over.

Of the seventeen sales tasks in the **lowob** Agent Task Directory, three can run and report today, three can act with a seller's approval, ten should stay as drafts and one, approving a discount, should never leave a person. Agents are reliable on internal work a seller can check in a minute: call summaries, stale-deal flags, source tags and meeting briefs. They are weak wherever a task reaches a prospect, commits money or shapes the forecast. Start with the first group and move one task up the dial at a time, on evidence.

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

The common brief for a first sales agent researches prospects, writes sequences and sends them. It pairs the task agents do best (research) with the one they do worst (unsupervised contact with buyers). This guide walks all seventeen sales rows of the [Agent Task Directory](https://lowob.com/research/what-ai-agents-can-do-task-directory/). The ratings are **lowob**'s working framework for 20- to 500-person teams, reviewed quarterly, and assume the control in the last column is in place. If it is not, drop the task one level.

## The seventeen sales tasks, rated

| Task | Autonomy | Reliability today | Main risk | Control |
| --- | --- | --- | --- | --- |
| Research an account before a meeting | 1 Draft | High | Stale or wrong facts in the brief | Sources attached; current-or-superseded marking |
| Summarise a sales call and extract next steps | 3 Act and report | High | Missed commitment or misheard figure | Recording consent; owner reviews within 48 hours |
| Draft a follow-up email after a meeting | 1 Draft | High | Wrong figure or tone sent to a client | Queue to account owner; nothing sends |
| Update deal stage from email and calendar evidence | 2 Act with approval | Medium | Forecast distorted by wrong stage | Suggested change accepted by owner |
| Flag stale opportunities | 3 Act and report | High | Noise if definitions are loose | Agreed stale rule (for example 30 days) |
| Tag lead source from a fixed list | 3 Act and report | High | Misattributed channel spend | Fixed list; weekly spot-check |
| Qualify an inbound lead | 2 Act with approval | Medium | Good leads dropped | Owner approves drops; record the reason |
| Prioritise accounts for the quarter | 1 Draft | Medium | Bias toward accounts with more data | Leadership decides; record the reasoning |
| Draft a proposal from approved templates | 1 Draft | Medium | Unapproved claims or terms | Template library; proposal approver |
| Price a proposal | 1 Draft | Low | Margin loss; inconsistent pricing | Pricing rules; finance approval for exceptions |
| Approve a discount | 0 Answer | Low | Commits money without accountability | Human decision with recorded reason |
| Write outbound sequences | 1 Draft | Medium | Spam, brand damage, compliance breach | Approval per sequence; volume caps |
| Send outbound sequences autonomously | 2 Act with approval | Low | Reputational and deliverability damage | Not a first agent; gate and caps required |
| Prepare a win-loss summary | 1 Draft | Medium | Wrong reason recorded as fact | Interview evidence; owner sign-off |
| Draft a mutual action plan | 1 Draft | Medium | Commitments the client never agreed | Shared with the client only after review |
| Answer a security questionnaire | 1 Draft | Medium | Inaccurate security claims | Approved answer library; security owner review |
| Forecast the quarter | 1 Draft | Medium | False confidence | Human forecast call; agent shows evidence |

METR's study of long tasks found model success falls as the human time a task needs rises. A call summary is short and bounded, with the answer in the transcript; a forecast is a long chain of judgments. The reliability column tracks that difference. Salesforce's 2026 State of Sales survey of more than 4,000 sellers put selling time at 40% of the week, and Australian respondents expected agents to cut research time by 36% and email drafting by 37%. Those savings sit in the level 1 and 3 rows, not the client-facing ones.

## Where each task plugs into the brain

**lowob** treats the brain as a loop: the **store** (CRM, email, calendar, recordings), the **context** layer that wires them with definitions and permissions, the **record** of decisions with reason, owner, status and expected outcome, **reasoning** by models and agents, and **learning** when outcomes are written back. Each task leans on one layer, and fails there if the build is weak.

| Task | Main layer | Start at | Move up when |
| --- | --- | --- | --- |
| Account research | Context | 1 | Stays at 1 |
| Call summary and next steps | Store | 2, then 3 | Four clean weekly spot-checks |
| Follow-up email | Reasoning | 1 | Stays at 1; nothing sends |
| Deal stage update | Record | 1, then 2 | Most suggestions accepted unedited |
| Stale-opportunity flags | Context | 3 | Stale rule agreed first |
| Lead-source tags | Store | 3 | Fixed list agreed first |
| Inbound qualification | Record | 1, then 2 | Every drop has a recorded reason |
| Account prioritisation | Reasoning | 1 | Stays at 1 |
| Proposal from templates | Context | 1 | Stays at 1 |
| Proposal pricing | Record | 0, then 1 | Pricing rules written and current |
| Discount approval | Record | 0 | Never |
| Outbound copy | Reasoning | 1 | Stays at 1 |
| Autonomous outbound send | Reasoning | Not started | A quarter of gate logs on drafts |
| Win-loss summary | Learning | 1 | Stays at 1 |
| Mutual action plan | Record | 1 | Stays at 1 |
| Security questionnaire | Context | 1 | Answer library approved and dated |
| Quarterly forecast | Learning | 0, then 1 | Stage definitions stable two quarters |

Tasks on the store or context layers (tags, flags, summaries, research) are reliable once the data is clean and the definitions are written. Tasks on the record or learning layers (stage, qualification, pricing, win-loss, forecast) depend on reasons people have rarely written down, and an agent cannot reconstruct a reason that was never recorded. That is why [The Ten Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/) comes before most of these tasks can move up.

## The five tasks that decide the programme

Five rows carry the weight: the best early win, and the common ways a programme ends badly.

### Call summaries and next steps

The strongest level 3 task in sales: the transcript is the source and the output is checkable against it. The control has two parts. The first is consent. California Penal Code section 632 makes it an offence to record a confidential communication without the consent of all parties, with fines of up to $2,500 per violation, and several other jurisdictions have similar all-party rules. Recording consent belongs in the meeting invite and the opening of the call. The second is review within 48 hours, because a misheard figure in a summary becomes a wrong figure in a follow-up.

### Deal stage updates

An agent can read an email that says "we signed" or a cancelled steering meeting and suggest a stage change. It should not make it. Stage drives the forecast, so the control is a suggestion the owner accepts, with the evidence attached. Read acceptance rates with care: our piece on [approval rate and fatigue](https://lowob.com/research/approval-rate-measures-fatigue-too/) shows how approval climbs as reviewers tire, so pair it with a weekly random sample.

### Inbound qualification

A wrongly dropped lead is invisible unless the drop is recorded. The agent scores and routes at level 2; every drop needs an owner's approval and a reason from a fixed list. Those reasons calibrate next quarter's qualification rules, which is the learning layer doing its job.

### Pricing and discounts

Pricing is level 1, Low; discount approval is level 0. A price stated to a client can bind the firm. In *Moffatt v. Air Canada* (2024), the British Columbia Civil Resolution Tribunal held the airline responsible for a fare policy its website chatbot misstated, rejecting the argument that the chatbot was a separate entity. The company owns what its software tells a customer. An agent can show the pricing rules, past precedent and the margin effect; a person sets the price, and a named approver signs any exception with a recorded reason. [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/) sets out the approval gate.

### Autonomous outbound

The most requested sales agent is rated lowest. Writing sequences is level 1, Medium; sending them without review is rated Low. The constraints are external. Gmail's sender guidelines require anyone sending more than 5,000 messages a day to Gmail to authenticate with SPF, DKIM and DMARC, offer one-click unsubscribe on marketing mail and keep the spam rate reported in Postmaster Tools below 0.30%, with 0.10% recommended. The FTC states that CAN-SPAM "makes no exception for business-to-business email", that opt-outs must be honoured within 10 business days, that a firm cannot contract its liability away to a vendor, and that each violating email can draw a penalty of up to $53,088. An agent sending at volume can breach all of these in an afternoon. The controls are approval per sequence, hard volume caps and a quarter of gated drafts before any send is automated.

> An agent that drafts a bad email costs a seller a minute. An agent that sends one costs the domain.

## The security and tool-access rule

Sales agents read the most untrusted content in the firm. OWASP's 2025 Top 10 for LLM applications traces excessive agency to excessive functionality, permissions and autonomy. Its mitigations translate directly: only the tools the task needs, the seller's own permissions rather than an administrator's, human approval for high-impact actions, and logged, rate-limited tool calls. In practice a research agent cannot write to the CRM, a follow-up agent has no send permission, and no agent both reads inbound mail and sends outbound mail. Read more in [What Is Excessive Agency?](https://lowob.com/research/what-is-excessive-agency/).

## Start here: the first three tasks

Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027, citing rising costs and unclear business value. The defence is a measurable first-quarter gain on low-risk work.

1. **Summarise sales calls and extract next steps.** Level 2 for four weeks (seller confirms), then level 3. Baseline: meetings with no logged next step. Control: consent wording in every invite.
2. **Flag stale opportunities and tag lead source.** Level 3 from the start, once the stale rule (for example, 30 days without activity) and source list are agreed. Baseline: open deals with no recent activity. Control: nightly report, weekly spot-check.
3. **Research the account before each meeting.** Level 1. The brief lands in the calendar with sources attached and old facts marked superseded. Baseline: seller-reported preparation time.

This is the pipeline clerk from [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/), plus one brief. Follow-up drafts come fourth; proposals and outbound copy after a quarter of evidence.

Illustrative example: scoping a sales agent pilot

Decision
:   Approve call summaries, stale-deal flags and meeting briefs for a twelve-seller team; decline a vendor's autonomous outbound proposal.

Reason and owner
:   The approved tasks are internal and checkable in a minute; the outbound proposal had no volume caps, no per-sequence approval and send rights on the main domain. Owned by the head of sales; revenue operations runs spot-checks.

What changed
:   After four weeks, meetings without a logged next step fall and every stale deal is flagged; outbound copy drafting follows at level 1.

Illustrative: a composite of a mid-size B2B services firm, built from patterns across engagements.

## Moving a task up the dial

**lowob** uses three tests before any move up. The directory control has run for at least four weeks. A weekly random sample shows errors that are few, internal and caught before reaching a client. The decision the task touches is recorded with a reason, so a later review can see why the agent acted.

Zapier's 2026 survey of 513 US managers at firms of 1,000 or more staff found only 30% of leaders say their agents handle a majority of tasks without human help. For most sales teams the realistic target this year is a few level 3 tasks on the store and context layers, and a larger set of level 1 drafts that make sellers faster without speaking for them.

## lowob takeaways

- **Start where the seller can check in a minute.** Summaries, flags, tags and briefs earn trust first.
- **Keep money and prospects behind a person.** Pricing, discounts and sends stay at level 2 or below.
- **Record the reason with the change.** Stage, drop and discount decisions need it.
- **Treat outbound as compliance work.** Sender rules and CAN-SPAM apply first.

Gateway card

### Before a sales agent goes live

- Task found in the directory and set at or below its level
- Recording consent wording in every meeting invite
- Agent permissions limited to the task; no send rights on any drafting agent
- Stale rule and lead-source list written and agreed
- Baseline counts taken for missed next steps and stale deals
- Named owner, nightly report and weekly random spot-check

## Common questions

### What can AI agents do in sales today?

Reliably: call summaries, stale-opportunity flags, lead-source tags, account research and follow-up drafts. With a seller approving: stage changes and inbound qualification. Pricing, discounts and unsupervised outbound stay with a person.

### Can an AI agent send sales emails on its own?

It can, but it should not be a first agent. Autonomous sending is rated Low, and the sender is bound by Gmail's bulk sender rules and by CAN-SPAM, which covers business email.

### Is it legal to have an AI notetaker record sales calls?

It depends on the jurisdiction. California, among others, requires the consent of all parties to record a confidential conversation. Put consent wording in the invite and the call opening, and take legal advice.

### Should an AI agent forecast the sales quarter?

It should assemble the evidence: stage history, activity and slippage. The call stays with a person, because the main risk is false confidence in a number the board relies on.

## Sources and notes

- [Gartner forecast on agentic AI cancellations, as reported by Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says), 25 June 2025. Analyst forecast reported second-hand; Gartner's own release could not be opened during this review.
- [Salesforce State of Sales 2026, as reported by Dynamic Business](https://dynamicbusiness.com/topics/news/high-performing-sales-teams-are-1-7x-more-likely-to-use-ai-agents). Vendor-run survey of 4,000+ sellers; the 36% and 37% figures are Australian respondents' expectations, not measured savings.
- [METR, Measuring AI Ability to Complete Long Software Tasks (arXiv:2503.14499)](https://arxiv.org/html/2503.14499v3). Measured on software and research tasks, not sales work; used here for the relationship between task length and success.
- [Federal Trade Commission, CAN-SPAM Act: A Compliance Guide for Business](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business). US law only; the penalty figure is inflation-adjusted and changes annually.
- [Google, Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en). Applies to mail sent to Gmail accounts; other mailbox providers set their own rules.
- [OWASP, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/). Security guidance for LLM applications; not sales-specific.
- [California Penal Code section 632, via Justia](https://law.justia.com/codes/california/code-pen/part-1/title-15/chapter-1-5/section-632). One state's statute; recording rules vary by jurisdiction and this is not legal advice.
- [Civil Resolution Tribunal of British Columbia, Moffatt v. Air Canada, 2024 BCCRT 149](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do). Small-claims tribunal decision in one Canadian province; persuasive, not binding elsewhere.
- [Zapier, 2026 AI agents survey](https://zapier.com/blog/ai-agents-survey/). Vendor-commissioned survey of 513 US managers at firms of 1,000+ staff; self-reported.
- Autonomy levels, reliability ratings, brain-layer mapping and starting levels are **lowob**'s working framework, reviewed quarterly.

## Related research

- [What AI Agents Can Do: A Task Directory for Commercial Teams](https://lowob.com/research/what-ai-agents-can-do-task-directory/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Cold Outreach Works Better With a Real Reason to Talk](https://lowob.com/research/signal-based-outbound/)
- [What Is an AI SDR?](https://lowob.com/research/what-is-an-ai-sdr/)

## Next move

Find each sales agent you run or are being sold in the table above. Where its control is missing, move it down one level this week and write the control before moving it back.

[Start a conversation](https://lowob.com/contact/)
