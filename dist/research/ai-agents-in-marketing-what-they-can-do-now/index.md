# AI Agents in Marketing: What They Can Do Now, Task by Task

Source: https://lowob.com/research/ai-agents-in-marketing-what-they-can-do-now/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Growth

> Summary: A task-by-task guide to AI agents in marketing, built on the thirteen marketing rows of the lowob Agent Task Directory. Agents draft well and monitor well; they should not publish, move budget or speak for the company alone. The guide maps each task to the layer of the brain it depends on, sets a starting autonomy level, and names the first three tasks to hand over.

Marketing has more tasks rated High reliability than any other function in the **lowob** Agent Task Directory, and fewer that should run alone. Agents monitor competitors, draft campaign variants, write content briefs and assemble monthly reports well. The limits come from where marketing output goes: to the public, to regulators and to the budget. Of thirteen tasks, three can act and report, three can act with approval and seven stay as drafts, including publishing and budget moves. Start with monitoring, interview-to-draft content and the monthly report.

*Figure: Where this piece sits: the commercial line, where the build starts.*

Marketing teams adopted generative tools earlier than most functions, and the pressure to go further is real. Gartner's 2025 CMO Spend Survey of 402 marketing leaders found budgets flat at 7.7% of company revenue, with 59% saying they lack the funds to deliver their strategy and 22% saying generative AI has reduced their reliance on external agencies. That pressure pushes teams toward agents that publish and optimise on their own. The ratings below explain why the drafting tasks should be automated first and the publishing tasks last.

The ratings are **lowob**'s working framework for 20 to 500 person teams, from the [Agent Task Directory](https://lowob.com/research/what-ai-agents-can-do-task-directory/), reviewed quarterly. They assume the listed control is in place. Without it, drop the task one level.

## The thirteen marketing tasks, rated

| Task | Autonomy | Reliability today | Main risk | Control |
| --- | --- | --- | --- | --- |
| Monitor competitors and market news | 3 Act and report | High | Missing a material change | Named sources; weekly human read |
| Turn an interview into draft posts | 1 Draft | High | Claims the company cannot support | Claims checked by a subject owner |
| Publish social posts | 1 Draft | Medium | Public error; regulatory breach in finance or crypto | Nothing publishes without a person |
| Draft campaign variants for testing | 1 Draft | High | Off-brand or unapproved claims | Brand and claims rules in context |
| Reallocate campaign budget | 1 Draft | Low | Spend moved on weak evidence | Budget holder approves; record expected outcome |
| Build audience segments from CRM data | 2 Act with approval | Medium | Consent or privacy breach | Consent fields respected; privacy review |
| Write SEO and answer-engine content briefs | 1 Draft | High | Thin or duplicative content | Editorial owner; check existing pages first |
| Draft long-form research | 1 Draft | Medium | Invented sources or statistics | Every figure opened and cited by a person |
| Score leads | 3 Act and report | Medium | Scores that encode old bias | Quarterly calibration against outcomes |
| Produce a monthly marketing report | 3 Act and report | High | Activity reported as impact | Report against agreed outcome measures |
| Personalise website content | 2 Act with approval | Medium | Wrong message to the wrong audience | Approved variants only |
| Reply to community questions | 1 Draft | Medium | Wrong or market-moving statements | Named communications owner approves |
| Translate and localise approved content | 2 Act with approval | Medium | Mistranslated claims in regulated markets | Native reviewer for regulated content |

The split between reliability and autonomy is the main lesson of this table. Drafting campaign variants is High reliability and still level 1, because a variant goes in front of the public once approved. Lead scoring is Medium reliability and level 3, because a score is internal, reversible and can be calibrated against closed deals. Autonomy follows the consequence of an error, not the quality of the average output.

## Where each task plugs into the brain

The brain is a loop: the **store** (CRM, analytics, ad platforms, content library), the **context** layer that applies definitions, brand rules and consent, the **record** of decisions with reason, owner and expected outcome, **reasoning** by models and agents, and **learning** when outcomes return. Marketing tasks lean harder on context than sales tasks, because brand rules, claims rules and consent all live there.

