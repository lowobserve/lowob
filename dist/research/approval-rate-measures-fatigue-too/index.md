# Approval rate measures fatigue too

Source: https://lowob.com/research/approval-rate-measures-fatigue-too/
Publisher: lowob (https://lowob.com)
Published: 2026-09-11 · Updated: 2026-11-16
Function: Strategy

> Summary: "Accepted without edit" rises when an AI system improves, but also when reviewers tire, trust fluent output, see only easy cases, or accept blander work. Clinical alert research and automation-bias studies show why. Report approval rate only beside an independently measured error rate and a seeded-error catch rate.

"Accepted without edit" rises when an AI system improves. It also rises when reviewers get tired, trust fluent text, stop seeing hard cases, or ask for less. Read alone, the number cannot tell these apart, and the people producing it cannot either: experienced developers in a 2025 randomised trial were 19% slower with AI and believed they were 20% faster. A few cheap measures can separate improvement from fatigue. Report approval rate beside them or not at all.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

It is the most popular metric in human-in-the-loop AI: the share of outputs approved without changes. It goes up over time, it is easy to compute, and it looks like learning. Sponsors like it. In our approval gate design, [Gateway 1](https://lowob.com/research/nothing-sends-without-a-person/), it is one of the numbers the queue produces automatically, which is exactly why it gets reported first.

## Four forces that raise it without quality

| Force | Mechanism | What it looks like in the queue |
| --- | --- | --- |
| Fatigue | Vigilance is finite and declines within a session | By the fortieth item of the afternoon, approval is a click |
| Automation bias | Fluent output is trusted whether or not it is correct | Fewer edits as the model's prose improves, with no change in factual accuracy |
| Selection | Routing sends the system only easy cases | Approval rises while usefulness stays flat |
| Narrowing ambition | Outputs drift toward safer, blander content because that is what passes | Less to correct, and less of value |

**Fatigue.** The best-documented analogue comes from clinical decision support. Heleen van der Sijs and colleagues reviewed 17 studies of drug safety alerts in computerised prescribing systems and found clinicians overrode them in roughly 49% to 96% of cases. The authors are careful: many overrides were justified. But they name the conditions that make people stop reading, including low specificity, unclear information and unnecessary disruption to work. An approval queue full of routine, mostly correct drafts creates the same conditions. The reviewer learns that the right answer is usually "yes", and the click becomes a habit.

**Automation bias.** Raja Parasuraman and Dietrich Manzey's 2010 review describes how people relying on an imperfect aid make omission errors, missing problems it did not flag, and commission errors, following its wrong advice. It also found the bias was not prevented by training or instructions. As language models become more fluent, there is more surface for this bias to act on. Fluency is not accuracy, but it feels like it.

**Selection.** If routing logic sends the system only cases it handles well, its approval rate rises while its contribution stays the same. This is common when a team scopes a pilot to "start with the easy ones" and then never widens it.

**Narrowing ambition.** Outputs drift toward what gets approved without edits. A draft that names no risk, commits to no number and makes no recommendation is hard to fault. There is less to correct, and less of value.

## The perception problem

Asking reviewers whether they are still paying attention does not work, because people misjudge their own performance with AI. METR's randomised trial in early 2025 followed 16 experienced open-source developers across 246 real tasks in codebases they knew well. Before starting, they predicted AI tools would make them 24% faster. Measured completion time rose by 19%. Afterwards, they estimated AI had made them 20% faster.

If experienced professionals misjudge their own speed by that margin, reviewers will misjudge their own vigilance. Self-report cannot rescue this metric. Only independent measurement can.

> A rising approval rate with flat or falling error detection is a warning, not a win.

## Four measures that can

| Measure | How | What it tells you | Cost |
| --- | --- | --- | --- |
| Independent error sampling | A second reviewer assesses 3 to 5% of approved outputs blind | The critical-error rate behind the approval rate | A few reviewer hours a month |
| Seeded errors | Insert a handful of outputs with known, material flaws each month | Whether the gate catches what it should | Writing the flawed items |
| Time on item | Plot the distribution of review times by task | Approvals in seconds on complex items are not reviews | Free if the queue logs it |
| Ambition drift | Compare month-one and month-six outputs on similar cases | Whether outputs say less over time | An hour a quarter |

**Independent error sampling.** Take a random few percent of approved outputs and have a second reviewer assess them without seeing the first decision. The critical-error rate in that sample is the number that matters. Read approval rate only beside it.

**Seeded errors.** Insert a small number of outputs with known, material flaws into the review queue and measure how many reviewers catch. Inspection functions have used planted test items for years. The US Transportation Security Administration projects fictional threat images onto X-ray scans of real bags to test screeners, with monthly reviews and remedial training below a target rate. The GAO's 2016 audit found the data incomplete at some airports, which is the practical lesson: a seeded test is only a measure if someone reads the results. It is the most direct test of whether the gate works.

**Time on item.** Look at the distribution of review time, not the average. A long tail of three-second approvals on complex items is fatigue made visible.

**Ambition drift.** Periodically compare outputs from month one and month six on similar cases for specificity: numbers, named risks, concrete recommendations. If later outputs say less, approval rates are rising for the wrong reason. Our explainer on [AI evals](https://lowob.com/research/what-are-ai-evals/) covers how to keep a fixed comparison set for this.

## Reading the two numbers together

| Approval rate | Independent error rate | Seeded-error catch rate | Reading |
| --- | --- | --- | --- |
| Rising | Falling | Stable or rising | The system is improving and the gate still works |
| Rising | Flat or rising | Falling | Fatigue or automation bias; the gate is weakening |
| Rising | Falling | Falling | Easier cases or blander output; check selection and ambition drift |
| Falling | Flat | Stable | Reviewers are engaged; look at edit classes for the cause |

The second row is the one that matters most and the one approval rate alone will never show. It is also the row that should block any move along the autonomy dial. Our comparison of [human-in-the-loop and human-on-the-loop](https://lowob.com/research/human-in-the-loop-vs-human-on-the-loop/) explains why a task should only move from approval to monitoring on evidence of a low independent error rate, never on approval rate.

## What would prove this wrong

Approval rates that track independently sampled error rates closely across systems, reviewers and time. Then approval rate is a sufficient proxy and the extra measures are overhead. The alert-override and automation-bias literature gives good reason to expect they will diverge, but it comes from clinical and laboratory settings, so each organisation should test the relationship on its own queue before relying on either assumption.

## lowob takeaways

- **Four forces push approval up.** Fatigue, automation bias, easy-case selection and narrowing ambition all look like improvement.
- **Do not ask reviewers to self-assess.** People misjudge their own performance with AI by wide margins.
- **Sample and seed.** Blind re-review of 3 to 5% of approvals and a monthly seeded-error test.
- **Report in pairs.** Never put approval rate on a dashboard without the error rate beside it.

## Sources and notes

- [van der Sijs, Aarts, Vulto and Berg, Overriding of drug safety alerts in computerized physician order entry](https://repub.eur.nl/pub/60465), *Journal of the American Medical Informatics Association* 13(2), 2006. Peer-reviewed review of 17 studies; clinical setting, and many overrides were judged appropriate.
- [Parasuraman and Manzey, Complacency and Bias in Human Use of Automation: An Attentional Integration](https://trid.trb.org/View/1085175), *Human Factors* 52(3), June 2010. Peer-reviewed review; predates generative AI.
- [The Register, AI coding tools make developers slower but they think they're faster, study finds](https://www.theregister.com/2025/07/11/ai_code_tools_slow_down/), 11 July 2025. Trade press report of METR's randomised trial; 16 developers, one task type, early-2025 tools.
- [US GAO, GAO-16-704: TSA should ensure testing data are complete and fully used](https://www.gao.gov/assets/gao-16-704.pdf), September 2016. Government audit of airport screening tests; used here for the seeded-test method, not as AI evidence.
- The four-force, measures and reading tables are **lowob**'s framework.

## Related research

- [A reviewer who does not verify is not a control](https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/)
- [Gateway 1: Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [What is an approval gate for AI agents?](https://lowob.com/research/what-is-an-approval-gate/)
- [Human-in-the-loop vs human-on-the-loop](https://lowob.com/research/human-in-the-loop-vs-human-on-the-loop/)

## Next move

Before the next dashboard review, pull fifty approved items at random and have a second person assess them blind. Put the critical-error rate beside the approval rate and see whether they tell the same story.

[Start a conversation](https://lowob.com/contact/)
