# Below the volume floor

Source: https://lowob.com/research/below-the-volume-floor/
Publisher: lowob (https://lowob.com)
Published: 2026-09-29 · Updated: 2026-11-16
Function: Strategy

> Summary: At around 150 material decisions a year, all different, no model will learn a company's judgment, and pooling across companies does not rescue it. What works is the company's own prior reasoning, recorded properly, plus public base rates, read and argued with by a person. Forecasting research supports starting from the reference class.

At 150 decisions a year, all different, no model will learn your judgment, and pooling across companies does not rescue it. The arithmetic is unforgiving: split 150 decisions across ten classes and a calibration curve needs years per class to stabilise. What still works is narrower and still valuable: your own prior reasoning, recorded properly, plus public base rates, read and argued with by a person. Forecasting research supports starting from the base rate.

The enterprise designs that work rest on volume. Enough similar cases that exceptions recur and patterns form. A large financial institution can run tens of thousands of comparable credit or compliance decisions a year through the same workflow. At that density, rare variations cluster, and a system can learn from the experts who handle them.

A founder-led company, or a small specialist team inside a large one, has the opposite profile.

## Different physics

| Property | Large enterprise workflow | Founder-led company |
| --- | --- | --- |
| Material decisions a year | Tens of thousands in one class | About 150 across many classes |
| Similarity | High; same product, same form, same criteria | Low; a pricing exception, a partnership, a first sales hire |
| Cost of one wrong call | Small, absorbed by the portfolio | Can be the company, or the year |
| Time to outcome | Weeks to months | Often eighteen months or more |
| Noise in the outcome | Low; the outcome is mostly the decision's | High; confounded by everything else that happened |

Perhaps 150 material commercial decisions a year. A pricing exception. A partnership choice. The sequence of a launch. Whether to hire a first salesperson. They share almost nothing with each other. Each one is expensive.

And the outcomes are slow and noisy. A partnership is graded in eighteen months, and the grade is confounded by everything else that happened in those eighteen months.

That combination, low volume, high heterogeneity, slow and noisy outcomes, defeats pattern learning. It is not a matter of waiting longer.

## Why waiting longer does not fix it

Run the numbers. Split 150 decisions a year across ten decision classes and each class gets about 15 cases a year. In [Calibration is the honest learning signal](https://lowob.com/research/calibration-is-the-honest-learning-signal/) we suggest a few dozen outcomes per probability band before a calibration curve is stable, and forty to fifty outcomes before plotting one at all. At 15 cases a year, the first plot arrives in year three. If the outcome takes eighteen months to read, add another year and a half. By then the company, the market and the people making the decisions have changed.

Pattern learning has the same problem in a sharper form. A model that learns from examples needs repeated, comparable cases with clean labels. Our explainers on [fine-tuning](https://lowob.com/research/what-is-fine-tuning/) and [decision precedent](https://lowob.com/research/what-is-decision-precedent-in-ai/) cover why a handful of heterogeneous examples is enough to retrieve but not enough to train on.

> Fifteen companies times 150 decisions is 2,250 records. It is not 2,250 samples.

## Why pooling does not fix it

The obvious response is to pool: fifteen companies times 150 decisions is 2,250 records. It is not 2,250 samples. Within any segment comparable enough to learn from, same stage, same model, same market, same kind of decision, the effective sample may be in single digits.

Pooling also raises problems that matter more than statistics. Did each client consent to their decisions informing someone else's? Who owns a pattern derived from several clients? What happens when it helps a competitor? And in narrow markets, a pattern assembled from three accounts can be recognisable without a single name attached. De-identification is not anonymity when the market has twenty players.

## What does work at this scale

**Your own prior reasoning.** The single most transferable thing at low volume is the company's own reasoning on its nearest comparable decision. That needs one organisation, no consent architecture, and a record kept with discipline: evidence, alternatives, a falsifier, the outcome. Martin Fowler's description of the architecture decision record is a good template: one decision, its context, the alternatives considered and the consequences, with the record superseded rather than edited when the decision changes. Our piece [Two people: the founder's ledger](https://lowob.com/research/two-people-the-founders-ledger/) shows the smallest working version.

**Public base rates.** Where a decision has a public reference class, use it. Forecasting research has long found that starting from the outside view, how similar efforts usually turn out, beats starting from the specifics of your own plan. In the Good Judgment Project, Barbara Mellers, Philip Tetlock and colleagues found that training forecasters to use reference classes, along with simple heuristics such as averaging estimates, improved both calibration and resolution. Some domains have rich public outcome data. Credit is the clearest: S&P Global publishes default rates by rating back to 1981, including a five-year cumulative default rate of 0.34% for AAA-rated corporates. Launches, listings, funding rounds and programme results have thinner but usable equivalents. Base rates are a weaker claim than patterns, and a more honest one.

**AI as drafter and checker, not learner.** At this scale the model's job is to draft the entry from a call or a memo, propose the alternatives nobody named, suggest a falsifier, flag contradictions with earlier entries, and surface the nearest prior case before the next meeting. A person reads it and argues with it. This is close to what Daniel Kahneman, Olivier Sibony and Cass Sunstein call decision hygiene: sequencing information so judgment is not formed too early, and breaking a complex judgment into parts.

| Job | What the model does | What the person does |
| --- | --- | --- |
| Capture | Drafts the record from a call, memo or thread | Corrects it in under five minutes |
| Challenge | Proposes alternatives and a falsifier | Accepts, rejects or sharpens them |
| Consistency | Flags contradictions with earlier entries | Decides which one still holds |
| Recall | Surfaces the nearest prior case and a base rate | Reads it aloud before deciding |

## A rhythm that fits

A 30-minute weekly decision review for anything material. A quarterly sweep of every falsifier whose date has passed. An annual read of the whole record by the leadership team, asking one question: what did we keep getting wrong?

That is not a scaled-down enterprise brain. It is the one layer of one that works at any size, because it does not depend on a model learning from repetition. Our guide to [building the commercial system at every size](https://lowob.com/research/building-the-commercial-system-at-every-size/) places it in the wider sequence.

## What would prove this wrong

Pooled cross-company models producing demonstrably better decisions for low-volume, heterogeneous classes than a company's own disciplined record plus public base rates, under independent evaluation.

## lowob takeaways

- **Volume is the precondition for learning.** At 15 cases a class a year, waiting does not help.
- **Pooling adds records, not samples.** And it brings consent, ownership and recognisability problems.
- **Start from the base rate.** Forecasting research shows reference classes improve judgment.
- **Use AI to draft and challenge.** A person reads the nearest prior case and argues with it.

## Sources and notes

- [Mellers et al., Psychological Strategies for Winning a Geopolitical Forecasting Tournament](https://www.psychologicalscience.org/journals/psychological-science/0956797614524255/), *Psychological Science*, 2014. Peer-reviewed; geopolitical questions, not company decisions.
- [S&P Global, Ratings track record: standing the test of time](https://investorfactbook.spglobal.com/sp-global-ratings/ratings-track-record-standing-the-test-of-time/), citing the corporate default study of 27 March 2025. Rating agency's own investor material; an example of a public base rate.
- [strategy+business, How noisy is your company?](https://www.strategy-business.com/article/How-noisy-is-your-company?gko=5a57c), Theodore Kinni, 19 May 2021. Article on Kahneman, Sibony and Sunstein's decision hygiene.
- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), 24 March 2026. Practitioner reference from software architecture.
- The volume arithmetic, comparison and job tables are **lowob**'s analysis; the 150-decision figure is **lowob**'s working estimate, not a survey result.

## Related research

- [Two people: the founder's ledger](https://lowob.com/research/two-people-the-founders-ledger/)
- [What is decision precedent in AI?](https://lowob.com/research/what-is-decision-precedent-in-ai/)
- [Building the commercial system at 20, 50 and 200 people](https://lowob.com/research/building-the-commercial-system-at-every-size/)
- [Top 5 tools for a founder's decision ledger](https://lowob.com/research/top-5-tools-for-a-founders-decision-ledger/)

## Next move

Write down your last five material decisions with the evidence, the alternatives and what would prove each wrong. For each, find one public base rate. Read the nearest one aloud before your next decision of the same kind.

[Start a conversation](https://lowob.com/contact/)
