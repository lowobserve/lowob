# DORA and AI: What the EU Digital Operational Resilience Act Means for AI Systems

Source: https://lowob.com/research/dora-and-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: DORA regulates ICT rather than AI as such, but AI systems that EU financial entities run or buy are ICT assets and ICT services, so its rules on ICT risk management, logging, incidents, testing and third parties apply to them. The ESAs' July 2026 statement on frontier AI added no obligations but showed how supervisors read the Act. This explainer maps each DORA duty to an AI system.

DORA, the EU Digital Operational Resilience Act, reaches AI systems because they are ICT assets and ICT services, so since 17 January 2025 its rules on ICT risk, logging, incidents, testing and third-party contracts have applied to the AI that financial entities run or buy. The ESAs' July 2026 statement on frontier AI added guidance, not new obligations, in Goodwin's reading.

*Figure: Where this piece sits in The Build Order: the context layer.*

AI governance in EU finance is usually discussed through the AI Act. For most AI systems a bank or insurer uses, DORA bites first: it already applies, it is not limited to high-risk uses, and its supervisors already examine against it. Our pillar guide [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/) shows how DORA's logging duty sits beside the AI Act, FINRA and FCA expectations.

This page reads the DORA text, its logging standard and 2026 supervisory and law-firm commentary, each labelled. It is not legal advice.

## Does DORA apply to AI systems?

Yes, through its definitions rather than by name. DORA regulates ICT risk, and Article 3 defines ICT services as "digital and data services provided through ICT systems to one or more internal or external users on an ongoing basis." A model hosted by a vendor and called through an API is an ICT service. An agent running on the firm's own infrastructure is an ICT asset.

Practitioners read it the same way. Writing on PayTechLaw on 7 September 2026, Josefine Spengler of Annerton argued that cyber threats amplified by frontier AI "do not constitute a separate new category of risk outside DORA." Goodwin's 6 August 2026 alert reads the ESAs' July statement as showing how regulators expect financial entities to assess frontier AI models used in their ICT services.

## What does DORA require for an AI system?

The same as for any ICT system, applied to the features AI adds: changing models, vendor dependencies and outputs that are hard to trace. The table maps the main articles.

| DORA duty | Article | What it says | What it means for an AI system |
| --- | --- | --- | --- |
| Management responsibility | 5(2)(a) | The management body bears "the ultimate responsibility for managing the financial entity's ICT risk" | AI risk sits with the board, not only with a data science team |
| ICT risk framework | 6(1), 6(5) | "Sound, comprehensive and well-documented", reviewed "at least once a year" | AI systems belong in the documented framework and its annual review |
| Identification and inventory | 8(1), 8(4), 8(6) | Identify and document ICT-supported functions and assets; "maintain relevant inventories" | Every model, agent and AI feature is inventoried with the function it supports |
| Change management | 9(4)(e) | "Documented policies, procedures and controls for ICT change management" | Model, prompt and permission changes are recorded, tested and approved |
| Logging | RTS 2024/1774 Art. 12 | Logging procedures; tamper protection; clock synchronisation; risk-based retention | Agent actions and access events logged in protected storage with reliable timestamps |
| Incident management | 17(1), 17(2) | "Record all ICT-related incidents and significant cyber threats" | AI malfunctions that disrupt services are recorded as ICT incidents |
| Major incident reporting | 18(1), 19(1) | Classify incidents by impact; report major ones "to the relevant competent authority" | An AI failure that meets the thresholds is reported like any other |
| Third-party risk | 28(1), 28(3) | Entity stays "fully responsible"; keeps "a register of information" on all ICT contracts | AI vendors and model APIs appear in the register |
| Contract terms | 30(2), 30(3) | Service descriptions, data locations, termination rights; audit rights and exit plans for critical functions | AI contracts carry the same clauses as cloud contracts |

Article 4 applies all of this proportionately, by size, risk profile and the nature and complexity of the entity's services.

## Is an AI model provider an ICT third-party service provider?

Usually yes, when the financial entity uses its service on an ongoing basis. That brings the vendor into the Article 28(3) register "in relation to all contractual arrangements on the use of ICT services", and its contract under Article 30.

For services supporting critical or important functions, Article 30(3) requires "unrestricted rights of access, inspection and audit" for the entity and its supervisor, and "exit strategies, in particular the establishment of a mandatory adequate transition period." Goodwin expects AI providers to face questions on model governance, limitations and failure modes, incident reporting, subcontractors and continuity, resembling cloud outsourcing due diligence.

The largest providers may also be overseen directly. The ESAs published their designation of critical ICT third-party providers on 18 November 2025.

## What did the ESAs say about AI in 2026?

They asked for governance and resilience, not new rules. On 31 July 2026 the EBA, EIOPA and ESMA issued a joint statement calling for a "cross-sectoral, risk-based and consistent supervisory approach" to ICT risks from frontier AI models. The press release describes it as a basis for dialogue between firms and supervisors.

Goodwin reads the statement as encouraging three strategies. Prevention includes up-to-date inventories of IT assets, including AI and machine learning components. Detection includes continuous monitoring. Management includes resilience testing and keeping management accountable. PayTechLaw reports that AI risks are being added to the methodology for overseeing critical providers, with a view to 2027 examinations.

## How does DORA logging fit with AI Act logging?

They stack. Article 12 of Delegated Regulation 2024/1774 requires financial entities to "develop, document, and implement logging procedures, protocols and tools." They must log access, change management, ICT operations and network traffic. Logs must be protected "against tampering, deletion, and unauthorised access", a "failure of logging systems" must be detectable, and clocks must be synchronised to a reliable reference. Retention is set from business and information security objectives and the ICT risk assessment.

