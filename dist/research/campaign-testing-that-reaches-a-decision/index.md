# Campaign Testing That Reaches a Decision

Source: https://lowob.com/research/campaign-testing-that-reaches-a-decision/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Growth

> Summary: A campaign test is only worth running if its result changes what the firm does next. At B2B volumes most tests are too small to detect the effects teams hope for: detecting a lift from 3% to 3.6% conversion needs roughly 14,000 visitors per arm. This piece sets out the arithmetic, how to choose a metric close enough to revenue to matter and far enough upstream to measure, which test designs survive low volume, and a pre-written decision card that stops tests ending in "promising".

A campaign test reaches a decision when three things are fixed before it starts: the metric, the smallest effect worth acting on, and what the firm will do for each possible result. Most B2B tests skip all three and are too small to detect anything. Detecting a lift in landing page conversion from 3% to 3.6% needs about 14,000 visitors in each arm; Forrester finds fewer than 1% of leads become closed deals, so testing on revenue directly is rarely possible. The workable approach is to test bigger changes on upstream metrics, use concurrent holdouts rather than before-and-after comparisons, and record every result, including the null ones.

*Figure: Where this piece sits: the commercial line, where the build starts.*

Part 8 set a cost ceiling for every demand channel, and Part 9 gave every piece of content a job. Both create questions a test could answer: does this channel beat its ceiling, does this piece move its stage. This part covers how to run those tests so they end in a decision.

