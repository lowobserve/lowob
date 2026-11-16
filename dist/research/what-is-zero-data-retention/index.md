# What Is Zero Data Retention in AI?

Source: https://lowob.com/research/what-is-zero-data-retention/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Zero data retention is an arrangement under which an AI provider keeps no prompts or outputs at rest once a response is returned. It is approved per customer, covers only eligible endpoints, and keeps exceptions for flagged content and legal holds. In 2026 providers began limiting it for their most capable models, so buyers should check retention per model and per feature.

Zero data retention (ZDR) is an arrangement under which an AI provider does not store a customer's prompts or the model's outputs once the response has been returned. It is not a default setting: providers approve it per customer, it covers only some endpoints and features, and it keeps exceptions for content flagged by safety systems and for legal requirements. Since mid-2026 some providers have also required retention for their most capable models, so ZDR must now be checked model by model.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What zero data retention means

Every call to a hosted model sends data to the provider. Without special terms, some of it is kept for a period: in logs used to detect abuse, in stored conversation state, and in files or indexes a feature needs to work. ZDR removes the first two for eligible calls, so nothing is held at rest once the answer is sent.

| ZDR means | ZDR does not mean |
| --- | --- |
| No prompts or outputs stored at rest after the response | That data never leaves your network |
| Content excluded from routine abuse logs | That every feature or endpoint is covered |
| A contractual arrangement approved per customer or organisation | A setting any user can switch on |
| Data is not available for later review or training | That flagged content or legal holds are exempt |

ZDR is also distinct from a no-training commitment. Most business API terms already exclude customer data from training. ZDR goes further by removing the stored copy.

## What is usually excluded

The exclusions are where most of the practical detail sits. Any feature that must remember something between calls cannot work under strict ZDR.

| Category | OpenAI API | Anthropic Claude API |
| --- | --- | --- |
| Core model calls | Eligible, with stored state forced off | Messages API eligible |
| Stored threads and assistants | Not eligible; kept until deleted | Message threads not eligible |
| File storage | Not eligible; kept until deleted or expired | Files API not eligible |
| Batch jobs | Not eligible | Not eligible; 29-day retention |
| Code execution containers | Not listed | Not eligible; up to 30 days |
| Flagged content | CSAM-flagged images retained for review | Flagged sessions may be retained up to 2 years |
| Chat apps for staff | Separate terms | ZDR does not cover consumer plans or Team and Enterprise interfaces, except Claude Code on Enterprise |

Short-lived caches are often allowed. OpenAI keeps prompt caching data for up to 24 hours; Anthropic lists prompt caching as eligible and caches structured-output schemas, not content, for up to 24 hours.

## What changed in 2026

ZDR rests on a trade-off. Abuse that is spread across many requests is hard to detect if no request is kept. In 2026 providers began to address that trade-off differently.

Anthropic designated a set of covered models, starting with Claude Fable 5 and Claude Mythos 5 on 9 June 2026, that retain prompts and completions for at least 30 days. Its stated reason is that "some forms of misuse only become detectable across many requests". Eligible customers can get a limited-time ZDR option for the Fable models for internal business applications. OpenAI took a different route, previewing Private Safety Processing, which analyses interaction patterns on customer-controlled infrastructure or in storage encrypted with customer-held keys and returns only a narrow signal about flagged activity.

For buyers, the consequence is that ZDR is no longer an account-level fact. It needs checking for each model and feature a tool uses.

## What to ask a vendor

Many commercial AI tools are built on a model provider's API. The vendor's ZDR position depends on its own agreement upstream.

| Question | Why it matters |
| --- | --- |
| Do you have ZDR with your model provider, in writing? | Your vendor's terms cannot exceed its supplier's |
| Which models and features does it cover? | Covered models, batch jobs and file stores may be excluded |
| What do you store yourselves? | The vendor's own logs and databases sit outside the provider's ZDR |
| What happens to flagged content? | Safety exceptions can mean retention for up to two years |
| How would a legal hold be handled? | Retention can be required by law regardless of contract |

The third question is often the decisive one. A sales tool may call a model under ZDR and still store every draft in its own database, which is usually the point. **lowob**'s view is that the commercial record should be kept deliberately, by you, in a system you control. ZDR governs the model provider's copy; it does not replace a decision about what your own record holds.

## lowob takeaways

- **ZDR is approved, not assumed.** Providers grant it per customer and organisation.
- **Check features, not only accounts.** Files, threads, batches and code execution are commonly excluded.
- **Check models too.** Since June 2026 some frontier models require 30-day retention.
- **Ask what the vendor stores.** The tool's own database often holds more than the model provider ever does.

## Sources and notes

- [OpenAI, Data controls in the OpenAI platform](https://developers.openai.com/api/docs/guides/your-data), accessed November 2026. Vendor documentation; retention periods and ZDR eligibility.
- [Anthropic, API and data retention](https://platform.claude.com/docs/en/build-with-claude/api-and-data-retention), accessed November 2026. Vendor documentation; ZDR scope and exclusions.
- [Anthropic, Covered models](https://support.claude.com/en/articles/15425695-covered-models), accessed November 2026. Vendor policy; retention requirements and designation dates.
- [Channel Insider, OpenAI challenges Anthropic's data retention approach with a privacy-focused alternative](https://www.channelinsider.com/ai/news-openai-anthropic-data-retention-private-safety-processing/), 20 August 2026. Trade press on Private Safety Processing; feature was in preview.

## Related research

- [The pilot that survives security review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [Which AI assistant, which seats](https://lowob.com/research/which-ai-assistant-which-seats/)
- [Whoever holds the record holds the company](https://lowob.com/research/whoever-holds-the-record-holds-the-company/)
- [The RFP nobody can answer yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/)

## Next move

Send each AI vendor that handles client data one question this week: which model provider do you call, under what retention terms, and what do you store yourselves? Record the answers on your AI inventory.

[Start a conversation](https://lowob.com/contact/)
