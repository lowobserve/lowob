# The Build Order for B2B SaaS

Source: https://lowob.com/research/the-build-order-for-b2b-saas/
Publisher: lowob (https://lowob.com)
Published: 2026-10-08 · Updated: 2026-11-16
Function: Revenue

> Summary: B2B SaaS looks like the easiest sector for an enterprise brain because it already holds a CRM, billing data and product telemetry. The order holds, but product usage data joins the context layer early, renewal and expansion decisions are the first worth recording, and the data customers store inside the product must never reach the commercial build.

The Build Order holds in B2B SaaS, with one change: product usage data joins the context layer early, because in a recurring-revenue business the strongest commercial signal is what customers do inside the product. The first decisions worth recording are renewals, expansion offers and the discounts attached to both, since retention drives growth more than new logos for most private SaaS firms. The sector's wall is the content customers store inside the product. Usage metadata can inform a renewal brief. A customer's own records, tickets and documents cannot, because the vendor holds them as a processor on the customer's instructions.

*Figure: Where this piece sits in The Build Order: the context layer.*

Most sectors in this series start the build with a store that needs work and a context layer that has to be assembled from scattered systems. B2B SaaS companies start further along. Their CRM is usually current enough to forecast from, billing sits in a subscription platform, product analytics record every login and feature used, and support tickets live in a help desk with an API. That is a head start. It is also a trap, because a firm with this much context is tempted to connect all of it at once and call the result a brain.

This edition runs the full sequence (Gateway 0, tooling, context, record, reasoning and Gateways 1 to 3) for a SaaS company of 50 to 500 people. It covers where the commercial line really sits, what the context layer should and should not connect, and where the build tends to stall.

## Where the commercial line sits in SaaS

In a services firm the commercial line is mostly new business. In SaaS, a large share of revenue is decided after the first contract is signed. Renewal, expansion and contraction decisions recur every month across the customer base, and each one has a number attached.

The retention data shows why this matters. SaaS Capital's 2025 benchmarks for private B2B SaaS put median net revenue retention at 102% for companies with $25,000–$50,000 annual contract values, ranging from 97% in the lowest quartile to 111% in the top. The same research finds that higher retention correlates with higher contract values. The 2025 SaaS Benchmarks Report from Growth Unhinged and High Alpha, drawn from more than 800 private companies, found that firms combining high retention with a short CAC payback grew at 71% a year, against 10% for those with low retention and long payback.

The buyer side is shifting too. Gartner's survey of 632 B2B buyers, published in June 2025, found 61% prefer to buy without a sales rep, 73% avoid suppliers that send irrelevant outreach, and 69% see inconsistencies between what a vendor's website says and what its sellers tell them. For a SaaS company, that is an argument against using the first agent to generate more outbound. It is an argument for using it to make each customer conversation better prepared.

| Industry lens | B2B SaaS |
| --- | --- |
| Where the commercial line sits | New business, but more so renewals, expansion and the discounts attached to both |
| The store | CRM, subscription billing, product analytics, help desk |
| What joins the context layer early | Product usage: seats active, features adopted, usage against plan limits |
| Outcome lag | Weeks for expansion offers; one contract term for renewals |
| Who defends the decision | Head of customer success, revenue leader, finance on discounts |
| The sector's wall | Content customers store inside the product, held as a processor |
| Regulatory pressure | No sector regulator, but data processing agreements and, in the EU, the Data Act's switching rules |

## The build order, stage by stage

The sequence is the one set out in Part 1. What changes in SaaS is the content of each stage and the risk that comes with it.

| Stage | What it means in SaaS | The main risk |
| --- | --- | --- |
| Gateway 0 | An owner in revenue operations, the suite of record, and one CRM that customer success also updates | Customer success running its own tool, so renewal context never reaches the CRM |
| Tooling | Assistant seats for account executives, customer success managers and renewal owners | Seats for the whole company before the commercial team uses them |
| Context | CRM, email, calendar and call notes, plus product usage aggregates and billing status | Piping raw product data into the assistant instead of agreed usage measures |
| Record | Renewal decisions, expansion offers and discounts, each with reason, owner and expected outcome | Recording only the discount, not why it was given |
| Reasoning | A first agent that drafts renewal and account review briefs into a queue | An agent that emails customers when a usage threshold trips |
| Gateway 1 | A named person approves every message the agent drafts | Confusing approved lifecycle templates with agent-written outreach |
| Gateway 2 | Annual recurring revenue at stake on every recorded decision, with outcomes written back | Measuring briefs produced rather than revenue retained |
| Gateway 3 | The record extends to product and finance: pricing, packaging, roadmap commitments | Sales promises in the record treated as roadmap decisions |

Two stages deserve a closer look.

**Gateway 0 is where SaaS builds most often fail quietly.** Many SaaS firms split the customer record between a CRM owned by sales and a customer success platform owned by another team. Renewal risk, health scores and save plays then live in a system the commercial build never sees. Part 3 sets out the three decisions; in SaaS the CRM decision usually means agreeing which system holds the renewal record of truth.

**Context is where the sector differs most.** Product usage is the signal other sectors lack. A drop in active seats, a feature that never got adopted, or a customer running against its plan limit tells an account team more than any email thread. The discipline is to bring it in as agreed measures, defined once, rather than as raw event streams. A context layer that exposes every click invites the assistant to make up its own definition of "healthy". Part 5 follows one account through the context layer; the SaaS version simply adds a usage panel to it.

> In SaaS the richest context is what customers do inside the product. The most dangerous is what they keep there.

## The wall: telemetry, yes; customer content, no

Every sector in this series has context that must never be connected. In SaaS it sits inside the product itself.

A SaaS vendor holds two kinds of data about each customer. The first is data about the customer's use of the service: logins, seat counts, features used, storage consumed, support volume. The vendor generates it and generally decides how to use it, within its contract and privacy notice. The second is the content the customer puts into the product: its records, documents, tickets and often personal data about its own clients and staff. For most SaaS vendors that content is processed on the customer's behalf.

The UK Information Commissioner's Office is clear about what that means. A processing contract must require the processor to handle personal data only on the controller's documented instructions. If a processor goes beyond those instructions and decides for itself the purpose and means of processing, it is treated as a controller for that processing and takes on a controller's liability. An account team that reads a customer's stored data to spot an upsell is, in this framing, using that data for the vendor's own purposes.

The practical rule for the build:

- **Connect usage aggregates.** Active seats, feature adoption and usage against plan, defined once and refreshed on a schedule.
- **Connect support metadata, not support content.** Ticket counts, categories and resolution times are context. Ticket bodies often contain the customer's own data and should be summarised into fields by the support team, or left out.
- **Never connect tenant content.** The commercial assistant should have no path to what customers store in the product, whatever the technical permissions allow.

Regulation in the EU raises the stakes on the renewal record. The EU Data Act's switching rules have applied since 12 September 2025 and cover SaaS, including productivity suites and CRM platforms. Customers can give a maximum of two months' notice, providers must support moving exportable data within a 30-day transition period, and switching and egress charges must be eliminated from 12 January 2027. The cost of leaving is falling. A record of why customers renewed, contracted or left becomes more valuable as that cost falls, because the firm can no longer rely on friction to hold the base.

## The record and the first agent

The first record in SaaS is the renewal and expansion decision, and the discount attached to it. Each entry carries the same fields as anywhere else in this series: the decision, the reason, the owner, the status, the expected outcome and the date to check. In SaaS the expected outcome has a natural unit: annual recurring revenue retained or added.

These decisions pass the test in *Where judgment arrives first*. They are frequent across a customer base, similar from one account to the next, graded at the next renewal or within weeks for an expansion offer, and defended by a revenue leader and, on discounts, by finance. Part 9 lists the commercial decisions worth recording in general; in SaaS the three to start with are:

1. **Renewal terms**, including any price hold or multi-year discount, with the reason.
2. **Expansion offers**: which accounts were offered more seats or a higher tier, and why now.
3. **Save decisions**: what was offered to an account at risk, and whether it stayed.

The first agent drafts a renewal brief 90 days before each contract ends. It reads the CRM, the billing status, the usage measures and the record of past decisions on the account, and places the brief in a queue for the customer success manager. It does not email the customer. That is deliberately unglamorous, and Part 7 explains why.

The store will need work first. Validity's 2026 survey of 500 marketers, as reported by MarTech, found only 21% considered their CRM data very well prepared for the AI tools they use or plan to use, and 62% said poor CRM data had probably or definitely cost their organisation revenue. The same survey found 45% already use agentic AI that can act without human review. In SaaS that combination is the one to avoid: an agent acting on usage thresholds and a CRM nobody fully trusts.

Composite example: a vertical SaaS company walls off the product

Decision
:   Connect product usage aggregates and support metadata to the commercial context layer; exclude ticket bodies and all customer-stored content.

Reason and owner
:   The firm processes its customers' client records under data processing agreements, and the head of revenue operations could not show that commercial use fell within the customer's instructions. Owned by the head of revenue operations, signed off by the data protection lead.

What changed
:   Renewal briefs now show seat trends, feature adoption and ticket volume. Customer success managers report fewer surprises at renewal, and the discount field became mandatory on every renewal record.

Illustrative: a composite of a vertical SaaS company of around 120 people, built from patterns across engagements.

## The gateways in SaaS

**Gateway 1: nothing sends without a person.** SaaS companies already send a great deal of automated email: onboarding sequences, usage nudges, renewal reminders. Those are templates a person approved once. An agent-written message is different, because its content changes every time. The rule we use is simple. A template approved by a named owner can run on a trigger. Anything an agent composes for a specific account goes to a named approver before it leaves. Part 8 covers the gate, and *Approval rate measures fatigue too* covers what happens when a renewal team approves hundreds of drafts a week.

**Gateway 2: a dollar figure on every decision.** SaaS has the easiest version of this gateway, because every renewal and expansion already carries a contract value. The discipline is writing the outcome back to the decision that caused it. A price hold granted to keep an account should show, a year later, whether the account renewed at the expected value. Over a few quarters the record shows which save offers work and which only defer churn.

**Gateway 3: commercial is ready to share its brain.** In SaaS the next functions are usually product and finance. Product wants to know which missing features lost deals; finance wants to know which discounts held. The risk is that a commitment a seller made in a renewal call enters the record looking like a roadmap decision. Before the record extends to product, decisions need a status that separates "promised to a customer" from "agreed by product".

## lowob takeaways

- **Bring usage in early, as agreed measures.** Product usage is the strongest commercial signal in SaaS, and raw event streams invite the assistant to define health on its own.
- **Start with renewals and expansion.** Retention drives growth for most private SaaS firms, and these decisions carry their own contract value.
- **Wall off what customers store in the product.** The vendor processes it on the customer's instructions; commercial use breaks that line.
- **Separate templates from agent drafts.** Approved lifecycle templates can run on triggers; agent-written messages go through a person.

Gateway card

### Before a SaaS team switches on its first agent

- One system named as the renewal record of truth, used by sales and customer success
- Five to ten usage measures defined once and agreed with product
- A written rule that no customer-stored content reaches the commercial context layer
- Renewal, expansion and save decisions recorded with reason, owner and ARR at stake
- A named approver for every agent-drafted message

## Sources and notes

- [Gartner, 61% of B2B buyers prefer a rep-free buying experience](https://gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience), 25 June 2025. Survey of 632 B2B buyers fielded August to September 2024; analyst firm research.
- [SaaS Capital, SaaS retention benchmarks for private B2B companies](https://www.saas-capital.com/research/saas-retention-benchmarks-for-private-b2b-companies/), 2025. Survey of private SaaS companies; SaaS Capital is a lender to SaaS firms, and medians vary by contract-value band.
- [Growth Unhinged and High Alpha, 2025 SaaS Benchmarks Report](https://www.growthunhinged.com/p/2025-saas-benchmarks-report), 12 November 2025. More than 800 self-selected respondents, mostly US firms at $5–20M ARR; High Alpha is a venture firm.
- [ICO, what needs to be included in a controller-processor contract](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/). UK regulator guidance under UK GDPR; EU GDPR Article 28 is materially similar, but check your own contracts.
- [Cooley, new switching rules under the EU Data Act](https://www.cooley.com/news/insight/2025/2025-09-08-paas-iaas-or-saas-be-aware-new-switching-rules-will-become-applicable-in-eu), 8 September 2025. Law firm summary, not legal advice.
- Validity, State of CRM Data 2026, as reported by [MarTech](https://martech.org/marketers-know-ai-is-using-bad-data-to-make-decisions/). Vendor-run survey of 500 marketers, July 2026; full report requires registration.
- The stage table and the example are **lowob**'s illustration, drawn from patterns across engagements.

## Related research

- [The RFP Nobody Can Answer Yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/)
- [The context layer, followed through one account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [Product-led vs sales-led vs partner-led](https://lowob.com/research/product-led-vs-sales-led-vs-partner-led/)
- [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [The same build in four industries](https://lowob.com/research/the-same-build-in-four-industries/)

## Next move

List the ten renewals due in the next quarter. For each, can someone say in one line why the last discount was given? If not, start the record there, before any agent reads a single usage chart.

[Start a conversation](https://lowob.com/contact/)