| Task | Main layer | Start at | Move up when |
| --- | --- | --- | --- |
| Competitor and market monitoring | Context | 3 | Named source list agreed first |
| Interview to draft posts | Reasoning | 1 | Stays at 1 |
| Publish social posts | Record | 1 | Stays at 1 |
| Campaign variants | Context | 1 | Stays at 1 |
| Budget reallocation | Record | 0, then 1 | Expected outcomes recorded for a quarter |
| Audience segments | Context | 1, then 2 | Consent fields complete and tested |
| SEO and answer-engine briefs | Context | 1 | Stays at 1 |
| Long-form research drafts | Reasoning | 1 | Stays at 1 |
| Lead scoring | Learning | 2, then 3 | One quarter of calibration against outcomes |
| Monthly marketing report | Learning | 2, then 3 | Outcome measures agreed with finance |
| Website personalisation | Context | 1, then 2 | Variant library approved |
| Community replies | Record | 1 | Stays at 1 |
| Translation and localisation | Context | 1, then 2 | Glossary of approved claims per market |

Seven of thirteen tasks stay at level 1 for the foreseeable future. That is not a verdict on the technology. It reflects that the output is public, and that public statements carry legal weight regardless of who drafted them.

## The five tasks that decide the programme

### Publishing and community replies

These two are rated level 1 for the same reason: they are the company speaking. Regulators treat AI-drafted statements like any other. In September 2024 the FTC announced Operation AI Comply, five actions including one against a writing tool used to generate fake consumer reviews, with the chair stating there is "no AI exemption from the laws on the books". The FTC's 2024 rule on fake reviews and testimonials covers reviews attributed to people who do not exist, which includes AI-generated ones, and allows civil penalties against knowing violators.

In finance and crypto the stakes rise. The FCA's FG24/1 guidance on social media promotions says the rules are technology neutral, that firms remain responsible for every promotion they make or cause to be made, and that an unapproved promotion by an unauthorised person may be a criminal offence under section 21 of FSMA. It notes that memes are common in cryptoasset promotion and can fall within the regime. A community agent that answers a token question in a public channel is making a statement the firm owns. The *Moffatt v. Air Canada* tribunal reached the same conclusion about a chatbot in 2024. The control is a named communications owner who approves every public reply. [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/) sets out the gate.

### Long-form research and content briefs

Agents are good at structuring a brief, checking what the site already says and drafting a first pass. They also confabulate. NIST's Generative AI Profile (AI 600-1, July 2024) defines confabulation as "the production of confidently stated but erroneous or false content". In research content this shows up as invented statistics and plausible but wrong citations. The control is non-negotiable: a person opens every source and checks every figure before publication.

Search engines do not penalise AI drafting as such. Google's guidance on AI-generated content says its focus is "on the quality of content, rather than how content is produced", while using automation primarily to manipulate rankings breaches its spam policies. The real risk with briefs is duplication: a site that publishes ten near-identical answers to one question. That is why the control is to check existing pages first. See our [LLM optimisation checklist](https://lowob.com/research/llm-optimization-checklist/) for the editorial test.

### Audience segments from CRM data

Segmentation is level 2 because the failure is a privacy breach, not a bad open rate. The UK ICO's guidance on electronic mail marketing says organisations normally must have consent before sending unsolicited marketing email to individual subscribers. It applies the same rule to sole traders and ordinary partnerships, and states there is no third-party list that is compliant with the soft opt-in. Corporate subscribers can be emailed without consent, but the identity rules still apply. An agent building segments must read consent fields as hard filters, and a privacy reviewer approves any segment that crosses jurisdictions or data sources. This is the context layer's permission job, done before the reasoning starts.

### Budget reallocation

