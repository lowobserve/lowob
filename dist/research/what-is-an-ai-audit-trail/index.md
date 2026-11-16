# What Is an AI Audit Trail?

Source: https://lowob.com/research/what-is-an-ai-audit-trail/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: An AI audit trail links inputs, model and version, outputs, tool actions, human approvals and outcomes into a chain a supervisor can follow. The EU AI Act sets log and retention rules for high-risk systems, FINRA asks firms to track agent actions, and model risk guidance in the US and UK shapes the governance around it.

An AI audit trail is the record that lets a firm reconstruct, after the fact, what an AI system was given, what it produced or did, which model and instructions it used, and who approved the result. In financial services it is the evidence a supervisor asks for when a client outcome is questioned. Logs from tools are part of it; the decisions, approvals and outcomes the firm records are the rest.

*Figure: The Build Order, end to end. This piece maps the whole route.*

## What an AI audit trail means

A system log records events. An audit trail records a chain: enough linked evidence that someone who was not there can follow a decision from input to outcome. For an AI system that chain has six links.

| Link | What to record |
| --- | --- |
| Input | The request, the documents or data retrieved, and their versions |
| System | Model, version, prompt or instruction set, and configuration at the time |
| Output and actions | What the system produced and every tool call it made, with parameters |
| Human decision | Who approved, edited or returned it, when, and what they saw |
| Outcome | What happened afterwards: sent, executed, complained about, reversed |
| Change history | When the model, prompt or permissions changed, and who signed off |

**lowob**'s view is that the first three come mostly from tools and observability platforms, while the last three belong in a record the firm owns. Rent the wiring, own the record.

## What regulators expect

**EU AI Act.** Article 12 requires high-risk systems to "technically allow for the automatic recording of events (logs) over the lifetime of the system", to support risk identification, post-market monitoring and operational oversight. Article 26 requires deployers to keep logs under their control for at least six months. Financial institutions subject to EU financial services governance rules keep them as part of that existing documentation. The Digital Omnibus moved Annex III high-risk obligations to 2 December 2027.

**FINRA.** The 2026 Annual Regulatory Oversight Report, released on 9 December 2025, notes that generative AI can engage rules on supervision, communications and recordkeeping. For firms exploring agents it lists monitoring system access and data handling, deciding where human-in-the-loop oversight is required, and "tracking agent actions and decisions". Its broader generative AI discussion mentions keeping prompt and output logs for accountability and troubleshooting.

**US model risk guidance.** SR 11-7, the Federal Reserve's 2011 model risk guidance, was rescinded on 17 April 2026. The Federal Reserve, OCC and FDIC replaced it with Revised Guidance on Model Risk Management. According to Orrick's analysis, the new guidance is most relevant to banks above $30 billion in assets and excludes generative and agentic AI in a footnote, telling banks to rely on broader risk governance for those tools. Its ideas of inventory, validation and documentation remain useful, but it should no longer be cited as current guidance.

**UK model risk guidance.** The PRA's SS1/23 sets five principles: model identification and classification, governance, development and use, independent validation, and risk mitigants. It applies to UK banks, building societies and PRA-designated investment firms with internal model approval for regulatory capital, and the current version took effect on 23 April 2026. It covers models used to inform business decisions "regardless of technology" and refers explicitly to machine learning. Firms outside its scope can still use the five principles as a reference point.

> Supervisors inspect the chain of evidence, approval and outcome, not the model's internals.

## How to start one

Most firms already hold pieces of the trail in different places: traces in an observability tool, approvals in email, outcomes in the CRM. The work is to link them with a shared identifier.

| Step | Practical test |
| --- | --- |
| Inventory AI use | Every model, agent and AI feature has an owner and a purpose |
| Give each run an ID | The trace, approval and outcome can be joined on one key |
| Version instructions | You can say which prompt and model produced last month's output |
| Log approvals with evidence | The reviewer's name, time and the sources they saw are stored |
| Write outcomes back | Complaints, reversals and corrections are linked to the run |
| Set retention | At least six months where the AI Act applies, longer if recordkeeping rules require |

## lowob takeaways

- **A trail is a chain.** Logs become an audit trail only when input, action, approval and outcome are linked.
- **Check what you cite.** SR 11-7 was rescinded in April 2026; its replacement excludes generative AI.
- **Use existing rules.** Supervision and recordkeeping duties already apply to AI-assisted work.
- **Own the record.** Keep approvals and outcomes in a store the firm controls, not only in vendor logs.

## Sources and notes

- [Regulation (EU) 2024/1689 (AI Act), Article 12: Record-keeping](https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-12/) and [Article 26: Obligations of deployers](https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-26/), Official Journal text via SpringLex. Applies to high-risk systems.
- [Debevoise & Plimpton, FINRA's 2026 Regulatory Oversight Report](https://www.debevoise.com/insights/publications/2025/12/finras-2026-regulatory-oversight-report-continued), December 2025. Law firm summary of FINRA's report.
- [Orrick, Agencies overhaul model risk management guidance for banks](https://www.orrick.com/en/Insights/2026/04/Agencies-Overhaul-Model-Risk-Management-Guidance-for-Banks-Heres-What-Changed), April 2026. Law firm analysis of the rescission of SR 11-7.
- [Bank of England PRA, SS1/23 Model risk management principles for banks](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss), current version effective 23 April 2026. Primary regulator text.
- [National Law Review, EU Digital Omnibus on AI enters into force](https://natlawreview.com/article/eu-digital-omnibus-ai-enters-force), 31 July 2026. Law firm summary of revised AI Act dates.

## Related research

- [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [Top 5 AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [The commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/)

## Next move

Choose one AI-assisted client communication from last month and try to reconstruct it: input, model, prompt version, approver and outcome. Each link you cannot find is the next thing to record.

[Start a conversation](https://lowob.com/contact/)
