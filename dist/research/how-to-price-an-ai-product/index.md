# How to Price an AI Product: A Step-by-Step Method

Source: https://lowob.com/research/how-to-price-an-ai-product/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Revenue

> Summary: Pricing an AI product starts with cost per completed task, because AI has a real marginal cost that SaaS mostly did not. Choose a value metric that tracks how customers get value, set the price between the cost floor and the buyer's next best alternative, check the margin, and run every change as an experiment with a stop rule.

To price an AI product, measure your cost per completed task, choose a value metric that tracks how customers get value, set the price between that cost floor and the buyer's next best alternative, then test it on new customers with a stop rule. Most AI companies now combine a fixed fee with a variable one. The order matters: a price set before the cost is known is a guess.

*Figure: Where this piece sits: the commercial line, where the build starts.*

The choice between seats, usage and outcomes is covered in **lowob**'s pricing hub, [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/), with one explainer per model. This page sets out the method around that choice.

## What are the steps to price an AI product?

Seven, each producing a written output that the next step needs.

| Step | Question to answer | Output | Evidence to use |
| --- | --- | --- | --- |
| 1. Cost per task | What does one completed task cost us to serve? | A cost figure, including human review | Last month's model, compute and review cost over tasks completed |
| 2. Value metric | What unit grows as the customer gets more value? | One billing unit, defined in a sentence | Customer interviews and usage logs |
| 3. Next best alternative | What would the buyer do without us? | A money value for the alternative | Field interviews, competitor list prices |
| 4. Price band | Where between cost floor and value ceiling do we sit? | A list price and a margin floor | Steps 1 and 3 |
| 5. Packaging | What is fixed, what is variable, what is included? | A one-sentence pricing description | Published hybrids in the market |
| 6. Margin check | Does the price hold for heavy users? | Margin by customer segment | Usage distribution, not the average |
| 7. Test | What would make us reverse the change? | A hypothesis and a stop rule | New-customer cohort results |

## Why start with cost per task?

Because AI has a real cost every time a customer uses it, and that cost varies by customer. Poyar's May 2026 survey found 54% of respondents ranked internal costs and margins as the single most important factor when pricing AI capabilities.

Cost per task is model cost plus compute plus human review, divided by tasks completed. The pillar's worked example shows review costing about five times the model in a healthy month. The token side is explained in [what AI inference cost is](https://lowob.com/research/what-is-ai-inference-cost/). If you cannot produce last month's figure, stop here and build the measurement first.

## How do you choose a value metric for an AI product?

