# Regulators want the chain, not the model

Source: https://lowob.com/research/regulators-want-the-chain-not-the-model/
Publisher: lowob (https://lowob.com)
Published: 2026-09-18 · Updated: 2026-11-16
Function: Strategy

> Summary: Financial supervisors in the US, UK and EU are not asking to inspect your model; they want you to reconstruct what it did, step by step, and who checked. This guide maps what each regime expects to be reconstructable and for how long, and sets out a field-by-field specification for an AI decision record. That record is also what a judgment system needs to learn, so build it once as the product's spine.

Financial supervisors are not asking to inspect your model. They are asking you to reconstruct what it did, step by step, and who checked. FINRA's 2026 oversight report asks firms to track agent actions and decisions; the FCA's October 2026 review praises firms that kept records of prompts, outputs, model versions and escalation decisions; US bank supervisors have been asking whether banks can audit what their agents decide; and the EU AI Act requires high-risk systems to log events automatically. That trace is the same object a judgment system needs in order to learn. Build it once, as the spine of the product.

*Figure: The Build Order, end to end. This piece maps the whole route.*

Most firms still prepare for an AI examination by assembling model documentation: cards, validation reports, vendor attestations. That material matters, but it answers a question supervisors are asking less often. The questions now arriving are about a particular decision on a particular day: what the system saw, what it did, who approved it and what happened next. A firm that cannot answer those from its records will rebuild the answer under examination, from logs that were never designed for it.

This guide sets out what each major financial regime expects a firm to be able to reconstruct, how long the evidence must be kept, and a field-level specification for the record. Our explainer [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/) covers the basic definition; this piece is the regulatory detail behind it.

## What supervisors are asking for

**FINRA.** The 2026 Annual Regulatory Oversight Report, released on 9 December 2025, added a section on AI agents, defined as "systems or programs that are capable of autonomously performing and completing tasks on behalf of a user." It lists seven risks. Three bear directly on records: agents "acting autonomously without human validation and approval"; agents that "may act beyond the user's actual or intended scope and authority"; and the warning that "complicated, multi-step agent reasoning tasks can make outcomes difficult to trace or explain, complicating auditability." Two more explain why output sampling is not enough: general-purpose agents "may lack the necessary domain knowledge", and "misaligned or poorly designed reward functions" could lead an agent to optimise decisions in ways that harm investors, firms or markets.

The report's supervisory considerations follow from that list: how to track agent actions and decisions, where to place human-in-the-loop oversight, and how to set guardrails on agent behaviour. Its general generative AI section suggests "storing prompt and output logs for accountability and troubleshooting" and "tracking which model version was used and when." FINRA states that its rules are technologically neutral and apply "just as they apply when firms use any other technology or tool."

The sharpest reading of the report came from a law firm, not the regulator. Snell & Wilmer argued in December 2025 that "once an AI system can take action, rather than merely generate content", a firm's obligations shift; that agent behaviour should be "subject to the same controls applicable to any associated person performing a comparable function"; that a system can reach "a superficially compliant result through noncompliant intermediate conduct"; and that "the firm must be able to reconstruct the full chain of activity" because "outputs alone are insufficient." These are the firm's interpretation, labelled as such, but they follow closely from FINRA's own list of risks.

**US bank supervisors.** Reuters reported on 13 October 2026 that the Federal Reserve, OCC and FDIC were sending written and verbal questions to large, mid-size and smaller banks about advanced AI. According to the six people Reuters cited, the questions covered how agent actions are monitored and approved, whether agent decisions can be tracked and audited, what stops an agent exceeding its authority, and how a bank would shut autonomous systems down. The agencies were gathering information, not prescribing practice, and declined to comment.

**The FCA.** On 19 October 2026 the FCA published *AI in financial services: good practice and areas for improvement*. It states that its examples "do not create new requirements", but they show what supervisors have seen and liked. Good practice included firms that "kept records of consumer prompts, outputs, model versions, applied filters and escalation decisions", firms with "auditable records of decisions, including rationale, challenge, and escalation", and smaller firms that recorded whether staff approved, overrode or escalated an output, which "created an audit trail showing how oversight operated in practice." Areas for improvement included decisions on AI tools that were "poorly documented with limited audit trails or supporting rationale."

> A supervisory trace and a learning record are the same object seen from two sides.

The pattern across three supervisors is consistent. None asked to see model weights. All asked, in different words, for the chain from input to action to approval to outcome.

## The AI-specific rules are late. The record-keeping rules are not.

Purpose-built AI rules for financial firms are still forming, and some are moving backwards in scope.

**US model risk.** On 17 April 2026 the Federal Reserve, OCC and FDIC issued SR 26-2, *Revised Guidance on Model Risk Management*, superseding SR 11-7 (2011) and the 2021 BSA/AML model risk statement. It is "most relevant to" banking organisations with over $30 billion in total assets, states that it is not enforceable, and in footnote 3 says generative and agentic AI models "are not within the scope of this guidance" because they are "novel and rapidly evolving." Orrick's reading is that banks should rely on their broader risk management and governance for those tools. The OCC said the agencies plan a request for information on model risk management that considers "banks' use of AI, including generative AI and agentic AI." As of 24 October 2026 none had appeared in the Federal Register. Our explainer [What is model risk management for AI?](https://lowob.com/research/what-is-model-risk-management/) compares SR 11-7 and SR 26-2 in detail.

For vendor models that remain in scope, SR 26-2 says sound practice includes understanding the model's "conceptual soundness, design, development data, and performance", and "ongoing monitoring and outcome analysis" to check that vendor models remain fit for purpose. That is guidance, not a rule, but it describes evidence a bank can only produce if it records how a vendor model was used and what resulted.

**EU AI Act.** Regulation (EU) 2026/1744, the Digital Omnibus on AI, entered into force on 27 July 2026. It moved Chapter III high-risk obligations to 2 December 2027 for Annex III systems and 2 August 2028 for Annex I systems. The deferral covers high-risk duties only; most Article 50 transparency duties for chatbots and synthetic content applied from 2 August 2026, with machine-readable marking for generative systems already on the market due from 2 December 2026. The Commission's consolidated text shows no amendment markers on Articles 12, 19 or 26, so the logging duties are unchanged; only their start date moved. The [EU AI Act for commercial teams](https://lowob.com/research/the-eu-ai-act-for-commercial-teams/) sets out the full timetable.

**Resilience and records.** Meanwhile the older obligations apply now. DORA has applied since 17 January 2025. FINRA Rule 4511 and SEA Rule 17a-4 predate generative AI by decades. In July 2026, according to Reuters, the ECB asked euro zone banks for plans to counter AI-enabled cyber threats by the end of October, and to map AI use across their businesses and third parties so they could switch systems off and restart them in a controlled way. The FCA's October review folded AI into operational resilience, model failure planning and third-party dependency.

The result is that the AI-specific instruments tell you less than the general ones. Supervision, books-and-records and resilience rules already apply, and supervisors are reading them to cover agents.

## Regime by regime: what must be reconstructable

The table maps each regime to the evidence it implies and the retention it sets. Where a regime sets no period of its own, the period comes from the firm's other record-keeping obligations, and that is noted.

| Regime | What must be reconstructable | Retention | Source |
| --- | --- | --- | --- |
| US banks: SR 26-2 (Fed, OCC, FDIC) | For in-scope models: an inventory with "sufficient information to understand model risks"; vendor model design, data and performance; monitoring and outcome analysis. Generative and agentic AI out of scope, governed through broader risk management | None set; follows the bank's record policies | SR 26-2 and attachment, 17 April 2026 |
| US banks: supervisory questions | Whether agent decisions can be tracked and audited, who approves agent actions, and how systems are shut down | None set | Reuters, 13 October 2026 (press report of non-public inquiries) |
| US broker-dealers: FINRA | Agent actions and decisions; prompts and outputs; model version used and when; supervision under Rule 3110 | At least six years where no other period applies (Rule 4511(b)); format per SEA Rule 17a-4 | FINRA 2026 report; Rule 4511 |
| US broker-dealers: SEC | Business communications, including AI-drafted ones sent or received | Three years for communications under 17a-4(b)(4), six years for core records under 17a-4(a), first two years easily accessible; electronic systems need a time-stamped audit trail or non-rewriteable storage | 17 CFR 240.17a-4 |
| UK: FCA | Prompts, outputs, model versions, filters and escalation decisions; decision rationale, challenge and escalation; agent inventory with owners and controls | Existing Handbook rules; for in-scope recorded communications, five years, or seven if the FCA asks (SYSC 10A) | FCA good practice review, 19 October 2026; Global Relay summary of SYSC 10A |
| UK: PRA SS1/23 | Model identification and classification, governance, development and use, independent validation, mitigants, for models used in business decisions "regardless of technology", including vendor and machine learning models | None set | PRA SS1/23, version effective 23 April 2026 |
| EU AI Act: providers (Art. 12, 19) | Automatic event logs over the system's lifetime, sufficient to identify risk situations, support post-market monitoring and monitor operation | At least six months; financial institutions keep logs within their financial services documentation | AI Act Service Desk, consolidated text at 27 July 2026 |
| EU AI Act: deployers (Art. 26) | Operation monitored against the instructions for use; human oversight assigned to competent people; logs under the deployer's control | At least six months; financial institutions keep logs within their financial services documentation | As above; applies to Annex III systems from 2 December 2027 |
| EU: DORA | ICT-related incidents and significant cyber threats; root causes; logs of access, change management, ICT operations and network traffic | Set by the firm from its ICT risk assessment; logs protected against tampering, deletion and unauthorised access; clocks synchronised | Regulation (EU) 2022/2554 Art. 17; Delegated Regulation (EU) 2024/1774 Art. 12 |

Four points in the table are easy to miss.

**The EU minimum is a floor, not the answer.** Six months is the AI Act's minimum. A financial institution keeps the same logs "as part of the documentation kept pursuant to the relevant Union financial service law", which in practice points to the longer periods in sector rules. A credit decision made with a high-risk system in 2028 may need its log long after six months have passed.

**High-risk scope is narrow but includes core lending.** Annex III point 5(b) covers systems "to evaluate the creditworthiness of natural persons or establish their credit score", excluding fraud detection; point 5(c) covers risk assessment and pricing for life and health insurance. Business account scoring and most internal drafting tools fall outside. For those, the logging duty comes from FINRA, the SEC, the FCA and DORA rather than the AI Act.

**Format matters as much as content.** SEA Rule 17a-4(f) allows electronic records only if the system keeps a complete, time-stamped audit trail of modifications and deletions, with the identity of the person acting, or stores records in non-rewriteable, non-erasable form. DORA's logging standard requires protection against "tampering, deletion, and unauthorised access." A trace held in a mutable application table, editable by the team that runs the agent, meets neither.

**Guidance labels are not the boundary of scrutiny.** SR 26-2 excludes generative AI from scope; US supervisors were asking about agent audit trails six months later. The FCA sets no new rules; its review still describes the records it expects good firms to hold.

## What the trace must contain

A usable trace for an AI-assisted decision records, with timestamps and actors, the request, the evidence, the system, the output, every human action, the final action and the outcome. The table turns that into fields. Each field names the regulatory reason for keeping it, so that compliance can sign off the specification line by line.

| Field | What to store | Why a supervisor needs it |
| --- | --- | --- |
| Record ID and parent ID | A unique ID per run, linked to the case, account or ticket and to any earlier run it supersedes | Joins the trace, the approval and the outcome; without it nothing reconstructs |
| Request | The instruction as made, the requester, channel and time received | Shows what the system was asked to do and by whom |
| Inputs | Customer and case data passed to the system, by reference and version, with personal data handled under the firm's privacy rules | Lets a reviewer replay the situation; FCA good practice names consumer prompts |
| Retrieved context | Each document or record retrieved, with its ID, version, status, date and source at the moment of retrieval | Proves which evidence the answer rested on, even after the source changes |
| Model and version | Provider, model name and version, deployment or endpoint | FINRA suggests tracking "which model version was used and when"; FCA names model versions |
| Instructions and configuration | Prompt or instruction set version, system settings, guardrails and filters applied | Explains behaviour that a model version alone cannot; FCA names applied filters |
| Tool calls | Each tool or API called, with parameters, response, permission used and time | FINRA's "track agent actions"; shows whether the agent stayed within its authority |
| Output | The text, score or recommendation produced, with any confidence or rationale the system gave | The thing a reviewer approved or rejected |
| Reviewer | Name or role, what they were shown, time opened, time spent | FCA warns that review can become "box-ticking"; time spent is the evidence it did not |
| Reviewer action | Approved, edited (with the diff), rejected, escalated, with reason | Rationale, challenge and escalation are what the FCA called auditable records |
| Final action | What was actually sent, executed or filed, by whom, and when | Separates what the system proposed from what the firm did |
| Outcome | Complaint, reversal, default, correction or confirmation, written back when it arrives, with date | Outcome analysis under SR 26-2; the learning signal for the firm |
| Timestamps | Synchronised time for every event above | DORA requires clock synchronisation; sequence is the chain |
| Retention and integrity | Retention class, legal hold flag, write-once or audit-trailed storage, access log | SEA Rule 17a-4(f) format; DORA tamper protection; AI Act retention floor |

Two fields cause most of the trouble in practice. The first is retrieved context. Storing a link to the current version of a policy is not enough; the trace needs the version the agent saw, with its status at that moment. Our piece [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) explains why records that change in place break reconstruction. The second is the reviewer. An approval click with no record of what was shown, or how long it took, cannot distinguish a real check from a rubber stamp, and our piece [A reviewer who does not verify is not a control](https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/) argues that distinction is the one that matters.

That list is also, almost exactly, what a judgment system needs to learn: the situation, the evidence, the recommendation, the human correction, the decision and the result. Our [approval gate explainer](https://lowob.com/research/what-is-an-approval-gate/) shows where the reviewer fields are captured in the workflow.

## Spine, not afterthought

Teams that treat tracing as an engineering nicety will rebuild it under examination, at speed, from logs that were never designed to answer a supervisor's questions. Observability tools capture the first half of the table well: inputs, model calls, tool calls and latency. Our list of [LLM observability and evaluation platforms](https://lowob.com/research/top-5-llm-observability-and-evaluation-platforms/) covers them. They rarely capture the second half: who reviewed, what they changed, what the firm finally did and what happened afterwards. That half lives in the firm's own workflow and belongs in a record the firm owns.

Teams that design the trace as the product's spine get two things at once: supervision that is close to free, and a learning loop with complete data.

One caution: a trace is a record, so it inherits record-keeping obligations. Agree retention, immutability and access with compliance before the first production decision, not after the first request. That includes personal data. The AI Act's retention clause defers to data protection law, so a trace that stores full customer inputs needs a lawful basis and a deletion rule as well as a retention rule.

Illustrative example: the three-month reconstruction drill

Decision
:   A mid-size wealth manager's compliance lead picked one AI-drafted client email from three months earlier and timed how long it took to rebuild the chain.

What changed
:   The firm added a run ID to every draft, stored retrieved documents by version, logged reviewer edits as diffs, and moved the approval into the workflow. The same drill now takes minutes.

Illustrative: a composite built from patterns across regulated firms, not a single client.

**In practice**

Write the trace specification first, with compliance, and build the workflow around it. Make every human action in the review gate a logged event with duration. Store the evidence standing at the moment of retrieval, not just a link to the current version. Put the trace in storage that meets the strictest format rule that applies to you.

Test reconstruction: pick a decision from three months ago and time how long it takes to rebuild the full chain.

## What would prove this wrong

The argument fails if examinations of agentic systems accept model documentation and output sampling without asking for step-level reconstruction. Then the trace is good practice rather than an obligation.

The evidence so far points the other way. FINRA names auditability as a distinct agent risk. US bank supervisors, by Reuters' account, have asked directly whether agent decisions can be tracked and audited. The FCA's review describes audit trails as the evidence of how oversight "operated in practice." Two developments would change the picture: a US request for information that settles on documentation-led expectations for generative AI, or EU harmonised standards for logging that set a lighter bar than sector rules. Neither had appeared by mid-November 2026. The Commission's standardisation request includes record-keeping and logging, but the only harmonised standard published so far, EN 18286 in October 2026, covers quality management.

Gateway card

### Before the first production decision

- A trace specification agreed with compliance, field by field
- One run ID that joins trace, approval, final action and outcome
- Retrieved evidence stored by version and status at retrieval
- Reviewer identity, view, time spent and action logged as events
- Retention set to the longest rule that applies, not the AI Act floor
- Storage that is write-once or keeps a full audit trail of changes
- A timed reconstruction test on a three-month-old decision

## lowob takeaways

- **Supervisors want the chain.** FINRA, US bank supervisors and the FCA all ask for reconstruction of actions, approvals and outcomes, not model internals.
- **Old rules carry the weight.** Rule 4511, SEA Rule 17a-4, DORA and FCA record-keeping already apply to AI-assisted work.
- **Six months is a floor.** The AI Act's retention minimum sits under sector rules that run three to six years or more.
- **Specify the review fields.** Reviewer view, time spent, edits and reasons are where most traces are thin.
- **Build it once.** The supervisory trace and the learning record are the same object.

## Sources and notes

- [Federal Reserve, SR 26-2: Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm), 17 April 2026, and [attached guidance](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf). Primary supervisory text; non-enforceable guidance; AI scope exclusion in footnote 3.
- [OCC, News Release 2026-29: OCC issues updated model risk management guidance](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-29.html), 17 April 2026. Primary; source for the planned request for information.
- [Orrick, Agencies overhaul model risk management guidance for banks: here's what changed](https://www.orrick.com/en/Insights/2026/04/Agencies-Overhaul-Model-Risk-Management-Guidance-for-Banks-Heres-What-Changed), April 2026. Law firm reading of SR 26-2; not legal advice.
- [Reuters via Khaleej Times, Banking watchdogs ramp up AI scrutiny as stability fears mount, sources say](https://www.khaleejtimes.com/business/banking-watchdogs-ramp-up-ai-scrutiny-as-stability-fears-mount-sources-say), 13 October 2026. Press report based on unnamed sources; agencies declined to comment.
- [ComplexDiscovery, US bank regulators ask whether lenders can stop their AI agents](https://complexdiscovery.com/us-bank-regulators-ask-whether-lenders-can-stop-their-ai-agents/), October 2026. Secondary summary of the Reuters report; source for the RFI not appearing in the Federal Register by 24 October 2026.
- [FINRA, 2026 Annual Regulatory Oversight Report: GenAI](https://www.finra.org/rules-guidance/guidance/reports/2026-finra-annual-regulatory-oversight-report/gen-ai), December 2025. Primary; the agent section lists considerations for firms, not rule text.
- [Debevoise & Plimpton, FINRA's 2026 Regulatory Oversight Report: continued focus on generative AI](https://www.debevoise.com/insights/publications/2025/12/finras-2026-regulatory-oversight-report-continued), 12 December 2025. Law firm summary; source for the 9 December 2025 release date.
- [Snell & Wilmer, FINRA's 2026 oversight report signals a supervisory reckoning for autonomous AI](https://www.swlaw.com/publication/finras-2026-oversight-report-signals-a-supervisory-reckoning-for-autonomous-ai/), 17 December 2025. Law firm interpretation, quoted as such; not FINRA's text.
- [FINRA, Rule 4511: General Requirements](https://www.finra.org/finramanual/rules/r4511). Primary rule text.
- [Legal Information Institute, 17 CFR 240.17a-4: Records to be preserved by certain exchange members, brokers and dealers](https://www.law.cornell.edu/cfr/text/17/240.17a-4). Reproduction of the federal regulation.
- [FCA, AI in financial services: good practice and areas for improvement](https://www.fca.org.uk/publications/good-poor-practice/ai-financial-services), 19 October 2026, updated 20 October 2026. Primary; examples only, no new requirements.
- [Global Relay, FCA SYSC 10A](https://www.grip.globalrelay.com/rules/fca-sysc-10-a/). Vendor summary of the FCA Handbook retention period; check the Handbook for scope.
- [Covington & Burling, UK financial services regulators' approach to artificial intelligence in 2026](https://www.globalpolicywatch.com/2026/04/uk-financial-services-regulators-approach-to-artificial-intelligence-in-2026/), 9 April 2026. Law firm summary of FCA, PRA and Treasury Committee positions.
- [Bank of England PRA, SS1/23 Model risk management principles for banks](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss), current version effective 23 April 2026. Primary; applies to UK banks with internal model approval.
- [European Commission AI Act Service Desk, Article 12](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-12), [Article 19](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-19), [Article 26](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26) and [Annex III](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3), consolidated text as at 27 July 2026. Primary legal text; summaries on the pages are non-binding.
- [White & Case, EU AI Omnibus enters into force, amending the AI Act](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act), 4 August 2026. Law firm summary of Regulation (EU) 2026/1744 and its dates.
- [Orrick, First harmonised technical standard published under the EU AI Act](https://www.orrick.com/en/Insights/2026/10/First-Harmonised-Technical-Standard-Published-Under-the-EU-AI-Act), 27 October 2026. Law firm analysis of EN 18286; not legal advice.
- [SpringLex, Commission Delegated Regulation (EU) 2024/1774, Article 12: Logging](https://www.springlex.eu/en/packages/dora/rts-rmf-regulation/article-12/). Official Journal text of the DORA ICT risk management standard, via a third-party reader.
- [Elvinger Hoss Prussen, DORA brochure](https://elvingerhoss.lu/sites/default/files/upload/media/document/2025-04/Brochure%20DORA.pdf), April 2025. Law firm compilation of the DORA text; source for Articles 17 and 64.
- The trace specification, the reconstruction drill and the example are **lowob**'s framework and illustration.

## Related research

- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [What is model risk management for AI?](https://lowob.com/research/what-is-model-risk-management/)
- [The EU AI Act for commercial teams: what applies and when](https://lowob.com/research/the-eu-ai-act-for-commercial-teams/)
- [Top 5 AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [The 10 AI regulatory dates to watch through 2027](https://lowob.com/research/the-10-ai-regulatory-dates-to-watch-through-2027/)

## Next move

Take the field table above to your compliance lead this week and mark each field as captured, partly captured or missing for one live AI workflow. Then run the reconstruction drill on a decision from three months ago and time it.

[Start a conversation](https://lowob.com/contact/)
