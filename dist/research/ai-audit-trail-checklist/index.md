# AI Audit Trail Checklist: What to Log for Every AI Decision

Source: https://lowob.com/research/ai-audit-trail-checklist/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: An AI audit trail lets a firm rebuild any AI-assisted decision: what the system was asked, what it saw, what it did, who checked it and what happened. This checklist sets out the system-level and decision-level fields to log, the regulatory text behind each, the retention rules that apply and a test that shows whether the trail works.

For every AI decision, log a run ID, the request, the inputs, the retrieved context with versions, the model and prompt versions, each tool call, the output, the reviewer and their action, the final action, the outcome and synchronised timestamps, in tamper-evident storage. Behind those sit system-level records: inventory entry, owner, permissions and change history.

*Figure: The Build Order, end to end. This piece maps the whole route.*

An audit trail is only as good as the decision you can rebuild from it. Most firms log enough to debug an AI system and too little to explain a decision to a supervisor. This checklist turns the field specification in our pillar guide [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/) into a working list, adds the system-level records behind it, and shows which rule each field answers to. The definition sits in [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/).

The regulatory references below are summaries of public texts for orientation. This checklist is not legal advice; agree the final specification with your compliance function.

## What should an AI audit trail log for every decision?

Fourteen fields, joined by one run ID. The table is the decision-level record; each row names the text that makes a supervisor ask for it.

| # | Field | What to log | Who expects it |
| --- | --- | --- | --- |
| 1 | Record ID and parent ID | Unique run ID, linked to the case, account or ticket and to any run it supersedes | Joins every other field; without it nothing reconstructs |
| 2 | Request | The instruction as made, the requester, channel and time received | FINRA: track agent actions and decisions |
| 3 | Inputs | Customer and case data passed in, by reference and version, under privacy rules | FCA good practice names consumer prompts; AI Act Art. 12(2) traceability |
| 4 | Retrieved context | Each document or record retrieved, with ID, version, status and date at retrieval | OCC framework: "retrieved sources" |
| 5 | Model and version | Provider, model name and version, deployment or endpoint | FINRA: "which model version was used and when" |
| 6 | Instructions and configuration | Prompt or instruction set version, settings, guardrails and filters applied | FCA names "applied filters"; OCC change logging |
| 7 | Tool calls | Each tool or API called, with parameters, response, permission used and time | FINRA agent risk on scope and authority; OCC "tool calls" |
| 8 | Output | Text, score or recommendation, with any rationale or confidence given | FINRA: prompt and output logs |
| 9 | Reviewer | Name or role, what they were shown, time opened, time spent | FCA warns review can be "box-ticking"; time spent is the evidence |
| 10 | Reviewer action | Approved, edited (with diff), rejected, escalated or overridden, with reason | OCC: override "authority, reasons, patterns" logged; FCA rationale and escalation |
| 11 | Final action | What was sent, executed or filed, by whom and when | SEA Rule 17a-4(b)(4) for communications sent |
| 12 | Outcome | Complaint, reversal, default, correction or confirmation, with date, written back | SR 26-2 outcomes analysis compares outputs with "real-world outcomes" |
| 13 | Timestamps | Synchronised time for every event above | DORA RTS 2024/1774 Art. 12: clock synchronisation |
| 14 | Retention and integrity | Retention class, legal hold flag, storage type, access log | SEA Rule 17a-4(f); DORA tamper protection; AI Act retention floor |

Fields 1 to 8 usually come from tracing and observability tools. Fields 9 to 12 live in the firm's own workflow, and that is where most trails break. **lowob**'s rule of thumb: rent the wiring, own the record.

## What should be logged before any AI decision is made?

The system-level record: what the AI system is, who owns it, what it may do and how it has changed. Decision logs are hard to interpret without it.

| Field | What to log | Who expects it |
| --- | --- | --- |
| Inventory entry | System ID, use case, business function, provider, deployment status | OCC framework inventory; FCA use-case and agent inventories; DORA Art. 8 |
| Owner and approver | Accountable owner, approval authority and approval date | OCC governance component; FCA senior manager accountability |
| Risk tier | Tier and the factors behind it, such as consequence, reversibility and autonomy | OCC illustrative four-tier method; SR 26-2 materiality |
| Permitted use and limits | What the system may and may not do, data it may touch | OCC "defined purpose and permitted use" |
| Permissions | Tools, credentials and actions the agent holds, and their scope | OCC: agent identities and credentials governed "comparable to privileged users" |
| Autonomy level | Answer, draft, act with approval, act and report, or act alone | FINRA human-in-the-loop consideration; OCC human-in-the-loop and human-on-the-loop |
| Change history | Model, prompt, data, configuration, provider, tool and permission changes, linked to testing | OCC framework; DORA Art. 9(4)(e) change management |
| Testing and validation | Test sets, results, sign-off and date | SR 26-2 validation; NIST AI RMF MEASURE 2.1 |

