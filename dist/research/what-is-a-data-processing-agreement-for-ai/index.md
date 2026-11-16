# What Is a Data Processing Agreement for AI Tools?

Source: https://lowob.com/research/what-is-a-data-processing-agreement-for-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-11-12 · Updated: 2026-11-16
Function: Strategy

> Summary: A data processing agreement is the contract GDPR Article 28 requires when a vendor processes personal data on a company's behalf. For AI tools it decides whether prompts can be used beyond your instructions, which model providers act as sub-processors, and what is deleted at the end. Most vendors publish a standard one.

A data processing agreement (DPA) is the contract that governs how a vendor processes personal data on your behalf. Article 28 of the GDPR, and of the UK GDPR, requires one whenever a processor handles personal data for a controller, with a fixed set of terms. For an AI tool, the DPA shows whether the vendor may use your prompts beyond your instructions, which model providers receive them, and what is deleted at the end.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What a DPA means

When a seller pastes a client email into an AI assistant, or a notetaker records a prospect call, personal data is processed. Usually the company using the tool is the controller and the vendor is the processor, acting on its behalf. Article 28(1) allows only processors that provide "sufficient guarantees" of appropriate measures. The DPA is where those guarantees are written down.

Many AI vendors publish a standard DPA that attaches to their business terms. A personal account on a consumer plan may sit outside it, which is one reason staff using personal accounts is a data protection problem as well as a security one; see [What is shadow AI?](https://lowob.com/research/what-is-shadow-ai/).

| A DPA is | A DPA is not |
| --- | --- |
| A contract required by GDPR Article 28 | A privacy policy aimed at consumers |
| About personal data processed for you | A guarantee that the tool's output is accurate |
| A record of the vendor's sub-processors and transfer terms | A security audit; see [SOC 2 for AI vendors](https://lowob.com/research/soc-2-for-ai-vendors/) |
| Binding on the vendor as processor | Proof that your own use of the tool is lawful |

## The Article 28 terms, read for an AI tool

The ICO's guidance lists the compulsory terms. Each has an AI-specific question behind it.

| Article 28(3) term | What to check for an AI tool |
| --- | --- |
| (a) Documented instructions only | Does the vendor use prompts, outputs or files for anything else, such as improving its models? |
| (b) Confidentiality of staff | Can vendor staff review conversations, for safety or support, and under what controls? |
| (c) Security under Article 32 | Encryption, access controls, and the audit reports offered |
| (d) Sub-processors | Which model provider, hosting and logging services receive the data, and in which countries? |
| (e) Help with data subject rights | Can the vendor find and delete one person's data across chats, transcripts and indexes? |
| (f) Help with security, breaches and DPIAs | Breach notice timing; information supplied for an impact assessment |
| (g) Deletion or return at the end | Does deletion cover derived data, such as embeddings, vector indexes and fine-tuned models? |
| (h) Audits and information | Whether you may audit, or must accept a summary of the vendor's reports |

Term (a) carries most of the weight for AI. A processor acting only on your instructions should not use your data for its own purposes. If the commercial terms allow training on customer content, read them with the DPA, and make that a deliberate decision.

## What a vendor DPA looks like in practice

OpenAI's published DPA, updated 1 December 2025, is a useful public reference. OpenAI states it "acts as a Data Processor on the Customer's behalf", processing customer data only to deliver the services. Customers give general authorisation for sub-processors, are notified of changes, and may object within 30 days; an unresolved objection allows either side to terminate the affected service. Transfers from the EEA rely on standard contractual clauses or an adequacy decision, and UK transfers on the clauses as amended by the UK Addendum. Breaches are notified "without undue delay", with no fixed number of hours.

Audit rights are typical of large vendors: information once a year, audits at the customer's expense, or a summary of audit reports instead. A 20 to 500 person firm will rarely negotiate these terms; its real choice is which tools to approve.

### Three AI clauses worth checking beyond Article 28

- **Retention.** How long prompts and outputs are kept, and whether [zero data retention](https://lowob.com/research/what-is-zero-data-retention/) is available for the models you use.
- **Upstream terms.** If the tool runs on another firm's model, whether that provider's terms match what the vendor promises you.
- **Location.** Where processing happens, if clients or regulators require it; see [data residency for AI](https://lowob.com/research/what-is-data-residency-for-ai/).

This summarises the legal requirements and is not legal advice. Contracts involving special category data or regulated clients need counsel.

## The **lowob** view

A DPA governs the vendor's copy of your data, not the record you keep yourself. **lowob**'s position is to rent the wiring and own the record, so each tool's DPA status goes on the AI inventory: signed, sub-processors checked, training on or off, retention, and reviewer. A buyer's security questionnaire will ask for that line.

## lowob takeaways

- **No DPA, no client data.** If a tool has no DPA for your plan, personal data should not go into it.
- **Read term (a) first.** Use beyond your instructions, including model training, is the AI-specific risk.
- **Follow the sub-processors.** The model provider behind a tool is usually a sub-processor and decides much of the real exposure.
- **Record the review.** Put DPA status, retention and reviewer on the AI inventory, per tool.

## Sources and notes

- [Springlex, GDPR Article 28: Processor](https://www.springlex.eu/en/packages/gdpr/gdpr-regulation/article-28/), reproducing Regulation (EU) 2016/679, OJ L 119, 4 May 2016. Third-party reproduction of the official text.
- [ICO, What needs to be included in the contract?](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/), accessed November 2026. UK regulator guidance; under review after the Data (Use and Access) Act 2025.
- [OpenAI, Data Processing Addendum](https://openai.com/policies/data-processing-addendum/), updated 1 December 2025. Vendor contract, shown as an example; terms differ by vendor and plan.

## Related research

- [What Is Zero Data Retention in AI?](https://lowob.com/research/what-is-zero-data-retention/)
- [SOC 2 for AI Vendors](https://lowob.com/research/soc-2-for-ai-vendors/)
- [The pilot that survives security review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [What Is an AI Impact Assessment?](https://lowob.com/research/what-is-an-ai-impact-assessment/)

## Next move

For each AI tool that touches client data, find its DPA and sub-processor list this week. Add three columns to your AI inventory: DPA signed, training on or off, and retention period.

[Start a conversation](https://lowob.com/contact/)
