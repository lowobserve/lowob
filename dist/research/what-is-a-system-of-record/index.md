# What Is a System of Record?

Source: https://lowob.com/research/what-is-a-system-of-record/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: A system of record is the authoritative source for one type of business data. The idea dates from enterprise IT, where Gartner and Geoffrey Moore set it against faster-moving systems of engagement and innovation. For a commercial team the practical work is naming one system and one owner per data type, then deciding which of those systems AI agents may read and write.

A system of record is the one system a business treats as authoritative for a given type of data, such as the CRM for accounts and opportunities or the finance system for invoices. When two systems disagree, the system of record wins. It stores what is true now. It rarely stores why a decision was made, and that is the gap AI agents expose.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What a system of record means

The term describes a role, not a product category. TechTarget's definition is an information storage and retrieval system that holds valuable data about an organisational system or process. Its key condition is that, "to ensure data integrity and validity, there must be only one SOR for a given piece of information."

Most firms already have several systems of record without having named them. Trouble starts when a second copy of the same data is treated as equally true.

| Data type | Typical system of record | Common rival copy |
| --- | --- | --- |
| Accounts and contacts | CRM | Marketing automation, personal spreadsheets |
| Opportunities and pipeline | CRM | Forecast spreadsheet |
| Invoices and booked revenue | Finance or ERP system | CRM "closed won" amount |
| Signed contract terms | Contract repository or e-signature tool | Email attachments |
| Prices and discount rules | Price book in the CRM or quoting tool | Old proposal documents |
| People and roles | HR system | Directory, org chart slides |

The idea has a long history in enterprise IT. In 2011, Geoffrey Moore's white paper for AIIM described systems of record as the "tools, repositories, and systems upon which organizations have built their business processes". The newer systems of engagement, such as collaboration tools, "overlay and complement" them. Gartner's pace-layered model, set out by Yvonne Genovese in 2012, adds a reason for caution: because systems of record are "regulated or foundational to running an organization, changes will be carefully controlled".

## Why it matters for a commercial team

The first cost of an unnamed system of record is argument. A board pack shows one revenue figure from the CRM and another from finance, and the meeting is spent reconciling rather than deciding. Naming which system wins, and who owns it, ends most of these disputes.

The second cost arrives with AI. An agent preparing a renewal brief reads from several systems. If nobody has named the authoritative source for contract value, the agent uses whichever copy it reaches first. The output looks confident and may be wrong. The same applies to writing: an agent that updates a field should update it in the system of record, through its own identity and permissions, not in a side copy.

The third point is about what a system of record does not hold. It stores the current value of a field. It rarely stores the reasoning behind a change. Standard Salesforce field history tracking covers 20 fields per object, with 18 months visible in the interface and up to 24 months through the API. Field Audit Trail raises the limit to 200 fields per object and longer retention. Even then, the history shows that a discount changed from 10% to 25%. It does not show who argued for it, why, or what renewal price was expected.

In **lowob**'s model that is a separate layer. The CRM is memory, not a brain. The system of record holds state; a decision record holds the reason, owner, status and expected outcome. Agents need both.

## How to map yours in a week

1. **List the disputed data.** Write down the ten data types the commercial team argues about most, such as pipeline value, contract end dates and discount levels.
2. **Name one system and one owner for each.** The owner decides definitions and fixes errors. Everyone else reads.
3. **Mark every other copy.** Each rival copy is either synced from the system of record or retired. A spreadsheet that people edit by hand is a rival, not a copy.
4. **Set agent rules.** For each system of record, decide whether agents may read it, draft changes to it, or write to it, and at which autonomy level. Most firms start at level 1 (draft) for writes.
5. **Add the missing record.** Decide where the reasons for commercial decisions will live, since no system of record holds them by default.

## lowob takeaways

- **One type of data, one authoritative system.** Two equally trusted copies of the same number is the root of most reporting disputes.
- **Name an owner, not just a tool.** A system of record without an owner drifts.
- **Agents should read from and write to the system of record.** Side copies give agents confident wrong answers.
- **State is not reasoning.** Field history shows what changed; a decision record shows why.

## Sources and notes

- [TechTarget, What is a system of record (SOR)?](https://www.techtarget.com/whatis/definition/system-of-record-SOR), last updated November 2022. Reference definition; no named author.
- [AIIM, New Geoffrey Moore white paper on the future of enterprise IT](https://info.aiim.org/aiim-blog/newaiimo/2011/01/19/new-geoffrey-moore-white-paper-on-future-of-enterprise-it), 19 January 2011. Industry association summary of Moore's paper on systems of record and engagement.
- [Yvonne Genovese, Accelerating Innovation by Adopting a Pace-Layered Application Strategy](https://analytics.erp.ufl.edu/pace-layering.pdf), Gartner, 9 January 2012. Analyst note, copy hosted by the University of Florida.
- [Salesforce Trailhead, Get Started with Field Audit Trail](https://trailhead.salesforce.com/content/learn/modules/field-audit-trail-basics/get-started-with-field-audit-trail), undated. Vendor training documentation; limits may change by edition.

## Related research

- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [What Is CRM Data Hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)
- [CRM vs CDP vs Data Warehouse: Which Holds What](https://lowob.com/research/crm-vs-cdp-vs-data-warehouse/)

## Next move

Ask finance and sales for last quarter's revenue figure separately. If the numbers differ, write down which system each came from, and name the one that wins and the person who owns it.

[Start a conversation](https://lowob.com/contact/)
