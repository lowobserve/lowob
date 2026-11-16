# What Is a Decision Record?

Source: https://lowob.com/research/what-is-a-decision-record/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: A decision record captures one decision with its reason, owner, status and expected outcome. The format comes from software architecture decision records, which are never edited once accepted but superseded by new ones. On the commercial line it is the part of the enterprise brain no connector can supply.

A decision record is a short, dated entry that captures one decision: what was decided, why, who owns it, its current status and what outcome is expected. The format comes from software architecture, where Michael Nygard proposed architecture decision records in 2011. For a commercial team it is the part of the enterprise brain that no connector can supply, because a reason nobody wrote down cannot be retrieved.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What a decision record means

The idea is older than AI. Martin Fowler describes an architecture decision record as a short document that captures and explains a single decision, ideally about a page long, covering the decision, its context and its significant consequences. Michael Nygard coined the term in 2011. AWS published prescriptive guidance on the practice in 2022, describing records as hand-over and reference documentation for future teams.

The UK Department for Science, Innovation and Technology published an Architectural Decision Record framework on 4 November 2025. It asks for a title, date, status, context, decision, consequences, the stakeholders consulted and links to supporting documents. It is mandated for cross-government decisions and recommended everywhere else.

Two conventions carry over to business decisions. First, a record has a status. Fowler lists proposed, accepted and superseded. Second, once a record is accepted it is not reopened. If the decision changes, a new record supersedes it and the old one links forward. The log then shows what was decided, and how long each decision governed the work.

## How it works on the commercial line

A commercial decision record needs fewer words than an architecture one, and one field architecture records often skip: the outcome expected.

| Field | What to write | Illustrative example |
| --- | --- | --- |
| Decision | One sentence, stated first | Approve a 12% discount on a two-year renewal |
| Reason | Why, including the evidence that mattered | Competing quote received; account expanding into a second region |
| Owner | One named person | Head of sales |
| Date | When it was made | The approval date |
| Status | Proposed, accepted, superseded or closed | Accepted |
| Expected outcome | Measure, threshold, date | Renewal signed at or above the prior year's value by quarter end |
| Check date and links | When to review; links to the quote and thread | Quarter end; CRM opportunity and email |

The expected outcome is what makes the record a judgement rather than a press release. "If it does not work out" leaves the meaning to be decided later. A measure, a threshold and a date can be checked by someone other than the author. When the check date arrives, the outcome is written back to the same record.

For AI agents, the record does a second job. An agent preparing a renewal can read the last three comparable discount decisions, their reasons and what happened. Documents tell an agent what is true. Decisions tell it what the company does.

## Common mistakes

| Mistake | Why it fails | Fix |
| --- | --- | --- |
| Editing the record when the decision changes | The reason for the change disappears | Supersede with a new record and link both |
| Free-text reasons only | Records cannot be grouped or compared | Add a few fixed fields: segment, deal type, size band |
| Recording every decision | The habit collapses within weeks | Record the ten or so that recur and carry money |
| AI summaries as the only copy | Nobody can inspect the source | Keep the original record; let summaries point to it |
| No check date in a calendar | Outcomes never get written back | Put the check date in the owner's calendar |

The cost of not keeping records is measurable in time. In McKinsey's 2019 survey of 1,228 managers, respondents spent an average of 37% of their working time on decisions, and 61% said most of that time was used ineffectively. A record does not make the decision better on its own. It makes the next similar decision faster, and makes a bad pattern visible.

## lowob takeaways

- **One decision, one record.** Short, dated, owned and given a status.
- **Supersede, never overwrite.** The change and its reason are the most useful information you hold.
- **Write the expected outcome first.** A measure, threshold and date make the decision gradable.
- **Start small.** The recurring commercial decisions that carry money come first.

## Sources and notes

- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), March 2026. Practitioner reference; credits Nygard's 2011 original.
- [GOV.UK, Architectural Decision Record framework](https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework), DSIT, 4 November 2025. Public-sector standard.
- [AWS Prescriptive Guidance, Using architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html), March 2022. Vendor guidance.
- [McKinsey, Decision making in the age of urgency](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency), April 2019. Self-reported survey.
- The commercial fields and expected-outcome structure are **lowob**'s adaptation of the ADR format.

## Related research

- [The commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/)
- [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [Your CRM is memory, not a brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)

## Next move

Take the last discount your team approved and write it up in the seven fields above. If the reason or the expected outcome cannot be found, start recording the next one.

[Start a conversation](https://lowob.com/contact/)
