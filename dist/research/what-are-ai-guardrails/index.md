# What Are AI Guardrails?

Source: https://lowob.com/research/what-are-ai-guardrails/
Publisher: lowob (https://lowob.com)
Published: 2026-07-09 · Updated: 2026-11-16
Function: Strategy

> Summary: AI guardrails are controls placed around a language model to check what goes in, what comes out and what actions it takes. Products from AWS, NVIDIA and others offer content filters, topic blocks, data masking and grounding checks. Filters catch some failures; the controls that matter most for a commercial team are narrow permissions and human approval before anything sends.

AI guardrails are controls placed around a language model that check its inputs, its outputs and the actions it takes against a set of rules. They can block harmful content, keep an assistant on topic, mask personal data, flag answers not supported by sources and limit which tools an agent may call. Guardrails reduce risk but do not remove it. The strongest ones are design choices: narrow permissions and a person approving anything that leaves the company.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What AI guardrails mean

A model's own training includes some refusals and safety behaviour. Guardrails are separate. They are software checks that sit in front of, behind or alongside the model and apply rules the business sets.

NVIDIA's NeMo Guardrails documentation gives a useful map of where checks can sit. Input rails check and clean user messages before they reach the model. Retrieval rails screen retrieved material so only trusted context is passed in. Dialog rails keep multi-turn conversations on track. Execution rails govern tool and function calls, including their inputs and outputs. Output rails review replies and can filter, rewrite or block them.

Amazon Bedrock Guardrails describes the checks by type rather than position. Content filters cover categories such as hate, violence, misconduct and prompt attacks. Denied topics block subjects you define. Word filters block specific terms. Sensitive information filters block or mask personal data. Contextual grounding checks flag responses not supported by the source material. Automated reasoning checks validate responses against logical rules.

| Guardrails are | Guardrails are not |
| --- | --- |
| Rules applied to inputs, outputs and actions | A guarantee of safe or correct output |
| Configurable by the business, per use case | The same as the model's built-in safety training |
| A layer you can test and log | A substitute for narrow permissions |
| Useful against known failure types | Reliable against every new attack |

## Why guardrails matter for a commercial team

The risks are now catalogued. OWASP's 2025 Top 10 for LLM applications lists, in order: prompt injection, sensitive information disclosure, supply chain, data and model poisoning, improper output handling, excessive agency, system prompt leakage, vector and embedding weaknesses, misinformation and unbounded consumption. Most map to a guardrail type. Input rails address injection. Sensitive information filters address disclosure. Grounding checks address misinformation.

For a revenue team the practical failures are specific. A support assistant quotes a discount it was never authorised to offer. A proposal assistant pastes one client's details into another's draft. An inbound email contains hidden instructions that tell an agent to forward the pipeline report. A content filter does little about the first two. An execution rail and a permission model do.

NIST's July 2024 generative AI profile treats guardrails as something to maintain, not install once. Its suggested actions include regularly reviewing security and safety guardrails, especially when a system is used in new circumstances, and regularly evaluating vulnerabilities to circumvention of safety measures. It also recommends AI red-teaming.

In **lowob**'s view, filters are the outer layer. The inner layer is the autonomy dial: answer, draft, act with approval, act and report, act alone. A guardrail that blocks bad output after the fact is useful. An agent that can only draft, never send, does not need the guardrail to be perfect.

## Where to start with guardrails

| Layer | What it checks | Commercial example | Typical product category |
| --- | --- | --- | --- |
| Permissions | What the agent can reach and do | Read-only CRM access; draft-only email | Identity and access management |
| Input | Messages and documents before the model | Strip hidden instructions from inbound email | Prompt attack filters |
| Retrieval | Which sources may be used | Only approved case studies and current price list | Retrieval rails, access-controlled stores |
| Execution | Tool calls and their arguments | Block any "send" or "delete" call | Execution rails, tool allow-lists |
| Output | The reply before a person sees it | Mask personal data; flag ungrounded claims | Content filters, grounding checks |
| Human approval | The final decision to send | Named reviewer for every client-facing message | Workflow approval step |

Start from the inside. Scope permissions first, because they limit damage whatever the model does. Add an approval step for anything client-facing. Then add filters for the failures you have actually seen in testing, not every category a product offers.

The common mistakes are relying on the model's own refusals, switching on a vendor's default filters without testing them on real traffic, and running guardrails without logging what they blocked. AWS's documentation recommends benchmarking configurations with its built-in test tools. A guardrail with no record of what it caught cannot be tuned or audited.

## lowob takeaways

- **Guardrails are checks around the model.** They screen inputs, outputs and actions against your rules.
- **Permissions come first.** An agent that cannot send does not rely on a perfect filter.
- **Test on real traffic.** Default settings rarely match your failure cases.
- **Log what they catch.** Unlogged guardrails cannot be tuned or audited.

## Sources and notes

- [NVIDIA, NeMo Guardrails: rail types](https://docs.nvidia.com/nemo/guardrails/about-nemo-guardrails-library/rail-types.md), accessed November 2026. Vendor documentation for an open-source library.
- [AWS, Detect and filter harmful content by using Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html), accessed November 2026. Vendor documentation; no published catch rates.
- [OWASP, Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/), November 2024. Community security project.
- [NIST, AI 600-1: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024. US standards body guidance.
- The autonomy dial and inside-out ordering are **lowob**'s working method.

## Related research

- [What Is Prompt Injection?](https://lowob.com/research/what-is-prompt-injection/)
- [What Is Excessive Agency?](https://lowob.com/research/what-is-excessive-agency/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Top 5 AI Governance and Audit Trail Tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)

## Next move

List the tools each AI assistant or agent in your team can call. Remove any send, delete or bulk-update action that does not have a named person approving it.

[Start a conversation](https://lowob.com/contact/)
