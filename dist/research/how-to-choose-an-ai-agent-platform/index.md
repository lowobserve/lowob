# How to Choose an AI Agent Platform: A Buyer's Checklist

Source: https://lowob.com/research/how-to-choose-an-ai-agent-platform/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: An AI agent platform is the software that lets a company build, run and govern agents. Most mid-size firms already own one inside their CRM or productivity suite, so the decision is usually which to switch on, not which to buy. This checklist sets out twelve questions to put to any vendor, the evidence to request, and how to test a platform on your own tasks before signing.

Choose an AI agent platform by testing it on your own tasks against six things: what it decides, which systems it connects to, how it limits permissions, how humans approve actions, what each run costs and whether you can replay a run. Ask for measured success rates on work like yours, repeated over several trials. A platform that cannot show you one complete run is not ready for client-facing work.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

This checklist is for an owner, operations lead or revenue leader choosing where their company's agents will run. It applies the definition in our hub piece, [What Is an AI Agent?](https://lowob.com/research/what-is-an-ai-agent/): a model working in a loop toward a goal, acting through tools within limits. The platform is the thing that sets those tools and limits.

## What is an AI agent platform?

An AI agent platform is software for building, running and governing agents: it supplies model access, connectors to company systems, the loop that runs the agent, permissions, approval steps and logs.

They come in four forms. Agents built into applications you already pay for, such as a CRM, support desk or productivity suite. Packaged agents from specialist vendors that do one job. General agent builders that let staff configure agents without code. And developer frameworks that engineers build on directly, which we compare in [Top 5 Agent Frameworks for Production](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/). For a firm of 20 to 500 people, the first two are the usual starting point.

## What should you check before choosing an AI agent platform?

Put these twelve questions to every vendor in writing. A genuine answer names specifics; a weak one answers in adjectives.

| Area | Question to ask | What good looks like | Evidence to request |
| --- | --- | --- | --- |
| Decisions | What does the agent decide for itself? | Names choices: which tool, which record, when to stop | A run log showing those choices |
| Goal and stop | How are a goal and stop condition set? | Step limit, spend cap or defined done state | Configuration screen |
| Connectors | Which of our systems can it read and write, and through what standard? | Native connectors plus an open standard such as MCP | Connector list for your stack |
| Identity | Does each agent run as its own identity? | A registered agent identity, not a person's login or admin key | Admin console view |
| Permissions | Can access be limited per agent and per action? | Least privilege, scoped tools, read-only modes | Permission model documentation |
| Approval | Which actions can require a named person's approval? | Configurable gate per action type, approvals logged | A logged approval record |
| Replay | Can we replay one complete run? | Shows inputs, steps, tool calls, outputs and approver | A live replay of a real run |
| Reliability | What is its success rate on tasks like ours? | A rate on a defined sample, repeated, with the grading method | Evaluation results, not a demo |
| Untrusted input | How does it handle instructions hidden in inbound content? | Separates reading from acting; named injection controls | Security documentation |
| Cost | What does one run cost, and can we cap it? | Per-run cost visible; budgets per agent | Usage report from a pilot |
| Data | Where is our data processed and retained, and is it used for training? | Clear terms, a data processing agreement, regional options | Contract and DPA |
| Exit | Can we take our prompts, logs and records with us? | Export in open formats | Export sample |

### Decisions, goals and connectors

