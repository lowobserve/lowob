# What Is Model Risk Management for AI?

Source: https://lowob.com/research/what-is-model-risk-management/
Publisher: lowob (https://lowob.com)
Published: 2026-08-02 · Updated: 2026-11-16
Function: Strategy

> Summary: Model risk management covers the inventory, development, validation, monitoring and governance of models whose errors could cause loss. In April 2026 US banking agencies rescinded SR 11-7 and issued principles-based guidance, SR 26-2, which explicitly excludes generative and agentic AI. The UK PRA's SS1/23 still covers AI used in modelling. For firms outside banking, the discipline is a useful template for AI tools that drive decisions.

Model risk management (MRM) is the discipline of identifying, validating, monitoring and governing the models an organisation relies on, so that a wrong or misused model does not cause financial loss or poor decisions. It grew up in banking. In April 2026 US banking agencies rescinded the long-standing SR 11-7 guidance and replaced it with shorter, risk-based guidance, SR 26-2, which leaves generative and agentic AI out of scope. Firms using AI to drive decisions still need the same core habits: an inventory, a materiality judgment, independent challenge and ongoing monitoring.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What model risk management means

Model risk is the risk of loss from a model that is wrong, or from a correct model used for the wrong purpose. MRM manages it through a lifecycle. SR 26-2 keeps the familiar components while cutting the detail.

| Component | What SR 26-2 says | What it looks like in practice |
| --- | --- | --- |
| Inventory | Should hold "sufficient information to understand model risks", individually and in aggregate | A register of each model, owner, purpose and risk rating |
| Development | Aligned with "model purpose, business use, and banking organization policy" | Documented design choices and data sources |
| Validation | Evaluates "whether models perform as expected", including reliability and limits | Conceptual review, outcomes analysis, ongoing monitoring |
| Monitoring | Whether a model "is performing as expected" over time | Drift checks, overrides tracked, periodic review |
| Governance | Policies and controls across the lifecycle | Approval rights, escalation, internal audit |

## What changed in April 2026

SR 11-7 had been the reference text for MRM, inside and outside banking, since 2011. The agencies' view was that it had come to be applied more prescriptively than intended, especially at smaller banks. SR 26-2 is shorter and principles-based, and states that it does not set enforceable standards.

| Topic | SR 11-7 (2011) | SR 26-2 (2026) |
| --- | --- | --- |
| Status | Supervisory guidance, widely treated as a rulebook | Principles; non-compliance alone does not trigger criticism |
| Scope threshold | Commonly applied from $1 billion in assets | Most relevant above $30 billion |
| Model definition | Included mathematical theories | Statistical, economic or financial theories only; spreadsheets and rule engines excluded |
| Risk tiering | General expectation of proportionality | Inherent risk combined with materiality; light oversight for immaterial models |
| Effective challenge | Incentives, competence and influence | Expertise, independence sufficient for objectivity, standing to drive change |
| Generative and agentic AI | Not addressed | Explicitly out of scope |
| Vendor models | Within the MRM framework | Principles still apply where banks cannot validate vendor models; customisations documented |

The AI exclusion is the most discussed change. It does not mean generative AI in banks is unsupervised. The agencies direct banks to their broader risk management and governance for those tools, and have said they will issue a request for information on AI use, including generative and agentic AI.

Outside the US, the UK PRA's supervisory statement SS1/23 applies to UK banks and building societies with internal model approval. Its five principles cover all models used to inform business decisions, built or bought, and one sub-principle addresses the risks of using AI in modelling techniques.

> The new US guidance took generative AI out of model risk scope. It did not take it out of risk management.

## Why it matters outside banking

A 20 to 500 person firm will rarely be supervised for model risk. The discipline is still useful wherever an AI tool influences a decision with money attached: pricing, credit terms for customers, lead prioritisation that sets where sellers spend time, or forecasts presented to a board.

A proportionate version borrows four habits:

| Habit | Question | **lowob** equivalent |
| --- | --- | --- |
| Inventory with materiality | Which AI tools drive decisions, and how much money rides on each? | AI inventory with an exposure column |
| Effective challenge | Who outside the owning team reviews the tool's output? | A named reviewer with standing to stop it |
| Outcomes analysis | Did the predictions or recommendations turn out right? | Outcomes written back to the decision record |
| Vendor accountability | What can we check when we cannot see inside the model? | Output sampling, vendor documentation, contract terms |

The third habit is where most firms are weakest. Validation in MRM compares what a model said with what happened. That is the learning step of the enterprise brain: a decision recorded with its expected outcome, and the actual outcome written back later. Without it, nobody can say whether an AI-assisted forecast or score is improving or drifting.

## lowob takeaways

- **SR 11-7 is gone.** SR 26-2 replaced it on 17 April 2026 with principles-based, risk-tiered guidance.
- **Generative and agentic AI sit outside SR 26-2.** Banks govern them through broader risk management, pending further agency work.
- **Materiality decides effort.** Immaterial models get light oversight; decision-driving ones get challenge and validation.
- **Outcomes are the test.** Recording expected and actual outcomes is validation in its simplest form.

## Sources and notes

- [Federal Reserve, SR 26-2: Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm), 17 April 2026, and [attached guidance](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf). Primary source; model definition and AI footnote.
- [Orrick, Agencies overhaul model risk management guidance for banks: here's what changed](https://www.orrick.com/en/Insights/2026/04/Agencies-Overhaul-Model-Risk-Management-Guidance-for-Banks-Heres-What-Changed), April 2026. Law firm analysis comparing SR 11-7 and SR 26-2.
- [Bank of England PRA, SS1/23 Model risk management principles for banks](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss), updated 23 April 2026. Primary UK supervisory statement.

## Related research

- [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [What is outcome write-back?](https://lowob.com/research/what-is-outcome-write-back/)
- [The commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [What is AI governance?](https://lowob.com/research/what-is-ai-governance/)

## Next move

List the AI tools whose output changes a price, a credit term, a forecast or where sellers spend their time. For each, name one reviewer outside the owning team and start recording expected against actual outcomes.

[Start a conversation](https://lowob.com/contact/)
