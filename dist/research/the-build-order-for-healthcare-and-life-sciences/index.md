# The Build Order for Healthcare and Life Sciences

Source: https://lowob.com/research/the-build-order-for-healthcare-and-life-sciences/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: Healthcare and life sciences is one of the two sectors where The Build Order bends. Here compliance comes first: privacy and promotional review precede any commercial agent. HIPAA requires written authorisation before protected health information is used for most marketing. Washington's My Health My Data Act requires affirmative consent before consumer health data is even collected. FDA's promotion office sent nearly 100 enforcement letters in a single week in September 2025, against five in each of 2023 and 2024. So the walls, the review gate and the record are built before the first agent, and the first agent works for the review committee rather than the field team. Patient data never reaches the commercial build.

*Figure: Gateway 0 is three decisions. Nothing gets bought until all three are answered.*

## Key points

- The order bends: walls and the promotional review gate are set at Gateway 0, before tooling or context.
- HIPAA treats most uses of patient data for marketing as needing written authorisation, and any paid-for marketing needs authorisation that discloses the payment.
- Outside HIPAA, the FTC's Health Breach Notification Rule and Washington's My Health My Data Act reach health apps and consumer health data.
- Promotional enforcement has stepped up sharply, which makes medical, legal and regulatory (MLR) review the commercial line's real bottleneck.
- The first agent checks draft materials against approved claims before MLR review. It drafts nothing for a clinician or a patient.

In most sectors this series starts on the commercial line because decisions there are frequent, quickly graded and defended by a budget holder. In healthcare and life sciences the first decisions a firm must defend are compliance decisions. A regulator, a plaintiff or a journalist may ask why a patient received a message, why a clinician was shown a claim, or why a payment to a physician was not reported. The record has to exist before anything is automated.

This edition runs the sequence for firms of 20 to 500 people: digital health companies, specialty pharmaceutical and medtech firms, clinic groups and health services businesses. It covers the US rules that set the walls, the review gate that comes first, and what remains of the commercial build once those are in place. It is not legal advice; every firm here needs its privacy officer and regulatory counsel at Gateway 0.

## Why the order bends

Part 1 listed eight industries and noted that the order holds in most and bends in two. Financial services moves the record ahead of the first agent because a supervisor may ask the firm to reconstruct any automated decision. Healthcare and life sciences bends further. The walls and the review gate move to Gateway 0, ahead of tooling and context, because a single connection made in the wrong order can be a violation in itself.

The rules that drive this are specific.

**HIPAA's marketing rules.** HHS guidance states that a covered entity generally needs an individual's written authorisation before using or disclosing protected health information for marketing. Communications about treatment, care coordination and the entity's own health-related services are excluded from the definition. But where a third party pays the covered entity to promote its product, the communication is marketing with no exceptions, and the authorisation must state that payment is involved. A covered entity may not sell patient lists without each person's authorisation.

**Consumer health data outside HIPAA.** Many digital health firms are not covered entities. The FTC's amended Health Breach Notification Rule, effective since 29 July 2024, clarifies that it reaches many health apps and connected devices, and that a breach includes an unauthorised disclosure, such as sharing health data with third parties in ways that conflict with the company's own promises. Washington's My Health My Data Act, in effect since 31 March 2024, requires affirmative consent before consumer health data is collected or shared, a separate authorisation before it is sold, and gives consumers a private right of action.

**Tracking and the website.** HHS guidance on online tracking technologies was partly vacated by a federal court in Texas on 20 June 2024 in *American Hospital Association v. Becerra*, which held that metadata from unauthenticated public web pages is not individually identifiable health information. The court left in place HHS's position that tracking on authenticated pages, such as patient portals, can involve protected health information.

**Security.** The proposed overhaul of the HIPAA Security Rule, the first major update in more than a decade, would require encryption, multifactor authentication and network segmentation among other controls. Fierce Healthcare reported that the OMB website now lists July 2027 for the final rule, a year later than planned. A firm choosing AI vendors now should assume those controls will be expected.

| Industry lens | Healthcare and life sciences |
| --- | --- |
| Where the commercial line sits | Providers and digital health: patient acquisition, referral development, employer and payer contracts. Life sciences: clinician engagement, account management, promotional materials |
| The store | CRM for field teams or referral development; EHR and patient systems held separately |
| What makes it harder | Patient data is regulated wherever it sits, and promotional claims need review before use |
| Outcome lag | Months for referrals, prescriptions and contracts |
| Who defends the decision | Privacy officer, MLR committee, compliance, commercial lead |
| The sector's wall | Patient data from care, portals and patient support programmes; medical information kept apart from sales |
| Regulatory pressure | HIPAA, FTC Health Breach Notification Rule, state consumer health data laws, FDA promotion rules, Open Payments |

## The bent order, stage by stage

