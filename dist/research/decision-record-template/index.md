# Decision Record Template: Fields, Example and How to Use It

Source: https://lowob.com/research/decision-record-template/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: A decision record template is a fixed set of fields for one decision: what was decided, why, who owns it, its status, the expected outcome, the check date and the falsifier. This guide gives the full template as a table, a filled composite example and the usage rules borrowed from architecture decision records: never edit an accepted record, supersede it.

A decision record template is a fixed set of fields for writing down one decision: what was decided, why, who owns it, its status, the expected outcome, the date to check it and the falsifier that would prove it wrong. The template below has 18 fields, of which 10 are required. Copy it into a spreadsheet or database, fill it at the moment of decision, and never edit an accepted record: supersede it with a new one.

*Figure: Where this piece sits: the commercial line, where the build starts.*

This template is the record layer of **lowob**'s model of the enterprise brain, set out in [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/). The brain is a loop: store, wiring, record, reasoning and learning. Connectors and models can be rented. The record of what the company decided, and why, has to be written by the company, and this is the form to write it in.

## What is a decision record template?

It is a standard form for capturing one decision so that a later reader, human or AI agent, can see what was chosen, why, by whom, whether it is still current and whether it worked. The [decision record explainer](https://lowob.com/research/what-is-a-decision-record/) covers the concept; this page is the working form.

Software teams have used the pattern since 2011. Nygard's November 2011 post set out five sections and asked that the whole document be "one or two pages long". Fowler's 2026 entry says to keep it "typically a single page". The UK Department for Science, Innovation and Technology's framework, published 4 November 2025, requires a title, date, status, context, decision, consequences, stakeholders consulted and links to supporting documents. Business decisions need all of that, plus the fields that let the decision be graded later.

## Which fields does a decision record need?

Ten fields are required on every material decision; the other eight are recommended once the habit holds. Copy the table as it stands.

| # | Field | What to write | Required | Convention it comes from |
| --- | --- | --- | --- | --- |
| 1 | ID | A sequential number, such as DR-0042. Never reuse a number | Yes | Nygard 2011: numbers are "sequential and monotonic" |
| 2 | Title | A short noun phrase naming the decision | Recommended | Nygard 2011 |
| 3 | Question | What was being decided, in one line | Recommended | MADR 4.0: context and problem statement |
| 4 | Decision | One sentence, stated first, in the active voice | Yes | Nygard 2011: "We will..." |
| 5 | Reason and evidence | Why, in two or three sentences, with links to the sources | Yes | Fowler 2026: brief rationale and trade-offs |
| 6 | Alternatives considered | Each serious option rejected, and why | Recommended | MADR 4.0: considered options |
| 7 | Owner | One named person accountable for the decision | Yes | **lowob**: accountability needs a name |
| 8 | Approver and consulted | Who signed off; who was asked | Recommended | GOV.UK 2025: stakeholders consulted |
| 9 | Date decided (as-at) | When the organisation took this view | Yes | GOV.UK 2025; Fowler 2021: record time |
| 10 | Effective from (as-of) | When the decision starts to apply, if different | Recommended | Fowler 2021: actual time |
| 11 | Status | Proposed, accepted, superseded or closed | Yes | Nygard 2011; Fowler 2026 |
| 12 | Decision class and tags | Fixed values, such as pricing, segment, size band | Recommended | **lowob**: lets records be grouped |
| 13 | Expected outcome | What should happen if the decision was right | Yes | **lowob**: the record must be gradable |
| 14 | Falsifier | Measure, threshold, date and observer that would prove it wrong | Yes | **lowob**: the field that makes a record a judgment |
| 15 | Check date | When the observer looks; put it in their calendar | Yes | Fowler 2026: changes that should prompt re-evaluation |
| 16 | Supersedes, with reason and trigger | The record this replaces; why; new evidence, correction or reinterpretation | Yes | Nygard 2011 and Fowler 2026: supersede, never edit |
| 17 | Sources | Links to the transcripts, documents and threads relied on | Recommended | **lowob**: keep the sources |
| 18 | Outcome and lesson | What happened, written back on the check date, and one line for next time | Recommended at decision, required at check | **lowob**: outcome write-back |

Field 16 takes "none" when nothing is replaced; a blank looks like a forgotten link.

## What does a filled decision record look like?

The example below shows every field filled for one pricing decision. It is a composite, assembled from patterns common in mid-size B2B firms, not a record from any one company, and the figures are illustrative.

| Field | Composite example entry |
| --- | --- |
| ID | DR-0042 |
| Title | Mid-market renewal discount cap |
| Question | What is the most a seller can discount a mid-market renewal without finance approval? |
| Decision | We will cap mid-market renewal discounts at 10% without finance approval; above 10% needs the finance lead's sign-off |
| Reason and evidence | Discounts above 10% on renewals in the last two quarters did not lift renewal rates against those at 10% or below, and cost margin. Evidence: CRM renewal report, finance margin review |
| Alternatives considered | Keep the 15% cap (rejected: margin cost without retention gain); remove seller discretion entirely (rejected: slows routine renewals) |
| Owner | Head of sales |
| Approver and consulted | Finance lead approved; two account managers and revenue operations consulted |
| Date decided (as-at) | The approval date |
| Effective from (as-of) | First day of the next quarter |
| Status | Accepted |
| Decision class and tags | Pricing; renewal; mid-market; deal size band B |
| Expected outcome | Average renewal discount falls; gross renewal rate in the band holds |
| Falsifier | If gross renewal rate in the mid-market band falls more than 5 points below the prior two-quarter average over the next 30 renewals, the cap was wrong. Observer: revenue operations lead, from the CRM renewal report |
| Check date | After the 30th renewal or at quarter end, whichever comes later |
| Supersedes, with reason and trigger | DR-0017 (15% cap). Reason: margin review. Trigger: new evidence |
| Sources | Links to the renewal report snapshot, the margin review and the approval thread |
| Outcome and lesson | Blank until the check date; then the measured renewal rate, the status decision and one line for the next pricing call |

The falsifier counts renewals rather than weeks, so the check does not arrive before there is enough evidence. The outcome stays blank at decision time.

## How do you write the falsifier?

Name four things: a measure, a threshold, a date or case count, and the person who checks. "If it doesn't work out" has none of them and cannot be graded.

The argument is in [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/). The practical rule: ask each decision-maker to write their own falsifier before discussion and then compare. Two people who agree on the choice often write different falsifiers, which shows they are making different bets. Fowler's 2026 entry points the same way from engineering: it suggests recording a confidence level and the changes in context that should prompt re-evaluation.

## How do you use the template day to day?

Fill it at the moment of decision, keep one decision per record, and change records only by superseding them. Six rules keep the habit alive.

1. **One decision, one record.** Nygard scoped each record to one significant decision, noting in 2011 that "small, modular documents have at least a chance at being updated."
2. **Write before discussion closes.** The reason and falsifier written afterwards tend to fit whatever happened.
3. **Never edit an accepted record.** Create a new one, link it with field 16, and mark the old one superseded. Nygard's rule: "If a decision is reversed, we will keep the old one around, but mark it as superseded." [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) explains why the change is the most useful information.
4. **Record the trigger.** New evidence, correction of an error and reinterpretation of the same evidence are different problems. Frequent reinterpretation points at how a view is formed.
5. **Link the sources; do not paste summaries.** A model's summary of a meeting should point to the transcript, not replace it, as argued in [Keep the sources, let the summary regenerate](https://lowob.com/research/keep-the-sources-let-the-summary-regenerate/).
6. **Put the check date in a calendar.** On that date the observer writes the outcome back and sets the status: hold, reverse with a new record, or close.

Nygard named the two failures the rules prevent: "blind acceptance" and "blind reversal" of decisions whose reasons are unknown. AWS's prescriptive guidance, published in March 2022, describes the payoff for engineering teams: a collection of records provides "a hand-over experience and reference documentation."

## Where should decision records live?

In one structured table or database that people and agents can both read, with a fixed set of columns matching the template. A spreadsheet is enough to start.

Engineering teams keep architecture records as numbered Markdown files in the code repository, which Nygard proposed in 2011 and Fowler still describes in 2026. Fowler also notes that repository storage does not suit decisions covering a broader ecosystem, and that git can be hard for non-developers. Business records usually belong next to the systems they govern: a CRM custom object, a database table or a shared sheet with locked columns. Whatever the tool, test one thing before committing: the full record, with its history and links, must export whole if the vendor changes.

Record only the decisions that recur and carry money; [The commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/) lists ten.

## lowob takeaways

- **Ten fields are required.** ID, decision, reason, owner, date, status, expected outcome, falsifier, check date and supersedes.
- **The falsifier makes it gradable.** Measure, threshold, date and observer, written before discussion.
- **Supersede, never edit.** A changed decision is a new record with a reason and a trigger.
- **Write the outcome back.** On the check date, to the same record, with one line for next time.

## Common questions

### What should a decision record template include?

At minimum: an ID, the decision in one sentence, the reason with evidence, one named owner, the date, the status, the expected outcome, a falsifier, a check date and a link to any record it supersedes. Recommended extras are the question, alternatives considered, approvers, tags, sources, and the outcome and lesson written back on the check date.

### What is the difference between a decision record and a decision log?

A decision record captures one decision. A decision log is the ordered collection of records, numbered in sequence. Fowler describes the log as "a valuable historic record" that explains why things turned out as they did. Superseded records stay in the log, linked to their replacements, so the history of each decision survives.

### Can I use an architecture decision record template for business decisions?

Yes, with additions. Nygard's 2011 format of title, context, decision, status and consequences carries over. Business decisions also need one named owner, an expected outcome, a falsifier with a measure, threshold, date and observer, and a check date, because commercial outcomes can be measured within a quarter and should be written back.

### How long should a decision record be?

Short. Nygard asked in 2011 for one or two pages, and Fowler's 2026 entry suggests a single page. For recurring commercial decisions, a single row of a structured table is often enough, provided the reason, falsifier and links to the sources are filled in rather than left for later.

### What happens when a decision changes?

Create a new record, link it to the old one, and set the old record's status to superseded. Record the reason for the change and its trigger: new evidence, correction of an error, or reinterpretation of the same evidence. Never edit the accepted record in place, because the change and its reason are the most useful information.

## Sources and notes

- [Michael Nygard, Documenting Architecture Decisions](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions), Cognitect blog, 15 November 2011. The original ADR proposal; written for software projects.
- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), updated 24 March 2026. Practitioner reference; credits Nygard.
- [MADR, Markdown Architectural Decision Records](https://adr.github.io/madr), version 4.0.0, 17 September 2024. Open-source template; architecture-focused, though the project says it can be used for any decision.
- [GOV.UK, Architectural Decision Record framework](https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework), DSIT, 4 November 2025. Public-sector standard; mandated only for cross-government decisions.
- [AWS Prescriptive Guidance, Using architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html), March 2022. Vendor guidance for software teams.
- [Martin Fowler, Bitemporal History](https://www.martinfowler.com/articles/bitemporal-history.html), 7 April 2021. Source for the as-of and as-at distinction.
- The 18-field template, the required set, the falsifier field and the composite example are **lowob**'s working method. The example is a composite and its figures are illustrative.

## Related research

- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [The Field That Makes a Record a Judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/)
- [Business Decision Records vs Architecture Decision Records](https://lowob.com/research/business-decision-records-vs-architecture-decision-records/)
- [What Is Organizational Memory, and How AI Changes It](https://lowob.com/research/what-is-organizational-memory/)

## Next move

Copy the template into a shared sheet this week and fill it for the last discount or pricing exception your team approved. Every field you cannot fill from memory or the CRM is a field to capture at the next decision.

[Start a conversation](https://lowob.com/contact/)
