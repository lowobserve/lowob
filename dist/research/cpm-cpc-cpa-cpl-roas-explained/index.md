# CPM, CPC, CPA, CPL, ROAS Explained: Which to Run On

Source: https://lowob.com/research/cpm-cpc-cpa-cpl-roas-explained/
Publisher: lowob (https://lowob.com)
Published: 2026-03-31 · Updated: 2026-11-17
Function: Distribution

> Summary: CPM, CPC, CPL and CPA describe what a company pays for, and each hides what the next reveals. ROAS flatters, because it counts attributed revenue against media cost alone. The number to manage the business on is customer acquisition cost against value over a realistic horizon, with payback period as the constraint.

CPM, CPC, CPL and CPA describe what a company pays for, and each one hides what the next reveals. ROAS flatters: Google's own definition divides conversion value by ad spend and nothing else, so margin, fees and the attribution model all sit outside it. The number to manage the business on is customer acquisition cost (CAC) against value over a realistic horizon, with payback period as the constraint.

Every media report is built on a small set of acronyms. They describe what was paid for and what came back, and each one hides something the others reveal. The choice of which to manage to is not a reporting preference. It decides what the media buyer, the platform's bidding system and the finance team are all optimising.

## The pricing acronyms: what you pay for

**CPM, cost per mille (thousand impressions).** The price of a thousand ad views. The oldest measure and the standard for programmatic and display. It tells you what attention costs, not whether the attention was real or did anything. Even "viewable" is a low bar: the Media Rating Council's guideline counts a display impression as viewable when 50% of its pixels are on screen for one continuous second, and a video when they are on screen for two.

A low CPM is often a symptom of poor inventory. The ANA's 2023 programmatic transparency study, covering $123 million of spend and 35.5 billion impressions from 21 advertisers, found made-for-advertising sites took 21% of impressions and 15% of spend. Cheap inventory buys a lot of volume. The same study found the top 500 domains had a 50% lower fraud rate than the long tail and were 13% more viewable. Our piece on [programmatic numbers you can trust](https://lowob.com/research/programmatic-media-numbers-you-can-trust/) covers how to price CPM after verification.

**CPC, cost per click.** What you pay each time someone clicks. The standard for search and much of social. Better than CPM because a click is an action, but clicks are cheap to generate and easy to fake, and a click is not a customer.

**CPL, cost per lead.** What you pay for a contact: a form, a sign-up, a download. The standard for business-to-business and any considered purchase. Useful only if "lead" is defined tightly; a loose definition produces cheap leads nobody can sell to. Our piece on [demand generation economics](https://lowob.com/research/demand-generation-economics/) argues for managing to cost per qualified opportunity instead, for exactly this reason.

**CPA, cost per acquisition (or action).** What you pay for a defined outcome: an account opened, a purchase made, a subscription started. The standard for performance marketing and affiliate programmes. The closest of the pricing acronyms to something the finance team recognises.

**CPV, cost per view,** for video and clipping programmes, and **CPI, cost per install,** for apps, follow the same logic: a price for a defined event that may or may not lead to a customer.

## The return acronyms: what you get back

**ROAS, return on ad spend.** Revenue attributed to advertising divided by the cost of the advertising. Google's help page for Target ROAS gives the formula plainly: $5 in sales divided by $1 in ad spend is a 500% target. Conversion value is whatever the advertiser reports to the platform, usually revenue. Nothing in the calculation refers to cost of goods or margin.

That makes ROAS misleading in two ways. It depends entirely on how revenue was attributed, and it ignores every cost except media. The break-even ROAS on media alone is one divided by gross margin. At 30% gross margin that is 3.33. A campaign with a ROAS of four on that product earns $1.20 of gross profit per $1 of media, leaving 20 cents to pay for the agency fee, the creative, the tools and the people. Count those, and count the share of attributed revenue that would have arrived anyway, and it is usually losing money.

**CAC, customer acquisition cost.** All acquisition spending (media, fees, creative, tools, people) divided by the number of new customers. The honest cousin of CPA. Harder to compute, harder to game. Andreessen Horowitz's widely used metrics guide makes one refinement worth keeping: blended CAC, which divides by all new customers including organic ones, is not wrong but cannot show whether paid acquisition is profitable. Report paid CAC alongside it.

**LTV, lifetime value,** or more usefully, value over a defined horizon. What a customer is worth over twelve or twenty-four months, net of refunds, churn and cost to serve. The number CAC has to be compared with for any of this to mean anything.

**Payback period.** How many months of a customer's contribution it takes to recover the cost of acquiring them. The measure a company with limited cash should watch most closely, because a channel with excellent LTV and an eighteen-month payback can still bankrupt it. Our explainers on [CAC payback](https://lowob.com/research/what-is-cac-payback/) and [LTV:CAC versus payback](https://lowob.com/research/ltv-cac-vs-cac-payback/) set out the formulas.

## What each one hides

| Metric | What it measures | What it hides | Where it is standard |
| --- | --- | --- | --- |
| CPM | Price of 1,000 impressions | Whether the impression was seen, human or useful | Display, programmatic, video |
| CPC | Price of a click | Whether the click was interested, or real | Search, much of social |
| CPL | Price of a contact | Whether the lead was qualified | B2B, considered purchases |
| CPA | Price of a defined outcome | Whether the customer stayed, and whether they would have come anyway | Performance, affiliate |
| ROAS | Attributed revenue per $1 of media | Margin, non-media costs, the attribution model | Ecommerce, platform bidding |
| CAC | All acquisition cost per new customer | Little, if paid and blended are split | Finance, board reporting |
| Payback | Months to recover CAC | Value after the payback window | Cash planning |

CAC hides nothing much, which is why fewer reports feature it.

> A media partner who reports in CPM and ROAS but cannot produce CAC and payback is reporting what they were paid to deliver, not what the company received.

## Why the platform's number is not the company's number

Every figure in the CPA and ROAS rows is calculated from conversions the platform recorded. Each platform counts independently, so the totals across platforms routinely exceed the number of real customers. Since browsers and Apple's App Tracking Transparency cut what pixels can see, platforms also fill gaps with modelled conversions: Google's guide to conversion modelling describes estimating conversions for users who decline consent. Our piece on [how marketing tracking works](https://lowob.com/research/how-marketing-tracking-works/) covers the mechanics.

The fix is a reconciliation step. Every CPA, CPL and ROAS figure in a report should say which events the company's own tracking confirmed, rather than which events a partner or platform claimed. Where the two differ, the company's number is the one to pay against.

## Which one to run on

Run the week on the pricing acronym closest to the outcome you can observe: CPA where an outcome is trackable, CPL where the sale happens offline, CPC or CPM only where nothing further down the funnel can be measured yet.

Run the quarter on CAC against value over a realistic horizon, with payback as the constraint. Use incrementality tests to correct for the conversions that would have happened anyway; our piece on [attribution versus incrementality](https://lowob.com/research/attribution-vs-incrementality/) explains how.

Illustrative example: one channel, three readings

Decision
:   Keep, cut or scale a paid social channel reporting a ROAS of 4.2 on a product with 35% gross margin.

Illustrative: a composite of a direct-to-consumer subscription business, built from patterns across engagements. Figures are invented to show the structure.

## lowob takeaways

- **CPM prices attention, not whether it was real.** A low CPM often signals poor inventory.
- **ROAS counts media cost alone.** Compare it with one divided by gross margin before reading it as profit.
- **CAC divides all acquisition spending by new customers.** Fees, creative, tools and people included, paid and blended split.
- **Run the week and the quarter on different numbers.** The pricing metric closest to an observable outcome weekly; CAC against horizon value, with payback as the constraint, quarterly.

## Common questions

### What is the difference between CPA and CPL?

CPL is what you pay for a contact such as a form or sign-up, and is useful only if "lead" is tightly defined. CPA is what you pay for a defined outcome such as an account opened or a purchase made.

### Why is ROAS misleading?

ROAS divides attributed revenue by media cost only. It ignores margin, fees, creative and people, and depends on the attribution model. At 30% gross margin a ROAS of 3.3 only covers the media.

### What is a good ROAS?

It depends on margin. Break-even ROAS on media alone is one divided by gross margin, so 2.5 at 40% margin and 5 at 20%. A good ROAS clears that line after non-media costs and incrementality.

### Which marketing metric should a company manage to?

Run the week on the pricing metric closest to an observable outcome, and the quarter on customer acquisition cost against value over a realistic horizon, with payback period as the constraint.

## Sources and notes

- [Google Ads Help, About Target ROAS bidding](https://support.google.com/google-ads/answer/6268637?hl=en). Platform documentation; the formula and example are Google's, and value is whatever the advertiser reports.
- [ANA, "First Look" at in-depth programmatic media transparency study](https://ana.net/content/show/id/pr-2023-06-programmaticstudy), 19 June 2023. Trade association study of 21 advertisers, $123 million of spend, September 2022 to January 2023.
- [ANA Programmatic Media Supply Chain Transparency Study, First Look](https://info.adtheorent.com/hubfs/Gated-Downloads/ANA%20Programmatic%20Media%20Supply%20Chain%20Transparency%20Study%202023.pdf), June 2023. The study document, hosted by a vendor; source of the top-500 domain fraud and viewability comparison.
- [ANA, Media Rating Council updates viewable ad impression measurement guidelines](https://ana.net/content/show/id/36327), August 2015. Industry standard summary; viewability is a minimum exposure threshold, not proof of attention.
- [Andreessen Horowitz, 16 Startup Metrics](https://a16z.com/16-startup-metrics/), 21 August 2015. Investor guidance; older, but the blended versus paid CAC distinction is unchanged.
- [Google Ads Help, Your guide to conversion modeling](https://support.google.com/google-ads/answer/12284070). Platform documentation describing modelled conversions for unconsented users.
- The break-even arithmetic, the comparison table and the example are **lowob**'s calculation and illustration.

## Related research

- [Demand Generation Economics](https://lowob.com/research/demand-generation-economics/)
- [What Is CAC Payback?](https://lowob.com/research/what-is-cac-payback/)
- [LTV:CAC vs CAC Payback: Which Unit Economics Metric to Trust](https://lowob.com/research/ltv-cac-vs-cac-payback/)
- [Attribution vs Incrementality: What Did Your Marketing Actually Cause?](https://lowob.com/research/attribution-vs-incrementality/)
- [You Are Buying Media and You Do Not Trust the Numbers. You Are Right Not To.](https://lowob.com/research/programmatic-media-numbers-you-can-trust/)

## Next move

Take last quarter's best-reported channel and recompute it three ways: platform ROAS, full CAC including fees, creative and people, and payback in months. If the three point in different directions, run a holdout before you scale it.

[Start a conversation](https://lowob.com/contact/)
