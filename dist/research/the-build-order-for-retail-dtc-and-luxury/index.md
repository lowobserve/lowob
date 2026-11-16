# The Build Order for Retail, DTC and Luxury

Source: https://lowob.com/research/the-build-order-for-retail-dtc-and-luxury/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Growth

> Summary: In retail, DTC and luxury the order holds, but client consent governs what can be connected. GDPR's absolute right to object to direct marketing, California's new CCPA regulations and twenty US state privacy laws set the outer limit; what clients told an adviser in confidence sets a tighter one. The first record is who was invited or offered what, and the first agent prompts advisers rather than writing to clients.

The Build Order holds in retail, DTC and luxury, but client consent governs what can be connected. The commercial line runs through clienteling: advisers, their client books and the decisions about who to invite, what to offer and when. The law sets the outer limit on that context. GDPR gives people an absolute right to object to direct marketing, including profiling; California's updated CCPA regulations took effect on 1 January 2026; and twenty US states have comprehensive privacy laws in effect this year. What clients told an adviser in confidence sets a tighter limit still. The first agent prompts the adviser. It never writes to the client.

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

Retail is the sector where the gap between what a company could connect and what it should connect is widest. A DTC brand can join web sessions, email engagement, order history and loyalty data into one profile in an afternoon. A luxury house can, in principle, ingest years of adviser notes and messaging threads. The capability is not the constraint. Consent is, and so is the client's sense that a relationship with a person has not become a relationship with a database.

This edition runs the full sequence (Gateway 0, tooling, context, record, reasoning and Gateways 1 to 3) for brands of 20 to 500 people: DTC labels, specialist retailers and luxury houses with boutiques and a wholesale arm. Part 10 tested the sequence on a composite jeweller. This piece generalises it to the sector and sets out the consent rules as they stand in 2026.

## Where the commercial line sits

In retail the commercial line depends on the price point. For a mass DTC brand it runs through campaigns, segments and offers, decided weekly by a growth team. For a luxury house it runs through people: client advisers who know a few hundred clients each, and the decisions about who sees a new piece first.

The luxury economics explain why those decisions matter. Bain and Altagamma's 2025 study put the personal luxury goods market at about €358bn, largely flat for the year, with the customer base falling to about 340 million from 400 million in 2022. Bain expects growth of 3% to 5% in 2026 and warned that persistent price increases have left some customers feeling "betrayed". With fewer clients, each relationship carries more of the revenue, and each decision about a client carries more risk.

Clients are already using AI themselves. McKinsey's May 2026 research on luxury in the agentic age reported that 85% of luxury consumers in its sample use a general-purpose AI assistant for shopping decisions, while only 29% prefer to use AI shopping tools in stores. McKinsey treats those figures as directional because the luxury sample was small. Its conclusion is the useful part: human judgment should stay at the point of purchase commitment, and AI should give advisers context rather than replace them.

| Industry lens | Retail, DTC and luxury |
| --- | --- |
| Where the commercial line sits | DTC: campaigns, segments and offers. Luxury: clienteling, previews, allocation of scarce pieces |
| The store | Commerce platform, clienteling app or CRM, point of sale, email and SMS platform |
| What makes it harder | Adviser knowledge lives in personal notes and messaging apps |
| Outcome lag | Days for a DTC campaign; a season for clienteling |
| Who defends the decision | Head of retail or clienteling, growth lead, store directors |
| The sector's wall | What clients told an adviser in confidence, and data without a lawful basis for marketing |
| Regulatory pressure | GDPR and UK GDPR, CCPA as amended, twenty US state privacy laws |

## Consent decides what connects

Most sectors in this series have a regulator or a professional rule that draws the wall. In retail the wall is drawn by the client's consent, and the rules differ by market. A brand selling in Europe and the US needs to design for the strictest of them.

**Europe and the UK.** The UK Information Commissioner's Office describes the right to object to direct marketing as effectively absolute: if someone objects, the business must stop, and there are no grounds on which it can refuse. The right covers profiling for direct marketing too, and the ICO's own example is using location data to infer what products someone might want. A clienteling agent that scores clients for a preview is profiling for direct marketing. A client who has objected must drop out of it entirely. The ICO recommends keeping a suppression list rather than deleting the record, so the objection survives the next data import.

**California.** The California Privacy Protection Agency's updated regulations took effect on 1 January 2026. They cover risk assessments, cybersecurity audits and automated decisionmaking technology. Risk assessment obligations began on 1 January 2026, with attestations due by 1 April 2028. Businesses using automated decisionmaking technology for significant decisions must comply from 1 January 2027. A brand should check with counsel whether any clienteling or offer logic falls within that definition before the agent is built, not after.

