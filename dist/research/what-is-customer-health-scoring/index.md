# What Is Customer Health Scoring?

Source: https://lowob.com/research/what-is-customer-health-scoring/
Publisher: lowob (https://lowob.com)
Published: 2026-09-18 · Updated: 2026-11-16
Function: Revenue

> Summary: A customer health score summarises how likely an account is to renew or grow, using weighted measures such as product usage, support history and sentiment. Most scores are built from intuition and never checked against outcomes. This explainer covers how health scores are structured, what inputs to use, and how to test whether a score actually predicts churn.

Customer health scoring is the practice of combining several signals about an account, such as product usage, support activity, relationship strength and payment history, into a single score that indicates renewal risk or growth potential. It lets a small team decide which accounts need attention first. A score is only useful if it has been checked against what actually happened to past customers.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What customer health scoring means

A customer success or account team cannot give every customer the same attention. A health score is a triage tool: one number or colour per account, updated regularly, that tells the team where to look.

Scores are usually built as weighted composites. Gainsight's documentation shows the common structure. Individual measures, such as login frequency or open support tickets, each produce a score. Measures sit in groups, such as "adoption" or "relationship". Each measure is weighted within its group, each group is weighted in the overall score, and neither set of weights can exceed 100%. When a measure has no data, its weight is redistributed across the others in proportion.

| Input category | Example measures | Caveat |
| --- | --- | --- |
| Usage or adoption | Active users, feature breadth, consumption against contract | High usage can coexist with an unhappy buyer |
| Support | Ticket volume, severity, time to resolve | Some tickets signal engagement, not risk |
| Relationship | Executive sponsor in place, meeting cadence, champion changes | Often subjective; needs a written definition |
| Sentiment | Survey scores, CSM assessment | Low response rates; recency bias |
| Commercial | Payment status, contraction, open expansion | Lags behind the underlying cause |

## Why it matters for a commercial team

### Retention compounds

The economic case predates the software. Reichheld, writing for Bain in 2001, argued that small increases in retention translate into large profit gains, and gave the example that in financial services a 5% increase in customer retention produced more than a 25% increase in profit. The figure is sector-specific and two decades old, so treat it as an illustration of the mechanism rather than a benchmark for your business.

### Renewals are decided early

By the time a customer sends notice, the decision has usually been made. A health score exists to surface the earlier signals: a champion leaving, usage falling after a reorganisation, a run of severe tickets. The value is the lead time it gives a person to act.

### It focuses scarce time

Gartner's guidance on key accounts makes the same point from the growth side: monitor account health continuously and re-tier accounts based on performance, so resources are not spent on underperformers. A health score is how that monitoring becomes routine rather than anecdotal.

## How to build and test a first score

### Start small

Gainsight's guidance, from a 2019 post by Ryan Toben, is to include only measures that are meaningful, actionable and consistently applicable, to start without waiting for perfect data, and to keep the number of variables small. Five to seven measures across three or four groups is enough for a first version.

### Use what you have

Usage data is helpful but not essential. One example Gainsight describes is an on-premise business with no usage data that combined a CSM score and a partner score with finance metrics, support cases, product requests and software version. Another used credit drawdown as a stand-in for usage.

### Back-test before trusting it

This is the step most teams skip.

1. **List last year's outcomes.** Every account that churned, contracted, renewed flat or expanded.
2. **Reconstruct the score.** Calculate what your proposed score would have shown for each account 90 days before its renewal date.
3. **Compare.** If churned accounts were mostly red and expanded accounts mostly green, the score has signal. If the colours are mixed, change the measures or weights.
4. **Set thresholds from the data.** Choose the red and amber cut-offs where churn rates actually change, not at round numbers.
5. **Re-test each year.** Products, customers and teams change. A score that predicted churn two years ago may not now.

### Attach an action to each colour

A red score should trigger a defined play with an owner and a deadline. In **lowob**'s terms, each intervention is a decision in the record, with a reason and an expected outcome, and the renewal result is written back so next year's back-test has better evidence.

## lowob takeaways

- **Treat the score as triage.** Its job is to tell a person where to look first.
- **Keep it small.** A handful of clean, explainable measures beats a long list of noisy ones.
- **Back-test it.** A score that would not have flagged last year's churn will not flag next year's.
- **Tie colours to actions.** A red account without an owner and a play is just a report.

## Sources and notes

- [Bain & Company, Prescription for cutting costs](https://www.media.bain.com/Images/BB_Prescription_cutting_costs.pdf), Frederick Reichheld, 2001. Consultancy brief; retention figure is specific to financial services.
- [Gainsight, Measure Weights in Scorecards](https://support.gainsight.com/Gainsight_NXT/05Scorecards/02Admin_Guides/Measure_Weights_in_Scorecards). Vendor product documentation.
- [Gainsight, 3 Ways to Structure Your Customer Health Score (No Usage Data Required)](https://www.gainsight.com/blog/3-ways-to-structure-your-customer-health-score-no-usage-data-required/), March 2019. Vendor blog describing customer examples.
- [Gartner, Gartner Survey Shows 95% of Chief Sales Officers Expect Higher Growth From Key Accounts](https://www.gartner.com/en/newsroom/press-releases/gartner-survey-shows-95--of-chief-sales-officers-expect-higher-g), October 2021. Analyst press release; recommendation on monitoring account health.

## Related research

- [What Is Outcome Write-Back?](https://lowob.com/research/what-is-outcome-write-back/)
- [The Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [What Is Revenue Operations (RevOps)?](https://lowob.com/research/what-is-revenue-operations/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)

## Next move

List the accounts that churned or contracted in the last 12 months. For each, write down what your current health score said 90 days before, and count how many it flagged.

[Start a conversation](https://lowob.com/contact/)
