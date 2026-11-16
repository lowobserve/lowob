# Ten thousand people: density, and the case for federation

Source: https://lowob.com/research/ten-thousand-people-density-and-the-case-for-federation/
Publisher: lowob (https://lowob.com)
Published: 2026-10-19 · Updated: 2026-11-16
Function: Strategy

> Summary: At ten thousand people, there is finally enough volume in enough decision classes for a learning layer to earn its keep. The challenge is no longer whether to record judgment, but how one organisation runs many records without forcing them into one. The tempting answer is a single enterprise brain with one ontology. The workable design is federated: invariants set centrally, records kept locally by the functions, and a map between local and enterprise definitions. Map, do not unify.

## Key points

- Scale makes calibration, staggered rollouts, seeded errors and cross-division precedent practical for the first time.
- Aggregating many judgments well is powerful: in forecasting tournaments, the best aggregation rule beat the simple average by as much as 60%.
- Single-ontology programmes tend to stall, because divisions have legitimately different meanings, regulators, data and speeds.
- Data architecture reached the same federated answer as data mesh: local ownership, global standards for interoperability.
- Data and analytics firms run two brains: the record of how they decide, and the context layer their clients' agents consume.

This is the sixth rung of [*The scale ladder*](https://lowob.com/research/the-scale-ladder/). The previous rung, [*One thousand people: governance arrives*](https://lowob.com/research/one-thousand-people-governance-arrives/), made decisions defensible. At ten thousand, there are enough defensible decisions to learn from.

## Why density changes the problem

A large enterprise makes thousands of comparable decisions a week in dozens of classes: credit approvals, alerts, claims, renewals, procurement, hiring, pricing. Outcomes arrive on a known schedule. Experts handle the exceptions. Someone will have to defend the calls. This is the zone where judgment systems genuinely learn, and where the measurement discipline in the rest of this series pays off.

Firms of this size are rare. The SBA Office of Advocacy counts 21,041 US businesses with 500 or more employees against about 6.4 million smaller employer firms, and those at 10,000 are a small subset of that group. They are also where external obligations stack highest: the EU's amended due diligence directive applies only above 5,000 employees and EUR 1.5 billion of turnover.

Below this scale, as our piece [*Below the volume floor*](https://lowob.com/research/below-the-volume-floor/) argues, no model will learn a firm's judgment from a few hundred dissimilar decisions a year. Above it, the volume exists, and the question is whether the records are consistent enough to learn from.

## What becomes possible

**Calibration at scale.** Enough outcomes per class to see, within a quarter or two, where judgment is overconfident and who reads which situations well. The forecasting research shows how much value sits in recorded probabilities. Mellers, Tetlock and colleagues, summarising the Good Judgment Project, report that teams beat individuals and that the best aggregation of forecasts beat the simple mean by as much as 60%. Our piece [*Calibration is the honest learning signal*](https://lowob.com/research/calibration-is-the-honest-learning-signal/) sets out the method.

**Staggered rollouts as standard.** Every change to a decision workflow deployed in waves, so each wave is the control for the next.

**Seeded errors and second looks** across every review queue, with catch rates reported like any other control.

**Precedent across divisions.** A credit officer in one region seeing how a comparable case was handled in another, with outcome.

**Noise measured, not assumed.** In the insurer noise audit reported by Insurance Thought Leadership, executives expected a 10% spread between underwriters' quotes on the same case and found a typical spread of 55%. At ten thousand people the same audit can be run continuously, class by class, because comparable cases arrive every day.

| Capability | Minimum volume needed | What it reports |
| --- | --- | --- |
| Calibration by class | Hundreds of outcomes per class per quarter | Where stated confidence and results diverge |
| Staggered rollout | Enough decisions per wave to compare | Whether a workflow change helped |
| Seeded errors | A steady review queue | Reviewer catch rates |
| Cross-division precedent | Shared template and outcome fields | Comparable cases elsewhere, with results |
| Continuous noise audit | Comparable cases arriving daily | Spread between deciders on similar cases |

## The federation problem

The tempting response is one enterprise brain: a single ontology, a single definition of every term, a single store. These programmes tend to stall. Divisions have legitimately different meanings for some terms, different regulators, different data, and different speeds. Forcing them into one model takes years and produces a compromise nobody uses.

That is **lowob**'s observation from practice rather than a measured failure rate, and we know of no reliable study of how often such programmes fail. The supporting evidence is that data architecture reached the same conclusion independently. Zhamak Dehghani's 2020 statement of data mesh, published on martinfowler.com, rests on four principles: domain-oriented ownership, data as a product, a self-serve platform, and federated computational governance. In her account, domains keep autonomy over local decisions, such as their own data models, while a federation sets the global rules needed for interoperability, such as how a customer who spans several domains is identified.

> Map, do not unify. Local definitions are mapped to the enterprise terms rather than replaced by them.

## The federated design

**Set centrally:** the invariants. Every record has a decision, reason, falsifier, sources and outcome. Supersede, never overwrite. One trace specification. One export format. A short enterprise glossary for the terms that cross divisions: revenue, customer, exposure.

**Kept locally:** the records themselves, owned by the functions. Local definitions where they genuinely differ, mapped to the enterprise terms rather than replaced by them. Local decision classes and templates.

**Bridged:** a map between local and enterprise definitions, and a conflicts process for when they diverge.

| Layer | What sits there | Who owns it |
| --- | --- | --- |
| Central | Five invariants, trace specification, export format, enterprise glossary | Enterprise standards group with function representatives |
| Local | Records, local definitions, decision classes, templates | Each business function |
| Bridge | Definition map, conflicts process | Joint, with a named owner per mapped term |

Our comparison [*Semantic layer vs knowledge graph*](https://lowob.com/research/semantic-layer-vs-knowledge-graph/) covers the tools that typically hold the bridge, and [*What is a knowledge graph?*](https://lowob.com/research/what-is-a-knowledge-graph/) explains where a graph helps with the mapping.

## The data provider's two brains

One nuance applies to firms whose product is itself data and analytics. They run two brains: the internal one that records how the firm decides, and the external one they sell, the context layer their clients' agents consume. The two can reinforce each other. A provider that helps clients keep a structured, exportable record of how they used its data is selling the start of a judgment layer, not just cargo. That may be the most interesting product opportunity at this scale.

**In practice:** publish the central invariants and the export format, and leave records with the functions. Map local definitions to a short enterprise glossary instead of replacing them. Make staggered rollout and seeded errors standard for every decision workflow change. Report calibration for the five highest-volume decision classes quarterly, with outcomes written back as described in [*What is outcome write-back?*](https://lowob.com/research/what-is-outcome-write-back/).

**What would prove this wrong:** large enterprises that deploy a single unified ontology across all divisions on schedule, with high adoption, outperforming federated designs. The closing piece, [*Five invariants, from two people to ten thousand*](https://lowob.com/research/five-invariants-from-two-people-to-ten-thousand/), sets out what the central layer must hold.

## lowob takeaways

- **Use the volume.** Calibration, staggered rollouts, seeded errors and cross-division precedent all become practical.
- **Set only the invariants centrally.** Decision, reason, falsifier, sources and outcome; supersede, never overwrite; one export format.
- **Leave records with functions.** Local definitions and templates stay local.
- **Map, do not unify.** A definition map and a conflicts process beat a single ontology.
- **If you sell data, sell the record too.** Clients' agents need context; clients need a record of how they used it.

## Common questions

### Should a large enterprise build one unified knowledge graph or ontology?

Usually not. Single-ontology programmes tend to stall and produce a compromise nobody uses. A federated design, with central invariants and local records mapped to a short enterprise glossary, is more workable.

### What should be standardised centrally in an enterprise decision record system?

The invariants: every record has a decision, reason, falsifier, sources and outcome; records are superseded, never overwritten; one trace specification, one export format and a short glossary for cross-division terms.

### What is federated governance in data mesh?

A model in which domain teams own their data and local decisions, while a federation of domain and platform owners sets global standards, such as shared identifiers, so data can be combined across domains.

### Why do decision-learning systems work better in large companies?

Large enterprises make thousands of comparable decisions a week with outcomes on a known schedule, giving enough volume per class to see where judgment is overconfident.

## Sources and notes

- [Zhamak Dehghani, Data Mesh Principles and Logical Architecture](https://martinfowler.com/articles/data-mesh-principles.html), martinfowler.com, 3 December 2020. Practitioner architecture essay; about analytical data, not decision records.
- [Mellers, Tetlock, Baker, Friedman and Zeckhauser, Improving the accuracy of geopolitical risk assessments](https://scholar.harvard.edu/sites/scholar.harvard.edu/files/rzeckhauser/files/improving_the_accuracy_of_geopolitical_risk_assessments.pdf), University of Pennsylvania Press, 2019. Book chapter on forecasting tournaments.
- [Paul Carroll, Our Big Problem With 'Noise'](https://www.insurancethoughtleadership.com/our-big-problem-with-noise/), Insurance Thought Leadership, 18 May 2021. Secondary account of one insurer's noise audit.
- [DLA Piper, EU Omnibus I Directive amending CSRD and CSDDD will enter into force on 18 March 2026](https://www.dlapiper.com/insights/blogs/environment-health-safety-and-product-compliance/2026/eu-omnibus-i-directive-amending-csrd-and-csddd-will-enter-into-force-on-18-march-2026), March 2026. Law-firm summary of Directive (EU) 2026/470.
- [SBA Office of Advocacy, Frequently Asked Questions About Small Business 2026](https://advocacy.sba.gov/wp-content/uploads/2026/02/FINAL_FAQsAboutSmallBusiness_2026_012826.pdf), January 2026. Agency summary of 2022 Census data; US only.
- The capability and federated layer tables are **lowob**'s framework.

## Related research

- [The scale ladder](https://lowob.com/research/the-scale-ladder/)
- [Five invariants, from two people to ten thousand](https://lowob.com/research/five-invariants-from-two-people-to-ten-thousand/)
- [Semantic layer vs knowledge graph](https://lowob.com/research/semantic-layer-vs-knowledge-graph/)
- [What is outcome write-back?](https://lowob.com/research/what-is-outcome-write-back/)
- [Calibration is the honest learning signal](https://lowob.com/research/calibration-is-the-honest-learning-signal/)

## Next Move

List the terms your divisions define differently, starting with customer and revenue. For each, keep the local definitions and write one enterprise definition with a map to them, rather than forcing a single meaning.

[Start a conversation](https://lowob.com/contact/)
