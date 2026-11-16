# Build vs Buy AI Agents: A Decision Guide for Mid-Size Firms

Source: https://lowob.com/research/build-vs-buy-ai-agents/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Enterprise buyers have shifted toward buying AI: one investor survey found 76% of use cases were purchased in 2025. For a 20 to 500 person firm the real choice is between buying a packaged agent, configuring one on a platform it already uses, and building on a framework. lowob's rule is to rent the wiring and own the record.

Buying an AI agent means paying a vendor for a packaged product that does a defined job. Building one means assembling models, tools and orchestration code yourself. For most firms of 20 to 500 people the answer is to buy or configure the agent, and to own the part no vendor can supply: the record of what was decided, by whom, and what happened next.

*Figure: The Build Order, end to end. This piece maps the whole route.*

## What the options really are

"Build or buy" hides three choices. A mid-size firm rarely writes its own model, so building means building the agent around someone else's model.

**Buy** a packaged agent from a specialist vendor: an AI SDR, a support agent, a meeting-notes agent. The vendor owns the logic, the prompts and the integrations.

**Configure** an agent inside a platform you already pay for: your CRM, your productivity suite or your support desk. You set goals, tools and limits; the platform runs it.

**Build** on a model API and an agent framework, with your own code for tools, memory and guardrails. You own everything, including the maintenance.

|  | Buy | Configure | Build |
| --- | --- | --- | --- |
| Time to first use | Fastest | Fast, if the platform fits | Slowest |
| Upfront cost | Low; subscription | Low to medium; platform add-on | High; engineering time |
| Running cost | Per seat, usage or outcome | Platform pricing, often usage | Model tokens, hosting, staff |
| Fit to your process | Vendor's process | Platform's limits | Exactly yours |
| Who maintains it | Vendor | Vendor and your admin | You |
| Data and record ownership | Contract-dependent | Usually inside your platform | Yours |
| Main risk | Vendor lock-in, agent washing | Platform ceiling | Cost overrun, key-person risk |

## What the evidence says

The market has moved toward buying. Menlo Ventures, an investor in AI companies, found the purchased share of enterprise AI use cases rose from 53% to 76% between 2024 and 2025. MIT NANDA's *The GenAI Divide* reached a similar conclusion from 150 leader interviews, a survey of 350 employees and a review of 300 public deployments: partnerships and vendor tools succeeded more often than internal builds.

Buying is not safe by default. Gartner's estimate that only about 130 agentic AI vendors are real means many products sold as agents are chatbots or fixed workflows; see [What is agent washing?](https://lowob.com/research/what-is-agent-washing/). Its cancellation forecast applies to bought and built projects alike. Analyst Anushree Verma described most current projects as "early stage experiments or proofs of concept."

Building has a narrow case at this size. It is justified when the process is a genuine differentiator, when no vendor reaches the systems involved, or when regulators require control a vendor cannot document. Even then, OpenAI's guide to building agents recommends human oversight for high-risk actions and limits on retries, which a builder must engineer and maintain.

## Decision checklist

Answer each question for one specific job, not for "AI agents" in general.

| Question | If yes, lean toward |
| --- | --- |
| Does a vendor already do this exact job for firms like yours? | Buy |
| Does a platform you already pay for offer an agent that reaches the right systems? | Configure |
| Is the process how you win against competitors? | Build, or configure deeply |
| Do you have an engineer who can own it for two years, not just ship it? | Build is possible |
| Would losing the vendor lose your decision history? | Fix the contract, or do not buy |
| Can you export runs, approvals and outcomes in a usable format? | Required for any option |
| Is the job client-facing or hard to check? | Start at draft level whichever you choose |

## The **lowob** view

**lowob**'s rule is rent the wiring, own the record. In the brain loop, store, wiring, record, reasoning and learning, a bought agent supplies reasoning and usually some wiring. Those are improving fast and are cheaper to rent than to build. The record is different. It holds each decision with its reason, owner, status and expected outcome, and the learning step writes the result back. It is specific to your firm, accumulates value over years, and is what you lose if a vendor holds it.

So the buying test is less about features and more about exit. Before signing, confirm three things. You can export every run, approval and outcome. The agent's credentials are scoped to named systems. Outcomes can be written back to a record you control. The size-by-size version of this argument is in [Buy context, own judgment](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/).

Whatever the choice, set the autonomy dial separately from the purchase: 0 answer, 1 draft, 2 act with approval, 3 act and report, 4 act alone. A bought agent that can send email should still start at draft, with a person approving.

## lowob takeaways

- **There are three options, not two.** Buy a packaged agent, configure one on your platform, or build on a framework.
- **Most mid-size firms should buy or configure.** Survey evidence favours vendor and partner routes over internal builds.
- **Own the record whichever you choose.** Decisions, approvals and outcomes must be exportable and yours.
- **Autonomy is a separate decision.** Start every agent at draft level until the record shows it can go further.

## Sources and notes

- [Menlo Ventures, 2025: The state of generative AI in the enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-AI-in-the-enterprise/), 9 December 2025. Survey by an AI investor; 495 US respondents, self-reported.
- [Fortune via Yahoo Finance, MIT report: 95% of generative AI pilots at companies are failing](https://finance.yahoo.com/news/mit-report-95-generative-ai-105412686.html), 18 August 2025. News report of MIT NANDA research; success definitions are the authors' own.
- [Reuters via The Star, Over 40% of agentic AI projects will be scrapped by 2027, Gartner says](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says), 25 June 2025. News report of an analyst prediction, not a measured outcome.
- [OpenAI, A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf), 2025. Vendor guide; guardrail and human-oversight patterns for builders.
- "Rent the wiring, own the record" and the autonomy dial are **lowob**'s framework.

## Related research

- [Buy context, own judgment: what to build at each size](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [Workflow automation vs AI agents](https://lowob.com/research/workflow-automation-vs-ai-agents/)
- [Top 5 agent frameworks for production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/)
- [The first AI agent should be boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)

## Next move

Pick the one agent you are closest to buying and ask the vendor for a sample export of a week's runs, approvals and outcomes. If they cannot produce one, treat that as the deciding answer.

[Start a conversation](https://lowob.com/contact/)
