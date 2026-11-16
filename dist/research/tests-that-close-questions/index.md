# A $10,000 Test That Closes a Question Beats a $10,000 Bet That Leaves It Open.

Source: https://lowob.com/research/tests-that-close-questions/
Publisher: lowob (https://lowob.com)
Published: 2026-05-13 · Updated: 2026-11-16
Function: Strategy

> Summary: Most growth tests are small versions of what the company already wanted to do, and they end in "promising". A test closes a question when the threshold and the decision on each side are written before any money is spent. Measure two or three channels cheaply and in parallel, read the results against the thresholds, then commit budget to one channel at a time.

A test is defined by the decision it forces, not by its size. Write the question and the threshold first, measure several channels cheaply at once, then commit to one properly. The discipline matters because most ideas do not work: Kohavi and Thomke reported that only about a third of Microsoft's experiments improved the metric they targeted, and 10% to 20% at Google and Bing. A company that cannot say in advance what result would stop it will read most of its failures as "promising".

Every company says it tests before it scales. Very few can show you the question a test was designed to answer, or the decision that followed.

The reason is that most tests are not tests. They are small versions of the thing the company already wanted to do, run for long enough to produce a number that can be described either way. Ten thousand dollars goes into a channel. A report comes back. The channel is "promising." Another ten thousand follows.

That is a bet. A test is different in one respect: it is designed so that when it ends, a question is closed.

## Write the question before spending a dollar

A test worth running can be stated as a question with a threshold and a decision on each side.

Not: "Let's try personal-finance creators."

But: "Can personal-finance creators on cost-per-account terms produce funded accounts below eighty dollars each, at a volume of at least fifty in two weeks, using tracking we control? If yes, we build the program. If no, we do not revisit creators for two quarters."

The second version is uncomfortable to write, because it commits the company to a decision before it knows the answer. That discomfort is the point. A test without a pre-committed decision becomes an argument after the results arrive, and arguments are won by whoever wanted the channel in the first place.

Researchers have a name for this. Nosek and colleagues, in the paper published in *PNAS* in 2018 as "The preregistration revolution", define preregistration as committing to analytic steps without advance knowledge of the research outcomes. They separate prediction, which tests an idea about what will happen, from postdiction, which uses the data to explain what already did. The risk they name is hindsight bias: outcomes look more predictable after the fact. A growth report written after the money is spent is postdiction. Stefan Thomke makes the business version of the point in Harvard Business School's Working Knowledge: a sound experiment needs a testable hypothesis, a control and an organisation that agrees in advance to abide by the result.

| Field | Example |
| --- | --- |
| Question | Can personal-finance creators produce funded accounts on cost-per-account terms? |
| Threshold | Below $80 per funded account |
| Minimum volume | At least 50 funded accounts |
| Window | Two weeks |
| Tracking | Links and codes the company controls, reconciled to its own account data |
| If yes | Build the creator program and give it an owner |
| If no | Do not revisit creators for two quarters; record why |

## Why most ideas fail the threshold

The pre-written threshold matters more than intuition suggests, because most ideas do not clear it. In "The surprising power of online experiments", published in *Harvard Business Review* in 2017, Ron Kohavi and Stefan Thomke reported that across Microsoft about a third of experiments proved effective, a third were neutral and a third were negative. At Google and Bing only about 10% to 20% generated positive results. Thomke has since put the general rate at roughly one experiment in ten improving the bottom line.

These are organisations with large engineering teams, careful idea selection and millions of users. A growth team picking channels on a hunch will not beat their hit rate. If most ideas fail, a process that lets each failure be described as "promising" will fund mostly failures.

> A test without a pre-committed decision becomes an argument after the results arrive, and arguments are won by whoever wanted the channel in the first place.

## Measure cheaply, in several places at once

The instinct is to test one channel at a time, thoroughly. It is the wrong instinct, for two reasons.

Sequential tests are slow, and distribution questions have a season. A company that tests one channel per month spends a year learning what it could have learned in a month.

And sequential tests are biased. The first channel gets the most attention and the best creative. By the fourth, everyone is tired. Running channels in the same weeks also means they face the same market, the same news and the same seasonality, which a month-by-month sequence cannot hold constant.

Run the two or three most plausible channels in parallel, each with a small budget, its own tracking, and its own written question. A week is enough to learn whether there is water under the hull. It is not enough to learn what the voyage will earn, and a test that claims otherwise is overselling itself.

Own the tracking. Gordon, Zettelmeyer, Bhargava and Chapsky compared observational measurement with randomised experiments across 15 advertising studies at Facebook, published in *Marketing Science* in 2019. The observational methods often failed to measure the true effect and generally overstated it. A platform's own attribution report is an observational method. For the difference between what a channel was credited with and what it caused, see [attribution vs incrementality](https://lowob.com/research/attribution-vs-incrementality/).

## Commit expensively, one at a time

Here is where most companies drift. Having run three small tests, they scale all three a little, on the theory that diversification is prudent.

It is not prudent. It is three half-run experiments with none of them funded well enough to prove anything. Parallel measurement exists to choose. Once something reads, the budget, the creative attention, and the operating effort go there, until that channel is either built properly or shown to have a ceiling.

The sequence is the discipline: observe cheaply and in parallel, commit expensively and one at a time. Companies that hold those two ideas loosely end up doing neither. The commitment phase is also where the arithmetic of proper testing applies; [campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/) covers sample sizes and holdouts at B2B volumes. Kohavi and Thomke note that any company with at least a few thousand daily active users can run controlled tests. Below that, the parallel read and a written decision are the honest alternative.

## The one-week diagnostic

This is the shape of the [diagnostic week](https://lowob.com/research/what-is-a-distribution-diagnostic/) **lowob** runs, and it is the shape a company can run for itself.

**Day one:** Map which channels are open to the category, which require paperwork, and which are closed. Write the question for each channel worth testing.

**Days two through five:** Stand up tracking the company owns. Place the small budgets. Recruit the handful of partners or creators the test requires. Watch the early numbers for tracking failures, not for results.

**Day six:** Read the results against the thresholds written on day one. No re-interpretation.

**Day seven:** Write down the decision, what it cost, and what was ruled out. The ruled-out list is the most valuable page, because it is the one the company will otherwise re-argue every quarter. Our piece on [the graveyard](https://lowob.com/research/the-graveyard/) sets out how to keep that list so it can be consulted later.

## What a small test cannot tell you

Honesty about limits keeps the method credible.

| A one-week, small-budget test can show | It cannot show |
| --- | --- |
| Whether a channel is open to the category | Long-run customer value |
| Whether it converts at all | Seasonal effects |
| Roughly what an outcome costs at small scale | How the channel behaves at ten times the volume |
| Whether the tracking works | Whether the first cohort retains |

That is enough to decide where the next serious money goes, and it is far more than most companies know when they make that decision. For pricing questions, where the same logic applies but legal and volume limits are tighter, see [pricing experiments in B2B](https://lowob.com/research/pricing-experiments-in-b2b/).

## lowob takeaways

- **Write the decision first.** A question, a threshold, a minimum volume and what happens on each side, before the first dollar.
- **Expect most ideas to fail.** Even the best testing programmes see a minority of positive results, so "promising" is not a result.
- **Test in parallel, on tracking you own.** Two or three channels in the same weeks, each with its own question.
- **Commit to one.** Fund the channel that read until it is built or shows its ceiling.
- **Keep the ruled-out list.** It stops the same channel being re-argued every quarter.

## Sources and notes

- [Kohavi and Thomke, The surprising power of online experiments](https://web-docs.stern.nyu.edu/executive/The%20Surprising%20Power%20of%20Online%20Experiments.pdf), *Harvard Business Review*, September to October 2017. Practitioner article from large technology firms; hit rates reflect their idea pipelines, hosted copy.
- [Nosek, Ebersole, DeHaven and Mellor, The preregistration revolution](https://errorstatistics.com/wp-content/uploads/2017/07/nosek-et-al-preregistration-revolution.pdf), preprint of the paper published in *PNAS*, March 2018. Written for scientific research, not marketing; the principle is borrowed.
- [Harvard Business School Working Knowledge, Creating the experimentation organization](https://www.library.hbs.edu/working-knowledge/creating-the-experimentation-organization), 4 December 2019. Interview with Stefan Thomke on his book; the one-in-ten figure is his general estimate.
- [INFORMS, How measurable is online advertising?](https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/How-measurable-is-online-advertising), 20 March 2019. Press release on Gordon et al., *Marketing Science*; 15 Facebook experiments, consumer advertising.
- The question card, limits table and diagnostic week are **lowob**'s framework.

## Related research

- [Campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/)
- [Pricing experiments in B2B](https://lowob.com/research/pricing-experiments-in-b2b/)
- [Attribution vs incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [What is a distribution diagnostic?](https://lowob.com/research/what-is-a-distribution-diagnostic/)
- [The graveyard](https://lowob.com/research/the-graveyard/)

## Next move

Take the next channel your team wants to try and write its question card: threshold, minimum volume, window, tracking and the decision on each side. If nobody will sign the "if no" line, the test is a bet.

[Start a conversation](https://lowob.com/contact/)
