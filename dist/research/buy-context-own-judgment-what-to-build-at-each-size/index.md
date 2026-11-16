# Buy Context. Own Judgment. What Enterprise AI Teams Should Build

Source: https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/
Publisher: lowob (https://lowob.com)
Published: 2026-10-20 · Updated: 2026-11-16
Function: Strategy

> Summary: At every size, the same rule holds: rent the context layer as it matures, and own the record of how you decide. Models, connectors, search, assistants and agent registries are products you can rent and replace. Approvals, reasoning, decision history and the ability to change vendors are what the company must control. Most firms now buy rather than build their AI, so the practical question is less "build or buy" than what to keep portable, and that answer grows with headcount.

*Figure: No single layer is a brain. The brain is the loop: what is stored, wired, recorded, reasoned over and learned from.*

## Key points

- In Menlo Ventures' survey, 76% of enterprise AI use cases were purchased rather than built in 2025, up from 53% in 2024.
- Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027, citing cost, unclear value and weak risk controls.
- What a company should own changes with size: a founders' ledger at two people, decision rights at fifty, trace specifications at a thousand.
- Three tests apply before buying anything that touches decisions: full export with history, survival if the vendor is replaced, and record-level control of retention.
- Over-building early encodes guesses; under-owning late scatters judgment across systems that cannot be queried together.

AI tools make company information easier to find. But before buying an enterprise brain, decide what the company needs to retain control of: approvals, reasoning, history and the ability to change vendors.

The buy-versus-build question isn't settled for every business. Some teams rent models and search systems; others have specific reasons to build. The more useful starting point is deciding what information and decision history the company needs to control. Our [build vs buy guide for AI agents](https://lowob.com/research/build-vs-buy-ai-agents/) covers the agent layer in detail.

## Most firms are already renting

The market has largely answered the narrow question. Menlo Ventures' survey of 495 US enterprise AI decision-makers, fielded in November 2025, found 76% of AI use cases were purchased rather than built internally, against 53% a year earlier. Enterprise spend on generative AI reached an estimated $37 billion in 2025, split roughly evenly between applications and infrastructure.

Buying does not guarantee results. McKinsey's 2025 global survey found 88% of organisations using AI in at least one function but only 39% attributing any enterprise-level EBIT impact to it, most of them less than 5%. The high performers were more likely to have redesigned workflows and to have defined processes for when model outputs need human validation. Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027. Rented tools are replaced often. That is exactly why the record of decisions should not live only inside them.

The question changes as the organisation grows. Buying everything can leave decision history locked into vendor tools; building every system internally can create complexity before anyone knows what is needed.

## What changes as the company grows

| Size | Buy or rent | Own | Don't build yet |
| --- | --- | --- | --- |
| Two | A model, transcription, a shared document | The founders' ledger and the weekly review | Knowledge base, taxonomy, integrations |
| Ten | An assistant that can read your documents | The ledger, readable by strangers; first definitions | A wiki organised by topic |
| Fifty | Meeting and writing tools that export | Glossary with owners; decision rights; one home for records | An ontology |
| Two hundred | Workflow tools that can carry a precedent slot | Decision classes, templates, handover packs, first calibration | A platform team |
| One thousand | Enterprise search, agent registry, identity and permissions | Trace specification; function-owned records; evidenced review | A single enterprise ontology |
| Ten thousand | Most of the context layer, at scale and under contract | Central invariants, export format, calibration, the learning layer | Anything that forces divisions into one model |

These rows are **lowob**'s illustrations, not universal rules. Each rung has its own piece: [the founders' ledger](https://lowob.com/research/two-people-the-founders-ledger/), [the first stranger](https://lowob.com/research/ten-people-the-first-stranger/), [when words start to mean different things](https://lowob.com/research/fifty-people-when-words-start-to-mean-different-things/), [reasoning that travels without its author](https://lowob.com/research/two-hundred-people-reasoning-that-travels-without-its-author/), [when governance arrives](https://lowob.com/research/one-thousand-people-governance-arrives/) and [the case for federation](https://lowob.com/research/ten-thousand-people-density-and-the-case-for-federation/). For the commercial side of the same progression, see [Building the commercial system at 20, 50 and 200 people](https://lowob.com/research/building-the-commercial-system-at-every-size/).

The column worth reading twice is "Don't build yet". A precedent slot, described in [A loop with good context](https://lowob.com/research/a-loop-with-good-context/), is worth carrying at two hundred people because there are enough comparable decisions to fill it. At ten people, the same effort is better spent making the ledger readable by someone who was not in the room.

> Rented tools are replaced often. That is exactly why the record of decisions should not live only inside them.

## Three tests before buying anything that touches decisions

| Test | Question | Pass looks like |
| --- | --- | --- |
| Export | Can the tool export every decision record, including its history, in a documented format? | A published schema and a sample export your team can read without the vendor |
| Replaceability | Will those records remain usable if the vendor is replaced? | Records stored as data with links, not as model state or prompts |
| Control | Does the company control retention and deletion for individual records? | Record-level retention settings and a deletion log |

If any answer is no, either negotiate it into the contract or keep the record elsewhere and let the tool read from it.

Regulation sets a floor in the EU. Since 12 September 2025, the Data Act has required providers of data processing services, SaaS included, to support switching within a 30-day transition and to port exportable data "including metadata", with switching charges eliminated from 12 January 2027. It does not cover everything a decision record holds, and it does not apply outside its scope, so the three tests still matter. [Whoever holds the record holds the company](https://lowob.com/research/whoever-holds-the-record-holds-the-company/) sets out the contract clauses.

For governance, the NIST AI Risk Management Framework, released in January 2023 and intended for voluntary use, organises the work into four functions: Govern, Map, Measure and Manage. Its Generative AI Profile followed in July 2024. Neither prescribes the size-based rows above; they are a way to decide how much of that governance a company needs at each stage.

## The cost of getting it wrong in each direction

Over-building early costs time, money and, more subtly, accuracy: structures designed before the organisation knows what it needs encode guesses that later have to be unwound. An ontology built at fifty people fixes definitions the company has not yet argued about. Our piece on [what we would cut from the build order](https://lowob.com/research/what-we-would-cut-from-the-build-order/) lists the common cases.

Under-owning late costs more. An organisation that let its decision history accumulate inside several vendors' products discovers, at the first migration or audit, that its judgment is spread across systems it cannot query together and may not be able to export.

| Error | When it happens | What it costs |
| --- | --- | --- |
| Over-building | Two to fifty people | Time, money, and definitions fixed before they were understood |
| Under-owning | Two hundred people and up | Decision history trapped across vendors; failed reconstruction at migration or audit |

## In practice

Start with the company-size guide above and check whether you are building something before you need it. Apply the three questions to tools that write important decisions, then review export and retention provisions with procurement, legal and security before the next contract renewal.

**What would prove this wrong:** organisations that rent their entire judgment record inside vendor products, never owning it, and suffer no loss of capability or bargaining power through migrations, audits and renewals.

## lowob takeaways

- **Rent the tools, own the record.** Rent useful tools where they solve a real task; keep important decision records portable.
- **Use the size table as a starting point.** It is an illustration, not a universal architecture rule.
- **Run the three tests.** Export, replaceability and record-level retention, before committing.
- **Watch both errors.** Over-building early and under-owning late.

## Common questions

### Should a company build or buy its AI tools?

Mostly buy: 76% of enterprise AI use cases were purchased in 2025 in Menlo Ventures' survey. Rent models, connectors and search, but own the record of decisions, with reasons, history and outcomes, in a form you can take with you.

### What should a small company build for AI first?

At two to ten people, a decision ledger and a weekly review, with a model, transcription and a shared document rented. Knowledge bases, taxonomies and integrations can wait.

### How do I check whether an AI tool will lock in my decision history?

Ask whether it exports every decision record with history in a documented format, whether the records stay usable if the vendor is replaced, and whether you control retention record by record. If not, negotiate or keep the record elsewhere.

### When does a company need an enterprise ontology?

Rarely as a single model. Below fifty people it fixes definitions too early; at a thousand or more, a single enterprise ontology usually forces divisions into one model. Owned glossaries and an export format travel better.

## Sources and notes

- [Menlo Ventures, 2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/), 9 December 2025. Investor research; survey of 495 US enterprise decision-makers.
- [McKinsey, The state of AI in 2025](https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025), 5 November 2025. Self-reported survey of 1,993 respondents.
- [w.media, Over 40 percent of agentic AI projects could face the axe by end of 2027: Gartner](https://w.media/over-40-percent-of-agentic-ai-projects-could-face-the-axe-by-end-of-2027-gartner/), June 2025. Analyst forecast reported secondhand.
- [Cooley, New switching rules will become applicable in EU](https://www.cooley.com/news/insight/2025/2025-09-08-paas-iaas-or-saas-be-aware-new-switching-rules-will-become-applicable-in-eu), September 2025. Law-firm summary of the EU Data Act; not legal advice.
- [NIST, AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework). Voluntary US framework; the company-size examples here are **lowob** illustrations, not NIST recommendations.
- The size table, three tests and cost comparison are **lowob**'s framework.

## Related research

- [Build vs buy AI agents](https://lowob.com/research/build-vs-buy-ai-agents/)
- [Building the commercial system at 20, 50 and 200 people](https://lowob.com/research/building-the-commercial-system-at-every-size/)
- [What we would cut from the build order](https://lowob.com/research/what-we-would-cut-from-the-build-order/)
- [Whoever holds the record holds the company](https://lowob.com/research/whoever-holds-the-record-holds-the-company/)

## Next Move

Find your row in the size table and check the "Don't build yet" column against what is on this quarter's roadmap. Then run the three tests on the one tool that writes most of your important decisions.

[Start a conversation](https://lowob.com/contact/)
