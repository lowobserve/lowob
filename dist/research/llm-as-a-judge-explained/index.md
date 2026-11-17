# LLM-as-a-Judge Explained: When Model Graders Work and When They Fail

Source: https://lowob.com/research/llm-as-a-judge-explained/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: LLM-as-a-judge is the use of a language model to grade AI outputs against a rubric. Research shows strong judges can agree with people about as often as people agree with each other, and also documents position, verbosity, self-preference and leniency biases. This guide sets out when model graders work, when they fail, what they cost and how to check them.

LLM-as-a-judge is the practice of using one language model to score another model's output against a written rubric; strong judges matched human preferences over 80% of the time in a 2023 study, but they show position, length and self-preference biases. Model graders work well for narrow, well-specified checks with constrained answers. They fail when the rubric is vague, the stakes are high or the judge is grading its own work.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

Model graders are how most observability tools score traces at scale, so the platforms in our [top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/) all offer them. For evals in general, see [what AI evals are](https://lowob.com/research/what-are-ai-evals/).

## What is LLM-as-a-judge?

It is an automated grader built from a prompt. Langfuse's documentation, read on 16 November 2026, defines it as a method where "an LLM is used to assess the quality of outputs produced by another LLM application". The judge receives a rubric, the input, the output and optionally a reference answer, and returns a score with its reasoning.

OpenAI's evaluation guide, read in November 2026, describes two forms: pairwise comparison, where the judge picks the better of two responses, and single-answer grading, where it scores one response in isolation.

## How accurate are LLM judges?

On broad preference tasks, the strongest judges agree with people about as often as people agree with each other. On narrower scoring tasks, agreement varies widely by model and can hide large score gaps.

The founding result comes from Zheng and colleagues, first submitted on 9 June 2023. Using the MT-Bench question set and Chatbot Arena votes, they found GPT-4 as a judge reached "over 80% agreement, the same level of agreement between humans". Their task was choosing between chat answers.

A later study is less reassuring. Thakur and colleagues, first submitted on 18 June 2024, tested 13 judge models on answers from 9 exam-taker models. They found "only the best (and largest) models achieve reasonable alignment with humans", and even those fell well short of agreement between people. Scores could differ from human scores by up to 5 points. Their warning for buyers is direct: "judges with high percent agreement can still assign vastly different scores".

## What biases do LLM judges have?

Four are well documented: position, length, self-preference and leniency. Each has a known mitigation, and none is fixed by choosing a larger model alone.

| Bias | What happens | Evidence | Mitigation |
| --- | --- | --- | --- |
| Position | The judge favours the answer shown first, or second | Wang et al., May 2023: order changes let Vicuna-13B beat ChatGPT on 66 of 80 queries | Run both orders and combine the results |
| Verbosity | The judge favours longer answers | Zheng et al., 2023; OpenAI's guide, read November 2026 | Control for length; prefer pass or fail criteria |
| Self-preference | The judge scores its own model's outputs higher | Panickssery et al., April 2024 | Use a judge from a different model family |
| Leniency and prompt sensitivity | Scores lean generous and shift with prompt complexity and length | Thakur et al., June 2024 | Fix the rubric, add worked examples, recheck after any prompt edit |

Wang and colleagues proposed fixes for position bias that include averaging across both orders and sending cases where the orders disagree to a person, which targets human review at the cases the judge finds hard.

> A judge is a prompt someone wrote. It earns trust the same way a new reviewer does, by being checked.

## When do model graders work?

They work when the question is narrow, the rubric is specific and the answer is constrained. "Does this brief state a fact that is absent from the CRM record?" is a good judge question. "Is this proposal persuasive?" is not.

OpenAI's guide recommends pairwise comparison or pass or fail grading "for more reliability", and says to scale a judge only once it "consistently agrees with human annotations". Langfuse makes the same point in plainer terms: "A judge is a prompt you wrote, so check that it scores cases the way your reviewers would before you rely on it." Langfuse also advises using a judge model that supports structured output, so scores parse reliably.

A practical calibration routine:

1. **Label 50 to 100 real outputs by hand**, with the process owner agreeing the labels.
2. **Run the judge on the same set** and measure agreement on each label, not only overall.
3. **Read the disagreements** and tighten the rubric, then rerun.
4. **Recheck on a sample each month** and after any change to the judge model or prompt.

## When do LLM judges fail?

They fail on checks that code can do better, on judgments that need context the judge lacks, and wherever nobody checks them. Exact facts such as dates, amounts and record IDs should be checked by code, not by a model.

They also fail in more complex setups. Thakur and colleagues advise "caution when using judges in more complex setups", and Anthropic's agent evaluation guide of 9 January 2026 notes model graders are non-deterministic and need calibration against human graders.

The governance failure is quieter. A judge that is never sampled against people becomes an unverified control, the same problem we describe in [a reviewer who does not verify is not a control](https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/).

## What does an LLM judge cost?

Each judged output is an extra model call, so cost scales with the share of traffic you score. Langfuse's documentation, read on 16 November 2026, puts a typical evaluation at $0.01 to $0.10 per assessment and suggests sampling, targeting specific steps and cheaper judge models to control it.

Some platforms also charge for the scores themselves. Braintrust's pricing page, read on 16 November 2026, includes 50,000 scores on its $249 Pro plan and charges $1.50 per 1,000 after that. As an illustration, scoring every one of 100,000 monthly runs at $0.01 to $0.10 each is $1,000 to $10,000 in judge calls, which is why most teams score a sample. Our [LLM observability pricing comparison](https://lowob.com/research/llm-observability-pricing-compared/) sets out the platform side.

## lowob takeaways

- **Judges can match people on narrow tasks.** Agreement over 80% is a 2023 result for chat preferences, not a general guarantee.
- **The biases are known.** Position, verbosity, self-preference and leniency each need a specific counter.
- **Calibrate before you scale.** Measure agreement with human labels and read the disagreements.
- **Use code for facts.** Reserve model graders for judgment, and sample them against people.

## Common questions

### What is LLM-as-a-judge?

LLM-as-a-judge means using a language model to grade another model's output against a written rubric, sometimes with a reference answer. It returns a score, often with reasoning. Observability and evaluation tools use it to score production traces and experiments at a scale human reviewers cannot match, but it needs checking against human labels.

### How accurate is LLM-as-a-judge?

In a 2023 study by Zheng and colleagues, GPT-4 as a judge agreed with human preferences over 80% of the time, similar to human agreement. A 2024 study of 13 judges found only the best and largest aligned reasonably with humans, with score gaps of up to 5 points. Accuracy depends on the task and rubric.

### What are the biases of LLM judges?

Documented biases include position bias, favouring an answer because of where it appears; verbosity bias, favouring longer answers; self-preference, rating the judge's own model's outputs higher; and leniency. Mitigations include swapping answer order, pass or fail rubrics, a judge from a different model family and regular human sampling.

### How do you validate an LLM judge?

Label a set of real outputs by hand, run the judge on the same set and measure agreement per label. Read every disagreement, tighten the rubric and rerun. OpenAI advises scaling only once the judge consistently agrees with human annotations. Recheck on a sample after any change to the judge model or prompt.

### Should an LLM judge use the same model as the application?

It is safer not to. Panickssery and colleagues found in 2024 that models can recognise their own outputs and tend to score them higher than human raters would. Using a judge from a different model family reduces that self-preference bias, though it does not remove the need for human checks.

## Sources and notes

- [Zheng et al., Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685), arXiv, submitted 9 June 2023. Academic study; agreement figures are for chat preference tasks.
- [Thakur et al., Judging the Judges: Evaluating Alignment and Vulnerabilities in LLMs-as-Judges](https://arxiv.org/abs/2406.12624v6), arXiv, submitted 18 June 2024, revised August 2025. Academic study.
- [Wang et al., Large Language Models are not Fair Evaluators](https://arxiv.org/abs/2305.17926v2), arXiv, submitted 29 May 2023. Academic study of position bias.
- [Panickssery, Bowman and Feng, LLM Evaluators Recognize and Favor Their Own Generations](https://arxiv.org/abs/2404.13076v1), arXiv, submitted 15 April 2024. Academic study of self-preference.
- [OpenAI, Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), accessed 16 November 2026. Model vendor guidance.
- [Langfuse, LLM-as-a-Judge](https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge), accessed 16 November 2026. Vendor documentation; cost range is the vendor's estimate.
- [Anthropic, Demystifying evals for AI agents](https://anthropic.com/engineering/demystifying-evals-for-ai-agents), 9 January 2026. Model vendor's engineering guidance.
- [Braintrust, Pricing](https://braintrust.dev/pricing), accessed 16 November 2026. Vendor pricing page.
- The calibration routine and the 100,000-run cost illustration are **lowob**'s.

## Related research

- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [What Are AI Evals?](https://lowob.com/research/what-are-ai-evals/)
- [How to Evaluate an AI Agent: Tests, Metrics and Graders](https://lowob.com/research/how-to-evaluate-an-ai-agent/)
- [A Reviewer Who Does Not Verify Is Not a Control](https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/)
- [Langfuse vs LangSmith: Which LLM Observability Tool to Choose](https://lowob.com/research/langfuse-vs-langsmith/)

## Next move

Take the model grader you rely on most, hand-label 50 of its recent cases and compare. If agreement on any label is below what you would accept from a new reviewer, rewrite the rubric before scoring more traffic.

[Start a conversation](https://lowob.com/contact/)
