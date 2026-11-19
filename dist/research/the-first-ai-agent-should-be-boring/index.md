# The First AI Agent Should Be Boring

Source: https://lowob.com/research/the-first-ai-agent-should-be-boring/
Publisher: lowob (https://lowob.com)
Published: 2026-07-20 · Updated: 2026-11-17
Function: Revenue

> Summary: Gartner expects over 40% of agentic AI projects to be cancelled by 2027, and the riskiest first agents are the most visible ones. A good first job is frequent, checkable, low in blast radius and disliked by people. On the commercial line that is a pipeline clerk that keeps the CRM current and drafts follow-ups into a queue, measured for four weeks before it is given anything else.

The first agent on the commercial line should be boring: a job that happens often, can be checked quickly, does little damage if it goes wrong, and that people dislike doing. Autonomous outbound, the most requested first agent, fails three of the four tests. A pipeline clerk passes them: it keeps the CRM current, flags stale deals and drafts follow-ups into a queue, and it never sends anything itself. Measure it for four weeks before giving it anything else.

*Figure: Where this piece sits: the commercial line, where the build starts.*

When a commercial team decides to deploy its first agent, the request is usually ambitious: an AI sales development rep that researches prospects, writes sequences and sends them, or an agent that runs campaigns end to end. These are the most visible jobs and the most likely to fail first.

Gartner's mid-2025 forecast was blunt: more than 40% of agentic AI projects will be cancelled by the end of 2027, because of escalating costs, unclear business value or inadequate risk controls. Its analysts also observed that many use cases positioned as agentic do not need agents at all. The first agent should be chosen to avoid all three failure modes, which means choosing something unglamorous.

## Four tests for a first job

| Test | Question | Why it matters |
| --- | --- | --- |
| Frequent | Does it happen daily or weekly? | Enough runs to measure within a month |
| Checkable | Can a person verify the output in under a minute? | Errors are caught before they compound |
| Low blast radius | If it is wrong, who notices and what does it cost? | A bad first incident ends the programme |
| Disliked | Do people avoid doing it today? | Adoption follows relief, not mandate |

### How the common candidates score

| Candidate first agent | Frequent | Checkable | Low blast radius | Disliked | Verdict |
| --- | --- | --- | --- | --- | --- |
| Autonomous outbound ("AI SDR") | Yes | No: quality shows weeks later | No: reaches prospects directly | Partly | Not first |
| Auto-published social content | Yes | Partly | No: public | Partly | Not first |
| Website chatbot for prospects | Yes | No | No: client-facing | No | Not first |
| Meeting preparation briefs | Yes | Yes | Yes: internal | Yes | Good first |
| Pipeline clerk (CRM hygiene and follow-up drafts) | Yes | Yes | Yes: drafts only | Yes | Best first |

The pattern is consistent. Anything that reaches a client directly fails the blast-radius test, and anything whose quality shows weeks later fails the checkable test. Internal, reviewable work passes.

## Why the pipeline clerk

The clerk works exactly where commercial time is lost. Salesforce's 2026 State of Sales survey of more than 4,000 sales professionals found sellers spend about 40% of their time selling, with junior sellers losing about two hours a week to manual data entry. Sellers using agents expected them to cut prospect research time by about a third and email drafting by a similar share. Validity's 2026 survey found 62% of marketers believed poor CRM data had cost revenue. A clerk addresses the data, the drafting and the follow-up gap at once, without touching a client.

## Specifying the pipeline clerk

A clerk's specification fits on one page. That is part of the point.

| Element | Specification |
| --- | --- |
| Goal | Keep every open opportunity current, and make sure no follow-up is forgotten |
| Runs | Overnight for hygiene; on demand for follow-up drafts |
| Reads | CRM, email and calendar for the commercial cohort; the definitions from Part 5 |
| Writes (level 3: act and report) | Source tags from a fixed list; activity dates; "stale" flags on deals with no activity in 30 days |
| Writes (level 1: draft only) | Stage changes suggested, not made; follow-up emails placed in each owner's queue |
| Never | Sends email; changes values or close dates; deletes records |
| Reports | A nightly summary to the build owner: changes made, drafts queued, exceptions |
| Owner | The head of operations, with each seller approving their own drafts |

The split between level 3 and level 1 matters. Low-risk, reversible changes (tags, dates, flags) can run and be reported. Anything that changes the commercial picture or reaches a client stays as a draft.

### A day in the clerk's life

1. Overnight, it reads the day's email and calendar activity for the cohort and matches it to accounts and opportunities.
2. It updates last-activity dates, tags new opportunities with their source, and flags deals with no activity in 30 days.
3. For each meeting held with no follow-up sent within 48 hours, it drafts a follow-up email and places it in the owner's queue with the meeting notes attached.
4. It suggests stage changes where the evidence is clear (a signed proposal, a lost-deal email) and leaves them for the owner to accept.
5. It sends the build owner a summary: what changed, what is waiting, and anything it could not resolve.

## Measuring it for four weeks

Measure before giving the clerk anything else. Four weeks is long enough to see a pattern and short enough to keep attention.

| Measure | Baseline from Part 4 | What good looks like after four weeks |
| --- | --- | --- |
| Open deals with no activity in 30 days | Counted at clean-up | Down, and every remaining one flagged |
| Meetings without follow-up in 48 hours | Counted from calendar and email | Close to zero |
| Draft acceptance rate | n/a | High, with edits; read alongside the checks below |
| Seller time on CRM updates | Self-reported estimate | Down |
| Errors found on spot-check | n/a | Few, and none reaching a client |

Draft acceptance on its own is a weak measure. In *Approval rate measures fatigue too* we showed how approval rates rise when reviewers tire, so pair it with a weekly spot-check of a random sample of the clerk's changes.

> Choose a first agent whose worst day is an internal annoyance, not a client apology.

## What comes after the clerk

Once the clerk has four good weeks, the next steps are natural extensions of the same pattern: meeting preparation briefs, then draft proposals from approved templates, then prioritised account lists for the quarter. Each one moves only one notch up the autonomy dial, on evidence. Autonomous outbound may come eventually; it should not come first.

Illustrative example: replacing an "AI SDR" pilot

Decision
:   Decline an autonomous outbound pilot and deploy a pipeline clerk for the commercial cohort instead.

Reason and owner
:   The outbound pilot would reach prospects directly with no way to check quality for weeks; the clerk addresses stale deals and missed follow-ups, which the CRM baseline showed were common. Owned by the head of operations.

What changed
:   After four weeks, missed follow-ups fall sharply and stale deals are all flagged; meeting briefs become the second agent.

Illustrative: a composite of a mid-size services firm, built from patterns across engagements.

## lowob takeaways

- **Pick for the worst day, not the best demo.** A first agent's mistakes should be internal and cheap.
- **Use the four tests.** Frequent, checkable, low blast radius, disliked.
- **Split autonomy by task.** Reversible changes can run and report; anything client-facing stays a draft.
- **Measure for four weeks.** Then move one notch up the dial, on evidence.

Gateway card

### Before the first agent goes live

- Goal, runs, reads, writes and "never" list on one page
- Autonomy level set per task
- Baseline counts from the CRM clean-up
- A weekly random spot-check scheduled
- A named owner and a nightly report

## Common questions

### What should be my first AI agent in sales?

A pipeline clerk: an agent that keeps CRM records current, flags stale deals and drafts follow-up emails into a queue for sellers to approve. It is frequent, checkable, low-risk and addresses work sellers dislike.

### Should we start with an AI SDR for outbound?

Usually not. Autonomous outbound reaches prospects directly and its quality shows only weeks later, so errors are costly and hard to catch. It is better as a later step once simpler agents have a track record.

### How do you measure an AI agent's performance?

Against a baseline taken before launch: stale deals, missed follow-ups, time spent on CRM updates, and errors found in a weekly random spot-check. Approval rates alone can be misleading.

### Why do agentic AI projects fail?

Gartner cites escalating costs, unclear business value and inadequate risk controls. Choosing an ambitious, client-facing first agent makes all three more likely.

## Sources and notes

- Gartner forecast, June 2025, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says) and [Martechvibe](https://martechvibe.com/?p=49029).
- [Salesforce, State of Sales 2026](https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/), with detail via [Dynamic Business](https://dynamicbusiness.com/topics/news/high-performing-sales-teams-are-1-7x-more-likely-to-use-ai-agents). Vendor-run survey; expected savings.
- Validity, State of CRM Data 2026, as reported by [MarTech](https://martech.org/marketers-know-ai-is-using-bad-data-to-make-decisions/).
- The four tests, scoring and clerk specification are **lowob**'s working method.

## Related research

- [Approval Rate Measures Fatigue Too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [Claude Is Not Your Intern. Build a Repeatable GTM Workflow](https://lowob.com/research/claude-gtm-operating-system/)
- [What Is an AI Agent, and Where Does It Fit in the Brain?](https://lowob.com/research/what-is-an-ai-agent/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [How to Choose an AI Agent Platform: A Buyer's Checklist](https://lowob.com/research/how-to-choose-an-ai-agent-platform/)

## Next move

Write your first agent's specification on one page, including the list of things it must never do. If it does not fit on a page, the job is too big for a first agent.

[Start a conversation](https://lowob.com/contact/)
