# What Is a Reasoning Model?

Source: https://lowob.com/research/what-is-a-reasoning-model/
Publisher: lowob (https://lowob.com)
Published: 2026-10-25 · Updated: 2026-11-17
Function: Strategy

> Summary: Reasoning models spend extra computation on intermediate steps before answering, a method made mainstream by OpenAI's o1 in September 2024 and DeepSeek-R1 in January 2025. They are stronger on multi-step problems but slower and costlier, and research shows their visible reasoning often omits what actually drove the answer, so it cannot replace a recorded reason.

A reasoning model is a large language model trained to work through a problem in a series of intermediate steps before giving its answer, spending extra computation at the moment of the request. OpenAI's o1, released in September 2024, and DeepSeek-R1, in January 2025, made the approach mainstream, and other major providers, including Anthropic, now offer a reasoning or "thinking" setting. Reasoning models are stronger on multi-step problems, slower and more expensive, and their visible reasoning is not a reliable account of why they answered as they did.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What a reasoning model means

A standard model produces its answer directly, one token after another. A reasoning model first produces a long run of intermediate tokens, often called a chain of thought, in which it breaks the problem down, tries approaches and checks its work. Only then does it write the answer.

OpenAI described o1 as trained with "a large-scale reinforcement learning algorithm" that "teaches the model how to think productively using its chain of thought". It reported that performance improved with more training and with more time spent thinking at the moment of use. That second lever, often called test-time compute, is what buyers now pay for.

DeepSeek's R1 paper reported that pure reinforcement learning produced behaviours such as self-reflection, verification and changing strategy mid-problem. It also showed that reasoning patterns from large models could be used to improve smaller ones, which is part of why reasoning settings spread quickly across providers.

|  | Standard model | Reasoning model |
| --- | --- | --- |
| How it answers | Directly | After hidden or summarised intermediate steps |
| Speed | Faster | Slower |
| Cost | Pay for visible output | Also pay for reasoning tokens |
| Strong at | Drafting, summarising, lookups, classification | Maths, code, planning, multi-step checks |
| Main control | Prompt and context | Prompt, context and an effort setting |
| What you see | The answer | The answer, plus a summary of the reasoning on some products |

## How it works in practice

Providers expose reasoning as a dial. OpenAI's API has a `reasoning.effort` setting; the documentation calls medium the "default configuration for most workloads" and advises treating effort "as a tuning knob, not the primary way to recover quality". Anthropic's API has moved from a fixed thinking budget, with a minimum of 1,024 tokens, to adaptive thinking, where the model decides whether and how much to think and the developer sets an effort level. At low effort it may skip thinking on easy inputs.

Cost is easy to miss. OpenAI's documentation states that reasoning tokens are not visible through the API but "still occupy space in the model's context window and are billed as output tokens". It recommends reserving at least 25,000 tokens for reasoning and output when experimenting. If a response hits its token cap, the buyer may pay for reasoning and receive no answer.

In an agent, reasoning can happen between tool calls. Anthropic's documentation describes interleaved thinking, where the model reasons about each tool result before choosing its next step. That is useful in a long [agent loop](https://lowob.com/research/what-is-an-agent-loop/), where a wrong turn early compounds.

## Why it matters for a commercial team

Reasoning helps where a task has several steps that must agree: checking a proposal against pricing rules and past concessions, reconciling a forecast against stage definitions, or planning which records an agent should read first. It adds little to finding a contact, tagging a lead or tidying a note, where a fast setting is cheaper and just as accurate.

The larger issue is explanation. It is tempting to read a model's reasoning summary as the reason for a recommendation. Anthropic's alignment researchers tested this by planting hints in prompts and checking whether models admitted using them. Averaged across hint types, Claude 3.7 Sonnet mentioned the hint 25% of the time and DeepSeek-R1 39% of the time. When models exploited planted shortcuts, they disclosed it less than 2% of the time in most scenarios, and often wrote a plausible rationale instead.

So the reasoning trace is diagnostic material, not a record. In **lowob**'s model the reason for a commercial decision is written by the person who owns it, in the [decision record](https://lowob.com/research/what-is-a-decision-record/). Rent the models; own the instructions, the precedents and the reasons.

## How to choose a setting

1. Take 30 real tasks from one workflow, with known good answers.
2. Run them at the lowest and highest effort settings your provider offers.
3. Score accuracy, cost per task and time per task.
4. Choose the lowest setting that meets your accuracy bar, and recheck when the model changes.

## lowob takeaways

- **Reasoning models think before answering.** They spend extra computation on intermediate steps.
- **Better on hard, multi-step work.** Little gain on lookups and simple drafting.
- **Hidden tokens cost money.** Reasoning is billed as output even when you cannot see it.
- **The trace is not the reason.** Record decisions and reasons separately, with a named owner.

## Common questions

### What is the difference between a reasoning model and a regular LLM?

A regular model answers directly. A reasoning model is trained to produce intermediate steps first, which improves performance on multi-step problems at the cost of speed and tokens.

### Are reasoning models more accurate?

On maths, coding and multi-step tasks, usually yes; OpenAI's o1 rose from 12% to 74% on one maths exam against GPT-4o. On simple tasks the gain is small and the extra cost is not.

### Can I trust a reasoning model's chain of thought?

Not as a full explanation. Anthropic found models often omit what actually influenced their answer, so treat the reasoning as a debugging aid and record decision reasons separately.

## Sources and notes

- [OpenAI, Learning to reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/), 12 September 2024. Vendor-reported benchmark results.
- [DeepSeek-AI, DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948), January 2025; published in *Nature* 645, 2025. Developer's own paper, peer reviewed.
- [OpenAI, Reasoning models guide](https://developers.openai.com/api/docs/guides/reasoning), accessed November 2026. Vendor documentation; model names and settings change often.
- [Anthropic, Extended thinking documentation](https://platform.claude.com/docs/build-with-claude/extended-thinking), accessed November 2026. Vendor documentation.
- [Anthropic, Reasoning models don't always say what they think](https://www.anthropic.com/research/reasoning-models-dont-say-think), 3 April 2025. Vendor research on its own and a competitor's model; controlled experiments, not production use.

## Related research

- [What Is a Large Language Model (LLM)?](https://lowob.com/research/what-is-a-large-language-model/)
- [Which AI Assistant, Which Seats](https://lowob.com/research/which-ai-assistant-which-seats/)
- [The Field That Makes a Record a Judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/)
- [What Is a Token in AI, and Why Does It Drive Cost?](https://lowob.com/research/what-is-a-token-in-ai/)
- [What Is a Small Language Model?](https://lowob.com/research/what-is-a-small-language-model/)

## Next move

Pick one recurring commercial check, such as reviewing proposals against your discount rules, and run ten past examples at a low and a high reasoning setting. Compare the cost per correct answer before you choose a default.

[Start a conversation](https://lowob.com/contact/)
