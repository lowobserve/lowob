# What Is Agentic AI?

Source: https://lowob.com/research/what-is-agentic-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: Agentic AI is software that pursues a goal by planning its own steps, calling tools and acting on the results, with limited human supervision. It differs from a chatbot, which answers one prompt, and from a fixed workflow, which follows steps written in advance. The category is growing fast and failing often. Teams that succeed set the level of autonomy per task and start with work that is cheap to get wrong.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- IBM defines agentic AI as a system that can accomplish a specific goal with limited supervision; the model chooses the steps.
- Anthropic separates workflows (steps fixed in code) from agents (the model directs its own process and tool use), and advises using the simplest option that works.
- Gartner predicts 33% of enterprise software applications will include agentic AI by 2028, up from less than 1% in 2024.
- Gartner also predicts more than 40% of agentic AI projects will be cancelled by the end of 2027, citing cost, unclear value and weak risk controls.
- McKinsey's 2025 survey found 62% of organisations at least experimenting with agents, but only 23% scaling them anywhere.

## What agentic AI means

IBM's definition is a useful starting point: agentic AI is a system that can accomplish a specific goal with limited supervision. Where generative AI produces content in response to a prompt, agentic AI applies those outputs towards a goal, one step after another.

Anthropic, in its December 2024 guidance on building agents, draws a sharper line. Workflows are systems where models and tools are orchestrated through predefined code paths. Agents are systems where the model dynamically directs its own process and tool use. Both are "agentic systems", and both are built from the same unit: a model with access to retrieval, tools and memory.

Anthropic's advice is to find the simplest solution possible and add complexity only when needed. Many business problems need a workflow, not an agent.

| It is | It is not |
| --- | --- |
| A model that plans steps and chooses tools to reach a goal | A chatbot that answers one question and stops |
| Software that reads from and writes to other systems | A rules engine or RPA script with fixed branches |
| Something whose autonomy you set per task | A product that is either "on" or "off" |
| A component inside a larger system of data, records and review | The whole system on its own |

## How it works, and why it matters on the commercial line

An agent runs a loop: it receives a goal, reads from connected systems, calls a tool such as a CRM search, checks the result and decides again. Standards such as the Model Context Protocol make those connections cheaper to build.

The loop makes agents both useful and risky. A model that can update a CRM record can update the wrong one. So the question for a commercial team is what the agent may do without a person.

**lowob** treats this as a dial with five settings:

| Level | What the agent does | Example on the commercial line |
| --- | --- | --- |
| 0 Answer | Responds to questions only | "Which deals have had no activity in 30 days?" |
| 1 Draft | Prepares work for a person to send or apply | Follow-up email drafts in a review queue |
| 2 Act with approval | Takes an action once a person approves it | Updates a deal stage after a click to confirm |
| 3 Act and report | Takes reversible actions and reports them | Fixes missing fields, then lists the changes nightly |
| 4 Act alone | Acts without review | Rarely appropriate for anything client-facing |

Nothing client-facing should sit above level 1 at the start. Nothing sends without a person.

Gartner predicts that by 2028 at least 15% of day-to-day work decisions will be made autonomously through agentic AI, up from 0% in 2024. Yet in its January 2025 poll of 3,412 webinar attendees, only 19% reported significant investment.

## Where to start, and the common mistakes

The failure pattern is consistent. Gartner's Anushree Verma said most agentic AI projects are "early stage experiments or proofs of concept". McKinsey's 2025 survey of 1,993 respondents found that while 62% were experimenting with agents, only 23% were scaling them anywhere in the enterprise.

Three mistakes account for most of the waste:

- **Starting with the most visible job.** Autonomous outbound or a prospect-facing chatbot reaches clients directly, so a bad day becomes a client apology.
- **Buying a label.** Many products marketed as agents are assistants or scripts renamed. See our explainer on agent washing.
- **Skipping the record.** An agent that acts without writing down what it did, and why, leaves nothing to audit and nothing to learn from.

A better first job is frequent, checkable, low in blast radius and disliked. On the commercial line, a pipeline clerk that keeps the CRM current and drafts follow-ups passes all four tests.

Agents are also only the reasoning stage of what **lowob** calls the enterprise brain. Without clean data and a decision record around them, they reason over noise.

## lowob takeaways

- **Define it by behaviour.** An agent chooses its own steps and tools; a workflow follows steps you wrote.
- **Prefer the simpler option.** Use a workflow unless the task really needs the model to decide the path.
- **Set autonomy per task.** Reversible internal changes can run and report; client-facing work stays a draft.
- **Start boring.** Pick a first job whose worst day is an internal annoyance.

## Common questions

### What is the difference between agentic AI and generative AI?

Generative AI produces content in response to a prompt. Agentic AI uses those outputs to pursue a goal across several steps, calling tools and acting on results with limited supervision.

### Is an AI agent the same as a workflow automation?

No. In a workflow, a developer fixes the steps in code. In an agent, the model decides which steps and tools to use. Many business tasks are better served by a workflow.

### Why do agentic AI projects fail?

Gartner cites escalating costs, unclear business value and inadequate risk controls. Ambitious, client-facing first projects make all three more likely.

### How much autonomy should an AI agent have?

Set it per task. Answering and drafting are safe starting points; acting alone should be reserved for reversible, internal work with a track record.

## Sources and notes

- [IBM, What is agentic AI?](https://ibm.com/think/topics/agentic-ai), undated explainer. Vendor definition.
- [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents), 19 December 2024. Vendor engineering guidance.
- Gartner forecast and January 2025 poll, 25 June 2025, as reported by [RCR Wireless](https://www.rcrwireless.com/20250627/business/agentic-ai) and [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says). Analyst predictions; poll of webinar attendees, not a random sample.
- McKinsey, The state of AI in 2025, as reported by [IDM](https://idm.net.au/node/15415). Self-reported survey of 1,993 respondents, June to July 2025.
- The autonomy dial and four tests for a first job are **lowob**'s working method.

## Related research

- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)

## Next Move

List three agent ideas your team has discussed and assign each an autonomy level from 0 to 4. Any idea that only works at level 4 should not be your first project.

[Start a conversation](https://lowob.com/contact/)
