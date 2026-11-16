# Built to be kept without us

Source: https://lowob.com/research/built-to-be-kept-without-us/
Publisher: lowob (https://lowob.com)
Published: 2026-10-02 · Updated: 2026-11-16
Function: Strategy

> Summary: The honest test of any judgment system, and of anyone who installs one, is whether it keeps working after they leave. A system whose operators cannot be removed without the record degrading has the same flaw it was built to fix. Regulators now treat switching barriers as a market failure: the EU Data Act bans cloud switching charges from January 2027, and the UK's competition authority found egress fees and interoperability barriers limit customer choice. Those rules help you leave a vendor. They do not make a record readable without the people who built it, which is the harder test.

## Key points

- Most enterprise software and most advisory work is built to be needed; leaving is expensive by design.
- A judgment record kept without its builders needs four things: ownership, portability, operability and a handover pack of the builder's own reasoning.
- EU switching rules have applied to cloud and SaaS providers since September 2025, and switching charges are prohibited from 12 January 2027.
- Ownership is necessary and not sufficient: a record nobody maintains depreciates and starts to mislead.
- Handing over the memory gives up one reason to be rehired, and that is deliberate.

Most enterprise software, and most advisory work, is built to be needed. The vendor holds the data, the model and the definitions. The consultant holds the context. Leaving is expensive by design, and that expense is part of the business model.

A judgment record argues for the opposite. Its whole value is that reasoning survives the people who produced it. That has to include the people who built the system. If the record only makes sense while a particular vendor, team or advisor is present to interpret it, it is not institutional memory. It is a dependency with good documentation.

## Lock-in is now a regulatory concern

Switching costs used to be treated as a commercial matter between buyer and supplier. That has changed in two large markets.

In the EU, the Data Act's switching rules have applied since 12 September 2025 to infrastructure, platform and software-as-a-service providers serving EU customers. Contracts must let a customer start switching on no more than two months' notice, the switch must normally be completed within 30 days, the contract must specify which data and digital assets can be exported, and providers must support the customer's exit strategy. Switching charges have been limited to cost since January 2024 and are prohibited outright from 12 January 2027.

In the UK, the Competition and Markets Authority's 2025 cloud market investigation found that data egress fees and interoperability barriers limit customer choice by making switching and multi-cloud use harder. In March 2026 it announced a package of further actions, including a strategic market status investigation into Microsoft's business software ecosystem.

These rules address one kind of lock-in: the cost of moving data. A judgment record has a second kind. The data can be exported in full and still be useless if nobody can read the reasoning, run the routines or tell which views are current. That is the lock-in an installer controls, and no regulation removes it.

## What "kept without us" requires

**Ownership.** The organisation owns the records, the sources and the accounts. Not a licence to view them; ownership.

**Portability.** Everything can be exported, with history, supersession links and outcomes, in a documented format that can be read without the original tools.

**Operability.** The routines that keep the record alive, capture, conflict adjudication, the falsifier sweep, are documented and can be run by the organisation's own people.

**A handover at the end.** Every engagement closes with a handover pack of the builder's own reasoning: what was recommended, what was rejected and why, what to watch, and the graveyard of approaches tried and dropped during the engagement.

| Requirement | What it means | How to test it | Failure it prevents |
| --- | --- | --- | --- |
| Ownership | Records, sources and accounts held by the organisation | Check whose name each account and storage location is in | Access withdrawn at cancellation |
| Portability | Full export with history, supersession links and outcomes | Export everything and open it without the original tools | Data that moves but cannot be read |
| Operability | Routines documented for the organisation's own people | Someone else runs a week of routines from the documents alone | Only the builder can keep it alive |
| Handover pack | The builder's reasoning, including rejected options | Ask a new hire to explain a past decision from the pack | The next team repeats dropped approaches |

The portability test has a precedent in software. Michael Nygard's 2011 proposal for architecture decision records kept each decision as a short text file in the project's own repository, with its context, status and consequences. Superseded records stay, marked with what replaced them, and numbers are never reused. Plain files in the client's own store are about as portable as a record can be. Our piece [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) applies the same rule to judgment records, and our explainer on [what a decision record is](https://lowob.com/research/what-is-a-decision-record/) sets out the fields.

## The honest caveat: a static record depreciates

Ownership is necessary and not sufficient. A judgment record that nobody maintains loses value. Precedents age. Conditions change. Views that were current become superseded in the world but not in the record, and an unmaintained record starts to mislead rather than inform.

So say it plainly, in the same breath as handing it over: you own this, and it depreciates unless someone keeps it current. Then give the organisation what it needs to do that itself, a maintenance rhythm small enough to survive: a weekly decision review, a quarterly falsifier sweep, an annual read of what keeps going wrong.

| Rhythm | What happens | What it catches |
| --- | --- | --- |
| Weekly decision review | New decisions captured; open ones checked for owner and status | Decisions made but never recorded |
| Quarterly falsifier sweep | Each live view checked against what would have proved it wrong | Views the world has superseded |
| Annual read | Patterns across the year's outcomes and dropped approaches | The mistakes the organisation keeps repeating |

The cost of skipping it is measurable in other settings. Panopto's 2018 survey of 1,000 workers estimated that 42% of institutional knowledge is unique to the individual in the role, and that knowledge workers lost 5.3 hours a week waiting for or recreating information. A record that is not maintained drifts back toward that state, one stale entry at a time. Where AI agents draw on the record as [decision precedent](https://lowob.com/research/what-is-decision-precedent-in-ai/), a stale entry is worse than a missing one, because it is retrieved and trusted.

> Handing over the memory gives up one reason to be rehired. That is deliberate.

## The standard we hold ourselves to

At **lowob** the client owns the records, the sources and the accounts, and can export everything with its history at any time. Every engagement ends with a handover pack of our own reasoning. Cancellation never holds a client's memory hostage. And when we hand the record over, we say clearly that it is a depreciating asset without maintenance, and show how to maintain it.

Handing over the memory gives up one reason to be rehired. That is deliberate.

## The bet

Organisations rehire the people and products that left them better off, not the ones they could not get rid of. In a market where every vendor can reach the same data through the same protocol with the same models, trust earned that way may be the most durable advantage left.

The enterprise brain worth having is the one that can show what it decided, why, what would have proved it wrong, and when it changed its mind, and that still can, after everyone who built it has gone. Our explainer on [what an enterprise brain is](https://lowob.com/research/what-is-an-enterprise-brain/) sets out the loop the record sits inside.

**In practice**

Test whether your judgment record survives the removal of its builders: export it, and have someone else run a week of routines from the documentation alone. Put ownership, export and exit terms in every contract that touches decision records. End every engagement with a handover pack of the builder's own reasoning. Tell clients, in writing, what maintenance the record needs to keep its value.

**What would prove this wrong:**

Evidence that clients consistently prefer, and get better outcomes from, judgment systems operated entirely by vendors, with no ownership or portability, over several years.

## lowob takeaways

- **Own it outright.** The organisation should own the records, sources and accounts, not hold a licence to view them.
- **Test the exit early.** Export the record and have someone else run a week of routines from the documentation alone.
- **Hand over the reasoning.** Every engagement should end with a pack of the builder's own reasoning, including rejected approaches.
- **Budget for maintenance.** A record without a weekly, quarterly and annual rhythm depreciates and starts to mislead.

## Common questions

### How do I avoid vendor lock-in with a decision record or knowledge system?

Put ownership, export and exit terms in every contract that touches decision records, and make sure everything exports with its history in a documented format that can be read without the original tools.

### Does the EU Data Act stop SaaS lock-in?

It helps. Since September 2025 providers serving EU customers must support switching on no more than two months' notice, usually within 30 days, and switching charges are banned from 12 January 2027. It moves the data; it does not make the reasoning readable.

### What should a consultant hand over at the end of an engagement?

A handover pack of their own reasoning: what was recommended, what was rejected and why, what to watch, and the approaches tried and dropped.

### Does a judgment record keep its value once it is handed over?

No. An unmaintained record depreciates and starts to mislead. It needs a maintenance rhythm such as a weekly decision review, a quarterly falsifier sweep and an annual review.

## Sources and notes

- [Latham & Watkins, EU Data Act: significant new switching requirements](https://www.lw.com/en/insights/2025/08/EU-Data-Act-Significant-New-Switching-Requirements-Due-to-Take-Effect-for-Data-Processing-Services), August 2025. Law firm summary of Regulation (EU) 2023/2854; not legal advice for any specific contract.
- [UK Competition and Markets Authority, CMA announces package of actions on business software and cloud services](https://www.gov.uk/government/news/cma-announces-package-of-actions-on-business-software-and-cloud-services), 31 March 2026. Regulator press release; UK market, focused on large cloud providers.
- [Michael Nygard, Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), 15 November 2011. Practitioner essay for software teams.
- [HR Dive, Inefficient knowledge sharing costs large US businesses $47M a year](https://www.hrdive.com/news/inefficient-knowledge-sharing-costs-large-us-businesses-47m-a-year/527892/), 18 July 2018. Reports a Panopto survey of 1,000 workers; vendor research, older.
- The requirements table and maintenance rhythm are **lowob**'s framework.

## Related research

- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [What is a decision record?](https://lowob.com/research/what-is-a-decision-record/)
- [What is decision precedent in AI?](https://lowob.com/research/what-is-decision-precedent-in-ai/)
- [The graveyard](https://lowob.com/research/the-graveyard/)
- [Buy Context. Own Judgment. What Enterprise AI Teams Should Build](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)

## Next Move

Test a record by exporting it and having someone else run a week of routines from the documentation alone. Note every point where they had to ask the builder, and write those answers into the documentation.

[Start a conversation](https://lowob.com/contact/)
