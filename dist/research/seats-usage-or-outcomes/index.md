# Seats, usage or outcomes

Source: https://lowob.com/research/seats-usage-or-outcomes/
Publisher: lowob (https://lowob.com)
Published: 2026-04-29 · Updated: 2026-11-16
Function: Revenue

> Summary: Pick the pricing model that matches how value shows up, know your cost per task, and report the eight numbers that show whether the business works. Seats fit when a named person uses the product daily; usage fits when value scales with volume; outcomes fit when both sides trust the measurement. Most AI companies now land on a hybrid: Kyle Poyar's 2026 survey of 230 software companies found 37% use one, up from 25% a year earlier. Whatever the model, a price set without a known cost per task is a guess.

## Key points

- Seats fit daily human use, usage fits volume, and outcomes fit results both sides can measure and trust.
- Large vendors now sell all three at once: Salesforce lists Agentforce at $125 per user per month, $2 per conversation or $500 per 100,000 Flex Credits.
- Cost per task is model cost plus compute plus human review, divided by tasks completed. In our worked example, human review costs five times more than the model.
- Outcome pricing lives or dies on the definition. Intercom's billable unit changed from "resolution" to "outcome" in March 2026 and now includes some handoffs to humans.
- Report eight monthly numbers, from activation to cost per acquired team, and stop reporting sign-ups and prompts sent.

This page is the hub of **lowob**'s pricing library. Each model has its own explainer: [seat-based pricing](https://lowob.com/research/what-is-seat-based-pricing-for-ai/), [usage-based pricing](https://lowob.com/research/what-is-usage-based-pricing-for-ai/) and [outcome-based pricing](https://lowob.com/research/what-is-outcome-based-pricing-for-ai/). The cost side is covered in [what AI inference cost is](https://lowob.com/research/what-is-ai-inference-cost/), and the logic behind charging for results in [value-based pricing](https://lowob.com/research/what-is-value-based-pricing/). This piece is where they meet: which model to choose, what it costs to serve, and how to write the contract.

## Three models and the fit test

There are three ways to charge for an AI product. Each fits a specific situation, and forcing the wrong one creates friction with buyers and finance teams.

| Model | Fits when | Watch for |
| --- | --- | --- |
| Seats | A named human uses it daily and the value is their time | Usage spread across few heavy users |
| Usage | Value scales with volume and the buyer accepts variable bills | Bill shock, procurement blocking variable spend |
| Outcomes | You can measure the result and the buyer trusts the measurement | Disputes over attribution |

Seats work when the product sits in a person's daily workflow. The buyer understands the model and can budget for it. The weakness is that AI products often do the work of several people. Seat pricing then undercharges.

Usage pricing matches value to volume. It fits products that process documents, tickets, calls or records. Buyers accept it only with caps, estimates and alerts. Without them, finance will not sign.

Outcome pricing is the most attractive and the hardest to run. You need a result you can measure, and a buyer who accepts your measurement. Resolved tickets, qualified leads, completed filings. If either side can argue about the number, the model breaks.

### What the market charges

Prices below were checked on the vendors' own pages on 16 November 2026, in US dollars.

| Vendor and product | Model | Published price | Detail that matters |
| --- | --- | --- | --- |
| Microsoft 365 Copilot Business | Seat, with metered extras | $21 per user per month on annual billing; $25.20 monthly | Promotional $18 for the first year, 1 July to 31 December 2026. Some advanced features bill through Copilot Credits |
| Salesforce Agentforce add-ons | Seat (unmetered) | $125 per user per month | Sales, Service, Field Service and Operations; Industries add-ons $150 |
| Salesforce Flex Credits | Usage (prepaid credits) | $500 per 100,000 credits | Salesforce prices each action at $0.10 |
| Salesforce Conversations | Usage (per conversation) | $2 per conversation | The original Agentforce unit, regardless of task complexity |
| Intercom Fin | Outcome | From $0.99 per Fin outcome | Charged at most once per conversation; no seats needed for Fin alone |
| Zendesk AI agents | Outcome, with an allowance | Not published; through sales | 5 to 15 automated resolutions per agent per month included, by plan |

Salesforce is the clearest case: the same agent can be bought per user, per conversation or per action. Its own example puts a three-to-six action sales interaction at $0.30 to $0.60 under Flex Credits, against $2 per conversation.

The table also shows why seat pricing undercharges for agents. One $125 seat covers a person supervising an agent. If that agent handles 2,000 conversations a month, the vendor collects $125 for work that would bill at $4,000 on Salesforce's own $2 per-conversation meter. Our piece on [which AI assistant to buy and for which seats](https://lowob.com/research/which-ai-assistant-which-seats/) covers the buyer's side of the same arithmetic.

## How pricing is shifting: the evidence

Four recent surveys point the same way, with a caveat on outcomes. All are run by investors, analysts or newsletter authors, not audited market data, and their samples differ.

| Publisher | Sample and date | Finding |
| --- | --- | --- |
| Kyle Poyar, Growth Unhinged | 230 B2B software and AI companies, April to May 2026 | 37% use a hybrid model, up from 25%; 29% offer AI credits and 33% plan to within 6 to 12 months; three in four changed pricing or packaging in the past year |
| ICONIQ (investor), January 2026 snapshot | About 300 executives at AI software companies | Outcome-based pricing at 18%, up from 2% in Q2 2025; 37% plan to change their AI pricing model within a year |
| ICONIQ (investor), State of AI, July 2026 | About 300 executives, Q2 2026 survey | Consumption-based pricing rose from 35% to 42% and outcome-based from 18% to 23% in six months; companies blend an average of 1.7 models |
| The Futurum Group (analyst) | 830 IT decision makers, 1H 2026 | For GenAI features, 42.9% of buyers prefer consumption pricing; preference for outcome-based GenAI pricing fell from 30.9% to 26.8% |

Sellers' and buyers' data diverge on outcomes: more vendors offer outcome pricing while fewer buyers say they prefer it for AI features. Futurum's analyst read this as a case for hybrids, with stable subscriptions for the platform and transparent metering for AI. That matches **lowob**'s view. Outcome pricing is easier in a pitch than in a contract, because the buyer has to accept the seller's count.

> If either side can argue about the number, the model breaks.

## Hybrids are normal

Most AI companies land on a hybrid. A platform fee plus usage. Seats with a usage allowance and overage. A base fee with an outcome bonus.

Hybrids are fine as long as they are simple to explain in one sentence. If your pricing page needs a calculator, buyers will assume the worst case.

The platform fee covers your fixed cost of serving a customer. The variable part tracks inference. That split keeps gross margin predictable even when usage swings.

| Hybrid structure | Published example | What the variable part tracks | Main risk |
| --- | --- | --- | --- |
| Seat plus metered extras | Microsoft 365 Copilot Business | Advanced features and custom agents, in Copilot Credits | Metered spend nobody budgeted for |
| Seat plus included allowance plus overage | Zendesk Suite, with 5 to 15 automated resolutions per agent included | Resolutions above the allowance, billed monthly | Allowance expiring unused at year end |
| Seats plus per-outcome fee | Intercom seats from $19 to $132 per seat, plus Fin from $0.99 per outcome | Fin outcomes | Disputes over what counts as an outcome |
| Prepaid credits with drawdown | Salesforce Flex Credits | Actions drawn down from the prepaid credits | Credit burn rate faster than forecast |
| Platform fee plus graduated usage | Langfuse Pro: $199 a month, then $8 per 100,000 units falling to $6 at volume | Volume above an included tier, at falling unit rates | Tier boundaries that create cliff edges |

The one-sentence test applies to every row. "Each seat includes ten AI resolutions a month, and extras are billed monthly at the rate on your order form" passes.

## The gross-margin trap

Every AI pricing model fails in the same way: the company does not know what a task costs to run.

Cost per task is model cost plus compute plus any human review, divided by tasks completed. If you cannot produce that number for last month, you do not know your gross margin. Pricing decisions made without it are guesses.

The trap is real at the industry level. ICONIQ's July 2026 report puts average AI product gross margins at 45% in 2025, projected at 53% for 2026, and notes that inference takes a growing share of cost as products scale. A margin that low leaves little room for a pricing model that misreads cost.

### A worked example

The example below is illustrative. It prices an AI support agent sold at $0.99 per resolution, the entry rate Intercom lists for Fin, and runs it on a mid-tier model at Anthropic's published Claude Sonnet 5.5 rates of $2 per million input tokens, $10 per million output tokens and $0.10 per million cached input tokens (checked 16 November 2026).

| Line | Healthy month | Drifted month |
| --- | --- | --- |
| Model calls per conversation | 4 | 4 |
| Tokens per call | 6,000 input (5,000 cached), 400 output | 6,000 input (none cached), 400 output |
| Model cost per call | $0.0065 | $0.016 |
| Model cost per conversation | $0.026 | $0.064 |
| Retrieval, tools and compute per conversation (assumed) | $0.010 | $0.010 |
| Human review: share of conversations checked, at 2 minutes and $40 an hour | 10%, so $0.133 | 20%, so $0.267 |
| Total cost per conversation | $0.169 | $0.341 |
| Resolution rate (only resolutions bill) | 60% | 40% |
| Cost per resolution | $0.28 | $0.85 |
| Gross margin at $0.99 | 71.5% | 14.0% |

Human review costs about five times the model in the healthy month, so a cost per task that leaves out people misses most of the cost. Caching alone more than halves model cost. And the resolution rate is the denominator: when fewer conversations resolve, every cost is spread over fewer billable outcomes. Under outcome pricing the drift shows up in the margin within the month.

The number must be falling. Caching repeated context, routing simple tasks to smaller models, shortening prompts, batching requests. Each one is an operating project with an owner and a target. Anthropic's published rates show the scale: its smallest current model lists at $0.10 per million input tokens against $2 for the mid-tier model, and the Batch API halves both input and output prices. Our piece on [raising for an AI company](https://lowob.com/research/raising-for-an-ai-company/) covered why investors ask for this. Here it is the difference between a business and a hobby. The [token explainer](https://lowob.com/research/what-is-a-token-in-ai/) shows how to estimate the inputs.

Set a margin floor per task and price above it. If a customer's usage pattern drops below the floor, you need to know within the month, not at renewal.

### Free tiers are acquisition cost

A free tier is a marketing expense that happens to look like a product. Treat it that way.

Every free task has an inference cost. Add those up by month and you have a number to put next to paid channels. If free-tier conversion to paid is weak, the free tier is an expensive campaign with no stop date.

Do not count free users as users in any report that goes to the board or to investors. Count them as a channel with a cost per acquired team, and compare that cost to the others.

## Contract terms that protect both sides

Variable pricing moves risk into the contract. The large vendors' published terms show which clauses matter.

| Term | What it settles | Published precedent | Buyer asks for | Seller needs |
| --- | --- | --- | --- | --- |
| Outcome definition | What counts as a billable result | Intercom bills resolutions, procedure handoffs, qualifications and disqualifications; a customer asking for a human is not billed | A written definition and a list of exclusions | A definition it can count automatically |
| Verification method | How a result is confirmed | Zendesk uses an LLM to check each conversation; those that fail do not consume a resolution | Access to the evidence behind each charge | Agreement that its method is the count |
| Counting window | When a result is final | Zendesk evaluates email conversations 72 hours after the first email, messaging after 2 hours by default | A window long enough for reopened cases to surface | A window short enough to bill monthly |
| Charge limit per interaction | Stops double counting | Intercom charges at most once per conversation | The same, in the order form | Clarity on what a conversation is |
| Allowance and expiry | Whether unused volume carries over | Zendesk allocations expire annually or at term end, capped at 10,000 a year | Rollover, or a lower commitment | Commitment it can plan capacity around |
| Overage rate and billing | Price beyond the commitment | Zendesk bills overage monthly, at a higher rate than committed usage | A capped overage rate and alerts at set thresholds | The right to bill monthly |
| Spend cap or pause | Protection from bill shock | Zendesk lets accounts pause AI features at the limit or pay overage as they go | A hard cap option | Notice before a cap stops service |
| True-up | Reconciling commitment with actual use | Practice varies; not on the public pages checked | Credit for under-use against renewal | Payment for over-use at an agreed rate |
| Metric change notice | Protection when the unit changes | Intercom moved from resolutions to outcomes on 12 March 2026 after emailing customers in February; Zendesk gives 30 days' notice of plan moves | Notice, and the old unit until renewal | The ability to evolve the product |

The Intercom change is the one to study. Its billable unit now includes some procedure handoffs to a human or a workflow, which a buyer might not call an outcome. That is why the definition belongs in the contract, not on a help page that can change. For the buyer's side of outcome deals, see [what outcome-based pricing for AI is](https://lowob.com/research/what-is-outcome-based-pricing-for-ai/); for credit deals, [usage-based pricing](https://lowob.com/research/what-is-usage-based-pricing-for-ai/).

## What to report, and what to stop

Our piece [Stop reporting reach](https://lowob.com/research/stop-reporting-reach/) made the case for activation, retention, revenue, efficiency and source over reach. For an AI product those become eight monthly numbers.

| Number | Definition |
| --- | --- |
| Activation | Share of new teams that complete a first real task within a week |
| Weekly active teams | Teams, not individuals |
| Tasks completed | The unit of value delivered, defined once and not changed |
| Retention at 30 and 90 days | Measured on teams that activated |
| Net revenue retention | What last year's customers are paying now |
| Gross margin | Net of inference, with the trend |
| Cost per task | Model, compute and human review over tasks completed |
| Cost per acquired team by source | With the free tier shown as a source |

Stop reporting sign-ups, which measure a landing page. Stop reporting prompts sent, which measure curiosity. Stop reporting anything counted as "AI-generated". None of them tells you whether the product works or whether the business does.

### Pricing changes as experiments

Pricing is not set once. It is changed in small steps, each run as an experiment.

Write down the hypothesis, the segment it applies to, the number you expect to move and the stop rule. A stop rule is the condition under which you revert. Activation falls by a set amount, or churn rises, or support tickets about billing double.

Run it on new customers first. Existing customers get grandfathered until the result is in. Then decide, record the decision, and move on to the next one. Our guide to [pricing experiments in B2B](https://lowob.com/research/pricing-experiments-in-b2b/) covers how to read results at low volume.

## lowob takeaways

- **Run the fit test first.** Seat pricing often undercharges because AI products can do the work of several people.
- **Know the cost per task.** Model cost plus compute plus human review, divided by tasks completed, and it must fall.
- **Write the outcome into the contract.** Definition, verification, counting window and change notice, not a help-centre link.
- **Keep hybrids to one sentence.** If the pricing page needs a calculator, buyers will assume the worst case.
- **Report eight numbers.** Stop reporting sign-ups, prompts sent and anything counted as AI-generated.

Gateway card

### Before you publish a price

- Pricing model chosen against the fit test, explained in one sentence
- Cost per task known for last month, including human review, with a reduction target and an owner
- Margin floor per task set, with alerts when a customer drops below it
- Outcome or usage unit defined in the contract, with exclusions and a counting window
- Overage rate, cap option and true-up terms written down
- Free tier costed and reported as an acquisition channel
- The eight monthly numbers on one page, sign-ups and prompt counts removed
- Next pricing experiment written down with a stop rule

## Common questions

### Should I price my AI product per seat or by usage?

Seats fit when a named person uses it daily and the value is their time. Usage fits when value scales with volume and the buyer accepts variable bills, provided you offer caps, estimates and alerts. Many vendors now combine both.

### How do you calculate cost per task for an AI product?

Add model cost, compute and any human review for the month, then divide by tasks completed. Include review: in our illustrative support example it cost about five times more than the model.

### What is outcome-based pricing for AI, and how much does it cost?

The buyer pays per defined result, such as a resolved ticket. Intercom lists Fin from $0.99 per outcome, charged at most once per conversation, as checked in November 2026. The contract must define what counts.

### What is hybrid pricing for AI products?

A fixed part, such as a platform fee or seats, plus a variable part tied to usage or outcomes. Kyle Poyar's 2026 survey found 37% of software companies use one, up from 25% a year earlier.

## Sources and notes

- [Microsoft, Microsoft 365 Copilot plans and pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing), accessed 16 November 2026. Vendor pricing page; US prices; the $18 promotion is time-limited and first-year only.
- [Salesforce, Agentforce pricing](https://www.salesforce.com/in/agentforce//pricing), accessed 16 November 2026. Vendor pricing page; Salesforce states prices are for information and subject to change.
- [Salesforce, Flex Credits](https://www.salesforce.com/blog/flex-credits/), accessed 16 November 2026. Vendor blog; source of the $0.10 per action figure and the SDR example.
- [Intercom, Pricing](https://www.intercom.com/pricing), accessed 16 November 2026. Vendor pricing page; billing basis for seat prices not stated in the captured text.
- [Intercom Help Center, Understanding Fin outcomes](https://www.intercom.com/help/en/articles/13513868-understanding-fin-outcomes), accessed 16 November 2026. Vendor documentation; states pricing varies by outcome type.
- [Zendesk Help Center, About automated resolutions for AI agents](https://support.zendesk.com/hc/en-us/articles/5352026794010-About-automated-resolutions-for-AI-agents), accessed 16 November 2026. Vendor documentation for the platform in place before 18 May 2026; no prices given.
- [Zendesk Help Center, resolution tiers and allowance](https://support.zendesk.com/hc/en-us/articles/10479528943130), accessed 16 November 2026. Vendor documentation on the newer allowance model; example prices are placeholders.
- [Langfuse, Pricing](https://langfuse.com/pricing.md), accessed 16 November 2026. Vendor pricing page; used here only as an example of graduated usage pricing.
- [Anthropic, Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing), accessed 16 November 2026. Vendor list prices; change often.
- [Kyle Poyar, Growth Unhinged: The state of B2B monetization in 2026](https://growthunhinged.com/p/the-state-of-b2b-monetization-in-2026), 13 May 2026. Newsletter survey of 230 companies, sponsored by a billing vendor; self-reported.
- [ICONIQ, 2026 State of AI Report](https://iconiq.com/growth/reports/state-of-ai-2026), July 2026. Investor research; about 300 executives; margins for 2026 are projections.
- [SaaStr, five takeaways from ICONIQ's State of AI snapshot](https://www.saastr.com/the-execution-era-of-ai-5-key-takeaways-from-iconiqs-state-of-ai-report), January 2026. Secondary summary of ICONIQ investor research; we did not open the underlying report.
- [The Futurum Group, 42.9% of buyers prefer consumption pricing for GenAI](https://futurumgroup.com/press-release/42-9-of-buyers-prefer-consumption-pricing-for-genai-reject-it-for-core-saas/), 10 April 2026. Analyst press release; 830 IT decision makers; fielding dates and method not disclosed.
- The fit test, the hybrid and contract tables, the worked example and the eight numbers are **lowob**'s framework and illustration. The example's volumes, review time and hourly rate are assumptions.

## Related research

- [What Is Seat-Based Pricing for AI?](https://lowob.com/research/what-is-seat-based-pricing-for-ai/)
- [What Is Usage-Based Pricing for AI?](https://lowob.com/research/what-is-usage-based-pricing-for-ai/)
- [What Is Outcome-Based Pricing for AI?](https://lowob.com/research/what-is-outcome-based-pricing-for-ai/)
- [What Is Value-Based Pricing?](https://lowob.com/research/what-is-value-based-pricing/)
- [What Is AI Inference Cost?](https://lowob.com/research/what-is-ai-inference-cost/)

## Next Move

Work out last month's cost per task, including the people who review the AI's work, and divide your price by it. If the margin is below your floor for any customer segment, write down one cost-reduction project with an owner and one pricing experiment with a stop rule this week.

[Start a conversation](https://lowob.com/contact/)
