# What Is Sales Forecasting, and Why Is It Usually Wrong?

Source: https://lowob.com/research/what-is-sales-forecasting/
Publisher: lowob (https://lowob.com)
Published: 2026-07-03 · Updated: 2026-11-17
Function: Revenue

> Summary: A sales forecast predicts what will close in a period, usually by combining pipeline data with seller and manager judgment. Gartner found fewer than half of sales leaders and sellers have high confidence in their forecast. This explainer covers the main forecasting methods, the structural reasons forecasts miss, and how a mid-size firm can measure and reduce its error.

Sales forecasting is the practice of estimating how much revenue a team will close in a given period, usually a month or quarter. Most forecasts combine pipeline data with the judgment of sellers and managers. They are usually wrong for structural reasons: stage probabilities are guesses, close dates slip, data is incomplete, and nobody measures past error, so the same bias repeats.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What sales forecasting means

A sales forecast answers one question: how much will we close in this period? Finance uses it for cash and hiring plans. Leadership uses it to decide whether to act before the quarter ends. Boards and investors use it to judge whether management understands the business.

Forecasts are built bottom-up, from individual deals, or top-down, from historical patterns. Most mid-size firms use a bottom-up call: each seller places deals into categories, managers adjust, and the totals roll up. Salesforce's standard categories show the typical structure: Pipeline, Best Case, an optional Most Likely, Commit and Closed. Each opportunity stage maps to a category by default, and managers can record a judgment on a deal or adjust the total without changing the deal record itself.

| Method | How it works | Main weakness |
| --- | --- | --- |
| Seller and manager call | Sellers commit deals, managers adjust | Optimism, sandbagging, recency bias |
| Stage-weighted pipeline | Deal value multiplied by stage probability | Probabilities are rarely calibrated |
| Historical run-rate | Prior periods projected forward | Misses changes in market or team |
| Driver-based | Pipeline coverage, conversion and cycle time | Needs clean stage and date history |
| Statistical or machine learning | Model trained on past deal outcomes | Needs volume; can hide its reasoning |

## Why forecasts are usually wrong

### The probabilities are invented

A stage-weighted forecast assumes that a deal in "proposal" closes, say, 50% of the time. In many firms that number was set when the CRM was configured and never checked. If proposal-stage deals actually close at 30%, every forecast overstates by the same margin. Written stage definitions with verifiable exit criteria are the precondition for meaningful probabilities.

### The data is incomplete

Gartner's research found fewer than half of respondents believed their data was high quality, and 13% said it was poor. Missing close dates, stale amounts and deals nobody has touched for 60 days all flow into the total. Gartner's recommendations are practical: build CRM compliance into the culture, define data quality standards based on what the CRM is for, and make data quality a regular topic in manager and seller conversations.

### The incentives distort the call

Sellers who are measured on hitting their commit have reasons to understate it. Sellers worried about headcount reviews have reasons to overstate pipeline. Neither is dishonest in intent, but both bias the number. A manager adjustment corrects for the bias only if the manager knows which way each seller leans.

### Nobody measures the error

The most common failure is the absence of feedback. Teams produce a forecast every week, but few store each call and compare it with the outcome. Without that record, a team cannot tell whether it is consistently 15% high or randomly wrong, and the two need different fixes. Gartner found that analytics led by the chief sales officer were 2.3 times more likely to achieve higher forecast accuracy than analytics led elsewhere, which suggests ownership matters as much as tooling.

## How to make a forecast more honest

1. **Freeze the call.** Record the forecast at fixed points, for example week 2, week 6 and week 10 of the quarter, by category and by seller.
2. **Measure the error.** At quarter end, compare each frozen call with the result. Note whether the miss was high or low, and by how much.
3. **Calibrate stage probabilities.** Replace configured percentages with actual historical conversion by stage, refreshed each quarter.
4. **Separate commit from upside.** A deal in Commit should meet written criteria, such as a confirmed decision date and a named signer, not just a seller's confidence.
5. **Track bias by person.** After two or three quarters, each seller and manager has a measurable tendency. Adjust for it openly.

In **lowob**'s terms, a forecast is a decision with an expected outcome. Recording it, then writing the actual result back against it, is the learning loop. Calibration, not a better model, is usually the first gain.

## lowob takeaways

- **Store every forecast.** A call that is not recorded cannot be checked.
- **Check the stage probabilities.** Configured percentages are assumptions until compared with history.
- **Write criteria for Commit.** Confidence is not evidence of a close.
- **Measure bias, then correct it.** Consistent error is fixable; unmeasured error is not.

## Common questions

### What is sales forecasting?

It is the practice of estimating how much revenue a sales team will close in a set period, usually by combining pipeline data with seller and manager judgment.

### Why are sales forecasts inaccurate?

Common causes are uncalibrated stage probabilities, incomplete CRM data, close dates that slip, seller incentives that bias the call, and no record of past forecast error.

### What are the main sales forecasting methods?

Seller and manager roll-ups, stage-weighted pipeline, historical run-rate, driver-based models and statistical or machine learning models trained on past deals.

### How do you measure forecast accuracy?

Record the forecast at fixed points in the period, compare each with the actual result, and track both the size and the direction of the error over several periods.

## Sources and notes

- [Gartner, Gartner Says Less Than 50% of Sales Leaders and Sellers Have High Confidence in Their Organization's Forecasting Accuracy](https://www.gartner.com/en/newsroom/press-releases/2020-02-12-gartner-says-less-than-50--of-sales-leaders-and-selle), February 2020. Analyst press release from the State of Sales Operations Survey; sample size not stated.
- [Mi3, Sales analytics disappoints business leaders, Gartner survey reveals](https://mi-3.com.au/07-02-2024/sales-analytics-disappoints-business-leaders-gartner-survey-reveals), 2024. Trade press summary of a Gartner survey of 303 sales leaders.
- [Salesforce Trailhead, Configure Sales Forecasting in Salesforce](https://trailhead.salesforce.com/content/learn/modules/sales-forecasting/configure-sales-forecasting-in-salesforce). Vendor training documentation on forecast categories, types and adjustments.

## Related research

- [What Are Pipeline Stage Definitions?](https://lowob.com/research/what-are-pipeline-stage-definitions/)
- [Calibration Is the Honest Learning Signal](https://lowob.com/research/calibration-is-the-honest-learning-signal/)
- [What Is CRM Data Hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)
- [What Is Revenue Operations (RevOps)?](https://lowob.com/research/what-is-revenue-operations/)

## Next move

Find last quarter's forecast as it stood in week 6 and put it next to the actual result. If nobody saved it, start saving this quarter's call at fixed dates from Monday.

[Start a conversation](https://lowob.com/contact/)
