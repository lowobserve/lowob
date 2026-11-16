# What Is Lead Source Attribution?

Source: https://lowob.com/research/what-is-lead-source-attribution/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Growth

> Summary: Lead source attribution is the practice of recording where each lead came from and carrying that source through to the opportunity and the revenue it produces. In most CRMs it starts as a single field holding one value, which means it captures first touch only. It answers "which channels bring us business" well enough to steer spend, provided the source list is fixed, the field is protected, and nobody mistakes it for proof of cause.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## Key points

- Salesforce's standard Lead Source field holds one value per lead and can pass to the contact, account and opportunity on conversion, so it reflects first touch only.
- HubSpot sets a deal's Original Traffic Source from the associated contact with the earliest activity, and records how the deal was created separately as Record Source.
- Google removed first-click, linear, time-decay and position-based attribution models from Google Ads and GA4 in 2023, leaving data-driven and last-click.
- In 6sense's 2024 Buyer Experience Report, buyers were nearly 70% through their purchasing process before engaging sellers, and initiated first contact over 80% of the time.
- Self-reported source, asked at the point of enquiry, captures channels that tracking misses, such as referrals, podcasts and peer conversations.

## What lead source attribution means

Every commercial team wants to know which activity produced its revenue. Lead source attribution is the simplest answer: tag each lead with its origin, then follow that tag through to the deal and its value.

In Salesforce, Lead Source is a standard picklist with defaults such as Web, Phone Inquiry, Partner Referral, Trade Show, Word of mouth, Employee Referral and Other. Each lead holds one value. On conversion, the value can be inherited by the contact, the account and the opportunity. A Salesforce Ben guide notes a common trap: the opportunity inherits the lead source only when created during conversion or from the contact, not when created from the account page.

HubSpot works differently. A deal's Original Traffic Source comes from the associated contact with the earliest activity, and a separate Record Source property records how the deal was created.

| Approach | What it credits | Strength | Weakness |
| --- | --- | --- | --- |
| Lead source field (first touch) | The first recorded origin | Simple, complete, cheap | Ignores everything after first touch |
| Last touch | The final interaction before conversion | Easy to track online | Overcredits search and direct traffic |
| Multi-touch (rules-based) | Several touches by fixed weights | Shows the journey | Weights are arbitrary |
| Data-driven (algorithmic) | Touches by modelled contribution | Adapts to data | Opaque, needs volume |
| Self-reported | What the buyer says | Captures untracked channels | Memory is imperfect |

## Why it matters for a commercial team

### Budget follows the field

Whatever the source field says gets funded. If referrals are recorded as "Web" because the buyer filled in a form after a colleague recommended the firm, the referral programme looks worthless and the website looks brilliant. The field is a decision input, so its definitions need the same care as stage definitions.

### Most of the journey is invisible

6sense's 2024 Buyer Experience Report found buyers were nearly 70% through their purchasing process before engaging sellers, and that buyers initiated first contact more than 80% of the time. Gartner reported in 2020 that buyers spend only 17% of their purchase time meeting potential suppliers. Tracking sees the form fill. It rarely sees the conversation that caused it. 6sense is a vendor, and its figures are survey-based, but the direction is consistent with Gartner's.

### The tools have narrowed the choice

In April 2023 Google announced that first-click, linear, time-decay and position-based models would be removed from Google Ads and GA4, with remaining conversion actions switched to data-driven attribution from September 2023. Last click remains available. For a mid-size B2B firm, that means web analytics will not resolve the attribution question on its own. The CRM record has to.

## How to set it up so it can be trusted

1. **Fix the list.** Eight to twelve source values, each defined in one sentence. Add a dependent "source detail" field for the campaign or event name.
2. **Protect the field.** Make the source field read-only for users who do not need to edit it, as Salesforce Ben recommends. Corrections go through the RevOps owner.
3. **Ask the buyer.** Add an open "How did you hear about us?" question to enquiry forms and first calls. Record the answer alongside the tracked source.
4. **Fill account source.** Set a value on existing accounts, even "unknown", so later conversions do not overwrite history.
5. **Compare quarterly.** Put tracked source and self-reported source side by side. Large gaps show which channels tracking undercounts.
6. **Treat it as correlation.** Attribution shows where deals entered, not what caused them. Testing cause needs holdouts, covered in *Attribution vs incrementality*.

In **lowob**'s model, source is one of the eight store fields the brain reads. A fixed list and a protected value are what let an AI system group deals by source without inventing categories.

## lowob takeaways

- **One field, first touch.** The standard lead source field records origin, not the full journey.
- **Ask as well as track.** Self-reported source captures referrals and conversations that tracking cannot see.
- **Protect the original value.** Overwritten sources destroy the history the field exists to keep.
- **Do not read it as cause.** Attribution allocates credit; incrementality tests whether a channel made a difference.

## Common questions

### What is lead source attribution?

It is recording where each lead came from and carrying that source through to the opportunity and revenue, so channels can be compared by the business they produce.

### What is the difference between lead source and attribution?

Lead source is usually a single first-touch field. Attribution is the broader practice of assigning credit, which may spread it across several touches.

### What attribution models are left in GA4?

After Google's 2023 changes, data-driven and last-click attribution remain. First-click, linear, time-decay and position-based were removed.

### Is self-reported attribution reliable?

It is imperfect but useful. Buyers' answers capture channels like referrals and peer conversations that tracking misses, so it works best alongside tracked source.

## Sources and notes

- [Salesforce Ben, Let's Talk About Salesforce Lead Source](https://www.salesforceben.com/lets-talk-about-salesforce-lead-source), updated February 2024. Practitioner guide to the standard field and conversion mapping.
- [HubSpot Knowledge Base, HubSpot's default deal properties](https://knowledge.hubspot.com/properties/hubspots-default-deal-properties). Vendor documentation for Original Traffic Source and Record Source.
- [Google Ads Help, First click, linear, time decay, and position-based attribution models are going away](https://support.google.com/google-ads/answer/13427716), April 2023.
- [6sense via Business Wire, 6sense Launches 2024 Buyer Experience Report](https://www.businesswire.com/news/home/20241009142556/en/6sense-Launches-2024-Buyer-Experience-Report-Unveiling-Global-B2B-Buyer-Trends), October 2024. Vendor-run buyer survey.
- [Gartner, Gartner Says 80% of B2B Sales Interactions Between Suppliers and Buyers Will Occur in Digital Channels by 2025](https://gartner.com/en/newsroom/press-releases/2020-09-15-gartner-says-80--of-b2b-sales-interactions-between-su), September 2020.

## Related research

- [Attribution vs Incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [What Is Account-Based Marketing?](https://lowob.com/research/what-is-account-based-marketing/)
- [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/)

## Next Move

Pull the last 20 won deals and ask each owner how the client first heard of the firm. Compare the answers with the recorded lead source and count how many differ.

[Start a conversation](https://lowob.com/contact/)