The AI Act's Articles 19(2) and 26(6) send high-risk system logs into the documentation kept under financial services law. In our reading, a bank's AI logs should therefore meet DORA's protection and timing rules even where the AI Act's six-month floor is the only explicit period. Our explainer [EU AI Act logging requirements](https://lowob.com/research/eu-ai-act-logging-requirements/) covers the AI Act side.

## Where should a financial firm start?

With the inventory and the register, because every other DORA duty depends on knowing what exists. Three steps cover most of the gap:

1. **Inventory every AI asset and service.** Include features vendors have added to existing software, and the business function each supports.
2. **Put AI changes through change management.** A new model version or system prompt is a change, and Article 9(4)(e) expects it documented, tested and approved.
3. **Review AI contracts against Article 30.** Check audit rights, data locations, incident notice and exit terms, starting with vendors supporting critical or important functions.

Our ranking of [AI governance and audit-trail tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/) covers platforms that hold the inventory side.

## lowob takeaways

- **DORA already covers AI.** AI systems are ICT assets and services, so the Act has applied to them since 17 January 2025.
- **Responsibility does not transfer.** Article 28(1) keeps the financial entity fully responsible when it buys AI from vendors.
- **Logs need integrity, not just content.** The logging standard demands tamper protection, failure detection and synchronised clocks.
- **Start with the inventory.** Article 8 inventories and the Article 28 register decide what the rest of DORA reaches.

## Common questions

### Does DORA apply to artificial intelligence?

Yes. DORA governs ICT risk, ICT assets and ICT services, and AI models, agents and model APIs used by financial entities fall within those definitions on our reading and that of 2026 law-firm commentary. Its rules on risk management, inventories, change management, logging, incidents, testing and third-party contracts have applied to them since 17 January 2025.

### Are AI vendors ICT third-party service providers under DORA?

Usually. A vendor that provides digital and data services through ICT systems on an ongoing basis, such as a hosted model or AI assistant, is an ICT third-party service provider. Its contract belongs in the Article 28(3) register of information and must carry the Article 30 terms, with audit rights and exit strategies where it supports critical or important functions.

### How long must logs be kept under DORA?

DORA's logging standard, Article 12 of Delegated Regulation (EU) 2024/1774, sets no fixed period. Financial entities set retention from their business and information security objectives and ICT risk assessment. Logs must be protected against tampering, deletion and unauthorised access, logging failures must be detectable, and system clocks must be synchronised to a documented reliable time source.

### What did the ESAs say about frontier AI and DORA in 2026?

On 31 July 2026 the EBA, EIOPA and ESMA issued a joint statement calling for a cross-sectoral, risk-based and consistent supervisory approach to ICT risks from frontier AI models, and for sound governance and risk management at financial entities. Goodwin reads it as creating no new legal obligations but signalling how supervisors expect AI-related ICT risk to be assessed.

## Sources and notes

- [EIOPA, Digital Operational Resilience Act (DORA)](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en). Primary supervisor page; application date and main areas.
- [Elvinger Hoss Prussen, DORA brochure](https://elvingerhoss.lu/sites/default/files/upload/media/document/2025-04/Brochure%20DORA.pdf), April 2025. Law-firm compilation of the Regulation (EU) 2022/2554 text; source for Articles 3 to 30 as quoted.
- [SpringLex, Commission Delegated Regulation (EU) 2024/1774, Article 12: Logging](https://www.springlex.eu/en/packages/dora/rts-rmf-regulation/article-12/). Official Journal text via a third-party reader.
- [EBA, EBA, EIOPA and ESMA call for enhanced governance and consistent supervision to mitigate ICT risks from frontier AI models](https://www.eba.europa.eu/publications-and-media/press-releases/eba-eiopa-and-esma-call-enhanced-governance-and-consistent-supervision-mitigate-ict-risks-frontier), 31 July 2026. Primary press release.
- [Goodwin, Frontier AI and DORA: AI service providers to European financial entities take note](https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-fs-frontier-ai-dora-service-providers-to-eu-financial-entities-take-note), 6 August 2026. Law-firm reading; not legal advice.
- [PayTechLaw, Frontier AI as an ICT risk driver under DORA](https://paytechlaw.com/en/frontier-ai-as-an-ict-risk-driver-under-dora/), 7 September 2026. Commentary by a lawyer at Annerton; source for AI in critical provider oversight.
- [ESMA, European Supervisory Authorities designate critical ICT third-party providers](https://www.esma.europa.eu/press-news/esma-news/european-supervisory-authorities-designate-critical-ict-third-party-providers), 18 November 2025. Primary.
- [European Commission AI Act Service Desk, Article 26](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26), consolidated text as at 27 July 2026. Primary; financial institutions' log documentation.

## Related research

- [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [EU AI Act Logging Requirements: Articles 12, 19 and 26 Explained](https://lowob.com/research/eu-ai-act-logging-requirements/)
- [Top 5 AI Governance and Audit-Trail Tools](https://lowob.com/research/top-5-ai-governance-and-audit-trail-tools/)
- [AI Governance Framework Template for Mid-Size Financial Firms](https://lowob.com/research/ai-governance-framework-template/)
- [FINRA and AI in 2026: What Broker-Dealers Must Record and Supervise](https://lowob.com/research/finra-ai-guidance-2026/)

## Next move

Compare your DORA register of information with your list of AI tools this week. Every AI vendor missing from the register is a contract to review against Article 30.

[Start a conversation](https://lowob.com/contact/)