The change history is the field that links the two tables. When field 5 or 6 in a decision record shows a new version, the change history should show who approved it and what testing preceded it. The OCC framework puts it directly: "Model, prompt, fine-tuning, data, configuration, provider, tool, and permission changes may be logged and linked to testing."

## Which audit trail fields do most firms miss?

Four fields carry most of the risk: retrieved context by version, what the reviewer saw, the final action as distinct from the proposal, and the outcome.

**Retrieved context.** A link to the current version of a policy proves nothing about the version the system saw. Store the ID, version and status at the moment of retrieval. Our piece [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) explains why records that change in place break reconstruction.

**The reviewer's view.** An approval click without a record of what was on screen, or how long it stayed there, cannot separate a real check from a rubber stamp. The FCA's 19 October 2026 review flagged the risk of human review "being a 'box-ticking' exercise, rather than meaningful oversight." Our essay [A reviewer who does not verify is not a control](https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/) sets out why.

**Final action.** The text a person sent after editing is the record that counts under SEA Rule 17a-4(b)(4). Log the diff between proposal and action.

**Outcome.** SR 26-2 describes outcomes analysis as comparing "model outputs to corresponding real-world outcomes." Without an outcome field written back to the run ID, no one can say whether the system is improving or drifting.

## How long should AI audit records be kept?

As long as the longest rule that applies to the record type, which is usually years, not months.

| Regime | Retention | Format rule |
| --- | --- | --- |
| EU AI Act Art. 19 and 26(6), high-risk systems | At least six months, unless other law provides otherwise; financial institutions keep logs within financial services documentation | None in the article |
| FINRA Rule 4511(b) | At least six years where no other period applies | Format per SEA Rule 17a-4 |
| SEA Rule 17a-4(a) and (b) | Six years for core records, three for communications | 17a-4(f): time-stamped audit trail or non-rewriteable, non-erasable storage |
| DORA RTS 2024/1774 Art. 12 | Set from business and information security objectives and the ICT risk assessment | Protection "against tampering, deletion, and unauthorised access" |
| OCC framework (examiner resource) | "Periods appropriate to legal, supervisory, audit, customer-remediation, and operational needs" | Not specified |

Personal data cuts the other way. The AI Act retention clauses defer to data protection law, so a trail that stores full customer inputs needs a deletion rule as well as a retention rule. Storing inputs by reference, with the source system holding the data, often resolves the tension.

## How do you test that an AI audit trail works?

Rebuild a real decision from it, against the clock. Pick one AI-assisted decision from about three months ago and try to answer six questions from records alone:

1. What was the system asked, by whom and when?
2. Which data and documents did it see, in which versions?
3. Which model and instruction set produced the output?
4. What did it do, including every tool call?
5. Who reviewed it, what did they see and what did they change?
6. What did the firm finally do, and what happened next?

If any answer needs an interview, an email search or a second team, that field is missing. The OCC framework's documentation component states the goal: records "may support reconstruction of material outputs or actions even when the model cannot produce a rule-based rationale."

Gateway card

### Signs the trail is complete

- One run ID joins trace, approval, final action and outcome
- Retrieved documents are stored by version and status at retrieval
- Reviewer view, time spent, action and reason are logged as events
- Every model, prompt and permission change links to a test record
- Storage is write-once or keeps a full audit trail of changes
- Retention is set to the longest applicable rule, with a deletion rule for personal data
- A three-month-old decision can be rebuilt in minutes, not days

Tools help with parts of this. Our rankings of [LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/) and [AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/) cover the trace side and the inventory side respectively.

## lowob takeaways

- **Fourteen fields, one ID.** The decision record works only when every field joins on a single run ID.
- **Log the system as well as the decision.** Inventory, permissions and change history explain what a decision log shows.
- **The review half is the weak half.** Reviewer view, time spent, edits and outcome are where most trails are thin.
- **Integrity is a requirement.** SEA Rule 17a-4(f) and DORA both rule out editable logs.
- **Test by reconstruction.** A timed rebuild of an old decision is the only proof the trail works.

