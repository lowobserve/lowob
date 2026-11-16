# The 5 enterprise context platforms, ranked for regulated firms

Source: https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/
Publisher: lowob (https://lowob.com)
Published: 2026-10-23 · Updated: 2026-11-16
Function: Strategy

> Summary: Every vendor now calls this layer an "enterprise brain". What they actually sell is memory, meaning and governance: a context layer that connects a firm's documents, data and permissions to its AI agents. For a regulated firm the deciding questions are whether permissions follow the user, whether you can reconstruct what an agent saw and did, and whether you can leave with your context intact. Glean ranks first on evidence of real use across vendors, followed by Microsoft Work IQ, Google Gemini Enterprise, Writer's Enterprise Brain and Dust.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- This list is for heads of AI, data or risk choosing the layer between their systems and their agents. Vertical tools for one workflow, such as legal drafting or support tickets, are a different category.
- Glean reported $300 million in annual recurring revenue on 28 May 2026, 15 months after passing $100 million, with more than 85% of customers using it across five or more departments.
- Microsoft's Work IQ API became generally available on 16 June 2026; every request runs as a specific user, so it inherits every permission that user already has, including the wrong ones.
- Google's Gemini agent, announced on 8 October 2026, has the most complete design, but Google gave few availability dates and no pricing.
- Ask any vendor for one agent's full trace, a documented export and last week's active-user share.

Our explainer on [what an enterprise brain is](https://lowob.com/research/what-is-an-enterprise-brain/) sets out **lowob**'s view: the brain is a loop, not a product, and no single tool is the brain. The context layer is the wiring in that loop. **lowob**'s advice is to rent the wiring and own the record, which makes exit, not features, the first test of any vendor here. Our flagship piece [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/) makes the full argument.

## How we ranked

| Criterion | Weight | Why it matters |
| --- | --- | --- |
| Governance and permissions | 30% | Over-permissioning, not the model, is the largest real exposure in deployed copilots. |
| Evidence of real use | 25% | Weekly use and revenue, not seats sold or agents registered. |
| Auditability | 25% | Supervisors now expect the full chain of automated activity to be reconstructable. |
| Portability | 20% | Whether your context and decision history survive a change of vendor. |

The permissions criterion carries the most weight because of how these products work. Microsoft's own documentation states that Copilot "only surfaces organizational data to which individual users have at least view permissions", and tells customers to use the permission models in services such as SharePoint to make sure the right people have the right access. That is the correct design, and it means the agent is exactly as safe as the permissions underneath it. A folder shared too widely five years ago becomes an answer today. Our explainer on [permission-aware retrieval](https://lowob.com/research/what-is-permission-aware-retrieval/) covers what to check.

## The list

**1. Glean**

**Best for:** firms running more than one productivity suite, or that want a context layer independent of their suite vendor.

**Why it ranks first:** the strongest evidence of real use among independents. Glean announced $300 million in annual recurring revenue on 28 May 2026, 15 months after reaching $100 million. It says more than 85% of customers use it across five or more departments and that it holds a 45% ratio of weekly daily active to weekly monthly active users. Its site lists more than 275 connectors, and its platform now centres on a model hub and an MCP gateway, so it sits across vendors rather than inside one. Its developer documentation is specific on permissions: a document "is only returned to a user who is allowed to see it", checked at query time against allowed users and groups that should mirror the source system.

**Watch out for:** its claim that its context beats raw MCP tool access comes from its own benchmark, in which Glean says it was preferred about 2.5 times as often as off-the-shelf MCP tools, which used about 30% more tokens. A reported $7.2 billion valuation was not confirmed from a primary source.

**Pricing:** through sales; no public list price.

**What would change its rank:** the suite vendors' native layers matching it on cross-system coverage at no extra cost.

**2. Microsoft Work IQ (with Agent 365)**

**Best for:** firms standardised on Microsoft 365.

**Why it ranks here:** Microsoft announced the Work IQ API on 2 June 2026 with general availability on 16 June. It ships a REST API, A2A for agent-to-agent work and a redesigned remote MCP server that consolidates hundreds of operations into ten generic tools. Microsoft says "every request runs in the context of a specific user", with a policy engine enforcing finer rules on each request. API access does not require a Copilot licence; custom and third-party agents are billed on consumption. Agent 365 is the most developed agent registry on the market.

**Watch out for:** usage depth and inherited permissions. Microsoft has said there are 40 million agents deployed in its ecosystem, against about 30 million Copilot seats sold, according to an August 2026 report; neither figure measures weekly use, and the agent count was not defined. Because Work IQ runs as the user, it inherits every over-shared SharePoint permission that user holds. Audit the permissions before you connect agents, not after.

**Pricing:** consumption-based for custom and third-party agents; Microsoft says "Work IQ cost is variable based on what you are using".

**What would change its rank:** independent evidence of weekly use rising.

**3. Google Gemini Enterprise (the October 2026 Gemini agent)**

**Best for:** firms on Google Workspace, or those wanting the most complete memory design.

**Why it ranks here:** the 8 October launch maps most closely to how memory research describes the problem. The Gemini agent uses four memory types: session, semantic, procedural and episodic. A Knowledge Catalog maps business terms to metrics from connected data, so every agent uses "net margin" the same way. An Agent Gateway acts as what Google calls "an AI network firewall", and persistent coworker agents get their own Workspace identity, email, calendar and storage, so their actions are not logged as a human user's. Google says nearly 90% of the Fortune 100 use Gemini Enterprise.

**Watch out for:** it is weeks old. Futurum's analyst noted that "Google gave few general availability dates", and no independent production evaluation exists yet. The Fortune 100 figure is Google's own.

**Pricing:** not disclosed for most announcements. Google said it does not plan a per-seat licence for coworker agents in Workspace.

**What would change its rank:** published pricing and the first independent production reviews.

**4. Writer (Enterprise Brain)**

**Best for:** marketing, brand and content-heavy teams that want governed AI from a single vendor.

**Why it ranks here:** the first mainstream product sold under the "Enterprise Brain" name, unveiled on 9 September 2026 as "a governed, universal context layer" capturing brand knowledge, decision logic and live business data across teams and agents. A team-level Agent Memory layer, which captures decisions and preferences across sessions, launched alongside it and is generally available.

**Watch out for:** maturity. Enterprise Brain itself is in early access for selected customers, and we found no recent independent revenue or usage figure.

**Pricing:** not published.

**What would change its rank:** customer evidence outside content and marketing workflows.

**5. Dust**

**Best for:** mid-sized firms wanting shared, multiplayer agents quickly.

**Why it ranks here:** Dust has built its position on shared agents that teams create and use together, and reports high engagement among mid-sized customers. It suits firms that want agents in use within weeks rather than a platform programme.

**Watch out for:** fewer of the governance and audit features a large regulated firm will need. Dust's usage and funding figures are self-reported, and we could not re-verify them this month, so treat this placement as provisional.

**Pricing:** check directly; we could not open its pricing page this month.

**What would change its rank:** a large regulated reference customer, or verified usage figures.

## Side by side

|  | Glean | Microsoft Work IQ | Google Gemini Enterprise | Writer | Dust |
| --- | --- | --- | --- | --- | --- |
| Position | Independent, cross-suite | Inside Microsoft 365 | Inside Google Workspace and Cloud | Single-vendor governed AI | Mid-market shared agents |
| Permissions | Checked at query time against source ACLs | Every request runs as a named user | Agent Gateway; coworker agents with own identity | Governed layer, details not public | Not verified this month |
| Agent protocols | MCP gateway | MCP and A2A | Gateway for agents | Not verified | Not verified |
| Evidence of use | $300m ARR; 45% weekly active ratio | 40m agents deployed, undefined | "Nearly 90%" of Fortune 100, Google's figure | Early access | Self-reported |
| Availability | Generally available | Generally available since 16 June 2026 | Few dates given | Early access; Agent Memory GA | Generally available |
| Public pricing, November 2026 | No | Consumption, variable | Not disclosed | No | Not verified |

> An agent that runs as the user is exactly as safe as the permissions that user already has. Most firms have never audited them.

## Left out, and why

**Palantir.** Its ontology is the oldest working version of this layer, but it is a platform-plus-engineers engagement, not a product you choose from a list.

**Amazon Quick.** AWS's current product in this layer, which enforces document-level access controls in real time, according to an October 2026 AWS post. We did not find enough evidence of use to rank it.

**Memory-only vendors.** They store what an agent learns; they do not govern access to a firm's documents. See our list of [the five agent memory layers worth testing](https://lowob.com/research/the-5-agent-memory-layers-worth-testing-and-how-to-test-them/).

## Three questions to ask any vendor

1. **Show us an agent's full trace for one task:** what it retrieved, under whose permissions, and what a human changed. Our explainer on [AI audit trails](https://lowob.com/research/what-is-an-ai-audit-trail/) lists the fields that trace should hold, and our piece on [what regulators want](https://lowob.com/research/regulators-want-the-chain-not-the-model/) explains why the chain matters more than the model.
2. **Export our definitions, decisions and history in a documented format**, and show it reading back without your product.
3. **What share of your customers' users were active last week?** Seats sold and agents registered are not the same number.

## lowob takeaways

- **Glean ranks first on evidence of use.** $300 million in recurring revenue and a cross-vendor position, with permissions checked at query time.
- **Work IQ is permission-aware by design.** That makes your existing SharePoint permissions the real control.
- **Google has the best design and the least evidence.** Four memory types and a policy gateway, few dates and no pricing.
- **Rent the wiring, own the record.** Test the export before the demo.

Gateway card

### Buyer's checklist for an enterprise context platform

- Permissions are checked per request, as the user, against the source system
- Over-shared folders are found and fixed before agents are connected
- One agent task can be traced end to end: retrieval, permissions, human edits
- Definitions, decisions and history export in a documented format and read back elsewhere
- The vendor states last week's active-user share, not seats sold
- Pricing is modelled at ten times today's agent volume

## Common questions

### What is the best enterprise context platform for a regulated firm?

This list ranks Glean first for evidence of real use across vendors, followed by Microsoft Work IQ with Agent 365, Google Gemini Enterprise, Writer's Enterprise Brain and Dust. Firms standardised on one suite should test that suite's native layer first.

### What should regulated firms look for in an enterprise AI context layer?

Whether permissions follow the user on every request, whether you can reconstruct what an agent retrieved and did, and whether you can leave with your definitions, decisions and history in a documented format.

### Does Microsoft Copilot respect SharePoint permissions?

Yes. Microsoft states that Copilot only surfaces data a user has at least view permission to. That means any content shared too widely in SharePoint is available to that user's Copilot and agents, so permissions need auditing first.

### Why was Palantir left off the enterprise context platform list?

Its ontology is the oldest working version of this layer, but it is a platform-plus-engineers engagement, not a product you choose from a list.

## Sources and notes

- [Glean, Glean surpasses $300M ARR](https://glean.com/press/glean-surpasses-300m-arr-unrivaled-enterprise-context-fuels-ai-adoption), 28 May 2026. Vendor press release; engagement ratios and benchmark are self-reported.
- [Glean Developer Platform, Indexing SDK permissions](https://developers.glean.com/libraries/indexing-sdk/permissions), accessed November 2026. Vendor documentation.
- [Microsoft 365 Developer Blog, Work IQ: production-ready intelligence for every agent](https://devblogs.microsoft.com/microsoft365dev/work-iq-production-ready-intelligence-for-every-agent/), 2 June 2026. Vendor announcement.
- [Microsoft Learn, Data, privacy and security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot), accessed November 2026. Vendor documentation.
- [Cloud Wars, Microsoft hits 40 million AI agents](https://cloudwars.com/cloud-wars-ai-minute/microsoft-hits-40-million-ai-agents-what-it-means-for-enterprise-ai/), 7 August 2026. Trade commentary; figures attributed to Microsoft and not defined.
- [Futurum Group, Google collapses enterprise AI into a single Gemini agent](https://futurumgroup.com/?p=96545), 9 October 2026. Independent analyst commentary on a vendor launch.
- [CMSWire, WRITER launches Enterprise Brain to unify AI agent context](https://www.cmswire.com/customer-experience/writer-launches-enterprise-brain-to-unify-ai-agent-context/), September 2026. Trade press; product description is the vendor's own.
- [AWS Machine Learning Blog, Rethinking access control for RAG with Amazon Quick and Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/rethinking-access-control-for-rag-with-amazon-quick-and-amazon-bedrock/), 7 October 2026. Vendor-authored.
- The ranking criteria, weights and vendor questions are **lowob**'s framework.

## Related research

- [What is an enterprise brain?](https://lowob.com/research/what-is-an-enterprise-brain/)
- [What is permission-aware retrieval?](https://lowob.com/research/what-is-permission-aware-retrieval/)
- [What is an AI audit trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [The 5 agent memory layers worth testing, and how to test them](https://lowob.com/research/the-5-agent-memory-layers-worth-testing-and-how-to-test-them/)

## Next Move

Before any vendor demo, run a permissions report on your three most-shared SharePoint or Drive locations and list who can see them. Whichever platform you choose will hand those same permissions to every agent.

[Start a conversation](https://lowob.com/contact/)
