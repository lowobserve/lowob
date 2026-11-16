# The RFP Nobody Can Answer Yet

Source: https://lowob.com/research/the-rfp-nobody-can-answer-yet/
Publisher: lowob (https://lowob.com)
Published: 2026-06-10 · Updated: 2026-11-16
Function: Strategy

> Summary: Buyers are issuing RFPs for AI tooling, a context layer and an enterprise brain in a single brief, with no owner, sequence or success measure. Vendors answer differently because nobody has shipped the full brain: what exists is mostly the context layer. The Build Order sets out a sequence that starts at the commercial line and passes four gateways.

More of the requests for proposals reaching us ask for three things in one brief: AI tooling, a context layer and an "enterprise brain". Very few say who will own the work, what success looks like or what should happen first. Vendors answer these briefs in incompatible ways because nobody has shipped the full brain; what exists, at scale, is the context layer. The Build Order is our answer to the missing sequence: decide three things before buying any tool, build on the commercial line first, and pass a named gateway before each next layer.

*Figure: The Build Order, end to end. This piece maps the whole route.*

A pattern has become hard to miss in the briefs we receive. A company issues one RFP asking for an assistant for its staff, connectors into its email, drive and CRM, and something it calls a brain, knowledge base or "single source of truth" that AI agents can work from. The requirements are reasonable. The structure is not. Everything is due at once, the internal owner is rarely named, and the brief seldom says how anyone will know, six months later, whether it worked.

Vendors respond in kind. A search vendor proposes to index everything. A CRM vendor proposes an upgrade with an assistant attached. A consultancy proposes a multi-month programme ending in an operating model. Each answer is defensible on its own terms, and they cannot be compared, because each vendor has quietly defined "brain" as the thing it sells.

This piece explains why the briefs look like this, what the market can and cannot deliver today, and the order of build that the rest of this series follows.

## What these RFPs are actually asking for

With the vendor vocabulary removed, three requests remain.

| Layer | What the brief asks for | What it usually means in practice |
| --- | --- | --- |
| Tooling | "AI for all staff", assistant licences, automation | Seats for a chat assistant, plus some workflow glue |
| Context layer | "Connect our systems", "one source of truth" | Connectors into suite, CRM and drive, with search that respects permissions |
| Brain | "Institutional memory", "knows our clients", "agents that act" | A system that knows what the firm decided, remembers what happened, and lets agents act on it |

The third row is where the budget really sits and where the brief is least specific. It is also the part no single product delivers.

What the briefs leave out is consistent. They rarely set a sequence, so tooling, connectors and agents are scoped in parallel. They rarely name an internal owner with time to make it work. And they rarely define a measure of success that a finance director would accept. Those three gaps, more than any vendor choice, decide whether the programme survives its first renewal.

## Why nobody can answer it yet

The honest reason vendors answer so differently is that the full brain does not exist as a product.

In *The first two-fifths* we broke the promise into five parts: knowledge, memory, meaning, governance and judgment. The market has built two of them well. Data owners and search vendors have built knowledge: trusted content, made callable by agents. Software incumbents have built governance: identity, permissions and agent registries. Meaning exists in narrow form. Memory and judgment are largely missing, because both depend on something software rarely does: link an outcome back to the decision that caused it.

The large platforms now sell the context layer explicitly. Microsoft made Work IQ generally available in June 2026 as a permission-aware context layer billed on usage. Google's October 2026 Gemini Enterprise launch described an agent with four memory types and a shared knowledge catalogue. Both are serious products. Neither claims to know why a company made a decision, or whether that decision was right.

Memory is where claims and evidence diverge most. Patronus AI's MEMTRACK benchmark, which simulates work spread across Slack, Linear and Git, found current models and memory add-ons struggling to track state over long horizons and to resolve conflicting information. Independent reproductions summarised by Mnemoverse found vendor-reported memory scores of 92–97% falling to 49–74% when third parties ran them. In *Retrieval is not the bottleneck* we reached the same conclusion from a different direction: systems usually find the right material and then weigh it badly when facts have changed.

## Spending has outrun use

Meanwhile money has arrived ahead of architecture. Menlo Ventures estimates that companies spent $37bn on generative AI in 2025, up from $11.5bn in 2024, with more than half going to applications rather than infrastructure. Buyers are paying for things that do a job.

Seats, though, are easy to buy and hard to use. Fewer than 4.5% of Microsoft 365's roughly 450 million commercial customers pay for Copilot, and only 20–30% of paying users open it in a given week, according to figures reported by Windows Latest in July 2026, which put weekly active use at around 1% of the commercial base. Microsoft separately reported around 30 million paid seats in July 2026. The two figures are compatible: a very large number in absolute terms, and a small share of a very large base.

Put these facts together and the RFPs make sense. Buyers have been sold a destination. Nobody has drawn them the road.

## The north star: what the brain should be

Before the road, the destination, stated precisely enough to test.

> The brain is the loop that turns a company's tools into judgment. It connects what the company stores, remembers what it decided and why, reasons across both, and learns when outcomes come back. No single tool is the brain. The loop is.

*Figure: No single layer is a brain. The brain is the loop: what is stored, wired, recorded, reasoned over and learned from.*

Each layer does one job, and none qualifies on its own:

- **Store.** The CRM, drive, inbox and ERP. Every company has one. On its own it is a filing cabinet.
- **Wiring.** Connectors, permissions and shared definitions that make the store callable. On its own it is a better search box. Rent it: vendors do this well and it changes quickly.
- **Record.** The company's decisions, each with a reason, an owner, a status (current or superseded), an expected outcome and a date to check. On its own it is memory without reasoning. Own it: it carries the company's judgment and cannot be recovered from a vendor at renewal (*Buy context, own judgment*).
- **Reasoning.** Models and agents that read across the wiring and the record and connect the dots: that a prospect's new COO was a client at a previous firm, that the last pitch was lost on price, that two current claims conflict. On its own it is a mind that makes things up. Rent the models; own the instructions and precedents.
- **Learning.** Outcomes written back to the decisions that caused them, so the next round of reasoning starts from what happened. Only possible with the other four.

### Why we still use the word "brain"

"Brain" is an imperfect word and we use it deliberately. It is the term buyers write into RFPs and vendors put on products, so it is the term this series has to meet. It invites two errors. The first is calling a single tool a brain: a CRM, an index or an assistant. None of these thinks. The second is imagining a mind that simply knows things. The useful version is neither. It is the loop above, and when we use the word, that loop is what we mean.

## The build order

This is the sequence we would build in, and the one the rest of the series follows.

*Figure: The Build Order: three decisions, four layers on the commercial line, then three gateways before the brain spreads.*

**Gateway 0: three decisions before any tool.** Who owns the build, with protected time. Whether the company runs on Google Workspace or Microsoft 365, because that decides the natural assistant, the native connectors and where search happens. And which CRM people will actually keep current. Nothing is purchased until these are answered.

**Tooling on the commercial line.** A CRM clean enough to trust, assistant seats for the people in the commercial workflow, and the automation between them. Not seats for everyone.

**Context on the commercial line.** Email, calendar, call notes and proposals connected for the accounts that matter, with permissions that mirror the underlying files and a small set of agreed definitions.

**Record and reasoning on the commercial line.** A record of the commercial decisions worth keeping, and one deliberately unglamorous first agent that works from it.

**Gateway 1: nothing sends without a person.** Every outbound action has a named approver, and every approval is logged.

**Gateway 2: a dollar figure on every decision.** Each recorded decision carries the value at stake, and its outcome is written back, so the build reports in money rather than activity.

**Gateway 3: commercial is ready to share its brain.** Only then does the record extend to delivery, finance and people.

Each gateway is a test. If the answer is no, the build stays where it is until the answer is yes.

## Why the commercial line comes first

Part 2 makes the full case. The short version comes from a test we have already published: judgment arrives first in decisions that are frequent, similar, quickly graded and later defended (*Where judgment arrives first*). Commercial decisions fit that description better than almost anything else in a mid-size company. Which leads to qualify, which pitches to pursue, what discount to allow and what to spend on a campaign recur weekly, resemble each other, show their outcome within a quarter, and have a budget holder who must defend them. They also sit on the most structured data most firms own: the CRM.

A firm-wide knowledge base, the most common alternative starting point, produces value that is real but hard to count. That is difficult to fund a second time.

## Where the order bends

The series takes this sequence through eight industries. It holds in most and bends in two.

| Industry | Does the order hold? | Where it bends |
| --- | --- | --- |
| Professional services | Holds | Confidentiality and conflict walls arrive with the context layer |
| Financial services and fintech | Bends: record first | A supervisor may ask the firm to reconstruct any automated decision |
| Media and publishing | Holds | Sales context must be walled off from editorial |
| Crypto and digital assets | Holds | Public statements make Gateway 1 strict |
| B2B SaaS | Holds | Product usage data joins the context layer early |
| Retail, DTC and luxury | Holds | Client consent governs what can be connected |
| Industrial distribution | Holds | Quoting is the commercial line |
| Healthcare and life sciences | Bends: compliance first | Privacy and promotional review precede any commercial agent |

The two that bend share a feature: a regulator who will ask the company to reconstruct what happened. There, the record is a requirement before it is an advantage, as we argued in *Regulators want the chain, not the model*.

Illustrative example: rewriting the brief

Decision
:   Withdraw a single RFP for "AI, connectors and a brain" and reissue it as a sequenced brief: Gateway 0 first, then a scoped commercial build.

Reason and owner
:   Three vendor responses could not be compared because each defined the brain differently. Owned by the head of operations, with four protected hours a week.

What changed
:   The new brief names one success measure (hours of meeting preparation per pitch) and a 90-day review date.

Illustrative: a composite of a mid-size professional services firm, built from patterns across briefs we have seen.

## lowob takeaways

- **The wish list is right; the order is missing.** Tooling, context and brain all belong in the brief. State which comes first and what must be true before the next.
- **Rent the wiring, own the record.** The context layer is worth buying well. The decision record carries your judgment.
- **Start where outcomes can be counted.** For most firms that is the commercial line.
- **Treat each gateway as a test.** A "no" means stay, not skip.

Gateway card

### Before the next RFP goes out

- A named owner with protected time
- Google Workspace or Microsoft 365 confirmed as the suite of record
- The CRM people will actually update, chosen
- One success measure that can be counted within a quarter
- A review date

## Sources and notes

- [Menlo Ventures, 2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/), December 2025. Bottom-up market model plus a survey of about 500 US enterprise decision-makers; Menlo invests in AI companies.
- [Windows Latest, 7 July 2026](https://www.windowslatest.com/2026/07/07/microsoft-365-copilot-adoption-is-under-4-5-after-3-years-only-1-use-it-weekly-yet-prices-went-up/). Industry figures, not Microsoft filings.
- [UC Today on Microsoft's Q4 FY26 results](https://www.uctoday.com/unified-communications/microsoft-365-copilot-passes-30-million-paid-seats-as-cloud-and-ai-growth-power-record-quarter/), July 2026.
- [Microsoft Learn, Work IQ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/). Vendor documentation.
- [Google Cloud, Gemini at work, 8 October 2026](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026). Vendor announcement.
- [Patronus AI, MEMTRACK](https://arxiv.org/abs/2510.01353), October 2025. Simulated workflows.
- [Mnemoverse, AI memory solutions Q3 2026](https://mnemoverse.com/docs/library/ai-memory-solutions-2026-q3). Third-party reproductions of vendor memory benchmarks.
- RFP patterns are drawn from **lowob**'s own pipeline, anonymised and described in aggregate.

## Related research

- [What Is an AI Agent? (hub)](https://lowob.com/research/what-is-an-ai-agent/)
- [The first two-fifths](https://lowob.com/research/the-first-two-fifths/)
- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [Buy Context. Own Judgment.](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [How to run a marketing RFP](https://lowob.com/research/how-to-run-a-marketing-rfp/)

## Next move

Writing an RFP for AI tooling, context or a brain this quarter? Before it goes out, name the owner and the one number that will tell you it worked. If you cannot, that is the first conversation to have.

[Start a conversation](https://lowob.com/contact/)
