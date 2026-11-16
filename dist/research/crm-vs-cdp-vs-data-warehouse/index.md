# CRM vs CDP vs Data Warehouse: Which Holds What

Source: https://lowob.com/research/crm-vs-cdp-vs-data-warehouse/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Revenue

> Summary: A CRM is the working system for relationships and deals. A customer data platform builds unified customer profiles and shares them with other tools. A data warehouse holds current and historical data from every system for analysis. All three are storage, and none of them records why a commercial decision was made.

A CRM (customer relationship management system) is where a commercial team works: contacts, accounts, interactions and the deal pipeline, mostly entered by people. A customer data platform (CDP) collects customer data from many sources, links it into one profile per customer and shares those profiles with other tools, mainly for marketing. A data warehouse holds current and historical data from all of these systems for analysis and reporting. Most firms of 20 to 500 people need a CRM, many need a warehouse, and fewer need a CDP.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What the three terms mean

A **CRM** is an operational system. Sellers, account managers and customer success staff use it every day to log calls, move deals through stages and see who owns an account. Salesforce's own description lists contact details, "all previous interactions with your company" and visibility into "every opportunity or lead". Most of its data is typed in by people or captured from their email and calendars.

A **CDP** is a marketing data system. The CDP Institute's definition has three parts. It is packaged software rather than a custom build. It creates a persistent, unified database, linking records that belong to the same customer and tracking behaviour over time. And it is accessible to other systems, which use the profiles for analysis and to manage interactions. The Institute's RealCDP certification requires a product to accept data from any source, capture full detail, retain it, build unified profiles, share data with any destination, respond within one second and govern customer data.

A **data warehouse** is an analytical system. Google Cloud's definition describes it as an enterprise system for analysis and reporting of structured and semi-structured data from many sources, naming customer relationship management among them. It keeps history, and it runs separately from operational systems so that heavy queries do not slow them down.

| Dimension | CRM | CDP | Data warehouse |
| --- | --- | --- | --- |
| Main job | Run relationships and deals | Unify customer profiles and send them to tools | Analyse and report across systems |
| Main users | Sellers, account managers, sales managers | Marketing and growth teams | Analysts, finance, RevOps |
| Typical data | Accounts, contacts, activities, opportunities | Web and app events, email engagement, identities | Copies of every system's data, with history |
| How data arrives | People entering it, email and calendar capture | Event streams and connectors | Scheduled loads and streams |
| Unit of record | Account, contact, deal | Person or customer profile | Table, row, time period |
| Speed | Interactive | Near real time | Batch, increasingly near real time |
| Who owns definitions | Sales operations or RevOps | Marketing operations | Data team or RevOps |

## Which holds what

The useful question is where each kind of data should live. One home per fact avoids three systems reporting three revenue numbers.

| Data | Home | Notes |
| --- | --- | --- |
| Account owner, contacts, deal stage and amount | CRM | The working truth for the pipeline |
| Meeting notes and call activity | CRM | Or a notetaker that writes into the CRM |
| Website visits and product usage events | CDP, or the warehouse | Too many events for a CRM |
| One identity per customer across channels | CDP, or the warehouse with [entity resolution](https://lowob.com/research/what-is-entity-resolution/) | The CDP's core job |
| Pipeline snapshots and historic stage changes | Warehouse | CRMs show the current state better than history |
| Board metrics such as net revenue retention | Warehouse, with a [semantic layer](https://lowob.com/research/what-is-a-semantic-layer/) | One definition, used everywhere |
| Scores to show sellers inside the CRM | Warehouse, synced back by [reverse ETL](https://lowob.com/research/what-is-reverse-etl/) | Compute in one place, display where people work |
| Why a discount was approved, by whom, expecting what | A decision record | None of the three holds this by default |

The last row is the gap. Illustratively, a CRM records that a deal closed at a 15% discount. It rarely records who approved it, why, and what outcome they expected. A warehouse can show the discount trend across a year but not the reasoning behind any single one.

## Which to choose

For most business-to-business firms in this size range, the sequence is CRM first, warehouse when history across systems matters, and a CDP only when behavioural data and real-time personalisation become central.

| Situation | What you need |
| --- | --- |
| Under about 100 people, one CRM and a marketing tool | CRM, with clean stage definitions |
| Reporting needs data from three or more systems, or history the CRM cannot show | Add a warehouse |
| Leadership disputes basic numbers each month | A warehouse with a semantic layer, before any new tool |
| High-volume web or product events driving campaigns across many channels | Consider a CDP |
| A warehouse already holds clean customer data | Consider a warehouse-native approach before a separate CDP |

The CDP Institute's own checklist now assesses composable and warehouse-native architectures, while not making them core requirements. These are designs in which CDP functions run on top of the warehouse instead of on a separate copy of the data.

Questions to ask before buying any of the three:

- **Which facts will this system own?** If the answer overlaps another system, decide which one wins.
- **Who maintains the definitions?** A field nobody owns decays.
- **How does data flow back to where people work?** Analysis that never reaches the CRM changes little.
- **Where will AI agents read from?** Agents need one current answer per question, with permissions.

## The **lowob** view

In the brain loop of store, wiring, record, reasoning and learning, all three systems are the store. They hold facts and events. As we argue in [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/), a well-run CRM remembers what happened. It does not hold judgment.

The wiring, often a context layer or a set of connectors, lets assistants and agents read across the three with each user's permissions. The record is the missing piece: commercial decisions with a reason, an owner, a status and an expected outcome. The warehouse then earns a second role in the learning stage, because it is where you measure whether the expected outcome happened. That result is written back to the decision, closing the loop.

Rent the CRM, the warehouse and, if needed, the CDP. Own the definitions and the decision record, because those are what make the data mean the same thing to every person and every agent.

## lowob takeaways

- **CRM for work, warehouse for history, CDP for profiles.** Each has a different main user and speed.
- **One home per fact.** Decide which system owns each number before adding tools.
- **A CDP is optional for most B2B firms.** A warehouse often covers the same need at this size.
- **None of them holds the reason.** Decisions need their own record, linked to all three.

## Sources and notes

- [Salesforce, What is CRM?](https://salesforce.com/crm/what-is-crm/), accessed November 2026. Vendor explainer from a CRM provider.
- [CDP Institute, RealCDP Customer Data Platform Certification Program](https://www.cdpinstitute.org/resources/realcdp-customer-data-platform-certification-program), accessed November 2026. Industry body; certification is a capability checklist, not a performance test.
- [Gilbane, Customer Data Platform Definition from the Customer Data Platform Institute](https://gilbane.com/?p=57062), page last modified October 2020. Reproduces the CDP Institute's definition; secondary source.
- [Google Cloud, What is a data warehouse?](https://cloud.google.com/learn/what-is-a-data-warehouse?lang=en), accessed November 2026. Vendor explainer from a warehouse provider.
- The data placement table, sequence and brain-loop placement are **lowob**'s working method.

## Related research

- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [What Is Reverse ETL?](https://lowob.com/research/what-is-reverse-etl/)
- [What Is a Semantic Layer?](https://lowob.com/research/what-is-a-semantic-layer/)
- [What Is a System of Record?](https://lowob.com/research/what-is-a-system-of-record/)

## Next move

List your ten most reported commercial numbers and write next to each the one system that owns it. Where two systems claim the same number, pick one this week and make the other read from it.

[Start a conversation](https://lowob.com/contact/)
