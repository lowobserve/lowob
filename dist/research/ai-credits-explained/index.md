# AI Credits Explained: How Credit-Based Pricing Works and How to Budget

Source: https://lowob.com/research/ai-credits-explained/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Revenue

> Summary: AI credits are a prepaid or metered currency that a vendor converts into AI work at its own burn rates. They let one price cover many features, and they move forecasting risk to the buyer. Budget by converting credits into cost per task, and negotiate rollover, true-up and alerts before you commit.

AI credits are a currency a vendor sells in bulk and burns per AI action: Salesforce, for example, sells 100,000 Flex Credits for $500 and charges 20 credits, or $0.10, per agent action, as listed in November 2026. Credits let one price cover many features. They also make the bill harder to read, because the vendor sets the burn rates.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

Credits are one form of usage-based pricing, which **lowob**'s pricing hub, [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/), compares with seats and outcomes. The general case for metering is in [what usage-based pricing for AI is](https://lowob.com/research/what-is-usage-based-pricing-for-ai/). This page covers the credit mechanics and how to budget for them.

## What are AI credits?

AI credits are units a buyer purchases in advance or pays for as used, which the vendor then deducts at different rates for different AI activities. The credit is an exchange rate between money and work, set by the vendor.

A credit model has three numbers. The purchase price says what a credit costs. The burn rate says how many credits an activity uses. The effective unit price is the first multiplied by the second. Vendors usually publish the first, sometimes the second, and rarely the third.

## How much do AI credits cost?

Published credit prices range from about $0.005 to $0.008 per credit at Salesforce and Microsoft, but burn rates differ, so the per-credit price says little on its own. The table shows what each vendor published on the pages checked on 16 November 2026.

| Vendor and credit | Purchase price | Burn rate | Effective unit price | Rollover and expiry |
| --- | --- | --- | --- | --- |
| Salesforce Flex Credits | $500 per 100,000 ($0.005 each) | 20 per action; 30 per voice action | $0.10 per action; $0.15 per voice action | Unused credits do not roll over into later terms |
| Microsoft Copilot Credits (Copilot Studio pack) | $200 per pack of 25,000 per month (about $0.008 each) | "A varying number" by usage; rates not on the pricing page | Not published on the page | Not stated on the pages checked |
| Microsoft Copilot Credits (prepaid plan) | Up to 20% saving for paying up front | As above | Not published on the page | Pay-as-you-go cover when prepaid credits run out |
| OpenAI ChatGPT Business workspace credits | Not stated in the help article | Extend usage beyond included rate limits | Not published in the article | Not stated |

Two contrasts help. Anthropic's Claude Enterprise plan, as listed on 16 November 2026, charges a seat price plus usage "at API rates" instead of credits, so the unit is the token. And Salesforce's per-user add-on, at $125 per user per month, gives unmetered employee use with no credits at all. The same vendor can sell both.

## Why are vendors moving to credits?

Credits let a vendor price many AI features with one currency and change the burn rates without rewriting the price list. Poyar found AI credit models grew 126% year on year in 2025, and that roughly one in two companies above $50 million in annual recurring revenue planned to introduce credits in 2026.

Metronome, a billing vendor that has catalogued more than 50 AI companies, wrote in April 2026 that "nearly every category" in its index features some version of a credit model. It also recorded a move the other way: Windsurf replaced a credit-based system with fixed usage quotas across a tier structure. Credits are popular with sellers and not always kept.

Microsoft describes Copilot Credits as "a common currency for eligible Microsoft services with usage-based billing", per its documentation updated on 3 November 2026. The benefit to the vendor is flexibility. The cost to the buyer is that one currency spread across many services is harder to forecast.

## How do you budget for AI credits?

Convert credits into tasks: tasks per month, multiplied by actions per task, by credits per action and by the credit price. Then add a buffer and test it against a month of real use.

The example is illustrative and uses Salesforce's published rates. A service team expects 2,000 agent conversations a month, each taking four actions.

| Line | Figure |
| --- | --- |
| Actions per month | 2,000 conversations x 4 actions = 8,000 |
| Credits per month | 8,000 x 20 = 160,000 |
| Monthly cost at $500 per 100,000 | $800 |
| Annual prepaid commitment | 1.92 million credits, $9,600 |
| If real use is 30% lower | 576,000 credits unused, $2,880 lost if they do not roll over |
| Same volume at $2 per conversation | $4,000 a month |

The example shows why credits can be cheaper than per-conversation pricing and why they carry forecasting risk. Salesforce's page says Flex Credits and Conversations "will not be supported in the same org", so a buyer cannot hedge by mixing both. Size the first commitment below forecast, and pay for the rest as you go.

Keep the budget honest. Measure actions per task in a pilot rather than accepting a vendor average. Set alerts at 50%, 75% and 90% of the monthly budget; Microsoft's pricing page says administrators manage spending in Cost Management in the Microsoft 365 admin center. And recalculate cost per task each month, since burn rates can change.

