# Where Judgment Arrives First

Source: https://lowob.com/research/where-judgment-arrives-first/
Publisher: lowob (https://lowob.com)
Published: 2026-09-16 · Updated: 2026-11-17
Function: Strategy

> Summary: AI judgment layers will work first where decisions are frequent, similar and graded quickly, and where someone will later have to defend them. Research on expertise points the same way: judgment can be learned only in environments regular enough to learn from, with feedback. Map decision classes on volume and outcome lag before choosing where to build; elsewhere, judgment is a practice before it is a product.

Judgment layers will work first where decisions are frequent, similar and graded quickly, and where someone will later have to defend them. Research on expertise says the same thing about people: skilled judgment is learnable only where the environment is regular and feedback arrives. Map your decision classes on volume and outcome lag before choosing where to build. Everywhere else, judgment is a practice before it is a product.

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

Look at where AI is shaping decisions in 2026, rather than drafting documents about them. Screening and compliance alerts. Fraud and financial-crime investigation. Early-warning signals on loan books. Credit memo preparation. Support resolutions. Code review. Vendors in each of these areas publish striking figures about alerts avoided and hours saved. Those are vendor-reported and should be treated as such. But the pattern in where they appear is consistent, and independent evidence supports it.

## What the independent evidence shows

The Bank of England's 2024 survey of 118 UK financial firms is one of the few regulator-run views of where AI is actually used. It found 75% of firms already using AI, with a further 10% planning to within three years. Among the most common uses were optimisation of internal processes (41%), cybersecurity (37%) and fraud detection (33%). More telling for this argument: 55% of all AI use cases had some degree of automated decision-making, but only 2% were fully autonomous. Most decision use sits in the middle, where a system prepares or proposes and a person decides the hard cases.

Customer support is the other clear example. Gartner predicted in March 2025 that by 2029 agentic AI will resolve 80% of common customer service issues without human intervention. That is a forecast, not a result, but it is a forecast about exactly the conditions described below: high volume, similar cases and quick confirmation of whether the issue was resolved.

The firms with the most decision use are also the ones that must defend decisions. US bank supervisors' revised model risk guidance, SR 26-2, issued in April 2026 to replace SR 11-7, describes outcomes analysis as comparing "model outputs to corresponding real-world outcomes" and requires "effective challenge" by objective experts. It explicitly excludes generative and agentic AI from its scope, but the discipline it describes (record the call, compare with the outcome, let someone challenge it) is the same loop a judgment layer needs. Our explainer on [model risk management for AI](https://lowob.com/research/what-is-model-risk-management/) covers the regulatory side.

## Four conditions

Daniel Kahneman and Gary Klein, who began from opposite views of expert intuition, agreed in a 2009 paper that whether to trust an intuitive judgment depends on "the predictability of the environment in which the judgment is made" and on the judge's opportunity to learn its regularities. In a 2010 interview Klein added feedback as the second condition, and Kahneman said he would be "less trusting of intuition" where problems are unique. A machine learning from an organisation's decisions faces the same constraints.

**Volume of similar decisions.** Enough cases of the same kind that exceptions recur. At tens of thousands of comparable cases a year, rare variations cluster and patterns surface in weeks.

**Expert judgment at the exceptions.** The rulebook handles most cases, and a skilled person decides the rest. That person's decisions are what the system learns from.

**Outcomes that arrive soon enough.** A false positive is known in days, a credit outcome in months. Both are short enough to close the loop.

**Someone who must defend the decision.** A regulator, a budget holder, an investment committee. This is what makes the record worth paying for, not just possible.

| Decision class | Volume of similar cases | Outcome lag | Defender | Where it sits |
| --- | --- | --- | --- | --- |
| Screening or fraud alerts | Very high | Days | Regulator | Build the learning layer now |
| Support resolutions | Very high | Hours to days | Budget holder | Build now |
| Loan early warnings, credit memos | High | Months | Credit committee, supervisor | Build with leading indicators |
| Renewal discounts | Medium | One quarter | Revenue leader | Record and review; learning is possible |
| Partnerships, market entries | Low | Years | Board | Practice, not product |

The rows are illustrative; the volumes and lags in your firm will differ.

> Below the floor, the value is not that the system gets smarter. It is that the organisation's own reasoning survives and is argued with before the next call.

## Map before you build

Take your organisation's decision classes and place each on two axes: annual volume of comparable decisions, and time until the outcome is known. Mark the ones where someone must later defend the call.

High volume and short lag, with a defender: that is where a learning system can be built and evidenced now.

High volume and long lag: possible, with care, using leading indicators as interim outcomes. Choose those indicators deliberately, because a system will learn to optimise whatever proxy you give it. A collections model rewarded for promises to pay, rather than payments, will learn to collect promises (an illustrative case).

Low volume and long lag: strategic decisions, partnerships, market entries. Patterns will not form. McKinsey's 2019 survey of 1,228 managers found respondents least familiar with "big bets", the infrequent, high-stakes decisions such as acquisitions, and only 30% familiar with all three decision types it studied. What works here is a disciplined record that a person reads, with AI drafting, checking and surfacing precedent rather than learning.

For most mid-size companies the first qualifying class is on the commercial line, where decisions recur weekly and outcomes arrive within a quarter. [Why the brain starts at the commercial line](https://lowob.com/research/why-the-brain-starts-at-the-commercial-line/) makes that case, and [The commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/) lists the candidates.

## Below the floor is a different object

The mistake is to treat the low-volume case as a smaller version of the same product and to promise it the same learning. It is a different object, with different value: not that the system gets smarter, but that the organisation's own reasoning survives and is argued with before the next call. [Below the volume floor](https://lowob.com/research/below-the-volume-floor/) sets out what that practice looks like.

## In practice

List your top twenty decision classes and estimate annual volume and outcome lag for each. Mark the classes where someone must later defend the decision. Build the learning layer only in the high-volume, short-lag, defended quadrant, and set the autonomy level there one notch at a time on evidence.

For the rest, deploy the record and the review discipline, and say clearly that it is a practice.

**What would prove this wrong:** a judgment system showing measurable learning in low-volume, long-lag, heterogeneous decision classes, under independent evaluation. Then the volume floor is lower than it looks.

## lowob takeaways

- **Judgment arrives where decisions repeat.** Volume, exceptions, quick outcomes and a defender.
- **Most decision AI is semi-autonomous.** Only 2% of UK financial-services use cases were fully autonomous in 2024.
- **Choose proxies with care.** A system learns whatever interim outcome you reward.
- **Below the floor, keep a record, not a model.** AI drafts and surfaces precedent; a person decides.

## Common questions

### Where is AI most useful for business decision-making?

Where decisions are frequent, similar and graded quickly, and someone must later defend them, such as screening and fraud alerts, support resolutions, loan early-warning signals and credit memo preparation.

### Can AI learn from strategic decisions like partnerships or market entries?

Patterns will not form in low-volume, long-lag decisions. What works there is a disciplined record that a person reads, with AI drafting, checking and surfacing precedent rather than learning.

### How should a company decide where to build an AI judgment system?

List your top twenty decision classes, estimate annual volume and outcome lag for each, and mark where someone must defend the decision. Build the learning layer only in the high-volume, short-lag, defended quadrant.

### What is the risk of using leading indicators to train AI on long-lag decisions?

A system will learn to optimise whatever proxy you give it, so choose the leading indicators deliberately and check them against the real outcome when it arrives.

## Sources and notes

- [Bank of England, Artificial intelligence in UK financial services 2024](https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024), 21 November 2024. Regulator survey of 118 firms; UK financial services only.
- [Kahneman and Klein, Conditions for intuitive expertise: a failure to disagree](https://pubmed.ncbi.nlm.nih.gov/19739881/), *American Psychologist* 64(6), 2009. Academic review about human experts, applied here by analogy.
- [McKinsey Quarterly, Strategic decisions: When can you trust your gut?](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/strategic-decisions-when-can-you-trust-your-gut), March 2010. Interview; opinion, not new data.
- [Federal Reserve, SR 26-2: Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm) and [attachment](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf), 17 April 2026. US bank supervisory guidance; excludes generative and agentic AI.
- [Gartner, Agentic AI will autonomously resolve 80% of common customer service issues by 2029](https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290), 5 March 2025. Analyst prediction, not a measured result.
- [McKinsey, Decision making in the age of urgency](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/decision-making-in-the-age-of-urgency), April 2019. Self-reported survey of 1,228 managers.
- The four conditions, the decision map and its example rows are **lowob**'s framework.

## Related research

- [Why the Brain Starts at the Commercial Line](https://lowob.com/research/why-the-brain-starts-at-the-commercial-line/)
- [The Ten Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [What Is Model Risk Management for AI?](https://lowob.com/research/what-is-model-risk-management/)
- [Below the Volume Floor](https://lowob.com/research/below-the-volume-floor/)

## Next move

List your top twenty decision classes this week with a rough annual volume and outcome lag for each. Circle the ones in the high-volume, short-lag quadrant that someone must defend; that is where to build first.

[Start a conversation](https://lowob.com/contact/)
