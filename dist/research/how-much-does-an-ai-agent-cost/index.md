# How Much Does an AI Agent Cost? Build, Buy and Run Costs in 2026

Source: https://lowob.com/research/how-much-does-an-ai-agent-cost/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Revenue

> Summary: Published agent prices run from $0.10 per action to $125 per user per month, and from $0.99 per outcome for support agents. A self-built agent's token bill is usually small; human review, retries and engineering time are not. The number to budget on is cost per successful task, including the people who check the work.

An AI agent costs from about $0.10 per action to $125 per user per month to buy, on Salesforce's list prices checked 16 November 2026; running your own can cost tens of dollars a month in tokens, plus far more in human review. The price on the page is rarely the largest cost. Budget on cost per successful task, with review time included.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

This page prices one agent. The choice of pricing model (seats, usage or outcomes) is set out in **lowob**'s pricing hub, [Seats, usage or outcomes](https://lowob.com/research/seats-usage-or-outcomes/), and the token arithmetic in [what AI inference cost is](https://lowob.com/research/what-is-ai-inference-cost/). Here the question is narrower: what one agent will cost you a month, bought or built.

## How much does an AI agent cost per month?

For a team handling 2,000 conversations a month, Salesforce's published units put a bought agent at $800 to $4,000 a month, before review time. The table below shows the unit prices that drive that range.

| Product | Billing unit | Published price | Source and date checked |
| --- | --- | --- | --- |
| Salesforce Agentforce add-ons (Sales, Service, Field Service, Operations) | Per user per month, unmetered employee use | $125; Industries add-ons $150 | Salesforce pricing page, 16 November 2026 |
| Salesforce Agentforce Max Edition | Per user per month, with credits | From $550, including 2.75 million Flex Credits per org per year | Salesforce pricing page, 16 November 2026 |
| Salesforce Flex Credits | Per action | $500 per 100,000 credits; 20 credits per action, 30 per voice action | Salesforce pricing page, 16 November 2026 |
| Salesforce Conversations | Per conversation | $2 | Salesforce pricing page, 16 November 2026 |
| Intercom Fin | Per outcome | From $0.99 | Intercom pricing page, 16 November 2026 |
| Microsoft Copilot Studio | Credit capacity pack | $200 per pack of 25,000 Copilot Credits per month | Microsoft Copilot Studio pricing page, 16 November 2026 |
| Anthropic Claude Managed Agents | Session runtime, plus tokens | $0.08 per session-hour while running | Anthropic API pricing page, 16 November 2026 |

On Salesforce's own rates, 20 credits at $0.005 each is $0.10 per action and 30 credits is $0.15 per voice action. An agent that handles 2,000 support conversations a month would cost $4,000 at $2 a conversation, or $800 under Flex Credits if each conversation takes four actions. Salesforce's page also says Flex Credits and Conversations "will not be supported in the same org", so the unit is a one-way choice per org.

## What does it cost to run an AI agent you build yourself?

The model bill for a self-built agent is usually small; the review bill is not. The example below is illustrative and uses Anthropic's list prices checked on 16 November 2026.

Assume a follow-up drafting agent that runs 500 times a month, takes 8 model steps per run, reads 10,000 input tokens per step (8,000 of them cached instructions and account history) and writes 500 output tokens. A person spends 3 minutes checking each draft at an assumed $40 an hour.

| Line | Claude Sonnet 5.5 | Claude Haiku 5.5 |
| --- | --- | --- |
| Input, uncached (2,000 tokens a step) | $0.0040 per step at $2 per million | $0.0002 per step at $0.10 per million |
| Input, cached (8,000 tokens a step) | $0.0008 per step at $0.10 per million | $0.00008 per step at $0.01 per million |
| Output (500 tokens a step) | $0.0050 per step at $10 per million | $0.00025 per step at $0.50 per million |
| Model cost per run (8 steps) | $0.078 | $0.004 |
| Model cost per month (500 runs) | $39.20 | $2.12 |
| Review per month (500 runs, 3 minutes, $40 an hour) | $1,000 | $1,000 |
| Cost per successful run, if 80% are usable | $2.60 | $2.51 |

Three things follow. Review costs about 25 times the Sonnet token bill, so cutting review time matters more than switching model. The smaller model is about 18 times cheaper on tokens, but only worth it if it passes the same accuracy test. And the denominator is successful runs: a draft nobody can send still costs money. The example ignores cache-write charges and the 286 to 406 system tokens Anthropic adds when tools are used, both small at this volume.

## What does it cost to build an AI agent?

Build cost is mostly engineering time, and it repeats. Model choice, prompts, tool connections, guardrails, logging and evaluation all need maintenance as models and vendor APIs change. **lowob** does not publish a build figure because it depends on your team's rates and scope. Ask instead how many hours a month the agent will need after launch, and price those hours alongside tokens.

