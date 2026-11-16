# What Is Agent Memory?

Source: https://lowob.com/research/what-is-agent-memory/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: Agent memory is the mechanism that lets an AI agent carry information from one step, task or session to the next: facts about customers, what happened in earlier conversations, and the rules for doing a job. Short-term memory lasts for one conversation and is now built into most platforms. Long-term memory persists across sessions and is where products differ. It is useful, but it is not the same as a company's record of decisions, and it struggles most with facts that have changed.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- Research frameworks divide agent memory into four types: working, episodic, semantic and procedural.
- Short-term memory covers one thread or conversation; long-term memory persists across sessions and has to be written, stored and retrieved deliberately.
- On the LongMemEval benchmark, commercial chat assistants and long-context models lost about 30% accuracy when information had to be remembered across sustained interactions.
- Changed facts are the weak point. A memory that overwrites old facts cannot explain what was believed when a decision was made.
- Test any memory layer on 50 questions from your own history, against a no-memory baseline, before buying.

## What agent memory means

A language model has no memory between calls. Everything it knows about the current task has to be placed in front of it each time. Agent memory is the software that decides what to keep, where to store it and what to bring back.

The most cited framework is CoALA (Cognitive Architectures for Language Agents), from Princeton researchers Sumers, Yao, Narasimhan and Griffiths, published in *Transactions on Machine Learning Research* in 2024. It borrows four categories from cognitive science.

| Type | What it holds | Commercial example | Main risk |
| --- | --- | --- | --- |
| Working | The active task: inputs, retrieved material, goals | The account brief being drafted now | Overloaded context, slow and costly |
| Episodic | Past interactions and actions | Last quarter's emails with this buyer | Old episodes treated as current |
| Semantic | Facts about the world and the company | "This client renews in March" | Facts that changed but were not updated |
| Procedural | Rules and instructions for a task | "Discounts above 10% need finance approval" | Rules edited silently, with no history |

LangChain's documentation for its LangGraph framework uses a simpler split. Short-term memory is thread-scoped and remembers interactions within a single conversation. Long-term memory is stored in namespaces and recalled across any thread. It also distinguishes two ways of writing memories: in the "hot path", during the response, which adds latency; or in the background, as a separate task, which raises the question of when to run it.

## Why it matters for a commercial team

Memory is now a product category. WRITER made team-level Agent Memory, which retains decisions and preferences across sessions, generally available in September 2026. Specialist memory layers sell the same capability to teams building their own agents.

The evidence on long-term recall is weaker than the marketing. LongMemEval, a 500-question benchmark published in 2024 and presented at ICLR 2025, tests five abilities: information extraction, multi-session reasoning, temporal reasoning, knowledge updates and abstention. Its authors found an accuracy drop of about 30% for commercial chat assistants and long-context models across sustained interactions. Knowledge updates matter most for a sales team, because prices, contacts, owners and terms change constantly.

That is why memory and the decision record should stay separate. Memory helps an agent pick up where it left off. The record says what the company decided, why, and what has since superseded it. If an agent's memory says one discount ceiling and the record says another, the record should win, and the conflict should be flagged to a person.

## How to evaluate a memory layer

We have not found independent testing that shows any memory layer improving agents on long tasks, so treat vendor benchmark scores as claims. A short test on your own data is more informative.

1. Write 50 questions from your own commercial history: 20 lookups, 20 "how did this change?" questions, and 10 that assume something you have since reversed.
2. Run the same agent and model with no memory layer, then with each candidate.
3. Score correctness, and separately score how often the agent corrects the false premise.
4. Ask each vendor for its benchmark harness, not just its score.

Check two properties alongside the score. Can every memory be traced to a source and exported? Are old facts marked as superseded, with a date, rather than overwritten? A plain database with status fields, validity dates and supersession links is often enough for a mid-size team.

## lowob takeaways

- **Short-term memory is solved.** Most platforms provide it within a conversation.
- **Long-term memory is the open question.** Benchmarks show sharp drops on long interactions and changed facts.
- **Memory is not the record.** When they disagree, the decision record wins and a person is told.
- **Test before buying.** Fifty questions from your own history, against a no-memory baseline.

## Common questions

### What is memory in AI agents?

The mechanism that stores information from earlier steps or sessions and brings the relevant parts back into the model's context, so an agent can continue work without being told everything again.

### What is the difference between short-term and long-term agent memory?

Short-term memory lasts for one conversation or thread. Long-term memory persists across sessions and has to be deliberately written, stored and retrieved.

### What are episodic, semantic and procedural memory in AI agents?

Episodic memory holds past interactions, semantic memory holds facts, and procedural memory holds the rules and instructions for doing a task. The split comes from the CoALA framework.

### Do we need a separate memory layer for our AI agents?

Not always. Platform-native memory covers single conversations. For long-term facts, test a candidate against a no-memory baseline on your own data first; a well-structured database is often enough.

## Sources and notes

- [Sumers, Yao, Narasimhan and Griffiths, Cognitive Architectures for Language Agents](https://arxiv.org/pdf/2309.02427), TMLR, 2024. Academic framework.
- [Wu et al., LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://arxiv.org/abs/2410.10813v2), October 2024, revised March 2025. Academic benchmark; not an enterprise product test.
- [LangChain documentation, Memory overview](https://docs.langchain.com/oss/python/concepts/memory). Vendor documentation.
- [CMSWire, WRITER launches Enterprise Brain to unify AI agent context](https://www.cmswire.com/customer-experience/writer-launches-enterprise-brain-to-unify-ai-agent-context/), September 2026. Vendor announcement, reported.

## Related research

- [The 5 agent memory layers worth testing, and how to test them](https://lowob.com/research/the-5-agent-memory-layers-worth-testing-and-how-to-test-them/)
- [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [Your CRM is memory, not a brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)

## Next Move

Write ten "how did this change?" questions about your largest accounts, such as who owns the relationship now and what the current price is, and ask your assistant. The wrong answers show where memory needs a record behind it.

[Start a conversation](https://lowob.com/contact/)
