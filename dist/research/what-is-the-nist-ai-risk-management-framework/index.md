# What Is the NIST AI Risk Management Framework?

Source: https://lowob.com/research/what-is-the-nist-ai-risk-management-framework/
Publisher: lowob (https://lowob.com)
Published: 2026-08-13 · Updated: 2026-11-17
Function: Strategy

> Summary: The NIST AI Risk Management Framework is voluntary guidance, released in January 2023, that organises AI risk work into four functions: govern, map, measure and manage. A Generative AI Profile followed in July 2024, and NIST says the framework is being revised. For a mid-size firm it is most useful as a structure for an AI inventory and a review routine, not as a certification.

The NIST AI Risk Management Framework (AI RMF) is voluntary guidance from the US National Institute of Standards and Technology for identifying and managing the risks of designing, developing, deploying and using AI. Its core is four functions: govern, map, measure and manage. It cannot be certified against and carries no legal force, but buyers, auditors and other frameworks refer to it, so it is a common language for AI risk.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What the AI RMF is

The framework is a structured way to think about AI risk across a system's life. It is technology-neutral and sector-neutral, and it applies to organisations that build AI and those that only use it. A 50-person firm that relies on vendor tools is in scope in the same way as a model developer, though its answers are much shorter.

| The AI RMF is | The AI RMF is not |
| --- | --- |
| Voluntary guidance from a US standards agency | A law or a regulation |
| A vocabulary and structure for AI risk | A certifiable standard (ISO/IEC 42001 fills that role) |
| Applicable to builders and users of AI | Limited to model developers |
| Supported by a Playbook and profiles | A fixed checklist to complete once |

## The four functions

**Govern** sets the conditions for everything else: policies, roles, accountability, culture and how the organisation handles third-party AI. NIST treats it as cross-cutting, informing the other three functions rather than coming first in a sequence.

**Map** establishes context for each AI use: its purpose, the people affected, the data involved, the expected benefits and the ways it could fail. For a commercial team this is the inventory line for each tool.

**Measure** assesses the risks that mapping found, using tests, metrics and review. For a vendor tool that can be as simple as sampling outputs each month and recording error rates.

**Manage** decides what to do about each risk: accept, mitigate, transfer or stop. It also covers incident response and decommissioning.

| Function | Question it answers | Mid-size firm example (illustrative) |
| --- | --- | --- |
| Govern | Who decides, and by what rules? | AI policy, named owner per tool, approval matrix |
| Map | What is this use, and what could go wrong? | Inventory entry: purpose, data, users, client exposure |
| Measure | How well is it working? | Monthly sample of outputs scored for accuracy |
| Manage | What are we doing about the risks? | Autonomy level set per use, kill switch owner named |

## Profiles and what has changed since 2023

NIST extends the framework through profiles that apply it to a technology or sector. The Generative AI Profile, NIST AI 600-1, lists 12 risks, among them confabulation, information security, intellectual property, harmful bias and value chain and component integration, which covers risks from third-party models and data. It then maps suggested actions to each function.

Three developments matter for anyone using the framework in 2026. First, NIST says AI RMF 1.0 is being revised under the White House AI Action Plan, so section references may change. Second, NIST published a concept note on 7 April 2026 for a profile on trustworthy AI in critical infrastructure. Third, a Cybersecurity Framework Profile for AI is in preparation: NIST held a workshop on the preliminary draft, NIST IR 8596, in January 2026, and has said it plans control overlays for predictive and agentic AI, with finalisation expected by 2027.

## How a mid-size company uses it

The framework is long, and most of it is written for organisations with dedicated risk teams. A proportionate approach takes the structure and leaves the detail.

| Step | AI RMF function | What to produce |
| --- | --- | --- |
| Write a one-page AI policy and name an accountable executive | Govern | Policy and owner |
| List every AI use, including features inside existing software | Map | Inventory with purpose, data and exposure |
| Use the 12 generative AI risks as a review checklist per tool | Map, Measure | Risk notes per inventory line |
| Set an autonomy level and approver for each use | Manage | Approval matrix |
| Record decisions, incidents and outcomes | Govern, Manage | Decision record reviewed quarterly |

This matches the **lowob** view that governance is a record, not a document. The framework tells you which questions to ask; the decision record shows which ones were answered, by whom and with what result. When a buyer's due diligence asks whether you follow the NIST AI RMF, the inventory and record are the evidence.

## lowob takeaways

- **Voluntary but widely referenced.** The AI RMF has no legal force, yet buyers and auditors use its vocabulary.
- **Four functions, one loop.** Govern sets the rules; map, measure and manage apply them to each use.
- **Use the generative profile as a checklist.** NIST AI 600-1's 12 risks make a practical review list for vendor tools.
- **Expect revisions.** NIST is revising the framework and adding cyber and sector profiles.

## Common questions

### What is the NIST AI Risk Management Framework?

Voluntary guidance from NIST, released in January 2023, for managing AI risks through four functions: govern, map, measure and manage.

### Is the NIST AI RMF mandatory?

No. NIST states it is intended for voluntary use. Contracts, sector regulators or customers may still ask organisations to show they follow it.

### Can you get certified to the NIST AI RMF?

No. There is no certification scheme for the AI RMF. Organisations that need a certificate usually pursue ISO/IEC 42001.

### What is NIST AI 600-1?

The Generative AI Profile of the AI RMF, published in July 2024. It lists 12 risks specific to or worsened by generative AI and suggests actions for each.

## Sources and notes

- [NIST, AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), page updated 13 August 2026. Primary source; release dates, revision status and critical infrastructure concept note.
- [NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), 26 July 2024. Primary publication; list of 12 risks.
- [NIST, Workshop summary report for Cyber AI Profile hybrid workshop (NIST IR 8607)](https://www.nist.gov/node/1917811), 3 August 2026. Primary source on the NIST IR 8596 draft.
- [Washington Technology, NIST aims for summer release of AI cyber guidelines](https://washingtontechnology.com/companies/2026/05/nist-aims-summer-release-ai-cyber-guidelines/413590/), 15 May 2026. Trade press; NIST's stated timetable for overlays.

## Related research

- [What Is AI Governance?](https://lowob.com/research/what-is-ai-governance/)
- [Gateway 0: Three Decisions Before Any AI Tool](https://lowob.com/research/gateway-zero-three-decisions-before-any-ai-tool/)
- [Top 5 AI Governance and Audit-Trail Tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)

## Next move

Take your current list of AI tools and add four columns: owner, purpose and data (map), how you check output (measure), and approval level (manage). Any blank cell is your first governance task.

[Start a conversation](https://lowob.com/contact/)
