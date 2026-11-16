# Forecasting That Holds

Source: https://lowob.com/research/forecasting-that-holds/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Revenue

> Summary: A forecast holds when the firm can say, before the period ends, how far off its last ten forecasts were and why. Most cannot. Gartner found that only 45% of sales leaders and sellers had high confidence in their organisation's forecast accuracy, and a Forrester Consulting study found that 55% of revenue teams missed their quarterly forecast by more than 10% on average. The method is rarely the main problem. Stage probabilities are borrowed from software defaults, close dates slip without consequence and past calls are overwritten instead of scored. The fix is to record each forecast call with its basis, compare it with the outcome and use the error to correct the next call.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## Key points

- Gartner found 45% of sales leaders and sellers had high confidence in forecast accuracy, and only 47% believed their organisation had high-quality data.
- In a 2021 Forrester Consulting study for Clari, only 18% of revenue teams forecast quarterly revenue within 5% of actual, and more were off by 20% or more.
- A vendor dataset of 4.2 million opportunities found 44% of deals were pushed back at the peak, and slipped deals saw win rates fall 67%.
- Default CRM stage probabilities are placeholders; HubSpot's default pipeline, for example, assigns 20% to 90% by stage regardless of any firm's history.
- Three forecasts (stage-weighted, seller commit and manager call) recorded side by side, and scored each period, show where the bias sits.

Every revenue team forecasts. Few check their forecasts. The number is set in week one, adjusted in week six, explained in week thirteen and then replaced by next quarter's number. The error is felt, but it is not measured, so the same bias repeats.

