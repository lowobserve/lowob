# LTV:CAC vs CAC Payback: Which Unit Economics Metric to Trust

Source: https://lowob.com/research/ltv-cac-vs-cac-payback/
Publisher: lowob (https://lowob.com)
Published: 2026-11-05 · Updated: 2026-11-17
Function: Revenue

> Summary: LTV:CAC divides an estimate of a customer's lifetime gross profit by the cost of acquiring them. CAC payback counts the months of gross profit needed to recover that cost. LTV:CAC depends heavily on a churn assumption that young firms cannot yet observe, so payback is usually the safer metric for budget decisions, with LTV:CAC used once retention history exists.

LTV:CAC is the ratio of a customer's estimated lifetime value, usually lifetime gross profit, to the cost of acquiring that customer. CAC payback is the number of months of gross profit it takes to recover the acquisition cost. Both start from the same inputs. The difference is that LTV:CAC needs a forecast of how long customers stay, while payback does not. For most firms of 20 to 500 people, payback is the number to trust for budget decisions, and LTV:CAC is a check once several years of retention data exist.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What the two terms mean

Both metrics start with customer acquisition cost (CAC): sales and marketing spend in a period divided by new customers won. Our explainer on [CAC payback](https://lowob.com/research/what-is-cac-payback/) covers what belongs in CAC and how to keep it honest.

The formulas, using monthly figures:

- **Monthly gross profit per customer** = monthly revenue per customer × gross margin
- **CAC payback (months)** = CAC ÷ monthly gross profit per customer
- **Simple LTV** = monthly gross profit per customer ÷ monthly churn rate
- **LTV:CAC** = LTV ÷ CAC

Dividing by the churn rate assumes an average customer lifetime of one divided by churn. Skok notes this simple formula only holds where customers pay roughly the same amount and no expansion is expected. Andreessen Horowitz goes further: lifetime value should be net profit, not revenue or gross margin, and a revenue-based LTV "suggests a higher upper limit" on acquisition spend than the business can afford.

| Dimension | LTV:CAC | CAC payback |
| --- | --- | --- |
| Unit | Ratio, such as 3x | Months |
| Question | Is a customer worth more than they cost? | How long is cash at risk? |
| Needs a churn forecast | Yes, and it dominates the result | No |
| Captures expansion | Only with a more complex formula | No |
| Captures churn after payback | Yes | No |
| Common guideline | 3x or more | Under 12 months for SMB; longer for enterprise |
| Main weakness | False precision from assumed lifetimes | Ignores everything after the payback month |

## A worked example

An illustrative firm with these inputs:

| Input | Value |
| --- | --- |
| CAC | £15,000 |
| Monthly revenue per new customer | £1,500 |
| Gross margin | 75% |
| Monthly gross profit per customer | £1,125 |
| Monthly churn | 1.5% |

**CAC payback** = 15,000 ÷ 1,125 = 13.3 months.

**Simple LTV** = 1,125 ÷ 0.015 = £75,000, implying an average lifetime of about 67 months.

**LTV:CAC** = 75,000 ÷ 15,000 = 5.0x.

Now change only the churn assumption:

| Monthly churn | Implied lifetime | LTV | LTV:CAC | CAC payback |
| --- | --- | --- | --- | --- |
| 1.0% | 100 months | £112,500 | 7.5x | 13.3 months |
| 1.5% | about 67 months | £75,000 | 5.0x | 13.3 months |
| 3.0% | about 33 months | £37,500 | 2.5x | 13.3 months |

The ratio moves from comfortably above Bessemer's 3x threshold to below it on a two-point change in a number that a young firm has rarely measured for long. Payback does not move.

Payback has its own blind spot. The 13.3 months assumes each customer stays until repaid. Across a cohort losing 1.5% a month, cumulative gross profit per starting customer passes £15,000 only in month 15. That is closer to what the cash flow will show.

Andreessen Horowitz suggests a conservative alternative for firms with limited history: measure 12-month and 24-month LTV from observed data instead of projecting a lifetime. On the same cohort, 24-month gross profit per starting customer is about £22,800, or roughly 1.5x CAC. That is less flattering than 5.0x and much harder to dispute.

## Which to trust

Jason Cohen, writing on his blog A Smart Bear in 2013, argued that LTV "overcomplicates and misleads" because its inputs can shift by large amounts within a year, and recommended payback alongside its separate inputs. Bessemer reaches a similar place more gently, using payback as its primary efficiency metric and LTV:CAC as a guideline.

| Situation | Metric to lead with |
| --- | --- |
| Setting next quarter's channel budget | CAC payback, by channel and segment |
| Cash is tight or funding is uncertain | CAC payback, with a cohort view that counts churn |
| Fewer than about two years of retention data | Payback, plus observed 12- and 24-month LTV |
| Comparing segments with several years of history | LTV:CAC, with churn measured per segment |
| NRR well above 100% | Payback; the simple LTV formula breaks when customers expand |
| Advisory or project firms with one-off clients | Payback within the engagement; LTV only if clients repeat |

Whichever you report, state the assumptions beside the number: what CAC includes, which margin, which churn rate and over what period. A ratio without its churn assumption is not comparable across firms or even across quarters.

## The **lowob** view

In the brain loop of store, wiring, record, reasoning and learning, both metrics are forecasts used to make funding decisions. The decision to fund a channel, hire sellers or enter a segment rests on an assumed payback and an assumed churn rate. Those assumptions are the expected outcome, and they belong in the record with the owner and the date.

The learning step closes the loop. Two or three quarters later, write back the payback and churn actually observed for that cohort. Our explainer on [outcome write-back](https://lowob.com/research/what-is-outcome-write-back/) covers how. Over time the firm builds its own evidence on which channels repay and how long customers stay, which is more useful than any published benchmark.

## lowob takeaways

- **Same inputs, different exposure.** LTV:CAC depends on a churn forecast; payback does not.
- **Small churn changes swing the ratio.** In the example, moving from 1% to 3% monthly churn moves LTV:CAC from 7.5x to 2.5x.
- **Use payback for budgets.** It is harder to flatter and closer to cash.
- **Record the assumptions.** Funding decisions should carry the payback and churn expected, then the result.

## Common questions

### What is the difference between LTV:CAC and CAC payback?

LTV:CAC compares estimated lifetime gross profit from a customer with what it cost to win them. CAC payback counts how many months of gross profit it takes to recover that cost.

### What is a good LTV to CAC ratio?

A common guideline is 3x or more, used by Bessemer and by David Skok. It is only meaningful if the churn rate behind the LTV has been measured, not assumed.

### Is CAC payback better than LTV:CAC?

For budget decisions, usually. Payback does not depend on forecasting customer lifetime, so it is harder to inflate. LTV:CAC is useful once several years of retention data exist.

### How do you calculate LTV for SaaS?

The simple version is monthly revenue per customer multiplied by gross margin, divided by monthly churn. It assumes no expansion, so firms with high expansion need a cohort-based method.

## Sources and notes

- [Bessemer Venture Partners, Scaling to $100 Million](https://www.bvp.com/assets/uploads/2021/09/scaling-to-100-million-by-mary-d-onofrio.pdf), 2021. Investor research; benchmarks reflect a high-growth cloud sample.
- [Andreessen Horowitz, 16 Startup Metrics](https://a16z.com/16-startup-metrics/), accessed November 2026. Investor guidance on LTV and CAC definitions.
- [David Skok, For Entrepreneurs, SaaS Metrics 2.0: Detailed Definitions](https://forentrepreneurs.com/saas-metrics-2-definitions-2/), July 2014, updated December 2020. Venture investor's guidelines; the author notes the payback rule dates from 2011.
- [Jason Cohen, A Smart Bear, Why I don't like the LTV metric (LifeTime Value)](https://longform.asmartbear.com/ltv/), October 2013, updated 2025. Personal blog essay; opinion, not research.
- The worked example is illustrative. The choice table and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is CAC Payback?](https://lowob.com/research/what-is-cac-payback/)
- [NRR vs GRR: Which Retention Number to Report](https://lowob.com/research/nrr-vs-grr/)
- [Demand Generation Economics](https://lowob.com/research/demand-generation-economics/)
- [Commercial KPIs a Board Will Trust](https://lowob.com/research/commercial-kpis-a-board-will-trust/)
- [From Hype to Revenue: Web3's Next Competitive Advantage Is Operating Discipline](https://lowob.com/research/from-hype-to-revenue/)

## Next move

Recalculate your LTV:CAC at your measured churn rate and at double that rate, and put both beside CAC payback in the next board pack. If the ratio falls below 3x at double churn, lead with payback.

[Start a conversation](https://lowob.com/contact/)
