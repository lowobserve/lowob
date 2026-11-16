# What AI Agents Still Cannot Do, and How to Tell Before You Buy

Source: https://lowob.com/research/what-ai-agents-still-cannot-do/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Across sixty commercial tasks in the lowob directory, none is rated for an agent acting alone and six are rated low reliability. Five failure patterns explain the limits: long horizons, changed facts, prompt injection, excessive agency and judgement calls with no graded precedent. Benchmarks confirm fast progress on well-specified tasks and much weaker reliability on messy, repeated work. A seven-question buyer test separates genuine agents from rebadged automation.

AI agents can now complete multi-hour software tasks half the time, and they still cannot be trusted alone with most commercial work. Across the sixty tasks in the **lowob** directory, none is rated for level 4 (act alone), and six are rated low reliability: pricing, discounts, autonomous outbound, budget moves, shared definitions and access changes. Five failure patterns explain why: long horizons, changed facts, prompt injection, excessive agency, and judgement calls with no graded precedent. Gartner expects over 40% of agentic AI projects to be cancelled by the end of 2027. A buyer who asks seven plain questions before signing can avoid being one of them.

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

The previous five parts of this series walked the [**lowob** Agent Task Directory](https://lowob.com/research/what-ai-agents-can-do-task-directory/) one function at a time: sales, marketing, commercial operations, partners and customer success. This part looks across all sixty tasks at once and asks where the ceiling is, why it is there, and how a buyer can tell a genuine agent from a relabelled chatbot before the contract is signed.

## The shape of the limit across sixty tasks

The ratings describe a clear boundary. Agents are rated highly on internal, frequent, checkable work, and held back wherever work reaches a client, commits money or changes who can see what.

| Measure across 60 tasks | Count | What it says |
| --- | --- | --- |
| Rated level 4 (act alone) | 0 | No commercial task in the directory warrants approval-free action with no report |
| Rated level 3 (act and report) | 21 | Agents act within fixed bounds and report, mostly on internal records |
| Rated level 2 (act with approval) | 7 | A named person approves each action |
| Rated level 1 (draft) | 29 | The largest group: the agent prepares, a person decides |
| Rated level 0 (answer) | 3 | The agent informs a decision it must never make |
| High reliability | 24 | Research, summaries, monitoring, record hygiene, internal drafts |
| Medium reliability | 30 | Useful with review; quality varies with data and definitions |
| Low reliability | 6 | The agent's output should not be relied on without full human work |

### The six low-reliability tasks

| Function | Task | Autonomy | Main risk | Failure pattern behind it |
| --- | --- | --- | --- | --- |
| Sales | Price a proposal | 1 Draft | Margin loss; inconsistent pricing | Judgement with no graded precedent |
| Sales | Approve a discount | 0 Answer | Commits money without accountability | Judgement with no graded precedent |
| Sales | Send outbound sequences autonomously | 2 Act with approval | Reputational and deliverability damage | Excessive agency; long horizon |
| Marketing | Reallocate campaign budget | 1 Draft | Spend moved on weak evidence | Judgement with no graded precedent |
| Commercial operations | Maintain shared definitions | 0 Answer | Definitions drift silently | Changed facts |
| Commercial operations | Grant or change system access | 0 Answer | Excessive agency; data exposure | Excessive agency; prompt injection |

Three of the six are commercial judgement calls on money. Two are about control of the system itself. One, autonomous outbound, is the most requested first agent in commercial teams and the one we most often advise against, for the reasons set out in [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/).

## Five failure patterns

Each low and most medium ratings trace back to one of five patterns. None is a simple bug. Each is a property of how current agents work, and each has a control.

| Pattern | What happens | Evidence | Tasks most exposed | Control |
| --- | --- | --- | --- | --- |
| Long horizons | Success falls as tasks lengthen and steps compound | METR time horizons; TheAgentCompany | Autonomous outbound; end-to-end case resolution; forecasting | Break work into short, checkable steps |
| Changed facts | The agent weighs an outdated fact as current | MEMTRACK; directory risks marked "stale" | Account research; shared definitions; QBR decks | Mark records current or superseded |
| Prompt injection | Instructions hidden in inbound content steer the agent | OWASP LLM01:2025 | Marketplace leads; community replies; inbound email | Read-only agents for untrusted input |
| Excessive agency | Too many tools or permissions turn an error into damage | OWASP LLM06:2025 | Access changes; outbound sending; budget moves | Least privilege; approval for high-impact actions |
| No graded precedent | The agent has no record of similar past calls and how they turned out | **lowob** directory; Gartner on maturity | Pricing; discounts; budget; account prioritisation | Record decisions and write outcomes back |

### Long horizons

The longer a task runs, the more steps can go wrong, and errors compound. Carnegie Mellon's TheAgentCompany benchmark simulates a small software company with internal chat, code hosting, file storage and project tools. In its September 2025 version, the best agent completed about 30% of 175 tasks autonomously, rising to 39.3% with partial credit. Administrative, finance and data science tasks scored lowest, as did tasks requiring conversation with simulated colleagues. Those are the categories closest to commercial work.

### Changed facts

Commercial facts change: a price book is revised, a contact leaves, a definition of "qualified" is tightened. Patronus AI's MEMTRACK benchmark tested agents on timelines of interleaved, noisy and sometimes conflicting messages across Slack, Linear and Git. The best model reached about 60% correctness. The failure is rarely that the agent cannot find the information. It finds both the old and the new, and weighs them badly. Our view, set out in [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/), is that the fix sits in the record: each fact marked current or superseded, so the agent does not have to guess.

### Prompt injection

An agent reads instructions wherever they appear. OWASP's LLM01:2025 entry distinguishes direct injection, from a user's own prompt, and indirect injection, from external content such as a web page or file. It states that it is unclear whether fool-proof prevention exists, given the stochastic nature of the models. Simon Willison's "lethal trifecta" gives buyers a practical test: an agent that combines access to private data, exposure to untrusted content and the ability to communicate externally can be made to leak data. Every agent that reads inbound email, partner portal submissions or community posts is exposed. See [What Is Prompt Injection?](https://lowob.com/research/what-is-prompt-injection/)

### Excessive agency

OWASP's LLM06:2025 defines excessive agency as a system taking damaging actions in response to unexpected, ambiguous or manipulated outputs. It names three root causes: excessive functionality, excessive permissions and excessive autonomy. Its mitigations are architectural: grant the minimum tools and permissions, enforce authorisation in downstream systems rather than trusting the model, and require human approval for high-impact actions. This is why "grant or change system access" sits at level 0 in the directory and is never delegated.

### Judgement calls with no graded precedent

Pricing an unusual deal, approving a discount, moving budget between channels and choosing which accounts to prioritise are low-volume calls whose outcomes arrive months later. The agent has nothing to learn from unless the company recorded similar past decisions with their reasons and what happened next. Most companies have not. Gartner's analyst Anushree Verma made a related point when explaining the cancellation forecast: current models lack the maturity to pursue complex goals autonomously. A record with graded outcomes does not make the model wiser. It gives the person approving the call better evidence.

> An agent that has never seen how your last ten discounts turned out is not making a judgement. It is making a guess with good grammar.

## What benchmarks and time horizons show

The most cited independent measure is METR's task-completion time horizon: the length of task, measured in expert human time, that an agent completes at a given success rate.

| Measure | Figure | Status |
| --- | --- | --- |
| Claude Opus 4.5, 50% time horizon (Time Horizon 1.1, January 2026) | About 320 minutes; 95% interval 170 to 729 minutes | Published by METR |
| Task suite | 228 tasks, of which 31 take humans eight hours or more; only 5 of those 31 have measured human baselines | Published by METR |
| Doubling time since 2023 | About 131 days under the updated suite | Published by METR |
| 80% horizon versus 50% horizon | Roughly five times shorter | METR's original study (arXiv 2503.14499) |
| Later 2026 model figures | Higher estimates have circulated | Secondary coverage only; not used here |
| TheAgentCompany, best agent | About 30% of 175 workplace tasks completed | Academic benchmark, September 2025 |
| τ-bench, consistency over eight attempts | Below 25% in retail for the leading agent tested | Academic benchmark, June 2024; authors at a service AI vendor |

Three readings matter for a buyer. First, the 50% figure describes a coin toss, not a delegated job. METR's original study put 80% horizons at roughly a fifth of the 50% figure, and that is closer to the reliability a commercial process needs. Second, the tasks are software, machine learning and cybersecurity tasks with checkable answers. METR's own study found lower performance on messier, less structured tasks, which is what most commercial work is. Third, consistency is its own problem. τ-bench introduced pass^k, the chance that an agent succeeds on all of k repeated trials of the same task. An agent that succeeds once may fail the next three times on an identical request. A business process runs the same task hundreds of times.

The trend is real and fast. That is why the directory is re-rated quarterly. But the gap between benchmark progress and commercial reliability closes more slowly than headlines suggest. Our explainer [What Is an AI Time Horizon?](https://lowob.com/research/what-is-an-ai-time-horizon/) covers the method in more depth.

## Why so many projects will be cancelled

Gartner's June 2025 forecast was that over 40% of agentic AI projects will be cancelled by the end of 2027, because of escalating costs, unclear business value or inadequate risk controls. In a January 2025 Gartner poll of 3,412 webinar attendees, 19% reported significant investment in agentic AI and 42% conservative investment. Gartner also named "agent washing": vendors relabelling assistants, robotic process automation and chatbots as agentic without substantial agentic capability. It estimated that only about 130 of the thousands of agentic vendors were genuine, and noted that many use cases positioned as agentic do not need agentic implementations at all.

The three cancellation causes map onto the five failure patterns. Cost escalates when long-horizon tasks loop and retry. Value stays unclear when nobody records the decision and writes back the outcome. Risk controls fail when excessive agency meets untrusted content.

## A buyer test for agent washing

Ask a vendor these seven questions. Write down the answers. A genuine agent product will answer most of them specifically. A washed one will answer in adjectives.

| Question | A genuine answer | A washing answer |
| --- | --- | --- |
| What does it decide for itself? | Names the choices: which tool, which record, when to stop | "It uses AI to automate your workflow" |
| What is the stop condition? | A defined goal, step limit or spend cap | No answer, or "it runs until done" |
| What can it touch, and with whose identity? | Lists tools and permissions; runs as its own registered identity | Uses a person's login or an admin key |
| Which actions need approval? | A configurable gate per action type, with logs of who approved | "You can review outputs" |
| Can I replay one run? | Shows what it read, what it did and who approved it | Shows a summary or a dashboard only |
| What is its success rate on tasks like mine, measured how? | A rate on a defined sample, ideally repeated, with the grading method | A single demo or a customer logo |
| How does it handle untrusted inbound content? | Separates reading from acting; names its injection controls | "Our model is trained to ignore attacks" |

If the answer to the first question is "nothing", the product is automation. That is not a criticism: automation is often the right tool. It should be bought, tested and priced as automation, and our explainer [What Is Agent Washing?](https://lowob.com/research/what-is-agent-washing/) sets out how.

Illustrative example: running the buyer test on two proposals

Decision
:   Accept a meeting-preparation agent at level 1 and decline an "autonomous revenue agent" pending answers to four of the seven questions.

Reason and owner
:   The first vendor named its tools, stop condition and approval gate and replayed a run. The second could not say what its product decided for itself, ran on a shared admin key and offered a demo in place of a measured success rate. Owned by the chief operating officer.

What changed
:   The second proposal was reclassified as workflow automation and re-scoped against automation pricing; the first went into a four-week pilot with a weekly spot-check.

Illustrative: a composite of a 150-person professional services firm, built from patterns across engagements.

## lowob takeaways

- **No commercial task warrants level 4 today.** Across sixty tasks, the ceiling is act and report on internal work.
- **Plan around the reliable number.** A 50% time horizon is a draft; the 80% horizon is roughly a fifth as long.
- **Most limits are structural.** Long horizons, changed facts, injection, excessive agency and missing precedent each need a control, not a better model.
- **Ask what it decides for itself.** If the answer is nothing, buy it as automation.

Gateway card

### Before you buy an agent

- The vendor has named what the product decides, its stop condition and its tools
- It runs as its own identity with least-privilege permissions
- High-impact actions pass an approval gate that logs who approved
- You have replayed one complete run
- A success rate measured on tasks like yours, over repeated trials
- Untrusted inbound content cannot trigger external actions

## Sources and notes

- [METR, Time Horizon 1.1](https://metr.org/blog/2026-01-29-time-horizon-1-1/), January 2026. Independent evaluator; software, ML and cyber tasks; wide confidence intervals on long tasks.
- [Kwa et al. (METR), Measuring AI Ability to Complete Long Software Tasks](https://arxiv.org/abs/2503.14499). Preprint under review; source of the 80% versus 50% comparison and the messiness finding.
- [Xu et al., TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://arxiv.org/abs/2412.14161), version of September 2025. Simulated company; results depend on the models and scaffolds tested.
- [Yao et al., τ-bench](https://export.arxiv.org/pdf/2406.12045), June 2024. Simulated retail and airline tasks; authors from a customer service AI vendor; models since superseded.
- [Patronus AI, MEMTRACK](https://arxiv.org/abs/2510.01353), October 2025. Workshop paper; simulated multi-platform workflows; authors are an AI evaluation vendor.
- [OWASP, LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) and [LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/). Community security standard; general controls, not product tests.
- [Simon Willison, The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), June 2025. Practitioner analysis, not a standard.
- Gartner forecast, June 2025, as reported by [Reuters via The Star](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says) and [W.Media](https://w.media/over-40-percent-of-agentic-ai-projects-could-face-the-axe-by-end-of-2027-gartner/). Secondary reports of an analyst prediction; Gartner's own release could not be opened for this piece.
- Task counts, ratings, failure-pattern mapping and the buyer test are **lowob**'s working framework for mid-size commercial teams, reviewed quarterly; they are not a benchmark.

## Related research

- [What AI Agents Can Do: A Task Directory for Commercial Teams](https://lowob.com/research/what-ai-agents-can-do-task-directory/)
- [What Is Agent Washing?](https://lowob.com/research/what-is-agent-washing/)
- [What Is an AI Time Horizon?](https://lowob.com/research/what-is-an-ai-time-horizon/)
- [What Is Excessive Agency?](https://lowob.com/research/what-is-excessive-agency/)
- [The First AI Agent Should Be Boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)

## Next move

Take the agent proposal closest to signature and put the seven buyer questions to the vendor in writing. Do not sign until you have replayed one complete run.

[Start a conversation](https://lowob.com/contact/)
