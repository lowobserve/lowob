# What Is Excessive Agency in AI?

Source: https://lowob.com/research/what-is-excessive-agency/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Distribution

> Summary: Excessive agency is OWASP's name for AI systems that can do more than their job requires. It has three root causes: too many functions, too many permissions and too little verification. The fix is scoping each agent to its task and putting a person in front of high-impact actions.

Excessive agency is the risk that an AI system holds more tools, permissions or freedom to act than its task needs, so that a hallucination or a manipulated input turns into a damaging action. OWASP lists it as LLM06 in its 2025 Top 10 for LLM applications. It is the reason prompt injection becomes a breach rather than a bad answer, and it is fixed by scoping, not by smarter models.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What excessive agency means

OWASP describes excessive agency as "the vulnerability that enables damaging actions to be performed" in response to unexpected, ambiguous or manipulated model output. The trigger can be anything: a hallucination, a direct or indirect prompt injection, or a compromised plug-in or peer agent. The point is that the model will sometimes be wrong, and agency decides what being wrong costs.

OWASP breaks it into three root causes.

| Root cause | What it looks like | OWASP example |
| --- | --- | --- |
| Excessive functionality | The agent has tools it does not need | A document reader whose extension can also modify and delete |
| Excessive permissions | A tool has broader access than its task | A read-only lookup connected with an account that can update and delete |
| Excessive autonomy | High-impact actions run without verification | A deletion feature that runs without asking the user |

## Why it matters for a commercial team

OWASP's own attack scenario is a commercial one. An assistant reads a user's email in order to summarise it, but the mail plug-in it uses can also send. An attacker emails hidden instructions; the model searches the inbox for sensitive information and forwards it. OWASP's three fixes are a read-only extension, a read-only OAuth scope, and requiring the user to review and send every draft.

The same pattern is easy to reproduce in sales and account work. A CRM connector installed by an admin can inherit that admin's rights. An email integration approved for reading may also be able to send. A shared service account can let one agent see every user's files, which is OWASP's own example of excessive permissions. None of this is visible from the agent's interface, which is why OWASP treats it as a design flaw rather than a model flaw.

The agentic list published in December 2025 extends the concern. It includes ASI02, tool misuse and exploitation, and ASI03, identity and privilege abuse, where agents reuse or escalate inherited credentials. Its guiding principle is "least agency": granting agents only the minimum autonomy required to perform safe, bounded tasks. The NCSC adds a related rule: an LLM's privileges should drop to those of the party whose information it is processing.

> Agency is set by what the agent can touch, not by what it is asked to do.

## How to scope an agent

**lowob** treats autonomy as a dial with five settings: 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone. Excessive agency is any gap between where the dial sits on paper and what the agent's tools and credentials actually allow. OWASP's eight mitigations map onto a short review.

| Check | Pass condition |
| --- | --- |
| Tool inventory | Every tool is needed for the current task; unused or abandoned ones are removed |
| Narrow tools | Purpose-built functions rather than open shell, URL-fetch or "do anything" tools |
| Permissions | Downstream systems grant the least access, enforced by those systems |
| User context | The agent acts as a specific user with narrow scopes, not a shared admin account |
| Approval | A person approves high-impact actions such as sending, paying or deleting |
| Complete mediation | Authorisation is checked in the downstream system, not left to the model |
| Monitoring | Tool calls are logged and rate-limited, to contain damage if the rest fails |

A practical test is to read the agent's job description aloud and then list what its credentials allow. If the job is "summarise inbound requests" and the credentials allow sending, editing contacts and exporting the CRM, the difference is the exposure. Close it before raising the dial.

## lowob takeaways

- **Assume the model will err.** Agency decides whether an error is a bad answer or a bad action.
- **Check three things.** Functions, permissions and autonomy, each against the task as written.
- **Enforce outside the model.** Permissions belong in the systems the agent calls, not in its prompt.
- **Raise the dial on evidence.** Grant more agency task by task, after a record of low errors.

## Sources and notes

- [OWASP Gen AI Security Project, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), 2025. Community standard; the source of the root causes, mitigations and email scenario above.
- [TechRepublic, OWASP drops first AI agent risk list](https://www.techrepublic.com/article/news-owasp-ai-agent-risk-list/), 19 December 2025. Press summary of the OWASP Top 10 for Agentic Applications, including the least-agency principle.
- [UK National Cyber Security Centre, Prompt injection is not SQL injection (it may be worse)](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection), 8 December 2025. Government guidance on reducing LLM privileges and relying on deterministic safeguards.
- The autonomy dial and scoping review are **lowob**'s working method.

## Related research

- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [The first AI agent should be boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [What is an AI agent?](https://lowob.com/research/what-is-an-ai-agent/)
- [Top 5 agent frameworks for production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/)

## Next move

Pick your most used AI integration and compare the scopes it was granted with the job it does. Remove any write, send or delete permission it has not needed in the last month.

[Start a conversation](https://lowob.com/contact/)
