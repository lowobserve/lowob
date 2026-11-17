# What Are AI Evals?

Source: https://lowob.com/research/what-are-ai-evals/
Publisher: lowob (https://lowob.com)
Published: 2026-09-27 · Updated: 2026-11-17
Function: Strategy

> Summary: Evals are structured tests that measure an AI system's output against agreed criteria, using a set of real examples and a scoring method. Vendor guidance from OpenAI and Anthropic puts evals before prompt tuning or fine-tuning and warns against judging quality by feel. A small, task-specific eval set is the cheapest control a commercial team can build.

AI evals, short for evaluations, are structured tests that measure whether an AI system does a specific task well. Each eval pairs a set of realistic inputs with a way of scoring the outputs, by exact match, by a person or by another model. Evals turn "it seems to work" into a number you can track across prompt changes, model upgrades and vendors. They are the basis for deciding how much autonomy an AI tool gets.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What AI evals mean

A traditional software test checks that a function returns the right value. AI outputs vary from run to run and are often prose, so a single pass or fail rarely captures quality. An eval runs many examples and reports a score.

There are two broad kinds. Public benchmarks compare models on shared datasets, such as general knowledge or coding tests. Custom evals measure your own application on your own tasks. OpenAI's evaluation guide focuses on the second kind, and so should a commercial team. A model's benchmark rank says little about how well it drafts your renewal emails.

The UK AI Security Institute's Inspect framework shows the standard structure. A dataset holds samples, each with an input and a target answer or grading guidance. A solver produces the output, from a single model call to a full agent using tools over many turns. A scorer grades the output by text comparison, model grading or a custom scheme.

| An eval is | An eval is not |
| --- | --- |
| A fixed set of real examples with agreed scoring | A demo on a few hand-picked prompts |
| Repeated on every prompt, model or vendor change | A one-off acceptance test |
| Specific to one task and its failure modes | A general measure of model intelligence |
| A source of evidence for autonomy decisions | A guarantee of behaviour on unseen inputs |

## How evals work, and why they matter for a commercial team

Anthropic's documentation starts with success criteria. Good criteria are specific and measurable. Its example of a weak one is "the model should classify sentiments well". Its strong version names a held-out test set of 10,000 posts, an F1 score of at least 0.85 and a 5% improvement on the current baseline. Criteria commonly cover task fidelity, consistency, tone, privacy, latency and price.

OpenAI's guide sets out five stages: set an objective, collect a dataset, define metrics, run and compare, then evaluate continuously. It recommends logging during development so real cases can be mined for the eval set, and running evals on every change.

Grading is where most of the effort goes.

| Method | Strengths | Weaknesses | Commercial example |
| --- | --- | --- | --- |
| Code-based | Fast, reliable, cheap at scale | Misses nuance | Did the lead get the right segment label? |
| Model-based | Fast, flexible, handles judgment | Must be validated; position and length bias | Does the brief cite only facts in the CRM record? |
| Human | Highest quality, most flexible | Slow and expensive | Would you send this proposal section? |

Anthropic advises choosing the fastest reliable method and notes that more questions with slightly noisier automated grading usually beat fewer hand-graded ones. Model graders need a detailed rubric and a constrained output, such as pass or fail. OpenAI adds that they tend to favour the first answer shown and longer answers, so they should be checked against human judgments before use.

For a revenue or operations team, evals do two jobs. They show whether a tool is good enough to adopt at all. They also show when it is good enough to move up **lowob**'s autonomy dial, from draft to act with approval, for example. Approval rate alone is a weak signal, because reviewers tire and approve more over time. An eval set gives a stable baseline that does not drift with reviewer fatigue.

## How to build a first eval

An illustrative example: a mid-size services firm wants an assistant to draft pre-meeting account briefs.

1. **Pick one task and define success.** "The brief states the correct open opportunity, the last contact date and the next step, with no facts absent from the CRM."
2. **Collect 30 to 50 real cases.** Use past meetings, including awkward ones: empty records, conflicting notes, a recent change of contact.
3. **Write the expected answer or rubric** for each case. Have the person who owns the process agree it.
4. **Choose scoring.** Code checks for the date and opportunity name; a model grader with a pass-or-fail rubric for invented facts; a human spot-check of 10%.
5. **Run and record a baseline.** Rerun on every prompt change, model upgrade or vendor switch.

Keep the eval set in your own records, not inside a vendor tool. It is the asset that lets you switch models without starting over.

## lowob takeaways

- **Evals replace impressions with scores.** A fixed set of real cases makes quality measurable.
- **Build custom, not benchmark.** Your tasks and failure modes are what matter.
- **Validate model graders.** Check them against people before trusting them at scale.
- **Own the eval set.** It is what lets you change model or vendor safely.

## Common questions

### What are evals in AI?

Evals are structured tests that run an AI system on a set of example inputs and score the outputs against agreed criteria, so quality can be measured and compared over time.

### What is the difference between an AI benchmark and an eval?

A benchmark is a public, shared test used to compare models. An eval in practice usually means a custom test built on your own tasks and data.

### What is LLM-as-a-judge?

It means using one language model to grade another's output against a rubric. It scales well, but OpenAI notes biases toward answer order and length, so validate it against human grading.

### How many examples does an AI eval need?

Enough to cover the real variety of inputs, including edge cases. Many teams start with 30 to 50 cases and grow the set as new failures appear in production.

## Sources and notes

- [OpenAI, Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), accessed November 2026. Vendor guidance.
- [Anthropic, Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests), accessed November 2026. Vendor guidance; the sentiment example is Anthropic's own.
- [UK AI Security Institute, Inspect](https://inspect.aisi.org.uk), accessed November 2026. Government-backed open-source framework.
- The account brief example and the link to autonomy levels are **lowob**'s illustration and working method.

## Related research

- [Approval Rate Measures Fatigue Too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)

## Next move

Choose the one AI task your team relies on most and write down 30 past cases with the output you would have accepted. Score your current setup against them and keep the result as a baseline.

[Start a conversation](https://lowob.com/contact/)
