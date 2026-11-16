# The Build Order for Industrial Distribution

Source: https://lowob.com/research/the-build-order-for-industrial-distribution/
Publisher: lowob (https://lowob.com)
Published: 2026-10-23 · Updated: 2026-11-16
Function: Revenue

> Summary: In industrial distribution the commercial line is quoting, the store is the ERP and the context layer is the price book and the specification library. Quotes are graded in days, so the record pays back faster than in any other sector. The walls are competitors' non-public prices, supplier cost and rebate terms in customer-facing drafts, and export-controlled technical data.

In industrial distribution the commercial line is quoting. Inside sales teams decide all day which requests to quote, what discount to give against the price book and what lead time to promise, and each quote is won or lost within days. That makes distribution the fastest-learning sector in this series. The store is the ERP rather than a CRM, and the context layer is mostly the price book and the specification library. The walls are specific: competitors' non-public prices must never feed the quoting logic, supplier cost and rebate terms must never surface in a customer-facing draft, and export-controlled technical data must stay behind its own access controls.

*Figure: Where this piece sits: the commercial line, where the build starts.*

Distribution rarely appears in discussions of enterprise brains. It should. Few businesses make as many similar commercial decisions as a distributor, and few see the outcome as quickly. A request for quote arrives, someone prices it against the book, applies a discount, promises a lead time, and within days the customer orders or does not. That loop is what the rest of this series spends its time trying to create.

Part 10 followed a composite parts distributor through the build. This edition generalises it for distributors of 50 to 500 people selling electrical, mechanical, MRO, fluid power or building products, and runs the full sequence (Gateway 0, tooling, context, record, reasoning and Gateways 1 to 3) with the evidence that applies to the sector.

## Where the commercial line sits

A distributor's commercial line is not a pipeline in the CRM sense. It is the quote desk. Field sales staff open accounts and hold relationships, but most commercial decisions are made by inside sales: whether to quote, at what price, with what substitution if the specified item is unavailable, and with what delivery promise.

The economics make those decisions unusually valuable. McKinsey's July 2026 analysis of pricing in distribution, based on the 10-K filings of 140 public distributors, found that a 1% price increase can lift EBITDA margin by more than 22%. The same piece reports that in one distributor, sales teams overrode system prices in more than half of transactions, and it sets out good practice as 80–90% of transactional prices generated automatically, with people concentrating on the exceptions. The exceptions are the decisions worth recording.

Buyers are moving too. Gartner's 2025 survey of 632 B2B buyers found 61% prefer a buying experience without a sales rep. In distribution that preference is served by e-commerce for catalogue items. It leaves the quote desk with the work that cannot be self-served: large orders, project pricing, substitutions and specified items. Those are exactly the decisions where a record of reasons pays back.

| Industry lens | Industrial distribution |
| --- | --- |
| Where the commercial line sits | Quoting: which requests to quote, discount against the price book, lead time promised |
| The store | The ERP's customer, item and order tables; often a light CRM for field sales |
| What joins the context layer | Price book and customer tiers, specification sheets, stock and lead times, quote history |
| Outcome lag | Days for most quotes; a project cycle for large bids |
| Who defends the decision | Sales director on margin, branch or regional managers |
| The sector's walls | Competitors' non-public prices; supplier cost and rebate terms; export-controlled technical data |
| Regulatory pressure | Competition law on pricing information; export controls on technical data |

## The build order, stage by stage

| Stage | What it means in distribution | The main risk |
| --- | --- | --- |
| Gateway 0 | An owner with authority over pricing, the suite of record, and the ERP named as the commercial store | Treating the build as an IT project when it is a pricing project |
| Tooling | Assistant seats for inside sales and pricing analysts | A chat assistant with no access to the price book or stock |
| Context | Price book, customer tiers, stock and lead times, specification library, quote history | Product codes and "in stock" defined differently by each branch |
| Record | Every quote with the discount reason, the approver and the outcome | Free-text reasons nobody can analyse |
| Reasoning | A first agent that drafts quotes from the request, the book and the customer's history into a queue | Drafts that quote a price or lead time nobody checked |
| Gateway 1 | A person approves every quote before it reaches a customer | Approval by habit at the end of a busy day |
| Gateway 2 | Margin at stake on every quote, outcome written back within days | Numbers that contradict what the sales team believes |
| Gateway 3 | The record extends to purchasing, inventory and finance | Purchasing decisions made on quote data without the reasons |

**Gateway 0 is a pricing decision.** In most sectors the owner sits in operations or revenue. In distribution the owner needs authority over the price book, because within a quarter the record will raise questions only a pricing owner can answer. Part 3 sets out the three decisions; the third, the CRM, usually becomes "the ERP, plus whatever field sales actually update".

**Context is mostly definitions.** The context layer in distribution is less about connecting email and more about agreeing what words mean. A product code that maps to three supplier part numbers, a customer tier that differs by branch, and "in stock" meaning on the shelf in one warehouse and on order in another will all make a quoting agent wrong in ways that look right. McKinsey's distribution research describes a building materials distributor that used generative AI to clean and enrich more than a million catalogue items, processing them six times faster, with manual price overrides falling 80% and margins rising more than 200 basis points. That is consultancy-reported and a single case, but it shows where the work sits: the data before the agent.

> Distribution learns fastest because a quote is graded within days. The first numbers the record produces are usually the uncomfortable ones.

## The walls: what never feeds the quote

Distribution has three walls rather than one.

**Competitors' non-public prices.** The US Department of Justice announced a proposed settlement with RealPage on 25 November 2025 over algorithmic pricing in rental housing. Under its terms, as summarised by Paul, Weiss, RealPage may not use one user's non-public, competitively sensitive information as an input when generating pricing recommendations for another. Such data may train pricing models only once it is at least 12 months old, and price data and localised data are largely barred from training even then. An "auto accept" feature must be switched on manually by the user rather than by default. The case is about rental housing, but its logic travels. A distributor should not connect non-public competitor pricing to its quoting logic, and should ask any pricing software vendor whether its models pool non-public data across competing distributors.

**Supplier cost and rebate terms.** A quoting agent needs cost to check margin. It must never let cost, rebate levels or supplier programme terms appear in a customer-facing draft. Many supplier agreements treat those terms as confidential. The rule is that cost informs the margin check inside the queue, and the draft the customer sees contains price, lead time and specification only.

**Export-controlled technical data.** Specification libraries often hold drawings and data sheets. Most are public. Some are not. The US Bureau of Industry and Security defines a deemed export as the release of controlled technology or source code to a foreign person in the United States. A context layer that lets any employee retrieve any document through an assistant can turn a controlled drawing into a release. Controlled items need their own classification and access control, and they should stay out of the general context layer until both exist.

| What the quoting agent can see | What it must never see or show |
| --- | --- |
| Price book, customer tier, quote history for that customer | Competitors' non-public prices, or vendor models trained on pooled competitor data |
| Cost, to check margin inside the review queue | Cost, rebates or supplier terms in any customer-facing draft |
| Public specification sheets and substitution tables | Export-controlled drawings and technical data without classification and access control |
| Stock and lead times by warehouse | Another customer's pricing or project details |

## The record and the first agent

The record in distribution is the quote itself with two fields added: the reason for any discount beyond the standard tier, and the outcome. Part 9 describes the decisions worth recording; the quote is close to the ideal case. Reasons should be a short pick list (competitive situation, project pricing, volume commitment, retention risk, error correction) with free text only as a supplement, because a reason nobody can count is a reason nobody can learn from. *What is a closed-lost reason* covers the same discipline for pipelines.

The first agent drafts quotes. It reads the request, matches items against the specification library, prices them from the book and the customer's tier, checks stock and lead time, and places the draft in a queue with any discount flagged for a reason. A person checks and sends. McKinsey's distribution blog describes a water technologies company whose generative AI assistant for requests for quote produced $1.8m in quotes for 45,000 customers within four weeks of deployment. That is a consultancy case study rather than a measured comparison, but it shows the shape of a first agent that works: narrow, measurable and attached to an existing process. Part 7 explains why the first agent should be this boring.

The store will need work before the agent can rely on it. Validity's 2026 survey of 500 marketers, as reported by MarTech, found 62% said poor CRM data had probably or definitely cost their organisation revenue. In distribution the same problem appears in the ERP's item master, and it costs margin rather than pipeline.

Composite example: a fluid power distributor records discount reasons

Decision
:   Require a reason from a five-item pick list for every discount beyond the standard tier, and record the outcome of every quote within ten working days.

Reason and owner
:   The sales director could not say which discounts were winning business. Owned by the sales director, with the pricing analyst maintaining the pick list.

What changed
:   After two quarters the record showed that "competitive situation" discounts in two product families won no more often than standard-priced quotes. Discretion in those families was reviewed; the rule is revisited each quarter.

Illustrative: a composite of a distributor of around 180 people across six branches, built from patterns across engagements.

## The gateways in distribution

**Gateway 1: nothing sends without a person.** A quote is a commercial commitment: a price and a lead time a customer can hold the distributor to. Every quote the agent drafts goes to a named person before it leaves. The risk is volume. Inside sales staff clearing a queue at the end of a day approve by habit, and *Approval rate measures fatigue too* describes the signs. Sampling approved quotes each week for a second check is a cheap control.

**Gateway 2: a dollar figure on every decision.** Distribution reaches this gateway faster than any other sector because the outcome arrives in days and margin is already calculated on every line. The difficulty is not measurement. It is that the numbers can contradict what the team believes, as the composite above shows. That is the brain doing its job. It is also the point at which the build becomes a pricing conversation, which is why Gateway 0 named a pricing owner.

**Gateway 3: commercial is ready to share its brain.** Purchasing and inventory want to know which items were quoted and lost on availability; finance wants margin by reason. Both are legitimate. The record should travel with its reasons attached, so purchasing does not overstock an item that was lost on price, not stock.

## lowob takeaways

- **Quoting is the commercial line.** It is where decisions are most frequent, most similar and graded fastest.
- **Agree definitions before the agent.** Product codes, customer tiers and "in stock" decide whether a draft quote is right.
- **Hold three walls.** No non-public competitor prices, no cost or rebate terms in customer drafts, no export-controlled data without access control.
- **Expect uncomfortable numbers.** Fast outcomes mean the record challenges pricing habits within a quarter or two.

Gateway card

### Before a distributor switches on a quoting agent

- A named owner with authority over the price book
- Product codes, customer tiers and stock status defined once across branches
- A five-to-seven item pick list for discount reasons, required on every exception
- Written confirmation that no non-public competitor pricing feeds the quoting logic or the vendor's models
- Export-controlled technical data classified and excluded from the general context layer
- A named approver for every drafted quote

## Sources and notes

- [McKinsey, Pricing in distribution: A strategic growth engine](https://www.mckinsey.com/industries/industrials/our-insights/pricing-in-distribution-a-strategic-growth-engine), 17 July 2026. Margin analysis from 140 public distributors' 10-K filings; case results are consultancy-reported.
- [McKinsey, Revolutionizing sales in distribution: Harnessing the power of AI](https://www.mckinsey.com/industries/industrials/our-insights/distribution-blog/revolutionizing-sales-in-distribution-harnessing-the-power-of-ai), 24 July 2024. Client case studies, not controlled comparisons.
- [Gartner, 61% of B2B buyers prefer a rep-free buying experience](https://gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience), 25 June 2025. Survey of 632 B2B buyers across sectors, not distribution only.
- [Paul, Weiss, Practical takeaways from the DOJ's algorithmic pricing settlement](https://www.paulweiss.com/insights/client-memos/practical-takeaways-from-the-doj-s-algorithmic-pricing-settlement), 2 December 2025. Law firm summary; the settlement required court approval and concerns rental housing.
- [US Bureau of Industry and Security, Deemed exports](https://bis.gov/node/6307). Regulator guidance; classification of specific items needs specialist advice.
- Validity, State of CRM Data 2026, as reported by [MarTech](https://martech.org/marketers-know-ai-is-using-bad-data-to-make-decisions/). Vendor-run survey of 500 marketers, July 2026; not specific to distribution.
- The stage table, walls table and example are **lowob**'s illustration, drawn from patterns across engagements. None of this is legal advice.

## Related research

- [The same build in four industries](https://lowob.com/research/the-same-build-in-four-industries/)
- [Where judgment arrives first](https://lowob.com/research/where-judgment-arrives-first/)
- [The commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [What is a closed-lost reason?](https://lowob.com/research/what-is-a-closed-lost-reason/)
- [What is CRM data hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)

## Next move

Take last month's quotes with a discount beyond the standard tier. Can anyone say why each was given and whether it won? If fewer than half have a reason, add the pick list before any agent touches the quote desk.

[Start a conversation](https://lowob.com/contact/)