## What should you negotiate in a credit contract?

Rollover, true-up, overage rate and notice of burn-rate changes. Salesforce's page sets some useful precedents: "There is no overage penalty", usage beyond the entitlement is billed monthly in arrears at the contracted rate, and its Pre-Commit option includes a "True-up at term end if usage is below commitment".

Ask for the burn rate of every action you expect to use, in the order form, and for notice before any change. [How to negotiate an AI software contract](https://lowob.com/research/how-to-negotiate-an-ai-software-contract/) covers the clauses in order.

## lowob takeaways

- **A credit is an exchange rate the vendor sets.** Ask for purchase price, burn rate and effective unit price.
- **Prepaid credits carry forecasting risk.** Unused Salesforce Flex Credits do not roll over.
- **Commit below forecast.** Pay as you go for the rest until a month of real use is measured.
- **Compare on cost per task.** Credit prices are not comparable across vendors; completed tasks are.

## Common questions

### What are AI credits?

AI credits are a vendor-defined currency bought in advance or paid as used, which the vendor deducts at different rates for different AI activities. Salesforce sells 100,000 Flex Credits for $500 and burns 20 per agent action, so each action costs $0.10, as listed in November 2026. The burn rate, not the credit price, decides what a task costs.

### How much do Microsoft Copilot Credits cost?

Microsoft's Copilot Studio pricing page, checked in November 2026, sells capacity packs of 25,000 Copilot Credits for $200 a month, about $0.008 per credit. A prepaid plan offers savings of up to 20%, and pay-as-you-go needs no up-front commitment. The page does not list how many credits each feature uses.

### Do unused AI credits roll over?

It depends on the contract. Salesforce's pricing page, checked in November 2026, says unused Flex Credits do not roll over into later subscription terms. Zendesk's help centre says unused automated resolutions do not roll over to the next usage period. Negotiate rollover, a smaller commitment, or a true-up before signing a prepaid amount.

### Are AI credits cheaper than per-seat pricing?

Sometimes. Credits are cheaper when usage is low or uneven across users, and dearer when a few heavy users or agents run many actions. Convert both offers into cost per completed task for your own volumes. Salesforce, for example, sells unmetered Agentforce add-ons at $125 per user per month beside its credit option.

## Sources and notes

- [Salesforce, Agentforce pricing](https://www.salesforce.com/in/agentforce//pricing), accessed 16 November 2026. Vendor pricing page; source of burn rates, rollover, overage and true-up terms; subject to change.
- [Microsoft, Copilot Studio plans and pricing](https://www.microsoft.com/en-us/copilot/pricing/copilot-studio), accessed 16 November 2026. Vendor pricing page; per-feature rates not shown.
- [Microsoft Learn, Copilot Credits overview](https://learn.microsoft.com/microsoft-copilot-studio/copilot-credits-overview), last updated 3 November 2026. Vendor documentation.
- [Microsoft, Microsoft 365 Copilot plans and pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing), accessed 16 November 2026. Vendor pricing page; source of the Cost Management note.
- [OpenAI Help Center, ChatGPT Business](https://help.openai.com/en/articles/8792828), accessed 16 November 2026. Vendor documentation; credit prices not stated.
- [Anthropic, Claude pricing](https://claude.com/pricing), accessed 16 November 2026. Vendor pricing page.
- [Zendesk Help Center, Upgrading from automated resolutions to resolution allowances](https://support.zendesk.com/hc/en-us/articles/10479528943130), accessed 16 November 2026. Vendor documentation; example prices are placeholders.
- [Kyle Poyar, Growth Unhinged: The state of B2B monetization in 2026](https://growthunhinged.com/p/the-state-of-b2b-monetization-in-2026), 13 May 2026. Newsletter survey supported by Metronome; self-reported.
- [Metronome, 2026 trends from cataloging 50+ AI pricing models](https://metronome.com/blog/2026-trends-from-cataloging-50-ai-pricing-models), 2 April 2026. Billing-vendor analysis.
- The budget example is **lowob**'s illustration; conversation volume, actions per conversation and the 30% shortfall are assumptions.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [What Is Usage-Based Pricing for AI?](https://lowob.com/research/what-is-usage-based-pricing-for-ai/)
- [How to Negotiate an AI Software Contract: Caps, Credits and Outcome Terms](https://lowob.com/research/how-to-negotiate-an-ai-software-contract/)
- [How Much Does an AI Agent Cost? Build, Buy and Run Costs in 2026](https://lowob.com/research/how-much-does-an-ai-agent-cost/)
- [AI Pricing Statistics 2026: Models, Price Points and Trends](https://lowob.com/research/ai-pricing-statistics-2026/)

## Next move

For one credit-billed tool, ask the vendor for the burn rate of the three actions you use most, then divide last month's credit spend by tasks completed. If no one can produce the task count, set it up before the next commitment.

[Start a conversation](https://lowob.com/contact/)
