# Attribution vs Incrementality: What Did Your Marketing Actually Cause?

Source: https://lowob.com/research/attribution-vs-incrementality/
Publisher: lowob (https://lowob.com)
Published: 2026-07-04 · Updated: 2026-11-17
Function: Strategy

> Summary: Every attribution model is a story about who deserves credit; none measures what would have happened without the spend. Field experiments at Facebook and eBay show how far the stories can drift from the truth. This piece sets out the holdout designs a smaller company can run, how to read the result, and a three-layer measurement stack.

Attribution assigns credit for a conversion. Incrementality asks whether it would have happened without the campaign. Only the second answers the question a budget decision depends on, and it is answered by experiment, not by model. The research is blunt: in 15 Facebook experiments, observational methods using rich individual data were often off by a factor of three, and eBay found its brand search ads bought almost no traffic it would not have had anyway.

Every attribution model is a story about who deserves credit. Last click gives it to whoever touched the customer last. First click gives it to whoever introduced them. Linear shares it out. Data-driven models let the platform that sold the ad decide how much the ad mattered; it is Google Ads' default, and in 2023 Google removed the first-click, linear, time-decay and position-based models altogether. Each story is coherent. None of them is a measurement of what would have happened without the spend.

That question, what would have happened anyway, has a name: incrementality.

## Why attribution flatters

Attribution counts touches on customers who converted. It cannot see the customers who would have converted without any touch at all, and those are precisely the ones the crowded channels are best at reaching. Brand-name search, retargeting and coupon sites all appear at the end of a journey that was already ending. They are credited with outcomes they observed.

The best-known test of this is eBay's. Blake, Nosko and Tadelis switched off brand keyword ads on MSN and found that about 99.5% of the click traffic was retained, almost all of it arriving through the organic result directly underneath. A follow-up on Google lost about 3%. On non-brand search, a geographic experiment across about 30% of US markets found no statistically significant sales effect, and frequent buyers, who generated most of the attributed sales, were largely unaffected. Naive regression on the same data implied returns above 1,400%. The experiment implied a short-term return of minus 63%. eBay is a famous brand with strong organic rankings, so the size of the effect will not transfer to every advertiser. The direction does.

For a company whose ad accounts get suspended, attribution has a second weakness. Every suspension resets the pixel, the conversion history and the platform's learning. The models are rebuilt on a fresh, thin data set, and the numbers they produce for the next quarter are guesses dressed as reports. Our piece on [how marketing tracking works](https://lowob.com/research/how-marketing-tracking-works/) covers why pixel data is thinner than it was even without suspensions.

## The evidence that models cannot fix it

The obvious response is a better model. Gordon, Zettelmeyer, Bhargava and Chapsky tested that directly. Working with 15 US advertising experiments at Facebook, covering 1.6 billion impressions, they compared the lift measured by randomised trials with the lift that standard observational methods estimated from the same data, including matching and regression on detailed demographic and behavioural variables.

| Study (checkout outcome) | Lift from the randomised test | Naive exposed vs unexposed | Best or closest observational estimate |
| --- | --- | --- | --- |
| Study 1 | 30% | 217% | Statistically indistinguishable from the test |
| Study 4 | 73% | 316% | 222% on age and gender matching; richest variables came close |
| Study 9 | 2.4% | Not reported here | 1,306% |

Across the studies, the authors found that in half of them the estimated increase in purchases was off by a factor of three, whichever method was used, and that the error went in both directions. Their conclusion, in the publisher's summary, was that even fairly comprehensive individual-level data were inadequate for reliable estimates, and that large randomised trials should be used wherever possible. These were consumer campaigns at a platform with unusually good data. A smaller company's attribution model has less to work with.

> Attribution tells you who was present at the sale. Incrementality tells you who caused it. Budgets should follow the second.

## What incrementality asks

Take a group who could have been reached. Reach some of them; do not reach the rest. Compare outcomes. The difference is what the spend caused.

That is the whole idea, and it is available to companies far smaller than the ones that usually run it.

**Geographic holdouts.** Run a channel in some regions and not in comparable others. Compare outcomes across the two sets over the same weeks. Works for programmatic, creator and affiliate programmes, and does not require the platform's cooperation.

**Time-based holdouts.** Pause a channel for a defined window and watch what happens to outcomes, brand search and direct traffic. Crude, but clarifying, particularly for retargeting and brand search, which often turn out to have been observing rather than causing.

**Partner-level holdouts.** In an affiliate or creator programme, hold a matched set of partners inactive for a period. Compare the outcomes of active and inactive partners' audiences where the tracking allows.

**Lift studies where the platform offers them.** Google's Conversion Lift splits users or geographies into treatment and control and reports incremental conversions and incremental cost per action; it is not available to every account and needs enough conversion volume. Meta and others run similar studies. Platform designs have improved: the "ghost ads" method developed by Johnson, Lewis and Nubbemeyer logs the ads a control user would have seen without showing them, which in their retail case cut the cost of a test from about $45,000 to about $5,000 for similar precision. The caution remains that the platform is grading its own work.

None of these is perfect. All of them are closer to the truth than a model that only counts touches. Our piece on [campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/) covers sample sizes and decision rules at low volumes.

## Reading the result

Incrementality tests produce a single figure: the share of attributed outcomes that would not have happened without the spend. Divide the attributed cost per outcome by that share to get the cost per outcome caused.

| Channel | Attributed cost per outcome | Incrementality | Cost per outcome caused |
| --- | --- | --- | --- |
| A: brand search and retargeting | $30 | 25% | $120 |
| B: prospecting on a new audience | $80 | 90% | about $89 |

The second channel is cheaper. The attribution report would have said the opposite. The figures are illustrative, but the pattern, where capture channels look cheapest and prove dearest, is the one the eBay experiment found.

## A measurement stack for a company the platforms restrict

The practical design has three layers.

**Own the tracking.** First-party conversion events, server-side where possible, in an analytics account in the company's name. Platform pixels are a convenience, not a record.

**Attribute for operations.** Use a simple, stable attribution rule to run the week: pay partners, pause placements, allocate creative. Do not pretend it measures cause.

**Test for allocation.** Once a quarter, run one incrementality test on the channel taking the most budget. Let that result, not the attribution report, decide the next quarter's split. A [marketing mix model](https://lowob.com/research/what-is-marketing-mix-modeling/) refreshed quarterly checks that the pieces add up.

That is a small amount of discipline. It is also the difference between a media budget allocated on evidence and one allocated to whichever channel is best at taking credit.

## lowob takeaways

- **Do not confuse credit with cause.** Last-touch and data-driven credit both describe who was present, not what the spend produced.
- **Better models do not close the gap.** Facebook's own experiments found observational estimates off by a factor of three in half the studies.
- **Holdouts are cheap.** Geographic, time-based and partner-level designs need no platform cooperation.
- **Let tests decide the split.** One incrementality test a quarter on the biggest channel; the attribution report runs the week.

## Common questions

### What is the difference between attribution and incrementality?

Attribution assigns credit for a conversion among the touches that preceded it. Incrementality measures whether the conversion would have happened without the campaign, using a control group that was not reached.

### How do you measure incrementality without a platform lift study?

Run a geographic holdout, switching a channel off in comparable regions; a time-based pause; or a partner-level holdout in affiliate and creator programmes. Compare outcomes against the reached group over the same weeks.

### Is data-driven attribution accurate?

It is more nuanced than last click, but it still divides credit among touches on people who converted. It cannot see who would have converted anyway, and the platform selling the ads runs the model.

### Do brand search ads drive incremental sales?

Often far fewer than reported. eBay found about 99.5% of brand-ad traffic was retained through organic search when the ads stopped. Test it with a holdout before assuming either way.

## Sources and notes

- [Gordon, Zettelmeyer, Bhargava and Chapsky, A Comparison of Approaches to Advertising Measurement: Evidence from Big Field Experiments at Facebook](https://www.kellogg.northwestern.edu/faculty/gordon_b/files/fb_comparison.pdf), *Marketing Science*, 2019. Academic paper; 15 US consumer campaigns on one platform, using Facebook data.
- [INFORMS, How measurable is online advertising?](https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/How-measurable-is-online-advertising), 20 March 2019. Publisher's summary of the paper above.
- [Blake, Nosko and Tadelis, Consumer Heterogeneity and Paid Search Effectiveness: A Large Scale Field Experiment](https://www.nber.org/papers/w20171.pdf), NBER Working Paper 20171, 2014; later published in *Econometrica*. Field experiment at eBay; a very well-known brand, so the brand-search result is an upper bound for most advertisers.
- [Johnson, Lewis and Nubbemeyer, Ghost Ads: Improving the Economics of Measuring Online Ad Effectiveness](https://conference.nber.org/conf_papers/f84173.pdf), February 2016. Academic paper; one retailer case; the method depends on the ad platform implementing it.
- [Google Ads Help, About Conversion Lift](https://support.google.com/google-ads/answer/12003020?hl=en-GB). Platform documentation; availability depends on the account and conversion volume.
- [Google Ads Help, First click, linear, time decay, and position-based attribution models are going away](https://support.google.com/google-ads/answer/13427716), April 2023. Platform announcement; data-driven became the default.
- The reading table and the three-layer stack are **lowob**'s framework; the channel figures are illustrative.

## Related research

- [Campaign Testing That Reaches a Decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/)
- [Demand Generation Economics](https://lowob.com/research/demand-generation-economics/)
- [What Is Marketing Mix Modeling? A Small-Company Guide](https://lowob.com/research/what-is-marketing-mix-modeling/)
- [How Marketing Tracking Works: Pixels to Server-Side](https://lowob.com/research/how-marketing-tracking-works/)
- [A $10,000 Test That Closes a Question Beats a $10,000 Bet That Leaves It Open.](https://lowob.com/research/tests-that-close-questions/)
- [Ad Network vs Ad Exchange vs DSP: The Middlemen](https://lowob.com/research/ad-network-vs-exchange-vs-dsp/)

## Next move

Pick the channel taking the most budget this quarter and design one holdout for it: matched regions or partners, a fixed window and a written rule for what result would cut or scale it. Run it before the next budget meeting.

[Start a conversation](https://lowob.com/contact/)
