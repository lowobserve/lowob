# NIST AI RMF vs ISO/IEC 42001

Source: https://lowob.com/research/nist-ai-rmf-vs-iso-42001/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: The NIST AI Risk Management Framework (AI RMF) is free, voluntary guidance from the US National Institute of Standards and Technology on identifying and managing AI risk. ISO/IEC 42001 is an international standard that sets requirements for an AI management system, which an accredited auditor can certify. In practice, firms use the NIST framework as a vocabulary and checklist, and ISO/IEC 42001 when a customer or regulator wants proof.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## Key points

- NIST released AI RMF 1.0 on 26 January 2023 for voluntary use, and states it is being revised as part of the White House AI Action Plan.
- ISO/IEC 42001 was published on 18 December 2023 and applies to any organisation that provides or uses AI-based products or services.
- A crosswalk on NIST's AI Resource Center maps AI RMF subcategories to ISO/IEC 42001 clauses 4 to 10.
- Under the EU AI Act, ISO/IEC 42001 alone does not give presumption of conformity; the first harmonised standard, EN 18286 for quality management, was published in October 2026.
- Regulation (EU) 2026/1744, in force since 27 July 2026, moved Annex III high-risk obligations to 2 December 2027.

## What each one is

Each has its own explainer, linked below; this piece compares them.

The AI RMF is a framework. It describes outcomes to aim for under four functions: govern, map, measure and manage. It does not say how much is enough, and nobody audits against it. Its value is a shared language for AI risk that buyers, auditors and other frameworks refer to.

ISO/IEC 42001 is a management system standard, built on the same clause structure as ISO 27001 and ISO 9001. It requires a defined scope, an AI policy, assigned roles, risk and impact assessment, chosen controls, internal audit, management review and continual improvement. A certificate says that system exists and runs. It does not say any AI output is correct.

|  | NIST AI RMF | ISO/IEC 42001 |
| --- | --- | --- |
| Publisher | US National Institute of Standards and Technology | ISO and IEC, international |
| Type | Voluntary framework of outcomes | Requirements for a management system |
| Certifiable | No | Yes, by an accredited certification body |
| Cost to obtain | Free | Paid standard, plus audit fees if certifying |
| Structure | Four functions: govern, map, measure, manage | Clauses 4 to 10, plus reference controls in annexes |
| What it produces | A risk vocabulary and profiles | Documented policy, assessments, records and audit evidence |
| Status in 2026 | 1.0, under revision | 2023 edition |
| EU AI Act standing | None formal | Not sufficient alone for presumption of conformity |

## Where they overlap and differ

The overlap is large. The crosswalk on NIST's AI Resource Center pairs, for example, GOVERN 2.3 on executive responsibility with ISO clause 5 on leadership and clause 9.3 on management review. MAP 1.1 on intended purpose maps to ISO's AI system impact assessment. MEASURE 2.4 on monitoring in production maps to clause 9.1 on monitoring and measurement.

The differences are about obligation and evidence. NIST describes what good looks like; ISO requires you to show it to an external auditor. ISO also forces the dull parts: document control, competence records, corrective actions. NIST says more about the AI risks themselves.

## How regulation changes the choice

Neither framework is a legal requirement in itself. For firms selling into the EU, the AI Act's high-risk obligations now apply to Annex III systems from 2 December 2027, after Regulation (EU) 2026/1744 amended the timetable. The route to presumption of conformity is harmonised European standards. The first, EN 18286 for quality management systems, was published by the Commission on 14 October 2026. Orrick notes it uses the same management system structure as ISO/IEC 42001 and is designed to sit on top of it, but that 42001 alone does not confer the presumption.

