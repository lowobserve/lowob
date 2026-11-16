# What Is Lead Scoring?

Source: https://lowob.com/research/what-is-lead-scoring/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Growth

> Summary: Lead scoring is a method of ranking leads by how likely they are to become customers, so sales and marketing work the best ones first. Most scores combine fit, meaning how closely the person and company match your ideal customer, with engagement, meaning what they have done recently. Scores work as a queue-ordering tool, provided they are checked against conversions and extended from single people to the buying group.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## Key points

- HubSpot separates fit scores, built from properties such as industry and company size, from engagement scores, built from events such as form fills and meetings, and grades them A to C and 1 to 3.
- Salesforce's predictive Einstein Lead Scoring needs at least 1,000 leads created and 120 converted in the last 200 days to build a model from your own data.
- Forrester reports fewer than 1% of leads convert to closed deals, which is why it argues for measuring opportunities and buying groups instead of individual leads.
- In Forrester's buyer research, 28% of B2B buyers made purchase decisions in groups of four to nine people. A score on one person misses the others.
- Scores decay. An engagement point earned six months ago says little about intent today, so scoring rules need a decay setting.

## What lead scoring means

A lead is a person who has shown interest. Most firms get more leads than sellers can follow up properly, so they need a rule for who goes first. Lead scoring is that rule, expressed as points.

There are two dimensions. Fit asks whether this is the kind of buyer you win: industry, company size, region, role, seniority. Engagement asks whether they are active now: pages visited, emails opened, webinars attended, meetings booked. HubSpot's lead scoring tool shows the standard design. Fit scores use property rules, engagement scores use event rules, and combined scores use both. Thresholds turn the numbers into labels: A to C for fit and 1 to 3 for engagement, so a contact labelled C1 is highly engaged but a poor fit.

| Approach | How it works | Needs | Main risk |
| --- | --- | --- | --- |
| Rules-based | Points assigned by people for attributes and actions | An agreed ICP and a few months of data | Points reflect opinion, not evidence |
| Predictive | Model trained on which past leads converted | Volume: Einstein needs 1,000 leads and 120 conversions | Opaque; learns past biases |
| Account or buying-group | Scores the company and its active people together | Contacts linked to accounts and opportunities | Harder to set up in lead-centric CRMs |

## How it works

### Rules-based scoring

Marketing and sales agree a set of rules: for example, 20 points for a target industry, 15 for a director-level title, 10 for a pricing page visit, minus 20 for a personal email domain. HubSpot allows a cap on each group of rules and on repeated events, so that one person downloading ten papers cannot outscore a better-fit buyer. It also supports decay, which reduces a score by a set percentage as events age.

### Predictive scoring

Predictive tools train a model on your conversion history. Salesforce's implementation guide states that Einstein Lead Scoring requires at least 1,000 leads created in the last 200 days, of which at least 120 were converted to an account and contact. Each segment must meet that threshold. Below it, Einstein uses a global model trained on anonymised data from many customers, then switches to your own model once there is enough data and it performs better. A firm with a modest lead volume may not meet that threshold in every segment.

## Where lead scoring misleads

Forrester principal analyst Simon Daniels set out the core objection in November 2023. Lead scoring rates one person's activity and misses the rest of the buying group. Forrester's research found 46% of B2B buyers decided in groups of two to three and 28% in groups of four to nine. Daniels' example: three people from one account each taking one action is more valuable than one person downloading three assets, but a lead score ranks the opposite way. Forrester also reports that fewer than 1% of leads convert to closed deals.

Other common failures:

- **Fit points are opinions.** Weights set in a workshop are rarely checked against which leads actually closed.
- **Engagement rewards researchers.** Students, competitors and job seekers can be highly engaged.
- **Thresholds become targets.** If marketing is measured on leads over a score, the score drifts upward.
- **No feedback loop.** Sellers reject leads but the reason is not recorded, so the model never learns.

## How to check whether a score works

1. **Pull 12 months of leads.** Include the score each had at handover and whether it became an opportunity and a customer.
2. **Bucket by score.** Compare conversion rates for the top, middle and bottom thirds. If the top third does not convert clearly better, the weights are wrong.
3. **Check fit and engagement separately.** Often fit predicts well and engagement adds little, or the reverse.
4. **Add an account view.** Count active contacts per account and test whether accounts with several engaged people convert better than single high scorers.
5. **Record rejections.** Require a reason when sales rejects a lead, and review the reasons monthly.

In **lowob**'s terms, a lead score is context, not a decision. The decision to contact, and the reason, belongs to a person and goes in the record.

## lowob takeaways

- **Separate fit from engagement.** They answer different questions and fail in different ways.
- **Check scores against conversions.** Points that do not predict outcomes are just opinions.
- **Score the buying group.** One person's activity rarely reflects how a B2B decision is made.
- **Use decay and caps.** Old or repeated activity should not outrank a better-fit buyer.

## Common questions

### What is lead scoring?

It is a method of ranking leads by likelihood to become customers, usually by assigning points for fit with your ideal customer and for recent engagement.

### What is the difference between fit and engagement scoring?

Fit scoring rates who the lead is, such as industry, size and role. Engagement scoring rates what they have done, such as visits, form fills and meetings.

### How much data do you need for predictive lead scoring?

It depends on the tool. Salesforce's Einstein Lead Scoring needs at least 1,000 leads created and 120 converted in the last 200 days for a model based on your own data.

### Is lead scoring still relevant for B2B?

As a queue-ordering tool, yes. Forrester argues it should be extended to buying groups and opportunities, because B2B decisions are usually made by several people.

## Sources and notes

- [HubSpot Knowledge Base, Build lead scores](https://knowledge.hubspot.com/scoring/build-lead-scores). Vendor product documentation; features depend on subscription.
- [Salesforce, Sales Cloud Einstein Implementation Guide](https://resources.docs.salesforce.com/242/latest/en-us/sfdc/pdf/sales_einstein_implementation_guide.pdf). Vendor documentation; thresholds may change between releases.
- [Forrester, Saying Goodbye To MQLs: A Parting That Is All Sweet And No Sorrow](https://www.forrester.com/blogs/saying-goodbye-to-mqls-sweet-and-no-sorrow), November 2023. Analyst blog; some conversion figures are client-reported.

## Related research

- [What Is Lead Source Attribution?](https://lowob.com/research/what-is-lead-source-attribution/)
- [How to Write an ICP](https://lowob.com/research/how-to-write-an-icp/)
- [What Is Account-Based Marketing?](https://lowob.com/research/what-is-account-based-marketing/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)

## Next Move

Export last year's leads with their handover score and outcome. Compare conversion for the top and bottom thirds, and if the gap is small, rewrite the fit rules first.

[Start a conversation](https://lowob.com/contact/)
