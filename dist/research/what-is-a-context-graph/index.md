# What Is a Context Graph?

Source: https://lowob.com/research/what-is-a-context-graph/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: A context graph is a connected record of decision traces, such as the rules applied, exceptions granted, approvals given and precedents used, linked to the people, accounts and documents they concern. The term was popularised by Foundation Capital in December 2025 and vendors now define it in different ways. In lowob's model it captures part of the decision record automatically, but not the expected outcome, falsifier or check date.

A context graph is a connected record of decision traces, meaning the rules applied, exceptions granted, approvals given and precedents used, linked to the people, accounts and documents they concern, so an AI agent can see how a company actually decides. The term spread after a December 2025 Foundation Capital essay. Vendors now use it for different things, and most capture what was done and by whom better than whether it worked.

*Figure: Where this piece sits in The Build Order: the context layer.*

Context graphs try to automate part of the record layer of the enterprise brain, the loop of store, wiring, record, reasoning and learning described in [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/). The buyer's question is which parts of a decision a product captures.

## What is a context graph?

A context graph is a graph of decisions as well as things: each decision trace is linked to the entities, policies and earlier decisions it touched. It answers "how and why was this done?" where a system of record answers "what is the state now?"

Foundation Capital partner Ashu Garg's essay of 26 December 2025, co-written with Jaya Gupta, gives the definition most others cite: "a living record of decision traces stitched across entities and time so precedent becomes searchable." Its example of a trace is "we used X definition, under policy v3.2, with a VP exception, based on precedent Z, and here's what we changed." The essay's sharpest line is about CRMs: "Salesforce knows what happened. It doesn't know why."

## Where did the term come from?

From venture investors, in late 2025. The essay argued that the next generation of enterprise platforms would be "systems of record for decisions, not just objects."

Foundation Capital's follow-up of 30 January 2026, "Context graphs, one month in," called the context graph "institutional memory for how an organization makes decisions" and set out the objections it had received. Critics argued that intent is unobservable, so only actions can be captured; the authors replied that recording the policy applied, the evidence used and the approver is enough to infer reasons from patterns. Others called it "data catalog 3.0." The follow-up also acknowledged that precedent decays when policy or leadership changes. On a Foundation Capital podcast of 16 January 2026, Altimeter's Jamin Ball gave the bear case: context graphs could "become like semantic layers," "great in theory, but never fully realized in practice."

## How do vendors define a context graph?

Differently, and the differences matter more than the shared name.

| Source and date | Type | Definition or description | What it emphasises |
| --- | --- | --- | --- |
| Garg and Gupta, Foundation Capital, 26 December 2025 | Investor essay | "A living record of decision traces stitched across entities and time" | Exceptions, approvals and precedent |
| Glean blog, 5 February 2026 | Vendor | "A model that connects your enterprise entities (people, documents, tickets, systems)" plus traces of actions between them | Aggregated behaviour: "who did what, in which apps, in what order" |
| Arize blog, 8 January 2026 | Vendor | Uses Foundation Capital's framing; treats agent traces as "durable business artifacts" | Agent run logs kept and analysed |
| Neo4j blog, 4 August 2026 | Vendor | "A connected representation of the knowledge, state, history, and decision records" an agent needs | Three memories: enterprise knowledge, conversation, reasoning traces |
| Zep paper, 20 January 2025 | Vendor research | A "temporally-aware knowledge graph engine" for agent memory; not branded a context graph | Facts that change over time, with history kept |

All five come from parties with a product or portfolio interest; none is independently tested. Glean's version, built from views, edits and comments, is a map of how work flows, not a record of who approved which exception. Neo4j's version is closer to a decision record: its example support agent's trace shows it "checked the order record, compared the request against policy" before approving a refund.

## How is a context graph different from a knowledge graph?

A knowledge graph stores entities and their relationships; a context graph adds decisions, actions and their sequence. Glean's February 2026 post puts it in one line: "Traditional data and knowledge systems model things," while a context graph "models behavior."

The two are layered. Glean writes that "activity signals on their own are noisy, you need knowledge graphs underneath." Neo4j treats the knowledge graph as an agent's long-term memory and adds short-term conversation memory and reasoning memory on top. The [knowledge graph explainer](https://lowob.com/research/what-is-a-knowledge-graph/) covers the base layer; [Semantic layer vs knowledge graph](https://lowob.com/research/semantic-layer-vs-knowledge-graph/) covers shared definitions.

## How does a context graph relate to a decision record?

A decision trace is a partial decision record, captured automatically. It usually holds the decision, the policy, the approver and the precedent. It rarely holds the expected outcome, the falsifier or the check date.

| Decision record field | Typical context graph trace |
| --- | --- |
| Decision | Captured, as the action taken |
| Reason | Partly: the policy and precedent cited, not the argument |
| Owner and approver | Captured where the approval happened in a connected tool |
| Status | Rarely: traces are events, not current or superseded states |
| Expected outcome | Not captured; it was never written down |
| Falsifier | Not captured; it requires a stated measure, threshold, date and observer |
| Check date | Not captured |
| Supersedes | Sometimes, in temporal designs such as Zep's |
| Outcome written back | Possible where results flow back from the CRM |

