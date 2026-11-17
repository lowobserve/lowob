# How to Negotiate an AI Software Contract: Caps, Credits and Outcome Terms

Source: https://lowob.com/research/how-to-negotiate-an-ai-software-contract/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Revenue

> Summary: AI contracts move cost risk into terms that classic software contracts never needed: the billable unit, burn rates, caps, rollover and change notice. Published vendor terms show where the defaults sit. This guide sets out ten clauses with an opening ask, a fallback and a dated precedent for each, and the data to bring to the table.

To negotiate an AI software contract, fix the billable unit and its definition in the order form, cap spend with alerts and a pause option, secure rollover or a true-up on prepaid credits, and get written notice before any metric or price change. Vendors' published terms show the defaults. Most are written for the seller, and most can be moved.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

The terms that matter follow from the pricing model. **lowob**'s pricing hub, [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/), defines each contract term and why it exists. This page is the buyer's side: what to ask for, what to settle for, and which published precedent to point to.

## What should you negotiate first in an AI contract?

The billable unit and its definition, because every other number depends on it. Put the definition in the order form, not a link to a help page the vendor can edit.

Intercom's 2026 change shows why. Its unit widened from resolutions to outcomes, which now include procedure handoffs to a person and disqualifications. A buyer who budgeted on resolutions pays for more events at the same rate. [Per-resolution vs per-outcome pricing](https://lowob.com/research/per-resolution-vs-per-outcome-pricing/) recounts a month under both definitions. Ask for the old unit to hold until renewal if the vendor changes it. Intercom renamed itself Fin in May 2026, and on 15 June 2026 Salesforce signed a definitive agreement to acquire it for about $3.6 billion.

## Which AI contract clauses matter most?

Ten clauses carry most of the cost risk. The table gives an opening ask, a fallback and a published precedent for each, all checked on vendors' pages on 16 November 2026 unless dated otherwise.

| Clause | Opening ask | Fallback | Published precedent |
| --- | --- | --- | --- |
| Billable unit | Definition in the order form, fixed for the term | Old unit honoured until renewal | Intercom moved to outcomes on 12 March 2026 |
| Change notice | 90 days' written notice of any unit or rate change | 30 days, with a right to exit | Zendesk gives 30 days' notice before moving accounts to resolution tiers |
| Spend cap | Hard monthly cap per agent and per account | Pause at the limit, with alerts before it | Zendesk lets accounts pause AI features or pay overages as they go |
| Overage rate | Same rate as committed usage | A capped premium over the committed rate | Salesforce: "no overage penalty", billed monthly in arrears at the contracted rate |
| Credit rollover | Full rollover for one term | Partial rollover, or a smaller commitment | Salesforce: unused Flex Credits do not roll over |
| True-up | Under-use credited against renewal | Shortfall payable only at an agreed rate | Salesforce Pre-Commit: "True-up at term end if usage is below commitment" |
| Promotional price | Promotion locked for the whole term | Renewal capped at list price | Microsoft: $18 for the first year only; list $21 |
| Choice of unit | Right to switch billing units mid-term | Switch at renewal without penalty | Salesforce: Flex Credits and Conversations not supported in the same org |
| Data residency | Residency at no uplift | Uplift fixed in the price | Anthropic: 1.1 times token prices for US-only inference |
| Billing evidence | Monthly export of every billable event | Quarterly sample with reasons | Zendesk: a language model verifies each conversation |

## How do you cap AI spend in a contract?

Ask for a hard cap that stops spend, not just an alert. Zendesk's help centre already offers the choice to "automatically pause features" at the limit or "pay for overages as you go". Microsoft's pricing page says administrators manage spending for usage-based Copilot features in Cost Management in the "Microsoft 365 admin center".

Agents need their own caps, because one looping agent can spend a team's budget. Ask whether caps can be set per agent, and route agent calls you build yourself through an [LLM gateway](https://lowob.com/research/what-is-an-llm-gateway/) that enforces them.

## Can you get unused AI credits to roll over?

Sometimes, but the published defaults say no. Salesforce's page says unused Flex Credits do not roll over into later terms, and Zendesk's says automated resolutions don't roll over to the next usage period.

