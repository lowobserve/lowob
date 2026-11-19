# Reviewer Minutes per Useful Decision

Source: https://lowob.com/research/reviewer-minutes-per-useful-decision/
Publisher: lowob (https://lowob.com)
Published: 2026-09-28 · Updated: 2026-11-17
Function: Strategy

> Summary: The number that decides whether an AI judgment system pays for itself is human review time per decision that actually helped, not token cost. Productivity research predicts that metric will rise before it falls. Put the crossover date in writing at the start, and treat a miss as a decision to redesign, narrow or reprice.

Token costs get the attention. The number that decides whether a judgment system pays for itself is human review time per decision that actually helped. Expect it to rise before it falls: economists call the pattern a productivity J-curve, and it is where most programmes lose their sponsor. Measure the baseline, predict the peak, put the crossover date in writing, and treat a miss as a decision.

## Tokens are the visible cost

AI cost conversations focus on inference. That is understandable: token bills are new, visible and growing. Stanford's 2025 AI Index found that the cost of querying a model performing at GPT-3.5 level fell about 280-fold between November 2022 and October 2024. Prices for equivalent performance collapsed.

Spend did not. Menlo Ventures' bottom-up estimate put enterprise generative AI spend at $37 billion in 2025, against $11.5 billion in 2024, with $12.5 billion of it on foundation model APIs. In 2026 some listed software companies began reporting the bill. In August, Trend Micro cut its full-year operating income forecast from ¥56.4 billion to ¥44.4 billion, about 21%, after cloud-related expenses "including AI token costs tied to model usage" rose beyond its projections. Our explainer on [AI inference cost](https://lowob.com/research/what-is-ai-inference-cost/) covers why falling unit prices and rising bills are consistent.

Those numbers matter. For a judgment system they are not the biggest cost.

## The human cost dominates

Every record needs a reviewer. Every conflict needs an adjudicator. Every falsifier needs someone to check it on the date. Every seeded error needs someone to catch it. In most deployments the hours of skilled people spent on review and adjudication cost far more than the tokens.

The arithmetic is simple enough to do on a napkin. The figures below are illustrative assumptions, not benchmarks; substitute your own.

| Cost line per decision brief | Illustrative assumption | Illustrative cost |
| --- | --- | --- |
| Model tokens | 50,000 input and 5,000 output tokens at mid-tier list prices | Well under $1 |
| Reviewer time | 12 minutes of a senior person costed at $120 an hour | $24 |
| Adjudication of a conflict | 1 in 5 briefs, 20 minutes each, same rate | $8 on average |
| Falsifier check and error sampling | 5 minutes per decision, spread over the year | $10 |

On assumptions like these, people cost more than forty times what the model does. A 50% cut in token prices barely moves the total. A 50% cut in review time changes the business case.

If review time does not fall as the record grows, the system is a service with software attached, and it should be priced and staffed as one.

> If review time does not fall as the record grows, the system is a service with software attached.

## The metric

**Reviewer minutes per useful decision** = total human time spent on review, adjudication and falsifier checks, divided by the number of decisions where the decision-maker judged, at the time, that the system's preparation helped.

Three properties make it the right headline.

It includes all the human cost, not just the approval click.

It counts only useful decisions, so a system producing volume nobody values scores badly.

It cannot be gamed by fatigue. Tired reviewers approve faster, but they do not judge more decisions useful; if anything, fewer. In [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/) we set out why speed-based measures mislead.

The "did it help?" question has to be asked at the moment of decision, not in a survey later. People misjudge their own productivity with AI by wide margins: in METR's 2025 trial, experienced developers were measured 19% slower with AI tools and still believed they had been 20% faster. A judgment captured in the moment is noisy but honest. A retrospective one measures belief.

## Expect a J-curve

Erik Brynjolfsson, Daniel Rock and Chad Syverson describe a "productivity J-curve" for general-purpose technologies such as AI. Getting value requires heavy investment in complementary intangibles: new processes, new skills, new ways of working. That investment is real but poorly measured, so measured productivity looks worse in the early years and better once the intangibles pay off.

A gated judgment system goes through the same curve in miniature. In its early weeks it adds review. Precedent does not yet exist, the schema is being tuned, reviewers are learning the tool. The metric will rise before it falls. That is normal, and it is also where most programmes lose their sponsor, because nobody said it would happen.

So say it, in writing, at the start.

| Step | When | What is written down |
| --- | --- | --- |
| Baseline | Before launch | Minutes per decision without the system, by decision class |
| Predicted peak | Business case | Expected peak in minutes per useful decision and the week it occurs |
| Crossover date | Business case | Date by which the metric must fall below the baseline |
| Review | On the crossover date | Crossed, or a decision: redesign, narrow scope, or reprice as a service |

If the crossover is missed, treat the miss as a decision point, not a reason to wait another quarter. Our [Gateway 2](https://lowob.com/research/gateway-two-a-dollar-figure-on-every-commercial-decision/) piece covers how to put a dollar figure on each decision class so the redesign-or-reprice choice is made on numbers.

## What this means for margins

In our own modelling of an operator-run desk, the economics only work once review time per client falls to under half of what the first month requires. Above that, margins are thin. Below it, they are healthy. The ratio will differ for every organisation. The existence of a threshold will not. For the wider method of measuring returns, see [how to measure AI ROI](https://lowob.com/research/how-to-measure-ai-roi/).

## What would prove this wrong

Judgment systems in which review time per useful decision stays flat or rises indefinitely while the organisation still captures clear net value. Then the metric is measuring the wrong thing, perhaps because the value lies in better decisions rather than cheaper ones. If that happens, the remedy is to add an outcome measure beside the time measure, not to stop counting minutes.

## lowob takeaways

- **Count people, not just tokens.** Review, adjudication and checks usually cost far more than inference.
- **Divide by useful decisions.** Volume nobody values should make the metric worse, not better.
- **Ask "did it help?" in the moment.** Retrospective judgments of AI productivity are unreliable.
- **Write the J-curve down.** Baseline, peak and crossover date go in the business case, and the review happens on that date.

## Common questions

### What is the biggest cost of running an AI decision-support system?

Usually human review. The hours skilled people spend on review, adjudication and falsifier checks typically cost far more than the tokens, especially as token prices for equivalent performance keep falling.

### How do you measure the ROI of human review in AI systems?

Use reviewer minutes per useful decision: total human time on review, adjudication and falsifier checks, divided by decisions where the decision-maker judged at the time that the system's preparation helped. Compare it with a pre-launch baseline.

### Why does review time go up after launching an AI system?

Precedent does not yet exist, the schema is being tuned and reviewers are learning the tool. Economists describe the same early dip for new technologies as a productivity J-curve. Predict the peak and set a crossover date.

### What should happen if review time does not fall?

Treat the miss as a decision point: change the design, narrow the scope, or reprice the work as a service. If review time never falls as the record grows, the system is a service with software attached.

## Sources and notes

- [Tom's Hardware, AI costs drop 280-fold, but harmful incidents rise 56% in last year: Stanford 2025 AI Index report](https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-costs-drop-280-fold-but-harmful-incidents-rise-56-percent-in-last-year-stanford-2025-ai-report-highlights-china-us-competition), 9 April 2025. Trade press summary of Stanford HAI's 2025 AI Index.
- [Menlo Ventures, 2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/), 9 December 2025. Investor research; survey of 495 US enterprise decision-makers plus a bottom-up market model.
- [Subscription Insider, Trend Micro AI growth highlights rising subscription costs](https://www.subscriptioninsider.com/blog/trend-micro-ai-growth-highlights-rising-subscription-costs), 17 August 2026. Trade press; the company also cited a review of other costs, so tokens were not the only factor.
- [Brynjolfsson, Rock and Syverson, The Productivity J-Curve: How Intangibles Complement General Purpose Technologies](https://www.nber.org/papers/w25148), NBER Working Paper 25148, 2018, revised 2020. Peer-reviewed version in *AEJ: Macroeconomics*, 2021; economy-wide, not firm-level deployment data.
- [The Register, AI coding tools make developers slower but they think they're faster, study finds](https://www.theregister.com/2025/07/11/ai_code_tools_slow_down/), 11 July 2025. Trade press report of METR's randomised trial with 16 developers.
- The cost table is illustrative arithmetic; the metric, the J-curve plan and the desk threshold are **lowob**'s own method and modelling.

## Related research

- [How to Measure AI ROI in a Commercial Team](https://lowob.com/research/how-to-measure-ai-roi/)
- [What Is AI Inference Cost?](https://lowob.com/research/what-is-ai-inference-cost/)
- [Gateway 2: Put a Dollar Figure on Every Commercial Decision](https://lowob.com/research/gateway-two-a-dollar-figure-on-every-commercial-decision/)
- [Approval Rate Measures Fatigue Too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [How to Build a Company Knowledge Base for AI](https://lowob.com/research/how-to-build-a-company-knowledge-base-for-ai/)

## Next move

Before your next AI-assisted decision class goes live, time ten decisions made without it. That baseline, in minutes per decision, is the number the crossover date will be judged against.

[Start a conversation](https://lowob.com/contact/)
