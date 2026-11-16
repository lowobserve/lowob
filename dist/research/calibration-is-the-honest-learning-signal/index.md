# Calibration is the honest learning signal

Source: https://lowob.com/research/calibration-is-the-honest-learning-signal/
Publisher: lowob (https://lowob.com)
Published: 2026-09-08 · Updated: 2026-11-16
Function: Strategy

> Summary: A system cannot claim to learn by grading its own outputs. It can by comparing human predictions with outcomes it did not produce. Someone records a probability before a decision; the world produces a result; the gap is information nobody can game afterwards. Rating agencies have published this kind of scorecard for decades, and the largest forecasting experiments show calibration can be trained. Almost no other business function does it at all, and it costs one number per decision.

## Key points

- Approval rates, acceptance rates and "pattern hit rates" are circular, because the system scores cases it has already shaped.
- S&P Global publishes default rates by rating going back to 1981: AAA-rated corporates had a five-year cumulative default rate of 0.34%, and lower ratings have generally defaulted more often.
- Calibration asks whether things predicted at 70% happen about 70% of the time; discrimination asks whether 90% calls come true more often than 50% calls.
- The Brier score, introduced in 1950 for weather forecasts, combines both, and a forecaster who always says 50% scores 0.25.
- In the Good Judgment Project, training, teaming and tracking improved both calibration and resolution, so the signal is learnable, not just measurable.

## Why most learning claims are circular

Most claims that a system "learns" are circular. It finds a pattern, applies it, and then scores itself on how often later cases matched the pattern. Of course they did: the pattern was applied to them. Approval rates, acceptance rates and pattern hit rates all share this flaw to some degree. In [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/) we set out the other forces that push such numbers up.

The honest learning signal is external. Someone makes a prediction with a probability. The world produces an outcome the system did not cause. The gap between the two is information nobody can game after the fact. This is also what [outcome write-back](https://lowob.com/research/what-is-outcome-write-back/) is for: without the outcome recorded against the decision, there is nothing to compare.

## The model already exists

Credit rating is calibration at institutional scale. S&P Global Ratings publishes annual default and transition studies showing how often issuers at each rating actually defaulted over different horizons. Its corporate study covers 1981 to 2024. Across that period, AAA-rated corporates had a five-year cumulative default rate of 0.34%, fewer than four defaults per 1,000 ratings, and S&P states that "lower-rated issuers and securities have generally exhibited higher default rates."

That is a public scorecard for judgment. If the ratings mean anything, default rates should rise steadily as ratings fall, and the pattern should hold over time. When it does not, the market notices.

Weather forecasting got there first. Glenn Brier introduced his score in the *Monthly Weather Review* in 1950 to verify forecasts expressed as probabilities. "70% chance of rain" became something that could be checked.

The insight for an enterprise is to extend that discipline from the core product to every decision class where outcomes arrive: renewals, approvals, early-warning flags, hiring, partnerships, pricing. Most functions have no equivalent of a default study, so they cannot tell whether their judgment is improving. Our playbook on [forecasting that holds](https://lowob.com/research/forecasting-that-holds/) applies the same logic to the sales forecast.

## How it works, in plain terms

When a decision is made, the decision-maker records a probability for the outcome they expect. "Renews at or above current value: 70%." "Ships within six months: 60%." When the outcome arrives, it is recorded against the prediction.

Over enough cases, two things become visible.

**Calibration**: of everything predicted at 70%, did roughly 70% happen? If only half did, the judgment is overconfident at that level.

**Discrimination** (forecasting researchers also call it resolution): did the things predicted at 90% happen much more often than those predicted at 50%? A person who says 60% about everything can be perfectly calibrated and useless.

The Brier score combines both. For yes-or-no outcomes it is the mean squared difference between each probability and what happened, coded 1 or 0. It runs from 0 (perfect) to 1, and lower is better. A forecaster who always says 50% scores 0.25. The table below shows three illustrative forecasters on the same ten renewals, six of which renew.

| Forecaster | What they said | What happened | Brier score | Reading |
| --- | --- | --- | --- | --- |
| The hedger | 60% on all ten | 6 of 10 renewed | 0.240 | Calibrated, no discrimination |
| The discriminator | 90% on six, 20% on four | 5 of the six and 1 of the four renewed | 0.162 | Calibrated and informative |
| The optimist | 95% on all ten | 6 of 10 renewed | 0.363 | Overconfident |

*Illustrative arithmetic, **lowob**'s example.* The discriminator wins even though one of their confident calls was wrong, because their probabilities carried information. The score rewards honest, informative probabilities over hedging, and punishes confidence that the outcomes do not support.

> A person who says 60% about everything can be perfectly calibrated and useless.

## The signal can be trained

The strongest evidence that calibration feedback is worth collecting comes from the Good Judgment Project, run by Barbara Mellers, Philip Tetlock and colleagues in a US government forecasting tournament. In their 2014 paper in *Psychological Science*, three interventions improved accuracy over two years. Training in probability reasoning reduced biases, taught forecasters to use reference classes and gave them simple heuristics such as averaging estimates. Teaming let forecasters share information and argue about reasons. Tracking placed the top 2% of first-year performers into elite teams. All three improved both calibration and resolution.

Two cautions apply. The tournament asked geopolitical questions with clear resolution dates, which most business decisions lack. And the gains came from training plus feedback, not from showing people a chart. The practical reading is that a calibration record is necessary but not sufficient: it gives people something to learn from, and a short training session on base rates gives them a way to learn.

## What it needs

| Requirement | Why | Practical threshold |
| --- | --- | --- |
| Volume within a comparable class | Calibration is invisible on a handful of cases | A few dozen outcomes per probability band before the picture is stable |
| Prediction captured before the outcome | Collected afterwards, a probability measures memory and self-image, not judgment | Field locked once the decision is recorded |
| The person who made the call | Team or averaged probabilities hide whose judgment is improving | One named forecaster per decision |
| A safe introduction | Early league tables teach people to predict 50% about everything | Private feedback for the first cycles |

Volume is why calibration works first where decisions are frequent and similar, such as renewals, discount approvals and early-warning flags. Where decisions are rare and all different, a calibration curve may take years to stabilise; our piece [Below the volume floor](https://lowob.com/research/below-the-volume-floor/) covers what works instead.

Within a few cycles, the organisation can see where its judgment is overconfident, which categories it systematically misreads, and whose calls in which areas tend to be right. That is the closest thing to measurable institutional learning available today. Adding the probability is one field in the [decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/).

## What would prove this wrong

Calibration feedback producing no improvement in decision-makers' later calibration or discrimination over several cycles. Then the signal is honest but not useful. The forecasting evidence suggests improvement is possible with training, but it has not been shown at scale for commercial decisions, so the first cycles should be treated as a test of this claim.

## lowob takeaways

- **Grade against the world, not the system.** Only outcomes the system did not produce are an honest signal.
- **One probability per decision.** Recorded before the meeting, by the person making the call.
- **Score with a proper rule.** The Brier score rewards informative probabilities over hedging.
- **Start private.** Show people their own curve first; league tables come later, if ever.

## Common questions

### How can you tell if an organisation's judgment is improving?

Record a probability for the expected outcome when each decision is made, then compare predictions with outcomes over enough cases to measure calibration and discrimination, scored with a rule such as the Brier score.

### What is the difference between calibration and discrimination?

Calibration means outcomes predicted at a given probability happen about that often. Discrimination means high-probability predictions come true much more often than low ones; someone who says 60% about everything can be calibrated but useless.

### What is a Brier score?

The mean squared difference between probability forecasts and outcomes coded 1 or 0. It runs from 0 to 1, lower is better, and always saying 50% scores 0.25. Glenn Brier introduced it for weather forecasts in 1950.

### How many outcomes do you need before calibration data is useful?

A few dozen outcomes per probability band within a comparable decision class. In practice, plot predicted against actual after forty to fifty outcomes and treat early curves as directional.

## Sources and notes

- [S&P Global, Ratings track record: standing the test of time](https://investorfactbook.spglobal.com/sp-global-ratings/ratings-track-record-standing-the-test-of-time/), citing S&P Global Ratings' corporate default study of 27 March 2025. Rating agency's own investor material; covers 1981 to 2024.
- [Mellers et al., Psychological Strategies for Winning a Geopolitical Forecasting Tournament](https://www.psychologicalscience.org/journals/psychological-science/0956797614524255/), *Psychological Science*, 2014. Peer-reviewed; geopolitical questions with clear resolution, not business decisions.
- [University of Virginia Library, A Brief on Brier Scores](https://library.virginia.edu/data/articles/a-brief-on-brier-scores), Jacob Goldstein-Greenwood, 15 February 2021. University statistics explainer; cites Brier's 1950 *Monthly Weather Review* paper.
- The three-forecaster table is **lowob**'s illustrative arithmetic; the requirements table is **lowob**'s working method.

## Related research

- [Forecasting that holds](https://lowob.com/research/forecasting-that-holds/)
- [What is outcome write-back?](https://lowob.com/research/what-is-outcome-write-back/)
- [The ten commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [Dissent is the data you are throwing away](https://lowob.com/research/dissent-is-the-data-you-are-throwing-away/)

## Next Move

Pick one decision class with outcomes inside two quarters, renewals are the usual choice, and add a locked probability field to the record this week. Plot predicted against actual once forty outcomes are in.

[Start a conversation](https://lowob.com/contact/)