| Stage | What it means in healthcare and life sciences | The main risk |
| --- | --- | --- |
| Gateway 0 | Owner, suite and CRM, plus the privacy officer and MLR lead named as approvers, and the patient data wall drawn | Treating compliance as a review at the end rather than a decision at the start |
| Compliance first | Every source classified as patient data or not; business associate agreements in place with any AI vendor that will touch patient data | An assistant connected to a shared drive that holds patient exports |
| Gateway 1, early | The MLR gate and the approved claims library exist before any agent drafts anything | Agents producing content faster than review can absorb |
| Tooling | Assistant seats for commercial staff, configured without access to patient systems | Seats issued on a suite that already indexes clinical files |
| Context | CRM, approved materials, claims library and references, field call notes | Free-text call notes that contain patient details |
| Record | MLR decisions with claim, reference, approver and expiry; transfers of value; marketing communications with their legal basis | A record of approvals with no link to where the material was used |
| Reasoning | A first agent that checks drafts against approved claims before MLR review | A field-facing agent that paraphrases approved content into unapproved claims |
| Gateway 2 | Value at stake and outcomes on commercial decisions, using leading indicators chosen with care | Optimising for call volume because prescriptions lag |
| Gateway 3 | The record extends to market access and finance; medical affairs stays separate | Commercial reasoning reaching medical information responses |

**Compliance first means classification first.** Before any assistant is connected, each source is classified: does it contain patient data, and under which regime? A vendor that creates, receives, maintains or transmits protected health information for a covered entity is a business associate and needs a business associate agreement. Many general-purpose assistants are not configured for that by default. The simplest design keeps patient data out of the commercial suite entirely, so the question never arises for the commercial build. *The pilot that survives security review* covers the vendor questions to ask.

> In healthcare, the wall and the review gate are not controls added to the build. They are the first thing built.

## The walls

Three walls apply across the sector.

**Patient data and the commercial build.** Clinical records, portal activity and patient lists stay out of the commercial context layer unless a specific authorisation covers the use. In life sciences the same applies to patient support programmes, which often hold names, conditions and insurance details collected to help patients start therapy. Field teams may need to know that a clinic's patients are enrolling. They must never see who.

**Medical information and sales.** Most life sciences firms already separate medical affairs from commercial teams, so that answers to clinicians' scientific questions are not shaped by sales goals. An assistant that reads both a field rep's call notes and the medical information database erases that line, whatever the permissions technically allow. The two context layers should never meet.

**Unreviewed claims and the outside world.** In the promotional setting, a claim is either approved for a use or it is not. An agent that rewords an approved claim has created a new one.

| What the commercial context layer can hold | What it must never hold |
| --- | --- |
| CRM accounts, clinicians' public professional details, call logs without patient details | Clinical records, portal activity or patient lists without authorisation |
| Approved materials, the claims library and references | Draft claims that have not passed MLR review |
| Transfers of value to clinicians, for reporting | Patient support programme data about individuals |
| Aggregate enrolment or referral counts | Medical information requests and responses |

## Promotional review is the commercial line's gate

In life sciences, Gateway 1 already exists. Every promotional piece passes MLR review before use, and the question is whether review can keep up once drafting is cheap.

The enforcement climate makes that question sharper. Hall Render's review of 2025 reports that FDA's Office of Prescription Drug Promotion released nearly 100 enforcement letters, untitled and warning letters together, in a single week in September 2025, against five in each of 2023 and 2024. The firm expects continued scrutiny of digital, influencer and short-form content, and of visual and tonal elements as well as claims, and advises involving promotional review at every stage of creative development.

IQVIA, which sells MLR services, argued in July 2026 that content production is no longer the constraint: review and approval are. It describes agents that check content against approved claims, verify references and flag inconsistencies, and it argues that readiness, not technology, is the barrier, because reference libraries often hold duplicates and outdated documents. We treat that as vendor perspective, but it matches what we see. *Approval rate measures fatigue too* describes what happens when a review queue doubles.

That is why the first agent in this sector works for the review committee. It takes a draft, matches every claim against the approved claims library, checks each reference is current, and flags anything new before the draft reaches MLR. It writes nothing for a clinician or patient. It shortens review without loosening it.

## The record and the commercial build

Once the walls and the gate exist, the commercial build resumes. The record carries three kinds of decision.

1. **MLR decisions**: the material, each claim, its reference, the approvers, the approval date and the expiry or withdrawal date.
2. **Transfers of value**: meals, fees and other payments to clinicians, which manufacturers already report. CMS's Open Payments data published in 2026 covers $14.67bn across 17.07 million records. A record that links each payment to the engagement that caused it makes reporting a by-product rather than a project.
3. **Marketing communications that use patient data**: for providers and digital health firms, each campaign with its legal basis (authorisation, or an exception such as treatment or care coordination), and the opt-in status of the audience.

Commercial decisions then follow the pattern in Part 9: which accounts to prioritise, which referral relationships to develop, which contracts to pursue. Outcomes lag by months. Part 2 warned that long cycles fail the "quickly graded" test, and the workaround is leading indicators chosen with care. In this sector, call volume is the wrong one, because a system optimises whatever proxy it is given.

