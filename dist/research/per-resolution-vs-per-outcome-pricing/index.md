# Per-Resolution vs Per-Outcome Pricing: What Changed and What to Check

Source: https://lowob.com/research/per-resolution-vs-per-outcome-pricing/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Revenue

> Summary: Per-resolution pricing charges when an AI agent solves the customer's problem. Per-outcome pricing charges for a wider list of results, including handoffs and lead qualification. In 2026 Intercom moved Fin to outcomes and Zendesk moved to verified resolutions, in opposite directions. Buyers should recount last month's conversations under the new rules before renewal.

Per-resolution pricing charges only when an AI agent solves the customer's issue; per-outcome pricing charges for a wider set of results, which at Intercom since 12 March 2026 includes resolutions, procedure handoffs, qualifications and disqualifications, from $0.99 each. Zendesk moved the other way in May 2026, billing only resolutions its own model verifies. The unit's definition sets the price.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

Outcome-based pricing, explained in [what outcome-based pricing for AI is](https://lowob.com/research/what-is-outcome-based-pricing-for-ai/), charges for results rather than seats or volume. **lowob**'s pricing hub, [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/), sets out when it fits. This page covers one detail that now decides the bill: what counts as a result.

## What is the difference between per-resolution and per-outcome pricing?

A resolution is one kind of result: the customer's problem is solved. An outcome, in Intercom's 2026 definition, is any of several results Fin completes, including passing a case to a person through a configured procedure. Per-outcome pricing therefore bills more events than per-resolution pricing, at the same or a higher unit price. Intercom renamed itself Fin in May 2026, and on 15 June 2026 Salesforce signed a definitive agreement to acquire it for about $3.6 billion.

|  | Intercom Fin (outcomes) | Zendesk AI agents (resolution tiers) | Sierra (resolutions) |
| --- | --- | --- | --- |
| Billable unit | Outcome: resolution, procedure handoff, qualification, disqualification, self-serve routing | Verified resolution | Issue the agent resolves |
| Who decides it counted | Customer confirms, or does not ask for more help | A language model reviews the conversation text | Not published |
| Not billed | Customer asks for a human; procedure failures; spam; abandoned conversations | Assisted escalations; contained resolutions | Escalations to a human |
| Counting window | Not stated in the article | Email 72 hours, messaging 2 hours by default, voice at hang-up | Not published |
| Published price | $0.99; qualification $9.99 | Through sales | Through sales |
| Since | 12 March 2026 | 18 May 2026 | Described in May 2025 |

Sources: Intercom and Zendesk help centres, checked 16 November 2026; Sierra as described in Inference by Sequoia, 8 May 2025.

## What changed at Intercom in March 2026?

Intercom widened the billable unit from resolutions to outcomes on 12 March 2026. Its help article says pricing "will vary by type", and a second Intercom article lists $0.99 for a resolution, procedure handoff, disqualification or self-serve routing, and $9.99 for a qualification.

A resolution still has two forms, both billable. A confirmed resolution is when the customer "explicitly confirms Fin helped". An assumed resolution is when the customer "doesn't ask for more help after Fin's answer". The new categories add events that are not resolutions: a procedure handoff, for example, is when "Fin successfully executes a Procedure that you've configured to end in a handoff to a human or a workflow".

Intercom also lists what is never billed. Escalations from Fin's default behaviour, such as a customer asking for a human or showing frustration, do not count, and neither do procedure failures. Its article states: "You will never be charged for an outcome that didn't happen."

## How does Zendesk count resolutions now?

Zendesk narrowed its unit. Since 18 May 2026, every conversation lands in one of three tiers: an assisted escalation, where "a human agent completed the resolution"; a contained resolution, where the customer did not ask for more help; or a verified resolution, which passes a check "performed by an LLM". Only verified resolutions are paid from the allowance.

Note the contrast. Intercom bills the case where a customer leaves without asking for more help as an assumed resolution. Zendesk's contained resolution, broadly the same event, is not drawn from the allowance unless the model verifies it. Zendesk's older platform, still in place for accounts not yet moved, included 5 to 15 automated resolutions per agent per month by plan, capped at 10,000 a year, with overage billed monthly.

## Which is better for buyers, resolution or outcome pricing?

Neither by default; the better contract is the one whose unit you can audit. A narrow unit costs less per event but depends on the vendor's verifier. A broad unit is easier to count but bills events, such as handoffs, that a buyer may not call success.

Buyers are cautious. Futurum's April 2026 release found preference for outcome-based GenAI pricing fell 4.1 points to 26.8%, which it linked to uncertainty about how to define and measure AI outcomes. Sellers are moving the other way: ICONIQ's July 2026 report found outcome-based pricing rose from 18% to 23% of AI companies in six months.

## How much does a change of unit cost?

Recount last month's conversations under the new definition. The example is illustrative.

| Conversation result (10,000 a month) | Count | Billed per resolution | Billed per outcome |
| --- | --- | --- | --- |
| Resolutions, confirmed or assumed | 5,000 | $4,950 | $4,950 |
| Procedure handoffs to a person | 800 | $0 | $792 |
| Disqualifications | 200 | $0 | $198 |
| Customer asked for a human | 1,500 | $0 | $0 |
| Other, not billed | 2,500 | $0 | $0 |
| Monthly total at $0.99 |  | $4,950 | $5,940 |

The bill rises 20% with no change in what the agent does. The price per actual resolution moves from $0.99 to about $1.19. If you also use Fin for sales qualification, each qualification adds $9.99.

## What should you check before you renew?

Ask for the definition in the order form, not a help-centre link, and recount a month under it. The [top 5 AI customer-service agents by pricing model](https://lowob.com/research/top-5-ai-customer-service-agents-by-pricing-model/) compares vendors on the same questions.

- Which events are billable, in one sentence each, and which are excluded.
- Who decides an event counted: the customer's behaviour or the vendor's model.
- When a conversation is final, and whether a reopened case reverses the charge.
- How much notice you get before the unit changes, and whether the old unit holds until renewal.
- Whether you can export the raw events behind each charge.

[How to negotiate an AI software contract](https://lowob.com/research/how-to-negotiate-an-ai-software-contract/) sets out fallback positions for each.

## lowob takeaways

- **An outcome is not a resolution.** Intercom's unit now includes handoffs and disqualifications.
- **Narrow units need trusted verifiers.** Zendesk bills only what its own model verifies.
- **Recount before renewal.** Apply the new definition to last month's conversations.
- **Put the definition in the contract.** Help pages can change; order forms cannot without notice.

## Common questions

### What is the difference between per-resolution and per-outcome pricing?

Per-resolution pricing charges when an AI agent solves the customer's issue. Per-outcome pricing charges for a wider set of results. At Intercom, since 12 March 2026, an outcome includes resolutions, procedure handoffs to a person or workflow, qualifications and disqualifications, priced from $0.99, so the same conversations can produce a larger bill.

### How much does Intercom Fin cost per outcome?

Intercom's help centre, checked in November 2026, lists $0.99 for a resolution, procedure handoff, disqualification or self-serve routing, and $9.99 for a qualification. Fin is charged at most once per conversation. Customers asking for a human, procedure failures, spam and abandoned conversations are not billed. Check the current list before signing, since it changed in March 2026.

### What is a verified resolution in Zendesk?

A verified resolution is a conversation that a large language model, reviewing the text after it ends, judges to have satisfactorily resolved the customer's request. Since 18 May 2026 only verified resolutions draw on the Zendesk allowance. Assisted escalations and contained resolutions, where the customer simply did not ask for more help, do not.

### Is outcome-based pricing cheaper than per-resolution pricing?

Not necessarily. Outcome pricing usually bills more events, so the total can rise even at the same unit price. In **lowob**'s illustrative recount, adding handoffs and disqualifications raised a $4,950 month to $5,940, 20% more. Compare the price per actual resolution, which in that example rose from $0.99 to about $1.19.

## Sources and notes

- [Salesforce, Salesforce signs definitive agreement to acquire Fin](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/), 15 June 2026. Vendor press release; Fin is the former Intercom.
- [Intercom Help Center, Understanding Fin outcomes](https://www.intercom.com/help/en/articles/13513868-understanding-fin-outcomes), accessed 16 November 2026. Vendor documentation; effective date, outcome types and exclusions.
- [Intercom Help Center, Fin AI Agent outcomes](https://www.intercom.com/help/en/articles/8205718), accessed 16 November 2026. Vendor documentation; per-type prices.
- [Intercom, Pricing](https://www.intercom.com/pricing), accessed 16 November 2026. Vendor pricing page.
- [Zendesk Help Center, About automated resolution tiers](https://support.zendesk.com/hc/en-us/articles/9570369117338-About-automated-resolution-tiers), accessed 16 November 2026. Vendor documentation; no prices given.
- [Zendesk Help Center, About automated resolutions for AI agents](https://support.zendesk.com/hc/en-us/articles/5352026794010-About-automated-resolutions-for-AI-agents), accessed 16 November 2026. Vendor documentation for the platform used before 18 May 2026.
- [Inference by Sequoia, How AI is reinventing software business models, with Bret Taylor](https://inferencebysequoia.substack.com/p/how-ai-is-reinventing-software-business), 8 May 2025. Investor newsletter; Sierra's model as described by the author.
- [The Futurum Group, 42.9% of buyers prefer consumption pricing for GenAI](https://futurumgroup.com/press-release/42-9-of-buyers-prefer-consumption-pricing-for-genai-reject-it-for-core-saas/), 10 April 2026. Analyst press release; 830 IT decision makers.
- [ICONIQ, 2026 State of AI Report](https://iconiq.com/growth/reports/state-of-ai-2026), July 2026. Investor research; about 300 executives.
- The recount is **lowob**'s illustration; the conversation mix is assumed.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [What Is Outcome-Based Pricing for AI?](https://lowob.com/research/what-is-outcome-based-pricing-for-ai/)
- [Top 5 AI Customer-Service Agents, by Pricing Model](https://lowob.com/research/top-5-ai-customer-service-agents-by-pricing-model/)
- [How to Negotiate an AI Software Contract: Caps, Credits and Outcome Terms](https://lowob.com/research/how-to-negotiate-an-ai-software-contract/)
- [The Humans Carrying Context Are the Price Signal](https://lowob.com/research/the-humans-carrying-context-are-the-price-signal/)

## Next move

Export last month's AI agent conversations and sort them into the vendor's current billable categories. Compare that total with what you budgeted at renewal, and take the difference into the next pricing conversation.

[Start a conversation](https://lowob.com/contact/)
