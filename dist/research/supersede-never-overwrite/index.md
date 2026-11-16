# Supersede, never overwrite

Source: https://lowob.com/research/supersede-never-overwrite/
Publisher: lowob (https://lowob.com)
Published: 2026-08-31 · Updated: 2026-11-16
Function: Strategy

> Summary: A memory that edits itself in place cannot explain itself, because the change is the information. Judgment records should keep two dates, when a view was true and when it was held, and replace old views by linked supersession rather than editing them. Databases, architecture decision records and at least one agent-memory design already work this way.

Finance already knows how to store what was true and when it was known. Apply the same discipline to beliefs. A memory that edits itself in place cannot explain itself, and the change is the information. Judgment records should carry two dates, when a view was valid and when the organisation held it, and a changed view should be a new record linked to the old one by an explicit supersession, with a date, an author, a reason and a trigger.

*Figure: The Build Order, end to end. This piece maps the whole route.*

Most knowledge stores are updated like documents: open, edit, save. The previous version may survive in a history panel nobody reads. For a judgment system this is fatal, because when an organisation changes its mind, the change itself, and the reason for it, is the most valuable thing to record. Our explainer on [the decision record](https://lowob.com/research/what-is-a-decision-record/) sets out the fields; this piece is about what happens when one of them changes.

## Two clocks, not one

Data teams have long distinguished between two times. Martin Fowler's account of bitemporal history calls them **actual time**, when something was true in the world, and **record time**, when we learned it and what we believed at each point. Risk and regulatory teams often call them as-of and as-at. A restated figure has an as-of date in the past and an as-at date today.

Fowler's worked example is a salary. Payroll runs on 25 February at the old rate. On 15 March, HR reports a raise effective 15 February. On 5 April, HR corrects the amount. The record of what was believed on 25 February must stay as it was, because a payment was made on that belief, while the actual history is revised twice. Records are appended, not overwritten.

The database world standardised this. SQL:2011 introduced application-time periods, which track "the history of the thing out there", and system-versioned tables, which track when the database changed. A 2019 survey of implementations found IBM DB2 and MariaDB supporting bitemporal tables that combine both, and every major database surveyed supporting at least one kind of period.

| Clock | Question it answers | Example |
| --- | --- | --- |
| As-of (actual or valid time) | When was this view true? | "Account at risk from 1 March" |
| As-at (record or transaction time) | When did the organisation hold this view? | "Recorded on 20 March, replaced on 2 June" |

Judgment records need the same two clocks. When was this assessment valid? And when did the organisation hold it? Without both, you cannot answer the question every review eventually asks: what did we believe at the time we decided?

## What a supersession records

When a new view replaces an old one, the old record is not edited. A new record is created, linked to the old one by an explicit supersedes relation. Software teams already do this with architecture decision records. Fowler's reference entry, updated in March 2026, says an accepted record "should never be reopened or changed - instead it should be superseded", so that the log shows what was decided and how long each decision governed the work.

Agent memory can do it automatically. Zep's published design keeps two timelines for every fact, the order of events and the order of ingestion. When new information contradicts an existing fact, the system sets the old fact's end date to the new fact's start date rather than deleting it, preserving what its authors call "historical records of relationship evolution over time". This is a vendor's description of its own product, but it shows the pattern is buildable.

The link should carry four things:

| Field | What to write | Why |
| --- | --- | --- |
| Date | When the view changed | Fixes the as-at boundary |
| Author | Who made the change | Accountability and a person to ask |
| Reason | One sentence | The most useful line in the record |
| Trigger | New evidence, correction of an error, or reinterpretation of the same evidence | Separates learning from wavering |

That last field is underrated. An organisation that frequently changes its mind on the same evidence has a different problem from one that changes its mind because new facts arrived. Fowler's salary example contains both: the raise was new information, the corrected amount was an error.

> When an organisation changes its mind, the change, and the reason for it, is the most valuable thing to record.

## What it buys

**Hindsight-free review.** Baruch Fischhoff's 1975 experiments found that people told an outcome judged it as more inevitable than people who were not told, which he called "creeping determinism". A past decision reviewed against today's knowledge will look either obvious or reckless. Judged against what was knowable at the time, it is fairer to the people who made it and more useful for learning. Our piece on [outcome write-back](https://lowob.com/research/what-is-outcome-write-back/) covers how outcomes return to the record.

**Regulatory answers.** "What did you believe when you approved this, and on what basis?" becomes a query rather than a forensic exercise. Under the EU AI Act, once the high-risk rules apply (from 2 December 2027 for Annex III systems, as amended by Regulation (EU) 2026/1744), deployers of high-risk systems must keep automatically generated logs for at least six months; a supersession history gives those logs a business meaning. Our explainer on [the AI audit trail](https://lowob.com/research/what-is-an-ai-audit-trail/) covers the wider requirement.

**Reversal patterns.** Over time you can see which kinds of belief the organisation revises most often, and how long each view typically survives. A view that is reversed every six months is telling you something about how it is formed.

**Replay.** You can rerun a decision with the record as it stood, to test whether a new model or process would have done better on the same information.

**Cleaner retrieval.** Memory benchmarks find systems weakest on questions about how a fact changed. Explicit supersession links let a system return a timeline instead of guessing one, as argued in [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/).

## The cost

Storage and a little discipline. Records grow by a fraction of their size each time a view changes. Retrieval needs to default to current records and expose history on request. Both are trivial next to an organisation that cannot say why it changed its mind.

The one real design choice is deletion. Where a record must be erased for legal reasons, the supersession chain should keep a tombstone saying something was removed, when and why, as set out in [Keep the sources; let the summary regenerate](https://lowob.com/research/keep-the-sources-let-the-summary-regenerate/).

## In practice

Add as-of and as-at dates to every judgment record. Replace edit-in-place with supersession: new record, explicit link, date, author, reason, trigger. Default retrieval to current records, with history one click away.

Once a quarter, list the most frequently reversed views and ask why. Split them by trigger: a high share of reinterpretations of the same evidence is the signal to look at how those views are formed.

**What would prove this wrong:** organisations with edit-in-place memory doing as well on hindsight-free review, regulatory reconstruction and learning from reversals as those with full supersession history. Then the history is not earning its keep.

## lowob takeaways

- **Keep two clocks.** As-of for when a view was true, as-at for when it was held.
- **Supersede, never overwrite.** New record, explicit link, date, author, reason.
- **Record the trigger.** New evidence, correction and reinterpretation are different problems.
- **Default to current.** History one click away, not in the way.

## Sources and notes

- [Martin Fowler, Bitemporal History](https://www.martinfowler.com/articles/bitemporal-history.html), 7 April 2021. Practitioner reference; the salary example is his.
- [Paul A. Jungwirth, Survey of SQL:2011 Temporal Features](https://illuminatedcomputing.com/posts/2019/08/sql2011-survey/), September 2019. Independent practitioner survey; database support may have changed since.
- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), 24 March 2026. Practitioner reference; credits Nygard's 2011 original.
- [Rasmussen et al., Zep: A Temporal Knowledge Graph Architecture for Agent Memory](https://arxiv.org/html/2501.13956), January 2025. Vendor research paper describing its own product.
- [Fischhoff, Hindsight is not equal to foresight (PSNet summary)](https://psnet.ahrq.gov/issue/hindsight-foresight-effect-outcome-knowledge-judgment-under-uncertainty), *Journal of Experimental Psychology: Human Perception and Performance* 1(3), 1975. Laboratory experiments; summary page from AHRQ.
- [EU AI Act Service Desk, Article 26: Obligations of deployers of high-risk AI systems](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26), consolidated text as of 27 July 2026. Official Commission resource; applies to high-risk systems only.
- The four supersession fields and the quarterly reversal review are **lowob**'s working method.

## Related research

- [What is a decision record?](https://lowob.com/research/what-is-a-decision-record/)
- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/)
- [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)

## Next move

Add as-of and as-at dates to your decision records this week, and change the edit button to "supersede". The first time someone changes a view, ask them for the trigger.

[Start a conversation](https://lowob.com/contact/)
