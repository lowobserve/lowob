# What Is Decision Precedent in AI?

Source: https://lowob.com/research/what-is-decision-precedent-in-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: Decision precedent in AI means giving a model comparable past decisions, each with its reason, owner and outcome, as context when it helps with a new decision. The model's recommendation then reflects how the company has actually decided before and what happened as a result, not only general rules. In **lowob**'s model this lives in a precedent slot: a reserved part of the agent's context holding three to five comparable past decisions, including at least one that went badly. Precedent comes from the decision record. Without recorded reasons and outcomes, there is nothing useful to retrieve.

*Figure: The Build Order, end to end. This piece maps the whole route.*

## Key points

- Case-based reasoning, set out by Aamodt and Plaza in 1994, solves new problems by retrieving similar past cases, reusing them, testing the solution and learning from the result.
- Liu and colleagues found in 2021 that choosing in-context examples similar to the new input beat random choice, with reported gains of 41.9% on a table-to-text task and 45.5% on open-domain question answering.
- Anthropic's 2025 context engineering guidance recommends "diverse, canonical examples" rather than "a laundry list of edge cases".
- A December 2025 investor essay on context graphs observed that a CRM records the final price but not who approved the exception or why.
- A precedent without an outcome teaches a model to repeat decisions, not to learn from them.

## What decision precedent means

Commercial decisions are rarely made from rules alone. A seller asking for a 15% discount on a renewal will be told the policy, and then someone will ask what was done last time a similar client asked. That second question is precedent.

An AI system can be given the same material. Precedent differs from the other things a model is usually given.

| Context type | What it holds | Commercial example |
| --- | --- | --- |
| Rule | A standing policy | "Discounts above 10% need finance approval" |
| Precedent | A specific past decision with reason, owner and outcome | "Approved 15% on a three-year renewal; reason: competing quote; owner: revenue lead; outcome: renewed, margin held" (illustrative) |
| Memory | What an agent recalls from earlier sessions | "This user prefers short briefs" |
| Example | A sample of the format wanted | A model meeting brief |

The idea has a long history. Aamodt and Plaza's 1994 paper in *AI Communications* framed case-based reasoning as a cycle of case retrieval, reuse, solution testing and learning. Language models made it cheap: instead of hand-built case libraries, past decisions can be retrieved and placed in context as text.

The evidence that selection matters is also older than agents. Liu and colleagues showed GPT-3's results depended heavily on which examples it was shown, and that retrieving examples semantically similar to each new input outperformed random selection. For a commercial decision, "similar" should mean the same decision class, segment and size, not just similar wording.

## How the precedent slot works

**lowob**'s precedent slot is a fixed part of an agent's context, filled before it reasons about a decision. Each entry carries the fields of a [decision record](https://lowob.com/research/what-is-a-decision-record/).

| Field | Why the model needs it |
| --- | --- |
| What was decided | The comparison point |
| Reason | So the model can judge whether the same reason applies now |
| Owner | So a person can be asked, and accountability is visible |
| Status | Superseded decisions are excluded or marked as replaced |
| Expected outcome | What the owner thought would happen |
| Actual outcome | What did happen, written back later |

The slot holds three to five entries, including at least one that went badly. Fewer gives the model too little to compare; more adds noise. Anthropic's guidance on context makes the same trade-off in general terms: find the "smallest possible set of high-signal tokens", because recall degrades as context grows. The bad outcome is there because a model shown only successes will recommend repeating them.

The model is asked to say which precedent it relied on and why the current case is like or unlike it. A person decides. The new decision is recorded, and when its outcome arrives it is [written back](https://lowob.com/research/what-is-outcome-write-back/). That record becomes a future precedent. This is the brain's loop in miniature: record, reasoning, learning.

## Why it matters for a commercial team

Most firms already make decisions by precedent; they keep it in people's heads. The investor Ashu Garg's essay on context graphs put the gap well: "Salesforce knows what happened. It doesn't know why." An opportunity record shows the final price, not that a vice-president approved the deviation on a call, or which earlier deal it was meant to match.

An AI system cannot retrieve reasons nobody recorded. That is why **lowob** starts the record on the commercial line, with [the decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/), before asking agents to reason over it.

## Common mistakes

- **Successes only.** The slot then teaches repetition, not judgment.
- **Superseded precedents.** A decision made under an old pricing policy should be marked as replaced, never silently reused. See [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/).
- **Client detail travelling.** Precedent can be passed as a pattern, such as segment, size and discount, without another client's name or terms.
- **No outcome field.** Without outcomes, precedent is just history.

## lowob takeaways

- **Precedent is past decisions as context.** Each with reason, owner and outcome.
- **Three to five, one bad.** A small, mixed set beats a large or flattering one.
- **Similarity should be structural.** Match on decision class, segment and size, not wording.
- **No record, no precedent.** Reasons and outcomes must be written down first.

## Common questions

### What is a precedent slot in an AI agent?

A reserved part of the agent's context holding three to five comparable past decisions, each with its reason, owner and outcome, including at least one that went badly. The term is **lowob**'s.

### How is decision precedent different from few-shot prompting?

Few-shot examples show a model the format or behaviour wanted. Precedents are real past decisions with reasons and outcomes, chosen because they resemble the decision at hand.

### Where does an AI agent get precedents from?

From a decision record: a structured log of what was decided, why, by whom, its status, and its expected and actual outcomes.

## Sources and notes

- [Aamodt and Plaza, Case-Based Reasoning: Foundational Issues, Methodological Variations, and System Approaches](https://www.doi.org/10.3233/AIC-1994-7104), *AI Communications* 7(1), 1994. Academic paper; predates language models.
- [Liu et al., What Makes Good In-Context Examples for GPT-3?](https://arxiv.org/pdf/2101.06804), January 2021. Academic preprint; benchmark tasks, not business decisions.
- [Anthropic, Effective context engineering for AI agents](https://anthropic.com/engineering/effective-context-engineering-for-ai-agents), 29 September 2025. Vendor engineering guidance.
- [Ashu Garg, AI's trillion-dollar opportunity: Context graphs](https://ashugarg.substack.com/p/ais-trillion-dollar-opportunity-context), 26 December 2025. Investor essay; argument, not evidence.
- The precedent slot, its size and the one-bad-outcome rule are **lowob**'s working method.

## Related research

- [A loop with good context](https://lowob.com/research/a-loop-with-good-context/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/)
- [The Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)

## Next Move

Pick one recurring decision, such as discount exceptions, and write up the last five with reason, owner and outcome. If you cannot fill the reason and outcome fields, you have found what to record first.

[Start a conversation](https://lowob.com/contact/)
