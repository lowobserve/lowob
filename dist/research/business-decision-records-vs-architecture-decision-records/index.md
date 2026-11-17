# Business Decision Records vs Architecture Decision Records

Source: https://lowob.com/research/business-decision-records-vs-architecture-decision-records/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: An architecture decision record captures one software design choice with its context, decision, status and consequences. A business decision record applies the same discipline to commercial and operating decisions and adds what engineering records usually skip: one named owner, an expected outcome, a falsifier and a check date, so the decision can be graded and its outcome written back.

An architecture decision record (ADR) captures one significant software design choice with its context, decision, status and consequences; a business decision record applies the same format to commercial and operating decisions, and adds one named owner, an expected outcome, a falsifier and a check date. The immutability rule carries over unchanged: an accepted record is superseded, never edited. What changes is the reader, the storage and the need to grade the outcome.

*Figure: Where this piece sits: the commercial line, where the build starts.*

Both formats serve the record layer of the enterprise brain, the part of the loop a company has to write for itself, as argued in [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/). Engineering teams have practised it since 2011; most commercial teams have not.

## What is an architecture decision record?

An ADR is a short document that records one architecturally significant decision, why it was made and what follows from it. Fowler's reference entry, updated 24 March 2026, defines it as "a short document that captures and explains a single decision."

Nygard's November 2011 post set the shape. The context describes "the forces at play" in value-neutral language. The decision is written in full sentences, "We will...". The consequences list everything that follows, and Nygard insisted that "all consequences should be listed here, not just the 'positive' ones." Records are numbered, stored with the code, and kept when reversed: "we will keep the old one around, but mark it as superseded."

MADR, an open-source template now at version 4.0.0 (17 September 2024), adds decision drivers, considered options and a confirmation section. The UK framework of 4 November 2025 asks for a title, date, status, context, decision, consequences, stakeholders consulted and links to supporting documents.

## What is a business decision record?

A business decision record is the same discipline applied to a commercial or operating decision, such as a discount, a pricing exception, a partner agreement or a hire. Its core fields are the decision, reason, owner, status, expected outcome, check date and falsifier.

