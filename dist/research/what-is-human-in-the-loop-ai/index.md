# What Is Human-in-the-Loop AI?

Source: https://lowob.com/research/what-is-human-in-the-loop-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Distribution

> Summary: Human-in-the-loop AI places a named person at the point where an AI output becomes an action. The EU AI Act, UK data protection guidance and OWASP all describe versions of it. It only counts as a control if the reviewer can understand, override and stop the system, and actually does check.

Human-in-the-loop AI is a design in which a person reviews, approves or can override an AI system's output before it takes effect. It appears in the EU AI Act's human oversight article, in UK data protection guidance and in OWASP's security mitigations. It is a real control only when the reviewer understands the output, can reject or stop it, and is measured on whether they actually check.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What human-in-the-loop means

The term covers a range of designs that differ in when the person acts. The useful distinction for a business is whether the person stands before the action or after it.

| Pattern | When the person acts | Typical use |
| --- | --- | --- |
| In the loop | Before the output takes effect; nothing proceeds without approval | Client emails, proposals, payments, public posts |
| On the loop | After or during; the system acts and a person monitors and can intervene | Reversible internal updates such as CRM hygiene |
| Out of the loop | No routine human role | Low-stakes, fully reversible tasks with a long clean record |

**lowob**'s autonomy dial maps onto this: level 1 (draft) and level 2 (act with approval) are in the loop, level 3 (act and report) is on the loop, and level 4 (act alone) is out of it.

## Why regulators and security teams ask for it

**The EU AI Act.** Article 14 says high-risk AI systems must be designed so they "can be effectively overseen by natural persons" while in use. Overseers must be able to understand the system's limits, remain aware of automation bias, interpret the output, decide not to use it or "override or reverse" it, and interrupt the system through a "stop" button. For certain biometric identification, two competent people must verify a result before anyone acts on it. Under the Digital Omnibus, which entered into force on 27 July 2026, the Annex III high-risk obligations now apply from 2 December 2027.

**UK data protection.** Article 22 of the UK GDPR restricts solely automated decisions with legal or similarly significant effects, such as mortgage decisions or job offers. The ICO's guidance says a person who only supplies data to the system is not meaningfully involved. Review counts when it comes after the automated decision and relates to its actual outcome.

**Security.** OWASP lists "require human approval for high-risk actions" among its mitigations for prompt injection, and "require user approval" for excessive agency. Its example is an email assistant that drafts replies but leaves the user to review and send each one.

**Financial supervision.** FINRA's 2026 report, released in December 2025, lists for firms exploring agents: monitoring system access, "determining where human-in-the-loop oversight is required", tracking agent actions and decisions, and setting guardrails.

> A reviewer who cannot say no, or never does, is not oversight.

## How to stop it becoming a rubber stamp

The EU AI Act names the core failure: the tendency to over-rely on automated output. A queue that receives hundreds of items a day will be approved on reflex unless the design prevents it. These checks keep review real.

| Check | What it shows |
| --- | --- |
| Sources attached to each item | Whether the reviewer can verify without redoing the work |
| Three outcomes: approve, edit, return | Whether rejection is as easy as approval |
| Edit and return rates by task | Where the agent is weak and whether reviewers engage |
| Time spent per item | Approvals in seconds on complex items are not reviews |
| Blind spot-checks and seeded errors | Whether reviewers catch problems placed on purpose |
| A named kill switch owner | Whether anyone can halt the system, as Article 14 expects |

Approval rate alone is a weak measure, because it rises with reviewer fatigue as well as with agent quality. The logs from the queue also become the audit trail: who approved what, when, and on which evidence.

## lowob takeaways

- **Put the person before the action.** For anything client-facing, approval comes before sending, not after.
- **Give reviewers real power.** They must be able to edit, return and stop, and doing so must be easy.
- **Measure the reviewer.** Spot-checks and seeded errors, not approval rates.
- **Move tasks along the dial on evidence.** From in the loop to on the loop, one task at a time.

## Sources and notes

- [Regulation (EU) 2024/1689 (AI Act), Article 14: Human oversight](https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/), Official Journal text via SpringLex, 12 July 2024. Applies to high-risk systems only.
- [National Law Review, EU Digital Omnibus on AI enters into force](https://natlawreview.com/article/eu-digital-omnibus-ai-enters-force), 31 July 2026. Law firm summary of the revised high-risk timeline.
- [UK Information Commissioner's Office, What is the impact of Article 22 of the UK GDPR on fairness?](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-fairness-in-ai/what-is-the-impact-of-article-22-of-the-uk-gdpr-on-fairness), regulator guidance.
- [OWASP Gen AI Security Project, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), 2025. Community security standard.
- [Debevoise & Plimpton, FINRA's 2026 Regulatory Oversight Report](https://www.debevoise.com/insights/publications/2025/12/finras-2026-regulatory-oversight-report-continued), December 2025. Law firm summary of the FINRA report.

## Related research

- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)

## Next move

For each AI output that reaches a client today, write down who approves it and whether that approval is logged. Any output without both is the first gap to close.

[Start a conversation](https://lowob.com/contact/)
