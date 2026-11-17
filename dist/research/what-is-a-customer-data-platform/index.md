# What Is a Customer Data Platform?

Source: https://lowob.com/research/what-is-a-customer-data-platform/
Publisher: lowob (https://lowob.com)
Published: 2026-10-10 · Updated: 2026-11-17
Function: Growth

> Summary: A customer data platform is packaged software that collects customer data from many sources, links it into one persistent profile per customer and makes those profiles available to other systems. The CDP Institute tracked 213 active vendors in July 2026, and Gartner reports that marketers use only about half of the capabilities they buy. For a B2B firm the key questions are account-level support, the warehouse it already has, and who will own the profiles.

A customer data platform (CDP) is packaged software that collects customer data from many sources, links it into one persistent profile per customer and shares those profiles with other systems, mostly for marketing. It differs from a CRM, which people work in, and a data warehouse, which holds history for analysis. Many B2B firms of 20 to 500 people can meet the need with a warehouse; a CDP earns its place when high-volume behavioural data must reach many channels quickly.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What a customer data platform means

The same customer appears in web analytics, an email platform, a product database and a CRM, each with a different identifier. A CDP collects these records, decides which belong to the same person or account, and keeps one profile that grows over time. Other tools read it to target campaigns or personalise pages.

The CDP Institute, the category's industry association, says a CDP "ingests data from any source, captures full detail, builds unified and persistent customer profiles", with the data made available in real time to other systems. Gartner's definition, from senior principal analyst Rachel Smith, is narrower: "software applications that support marketing and customer experience use cases by unifying a company's customer data".

The Institute's RealCDP checklist turns the definition into seven tests.

| RealCDP capability | What it means in practice |
| --- | --- |
| Ingest any source | Accepts data from web, app, CRM, billing, files and other systems |
| Capture full detail | Keeps individual events, not only summaries |
| Persist the data | Retains history rather than passing data through |
| Unified profiles | Links records that belong to the same customer |
| Open access | Shares profiles with any other system |
| Real-time response | Answers requests fast enough for live interactions |
| Govern customer data | Applies consent, privacy and access controls |

Which data belongs in a CDP, a CRM or a warehouse is covered in [CRM vs CDP vs Data Warehouse](https://lowob.com/research/crm-vs-cdp-vs-data-warehouse/).

## How it works

The core job is identity resolution, a form of [entity resolution](https://lowob.com/research/what-is-entity-resolution/). Twilio Segment's documentation describes an identity graph that "merges the complete history of each customer into a single profile", using cookie IDs, device IDs, email addresses and custom IDs. Salesforce's Data 360 uses match rules to group records and reconciliation rules to choose field values. The result is a [golden record](https://lowob.com/research/what-is-a-golden-record/) per customer. Marketers then build audiences from those profiles and send them to advertising, email or personalisation tools.

The market is crowded. The CDP Institute counted 213 active vendors in July 2026 and $13.5 billion of cumulative disclosed financing. Gartner's critical capabilities cover data collection, profile unification, integrations, segmentation, experimentation, and data science and privacy.

## Why it matters for a commercial team

The case for a CDP is one profile, updated as customers act, available to every tool. The case against is underuse. Smith reports marketers used only 53% of CDP capabilities on average in 2024, and that a 2025 Gartner survey of business buyers found an average of five groups funding a CDP purchase. A purchase with five funders and no single owner is hard to run.

B2B firms need more than individual identity. Purchases are made by a group at one account, so account-level profiles matter; Segment's group calls are one example of vendor support.

In **lowob**'s model the CDP is the store. It answers "who is this customer and what have they done", not why a price was offered or a campaign chosen; those reasons belong in the decision record. Its profiles can feed the wiring that agents read from, provided permissions follow the data.

## How to evaluate a CDP

| Question | Why it matters |
| --- | --- |
| Do we already have a warehouse with clean customer data? | A warehouse-native approach may avoid a second copy of the data |
| Does it model accounts and buying groups, not only individuals? | B2B decisions are made by groups at one account |
| Which identity rules does it use, and can we see them? | Hidden matching rules produce merges nobody can explain |
| Who will own the profiles and the definitions? | Gartner's five-funder finding suggests ownership is often unclear |
| How are consent and deletion handled across destinations? | Governance is a RealCDP test, and some products are audited against it |

Start with a use case, not a platform: the decision the profiles will improve, such as which accounts receive a renewal campaign. Then check that the data is not already in the CRM or warehouse.

## lowob takeaways

- **A CDP unifies identity.** Its core job is one persistent profile per customer, shared with other tools.
- **Check the warehouse first.** Many B2B firms can meet the need with data they already hold.
- **Name one owner.** Underused capability and many funders point to unclear ownership.
- **It is store, not judgment.** Profiles say who and what; decision records say why.

## Common questions

### What does a customer data platform do?

It collects customer data from many sources, links records that belong to the same customer into one persistent profile, and shares those profiles with marketing and other tools.

### What is the difference between a CDP and a CRM?

A CRM is where people manage relationships and deals with data they mostly enter. A CDP gathers behavioural and identity data automatically and shares unified profiles.

### Do B2B companies need a CDP?

Some do, mainly those with high volumes of web or product data feeding many channels. Others can meet the need with a warehouse and their CRM.

## Sources and notes

- [CDP Institute, Learning Center and CDP basics](https://www.cdpinstitute.org/?p=1133), page undated, figures dated July 2026. Industry association page; vendor counts and financing totals are its own tracking.
- [Rachel Smith, Gartner: What to look for in a customer data platform](https://computerweekly.com/feature/Gartner-What-to-look-for-in-a-customer-data-platform), Computer Weekly, undated. Analyst article excerpted from Gartner research; survey samples not given.
- [Twilio Segment, Identity Resolution overview](https://www.twilio.com/docs/segment/unify/identity-resolution), undated. Vendor product documentation, cited as a category example.
- [Salesforce Trailhead, Unify Your Data (Data 360)](https://trailhead.salesforce.com/content/learn/projects/explore-data-cloud-core-functionality/unify-your-data), undated. Vendor training project, cited as a category example.

## Related research

- [CRM vs CDP vs Data Warehouse: Which Holds What](https://lowob.com/research/crm-vs-cdp-vs-data-warehouse/)
- [What Is a Golden Record?](https://lowob.com/research/what-is-a-golden-record/)
- [Intent Data vs First-Party Data](https://lowob.com/research/intent-data-vs-first-party-data/)
- [What Is Reverse ETL?](https://lowob.com/research/what-is-reverse-etl/)
- [What Is Prompt Engineering?](https://lowob.com/research/what-is-prompt-engineering/)

## Next move

List every system holding customer identifiers and the ID each uses. If your warehouse already joins three or more, test a warehouse-native approach before shortlisting a CDP.

[Start a conversation](https://lowob.com/contact/)