The [decision record explainer](https://lowob.com/research/what-is-a-decision-record/) covers the concept and the [decision record template](https://lowob.com/research/decision-record-template/) gives every field. The point of difference is grading. A software architecture choice may take years to prove itself, and its consequences are often qualitative. A renewal discount has a result within a quarter. That makes it possible, and worth the effort, to write down in advance what would prove the decision wrong.

## What is the difference between a business decision record and an ADR?

The structure and the immutability rule are the same; the subject, reader, storage and outcome tracking differ. The table sets out each difference.

| Dimension | Architecture decision record | Business decision record |
| --- | --- | --- |
| Subject | One significant software design choice | One recurring commercial or operating decision |
| Origin | Nygard, November 2011 | Adapted from the ADR format |
| Typical author | Engineer or architect | Decision owner: sales, finance, operations or a founder |
| Core sections | Title, context, decision, status, consequences | Decision, reason, owner, status, expected outcome, check date, falsifier |
| Statuses | Proposed, accepted, deprecated or superseded | Proposed, accepted, superseded or closed |
| Change rule | Never reopened; superseded by a new record | Same |
| Outcome tracking | Rare; Fowler suggests noting what should prompt re-evaluation | Required: outcome written back on the check date |
| Where it lives | Markdown files in the code repository | CRM object, database table or shared sheet |
| Who reads it | Future developers and AI coding assistants | Sellers, managers, auditors and AI agents |
| Sensitivity | Usually internal technical detail | Often holds client terms; needs permissions |
| Volume | Every architecturally significant decision | The ten or so decision classes that recur and carry money |

## What carries over from ADRs unchanged?

Five conventions transfer directly, and they are the ones most often missing from business records. Each has a reason that holds outside engineering.

- **One decision per record.** Nygard argued that "small, modular documents have at least a chance at being updated." A meeting summary with six decisions in it is not a record of any of them.
- **Sequential numbering.** Numbers are never reused, so a reference to DR-0042 always means the same record.
- **A status.** Proposed, accepted and superseded separate the live answer from history. An AI agent reading a record needs this more than a person does, because it cannot tell from tone which document is current.
- **Supersede, never edit.** Fowler's rule is that an accepted record "should never be reopened or changed - instead it should be superseded." [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) explains why the change and its reason are the most useful information a record holds.
- **Write it for a future reader.** Nygard framed each ADR as a conversation with a future developer. Business records are a conversation with a future seller, owner or auditor. The failure modes he named, "blind acceptance" and "blind reversal", are the same on the commercial side.

AWS's prescriptive guidance, published in March 2022, adds a goal business teams share: records "reduce recurring and time-consuming decision-making efforts." McKinsey's survey of 1,259 respondents (1,228 of them included in the results), published 30 April 2019, found managers spent 37% of their time on decisions and 61% said most of that time was used ineffectively. The figures are self-reported, but they show what re-made decisions cost.

## What has to change for business decisions?

Four things: a gradable outcome, a named owner, storage outside a code repository, and permissions.

**A gradable outcome.** ADRs record consequences; business records must also record a prediction. The falsifier names a measure, a threshold, a date and an observer, so that someone other than the author can say whether the decision worked. [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/) sets out how to write one.

**A named owner.** An ADR is often the team's decision. A business decision needs one accountable person, because the check date needs someone to turn up.

**Storage people already open.** Fowler notes that repository storage does not suit decisions covering a broader ecosystem, and that git can be hard for non-developers. Commercial records belong beside the CRM or in a structured table with fixed columns, so they can be grouped by decision class, segment and size.

**Permissions.** A discount record may contain a client's name and terms. Precedent can travel as a pattern, such as segment, size and discount band, without exposing another client's details to every reader or agent.

## Can one company use both?

Yes, linked. Engineering decisions often follow business ones: a product team's choice of billing system follows a pricing decision.

Give each record a decision class and link the ADR to the business record that motivated it. When the business decision is superseded, engineers can see which technical choices to re-examine. The [enterprise brain explainer](https://lowob.com/research/what-is-an-enterprise-brain/) describes the loop both records feed: store, wiring, record, reasoning and learning.

## lowob takeaways

- **Same rules, different reader.** One decision per record, numbered, with a status, superseded never edited.
- **Business records add a prediction.** Expected outcome, falsifier and check date make them gradable.
- **Store them where owners work.** A CRM object or structured table, not a code repository.
- **Link the two logs.** Technical decisions often follow business ones, and should say so.

## Common questions

### What is an architecture decision record (ADR)?

A short document capturing one significant software architecture decision with its context, the decision, its status and its consequences. Michael Nygard proposed the format in November 2011. Records are numbered, stored with the code and never edited once accepted: a changed decision gets a new record that supersedes the old one, so the history survives.

### Can ADRs be used for business decisions?

The format carries over well, but business decisions need additions. Keep the one-decision rule, numbering, status and supersession. Add one named owner, an expected outcome, a falsifier with a measure, threshold, date and observer, and a check date, then write the outcome back. Store the records where business owners work, not in a code repository.

### What is the difference between a decision record and meeting minutes?

Minutes record what was discussed, in order, often covering several topics. A decision record captures one decision with its reason, owner, status, expected outcome and check date, and links to the minutes as a source. Minutes are not superseded when a decision changes; a decision record is, which is what lets a reader find the current answer.

### Who should own a business decision record?

One named person who is accountable for the decision, usually the person with authority to make it, such as the head of sales for a discount policy. Approvers and people consulted are recorded separately. A single owner matters because someone has to check the falsifier on the check date and write the outcome back.

## Sources and notes

- [Michael Nygard, Documenting Architecture Decisions](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions), Cognitect blog, 15 November 2011. Original ADR proposal for software projects.
- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), updated 24 March 2026. Practitioner reference; notes the idea is worth considering in other contexts.
- [MADR, Markdown Architectural Decision Records](https://adr.github.io/madr), version 4.0.0, 17 September 2024. Open-source template; architecture-focused.
- [GOV.UK, Architectural Decision Record framework](https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework), DSIT, 4 November 2025. Public-sector standard.
- [AWS Prescriptive Guidance, Using architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html), March 2022. Vendor guidance.
- [McKinsey, Decision making in the age of urgency](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency), 30 April 2019. Self-reported online survey fielded February 2018.
- The business decision record fields and the comparison are **lowob**'s adaptation of the ADR format.

## Related research

- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [Decision Record Template: Fields, Example and How to Use It](https://lowob.com/research/decision-record-template/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [What Is a Context Graph?](https://lowob.com/research/what-is-a-context-graph/)

## Next move

If your engineering team already writes ADRs, borrow their numbering and status rules for one commercial decision class this week, and add the expected outcome, falsifier and check date they usually leave out.

[Start a conversation](https://lowob.com/contact/)
