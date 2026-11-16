# Prompt Engineering vs Context Engineering

Source: https://lowob.com/research/prompt-engineering-vs-context-engineering/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Prompt engineering is the craft of writing and structuring instructions for a model. Context engineering is the wider job of deciding what the model sees at every step: instructions, retrieved records, tool results and history. Prompting fixes format and tone; context fixes accuracy. For agents and commercial work, context is usually the bigger lever.

Prompt engineering is the practice of writing and structuring a model's instructions so its output meets a requirement. Context engineering is the wider practice of choosing everything the model sees at each step: instructions, retrieved documents and records, tool results and conversation history. Prompting mostly fixes format, tone and task framing. Context mostly fixes accuracy. A well-written prompt cannot rescue a model that was handed the wrong facts.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What the two terms mean

[Prompt engineering](https://lowob.com/research/what-is-prompt-engineering/) is about the instructions. OpenAI's guide lists its main techniques: separating developer instructions from user input, marking sections with Markdown or XML tags, giving a few input and output examples, and pinning production apps to a dated model snapshot so behaviour does not shift underneath them. Anthropic's guide lists clarity, examples, XML structure, role prompting and prompt chaining. The work product is a template.

[Context engineering](https://lowob.com/research/what-is-context-engineering/) is about the whole state the model works from. Anthropic's September 2025 engineering post defines it as "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference." The guiding principle is to find the "smallest possible set of high-signal tokens" that makes the desired outcome likely. For an agent that runs many steps, that state changes at every step, so the work is continuous.

The two are nested rather than opposed. Anthropic describes prompt engineering as "methods for writing and organizing LLM instructions" and treats it as one part of the larger job. Even OpenAI's prompt guide crosses the line: it recommends adding proprietary data to the prompt through retrieval, which is a context decision.

|  | Prompt engineering | Context engineering |
| --- | --- | --- |
| Question it answers | How should the instruction be written? | What should the model see at this step? |
| Main inputs | Instructions, examples, output format | Instructions plus retrieved records, tool results, history, memory |
| Done | Once per template, then revised | At every step of a task |
| Who does it | Whoever owns the use case | Use-case owner with data and systems owners |
| Fixes | Format, tone, structure, task framing | Accuracy, relevance, currency of facts |
| Typical failure | Ambiguous instruction, inconsistent format | Missing, stale or irrelevant data in the window |
| Typical tools | Templates, few-shot examples, a [system prompt](https://lowob.com/research/what-is-a-system-prompt/) | Retrieval, connectors, compaction, notes, sub-agents |
| Scales with | Model capability | Data quality and permissions |

## Why context became the bigger lever

The shift came with agents. An agent calls tools and accumulates history across many steps, so the material entering its window grows with every step, and most of it was never written by the person who wrote the prompt.

More material does not help on its own. Chroma's research team tested 18 models in 2025 and found that "model performance consistently degrades with increasing input length," even on simple tasks. "Even a single distractor reduces performance relative to the baseline." Anthropic calls this context rot and describes a model's attention as a finite budget. A larger [context window](https://lowob.com/research/what-is-a-context-window/) raises the ceiling but does not remove the need to choose.

That is why Anthropic's techniques for long-running agents are context techniques, not wording techniques:

- **Just-in-time retrieval:** keep lightweight references, such as record IDs, and load the data only when it is needed.
- **Compaction:** summarise a long session and continue in a fresh window with the summary.
- **Structured notes:** write notes outside the window and read them back later.
- **Sub-agents:** delegate focused work to agents with clean context that return condensed results.

None of these change how the instruction is phrased. All of them change what the model reads.

## Which one your problem needs

Diagnose the failure before choosing the fix. Anthropic's prompting guide makes the same point: start with "a clear definition of the success criteria" and "some ways to empirically test against those criteria."

| Symptom | Likely cause | Fix with |
| --- | --- | --- |
| Right facts, wrong format or tone | Instruction | Prompt: examples and an explicit output format |
| Ignores part of the instruction | Instruction buried or ambiguous | Prompt: separate sections, put the rule first |
| States an outdated price or owner | Stale data in context | Context: retrieve from the system of record |
| Contradicts what was agreed last month | Decision missing from context | Context: include decision records for the account |
| Good on short tasks, worse on long ones | Context rot | Context: compaction, notes, sub-agents |
| Different answers for different users on the same question | Different data or definitions reached the model | Context: shared definitions and [permission-aware retrieval](https://lowob.com/research/what-is-permission-aware-retrieval/) |
| Too slow or too costly | Model or volume | Neither first; try a different model, as Anthropic suggests |

Three mistakes recur on commercial teams:

- **Prompt libraries as strategy.** A shared folder of clever prompts helps with format. It does nothing about a CRM full of stale fields.
- **Connecting everything.** Giving an assistant every system and letting it sort them out fills the window with distractors.
- **No test set.** Without twenty real questions and agreed good answers, neither prompt nor context changes can be judged.

## The **lowob** view

In **lowob**'s enterprise brain loop of store, wiring, record, reasoning and learning, prompt engineering belongs to reasoning. It shapes how the model works on what it is given. Context engineering is the wiring: it decides which slice of the store and the record reaches the model for each task. Rent the tooling for both, but own the choices about what each task should see.

The highest-value context on the commercial line is usually the decision record: what was agreed, by whom, why and with what expected outcome. A model that sees it will not reopen settled questions or quote a superseded discount. A model that does not see it will, however good the prompt.

## lowob takeaways

- **Prompts shape the output; context decides its accuracy.** Fix wording problems with prompts and fact problems with context.
- **Context is nested around the prompt.** The instruction is one input among the records, tool results and history the model reads.
- **Less, chosen well, beats more.** Accuracy falls as irrelevant material grows, even in large windows.
- **Test before tuning either.** Written success criteria and a small question set come first.

## Sources and notes

- [OpenAI, Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering), accessed November 2026. Vendor documentation; techniques are tuned to OpenAI's own models.
- [Anthropic, Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview), accessed November 2026. Vendor documentation.
- [Anthropic, Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 29 September 2025. Vendor engineering guidance.
- [Chroma, Context rot: how increasing input tokens impacts LLM performance](https://www.trychroma.com/research/context-rot), 14 July 2025. Vendor research; Chroma sells retrieval infrastructure.
- The symptom table, common mistakes and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is Context Engineering?](https://lowob.com/research/what-is-context-engineering/)
- [What Is Prompt Engineering?](https://lowob.com/research/what-is-prompt-engineering/)
- [A Loop With Good Context](https://lowob.com/research/a-loop-with-good-context/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)

## Next move

Take the last ten bad answers your team got from an assistant and sort them into two piles: wrong format or tone, and wrong facts. If the second pile is bigger, stop editing prompts and list the records each task should read.

[Start a conversation](https://lowob.com/contact/)
