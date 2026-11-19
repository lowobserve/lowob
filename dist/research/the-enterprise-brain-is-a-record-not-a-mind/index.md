# The Enterprise Brain Is a Record, Not a Mind

Source: https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/
Publisher: lowob (https://lowob.com)
Published: 2026-10-15 · Updated: 2026-11-17
Function: Strategy

> Summary: Every 'enterprise brain' product on the market is the same three things: memory, meaning and governance. That is a real context layer, but not a brain, because nobody has shipped the fourth layer, judgment: how the organisation decides. The brain that compounds is a record of decisions that can be audited and revised.

An enterprise brain is an accountable record that people and AI agents read before they act and write to afterwards, not a mind that thinks for the company. Products sold under the name supply memory, meaning and governance well. They do not supply the fourth requirement, judgment: a dated record of what the company decided, why, who approved it, what it replaced and whether it worked. Agent memory research agrees: agents usually fail after the evidence is found, when they must work out which version is current.

*Figure: No single layer is a brain. The brain is the loop: what is stored, wired, recorded, reasoned over and learned from.*

Imagine asking your company's AI assistant why the sales team stopped promising a particular feature. It finds an old product deck, a meeting summary and a new FAQ. All three sound plausible. Only one reflects the current decision.

That is the promise, and the limitation, of an **enterprise brain**: a shared place where AI agents can find company context. But finding information is not the same as knowing **which decision is current, who approved it, and why an earlier answer no longer applies**. This piece sets out what the brain is, why a mind is the wrong metaphor, what the market sells and how to build toward it.

## What an enterprise brain can do, and what it still needs

Companies store useful knowledge in contracts, slide decks, meeting notes, customer records and conversations. Different teams often see different parts of it. When someone leaves, or a project changes direction, the reasoning behind a decision is easily lost.

In September 2026, WRITER introduced Enterprise Brain, which it describes as a shared context layer for marketing, sales and other AI agents, bringing together brand knowledge, decision logic and live business data, with a team-level agent memory layer. Other vendors describe related approaches as workplace intelligence or company knowledge layers. These are useful products, not just a catchy metaphor; our ranking of [enterprise context platforms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/) covers how to choose.

Most enterprise brain systems are trying to connect three things: **memory**, what the company has said and done; **meaning**, shared definitions so the same financial or commercial term is not interpreted differently by each team; and **governance**, rules about who can see, change and approve information. The harder fourth requirement is **judgment**: a reliable record of why a decision was made, what evidence mattered and when that decision was superseded. Vendors are adding decision records, but the existence of a record does not guarantee it will be interpreted correctly later.

**lowob** uses two vocabularies for one system. This article and *The first two-fifths* describe what the brain must hold; The Build Order describes the layers in the order a firm builds them.

| This article | The first two-fifths | Build Order layer | What it covers |
| --- | --- | --- | --- |
| (assumed) | Knowledge | Store | Documents, data and records where they already sit |
| Memory | Memory | Store, read over time | What happened, across sessions, people and versions |
| Meaning | Meaning | Wiring (context layer) | Shared definitions every agent and report uses |
| Governance | Governance | Wiring, plus the approval gate | Permissions, identities, approvals and audit |
| Judgment | Judgment | Record, plus learning | Decisions with reason, owner, status, expected outcome, and outcomes written back |
| Not listed | Not listed | Reasoning | Models and agents, which are rented and read from everything above |

Neither component list names reasoning, because the model is the part every firm already rents; the [Build Order explainer](https://lowob.com/research/what-is-an-enterprise-brain/) counts it as a layer. Both vocabularies agree that the record of judgment is the part no vendor can supply.

This is where an enterprise brain becomes more than a searchable archive. If a decision changes, the system needs to connect the old version to the new one, and show which instruction people should follow today. Otherwise, the same confident AI answer can be wrong for months.

## Why a mind is the wrong metaphor

"Brain" invites the idea of a mind that understands the company and decides. That picture leads buyers to spend on a bigger model or more autonomy, when the gap is elsewhere. Three older bodies of work describe it better.

**Organisational memory research.** Walsh and Ungson's 1991 paper in the *Academy of Management Review*, widely treated as the field's seminal work, defined organisational memory as "stored information from an organization's history that can be brought to bear on present decisions". Their framework holds that this memory is spread across individuals, culture, procedures and formal systems, roles and structures, and sources outside the firm. The definition is about decisions, not documents. The failure it predicts is familiar: the person who held the reason leaves, and the procedure survives without its purpose.

**Case-based reasoning.** Aamodt and Plaza's 1994 survey set out the standard cycle: retrieve similar past cases, reuse their solution, revise it by checking whether it worked, and retain the checked solution as a new case. The learning happens in revise and retain, which depend on knowing the outcome. Most enterprise AI products in 2026 do the first two steps well and leave the last two to the customer.

**Decision records in engineering.** Michael Nygard proposed architecture decision records in 2011. Martin Fowler's account sets out the rules: a short record of the decision, context, alternatives and consequences; a status of proposed, accepted or superseded; no editing after acceptance. A changed decision gets a new record linked to the one it replaces. That rule, argued in [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/), lets a reader tell the current answer from the history.

| A mind (the metaphor) | A record (what works) |
| --- | --- |
| Holds beliefs and updates them silently | Holds dated entries and supersedes them visibly |
| Answers from what it absorbed | Answers from cited records a person can open |
| Improves by becoming more capable | Improves when outcomes are written back to decisions |
| Fails by sounding sure and being wrong | Fails by being incomplete, which can be seen and fixed |

> A mind that is wrong sounds the same as a mind that is right. A record that is wrong can be found, dated and superseded.

The model still matters: it reads the record, compares cases and drafts the next decision. But it is rented and replaceable. The record makes its reasoning specific to one company and survives a change of vendor.

## What the market sells under the name

The table summarises each vendor's own positioning; none of it has been independently tested.

| Product (vendor description) | Date | Memory | Meaning | Governance | Judgment |
| --- | --- | --- | --- | --- | --- |
| WRITER Enterprise Brain | 9 Sep 2026, early access | Team-level Agent Memory | Brand and messaging standards | Described as governed | Claims to capture "decision logic" |
| Glean | $300m ARR, 28 May 2026 | Activity graph | Enterprise Graph and Enterprise Context | Not the headline claim | Not claimed |
| Google Gemini agent (Gemini Enterprise) | 8 Oct 2026 | Four memory types, including execution history | Business term definitions via Knowledge Catalog (preview) | Agent Gateway; agents with their own accounts | Not claimed |
| Microsoft Agent 365 with Work IQ | Agent 365 count given 29 Jul 2026 | Work IQ grounding | Not the main claim | Nearly 40 million agents registered in two months | Not claimed |

Three patterns stand out. Governance has the most money behind it. Microsoft's chief executive told investors on 29 July 2026 that "just 2 months in, Agent 365 now has nearly 40 million agents registered across tens of thousands of companies", describing a control plane for agent identity and security. Meaning is arriving through catalogues of business definitions. And the only vendor that names judgment treats it as content to capture. SiliconANGLE's launch report describes WRITER's layer as holding "hard-won judgments that shape how work gets done". That is stored guidance, not a record of which decision replaced which, with a check date and an outcome.

The adoption evidence shows why the gap matters. MIT Project NANDA's *The GenAI Divide* (July 2025), drawing on more than 300 public initiatives, 52 interviews and 153 survey responses, found a learning gap: "Most GenAI systems do not retain feedback, adapt to context, or improve over time." Its headline 95% no-return figure rests on a small sample, so treat it as direction. McKinsey's 2025 survey of 1,993 respondents is more conservative: 88% use AI in at least one function, but only 39% report any EBIT impact, most of them under 5%. Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027, citing cost, unclear value and weak risk controls.

None of this argues against context layers, only for naming them accurately.

## The missing layer: why the company decided

Consider a fictional fintech company preparing a new campaign. The growth team wants to describe the product as offering instant withdrawals. Compliance rejects that language because some transfers can take longer. Three weeks later, product changes the withdrawal flow, and the wording is reviewed again.

An enterprise brain could retrieve all three conversations and still write the wrong thing if it treated the original draft as current. What would help is a brief, dated record: **the approved claim, the reason behind it, who signed off, what evidence was reviewed, and which older claim it replaced**.

Illustrative example: one claim, recorded

Decision
:   Do not promise instant withdrawals in public marketing.

Reason and owner
:   Some transfers take longer. Compliance approved the new wording on a named date.

What changed
:   When the withdrawal process changes, check the actual product behaviour, record a fresh approval and mark the older guidance as superseded.

This is an illustrative workflow, not a client case or a claim about any vendor's system.

The record should link to the evidence rather than replace it. A summary written by an AI model should not become the only source anyone can inspect; [Keep the sources, let the summary regenerate](https://lowob.com/research/keep-the-sources-let-the-summary-regenerate/) covers why.

The fields are few; the guide to [what a decision record is](https://lowob.com/research/what-is-a-decision-record/) has the full version.

| Field | What it holds | Why the brain needs it |
| --- | --- | --- |
| Question | What was being decided | Lets a later reader find comparable cases |
| Decision and status | What was chosen; proposed, current or superseded | Separates the live answer from the history |
| Reason and evidence | Why, with links to sources | Makes the decision checkable |
| Alternatives | What was rejected and why | Stops the same option being re-proposed blind |
| Owner and approver | Who is accountable; who signed off | Governance with a name attached |
| Expected outcome and check date | What should happen if the call was right, and when to look | Turns a log into something that can learn |
| Supersedes | The record this one replaces | Lets assistants flag outdated answers |
| Outcome | What happened, written back | The input to the next similar decision |

## Why the distinction matters in practice

A 2026 research paper, MemTrace, studied long-term memory systems for AI agents, testing 13 configurations across four designs. Its central finding was that mistakes were often caused by failing to *use* retrievable evidence, not because the evidence could not be found: "the dominant bottleneck is evidence use, not retrieval." When those systems failed, the relevant evidence was available roughly ten times more often than it was absent. Systems that handled a fact's current and earlier states could still fail to track how it changed, and systems that declined to answer when evidence was absent did not necessarily correct a false premise. This is a research benchmark, not a direct test of enterprise products, but its failure modes are the fintech example in miniature.

Other benchmarks agree. LongMemEval (2024), which tests abilities including knowledge updates, found commercial assistants losing about 30% accuracy over sustained interactions. Patronus AI's MEMTRACK, built from simulated work across Slack, Linear and Git, found the best model at about 60%, and adding the Mem0 or Zep memory layers gave no significant improvement. More storage fixes none of this. A record that marks which entry is current removes the guess.

There is also evidence that AI can be valuable when it helps employees use experience that would otherwise stay with a few people. In a study of 5,179 customer-support workers, Brynjolfsson, Li and Raymond found that access to an AI assistant increased issues resolved per hour by 14% on average, with larger gains among less experienced workers. Those results come from support work, not a test of a company-wide decision-memory system.

The point is not that an enterprise brain cannot remember or help people decide. A convincing answer is not enough: a reliable system should also show what the answer was based on and whether that evidence is current. [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/) made this argument before the benchmarks caught up; the guide to [decision precedent in AI](https://lowob.com/research/what-is-decision-precedent-in-ai/) covers putting comparable past decisions in front of an agent.

## How to make an enterprise brain useful

A useful enterprise brain does not have to begin with an expensive platform. The build order is the same at 30 people and 3,000.

1. **Start with one recurring problem.** Outdated product claims, inconsistent customer promises, unclear partnership approvals or sales materials that drift from the latest terms. The [commercial line](https://lowob.com/research/why-the-brain-starts-at-the-commercial-line/) is the best first place: decisions recur weekly and outcomes show within a quarter.
2. **Clean the store you have.** [Your CRM is memory, not a brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/) sets out the eight fields worth keeping current.
3. **Rent the wiring.** Connectors, permission-aware retrieval and shared definitions are good products. Restrict confidential material to authorised people and tools from the start.
4. **Own the record.** For each important decision, keep the question it answered, the evidence, alternatives considered, who approved it, when it should be revisited and what it supersedes. Keep a link to the underlying source documents.
5. **Write outcomes back.** On the revisit date, record what later results taught the team. This is the step that makes the system improve rather than accumulate.

Then test the system with realistic questions, not with a demo.

| Test | What a pass looks like |
| --- | --- |
| A new salesperson looks for the latest approved explanation | They find it, with the reason and the approver, in one step |
| An assistant meets an outdated answer | It identifies it and explains why it changed |
| Two sources conflict | It flags the disagreement instead of choosing a confident-sounding answer |
| A decision's check date passes | Someone is prompted to record the outcome |
| The vendor changes | The record exports whole, with history and links |

The best measure is fewer mistakes and less repeated work, not the number of documents the AI has indexed. A system that can say "this was the old decision, here is the newer one and why it changed" is more useful than one that remembers everything without distinguishing between versions.

What would prove this wrong: a horizontal product that measurably improved decisions across unrelated decision classes without per-client outcome plumbing, with independent evidence. We had seen none by November 2026.

## lowob takeaways

- **Memory, meaning and governance are essential.** An enterprise brain needs company information, shared definitions and clear access rules. But people also need to know which decisions are current.
- **Record the reasoning behind important decisions.** Keep the evidence, approval, date and older version with the decision itself.
- **Make correction part of the system.** An assistant should be able to flag conflicting or outdated information, not repeat it confidently.
- **Test usefulness with real work.** Fewer incorrect claims and faster, safer handovers matter more than the size of a document archive.

## Common questions

### What is an enterprise brain?

It is the system that lets a company's people and AI agents act on what the company knows, has decided and has learned: a loop with an accountable decision record at its centre, not a product or a model that thinks for the company.

### Is an enterprise brain the same as enterprise search or a knowledge base?

No. Search and knowledge bases find documents. A brain also records which decision is current, who approved it, why, what it replaced and what happened next, so an assistant can tell a live answer from a superseded one.

### What is the difference between agent memory and a decision record?

Agent memory stores what an agent saw or did, to carry context between tasks. A decision record stores what the organisation decided, with reason, owner, status, expected outcome and the record it supersedes.

### How do you build an enterprise brain?

Start with one recurring decision, clean the store it depends on, rent the connectors and permissions, and record each decision with its evidence, approver, check date and what it replaces. Write the outcome back on the check date, then extend.

## Sources and notes

- [CMSWire, WRITER launches Enterprise Brain to unify AI agent context](https://www.cmswire.com/customer-experience/writer-launches-enterprise-brain-to-unify-ai-agent-context/), 9 September 2026. Product description is the vendor's own; early access, not independently tested.
- [SiliconANGLE, Writer launches universal touchpoint for enterprise information and memory for AI](https://siliconangle.com/?p=846104), 9 September 2026. Launch coverage relying on vendor statements.
- [Glean, Glean surpasses $300M ARR](https://glean.com/press/glean-surpasses-300m-arr-unrivaled-enterprise-context-fuels-ai-adoption), 28 May 2026. Vendor press release; usage figures self-reported.
- [Xenospectrum, report on Google's Gemini agent launch](https://xenospectrum.com/en/gemini-agent-enterprise-coworker-memory/), 9 October 2026, and [TechCrunch, Google brings agentic AI to Gemini](https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/), 8 October 2026. Secondary reports of vendor announcements; some features in preview.
- [The Motley Fool, Microsoft Q4 FY2026 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/08/07/microsoft-msft-q4-2026-earnings-call-transcript/), call held 29 July 2026. Registered agents are not active or useful agents.
- [Virtualization Review, MIT report finds most AI business investments fail](https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide.aspx), 19 August 2025. Secondary account of MIT Project NANDA's report; small sample and contested headline figure.
- [McKinsey, The state of AI in 2025](https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025), 5 November 2025. Self-reported survey of 1,993 participants.
- [w.media, Over 40 percent of agentic AI projects could face the axe by end of 2027: Gartner](https://w.media/over-40-percent-of-agentic-ai-projects-could-face-the-axe-by-end-of-2027-gartner/), June 2025. Analyst forecast, reported secondhand.
- [Long et al., MemTrace: Probing What Final Accuracy Misses in Long-Term Memory](https://arxiv.org/abs/2606.17328), arXiv, 15 June 2026. Research benchmark on user-level facts; preprint, not a test of enterprise products.
- [Wu et al., LongMemEval](https://arxiv.org/abs/2410.10813v2), arXiv, October 2024, revised March 2025. Chat-assistant benchmark.
- [Patronus AI, Introducing MEMTRACK](https://patronus.ai/blog/memtrack), 14 October 2025. Vendor-built benchmark on simulated workflows.
- [Walsh and Ungson, Organizational Memory, Academy of Management Review 16(1), 1991](https://scilit.com/publications/656adcd2282c68ae7782782f8c7ad0f8). Bibliographic record; the definition is quoted via [Wikiquote](https://en.wikiquote.org/wiki/Organizational_memory), and the retention framework is summarised from secondary accounts.
- [Aamodt and Plaza, Case-Based Reasoning: Foundational Issues, AI Communications 7(1), 1994](https://www.doi.org/10.3233/AIC-1994-7104), with the four-step cycle as described by [Eisenstadt and Althoff, 2019](https://ceur-ws.org/Vol-2454/paper_68.pdf). Academic sources predating generative AI.
- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), updated 24 March 2026. Practitioner essay on a software engineering practice.
- [Brynjolfsson, Li and Raymond, Generative AI at Work, NBER Working Paper 31161](https://nber.org/papers/w31161), April 2023, revised November 2023. Customer support only; not a test of decision-memory systems.
- The vocabulary table, record fields and tests are **lowob**'s framework; the fintech workflow is illustrative.

## Related research

- [What Is an Enterprise Brain?](https://lowob.com/research/what-is-an-enterprise-brain/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [The First Two-Fifths](https://lowob.com/research/the-first-two-fifths/)
- [AI Is Making Execution Cheap. Judgment Is Becoming the Marketing Moat.](https://lowob.com/research/judgment-is-the-moat/)
- [Build It to Run Without You](https://lowob.com/research/build-it-to-run-without-you/)

## Next move

Choose one decision your team keeps revisiting. Can a new employee find not only the answer, but why it is still the right answer? If not, write that record first.

[Start a conversation](https://lowob.com/contact/)