Moving spend is rated level 1 and Low reliability. Platform dashboards report attributed conversions that may not reflect incremental effect, and an agent that optimises toward the dashboard can move money confidently in the wrong direction. Our piece on [attribution versus incrementality](https://lowob.com/research/attribution-vs-incrementality/) covers the measurement problem. The control is a budget holder who approves each move and records the expected outcome: the metric, the size of the change and the date to check. Without that entry, the learning layer has nothing to grade.

### Lead scoring

Scoring is one of the few level 3 tasks in marketing. It is internal and reversible, and it can be tested against what actually closed. The risk is that a model trained on last year's wins encodes last year's market. The control is quarterly calibration: compare score bands with conversion and revenue, and retrain or reweight when a band drifts. Run the new score alongside the old one for a quarter before it routes leads.

> In marketing, autonomy follows where the output goes, not how good the draft is.

## Start here: the first three tasks

The best first marketing tasks are internal, frequent and quick to check.

1. **Monitor competitors and market news.** Level 3 from the start, with a named source list and a weekly digest a person reads. Baseline: how often the team learned of a material change late. Control: the source list is reviewed monthly.
2. **Turn founder and customer interviews into draft posts.** Level 1. The agent drafts from the transcript; a subject owner checks every claim; a person publishes. Baseline: drafts produced per interview and time to first draft. See the [founder interview content engine](https://lowob.com/research/founder-interview-content-engine/) for the workflow.
3. **Produce the monthly marketing report.** Level 2 for the first two cycles, then level 3. The agent pulls the figures and drafts the commentary; the marketing lead checks it against agreed outcome measures, not activity counts. Baseline: hours spent assembling the report.

Campaign variants and content briefs are the natural next pair. Segments, personalisation and translation follow once consent fields and approved libraries are in place. Publishing, community replies and budget moves stay with a person.

Illustrative example: re-scoping a marketing agent request

Decision
:   Replace a proposed agent that would post to social channels and adjust paid budgets with three internal tasks: competitor monitoring, interview-to-draft posts and the monthly report.

Reason and owner
:   The firm markets a regulated financial product, so every public post needs approval, and the paid dashboards had no incrementality test. Owned by the marketing lead, with compliance approving the posting workflow.

What changed
:   Draft volume rises with no unapproved post published; budget moves are logged with expected outcomes, and the first quarter's entries are graded at the next planning cycle.

Illustrative: a composite of a mid-size fintech marketing team, built from patterns across engagements.

## How to move a marketing task up the dial

Use the same three tests as in [Part 1](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/). The control has run for four weeks or more. A weekly random sample shows errors that are few and internal. The decision touched is recorded with a reason and an expected outcome. For marketing add a fourth: the task's output has not reached the public without a person's approval. If any public error occurs, drop the task one level until the cause is fixed and recorded.

## lowob takeaways

- **Automate the draft, not the publish.** Seven of thirteen tasks stay at level 1 because their output is public.
- **Put brand, claims and consent rules in context.** Most marketing failures start at the context layer.
- **Open every figure.** Confabulation is a known property of the models, not an edge case.
- **Record the expected outcome of every budget move.** Otherwise the learning layer has nothing to grade.

Gateway card

### Before a marketing agent goes live

- Task found in the directory and set at or below its level
- Brand and claims rules loaded into the agent's context
- Consent fields used as hard filters for any segment
- Named owner for every public channel; no publish permission for the agent
- A person opens every source in research content
- Budget moves logged with metric, expected change and check date

## Sources and notes

- [Federal Trade Commission, FTC Announces Crackdown on Deceptive AI Claims and Schemes](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes?os=f), 25 September 2024. US enforcement; one case was decided by a 3-2 vote.
- [Federal Trade Commission, Final Rule Banning Fake Reviews and Testimonials](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials), 14 August 2024. US rule; penalties apply to knowing violators.
- [Financial Conduct Authority, FG24/1: Finalised guidance on financial promotions on social media](https://www.fca.org.uk/publication/finalised-guidance/fg24-1.pdf), March 2024. UK regulated financial promotions only; guidance, not new rules.
- [Information Commissioner's Office, How do we comply with the PECR electronic mail marketing rules?](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/), page dated October 2026. UK rules; other jurisdictions differ.
- [NIST, AI 600-1: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024. Voluntary US framework; defines risks rather than measuring their frequency.
- [Google Search Central, Google Search's guidance about AI-generated content](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content), February 2023. Google's stated policy; ranking behaviour is not independently verified.
- [Gartner, 2025 CMO Spend Survey](https://www.gartner.com/en/newsroom/press-releases/2025-05-12-gartner-2025-cmo-spend-survey-reveals-marketing-budgets-have-flatlined-at-seven-percent-of-overall-company-revenue), 12 May 2025. Analyst survey of 402 leaders, mostly at companies above $1 billion revenue; larger firms than this guide's readers.
- [Civil Resolution Tribunal of British Columbia, Moffatt v. Air Canada, 2024 BCCRT 149](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do). Provincial small-claims decision; persuasive, not binding elsewhere.
- Autonomy levels, reliability ratings, brain-layer mapping and starting levels are **lowob**'s working framework, reviewed quarterly.

## Related research

- [What AI Agents Can Do: A Task Directory for Commercial Teams](https://lowob.com/research/what-ai-agents-can-do-task-directory/)
- [How Marketing Teams Use AI](https://lowob.com/research/how-marketing-teams-use-ai/)
- [Attribution vs Incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [The Founder Interview Content Engine](https://lowob.com/research/founder-interview-content-engine/)
- [AI Agents in Sales: What They Can Do Now, Task by Task](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/)

## Next move

Check which of your marketing tools can publish, post or change spend without a person's click. Remove that permission this week, and log each budget move from now on with its expected outcome and check date.

[Start a conversation](https://lowob.com/contact/)
