# Two people: the founders' ledger

Source: https://lowob.com/research/two-people-the-founders-ledger/
Publisher: lowob (https://lowob.com)
Published: 2026-10-07 · Updated: 2026-11-16
Function: Strategy

> Summary: At two people, the enterprise brain is a single append-only decision document and a 30-minute weekly review. Its job is to stop two honest founders remembering the same decision differently, a problem with good evidence behind it, and it is worth more than any tool at this stage.

At two people, the enterprise brain is a single document and a weekly habit. Its job is to stop two honest people remembering the same decision differently, and it is worth more than any tool you could buy at this stage. One append-only ledger, one line per material decision with its reason, what was rejected, what would prove it wrong and where the founders disagreed, reviewed for 30 minutes a week.

This is the first rung of [*The scale ladder*](https://lowob.com/research/the-scale-ladder/), the series on how a company's decision record should change as it grows. At two people, the problem the record must solve is false shared memory.

Two founders make dozens of significant decisions in the first year, mostly in conversation: on a walk, on a call, at 11pm in a message thread. Both remember them. They remember them differently.

## Why two honest founders remember differently

This is not a trust problem. Memory is reconstructive. Each founder retains the version that fits their own view of why it was decided, and over months the versions drift.

The research on joint work explains the mechanism. In Ross and Sicoly's classic 1979 study, married couples each estimated their own share of household tasks, including making important decisions. Added together, the estimates exceeded 100%, so at least one partner had to be wrong. Caruso, Epley and Bazerman, reviewing that work in 2006, attribute the pattern mainly to accessibility: people notice and recall their own contributions more easily than other people's. In their own study of academic co-authors, the self-assessed shares of authors who did not first consider their colleagues' contributions summed to an average of 140%.

Two founders are in exactly that position, with higher stakes. The drift surfaces at the worst moments: in a disagreement about direction, in front of an investor, when a co-founder relationship is already under strain.

The cost of that strain is large. CNN, reporting Harvard Business School professor Noam Wasserman's research on 10,000 founders, gave the figure that 65% of high-potential startups fail because of conflict among co-founders. The same reporting noted that teams of friends and family failed most often, because they avoided difficult conversations to protect feelings. A written record cannot prevent conflict, but it removes one common fuel for it: two sincere and incompatible accounts of the same decision.

> Recording a disagreement calmly at the time defuses it later. Two memories of the same argument rarely do.

## The ledger

One document, append-only, that both founders can see. Each material decision gets a short entry.

| Field | What goes in it | Why it matters |
| --- | --- | --- |
| Date and decision | One line, written as a commitment | Fixes what was decided before memory edits it |
| Why | A sentence or two | The reason is what drifts first |
| What was rejected | The options not taken | Stops the same debate restarting from zero |
| What would prove it wrong, and when to check | A falsifier with a date | Turns a decision into a judgment that can be checked |
| Where the founders disagreed | Who held which view, and what was agreed | Defuses the argument before it becomes a grievance |
| Link to the evidence | The call note, email or numbers | Keeps the source alive behind the summary |

The disagreement line is the one most founders skip and most need. "We disagreed on the price; A wanted higher; we went with B's view and agreed to review after twenty deals" is a far better artefact than two memories of the same argument. It also corrects for the bias above: writing down the other founder's view at the time is, in effect, the "consider the other person's contribution" step that reduced overclaiming in Caruso's study, from 140% to about 123% on average.

The falsifier line matters for a different reason. A decision with no stated test cannot be learned from, at any size. Our piece [*The field that makes a record a judgment*](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/) sets out why this one field separates judgment from a press release. Our explainer [*What is a decision record?*](https://lowob.com/research/what-is-a-decision-record/) covers the basic structure.

Append-only means entries are never edited away. When the founders change their minds, they write a new entry that names the old one and says why. Software teams reached the same convention independently: Michael Nygard's 2011 format for architecture decision records keeps a reversed decision and marks it as superseded, because it still matters that the choice was once made.

## The habit

Thirty minutes once a week. Read last week's entries. Add any that were missed. Check any falsifier whose date has passed. That is the entire system.

AI makes it cheaper. Record and transcribe the founders' calls, with everyone's consent, and have a model draft candidate ledger entries from them. The founders correct and accept. Capture drops from a chore to a few minutes of editing. Our ranking of [AI notetakers for decision capture](https://lowob.com/research/top-5-ai-notetakers-for-decision-capture/) compares tools on what matters here, extracting what was decided and why, and our explainer on [conversation intelligence](https://lowob.com/research/what-is-conversation-intelligence/) covers the wider category.

A model's draft is a proposal, not the record: the founders accept or correct each entry. Keep the transcript linked as the source. For tool choices, our [*Top 5 tools for a founders' decision ledger*](https://lowob.com/research/top-5-tools-for-a-founders-decision-ledger/) notes that none of the common options is truly append-only, so the discipline has to come from the habit.

## Uses you will discover

**Investor updates write themselves.** The ledger is a record of what was decided and why, which is most of what a good update contains.

**Due diligence becomes easier.** A buyer or a lead investor asking why the company pivoted can be shown the entry, written at the time.

**The first hire gets context.** When the third person joins, the ledger is their best onboarding document, by far. That is the problem of the next rung, covered in [*Ten people: the first stranger*](https://lowob.com/research/ten-people-the-first-stranger/).

## What not to build

No knowledge base. No taxonomy. No tagging scheme. No integrations beyond transcription. At two people, every hour spent on infrastructure is an hour not spent on customers, and the structure will be wrong by the time it matters anyway.

The arithmetic supports the restraint. Two people have exactly one communication channel between them; Brooks's n(n-1)/2 formula does not start to bite until the team grows. The problem at this size is not finding information or coordinating many people. It is agreeing on one version of a handful of decisions. A document and a habit solve that, and anything larger solves a problem from a higher rung.

**In practice:** start one shared, append-only decision document today. Record disagreements explicitly, with who held which view. Hold a 30-minute weekly review, and check falsifiers on their dates. Use transcription and AI drafting to keep capture under five minutes a week.

## What would prove this wrong

Founding teams with no written decision record experiencing no more disputes about past decisions, and no slower onboarding of early hires, than those with one. The overclaiming research suggests that is unlikely, but it has not been tested on founding teams directly.

## lowob takeaways

- **Assume your memories differ.** Founders remember decisions differently because memory favours their own view, not because of a trust problem.
- **Write the disagreement down.** Recording who held which view, at the time, defuses the argument later.
- **Add a falsifier.** What would prove the decision wrong, and when to check.
- **Keep the habit small.** One document, 30 minutes a week, AI drafting with human acceptance.
- **Build nothing else yet.** No knowledge base, taxonomy, tagging scheme or integrations beyond transcription.

## Sources and notes

- [Caruso, Epley and Bazerman, The costs and benefits of undoing egocentric responsibility assessments in groups](https://anderson-review.ucla.edu/wp-content/uploads/2021/03/Caruso-et_al_Undoing_Egocentrism_JPSP2006.pdf), Journal of Personality and Social Psychology, 2006. Summarises Ross and Sicoly (1979); studies of couples and academics, not founders.
- [CNN Money, Fighting co-founders doom startups](https://money.cnn.com/2014/02/24/smallbusiness/startups-entrepreneur-cofounder), 24 February 2014. Secondary reporting of Noam Wasserman's research; methods not described in the article.
- [Michael Nygard, Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), 15 November 2011. Practitioner essay on software teams.
- [Project Wizards, Brooks's law (glossary)](https://www.projectwizards.net/en/project-management-glossary/brooks-law). Vendor glossary summarising Brooks's 1975 book; the formula counts possible channels.
- The ledger fields table is **lowob**'s framework.

## Related research

- [The scale ladder](https://lowob.com/research/the-scale-ladder/)
- [Ten people: the first stranger](https://lowob.com/research/ten-people-the-first-stranger/)
- [What is a decision record?](https://lowob.com/research/what-is-a-decision-record/)
- [What is conversation intelligence?](https://lowob.com/research/what-is-conversation-intelligence/)
- [Top 5 tools for a founders' decision ledger](https://lowob.com/research/top-5-tools-for-a-founders-decision-ledger/)

## Next move

Open one shared document today and write entries for the last three material decisions, including where you disagreed. Put a 30-minute weekly review in both calendars.

[Start a conversation](https://lowob.com/contact/)