Pick the unit that rises when the customer gets more value and that the customer can predict. The three model explainers cover the trade-offs: [seats](https://lowob.com/research/what-is-seat-based-pricing-for-ai/), [usage](https://lowob.com/research/what-is-usage-based-pricing-for-ai/) and [outcomes](https://lowob.com/research/what-is-outcome-based-pricing-for-ai/).

A quick test: if one customer's heaviest user could cost you more than their seat price, a pure seat metric is risky. Anthropic's Claude Team page, checked 16 November 2026, shows how vendors manage this. It sells standard seats at $20 per seat per month on annual billing and premium seats at $100 with "5x more usage than standard seats", and says usage limits apply to both.

## How do you set the price level?

Set it between your cost floor and the value of the buyer's next best alternative, closer to value where your product is clearly better. [Value-based pricing](https://lowob.com/research/what-is-value-based-pricing/) explains the method: cost sets the floor, the buyer's alternative sets the ceiling, and the gap is the buyer's reason to sign.

Published prices are reference points, not targets. Intercom lists Fin from $0.99 per outcome and Salesforce lists $2 per Agentforce conversation, as checked on 16 November 2026. Know your own price per equivalent unit. Intercom renamed itself Fin in May 2026, and on 15 June 2026 Salesforce signed a definitive agreement to acquire it for about $3.6 billion.

## What gross margin should an AI product target?

Most AI companies target about 50%, well below classic SaaS. Poyar's survey put the median target at about 50% in May 2026. Only 12% aimed for 80% or more, and a similar share targeted 20% or lower. ICONIQ's July 2026 report put average AI product gross margins at 45% in 2025, projected at 53% for 2026.

Set a margin floor per task and check it by segment, not on the average. Poyar estimates from his own experience, not the survey, that the top 10% of power users drive more than 70% of token consumption. [AI gross margin explained](https://lowob.com/research/ai-gross-margin-explained/) covers the calculation.

## Should you charge for AI separately or include it?

Include it when AI is now the expected core of the product; charge separately when it serves a subset of users with a distinct job.

Google included Gemini in Workspace Business and Enterprise plans from January 2025. Its announcement gave the example of a Business Standard customer who had paid $32 per user per month with the Gemini Business add-on now paying $14. Microsoft does both. Its pricing page, checked 16 November 2026, says Copilot Chat is "included at no additional cost" with eligible plans, while Microsoft 365 Copilot Business is an add-on at $21 per user per month on annual billing.

Poyar found 70% of respondents said AI spend comes out of customers' technology or software budgets. A separate AI line competes inside the same budget, so it needs its own case.

## How should you package a hybrid price?

Keep the fixed part for the platform and the variable part for the AI work, and describe the whole price in one sentence. Poyar found 37% of companies used a hybrid model in 2026, up from 25% a year earlier, and 29% let customers choose between pricing models, up from 21%.

| Hybrid shape | When it fits | One-sentence test |
| --- | --- | --- |
| Seat plus usage allowance | Daily human use with occasional heavy work | "Each seat includes a monthly allowance; extra use is billed at the order-form rate" |
| Platform fee plus credits | Agents whose volume varies by month | "The fee covers the platform; credits pay for agent actions" |
| Platform fee plus outcome fee | Countable results the buyer trusts | "The fee covers the platform; each defined result is billed once" |

If the price needs a calculator to explain, buyers will assume the worst case. [AI credits explained](https://lowob.com/research/ai-credits-explained/) covers how to make a credit model legible.

## How do you test a new AI price?

Run it on new customers first, with a written hypothesis and a stop rule, and keep existing customers on the old price until the result is in. Poyar found three in four software companies changed pricing or packaging in the year to May 2026. Metronome, a billing vendor, noted in April 2026 that Cursor had made four major pricing structure changes in under two years.

Our guide to [pricing experiments in B2B](https://lowob.com/research/pricing-experiments-in-b2b/) covers reading results at low volume. Record each pricing decision with its reason, owner and expected result, so the next change can learn from this one.

## lowob takeaways

- **Cost first.** Know last month's cost per completed task, review included, before choosing a price.
- **Pick a predictable metric.** The unit should grow with value and be forecastable by the buyer.
- **Price to the alternative.** Cost is the floor; the buyer's next best option is the ceiling.
- **Test with a stop rule.** New customers first, existing customers grandfathered until the result is in.

## Common questions

### How do you price an AI product?

Measure cost per completed task, including human review. Choose a value metric that grows with customer value. Set a price between that cost floor and the value of the buyer's next best alternative. Package fixed and variable parts so the price fits in one sentence, check margin by segment, then test the price on new customers with a stop rule.

### What is a good gross margin for an AI product?

Kyle Poyar's May 2026 survey of more than 230 software companies found a median target AI margin of about 50%, with only 12% aiming for 80% or more. ICONIQ's July 2026 report put average AI product gross margins at 45% in 2025, projected at 53% for 2026. Set your own floor per task and check it by customer segment.

### Should AI features be priced separately?

Charge separately when AI serves a subset of users with a distinct job; include it when AI is the expected core. Google included Gemini in Workspace plans in January 2025, while Microsoft sells Microsoft 365 Copilot Business as a $21 add-on and includes Copilot Chat at no extra cost, as listed in November 2026.

### What is hybrid pricing for AI?

A price with a fixed part, such as a platform fee or seats, and a variable part tied to usage, credits or outcomes. Growth Unhinged's May 2026 survey found 37% of software companies used one, up from 25% a year earlier. ICONIQ found AI companies blend an average of 1.7 pricing models.

## Sources and notes

- [Salesforce, Salesforce signs definitive agreement to acquire Fin](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/), 15 June 2026. Vendor press release; Fin is the former Intercom.
- [Kyle Poyar, Growth Unhinged: The state of B2B monetization in 2026](https://growthunhinged.com/p/the-state-of-b2b-monetization-in-2026), 13 May 2026. Newsletter survey of more than 230 companies, supported by Metronome, a billing vendor; self-reported.
- [ICONIQ, 2026 State of AI Report](https://iconiq.com/growth/reports/state-of-ai-2026), July 2026. Investor research; about 300 executives; 2026 margins are projections.
- [Google Workspace blog, The future of AI-powered work for every business](https://workspace.google.com/blog/product-announcements/empowering-businesses-with-AI), 15 January 2025, updated 28 April 2025. Vendor announcement.
- [Microsoft, Microsoft 365 Copilot plans and pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing), accessed 16 November 2026. Vendor pricing page; US prices.
- [Anthropic, Claude pricing](https://claude.com/pricing), accessed 16 November 2026. Vendor pricing page; usage limits described, not quantified.
- [Intercom, Pricing](https://www.intercom.com/pricing), accessed 16 November 2026. Vendor pricing page.
- [Salesforce, Agentforce pricing](https://www.salesforce.com/in/agentforce//pricing), accessed 16 November 2026. Vendor pricing page; subject to change.
- [Metronome, 2026 trends from cataloging 50+ AI pricing models](https://metronome.com/blog/2026-trends-from-cataloging-50-ai-pricing-models), 2 April 2026. Billing-vendor analysis.
- The seven-step method and the hybrid table are **lowob**'s framework.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [What Is Value-Based Pricing?](https://lowob.com/research/what-is-value-based-pricing/)
- [AI Gross Margin Explained: Why AI Products Earn Less Than SaaS](https://lowob.com/research/ai-gross-margin-explained/)
- [Pricing Experiments in B2B](https://lowob.com/research/pricing-experiments-in-b2b/)
- [Per-Resolution vs Per-Outcome Pricing: What Changed and What to Check](https://lowob.com/research/per-resolution-vs-per-outcome-pricing/)

## Next move

Write down last month's cost per completed task and the price per equivalent unit you charge today. If the margin is below 50% for your heaviest customer segment, draft one pricing experiment with a stop rule this week.

[Start a conversation](https://lowob.com/contact/)