The first question filters out most mislabelled products. If the answer is "nothing", the product is automation, which may be exactly what you need, and should be priced and tested as automation. Gartner estimated in June 2025 that only about 130 of the thousands of vendors making agentic claims offered genuine agentic capability; our explainer [What Is Agent Washing?](https://lowob.com/research/what-is-agent-washing/) covers the test.

On connectors, prefer platforms that support open standards. The Linux Foundation announced the Agentic AI Foundation on 9 December 2025 with the Model Context Protocol, contributed by Anthropic, as a founding project, citing more than 10,000 published MCP servers. A connector built to an open standard is less likely to lock you to one vendor.

### Identity, permissions and approval

These three rows carry most of the risk. OWASP's LLM06:2025 entry defines excessive agency as damaging actions taken in response to unexpected, ambiguous or manipulated model outputs, and its prevention list includes minimising tools and permissions, requiring user approval for high-impact operations and enforcing authorisation in downstream systems rather than relying on the model. OWASP's prompt injection entry states that it is unclear whether fool-proof prevention exists. A platform should therefore let you keep agents that read untrusted content away from actions that send or pay.

Buyers are right to be cautious. In Gartner's 2025 survey, 74% of IT application leaders believed AI agents represent a new attack vector, and only 13% strongly agreed they had the right governance structures. KPMG's Q3 2026 survey found 49% of US leaders at $1 billion-plus firms had defined high-risk use cases where agents cannot make autonomous decisions. See [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/) for how to set the gate.

## How do you test an AI agent platform before you sign?

Run it on a fixed sample of your own tasks, several times each, and grade the results against a written standard. A single successful demo tells you little about the hundredth run.

Independent measurements explain why. METR's research found 80% time horizons roughly five times shorter than 50% horizons, and lower performance on messier tasks. Salesforce AI Research's CRMArena-Pro benchmark found leading agents at about 58% on single-turn business tasks and about 35% when the task ran over several turns. A pilot should therefore include multi-step tasks, messy inputs and at least one case designed to fail. Our guide [How to Evaluate an AI Agent](https://lowob.com/research/how-to-evaluate-an-ai-agent/) sets out graders and metrics.

| Pilot step | What to record |
| --- | --- |
| Pick one frequent, checkable task | The baseline time and error rate today |
| Run the same tasks repeatedly | Success on every trial, not just the best one |
| Include messy and adversarial inputs | What it did with a hidden instruction or a stale record |
| Keep it at draft level | Every output reviewed by a named person |
| Review cost per run weekly | Tokens or credits consumed, and retries |

## Should you buy an agent platform or build on a framework?

Buy or configure first, unless agents are your product. McKinsey's 2026 survey found 32% of respondents had decided against buying at least one software product because they could build it in-house with agentic coding tools, so building is more practical than it was. It still leaves you owning maintenance, evaluation and security.

Menlo Ventures, an investor in AI companies, reported in November 2026 that model capability, not price, was proving to be the decisive competitive advantage among model providers. For a buyer, that argues for a platform that lets you change the underlying model without rebuilding. Our decision guide [Build vs Buy AI Agents](https://lowob.com/research/build-vs-buy-ai-agents/) covers the trade-offs.

## What does an AI agent platform cost to run?

Running cost depends on usage more than licence. McKinsey found about 20% of respondents saying AI operating costs, including tokens, had constrained their AI use, and KPMG found 43% of large US firms using usage or token budgets. Ask for per-run cost from the pilot, not a list price. Our pricing guide [How Much Does an AI Agent Cost?](https://lowob.com/research/how-much-does-an-ai-agent-cost/) and the pillar [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/) cover the models.

## lowob takeaways

- **Start with what you own.** Many firms already have agent features inside their CRM or productivity suite.
- **Ask what it decides.** If the answer is nothing, buy and price it as automation.
- **Insist on replay and approval.** A run you cannot replay is a run you cannot defend.
- **Test repeatedly on your own tasks.** Success on every trial matters more than the best demo.

## Common questions

### How do I choose an AI agent platform?

Test it on your own tasks and ask twelve questions: what it decides, how goals and stops are set, which systems it connects to, whether agents have their own identity, how permissions and approvals work, whether you can replay a run, its measured success rate, how it handles untrusted input, cost per run, data terms and exit options.

### What features should an AI agent platform have?

At minimum: connectors to your systems through an open standard such as MCP, a separate identity for each agent, per-agent permissions, configurable human approval for high-impact actions, complete logs you can replay, cost caps and an evaluation tool for testing on your own tasks. OWASP's 2025 guidance supports the permission and approval requirements.

### Should I build or buy an AI agent?

Most firms of 20 to 500 people should buy or configure an agent on a platform they already use, unless agents are their product. McKinsey's 2026 survey found 32% of respondents had chosen to build at least one product in-house with agentic coding tools, but building leaves you owning maintenance, evaluation and security.

### How do I test an AI agent before buying?

Run it on a fixed sample of your own real tasks, several times each, with a written grading standard. Include multi-step tasks and messy or adversarial inputs, keep outputs at draft level and record cost per run. Benchmarks such as CRMArena-Pro show success falling from about 58% on single-turn tasks to about 35% on multi-turn tasks.

## In the news

- 24 September 2026 · KPMG[KPMG Q3 2026 AI Pulse survey](https://lowob.com/news/#2026-09-24-kpmg-q3-2026-ai-pulse-survey)Large-company leaders on agent deployment. Useful as a benchmark for how far peers have actually got.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

## Sources and notes

- [Gartner, 40% of enterprise apps will feature task-specific AI agents by 2026](https://gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025), 26 August 2025. Analyst prediction.
- [Gartner, survey of IT application leaders on AI agents](https://www.gartner.com/en/newsroom/press-releases/2025-09-30-gartner-survey-finds-just-15-percent-of-it-application-leaders-are-considering-piloting-or-deploying-fully-autonomous-ai-agents), 30 September 2025. Analyst survey of 360 leaders, May to June 2025.
- Gartner on agent washing, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says), 25 June 2025. Secondary report.
- [OWASP, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) and [LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/). Community security standard; general controls, not product tests.
- [Linux Foundation, Formation of the Agentic AI Foundation](https://linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation), 9 December 2025. Foundation press release.
- [McKinsey, The state of AI in 2026](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai), 25 August 2026. Consultancy survey of 1,719 respondents; self-reported.
- [KPMG, Q3 2026 AI Pulse](https://kpmg.com/us/en/media/news/q3-ai-pulse-2026.html), 24 September 2026. Consultancy survey of 314 US leaders at $1bn+ firms.
- [Menlo Ventures, 2026: The State of Enterprise AI](https://menlovc.com/wp-content/uploads/2026/11/menlo_ventures_enterprise_ai_report-2026-110326.pdf), 3 November 2026. Investor research; Menlo invests in AI companies.
- [Kwa et al. (METR), Measuring AI Ability to Complete Long Software Tasks](https://arxiv.org/abs/2503.14499), version 4, 10 July 2026, and [Huang et al., CRMArena-Pro](https://arxiv.org/abs/2505.18878), May 2025. Independent evaluator and a Salesforce AI Research benchmark.

## Related research

- [What Is an AI Agent, and Where Does It Fit in the Brain?](https://lowob.com/research/what-is-an-ai-agent/)
- [Build vs Buy AI Agents: A Decision Guide for Mid-Size Firms](https://lowob.com/research/build-vs-buy-ai-agents/)
- [Top 5 Agent Frameworks for Production, by State Model and Cloud](https://lowob.com/research/top-5-agent-frameworks-for-production-by-state-model-and-cloud/)
- [What Is Agent Washing?](https://lowob.com/research/what-is-agent-washing/)
- [What Is a Multi-Agent System?](https://lowob.com/research/what-is-a-multi-agent-system/)

## Next move

Send the twelve-question table to the two vendors on your shortlist this week and ask each for one live replay of a real run. Compare the answers side by side before any pilot starts.

[Start a conversation](https://lowob.com/contact/)
