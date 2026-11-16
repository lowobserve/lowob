# The humans carrying context are the price signal

Source: https://lowob.com/research/the-humans-carrying-context-are-the-price-signal/
Publisher: lowob (https://lowob.com)
Published: 2026-09-24 · Updated: 2026-11-16
Function: Strategy

> Summary: Enterprises are paying forward-deployed engineers to carry the context their software cannot hold, and that spending is the clearest market price for a missing organisational record. Spend data shows the context layer underfunded relative to models. The fix is not removing the people but making their context a client-owned deliverable.

Enterprises are paying expensive people to carry the context their software cannot hold. Forward-deployed engineers, embedded consultants and integration teams spend most of their time on how a particular client's world works, not on models. That spending is the clearest market price for the missing layer, and the clearest specification of what it should contain. The practical move is not to remove the people but to make sure their context does not leave with them.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Read the role as a price

In our reading of the market, the forward-deployed engineer has become a standard part of how many AI vendors and integrators deliver. An engineer sits with the client, learns how the work is actually done, and makes the product function inside it. The role is expensive, and organisations keep paying for it.

Read that as a price. Organisations are paying, at high rates, for people whose job is to understand how a particular client's world works. Ashu Garg's December 2025 essay on context graphs makes the general point about every such role: "The org chart creates a role to carry the context that software doesn't capture." His examples are the support lead whose cross-system synthesis happens in their head, and the vice-president's approval given on a call or in a direct message. Neither reaches a system of record. "Salesforce knows what happened. It doesn't know why."

## What these people actually carry

Watch what a forward-deployed engineer spends their time on, and very little of it is model work. It is context. That list is a specification: it is what a durable organisational record would hold, if one existed. The engineer is, functionally, a walking judgment layer.

| What the engineer carries | Where it should live | Example entry |
| --- | --- | --- |
| How the data is actually shaped, as opposed to how the documentation says it is | Data quirks register | "Region field blank for accounts migrated before 2023; use billing country" |
| Which definitions differ between teams, and which is authoritative | Shared definitions | "Active customer: finance uses paid in 90 days; success uses logged in in 30" |
| Which exceptions matter and which are noise | Exceptions log | "Discounts above cap allowed for multi-year renewals, approved by the CFO" |
| What was tried before, and why it did not stick | Graveyard | "Automated renewal emails, stopped after complaints from top accounts" |
| Who decides what, and who must be consulted | Decision rights | "Pricing exceptions: head of sales decides, finance consulted" |
| Decisions made during the engagement, with reasons | Decision records | Status, reason, owner, date, what would change it |

Martin Fowler's description of an architecture decision record is a useful model for the last row. It captures the decision, its context, the alternatives and the consequences, so that people joining later can understand "why the system is constructed in the way that it is". Our explainers on [decision precedent](https://lowob.com/research/what-is-decision-precedent-in-ai/) and [systems of record](https://lowob.com/research/what-is-a-system-of-record/) cover the rest.

> The engineer is, functionally, a walking judgment layer. The question is whether anything is left when they walk.

## The spend split says the same

Menlo Ventures' bottom-up estimate of 2025 enterprise generative AI spend put $12.5 billion on foundation model APIs, and $1.5 billion on the infrastructure that "manages the storage, retrieval, and orchestration of data that connects LLMs to enterprise systems". Another $4.0 billion went on model training infrastructure. The estimate excludes chips, cloud inference and AI features built into existing software, and it reflects one investor's model of a US survey of 495 decision-makers, so the precise ratio should not be leaned on.

The direction is the point. The layer that holds context is funded at roughly an eighth of the models it feeds, and labour is filling the gap. Our walkthrough of [the context layer through one account](https://lowob.com/research/the-context-layer-followed-through-one-account/) shows what that layer does when it is built.

## Why this context is so hard to keep

Economists have a name for this kind of asset. Erik Brynjolfsson, Daniel Rock and Chad Syverson argue that general purpose technologies such as AI require large investments in complementary intangibles, including new processes, business models and worker skills, and that official statistics capture these poorly even when they create valuable firm assets. Context held by a deployment team is exactly such an intangible. It is built at real cost, it makes the technology work, and it appears on no balance sheet.

It is also fragile in a specific way. Group research going back to Stasser and Titus in 1985 shows that information held by only one member of a group is the least likely to be raised and recorded. Knowledge that lives in one engineer's head does not spread by being in the building.

And it cannot simply be poured into a model. Anthropic's engineering guidance treats context as "a finite resource with diminishing marginal returns" and advises finding "the smallest set of high-signal tokens" for each task. A transcript of everything the engineer ever said is not context. A structured record of definitions, exceptions and decisions is.

## Convert context into a deliverable

**If you buy forward-deployed work,** make the context record a contractual deliverable: a documented set of definitions, exceptions, data quirks, decisions and their reasons, owned by you and maintained throughout the engagement, not written in the final week. Measure the engagement partly by what it leaves behind. Our [build vs buy guide](https://lowob.com/research/build-vs-buy-ai-agents/) covers the wider contract questions.

**If you sell it,** measure how much faster your second deployment in a similar client is than your first, and why. If the answer is "because the same engineer remembered", the knowledge is still in a head, not a product. The risk is familiar from every services-heavy software model: high revenue, low margins, and growth limited by hiring.

| Measure | Buyer or seller | What a good result looks like |
| --- | --- | --- |
| Context record delivered and current | Buyer | Updated monthly, owned by a named client employee |
| Time to productive use for a new engineer on the same account | Buyer | Falls with each rotation |
| Second-deployment speed in a familiar segment | Seller | Faster, and explained by the record, not by the person |
| Share of client questions answered from the record | Both | Rising across the engagement |

## What would prove this wrong

Forward-deployed demand falling sharply as products mature, without any durable context record being built. Then the labour was transitional integration, not a missing layer.

## lowob takeaways

- **The role is a price signal.** Paying people to carry context is paying for a layer that does not exist yet.
- **Their work is a specification.** Data quirks, definitions, exceptions, history and decision rights are what the record needs.
- **The context layer is underfunded.** One 2025 estimate put it at about an eighth of model API spend.
- **Own the record.** Make it a named, client-owned deliverable, and treat context in one head as an operational risk.

## Sources and notes

- [Menlo Ventures, 2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/), 9 December 2025. Investor research; US survey of 495 decision-makers and a bottom-up market model; excludes chips and cloud inference.
- [Ashu Garg, AI's trillion-dollar opportunity: Context graphs](https://ashugarg.substack.com/p/ais-trillion-dollar-opportunity-context), 26 December 2025. Investor essay; argument, not evidence, and the investor backs companies in this space.
- [Brynjolfsson, Rock and Syverson, The Productivity J-Curve](https://www.nber.org/papers/w25148), NBER Working Paper 25148, 2018, revised 2020. Economy-wide analysis, not a study of deployment teams.
- [Stasser and Titus, Pooling of unshared information in group decision making](https://www.uni-muenster.de/imperia/md/content/psyifp/aeechterhoff/vorlesungkommunikation/stasser_titus_unsharedinfogroupdisc_jpsp1985.pdf), *Journal of Personality and Social Psychology*, 1985. Laboratory experiment with student groups.
- [Anthropic, Effective context engineering for AI agents](https://anthropic.com/engineering/effective-context-engineering-for-ai-agents), 29 September 2025. Vendor engineering guidance.
- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), 24 March 2026. Practitioner reference.
- The context and measures tables are **lowob**'s framework; example entries are illustrative.

## Related research

- [The context layer, followed through one account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [What is context engineering?](https://lowob.com/research/what-is-context-engineering/)
- [What is decision precedent in AI?](https://lowob.com/research/what-is-decision-precedent-in-ai/)
- [Build vs buy AI agents](https://lowob.com/research/build-vs-buy-ai-agents/)
- [Buy context, own judgment](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)

## Next move

If you have an integrator or deployment team on site, ask them this week for a one-page list of the data quirks and exceptions they have learned. If they cannot produce it, that is the deliverable to add to the contract.

[Start a conversation](https://lowob.com/contact/)
