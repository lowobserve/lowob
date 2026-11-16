# What Is a Token in AI, and Why Does It Drive Cost?

Source: https://lowob.com/research/what-is-a-token-in-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-08-17 · Updated: 2026-11-16
Function: Revenue

> Summary: A token is a chunk of text, often part of a word, that a language model processes. Providers price every request per million input and output tokens, and output typically costs about five times as much as input. Agents multiply token use because each step re-reads its context, so cost control is mostly a design question.

A token is the unit of text a language model reads and writes, usually a word or part of a word. In English, one token is roughly four characters, or about three-quarters of a word. Providers charge per million tokens, with separate prices for input and output, so token count is what turns an AI task into a bill. Agents use far more tokens than chat because every step re-reads its context.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What a token means

A model does not read letters or whole words. A component called a tokeniser splits text into pieces from a fixed vocabulary. Common words are often one token. Rare words, names and numbers are split into several. Spaces and punctuation count too.

OpenAI's help documentation gives the working ratios for English: one token is about four characters, one to two sentences is about 30 tokens, and a paragraph is about 100. It also notes that tokenisation varies by language. Its example is the Spanish phrase "Cómo estás", which is 5 tokens for 10 characters. Each model family has its own tokeniser, so the same text can produce different counts on different providers.

Tokens also cover more than the visible prompt and reply. Anthropic's documentation states that the system prompt, every message, tool results, documents and tool definitions all count. When a model "thinks" before answering, those thinking tokens are billed as output.

| Counts as tokens | Often overlooked |
| --- | --- |
| Your question or instruction | The system prompt sent with every request |
| The model's reply | Hidden reasoning ("thinking") tokens, billed as output |
| Documents and records you attach | Tool definitions an agent carries on every call |
| Earlier turns in the conversation | Tool results, such as a full CRM record returned by a search |

## Why tokens drive cost for a commercial team

Every API provider prices per million tokens, input and output separately. Anthropic's published prices in November 2026 illustrate the shape. Claude Sonnet 5.5 is $2 per million input tokens and $10 per million output. Claude Opus 5.5 is $4 and $20. Claude Haiku 5.5 is $0.10 and $0.50 for prompts up to 100,000 tokens. The ratio matters more than the level: writing costs several times more than reading.

A worked example, illustrative. A meeting-brief assistant reads 20,000 tokens of CRM notes and email, then writes a 1,000-token brief on Sonnet 5.5. Input costs $0.04 and output $0.01, so about $0.05 per brief. Fifty briefs a working day for 22 days is 1,100 briefs, or about $55 a month.

Agents change the arithmetic. An agent that takes ten steps, each re-reading the same 20,000 tokens of context, consumes 200,000 input tokens for one task. On the same prices that is $0.40 before it writes anything. Token use grows with the number of steps, not just the size of the answer. This is why per-seat chat plans and usage-based API bills can differ by an order of magnitude for similar work.

Prices are also falling fast. Stanford's 2025 AI Index found that querying a model at GPT-3.5's level dropped from $20 to $0.07 per million tokens in about 18 months. A budget built on today's per-token price will be wrong within a year, usually in the buyer's favour, while volume tends to rise.

## How to estimate and control token cost

| Lever | What it does | Typical effect |
| --- | --- | --- |
| Batch processing | Runs non-urgent jobs asynchronously | Anthropic lists a 50% discount on input and output |
| Prompt caching | Reuses a fixed prefix, such as instructions or a policy document | Cache hits billed at 0.025x to 0.1x the input price, depending on the Anthropic model |
| Smaller model for simple steps | Routes classification or extraction to a cheaper model | Haiku 5.5 input is one-twentieth of Sonnet 5.5's |
| Trimmed context | Sends the relevant records, not the whole account history | Cuts input tokens on every step |
| Shorter outputs | Asks for structured fields rather than prose | Cuts the most expensive token type |

Start by measuring. Log input and output tokens per task for two weeks, not per user. Then set a cost-per-task figure next to the value of the task: a qualified meeting, a completed renewal brief, an answered questionnaire. A $0.05 brief that saves a seller 20 minutes needs no optimisation. An agent loop that costs $2 per attempt and succeeds half the time does.

## lowob takeaways

- **Tokens are the billing unit.** Roughly three-quarters of an English word, more for other languages.
- **Output costs more than input.** Five times more on Anthropic's main models; ask for less prose.
- **Agents multiply tokens.** Each step re-reads context, so cost scales with steps.
- **Measure cost per task.** Compare it with the value of the task, not with the seat price.

## Sources and notes

- [OpenAI, What are tokens and how to count them](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them), accessed November 2026. Vendor help article; ratios are approximate.
- [Anthropic, Pricing (Claude API documentation)](https://platform.claude.com/en/docs/about-claude/pricing), accessed November 2026. Vendor list prices; subject to change.
- [Anthropic, Understanding the context window](https://platform.claude.com/docs/en/build-with-claude/context-windows), accessed November 2026. Vendor documentation on what counts toward token use.
- [Stanford HAI, AI Index 2025: State of AI in 10 Charts](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts), April 2025. Independent academic index; based on list prices.
- The worked example and cost-per-task method are **lowob**'s illustration, using the list prices above.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [What Is Usage-Based Pricing for AI?](https://lowob.com/research/what-is-usage-based-pricing-for-ai/)
- [Which AI Assistant, Which Seats](https://lowob.com/research/which-ai-assistant-which-seats/)
- [Enterprise AI Glossary](https://lowob.com/research/enterprise-ai-glossary/)

## Next move

Pick one AI task your team runs daily and log its input and output tokens for a week. Divide the cost by the number of useful results to get a cost per task.

[Start a conversation](https://lowob.com/contact/)
