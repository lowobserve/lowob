# What Is Model Drift?

Source: https://lowob.com/research/what-is-model-drift/
Publisher: lowob (https://lowob.com)
Published: 2026-09-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Model drift is the gradual or sudden change in how an AI system performs after it goes live. Classic drift comes from the world changing under a trained model. With hosted language models there is a second cause: the provider changes or retires the model. Both are caught the same way, by re-running fixed tests on a schedule.

Model drift is the change in an AI system's behaviour or accuracy over time after it has been deployed. It has two broad causes. The world can change, so the data a model sees no longer resembles what it was built on. Or the model itself changes, because a provider updates or retires the version you call. Drift is caught by re-running the same tests on a schedule and comparing the results.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What model drift means

In classic machine learning, drift describes a gap opening between the data a model was trained on and the data it now sees. **Data drift** is a change in the inputs: a lead scoring model trained when most buyers came from one industry now sees a different mix. **Concept drift** is a change in what the inputs mean: the signals that used to predict a purchase stop predicting it.

Hosted large language models add a third kind. The model behind an API name can change. Lingjiao Chen, Matei Zaharia and James Zou compared the March and June 2023 versions of GPT-3.5 and GPT-4 across seven task types. On identifying prime versus composite numbers, GPT-4's accuracy dropped from 84% to 51%. The authors found that both models' behaviour changed substantially over that short period, and argued for continuous monitoring of LLM services.

| Type of drift | What changes | Commercial example (illustrative) |
| --- | --- | --- |
| Data drift | The inputs | A new segment brings inbound leads unlike past ones |
| Concept drift | What inputs mean | A pricing change alters which signals predict a win |
| Provider change | The model behind the API | An updated model writes longer, more hedged drafts |
| Context drift | Prompts, documents, definitions | Someone edits the playbook the agent retrieves |
| Retirement | The model stops working | Calls to a retired model version fail |

## Why it matters for a commercial team

### Quiet changes in output

An agent that drafts follow-up emails can start producing drafts that are longer, more formal or less accurate without anyone touching the build. Approvers notice, but often read it as a bad week rather than a change. Approval rates fall slowly and nobody links the fall to a model update. That pattern is why **lowob** treats approval rate as an imperfect signal: it measures reviewer fatigue as well as quality.

### Governance expects it

NIST's generative AI profile (AI 600-1, July 2024) names "GAI system changes over time (e.g., fine-tuning, drift, decay)" among the things organisations should plan for (action GV-6.2-007). It also recommends policies for continuous monitoring of third-party generative AI systems in deployment (GV-6.2-004). For most mid-size firms every model is third-party, so this applies to all of them.

### Retirement is scheduled drift

Providers publish lifecycles. Anthropic's documentation describes four states: active, legacy, deprecated and retired, where requests to retired models fail. It commits to at least 60 days' notice before retiring a publicly released model. For example, its documentation lists `claude-3-7-sonnet-20250219` as retired on 19 February 2026. Every build that names a model version needs an owner who reads those notices.

> A build that nobody changed can still behave differently next month. The test set is how you find out.

## How to detect and manage it

| Control | What it involves | Catches |
| --- | --- | --- |
| Pin versions | Call a dated model snapshot, not a floating alias | Silent provider changes |
| Fixed eval set | 30 to 50 real tasks with expected outcomes, re-run monthly | All five types |
| Change log | Record every prompt, document and model change with a date | Context drift |
| Outcome tracking | Approval, edit and win rates per agent, by week | Gradual degradation |
| Deprecation owner | One person tracks provider lifecycle pages | Retirement |
| Re-test on upgrade | Run the eval set before switching versions | Regressions on upgrade |

The eval set matters most. It turns "the drafts feel worse" into a number you can compare. Keep it small, drawn from real tasks, and stable for at least a quarter so comparisons hold.

For predictive models in the CRM, such as lead or health scores, the same logic applies with a different test: compare the score's predictions with outcomes written back each quarter. If high-scoring leads stop converting at a higher rate than low-scoring ones, the model has drifted and needs retraining or retiring.

## lowob takeaways

- **Two sources.** The world changes, and so does the model behind the API.
- **Pin and test.** A dated model version plus a fixed eval set catches most drift.
- **Log your own changes.** Prompts and documents drift too, and leave no trace unless recorded.
- **Own the lifecycle.** Someone must read provider deprecation notices before calls start failing.

## Sources and notes

- [Chen, Zaharia and Zou, How Is ChatGPT's Behavior Changing over Time?](https://arxiv.org/abs/2307.09009v2), arXiv, July 2023. Academic study of 2023 model versions; specific figures will not hold for current models.
- [NIST, AI 600-1: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024. Voluntary US government guidance.
- [Anthropic, Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations). Vendor documentation; other providers set different notice periods.

## Related research

- [What Are AI Evals?](https://lowob.com/research/what-are-ai-evals/)
- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)
- [Approval Rate Measures Fatigue Too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [What Is Outcome Write-Back?](https://lowob.com/research/what-is-outcome-write-back/)

## Next move

Check which model version each of your AI tools or agents calls, and whether it is pinned. Write down the provider's retirement date for each, and the name of the person who will act on it.

[Start a conversation](https://lowob.com/contact/)
