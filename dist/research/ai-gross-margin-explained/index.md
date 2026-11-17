# AI Gross Margin Explained: Why AI Products Earn Less Than SaaS

Source: https://lowob.com/research/ai-gross-margin-explained/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Revenue

> Summary: AI gross margin is revenue less the direct cost of serving AI features, chiefly inference, compute and human review, divided by revenue. Investor surveys put AI product margins between about 25% and 60%, against 80% to 85% for SaaS licence revenue. The gap comes from a real cost per use, and it is widest on heavy users of flat-priced seats.

AI gross margin is revenue minus the direct cost of delivering AI features, mainly inference, compute and human review, divided by revenue; ICONIQ put the average for AI products at 45% in 2025, against the 80% to 85% SaaS Capital cites for SaaS licence revenue. The gap exists because every AI request has a cost. It is widest where heavy users sit on flat-priced seats.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

Margin is where the pricing model is tested. **lowob**'s pricing hub, [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/), works a support-agent example at $0.99 per resolution that falls from 71.5% to 14% margin when caching lapses and resolution rates drop. This page explains the measure itself, why it sits below SaaS, and what moves it.

## What is AI gross margin?

AI gross margin is the share of AI revenue left after paying the direct, mostly variable costs of serving it. The formula is revenue minus cost of revenue, divided by revenue.

The definition of cost of revenue matters more than the arithmetic. SaaS Capital lists hosting, staff who keep production running, customer support and success staff (excluding account management), third-party software or data in the product, and other direct staff costs needed to deliver the service. Its article does not mention AI costs. Applying its principle that direct, primarily variable delivery costs belong in cost of revenue, AI adds lines that SaaS rarely had.

| Cost line | In classic SaaS | In an AI product |
| --- | --- | --- |
| Hosting and compute | Mostly fixed, falls per user with scale | Grows with every request |
| Model inference | None | Per token or per call, from an API or own hardware |
| Tools billed per use | Rare | Search, code execution and runtime, often separate |
| Human review of outputs | None | Staff who check or correct AI work before it ships |
| Support and success | Present | Present, often higher during adoption |
| Third-party data | Sometimes | Often, for retrieval or grounding |

## Why do AI products earn less than SaaS?

Because SaaS has near-zero cost per use and AI does not. A spreadsheet costs its vendor almost nothing extra when a customer opens it twice as often; an assistant answering twice as many questions sends twice as many tokens to a model.

The cost also rises as products mature. ICONIQ's 2026 report says "as products scale, talent's share of cost falls while inference rises", and notes that inference costs rise from beta to general availability. Agents add to it: Anthropic reported in June 2025 that its agents used about 4 times the tokens of chat and multi-agent systems about 15 times.

Usage is also uneven. Poyar estimates, from his own experience rather than his survey, that the top 10% of power users drive more than 70% of token consumption. On a flat seat price, those users set the margin.

## What gross margins do AI companies actually earn?

Investor surveys put AI product margins between about 25% and 60%, against 80% to 85% for SaaS licence revenue. Each figure below is self-reported or estimated by its publisher.

| Group | Gross margin | Source | Date |
| --- | --- | --- | --- |
| AI products, average | 45% in 2025; 53% projected 2026; 59% projected 2027 | ICONIQ, State of AI, about 300 executives | July 2026 |
| Fastest-growing AI start-ups ("Supernovas") | About 25%, often negative | Bessemer Venture Partners, State of AI | August 2025 |
| Fast-growing AI start-ups ("Shooting Stars") | About 60% | Bessemer Venture Partners, State of AI | August 2025 |
| AI margin targets, median | About 50%; 12% target 80% or more | Kyle Poyar, Growth Unhinged, 230+ companies | May 2026 |
| SaaS licence revenue | Generally 80% to 85% | SaaS Capital | October 2024 |

Bessemer describes the Supernovas as "often trading distribution for profit in the short term". A low margin can be a growth choice. It cannot be a permanent one.

## How do you calculate gross margin on an AI seat?

Estimate tokens per user per month, price them at the model's list rate, and compare the cost with the seat price for the average user and for a heavy user. The example is illustrative and uses Anthropic's Claude Sonnet 5.5 list prices, checked 16 November 2026: $2 per million input tokens, $10 per million output and $0.10 per million cached input.

A seat sells at $25 a month. The average user makes 400 requests a month, each reading 8,000 input tokens and writing 600 output tokens.

| Case | Model cost per month | Margin on a $25 seat, before other costs |
| --- | --- | --- |
| Average user, no caching | $8.80 | 64.8% |
| Average user, 6,000 of 8,000 input tokens cached | $4.24 | 83.0% |
| Heavy user at 5 times the average, no caching | $44.00 | Negative 76% |
| Heavy user at 5 times the average, with caching | $21.20 | 15.2% |

Two lessons follow. Caching is worth almost 20 points of margin on the average user. And the heavy user decides whether the seat is viable at all. This is why business plans now pair seats with limits: Anthropic's Claude Team page says usage limits apply and sells premium seats with "5x more usage than standard seats", as checked on 16 November 2026.

