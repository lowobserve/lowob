# What Are Pipeline Stage Definitions?

Source: https://lowob.com/research/what-are-pipeline-stage-definitions/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Revenue

> Summary: Pipeline stage definitions set out, in writing, what must be true for a deal to sit in each stage of the sales pipeline. Without them, stage names mean different things to different sellers, and forecasts built on stage probabilities drift. This explainer covers what good definitions contain, how CRMs support them, and how to write a set in a week.

Pipeline stage definitions are the written rules for what must be true before an opportunity enters each stage of the sales pipeline. Good definitions are based on verifiable buyer actions, not seller feelings, and each stage has exit criteria that can be checked in the CRM. They are what make a stage-weighted forecast mean something, and what let an AI system read "stage" as a fact.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What pipeline stage definitions mean

Every CRM lets a firm name its sales stages. Naming them is easy. Agreeing what they mean is the work.

A stage definition has four parts: the stage name, the entry criteria (what must be true to enter), the exit criteria (what must be true to move on), and the evidence (where in the CRM that can be checked). A probability is often attached, used to weight the forecast.

HubSpot's documentation shows how CRMs build this in. Its default pipeline runs "Appointment scheduled" (20%), "Qualified to buy" (40%), "Presentation scheduled" (60%), "Decision maker bought-in" (80%), "Contract sent" (90%), then "Closed won" (100%) and "Closed lost" (0%). The board view multiplies each deal's amount by its stage probability to produce a weighted amount. HubSpot also supports conditional stage properties: fields that must be completed before a deal can be moved into a stage.

| Element | Example for a "Qualified" stage | Where it is checked |
| --- | --- | --- |
| Entry criteria | Buyer has confirmed a problem we solve | Discovery notes field |
| Exit criteria | Budget range and decision date confirmed by buyer | Budget and decision date fields filled |
| Owner action | Next meeting booked with a second stakeholder | Next step and date |
| Probability | Set from the firm's own historical conversion | Stage settings |

## Why it matters for a commercial team

### The forecast is built on them

A weighted forecast is the sum of deal values times stage probabilities. If one seller moves deals to "Proposal" after a friendly call and another waits for a written request, the same stage carries two different realities and the same probability. Gartner's 2020 research found only 45% of sales leaders and sellers had high confidence in their forecasting accuracy, and only 47% believed their organisation had high-quality data. The 2021 Forrester Consulting study for Clari, a survey of 327 US revenue operations decision-makers, found 55% missed their quarterly forecast by more than 10%, and only 18% landed within 5%.

### Stage and forecast category are different things

Some CRMs separate the stage from a forecast category. Microsoft Dynamics 365 Sales, for example, uses Pipeline, Best Case, Committed and Omitted, with Won and Lost set automatically at close. Stage describes where the buying process is. Category describes the seller's confidence for this period. Keeping them separate stops sellers advancing a stage to signal optimism.

### AI reads stage as fact

AI forecasting tools and pipeline agents treat the stage field as data. In **lowob**'s model, stage is one of the eight store fields the brain needs. If the definition is loose, the model learns the habits of individual sellers, not the behaviour of buyers. Tight definitions are the precondition for any agent that flags at-risk deals or drafts next steps.

## How to write a set in a week

1. **Map the buyer's process first.** List the steps a typical client goes through, from first conversation to signature. Stages should follow buyer milestones, not internal tasks.
2. **Keep the count small.** Five to seven open stages is typical. Each must be distinguishable by evidence.
3. **Write exit criteria as buyer actions.** "Buyer confirmed budget range" is checkable. "Strong interest" is not.
4. **Attach a field to every criterion.** If a criterion cannot be checked in the CRM, either add the field or drop the criterion.
5. **Set probabilities from history.** Use the firm's own stage-to-win conversion over the last four to six quarters, not the CRM defaults.
6. **Add an age limit.** Flag any deal that has sat in one stage for more than twice the median time.

| Common mistake | Effect | Fix |
| --- | --- | --- |
| Stages named after seller tasks ("Demo done") | Progress without buyer commitment | Rename to buyer milestones |
| Default probabilities never changed | Forecast weighted by a vendor's guess | Recalculate from own history |
| No stage for "on hold" | Stalled deals inflate pipeline | Use a forecast category or close them |
| Criteria in a slide, not the CRM | Nobody checks them | Required fields at stage entry |

## lowob takeaways

- **Define by buyer action.** Each stage should be entered because the buyer did something verifiable.
- **Put the criteria in the CRM.** Required fields at stage entry enforce what a slide cannot.
- **Use your own probabilities.** Defaults are a starting point, not a forecast.
- **Separate stage from confidence.** A forecast category stops stage inflation.

## Sources and notes

- [HubSpot Knowledge Base, Set up and customize pipelines](https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines). Vendor documentation; default stages, probabilities and conditional stage properties.
- [Microsoft Learn, Capture forecast category for an opportunity in Dynamics 365 Sales](https://learn.microsoft.com/nb-no/dynamics365/sales/capture-forecast-category-opportunity). Vendor documentation.
- [Gartner, Less Than 50% of Sales Leaders Have High Confidence in Forecasting Accuracy](https://www.gartner.com/en/newsroom/press-releases/2020-02-12-gartner-says-less-than-50--of-sales-leaders-and-selle), February 2020.
- [Forrester Consulting for Clari, Revenue Operations And Intelligence Delivers Predictable Growth](https://pages.clari.com/rs/866-BBG-005/images/forrester-clari-revops-study-2021.pdf), August 2021. Vendor-commissioned survey of 327 US decision-makers.

## Related research

- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [Gateway 0: Three Decisions Before Any AI Tool](https://lowob.com/research/gateway-zero-three-decisions-before-any-ai-tool/)

## Next move

Ask three sellers to write, independently, what must be true for a deal to be in your "Proposal" stage. Where their answers differ, you have found the first definition to write down.

[Start a conversation](https://lowob.com/contact/)
