# What Is a Golden Record?

Source: https://lowob.com/research/what-is-a-golden-record/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Revenue

> Summary: A golden record is the single, trusted version of one real-world entity, such as a customer, account or product, assembled from matching records held in several systems. Entity resolution decides which records belong together; survivorship rules decide which value wins for each field. A good golden record keeps its source records, so every value can be traced.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- TechTarget's reference definition notes that master data "is often called a golden record of information in a data domain".
- Informatica describes survivorship as "the process of creating a master record, the most trusted version, from multiple matching source records".
- Salesforce's Data 360 reconciles conflicting fields by frequency, recency or source object.
- In **lowob**'s model a golden record is the store's best answer about state. Agents should read it; it still holds no reasons.

## What a golden record means

Most firms hold the same account in several places. The CRM has the trading name and the owner; billing has the registered name and invoice address; support has a web domain. Each is partly right. A golden record combines the best of each into one version every system and report can agree on.

The term comes from master data management (MDM), the discipline of keeping core business entities consistent across systems. TechTarget's definition, by Jack Vaughan and Craig Stedman, describes well-managed master data as "a single version of the truth". Informatica calls the result a master record; Salesforce calls the customer version a unified profile. A golden record is not a copy of whichever system loaded last, and not a merge that deletes the losing records.

## How it works

### Step one: match

First the system decides which records describe the same entity. That is [entity resolution](https://lowob.com/research/what-is-entity-resolution/). Poor matching merges a subsidiary into its parent, or splits one client across two accounts.

### Step two: survivorship

Survivorship then decides which value wins for each field. Informatica's Trailhead module for its cloud MDM product sets out the options. Administrators "rank source systems by their reliability", for a whole entity, a group of fields or one field. Values carry a trust score, and decay lowers trust as a value ages. A maximum rule keeps the most trusted value; a minimum rule keeps the least, which Informatica suggests for fields such as risk ratings.

Salesforce's Data 360, formerly Data Cloud, uses match rules to group records and reconciliation rules to choose field values. Its Trailhead project says data "can be reconciled based on frequency of a value, recency, or based on the object it came from".

| Survivorship rule | How it picks a value | Good for | Watch for |
| --- | --- | --- | --- |
| Source priority | The highest-ranked system wins | Legal name from billing, owner from CRM | A trusted source with a blank field |
| Recency | The most recently updated value wins | Phone numbers, job titles | A bulk import that touches every record |
| Frequency | The value most sources agree on wins | Industry, country | Three stale copies outvoting one correct one |
| Highest trust score | The value with the best computed trust wins | Mixed sources of varying quality | Scores nobody can explain |
| Steward override | A named person sets the value | Disputed or high-value accounts | Overrides that are never reviewed |

### Step three: keep the lineage

The source records are kept. Informatica stores each system's data "in source records" and keeps manual edits separately, so the origin of each value stays visible. Salesforce keeps unified link objects that "act as a bridge between your source data and your unified profile data". Both designs make the golden record traceable and reversible.

TechTarget also describes four MDM styles, from a lightweight registry that indexes master data for analysis to a transaction style that moves all updates to a central hub. In **lowob**'s view, most firms of 20 to 500 people need nothing heavier than a registry or consolidation hub.

## Why it matters for a commercial team

A golden account record ends a common argument about which address, owner or contract value is right. It matters more once agents arrive. An agent reading three conflicting records picks one, often silently. An agent reading the golden record gets one answer and can show where each field came from.

It is also where the [system of record](https://lowob.com/research/what-is-a-system-of-record/) question is settled field by field: billing may own the legal name while the CRM owns the account owner.

Two limits follow from **lowob**'s model. A golden record is part of the store: it says what is true now, not why a discount was approved. Those reasons belong in a decision record linked to the golden account ID. And it should follow [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/): changed values are kept as history, not erased.

## How to start

Begin with accounts, which are fewer than contacts and carry the contracts. List the ten fields that matter most, such as legal name, domain, owner and contract end date. For each, name the winning system, the rule and the person who resolves disputes. Then count the accounts where sources disagree on any of those fields. That number is the size of the job.

## lowob takeaways

- **Match first, then choose.** Survivorship is only as good as the entity resolution beneath it.
- **Write a rule per field.** Different fields deserve different winners, and the choice should be explicit.
- **Keep the sources.** A golden record without lineage cannot be checked or reversed.
- **State is not reasoning.** Link decisions to the golden ID; do not expect the record to hold them.

## Common questions

### What is a golden record in master data management?

The single trusted version of an entity, such as a customer or product, built from matching records in several systems.

### What are survivorship rules?

Rules that decide which source value survives into the golden record, for example by ranking sources, preferring recent values or keeping the value with the highest trust score.

### Does a small company need MDM software for a golden record?

Often not. Clear field ownership in the CRM, a warehouse and written survivorship rules are enough for most firms with a few thousand accounts.

## Sources and notes

- [TechTarget, What is master data management (MDM)?](https://www.techtarget.com/searchDataManagement/definition/master-data-management), Jack Vaughan and Craig Stedman, published 5 July 2024. Reference definition; describes the four MDM styles.
- [Salesforce Trailhead, Get Started with Source Records and Survivorship (Informatica Cloud MDM)](https://trailhead.salesforce.com/de/content/learn/modules/match-merge-and-survivorship/get-started-with-source-records-and-survivorship), undated. Vendor training material for Informatica's product; option names are Informatica's.
- [Informatica, Establish the best version of the truth](https://onlinehelp.informatica.com/IICS/prod/mde/en/cg-c360-bvt-records/Establish_the_best_version_of_the_truth.html), undated. Vendor product documentation.
- [Salesforce Trailhead, Unify Your Data (Data 360)](https://trailhead.salesforce.com/content/learn/projects/explore-data-cloud-core-functionality/unify-your-data), undated. Vendor training project; describes match and reconciliation rules in Salesforce's product only.

## Related research

- [What Is Entity Resolution?](https://lowob.com/research/what-is-entity-resolution/)
- [What Is a System of Record?](https://lowob.com/research/what-is-a-system-of-record/)
- [What Is a Customer Data Platform?](https://lowob.com/research/what-is-a-customer-data-platform/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)

## Next Move

Pick your twenty largest accounts and compare legal name, domain and billing address across the CRM and billing system. Write down, for each field, which system should win.

[Start a conversation](https://lowob.com/contact/)
