# Intent Data vs First-Party Data

Source: https://lowob.com/research/intent-data-vs-first-party-data/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Growth

> Summary: Intent data, in the sense most vendors sell it, is a third-party feed that infers which companies are researching a topic, based on content consumed across publisher networks. First-party data is information a firm collects directly from its own customers and prospects: CRM records, website and product behaviour, email engagement, support tickets and billing. Intent sees research before a buyer reaches you, at company level and with uncertainty. First-party data sees less of the market but is owned, more accurate and often tied to named people. For most B2B firms, first-party data is the cheaper and more reliable place to start.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- BCG defines first-party data as "proprietary information that a company collects directly from the customer, with consent."
- Forrester's 2023 intent survey found over 85% of users reported benefits, but more expected specific benefits than achieved them, with the largest gap in sales use cases.
- Forrester lists undervaluing first-party intent among the ten biggest intent data mistakes, and warns that relying on vendor privacy compliance is never enough.
- In April 2025 Google said Chrome would keep its current approach to third-party cookie choice and would not roll out a new standalone prompt.
- In **lowob**'s brain loop, first-party data is the store you own; third-party intent is rented context that helps a person decide where to look.

## What the two terms mean

The terms overlap, so it helps to be precise. **First-party data** is everything you collect directly. Some of it signals intent, such as a pricing page visit or a trial sign-up, which is why practitioners talk about first-party intent. **Intent data** as a product category means third-party intent: research behaviour captured on sites you have no relationship with, resolved to companies by a provider and sold as a feed. Our explainer on [intent data](https://lowob.com/research/what-is-intent-data/) covers how those feeds are collected, resolved and scored.

| Dimension | Third-party intent data | First-party data |
| --- | --- | --- |
| Where it comes from | Publisher networks and co-ops | Your site, product, CRM, email, support, billing |
| What it sees | Research on topics, before buyers find you | Behaviour of buyers already aware of you |
| Unit | Usually the company | Often a named person, linked to an account |
| Accuracy | Inferred through identity resolution | Observed directly, subject to your data quality |
| Ownership | Licensed; ends when the contract ends | Owned, if collected lawfully |
| Lawful basis | The provider's, plus your own for use | Yours, set at collection |
| Typical cost | Annual subscription | Mostly the cost of capture and clean-up |
| Main failure | Noise mistaken for demand | Data scattered across tools and never joined |

## How they differ in practice

**Coverage against accuracy.** Third-party intent's advantage is reach: it can flag accounts that have never visited your site. The cost is inference. Signals are resolved from IP addresses, logins and identity graphs, and are usually reported as a change against a baseline. First-party data covers fewer accounts, but you know what happened, when and often who did it.

**Who, not just which.** Forrester's survey found the top execution challenge for intent users was identifying the right decision-makers inside accounts showing intent, and noted that few providers deliver signals from known contacts. First-party data often supplies exactly that: the three people from one account who attended a webinar and opened a proposal.

**Decay.** Forrester calls intent "among the most time-sensitive data types available" and says stored signals need a decay model. The same applies to first-party engagement, but you control the timestamps and the rules.

**Compliance.** Forrester's advice is direct: firms need their own lawful basis for storing and using prospect data, whatever the vendor's position. With first-party data, the basis is set when you collect it, and you can document it.

**Cookies did not settle the question.** For years the case for first-party data rested partly on Chrome ending third-party cookies. Google's April 2025 decision to keep its current approach removed that deadline. The argument for first-party data now rests on accuracy and ownership instead.

**Most firms underuse what they have.** In BCG research conducted with Google and published in 2021, only about 30% of companies were creating a single customer view across channels. The sample was 23 companies and seven agencies, mostly consumer-facing, so treat it as directional for B2B.

## Which to use first

| Situation | Where to start |
| --- | --- |
| Website, product and CRM data are not linked to accounts | First-party: join them before buying a feed |
| Most pipeline comes from inbound or existing customers | First-party, scored at account level |
| Outbound to accounts that have never engaged | Third-party intent, tested against a control group |
| New category with no clear topic taxonomy | First-party; intent topics may not describe you |
| Already using several intent providers | Audit overlap and test each against first-party outcomes |
| Account teams cannot tell who is engaged inside target accounts | First-party contact engagement, rolled up to the account |

A practical sequence for a firm of 20 to 500 people:

1. **List your first-party sources.** Site analytics, forms, product events, email, meetings, support and billing, each with its owner.
2. **Link them to accounts.** Match people to companies with [entity resolution](https://lowob.com/research/what-is-entity-resolution/), in the CRM or a warehouse.
3. **Define a few strong signals.** Pricing page visits, a second stakeholder engaging, a trial reaching a usage threshold.
4. **Add third-party intent for reach.** Use it for accounts with no first-party history, and test it before scaling spend.
5. **Compare against outcomes.** Each quarter, check which signals preceded opportunities, and drop the ones that did not.

## The **lowob** view

The enterprise brain is a loop: store, wiring, record, reasoning, learning. First-party data is the store, and it is yours. Third-party intent is rented context, one more input to the wiring that tells a person or an agent where to look. Neither is a decision.

The decision to prioritise an account, the reason and the owner belong in the record. The learning step closes the loop: write back whether accounts flagged by each signal turned into opportunities, so next quarter's spend follows evidence. That write-back is itself first-party data, and over time it becomes the most valuable signal a firm holds. In outbound, a signal earns its place when it gives a seller a real reason to get in touch; see [Cold Outreach Works Better With a Real Reason to Talk](https://lowob.com/research/signal-based-outbound/).

## lowob takeaways

- **Intent sees reach; first-party sees truth.** One flags unknown accounts, the other shows what known buyers did.
- **Join your own data first.** Most firms already hold stronger signals than they use.
- **Own the lawful basis.** Vendor compliance does not cover your use of prospect data.
- **Write back what converted.** The record of which signals worked is first-party data you cannot buy.

## Common questions

### What is the difference between intent data and first-party data?

Intent data, as usually sold, is inferred from research on third-party sites and resolved to companies. First-party data is collected directly from your own customers and prospects through your site, product, CRM and email.

### Is first-party data better than intent data?

It is more accurate and owned, but it only sees buyers already aware of you. Third-party intent adds reach. Most B2B firms get more from organising first-party data first.

### Is first-party intent data the same as first-party data?

It is a subset. First-party intent is the part of your own data that signals buying interest, such as pricing page visits, trial activity or several people from one account engaging.

### Did Google remove third-party cookies from Chrome?

No. In April 2025 Google said it would keep its current approach to third-party cookie choice in Chrome and would not introduce a new standalone prompt.

## Sources and notes

- [Forrester, Intent Data Expectations Vs. Reality: What's Working, And Where Are The Gaps?](https://www.forrester.com/blogs/intent-data-expectations-vs-reality-whats-working-and-where-are-the-gaps), 26 October 2023. Analyst blog summarising its Q1 2023 survey; sample size not stated in the post.
- [Forrester, The 10 Biggest Intent Data Mistakes For B2B Marketing And Sales](https://www.forrester.com/blogs/the-10-biggest-intent-data-mistakes-for-b2b-marketing-and-sales), 17 February 2023. Analyst opinion, not survey data.
- [Google Privacy Sandbox, Next steps for Privacy Sandbox and tracking protections in Chrome](https://privacysandbox.google.com/blog/privacy-sandbox-next-steps), 22 April 2025. Primary announcement from the browser vendor.
- [BCG, The Value of First-Party Data](https://www.bcg.com/en-ca/publications/2021/the-value-of-first-party-data), March 2021. Research conducted with Google, which sells advertising; small, consumer-leaning sample.
- The comparison table, sequence and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is Intent Data, and How Reliable Is It?](https://lowob.com/research/what-is-intent-data/)
- [Cold Outreach Works Better With a Real Reason to Talk](https://lowob.com/research/signal-based-outbound/)
- [CRM vs CDP vs Data Warehouse: Which Holds What](https://lowob.com/research/crm-vs-cdp-vs-data-warehouse/)
- [Lead Scoring vs Account Scoring](https://lowob.com/research/lead-scoring-vs-account-scoring/)

## Next Move

List every first-party source that records buyer behaviour and mark whether it links to an account in your CRM. Fix the largest unlinked source before renewing or buying any intent feed.

[Start a conversation](https://lowob.com/contact/)
