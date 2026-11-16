# What Is Context Engineering?

Source: https://lowob.com/research/what-is-context-engineering/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: Context engineering is the practice of choosing and maintaining the information an AI model sees at each step of a task: its instructions, the documents and records retrieved for it, the results of tools it calls and the history of the conversation. It extends prompt engineering from the wording of a request to everything around it. The discipline exists because models get worse, not better, when given too much. The right few facts beat a full data dump.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- Anthropic defines context engineering as the strategies for curating and maintaining the optimal set of tokens during model inference.
- Chroma's July 2025 study of 18 models found performance consistently degrades as input length grows, even on simple tasks.
- A 2023 Stanford-led paper found models use information best at the start or end of a long input and worst in the middle.
- Andrej Karpathy described it in June 2025 as filling the context window "with just the right information for the next step."
- Common techniques include just-in-time retrieval, compaction, structured notes and sub-agents with clean context.

## What context engineering means

The term spread in mid-2025. Shopify's chief executive Tobi Lütke called it a core skill, and Andrej Karpathy, formerly of OpenAI, described it as the "delicate art and science of filling the context window with just the right information for the next step." In September 2025 Anthropic published engineering guidance defining it as the set of strategies for curating and maintaining the optimal set of tokens during inference.

The difference from prompt engineering is scope. Prompt engineering is about how instructions are written. Context engineering covers the whole state the model works from, including system instructions, tool definitions, retrieved data and message history. For an agent that runs many steps, that state changes at every step, so curation is continuous rather than a one-off.

| Prompt engineering | Context engineering |
| --- | --- |
| Wording one request well | Choosing everything the model sees |
| Mostly a writing task | A data and systems task |
| Done once per template | Done at every step of a task |
| Fixes tone and format | Fixes accuracy and relevance |

## Why it matters for a commercial team

The case rests on a finding that surprises many buyers: larger context windows do not solve the problem. Chroma's research team tested 18 models in 2025 and found that performance "grows increasingly unreliable as input length grows." Distracting but irrelevant material made it worse. Earlier, Liu and colleagues showed in "Lost in the Middle" that models recall information best when it sits at the beginning or end of a long input.

Anthropic's guidance calls this "context rot" and describes a model's attention as a finite budget. Every extra token draws on it.

For a commercial team, the practical meaning is clear. An assistant asked to prepare for a renewal call does not need the whole CRM history, every email and every document in the account folder. It needs the current contract terms, open issues, the last three interactions, decisions already made about this account, and the stakeholders. Giving it everything makes the brief longer and less accurate.

This is the wiring stage in **lowob**'s model of the enterprise brain. The store holds the data. The context layer decides which slice of it reaches the model for a given task. Decision records with a reason, owner and status are some of the highest-value context available, because they tell the model what has already been agreed and why.

## How to start: four techniques

Anthropic's guidance describes several techniques for agents working on long tasks. Each has a direct commercial equivalent.

| Technique | What it does | Commercial example |
| --- | --- | --- |
| Just-in-time retrieval | Keeps references, such as record IDs or links, and loads data only when needed | An assistant fetches the contract only when asked about terms |
| Compaction | Summarises a long session and restarts with the summary | A multi-day deal review carries forward a short summary, not every message |
| Structured notes | The agent writes notes to a file outside its context and reads them later | A running account note of decisions and open questions |
| Sub-agents | Focused agents work in clean context and return condensed results | One agent reads support tickets and returns a five-line summary for the brief |

Three mistakes are common. The first is connecting every system and letting the model sort it out. The second is relying on a larger context window instead of better selection. The third is letting stale data in: a CRM field last updated a year ago is worse than an empty one, because the model will treat it as true.

A good starting exercise is to write down, for one recurring task, the fields and documents a skilled person would actually look at. That list is the first version of the task's context.

## lowob takeaways

- **Less, chosen well, beats more.** Model accuracy falls as irrelevant context grows.
- **Design per task.** A renewal brief and a pipeline review need different slices of the same data.
- **Put decisions in the context.** Records of what was agreed, and why, prevent the model from reopening settled questions.
- **Clean before you connect.** Stale fields become confident errors.

## Common questions

### What is the difference between context engineering and prompt engineering?

Prompt engineering is about wording instructions. Context engineering covers everything the model sees, including retrieved data, tool results and history, and manages it at every step.

### Does a bigger context window remove the need for context engineering?

No. Studies including Chroma's 2025 test of 18 models show accuracy degrades as input length grows, so selecting the right information still matters.

### What is context rot?

Anthropic's term for the decline in a model's ability to recall information accurately as its context fills with more tokens.

### How do I start with context engineering?

Pick one recurring task, list the records and documents a skilled person uses for it, and give the assistant only those. Measure accuracy before adding more.

## Sources and notes

- [Anthropic, Effective context engineering for AI agents](https://anthropic.com/research/effective-context-engineering-for-ai-agents), 29 September 2025. Vendor engineering guidance.
- [Chroma, Context rot: how increasing input tokens impacts LLM performance](https://www.trychroma.com/research/context-rot), 14 July 2025. Vendor research; Chroma sells retrieval infrastructure.
- [Liu et al., Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172v3), arXiv, July 2023 (revised November 2023). Academic paper; tested models of that period.
- Karpathy and Lütke remarks, June 2025, as reported by [The Decoder](https://the-decoder.com/shopify-ceo-and-ex-openai-researcher-agree-that-context-engineering-beats-prompt-engineering/). Social media posts reported by trade press.
- The commercial mappings are **lowob**'s working method.

## Related research

- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [A Loop With Good Context](https://lowob.com/research/a-loop-with-good-context/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)

## Next Move

Choose one recurring task, such as preparing for a renewal call, and write the list of fields and documents a senior person actually checks. Give your assistant only that list and compare the result with an unrestricted run.

[Start a conversation](https://lowob.com/contact/)
