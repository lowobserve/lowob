# Lead Scoring vs Account Scoring

Source: https://lowob.com/research/lead-scoring-vs-account-scoring/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Growth

> Summary: Lead scoring ranks individual people by how well they fit your ideal customer and how engaged they are. Account scoring ranks companies, combining how well the company fits with the engagement of everyone you know there. Lead scores answer "who should we call?"; account scores answer "which companies should we work on?". Because B2B purchases are made by groups, most firms should let the account score set priority and the lead score pick the person.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## Key points

- Forrester reports that fewer than 1% of leads convert to closed deals, and recommends an opportunity-based, buying-group approach instead of focusing on individual leads.
- In Forrester's 2024 buyer research, an average of 13 people were involved in a buying decision, and 89% of purchases involved two or more departments.
- HubSpot lets companies be scored, with company engagement built from associated contacts' actions, rolled up by sum, average, minimum or maximum.
- Salesforce recommends at least 200 accounts with won and 200 with lost opportunities from the last two years before using Einstein Key Accounts Identification.
- In **lowob**'s brain loop, both scores are context. The decision to pursue an account, and why, belongs in the record.

## What the two terms mean

**Lead scoring** assigns points to a person for fit, such as role, seniority and company size, and for engagement, such as visits, form fills and meetings. Our explainer on [lead scoring](https://lowob.com/research/what-is-lead-scoring/) covers rules-based and predictive versions and how to test them.

**Account scoring** moves the unit from the person to the company. Fit is scored on firmographics: industry, size, region, technology used, and match to your [ICP](https://lowob.com/research/how-to-write-an-icp/). Engagement is scored on the combined activity of every known contact at the account, sometimes with third-party intent added. Salesforce's Account Engagement product shows the predictive form: Einstein Key Accounts Identification gives each account a tier from A to D, where A indicates the highest likelihood of an opportunity being created within the next six months.

| Dimension | Lead scoring | Account scoring |
| --- | --- | --- |
| Unit | One person | One company and its known contacts |
| Answers | Who to contact next | Which companies to work on |
| Fit inputs | Role, seniority, company attributes | Industry, size, region, technology, ICP match |
| Engagement inputs | That person's actions | Everyone's actions, rolled up, plus intent |
| Typical owner | Marketing operations | RevOps, with sales and marketing |
| Conversion event | Lead becomes qualified or an opportunity | Opportunity created on the account |
| Main failure | Ranks one busy researcher above a real buying group | Hides who is engaged inside the account |

## Why the unit matters

Forrester principal analyst Simon Daniels gives the clearest example. One person downloading three assets usually scores well. Three people from the same account each taking one action is worth more, because it signals a buying group forming. A lead score ranks those the wrong way round. Forrester research cited in his November 2023 post found 46% of B2B buyers decided in groups of two or three and 28% in groups of four to nine. Its 2024 study put the average at 13 people. The figures come from different studies and definitions, but the direction is the same.

Account scoring is not free of choices. The most consequential one is how contact engagement rolls up. HubSpot's company scores offer four aggregation settings: sum, average, minimum and maximum. They rank accounts differently.

An illustrative comparison of two accounts, each scored on contact engagement:

| Account | Contacts and engagement points | Sum | Average | Maximum |
| --- | --- | --- | --- | --- |
| Account A | Three contacts at 20 points each | 60 | 20 | 20 |
| Account B | One contact at 50 points | 50 | 50 | 50 |

Sum ranks Account A first, which matches Forrester's buying-group argument. Average and maximum rank Account B first, which repeats the lead-scoring bias at company level. Sum has its own weakness: large companies with many loosely engaged contacts can outscore smaller, more focused ones. Some firms cap points per contact or count only contacts in relevant roles.

The second choice is data volume. Predictive account models need history. Salesforce recommends at least 200 accounts with won opportunities and 200 with lost ones from the last two years for Key Accounts Identification, and at least six months of engagement data and 20 prospects linked to opportunities for its person-level Behavior Scoring. Many firms of 20 to 500 people will start with rules.

## Which to use, and how to combine them

| Situation | What fits |
| --- | --- |
| High-volume, low-price sales to individuals or very small firms | Lead scoring alone |
| Several people per deal and named target accounts | Account scoring for priority, lead scoring for contact choice |
| Fewer than about 200 won and 200 lost accounts in two years | Rules-based account scoring |
| Account-based marketing programme | Account scoring, tied to the [ABM](https://lowob.com/research/what-is-account-based-marketing/) tiers |
| Sellers complain that high-scoring leads are students or competitors | Add account fit as a gate before lead engagement counts |

A working combination for most B2B firms:

1. **Score account fit first.** Only accounts that match the ICP enter the engaged queue.
2. **Roll up engagement by sum, with caps.** Limit points per contact, and count contacts in buying roles more heavily.
3. **Count engaged people.** Track the number of distinct contacts active in the last 30 days as its own field.
4. **Use lead scores inside the account.** Once an account is prioritised, the lead score suggests who to contact first.
5. **Test against opportunities.** Compare opportunity creation for the top and bottom thirds of account scores each quarter.

## The **lowob** view

In the brain loop of store, wiring, record, reasoning and learning, a score is a piece of context. It is computed from the store, often in a warehouse, and synced to where sellers work. It is not a decision. An agent can calculate account scores, draft the account brief and suggest the first contact. A person decides to commit sales time to the account.

That decision, the reason and the expected outcome belong in the record, alongside the score at the time. The learning step then checks whether prioritised accounts produced opportunities and writes the result back, which is how the weights improve. Without that write-back, scoring rules set in a workshop stay unchanged for years. Our piece on [the commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/) treats account prioritisation as one of them.

## lowob takeaways

- **Choose the unit deliberately.** Lead scores pick people; account scores pick companies.
- **The roll-up rule decides the ranking.** Sum favours buying groups; average and maximum favour single enthusiasts.
- **Predictive needs history.** Below a few hundred won and lost accounts, start with rules.
- **Record the prioritisation.** The score is context; the decision to pursue is yours to record and test.

## Common questions

### What is the difference between lead scoring and account scoring?

Lead scoring ranks individual people by fit and engagement. Account scoring ranks companies, combining firmographic fit with the engagement of all known contacts at that company.

### Should B2B companies replace lead scoring with account scoring?

Usually they should combine them. The account score decides which companies get attention; the lead score decides which person inside a prioritised account to contact first.

### How do you calculate an account score?

Score company fit against your ICP, then add engagement from each known contact, rolled up by a chosen rule such as sum with a cap per contact. Some firms add third-party intent.

### How much data do you need for predictive account scoring?

It varies by tool. Salesforce recommends at least 200 accounts with won and 200 with lost opportunities from the last two years for Einstein Key Accounts Identification.

## Sources and notes

- [Forrester, Saying Goodbye To MQLs: A Parting That Is All Sweet And No Sorrow](https://www.forrester.com/blogs/saying-goodbye-to-mqls-sweet-and-no-sorrow), 21 November 2023. Analyst blog; some conversion figures are from Forrester clients.
- [Forrester, To Master B2B Buying Mayhem, Providers Must Prioritize Buyers' Needs](https://www.forrester.com/press-newsroom/forrester-the-state-of-business-buying-2024), 4 December 2024. Press release on Forrester's own survey; sample size not stated on the page.
- [HubSpot Knowledge Base, Build lead scores](https://knowledge.hubspot.com/scoring/build-lead-scores), accessed November 2026. Vendor documentation; available score types depend on subscription.
- [Salesforce, Account Engagement Einstein Implementation Guide](https://resources.docs.salesforce.com/244/latest/en-us/sfdc/pdf/pardot_einstein_implementation_guide.pdf). Vendor documentation for one release; thresholds may change.
- The comparison table, roll-up example and brain-loop placement are **lowob**'s working method.

## Related research

- [What Is Lead Scoring?](https://lowob.com/research/what-is-lead-scoring/)
- [What Is Account-Based Marketing?](https://lowob.com/research/what-is-account-based-marketing/)
- [What Is a Buying Committee?](https://lowob.com/research/what-is-a-buying-committee/)
- [Intent Data vs First-Party Data](https://lowob.com/research/intent-data-vs-first-party-data/)

## Next Move

Take your 50 highest-scoring leads from last quarter and group them by account. Count how many accounts had two or more engaged people, and compare their opportunity rate with accounts that had only one.

[Start a conversation](https://lowob.com/contact/)
