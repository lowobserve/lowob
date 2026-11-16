# AI Agent vs Chatbot: The Difference That Matters to a Buyer

Source: https://lowob.com/research/ai-agent-vs-chatbot/
Publisher: lowob (https://lowob.com)
Published: 2026-10-22 · Updated: 2026-11-16
Function: Strategy

> Summary: A chatbot answers questions in a conversation; an AI agent pursues a goal and takes actions through tools. OpenAI's own guide says simple chatbots are not agents. For a buyer the difference is what the system can change, who is liable when it is wrong, and what evidence it leaves behind.

A chatbot is a conversational interface that answers a person's questions, from a script or a language model. An AI agent is given a goal and works toward it, choosing its next step and acting through tools such as a CRM, a billing system or email. For a buyer, the useful question is what the system is allowed to change, because that sets the risk, the controls and the price.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What the two terms mean

A chatbot holds a conversation. Older ones follow decision trees; newer ones put a language model behind the window, often with retrieval over help articles. Either way the output is a reply.

An agent holds a goal. OpenAI defines agents as "systems that independently accomplish tasks on your behalf": a model manages the workflow and makes decisions, and it has tools that reach external systems. The same guide places simple chatbots, single-turn model calls and sentiment classifiers outside the definition.

The line is not the interface. Many agents are reached through a chat window. The line is whether the system can change something outside the conversation: issue a refund, update a record, send an email.

|  | Chatbot | AI agent |
| --- | --- | --- |
| Starts from | A message | A goal, from a person or a trigger |
| Output | A reply | A completed task, or a task handed back |
| Touches other systems | Reads, if at all | Reads and writes through tools |
| Who decides the next step | The person in the chat | The agent, within set limits |
| Autonomy dial | 0 answer | 1 draft up to 4 act alone |
| Typical failure | A confident wrong answer | A wrong action taken with real permissions |
| Evidence needed | Conversation transcript | Trace of each decision, tool call and approval |

## Why the difference matters to a buyer

**Liability does not move to the software.** In *Moffatt v. Air Canada* (2024 BCCRT 149), the airline's chatbot wrongly told a customer he could claim a bereavement fare after travel. The tribunal found negligent misrepresentation. It wrote that Air Canada "is responsible for all the information on its website", whether it "comes from a static page or a chatbot." The award was about CA$812. The principle matters more than the sum: a firm answerable for a chatbot's words is answerable for an agent's actions.

**Regulated firms have duties a chatbot can break.** The CFPB's June 2023 issue spotlight found that all ten of the largest US commercial banks use chatbots. It warned they can give inaccurate information, miss when a consumer is invoking federal rights, and trap customers in loops with no route to a person. An agent that can act on an account carries the same duties.

**The controls differ in kind.** A chatbot needs content controls: scope limits, grounding in approved sources, a handoff to a human. An agent needs those plus action controls. OpenAI recommends rating each tool's risk and names two triggers for human intervention: exceeding failure thresholds, and high-risk actions such as cancelling orders or authorising large refunds.

**The price follows the capability.** Chatbots are usually priced per seat or per conversation. Agents are increasingly priced per resolution, which only works if someone defines a resolution and checks it.

## How to test a vendor's claim

Vendors use "agent" loosely; the pattern is covered in [What is agent washing?](https://lowob.com/research/what-is-agent-washing/). Five questions settle most claims in one demo.

| Question to ask | Chatbot answer | Agent answer |
| --- | --- | --- |
| Which systems can it write to, with whose credentials? | None | A named list, with scoped service accounts |
| Does the path change for a different case? | No, same flow every time | Yes, steps vary with the input |
| What happens when a step fails? | Hands off to a person | Retries within a limit, then hands off |
| Which actions need approval first? | Not applicable | A named list, set by you |
| What record does each run leave? | Transcript | Decisions, tool calls, approvals and outcome |

## The **lowob** view

**lowob** treats both as parts of one loop: store, wiring, record, reasoning and learning. A chatbot sits on the reasoning step and draws on the store through retrieval; it rarely writes anything back. An agent touches every step. It reads through the wiring and acts. It should then leave a record of what it decided, on what evidence, who approved it and what was expected. The outcome flows back so the next run learns.

So the buying decision is about permissions, not labels. A system that only answers can start at dial level 0, with a clear handoff to a person. Anything that writes to a customer record, a price or an outbound message starts at level 1 or 2, with a person approving before it sends. Move up one notch at a time, on evidence from the record.

## lowob takeaways

- **The test is what it can change.** A system that only replies is a chatbot, whatever the label says.
- **Liability stays with the firm.** A tribunal has already held a company responsible for its chatbot's answers.
- **Agents need action controls.** Scoped credentials, approval lists and failure limits, on top of content controls.
- **Buy the record with the agent.** Each run should leave decisions, tool calls, approvals and the outcome.

## Sources and notes

- [OpenAI, A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf), 2025. Vendor guide; definitions and guardrail patterns.
- [Civil Resolution Tribunal of British Columbia, Moffatt v. Air Canada, 2024 BCCRT 149](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do), 14 February 2024. Primary small-claims decision; not binding outside its tribunal.
- [Consumer Financial Protection Bureau, Issue spotlight analyzes "artificial intelligence" chatbots in banking](https://www.consumerfinance.gov/about-us/newsroom/cfpb-issue-spotlight-analyzes-artificial-intelligence-chatbots-in-banking), 6 June 2023. US regulator report, since archived; the 37% figure is an estimate for 2022.
- [Gartner, Agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029](https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290), 5 March 2025. Analyst prediction, not a measured outcome.
- The autonomy dial and the five vendor questions are **lowob**'s framework.

## Related research

- [What is an AI agent?](https://lowob.com/research/what-is-an-ai-agent/)
- [AI copilot vs AI agent](https://lowob.com/research/ai-copilot-vs-ai-agent/)
- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Top 5 AI customer service agents by pricing model](https://lowob.com/research/top-5-ai-customer-service-agents-by-pricing-model/)

## Next move

List every chatbot or agent your customers or staff can reach and note the systems each one can write to. Anything with write access and no named approver is the first thing to fix.

[Start a conversation](https://lowob.com/contact/)
