# A Loop With Good Context

Source: https://lowob.com/research/a-loop-with-good-context/
Publisher: lowob (https://lowob.com)
Published: 2026-08-18 · Updated: 2026-11-17
Function: Strategy

> Summary: An agent is a loop, so the engineering that matters is what the loop knows when it asks. Research on long inputs shows that more context makes models less reliable, so teams must choose what enters. The most valuable context almost nobody supplies is prior judgment on comparable cases, delivered through a precedent slot filled before each task runs and tested blind.

An agent is a loop. The engineering that matters has moved from what you ask to what the loop knows when it asks. Research on long inputs shows that adding more context makes models less reliable, so every serious team ends up choosing what enters. The most valuable context almost nobody supplies is prior judgment on comparable cases: a precedent slot of three to five past decisions, each with its reason, outcome and any dissent, filled before the task runs and tested blind against the current version.

*Figure: Where this piece sits in The Build Order: the context layer.*

An agent has been described, memorably, as a for-loop with better PR. The joke carries a design rule. If the loop is a commodity, the work is in what enters it. Our explainer on [the agent loop](https://lowob.com/research/what-is-an-agent-loop/) covers the mechanics; this piece is about the inputs.

## The loop is cheap; the context is the work

Anthropic's engineering guidance describes context engineering as "the set of strategies for curating and maintaining the optimal set of tokens" during a model's work, and treats it as the successor to prompt engineering. Its goal is the "smallest possible set of high-signal tokens" that makes the desired outcome likely. The reason is empirical. Chroma's July 2025 technical report tested 18 models from Anthropic, OpenAI, Google and Alibaba and found reliability fell as input length grew, even on simple retrieval tasks. Liu and colleagues had earlier found that models do best when relevant information sits at the start or end of a long input and worse when it sits in the middle.

Public accounts from teams building on financial data describe the same pressure from the practitioner side. Nicolas Bustamante, who builds a financial-research agent at Fintool, wrote in February 2026 that "past 32K tokens, most models show sharp performance degradation" in his experience, and that crossing 200,000 input tokens triggers premium pricing on some models. In a January 2026 account he wrote that normalising financial data was "80% of the work", with off-the-shelf parsers failing on multi-column proxy statements and scanned exhibits. These are one builder's observations, not a controlled study, but they match the research.

The lesson every serious team reaches is the same: you cannot pour everything in. You have to choose. Our comparison of [long context windows and RAG](https://lowob.com/research/long-context-vs-rag/) covers the trade-offs in more depth. That shift, from prompt engineering to context engineering, has a corollary few teams act on.

## Documents tell the loop what is true. Decisions tell it what we do.

Most context pipelines carefully index the material that describes the world. They index the company's own past decisions not at all. The loop is then asked to reason like a senior analyst while seeing only what a capable new hire would see on day one: the facts, without the house view of what the facts usually mean.

| Context source | What it tells the loop | Usually indexed |
| --- | --- | --- |
| Policies and rules | What is allowed | Yes |
| Research, filings, reference data | What is true about the world | Yes |
| Product documentation | What the company sells and how it works | Yes |
| Prior decisions with reasons and outcomes | What this company does in cases like this, and what happened | Rarely |
| Recorded dissent | Where the people who knew the case disagreed | Almost never |

A senior analyst's edge is rarely that they know more facts. It is that they remember the three similar cases, what was decided, what went wrong in one of them, and which signal turned out to matter. That is retrievable, if anyone wrote it down. Our explainer on [decision precedent in AI](https://lowob.com/research/what-is-decision-precedent-in-ai/) sets out how precedent differs from rules, memory and format examples.

> A senior analyst's edge is rarely that they know more facts. It is that they remember the three similar cases and what went wrong in one of them.

## Designing a precedent slot

The practical design is a reserved section of every agent's context, a precedent slot, filled before the task runs.

**What goes in.** The three to five most comparable prior decisions in the same class. Each carries the decision, the one-sentence reason, the outcome if known, and any recorded dissent. Superseded decisions are excluded or clearly marked as replaced, for the reasons set out in [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/).

**How comparability is judged.** Selection matters. Liu and colleagues showed in 2021 that GPT-3's results varied widely with the choice of in-context examples, and that retrieving examples close to each new input beat random choice, with reported gains of 41.9% on a table-to-text task and 45.5% on open-domain question answering. Their closeness was measured in sentence-embedding space, which works when similar wording means a similar task. For business decisions it often does not. Text similarity matches cases that are described alike. Applicability fields match cases that are alike.

| Applicability field | Example values | Why it matters |
| --- | --- | --- |
| Decision class | Renewal discount, credit exception, partner terms | Precedent from another class misleads |
| Segment | Mid-market, enterprise, public sector | Same request, different economics |
| Size band | Contract value or headcount range | Thresholds change by size |
| Stage | New business, renewal, expansion | Different risks at each stage |
| Jurisdiction | Country or regulatory regime | Rules and norms differ |
| Trigger | Competing quote, budget cut, late payment | The cause often decides the answer |

Records need those fields at capture time, or similarity search degrades into keyword matching. Our piece on [the commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/) lists where to start.

**How much budget.** Small. A few hundred tokens per precedent, summarised from the source record, with a link back. Anthropic's guidance favours "diverse, canonical examples" over long lists of edge cases, and the same applies here. Precedent should be dense, not long.

## The failure mode to design against

Precedent creates anchoring. In our experience, a model given three prior approvals will find reasons to approve. Two guards help.

First, always include outcomes, and deliberately include at least one comparable case that went badly, when one exists. A precedent set made only of successes is a pitch.

Second, instruct the loop to state how the current case differs from each precedent before it uses them. The differences are often where the judgment lies. If the loop cannot name a difference, that is itself worth a reviewer's attention.

Illustrative example: a renewal-preparation agent

Decision
:   Add a precedent slot to the agent that prepares renewal briefs, holding the four closest prior renewal decisions by segment, size band and trigger.

Reason and owner
:   Reviewers said briefs were accurate but generic, and kept adding "last time we did X" by hand. Owned by the head of account management.

What changed
:   The slot included one renewal where a discount was granted and the account churned anyway. The agent began flagging when a new request matched that pattern, and stated how the current case differed.

Illustrative: a composite of a mid-size B2B services firm, built from patterns across engagements.

## Test it blind before you trust it

Pick one agent workflow and add a precedent slot. Add four or five applicability fields to the decision records it draws from, so comparability is about situation, not wording. Then run the precedent version side by side with the current version on twenty cases. Give both preparations to the usual reviewer without saying which is which, and record which was more useful and why.

Twenty cases is small. Read the result as direction, not proof, and look at the reasons as much as the tally. Useful signals are whether the reviewer cited a precedent in the final decision, whether the stated differences were correct, and whether review took less time.

**What would prove this wrong:** a blind comparison in which adding precedent makes no difference to reviewer-judged quality, or makes it worse through anchoring that the guards do not fix.

## lowob takeaways

- **Choose what enters the loop.** Longer context is less reliable, so selection is the engineering.
- **Index decisions, not just documents.** Policies say what is allowed; precedent says what the company does.
- **Match on situation.** Applicability fields such as segment, stage and jurisdiction beat text similarity.
- **Guard against anchoring.** Include a case that went badly and make the loop state how the current case differs.
- **Test blind.** Twenty cases, the usual reviewer, no labels.

## Common questions

### What is a precedent slot in an AI agent?

A reserved section of an agent's context, filled before the task runs, holding the three to five most comparable prior decisions with the decision, the one-sentence reason, the outcome if known and any recorded dissent.

### Does a bigger context window remove the need to choose what an agent sees?

No. Chroma's tests of 18 models found reliability falls as input length grows, and earlier research found models miss information placed mid-context. Selecting a small, high-signal set still matters.

### How do you pick comparable past cases for an AI agent?

Use applicability fields that describe the situation, such as decision class, segment, size band, stage, jurisdiction and the trigger for the decision. Text similarity matches cases described alike, which degrades into keyword matching.

### Does giving an AI agent past decisions cause anchoring?

It can. Include outcomes and at least one comparable case that went badly, and have the loop state how the current case differs from each precedent before it uses them.

## Sources and notes

- [Anthropic, Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 29 September 2025. Vendor engineering guidance.
- [Chroma, Context Rot: How Increasing Input Tokens Impacts LLM Performance](https://www.trychroma.com/research/context-rot), 14 July 2025. Vendor technical report; 18 models on synthetic tasks.
- [Liu et al., Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172v3), July 2023. Academic preprint; models tested are older than current ones.
- [Liu et al., What Makes Good In-Context Examples for GPT-3?](https://arxiv.org/pdf/2101.06804), January 2021. Academic preprint; benchmark tasks, not business decisions.
- [Nicolas Bustamante, The LLM Context Tax](https://www.nicolasbustamante.com/p/the-llm-context-tax-best-tips-for), 10 February 2026. Practitioner essay by a vendor founder; observations, not a controlled study.
- [Nicolas Bustamante, Lessons from Building AI Agents for Financial Services](https://nicolasbustamante.com/blog/lessons-from-building-ai-agents-for-financial-services), 23 January 2026. Practitioner account from one product team.
- The precedent slot, applicability fields and anchoring guards are **lowob**'s working method.

## Related research

- [What Is Decision Precedent in AI?](https://lowob.com/research/what-is-decision-precedent-in-ai/)
- [What Is Context Engineering?](https://lowob.com/research/what-is-context-engineering/)
- [Long Context Windows vs RAG](https://lowob.com/research/long-context-vs-rag/)
- [Buy Context. Own Judgment. What Enterprise AI Teams Should Build](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [Retrieval Is Not the Bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)

## Next move

Pick one agent workflow and add a precedent slot with three comparable prior decisions, outcomes and dissent. Run it side by side with the current version on twenty cases and have the usual reviewer judge, blind, which preparation was more useful.

[Start a conversation](https://lowob.com/contact/)
