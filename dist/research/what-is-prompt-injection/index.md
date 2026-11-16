# What Is Prompt Injection?

Source: https://lowob.com/research/what-is-prompt-injection/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Distribution

> Summary: Prompt injection is an attack in which instructions hidden in text an AI model reads cause it to do what the attacker wants instead of what its owner intended. It ranks first in OWASP's 2025 list of risks for LLM applications. Because language models do not reliably separate instructions from data, it cannot be patched away; it has to be contained by limiting what an agent can reach and do.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- OWASP lists prompt injection as LLM01, the top risk in its 2025 Top 10 for LLM applications.
- Direct injection comes from the user's own prompt; indirect injection arrives inside a web page, file or email the model reads.
- The UK NCSC wrote in December 2025 that prompt injection attacks "may never be totally mitigated".
- The damage depends on agency: a chatbot that can only answer is a nuisance, an agent that can read the inbox and send email is a breach.
- The working defences are architectural: least privilege, deterministic checks outside the model, and human approval for outbound actions.

## What prompt injection means

OWASP defines a prompt injection vulnerability as one where input alters a model's behaviour or output in unintended ways. The input does not need to be visible to a person, only parseable by the model. OWASP separates it from jailbreaking, which aims to make the model abandon its safety rules altogether.

There are two forms. **Direct injection** is typed by the user, deliberately or by accident. **Indirect injection** reaches the model through content it ingests: a web page it summarises, a PDF in a shared drive, an inbound email. Kai Greshake and colleagues described the indirect form in a February 2023 paper, arguing that LLM-integrated applications "blur the line between data and instructions".

| Prompt injection is | Prompt injection is not |
| --- | --- |
| Untrusted text steering what a model does | A bug in one vendor's model that a patch will close |
| A problem for any system that reads outside content | Limited to chatbots typed into by attackers |
| Contained by limiting tools, permissions and outbound actions | Solved by a filter or a stronger system prompt alone |

## Why it matters for a commercial team

Commercial agents are exposed by design. A sales or account agent reads prospect websites, inbound email, call transcripts and shared documents, all written by people outside the company. OWASP's examples include a web page carrying hidden instructions that leak a conversation, and a CV with split instructions that push an AI screener towards a positive recommendation.

Simon Willison's "lethal trifecta", published in June 2025, is the clearest test for when the risk becomes serious. An agent is exposed when it combines three things: access to private data, exposure to untrusted content, and the ability to communicate externally. A pipeline agent that reads CRM notes, opens inbound email and can send replies has all three. Willison notes that guardrail products claiming to stop 95% of attacks would earn "a failing grade" in ordinary web security.

The NCSC makes the same point from the government side. Its December 2025 post argues that prompt injection is not like SQL injection, which parameterised queries fixed. A language model is an "inherently confusable deputy", so the aim is to reduce the likelihood and the impact of attacks rather than to eliminate them.

> The question is not whether an agent can be tricked. It is what a tricked agent is able to do.

## How to contain it

OWASP is candid that "it is unclear if there are fool-proof methods of prevention". Its mitigations, and the NCSC's, converge on a short list that a business owner can check without reading code.

| Control | What to ask the team | Source |
| --- | --- | --- |
| Least privilege | Does the agent hold only the access its task needs, through its own credentials? | OWASP LLM01, NCSC |
| Deterministic checks | Are high-risk decisions enforced in code or downstream systems, not by the model? | NCSC |
| Separate untrusted content | Is outside text marked as data before the model sees it? | OWASP LLM01 |
| Human approval | Does a named person approve anything sent, paid or deleted? | OWASP LLM01 |
| Logging | Are inputs, outputs and tool calls recorded so an incident can be traced? | NCSC |
| Adversarial testing | Has anyone tried to break it with hostile documents and emails? | OWASP LLM01 |

The most effective single move for a commercial team is to break the trifecta at the outbound step. If an agent drafts but cannot send, a successful injection produces a bad draft in a queue, not a leaked file in a stranger's inbox. That is the logic behind **lowob**'s rule that nothing sends without a person, and behind keeping first agents at autonomy level 1 (draft) or 2 (act with approval).

## lowob takeaways

- **Assume it will happen.** Prompt injection is a property of how language models read, not a defect a vendor will patch.
- **Watch for the trifecta.** Private data, untrusted content and external communication in one agent is the danger signal.
- **Contain by design.** Least privilege and checks outside the model do more than better prompts.
- **Gate the outbound step.** A person approving sends turns a breach into a returned draft.

## Common questions

### What is a prompt injection attack in simple terms?

It is when someone hides instructions in text an AI system reads, such as an email or web page, and the AI follows those instructions instead of its owner's.

### What is the difference between direct and indirect prompt injection?

Direct injection comes from what a user types into the model. Indirect injection arrives inside outside content the model processes, such as a document, website or inbound message.

### Can prompt injection be prevented completely?

Not with current models, according to both OWASP and the UK NCSC. The realistic goal is to limit what a manipulated model can reach and do.

### How do you protect an AI agent from prompt injection?

Give it the minimum permissions its task needs, enforce important rules outside the model, log its tool calls and require human approval before anything is sent, paid or deleted.

## Sources and notes

- [OWASP Gen AI Security Project, LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/), 2025. Community standard; mitigations are recommendations, not guarantees.
- [UK National Cyber Security Centre, Prompt injection is not SQL injection (it may be worse)](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection), 8 December 2025. Government guidance blog, aligned to ETSI TS 104 223.
- [Greshake et al., Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://arxiv.org/abs/2302.12173v2), arXiv, February 2023. Academic preprint; examples predate current agent tools.
- [Simon Willison, The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), 16 June 2025. Practitioner analysis by an independent developer.

## Related research

- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [What is an AI agent?](https://lowob.com/research/what-is-an-ai-agent/)
- [The first AI agent should be boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [Top 5 AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)

## Next Move

List every agent or AI feature you run that reads outside content. For each, mark whether it also touches private data and can send externally; any with all three needs an approval step this week.

[Start a conversation](https://lowob.com/contact/)
