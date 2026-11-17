# Why AI Agent Projects Fail: The Evidence and How to Avoid It

Source: https://lowob.com/research/why-ai-agent-projects-fail/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: Gartner expects over 40% of agentic AI projects to be cancelled by the end of 2027, and S&P Global found 42% of companies abandoning most AI initiatives before production. The causes are consistent across sources: tasks longer than agents can complete reliably, no workflow redesign, value nobody measures, rising running costs, poor data and weak controls. Each has a check a buyer can run before launch.

AI agent projects fail mainly because of escalating costs, unclear business value and agents given long, vague tasks they cannot complete reliably; Gartner expects over 40% of agentic AI projects to be cancelled by the end of 2027. Poor data and weak controls make each cause worse. Projects that survive start with short, checkable work, redesign the workflow around it and measure the result.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

Agent projects fail for reasons that are visible before the contract is signed. This guide sets out the evidence and the checks that catch each cause early. It builds on our hub piece, [What Is an AI Agent?](https://lowob.com/research/what-is-an-ai-agent/), and on the limits described in [What AI Agents Still Cannot Do](https://lowob.com/research/what-ai-agents-still-cannot-do/).

## How many AI agent projects fail?

No one yet measures agent project failure directly, but the forecasts and adjacent data point to a high rate. Gartner expects over 40% of agentic AI projects to be cancelled by the end of 2027.

S&P Global's 451 Research found the share of companies abandoning most AI initiatives before production rose from 17% to 42% in a year, and the average organisation scrapped 46% of proofs of concept. MIT's Project NANDA, in its July 2025 report "The GenAI Divide", was reported as finding 95% of organisations seeing no business return from generative AI. That report combined a review of more than 300 public initiatives with 52 interviews and 153 survey responses, so treat it as directional.

## Why do AI agent projects fail?

Seven causes recur across the evidence. Most projects that fail show more than one.

| Cause | Evidence | Warning sign | Prevention |
| --- | --- | --- | --- |
| Task too long or vague for current reliability | METR: 80% horizons roughly five times shorter than 50% horizons; CRMArena-Pro: about 35% multi-turn success on business tasks (May 2025) | The demo is one impressive end-to-end run | Break the work into short steps a person can check |
| No workflow redesign | McKinsey 2026: nearly three-quarters of high performers redesigned workflows, against one-quarter of others | The agent is added to the old process unchanged | Redraw the process, including who approves what |
| Value never measured | McKinsey 2026: 37% attribute any EBIT impact to AI; KPMG Q3 2026: 12% consistently assess value against cost | No baseline was recorded before launch | Record the before figure and one outcome metric |
| Running costs escalate | Gartner 2025 cites escalating costs; McKinsey 2026: about 20% say AI operating costs, including tokens, constrained use | Usage pricing with no cap or budget owner | Set token or spend budgets per agent |
| Poor data and missing context | Validity 2025: 37% lost revenue to poor CRM data; 76% say less than half of CRM data is accurate and complete | The agent reads records nobody trusts | Clean the records it reads first; mark stale facts |
| Weak controls and excessive agency | OWASP LLM06:2025; KPMG Q3 2026: building controls into agents fell to 30% from 43% two quarters earlier | The agent runs on a person's login or an admin key | Least privilege, approval gates, logs of every action |
| Agent washing | Gartner 2025: only about 130 of thousands of agentic vendors are real | The vendor cannot say what the product decides | Ask what it decides for itself before you buy |

### Tasks too long for current reliability

The most common design error is handing an agent a whole job. METR's original study found that the task length agents complete at 80% success is roughly a fifth of the length they complete at 50%, and that performance is much lower on messier, less structured tasks. On Salesforce AI Research's CRMArena-Pro benchmark, leading agents managed about 58% of single-turn business tasks and about 35% once the task ran over several turns. Commercial work is mostly multi-turn and messy.

### No workflow redesign, no measured value

Projects that bolt an agent onto an unchanged process rarely show a return. McKinsey's distinction between high performers and the rest in 2026 is largely about redesign. Gartner's May 2026 release adds a warning for anyone building the case on headcount: among organisations piloting or deploying autonomous capabilities, about 80% reported workforce reductions, but those reductions did not appear to translate into return on investment.

### Costs, data and controls

Running costs grow with use: each retry, loop and longer context costs tokens. Data quality decides what the agent sees, and an agent reading an inaccurate CRM produces confident, inaccurate work. Controls decide how much damage a wrong step does. OWASP defines excessive agency as damaging actions taken in response to unexpected, ambiguous or manipulated outputs, and names three root causes: excessive functionality, excessive permissions and excessive autonomy.

## What do successful AI agent projects do differently?

They start small, redesign the work and measure it. Zapier's September 2026 vendor survey found 46% of large-company leaders saying their most mature agent had paid for itself or was expected to within 12 months, and the leaders reporting the most autonomy were those whose agents sat inside broader automated workflows.

Our own view, set out in [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/), is that the first agent should be frequent, checkable, low in risk and doing work people dislike. On the commercial line that usually means meeting preparation, CRM hygiene or follow-up drafts held in a queue. Start at autonomy level 1 (draft) and move to level 2 (act with approval) only on evidence from logged runs.

| Before launch, can you show | If not |
| --- | --- |
| A written goal and stop condition | The task is too vague; narrow it |
| The baseline figure the agent should move | You will not be able to prove value |
| A spend cap and the person who owns it | Costs will surprise you |
| The records it reads, and who keeps them accurate | It will repeat your data problems at speed |
| Its permissions, its identity and its approval gate | A wrong step becomes a wrong action |
| One replayed run: what it saw, what it did and who approved | You cannot debug or defend it |

## lowob takeaways

- **Most failure causes are visible early.** Vague goals, no baseline, uncapped costs and broad permissions can all be spotted before launch.
- **Design around the 80% number.** Agents complete far shorter tasks reliably than the 50% figures suggest.
- **Redesign the work.** The leaders in McKinsey's data changed workflows, not only tools.
- **Headcount cuts are not a return.** Gartner found reductions did not translate into ROI.

## Common questions

### Why do AI agent projects fail?

The main causes are escalating costs, unclear business value, tasks too long or vague for current agent reliability, poor data and weak controls. Gartner cites costs and unclear value in its forecast that over 40% of agentic AI projects will be cancelled by the end of 2027. Most failed projects show several causes at once, often starting with a goal nobody wrote down.

### What percentage of AI agent projects fail?

There is no measured failure rate for agents yet. Gartner forecast in June 2025 that over 40% of agentic AI projects will be cancelled by the end of 2027. S&P Global's 451 Research found 42% of companies abandoning most AI initiatives before production, and the average organisation scrapping 46% of proofs of concept, in a survey fielded in late 2024.

### How do you make an AI agent project succeed?

Start with frequent, checkable, low-risk work, record a baseline before launch and redesign the workflow around the agent. Give it its own identity, the fewest permissions it needs and an approval gate for anything external. McKinsey's 2026 survey found nearly three-quarters of AI high performers had fundamentally redesigned workflows, against one-quarter of others.

### Do AI agents fail because of bad data?

Often. An agent acts on what it reads, so inaccurate records become inaccurate actions. Validity's 2025 report found 76% of CRM users saying less than half of their CRM data is accurate and complete, and 37% losing revenue as a direct consequence of poor data quality. Clean and mark the records an agent will read before it goes live.

## In the news

- 9 November 2026 · Zapier[Zapier surveys 513 US leaders on AI agents](https://lowob.com/news/#2026-11-09-zapier-surveys-513-us-leaders-on-ai-agents)A vendor survey, so read it as direction rather than proof. It is useful for the gap between agents planned and agents running in production.
- 24 September 2026 · KPMG[KPMG Q3 2026 AI Pulse survey](https://lowob.com/news/#2026-09-24-kpmg-q3-2026-ai-pulse-survey)Large-company leaders on agent deployment. Useful as a benchmark for how far peers have actually got.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

## Sources and notes

- Gartner forecast on cancellations and agent washing, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says), 25 June 2025. Secondary report of an analyst prediction.
- [Gartner, autonomous business and AI layoffs do not deliver returns](https://gartner.com/en/newsroom/press-releases/2026-05-05-gartner-says-autonomous-business-and-artificial-intelligence-layoffs-may-create-budget-room-but-do-not-deliver-returns), 5 May 2026. Analyst survey of 350 executives at $1bn+ organisations, Q3 2025.
- [S&P Global Market Intelligence, Generative AI shows rapid growth but yields mixed results](https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/10/generative-ai-shows-rapid-growth-but-yields-mixed-results), 27 October 2025. 451 Research survey of 1,006 respondents, October to November 2024.
- MIT Project NANDA, The GenAI Divide: State of AI in Business 2025, July 2025, as reported by [Virtualization Review](https://virtualizationreview.com/Articles/2025/08/19/MIT-Report-Finds-Most-AI-Business-Investments-Fail-Reveals-GenAI-Divide.aspx), 19 August 2025. Secondary report; small interview and survey sample.
- [Kwa et al. (METR), Measuring AI Ability to Complete Long Software Tasks](https://arxiv.org/abs/2503.14499), version 4, 10 July 2026. Independent evaluator; software, ML and cyber tasks.
- [Huang et al., CRMArena-Pro](https://arxiv.org/abs/2505.18878), May 2025. Benchmark by Salesforce AI Research; simulated CRM tasks.
- [McKinsey, The state of AI in 2026](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai), 25 August 2026. Consultancy survey of 1,719 respondents; self-reported.
- [KPMG, Q3 2026 AI Pulse](https://kpmg.com/us/en/media/news/q3-ai-pulse-2026.html), 24 September 2026, and [Q3 Global AI Pulse](https://kpmg.com/xx/en/media/press-releases/2026/09/new-kpmg-ai-pulse-survey-as-ai-maturity-converges-leading-organizations-show-what-ai-at-scale-requires.html). Consultancy surveys; KPMG sells AI services.
- [Validity, The State of CRM Data Management in 2025](https://validity.com/resource-center/the-state-of-crm-data-management-in-2025). Vendor survey of 602 CRM users; Validity sells CRM data tools.
- [OWASP, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/). Community security standard.
- [Zapier, AI agents survey](https://zapier.com/blog/ai-agents-survey/), updated 9 November 2026. Vendor survey of 513 US leaders, September 2026.

## Related research

- [What Is an AI Agent, and Where Does It Fit in the Brain?](https://lowob.com/research/what-is-an-ai-agent/)
- [What AI Agents Still Cannot Do, and How to Tell Before You Buy](https://lowob.com/research/what-ai-agents-still-cannot-do/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [AI Agent Statistics 2026: Adoption, Spend, Reliability and Failure Rates](https://lowob.com/research/ai-agent-statistics-2026/)

## Next move

Take the agent project closest to launch and fill in the six-line pre-launch table above. Any line you cannot answer is the most likely reason it will fail; fix that line first.

[Start a conversation](https://lowob.com/contact/)
