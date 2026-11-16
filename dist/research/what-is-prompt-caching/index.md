# What Is Prompt Caching?

Source: https://lowob.com/research/what-is-prompt-caching/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Prompt caching stores the processed form of a prompt's fixed opening, such as instructions, tools or a policy document, so later requests that start the same way skip that work. Cache hits are billed at a fraction of the input price and answers start sooner; output is unchanged. The saving depends on prompt order and on keeping the fixed part identical.

Prompt caching is a provider feature that stores the processed form of the fixed start of a prompt, such as instructions, tool definitions or a long document, so later requests that begin the same way skip that work. Cached input is billed at a fraction of the normal rate and the response starts sooner. The answer itself is unchanged. It only works if the repeated part comes first and stays identical, so prompt design decides whether a team gets the saving.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What prompt caching means

Before a model writes anything, it processes every input token. A request that opens with 20,000 tokens of policy repeats that work, and that charge, on every call.

Prompt caching keeps the result of that processing for a short period. Research came first: Gim and colleagues' 2023 paper "Prompt Cache" stored precomputed attention states for frequently reused text segments on the inference server. They reported time-to-first-token improvements of about 8 times on GPUs and 60 times on CPUs, with output accuracy preserved.

Providers now offer caching as a billing feature, and the mechanics differ.

|  | Anthropic | OpenAI | Google Gemini API |
| --- | --- | --- | --- |
| How it is turned on | A cache breakpoint on a block, or one top-level setting for automatic caching | On by default for supported models | Implicit caching on by default for Gemini 2.5 and newer |
| Minimum prompt size | 512 to 4,096 tokens, by model | 1,024 tokens on recent models | 2,048 to 4,096 tokens, by model |
| How long it lasts | 5 minutes, refreshed on each use; 1-hour option | Typically 5 to 10 minutes of inactivity, up to an hour; extended retention up to 24 hours | Not stated for implicit caching |
| Price of a hit | 0.1 times input on most models, lower on some | Discounted up to 95% | Savings passed on automatically |
| What must match | Everything up to the breakpoint | The entire rendered prefix | Google advises common content first, with similar requests sent close together |

Anthropic's documentation states that caching "has no effect on output token generation": the response is the same as it would be without the cache.

## Why it matters for a commercial team

Most commercial AI work has a large fixed part and a small variable part. A proposal checker carries the same pricing rules and discount policy on every call; only the proposal changes. An account assistant carries the same [system prompt](https://lowob.com/research/what-is-a-system-prompt/) and tool definitions; only the question changes. An agent re-sends its instructions and tools at every step of its loop. The fixed part is where caching pays.

A worked example, illustrative, using Anthropic's list prices for Claude Sonnet 5.5 on 16 November 2026: $2 per million input tokens, $2.50 for a five-minute cache write and $0.10 for a cache read. A 20,000-token policy prefix is sent 100 times in a session, with no gap longer than five minutes. Uncached, that prefix costs $4.00. Cached, one write costs $0.05 and 99 reads cost about $0.20, so about $0.25 in total, or roughly 94% less. Output and the variable part are billed as normal. See [AI inference cost](https://lowob.com/research/what-is-ai-inference-cost/) for the other levers.

Speed improves too: Anthropic says caching generally improves time-to-first-token for long documents, and OpenAI that it reduces input processing time before the response starts.

Caching also rewards a discipline **lowob** recommends anyway: stable, versioned instructions. A system prompt edited ad hoc during the day, or a timestamp placed at the top of every prompt, breaks the cache on every call. Anthropic's documentation states that "changes at each level invalidate that level and all subsequent levels". Editing a tool definition, for example, invalidates the tools, system and message caches together.

On privacy, Anthropic says caches "are isolated between organizations", and on its own API also by workspace. OpenAI says caches "are not shared across organizations". Cached content is still held for the cache lifetime, so firms with [zero data retention](https://lowob.com/research/what-is-zero-data-retention/) terms should confirm how caching is treated under them.

Prompt caching is different from response caching, which some [LLM gateways](https://lowob.com/research/what-is-an-llm-gateway/) offer. A response cache returns a stored answer to an identical request without calling the model. A prompt cache still calls the model.

## How to design for caching

| Do | Avoid |
| --- | --- |
| Put fixed material first: tools, system prompt, policies, reference documents | Dates, user names or request IDs at the top of the prompt |
| Put the variable question or record last | Reordering tool definitions between calls |
| Version system prompts and change them deliberately | Small edits to live instructions during the day |
| Check the usage fields: cache\_read\_input\_tokens at Anthropic, cached\_tokens at OpenAI | Assuming caching worked because it is switched on |
| Send related calls close together | Spacing calls so the cache expires between them |

## lowob takeaways

- **Caching reuses the fixed start of a prompt.** Input gets cheaper and faster; the answer is unchanged.
- **Order decides the saving.** Fixed material first, variable material last.
- **Any change to the prefix breaks it.** Version instructions and tools.
- **Verify in the usage fields.** Track cache hits per task.

## Sources and notes

- [Anthropic, Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), accessed November 2026. Vendor documentation.
- [Anthropic, Pricing (Claude API documentation)](https://platform.claude.com/docs/en/about-claude/pricing), accessed 16 November 2026. Vendor list prices; change often.
- [OpenAI, Prompt caching guide](https://developers.openai.com/api/docs/guides/prompt-caching), accessed November 2026. Vendor documentation; retention periods are typical, not guaranteed.
- [Google, Gemini API context caching](https://ai.google.dev/gemini-api/docs/interactions/caching.md.txt), accessed November 2026. Vendor documentation; this page covers implicit caching only.
- [Gim et al., Prompt Cache: Modular Attention Reuse for Low-Latency Inference](https://arxiv.org/abs/2311.04934), November 2023, revised April 2024. Academic preprint; latency gains measured on the authors' own setup.

## Related research

- [What Is AI Inference Cost?](https://lowob.com/research/what-is-ai-inference-cost/)
- [What Is a System Prompt?](https://lowob.com/research/what-is-a-system-prompt/)
- [What Is a Token in AI, and Why Does It Drive Cost?](https://lowob.com/research/what-is-a-token-in-ai/)
- [What Is an LLM Gateway?](https://lowob.com/research/what-is-an-llm-gateway/)

## Next move

Take your highest-volume AI task and move every fixed element, instructions, tools and policy text, to the start of the prompt, with anything dated or user-specific at the end. Then check the cache-read field on the next hundred calls.

[Start a conversation](https://lowob.com/contact/)