**Other US states.** MultiState counted twenty states with comprehensive privacy laws in effect in 2026, three of which (Indiana, Kentucky and Rhode Island) took effect on 1 January. These laws give consumers rights to opt out of targeted advertising, sale of their data and certain profiling, and generally require opt-in consent to process sensitive data. Rhode Island's law carries penalties of up to $10,000 per violation with no cure period.

| Consent question | What it means for the wiring |
| --- | --- |
| Has the client objected to direct marketing? | Excluded from every prompt and segment, kept on a suppression list |
| Did the client opt in to adviser contact? | Only then can adviser outreach history join the context layer |
| Is any field sensitive data (health, for example sizes linked to a medical need)? | Opt-in required under most US state laws; leave out by default |
| Was the data collected for service, not marketing? | Alterations and repairs history stays in service unless the notice covers marketing |
| Does the logic make a significant decision about a person? | Check against California's ADMT rules, applicable from 1 January 2027 |

> In retail, the context layer is only as wide as the client's consent. The record of who was invited and why is what the brand owns.

## The wall: the adviser's private knowledge

The law sets the outer limit. The sector's wall sits inside it.

Luxury advisers hold knowledge no system was given: a client's anniversary, who a gift was for, a partner's name, a preference mentioned once at a fitting. Much of it lives in personal phones and messaging apps. Taylor Wessing's employment analysis of digital clienteling notes that advisers contacting clients by text and WhatsApp gives them direct access to client details, that employers must ensure that data is protected and that clients know how it will be used, and that customers may follow an adviser who leaves. It also notes that non-solicitation terms are easier to enforce where communication happens on work devices.

That creates a tension the build has to resolve deliberately. The brand has a legitimate interest in moving client relationships onto its own systems, so they survive an adviser's departure. It has no licence to ingest everything an adviser knows. The rule we use:

- **Connect** order history, preview attendance, stated preferences the client recorded through the brand, and outreach logged on brand channels.
- **Move, then connect** adviser contact onto a brand-owned messaging channel with a clear notice, rather than scraping personal threads.
- **Never connect** private confidences, notes about third parties such as gift recipients, and anything the client shared with a person rather than the brand.

## The build order, stage by stage

| Stage | What it means in retail and luxury | The main risk |
| --- | --- | --- |
| Gateway 0 | An owner in clienteling or growth, the suite of record, and one client record used in boutiques and online | Advisers keeping their real client book outside the system |
| Tooling | Assistant seats for clienteling leads and the growth team, not every store associate | Seats issued before the client record is trusted |
| Context | Order history, preview attendance, consented preferences, brand-channel outreach | Ingesting personal messaging threads and adviser notes wholesale |
| Record | Preview invitations, allocation of scarce pieces and offer decisions, each with reason and owner | Recording the invitation but not why that client was chosen |
| Reasoning | A first agent that prompts advisers: an anniversary near, a requested piece in stock | Agent-written messages going straight to clients |
| Gateway 1 | Nothing reaches a client that an adviser did not write | Approval becoming a click on a draft the adviser never read |
| Gateway 2 | Sales within 90 days of each invitation or offer written back to the decision | Crediting the agent for purchases the adviser would have made anyway |
| Gateway 3 | The record extends to merchandising and wholesale allocation | Client-level data flowing into wholesale or dealer conversations |

**The record.** The first record is the decision to invite or offer: who was invited to a preview, who was offered a scarce piece, who received a private appointment, and why. These decisions recur every season, resemble each other and are graded within one: the client bought, or did not. In DTC the equivalent is the offer decision, which segment received which discount and whether it changed behaviour, and the lag is days rather than a season. Part 9 covers which decisions to record and *The field that makes a record a judgment* covers the reason field, which is where most retail records are thinnest.

**The first agent.** For luxury it prompts the adviser and sits at level 0 or 1 on the autonomy dial: it answers questions and drafts notes for the adviser's own use. It does not draft messages to clients. For a DTC growth team the first agent can sit one step higher, drafting segment briefs and offer rationales for a person to approve, because the outcome lag is short and the relationship is with the brand rather than an adviser.

Composite example: a luxury house moves the client book in-house

Decision
:   Move adviser outreach onto a brand-owned messaging channel over one season, and connect only that channel, order history and recorded preferences to the clienteling context layer.