Composite example: a specialty pharma firm builds the gate first

Decision
:   Build the approved claims library and an MLR pre-check agent before giving the field team any assistant; keep the patient support programme and medical information on separate systems with no commercial connector.

Reason and owner
:   Review cycle times had doubled as the marketing team began drafting with general-purpose AI. Owned by the head of commercial operations, with the MLR chair and privacy officer as named approvers.

What changed
:   Drafts reach MLR with every claim matched to the library and new claims flagged. Field call notes are now structured fields, so no free text containing patient details reaches the CRM.

Illustrative: a composite of a specialty pharmaceutical firm of around 250 people, built from patterns across engagements.

## lowob takeaways

- **Compliance comes first.** Draw the patient data wall and name the privacy and MLR approvers at Gateway 0.
- **Classify every source before connecting it.** If patient data is present, keep it out of the commercial suite or put a business associate agreement in place.
- **Build the review gate before the agent.** Cheap drafting makes MLR the bottleneck; the first agent should make review faster, not bypass it.
- **Record approvals and payments.** MLR decisions and transfers of value are already required; linking them to engagements makes the record useful.

Gateway card

### Before a healthcare or life sciences firm connects any AI tool

- Privacy officer and MLR lead named as approvers at Gateway 0
- Every source classified for patient data and the regime that applies
- Business associate agreements in place, or patient data excluded from the commercial suite
- An approved claims library with references and expiry dates
- Medical information and patient support programmes on systems with no commercial connector
- A written rule that no agent drafts content for clinicians or patients

## Common questions

### Can healthcare marketers use AI with patient data under HIPAA?

Only within HIPAA's rules. Most uses of protected health information for marketing need the patient's written authorisation, and any marketing paid for by a third party needs authorisation that discloses the payment. Any AI vendor handling the data for a covered entity needs a business associate agreement.

### What is MLR review in pharma?

Medical, legal and regulatory review is the process by which promotional materials are checked for accuracy, balance and compliance before use. With AI making drafting cheaper, review capacity has become the main constraint on promotional content.

### Does HIPAA apply to health apps?

Often not, but other rules do. The FTC's Health Breach Notification Rule covers many health apps outside HIPAA, and treats unauthorised sharing as a breach. Washington's My Health My Data Act requires affirmative consent before consumer health data is collected or shared.

### When will the new HIPAA Security Rule be final?

Fierce Healthcare reported that the OMB website lists July 2027 for the final rule, a year later than planned. The proposal would require encryption, multifactor authentication and network segmentation among other controls.

## Sources and notes

- [HHS, HIPAA marketing guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing). Regulator guidance on the Privacy Rule's marketing provisions.
- [Fierce Healthcare, Feds push back HIPAA security rule overhaul to July 2027](https://www.fiercehealthcare.com/health-tech/feds-push-back-hipaa-security-rule-overhaul-july-2027), 2026. Trade press reporting the OMB listing; timelines can move again.
- [Federal Register, Health Breach Notification Rule](https://www.federalregister.gov/documents/2024/05/30/2024-10855/health-breach-notification-rule), 30 May 2024. Final rule text; effective 29 July 2024.
- [Jones Day, Washington enacts My Health My Data Act](https://www.jonesday.com/en/insights/2023/04/my-health-my-data-washington-enacts-first-state-comprehensive-health-privacy-law), April 2023. Law firm summary; other states have since passed narrower health data laws.
- [Ropes & Gray, Federal judge vacates key points of HHS online tracking guidance](https://www.ropesgray.com/en/insights/alerts/2024/06/federal-judge-vacates-key-points-of-hhs-ocr-hipaa-online-tracking-technology-guidance), June 2024. Law firm summary of *AHA v. Becerra*.
- [Hall Render, A turning point for OPDP](https://hallrender.com/2025/12/22/a-turning-point-for-opdp-what-2025-enforcement-activity-signals-for-2026/), 22 December 2025. Law firm analysis of FDA promotional enforcement.
- [CMS, Open Payments data overview](https://www.cms.gov/OpenPayments/Data). Regulator data; totals cover program year 2025 records published in 2026.
- [IQVIA, From automation to oversight: building an AI-ready MLR function](https://iqvia.com/blogs/2026/07/from-automation-to-oversight), 16 July 2026. Vendor perspective; qualitative, no figures.
- The stage table, walls table and example are **lowob**'s illustration, drawn from patterns across engagements. None of this is legal advice.

## Related research

- [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [Raising in a regulated category](https://lowob.com/research/raising-in-a-regulated-category/)
- [The pilot that survives security review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/)

## Next Move

List every system your commercial team's assistant can read today. Mark each one that could hold patient data. If any are marked, close that connection before you plan a single agent.

[Start a conversation](https://lowob.com/contact/)
