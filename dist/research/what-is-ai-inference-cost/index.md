# What Is AI Inference Cost?

Source: https://lowob.com/research/what-is-ai-inference-cost/
Publisher: lowob (https://lowob.com)
Published: 2026-09-16 · Updated: 2026-11-16
Function: Revenue

> Summary: Inference cost is the running cost of using an AI model, billed per million input and output tokens plus caching, tool and regional charges. Unit prices for a given level of performance have fallen between 9 and 900 times a year, but agents and reasoning multiply tokens per task. The measure that matters is cost per successful task.

AI inference cost is what it costs to run a trained model each time it is used: to read a request and produce an answer. For API users it appears as a price per million input and output tokens, plus charges for caching, tools, processing tier and regional processing. For self-hosted models it is hardware, energy and staff. Unit prices have fallen fast, but agents, reasoning and long context raise the tokens used per task, so total spend often rises.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What AI inference cost means

Training builds a model; inference uses it, on every draft and every agent step.

For most firms the bill arrives through an API priced per million [tokens](https://lowob.com/research/what-is-a-token-in-ai/), with separate rates for input, the text the model reads, and output, the text it writes. On Anthropic's pricing page, accessed 16 November 2026, Claude Sonnet 5.5 is listed at $2 per million input tokens and $10 per million output. Claude Haiku 5.5 is listed at $0.10 and $0.50 for prompts up to 100,000 tokens.

The per-token rate is only one line of the bill.

| Cost component | What drives it | From provider pages, accessed 16 November 2026 |
| --- | --- | --- |
| Input tokens | Instructions, documents, history, tool definitions | Charged on every call, including each re-read |
| Output tokens | Length of the answer | Five times input on Anthropic's main models |
| Reasoning tokens | Thinking before answering | Billed as output; see [reasoning models](https://lowob.com/research/what-is-a-reasoning-model/) |
| Cached input | A repeated prompt prefix | Anthropic cache reads at 0.1 times input on most models; OpenAI lists a separate cached-input rate |
| Tool overhead | Tool definitions and server tools | Anthropic adds 286 to 406 system tokens when tools are used on its 5.5 models; web search $10 per 1,000 searches |
| Processing tier | Batch, standard or faster service | Anthropic Batch API 50% off; OpenAI's tables price Batch below Standard and Fast above it |
| Regional processing | Data residency | Anthropic 1.1 times for US-only inference; OpenAI 10% uplift on regional endpoints for newer models |

For self-hosted [open-weight models](https://lowob.com/research/what-is-an-open-weight-model/), per-token fees give way to hardware, energy and engineering time.

## Why unit prices fall while bills rise

Stanford's AI Index reports that querying a model at GPT-3.5's level, 64.8% on the MMLU benchmark, cost $20 per million tokens in November 2022 and $0.07 by October 2024, a more than 280-fold fall. Epoch AI, tracking six benchmarks over three years, found declines of 9 to 900 times a year depending on task and performance level. It cautioned that "it's less clear" the fastest recent drops "will persist".

Meanwhile usage per task is rising, for three reasons.

**Agents re-read context.** Each step in an [agent loop](https://lowob.com/research/what-is-an-agent-loop/) sends the instructions, tool definitions and history again. Anthropic's engineering team reported in June 2025 that agents typically used about 4 times more tokens than chat interactions, and multi-agent systems about 15 times. On its browsing evaluation, token usage alone explained 80% of the variance in performance. More spend often bought better results, so cost has to be judged against value.

**Reasoning is billed as output.** Reasoning settings can spend thousands of hidden tokens before an answer appears, at the more expensive rate.

**Context grows.** Account histories pasted into every call raise input cost at every step; [context engineering](https://lowob.com/research/what-is-context-engineering/) is partly a cost discipline.

A worked example, illustrative, on Anthropic's 16 November 2026 list prices. A nightly CRM hygiene job checks 2,000 records, reading 3,000 tokens and writing 200 for each. That is 6 million input and 400,000 output tokens a night. On Haiku 5.5 it costs about $0.80, or $0.40 through the Batch API. On Sonnet 5.5 it costs about $16, or $8 batched. The larger model is twenty times dearer for the same job, so model choice outweighs every other lever, provided the smaller one passes your accuracy test.

In **lowob**'s model, inference is the rented part of the brain. The owned part is the measure: cost per successful task, set beside what the task is worth.

## How to control inference cost

| Lever | When to use it | Watch out for |
| --- | --- | --- |
| Smaller model for routine steps | Classification, extraction, routing | Test accuracy first; see [small language models](https://lowob.com/research/what-is-a-small-language-model/) |
| [Prompt caching](https://lowob.com/research/what-is-prompt-caching/) | The same long instructions or documents on many calls | Any change to the prefix breaks the cache |
| Batch processing | Overnight or non-urgent jobs | Results are not immediate |
| Trimmed context | Every call | Dropping a record the task needed |
| Short, [structured outputs](https://lowob.com/research/what-is-structured-output/) | Fields instead of prose | Output is the expensive token |
| Spend and step caps | Every agent | Set per agent, ideally through an [LLM gateway](https://lowob.com/research/what-is-an-llm-gateway/) |
| Lower reasoning effort | Lookups and simple drafts | Quality on hard steps |

Log tokens per task for two weeks, then divide cost by tasks that met the quality bar, not by attempts. An agent that costs $0.50 a run and succeeds half the time costs $1 per useful result.

## lowob takeaways

- **Inference is the running cost.** Every call is billed, re-reads included.
- **Unit prices fall; usage rises.** Agents and reasoning multiply tokens per task.
- **Model choice is the largest lever.** The same job can cost twenty times more on a larger model.
- **Measure cost per successful task.** Compare it with the value of the task.

## Common questions

### What is the difference between AI training cost and inference cost?

Training cost is the one-off expense of building a model, carried by its developer. Inference cost is the recurring cost of running it on each request.

### Why is my AI bill going up if token prices are falling?

Usage per task is rising. Agents re-read their context at every step, reasoning settings bill hidden thinking as output, and more work is automated.

### How do I estimate inference cost for an AI agent?

Multiply tokens read and written per step by the number of steps and by the provider's per-million prices. Then divide by the share of runs that succeed.

## Sources and notes

- [Anthropic, Pricing (Claude API documentation)](https://platform.claude.com/docs/en/about-claude/pricing), accessed 16 November 2026. Vendor list prices; change often.
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing), accessed 16 November 2026. Vendor list prices; tier names changed during 2026.
- [Stanford HAI, AI Index 2025: State of AI in 10 Charts](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts), April 2025. Independent academic index; based on list prices.
- [Epoch AI, LLM inference prices have fallen rapidly but unequally across tasks](https://epoch.ai/data-insights/ai-inference-price-trends), 12 March 2025. Independent research; list prices across six benchmarks.
- [Anthropic, How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), 13 June 2025. Vendor engineering report on its own system.

## Related research

- [What Is a Token in AI, and Why Does It Drive Cost?](https://lowob.com/research/what-is-a-token-in-ai/)
- [What Is Usage-Based Pricing for AI?](https://lowob.com/research/what-is-usage-based-pricing-for-ai/)
- [What Is Prompt Caching?](https://lowob.com/research/what-is-prompt-caching/)
- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [How to Measure AI ROI in a Commercial Team](https://lowob.com/research/how-to-measure-ai-roi/)

## Next move

Pick the AI task your team runs most often and price it on your current model and on the provider's cheapest. Run 30 real cases through both, and divide each total cost by the number of acceptable results.

[Start a conversation](https://lowob.com/contact/)
