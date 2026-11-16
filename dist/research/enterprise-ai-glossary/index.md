# The Enterprise AI and Commercial System Glossary

Source: https://lowob.com/research/enterprise-ai-glossary/
Publisher: lowob (https://lowob.com)
Published: 2026-07-10 · Updated: 2026-11-16
Function: Strategy

> Summary: A reference glossary of more than 110 terms across AI agents, the context layer, the decision record, governance and risk, pricing and the commercial system, written for business readers and linked to lowob research and explainers.

This glossary defines the terms used across The Build Order and the wider enterprise AI market in plain English. Each entry gives a working definition, notes where vendors use the word differently, and links to the research or explainer that goes deeper. Terms are grouped by layer of the brain: agents and reasoning, the wiring, the record, governance and risk, pricing, and the commercial system.

*Figure: No single layer is a brain. The brain is the loop: what is stored, wired, recorded, reasoned over and learned from.*

## Agents and reasoning

### AI agent

A model working in a loop toward a goal: it chooses its next step, acts through tools, checks the result and repeats until it finishes or a limit stops it. See [What Is an AI Agent?](https://lowob.com/research/what-is-an-ai-agent/).

### Agentic AI

AI systems that plan and take multi-step actions with tools rather than only answering questions. Used loosely in marketing. See [What Is Agentic AI?](https://lowob.com/research/what-is-agentic-ai/).

### Agent washing

Rebranding assistants, chatbots or automation as "agents" without real agentic capability. Gartner estimated in 2025 that only about 130 of thousands of vendors making agentic claims offered genuine capability. See [What Is Agent Washing?](https://lowob.com/research/what-is-agent-washing/).

### AI copilot

An assistant embedded in a work tool that helps a person do a task; the person stays in control of each step. Compare with an agent, which chooses its own steps. See [AI Copilot vs AI Agent](https://lowob.com/research/ai-copilot-vs-ai-agent/).

### Autonomy level

How much an agent may do without a person, on **lowob**'s five-step scale: 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone. Most commercial value today sits at levels 1 to 3. See [What Is an AI Autonomy Level?](https://lowob.com/research/what-is-an-ai-autonomy-level/).

### Agent loop

The repeated cycle of reason, act and observe that defines an agent. The loop is becoming a commodity; what differs is the context and limits around it. See [A loop with good context](https://lowob.com/research/a-loop-with-good-context/). See [What Is an Agent Loop?](https://lowob.com/research/what-is-an-agent-loop/).

### Reasoning layer

The layer of the brain where models and agents read across the wiring and the record and connect the dots. Rent the models; own the instructions and precedents. See [What Is a Reasoning Model?](https://lowob.com/research/what-is-a-reasoning-model/).

### Time horizon

METR's measure of agent capability: the length of task, in human-expert time, an agent completes at a given success rate. Reported at 50% and 80% success; the gap between them matters. See [What Is an AI Agent's Time Horizon?](https://lowob.com/research/what-is-an-ai-time-horizon/).

### Agent framework

Software that runs agent loops, manages state and pauses for approval. See [Top 5 agent frameworks for production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/). See [What Is an Agent Framework?](https://lowob.com/research/what-is-an-agent-framework/).

### Pipeline clerk

**lowob**'s recommended first commercial agent: it keeps CRM records current, flags stale deals and drafts follow-ups into a queue, and never sends. See [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/).

### Large language model (LLM)

A model trained on large amounts of text to predict and generate language; the engine inside assistants and agents. See [What Is a Large Language Model?](https://lowob.com/research/what-is-a-large-language-model/).

### Token

The unit of text a model reads and writes, roughly three-quarters of an English word. Most AI usage pricing is per token. See [What Is a Token in AI?](https://lowob.com/research/what-is-a-token-in-ai/).

### Context window

The amount of text a model can consider at once. Larger windows do not guarantee the model uses all of it well. See [What Is a Context Window?](https://lowob.com/research/what-is-a-context-window/).

### Embeddings

Numerical representations of text that place similar meanings close together; the basis of vector search. See [What Are Embeddings?](https://lowob.com/research/what-are-embeddings/).

### Fine-tuning

Further training a model on specific examples to change its behaviour. Usually less useful for business knowledge than better context. See [What Is Fine-Tuning?](https://lowob.com/research/what-is-fine-tuning/).

### Hallucination

A confident output that is not supported by the model's sources or by fact. See [What Is AI Hallucination?](https://lowob.com/research/what-is-ai-hallucination/).

### Guardrails

Controls that constrain what an AI system may receive, produce or do. See [What Are AI Guardrails?](https://lowob.com/research/what-are-ai-guardrails/).

### Evals

Structured tests that measure an AI system's output quality against defined cases before and after changes. See [What Are AI Evals?](https://lowob.com/research/what-are-ai-evals/).

### Orchestration

Coordinating models, tools, agents and steps into a working process. See [What Is AI Orchestration?](https://lowob.com/research/what-is-ai-orchestration/).

### Workflow automation

Software that runs a fixed sequence of steps. Better than an agent when the steps are stable. See [Workflow Automation vs AI Agents](https://lowob.com/research/workflow-automation-vs-ai-agents/).

### Robotic process automation (RPA)

Software that mimics a person clicking through applications to complete repetitive tasks. See [What Is RPA?](https://lowob.com/research/what-is-robotic-process-automation/).

## The wiring (context layer)

### Context layer

The wiring that lets AI read a company's systems: connectors, permission-aware retrieval and shared definitions. Rent it rather than build it. See [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/).

### Context engineering

The practice of deciding what an agent sees before and during a task: which documents, data, definitions and precedents, in what form and order. See [What Is Context Engineering?](https://lowob.com/research/what-is-context-engineering/).

### Model Context Protocol (MCP)

An open standard for connecting AI assistants and agents to tools and data, donated by Anthropic to the Linux Foundation's Agentic AI Foundation in December 2025. See [What Is the Model Context Protocol?](https://lowob.com/research/what-is-the-model-context-protocol/).

### Agent2Agent protocol (A2A)

An open protocol, originated by Google and hosted by the Linux Foundation, for agents built by different vendors to communicate. See [What Is the Agent2Agent Protocol?](https://lowob.com/research/what-is-the-agent2agent-protocol/).

### Connector

An integration that makes one system (email, CRM, drive) readable or writable by an assistant or agent. See [What Is an AI Connector?](https://lowob.com/research/what-is-an-ai-connector/).

### Permission-aware retrieval

Search that returns only what the requesting person could already open. It inherits every bad permission in the underlying systems, so audit before connecting. See [What Is Permission-Aware Retrieval?](https://lowob.com/research/what-is-permission-aware-retrieval/).

### Retrieval-augmented generation (RAG)

Retrieving relevant documents and supplying them to a model so its answer draws on company material. See [What Is RAG?](https://lowob.com/research/what-is-retrieval-augmented-generation/).

### Vector database

A database that stores numerical representations of text so that similar content can be found by meaning. See [What Is a Vector Database?](https://lowob.com/research/what-is-a-vector-database/).

### Knowledge graph

A structure that stores entities and their relationships explicitly. Stronger than vector search on aggregation and cross-document questions; costly to keep fresh. See [What Is a Knowledge Graph?](https://lowob.com/research/what-is-a-knowledge-graph/).

### Semantic layer

Shared, written definitions of business terms so people and agents mean the same thing by "active client" or "qualified". See [What Is a Semantic Layer?](https://lowob.com/research/what-is-a-semantic-layer/).

## The record

### Enterprise brain

In **lowob**'s usage, the loop that connects what a company stores, records what it decided and why, reasons across both, and learns when outcomes come back. No single product is the brain. See [What Is an Enterprise Brain?](https://lowob.com/research/what-is-an-enterprise-brain/).

### Store

The systems where data sits: CRM, drive, inbox, ERP. Necessary for the brain, never sufficient. See [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/).

### Decision record

A structured entry for an important decision: what was decided, why, who owns it, its status, the expected outcome and check date, and later the actual outcome. See [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/).

### Precedent slot

A reserved part of an agent's context holding three to five comparable past decisions, including at least one that went badly. See [A loop with good context](https://lowob.com/research/a-loop-with-good-context/). See [What Is Decision Precedent in AI?](https://lowob.com/research/what-is-decision-precedent-in-ai/).

### Outcome write-back

Recording an outcome against the decision that caused it, so the system can learn which reasoning worked. See [What Is Outcome Write-Back?](https://lowob.com/research/what-is-outcome-write-back/).

### Supersession

Marking an older decision or fact as replaced rather than deleting it, so history is preserved and current guidance is clear. See [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/).

### Agent memory

Mechanisms that let an agent retain information across sessions. Independent tests often reproduce vendor memory scores much lower than claimed. See [What Is Agent Memory?](https://lowob.com/research/what-is-agent-memory/).

### System of record

The authoritative source for a type of data, such as the CRM for accounts and opportunities. See [What Is a System of Record?](https://lowob.com/research/what-is-a-system-of-record/).

## Governance and risk

### Human-in-the-loop

A design in which a named person approves an agent's output before it takes effect, with the approval logged. See [What Is Human-in-the-Loop AI?](https://lowob.com/research/what-is-human-in-the-loop-ai/) and [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/).

### Approval gate

The checkpoint where outbound work is approved, edited or returned. Gateway 1 in The Build Order. See [What Is an Approval Gate for AI Agents?](https://lowob.com/research/what-is-an-approval-gate/).

### Prompt injection

Manipulating an AI system through crafted input, often hidden in content it reads. Ranked first in OWASP's 2025 Top 10 for LLM applications. See [What Is Prompt Injection?](https://lowob.com/research/what-is-prompt-injection/).

### Excessive agency

Giving an AI system more tools, permissions or autonomy than its task needs. Sixth in OWASP's 2025 list. See [What Is Excessive Agency?](https://lowob.com/research/what-is-excessive-agency/).

### Agent identity and registry

Treating each agent as its own account with its own permissions, listed in a register with its goal, tools, autonomy level and owner. See [What Is Agent Identity?](https://lowob.com/research/what-is-agent-identity/).

### LLM observability

Tracing what models and agents saw and did, and evaluating output quality over time. See [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/).

### AI audit trail

A record that lets a firm reconstruct the chain of evidence, action, approval and outcome behind an automated decision. See [What Is an AI Audit Trail?](https://lowob.com/research/what-is-an-ai-audit-trail/).

### AI governance

The policies, roles and controls for using AI responsibly, often mapped to frameworks such as NIST's AI Risk Management Framework and ISO/IEC 42001. See [What Is AI Governance?](https://lowob.com/research/what-is-ai-governance/).

### Kill switch

A control that lets a named person stop every agent immediately. See [What Is an AI Kill Switch?](https://lowob.com/research/what-is-an-ai-kill-switch/).

### EU AI Act

The EU's risk-based AI law. Several high-risk obligations were deferred in 2026; check current dates before relying on any timeline. See [The EU AI Act for Commercial Teams](https://lowob.com/research/the-eu-ai-act-for-commercial-teams/).

### NIST AI Risk Management Framework

A voluntary US framework for managing AI risk, organised around govern, map, measure and manage. See [What Is the NIST AI RMF?](https://lowob.com/research/what-is-the-nist-ai-risk-management-framework/).

### ISO/IEC 42001

An international standard for an AI management system that organisations can be certified against. See [What Is ISO/IEC 42001?](https://lowob.com/research/what-is-iso-42001/).

### Model risk management

The discipline of validating, monitoring and governing models whose errors can cause loss, long established in banking. See [What Is Model Risk Management for AI?](https://lowob.com/research/what-is-model-risk-management/).

### Data residency

Where data is stored and processed geographically, often set by contract or regulation. See [What Is Data Residency for AI Tools?](https://lowob.com/research/what-is-data-residency-for-ai/).

### Zero data retention

A vendor commitment not to store prompts and outputs beyond processing them. See [What Is Zero Data Retention?](https://lowob.com/research/what-is-zero-data-retention/).

### SOC 2

An audit report on a service provider's security and related controls. Useful for AI vendors, and limited in what it says about model behaviour. See [SOC 2 for AI Vendors](https://lowob.com/research/soc-2-for-ai-vendors/).

## Pricing

### Seat-based pricing

Charging per user per month, as most AI assistants do. See [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/). See [What Is Seat-Based Pricing for AI?](https://lowob.com/research/what-is-seat-based-pricing-for-ai/).

### Usage-based pricing

Charging by consumption: tokens, tasks or credits. See [What Is Usage-Based Pricing for AI?](https://lowob.com/research/what-is-usage-based-pricing-for-ai/).

### Outcome-based pricing

Charging for a measured result, such as a resolved support case. Works where outcomes can be counted. See [What Is Outcome-Based Pricing for AI?](https://lowob.com/research/what-is-outcome-based-pricing-for-ai/).

## The commercial system

### Commercial line

The sales, marketing and account-management work where a company wins and keeps revenue. The Build Order's starting point. See [Why the Brain Starts at the Commercial Line](https://lowob.com/research/why-the-brain-starts-at-the-commercial-line/).

### Commercial operating system

The connected set of definitions, stages, tools, rituals and records a company uses to run its commercial line. See [What Is a Commercial Operating System?](https://lowob.com/research/what-is-a-commercial-operating-system/).

### Revenue operations (RevOps)

The function that aligns sales, marketing and customer success processes, data and tools. See [What Is Revenue Operations?](https://lowob.com/research/what-is-revenue-operations/).

### CRM data hygiene

Keeping CRM records accurate, complete and de-duplicated. See [What Is CRM Data Hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/).

### Pipeline stage definitions

Written criteria for each stage of an opportunity, so stages mean the same thing to every seller and agent. See [What Are Pipeline Stage Definitions?](https://lowob.com/research/what-are-pipeline-stage-definitions/).

### Closed-lost reason

The recorded reason a deal was lost, chosen from a fixed list. The field most often left blank and the most useful for learning. See [What Is a Closed-Lost Reason?](https://lowob.com/research/what-is-a-closed-lost-reason/).

### Win-loss analysis

Systematic review of why deals are won or lost. See [What Is Win-Loss Analysis?](https://lowob.com/research/what-is-win-loss-analysis/).

### Lead source attribution

Recording where each opportunity came from, from a fixed list, so channels can be compared. See [What Is Lead Source Attribution?](https://lowob.com/research/what-is-lead-source-attribution/).

### Selling time

The share of a seller's time spent actually selling. Salesforce's 2026 survey put it at about 40%. See [What Is Selling Time?](https://lowob.com/research/what-is-seller-time-to-sell/).

### Commercial system

The connected strategy, growth, distribution and revenue practices a company uses to win and keep business. See [The Commercial System](https://lowob.com/research/the-commercial-system-what-it-is/).

### Positioning

The choice of who a company is for, what it is compared with, and why it wins. In complex markets, positioning has to survive a buying committee. See [Positioning for Complex Markets](https://lowob.com/research/positioning-for-complex-markets/).

### Segment selection

Choosing which customer segments to pursue, using evidence on fit, value and ability to win. See [Segment Selection With Evidence](https://lowob.com/research/segment-selection-with-evidence/).

### Pricing architecture

The structure of offers, price points, packaging and discount rules, separate from the price of any single deal. See [Pricing Architecture for Services Firms](https://lowob.com/research/pricing-architecture-for-services-firms/).

### Market map

A structured view of segments, buyers, competitors and channels that sellers can act on. See [Market Maps That Sales Actually Uses](https://lowob.com/research/market-maps-that-sales-actually-uses/).

### Commercial operating rhythm

The fixed weekly, monthly and quarterly meetings and reviews where commercial decisions are made and recorded. See [The Commercial Operating Rhythm](https://lowob.com/research/the-commercial-operating-rhythm/).

### Commercial KPIs

The small set of measures leadership and the board use to judge commercial performance. See [Commercial KPIs a Board Will Trust](https://lowob.com/research/commercial-kpis-a-board-will-trust/).

### Demand generation

Marketing that creates and captures buying interest, measured against pipeline and revenue rather than activity. See [Demand Generation Economics](https://lowob.com/research/demand-generation-economics/).

### Campaign test

A campaign designed to answer one question with enough volume and time to reach a decision. See [Campaign Testing That Reaches a Decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/).

### Thought leadership

Published expertise that changes how buyers frame a problem, ideally in a form sellers can use in conversations. See [Thought Leadership That Sales Can Use](https://lowob.com/research/thought-leadership-that-sales-can-use/).

### Brand measurement (B2B)

Ways of tracking whether more of the market knows and prefers a company, such as share of search and aided awareness. See [Measuring Brand in B2B](https://lowob.com/research/measuring-brand-in-b2b/).

### Partner channel

Selling or delivering through other companies such as resellers, referral partners, platforms or integrators. See [Partner Channel Design](https://lowob.com/research/partner-channel-design/).

### Referral partner

A company or person that introduces business in return for a fee or reciprocal benefit, without selling it. See [Referral Partners Without Leakage](https://lowob.com/research/referral-partners-without-leakage/).

### Marketplace listing

A product or service listed in a platform marketplace, such as a cloud provider's, where customers can buy through existing contracts. See [Marketplace Listings for B2B Sellers](https://lowob.com/research/marketplace-listings-for-b2b/).

### Co-selling

Selling jointly with a platform or partner's sales team on shared opportunities. See [Co-Selling With Platforms](https://lowob.com/research/co-selling-with-platforms/).

### Channel conflict

Competition between a company's own sellers and its partners, or between partners, for the same customer. See [Channel Conflict](https://lowob.com/research/channel-conflict-and-how-to-manage-it/).

### Deal registration

A partner programme rule that gives the partner who registers an opportunity first protection or better terms. See [Channel Conflict](https://lowob.com/research/channel-conflict-and-how-to-manage-it/). See [What Is Deal Registration?](https://lowob.com/research/what-is-deal-registration/).

### Qualification framework

A shared checklist for deciding whether an opportunity is worth pursuing, such as BANT or MEDDICC. See [Qualification Frameworks Compared](https://lowob.com/research/qualification-frameworks-compared/).

### Discount governance

Rules for who may approve which discounts, with recorded reasons, so price exceptions do not erode margin. See [Discount Governance](https://lowob.com/research/discount-governance/).

### Proposal standard

A consistent structure and approval process for proposals, so they win more and teach the firm what works. See [Proposal Standards](https://lowob.com/research/proposal-standards/).

### Forecast category

A seller's judgment of a deal's likelihood (for example commit, best case, pipeline), separate from its stage. See [Forecasting That Holds](https://lowob.com/research/forecasting-that-holds/). See [What Is a Forecast Category?](https://lowob.com/research/what-is-a-forecast-category/).

### Renewal and expansion

Keeping existing customers and growing what they buy; often the largest source of revenue growth. See [Renewals and Expansion](https://lowob.com/research/renewals-and-expansion/).

### Win-loss programme

A recurring process of interviewing buyers about won and lost deals and acting on the findings. See [Running a Win-Loss Programme](https://lowob.com/research/win-loss-programmes/).

### Sales capacity

How much revenue a sales team can realistically produce, given headcount, ramp time and productivity. See [Sales Capacity and Quota Setting](https://lowob.com/research/sales-capacity-and-quota-setting/).

### Quota

The revenue or bookings target assigned to a seller or team for a period. See [Sales Capacity and Quota Setting](https://lowob.com/research/sales-capacity-and-quota-setting/).

### Sales-to-delivery handover

The transfer of commitments, context and expectations from the people who sold the work to the people who deliver it. See [The Handover From Sales to Delivery](https://lowob.com/research/the-handover-from-sales-to-delivery/).

### Pricing experiment

A controlled change to price or packaging, run long enough to learn whether it changes win rates or margin. See [Pricing Experiments in B2B](https://lowob.com/research/pricing-experiments-in-b2b/).

### Agent task directory

A reference rating sixty commercial tasks by the autonomy level an agent can safely be given today. See [What AI Agents Can Do](https://lowob.com/research/what-ai-agents-can-do-task-directory/). Walked function by function in [the Agents at Work series](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/).

### Gateway

In The Build Order, a test that must be passed before the next layer is built. Gateway 0: owner, suite and CRM decided. Gateway 1: nothing sends without a person. Gateway 2: a dollar figure on every decision. Gateway 3: commercial ready to share its brain. See [The RFP Nobody Can Answer Yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/).

### TAM, SAM and SOM

Total, serviceable and obtainable market: three nested estimates of the revenue opportunity. See [What Are TAM, SAM and SOM?](https://lowob.com/research/what-is-tam-sam-som/).

### CAC payback

The months it takes to recover the cost of acquiring a customer from that customer's gross margin. See [What Is CAC Payback?](https://lowob.com/research/what-is-cac-payback/).

### Net revenue retention (NRR)

Revenue retained from existing customers over a period, including expansion and net of churn and contraction. See [What Is Net Revenue Retention?](https://lowob.com/research/what-is-net-revenue-retention/).

### Pipeline coverage

Open pipeline value divided by the target it must deliver. See [What Is Pipeline Coverage?](https://lowob.com/research/what-is-pipeline-coverage/).

### Sales velocity

How quickly the pipeline turns into revenue, from deal count, value, win rate and cycle length. See [What Is Sales Velocity?](https://lowob.com/research/what-is-sales-velocity/).

### Deal desk

A function that reviews and approves non-standard deals, pricing and terms. See [What Is a Deal Desk?](https://lowob.com/research/what-is-a-deal-desk/).

### MEDDICC

A qualification framework for complex sales: metrics, economic buyer, decision criteria, decision process, identify pain, champion and competition. See [What Is MEDDICC?](https://lowob.com/research/what-is-meddicc/).

### BANT

An older qualification shorthand: budget, authority, need, timing. See [What Is BANT?](https://lowob.com/research/what-is-bant/).

### Account planning

A structured plan for growing and protecting a priority account. See [What Is Account Planning?](https://lowob.com/research/what-is-account-planning/).

### Intent data

Signals suggesting an organisation is researching a topic or category, of varying reliability. See [What Is Intent Data?](https://lowob.com/research/what-is-intent-data/).

### Data enrichment

Adding third-party information to CRM records. See [What Is Data Enrichment?](https://lowob.com/research/what-is-data-enrichment/).

### Sales forecasting

Predicting revenue for a period from pipeline and history. See [What Is Sales Forecasting?](https://lowob.com/research/what-is-sales-forecasting/).

### Customer health score

A composite measure of how likely a customer is to renew or expand. See [What Is Customer Health Scoring?](https://lowob.com/research/what-is-customer-health-scoring/).

### Partner program

A structured way of recruiting, enabling and rewarding companies that sell or refer your services. See [What Is a Partner Program?](https://lowob.com/research/what-is-a-partner-program/).

### Lead scoring

Ranking leads by likelihood to buy using fit and behaviour. See [What Is Lead Scoring?](https://lowob.com/research/what-is-lead-scoring/).

### Sales playbook

The documented plays a team runs in specific selling situations. See [What Is a Sales Playbook?](https://lowob.com/research/what-is-a-sales-playbook/).

## Sources and notes

- Definitions are **lowob**'s; external facts cited in each linked piece.
- Gartner on agent washing, June 2025, as reported by [Cyprus Mail (Reuters)](https://cyprus-mail.com/2025/06/29/over-40-per-cent-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says).
- [OWASP Top 10 for LLM Applications 2025](https://www.hackerone.com/blog/owasp-top-10-llms-2025-how-genai-risks-are-evolving), via HackerOne.
- [IT Brief on MCP and the Agentic AI Foundation](https://itbrief.com.au/story/anthropic-donates-mcp-to-new-agentic-ai-foundation), January 2026.
- [Salesforce, State of Sales 2026](https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/).

## Related research

- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [The RFP Nobody Can Answer Yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/)
- [The first two-fifths](https://lowob.com/research/the-first-two-fifths/)

## Next move

Pick the three terms your team uses most loosely and write down what each means for you. Shared definitions are the cheapest part of the brain to build.

[Start a conversation](https://lowob.com/contact/)
