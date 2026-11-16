# AI Agents in Commercial Operations: The RevOps Tasks Worth Handing Over

Source: https://lowob.com/research/ai-agents-in-commercial-operations/
Publisher: lowob (https://lowob.com)
Published: 2026-09-15 · Updated: 2026-11-16
Function: Revenue

> Summary: Commercial operations has the highest share of tasks an agent can run and report on, and the two tasks that must never be delegated. This guide walks the twelve operations rows of the lowob Agent Task Directory, maps each to the layer of the brain it builds or maintains, sets a starting autonomy level, and names the first three tasks to hand over.

Commercial operations is where agents can do the most on their own and where two tasks must never leave a person. Seven of the twelve operations tasks in the **lowob** Agent Task Directory are rated level 3, act and report: record clean-up, enrichment, the pipeline pack, delivery reconciliation, outcome write-back, commission calculation and agent monitoring. Three stay as drafts, and two, maintaining shared definitions and granting system access, stay with a named person. Operations is also the function that builds the brain the other agents depend on, so start with the monitoring that keeps every other agent honest.

*Figure: Five plug points: identity and limits, context in, precedent in, the gate, and the outcome written back.*

Revenue operations owns the systems the rest of the commercial line runs on: the CRM, the price book, the definitions, the reports and, increasingly, the agents. That makes it different from sales or marketing. A sales agent uses the brain. An operations agent maintains it. Its mistakes are less visible to clients and more damaging to everything downstream, because a wrong merge or a drifted definition quietly corrupts every report and every other agent that reads the store.

The data starts in poor shape. Validity's State of CRM Data Management 2025, a survey of 602 CRM users and administrators, found 76% say less than half their CRM data is accurate and complete, 37% report losing revenue directly to data quality, and 45% say their CRM data is not ready for AI. The ratings below are **lowob**'s working framework from the [Agent Task Directory](https://lowob.com/research/what-ai-agents-can-do-task-directory/), reviewed quarterly. Without the listed control, drop the task one level.

## The twelve operations tasks, rated

| Task | Autonomy | Reliability today | Main risk | Control |
| --- | --- | --- | --- | --- |
| De-duplicate and clean CRM records | 3 Act and report | High | Wrong merge of distinct accounts | Merge rules; reversible changes; nightly report |
| Enrich records with third-party data | 3 Act and report | Medium | Inaccurate or non-consented data | Approved sources; privacy rules |
| Draft quotes from a price book | 1 Draft | Medium | Wrong price becomes a binding offer | Quote reviewer; price book marked current |
| Check contract terms against standard | 1 Draft | Medium | Missed non-standard clause | Legal owner reviews flagged items |
| Prepare the weekly pipeline review pack | 3 Act and report | High | Misleading summary | Links to underlying records |
| Reconcile delivery against what was sold | 3 Act and report | High | Under-delivery missed | Exceptions routed to account owner |
| Record decisions with reasons | 1 Draft | Medium | Reasons invented after the fact | Captured at the moment of approval |
| Write outcomes back to decisions | 3 Act and report | Medium | Wrong outcome linked | Owner confirms at check date |
| Maintain shared definitions | 0 Answer | Low | Definitions drift silently | Named owner per definition |
| Grant or change system access | 0 Answer | Low | Excessive agency; data exposure | Never delegated to an agent |
| Run the commission calculation | 3 Act and report | Medium | Disputes and trust loss | Finance review before payout |
| Monitor agent activity and cost | 3 Act and report | High | Runaway spend or loops | Spend caps; kill switch |

Level 3 here means the agent acts within written rules and reports what it did, with a person reading the report. It does not mean unsupervised. Zapier's 2026 survey of 513 US managers found only 30% of leaders say agents handle a majority of tasks without human help, and operations is where that minority is most defensible.

## Where each task plugs into the brain

The brain is a loop: the **store** of records, the **context** layer of definitions and permissions, the **record** of decisions with reason, owner, status and expected outcome, **reasoning** by models and agents, and **learning** when outcomes are written back. Operations tasks are unusual in that several of them are the loop. Record decisions and write outcomes back are the record and learning layers in working form.

| Task | Main layer | Start at | Move up when |
| --- | --- | --- | --- |
| De-duplicate and clean records | Store | 2, then 3 | Merge rules tested; pre-merge state kept |
| Third-party enrichment | Store | 2, then 3 | Approved source list and privacy check |
| Quotes from a price book | Context | 1 | Stays at 1 |
| Contract terms check | Context | 1 | Stays at 1 |
| Weekly pipeline pack | Context | 2, then 3 | Two cycles with every figure linked |
| Delivery reconciliation | Store | 2, then 3 | Exception routing tested with owners |
| Decision records | Record | 1 | Stays at 1; owner confirms each entry |
| Outcome write-back | Learning | 1, then 3 | Check dates on every decision |
| Shared definitions | Context | 0 | Never |
| System access | Context | 0 | Never |
| Commission calculation | Record | 1, then 3 | A quarter of shadow runs that match payroll |
| Agent activity and cost monitoring | Reasoning | 3 | From day one |

Read the "start at" column as a rule of thumb. Tasks that change the store start one level below the directory rating until the change can be undone. Tasks that only read and report can start at the directory level once their links to source records work.

## The five tasks that decide the programme

### De-duplication and enrichment

Record hygiene is the most valuable operations task and the easiest to get badly wrong. Two companies with similar names, or a parent and its subsidiary, merge into one account, and their histories become inseparable. HubSpot's documentation is plain: "It's not possible to unmerge records", and the primary record's property values take precedence in a merge. Where the CRM cannot reverse a merge, the agent must make it reversible: stage proposed merges, keep a snapshot of both records, and apply only merges that pass written rules, with a nightly report of every change. Enrichment carries a second risk. Third-party data may be inaccurate or collected without the consent your use requires, so the agent draws only from an approved source list. See [What Is CRM Data Hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/) for the rules to write first.

### Quotes and contract checks

Both are drafts. A quote is an offer, and a stated price can bind the firm: in *Moffatt v. Air Canada* (2024) the tribunal held the company responsible for what its chatbot told a customer. The control is a reviewer for every quote and a price book marked current, with superseded prices kept but flagged. Contract review is where models are improving fastest. A 2024 study, "Better Call GPT", reported that advanced models matched or exceeded junior lawyers and outsourced reviewers on identifying legal issues, at a fraction of the time and cost. It is one study on a defined contract set. The directory keeps the task at level 1 because the costly error is the missed non-standard clause, and a legal owner reviews every flagged item.

### Decision records and outcome write-back

These two tasks are the record and learning layers. An agent can draft a decision record when a discount, a stage change or a budget move is approved: the decision, the reason, the owner and the expected outcome. The risk is reasons invented after the fact. Validity's survey reported that 37% of staff regularly fabricate data to tell leaders what they want to hear, which is why the reason must be captured at the moment of approval, not reconstructed at quarter end. Write-back is level 3: at each decision's check date, the agent links the outcome and the owner confirms it. Without check dates, there is nothing to write back. [The Ten Commercial Decisions Worth Recording](https://lowob.com/research/the-commercial-decisions-worth-recording/) lists where to start and [What Is Outcome Write-Back?](https://lowob.com/research/what-is-outcome-write-back/) covers the mechanics.

### Commission calculation

Commission is rule-based and checkable, which suits an agent, and it is the fastest way to lose a sales team's trust when wrong. Run the agent's calculation in shadow alongside the current method for a full quarter, reconcile every difference, and keep finance review before any payout. NIST's Generative AI Profile warns of automation bias, "excessive deference to automated systems". A reviewer who has seen a quarter of matching runs is most at risk of approving the wrong one, so sample the payouts rather than reading only the totals.

### Access, definitions and agent monitoring

Granting access and maintaining definitions are level 0. OWASP's 2025 guidance on excessive agency names excessive functionality, permissions and autonomy as its root causes. It recommends that agents act in the user's own context with minimal privileges, and that authorisation is enforced by downstream systems, not by the model's judgment. An agent that can change its own permissions has no meaningful limits. Definitions drift the same way: a "qualified opportunity" changes meaning one edit at a time. Each definition has a named owner, and the agent may only answer questions about it.

Monitoring is the opposite: level 3 from day one. Anthropic's guidance on building agents notes that autonomy brings "higher costs, and the potential for compounding errors", and recommends stopping conditions such as a maximum number of iterations. In operations terms that means a spend cap per agent, a loop limit, a log of every tool call and a [kill switch](https://lowob.com/research/what-is-an-ai-kill-switch/) a named person can use without asking.

> A sales agent uses the brain. An operations agent maintains it, so its mistakes travel further.

## Start here: the first three tasks

1. **Monitor agent activity and cost.** Level 3, before any other agent goes live. Daily report of runs, tool calls, spend against cap and any loop stopped. Control: a named owner of the kill switch.
2. **De-duplicate and clean CRM records.** Level 2 for four weeks: the agent proposes merges and fixes, an operations analyst approves them in batches. Move to level 3 once the merge rules hold and the pre-merge snapshot is tested. Baseline: duplicate count from the clean-up described in [Your CRM Is Memory, Not a Brain](https://lowob.com/research/your-crm-is-memory-not-a-brain/).
3. **Prepare the weekly pipeline review pack.** Level 2 for two cycles, then level 3. Every figure links to the underlying records so a reviewer can check any number in one click. Baseline: hours spent building the pack.

Decision records and outcome write-back follow, once the pack is trusted. Commission runs in shadow from the second quarter.

Illustrative example: sequencing a RevOps agent rollout

Decision
:   Deploy agent monitoring and staged de-duplication first; defer an enrichment agent until an approved source list exists; refuse a vendor request for the agent to manage user permissions.

Reason and owner
:   The CRM could not reverse merges, so every merge is staged with a snapshot; enrichment sources had no consent review; access changes are never delegated. Owned by the head of revenue operations.

What changed
:   Duplicate counts fall over six weeks with no wrong merge reaching a seller; the pipeline pack moves to level 3 after two clean cycles.

Illustrative: a composite of a mid-size B2B software firm, built from patterns across engagements.

## How to move an operations task up the dial

The tests are those in [Part 1](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/): four weeks with the control in place, a clean weekly sample, and a recorded reason for the decision touched. Operations adds one: the change is reversible, or staged so that it can be. Any task that writes to the store without a way back stays at level 2, whatever its accuracy.

## lowob takeaways

- **Make every change reversible first.** Where the CRM cannot undo, the agent must stage and snapshot.
- **Capture reasons at the moment of approval.** Reasons reconstructed later are guesses.
- **Never delegate access or definitions.** These set the limits every other agent works within.
- **Monitor agents before you deploy them.** Spend caps, loop limits and a kill switch come first.

Gateway card

### Before an operations agent goes live

- Task found in the directory and set at or below its level
- Agent monitoring live, with spend caps and a named kill-switch owner
- Merge rules written; pre-merge snapshots kept and restorable
- Approved source list for any enrichment
- Every report figure linked to its source record
- No agent holds permission to change access or definitions

## Sources and notes

- [Validity, State of CRM Data Management in 2025 (press release)](https://www.prnewswire.com/news-releases/validity-releases-state-of-crm-data-management-in-2025-report-revealing-disconnect-between-data-quality-and-ai-implementation-302499899.html), 10 July 2025. Vendor survey of 602 CRM users; self-reported.
- [HubSpot Knowledge Base, Merge records](https://knowledge.hubspot.com/records/merge-records). Vendor documentation for one CRM; behaviour differs across platforms and may change.
- [OWASP, LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/). Security guidance for LLM applications; not operations-specific.
- [Anthropic, Building effective agents](https://anthropic.com/engineering/building-effective-agents), 19 December 2024. Vendor engineering guidance; describes practice, not measured outcomes.
- [NIST, AI 600-1: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024. Voluntary US framework; names risks without measuring frequency.
- [Better Call GPT, Comparing Large Language Models Against Lawyers (arXiv:2401.16212)](https://arxiv.org/abs/2401.16212), January 2024. arXiv preprint; a single study on a defined set of contracts.
- [Civil Resolution Tribunal of British Columbia, Moffatt v. Air Canada, 2024 BCCRT 149](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do). Provincial small-claims decision; persuasive, not binding elsewhere.
- [Zapier, 2026 AI agents survey](https://zapier.com/blog/ai-agents-survey/). Vendor-commissioned survey of 513 US managers at firms of 1,000+ staff; self-reported.
- Autonomy levels, reliability ratings, brain-layer mapping and starting levels are **lowob**'s working framework, reviewed quarterly.

## Related research

- [What AI Agents Can Do: A Task Directory for Commercial Teams](https://lowob.com/research/what-ai-agents-can-do-task-directory/)
- [What Is CRM Data Hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [What Is Excessive Agency?](https://lowob.com/research/what-is-excessive-agency/)
- [RevOps vs Sales Ops: What Changed and Why It Matters](https://lowob.com/research/revops-vs-sales-ops/)

## Next move

List every agent with write access to your CRM and check two things: whether its changes can be undone, and whether it has a spend cap and a named person who can stop it. Fix whichever is missing before adding another agent.

[Start a conversation](https://lowob.com/contact/)
