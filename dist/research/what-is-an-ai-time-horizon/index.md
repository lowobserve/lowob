# What Is an AI Agent's Time Horizon?

Source: https://lowob.com/research/what-is-an-ai-time-horizon/
Publisher: lowob (https://lowob.com)
Published: 2026-06-07 · Updated: 2026-11-16
Function: Strategy

> Summary: METR's task-completion time horizon measures how long a task, timed on skilled humans, an AI agent can finish with 50% reliability. It has roughly doubled every seven months since 2019, and faster recently. It is mostly measured on software tasks, and a 50% success rate is far from what client work needs.

An AI agent's time horizon is the length of task, measured by how long it takes a skilled human, that the agent can complete with a stated probability, usually 50%. The measure comes from METR, an AI evaluation non-profit, which found that the 50% horizon of frontier models has doubled roughly every seven months since 2019. It is a useful signal of how fast agents are improving, and a poor guide to how much client work an agent can be trusted with unsupervised.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What the time horizon means

METR times skilled people on a suite of tasks, mostly software, machine learning and related technical work, ranging from seconds to many hours. It then runs AI agents on the same tasks and fits a curve of success rate against human task length. The 50% time horizon is the human task length at which the agent succeeds half the time.

In the original March 2025 study, models succeeded almost always on tasks taking humans under about four minutes and less than 10% of the time on tasks over about four hours. Claude 3.7 Sonnet's 50% horizon was about one hour.

| The time horizon is | The time horizon is not |
| --- | --- |
| The human task length an agent completes 50% of the time | How long the agent itself takes to run |
| Measured mainly on software and research tasks | A measure of sales, legal or account management work |
| A trend line for comparing models over time | A guarantee for any single task |
| Sensitive to task choice and human baselines, by METR's own account | A precise number to plan staffing on |

## What the trend shows

**Doubling.** METR's original estimate was a doubling every seven months over roughly six years. When it fitted only 2024 and 2025 data, forecasts for month-long tasks came about 2.5 years sooner, which METR flagged as a real source of model uncertainty.

**Time Horizon 1.1.** In January 2026 METR increased its suite from 170 to 228 tasks, raised the number of tasks over eight hours from 14 to 31, and moved to the Inspect evaluation framework. Under TH1.1 the doubling time since 2023 was about 131 days and since 2024 about 89 days. Claude Opus 4.5 had the highest TH1.1 estimate reported in that post, 320 minutes, with a wide confidence interval of 170 to 729 minutes.

**Limits.** METR's time-horizons page, last updated in September 2026 and no longer actively maintained, says measurements above 16 hours are unreliable with the current suite. Its July 2025 cross-domain study found exponential trends across nine benchmarks, but with horizons ranging widely: software, maths and question answering clustered around 50 to 200 minutes or more, while visual computer use was 40 to 100 times shorter. METR also cautions that benchmarks are likely easier for models than real-world tasks.

> A 50% time horizon tells you how fast agents are improving. It does not tell you what to let them send.

## How a business should use it

The measure answers a research question, not an operating one. Four adjustments make it useful for planning.

| Adjustment | Why |
| --- | --- |
| Discount for reliability | Client work needs far more than 50% success; METR notes that measuring 99% would need many more, very short tasks |
| Discount for domain | Commercial work involves screens, documents and judgment, often closer to computer-use tasks than to code |
| Separate capability from speed-up | In a separate METR trial, 16 experienced developers took 19% longer with AI tools while believing they were about 20% faster |
| Keep a person at the gate | Longer horizons mean longer unsupervised chains, so errors compound before anyone looks |

The practical reading is that agents will take on longer chains of work each year, and that the share of a workflow an agent can draft will grow. It argues for building the context layer, the decision record and the approval gate now, so that when an agent can handle a two-day task, the firm has the evidence to decide whether to let it.

## lowob takeaways

- **Know what is measured.** Human task length at 50% success, mostly on software tasks.
- **Expect fast change.** Horizons have doubled every few months on METR's recent estimates.
- **Discount for your work.** Higher reliability needs and different domains shorten the useful horizon.
- **Raise autonomy on your own evidence.** Benchmarks set expectations; your error rates set the dial.

## Sources and notes

- [METR, Measuring AI ability to complete long tasks](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/), 19 March 2025. Original study; METR notes some figures predate TH1.1.
- [METR, Time Horizon 1.1](https://metr.org/blog/2026-01-29-time-horizon-1-1/), 29 January 2026. Updated task suite and doubling estimates.
- [METR, Task-completion time horizons of frontier AI models](https://metr.org/time-horizons/), last updated 8 September 2026. Methodology page; no longer actively updated.
- [METR, How does time horizon vary across domains?](https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains), 14 July 2025. Cross-benchmark analysis; METR calls many estimates noisy.
- [The Decoder, AI coding can make developers slower even if they feel faster](https://the-decoder.com/ai-coding-can-make-developers-slower-even-if-they-feel-faster/), 11 July 2025. Press report of METR's randomised trial.

## Related research

- [What is an AI agent?](https://lowob.com/research/what-is-an-ai-agent/)
- [The first AI agent should be boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [Where judgment arrives first](https://lowob.com/research/where-judgment-arrives-first/)
- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)

## Next move

Time one recurring commercial task end to end, such as preparing an account review. Compare it with the horizons above, then test an agent on the first draft only, and record its error rate before giving it more.

[Start a conversation](https://lowob.com/contact/)
