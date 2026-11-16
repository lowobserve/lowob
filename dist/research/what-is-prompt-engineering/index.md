# What Is Prompt Engineering?

Source: https://lowob.com/research/what-is-prompt-engineering/
Publisher: lowob (https://lowob.com)
Published: 2026-09-21 · Updated: 2026-11-16
Function: Strategy

> Summary: Prompt engineering is the practice of writing, structuring and testing the instructions an AI model works from. Research shows formatting alone can move accuracy by up to 76 points, so a prompt is only as reliable as the tests run against it. It fixes wording and format; facts, permissions and rules belong in context and code.

Prompt engineering is the practice of writing, structuring and testing the instructions an AI model works from, so that its output is accurate, consistent and in the format a team needs. It covers the role, the task, the examples, the order of material and the output format. Small wording and formatting changes can move results a long way, so a prompt is only as good as the tests run against it. It is one part of context engineering, which decides everything else the model sees.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What prompt engineering means

A prompt is everything written to the model for a task: the standing instructions in the [system prompt](https://lowob.com/research/what-is-a-system-prompt/), the request, any examples and the answer format. Prompt engineering is the work of making that text reliable. It is closer to writing a procedure for a new hire than to finding magic words. Anthropic's documentation suggests thinking of the model as "a brilliant but new employee who lacks context on your norms and workflows". Its test is simple: show the prompt to a colleague with little context on the task. If they would be confused, the model will be too.

Schulhoff and colleagues' Prompt Report, first posted in June 2024, catalogued 58 text-based prompting techniques. Most business use relies on a handful.

| Technique | What it does | Commercial example |
| --- | --- | --- |
| Role | Sets who the model is acting as | "You draft renewal summaries for account managers" |
| Task and reason | States the job and why each rule exists | "Under 150 words, because it is read on a phone before the call" |
| Examples | Shows three to five worked input and output pairs | Three past call notes, each with the summary it should produce |
| Tagged structure | Separates instructions, context and input | Contract in one tagged block, notes in another, instructions last |
| Long material first | Puts documents above the question | Contract text, then "List the renewal terms" |
| Step-by-step reasoning | Asks the model to work through a problem before answering | Check a proposed discount against each pricing rule in turn |
| Output format | Specifies fields or a schema | Account, risk level and next step as fixed fields; see [structured output](https://lowob.com/research/what-is-structured-output/) |

## Why it matters for a commercial team

Prompts are more fragile than they look. Sclar and colleagues changed only how few-shot prompts were formatted, such as separators, spacing and casing, and left the content alone. On LLaMA-2-13B, accuracy varied by up to 76 points across formats. The sensitivity persisted with larger models, more examples and instruction tuning. The best format for one model only weakly predicted the best format for another.

So a prompt that worked last quarter may behave differently after the provider updates the model, and one copied between tools may not transfer. OpenAI's guidance is to pin production applications to specific model snapshots and to build tests that "measure prompt behavior so you can monitor performance as you iterate".

Model type matters as well. OpenAI's guide says [reasoning models](https://lowob.com/research/what-is-a-reasoning-model/) do better with high-level goals, while standard models "benefit from more explicit instructions".

Prompt engineering also has limits. Anthropic notes that not every failing test is best fixed with a better prompt: latency and cost are often improved more easily by choosing a different model. Wrong facts are usually a context problem, because the model was never shown the right record. That is the territory of [context engineering](https://lowob.com/research/what-is-context-engineering/), and our comparison of [prompt engineering and context engineering](https://lowob.com/research/prompt-engineering-vs-context-engineering/) sets out the boundary. Rules that must hold, such as discount limits, belong in code and permissions, not in wording a model may ignore.

In **lowob**'s model of the enterprise brain, the prompt sits with the parts a firm owns. Rent the model; own the instructions, the examples and the precedents they draw on.

## How to start: treat a prompt like a procedure

1. Write the success criteria first. For a renewal summary: names the renewal date, flags open issues, stays under 150 words, invents no figures.
2. Collect 20 to 30 real cases with known good outputs. This becomes the test set; our explainer on [AI evals](https://lowob.com/research/what-are-ai-evals/) covers the method.
3. Draft the prompt with a role, the task, the reasons behind each rule and three to five examples.
4. Run the test set, score it and change one thing at a time.
5. Version the prompt with a named owner, and rerun the tests whenever the prompt or the model changes.

Two common mistakes are worth naming. Anthropic advises saying what to do rather than only what to avoid: "write in short paragraphs" works better than "no bullet points". And one long prompt covering every case is harder to test than one prompt per task, chained where needed.

## lowob takeaways

- **A prompt is a procedure.** Write it for a capable new hire who has no context.
- **Formatting alone moves results.** Test across real cases, not one run.
- **Pin the model and retest.** Model updates change how a prompt behaves.
- **Prompts do not enforce rules.** Permissions and limits live in code.

## Sources and notes

- [Anthropic, Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview), accessed November 2026. Vendor documentation.
- [Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), accessed November 2026. Vendor documentation; the 30% figure comes from Anthropic's own tests.
- [OpenAI, Prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering), accessed November 2026. Vendor documentation; advice is written for OpenAI's models.
- [Sclar, Choi, Tsvetkov and Suhr, Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design](https://arxiv.org/abs/2310.11324v2), October 2023, revised July 2024. Academic study of open-source models; effect sizes vary by model and task.
- [Schulhoff et al., The Prompt Report: A Systematic Survey of Prompting Techniques](https://arxiv.org/abs/2406.06608v6), June 2024, revised February 2025. Academic survey; a taxonomy, not a ranking of what works best.

## Related research

- [What Is a System Prompt?](https://lowob.com/research/what-is-a-system-prompt/)
- [What Is Context Engineering?](https://lowob.com/research/what-is-context-engineering/)
- [Prompt Engineering vs Context Engineering](https://lowob.com/research/prompt-engineering-vs-context-engineering/)
- [What Are AI Evals?](https://lowob.com/research/what-are-ai-evals/)

## Next move

Pick one prompt your team uses every week, write four success criteria for it and run it against ten real past cases. Fix the worst failure first, and record the change with its owner and date.

[Start a conversation](https://lowob.com/contact/)