The missing fields make a record gradable; [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/) explains why the falsifier is the one that matters most. Status and supersession matter for agents in particular: a trace from last year's pricing policy is a misleading precedent unless something marks it replaced, which is the decay the Foundation Capital follow-up conceded. [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) sets out the rule, and [Decision precedent in AI](https://lowob.com/research/what-is-decision-precedent-in-ai/) covers how precedents should be selected for an agent.

**lowob**'s rule applies: rent the wiring, own the record. Rent the graph if it captures traces well; own the fields no trace can supply, and check that the record exports whole.

## Does a company need a context graph?

Not as a first step. A mid-size company gains more from recording one recurring decision class well before automating capture.

A context graph earns its cost where decisions are frequent and spread across many tools and people, as in large support, sales and finance operations. For a 50-person firm making a few dozen pricing exceptions a quarter, a structured [decision record](https://lowob.com/research/decision-record-template/) in a shared table captures the same information and adds the fields a graph leaves out.

## lowob takeaways

- **It records decisions, not just things.** Traces of rules, exceptions, approvals and precedents, linked to entities.
- **Definitions vary by vendor.** Check whether a product captures approvals and exceptions or only activity.
- **Traces are partial records.** Expected outcome, falsifier and check date still need a person.
- **Mark what is superseded.** Old precedent misleads an agent unless it is flagged as replaced.

## Common questions

### What is a context graph in AI?

A context graph is a connected record of decision traces, such as the rules applied, exceptions granted, approvals given and precedents used, linked to the people, accounts and documents involved. It lets an AI agent see how an organisation has actually decided similar cases. The term was popularised by a Foundation Capital essay in December 2025 and vendors define it differently.

### What is the difference between a context graph and a knowledge graph?

A knowledge graph stores entities and the relationships between them, such as which contact works at which account. A context graph adds decisions and actions: what was done, under which policy, with whose approval and in what order. Vendors such as Glean and Neo4j build the context graph on top of a knowledge graph rather than in place of one.

### What are decision traces?

Decision traces are records of how a specific case was handled: the policy applied, any exception granted, the precedent relied on, who approved it and what changed. Foundation Capital's December 2025 essay gives the example of a definition used under a named policy version with a VP exception based on an earlier precedent. Traces accumulate into a context graph.

### Is a context graph the same as a decision record?

No. A decision trace captures part of a decision record automatically, usually the action, policy, approver and precedent. A decision record also holds the reason in full, a status, the expected outcome, a falsifier and a check date, which no tool can observe because they exist only when someone writes them down at the moment of decision.

## Sources and notes

- [Ashu Garg, AI's trillion-dollar opportunity: Context graphs](https://ashugarg.substack.com/p/ais-trillion-dollar-opportunity-context), 26 December 2025, co-written with Jaya Gupta. Investor essay; argument, not evidence.
- [Foundation Capital, Context graphs, one month in](https://foundationcapital.com/context-graphs-one-month-in/), 30 January 2026. Investor follow-up summarising objections.
- [Foundation Capital, Why context graphs are the missing layer for AI](https://foundationcapital.com/ai-context-graphs/), 16 January 2026. Podcast page with guests from Altimeter and PlayerZero; opinion.
- [Glean, How do you build a context graph?](https://www.glean.com/blog/how-do-you-build-a-context-graph), 5 February 2026. Vendor blog describing its own product.
- [Neo4j, What is a context graph?](https://neo4j.com/blog/agentic-ai/what-is-context-graph/), 4 August 2026. Vendor blog; byline and metadata name different authors.
- [Arize, How context graphs turn agent traces into durable business assets](https://arize.com/blog/how-context-graphs-turn-agent-traces-into-durable-business-assets/), 8 January 2026. Vendor blog.
- [Rasmussen et al., Zep: A Temporal Knowledge Graph Architecture for Agent Memory](https://arxiv.org/abs/2501.13956), arXiv, 20 January 2025. Vendor research paper on its own product.
- The field-by-field comparison with the decision record and the sizing guidance are **lowob**'s analysis.

## Related research

- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [What Is a Knowledge Graph (for AI)?](https://lowob.com/research/what-is-a-knowledge-graph/)
- [What Is Decision Precedent in AI?](https://lowob.com/research/what-is-decision-precedent-in-ai/)
- [Decision Record Template: Fields, Example and How to Use It](https://lowob.com/research/decision-record-template/)
- [Five Invariants, From Two People to Ten Thousand](https://lowob.com/research/five-invariants-from-two-people-to-ten-thousand/)

## Next move

Take the last pricing exception your team approved and check which parts of it a tool could have captured: the action, the approver, the policy. Then write down the parts no tool saw, the reason and the expected outcome, as a decision record.

[Start a conversation](https://lowob.com/contact/)
