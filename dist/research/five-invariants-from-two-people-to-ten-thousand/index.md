# Five Invariants, From Two People to Ten Thousand

Source: https://lowob.com/research/five-invariants-from-two-people-to-ten-thousand/
Publisher: lowob (https://lowob.com)
Published: 2026-10-23 · Updated: 2026-11-17
Function: Strategy

> Summary: Almost everything about an enterprise brain changes with size, but five things do not: decisions recorded with a reason and falsifier, sources kept, views superseded rather than overwritten, outcomes written back, and an organisation-owned record. Each has an established precedent outside AI. They cost almost nothing at two people and are the hardest thing to retrofit at ten thousand.

Almost everything about an enterprise brain changes with size: the tools, the owners, the governance, the automation, whether it can learn. Five things do not. Decisions are recorded with a reason and a falsifier; sources are kept and summaries treated as views; views are superseded, never overwritten; outcomes are written back; and the organisation owns the record. Get those right at two people and they carry you to ten thousand. Get them wrong at ten thousand and no platform will save you.

This is the closing piece of [*The scale ladder*](https://lowob.com/research/the-scale-ladder/). The series has described six rungs: a founders' document, a ledger strangers can read, a glossary, decision classes, a governed trace, a federated learning layer. Each rung is different. Underneath them is a short list of properties that are the same at every size. They are what make the record a record of judgment rather than a pile of content. The previous piece, [*Ten thousand people*](https://lowob.com/research/ten-thousand-people-density-and-the-case-for-federation/), argued a large firm should set these centrally.

## The five invariants

**1. Decisions are recorded with a reason and a falsifier.** What was decided, why, and what would prove it wrong by when. At two people it is a line in a document. At ten thousand it is a required field in every workflow. Same idea. Our piece [*The field that makes a record a judgment*](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/) explains why the falsifier is the one field that cannot be skipped.

**2. Sources are kept, and summaries are views.** The evidence behind a decision survives the summary of it, with a timestamp and an origin. A generated summary is a lossy compression made by one model on one day, as [*Keep the sources; let the summary regenerate*](https://lowob.com/research/keep-the-sources-let-the-summary-regenerate/) argues.

**3. Views are superseded, never overwritten.** When the organisation changes its mind, the old view remains, linked to the new one with a reason and a date.

**4. Outcomes are written back.** Someone checks the falsifier on its date and records what actually happened. Without this, nothing learns, at any size. Our explainer [*What is outcome write-back?*](https://lowob.com/research/what-is-outcome-write-back/) covers the mechanics.

**5. The organisation owns the record.** It can be exported, with history, and survives the replacement of any tool, vendor or person, including the people who built it.

> The invariants cost almost nothing at two people. They are the hardest thing to retrofit at ten thousand.

## Why these five, and the precedents behind them

None of the five is new. Each is a discipline another field adopted the hard way.

Software teams adopted decision records with reasons. Michael Nygard's 2011 format for architecture decision records asks for context, decision, status and consequences, "not just the positive ones". It also keeps reversed decisions, marked as superseded, because a newcomer who finds an unexplained decision can only blindly accept or blindly change it.

Finance adopted superseding for figures. Martin Fowler's 2021 account of bitemporal history separates actual history from record history: what was true, and what the organisation knew when. His payroll example, a backdated raise confirmed after the payroll had run, shows why overwriting the old value destroys the ability to explain past actions.

Forecasting adopted outcome write-back. The Good Judgment Project's results, summarised by Mellers, Tetlock and colleagues, depend on recorded probabilities scored against what happened: teams beat individuals, and the best aggregation beat the simple mean by as much as 60%. None of that is measurable without the outcome.

Law has started to require ownership. The EU Data Act, applicable since 12 September 2025, gives customers of data processing services the right to switch providers, with a transition period of at most 30 days after notice and, from 12 January 2027, no switching charges at all. The right is only as useful as the record's format: data held in a tool's private structure, without history, ports badly.

| Invariant | Precedent outside AI | What it prevents |
| --- | --- | --- |
| Reason and falsifier | Architecture decision records | Blind acceptance or blind reversal of past decisions |
| Sources kept, summaries as views | Audit evidence behind financial statements | A summary becoming the only surviving copy |
| Superseded, never overwritten | Bitemporal history in finance and payroll | Losing what the organisation believed and when |
| Outcomes written back | Scored forecasting | Claims of learning with nothing to learn from |
| Organisation owns the record | Data portability and switching rights | Losing the record with the vendor |

## What scales on top

Volume, which makes learning possible. Automation, which makes capture cheap. Governance, which makes the record defensible. Federation, which lets many records coexist. Each matters more as the organisation grows. None of them substitutes for the invariants, and all of them amplify whatever the invariants are, good or bad.

| Rung | What scales on top | What the invariants look like |
| --- | --- | --- |
| Two people | A weekly habit | A line per decision in one shared document |
| Ten people | An assistant over the record | Entries strangers can read, superseded not edited |
| Fifty people | A glossary and decision rights | Definitions with effective dates and owners |
| Two hundred people | Decision classes and precedent | Required fields, first calibration |
| One thousand people | Trace and evidenced review | Every AI-assisted decision reconstructable |
| Ten thousand people | Federation and a learning layer | Central invariants, one export format |

## One question per rung

If you remember nothing else from this series, ask the question for your size.

**Two:** would we both describe last month's big decision the same way?

**Ten:** can a new hire find out why we do this without asking a founder?

**Fifty:** do our teams mean the same thing by our ten most important words?

**Two hundred:** does a new manager see the three closest prior decisions before making one?

**One thousand:** could we reconstruct an AI-assisted decision from three months ago, end to end?

**Ten thousand:** do we know, by decision class, whether our judgment is getting better?

## Back to the thesis

This series began with a claim: the enterprise brain that compounds is not the one that remembers most, but the one that can show what it decided, why, what would have proved it wrong, and when it changed its mind. The five invariants are that claim, made operational. They cost almost nothing at two people. They are the hardest thing to retrofit at ten thousand, because the history they protect cannot be recreated once it is lost. That asymmetry is the best argument there is for starting small, and starting now. [*Whoever holds the record holds the company*](https://lowob.com/research/whoever-holds-the-record-holds-the-company/) makes the commercial case for owning it.

**In practice:** score your organisation against the five invariants today: present, partial or absent. Fix the first absent one before buying or building anything else. Ask your rung's question at the next leadership meeting, and write down the answer.

**What would prove this wrong:** organisations that lack one or more invariants at small scale and add them later at large scale, at low cost and without losing the history they skipped.

## lowob takeaways

- **Record the reason and the falsifier.** What was decided, why, and what would prove it wrong by when.
- **Keep the sources.** Summaries are views that can be regenerated; evidence cannot.
- **Supersede, never overwrite.** Link the old view to the new one with a reason and a date.
- **Write outcomes back.** Check every falsifier on its date and record what happened.
- **Own the record.** Exportable with history, and independent of any tool, vendor or person.

## Common questions

### What are the core principles of a company decision record?

Decisions are recorded with a reason and a falsifier, sources are kept, views are superseded rather than overwritten, outcomes are written back, and the organisation owns the record in an exportable form.

### When should a company start keeping a decision log?

Now, and small. The five invariants cost almost nothing at two people and are the hardest thing to retrofit at ten thousand, because skipped history cannot be recovered.

### Can automation or governance make up for a weak decision record?

No. Volume, automation, governance and federation matter more as an organisation grows, but none substitutes for the invariants and all amplify whatever the invariants are, good or bad.

### What does supersede, never overwrite mean?

When a decision or definition changes, the old version stays in the record, marked as superseded and linked to its replacement with a reason and a date, so past actions can still be explained.

## Sources and notes

- [Michael Nygard, Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), 15 November 2011. Practitioner essay on software teams.
- [Martin Fowler, Bitemporal History](https://www.martinfowler.com/articles/bitemporal-history.html), 7 April 2021. Practitioner essay on data modelling.
- [Mellers, Tetlock, Baker, Friedman and Zeckhauser, Improving the accuracy of geopolitical risk assessments](https://scholar.harvard.edu/sites/scholar.harvard.edu/files/rzeckhauser/files/improving_the_accuracy_of_geopolitical_risk_assessments.pdf), University of Pennsylvania Press, 2019. Book chapter on forecasting tournaments, not business decisions.
- [Faegre Drinker, The EU Data Act: data switching rights for EU customers](https://www.faegredrinker.com/en/insights/publications/2025/8/the-eu-data-act-data-switching-rights-for-eu-customers), August 2025. Law-firm summary; applies to data processing services in the EU.
- The precedent and rung tables are **lowob**'s framework.

## Related research

- [The Scale Ladder](https://lowob.com/research/the-scale-ladder/)
- [Ten Thousand People: Density, and the Case for Federation](https://lowob.com/research/ten-thousand-people-density-and-the-case-for-federation/)
- [What Is Outcome Write-Back?](https://lowob.com/research/what-is-outcome-write-back/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)

## Next move

Score your organisation against the five invariants this week: present, partial or absent. Fix the first absent one before you buy or build anything else, and ask your rung's question at the next leadership meeting.

[Start a conversation](https://lowob.com/contact/)
