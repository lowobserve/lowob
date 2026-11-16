# What Is an Approval Gate for AI Agents?

Source: https://lowob.com/research/what-is-an-approval-gate/
Publisher: lowob (https://lowob.com)
Published: 2026-11-04 · Updated: 2026-11-16
Function: Distribution

> Summary: An approval gate is the point where an AI agent stops and waits for a person before an action takes effect. OWASP recommends it for high-impact actions, and the main agent frameworks now build it in. The design questions are which actions to gate, who approves, what the approver sees and how the decision is logged.

An approval gate is a checkpoint where an AI agent pauses before a chosen action, such as sending an email or updating a price, until a named person approves, edits or rejects it. The decision and the evidence behind it are logged. In The Build Order it is Gateway 1: nothing an agent produces leaves the company until a person has approved it.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What an approval gate means

An agent works in a loop: it reasons, calls a tool, observes the result and continues. An approval gate interrupts that loop at a defined tool call. The agent proposes the action and its arguments. A person sees the proposal and decides. Only then does the action run.

The idea is not new. A deal desk does the same for discounts, and a publishing workflow does it for articles. What is new is that agent frameworks now provide the mechanism directly.

OpenAI's Agents SDK documents a `needs\_approval` setting on tools. When a call needs approval, "execution pauses", and the pending items appear as interruptions. The application then calls approve or reject and resumes the run. Pending state can be stored "in a database or queue", so an approval can wait hours without the agent holding a session open.

LangChain's middleware takes the same approach, with three outcomes. Approve runs the tool "with the original arguments as proposed by the agent". Edit lets the reviewer "modify the tool arguments before execution". Reject skips the call and returns feedback to the agent. The documentation states that "human-in-the-loop requires checkpointing to handle interrupts".

| A gate is | A gate is not |
| --- | --- |
| A pause before a named action | A review of the agent's reasoning after the fact |
| Three outcomes: approve, edit, reject | A single "OK" button |
| A logged decision with an approver | A chat message saying "looks fine" |
| Placed by action type and risk | Applied to every step, which breeds rubber-stamping |

## Why it matters for a commercial team

The security case comes first. OWASP lists excessive agency sixth in its 2025 Top 10 for LLM applications. Its mitigations include requiring approval for high-impact actions and "complete mediation": authorisation should sit in the downstream system "rather than relying on an LLM to decide if an action is allowed". In plain terms, the gate must be enforced by software, not requested in a prompt.

The regulatory case follows. Article 14 of the EU AI Act requires that overseers of high-risk systems can "disregard, override or reverse the output". Most commercial uses are not high-risk under the Act, but the ability to override is a sensible baseline for any agent that acts.

The commercial case is simpler. A wrong email to a prospect, or a quote at the wrong price, costs more than the time to approve it. Products now expose the choice. HubSpot's prospecting agent offers "Review emails: you'll review and approve each message before it goes out" or "Send without review". Someone in the firm decides which, and that decision should itself be recorded.

One technical caution from OpenAI's documentation: "Approval permits a tool call to execute; it does not guarantee exactly-once execution." Tools with side effects, such as sending email, need safeguards against running twice.

## Where to place gates

Gate by action type, not by agent. The autonomy level on **lowob**'s dial (0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone) is set per task.

| Action | Reversible? | Suggested level | Gate |
| --- | --- | --- | --- |
| Summarise an account for a seller | Yes | 0 or 1 | None; output stays internal |
| Draft a follow-up email | Yes, until sent | 2 | Approve, edit or reject before sending |
| Update CRM stage or close date | Yes, with history | 2, then 3 on evidence | Approve until error rate is known |
| Send a quote or price | Hard to reverse | 2 | Approver from the discount matrix |
| Post publicly or contact a new prospect list | No | 2 | Named owner; batch approval with spot-checks |

Three design rules keep the gate useful. Show the approver the sources the agent used, so checking does not mean redoing the work. Make rejecting as quick as approving. Track edit and return rates per task, since an approval rate alone rises with fatigue as well as quality.

## lowob takeaways

- **Enforce the gate in software.** A prompt that asks the agent to wait is not a control.
- **Offer three outcomes.** Approve, edit and reject, each logged with the approver.
- **Gate by action, not by agent.** External, irreversible and priced actions come first.
- **Record the setting itself.** Choosing "send without review" is a decision with an owner.

## Sources and notes

- [OWASP Gen AI Security Project, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), 2025. Community security standard.
- [OpenAI Agents SDK (Python), Human-in-the-loop](https://openai.github.io/openai-agents-python/human_in_the_loop), undated. Vendor developer documentation.
- [LangChain, Human-in-the-loop](https://docs.langchain.com/oss/python/langchain/human-in-the-loop/index.html), undated. Vendor developer documentation for an open-source framework.
- [HubSpot Knowledge Base, Use the prospecting agent](https://knowledge.hubspot.com/prospecting/use-the-prospecting-agent?cid=482), undated. Vendor product documentation.
- [European Commission AI Act Service Desk, Article 14: Human oversight](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14). Official text; applies to high-risk systems only.

## Related research

- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [What Is Human-in-the-Loop AI?](https://lowob.com/research/what-is-human-in-the-loop-ai/)
- [Approval Rate Measures Fatigue Too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [What Is an AI Autonomy Level?](https://lowob.com/research/what-is-an-ai-autonomy-level/)

## Next move

List every action your AI tools can take that reaches a client or changes a price. For each, write down whether a person approves it first, and whether that approval is logged.

[Start a conversation](https://lowob.com/contact/)
