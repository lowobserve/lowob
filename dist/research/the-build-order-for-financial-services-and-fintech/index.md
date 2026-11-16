# The Build Order for Financial Services and Fintech

Source: https://lowob.com/research/the-build-order-for-financial-services-and-fintech/
Publisher: lowob (https://lowob.com)
Published: 2026-09-17 · Updated: 2026-11-16
Function: Strategy

> Summary: Financial services is where The Build Order bends. Supervisors expect firms to reconstruct what an AI system did and who approved it, and the April 2026 US model risk guidance leaves generative and agentic AI to firms' own governance. So the decision record and audit trail come before the first agent. The commercial line still comes first; credit, KYC and suspicious activity data sit behind a wall.

Financial services is one of two sectors where The Build Order bends. The commercial line is still the right place to start, but the decision record and the audit trail come before the first agent rather than after it. The reason is supervisory. FINRA's 2026 oversight report covers AI agents for the first time and asks firms how they will track agent actions and decisions. The US banking agencies' April 2026 model risk guidance, SR 26-2, explicitly excludes generative and agentic AI from its scope, which leaves firms to govern those tools through their own risk frameworks. The EU AI Act's high-risk obligations, including credit scoring, now apply from 2 December 2027 after the Digital Omnibus. In each case the question a supervisor asks is the same: show us what happened, who approved it and why. A firm that builds the record first can answer it.

*Figure: The Build Order, end to end. This piece maps the whole route.*

This is the second industry edition of The Build Order. In *The RFP nobody can answer yet* we said the sequence bends in two of eight sectors, and financial services is one of them: a supervisor may ask the firm to reconstruct any automated decision. In *The same build in four industries* a composite mid-market lender moved its record of pricing exceptions ahead of the first agent for that reason. This piece sets out the general case for banks, brokers, payments firms and fintech lenders, using the supervisory sources that apply in late 2026.

The bend is narrow. The commercial line still comes first, the wiring is still rented, and the first agent is still boring. What moves is the record: it becomes part of the foundation rather than the third layer.

## Where the commercial line sits

Fintech and financial services firms grow through a small set of repeated commercial decisions. Which partner or referral channel to prioritise. Which pricing exception to approve for a merchant, borrower or institutional client. Which campaign to run, and to whom. Which accounts to expand or let lapse. Each is frequent and similar enough to learn from, and each has an owner who must defend it, often to a compliance function as well as a budget holder.

| Lens | What it looks like in financial services and fintech |
| --- | --- |
| Commercial line | Partner and referral prioritisation, pricing exceptions, campaigns, account expansion |
| Store | CRM, partner portal, pricing approvals, marketing automation |
| Outcome lag | Months: a loan funds, an account is funded, a merchant processes volume |
| Who defends the decision | Commercial head, finance, compliance, and in the end the supervisor |
| Main regulators | FINRA and the SEC for broker-dealers; US banking agencies; the PRA and FCA in the UK; EU national authorities under the AI Act |
| The wall | Credit files, KYC and AML data, transaction data, suspicious activity reports |
| Gateway that bites | Gateway 1: every client-facing word already passes compliance review |

The difference from other sectors is not the shape of the decisions. It is that someone outside the firm may ask to see them. A pricing exception that went wrong in a software company is a lesson. In a regulated lender it may be a fair-lending question. A campaign message drafted by an agent is a marketing asset in most firms; at a broker-dealer it is a communication with the public, subject to supervision and retention.

## What the supervisors say in 2026

The supervisory picture changed during 2026, and several older references in vendor material are now out of date.

**FINRA.** The 2026 Annual Regulatory Oversight Report, published in December 2025, has a standalone generative AI section that covers AI agents for the first time. It defines agents as "systems or programs that are capable of autonomously performing and completing tasks on behalf of a user". The risks it names include agents acting without human validation and approval, acting beyond the user's actual or intended authority, and multi-step reasoning that makes outcomes hard to trace. Among the considerations it lists: where to have human-in-the-loop oversight, how to track agent actions and decisions, and guardrails on agent behaviour. Its monitoring guidance points to storing prompt and output logs and tracking which model version was used and when. It notes that generative AI can implicate rules on supervision, communications, recordkeeping and fair dealing.

**US banking agencies.** On 17 April 2026 the OCC, Federal Reserve and FDIC jointly issued revised model risk management guidance (SR 26-2 at the Fed), rescinding SR 11-7, OCC Bulletin 2011-12 and the FDIC's 2017 adoption of them. The new guidance is shorter and principles-based, narrows the definition of a model, and is described as most relevant to organisations with more than $30bn in assets. A footnote excludes generative and agentic AI from its scope and directs banks to their broader risk management and governance practices instead. The agencies said they plan a request for information on AI use.

That exclusion matters more than it first appears. There is no longer a model risk framework that a bank can point to for an assistant or an agent. The bank's own governance record has to carry the weight.

**PRA.** In the UK, Supervisory Statement SS1/23 sets five model risk principles: model identification and risk classification, governance, development and use, independent validation, and risk mitigants. It took effect in May 2024 and the current version took effect on 23 April 2026. It is written for banks with internal model approval and covers models used to inform business decisions, with a sub-principle on risks from AI techniques. Its first principle, an inventory of models and their uses, is in practice a record.

**EU AI Act.** The Digital Omnibus on AI, Regulation (EU) 2026/1744, entered into force on 27 July 2026. It moved high-risk obligations for Annex III systems, which include credit scoring of individuals, to 2 December 2027. Most transparency obligations under Article 50 applied from 2 August 2026. Most commercial agents (meeting preparation, partner briefs, draft emails) are not high-risk systems. A creditworthiness model is, and the commercial build must stay on the right side of that line.

**Adoption.** The Bank of England and FCA's 2024 survey of 118 firms found 75% already using AI, with a further 10% planning to within three years. A third of use cases were third-party implementations, 46% of firms reported only a partial understanding of the AI they use, and 55% of use cases involved some automated decision-making, with 2% fully autonomous.

| Source | Date | What it asks for | What it means for the build |
| --- | --- | --- | --- |
| FINRA 2026 oversight report | December 2025 | Human-in-the-loop decisions, tracking agent actions, prompt and output logs, model versions | Log every agent draft and approval before the agent goes live |
| SR 26-2 (OCC, Fed, FDIC) | 17 April 2026 | Principles-based model risk; generative and agentic AI out of scope | The firm's own record is the control for assistants and agents |
| PRA SS1/23 | Effective May 2024; current version April 2026 | Model inventory, governance, validation, mitigants | Keep an inventory of AI tools and the decisions they inform |
| EU AI Act after the Digital Omnibus | In force 27 July 2026 | Annex III high-risk duties from 2 December 2027 | Keep commercial agents out of credit decisions |

> When the guidance leaves agents to your own governance, your own record is the only evidence you have.

## Why the record moves first

In most sectors the record is the third layer: tooling and wiring first, then decisions worth keeping, then an agent. In financial services the record is built alongside the tooling, and two things are logged before any agent is connected.

**The commercial decisions themselves.** Pricing exceptions, partner approvals and campaign approvals, each with the request, the reason, the approver, the value at stake, the expected outcome and a check date. Part 9, *The ten commercial decisions worth recording*, lists the fields. In financial services add one more: the policy or limit the decision relied on, so a reviewer can see whether it sat inside delegated authority.

**The AI audit trail.** For every AI-assisted output: the prompt or instruction, the sources it drew on, the output, the model and version, the person who approved or rejected it, and what was finally sent. This is close to what FINRA's monitoring guidance describes, and it answers the auditability risk the report names. Our explainer *What is an AI audit trail?* covers the mechanics, and *Supersede, never overwrite* explains why records are corrected by adding new entries rather than editing old ones.

The reason for doing this first is practical rather than theoretical. A trail added after the first agent goes live has a gap at exactly the period a supervisor is most likely to ask about: the pilot. And an agent that has been running without logs cannot easily be given them retrospectively, because nobody recorded what it was asked.

## The build order, stage by stage

| Stage | What it means in financial services and fintech | Main risk |
| --- | --- | --- |
| Gateway 0 | Owner, suite and CRM, plus a data-access approver from compliance who decides what crosses the wall | The build owner also approves data access |
| Tooling | Seats for partnership, sales and marketing staff; retention of AI interactions configured before use | Assistant use outside retained, supervised channels |
| Record (moved up) | Pricing exceptions and partner approvals, plus the AI audit trail, live before any agent | Logs added after the pilot, leaving a gap |
| Context | CRM, partner portal, pricing approvals, approved marketing library; credit and KYC systems excluded | A connector that reaches account or credit data |
| Reasoning | A first agent that prepares staff for partner and client meetings and drafts into a compliance queue | An agent drifting into eligibility or pricing advice |
| Gateway 1 | Every external communication approved by a named person and retained, inside existing review | Review queues fill once drafting is cheap |
| Gateway 2 | Value at stake on each exception; outcome written back at funding or first volume | Long outcome lag hides the result |
| Gateway 3 | Extension to operations and finance, with compliance sign-off on each new source | Reaching risk models by the back door |

**Gateway 0.** Part 3 described the fourth decision regulated firms add: who signs off on data access. In financial services this person sits in compliance or risk and is not the build owner. They decide which systems the context layer may read and keep a register of those decisions.

**Tooling.** Seats go to the people on the commercial line: partnership managers, relationship staff, marketing. Before anyone uses them for client work, confirm that interactions are retained in a way that meets the firm's recordkeeping obligations. This is a configuration task, and it is much harder to fix after six months of unlogged use.

**Context.** Connect the CRM, the partner portal, pricing approvals and the library of approved marketing material. Everything else waits.

**Reasoning.** The first agent prepares partnership and relationship managers for meetings, from the CRM and the decision record. It drafts follow-ups into the compliance review queue. It does not quote rates, assess eligibility or suggest products to an individual customer.

**Gateways 1 to 3.** Gateway 1 already exists in most regulated firms, because client communications pass compliance review. The friction is volume, which is why *Approval rate measures fatigue too* matters here. Gateway 2 needs patience: outcomes arrive at funding, first transaction volume or account activity, often months later, so choose a leading indicator such as funded accounts within 90 days and say so in the record. Gateway 3 extends the record to operations and finance one source at a time, each with the data-access approver's sign-off.

## The wall

Four kinds of data must never reach the commercial context layer:

- **Credit files and underwriting data.** A commercial agent that can see a customer's credit file can, in effect, take part in a credit decision. That pulls it toward the Annex III category in the EU and fair-lending scrutiny in the US.
- **KYC and AML records.** Identity documents and risk ratings exist for financial crime controls, not for prospecting.
- **Suspicious activity reports and investigations.** These carry legal confidentiality duties in the US and UK. A system that could surface one in a sales brief is a serious control failure.
- **Customer account and transaction data.** Useful for product teams under their own governance; not inputs to a commercial assistant without a specific, approved purpose.

The wall is enforced in the wiring by the data-access approver, and it is recorded: every connector has an entry saying what it reads, who approved it and when.

Illustrative example: a digital brokerage logs before it drafts

Decision
:   Build the record of partner fee exceptions and the AI audit trail before connecting any agent, and keep account, KYC and suitability data out of the context layer.

Reason and owner
:   The firm is FINRA-registered and grows through adviser and employer partnerships; every partner communication is already reviewed and retained. Owned by the head of partnerships, with the chief compliance officer as data-access approver.

What changed
:   The first agent prepares partnership managers for meetings from the CRM and the exception record, and drafts follow-ups into the compliance queue with prompt, sources, model version and approver logged. The leading indicator for each exception is funded accounts within 90 days.

Illustrative: a composite of a digital brokerage and wealth platform of around 250 people, built from patterns across engagements.

## lowob takeaways

- **Record before you automate.** Where a supervisor will ask why, the record and audit trail come before the first agent.
- **Read the 2026 sources, not the 2011 ones.** SR 11-7 is rescinded; SR 26-2 leaves agents to your own governance.
- **Log the AI, not just the decision.** Prompt, sources, output, model version, approver and what was sent.
- **Wall off credit, KYC, SAR and account data.** The commercial build has no reason to read them.
- **Pick a leading indicator.** Outcome lags run to months, so name the proxy and record it.

Gateway card

### Before a financial services firm connects its first agent

- A data-access approver in compliance or risk, separate from the build owner
- AI interactions retained in line with recordkeeping obligations
- Pricing and partner exceptions recorded with reason, approver, limit relied on and value at stake
- An audit trail of prompt, sources, output, model version and approver, already live
- Credit, KYC, suspicious activity and account systems excluded from the context layer, in writing
- A leading indicator chosen for each decision class with a long outcome lag

## Sources and notes

- [FINRA, 2026 Annual Regulatory Oversight Report: GenAI](https://www.finra.org/rules-guidance/guidance/reports/2026-finra-annual-regulatory-oversight-report/gen-ai), December 2025. Regulator report; FINRA presents agent oversight points as considerations, not new rules.
- [Federal Reserve, SR 26-2: Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm), 17 April 2026. Joint guidance with the OCC and FDIC; principles-based and not itself a rule.
- [Orrick, Agencies overhaul model risk management guidance for banks](https://www.orrick.com/en/Insights/2026/04/Agencies-Overhaul-Model-Risk-Management-Guidance-for-Banks-Heres-What-Changed), April 2026. Law firm summary used for the rescissions, the $30bn threshold and the generative AI footnote.
- [Bank of England, SS1/23: Model risk management principles for banks](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss). PRA supervisory statement; scoped to banks with internal model approval.
- [White & Case, EU AI Omnibus enters into force](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act), July 2026. Law firm summary of Regulation (EU) 2026/1744 and its revised dates.
- [Gibson Dunn, EU AI Act Omnibus agreement](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement), May 2026. Law firm summary; used for credit scoring's place in Annex III.
- [Bank of England and FCA, Artificial intelligence in UK financial services 2024](https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024), 21 November 2024. Survey of 118 firms; self-reported.
- The brokerage is a composite drawn from patterns across **lowob**'s engagements; staff numbers are illustrative.

## Related research

- [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [The 10 AI regulatory dates to watch through 2027](https://lowob.com/research/the-10-ai-regulatory-dates-to-watch-through-2027/)
- [From funded account to lifetime value](https://lowob.com/research/from-funded-account-to-lifetime-value/)

## Next move

Pick one AI-assisted message your team sent last month and try to reconstruct it: the instruction, the sources, the model, the approver and the final text. If you cannot, build that trail before you build anything else.

[Start a conversation](https://lowob.com/contact/)
