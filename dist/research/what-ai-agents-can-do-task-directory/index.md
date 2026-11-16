# What AI Agents Can Do: A Task Directory for Commercial Teams

Source: https://lowob.com/research/what-ai-agents-can-do-task-directory/
Publisher: lowob (https://lowob.com)
Published: 2026-08-16 · Updated: 2026-11-16
Function: Revenue

> Summary: A reference directory of sixty commercial tasks across sales, marketing, partners, customer success and commercial operations. Each task is rated on lowob's autonomy scale, with today's reliability, the main risk and the guardrail required, and linked to the research behind it.

This directory rates sixty commercial tasks by how far an AI agent can take them today. Each row gives the highest sensible autonomy level on **lowob**'s five-step scale, a plain reliability rating, the main risk, and the control that has to be in place. Use it to choose first agents, to challenge vendor claims, and to decide where a person must stay in the loop. Ratings reflect our working view for mid-size commercial teams in late 2026 and will move as capability improves.

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

## How to read the directory

The directory is the reference table. The [Agents at Work](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/) series walks it one function at a time, with a start-here sequence for each: [sales](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/), [marketing](https://lowob.com/research/ai-agents-in-marketing-what-they-can-do-now/), [commercial operations](https://lowob.com/research/ai-agents-in-commercial-operations/), [partners and distribution](https://lowob.com/research/ai-agents-in-partners-and-distribution/) and [customer success](https://lowob.com/research/ai-agents-in-customer-success-and-account-management/). [What AI Agents Still Cannot Do](https://lowob.com/research/what-ai-agents-still-cannot-do/) covers the limits across all 60 tasks.

**Autonomy level** is the highest level we would set for a mid-size firm today: 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone. See [What Is an AI Agent?](https://lowob.com/research/what-is-an-ai-agent/) for the full scale.

**Reliability today** is our rating of how often current tools complete the task to a standard a reviewer would accept without major edits: High, Medium or Low. It reflects the evidence that agents handle checkable, internal work far better than open-ended or client-facing work. METR's measurements show success rates falling sharply as tasks lengthen, and Salesforce's 2026 State of Sales survey found the time sellers expect agents to save sits in research and drafting.

**Main risk** is what goes wrong when the task fails. **Control** is the minimum guardrail. OWASP's 2025 Top 10 for LLM applications is the reference for the security controls: limit tool scope and permissions, require approval for high-risk actions, and log every tool call.

## Sales

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

## Marketing

| Task | Autonomy | Reliability today | Main risk | Control |
| --- | --- | --- | --- | --- |
| Monitor competitors and market news | 3 Act and report | High | Missing a material change | Named sources; weekly human read |
| Turn an interview into draft posts | 1 Draft | High | Claims the company cannot support | Claims checked by a subject owner |
| Publish social posts | 1 Draft | Medium | Public error; regulatory breach in finance or crypto | Nothing publishes without a person |
| Draft campaign variants for testing | 1 Draft | High | Off-brand or unapproved claims | Brand and claims rules in context |
| Reallocate campaign budget | 1 Draft | Low | Spend moved on weak evidence | Budget holder approves; record expected outcome |
| Build audience segments from CRM data | 2 Act with approval | Medium | Consent or privacy breach | Consent fields respected; privacy review |
| Write SEO and answer-engine content briefs | 1 Draft | High | Thin or duplicative content | Editorial owner; check existing pages first |
| Draft long-form research | 1 Draft | Medium | Invented sources or statistics | Every figure opened and cited by a person |
| Score leads | 3 Act and report | Medium | Scores that encode old bias | Quarterly calibration against outcomes |
| Produce a monthly marketing report | 3 Act and report | High | Activity reported as impact | Report against agreed outcome measures |
| Personalise website content | 2 Act with approval | Medium | Wrong message to the wrong audience | Approved variants only |
| Reply to community questions | 1 Draft | Medium | Wrong or market-moving statements | Named communications owner approves |
| Translate and localise approved content | 2 Act with approval | Medium | Mistranslated claims in regulated markets | Native reviewer for regulated content |

## Partners and distribution

| Task | Autonomy | Reliability today | Main risk | Control |
| --- | --- | --- | --- | --- |
| Research and rank potential partners | 1 Draft | Medium | Partners chosen on surface signals | Human selection; record the reasoning |
| Draft partner outreach | 1 Draft | High | Overpromising terms | Approved terms only |
| Track referrals and attribute partner-sourced deals | 3 Act and report | Medium | Disputes over credit | Agreed attribution rules |
| Prepare partner quarterly reviews | 1 Draft | High | Missing context from the relationship | Partner manager edits |
| Monitor marketplace listings and reviews | 3 Act and report | High | Missed negative signal | Weekly human read |
| Respond to marketplace leads | 1 Draft | Medium | Slow or wrong first response | Queue with response-time alert |
| Draft co-marketing content | 1 Draft | High | Partner brand or claims breach | Both parties approve |
| Detect channel conflict on a deal | 3 Act and report | Medium | Two partners claim the same deal | Rules of engagement written down |
| Prepare partner onboarding and enablement packs | 1 Draft | High | Inconsistent messaging across partners | Approved enablement kit as the only source |

## Customer success and account management

| Task | Autonomy | Reliability today | Main risk | Control |
| --- | --- | --- | --- | --- |
| Prepare a renewal brief from usage and delivery data | 1 Draft | High | Missing a known issue | Account owner review |
| Flag at-risk accounts | 3 Act and report | Medium | False alarms or missed churn | Health score calibrated against outcomes |
| Draft a renewal or expansion proposal | 1 Draft | Medium | Wrong pricing or terms | Proposal approver |
| Summarise support tickets for an account | 3 Act and report | High | Misread sentiment | Linked to source tickets |
| Answer routine customer questions | 2 Act with approval | Medium | Wrong answer stated as fact | Approved knowledge base; escalation path |
| Resolve support cases end to end | 3 Act and report | Medium | Incorrect resolution | Outcome-priced tools allow measurement; sampling |
| Remind advisers of client moments (clienteling) | 3 Act and report | High | Relationship feels automated | Adviser writes every client message |
| Schedule quarterly business reviews | 3 Act and report | High | Clashes and missed stakeholders | Calendar rules |
| Draft a quarterly business review deck | 1 Draft | High | Stale or cherry-picked metrics | Figures pulled from live sources and checked |

## Commercial operations

| Task | Autonomy | Reliability today | Main risk | Control |
| --- | --- | --- | --- | --- |
| De-duplicate and clean CRM records | 3 Act and report | High | Wrong merge of distinct accounts | Merge rules; reversible changes; nightly report |
| Enrich records with third-party data | 3 Act and report | Medium | Inaccurate or non-consented data | Approved sources; privacy rules |
| Draft quotes from a price book | 1 Draft | Medium | Wrong price becomes a binding offer | Quote reviewer; price book marked current |
| Check contract terms against standard | 1 Draft | Medium | Missed non-standard clause | Legal owner reviews flagged items |
| Prepare the weekly pipeline review pack | 3 Act and report | High | Misleading summary | Links to underlying records |
| Reconcile delivery against what was sold | 3 Act and report | High | Under-delivery missed | Exceptions routed to account owner |
| Record decisions with reasons | 1 Draft | Medium | Reasons invented after the fact | Captured at the moment of approval |
| Write outcomes back to decisions | 3 Act and report | Medium | Wrong outcome linked | Owner confirms at check date |
| Maintain shared definitions | 0 Answer | Low | Definitions drift silently | Named owner per definition |
| Grant or change system access | 0 Answer | Low | Excessive agency; data exposure | Never delegated to an agent |
| Run the commission calculation | 3 Act and report | Medium | Disputes and trust loss | Finance review before payout |
| Monitor agent activity and cost | 3 Act and report | High | Runaway spend or loops | Spend caps; kill switch |

> If the control in the last column is not in place, drop the task one autonomy level.

## What the pattern shows

Three things make a task safe to delegate further: it is internal, it is checkable within minutes, and it is reversible. Research, summaries, tagging and record hygiene meet all three, which is why they cluster at levels 3 and High. Three things hold a task back: it reaches a client or the public, it commits money or terms, or it reads untrusted content while holding permissions. Outbound, pricing, discounts, public posts and access changes all fall here.

The evidence on adoption supports this pattern. Zapier's 2026 survey of enterprise leaders found most production agents still need a person to finish the job, and Gartner expects over 40% of agentic projects to be cancelled by 2027, citing costs, unclear value and weak risk controls. Our earlier piece [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/) sets out how to choose from the left-hand side of this directory first.

Illustrative example: using the directory to scope a pilot

Decision
:   Pilot three tasks rated High reliability (account research, call summaries, stale-deal flags) and decline an autonomous outbound pilot rated Low.

Reason and owner
:   The three tasks are internal, checkable and reversible; outbound reaches prospects directly. Owned by the head of revenue operations.

What changed
:   The pilot reports weekly against preparation time and stale-deal counts; outbound is revisited after the approval gate has three months of logs.

Illustrative: a composite of a mid-size B2B services firm, built from patterns across engagements.

## lowob takeaways

- **Start on the left of the table.** Internal, checkable, reversible tasks earn trust first.
- **Read the control column first.** No control, one level lower.
- **Client-facing and money-committing tasks stay at level 2 or below.** Until there is sustained evidence.
- **Re-rate quarterly.** Capability is moving faster than any static rating.

Gateway card

### Before you assign a task to an agent

- Task found in this directory, or rated the same way
- Autonomy level set at or below the directory level
- The control in the last column in place
- A named owner and a weekly spot-check

## Sources and notes

- [OWASP Top 10 for LLM Applications 2025](https://www.hackerone.com/blog/owasp-top-10-llms-2025-how-genai-risks-are-evolving), via HackerOne.
- [Salesforce, State of Sales 2026](https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/). Vendor-run survey of 4,000+ sales professionals; expected savings.
- [Zapier, 2026 AI agents survey](https://zapier.com/blog/ai-agents-survey/). Vendor survey; self-reported.
- Gartner forecast, June 2025, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says).
- METR, [Measuring AI Ability to Complete Long Tasks](https://arxiv.org/abs/2503.14499).
- All ratings are **lowob**'s working framework for mid-size commercial teams, reviewed quarterly; they are not a benchmark.

## Related research

- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [AI Agents in Sales: What They Can Do Now](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/)
- [What AI Agents Still Cannot Do](https://lowob.com/research/what-ai-agents-still-cannot-do/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [The Enterprise AI Glossary](https://lowob.com/research/enterprise-ai-glossary/)

## Next move

Take the three agent proposals on your desk and find each task in this directory. If any is rated above the level your controls support, scale it back before you sign.

[Start a conversation](https://lowob.com/contact/)
