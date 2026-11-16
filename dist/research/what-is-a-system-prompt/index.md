# What Is a System Prompt?

Source: https://lowob.com/research/what-is-a-system-prompt/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: A system prompt is the standing set of instructions that a developer or operator gives an AI model before any user message. It defines the model's role, the task, the rules it should follow and the format of its answers. Model providers give it more authority than what users type. It is the right place to describe a job, and the wrong place to enforce security: OWASP advises that it should not be treated as secret or used as a control.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- The system prompt is sent with every request, ahead of the conversation, and usually hidden from the end user.
- OpenAI's Model Spec ranks developer instructions above user instructions, and gives no authority to instructions inside tool outputs or quoted text.
- Anthropic's documentation says even a single sentence of role in the system prompt makes a difference to behaviour and tone.
- OWASP's 2025 list includes system prompt leakage (LLM07) and says authorisation checks "must not be delegated to the LLM".
- Treat a system prompt like a policy document: versioned, owned and re-tested whenever it changes.

## What a system prompt means

A conversation with a language model is a list of messages. The system prompt is the first, written by whoever built the application rather than by the person using it. In Anthropic's API it is a separate `system` parameter. Other providers call it a system or developer message.

Its content is the job description: who the model is acting as, what it is for, what it should and should not do, and how its answers should look. Anthropic's prompting guidance puts the purpose plainly: "Setting a role in the system prompt focuses Claude's behavior and tone for your use case." It suggests thinking of the model as "a brilliant but new employee who lacks context on your norms and workflows".

| Belongs in a system prompt | Belongs elsewhere |
| --- | --- |
| Role and task: "You draft follow-up emails for account managers" | Permissions: which records and tools the agent may use |
| Tone, format and length rules | Credentials, API keys, connection strings |
| Reasons behind rules, so the model can generalise | Discount limits and approval thresholds that must hold |
| Pointers to where context will appear | The context itself, which should be retrieved fresh |
| A few worked examples | Customer data that changes daily |

## How it works

### Authority

Model makers rank instructions by source. OpenAI's Model Spec, its public description of intended model behaviour, sets out a chain of command: root rules, then system, developer, user and guideline levels. It states that when developer and user messages are both present, "the developer messages have greater authority." Tool outputs, quoted text and file contents sit at the bottom with no authority by default, and instructions inside them "MUST be treated as information rather than instructions to follow."

That hierarchy is why system prompts work. It is also why they are a target. An attacker who cannot change the system prompt tries to make content look like it carries the same authority, which is the mechanism of prompt injection.

### Writing one well

Anthropic's guidance favours being explicit, explaining why a rule exists and giving examples. Its own illustration: a bare "NEVER use ellipses" works less well than explaining that responses will be read aloud by text-to-speech software that cannot pronounce them. It recommends three to five varied examples, marked off from the instructions.

## Why it matters for a commercial team

### It is where the job is defined

A drafting agent's quality depends heavily on its system prompt: who the audience is, what a good follow-up contains, what never to promise. That makes the system prompt a commercial document, not a technical one. Revenue leaders should read it and sign it off.

### It is not a lock

OWASP's LLM07:2025, system prompt leakage, is blunt: the system prompt "should not be considered a secret, nor should it be used as a security control." Its examples include prompts that reveal internal transaction limits, which help an attacker work around them. The mitigations are to keep sensitive data out of the prompt, enforce controls outside the model and run agents with least privilege.

For a commercial agent, a line such as "never offer more than 10% discount" is guidance, not enforcement. The enforceable version is a deal desk rule that flags any draft above the limit, and an approval step before it is sent.

> The system prompt describes the job. Permissions, limits and approvals hold the line.

## How to manage system prompts

| Practice | What it involves |
| --- | --- |
| Owner | One named person approves changes, usually the business owner of the agent |
| Version control | Every change dated and kept, with the reason |
| Re-test on change | Run the agent's eval set before a new version goes live |
| Leakage check | Assume users can extract it; nothing in it should embarrass or expose the firm |
| Separation | Retrieved documents and inbound content clearly marked as data, not instructions |
| Review cycle | Read it quarterly against current pricing, products and policies |

Prompts drift silently. A product line changes, a policy is updated, and the system prompt keeps describing last year's firm. Logging every change, as with any other commercial decision, keeps the instruction set and the business aligned.

## lowob takeaways

- **It defines the job.** Role, task, rules, format and examples belong in the system prompt.
- **It outranks users.** Model makers give developer instructions more authority than user messages.
- **It is not secret.** Assume it can be extracted and keep credentials and limits out.
- **Enforce elsewhere.** Permissions, caps and approvals belong in systems the model cannot talk its way past.

## Common questions

### What is the difference between a system prompt and a user prompt?

The system prompt is written by the developer or operator and sets standing instructions for every conversation. A user prompt is what the person using the application types in a given turn.

### Can users see the system prompt?

Usually not directly, but it can often be extracted by asking cleverly. OWASP advises treating it as public and keeping sensitive information out of it.

### How long should a system prompt be?

As long as the job needs. A single sentence of role changes behaviour; a production agent typically needs task, rules with reasons, format and a few examples.

### Can a system prompt stop prompt injection?

No. It can reduce some attacks, but OWASP advises enforcing controls outside the model, through least-privilege permissions, independent checks and human approval.

## Sources and notes

- [Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices). Vendor documentation for its own models; principles broadly transfer.
- [OpenAI, Model Spec](https://model-spec.openai.com/2025-10-27), version of 27 October 2025. Vendor's statement of intended model behaviour, not a guarantee of it.
- [OWASP Gen AI Security Project, LLM07:2025 System Prompt Leakage](https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/), 2025. Community standard; mitigations are recommendations.

## Related research

- [What Is Prompt Injection?](https://lowob.com/research/what-is-prompt-injection/)
- [What Is Context Engineering?](https://lowob.com/research/what-is-context-engineering/)
- [What Are AI Guardrails?](https://lowob.com/research/what-are-ai-guardrails/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)

## Next Move

Ask for the system prompt of every AI tool your team built or configured. Highlight any number, limit or credential in it, and move each one into a rule the model cannot override.

[Start a conversation](https://lowob.com/contact/)