If rollover is refused, commit lower and pay as you go for the rest. Microsoft's prepaid plan for Copilot Credits offers savings of up to 20% for paying up front, with "automatic pay-as-you-go coverage when prepaid credits run out", per its Copilot Studio page. A smaller commitment with that kind of cover often beats a larger one that expires. Ask what Salesforce's Pre-Commit true-up means in money before signing it. [AI credits explained](https://lowob.com/research/ai-credits-explained/) shows how to size the first commitment.

## How do you negotiate seat prices and renewals?

Trade term length for price, and cap the renewal. Monthly billing costs more: Microsoft lists Copilot Business at $25.20 monthly against $21 annually, and OpenAI lists ChatGPT Business at $25 against $20, as checked on 16 November 2026.

Promotions need a renewal clause. Microsoft's $18 price applies to the first year only, for purchases between 1 July and 31 December 2026. Without a cap, year two renews at list. Microsoft also gives a 7-day window for a prorated refund after a paid subscription begins, so test seat counts quickly. [AI assistant pricing compared](https://lowob.com/research/ai-assistant-pricing-compared-2026/) lists the seat prices side by side.

## What should you bring to the negotiation?

Your own usage data, your cost per task and a credible alternative. Vendors negotiate on their averages; you should negotiate on your numbers.

Bring three months of usage by user or agent, the cost per completed task for each tool, and a quote or published price from a competitor. [Value-based pricing](https://lowob.com/research/what-is-value-based-pricing/) explains why the buyer's next best alternative sets the ceiling. Kyle Poyar's May 2026 survey found 70% of sellers said AI spend comes out of customers' technology or software budgets, so expect procurement to compare AI lines with other software. Record the outcome of each negotiation with its reason and owner, so the renewal starts from evidence.

## lowob takeaways

- **Fix the unit first.** The definition belongs in the order form, with the old unit held until renewal.
- **Cap, do not just alert.** Ask for a pause at the limit and caps per agent.
- **Commit below forecast.** Without rollover, a smaller prepaid amount plus pay-as-you-go is safer.
- **Cap the renewal.** First-year promotions renew at list unless the contract says otherwise.

## Common questions

### What should be in an AI software contract?

A written definition of the billable unit, the rate for each unit, a spend cap or pause option, the overage rate, rollover or true-up terms for prepaid credits, notice before any unit or price change, a renewal cap, data residency terms and the right to export the events behind each charge. Vendors' published defaults favour the seller on most of these.

### Can you negotiate AI credit rollover?

You can ask, but published defaults usually refuse it. Salesforce's pricing page, checked in November 2026, says unused Flex Credits do not roll over into later terms. If rollover is refused, commit below your forecast and pay as you go above it. Microsoft's prepaid Copilot Credit plan, for example, switches to pay-as-you-go when credits run out.

### How do you avoid surprise AI bills?

Negotiate a hard spend cap that pauses usage at a limit, with alerts before it, and set caps per agent as well as per account. Zendesk already lets accounts pause AI features or pay overages as they go. Recalculate cost per completed task each month, because burn rates, units and agent behaviour can all change mid-term.

### Should you sign an annual or monthly AI contract?

Annual is cheaper per seat: Microsoft lists Copilot Business at $21 annually against $25.20 monthly, and OpenAI lists ChatGPT Business at $20 against $25, as checked in November 2026. Monthly suits a pilot whose seat count is not yet proven. Move to annual once weekly use per seat is known, and cap the renewal price.

## Sources and notes

- [Salesforce, Salesforce signs definitive agreement to acquire Fin](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/), 15 June 2026. Vendor press release; Fin is the former Intercom.
- [Intercom Help Center, Understanding Fin outcomes](https://www.intercom.com/help/en/articles/13513868-understanding-fin-outcomes), accessed 16 November 2026. Vendor documentation.
- [Salesforce, Agentforce pricing](https://www.salesforce.com/in/agentforce//pricing), accessed 16 November 2026. Vendor pricing page; source of rollover, overage, true-up and mixing terms; subject to change.
- [Zendesk Help Center, Upgrading from automated resolutions to resolution allowances](https://support.zendesk.com/hc/en-us/articles/10479528943130), accessed 16 November 2026. Vendor documentation; source of pause, rollover and notice terms.
- [Zendesk Help Center, About automated resolution tiers](https://support.zendesk.com/hc/en-us/articles/9570369117338-About-automated-resolution-tiers), accessed 16 November 2026. Vendor documentation.
- [Microsoft, Microsoft 365 Copilot plans and pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing), accessed 16 November 2026. Vendor pricing page; US prices; promotion and refund terms.
- [Microsoft, Copilot Studio plans and pricing](https://www.microsoft.com/en-us/copilot/pricing/copilot-studio), accessed 16 November 2026. Vendor pricing page.
- [OpenAI Help Center, ChatGPT Business](https://help.openai.com/en/articles/8792828), accessed 16 November 2026. Vendor documentation.
- [Anthropic, Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing), accessed 16 November 2026. Vendor list prices; source of the data residency multiplier.
- [Kyle Poyar, Growth Unhinged: The state of B2B monetization in 2026](https://growthunhinged.com/p/the-state-of-b2b-monetization-in-2026), 13 May 2026. Newsletter survey supported by Metronome; seller-reported.
- The opening asks and fallbacks are **lowob**'s negotiating guidance, not published vendor terms.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [AI Credits Explained: How Credit-Based Pricing Works and How to Budget](https://lowob.com/research/ai-credits-explained/)
- [Per-Resolution vs Per-Outcome Pricing: What Changed and What to Check](https://lowob.com/research/per-resolution-vs-per-outcome-pricing/)
- [What Is a Data Processing Agreement for AI Tools?](https://lowob.com/research/what-is-a-data-processing-agreement-for-ai/)
- [The Humans Carrying Context Are the Price Signal](https://lowob.com/research/the-humans-carrying-context-are-the-price-signal/)

## Next move

Take your next AI renewal and mark each of the ten clauses in the table as agreed, missing or vendor default. Send the vendor your opening asks on the missing ones at least 60 days before the renewal date.

[Start a conversation](https://lowob.com/contact/)
