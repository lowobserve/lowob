# What Is a Large Language Model (LLM)?

Source: https://lowob.com/research/what-is-a-large-language-model/
Publisher: lowob (https://lowob.com)
Published: 2026-08-31 · Updated: 2026-11-17
Function: Strategy

> Summary: A large language model is a neural network trained on very large amounts of text to predict the next token. Most use the Transformer architecture published in 2017. Costs have fallen sharply, with GPT-3.5-level performance dropping more than 280-fold in price in about two years, which makes the model the cheapest and most replaceable part of any AI system.

A large language model (LLM) is a neural network trained on very large amounts of text to predict the next token, which lets it write, summarise, classify and answer questions in plain language. Most current LLMs use the Transformer architecture, first published in 2017. An LLM is the reasoning engine inside assistants and agents, not the whole product. It knows what it was trained on and what you put in front of it, nothing more.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What a large language model means

An LLM is a statistical model of language. During training it reads a very large body of text and adjusts billions of internal numbers, called parameters, so that it gets better at predicting the next piece of text. "Large" refers to both the training data and the parameter count.

The design that made this practical is the Transformer. The 2017 paper that introduced it proposed an architecture "based solely on attention mechanisms", dropping the recurrent designs that came before. Attention lets the model weigh every part of the input against every other part, which suits long passages of text.

The commercial turning point came with scale. OpenAI's GPT-3 paper in May 2020 showed that a 175-billion-parameter model could perform new tasks from a few examples written into the prompt, with no retraining. It handled translation, question answering and three-digit arithmetic this way. That finding is why instructions and examples in a prompt matter so much today.

| An LLM is | An LLM is not |
| --- | --- |
| A model that predicts likely text from its input | A database that looks facts up |
| The reasoning component inside an assistant or agent | The assistant, agent or product itself |
| Fixed at its training date unless given new context | Aware of your CRM, inbox or files by default |
| Probabilistic, so outputs vary from run to run | A guarantee that an answer is true |

## How it works, and why it matters for a commercial team

Text goes in and is split into tokens. The model calculates the probability of each possible next token, picks one, adds it to the text and repeats. A paragraph of output is a few hundred of these steps. Pricing follows the same unit: providers charge per million tokens read and written.

Three practical consequences follow. First, an LLM does not check sources unless it is connected to them, through retrieval or a protocol such as MCP. Second, it can produce fluent text that is wrong; NIST's July 2024 generative AI profile calls this confabulation. Third, the same prompt can give different answers, so quality has to be measured over many runs, not judged from one.

For a revenue or operations team, the useful tasks are bounded ones: summarising a call, drafting an account brief, classifying inbound enquiries, or producing a first-pass answer to a questionnaire for a person to check. The model does the language work. The data, the permissions and the decision stay with the business.

Cost is moving in the buyer's favour. Stanford's 2025 AI Index reports that querying a model at GPT-3.5's level (64.8% on the MMLU benchmark) fell from $20 to $0.07 per million tokens in about 18 months, a more than 280-fold drop. Depending on the task, it found inference prices falling between 9 and 900 times a year.

In **lowob**'s model of the enterprise brain, the LLM sits in the reasoning stage of the loop: store, wiring, record, reasoning, learning. It is the part most likely to be swapped as prices fall and models improve. That is the argument for renting the model and owning the record of what was decided and why.

## How to choose and use one

Most commercial teams will not train a model. The choice is which hosted model to use, through which product, for which task.

| Criterion | What to check | Why it matters |
| --- | --- | --- |
| Task fit | Run 20 to 50 real examples from your own work | Public benchmarks rarely match your documents |
| Context window | How much text fits in one request | Limits how much account history it can read at once |
| Price | Input and output price per million tokens | Output usually costs several times more than input |
| Data terms | Whether your inputs are retained or used for training | Determines what you can safely send |
| Access route | Chat seat, API or a tool that embeds a model | Affects logging, permissions and cost control |

The common mistakes are predictable. Teams treat the model as a source of facts rather than a reader of facts supplied to it. They pick a model from a leaderboard rather than from their own test set. They let it send client-facing text without review. Each is fixed by design rather than by a better model: supply the data, write a small evaluation, and keep a person between the draft and the send.

## lowob takeaways

- **An LLM predicts text.** It is fluent by design and accurate only when given the right context.
- **The model is the replaceable part.** Prices fell more than 280-fold in two years; plan to switch.
- **Test on your own work.** Twenty real examples tell you more than a public benchmark.
- **Keep a person before the send.** Fluent and wrong is the default failure, not the exception.

## Common questions

### What is a large language model in simple terms?

It is an AI system trained on a very large amount of text to predict the next word or word fragment. That one skill lets it draft, summarise, translate and answer questions.

### How is an LLM different from ChatGPT or Claude?

ChatGPT and Claude are products. Each runs one or more LLMs and adds an interface, memory, tools, safety controls and account management around them.

### Do large language models know my company's data?

Not by default. A model knows its training data up to a cut-off date. It sees your data only when it is supplied in the prompt, through retrieval or through connected tools.

### Why do LLMs make things up?

They generate likely text, not verified text. NIST calls this confabulation. Grounding answers in supplied sources and reviewing outputs reduces the risk but does not remove it.

## Sources and notes

- [Vaswani et al., Attention Is All You Need](https://arxiv.org/abs/1706.03762), June 2017. Original Transformer paper; academic preprint.
- [Brown et al., Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165), May 2020. OpenAI's GPT-3 paper; authors' own results.
- [Stanford HAI, AI Index 2025: State of AI in 10 Charts](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts), April 2025. Independent academic index; prices are list prices at a fixed benchmark level.
- [NIST, AI 600-1: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024. US standards body guidance.
- [OpenAI, What are tokens and how to count them](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them), accessed November 2026. Vendor help article; ratios are approximate and for English.

## Related research

- [What Is an AI Agent, and Where Does It Fit in the Brain?](https://lowob.com/research/what-is-an-ai-agent/)
- [Which AI Assistant, Which Seats](https://lowob.com/research/which-ai-assistant-which-seats/)
- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [The Enterprise AI and Commercial System Glossary](https://lowob.com/research/enterprise-ai-glossary/)
- [What Is a Customer Data Platform?](https://lowob.com/research/what-is-a-customer-data-platform/)

## Next move

Pick one recurring writing task, such as call summaries, and collect 20 past examples with the outputs you would have accepted. Run them through the model your team already pays for and score the results.

[Start a conversation](https://lowob.com/contact/)
