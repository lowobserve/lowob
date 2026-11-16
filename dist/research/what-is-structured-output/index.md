# What Is Structured Output in AI?

Source: https://lowob.com/research/what-is-structured-output/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Structured output constrains an AI model's response to a schema the developer supplies, so it parses and contains the required fields. OpenAI, Anthropic and Google all enforce schemas during generation. The guarantee covers shape, not truth: values still need checking before anything acts on them.

Structured output is a model feature that makes an AI response follow a fixed format, usually a JSON schema the developer supplies, so software can read it without guessing. The main providers now enforce the schema during generation, so the output parses and contains the required fields. It does not make the values correct. Structured output is how AI can write into a CRM, a queue or an approval step safely, provided the values are checked before anything acts on them.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What structured output means

A language model writes text. Software needs fields. Without help, the gap is closed by asking the model for JSON and hoping. Anthropic's documentation lists what goes wrong: invalid JSON syntax, missing required fields, inconsistent data types and schema violations that need retries.

Providers have moved through several stages.

| Approach | What it guarantees | Remaining risk |
| --- | --- | --- |
| Asking in the prompt | Nothing | Malformed or incomplete output |
| JSON mode | Valid JSON is more likely, but not a particular schema | Wrong or missing fields |
| Structured output | The response matches the supplied schema, in most cases | Wrong values, refusals, truncation |
| Strict tool use | Tool names and arguments match the tool's schema | Well-formed but wrong arguments |

OpenAI introduced Structured Outputs in its API on 6 August 2024. It converts the schema into a grammar and, after each token, masks every next token that would break it. On its complex schema eval, the company reported 100% with the feature, against 93% for the same model without it and under 40% for an older model. Anthropic describes its version as "constrained sampling with compiled grammar artifacts", in two parts: JSON outputs for the response and strict tool use for function arguments. Google's Gemini API takes a schema alongside the request in the same way.

Structured output is a close relative of [function calling](https://lowob.com/research/what-is-function-calling/). A tool call is itself a structured request, and strict modes apply the same guarantee to its arguments.

## Why it matters for a commercial team

Every time AI writes into a system, a format is involved. An enquiry classified by segment, size and urgency. Renewal terms pulled from a contract into named fields. A meeting summary turned into next steps with an owner and a date. A draft placed in an [approval queue](https://lowob.com/research/what-is-an-approval-gate/) with the account ID attached. If the format breaks, the integration breaks, or writes to the wrong field.

Structured output solves the format problem. It does not solve the truth problem. OpenAI's announcement says it "doesn't prevent all kinds of model mistakes". Google's documentation tells developers to "always validate values in your application", because output can match the schema and still be wrong. A renewal date that parses is not necessarily the renewal date in the contract; see [AI hallucination](https://lowob.com/research/what-is-ai-hallucination/).

The guarantee also has edges. Anthropic and OpenAI both note that a refusal, or a response that hits the maximum token limit, may not match the schema. Each provider supports only part of JSON Schema. Google strips constraints such as minLength and maxLength during decoding rather than enforcing them. Anthropic caps strict tools at 20 per request and rejects schemas too complex to compile. The first request with a new schema is slower while the grammar is built; Anthropic caches compiled grammars for 24 hours from last use.

One finding argues for care in design. Tam and colleagues' 2024 study "Let Me Speak Freely?" found that requiring formats such as JSON significantly reduced models' reasoning performance, and that stricter constraints generally caused larger drops. For a judgment step, such as assessing deal risk, a common pattern is to let the model reason in free text first and fill the structured fields last. Another is to place a reasoning field ahead of the answer fields in the schema.

In **lowob**'s model of the brain, structured output is how the [decision record](https://lowob.com/research/what-is-a-decision-record/) gets filled consistently: decision, reason, owner, status, expected outcome and check date. A schema with an enumerated status and a required reason cannot be saved half-empty. A person still checks that the reason is true, because nothing sends without a person.

## How to use it well

| Practice | Why |
| --- | --- |
| Use enums for fixed lists such as stages, segments and loss reasons | Keeps values aligned with your [pipeline stage definitions](https://lowob.com/research/what-are-pipeline-stage-definitions/); Anthropic notes enum values can differ in capitalisation, so compare without case |
| Make the reason field required | Blank reasons are the most common gap in commercial records |
| Validate values in code after parsing | Schema compliance is not accuracy |
| Handle refusal and token-limit stops explicitly | Both can break the schema |
| Keep schemas flat and short | Complex schemas compile slowly or are rejected |
| Keep personal data out of schema definitions | Anthropic caches schemas for up to 24 hours |

## lowob takeaways

- **Structured output fixes the format.** The response parses and has the required fields.
- **It does not fix the facts.** Validate values before anything acts on them.
- **The guarantee has edges.** Refusals, truncation and unsupported schema features need handling.
- **Let the model reason before it formats.** Strict formats can reduce reasoning quality.

## Sources and notes

- [OpenAI, Introducing Structured Outputs in the API](https://openai.com/index/introducing-structured-outputs-in-the-api/), 6 August 2024. Vendor announcement; eval results are OpenAI's own.
- [Anthropic, Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs), accessed November 2026. Vendor documentation.
- [Google, Gemini API structured outputs](https://ai.google.dev/gemini-api/docs/structured-output.md.txt), accessed November 2026. Vendor documentation; supported schema features change by model.
- [Tam et al., Let Me Speak Freely? A Study on the Impact of Format Restrictions on Performance of Large Language Models](https://arxiv.org/abs/2408.02442), August 2024, revised October 2024. Academic study; tested models and constraint methods predate current schema enforcement.

## Related research

- [What Is Function Calling (Tool Use) in AI?](https://lowob.com/research/what-is-function-calling/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [What Are Pipeline Stage Definitions?](https://lowob.com/research/what-are-pipeline-stage-definitions/)
- [The Ten Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)

## Next move

Pick one AI output your team copies into the CRM by hand and write its fields as a schema, with enums for every fixed list and a required reason field. Run 20 past examples through it and count how many parse and how many are correct.

[Start a conversation](https://lowob.com/contact/)
