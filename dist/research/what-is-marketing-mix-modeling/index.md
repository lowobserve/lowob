# What Is Marketing Mix Modeling? A Small-Company Guide

Source: https://lowob.com/research/what-is-marketing-mix-modeling/
Publisher: lowob (https://lowob.com)
Published: 2026-07-24 · Updated: 2026-11-16
Function: Distribution

> Summary: Marketing mix modeling estimates each channel's total contribution to an outcome from aggregate weekly data, without tracking individuals. Google's Meridian and Meta's Robyn have made the method free, but both are clear that it needs history, variation and calibration. Combined with attribution and incrementality tests, it gives the most honest picture a company can assemble.

Marketing mix modeling (MMM) is a statistical method that estimates how much each marketing channel, and other factors such as price and seasonality, contributed to an outcome. It works from aggregate weekly data and does not track any individual, which is why it has returned as individual tracking has declined. Google's Meridian and Meta's Robyn have made the software free. Both are clear about what it needs: history, real variation in spend, and experiments to calibrate it. The results are rough, and combined with attribution and incrementality tests they are the most honest picture a company can assemble.

MMM was built for large consumer companies with years of data and television budgets. A version of it now works for companies much smaller than that, provided they accept what the method can and cannot tell them.

## What it does

Given a history of spend by channel and outcomes over the same periods, the model estimates the relationship between each channel's spend and the outcome. It allows for two things a simple regression misses. Google researchers set them out in the 2017 paper behind much of the current tooling: advertising "usually has lag effects and diminishing returns." The lag is called carryover or adstock, the decaying effect of an ad after it runs. The diminishing return is called saturation or shape: each extra dollar buys less than the last.

The model also includes factors the company does not control, so they are not mistaken for channel effects. The output is an estimate of each channel's contribution, its return at the current spend, and, with care, what would happen if spend were shifted between channels.

| Method | Question it answers | Data it needs | Main weakness |
| --- | --- | --- | --- |
| Attribution | Which touches preceded each conversion? | User-level tracking | Counts presence, not cause |
| Incrementality test | What did this channel cause, in this window? | A holdout group or region | One channel, one period at a time |
| Marketing mix model | What did each channel contribute, in total, over time? | Two-plus years of weekly aggregate data | Rough, and sensitive to assumptions |

Unlike attribution, which assigns credit to touches on converting customers, MMM attempts to measure the total effect of a channel, including the customers it influenced without a trackable touch. Unlike incrementality tests, it does not require holding anything out; it infers from natural variation in spend and outcomes. Our piece on [attribution versus incrementality](https://lowob.com/research/attribution-vs-incrementality/) covers the other two.

## The tools: Meridian and Robyn

Two open-source packages from the largest ad platforms have changed who can run MMM.

**Meridian** is Google's. It opened to all marketers in January 2025, after testing with hundreds of brands. It is Bayesian: it combines prior knowledge with the data, and lets results from incrementality experiments be added as priors. It can use reach and frequency, not only impressions, and works at national or regional (geo) level.

**Robyn** is Meta's. It uses ridge regression, which handles channels whose spend moves together better than ordinary regression, and tunes adstock and saturation settings within ranges the analyst sets. Its documentation includes an analyst's guide that is one of the clearest public statements of what an MMM needs.

Both are built by companies that sell advertising. The code is open and inspectable, which is the main safeguard. The assumptions, priors and channel definitions are still the analyst's, and they decide the answer.

## What it needs

**Enough history.** Robyn's guide is direct: "an MMM will need a minimum of two years of historical weekly data." With only monthly data, it suggests four to five years.

**Enough data per thing being estimated.** Robyn recommends about ten observations per independent variable. Meridian frames the same point as data points per model parameter, and is more cautious. Its own worked example: two years of weekly national data, 104 points, for a model with 26 parameters gives about four points per parameter, and "this sample size is too low to estimate the model reliably." Three years for ten parameters might "glean some directional information." The fix is fewer channels, more history, or regional data.

**Real variation in spend.** If a channel was always on at the same level, the model cannot tell what it did. Meridian notes that insufficient variation in spend "adversely impacts national models."

**Clean, consistent data.** Spend, impressions where available, and outcomes, all by week, all defined the same way throughout.

**Knowledge of the external factors.** Pricing changes, launches, seasonality, competitor events, platform policy changes, so they can be included rather than mistaken for channel effects.

**Experiments to calibrate it.** Robyn's guide says "we strongly recommend using experimental and causal results that are considered to be the ground truth to calibrate MMM", and warns against using low-confidence ones. Meridian accepts experiment results as priors. And someone who understands both the statistics and the business, because a model will produce a confident answer to a badly posed question.

> A mix model will produce a confident answer to a badly posed question. The variation in the data, not the software, decides what it can know.

## Where it goes wrong

Too little variation, so the model attributes outcomes to whatever happened to move. Channels that were turned on and off together, so their effects cannot be separated; Robyn's guide calls this multicollinearity and recommends checking correlations before modelling. Outcomes with long lags, where this quarter's result reflects last quarter's spend. Over-trust in point estimates that have wide uncertainty: the 2017 Google paper found that with small samples the priors strongly shape the results and may bias them, and that the recommended optimal mix has high variance. And the temptation to use the model to justify a plan already decided, by adjusting assumptions until it agrees.

## A lightweight version for a small company

A company with a year or two of weekly data across four to eight channels can run a simple model with Meridian or Robyn. At that size, the documentation's own arithmetic says to keep the model small: group minor channels, keep only the controls that matter, and treat the output as directional. The results will be rough. They will also be more informative than a platform's attribution report, because they attempt to answer the right question.

The practical approach is to combine three things: attribution for running the week, one or two incrementality tests per quarter on the biggest channels, and a simple mix model refreshed quarterly to check that the whole picture is consistent. The tests also calibrate the model. Where the three disagree, the disagreement is the finding. Our piece on [campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/) covers test design at low volumes, and [measuring brand in B2B](https://lowob.com/research/measuring-brand-in-b2b/) covers effects too slow for weekly data to show.

A company can also create the variation a model needs. Deliberately flexing a channel's spend up and down in planned weeks, or in chosen regions, turns a flat history into one the model can read.

## For companies whose tracking is fragile

Companies in restricted categories lose pixel history every time an account is suspended and cannot rely on platform reporting. Aggregate methods do not care. A model built on the company's own weekly spend and outcome data survives every account reset, which makes it unusually valuable for exactly the companies least likely to have heard of it. Our piece on [distribution when ad platforms restrict you](https://lowob.com/research/distribution-when-ad-platforms-restrict-you/) covers the channel side.

## lowob takeaways

- **History and variation come first.** Two years of weekly data with real movement in spend, or the model guesses.
- **Keep the model small.** Data points per parameter, not the number of channels, decides what it can estimate.
- **Calibrate with experiments.** Both Meridian and Robyn are built to accept incrementality results.
- **Use all three methods.** Attribution for the week, tests for allocation, MMM for the whole picture; disagreement is the finding.

## Sources and notes

- [Google, announcement opening Meridian to all marketers](https://blog.google/products/ads-commerce/meridian-marketing-mix-model-open-to-everyone/), 29 January 2025. Vendor announcement; Google sells advertising.
- [Google for Developers, Meridian: amount of data needed](https://developers.google.cn/meridian/docs/pre-modeling/amount-data-needed?hl=en). Vendor documentation; Google calls its guidance "rough and directional."
- [Meta, Robyn: An Analyst's Guide to MMM](https://facebookexperimental.github.io/Robyn/docs/analysts-guide-to-MMM). Vendor documentation; Meta sells advertising.
- [Jin, Wang, Sun, Chan and Koehler, Bayesian Methods for Media Mix Modeling with Carryover and Shape Effects](https://research.google/pubs/bayesian-methods-for-media-mix-modeling-with-carryover-and-shape-effects/), Google, 2017. Research paper by Google authors; applied to one advertiser's data.
- The method comparison table is **lowob**'s synthesis.

## Related research

- [Attribution vs incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [Campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/)
- [Measuring brand in B2B](https://lowob.com/research/measuring-brand-in-b2b/)
- [How marketing tracking works](https://lowob.com/research/how-marketing-tracking-works/)

## Next move

Pull two years of weekly spend by channel and weekly outcomes into one sheet. Count the channels whose spend never moved; those are the ones no model can measure until you flex them on purpose.

[Start a conversation](https://lowob.com/contact/)
