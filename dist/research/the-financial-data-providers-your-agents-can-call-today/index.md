# The Financial Data Providers Your Agents Can Call Today

Source: https://lowob.com/research/the-financial-data-providers-your-agents-can-call-today/
Publisher: lowob (https://lowob.com)
Published: 2026-10-20 · Updated: 2026-11-17
Function: Strategy

> Summary: In about twelve months every major financial data provider adopted the same agent connection protocol, MCP, so agents can call licensed data from inside Claude, ChatGPT, Copilot, Gemini and the cloud marketplaces. FactSet ranks first because it is the only one that quantifies AI's share of growth; the others differ on disclosure, entitlements and how clearly they price.

In about twelve months every major financial data provider adopted the same agent connection protocol, MCP. Agents can now call licensed data from inside Claude, ChatGPT, Copilot, Gemini and the cloud marketplaces. The providers differ on how much they disclose about real use, how tightly they enforce entitlements and how clearly they price. FactSet ranks first because it is the only one that has put a number on AI's share of its growth; S&P Global, LSEG, Moody's and Bloomberg follow.

*Figure: Where this piece sits in The Build Order: the context layer.*

The Model Context Protocol is the shared standard that lets an agent discover and call a tool or data source without custom integration code for each one. Our explainer on [what MCP is](https://lowob.com/research/what-is-the-model-context-protocol/) covers the mechanics, and our comparison of [MCP and API integrations](https://lowob.com/research/mcp-vs-api-integrations/) explains what changes and what does not. For a financial firm the change is commercial: the data you already license can now reach your agents through the same assistant your analysts use, and the provider has to check, every time, whether that agent is allowed to see it.

## How we ranked

| Criterion | Weight | Why it matters |
| --- | --- | --- |
| Disclosed adoption | 35% | Client counts and usage growth, stated publicly, are the best available sign the integration works. |
| Breadth of AI surfaces | 25% | Whether your agents can reach the data from the tools your firm already uses. |
| Entitlements and audit | 20% | Every call should be checked against your licence and logged. |
| Pricing clarity | 20% | Consumption pricing is still being invented; clearer is better for budgeting. |

Most of the adoption figures below come from earnings calls and press releases. They are statements to investors and customers, not audited usage, and each provider counts differently: "engaged", "using or trialling" and "customers using" are not the same measure.

## The list

**1. FactSet**

**Best for:** buy-side and banking teams that want the provider with the most evidence behind its AI products.

**Why it ranks first:** it is the only peer that quantifies AI's share of growth. On its fiscal third-quarter call on 1 July 2026, its chief executive said "over 10% of the ASV growth came directly from AI SKUs", up from close to zero a year earlier. More than 450 clients were "actively engaged under contracts and trials" on its MCP service, more than 20% of its top 100 clients were using MCP on a paid basis, and call volume in the quarter was 13 times the previous quarter's. Clients can reach the data through all the major model platforms, including Anthropic, OpenAI, Google and Microsoft.

**Watch out for:** its adjusted operating margin was 34%, down about 300 basis points year on year. The finance chief put that down to targeted investments, marketing and performance-related pay, plus a foreign-exchange hedging loss. Expect investment of that size to show up in pricing.

**Pricing:** most renewals in the quarter were enterprise agreements or multi-year terms, with FactSet seeking minimum commitments; management said consumption pricing for AI is growing but still modest relative to total subscription value.

**What would change its rank:** a peer disclosing comparable revenue attribution.

**2. S&P Global (Kensho)**

**Best for:** teams that use Capital IQ and want it inside their own agents.

**Why it ranks here:** on its second-quarter call on 28 July 2026, S&P Global said customers using its Kensho LLM-ready APIs and MCP-connected solutions "exceeded 500", up more than 70% on the quarter, with API call volume more than five times first-quarter levels.

**Watch out for:** S&P has not said what share of revenue these products bring in, and its reported adoption counts customers "using", which is a looser measure than paid contracts.

**Pricing:** not disclosed in the materials we reviewed.

**What would change its rank:** revenue attribution like FactSet's.

**3. LSEG**

**Best for:** teams already on Workspace who want its data through Claude, ChatGPT, Copilot or Gemini.

**Why it ranks here:** the broadest set of AI surfaces on this list. LSEG's MCP page names Claude, ChatGPT, Microsoft 365 Copilot, Gemini, Amazon Quick and Databricks, as well as its own Workspace and direct connections from clients' applications. Existing licensed credentials govern access, with no separate sign-up. At its half-year results in July 2026 it said it had engaged more than 200 customers on MCP since launching late in 2025, that tool calls rose nearly fivefold from May to June, and that MCP came up in about a third of its AI-related commercial discussions.

**Watch out for:** its finance chief said MCP revenue "would not materially affect 2026 results". Availability on partner platforms is, in LSEG's words, "subject to licensing and phased rollout".

**Pricing:** LSEG says it is already billing some customers under its pricing framework but does not publish it; ask your account team.

**What would change its rank:** published client numbers for paid use.

**4. Moody's**

**Best for:** credit, lending and compliance teams that want workflows, not just data.

**Why it ranks here:** it ships whole agent workflows rather than raw data. Its April 2026 partnership with Anthropic brought credit memo generation, peer comparison, scorecard assessment, entity profiling, ownership mapping, adverse media and sanctions screening into Claude through a purpose-built MCP application, over an estate of 600 million entities and 2 billion ownership links. A credit memo workflow is listed on AWS Marketplace. By its July 2026 call it reported more than 100 MCP and Smart API connections used or trialled by customers.

**Watch out for:** it has not disclosed AI revenue or a paying-client count. "Connections used or trialled" is the weakest adoption measure on this list.

**Pricing:** not published.

**What would change its rank:** a published commercial model and client count.

**5. Bloomberg**

**Best for:** large institutions that want their own agents to reach licensed Bloomberg data.

**Why it ranks here:** the most careful entitlement design. Its Enterprise MCP, launched for Data License Plus clients by October 2026, gives clients' agents access to more than 100 million securities and more than 50,000 fields, with field metadata and plain-language search instead of Bloomberg mnemonics. "Requests are checked against a client's entitlements before any data is returned", and tool-level limits cap how many securities and fields a single call can pull. It also ships reusable skills for tasks such as outlier detection and sanctions screening.

**Watch out for:** no adoption or pricing disclosed. Bloomberg hosts the service itself rather than listing in the major model catalogues, so your agents connect to it rather than finding it in an assistant's directory.

**Pricing:** offered under existing data licences; clients license the content domains they need.

**What would change its rank:** any disclosed usage.

## Side by side

|  | FactSet | S&P Global | LSEG | Moody's | Bloomberg |
| --- | --- | --- | --- | --- | --- |
| Adoption disclosed (mid-2026) | 450+ clients engaged; 20%+ of top 100 paying | 500+ customers using | 200+ customers engaged | 100+ connections used or trialled | None |
| Growth disclosed | Call volume 13x in a quarter | API volume 5x a quarter | Tool calls nearly 5x May to June | None | None |
| Revenue attribution | Over 10% of ASV growth | Not disclosed | Not material in 2026 | Not disclosed | Not disclosed |
| AI surfaces | All major model platforms | Kensho APIs and MCP | Claude, ChatGPT, Copilot, Gemini, Amazon Quick, Databricks | Claude; AWS Marketplace | Client agents via Bloomberg-hosted MCP |
| Entitlements | Licence-based | Licence-based | Existing credentials govern access | Licence-based | Checked per request; call-size limits |
| Pricing model, as disclosed by November 2026 | Enterprise agreements, minimums, growing consumption | Not disclosed | Not published | Not published | Under existing licences |

> The question is not whether a provider supports MCP. They all do. It is whether every agent call is checked against your licence and written down.

## Also callable today

| Provider | What agents can reach | Notable term |
| --- | --- | --- |
| Dun & Bradstreet | Commercial graph, with the D-U-N-S number as the identity anchor, plus finance analytics tools | D&B-hosted MCP servers available in ChatGPT and Codex since 3 June 2026 |
| MSCI | Index data, including performance, exposures, constituents and methodology | ChatGPT app and Claude connector launched 24 February 2026 |
| Verisk | Insurance underwriting and restoration estimating data | Two MCP connectors in Claude, announced 5 May 2026 |

We could not confirm current terms for Nasdaq's and ICE's agent offerings on their own pages this month, so they are not listed.

## Left out, and why

**Fitch.** No AI platform of its own disclosed; it supplies content into a third-party platform instead.

**Morningstar.** An assistant inside its own adviser workflow, not yet a service other agents can call.

## Three questions for any provider

1. **Is every agent call checked against our licence, and can we see the log?** Bloomberg describes a per-request check; ask the others for the same in writing. Our explainer on [AI audit trails](https://lowob.com/research/what-is-an-ai-audit-trail/) lists what the log should hold.
2. **Does the licence forbid using the data to train models?** None of the pages we reviewed answered this. Get it in writing.
3. **How will pricing work at ten times today's call volume?** Agents use far more data than people: FactSet's call volume rose 13-fold in one quarter. Our explainer on [usage-based pricing for AI](https://lowob.com/research/what-is-usage-based-pricing-for-ai/) covers how to model it.

## lowob takeaways

- **Every major provider now speaks MCP.** The differences are disclosure, entitlements and price.
- **FactSet has the strongest evidence.** Over 10% of subscription value growth from AI products and 450+ clients engaged.
- **LSEG reaches the most assistants.** Six named AI platforms, with existing credentials governing access.
- **Bloomberg has the clearest entitlement check and no disclosed use.** Ask for logs and training terms from all of them.

Gateway card

### Buyer's checklist for agent access to licensed data

- Every agent call is checked against the firm's licence before data is returned
- Each call is logged with the agent, the user, the data and the time
- The contract states, in writing, whether the data may be used to train models
- Pricing is modelled at ten times today's call volume
- The provider names the AI platforms it supports and the rollout dates for yours
- Adoption claims are stated as paid clients, not "engaged" or "trialling"

## Common questions

### Which financial data providers support MCP for AI agents?

FactSet, S&P Global (Kensho), LSEG, Moody's and Bloomberg lead this list. Dun & Bradstreet, MSCI and Verisk also offer agent connections through ChatGPT or Claude.

### Which financial data provider has the strongest AI adoption?

FactSet, on disclosed evidence. In July 2026 it said more than 10% of its subscription value growth came from AI products, more than 450 clients were engaged on MCP, and call volume rose 13-fold in a quarter.

### Does Bloomberg have an MCP server?

Yes. Bloomberg's Enterprise MCP gives Data License Plus clients' agents access to more than 100 million securities and 50,000 fields, checking every request against entitlements. Bloomberg has disclosed no adoption or pricing.

### What should I ask a data provider before connecting agents to it?

Whether every agent call is checked against your licence with a log you can see, whether the licence forbids using the data to train models, and how pricing works at ten times today's call volume.

## In the news

- 13 October 2026 · IT Brief UK[Bloomberg launches Enterprise MCP for AI data access](https://lowob.com/news/#2026-10-13-bloomberg-launches-enterprise-mcp-for-ai-data-access)Licensed market data is now reachable by agents through a standard connector. Check the licence before you check the latency.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

LISTED HERE, OR SHOULD BE?

## Tell us what is new.

Building a product or service that belongs here? Running a raise, a programme or a deadline founders should know about? Changed your pricing, terms or dates? Brief us and we will review it for the next update. We check every claim at the source, and listings are never paid for.

Your emailCompany, programme or eventWhat is itProduct or toolEventGrant or programmeFundraising date or deadlineSomething elseLinkWhat should we know?Send for review

## Sources and notes

- [The Motley Fool, FactSet (FDS) Q3 2026 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/07/01/factset-fds-q3-2026-earnings-call-transcript/), 1 July 2026. Transcript of management statements to investors.
- [Nasdaq, S&P Global Q2 earnings call highlights](https://www.nasdaq.com/articles/sp-global-q2-earnings-call-highlights), 28 July 2026. Summary of management statements.
- [MarketBeat, London Stock Exchange Group H1 earnings call highlights](https://www.marketbeat.com/instant-alerts/london-stock-exchange-group-h1-earnings-call-highlights-2026-07-30/), 30 July 2026. Summary of management statements.
- [LSEG, LSEG MCP: trusted financial data for AI](https://www.lseg.com/en/solutions/ai-finance-solutions/lseg-mcp), accessed November 2026. Vendor product page; no pricing shown.
- [Nasdaq, Moody's Q2 earnings call highlights](https://www.nasdaq.com/articles/moodys-q2-earnings-call-highlights), 22 July 2026. Summary of management statements.
- [Business Wire via Observer-Reporter, Moody's brings credit and compliance workflows directly into Anthropic's Claude](https://stocks.observer-reporter.com/observerreporter/article/bizwire-2026-4-9-moodys-brings-credit-and-compliance-workflows-directly-into-anthropics-claude), 9 April 2026. Vendor press release.
- [Business Wire, Moody's agentic solutions now available in AWS Marketplace](https://www.businesswire.com/news/home/20260416914061/en/), 16 April 2026. Vendor press release.
- [IT Brief UK, Bloomberg launches Enterprise MCP for AI data access](https://itbrief.co.uk/story/bloomberg-launches-enterprise-mcp-for-ai-data-access), 13 October 2026. Trade press reporting a vendor launch.
- [Dun & Bradstreet, Dun & Bradstreet and OpenAI collaborate to power finance workflows](https://www.dnb.com/en-us/newsroom/press-releases/dnb-openai-power-finance-workflows.html), 3 June 2026. Vendor press release.
- [MSCI, MSCI unveils new AI connectors](https://www.msci.com/discover-msci/media-room/msci-unveils-new-ai-connectors-transforming-access-to-proprietary-data), 24 February 2026. Vendor press release.
- [Verisk, Verisk brings its analytics and generative AI capabilities into Anthropic's Claude](https://www.verisk.com/company/newsroom/verisk-brings-its-trusted-analytics-and-generative-ai-capabilities-directly-into-anthropics-claude/), 5 May 2026. Vendor press release.
- The ranking criteria, weights and provider questions are **lowob**'s framework.

## Related research

- [What Is the Model Context Protocol (MCP)?](https://lowob.com/research/what-is-the-model-context-protocol/)
- [MCP vs API Integrations: What Changes and What Does Not](https://lowob.com/research/mcp-vs-api-integrations/)
- [What Is Usage-Based Pricing for AI?](https://lowob.com/research/what-is-usage-based-pricing-for-ai/)
- [The Build Order for Financial Services and Fintech](https://lowob.com/research/the-build-order-for-financial-services-and-fintech/)
- [The 5 Enterprise Context Platforms, Ranked for Regulated Firms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/)
- [What an Advisor Does for a Web3 Company](https://lowob.com/research/what-advisors-do-web3-companies/)

## Next move

Email your two largest data providers' account teams this week with the three questions above, and ask for the answers in writing before any agent is connected to their data.

[Start a conversation](https://lowob.com/contact/)
