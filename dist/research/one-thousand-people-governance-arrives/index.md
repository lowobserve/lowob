# One thousand people: governance arrives

Source: https://lowob.com/research/one-thousand-people-governance-arrives/
Publisher: lowob (https://lowob.com)
Published: 2026-10-15 · Updated: 2026-11-16
Function: Strategy

> Summary: At around a thousand people, auditors, regulators, security teams and large customers start asking how decisions were made, and "we discussed it" stops being an answer. The enterprise brain's job becomes governance. Four things have to exist: a trace specification for each AI-assisted decision class, a review gate that leaves evidence, registered agents with owners and scoped permissions, and retention rules agreed with counsel. The risk becomes a platform that nobody in the business owns.

## Key points

- Size thresholds bring scrutiny: the EU's amended CSRD now applies to companies with more than 1,000 employees and EUR 450 million of turnover.
- US bank model risk guidance SR 26-2 replaced SR 11-7 in April 2026, but puts generative and agentic AI outside its scope, leaving firms to set their own controls.
- The EU AI Act's Annex III high-risk obligations now apply from 2 December 2027, and EN 18286 gives providers a harmonised route to a quality management system.
- Agent identity and permissions are a buy, not a build, for most organisations; major identity vendors now ship agent registries.
- Each decision record should be owned by the function whose decisions it records, with the platform team owning standards and tooling.

This is the fifth rung of [*The scale ladder*](https://lowob.com/research/the-scale-ladder/). The previous rung, [*Two hundred people: reasoning that travels without its author*](https://lowob.com/research/two-hundred-people-reasoning-that-travels-without-its-author/), was about delegation inside the firm. At a thousand, people outside the firm, and functions inside it whose job is oversight, start asking to see the reasoning.

## Who starts asking

Somewhere in this range, often earlier for regulated firms, the organisation acquires functions whose job is to ask questions about other functions' decisions. Risk. Compliance. Internal audit. Information security. Procurement teams at large customers who send hundred-question security reviews. Each wants to know who decided, on what basis, and who checked.

Regulation arrives at explicit size thresholds. The EU's Omnibus I Directive (EU) 2026/470, in force from 18 March 2026, narrowed the Corporate Sustainability Reporting Directive to EU companies with more than 1,000 employees and more than EUR 450 million of turnover. Its due diligence counterpart now starts at 5,000 employees. Neither is an AI rule, but both bring the audit habit with them: documented processes, assurance, and a record of who approved what.

At the same time, AI use has spread. Agents act on behalf of employees: drafting, routing, approving small things, triggering workflows. Our piece [*Regulators want the chain, not the model*](https://lowob.com/research/regulators-want-the-chain-not-the-model/) sets out what supervisors ask for when they examine AI-assisted decisions.

| Who asks | What they want to see | Typical trigger |
| --- | --- | --- |
| Internal audit | Who decided, on what evidence, and who reviewed | Annual audit plan |
| Risk and compliance | Controls on AI-assisted decisions, and evidence they ran | New deployment or regulatory change |
| Large customers | How their data is used, and by which agents | Security questionnaire in procurement |
| Regulators | Reconstruction of a specific decision, end to end | Examination or complaint |
| Sustainability assurance | Documented processes behind reported figures | CSRD scope at 1,000 employees |

## What the rules now say about AI

The regulatory picture changed in 2026, and the change cuts both ways.

In US banking, SR 26-2, issued on 17 April 2026 by the Federal Reserve, the OCC and the FDIC, superseded SR 11-7 and is expected to be most relevant to banks with more than $30 billion of assets. Its footnote 3 states that generative and agentic AI models "are not within the scope of this guidance", and that a bank's own risk management and governance practices should determine the controls for them. US bank supervisors have not issued agent-specific logging rules. That leaves the design of those controls to the firm, and a firm that cannot show how an agent-assisted decision was made will still have to explain it.

In the EU, Regulation (EU) 2026/1744, in force from 27 July 2026, moved the AI Act's Annex III high-risk obligations to 2 December 2027 and Annex I to 2 August 2028. It softened the Article 4 AI literacy obligation to a duty to support literacy. On 14 October 2026 the Commission published EN 18286, the first harmonised standard under the Act, covering the quality management system in Article 17. Orrick notes that it is designed to sit on top of ISO/IEC 42001 and that conformity with it gives a presumption of conformity for the requirements it covers. Our explainer [*The EU AI Act for commercial teams*](https://lowob.com/research/the-eu-ai-act-for-commercial-teams/) covers which uses are high-risk.

> The absence of an agent-specific rule is not the absence of an expectation. Someone will still ask how the decision was made.

## What has to exist now

**A trace specification.** For every AI-assisted decision class: inputs, evidence with its standing, model and prompt versions, output, every human action with timing, final action, and outcome. Written with compliance, before the next production deployment. Our explainer [*What is an AI audit trail?*](https://lowob.com/research/what-is-an-ai-audit-trail/) covers the fields.

**An evidenced review gate.** Review that leaves proof: sources opened, time on item, class of edit, blind second looks on a sample. [*A reviewer who does not verify is not a control*](https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/) explains why approval alone proves little.

**Agent identity and permissions.** Every agent registered, with an owner, a scope, and permissions that follow the user it acts for. This is the area where the large software vendors are competing hardest, and for most organisations it is a buy, not a build. Microsoft's Entra Agent ID, for example, documents agent identities created from blueprints, named owners and sponsors, inheritable permissions, conditional access policies for agents and lifecycle governance, with Agent 365 as a control plane built on it. Our explainer [*What is agent identity?*](https://lowob.com/research/what-is-agent-identity/) compares the approaches.

**Retention and deletion, agreed with counsel.** What is kept, for how long, who can see it, and how deletion leaves a tombstone rather than a hole.

## Who owns the record

This is the stage where a platform team typically forms around AI. That is useful and also dangerous. A platform team that owns the judgment record will manage it as infrastructure: uptime, schemas, cost. The record will be technically sound and commercially empty.

The better arrangement: each decision record is owned by the function whose decisions it records. Credit owns credit decisions. Sales owns deal decisions. The platform team owns the standards, the trace, the tooling and the export, and serves the functions. Risk and compliance oversee. Banking's model risk practice, covered in [*What is model risk management?*](https://lowob.com/research/what-is-model-risk-management/), separates ownership from oversight in a similar way.

## Buy the context layer, own the judgment record

At this size, connectors, enterprise search, assistants and agent registries are mature products. Build them only for real differentiation. What you should not rent is the record of how you decide: the decision classes, the falsifiers, the outcomes, the precedents. Own that, in a format you can export, whatever tools sit on top. [*Buy context, own judgment*](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/) sets out the rule across every size.

**In practice:** write the trace specification with compliance for each AI-assisted decision class. Register every agent with an owner, scope and inherited permissions. Assign each decision record to its business function, and give the platform team standards and tooling. Run a reconstruction drill: rebuild a three-month-old decision end to end, and time it.

**What would prove this wrong:** thousand-person organisations passing audits, examinations and customer security reviews of AI-assisted decisions without traces or evidenced review. The next rung, [*Ten thousand people: density, and the case for federation*](https://lowob.com/research/ten-thousand-people-density-and-the-case-for-federation/), is where those traces become numerous enough to learn from.

## lowob takeaways

- **Expect outsiders to ask.** Auditors, regulators and large customers want the chain of a decision, not a description of the model.
- **Do not wait for an agent rule.** SR 26-2 leaves agentic AI to firms' own governance, which means the firm must design it.
- **Write the trace before deploying.** Inputs, evidence, versions, human actions, final action and outcome.
- **Buy agent identity.** Register every agent with an owner, scope and permissions that follow its user.
- **Keep the record with the business.** Functions own their decisions; the platform owns standards and export.

## Common questions

### What AI governance does a company need at 1,000 employees?

A trace specification for each AI-assisted decision class, an evidenced review gate, registered agents with owners, scopes and inherited permissions, and retention and deletion rules agreed with counsel.

### Does SR 26-2 cover generative or agentic AI?

No. SR 26-2, issued in April 2026, states in a footnote that generative and agentic AI models are outside its scope, and that a bank's own risk management and governance should determine the controls for them.

### Who should own AI decision records in a large company?

The function whose decisions the record holds, such as credit owning credit decisions. The platform team owns standards, trace, tooling and export, and risk and compliance oversee.

### How can a company test whether its AI decisions are auditable?

Run a reconstruction drill: pick a three-month-old AI-assisted decision, rebuild it end to end from the record, and time how long it takes.

## Sources and notes

- [Board of Governors of the Federal Reserve System, SR 26-2: Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm), 17 April 2026. Cover letter; issued with the OCC and FDIC.
- [Board of Governors of the Federal Reserve System, SR 26-2 guidance text](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.pdf), April 2026. Footnote 3 excludes generative and agentic AI; US banking only.
- [White & Case, EU AI Omnibus enters into force, amending the AI Act](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act), July 2026. Law-firm summary of Regulation (EU) 2026/1744.
- [Orrick, First Harmonised Technical Standard Published Under the EU AI Act](https://www.orrick.com/en/Insights/2026/10/First-Harmonised-Technical-Standard-Published-Under-the-EU-AI-Act), October 2026. Law-firm summary of EN 18286 and Implementing Decision (EU) 2026/2274.
- [DLA Piper, EU Omnibus I Directive amending CSRD and CSDDD will enter into force on 18 March 2026](https://www.dlapiper.com/insights/blogs/environment-health-safety-and-product-compliance/2026/eu-omnibus-i-directive-amending-csrd-and-csddd-will-enter-into-force-on-18-march-2026), March 2026. Law-firm summary of Directive (EU) 2026/470.
- [Microsoft Learn, Microsoft Entra Agent ID documentation](https://learn.microsoft.com/entra/agent-id), updated October 2026. Vendor documentation; one vendor's approach, feature status varies.
- The table of who asks is **lowob**'s framework.

## Related research

- [The scale ladder](https://lowob.com/research/the-scale-ladder/)
- [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)
- [What is agent identity?](https://lowob.com/research/what-is-agent-identity/)
- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [The EU AI Act for commercial teams](https://lowob.com/research/the-eu-ai-act-for-commercial-teams/)

## Next Move

Pick one AI-assisted decision made three months ago and rebuild it end to end from the record: inputs, evidence, versions, who reviewed it and what happened. Time the drill, and write the trace specification from what was missing.

[Start a conversation](https://lowob.com/contact/)
