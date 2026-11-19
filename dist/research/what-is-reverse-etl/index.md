# What Is Reverse ETL?

Source: https://lowob.com/research/what-is-reverse-etl/
Publisher: lowob (https://lowob.com)
Published: 2026-09-08 · Updated: 2026-11-17
Function: Revenue

> Summary: Reverse ETL moves data out of the warehouse and into operational tools such as the CRM, so scores and usage figures appear where sellers and agents work. The category is consolidating into wider data movement platforms. The main risk is not technical: it is a sync overwriting fields that people own.

Reverse ETL is the process of copying modelled data from a data warehouse back into the operational tools a team uses, such as the CRM, the marketing platform or the support desk. It runs in the opposite direction to ordinary ETL, which loads data into the warehouse. For a commercial team it is how product usage, health scores and finance figures reach the account record where sellers, and now agents, actually read.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What reverse ETL means

ETL stands for extract, transform, load. In the usual direction, data is extracted from operational systems, transformed and loaded into a warehouse for analysis. In the ELT variant, raw data is loaded first and transformed inside the warehouse. DataCamp's 2024 guide defines reverse ETL as the process of extracting data from a data warehouse, reshaping it for operational systems and loading it into them.

The point is location. Analysts may hold a churn score or usage summary in the warehouse, but sellers do not work there. Reverse ETL puts those values on the account record.

| Pattern | Direction | Where the logic lives | Typical output |
| --- | --- | --- | --- |
| ETL | Apps to warehouse | Before loading | Reporting tables |
| ELT | Apps to warehouse | Inside the warehouse | Modelled tables |
| Reverse ETL | Warehouse to apps | Inside the warehouse | Fields in the CRM, audiences, support context |
| Native integration | App to app | Inside each vendor | Point-to-point copies |

## How it works

Hightouch's documentation describes the parts in plain terms. A **source** is the system where data resides, such as Snowflake, BigQuery or PostgreSQL. A **model** defines what data to query, and every model needs a unique primary key so the tool can track changes between runs. A **destination** is the system where data is consumed. A **sync** sets how data appears in the destination and when: the sync mode (insert, update, upsert or archive), the mapping of columns to fields, and a schedule that can run on an interval, on a cron expression or when a tool such as dbt Cloud or Airflow triggers it.

The market is consolidating. On 1 May 2025 Fivetran, which moves data into warehouses, announced an agreement to acquire Census, describing it as the leader in reverse ETL and data activation. The direction of travel is one vendor for data moving both ways.

## Why it matters for a commercial team

### It puts the evidence on the record

A seller preparing a renewal call wants the customer's usage trend, open support tickets and payment status on one screen. Without a sync, that means three logins or a request to the data team. DataCamp lists syncing customer insights to the CRM and campaign metrics to marketing tools as the core use cases.

### Agents read what the sync writes

In **lowob**'s model, the CRM is the store and the context layer is the wiring that lets AI read it. Reverse ETL is part of that wiring. An agent drafting a renewal note will read the health score field whether or not anyone checked how it was calculated. A wrong model in the warehouse becomes a wrong sentence in front of a client.

> A sync that writes into the CRM is a decision about what every person and agent will believe about an account.

## How to run it safely

Most problems come from unclear authority, not from the tooling. Before any sync goes live, settle who owns each field.

| Check | Question to answer | Why it matters |
| --- | --- | --- |
| Field authority | Is this field owned by the warehouse or by a person? | A sync must never overwrite judgment fields such as next step or loss reason |
| Primary key | What uniquely matches a warehouse row to a CRM record? | Weak keys create duplicates or write to the wrong account |
| Sync mode | Insert, update, upsert or archive? | Upsert on a weak key is the common source of duplicate accounts |
| Definition | Is the metric defined once, with an owner? | Two definitions of "active" produce two truths |
| Schedule | How fresh does the value need to be? | Hourly syncs burn API limits for values that change monthly |
| Change log | Can you see what the sync changed, and when? | Needed to trace an agent's output back to its input |

Three practical rules follow. First, write computed values into dedicated, read-only fields, labelled as system-maintained, rather than into fields people edit. Second, sync definitions that already exist in a semantic layer, so the CRM and the board report agree. Third, do not delete history: when a value changes, keep the previous one, in line with **lowob**'s rule to supersede, never overwrite.

Reverse ETL is wiring, so rent it. The real decision is which fields deserve a sync at all. Start with two or three a seller would use on a call this week.

## lowob takeaways

- **It is plumbing in reverse.** Warehouse data goes back into the tools where people work.
- **Authority comes first.** Decide which fields the warehouse owns before you schedule anything.
- **Agents raise the stakes.** Whatever a sync writes, an agent will treat as fact.
- **Start small.** Two or three fields a seller will use beat fifty nobody reads.

## Common questions

### What is the difference between ETL and reverse ETL?

ETL moves data from operational systems into a warehouse for analysis. Reverse ETL moves modelled data from the warehouse back into operational tools such as the CRM.

### Is reverse ETL the same as a customer data platform?

No. A CDP stores and unifies customer data itself. Reverse ETL uses the warehouse as the store and only moves data out of it, although vendors in both categories now overlap.

### What data should a sales team sync with reverse ETL?

Values that change a conversation: product usage trend, health score, open support tickets, billing status and lifetime value. Each should have one written definition.

### What are the risks of reverse ETL?

Overwriting fields people maintain, creating duplicates through weak matching keys, and exhausting CRM API limits with schedules more frequent than the data requires.

## Sources and notes

- [DataCamp, What is Reverse ETL? A Helpful Guide](https://www.datacamp.com/blog/reverse-etl), 20 September 2024. Educational overview; tool lists change quickly.
- [Hightouch Docs, Core concepts](https://docs.hightouch.com/getting-started/concepts). Vendor documentation; other tools use similar terms.
- [Fivetran, Fivetran Signs Agreement to Acquire Census](https://www.fivetran.com/press/fivetran-signs-agreement-to-acquire-census-delivering-the-first-end-to-end-data-movement-platform-for-the-ai-era), 1 May 2025. Vendor press release; market leadership claims are the vendor's own.

## Related research

- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [What Is a Semantic Layer (Shared Definitions for AI)?](https://lowob.com/research/what-is-a-semantic-layer/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [CRM vs CDP vs Data Warehouse: Which Holds What](https://lowob.com/research/crm-vs-cdp-vs-data-warehouse/)

## Next move

List every CRM field that is written by an integration or sync. For each, mark whether a person also edits it; any field with two writers needs a single owner this week.

[Start a conversation](https://lowob.com/contact/)
