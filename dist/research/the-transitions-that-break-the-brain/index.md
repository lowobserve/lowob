# The transitions that break the brain

Source: https://lowob.com/research/the-transitions-that-break-the-brain/
Publisher: lowob (https://lowob.com)
Published: 2026-10-22 · Updated: 2026-11-16
Function: Strategy

> Summary: Organisations rarely lose their reasoning gradually; they lose it at transitions such as the first hire, an acquisition, a founder's departure or a platform migration. Each is predictable and has a specific defence, and the defence is always cheaper before the transition than after it. Regulation and standard practice already describe several of the defences.

Organisations rarely lose their reasoning gradually. They lose it at transitions: the first hire, the first manager layer, an acquisition, a regulator's first visit, a founder's departure, a reorganisation, a platform migration. Each is predictable, and each has a specific defence. The failure is almost always the same: the transition is planned in terms of people, money and systems, and the reasoning is assumed to follow on its own. It does not.

*Figure: The Build Order: three decisions, four layers on the commercial line, then three gateways before the brain spreads.*

The rungs of company growth describe steady states. Our [scale ladder](https://lowob.com/research/the-scale-ladder/) sets them out, from two people to ten thousand. The damage happens in between. Each transition changes who decides, who remembers, or where records live, and each tends to happen under time pressure, when nobody is thinking about the record.

## Why transitions, not drift

Software teams learned this first. AWS's guidance on architecture decision records describes the collection as providing "a hand-over experience and reference documentation", so that "current and future stakeholders" can see both the decision and the thought process behind it. The record exists because people change. The [decision record](https://lowob.com/research/what-is-a-decision-record/) explainer shows how the same format applies to commercial decisions.

The decisions most exposed at transitions are also the least practised. McKinsey's 2019 survey of 1,228 managers distinguished frequent "delegated" decisions from "big bets", the infrequent, high-stakes decisions such as acquisitions, and found respondents least familiar with big bets. Only 30% were familiar with all three decision types studied. A company does few acquisitions, has one founder's departure and migrates its core platform rarely. Nobody gets good at these by repetition, which is why the defence has to be planned.

> The transition is planned in terms of people, money and systems. The reasoning is assumed to follow on its own. It does not.

## Seven transitions

| Transition | What breaks | Defence | When |
| --- | --- | --- | --- |
| The first hire | The assumption that everyone was there | Make the ledger readable by strangers | Before they arrive |
| The first manager layer | Founders as the default decision-makers | Write decision rights and the first decision classes | The month managers are appointed |
| An acquisition | Definitions, decision histories and leaders, all at once | Handover packs, mapped glossaries, the acquired graveyard kept | Before close |
| First regulator or major customer audit | Informal decision-making in any process now in scope | Traces and evidenced review in in-scope classes | Before the request |
| A founder's or long-tenured leader's departure | The largest single store of unwritten reasoning | Extraction interviews, graveyard and relationships first | Months ahead |
| A reorganisation | Ownership of records | Reassign record ownership in the reorganisation plan | With headcount and budgets |
| A platform migration | History and links | Test the export; reconstruct sample decisions | Before signing and after cutover |

**The first hire.** Breaks: the assumption that everyone was there. Defence: make the ledger readable by strangers before they arrive, not after. [Ten people: the first stranger](https://lowob.com/research/ten-people-the-first-stranger/) covers what "readable" means.

**The first manager layer.** Breaks: founders as the default decision-makers. Defence: write decision rights and the first decision classes the month managers are appointed.

**An acquisition.** Breaks: everything at once. Two organisations with different definitions, different decision histories, and leaders who may leave within a year. Defence: treat integration as the largest handover the company will ever do. Run handover packs for every acquired leader who owns decisions. Map the acquired glossary to yours rather than overwriting it, and open a conflicts list for definitions that diverge. Keep the acquired company's decision history intact and searchable, marked with its origin. Its [graveyard](https://lowob.com/research/the-graveyard/) is especially valuable: it records what the acquired team already tried in markets you are about to enter.

**The first regulator or major customer audit.** Breaks: informal decision-making in any process that is now in scope. Defence: identify in-scope decision classes early, and introduce traces and evidenced review there first, before the request arrives. The bar is documented. The Federal Reserve's SR 26-2, issued in April 2026 to replace SR 11-7, says adequate documentation supports "the tracking of recommendations, responses, and exceptions" and expects an inventory with "sufficient information to understand model risks". It excludes generative and agentic AI from scope, but it shows what a supervisor expects to be able to reconstruct. In the EU, the AI Act requires deployers of high-risk systems to keep automatically generated logs for at least six months once those obligations apply, from 2 December 2027 for Annex III systems under the 2026 amendments. Our explainer on [the AI audit trail](https://lowob.com/research/what-is-an-ai-audit-trail/) covers the detail.

**A founder's or long-tenured leader's departure.** Breaks: the largest single store of unwritten reasoning in the company. Defence: start the extraction interviews months, not weeks, before. Prioritise the graveyard and relationships, which are least likely to exist anywhere else. [From founder-led to team-led marketing](https://lowob.com/research/from-founder-led-to-team-led-marketing/) covers the commercial version of the same handover.

**A reorganisation.** Breaks: ownership of records. Decision classes move between teams, and the old owner's records become orphaned. Defence: reassign record ownership explicitly as part of the reorganisation plan, alongside headcount and budgets.

**A platform migration.** Breaks: history and links. Records move, but supersession links, sources and outcomes often do not. Defence: test the export before signing the new contract, and verify after migration that a sample of decisions can still be fully reconstructed. EU law now helps at the edges. Since 12 September 2025, the Data Act's switching rules have required providers of data processing services, SaaS included, to complete porting within a 30-day transition and to treat input and output data "including metadata" as exportable. That covers the data. Whether a supersession chain or an outcome link survives in usable form is a test only the buyer can run.

## What a reconstruction test checks

| Check | Pass |
| --- | --- |
| The decision and its reason | Readable without the old system |
| Owner and date | Present and correct |
| Supersession links | Old and new records still linked |
| Sources | Linked source snapshots still open |
| Outcome | Written-back outcome still attached |

Run it on ten decisions chosen at random, not the ten best documented. A migration that passes on the showcase records and fails on ordinary ones has failed.

## The common pattern

Every one of these is known in advance. The defence is always cheaper before the transition than after it. The failure is almost always the same: the transition is planned in terms of people, money and systems, and the reasoning is assumed to follow on its own. It does not. [Handovers are where reasoning pours out](https://lowob.com/research/handovers-are-where-reasoning-pours-out/) covers the person-to-person version of the problem.

## In practice

Add "what happens to the decision record" to the checklist for every acquisition, reorganisation, leadership change and platform migration. For acquisitions, run handover packs for every acquired leader and keep the acquired graveyard. For reorganisations, reassign record ownership in the same document that reassigns teams.

For migrations, run a reconstruction test before and after.

**What would prove this wrong:** organisations that take no specific action on records during these transitions showing no measurable loss of decision quality or institutional memory afterwards.

## lowob takeaways

- **Reasoning is lost at transitions.** Seven of them are predictable.
- **Plan the record with the people.** Ownership moves in the same document as headcount.
- **Keep the acquired history.** Mapped, not overwritten, with its graveyard intact.
- **Test reconstruction.** Ten random decisions, before signing and after cutover.

## Sources and notes

- [AWS Prescriptive Guidance, Using architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html), March 2022. Vendor guidance for software teams.
- [McKinsey, Decision making in the age of urgency](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency), April 2019. Self-reported survey of 1,228 managers.
- [Federal Reserve, SR 26-2 attachment: Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf), 17 April 2026. US bank supervisory guidance; excludes generative and agentic AI.
- [EU AI Act Service Desk, Article 26](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26), consolidated text as of 27 July 2026. Official Commission resource; high-risk systems only.
- [Cooley, New switching rules will become applicable in EU](https://www.cooley.com/news/insight/2025/2025-09-08-paas-iaas-or-saas-be-aware-new-switching-rules-will-become-applicable-in-eu), September 2025. Law-firm summary of the EU Data Act; not legal advice.
- The seven transitions, defences and reconstruction test are **lowob**'s framework.

## Related research

- [What is a decision record?](https://lowob.com/research/what-is-a-decision-record/)
- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [From founder-led to team-led marketing](https://lowob.com/research/from-founder-led-to-team-led-marketing/)
- [Handovers are where reasoning pours out](https://lowob.com/research/handovers-are-where-reasoning-pours-out/)
- [The graveyard](https://lowob.com/research/the-graveyard/)

## Next move

Pick the next transition on your calendar, whether a hire, a reorganisation or a renewal, and add "what happens to the decision record" to its plan this week. For any platform change, schedule a ten-decision reconstruction test before signing.

[Start a conversation](https://lowob.com/contact/)
