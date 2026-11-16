# NRR vs GRR: Which Retention Number to Report

Source: https://lowob.com/research/nrr-vs-grr/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Revenue

> Summary: Net revenue retention (NRR) is what a group of existing customers pays you now, divided by what the same customers paid a year ago, including expansion. Gross revenue retention (GRR) uses the same cohort but excludes expansion, so it shows only what you kept after churn and downgrades, and it cannot exceed 100%. NRR tells you whether the base grows on its own; GRR tells you how much of it leaks. Report both, because the same NRR can hide very different levels of churn.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## Key points

- SaaS Capital defines GRR with the same formula as NRR but excluding upsells, cross-sells and price increases, so it cannot exceed 100%.
- NRR minus GRR equals expansion as a share of starting revenue. A wide gap means growth depends on a few accounts buying more.
- The 2024 KeyBanc Capital Markets and Sapphire Ventures survey of more than 100 private SaaS companies put net retention at about 101% and gross retention at about 90%.
- Bessemer's 2021 analysis found gross retention relatively consistent at 85% to 90% across revenue ranges, with successful SMB-focused businesses at 70% to 80%.
- Andreessen Horowitz notes that gross churn estimates the actual loss to the business, while net revenue churn understates it.

## What the two terms mean

Both are cohort measures. You fix the customers who were paying at the start date, usually 12 months ago, and follow only their recurring revenue. Revenue from customers won during the year is excluded from both. Our explainer on [net revenue retention](https://lowob.com/research/what-is-net-revenue-retention/) covers NRR's definition and common errors; here the question is how the two numbers relate.

The formulas:

- **NRR** = (starting revenue + expansion - contraction - churn) ÷ starting revenue
- **GRR** = (starting revenue - contraction - churn) ÷ starting revenue
- **Expansion rate** = expansion ÷ starting revenue = NRR - GRR

Expansion covers upsells, cross-sells and price increases. Contraction covers downgrades and lost seats. Churn covers customers who left. SaaS Capital adds that churn is one minus gross retention.

| Dimension | NRR | GRR |
| --- | --- | --- |
| Includes expansion | Yes | No |
| Range | 0% to well above 100% | 0% to 100% |
| Main question | Does the base grow without new customers? | How much of the base do we keep? |
| Moved most by | Upsell, cross-sell, pricing | Product fit, service, onboarding |
| Natural owner | Account management and pricing | Customer success and delivery |
| Weakness | A few large expansions can mask broad losses | Says nothing about growth potential |

## A worked example

Two illustrative firms, each starting the year with £2,000,000 of recurring revenue from existing customers:

| Movement over 12 months | Firm A | Firm B |
| --- | --- | --- |
| Starting revenue | £2,000,000 | £2,000,000 |
| Expansion | +£500,000 | +£200,000 |
| Contraction | -£100,000 | -£40,000 |
| Churn | -£300,000 | -£60,000 |
| Ending revenue from the same customers | £2,100,000 | £2,100,000 |
| **NRR** | **105%** | **105%** |
| **GRR** | **80%** | **95%** |
| Expansion rate (NRR - GRR) | 25 points | 10 points |

Firm A: (2,000,000 + 500,000 - 100,000 - 300,000) ÷ 2,000,000 = 2,100,000 ÷ 2,000,000 = 105%. GRR is (2,000,000 - 400,000) ÷ 2,000,000 = 80%.

Firm B: (2,000,000 + 200,000 - 40,000 - 60,000) ÷ 2,000,000 = 105%. GRR is (2,000,000 - 100,000) ÷ 2,000,000 = 95%.

The headline NRR is identical. Firm A loses a fifth of its starting revenue each year and buys it back through expansion. If expansion slows, its NRR falls quickly. Firm B keeps 95% and grows modestly on top. An acquirer, a lender or a board would value these businesses differently, and only GRR shows why.

## What the benchmarks say

Benchmarks depend on sample, contract size and definitions, so compare like with like.

- **Private SaaS overall.** The KeyBanc and Sapphire survey, published October 2024, reported net retention of about 101% and gross retention of about 90%, which it described as relatively consistent.
- **By contract size.** SaaS Capital's 2025 survey found median NRR of 102% for companies with annual contracts of $25,000 to $50,000, with a top quartile of 111% and a bottom quartile of 97%. It reports that higher NRR correlates with higher contract values, and that companies with the very highest contract values have the highest GRR.
- **Growth link.** In the same survey, companies with NRR of 110% or more grew faster than the 24% median for firms above $1 million of ARR; those below 100% grew more slowly.
- **High-growth cloud.** Bessemer's 2021 report showed average NRR of 140% at $1 million to $10 million of ARR, falling to 120% at larger scale, with gross retention at 85% to 90%. Its sample skews to fast-growing companies.

## Which number to report

| Audience or purpose | Lead with | Show beside it |
| --- | --- | --- |
| Board pack | Both, side by side | Expansion rate and logo retention |
| Fundraising or debt diligence | Both, by cohort and segment | Top ten expansions and losses |
| Customer success targets | GRR | Contraction and churn reasons |
| Account management targets | NRR | Expansion by product and by price |
| Pricing decisions | NRR with price rises split out | GRR, to check rises did not drive churn |
| Firm with few, large clients | GRR by client | Concentration of revenue |

Three rules keep the numbers honest. Build the cohort from billing data, not CRM close dates. Split price increases out of expansion, because a one-off price rise may not repeat. Report the gap: if NRR minus GRR is more than about 15 points, list the accounts that produced the expansion and ask whether it will recur.

## The **lowob** view

In the brain loop of store, wiring, record, reasoning and learning, retention is a learning signal. It tells you whether earlier commercial decisions worked: which segments were chosen, how onboarding was run, which renewals were discounted, which upsells were pushed.

The numbers alone do not say which decisions mattered. Each renewal, contraction, loss and expansion should carry a reason and an owner in the record, written back when the outcome is known. Then GRR can be explained by cause, not just reported. Firm A's problem in the example above is invisible in NRR and obvious once losses carry reasons. Our playbook on [renewals and expansion](https://lowob.com/research/renewals-and-expansion/) sets out how to run that calendar.

## lowob takeaways

- **Same cohort, different question.** NRR measures growth from the base; GRR measures what leaks.
- **The gap is expansion.** NRR minus GRR shows how much growth depends on upsell and price.
- **Report both together.** Identical NRR figures can describe very different businesses.
- **Give every loss a reason.** GRR becomes useful when each movement is recorded with its cause.

## Common questions

### What is the difference between NRR and GRR?

NRR includes expansion such as upsells, cross-sells and price rises, so it can exceed 100%. GRR excludes expansion and counts only revenue kept after churn and downgrades, so it cannot exceed 100%.

### How do you calculate gross revenue retention?

Take starting recurring revenue from a customer cohort, subtract revenue lost to churn and downgrades over the period, and divide by the starting revenue. Ignore expansion and new customers.

### What is a good GRR?

The 2024 KeyBanc and Sapphire survey put private SaaS gross retention at about 90%. Bessemer found 85% to 90% typical, with successful SMB-focused firms at 70% to 80%.

### Should a company report NRR or GRR to its board?

Both. NRR shows whether the base grows; GRR shows how much is lost. The gap between them shows how much growth depends on expansion.

## Sources and notes

- [SaaS Capital, SaaS Retention Benchmarks for Private B2B Companies](https://www.saas-capital.com/research/saas-retention-benchmarks-for-private-b2b-companies/), 18 September 2025. Lender's annual survey; total sample size not stated on the page.
- [Sapphire Ventures, KeyBanc Capital Markets and Sapphire Ventures Private SaaS Company Survey](https://sapphireventures.com/press/keybanc-capital-markets-and-sapphire-ventures-private-saas-company-survey-reveals-a-continued-focus-on-operational-efficiency-and-profitability/), October 2024. Investor press release on a survey of 100+ private SaaS companies.
- [Bessemer Venture Partners, Scaling to $100 Million](https://www.bvp.com/assets/uploads/2021/09/scaling-to-100-million-by-mary-d-onofrio.pdf), 2021. Investor research; sample skews to high-growth cloud companies.
- [Andreessen Horowitz, 16 Startup Metrics](https://a16z.com/16-startup-metrics/), accessed November 2026. Investor guidance; defines churn on a monthly basis.
- The worked example is illustrative. The reporting table and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is Net Revenue Retention (NRR)?](https://lowob.com/research/what-is-net-revenue-retention/)
- [What Is Customer Churn?](https://lowob.com/research/what-is-customer-churn/)
- [Commercial KPIs a Board Will Trust](https://lowob.com/research/commercial-kpis-a-board-will-trust/)
- [Renewals and Expansion](https://lowob.com/research/renewals-and-expansion/)

## Next Move

Calculate last year's NRR and GRR from billing data for the same cohort, then subtract one from the other. If the gap is wider than 15 points, list the ten accounts that produced most of the expansion and note whether each will repeat.

[Start a conversation](https://lowob.com/contact/)
