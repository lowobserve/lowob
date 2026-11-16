# What Is an Agent Loop?

Source: https://lowob.com/research/what-is-an-agent-loop/
Publisher: lowob (https://lowob.com)
Published: 2026-09-28 · Updated: 2026-11-16
Function: Strategy

> Summary: The agent loop is the repeated cycle of reason, act and observe that turns a language model into an agent. The pattern was set out in the ReAct paper and is now built into every major agent SDK. Because the loop is standard, the useful controls sit at its edges: what enters context, which tools it may call, where it pauses for a person and when it stops.

An agent loop is the repeated cycle in which an AI model reads the current state, decides on a next step, calls a tool, observes the result and goes round again until it finishes or a limit stops it. It is what separates an agent from a single model call. The loop itself is now standard in every major agent toolkit. What differs between agents is the context that goes in and the limits placed around it.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What an agent loop means

A model on its own answers once. An agent keeps going. Each pass through the loop has the same shape, and each step has its own failure mode.

| Step | What happens | Where it goes wrong | Control |
| --- | --- | --- | --- |
| Read | The model receives instructions, history and retrieved material | Stale or missing context | Current records, scoped retrieval, precedents |
| Decide | It chooses to answer or to call a tool | Misread goal, wrong tool | Clear tool descriptions, few tools |
| Act | The application runs the tool call | Over-broad action | Permissions, draft-only tools, blocking hooks |
| Observe | The result is added to context | Hostile or misleading tool output | Treat tool output as data, not instructions |
| Stop | The model gives a final answer, or a limit is hit | Runs long, costs too much | Turn and budget caps, a defined finish |

The pattern has a short history. ReAct, from Princeton and Google Research researchers, had models write a reasoning step, take an action such as a Wikipedia lookup, read the result and continue. Grounding each step in retrieved facts reduced the hallucination and error propagation seen when models reasoned without acting.

## How it works in today's toolkits

Anthropic's documentation for its Claude Agent SDK walks through a four-turn example. Asked to fix failing tests, the agent runs the tests, reads two files, edits one and reruns the tests, then replies in text with no tool call. That text-only reply ends the loop. The SDK offers a maximum number of turns and a maximum spend in dollars; both default to no limit, and the documentation recommends a budget as "a good default for production agents".

OpenAI's Agents SDK describes the same cycle with one addition: a handoff, where control passes to a different agent. If the run exceeds its `max\_turns` setting, the SDK raises a `MaxTurnsExceeded` error.

Two details matter for business use. First, context accumulates. Every tool result stays in the conversation, and when the window fills, Anthropic's SDK summarises older history. Its documentation warns that instructions from early in a session may not survive, so standing rules belong in a file reloaded on every request. Second, both SDKs let code intervene between deciding and acting. Anthropic's "hooks" can block a tool call before it runs, and its permission modes range from asking before each tool to running without approval.

An illustrative commercial loop: a meeting-prep agent searches the CRM for the account, reads the last email thread, opens the current proposal, drafts a brief and stops. Four or five turns, all read-only except one draft. Nothing in that loop needs to send.

## Why it matters for a commercial team

Because the loop is a commodity, buying decisions should not rest on it. As we argued in [A loop with good context](https://lowob.com/research/a-loop-with-good-context/), two agents running the same loop on the same model differ in what they are given to read and what they are allowed to do. Anthropic's own guidance makes the same point in engineering terms: agents need "ground truth" from the environment at each step, and it is "common to include stopping conditions (such as a maximum number of iterations) to maintain control".

It also means the loop is the wrong tool when the steps are known. If a process always runs the same five steps in the same order, a fixed workflow is cheaper, faster and easier to test. Use a loop when the next step depends on what the last one found.

## Common mistakes

- **No cap.** A loop with no turn or budget limit can run for a long time on an open-ended request.
- **Judging only the final answer.** Review the trace: which tools were called, in what order, with what inputs.
- **Too many tools.** Each tool definition takes context and adds a wrong choice the model can make.
- **Letting the loop send.** Keep outbound actions as drafts. The loop's last step should hand work to a person.

## lowob takeaways

- **The loop is standard.** Reason, act, observe and repeat is built into every major SDK.
- **The edges are where control lives.** Context in, tools allowed, approvals, and stop rules.
- **Set a cap from day one.** Some defaults allow unlimited turns and spend.
- **Use a workflow when the steps are fixed.** A loop earns its cost only when the next step is uncertain.

## Sources and notes

- [Yao et al., ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/pdf/2210.03629), ICLR 2023. Academic paper; benchmark tasks, not business workflows.
- [Anthropic, Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), 19 December 2024. Vendor engineering guidance; the page notes some tooling has since changed.
- [Anthropic, How the agent loop works (Claude Agent SDK)](https://code.claude.com/docs/en/agent-sdk/agent-loop), accessed November 2026. Vendor documentation; options change between versions.
- [OpenAI, Running agents (Agents SDK)](https://openai.github.io/openai-agents-python/running_agents), accessed November 2026. Vendor documentation.

## Related research

- [A loop with good context](https://lowob.com/research/a-loop-with-good-context/)
- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [What Is Function Calling (Tool Use) in AI?](https://lowob.com/research/what-is-function-calling/)
- [What Is an Agent Framework?](https://lowob.com/research/what-is-an-agent-framework/)

## Next move

Pick one agent your team already uses and read a full trace of a single run, step by step. Note every tool it called and whether any limit would have stopped it if it had kept going.

[Start a conversation](https://lowob.com/contact/)
