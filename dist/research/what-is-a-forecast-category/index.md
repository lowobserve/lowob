# What Is a Forecast Category?

Source: https://lowob.com/research/what-is-a-forecast-category/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Revenue

> Summary: A forecast category records a seller's judgment of whether a deal will close in the current period. Salesforce, HubSpot and Microsoft Dynamics all ship similar categories and all let them default from deal stage. The category is only useful when it is defined in writing, can differ from stage, and is checked against what actually closed.

A forecast category is a label a seller puts on a deal to say how likely it is to close in the current period, typically Pipeline, Best Case or Commit. It is separate from the deal's stage, which says where the deal is in the sales process. The category is useful only when each label has a written definition and can differ from what the stage implies.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What a forecast category means

Every deal in a CRM carries two different pieces of information. The stage describes progress through the firm's sales process, such as discovery, proposal or negotiation. The forecast category describes a judgment: whether the deal will close in this period.

The two often agree, but not always. A deal can sit in the negotiation stage while the buyer's budget is frozen. That deal belongs in an advanced stage and a low category. Keeping the two fields apart is what lets the forecast carry information the stage does not.

The three most common CRMs use similar labels.

| Product | Default categories | How the category is set |
| --- | --- | --- |
| Salesforce | Pipeline, Best Case, Most Likely (optional), Commit, Closed | Default mapping from opportunity stage; admins can change it |
| HubSpot | Not forecasted, Pipeline, Best case, Most likely, Commit, Closed won | Deal property; can be automated from deal stage or set by hand |
| Microsoft Dynamics 365 | Pipeline, Best case, Committed, Omitted, Won, Lost | Set on the opportunity; Won and Lost set automatically on close |

Microsoft's documentation gives the clearest written definitions. Pipeline is an "early-stage or stalled deal, low confidence". Best case is a deal that "is progressing" where there is "no commitment yet". Committed means the "customer has made a verbal or contractual commitment" and the seller is "mainly waiting on paperwork or final approvals". Omitted excludes a deal "from all forecast totals", for example when it is on hold.

## How it works in a forecast

Categories roll up into totals. Salesforce's Trailhead material describes cumulative rollups: the Commit forecast covers Commit and Closed deals, and the Best Case forecast adds Best Case and Most Likely deals to those. A manager therefore sees a floor (Commit), a stretch (Best Case) and the open pipeline behind them.

Managers can also adjust. Salesforce lets admins choose whether "sales managers can apply their judgment about a deal included in the forecast". An adjustment changes the forecast value without changing the underlying opportunity.

The main design risk is automation. HubSpot offers an "Automate forecast categories" switch, after which "existing and new deals will be categorized into one of the forecast categories based on their deal stage". Salesforce provides a default stage mapping. Both save effort. Both turn the category into a copy of the stage unless sellers can override it. If every deal in negotiation is automatically Commit, the category adds nothing.

The method question, how to combine stage-weighted numbers, seller calls and manager calls, and how to score forecast error, is covered in [Forecasting That Holds](https://lowob.com/research/forecasting-that-holds/). This explainer covers only the category itself.

## How to write definitions that hold

Write one line of evidence for each category. Sellers then argue about facts rather than feelings. An illustrative set:

| Category | Evidence required | Who can set it |
| --- | --- | --- |
| Pipeline | Qualified opportunity with a close date in the period | Seller |
| Best Case | Proposal delivered; buyer has a decision date in the period | Seller |
| Commit | Economic buyer has confirmed; paper process has started | Seller, reviewed by manager |
| Omitted | On hold or outside the period, with a reason | Seller or manager |

Three rules keep the labels honest. Let the stage set a default, but require a reason when a seller moves a deal into or out of Commit. Freeze the category view at fixed points in the quarter, so changes are visible. At period end, compare each category with what closed. If Commit deals close at a much lower rate than the definition implies, the definition or its use needs fixing.

In **lowob**'s model, moving a deal into Commit is a recorded decision. It has an owner, a reason, a status and an expected outcome: this amount, by this date. The outcome is written back when the period closes, which is how a sales team learns whose Commit can be trusted.

## lowob takeaways

- **Stage and category are different fields.** Stage is progress; category is a judgment about this period.
- **Write the evidence for each label.** Commit should mean something specific, not confidence.
- **Watch the automation.** Stage-driven categories save time but can erase the seller's view.
- **Score the categories.** Compare Commit with what closed, every period.

## Sources and notes

- [Salesforce Trailhead, Configure Sales Forecasting in Salesforce](https://trailhead.salesforce.com/content/learn/modules/sales-forecasting/configure-sales-forecasting-in-salesforce), undated. Vendor training documentation on categories, rollups and adjustments.
- [HubSpot Knowledge Base, Set up the forecast tool](https://knowledge.hubspot.com/forecast/set-up-the-forecast-tool?data=data), undated. Vendor product documentation.
- [Microsoft Learn, Capture forecast category for opportunity](https://learn.microsoft.com/en-ca/dynamics365/sales/capture-forecast-category-opportunity), undated. Vendor product documentation; source of the category definitions quoted.

## Related research

- [Forecasting That Holds](https://lowob.com/research/forecasting-that-holds/)
- [What Is Sales Forecasting?](https://lowob.com/research/what-is-sales-forecasting/)
- [What Are Pipeline Stage Definitions?](https://lowob.com/research/what-are-pipeline-stage-definitions/)
- [The Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)

## Next move

Pull every deal currently in Commit and ask each seller for one sentence of evidence. Any deal without a confirmed buyer and a started paper process is a candidate to move back to Best Case.

[Start a conversation](https://lowob.com/contact/)