US banks have a separate line. SR 26-2, issued by the Federal Reserve, OCC and FDIC on 17 April 2026, replaced SR 11-7 as model risk guidance. Neither NIST nor ISO substitutes for it; see [What is model risk management?](https://lowob.com/research/what-is-model-risk-management/).

## Which to choose

| Situation | Start with |
| --- | --- |
| First AI policy, no customer pressure yet | NIST AI RMF, free, as the structure for an inventory and risk register |
| Enterprise buyers asking for AI governance evidence in security reviews | ISO/IEC 42001 gap assessment, then certification if deals depend on it |
| Already certified to ISO 27001 | ISO/IEC 42001, reusing the same management system |
| Building or selling high-risk AI into the EU | ISO/IEC 42001 as the base, with EN 18286 layered on |
| US-regulated bank or lender | SR 26-2 first, with NIST as the AI risk vocabulary |
| Mostly using vendor tools, low exposure | NIST functions as a checklist; no certification |

## The **lowob** view

**lowob**'s view is that both frameworks are asking for the same thing in different tones: a record. In the brain loop, store, wiring, record, reasoning and learning, the frameworks live on the record and learning steps. NIST's map function is an inventory of each AI use and its context. ISO's documented information, management review and continual improvement are a decision record with outcomes written back. Regulators want the chain from decision to result, an argument made in [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/).

So build one record and map it to both. Keep a register of each AI use with owner, purpose, data, autonomy level and approver. Log each material decision with its reason, status and expected outcome, and review the outcomes quarterly. That serves a NIST self-assessment today and an ISO audit later, without a second set of paperwork.

## lowob takeaways

- **NIST is guidance; ISO is evidence.** One gives the vocabulary, the other a certificate a buyer can check.
- **They map closely.** NIST's crosswalk pairs AI RMF subcategories with ISO clauses.
- **Neither is EU compliance alone.** Harmonised standards such as EN 18286 carry the presumption of conformity.
- **Both need a record.** An AI register and a decision log serve either framework.

## Common questions

### What is the difference between NIST AI RMF and ISO 42001?

The NIST AI RMF is free, voluntary US guidance on managing AI risk. ISO/IEC 42001 is an international standard for an AI management system that can be certified by an accredited auditor.

### Can you be certified to the NIST AI RMF?

No. NIST publishes it for voluntary use, and there is no certification scheme. Firms that need a certificate use ISO/IEC 42001.

### Does ISO 42001 make you compliant with the EU AI Act?

Not on its own. It does not give presumption of conformity; harmonised standards such as EN 18286 do. It is a sound base for the management system the Act expects.

## Sources and notes

- [NIST, AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), page updated 13 August 2026. Primary source; release date and revision status.
- [IEC Webstore, ISO/IEC 42001:2023 Artificial intelligence management system](https://webstore.iec.ch/publication/90574), 18 December 2023. Standard abstract; full text is paid.
- [NIST AI Resource Center, NIST AI RMF to ISO/IEC 42001 crosswalk](https://airc.nist.gov/docs/NIST_AI_RMF_to_ISO_IEC_42001_Crosswalk.pdf), undated. Maps to the draft (FDIS) text of the standard; clause numbers may differ slightly from the final edition.
- [Orrick, First harmonised technical standard published under the EU AI Act](https://www.orrick.com/en/Insights/2026/10/First-Harmonised-Technical-Standard-Published-Under-the-EU-AI-Act), 27 October 2026. Law firm analysis of EN 18286.
- [Steptoe via Mondaq, EU AI Act amendments enter into force](https://webiis08.mondaq.com/technology/1824674/eu-ai-act-amendments-enter-into-force), 30 July 2026. Law firm summary of Regulation (EU) 2026/1744 and the revised dates.
- [Federal Reserve, SR 26-2: Revised guidance on model risk management](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm), 17 April 2026. Primary supervisory letter; applies to US banking organisations.

## Related research

- [What is the NIST AI RMF?](https://lowob.com/research/what-is-the-nist-ai-risk-management-framework/)
- [What is ISO/IEC 42001?](https://lowob.com/research/what-is-iso-42001/)
- [What is AI governance?](https://lowob.com/research/what-is-ai-governance/)
- [The 10 AI regulatory dates to watch through 2027](https://lowob.com/research/the-10-ai-regulatory-dates-to-watch-through-2027/)

## Next Move

Write a one-page register of every AI tool your firm uses, with an owner, purpose, data touched and autonomy level for each. It is the first artefact both frameworks ask for.

[Start a conversation](https://lowob.com/contact/)
