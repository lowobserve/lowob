# The First Two-Fifths

Source: https://lowob.com/research/the-first-two-fifths/
Publisher: lowob (https://lowob.com)
Published: 2026-08-17 · Updated: 2026-11-16
Function: Strategy

> Summary: What has shipped as an "enterprise brain" is the context layer: knowledge and governance, the easy two-fifths of the idea, with meaning built in a few places. Memory is arriving as a feature but does not yet track change, and judgment is skipped, because nothing in the stack writes an outcome back to a decision.

What has shipped as an "enterprise brain" is the context layer. It is the easy two-fifths of the idea, and it is the part being paid for. Data owners sell knowledge into other firms' agents, software incumbents sell governance, and meaning is being built in a few places. Memory is arriving as a feature but, on the benchmarks, does not yet track how facts change. Judgment is skipped. The missing pieces share one root cause: nothing in the stack writes an outcome back to a decision.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Five components, and how they map to the build

Take the full promise apart and it has five components. **Knowledge**: the documents, data and definitions the organisation holds. **Memory**: what happened, across sessions and people. **Meaning**: a semantic layer that makes terms consistent across agents. **Governance**: permissions, identities and audit. **Judgment**: how the organisation decides, and whether it decided well.

In 2026 the market built the first and the fourth with real money behind them, built the third in a few places, and largely skipped the second and fifth. The second needs a qualification: memory is sold as a feature, but not yet as memory that spans time.

The Build Order describes the same system as layers in build order. The vocabularies reconcile as follows.

| Component (this piece) | Build Order layer | Who sells it in 2026 | Own or rent |
| --- | --- | --- | --- |
| Knowledge | Store, reached through the wiring | Data owners, suite vendors | Rent |
| Memory | Store, read over time; agent memory in the reasoning layer | Context platforms, memory start-ups | Rent the tool, check it tracks change |
| Meaning | Wiring: shared definitions | Data platforms, a few consultancies | Rent the layer, own the definitions |
| Governance | Wiring, plus the approval gate | Software incumbents | Rent |
| Judgment | Record, plus learning | Nobody | Own |
| Not listed | Reasoning | Model and agent vendors | Rent |

Reasoning is missing from the component list because it is the model, which every firm already rents. The [enterprise brain explainer](https://lowob.com/research/what-is-an-enterprise-brain/) covers the five layers.

## What the market built in 2026

The figures below are the vendors' own, from earnings calls and launches, as dated.

| Component | Who | Date | What was reported |
| --- | --- | --- | --- |
| Knowledge | FactSet | 1 Jul 2026 | Over 10% of ASV growth from AI products; over 450 clients on its MCP server under contract or trial; API call volume 13 times the prior quarter |
| Knowledge | S&P Global (Kensho) | Q2 2026 results, July 2026 | Over 500 customers on LLM-ready APIs and MCP-connected solutions, up more than 70% in a quarter |
| Governance | Microsoft Agent 365 | 29 Jul 2026 | "Nearly 40 million agents registered across tens of thousands of companies" two months in |
| Governance | ServiceNow AI Control Tower | 6 May 2025 | One place to govern "any ServiceNow and third-party AI agent, model, and workflow" |
| Governance | Workday Agent System of Record | 11 Feb 2025 | One hub for agents managed by Workday or third parties, with access, cost and on/off controls |
| Meaning | Open Semantic Interchange | 23 Sep 2025 | Snowflake, Salesforce, dbt Labs, BlackRock and others on a vendor-neutral standard for semantic metadata |
| Meaning | McKinsey Lilli | Aug 2023 onwards | 40+ curated sources, hundreds of human data stewards, an expert finder; 72% of the firm active |
| Memory | Google Gemini agent | 8 Oct 2026 | Four memory types, including execution history |

**Data owners built knowledge.** The major financial-data incumbents adopted the same agent connection protocol, MCP, in quick succession, and the ones that disclose numbers are monetising distribution of trusted data into other people's AI. FactSet's chief executive said "over 10% of the ASV growth came directly from AI SKUs". S&P Global said customers using Kensho's LLM-ready APIs and MCP-connected solutions exceeded 500, up more than 70% on the prior quarter. [The financial data providers your agents can call today](https://lowob.com/research/the-financial-data-providers-your-agents-can-call-today/) compares them.

**Software incumbents built governance.** Microsoft's chief executive described Agent 365 as "a control plane that extends companies' existing governance, identity, security, and management frameworks to agents". ServiceNow, Workday and Google each want to be the registry other vendors' agents must check in with; Google's October launch gives each agent its own Workspace account and routes traffic through an Agent Gateway. The fight is about who holds agent identity, which the new library explains in [What is agent identity](https://lowob.com/research/what-is-agent-identity/).

**Meaning arrived in a few places.** Consultancies built a narrow form: curated retrieval maintained by human stewards. McKinsey's own account of Lilli describes "more than 40 carefully curated knowledge sources", hundreds of data stewards checking content and removing client-confidential material, and a tool that can "identify experts in the appropriate fields". Data platforms are building the other form, shared metric definitions, through efforts such as the Open Semantic Interchange; the explainer [What is a semantic layer](https://lowob.com/research/what-is-a-semantic-layer/) covers it.

**Memory shipped as a feature.** WRITER launched a team-level Agent Memory alongside its Enterprise Brain in September 2026, and Google's Gemini agent describes four memory types. The benchmarks are less encouraging. Patronus AI's MEMTRACK, built from simulated work across Slack, Linear and Git, found adding the Mem0 or Zep memory layers produced no significant improvement. The MemTrace benchmark (June 2026) found systems that recalled a fact's current and earlier state could still fail to track how it changed. Memory that stores what happened is being built; memory that knows which version is current, across months, is not.

None of this is a criticism. Context is genuinely hard. Entity resolution across hundreds of millions of companies, entitlements that follow every query, decades of history, definitions that actually agree: that is a moat, and it took decades to dig.

But it is a moat around the inputs to a decision, not around the decision.

> The market has built a moat around the inputs to a decision. Nobody has built one around the decision.

## Why the last two pieces keep getting skipped

Memory and judgment share a property the other three lack. They depend on **time running forward after the system has acted**. Knowledge can be loaded today. Governance can be configured today. Judgment can only be evidenced later, when the outcome arrives, and only if something connects that outcome back to the call that preceded it.

Three things make that connection rare.

**Outcomes live in other systems.** The credit decision is in one platform; the default shows up in another, eighteen months later, owned by a different team.

**Outcomes are slow.** A pricing call is graded in two quarters, a partnership in two years. Most programme roadmaps are planned in sprints.

**Outcomes are awkward.** A record that links a decision to a bad result names the person who made it. Systems that would surface that link meet quiet resistance.

The adoption research describes the consequence. MIT Project NANDA's 2025 report, based on more than 300 public initiatives, 52 interviews and 153 survey responses, put its central finding plainly: "Most GenAI systems do not retain feedback, adapt to context, or improve over time." The sample is small; the diagnosis matches.

So the industry ships what a pilot can demonstrate, and labels the whole thing a brain. The companion piece, [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/), sets out what the missing record holds; [What is outcome write-back](https://lowob.com/research/what-is-outcome-write-back/) covers the step that closes the loop.

## A quick test for your own programme

Open your AI roadmap and classify every item into one of the five components. Be strict.

| Roadmap item | Counts as | Only counts as more if |
| --- | --- | --- |
| A connector or MCP server | Knowledge | Never; it is access |
| A permissions model or agent registry | Governance | Never; it is control |
| Shared metric or term definitions | Meaning | It is enforced across agents and reports |
| A vector index or agent memory | Knowledge | It spans time and marks which version is current, then it is memory |
| A decision log | Memory | It records a prediction and later compares it with a result, then it is judgment |

Run honestly, a typical roadmap comes out heavy on knowledge and governance, light on meaning, empty on judgment. That is a fine portfolio for a context layer. It is the wrong portfolio for a programme whose sponsor was promised compounding.

The cheapest correction is not a new platform. It is one decision class with outcome write-back: a single field on each record that names what should happen if the decision was right, a date to check, and someone accountable for checking. Start there and the other components acquire a purpose.

Illustrative example: reclassifying a roadmap

Decision
:   Rename the programme from "enterprise brain" to "context layer" and add one judgment item: discount approvals recorded with expected outcome, check date and owner.

Reason and owner
:   Classified strictly, eleven of the twelve roadmap items were knowledge or governance and none was judgment. Owned by the head of revenue operations.

What changed
:   The sponsor's success measure moved from documents indexed to discount outcomes checked at close, reviewed quarterly.

Illustrative: a composite of a mid-size B2B services firm, built from patterns across engagements.

## What would prove this wrong

A horizontal product that, without per-client outcome plumbing, measurably improves decisions across unrelated decision classes. If one ships with independent evidence, the judgment layer is a product problem, not an organisational one. We had seen no such evidence by November 2026.

## lowob takeaways

- **The full promise has five parts.** Knowledge, memory, meaning, governance and judgment.
- **The market is paying for two.** Knowledge and governance have the disclosed money.
- **Judgment can only be evidenced later.** It needs an outcome connected back to the decision.
- **Start with one decision class.** Expected outcome, check date and owner on every record.

## Common questions

### What do enterprise brain products actually include?

Mostly the context layer: connectors to company knowledge, permissions and agent governance, and in some cases shared definitions and agent memory. None of the products launched in 2026 records decisions against their outcomes.

### What is the difference between a context layer and an enterprise brain?

A context layer gives agents governed access to what a company knows. A brain also records what the company decided, why, and what happened next, so later decisions can learn from earlier ones.

### Why don't enterprise AI systems learn from their decisions?

Nothing in the stack writes outcomes back to decisions. Outcomes live in other systems, arrive slowly, and are awkward because they name the person who decided.

### How can I tell if my AI roadmap is building judgment or just context?

Classify every item into the five components. Nothing counts as judgment unless it records a prediction and later compares it with a result.

## Sources and notes

- [The Motley Fool, FactSet Q3 FY2026 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/07/01/factset-fds-q3-2026-earnings-call-transcript/), call held 1 July 2026. Management statements; MCP client count includes trials.
- [MarketBeat, S&P Global Q2 earnings call highlights](https://www.marketbeat.com/instant-alerts/sp-global-q2-earnings-call-highlights-2026-07-28/), July 2026. Secondary summary of the earnings call.
- [The Motley Fool, Microsoft Q4 FY2026 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/08/07/microsoft-msft-q4-2026-earnings-call-transcript/), call held 29 July 2026. Registered agents are not active or useful agents.
- [ServiceNow, AI Control Tower launch](https://newsroom.servicenow.com/press-releases/details/2025/ServiceNow-Launches-AI-Control-Tower-a-Centralized-Command-Center-to-Govern-Manage-Secure-and-Realize-Value-From-Any-AI-Agent-Model-and-Workflow/default.aspx), 6 May 2025. Vendor press release.
- [TechCrunch, Workday launches a platform to manage AI agents](https://techcrunch.com/2025/02/11/workday-launches-a-platform-for-enterprises-to-manage-all-of-their-ai-agents-in-one-place), 11 February 2025. Reporting on a vendor announcement.
- [CIO Dive, Snowflake and partners standardise semantic metadata](https://www.ciodive.com/news/snowflake-standardize-metadata-ai/760948/), 23 September 2025. Industry initiative; specification still in development at launch.
- [McKinsey, Meet Lilli](https://www.mckinsey.com/about-us/new-at-mckinsey-blog/meet-lilli-our-generative-ai-tool?cid=soc-web), 16 August 2023, and [Rewiring the way McKinsey works with Lilli](https://www.mckinsey.com/capabilities/tech-and-ai/how-we-help-clients/rewiring-the-way-mcKinsey-works-with-Lilli). The firm's own account of its internal tool.
- [Xenospectrum, report on Google's Gemini agent launch](https://xenospectrum.com/en/gemini-agent-enterprise-coworker-memory/), 9 October 2026, and [TechCrunch, Google brings agentic AI to Gemini](https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/), 8 October 2026. Secondary reports of a vendor launch; some features in preview.
- [CMSWire, WRITER launches Enterprise Brain](https://www.cmswire.com/customer-experience/writer-launches-enterprise-brain-to-unify-ai-agent-context/), 9 September 2026. Vendor description; early access.
- [Patronus AI, Introducing MEMTRACK](https://patronus.ai/blog/memtrack), 14 October 2025. Vendor-built benchmark on simulated workflows.
- [Long et al., MemTrace](https://arxiv.org/abs/2606.17328), arXiv, 15 June 2026. Research preprint on user-level memory, not enterprise products.
- [Virtualization Review, MIT report finds most AI business investments fail](https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide.aspx), 19 August 2025. Secondary account of MIT Project NANDA's report; small sample.
- The five-component framework, the reconciliation table, the roadmap test and the example are **lowob**'s; the example is illustrative.

## Related research

- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [What Is an Enterprise Brain?](https://lowob.com/research/what-is-an-enterprise-brain/)
- [What Is Outcome Write-Back?](https://lowob.com/research/what-is-outcome-write-back/)
- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [Buy Context. Own Judgment. What Enterprise AI Teams Should Build](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)

## Next move

Classify your AI roadmap against the five components and show the split to your sponsor. Then pick one decision class with outcomes inside two quarters and add expected outcome, check date and owner to every record.

[Start a conversation](https://lowob.com/contact/)
