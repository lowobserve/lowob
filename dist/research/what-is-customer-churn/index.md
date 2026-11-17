# What Is Customer Churn?

Source: https://lowob.com/research/what-is-customer-churn/
Publisher: lowob (https://lowob.com)
Published: 2026-11-14 · Updated: 2026-11-17
Function: Revenue

> Summary: Customer churn measures how many customers, or how much of their recurring revenue, a firm loses over a period. Logo churn counts customers; gross revenue churn counts lost and downgraded revenue and is the complement of gross revenue retention. Reporting both shows whether losses are concentrated in small or large accounts, and recording the reason for each loss is what lets the next renewal go better.

Customer churn is the loss of customers, or of the recurring revenue they bring, over a set period. Logo churn counts the share of customers lost. Gross revenue churn counts the share of starting recurring revenue lost to cancellations and downgrades, and is 100% minus gross revenue retention. The gap between the two shows whether you are losing many small accounts or a few large ones.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What customer churn means

Churn is the opposite of retention. Of the customers paying at the start of a period, some leave, some pay less and some pay more. Churn measures the losses, and excludes customers won during the period.

There is no single churn number. Andreessen Horowitz's startup metrics guide notes that there are "all kinds of churn", including customer churn, dollar churn and net dollar churn, and that definitions vary between companies. Any churn figure should state its kind and period.

| Term | What it counts | Includes downgrades? | Includes expansion? |
| --- | --- | --- | --- |
| Logo churn | Customers lost | No | No |
| Gross revenue churn | Recurring revenue lost | Yes | No |
| Net revenue churn | Revenue lost minus expansion | Yes | Yes |
| Voluntary churn | Customers who chose to cancel | Not applicable | No |
| Involuntary churn | Customers lost to failed payments | Not applicable | No |

## The formulas

**Logo churn rate** = customers lost during the period ÷ customers at the start of the period.

Recurly uses this structure for subscriber churn, and Andreessen Horowitz's monthly version is "lost customers/prior month total".

**Gross revenue churn rate** = recurring revenue lost to cancellations and downgrades during the period ÷ recurring revenue at the start of the period.

Andreessen Horowitz states the monthly form using monthly recurring revenue (MRR). Gross revenue retention (GRR) is 100% minus this figure. SaaS Capital's GRR method caps each continuing customer's later revenue at its earlier level, so upsells and price rises cannot offset losses.

**Net revenue churn rate** = (revenue lost minus expansion revenue) ÷ revenue at the start. It can be negative, which is the same as net revenue retention above 100%. Our explainer on [net revenue retention](https://lowob.com/research/what-is-net-revenue-retention/) covers that measure, and [NRR vs GRR](https://lowob.com/research/nrr-vs-grr/) covers which to report.

## A worked example (illustrative)

An illustrative firm starts the year with 200 customers paying £2,000,000 in annual recurring revenue.

| Movement over 12 months | Customers | Annual recurring revenue |
| --- | --- | --- |
| Start of year | 200 | £2,000,000 |
| Customers who left | 16 | £80,000 lost |
| Downgrades among those who stayed |  | £40,000 lost |
| Expansion among those who stayed |  | £180,000 gained |
| End of year, same customers | 184 | £2,060,000 |

- **Logo churn:** 16 ÷ 200 = 8%.
- **Gross revenue churn:** (£80,000 + £40,000) ÷ £2,000,000 = 6%, so GRR is 94%.
- **Net revenue churn:** (£120,000 minus £180,000) ÷ £2,000,000 = minus 3%, so NRR is 103%.

Logo churn is higher than revenue churn here, so the firm is losing mainly smaller customers. The reverse pattern, low logo churn and high revenue churn, means a few large accounts are leaving or shrinking, which is usually the more serious problem.

## Why it matters for a commercial team

Every pound lost has to be replaced before new business adds growth. Net figures blend upsell with loss, which is why Andreessen Horowitz says "gross churn estimates the actual loss to the business". A firm with healthy expansion can report net retention above 100% while losing many customers. Three measurement errors recur.

**Annualising monthly churn by multiplying.** Recurly notes that "annual churn is not simply 12x monthly churn because of compounding"; 2% a month is about 22% a year, not 24%.

**Counting failed payments as decisions.** Involuntary churn, from failed payments, needs a billing fix. Mixing it with voluntary churn hides both.

**Comparing across segments.** SaaS Capital reports that net retention rises with contract value, so compare with firms of similar contract size.

Firms without subscriptions, such as agencies, can apply the same logic to repeat clients and their fees.

In **lowob**'s model, churn is an outcome to write back. Each lost or shrunk account should carry the customer's stated reason and the account owner's, recorded against the renewal decision that preceded it. [Renewals and Expansion](https://lowob.com/research/renewals-and-expansion/) sets out the renewal calendar that produces those records. Over time they show which warning signs, from a [customer health score](https://lowob.com/research/what-is-customer-health-scoring/) or elsewhere, preceded real losses.

## lowob takeaways

- **Report logo and revenue churn together.** The gap shows whether small or large accounts are leaving.
- **Use gross, not only net.** Expansion can hide losses that gross churn shows plainly.
- **Separate involuntary churn.** Failed payments need a billing fix, not a retention campaign.
- **Record the reason.** A loss without the customer's reason cannot inform the next renewal.

## Common questions

### How do you calculate customer churn rate?

Divide customers lost during a period by customers at its start, excluding customers won during the period.

### What is the difference between logo churn and revenue churn?

Logo churn counts customers lost. Revenue churn counts recurring revenue lost to cancellations and downgrades, so large losses weigh more.

### What is the difference between gross and net revenue churn?

Gross revenue churn counts only losses. Net revenue churn subtracts expansion revenue from those losses, so it can be negative when expansion exceeds losses.

### Can you convert monthly churn to annual churn by multiplying by 12?

No. Churn compounds: annual churn is one minus monthly retention to the twelfth power, so 2% monthly is about 22% annual.

## Sources and notes

- [Andreessen Horowitz, 16 Startup Metrics](https://a16z.com/16-startup-metrics/?Ref=adhawk), Jeff Jordan, Anu Hariharan, Frank Chen and Preethi Kasireddy, 21 August 2015. Investor guide; formulas are monthly and written for startups.
- [Recurly, Churn rate benchmarks](https://www.recurly.com/research/churn-rate-benchmarks), data as of July 2026. Billing vendor research on its own network; used here for definitions only, as its industry figures are inconsistent across the page.
- [SaaS Capital, SaaS Retention Benchmarks for Private B2B Companies](https://www.saas-capital.com/research/saas-retention-benchmarks-for-private-b2b-companies/), 18 September 2025. Annual survey of private SaaS firms; self-reported, sample size not stated on the page.

## Related research

- [What Is Net Revenue Retention (NRR)?](https://lowob.com/research/what-is-net-revenue-retention/)
- [NRR vs GRR: Which Retention Number to Report](https://lowob.com/research/nrr-vs-grr/)
- [Renewals and Expansion](https://lowob.com/research/renewals-and-expansion/)
- [What Is Customer Health Scoring?](https://lowob.com/research/what-is-customer-health-scoring/)

## Next move

Pull last year's starting customer list from billing and count who has left. Calculate logo churn and gross revenue churn side by side, then list the five largest losses with the customer's own reason.

[Start a conversation](https://lowob.com/contact/)
