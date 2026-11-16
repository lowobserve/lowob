# What Is an AI Impact Assessment?

Source: https://lowob.com/research/what-is-an-ai-impact-assessment/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: An AI impact assessment is a documented review of how an AI system could help or harm the people and groups it affects, carried out before deployment and repeated when the system or its use changes. ISO/IEC 42005, published in May 2025, gives guidance. The EU AI Act requires a fundamental rights impact assessment from some deployers of high-risk systems, and the GDPR requires a DPIA for high-risk processing.

An AI impact assessment is a documented review of how an AI system could affect the people and groups it touches: who is affected, what could go wrong for them, what benefits are expected and what controls apply. It is done before deployment and repeated when the system, its data or its use changes. ISO/IEC 42005 gives guidance on how to do one; the EU AI Act and the GDPR make specific versions mandatory in specific cases.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What an AI impact assessment means

A risk assessment asks what could go wrong for the organisation. An impact assessment asks what could go wrong, and right, for the people on the receiving end, including groups who are not users at all. ISO/IEC 42005 draws this distinction explicitly in an annex that separates general AI risk management under ISO/IEC 23894 from impact assessment.

According to CMS's summary, 42005 covers the system description, intended and unintended uses, affected stakeholders including vulnerable groups, and positive and negative impacts, each with magnitude and likelihood. Its annexes include a harms and benefits taxonomy and an example template.

| An AI impact assessment is | It is not |
| --- | --- |
| About effects on people and groups | Only a risk register for the company |
| Specific to one system in one context | A general statement of AI principles |
| Linked to controls and an owner | A document filed and forgotten |

## Which assessment applies when

Four reference points overlap. Most mid-size firms will need a DPIA long before a FRIA.

| Assessment | Source | Status | Who must do it |
| --- | --- | --- | --- |
| AI system impact assessment | ISO/IEC 42005:2025 | Voluntary guidance | Anyone; expected inside an ISO/IEC 42001 system |
| Fundamental rights impact assessment | EU AI Act, Article 27 | Mandatory where it applies | Public bodies, private providers of public services, deployers of Annex III credit-scoring and life and health insurance systems |
| Data protection impact assessment | GDPR and UK GDPR, Article 35 | Mandatory for high-risk processing | Controllers whose processing is likely to result in high risk |
| Map function | NIST AI RMF | Voluntary framework | Anyone using it as structure |

### The FRIA under the EU AI Act

Article 27 sets out what the FRIA must describe: the deployer's processes in which the system is used, the period and frequency of use, the categories of people likely to be affected, the specific risks of harm to them, how human oversight is implemented, and the measures if risks materialise, including complaint mechanisms. It applies to first use, may rely on earlier assessments in similar cases, and must be updated when an element changes. Results go to the market surveillance authority. The FRIA attaches to Annex III high-risk systems, whose obligations now apply from 2 December 2027 after Regulation (EU) 2026/1744.

For a commercial team, the trigger is narrow. Scoring business accounts is not in Annex III; scoring individuals' creditworthiness and pricing life or health insurance are. See [The EU AI Act for Commercial Teams](https://lowob.com/research/the-eu-ai-act-for-commercial-teams/).

### The DPIA

Most firms meet the DPIA first. The ICO's list of high-risk processing includes "the novel application of existing technologies (including AI)", which requires a DPIA when combined with one other criterion, such as profiling. An AI notetaker on client calls, or a model scoring individual leads, can reach that bar.

## How to run one proportionately

For a 20 to 500 person firm, one page per AI use is usually enough. The structure below combines 42005's elements with Article 27's list.

| Section | Questions to answer |
| --- | --- |
| System and purpose | What does it do, for which process, and how often? |
| Affected people | Who is touched directly and indirectly, and are any vulnerable? |
| Impacts | What benefit is expected; what harm is plausible, how likely and how serious? |
| Oversight | Autonomy level; who approves output; who can stop it |
| Controls | Data rules, testing, logging, complaint route |
| Triggers to reassess | New data, new users, new model, new law, a complaint |
| Owner and date | Named owner; next review date |

The reassessment triggers do the most work. 42005 lists changes in intended use, users, environment and law, and a vendor's model update can change behaviour with no change on your side. Pair the assessment with [AI evals](https://lowob.com/research/what-are-ai-evals/) so a model change prompts a test as well as a review.

This is general guidance, not legal advice. Deployers in credit, insurance or public services should take advice on Article 27.

## The **lowob** view

An impact assessment is a decision record with a forecast in it: what the firm expects to happen, to whom, and who owns the outcome. **lowob**'s loop adds the step most assessments skip, writing back what did happen. When a complaint or a quarterly review shows a different outcome, update the assessment against the original, so the next one starts from evidence.

## lowob takeaways

- **People, not just the firm.** An impact assessment looks at effects on those the system touches.
- **The DPIA comes first.** For most mid-size firms the GDPR's DPIA is the assessment actually required.
- **The FRIA is narrow.** It reaches public services, consumer credit and life or health insurance, from 2 December 2027.
- **Reassess on change.** A vendor model update is a trigger, as is a new use or a complaint.

## Sources and notes

- [ISO, ISO/IEC 42005:2025 AI system impact assessment](https://www.iso.org/standard/42005), May 2025. Standard listing; full text is paid.
- [CMS, ISO/IEC 42005:2025: a new blueprint for legal and commercial leaders](https://cms.law/en/gbr/legal-updates/iso-iec-42005-2025-a-new-blueprint-for-legal-and-commercial-leaders-navigating-ai-risk-and-governance), 3 September 2025. Law firm summary of the standard's structure and annexes.
- [European Commission AI Act Service Desk, Article 27: Fundamental rights impact assessment](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-27), consolidated text as at 27 July 2026. Primary legal text; paragraphs 4 and 5 amended by the Digital Omnibus.
- [ICO, Examples of processing likely to result in high risk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/examples-of-processing-likely-to-result-in-high-risk), accessed November 2026. UK regulator guidance on when a DPIA is required.

## Related research

- [What Is ISO/IEC 42001?](https://lowob.com/research/what-is-iso-42001/)
- [The EU AI Act for Commercial Teams](https://lowob.com/research/the-eu-ai-act-for-commercial-teams/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [What Is a Data Processing Agreement for AI Tools?](https://lowob.com/research/what-is-a-data-processing-agreement-for-ai/)

## Next move

Pick the one AI tool that touches the most individuals' data, such as a call recorder or lead scorer, and write a one-page impact assessment using the seven sections above. Set its review date and owner.

[Start a conversation](https://lowob.com/contact/)