The explainer on [sales forecasting](https://lowob.com/research/what-is-sales-forecasting/) covers what a forecast is and the main methods. This piece covers why forecasts miss in practice, which method fails in which way, and the record that turns a forecast from a negotiation into a measurement.

## How far off forecasts usually are

The best public evidence points the same way. Gartner's 2020 research on sales operations found that fewer than half of sales leaders and sellers, 45%, had high confidence in their organisation's forecast accuracy. Only 47% believed their organisation had high-quality data, and 13% said their data quality was poor. Gartner warned that low confidence pushes leaders towards decisions based on intuition rather than evidence, including approving discounts they would normally reject.

The size of the miss is larger than most boards assume. A 2021 Forrester Consulting study commissioned by Clari surveyed 327 US software-industry revenue operations decision-makers. Of the 303 who measured forecast accuracy, only 18% said their quarterly forecast was within 5% of actual revenue. 55% said they missed their quarterly forecast by more than 10% on average, and more firms were off by 20% or more than were within 5%. The study was vendor-commissioned and self-reported, so it may understate the problem among firms that do not measure at all.

Better tooling has not closed the gap on its own. A Gartner survey of 303 sales leaders, reported in 2024, found 84% said sales analytics had affected performance less than expected, with poor data quality cited by 44% as a top barrier. The same research found analytics led by the chief sales officer were 2.3 times more likely to achieve higher forecast accuracy, which suggests ownership matters as much as software.

## Why forecasts miss

Four causes account for most of the error, and none is solved by a better model.

Borrowed probabilities. Most CRMs ship with stage probabilities that are placeholders. HubSpot's default deal pipeline, for example, assigns 20% to "appointment scheduled", 40% to "qualified to buy", 60% to "presentation scheduled", 80% to "decision maker bought-in" and 90% to "contract sent". Those numbers describe no real firm. A firm that never replaces them with its own historical conversion rates is forecasting on someone else's history.

Slipping close dates. Ebsta and Pavilion's 2024 benchmark, a vendor dataset of 4.2 million opportunities across 530 companies, found that 44% of deals were pushed back at the peak, and that slipped deals saw win rates fall by 67%, with the steepest falls for deals delayed more than eight weeks. A close date that moves without a recorded reason is a forecast error in waiting.

Weak stage definitions. If "proposal" means a document has been sent in one team and a price agreed in another, the stage-weighted number mixes two different things. The explainer on [pipeline stage definitions](https://lowob.com/research/what-are-pipeline-stage-definitions/) covers how to write exit criteria that make stages comparable. Part 20 covered how qualification fields can feed them.

Overwritten calls. Most forecasting tools let managers adjust the number. Salesforce's forecasting documentation notes that an adjustment changes the forecast amount while leaving the underlying opportunity data unchanged. That is useful, but if the original call and the reason for the adjustment are not kept, nobody can later tell whether the adjustment improved the forecast or worsened it.

## Three numbers, side by side

The practical answer is not one better forecast. It is three, recorded together, so their differences can be seen and scored.

| Forecast | What it uses | Typical failure | When it is most reliable |
| --- | --- | --- | --- |
| Stage-weighted | Open pipeline value multiplied by the firm's own historical conversion rate per stage | Wrong when stage definitions drift or when probabilities are software defaults | Large volumes of similar deals with stable stages |
| Seller commit | Each seller's call on which deals will close this period | Optimism early in the quarter, sandbagging near quota thresholds | Few large deals where the seller knows the buyer well |
| Manager call | The manager's judgment across the team, adjusting for known seller bias | Reflects the manager's own pressure from above | When the manager has a scored record of past calls |

Salesforce's forecast categories (Pipeline, Best Case, Commit, Closed, with an optional Most Likely) are a common way to collect the seller view. The categories only help if their meaning is written down. "Commit" should mean something specific, such as the economic buyer has confirmed and the paper process has started, rather than "I feel good about it".

When the three numbers agree, the forecast is probably sound. When they diverge, the gap is information. A stage-weighted number well below the seller commit usually means deals are sitting in late stages that do not deserve them. A manager call well above both usually means pressure from the next level up.

> A forecast that is never scored cannot improve. It can only be explained.

## The forecast record

The step most firms skip is keeping the calls. Each week, or at least at fixed points in the period, the firm should record its forecast as a decision with a basis, an owner and a date, and keep it once the period closes. Earlier calls are superseded, never overwritten, which is the principle set out in [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/).

| Field | Example | Why it matters |
| --- | --- | --- |
| Date of call | Week 4 of the quarter | Lets error be measured by how far ahead the call was made |
| Forecast type | Manager call | Separates the three numbers |
| Amount | The figure called | The thing to be scored |
| Basis | Two large deals moved to Commit after procurement started | Shows what the call relied on |
| Owner | Regional sales manager | Makes calibration personal and fair |
| Adjustment and reason | Raised by 8% on a verbal from one buyer | Shows whether adjustments help |
| Outcome (written back) | Actual revenue at period end | Turns the call into evidence |

With a few periods of records, error can be scored simply. For each call, take the difference between forecast and actual as a share of actual. Track it by forecast type, by owner and by how many weeks ahead the call was made. Over time this shows which number to trust at which point in the quarter, and which sellers are consistently high or low. The piece on [calibration as the honest learning signal](https://lowob.com/research/calibration-is-the-honest-learning-signal/) makes the wider case.

Slips need their own field. A close date that moves should carry a reason code and a count of how many times it has moved. Given the Ebsta finding on slipped deals, a deal on its third slip should come out of the commit number automatically.

Data quality is the foundation under all of it. Gartner's recommendations were plain: set data standards that follow from why the firm has a CRM, inspect data quality in regular manager and seller conversations, and show sellers how good data helps them. The explainer on [CRM data hygiene](https://lowob.com/research/what-is-crm-data-hygiene/) covers the practical steps.

Illustrative example: scoring the manager call

Decision
:   Record all three forecasts each fortnight, keep them after the quarter closes, and report error by forecast type.

Reason and owner
:   The board had seen three quarters of misses above 10%, each explained differently. Agreed by the chief revenue officer; owned by revenue operations.

What changed
:   After two quarters, the stage-weighted number had the lowest error early in the quarter and the manager call had the lowest error in the last month. The firm now reports the stage-weighted number to the board until week eight, then the manager call, and will review the rule after two more quarters.

Illustrative: a composite of a mid-size B2B technology firm, built from patterns across engagements.

## lowob takeaways

- **Replace default probabilities.** Use the firm's own stage conversion history, or the stage-weighted number means nothing.
- **Keep three numbers.** Stage-weighted, seller commit and manager call, recorded side by side; their gaps are information.
- **Never overwrite a call.** Supersede it, keep the reason, and score every call against the outcome.
- **Treat slips as data.** A close date that moves needs a reason, and repeated slips should leave the commit.

Gateway card

### Before you present the next forecast to the board

- Stage probabilities replaced with the firm's own conversion history
- Written definitions for each forecast category, especially Commit
- Stage-weighted, seller and manager forecasts recorded together each week or fortnight
- Adjustments kept with their reasons, not overwritten
- Close-date changes logged with a reason code and a slip count
- Error from the last four periods calculated by forecast type and owner

## Common questions

### How accurate should a sales forecast be?

There is no universal standard, but in a Forrester Consulting survey only 18% of revenue teams forecast quarterly revenue within 5% of actual, and 55% missed by more than 10%. A firm should measure its own error and aim to reduce it period by period.

### Why are sales forecasts usually wrong?

Common causes are default stage probabilities, close dates that slip without consequence, inconsistent stage definitions, poor CRM data and the absence of any record comparing past forecasts with outcomes.

### What is the difference between a commit forecast and a weighted pipeline forecast?

A weighted pipeline forecast multiplies open deal values by stage probabilities. A commit forecast is the seller's or manager's judgment of which specific deals will close in the period.

### How do you measure forecast accuracy?

Record each forecast call with its date and owner, then compare it with actual revenue at period end. Express the difference as a share of actual and track it by forecast type, owner and how far ahead the call was made.

## Sources and notes

- [Gartner, Gartner Says Less Than 50% of Sales Leaders and Sellers Have High Confidence in Their Organization's Forecasting Accuracy](https://www.gartner.com/en/newsroom/press-releases/2020-02-12-gartner-says-less-than-50--of-sales-leaders-and-selle), February 2020. Analyst press release; sample size not stated.
- [Forrester Consulting for Clari, Revenue Operations And Intelligence Delivers Predictable Growth](https://pages.clari.com/rs/866-BBG-005/images/forrester-clari-revops-study-2021.pdf), August 2021. Vendor-commissioned survey of 327 US software revenue operations decision-makers; self-reported.
- [Mi3, Sales analytics disappoints business leaders, Gartner survey reveals](https://mi-3.com.au/07-02-2024/sales-analytics-disappoints-business-leaders-gartner-survey-reveals), February 2024. Trade press summary of a Gartner survey of 303 sales leaders.
- [Ebsta and Pavilion, 2024 B2B Sales Benchmarks](https://www.ebsta.com/ebsta-pavilion-b2b-sales-benchmarks-2024/), 2024. Vendor dataset of 4.2 million opportunities across 530 companies.
- [HubSpot Knowledge Base, Set up and customize pipelines](https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines). Vendor documentation; source of the default stage probabilities.
- [Salesforce Trailhead, Configure Sales Forecasting in Salesforce](https://trailhead.salesforce.com/content/learn/modules/sales-forecasting/configure-sales-forecasting-in-salesforce). Vendor training documentation on forecast categories and adjustments.

## Related research

- [What is sales forecasting?](https://lowob.com/research/what-is-sales-forecasting/)
- [What are pipeline stage definitions?](https://lowob.com/research/what-are-pipeline-stage-definitions/)
- [Calibration is the honest learning signal](https://lowob.com/research/calibration-is-the-honest-learning-signal/)
- [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [What is CRM data hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)

## Next Move

Find the forecast your team gave in week four of each of the last four quarters and set it beside the actual result. If those week-four numbers cannot be found, start keeping them this week, before changing any method.

[Start a conversation](https://lowob.com/contact/)
