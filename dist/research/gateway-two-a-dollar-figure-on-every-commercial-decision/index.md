# Gateway 2: Put a Dollar Figure on Every Commercial Decision

Source: https://lowob.com/research/gateway-two-a-dollar-figure-on-every-commercial-decision/
Publisher: lowob (https://lowob.com)
Published: 2026-08-10 · Updated: 2026-11-17
Function: Revenue

> Summary: Most firms cannot say what their AI spending returned: 56% of CEOs in PwC's 2026 survey report no significant financial benefit yet. Gateway 2 fixes the measurement rather than the model. Each recorded commercial decision carries a value at stake, the realised value is written back when the outcome lands, and review time is netted off, so the build reports in money rather than activity.

Gateway 2 asks one thing of the commercial record: that every recorded decision carries the money it puts at stake, and that the realised value is written back when the outcome arrives. Without that, a build can only report activity: drafts produced, hours saved, seats active. Finance does not fund activity twice. The evidence says most firms are stuck there. In PwC's 2026 Global CEO Survey, 56% of 4,454 CEOs reported no significant financial benefit from AI to date. The fix is not a better model. It is two fields on the record, a quarterly reconciliation and an honest line for the human time the system consumes.

*Figure: The Build Order, end to end. This piece maps the whole route.*

[Part 9](https://lowob.com/research/the-commercial-decisions-worth-recording/) set out the ten commercial decisions worth recording and the six fields each record needs: decision, reason, owner, status, expected outcome with a check date, and the outcome written back. Its closing checklist ended with one line that this piece expands: a value at stake recorded, so the build can report in money.

That line is the second gateway in The Build Order. The first, [*nothing sends without a person*](https://lowob.com/research/nothing-sends-without-a-person/), protects the firm from what the system does. The second protects the build from the question every sponsor eventually faces at renewal: what did this return?

## The build reports activity, and finance hears nothing

The market's difficulty with that question is well documented. IBM's Institute for Business Value surveyed 2,000 CEOs between February and April 2025 and found that only 25% of AI initiatives had delivered their expected return, and only 16% had been scaled across the enterprise. McKinsey's 2025 State of AI survey of 1,993 participants found 39% attributing any EBIT impact to AI at the enterprise level, and most of those said the share was under 5%. PwC's January 2026 survey found 12% of CEOs reporting both cost and revenue benefits, and 56% reporting no significant financial benefit. Finance teams are no more convinced: in Gartner's 2025 survey of 183 finance leaders, 91% initially reported low or moderate impact from AI.

Two readings of those numbers are possible. One is that the tools do not work. The other is that most firms never set up the arithmetic that would show whether they work. The second reading fits what we see in briefs: success measures written as adoption (seats active, prompts sent) or as time saved, with no link to a decision that moved money.

Gartner forecast in June 2025 that over 40% of agentic AI projects will be cancelled by the end of 2027, citing rising costs and unclear business value. Unclear value is a measurement failure before it is a technology failure. A build that cannot state its value will be cancelled by someone who can state its cost.

## Value at stake: one number, set at the moment of decision

Value at stake is the money a decision commits or risks, estimated when the decision is made. It is not a forecast of the return. It is the size of the bet. Recording it does two things: it lets the firm rank decisions by consequence, and it gives the written-back outcome something to be measured against.

The rule that makes it workable is one definition per decision class, agreed with finance once, then applied mechanically.

| Decision class | Value at stake, defined as | Estimated from | Outcome lands within |
| --- | --- | --- | --- |
| Discount or price exception | Margin conceded against the standard tier | Quote and price book | One sales cycle |
| Pursue or pass on a pitch | Expected contract value times historical win rate for the segment | CRM history | One sales cycle |
| Qualify or drop an inbound lead | Average first-year value for the source, times stage conversion | CRM history | Weeks |
| Campaign spend and reallocation | Budget committed | Media plan | A quarter |
| Account prioritisation | Pipeline value of the accounts moved up or down | CRM | A quarter |
| Closed-lost reason | Value of the lost deal | CRM | Already known |

Three cautions apply. First, use a range where the estimate is soft, and record the midpoint; false precision invites argument about the number rather than the decision. Second, keep the definition stable for at least two quarters, because changing it resets every comparison. Third, the person who sets the value should not be the person graded on the outcome, or estimates drift upwards. Finance or revenue operations usually owns the definitions; the deal owner fills them in.

## Writing the outcome back without fooling yourself

The outcome field turns a record into evidence ([*What is outcome write-back?*](https://lowob.com/research/what-is-outcome-write-back/)). For Gateway 2 it needs two additions: realised value in money, and a comparison.

| Field | Example (discount exception) | Set by | When |
| --- | --- | --- | --- |
| Value at stake | $6,000 margin conceded on a $60,000 deal | Deal owner, using finance's definition | At approval |
| Expected outcome | Win within 30 days | Deal owner | At approval |
| Check date | 30 days after approval | System | At approval |
| Outcome | Won, at the discounted price | Deal owner | At check date |
| Comparison | Win rate of standard-tier quotes in the same segment that quarter | Revenue operations | Quarterly |
| Realised value | Deal value won, less margin conceded, adjusted for the comparison | Finance | Quarterly |

The comparison is the field most firms skip and the one that matters most. A discounted deal that closes looks like a success. If standard-price deals in the same segment closed at the same rate, the discount bought nothing and cost $6,000. Part 10's distributor reached exactly this finding: once outcomes were recorded, discounts in some product lines won no more often than standard quotes.

The comparison need not be an experiment. A matched group from the same quarter, segment and deal size is enough for a commercial decision. Where volume is too low for a group, record a probability alongside the expected outcome and track calibration over quarters, as we argued in [*Calibration is the honest learning signal*](https://lowob.com/research/calibration-is-the-honest-learning-signal/).

> A decision that cost money and changed nothing is the most valuable record the brain will hold, because it is the one nobody would have found without it.

## Netting the cost: review time is the larger bill

A gross figure flatters the build. The net figure subtracts what the system costs to run, and for a judgment system the largest cost is usually human.

In [*Reviewer minutes per useful decision*](https://lowob.com/research/reviewer-minutes-per-useful-decision/) we argued that token costs attract the attention while review, adjudication and outcome checks are the bigger expense, and that the honest unit is human minutes divided by the decisions the decision-maker judged were helped. In [*The humans carrying context are the price signal*](https://lowob.com/research/the-humans-carrying-context-are-the-price-signal/) we made the related point that context held in one person's head is a cost the firm pays in labour until it is written down.

Gateway 2 puts both into the same sum:

- **Realised value** from the decisions the system prepared or informed, adjusted for the comparison.
- **Less tool cost:** seats, usage charges and connectors, which [*Seats, usage or outcomes*](https://lowob.com/research/seats-usage-or-outcomes/) explains how to forecast.
- **Less review time:** minutes spent approving drafts, checking records and writing back outcomes, at a loaded hourly rate.
- **Less build-owner time:** the protected hours agreed at Gateway 0.

An illustrative quarter: forty discount exceptions recorded, $240,000 of margin conceded in total. After write-back, exceptions in one service line show no higher win rate than standard pricing; tightening that line would have retained around $70,000 of margin. Review and write-back take roughly fifteen minutes per record, ten hours across the quarter. The numbers are invented for illustration. The structure is the point: the saving is a pricing decision the record made visible, and the cost includes the time it took to see it.

Expect the review line to rise before it falls. Early on there are few precedents and reviewers are learning the tool. Set a baseline before launch and a date by which review minutes per useful decision must fall below it.

## Reporting the build in money

Once two quarters of records carry values and outcomes, the build can report on one page. We suggest five lines, all in money or derived from it.

| Report this | Drop this |
| --- | --- |
| Value at stake recorded this quarter, by decision class | Seats activated |
| Share of records with outcomes written back on time | Prompts or queries run |
| Realised value against expected, with the comparison stated | "Hours saved" estimated by users |
| Net value after tool cost and review time | Number of agents deployed |
| The one decision rule changed because of the record | Satisfaction scores for the assistant |

The fifth line is the most persuasive. A finance director can disagree with an estimate of realised value. It is harder to dismiss a rule the head of sales changed because the record showed the old one was costing margin.

Where the money goes matters here too. The MIT NANDA report *The GenAI Divide*, as reported by The Register in August 2025, found about half of generative AI budgets going to sales and marketing, and its authors pointed buyers towards uses with measurable results such as lead qualification and customer retention. Those are decision classes with a value at stake and an outcome inside a quarter. They are exactly what Gateway 2 is built to count.

## Where the dollar figure misleads

The method has limits, and a sponsor should hear them before finance finds them.

**Long cycles.** Where outcomes take a year, report value at stake and leading indicators each quarter and realised value annually. Do not pretend a quarter's figure is final.

**Attribution creep.** The record shows that a decision was informed by the system's preparation, not that the system caused the result. Credit the decision, not the agent.

**Uncomfortable numbers.** The first finding is often that a practice the team believed in does not pay. That is the record working. It is also the moment the build becomes a pricing or sales-management conversation, and the sponsor needs to be ready to have it.

**Incentive damage.** Do not tie individual pay to realised value from the record in the first year. People will start choosing which decisions to record, and the record will stop being honest.

**Small volumes.** Below about ten decisions a month in a class, comparison groups are too thin. Record the values anyway and compare against expectations until volume allows more.

Illustrative example: the first money report

Decision
:   Replace the quarterly AI adoption report with a five-line money report built from discount and pursue-or-pass records.

Reason and owner
:   The sponsor could not answer the renewal question from adoption figures. Owned by the head of revenue operations, with value definitions agreed by the finance director.

What changed
:   After two quarters the report showed net value positive in one decision class and negative in another; review effort moved to the class that paid, and one discount rule was tightened.

Illustrative: a composite of a mid-size services firm, built from patterns across engagements; all figures in this piece are illustrative.

## lowob takeaways

- **Set the value when the decision is made.** One definition per class, agreed with finance, applied mechanically.
- **Write back against a comparison.** A win that would have happened anyway is not value.
- **Net off the people.** Review and write-back time belong in the sum, and usually dominate it.
- **Report five lines in money.** Retire adoption metrics from the sponsor's report.
- **Expect the first number to be uncomfortable.** That is the record doing its job.

Gateway card

### Gateway 2: before the build reports in money

- A value-at-stake definition for each recorded decision class, signed off by finance
- Value at stake filled in at the moment of decision, not afterwards
- Outcomes written back by the check date on at least four in five records
- A comparison group or calibration method named for each class
- Review and write-back time logged and costed
- One quarterly report in money, with adoption metrics removed

## Common questions

### How do you measure the ROI of AI in sales?

Record the commercial decisions the system informs, attach a value at stake to each when it is made, write back the realised value at a check date against a comparison group, and subtract tool cost and human review time.

### What is value at stake in a decision record?

The money a decision commits or risks, estimated at the time: the margin conceded on a discount, the expected value of a pitch, or the budget committed to a campaign. It is the size of the bet, not a forecast of the return.

### Why do most companies see no financial return from AI?

Surveys such as PwC's 2026 Global CEO Survey show most firms report no significant financial benefit yet. A common cause is that success is measured as adoption or time saved, with no link to decisions that moved money.

### Should AI ROI include employee review time?

Yes. For systems that prepare or draft decisions, the time people spend reviewing, approving and recording outcomes is often the largest cost, and it should be netted off before value is reported.

## Sources and notes

- [PwC, 2026 Global CEO Survey press release](https://pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-global-ceo-survey.html), 19 January 2026. 4,454 CEOs in 95 countries; self-reported outcomes.
- [IBM Institute for Business Value, 2025 CEO Study](https://newsroom.ibm.com/2025-05-06-ibm-study-ceos-double-down-on-ai-while-navigating-enterprise-hurdles), 6 May 2025. 2,000 CEOs; IBM sells AI products and services.
- [McKinsey, The state of AI in 2025](https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025). 1,993 participants surveyed June to July 2025; self-reported EBIT attribution.
- MIT NANDA, The GenAI Divide, as reported by [The Register](https://www.theregister.com/2025/08/18/generative_ai_zero_return_95_percent), 18 August 2025. Based on 52 interviews, 153 survey responses and 300+ public initiatives; a small sample for a headline figure.
- Gartner forecast, June 2025, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says). Analyst forecast, not measured outcomes.
- [Gartner, finance AI adoption survey](https://www.gartner.com/en/newsroom/press-releases/2025-11-18-gartner-survey-shows-finance-ai-adoption-remains-steady-in-2025), 18 November 2025. 183 finance leaders; self-reported impact.
- Value-at-stake definitions, the field table and the worked quarter are **lowob**'s illustration; figures are invented to show the structure.

## Related research

- [Reviewer Minutes per Useful Decision](https://lowob.com/research/reviewer-minutes-per-useful-decision/)
- [The Humans Carrying Context Are the Price Signal](https://lowob.com/research/the-humans-carrying-context-are-the-price-signal/)
- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [What Is Outcome Write-Back?](https://lowob.com/research/what-is-outcome-write-back/)
- [Calibration Is the Honest Learning Signal](https://lowob.com/research/calibration-is-the-honest-learning-signal/)
- [Long Context Windows vs RAG](https://lowob.com/research/long-context-vs-rag/)

## Next move

Take the decision class you recorded at Part 9 and agree one value-at-stake definition for it with your finance lead this week. Fill it in on every new record from Monday, and set the first reconciliation date a quarter out.

[Start a conversation](https://lowob.com/contact/)