The example excludes cache-write charges, hosting, support and review. In a real cost of revenue these come on top.

## Should human review count in AI gross margin?

Yes, when the product cannot be delivered without it. SaaS Capital includes "other direct employee costs required to deliver the ongoing service" in cost of revenue. If staff check AI outputs before customers receive them, that time is a delivery cost. Leaving it out flatters the margin and hides the largest line: in the pillar's support example, review cost about five times the model.

## How do you raise AI gross margin?

Lower cost per task and price the variable part of usage. The levers are covered in [what AI inference cost is](https://lowob.com/research/what-is-ai-inference-cost/) and [prompt caching](https://lowob.com/research/what-is-prompt-caching/). On Anthropic's 16 November 2026 list prices, Claude Haiku 5.5 input costs $0.10 per million tokens against $2 for Sonnet 5.5, and the Batch API halves both input and output prices.

On the price side, move heavy use into a metered or credit component. [AI credits explained](https://lowob.com/research/ai-credits-explained/) covers the mechanics, and [how to price an AI product](https://lowob.com/research/how-to-price-an-ai-product/) sets out where margin fits in the method. Investors ask about the trend: our piece on [raising for an AI company](https://lowob.com/research/raising-for-an-ai-company/) covers what they expect to see.

## lowob takeaways

- **AI has a cost per use.** That is the structural reason margins sit below SaaS.
- **Count review in cost of revenue.** It is a delivery cost and often the largest line.
- **Heavy users set the margin.** Model the top decile, not the average.
- **Price the variable part.** Seats with limits, credits or metering protect margin as usage grows.

## Common questions

### What is a typical gross margin for an AI company?

Investor surveys put AI product margins well below SaaS. ICONIQ's July 2026 report found an average of 45% in 2025, projected at 53% for 2026. Bessemer's August 2025 report put its fastest-growing AI start-ups at about 25% and other fast growers at about 60%. SaaS Capital says SaaS licence revenue typically earns 80% to 85%.

### Why are AI gross margins lower than SaaS?

Every AI request has a direct cost in model inference and compute, which classic SaaS largely did not. Costs rise with usage, agents multiply tokens per task, and a small share of heavy users drives most consumption. Many AI products also need people to review outputs, which adds a delivery cost that SaaS products did not carry.

### How do you calculate gross margin for an AI product?

Subtract cost of revenue from revenue and divide by revenue. For AI, cost of revenue should include model inference, compute, per-use tools, third-party data, support and any human review needed to deliver the output. Calculate it per customer segment as well as in total, because heavy users can turn a healthy average into a loss.

### What gross margin should an AI startup target?

Kyle Poyar's May 2026 survey of more than 230 software companies found a median target AI margin of about 50%, with only 12% aiming for 80% or more. A lower margin can be a deliberate growth choice, as Bessemer notes, but the trend should rise as caching, smaller models and pricing changes take effect.

## Sources and notes

- [ICONIQ, 2026 State of AI Report](https://iconiq.com/growth/reports/state-of-ai-2026), July 2026. Investor research; about 300 executives; 2026 and 2027 figures are projections.
- [Bessemer Venture Partners, The State of AI 2025](https://www.bvp.com/atlas/the-state-of-ai-2025), 13 August 2025. Investor report; benchmarks are Bessemer's own and the sample is not disclosed on the page.
- [SaaS Capital, What should be included in COGS for my SaaS business](https://www.saas-capital.com/blog-posts/what-should-be-included-in-cogs-for-my-saas-business/), October 2024. Lender's guidance from its portfolio and survey; no sample size given.
- [Kyle Poyar, Growth Unhinged: The state of B2B monetization in 2026](https://growthunhinged.com/p/the-state-of-b2b-monetization-in-2026), 13 May 2026. Newsletter survey supported by Metronome; the power-user estimate is the author's, not survey data.
- [Anthropic, Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing), accessed 16 November 2026. Vendor list prices; change often.
- [Anthropic, Claude pricing](https://claude.com/pricing), accessed 16 November 2026. Vendor pricing page for business plans.
- [Anthropic, How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), 13 June 2025. Vendor engineering report.
- The seat example is **lowob**'s illustration; requests, token counts and the caching share are assumptions.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [What Is AI Inference Cost?](https://lowob.com/research/what-is-ai-inference-cost/)
- [How to Price an AI Product: A Step-by-Step Method](https://lowob.com/research/how-to-price-an-ai-product/)
- [Raising for an AI Company](https://lowob.com/research/raising-for-an-ai-company/)
- [Enterprise AI Adoption Statistics 2026](https://lowob.com/research/enterprise-ai-adoption-statistics-2026/)

## Next move

Pull last month's model and review costs by customer and rank customers by cost against revenue. If the top tenth are below your margin floor, price their excess usage before the next renewal cycle.

[Start a conversation](https://lowob.com/contact/)