Our earlier piece [Tests that close questions](https://lowob.com/research/tests-that-close-questions/) made the core argument for early-stage firms choosing between channels: write a threshold, run two or three options in parallel, fund the winner. This part assumes that discipline and adds what it leaves out: the arithmetic of sample size, the choice of metric, and what to do when the numbers are too small for any test at all.

## Why most tests end in "promising"

The usual campaign test runs for a few weeks, compares two versions, shows one ahead, and is reported as promising. Nothing is decided because nothing was set in advance. There was no agreed metric, no agreed size of effect that would justify a change, and no agreed action for a win, a loss or a tie.

This is a decision problem before it is a statistics problem. McKinsey's survey of 1,228 executives found only 20% said their organisations excel at decision making, and 61% said most of the time they spent on decisions was used ineffectively. A test without a pre-written decision adds to that time. It produces a number, a meeting about the number and, usually, a second test.

## The arithmetic of B2B volumes

The second reason tests fail is that they are too small. The number of observations needed to detect a difference depends on the baseline rate and the size of the difference. Using the standard approximation for comparing two rates, at a 5% significance level and 80% power, the requirements look like this.

| What is being tested | Baseline | Rate worth detecting | Needed in each arm |
| --- | --- | --- | --- |
| Landing page conversion, modest lift | 3% | 3.6% (20% relative) | about 13,900 |
| Landing page conversion, large lift | 3% | 4.5% (50% relative) | about 2,500 |
| Outbound reply rate | 2% | 3% | about 3,800 |
| Outbound reply rate, higher base | 5% | 7.5% | about 1,500 |
| Meeting to qualified opportunity | 20% | 25% | about 1,100 |
| Meeting to qualified opportunity, large lift | 20% | 30% | about 290 |

The figures are **lowob**'s calculation and assume a simple random split. They show two things. Small improvements on low base rates need traffic most B2B firms do not have. And tests further down the funnel, where rates are higher, need fewer observations but each observation is much more expensive to produce: 290 meetings per arm is a quarter's work for many teams.

Revenue is out of reach for most tests. Forrester's research finds fewer than 1% of leads convert to closed deals. A test that waits for closed revenue would need thousands of leads per arm and a full sales cycle, by which time the market has moved.

> If the test is too small to detect the effect you hope for, the result will be noise, and you will act on it anyway.

## Choosing the metric

The metric should be the closest step to revenue that the test can measure in its time window, and sales should agree that a movement in it matters. In practice that is usually qualified opportunities, accepted meetings, or progression from one defined stage to the next, using the [pipeline stage definitions](https://lowob.com/research/what-are-pipeline-stage-definitions/) the firm already has.

Three traps are common.

**The platform's own number.** Ad platforms report conversions using their own models. Google, for example, retired first-click, linear, time-decay and position-based attribution in 2023 and made data-driven attribution the default in Google Ads and Analytics. A data-driven attribution figure is a model's allocation of credit, not the result of a controlled comparison. Our piece on [attribution versus incrementality](https://lowob.com/research/attribution-vs-incrementality/) covers the difference.

**Winning against the wrong alternative.** Challenger's research on 2.5 million recorded sales conversations found around half of lost deals ended in no decision rather than a loss to a competitor. A test that measures share of wins against competitors can miss the effect that matters most, which is whether the buyer decided at all.

**The cheap upstream proxy.** Click-through rate is easy to move and weakly connected to revenue. A subject line that doubles opens and halves replies has lost.

## Designs that survive low volume

The design matters as much as the size. Before-and-after comparisons are the most common and the least reliable, because the baseline moves on its own. Ebsta and Pavilion's 2024 benchmarks, drawn from 4.2 million opportunities across 530 companies, recorded win rates 18% lower than in 2022 and found 44% of deals delayed or pushed back. A campaign launched into that environment will look worse than last year whatever it does. A concurrent comparison, where the test and control run at the same time, removes most of that drift.

Non-randomised methods can mislead even at very large volumes. Gordon, Zettelmeyer and colleagues compared common observational measurement methods against 15 randomised advertising experiments at Facebook, published in *Marketing Science* in 2019, and found the observational methods generally overestimated ad effectiveness, and in some cases underestimated it.

| Design | How it works | When it is valid | Main weakness |
| --- | --- | --- | --- |
| Random split | Visitors or contacts randomly assigned to version A or B | High volume, short feedback loop | Needs the sample sizes above |
| Account holdout | A random set of target accounts receives nothing for a period | Account-based programmes, outbound, events | Fewer units; needs accounts of similar size and fit |
| Geographic or time holdout | A region or period without the campaign | Paid media with clear geographic targeting | Regions and periods differ in other ways |
| Before and after | Compare the period after a change with the period before | Rarely; only for very large, abrupt effects | Baselines move; seasonality and market shifts dominate |
| Platform lift study | The ad platform runs its own holdout | Paid social and search, with enough spend | The seller of the media designs and reports the test |

Account holdouts suit B2B best. Randomly withholding a campaign from a fifth of the target list for a quarter, then comparing qualified opportunities per account between the two groups, measures what Forrester calls marketing lift: the gain above a baseline. It uses accounts as the unit, which matches how buying groups actually buy, and it can run at the volumes most firms have.

## Write the decision before the test

Every test should start with a decision card, completed and agreed before launch. It is short.

1. **The question.** One sentence: does version B produce more qualified opportunities per account than version A?
2. **The metric and its source.** Named field, named system, named definition.
3. **The smallest effect worth acting on.** Set from the economics in Part 8: the improvement that would move a channel inside its cost ceiling.
4. **The sample and the stop date.** From the arithmetic above. If the sample is not reachable, change the test or do not run it.
5. **The decision for each result.** If B wins by at least the minimum effect: switch and scale. If B loses: stop B. If neither: keep A, record the null and do not extend more than once.
6. **The owner.** The person who will make the call on the stop date.

Two rules make the card work. Do not stop early when the result looks good: checking repeatedly and stopping at the first favourable reading makes false positives far more likely than the significance level suggests. Johari, Pekelis and Walsh showed that with continuous monitoring, even at 10,000 samples, the false positive rate can easily rise fivefold above the nominal level. And treat a null result as a result. "We could not detect a difference of 20% or more" is useful; it means the cheaper option is fine.

Tests on real buyers also have a cost beyond budget. Gartner's 2025 survey of 632 buyers found 73% actively avoid suppliers who send irrelevant outreach. A badly targeted outbound variant does not just lose the test. It can lose the account.

## When the volume is too low to test

Many questions a 50-person firm faces cannot be tested at all: whether to attend a particular conference, whether to reposition for a new segment, whether to hire a partner manager. The honest answer is to decide by judgment and record the decision properly: the choice, the reason, the owner, the expected outcome and a check date, as Part 9 of The Build Order sets out. That is not a weaker form of testing. It is the right tool when the sample is one.

Between full tests and pure judgment there are useful middle options. Test bigger differences, because large effects need far smaller samples. Pool similar tests across quarters. And run qualitative tests: five buyer interviews on two versions of a message will not produce statistics, but they will often show which one is misunderstood. Our piece on [win-loss analysis](https://lowob.com/research/what-is-win-loss-analysis/) covers how to run those conversations without leading the buyer.

Whatever the method, every test and every judgment call goes in one log: the card, the result, the decision taken and a ruled-out list of what was tried and failed. After a year that log is the firm's real evidence about what works in its market, and the most useful document a new head of marketing can inherit.

Illustrative example: replacing a split test with a holdout

Decision
:   Abandon a planned A/B test of two outbound sequences and run a one-quarter account holdout instead, withholding the new sequence from a random fifth of 400 target accounts.

Reason and owner
:   The decision card showed the A/B test would need about 3,800 contacts per arm to detect a reply-rate lift from 2% to 3%, more than the quarter's list. Owned by the head of growth; minimum effect set from the channel's cost ceiling.

What changed
:   The holdout measured qualified opportunities per account, which sales already trusted; the null result on the first sequence was recorded and the second sequence was tested with a larger change.

Illustrative: a composite of a mid-size B2B technology firm, built from patterns across engagements; figures are illustrative.

## lowob takeaways

- **Write the decision first.** Metric, minimum effect, sample, stop date and the action for each result.
- **Do the arithmetic before launch.** If the sample cannot detect the effect, change the test.
- **Measure close to revenue.** Qualified opportunities or stage progression, agreed with sales.
- **Run concurrent comparisons.** Holdouts beat before-and-after because baselines move.
- **Record nulls and judgment calls.** The test log is the firm's evidence about its market.

Gateway card

### Before you launch a campaign test

- A one-sentence question and a named metric with its source
- A minimum effect worth acting on, taken from the channel economics
- A sample size calculation showing the test can detect that effect
- A concurrent control or holdout, not a before-and-after comparison
- A written action for a win, a loss and a null
- A named owner and a stop date that will not move

## Sources and notes

- [Forrester, Saying Goodbye To MQLs](https://www.forrester.com/blogs/saying-goodbye-to-mqls-sweet-and-no-sorrow), 21 November 2023. Analyst blog; underlying sample not stated in the post.
- [McKinsey, Decision making in the age of urgency](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency), 30 April 2019. Survey of 1,228 executives; self-reported; fielded in 2018.
- [Google Ads Help, First click, linear, time decay, and position-based attribution models are going away](https://support.google.com/google-ads/answer/13427716). Platform documentation; describes the platform's own measurement.
- [Challenger, How to Overcome Customer Indecision Using the JOLT Effect Approach](https://challengerinc.com/losing-to-customer-indecision/). Research on 2.5 million recorded sales calls, 2020; Challenger sells sales training.
- [Ebsta and Pavilion, 2024 B2B Sales Benchmarks](https://www.ebsta.com/ebsta-pavilion-b2b-sales-benchmarks-2024/). 4.2 million opportunities across 530 companies; vendor research; the page is inconsistent on one revenue figure.
- [Johari, Pekelis and Walsh, Always Valid Inference: Continuous Monitoring of A/B Tests](https://ar5iv.arxiv.org/html/1512.04922), arXiv:1512.04922. Academic paper (Stanford and Optimizely authors); source of the fivefold false positive figure under continuous monitoring.
- [INFORMS, How measurable is online advertising?](https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/How-measurable-is-online-advertising), 20 March 2019. Publisher's release for Gordon, Zettelmeyer, Bhargava and Chapsky in *Marketing Science*; 15 consumer advertising experiments, not B2B.
- [Gartner, 61% of B2B buyers prefer a rep-free buying experience](https://gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience), 25 June 2025. Survey of 632 B2B buyers.
- The sample size table is **lowob**'s calculation using the standard two-proportion approximation (5% two-sided significance, 80% power); the design table, decision card and example are **lowob**'s framework and illustration.

## Related research

- [Tests that close questions](https://lowob.com/research/tests-that-close-questions/)
- [Attribution vs incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [What is conversion rate optimization?](https://lowob.com/research/what-is-conversion-rate-optimization/)
- [What is win-loss analysis?](https://lowob.com/research/what-is-win-loss-analysis/)
- [What is marketing mix modeling?](https://lowob.com/research/what-is-marketing-mix-modeling/)

## Next move

Take the test your team is running now and fill in the six-line decision card retrospectively. If the sample cannot detect the effect you hoped for, stop it this week and redesign it as a larger change or an account holdout.

[Start a conversation](https://lowob.com/contact/)
