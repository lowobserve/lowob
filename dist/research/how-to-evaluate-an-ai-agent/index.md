# How to Evaluate an AI Agent: Tests, Metrics and Graders

Source: https://lowob.com/research/how-to-evaluate-an-ai-agent/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: Evaluating an AI agent means testing a multi-step system that acts, not a single answer. The method is a fixed set of real tasks, several trials per task, graders matched to what is being checked, and metrics that capture consistency as well as success. This guide sets out the tests, metrics and graders, with dated guidance from Anthropic, OpenAI, LangChain and Langfuse.

To evaluate an AI agent, run it many times on a fixed set of 20 to 50 real tasks, grade the final outcome and key steps with code, model and human graders, and track both the pass rate and how consistently it passes. Agents fail differently from single model calls: a run can look fluent and still leave the system in the wrong state. Consistency across repeated trials is the number most teams forget to measure.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

This guide covers agents in particular. For the basics of evals see [what AI evals are](https://lowob.com/research/what-are-ai-evals/), and for the tools that run them see our ranking of the [top 5 LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/).

## What does evaluating an AI agent involve?

It means running the agent on defined tasks, recording everything it did, and scoring the result against agreed success criteria. The unit is the task, attempted several times, not the single prompt.

Anthropic's January 2026 guide gives a usable vocabulary. A task is "a single test with defined inputs and success criteria", and each attempt is a trial. A grader is "logic that scores some aspect of the agent's performance". The transcript, or trace, is the full record of a trial. The outcome is "the final state in the environment at the end of the trial".

## How is evaluating an agent different from evaluating a model?

An agent acts over several steps and changes things, so the right answer is a state, not a sentence. A model eval asks whether a reply is good; an agent eval asks whether the refund was issued, the record updated and the policy followed.

The τ-bench benchmark, published by Yao and colleagues in June 2024, shows the method. A simulated user talks to an agent that has domain tools and policy rules, and the score compares the database at the end of the conversation with the annotated goal state. Its headline finding is the reason to test repeatedly: even state-of-the-art agents succeeded on fewer than half of tasks and were "quite inconsistent", with `pass^8` under 25% in retail.

OpenAI's evaluation guide, read in November 2026, adds two agent checks: correct tool selection and, in multi-agent systems, correct handoffs.

## What should you measure when evaluating an agent?

Measure task success first, then consistency, then the cost of getting there. The table sets out the metrics that matter and how each is usually graded.

| Metric | What it measures | Typical grader | Why it matters |
| --- | --- | --- | --- |
| Task success | Did the final state match the goal? | Code: compare records, files or API state | The only metric the business cares about directly |
| `pass^k` consistency | Did all k trials of the same task succeed? | Code, over repeated runs | Shows whether success is reliable or lucky |
| Tool selection | Did it call the right tool with valid arguments? | Code on the trace | Most agent errors start at a tool step |
| Policy adherence | Did it follow rules, limits and approval steps? | Code for hard rules; model for judgment | A correct outcome reached by breaking policy is a failure |
| Groundedness | Are stated facts present in the sources it used? | Model grader with a rubric | Catches invented facts in drafts and summaries |
| Cost per task | Tokens and calls per completed task | Code on token metrics | Two agents with equal success can differ widely in cost |
| Turns and latency | Steps and time to finish | Code on the trace | Long loops signal confusion before they signal failure |
| Escalation rate | How often it hands to a person | Code on the trace | Too low can mean overconfidence; too high, no value |

Anthropic's guide also separates capability evals, which should start at a low pass rate, from regression evals, which "should have a nearly 100% pass rate". Report them separately.

## How many test cases does an agent eval need?

Start with 20 to 50 tasks taken from real work and real failures, as Anthropic recommended in January 2026. Grow the set each time production shows a new failure.

LangChain's LangSmith documentation, read in November 2026, suggests 5 to 10 curated examples for each critical component, such as retrieval, tool calls and final outputs. The two fit together: component sets catch step faults, and end-to-end tasks catch failures that appear only when steps combine. Include awkward cases on purpose, such as missing records or a tool that times out.

## Which graders should you use for an agent?

Use code wherever the answer can be checked mechanically, a model grader where judgment is needed, and people to calibrate both. Anthropic's guide describes code graders as fast, cheap and reproducible but "brittle to valid variations"; model graders as flexible but non-deterministic and needing calibration; and human graders as the gold standard but slow and expensive.

The same guide advises that "it's often better to grade what the agent produced, not the path it took". Checking for an exact sequence of steps punishes an agent that found a valid alternative route. Grade the path only where the path is the rule, such as an approval that must happen before a payment. Model graders bring their own biases, covered in our explainer on [LLM-as-a-judge](https://lowob.com/research/llm-as-a-judge-explained/).

> An agent that passes once is a demo. An agent that passes eight times in a row on the same task is a candidate for production.

## How do you run agent evals in practice?

Run them offline before each release and online on a sample of production traffic. Both major open tools describe the same split.

Langfuse's documentation, read on 16 November 2026, defines offline evaluation as running the application on a predefined dataset before release, and online evaluation as scoring "live incoming traces". It offers a GitHub Action that fails a build when a score drops below a threshold. LangSmith's documentation draws the same line: offline evaluation targets "examples from datasets", online evaluation targets "runs and threads from tracing" without reference answers.

A workable routine: write success criteria per task with the process owner; run each task at least three times per release and report `pass^k`; gate releases on the regression set; sample production runs for online scoring and human review. Then read transcripts. Anthropic's guide warns that "you won't know if your graders are working well unless you read the transcripts".

In **lowob**'s model, eval results are the evidence for moving an agent along the [autonomy dial](https://lowob.com/research/what-is-an-ai-autonomy-level/), from drafting to acting with approval, for example. Store the results in a record the business owns, not only in the vendor tool.

## lowob takeaways

- **Grade the outcome.** The final state of the system matters more than the wording of the reply.
- **Measure consistency.** Report `pass^k` across repeated trials, not only a single pass rate.
- **Separate capability from regression.** Regression sets should pass at close to 100%.
- **Calibrate graders against people.** Read transcripts before trusting any automated score.

## Common questions

### How do you evaluate an AI agent?

Build a fixed set of real tasks with agreed success criteria, run the agent on each several times, and grade the final outcome with code where possible and model or human graders where judgment is needed. Track task success, consistency across trials, tool selection, policy adherence and cost per task, and rerun the set on every change.

### What is the difference between pass@k and pass^k?

`pass@k` is the chance that at least one of k attempts at a task succeeds, which suits tools where a person picks the best attempt. `pass^k` is the chance that all k attempts succeed, which measures reliability. For an agent that acts without a person choosing, `pass^k` is the more honest number.

### How many test cases do you need to evaluate an AI agent?

Anthropic's January 2026 guidance says 20 to 50 simple tasks drawn from real failures is a good start. LangChain suggests 5 to 10 curated examples per critical component. Start small, include awkward edge cases, and add a task each time production reveals a new failure.

### What metrics should you use to evaluate AI agents?

Track task success against the goal state, consistency across repeated trials, correct tool selection, adherence to policy and approval rules, groundedness of stated facts, cost per completed task, number of turns and escalation rate. Keep capability and regression results separate so a rising capability score cannot hide a slipping regression score.

## Sources and notes

- [Anthropic, Demystifying evals for AI agents](https://anthropic.com/engineering/demystifying-evals-for-ai-agents), 9 January 2026. Model vendor's engineering guidance.
- [Yao et al., τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045v1), arXiv, 17 June 2024. Academic benchmark; results are for models available in mid-2024.
- [OpenAI, Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), accessed 16 November 2026. Model vendor guidance.
- [LangChain, LangSmith evaluation concepts](https://docs.langchain.com/langsmith/evaluation-concepts), accessed 16 November 2026. Vendor documentation.
- [Langfuse, Evaluation overview](https://langfuse.com/docs/evaluation/overview.md), accessed 16 November 2026. Vendor documentation.
- The metrics table and the release routine are **lowob**'s synthesis of the sources above.

## Related research

- [Top 5 LLM Observability and Evaluation Platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/)
- [What Are AI Evals?](https://lowob.com/research/what-are-ai-evals/)
- [LLM-as-a-Judge Explained: When Model Graders Work and When They Fail](https://lowob.com/research/llm-as-a-judge-explained/)
- [What Is an AI Autonomy Level?](https://lowob.com/research/what-is-an-ai-autonomy-level/)
- [AI Agent Monitoring Checklist: What to Watch in Production](https://lowob.com/research/ai-agent-monitoring-checklist/)

## Next move

Pick one agent and write 20 tasks from last month's real cases, each with the end state you would accept. Run each task three times and record how many pass all three.

[Start a conversation](https://lowob.com/contact/)
