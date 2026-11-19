# What Is Pipeline Coverage?

Source: https://lowob.com/research/what-is-pipeline-coverage/
Publisher: lowob (https://lowob.com)
Published: 2026-08-03 · Updated: 2026-11-17
Function: Revenue

> Summary: Pipeline coverage compares the value of open opportunities with the revenue still to be won in a period. The familiar 3x rule only holds at a one-in-three win rate, so firms that copy it often plan with too little or too much pipeline. This explainer sets out the formula, how to derive your own ratio from win rate and cycle length, and how to stop coverage being inflated by deals that will never close.

Pipeline coverage is the value of open opportunities expected to close in a period, divided by the revenue target still to be met in that period. A ratio of 3x means there is three times as much pipeline as target. The right ratio is not a constant: it is roughly the inverse of your win rate by value, adjusted for how much of the pipeline can close in time. Coverage is only as reliable as the stage definitions and close dates behind it.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What pipeline coverage means

The basic formula is simple:

**Pipeline coverage = open pipeline value for the period ÷ remaining target for the period**

HubSpot's example is $500,000 of pipeline against a $100,000 quarterly target, a 5x ratio. The numerator should include only opportunities with a close date inside the period and a stage beyond initial qualification. The denominator should be the target still to win, not the full quota, once part of the quarter has closed.

This explainer is about the ratio and how to set it. The rules that decide what counts as a real opportunity in each stage are covered separately in [What Are Pipeline Stage Definitions?](https://lowob.com/research/what-are-pipeline-stage-definitions/). The two depend on each other: coverage built on loose stages measures optimism.

## Why 3x is a rule of thumb, not a target

The 3x convention comes from an implicit one-in-three win rate. Jordan's article for Salesforce makes the point directly: the ratio holds only at a 33% win rate and a one-year cycle. A seller who wins 10% of pipeline value needs about ten times their target; one who wins 50% needs about twice. Short cycles change the picture too, because pipeline created during the period can still close within it.

| Win rate by value | Coverage needed (no new pipeline closing in period) |
| --- | --- |
| 50% | 2.0x |
| 33% | 3.0x |
| 25% | 4.0x |
| 20% | 5.0x |
| 10% | 10.0x |

Win rates are not stable. Ebsta and Pavilion's analysis of 4.2 million opportunities across 530 companies found win rates in 2023 down 18% on 2022 and 27% on 2021. A team that set its coverage target in 2021 and kept it would have been under-covered without knowing it. The same data showed 73% of reps missed quota in the second half of 2023.

There is also a ceiling. HubSpot's warning about ratios above 8x reflects a common pattern: the more pipeline sits in the CRM, the less of it has been tested. Very high coverage usually means old opportunities with rolling close dates.

## How to set and use your own ratio

A defensible coverage target takes an afternoon with CRM data:

1. **Calculate win rate by value.** Use opportunities that reached your first qualified stage in the last four quarters. Divide closed-won value by the total value that reached a decision, including closed-lost and no-decision.
2. **Split by segment.** New business and expansion usually win at very different rates. So do enterprise and mid-market. One company-wide ratio hides both.
3. **Invert it.** Required coverage is roughly one divided by win rate. Add a margin if close dates regularly slip out of the quarter.
4. **Measure at fixed points.** Record coverage on day one of the quarter and again at week six. Coverage that drops sharply mid-quarter shows deals with false close dates.
5. **Clean before counting.** Exclude opportunities with no activity in 30 days, no next step, or a close date already moved twice.

Gartner's finding that fewer than half of sales leaders trust their forecast points to the same root cause. Its 2020 survey also found only 47% of respondents believed their organisation had high-quality data. Coverage inherits that quality.

For **lowob**, coverage is a reading of the record, not a target to hit. When an agent or assistant summarises pipeline health, it reads the same stages and close dates a person would. If those fields are stale, the agent reports false coverage with confidence. The fix is in the record, not the model.

## lowob takeaways

- **Derive the ratio.** Required coverage is roughly the inverse of your own win rate by value.
- **Segment it.** New business, expansion and deal size each need their own figure.
- **Distrust high coverage.** Above about 8x, the pipeline usually needs cleaning, not celebrating.
- **Fix the inputs first.** Stage definitions and close dates decide whether coverage means anything.

## Common questions

### How do you calculate pipeline coverage?

Divide the value of open opportunities with a close date in the period by the revenue target still to be met in that period.

### What is a good pipeline coverage ratio?

It depends on win rate. At a 33% win rate, 3x is about right. At 20%, you need about 5x. Calculate yours from the last four quarters.

### Why is 3x pipeline coverage the standard?

It assumes a one-in-three win rate. Teams with lower win rates or longer cycles need more coverage, and teams with higher win rates need less.

### What is the difference between pipeline coverage and sales velocity?

Coverage is a snapshot of how much pipeline exists against target. Sales velocity measures how fast pipeline turns into revenue, combining volume, deal size, win rate and cycle length.

## Sources and notes

- [HubSpot, Sales Pipeline Coverage](https://www.hubspot.com/glossary/sales-pipeline-coverage), undated. Vendor glossary; source of the formula, common ratios and the 8:1 warning.
- [Salesforce, Pipeline Coverage](https://www.salesforce.com/blog/pipeline-coverage/), undated, by Jason Jordan. Vendor-hosted article; source of the win-rate logic behind 3x.
- [Ebsta and Pavilion, 2024 B2B Sales Benchmarks](https://www.ebsta.com/ebsta-pavilion-b2b-sales-benchmarks-2024/), 2024. Vendor dataset of 4.2 million opportunities across 530 companies.
- [Gartner, Less Than 50% of Sales Leaders Have High Confidence in Forecasting Accuracy](https://www.gartner.com/en/newsroom/press-releases/2020-02-12-gartner-says-less-than-50--of-sales-leaders-and-selle), February 2020. Survey; sample size not stated in the release.

## Related research

- [What Are Pipeline Stage Definitions?](https://lowob.com/research/what-are-pipeline-stage-definitions/)
- [What Is Sales Velocity?](https://lowob.com/research/what-is-sales-velocity/)
- [What Is CRM Data Hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [Qualification Frameworks Compared](https://lowob.com/research/qualification-frameworks-compared/)

## Next move

Calculate your win rate by value for the last four quarters, split into new business and expansion. Invert each figure, and compare the result with the coverage ratio your team currently aims for.

[Start a conversation](https://lowob.com/contact/)
