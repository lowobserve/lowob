# What Is Outcome-Based Pricing for AI?

Source: https://lowob.com/research/what-is-outcome-based-pricing-for-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-05-18 · Updated: 2026-11-16
Function: Revenue

> Summary: Outcome-based pricing charges for a measured result rather than for access or volume. Customer-service AI vendors have led, charging per resolution. It aligns cost with value only when both sides can measure and trust the result, so the buyer's main task is to read, test and audit the vendor's definition of an outcome.

Outcome-based pricing for AI charges only when the AI delivers a defined result, such as a support ticket resolved without a human. It is the most attractive pricing model for buyers and the hardest to run, because everything depends on how the outcome is defined and who measures it. Customer service is where it works today. Elsewhere, it is still rare.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

## What outcome-based pricing means

Seats charge for access. Usage charges for volume. Outcome-based pricing charges for a result. Bret Taylor, co-founder of Sierra, described it in 2025 as paying for "a job well done". At Sierra, customers pay when the AI agent resolves an issue, and pay nothing when it escalates to a human.

Customer service leads because the outcome is countable. A conversation either ended with the customer's problem solved or it did not, and the vendor's own software sees both. Zendesk's August 2024 announcement said customers would incur costs only for issues resolved autonomously by AI, with a starter allowance included in its plans.

Intercom publishes its definition in detail, and it shows how a unit can move. Until March 2026 Fin was charged at $0.99 per resolution, counted when the customer confirmed the answer helped or left without asking for more help. On 12 March 2026 Intercom switched the billable unit to the "outcome", priced from $0.99, which covers resolutions, procedure handoffs to a person or workflow, and qualification results, while a customer simply asking for a human is not billed. A buyer who signed for resolutions now pays for a wider set of events, which is why the definition belongs in the contract. Our guide to [AI pricing models](https://lowob.com/research/seats-usage-or-outcomes/) covers the contract terms. Intercom renamed itself Fin in May 2026, and on 15 June 2026 Salesforce signed a definitive agreement to acquire it for about $3.6 billion.

|  | Seat | Usage | Outcome |
| --- | --- | --- | --- |
| Charges for | Named users | Volume: actions, credits, tokens | A defined result |
| Fits when | A person uses it daily | Value scales with volume | The result is countable and attributable |
| Who carries delivery risk | Buyer | Buyer | Vendor |
| Main buyer risk | Unused seats | Bill shock | A loose outcome definition |
| Where it is common | Assistants and suites | Agent platforms, APIs | Customer-service AI |

## Why it matters for a commercial team

Outcome pricing moves the risk of the AI failing from buyer to vendor. That is real value. A support team paying per resolution does not pay for an agent that loops or hands everything back.

It also moves the argument to the definition. Intercom's "assumed resolution" is a reasonable design choice, and it shows the issue: a customer who gives up and phones instead may count as resolved. The buyer has to check a sample of charged outcomes against what happened next. If either side can dispute the number, the model breaks.

Outside customer service, outcomes are harder to define. A qualified lead, a won deal or a renewed account has many causes, arrives weeks later and is measured in systems the vendor does not control. Gartner noted in July 2026 that current outcome-oriented agentic solutions typically require heavy services engagement. Deloitte's 2026 predictions say widespread outcome-based pricing is still a long way off, and expect hybrids combining licences with usage or outcome fees to become standard.

## What to check before you sign

| Check | What to ask | Why |
| --- | --- | --- |
| Definition | What exactly counts as an outcome, in writing? | Everything else follows from it |
| Measurement | Whose system records it, and can we export the raw events? | You need to audit the count |
| Exclusions | What is not charged: escalations, repeats, spam? | Exclusions drive the effective price |
| Reversal | Is a charge reversed if the problem returns? | Protects against shallow resolutions |
| Audit right | Can we sample charged outcomes each month? | Catches drift in the definition |
| Floor and cap | Is there a minimum fee, and a maximum? | Hybrids often hide a platform fee |

Then run your own check for a month. Sample 50 charged outcomes and follow each one forward: did the customer come back, call in or churn? Compare the effective cost per real outcome with your current cost per ticket handled by a person, including review time. Outside the support queue, the default for anything client-facing remains that nothing sends without a person.

## lowob takeaways

- **You pay for results.** The vendor carries the risk of the AI failing.
- **The definition is the contract.** Read it, test it and audit a sample monthly.
- **Customer service is the proven case.** Resolutions are countable; most commercial outcomes are not yet.
- **Expect hybrids.** A platform fee plus an outcome charge is the common shape.

## Common questions

### What is outcome-based pricing in AI?

A pricing model where the buyer pays only when the AI delivers a defined result, such as a resolved support conversation, rather than per user or per unit of usage.

### How much does Intercom Fin cost per resolution?

Intercom now bills Fin per outcome, from $0.99, rather than per resolution. Since 12 March 2026 an outcome includes resolutions and some procedure handoffs; a customer asking for a human is not billed. Check the current definition before you sign.

### Which companies use outcome-based pricing for AI agents?

Customer-service vendors have led, including Intercom, Zendesk and Sierra. Each charges for conversations or issues resolved by AI.

### What are the risks of outcome-based pricing?

A loose definition of the outcome, measurement held only in the vendor's system, and hidden platform fees. Buyers should secure audit rights and sample charged outcomes.

## Sources and notes

- [Salesforce, Salesforce signs definitive agreement to acquire Fin](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/), 15 June 2026. Vendor press release; Fin is the former Intercom.
- [Intercom Help Center, Understanding Fin outcomes](https://www.intercom.com/help/en/articles/13513868-understanding-fin-outcomes), accessed 16 November 2026. Vendor documentation; the outcome definition and the March 2026 change.
- [Intercom Help Center, Fin pricing and resolutions](https://www.intercom.com/help/en/articles/8205718). Vendor documentation; definitions may change.
- [Zendesk, Outcome-based pricing announcement](https://zendesk.co.uk/newsroom/articles/zendesk-outcome-based-pricing), 28 August 2024. Vendor announcement; no prices stated.
- [Inference by Sequoia, How AI is reinventing software business models, with Bret Taylor](https://inferencebysequoia.substack.com/p/how-ai-is-reinventing-software-business), May 2025. Founder interview.
- [Gartner, $234 billion in enterprise application software spend at risk from agentic AI](https://www.gartner.com/en/newsroom/press-releases/2026-07-01-gartner-says-us-dollars-234-billion-in-enterprise-application-software-spend-is-at-risk-from-agentic-artificial-intelligence), 1 July 2026. Analyst view.
- [Deloitte, TMT Predictions 2026: SaaS and AI agents](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/saas-ai-agents.html). Forecast.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [Which AI Assistant, Which Seats](https://lowob.com/research/which-ai-assistant-which-seats/)
- [Attribution vs Incrementality: What Did Your Marketing Actually Cause?](https://lowob.com/research/attribution-vs-incrementality/)
- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)

## Next move

If you pay any AI vendor per outcome, pull 50 charged outcomes from last month and check what happened to each customer afterwards. The share that came back is your real price adjustment.

[Start a conversation](https://lowob.com/contact/)
