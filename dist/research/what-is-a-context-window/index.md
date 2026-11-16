# What Is a Context Window?

Source: https://lowob.com/research/what-is-a-context-window/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: A context window is the working memory of a language model: everything it can read and write in a single request, measured in tokens. Windows have grown to a million tokens on current models, but research shows accuracy falls as inputs get longer and when key facts sit in the middle. What goes into the window matters more than its size.

A context window is all the text a language model can consider in a single request, including the response it is writing. It works as the model's working memory, separate from what it learned in training, and it is measured in tokens. Current frontier models offer windows of up to a million tokens. Research shows that accuracy falls as inputs grow, so choosing what goes in matters more than how much fits.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What a context window means

A language model has two kinds of knowledge. The first is what it absorbed in training, fixed at a cut-off date. The second is what it is given in the current request. Anthropic's documentation calls the second a "working memory" and defines the context window as everything the model can reference while generating, including its own reply.

The window is measured in tokens. Using OpenAI's English rule of thumb of about 75 words per 100 tokens, a 200,000-token window holds roughly 150,000 words and a million tokens roughly 750,000. These are approximations; each provider's tokeniser counts differently.

When a request is too large, it fails or stops. Anthropic's API returns a "prompt is too long" error if the input alone exceeds the limit. On newer models, if generation reaches the limit mid-reply, the output stops with a specific stop reason.

| The context window is | The context window is not |
| --- | --- |
| The model's working memory for one request | Long-term memory across sessions |
| Shared between input and output | Reserved space for your documents only |
| A hard technical limit in tokens | A measure of how much the model will use well |
| Reset for each new request unless history is resent | A record of what was decided |

## How it works, and why it matters for a commercial team

Everything in a request competes for the same space. Anthropic's documentation lists the system prompt, every message, tool results, images, documents and tool definitions as input. The model's output, including any extended thinking, counts too. Cached prompt prefixes still occupy the window; caching changes the price, not the space used.

For an agent this fills up quickly. A sales assistant preparing for a renewal might carry instructions, ten tool definitions, three CRM records, the last email thread and a contract. After several tool calls the window holds everything returned so far. The window resets on the next request, so anything not resent is gone.

Size is not the same as attention. Anthropic's own documentation states that "as token count grows, accuracy and recall degrade", a pattern it calls context rot. Independent research supports this. Liu and colleagues' 2023 paper "Lost in the Middle" tested multi-document question answering and found accuracy was highest when the relevant passage was at the start or end of the input. It dropped when the passage sat in the middle, even for models built for long contexts. Chroma's July 2025 report tested 18 models, including GPT-4.1, Claude 4 and Gemini 2.5, and found models do not use their context uniformly.

The commercial implication is that a bigger window does not remove the need to choose. Pasting a full account history into a million-token window is possible. It is slower, costs more per request and can bury the one fact that matters. In **lowob**'s model, deciding what reaches the model is the job of the wiring stage, the context layer, not the model.

## How to fill a context window well

| Practice | What it means in practice |
| --- | --- |
| Retrieve, do not dump | Send the five relevant records, not the whole CRM export |
| Put key material at the edges | Instructions and the decisive facts at the start or end |
| Count before you send | Use the provider's token counter to estimate size |
| Compact long conversations | Summarise earlier turns, keeping decisions and open questions |
| Keep tool results short | Return the fields needed, not full records |
| Store the decision outside | Write outcomes to a record; the window forgets them |

A common mistake is treating the window as memory. A conversation that ran yesterday is not in today's window unless something resends it. Another is choosing a model for its window size alone. A model with a smaller window and well-chosen inputs will often beat a larger one fed everything. Test both on your own documents before deciding.

## lowob takeaways

- **It is working memory.** The window holds one request's inputs and output, then resets.
- **Everything counts.** Tool definitions, results and hidden reasoning use the same space.
- **Longer inputs degrade.** Accuracy and recall fall as the window fills; position matters.
- **Choose what goes in.** Retrieval and a context layer beat a bigger window.

## Sources and notes

- [Anthropic, Understanding the context window](https://platform.claude.com/docs/en/build-with-claude/context-windows), accessed November 2026. Vendor documentation; window sizes change with new models.
- [Liu et al., Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172v3), July 2023, revised November 2023. Academic preprint; tested models now superseded.
- [Chroma, Context Rot: How Increasing Input Tokens Impacts LLM Performance](https://www.trychroma.com/research/context-rot), July 2025. Technical report by a vector database vendor.
- [OpenAI, What are tokens and how to count them](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them), accessed November 2026. Vendor help article; word ratios are approximate.

## Related research

- [What Is Context Engineering?](https://lowob.com/research/what-is-context-engineering/)
- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [What Is Agent Memory?](https://lowob.com/research/what-is-agent-memory/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)

## Next move

Take one AI prompt your team reuses and count its tokens with your provider's counter. Remove anything the model does not need and compare the answers side by side.

[Start a conversation](https://lowob.com/contact/)
