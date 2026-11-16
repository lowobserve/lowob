# Whoever holds the record holds the company

Source: https://lowob.com/research/whoever-holds-the-record-holds-the-company/
Publisher: lowob (https://lowob.com)
Published: 2026-09-23 · Updated: 2026-11-16
Function: Strategy

> Summary: The layer that encodes how a business decides is becoming the deepest lock-in in enterprise software, and analysts now tell vendors to capture customer-specific knowledge rather than data. Models are rented and switched; the decision record is not. The enterprise should own that record, and the contract should say so before the first workflow moves in.

The layer that encodes how a business decides is the deepest lock-in in enterprise software. It is also where the strongest growth is: Gartner now advises software vendors to "capture and retain customer-specific knowledge, not just data" as agents erode the value of their interfaces. Data can be exported and models are rented and switched. The accumulated record of how the organisation decides is the asset at stake. The enterprise should own it, and the contract should say so before the first workflow moves in.

*Figure: No single layer is a brain. The brain is the loop: what is stored, wired, recorded, reasoned over and learned from.*

A growing class of platforms models a business as objects, links and actions, and lets agents operate over that model. They are sold as ontologies, semantic layers or context layers. Our explainers on [the semantic layer](https://lowob.com/research/what-is-a-semantic-layer/) and [semantic layers versus knowledge graphs](https://lowob.com/research/semantic-layer-vs-knowledge-graph/) describe the technology. The pitch is strong because it works: an agent that knows what an "active customer" means, who approves a discount and which exceptions were granted last quarter is far more useful than one that only searches documents.

The critics make the mirror argument. Once workflows, permissions and decision logic live inside that layer, switching becomes extremely costly. Both are right, and the tension applies to every enterprise brain, not just one vendor.

## Where the value is moving

Gartner's July 2026 analysis puts the pressure in numbers. It estimates up to $234 billion of enterprise application spending, about 20% of SaaS application spend by 2030, is exposed to agentic arbitrage: agents completing tasks across systems so that users need fewer traditional interfaces. Its analysts say "the user interface is no longer a differentiation", that seat-based pricing breaks for many vendors, and that better outcomes depend on systems that keep institutional memory and customer context over time.

Read from the buyer's side, that is a warning. If the interface no longer holds the customer, the vendor's retention strategy moves to whatever does. Gartner's own advice to vendors is to "capture and retain customer-specific knowledge, not just data". The knowledge in question is your organisation's.

The model layer shows what portability looks like when it exists. Menlo Ventures' survey of 495 US enterprise AI decision-makers estimates that Anthropic's share of enterprise LLM API spend rose from 12% in 2023 to 40% in 2025, while OpenAI's fell from 50% to 27%. Spend shifted that fast because changing model provider is comparatively easy. The same survey found 76% of AI use cases were purchased rather than built in 2025, up from 53% in 2024. Most firms are renting, which makes the terms of the rental the main control they have.

| Layer | Who builds it | Portability today | Lock-in risk |
| --- | --- | --- | --- |
| Model | Model providers | High: buyers switch provider routinely | Low |
| Raw data | The business, often in licensed tools | Usually exportable; Data Act rights in the EU | Medium |
| Connectors and retrieval | Context platforms | Rebuildable with effort | Medium |
| Definitions, exceptions, precedents, outcomes | The organisation's own people, through use | Often trapped in proprietary structures | High |

## What is actually at stake

It is not the data. Data can usually be exported, and much of it is licensed from others anyway. It is not the model, which is rented and replaceable. It is the accumulated record of **how the organisation decides**: the definitions, the exceptions, the precedents, the conflicts resolved, the outcomes linked to decisions.

That record is built slowly, through use, by the organisation's own people. If it lives only inside a vendor's proprietary structure, the organisation's institutional judgment has become a line item the vendor can reprice at renewal. Our piece [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/) sets out why the record, not the model, is the brain.

> If the record lives only inside a vendor's structure, the organisation's judgment has become a line item the vendor can reprice at renewal.

## Three tests for any platform

| Test | The question | Evidence to ask for |
| --- | --- | --- |
| Export | Can you export every decision record with its sources, history, supersession links and outcomes, in an open, documented format, without professional services? | A published schema and a sample export you can read without the vendor |
| Model independence | Does the record survive intact if the vendor's model, memory product or agent framework is replaced? | Records stored as data, not as prompts or model state |
| Control | Are retention and deletion controlled by you, record by record, with a log? | Admin controls and a deletion log you can query |

If the answer to any is no, you are building your judgment into someone else's asset.

## Put it in the contract

The time to negotiate this is before the first workflow moves, not at the first renewal. Regulation now gives some help. Since 12 September 2025, the EU Data Act's switching rules have applied to providers of data processing services, including SaaS. Customers can switch with at most two months' notice, porting must complete within a 30-day transition period, exportable data includes input and output data "including metadata", and switching charges must be eliminated from 12 January 2027. The Act excludes information protected as trade secrets and services custom-built for one customer, so it is a floor, not a full answer.

Useful clauses beyond the floor: a documented export schema, delivered and tested annually; exit assistance at a fixed rate; explicit ownership of derived records, including summaries and links the platform generates; and no use of your decision records to train models offered to others. Our explainer on [data processing agreements for AI](https://lowob.com/research/what-is-a-data-processing-agreement-for-ai/) covers the related privacy terms.

## Internal ownership matters too

The same question applies inside the firm. If the judgment record belongs to IT, it will be managed as infrastructure. If it belongs to the function whose decisions it records, with risk and compliance overseeing it, it will be managed as an asset. The second works better.

## A note for vendors

Portability is not the enemy of retention. A vendor that makes the record easy to leave with, and keeps clients because the product around it is better, earns a kind of trust that lock-in never does. In a market where every competitor offers the same connections to the same data, and Gartner estimates only about 130 of thousands of self-described agentic AI vendors offer genuine agentic capability, that trust may be the more durable advantage.

## In practice

Run the three tests on every platform that holds decision records today. Add export, exit-assistance and derived-records clauses at the next negotiation. Test an export once a year and check that it can be read without the vendor.

Assign ownership of the record to the accountable function, with risk oversight.

**What would prove this wrong:** organisations switching platforms without material loss of decision history or capability, even where no export rights were negotiated. Then the lock-in risk is overstated.

## lowob takeaways

- **The record is the asset.** Not the data, not the model: how the organisation decides.
- **Run three tests.** Export, model independence and control of retention.
- **Contract before migration.** Tested export schema, fixed-rate exit help, ownership of derived records, no training on your records.
- **Own it in the function.** The team whose decisions it records, with risk oversight.

## Sources and notes

- [Gartner, US$234 billion in enterprise application software spend is at risk from agentic AI](https://www.gartner.com/en/newsroom/press-releases/2026-07-01-gartner-says-us-dollars-234-billion-in-enterprise-application-software-spend-is-at-risk-from-agentic-artificial-intelligence), 1 July 2026. Analyst forecast; press release summary.
- [Menlo Ventures, 2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/), 9 December 2025. Investor research; survey of 495 US decision-makers; Menlo invests in AI companies.
- [Cooley, PaaS, IaaS or SaaS? New switching rules will become applicable in EU](https://www.cooley.com/news/insight/2025/2025-09-08-paas-iaas-or-saas-be-aware-new-switching-rules-will-become-applicable-in-eu), September 2025. Law-firm summary of Regulation (EU) 2023/2854; not legal advice.
- [w.media, Over 40 percent of agentic AI projects could face the axe by end of 2027: Gartner](https://w.media/over-40-percent-of-agentic-ai-projects-could-face-the-axe-by-end-of-2027-gartner/), June 2025. Analyst forecast reported secondhand.
- The layer table, three tests and contract clauses are **lowob**'s framework.

## Related research

- [Buy context, own judgment](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [What is a semantic layer?](https://lowob.com/research/what-is-a-semantic-layer/)
- [Build vs buy AI agents](https://lowob.com/research/build-vs-buy-ai-agents/)
- [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)

## Next move

Ask the vendor that holds most of your decision history for a sample export this month. If your team cannot read it without the vendor, add a tested export schema and derived-records ownership to the next renewal.

[Start a conversation](https://lowob.com/contact/)