The evidence on build versus buy favours buying or configuring for most mid-size firms; our [build vs buy guide](https://lowob.com/research/build-vs-buy-ai-agents/) sets out the options. Whichever route you take, Gartner's June 2025 prediction, reported by Reuters, that more than 40% of agentic AI projects will be cancelled by the end of 2027 because of "escalating costs and unclear business value" is a warning to budget the whole cost, not the token line.

## What hidden costs should you budget for?

The costs that surprise buyers are the ones that scale with agent behaviour rather than with headcount.

| Hidden cost | Why it grows | Evidence, with date |
| --- | --- | --- |
| Token growth from agent loops | Each step re-reads instructions, tools and history | Anthropic, June 2025: agents about 4 times the tokens of chat, multi-agent systems about 15 times |
| Tool charges | Search and runtime are billed beside tokens | Anthropic lists web search at $10 per 1,000 searches, 16 November 2026 |
| Unused prepaid credits | Commitments sized before usage is known | Salesforce: unused Flex Credits do not roll over, 16 November 2026 |
| Metered custom agents | Agents billed outside the seat | Microsoft lists organisation-built custom agents as metered, 16 November 2026 |
| Human review | Every unchecked error costs more later | **lowob**'s illustrative example above: 96% of monthly cost |
| Failed runs | You pay for attempts, not results | Divide by successful runs, not total runs |

Put a spend cap on each agent before it goes live. An [LLM gateway](https://lowob.com/research/what-is-an-llm-gateway/) can enforce caps per agent, and [prompt caching](https://lowob.com/research/what-is-prompt-caching/) is usually the quickest saving on input tokens.

## How do you estimate an AI agent's cost before you buy?

Multiply runs by steps by tokens or actions per step, add review time, and divide by expected successful runs.

Ask each vendor for the billable event in one sentence, a sample month of usage from a customer of your size, and what happens to the bill if your volume doubles. Run 30 real cases through a trial before you commit to a prepaid amount.

## lowob takeaways

- **The list price is the smallest line.** Review time, retries and engineering hours usually cost more than tokens.
- **Units are not comparable.** Convert actions, credits and conversations into cost per successful task.
- **Model choice changes tokens, not review.** A cheaper model only helps if it passes the same quality bar.
- **Cap every agent.** Set a monthly spend limit before launch, not after the first invoice.

## Common questions

### How much does an AI agent cost per month?

On published November 2026 prices, Salesforce charges $2 per conversation, $0.10 per action under Flex Credits, or $125 per user per month for add-ons, and Intercom charges from $0.99 per outcome. For a team handling a few thousand conversations a month, that means hundreds to a few thousand dollars, before the cost of people reviewing the agent's work.

### How much does it cost to run an AI agent on an API?

Multiply tokens per step by steps per run, runs per month and the provider's per-million price. In **lowob**'s illustrative example, 500 runs a month cost $39.20 on Claude Sonnet 5.5 and $2.12 on Claude Haiku 5.5 at Anthropic's November 2026 list prices. Review time added $1,000, far more than either token bill.

### Is it cheaper to build or buy an AI agent?

For most firms of 20 to 500 people, buying or configuring is cheaper once engineering and maintenance hours are counted. Building gives control of logic and data but adds recurring work as models and APIs change. Compare both on cost per successful task, including review, over twelve months rather than on the first invoice.

### What are the hidden costs of AI agents?

Token growth from multi-step loops, separately billed tools such as web search, prepaid credits that expire unused, metered custom agents outside the seat price, failed runs and, largest of all, human review. Anthropic reported in June 2025 that agents use about 4 times the tokens of chat, so pilot volumes understate production cost.

## Sources and notes

- [Salesforce, Salesforce signs definitive agreement to acquire Fin](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/), 15 June 2026. Vendor press release; Fin is the former Intercom.
- [Salesforce, Agentforce pricing](https://www.salesforce.com/in/agentforce//pricing), accessed 16 November 2026. Vendor pricing page; Salesforce states it is for information and subject to change.
- [Salesforce, Agentforce flexible pricing announcement](https://www.salesforce.com/news/press-releases/2025/05/15/agentforce-flexible-pricing-news/), 15 May 2025. Vendor press release; origin of the 20-credits-per-action rate.
- [Intercom, Pricing](https://www.intercom.com/pricing), accessed 16 November 2026. Vendor pricing page.
- [Microsoft, Copilot Studio plans and pricing](https://www.microsoft.com/en-us/copilot/pricing/copilot-studio), accessed 16 November 2026. Vendor pricing page; per-feature credit rates not shown.
- [Microsoft, Microsoft 365 Copilot plans and pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing), accessed 16 November 2026. Vendor pricing page; source of the metered custom agents note.
- [Anthropic, Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing), accessed 16 November 2026. Vendor list prices; change often.
- [Anthropic, How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), 13 June 2025. Vendor engineering report on its own system.
- [Reuters via The Star, Over 40% of agentic AI projects will be scrapped by 2027, Gartner says](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says), 25 June 2025. News report of an analyst prediction.
- The worked example is **lowob**'s illustration; runs, steps, token counts, review time and the hourly rate are assumptions.

## Related research

- [Seats, Usage or Outcomes](https://lowob.com/research/seats-usage-or-outcomes/)
- [Build vs Buy AI Agents: A Decision Guide for Mid-Size Firms](https://lowob.com/research/build-vs-buy-ai-agents/)
- [What Is AI Inference Cost?](https://lowob.com/research/what-is-ai-inference-cost/)
- [AI Credits Explained: How Credit-Based Pricing Works and How to Budget](https://lowob.com/research/ai-credits-explained/)
- [How to Choose an AI Agent Platform: A Buyer's Checklist](https://lowob.com/research/how-to-choose-an-ai-agent-platform/)
- [AI Agent Statistics 2026: Adoption, Spend, Reliability and Failure Rates](https://lowob.com/research/ai-agent-statistics-2026/)

## Next move

Pick the agent you are closest to buying or building and write down runs per month, steps per run and minutes of review per run. Price it on two vendors' published units and one API model, and divide each total by the runs you expect to be usable.

[Start a conversation](https://lowob.com/contact/)
