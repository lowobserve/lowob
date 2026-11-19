# Fifty People: When Words Start to Mean Different Things

Source: https://lowob.com/research/fifty-people-when-words-start-to-mean-different-things/
Publisher: lowob (https://lowob.com)
Published: 2026-10-12 · Updated: 2026-11-17
Function: Strategy

> Summary: At around fifty people, teams form and vocabularies drift, and AI tools amplify the confusion. The decision record's job becomes meaning: a short glossary with owners, written decision rights, a conflicts list, and one company-owned place where records live, which every new AI tool must write to.

At around fifty people, teams form and vocabularies drift. Sales, product and finance use the same words for different things, and AI tools amplify the confusion. The enterprise brain's job becomes meaning: shared definitions, clear decision rights, and one place where records live. Large organisations eventually build semantic layers and ontologies for this. A fifty-person company does not need either. It needs the lightweight version.

This is the third rung of [*The scale ladder*](https://lowob.com/research/the-scale-ladder/). The previous rung, [*Ten people: the first stranger*](https://lowob.com/research/ten-people-the-first-stranger/), was about newcomers who cannot see why anything is done. At fifty, the newcomers have formed teams, and the teams have started to speak different dialects.

## Why words drift at fifty

With a few teams, each develops its own habits and its own language. "Customer" means a signed contract to finance, an active account to customer success, and anyone in a trial to marketing. "Churn" is measured three ways. Nobody notices until two dashboards disagree in a board meeting.

The structure explains why it happens here. Brooks's n(n-1)/2 gives 1,225 possible channels at fifty people, far more than anyone can maintain, so communication starts to run through teams. Research on social group sizes by Zhou, Sornette, Hill and Dunbar found that human groups cluster in layers that grow by a ratio close to three, so closeness breaks in steps rather than smoothly. Inside a team, words stay aligned through daily contact. Between teams, nothing keeps them aligned unless someone writes the definition down.

> Tools are replaceable. A fragmented record is very hard to reassemble.

## A glossary with owners

Keep a short list of the terms that matter commercially, perhaps 20 to 30. Each has one definition, one owner, the date it was last changed, and a link to the decision that set it. When a definition changes, the old one is superseded with a reason, not edited away.

| Field | Example: "active customer" | Why it matters |
| --- | --- | --- |
| Term | Active customer | The word as people use it |
| Definition | A paying account with at least one login in the last 30 days | One meaning, testable against data |
| Owner | Head of customer success | Someone decides when it changes |
| Effective from | The date the definition took effect | Lets numbers be compared across quarters |
| Supersedes | The previous definition, with the reason for the change | Old reports stay interpretable |
| Linked decision | The ledger entry that set it | The reason survives the definition |

That last point matters for AI. Agents and assistants that read a glossary need to know which definition is current, and analysts comparing numbers across quarters need to know when a definition changed. Finance has long handled the same problem for figures. Martin Fowler's 2021 description of bitemporal history uses a payroll example: a raise backdated by a letter that arrived after the payroll run means the firm must track both what the salary was and what it believed at each run. A glossary with effective dates and superseded entries applies that discipline to words. Our piece [*Supersede, never overwrite*](https://lowob.com/research/supersede-never-overwrite/) makes the general case.

The glossary is the lightweight version of what larger firms build as a semantic layer, described in our explainer [*What is a semantic layer?*](https://lowob.com/research/what-is-a-semantic-layer/). At fifty people, a shared document with owners does the job.

## Decision rights

The second thing that breaks at fifty is knowing who decides what. Write it down for the recurring decision classes: discount approvals, hiring, roadmap priorities, vendor choices, exceptions to policy. One line each: who decides, who must be consulted, who is informed.

It sounds bureaucratic. It removes more friction than almost anything else at this size. Paul Rogers and Marcia Blenko of Bain, writing in *Harvard Business Review* in 2006, reported that a survey of more than 350 global organisations found only about 15% practised effective decision making, and traced much of the problem to unclear roles. Their RAPID framework names five: recommend, agree, perform, input and decide, with a single person holding the "D". A fifty-person firm does not need the full framework. It needs the one line per class that says who holds the D.

| Decision class | Decides | Consulted | Informed |
| --- | --- | --- | --- |
| Discount above the standard limit | Head of sales | Finance | Account owner |
| New hire within budget | Hiring manager | Team lead, one peer | Leadership |
| Roadmap priority change | Head of product | Sales, customer success | All staff |
| New vendor or AI tool | Operations lead | Security owner, budget holder | Users |
| Exception to policy | Policy owner | Legal, if relevant | Requester |

The rows are illustrative; the shape is the point. Our piece on [discount governance](https://lowob.com/research/discount-governance/) works through the first row in detail.

## The first conflicts

With several teams writing records, contradictions appear. Sales records that a customer was promised a feature; product records that it was deprioritised. Start a simple conflicts list, with an owner for each and a date by which it is resolved. It will be short. It will also be the most read part of the record.

Each resolved conflict becomes a ledger entry: what the two records said, which stands, and why.

## The tool sprawl problem

Fifty people is when every team adopts its own AI tools: a meeting assistant here, a writing tool there, a research agent somewhere else. Each keeps its own memory. The organisation's reasoning fragments across half a dozen products, none of which talk to each other and none of which the company controls.

The evidence says this happens whether or not leadership chooses tools. Microsoft and LinkedIn's 2024 Work Trend Index, a survey of 31,000 people in 31 countries, found 78% of AI users were bringing their own AI tools to work. Our explainer [*What is shadow AI?*](https://lowob.com/research/what-is-shadow-ai/) covers the risks that follow.

Decide now where records live: one place, owned by the company, that every tool writes to or can be exported into. Tools are replaceable. A fragmented record is very hard to reassemble. The same test appears in [*Buy context, own judgment*](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/): before renting any tool that touches decisions, check that it can export every record with its history.

**In practice:** write a glossary of the 20 to 30 terms that matter, each with an owner and a date. Supersede definitions instead of editing them. Write one-line decision rights for the ten most common decision classes. Choose one company-owned home for decision records, and require new AI tools to write to it or export to it.

## What would prove this wrong

This would be wrong if fifty-person companies with no shared glossary or decision rights reported no more definitional disputes or slower decisions than those with them. If that holds, the effort belongs at the next rung, [*Two hundred people: reasoning that travels without its author*](https://lowob.com/research/two-hundred-people-reasoning-that-travels-without-its-author/), where managers make most decisions.

## lowob takeaways

- **Write 20 to 30 definitions.** Each with one meaning, an owner, an effective date and a linked decision.
- **Supersede, do not edit.** Old definitions stay, so old numbers stay interpretable by people and agents.
- **Name who holds the D.** One line per recurring decision class: decides, consulted, informed.
- **Keep a conflicts list.** Short, owned, dated, and read more than anything else.
- **Pick one home for records.** Every new AI tool writes to it or exports into it.

## Common questions

### What breaks when a startup grows to about fifty people?

Teams develop their own vocabularies, so words like customer and churn mean different things, and nobody is sure who decides what. AI tools adopted team by team fragment the record further.

### Does a fifty-person company need a semantic layer or ontology?

No. It needs the lightweight version: a short glossary of key terms with owners and effective dates, and written decision rights. Tooling can follow at a later stage.

### How do you write decision rights for a growing company?

List the recurring decision classes, such as discounts, hiring, roadmap and vendors, and write one line for each: who decides, who must be consulted and who is informed. Keep a single decider per class.

### How do you stop AI tools fragmenting a company's knowledge?

Decide on one place, owned by the company, where records live, and require every tool to write to it or export into it, with history.

## Sources and notes

- [Paul Rogers and Marcia Blenko, Who Has the D? How Clear Decision Roles Enhance Organizational Performance](https://www.bain.com/fr/insights/who-has-the-d/), Bain & Company, first published in Harvard Business Review, 2006. Consultancy research; survey of more than 350 large organisations.
- [Microsoft and LinkedIn, 2024 Work Trend Index](https://news.microsoft.com/source/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/), 8 May 2024. Vendor survey of 31,000 people in 31 countries; not broken down by firm size.
- [Zhou, Sornette, Hill and Dunbar, Discrete hierarchical organization of social group sizes](https://arxiv.org/abs/cond-mat/0403299), 2004 preprint, published by the Royal Society in 2005. Social network data, not workplaces.
- [Martin Fowler, Bitemporal History](https://www.martinfowler.com/articles/bitemporal-history.html), 7 April 2021. Practitioner essay on data modelling.
- [Project Wizards, Brooks's law (glossary)](https://www.projectwizards.net/en/project-management-glossary/brooks-law). Vendor glossary summarising Brooks's 1975 book.
- The glossary fields and decision rights tables are **lowob**'s illustrations.

## Related research

- [The Scale Ladder](https://lowob.com/research/the-scale-ladder/)
- [Ten People: The First Stranger](https://lowob.com/research/ten-people-the-first-stranger/)
- [Two Hundred People: Reasoning That Travels Without Its Author](https://lowob.com/research/two-hundred-people-reasoning-that-travels-without-its-author/)
- [What Is a Semantic Layer (Shared Definitions for AI)?](https://lowob.com/research/what-is-a-semantic-layer/)
- [What Is Shadow AI?](https://lowob.com/research/what-is-shadow-ai/)

## Next move

Put the ten words your teams argue about most in one shared document this week, each with one definition, one owner and today's date. Then list every AI tool in use and check which can export to it.

[Start a conversation](https://lowob.com/contact/)
