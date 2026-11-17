# The False Premise Is the Expensive Failure

Source: https://lowob.com/research/the-false-premise-is-the-expensive-failure/
Publisher: lowob (https://lowob.com)
Published: 2026-09-02 · Updated: 2026-11-17
Function: Strategy

> Summary: AI systems have become good at saying 'I don't know' but remain bad at saying 'that's not right any more'. In the 2026 MemTrace benchmark, a widely used memory layer abstained correctly 99.3% of the time but resolved premises that contradicted its memory only 14.6% of the time. The fix is a premise check against the record, tested on your own superseded views.

AI systems have become good at saying "I don't know". They remain bad at saying "that's not right any more". In one 2026 benchmark, a widely used memory layer declined to answer 99.3% of questions about facts it had never seen, but resolved only 14.6% of prompts whose premise contradicted what it remembered. The second failure is the one that costs money. The fix is a premise check against the record, run on questions tied to live decisions and tested on your own reversed views.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Two numbers from the same system

Xianxuan Long, Jiliang Tang and colleagues built MemTrace in 2026 to probe what headline accuracy scores on memory benchmarks miss. Two of their measures, read together, describe the problem precisely. Boundary abstention tests whether a system declines to answer questions about facts never mentioned in its history. Conflict probes test whether it corrects a prompt whose premise contradicts what it remembers.

Mem0, a widely used memory layer, scored 99.3% on boundary abstention and 14.6% on conflict probes. The paper reports the same shape for the other systems in that comparison: abstention of 97.4% and 94.0%, conflict scores of 20.1% and 35.1%. In the authors' words, they "rarely resolve conflict probes".

The industry has largely solved the failure everyone worried about in 2023: confidently answering when nothing supports the answer. It has barely touched a subtler one. When a question smuggles in an assumption that the record contradicts, the system answers the question as asked.

A second 2026 benchmark, MemSyco-Bench, found the same pattern from a different angle. Memory systems "do not reliably mitigate memory-induced sycophancy", and for three of them 61 to 62% of errors happened after the relevant memory had been retrieved. The record was found. It was not allowed to overrule the question. This is the practical meaning of [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/).

| Failure | What the system does | Benchmark behaviour | Business cost |
| --- | --- | --- | --- |
| Unsupported answer | Answers with nothing behind it | Largely fixed: high abstention rates | Visible; usually caught |
| False-premise acceptance | Answers a question built on an outdated or wrong assumption | Low conflict-resolution rates | Invisible; every fact may be correct |

## What this looks like inside a firm

An analyst asks: "Given that the client's loan condition was waived last year, what should we watch this quarter?" If the waiver was reversed in July, the record knows. But the question presupposes the waiver, and the system will usually produce a fluent, well-sourced answer about monitoring a waived condition.

A relationship manager asks: "Since procurement approved the budget, what's the fastest path to signature?" The budget approval was a forecast, never confirmed. The answer is a confident plan built on nothing.

These are not hallucinations in the usual sense. Every fact in the answer may be correct. The error is in what the answer accepted without checking. Our explainer on [AI hallucination](https://lowob.com/research/what-is-ai-hallucination/) covers the more familiar failure.

False premises are not rare. Xinyan Velocity Yu and colleagues' CREPE study at ACL 2023 found about 25% of questions on online information-seeking forums contained a false presupposition. In a 2026 annotation of 100 real chatbot questions, Shenran Wang, Vered Shwartz and Hila Gonen found about 13%. Inside a firm, where questions refer to deals and decisions that change status weekly, the share on live matters is unlikely to be lower.

## Why people do not catch it either

Questions from senior people carry premises that junior people rarely challenge. A system that would push back on a false premise is, among other things, a way to correct a senior colleague without the politics. That is a real organisational benefit, and it only exists if the system is built to do it. Benchmarks show the default behaviour is the opposite: the memory systems tested deferred to the question.

> The industry taught systems to say "I don't know". It has not yet taught them to say "that's not right any more".

## The premise check

The fix is a step before answering, and it is cheap to build.

Extract the presuppositions in the question. Models are good at this when asked directly: "What does this question assume to be true?"

Check each presupposition against current records, using status and validity dates. This works best when records are superseded rather than overwritten, as argued in [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/), because the system can then see both the old view and the date it changed.

If any presupposition is contradicted or superseded, say so first, with the record and date, before answering anything.

Then answer the question that should have been asked, or ask whether the user still wants the original.

The evidence adds one important limit. Wang, Shwartz and Gonen found that methods scoring better on false-premise questions tended to score worse on true ones, because "weak fact checking modules" also rejected true presuppositions they could not verify. Weighted to a realistic mix of questions, answering directly beat aggressive premise detection. So the check should be narrow:

| What the record shows about the premise | Action |
| --- | --- |
| Contradicted or superseded, with a date | Say so first, cite the record, then answer the corrected question |
| Confirmed and current | Answer as asked |
| Not in the record | Answer as asked; note the premise was not verified |
| Recorded as a forecast, not a fact | Flag the status ("forecast, unconfirmed") before answering |

Challenge only what the record contradicts. Do not challenge what the record merely lacks. The check costs one extra call and a few hundred tokens per question. On questions that touch live decisions, that is an easy trade.

## Test for it explicitly

Most evaluation sets test whether a system finds the right answer. Add a set that tests whether it refuses a wrong question. Your own superseded records are the ideal source: take twenty views the organisation once held and later reversed, and write questions that assume the old view. Score how often the system pushes back. Expect a low number at first.

Add twenty questions with true premises as a control, so that a check that challenges everything is caught as quickly as one that challenges nothing. Our explainer on [AI evals](https://lowob.com/research/what-are-ai-evals/) covers how to keep both sets fixed across releases, and [What is agent memory?](https://lowob.com/research/what-is-agent-memory/) covers where superseded views should be stored.

## What would prove this wrong

Systems without a premise check correcting false premises at rates close to their abstention rates on independent tests. Then the gap has closed on its own and the extra step is redundant. The 2026 benchmarks show it has not closed yet.

## lowob takeaways

- **Abstention is not correction.** High "I don't know" rates say nothing about outdated assumptions.
- **Retrieval is not enough.** Most memory errors in one benchmark happened after the right memory was found.
- **Check only against the record.** Challenge what it contradicts, not what it lacks, or ordinary answers get worse.
- **Test with your own reversals.** Twenty superseded views, twenty true controls, every release.

## Common questions

### What is a false-premise error in AI?

When a question assumes something the record contradicts and the system answers the question as asked. Every fact in the answer may be correct; the error is in the assumption it accepted without checking.

### How can I stop an AI assistant from answering questions based on outdated assumptions?

Add a premise check before answering: extract what the question assumes, check each assumption against current records with status and dates, and flag any that are contradicted or superseded before answering.

### How do I test whether my AI system catches false premises?

Take twenty views your organisation once held and later reversed, write questions that assume the old view, and score how often the system pushes back. Add twenty true-premise questions to catch over-correction.

### Do AI memory systems correct false premises?

Rarely, on current evidence. In the 2026 MemTrace benchmark, Mem0 abstained correctly on 99.3% of unanswerable questions but scored 14.6% on prompts whose premise contradicted its memory.

## Sources and notes

- [Long et al., MemTrace: Probing What Final Accuracy Misses in Long-Term Memory](https://arxiv.org/html/2606.17328v1), arXiv preprint, 2026. Academic benchmark, not peer-reviewed; synthetic conversation histories, not enterprise records.
- [Xiang et al., MemSyco-Bench: Benchmarking Sycophancy in Agent Memory](https://arxiv.org/html/2607.01071), arXiv preprint, 2026. Academic benchmark, not peer-reviewed.
- [Yu, Min, Zettlemoyer and Hajishirzi, CREPE: Open-Domain Question Answering with False Presuppositions](https://virtual2023.aclweb.org/paper_P2678.html), ACL 2023. Peer-reviewed; forum questions, not business queries.
- [Wang, Shwartz and Gonen, Weak Presupposition Verification Degrades General QA Performance](https://arxiv.org/pdf/2608.06539), arXiv preprint, 2026. Academic study; the 13% estimate comes from 100 annotated questions.
- The failure table and premise-check rules are **lowob**'s working method.

## Related research

- [What Is Agent Memory?](https://lowob.com/research/what-is-agent-memory/)
- [What Are AI Evals?](https://lowob.com/research/what-are-ai-evals/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [Ask for the Gap, Not the Summary](https://lowob.com/research/ask-for-the-gap-not-the-summary/)

## Next move

List twenty positions your organisation held last year and has since reversed. Turn each into a question that assumes the old view, run them through your assistant, and count how many it corrects.

[Start a conversation](https://lowob.com/contact/)