Reason and owner
:   Two senior advisers had left with client relationships held on personal phones, and the brand could not show clients had agreed to their adviser notes being used for marketing. Owned by the head of clienteling, with the data protection lead.

What changed
:   Preview invitations are now recorded with a reason, and objection status is checked before any prompt. Advisers keep their own private notes outside the system, by agreement.

Illustrative: a composite of a luxury house of around 200 people with boutiques and a wholesale arm, built from patterns across engagements.

## The gateways in retail

**Gateway 1, in reverse.** In most sectors the gate guards against a bad message. In luxury it also guards against a good relationship starting to feel automated. That is why the rule is stricter than "nothing sends without a person": nothing reaches a client that the adviser did not write. A brand that lets advisers approve agent drafts with one click will see approval rates rise and relationships thin. *Approval rate measures fatigue too* explains how to tell the difference.

**Gateway 2: a dollar figure on every decision.** Each invitation or offer carries the value at stake and the outcome within a set window, such as 90 days. The hard part is attribution. Many top clients would have bought anyway, so the honest comparison is against similar clients who were not invited. *Attribution vs incrementality* sets out the method.

**Gateway 3: commercial is ready to share its brain.** Merchandising wants to know which pieces were requested and not available; wholesale wants allocation signals. Both are legitimate uses of aggregate data. Neither needs a named client. Before the record extends, decisions and outcomes should be shareable as aggregates, with client identity staying in clienteling.

## lowob takeaways

- **Consent sets the width of the context layer.** Design for the strictest market you sell into, and keep objections on a suppression list.
- **Record who was invited and why.** Preview, allocation and offer decisions are frequent, similar and graded within a season.
- **Move the client book before connecting it.** Bring adviser contact onto brand channels with a notice; do not scrape personal threads.
- **Keep the first agent low on the dial.** It prompts advisers. Nothing reaches a client that an adviser did not write.

Gateway card

### Before a retail or luxury brand connects its client data

- Objection and opt-in status available as fields and checked before any prompt or segment
- Sensitive data identified and excluded by default
- Adviser outreach moving to a brand-owned channel with a clear notice
- Preview, allocation and offer decisions recorded with reason, owner and value at stake
- A written rule that no agent drafts messages to clients

## Sources and notes

- Bain and Altagamma, Luxury Study 2025, as reported by [Cyprus Mail](https://cyprus-mail.com/2025/11/20/luxury-sector-to-revive-in-2026-but-price-hikes-leave-shoppers-betrayed), 20 November 2025. Consultancy estimates; market size and customer counts are modelled.
- [McKinsey, When AI meets desire: luxury experiences in the agentic age](https://www.mckinsey.com/industries/retail/our-insights/when-ai-meets-desire-innovating-human-centered-luxury-experiences-in-the-agentic-age), 29 May 2026. Luxury sub-sample is small and McKinsey treats it as directional.
- [ICO, Respect people's preferences (direct marketing guidance)](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/respect-peoples-preferences). UK regulator guidance; EU GDPR Article 21 is materially similar.
- [California Privacy Protection Agency, finalised regulations announcement](https://www.cppa.ca.gov/announcements/2025/20250923.html), 23 September 2025. Regulator announcement; read the regulations for definitions.
- [MultiState, comprehensive privacy laws that take effect in 2026](https://multistate.us/insider/2026/2/4/all-of-the-comprehensive-privacy-laws-that-take-effect-in-2026), 4 February 2026. Policy tracker; the count includes Florida's narrower law.
- [Koley Jessen, new state privacy laws effective 1 January 2026](https://www.koleyjessen.com/insights/publications/new-state-privacy-laws-effective-january-1-2026-indiana-kentucky-and-rhode-island). Law firm summary of thresholds and penalties, not legal advice.
- [Taylor Wessing, protecting customer relationships in digital personal retail](https://www.taylorwessing.com/en/insights-and-events/insights/2022/05/protecting-customer-relationships-and-the-digital-personal-retail-experience---the-employment-risks), May 2022. UK employment law perspective; older than the other sources but the principles stand.
- The stage table, consent table and example are **lowob**'s illustration, drawn from patterns across engagements. None of this is legal advice.

## Related research

- [The same build in four industries](https://lowob.com/research/the-same-build-in-four-industries/)
- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/)
- [Attribution vs incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [Approval rate measures fatigue too](https://lowob.com/research/approval-rate-measures-fatigue-too/)

## Next move

Pull the list of clients invited to your last preview. For how many can you show the reason they were chosen and their current consent status? Fix both before any agent reads the list.

[Start a conversation](https://lowob.com/contact/)
