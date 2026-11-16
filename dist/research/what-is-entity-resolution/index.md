# What Is Entity Resolution?

Source: https://lowob.com/research/what-is-entity-resolution/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Revenue

> Summary: Entity resolution is the process of deciding which records, within one system or across several, refer to the same real-world entity, such as a company or a person. It covers deduplication inside a CRM and record linkage between systems such as the CRM, billing and support. Good entity resolution sorts each pair of records into match, non-match or "needs a person to look", and keeps the history of every merge.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- The standard statistical model, Fellegi-Sunter, was published in 1969 and sorts record pairs into link, non-link and possible link for manual review.
- Deterministic matching uses exact rules; probabilistic matching weighs partial agreement across several fields.
- The UK Ministry of Justice's open-source Splink library implements Fellegi-Sunter and has linked about 15 million records in under an hour.
- CRMs ship basic versions: Salesforce matching rules combine exact and fuzzy methods, including Jaro-Winkler distance.
- For agents, an unresolved duplicate is not a reporting error but a double action: two sequences, two quotes, one buyer.

## What entity resolution means

A firm rarely has one record per customer. The same company appears under its trading name in the CRM, its registered name with "Limited" in billing and only as a web domain in the support desk. The same buyer appears twice after changing email address. Entity resolution decides which of these belong together.

Two jobs sit under the term. **Deduplication** finds repeats inside one system. **Record linkage** connects records across systems that share no common identifier. Both rest on the same question: given two records, how likely is it that they describe the same thing?

| Entity resolution is | Entity resolution is not |
| --- | --- |
| Deciding which records describe one real entity | Enrichment, which adds new attributes from outside |
| A scored judgment with an uncertain middle band | A single exact-match rule on email address |
| Recorded, so merges can be traced and reversed | Deleting the losing record |
| Ongoing, because new duplicates arrive daily | A one-off clean-up project |

## How it works

### The 1969 model still underneath

Ivan Fellegi and Alan Sunter set out the theory in the *Journal of the American Statistical Association* in December 1969. Each pair of records is compared field by field. The pattern of agreements is scored by how likely it is among true matches versus non-matches. Two thresholds then sort pairs into three outcomes: link, non-link, or possible link where the evidence is insufficient and a person reviews it. The rule is designed to minimise how many pairs land in that middle band for a chosen error rate.

### Deterministic and probabilistic matching

Deterministic matching applies fixed rules: same email domain and same postcode means same company. It is easy to explain and misses variants. Probabilistic matching weighs partial agreement across many fields, so a near-identical name plus the same phone number can outweigh a different address.

The UK Ministry of Justice built Splink, an open-source library, to link justice data that lacks a consistent person identifier. Government guidance describes it as implementing the Fellegi-Sunter model and returning a match score between 0 and 1. The team designed it to handle around 100 million records and reported using it on problems of about 15 million records with runtimes under an hour.

### What a CRM gives you

Most CRMs ship a simpler version. Salesforce's matching rules combine exact and fuzzy methods, such as Jaro-Winkler distance for first names and edit distance for street names. Duplicate rules then decide whether to block the save or warn and allow it. Each object can have up to five active matching rules. This handles entry-time duplicates well and cross-system linkage poorly.

## Why it matters for a commercial team

Account history is only useful if it is in one place. A win-loss review that misses half a client's deals because they sit under a second account record draws the wrong conclusion. In **lowob**'s model, the CRM is the store and the decision record sits on top of it; both depend on knowing which account a decision belongs to.

Agents make the cost visible. A sales agent working from two records for one buyer can enrol the same person in two sequences, or quote two prices. An agent at autonomy level 2 or above should not run against accounts whose identity is unresolved.

> An unresolved duplicate in a report is an error. An unresolved duplicate read by an agent is two actions.

## How to start

| Step | What to do | Who owns it |
| --- | --- | --- |
| Pick the entity | Start with accounts, not contacts; fewer records, higher value | Revenue operations |
| Choose match fields | Domain, registered name, company number, billing address | Revenue operations |
| Set two thresholds | Auto-merge above the upper one, review between, ignore below | Revenue operations with sales lead |
| Staff the middle band | A named person reviews possible matches weekly | Revenue operations |
| Merge without deleting | Keep the losing record as superseded, with a pointer to the survivor | System rule |
| Measure | Count new duplicates created each month | Revenue operations |

Two mistakes recur. One is setting the auto-merge threshold low to clear the queue, which merges subsidiaries into parents and loses their separate contracts. The other is deleting the merged record, which breaks links from old emails, invoices and decisions. Mark it superseded instead.

## lowob takeaways

- **Identity before automation.** Agents should not act on accounts whose records are unresolved.
- **Respect the middle band.** Possible matches go to a person, as Fellegi and Sunter proposed in 1969.
- **Merge, never delete.** Keep the superseded record so history and decisions stay attached.
- **Start with accounts.** Company records are fewer and carry more value than contacts.

## Common questions

### What is the difference between entity resolution and deduplication?

Deduplication finds repeated records inside one system. Entity resolution is the wider task, including linking records about the same entity across different systems.

### What is probabilistic record linkage?

A method that scores how likely two records are to match by weighing agreement across several fields, rather than requiring exact matches on one field.

### Can a CRM do entity resolution on its own?

For entry-time duplicates, mostly yes, through matching and duplicate rules. Linking the CRM with billing, support and product data usually needs a separate tool or warehouse process.

### Why does entity resolution matter for AI agents?

Agents act on records directly. Two records for one buyer can produce two outreach sequences, conflicting quotes or a history that looks thinner than it is.

## Sources and notes

- [Fellegi and Sunter, A Theory for Record Linkage](https://cs.cornell.edu/~shmat/courses/cs6434/fellegi-sunter.pdf), Journal of the American Statistical Association, Vol. 64, No. 328, December 1969. Foundational academic paper; course-hosted copy.
- [UK Government, Splink: MoJ's open source library for probabilistic record linkage at scale](https://www.gov.uk/government/publications/joined-up-data-in-government-the-future-of-data-linking-methods/splink-mojs-open-source-library-for-probabilistic-record-linkage-at-scale), first published August 2020, updated July 2021. Scale figures are the team's own and dated.
- [Salesforce Trailhead, Duplicate Management: matching and duplicate rules](https://trailhead.salesforce.com/content/learn/modules/sales_admin_duplicate_management/sales_admin_duplicate_management_unit_2). Vendor documentation; other CRMs offer comparable features.

## Related research

- [What Is CRM Data Hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [What Is a System of Record?](https://lowob.com/research/what-is-a-system-of-record/)

## Next Move

Export your account list and sort it by website domain. Count the domains that appear on more than one account; that number is your starting duplicate rate.

[Start a conversation](https://lowob.com/contact/)