## Common questions

### What should an AI audit trail include?

A linked record of each AI-assisted decision: a run ID, the request, inputs, retrieved context with versions, the model and prompt versions, tool calls, the output, the reviewer and their action, the final action, the outcome, synchronised timestamps and retention metadata. Behind it sits a system record with inventory entry, owner, risk tier, permissions and change history.

### Does FINRA require firms to log AI prompts and outputs?

FINRA's 2026 oversight report does not create a new rule, but among its generative AI practices it suggests storing prompt and output logs for accountability and troubleshooting and tracking which model version was used and when. Existing books-and-records rules, Rule 4511 and SEA Rule 17a-4, already require retention of communications and other records an AI tool produces.

### How long should AI decision logs be kept?

Keep them for the longest period that applies to the record type. The EU AI Act sets a six-month floor for high-risk system logs, FINRA Rule 4511 defaults to six years, and SEA Rule 17a-4 sets six years for core records and three for communications. DORA leaves log retention to the firm's risk assessment.

### What is decision traceability in AI?

Decision traceability means a firm can follow an AI-assisted decision from input to action. The OCC's November 2026 examiner framework describes it as covering inputs, outputs, context, retrieved sources, tool calls, approvals, overrides and actions, so that material outputs or actions can be reconstructed even when the model cannot give a rule-based rationale.

### Can AI audit logs be stored in a normal database?

Only if the system meets the applicable format rules. SEA Rule 17a-4(f) requires electronic records to be kept either with a complete, time-stamped audit trail of changes and deletions or in non-rewriteable, non-erasable form. DORA's logging standard requires protection against tampering, deletion and unauthorised access. A table the operating team can edit meets neither.

## In the news

- 4 November 2026 · OCC[OCC publishes Bulletin 2026-54, an examiner framework for bank AI](https://lowob.com/news/#2026-11-04-occ-publishes-bulletin-2026-54-an-examiner-framework-for-ba)It is examiner guidance and sets no new expectations for banks on its own. It still tells you which records an exam will ask to see.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

## Sources and notes

- [FINRA, 2026 Annual Regulatory Oversight Report: GenAI](https://www.finra.org/rules-guidance/guidance/reports/2026-finra-annual-regulatory-oversight-report/gen-ai), December 2025. Primary; considerations and practices, not rule text.
- [OCC, Super Intelligence: Supervisory Framework](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-97a.pdf), 4 November 2026, transmitted by [Bulletin 2026-54](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-54.html). Primary; examiner resource that sets no supervisory expectations for banks.
- [Legal Information Institute, 17 CFR 240.17a-4](https://www.law.cornell.edu/cfr/text/17/240.17a-4). Reproduction of the SEC regulation.
- [FINRA, Rule 4511: General Requirements](https://www.finra.org/finramanual/rules/r4511). Primary rule text.
- [European Commission AI Act Service Desk, Article 12](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-12), [Article 19](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-19) and [Article 26](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26), as at 27 July 2026. Primary legal text.
- [SpringLex, Commission Delegated Regulation (EU) 2024/1774, Article 12: Logging](https://www.springlex.eu/en/packages/dora/rts-rmf-regulation/article-12/). Official Journal text via a third-party reader.
- [FCA, AI in financial services: good practice and areas for improvement](https://www.fca.org.uk/publications/good-poor-practice/ai-financial-services), 19 October 2026. Primary; examples only, no new requirements.
- [Federal Reserve, SR 26-2 attached guidance](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf), 17 April 2026. Primary; outcomes analysis and materiality.
- [NIST AI Resource Center, AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/). Primary; voluntary framework, source for MEASURE 2.1.
- The field grouping, the four commonly missed fields and the reconstruction test are **lowob**'s framework.

## Related research

- [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [What Is an AI Audit Trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [How to Document an AI Model for Regulators: A Practical Template](https://lowob.com/research/how-to-document-an-ai-model-for-regulators/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [FINRA and AI in 2026: What Broker-Dealers Must Record and Supervise](https://lowob.com/research/finra-ai-guidance-2026/)

## Next move

Print the fourteen-field table and mark each field captured, partly captured or missing for one live AI workflow. Then run the six-question reconstruction test on a decision from three months ago.

[Start a conversation](https://lowob.com/contact/)
