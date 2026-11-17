# What Is a Multi-Agent System?

Source: https://lowob.com/research/what-is-a-multi-agent-system/
Publisher: lowob (https://lowob.com)
Published: 2026-10-13 · Updated: 2026-11-17
Function: Strategy

> Summary: A multi-agent system divides work among several AI agents with their own instructions, tools and context. Anthropic reported a 90.2% gain on research tasks from a lead agent with parallel subagents, at about 15 times the tokens of a chat. Research on 1,600 traces found 14 distinct failure modes, so most commercial teams should start with one agent and split only parallel work.

A multi-agent system is a setup in which several AI agents, each with its own instructions, tools and context, work on parts of a task and pass results between them, usually under a lead agent that plans the work and combines the answers. It helps when work splits into independent parts that can run in parallel, such as broad research. It uses far more tokens than a single agent and fails in new ways when agents need to share context. Most commercial teams should start with one agent.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What a multi-agent system means

A single agent runs one [agent loop](https://lowob.com/research/what-is-an-agent-loop/) with one context window. A multi-agent system runs several, and adds a way for them to divide work and exchange results. The common patterns are few.

| Pattern | How it works | Good fit | Main risk |
| --- | --- | --- | --- |
| Orchestrator and workers | A lead agent plans, starts subagents, then merges their findings | Broad research with independent threads | Lead misjudges how to split the work |
| Handoff | One agent passes the whole task to a specialist | Triage, then a specialist reply | Context lost at the handover |
| Sequential pipeline | Each agent does one stage, then passes it on | Fixed stages, such as research then draft then check | Errors carried forward |
| Group chat | Several agents discuss and a manager decides | Exploring options | Cost, and agreement mistaken for accuracy |
| Cross-vendor | Agents from different vendors exchange tasks | Work spanning two companies' systems | Trust, identity and logging across boundaries |

Microsoft Agent Framework 1.0 ships sequential, concurrent, handoff and group-chat orchestration. Cross-vendor exchange is what the [Agent2Agent protocol](https://lowob.com/research/what-is-the-agent2agent-protocol/) standardises.

## The evidence for and against

The strongest published case for multiple agents comes from Anthropic. Its research feature uses a lead agent on Claude Opus 4 with subagents on Claude Sonnet 4 that search in parallel. On Anthropic's internal research evaluation it beat single-agent Opus 4 by 90.2%. The explanation was largely spend: on the BrowseComp benchmark, token usage alone explained 80% of the variance in performance. Multi-agent runs used about 15 times the tokens of a chat. Anthropic also named poor fits: tasks where agents must share the same context, tasks with many dependencies between agents, and most coding.

Cognition's essay "Don't Build Multi-Agents", by Walden Yan, made the opposite case for tightly coupled work. Its example: split "build a Flappy Bird clone" between two subagents, and one builds a background resembling Super Mario Bros while the other builds a bird that does not match. Each made reasonable choices the other never saw. Its principles were to share full context and full traces, and to recognise that every action embeds decisions.

The academic evidence points the same way. Cemri and colleagues analysed more than 1,600 annotated traces from seven popular frameworks, with high agreement between annotators, and sorted the failures into system design issues, inter-agent misalignment and task verification. Those are failures of setup, coordination and checking, which a better model alone does not fix.

## Why it matters for a commercial team

The split that works is research-shaped. An illustrative case: profiling 40 target accounts before a planning session, where each account can be researched independently and the lead agent assembles a table. Errors in one profile do not corrupt another, and a person can check each row.

The split that fails is judgment-shaped. A proposal where pricing, scope and terms must agree is the Flappy Bird problem: a pricing agent and a scope agent will make choices that conflict. One agent with the full context, and a person approving, is safer.

Accountability matters too. Each agent should be its own registered identity with its own permissions, as set out in [What Is Agent Identity?](https://lowob.com/research/what-is-agent-identity/). Where several agents contribute, a single person still owns what leaves the building.

## How to decide

1. **Are the parts independent?** If each part can be done without seeing the others, parallel agents can help.
2. **Can the merged result be checked?** If a person cannot verify the combined output quickly, do not split.
3. **Is the cost acceptable?** Budget for roughly 15 times chat-level token use, on Anthropic's figures.
4. **Who owns the output?** Name one person before the system runs.

## lowob takeaways

- **Several agents, one task.** A lead agent splits work, subagents run in parallel, results are merged.
- **Good for breadth.** Independent research threads gain the most.
- **Bad for tightly coupled work.** Agents that cannot see each other's choices produce conflicts.
- **Cost and failure modes multiply.** Start with one agent and split only what is parallel.

## Common questions

### What is an example of a multi-agent system?

Anthropic's research feature: a lead agent plans a query, starts several subagents that search in parallel, and combines their findings into one answer.

### Are multi-agent systems better than single agents?

For broad, parallel research, published results suggest yes, at much higher token cost. For tasks where every step depends on earlier choices, single agents are usually more reliable.

### Why do multi-agent systems fail?

Research on more than 1,600 traces found 14 failure modes in three groups: poor system design, misalignment between agents, and weak verification of the final result.

## Sources and notes

- [Anthropic, How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), 13 June 2025. Vendor engineering post; results are on Anthropic's internal evaluation.
- [Walden Yan, Don't Build Multi-Agents](https://cognition.com/blog/dont-build-multi-agents), Cognition, 12 June 2025. Vendor essay; argument, not measurement.
- [Cemri et al., Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657v3), March 2025, revised October 2025. Academic preprint.
- [Visual Studio Magazine, Microsoft ships production-ready Agent Framework 1.0](https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx), 6 April 2026. Trade press reporting a vendor release.

## Related research

- [What Is the Agent2Agent (A2A) Protocol?](https://lowob.com/research/what-is-the-agent2agent-protocol/)
- [What Is AI Orchestration?](https://lowob.com/research/what-is-ai-orchestration/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [What Is an Agent Framework?](https://lowob.com/research/what-is-an-agent-framework/)
- [Why AI Agent Projects Fail: The Evidence and How to Avoid It](https://lowob.com/research/why-ai-agent-projects-fail/)

## Next move

If a vendor proposes a multi-agent design, ask which parts of the task run independently and what the token cost is per run against a single agent. If neither answer is clear, pilot a single agent first.

[Start a conversation](https://lowob.com/contact/)
