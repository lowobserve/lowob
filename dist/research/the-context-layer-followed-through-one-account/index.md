# The Context Layer, Followed Through One Account

Source: https://lowob.com/research/the-context-layer-followed-through-one-account/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: A context layer is the wiring that lets AI read a company's own systems: connectors into email, CRM, documents and calls; retrieval that respects existing permissions; and shared definitions so that every agent means the same thing by "active client". It should be rented, not built. The decisions that matter are what to connect first, what to wall off, and how to mark which information is current. Even done well, it cannot retrieve a decision nobody recorded, which is why the record comes next.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- A context layer has three parts: connectors, permission-aware retrieval and shared definitions.
- Connect sources in the order that improves real client work: email and calendar, then CRM, call notes, proposals and chat.
- Retrieval inherits every bad permission in the underlying systems; audit shared drives before connecting them.
- Systems usually find the right material and then weigh it badly; mark proposals and prices as current or superseded.
- Untrusted content, broad permissions and an outbound channel together create the leading security risk for AI systems.

The easiest way to understand a context layer is to follow one account through it.

Consider a mid-size advisory firm pitching a mid-market lender for the second time. The first pitch, eighteen months earlier, went well until it did not. Before the second meeting, someone has to rebuild the history, and it is scattered across nine places: two senior people's inboxes, a call recording in a meeting tool, three versions of the proposal in a shared drive, a chat thread about price, a CRM record marked "lost" with no reason, an invoice for a small diagnostic engagement in between, two calendars, and one person's memory that the lender's new chief operating officer was a client at a previous firm.

Rebuilding that history takes most of a morning. The brief is good, out of date within a week, and seen by nobody else. That request (know everything we know about a client before every meeting) is the context layer. It is also where many builds stop and call themselves a brain.

*Figure: The wiring turns nine places into one brief. It cannot retrieve a decision nobody wrote down; that is the record's job.*

## What a context layer is

In *The first two-fifths* we described the full brain as five parts: knowledge, memory, meaning, governance and judgment. The context layer covers knowledge, governance and part of meaning. In practice it is three pieces of wiring.

| Component | What it does | What good looks like |
| --- | --- | --- |
| Connectors | Make company systems readable by an assistant or agent | Native or open-standard connectors; no copies of data in spreadsheets |
| Permission-aware retrieval | Finds relevant material and shows each person only what they can already see | The assistant never surfaces a file the user could not open directly |
| Shared definitions | Fix the meaning of key terms across people and agents | Written definitions, each with an owner, read by every agent |

### Connectors and the open standard

Connectors increasingly follow an open standard. The Model Context Protocol (MCP), created by Anthropic, was donated to the Linux Foundation's Agentic AI Foundation in December 2025, when more than 10,000 MCP servers had been published. Google's Agent2Agent protocol, for communication between agents, also sits under the Linux Foundation. The practical effect for a buyer is less lock-in at this layer: a connector built to an open standard works with more than one assistant, so changing assistants does not mean rebuilding the wiring.

### Rent it, then decide the order

The large platforms now sell the context layer directly. Microsoft's Work IQ, generally available since June 2026, is a permission-aware context layer billed on usage. Google's October 2026 Gemini Enterprise launch described a shared knowledge catalogue and connection to MCP servers inside and outside the company. Specialist platforms compete on the same ground, and our list *The 5 enterprise context platforms, ranked for regulated firms* compares them. This is the half of the brain we recommend renting (*Buy context, own judgment*). For a mid-size firm the real decision is not which platform to build. It is what to connect, in what order, and what to keep out.

## Connect in this order

Connect sources in the order they improve the next client meeting, not the order in which they are easiest to switch on.

| Order | Source | Why at this point | Watch for |
| --- | --- | --- | --- |
| 1 | Email and calendar | Every relationship leaves a trail here, and the suite connects them natively | Personal mail, partner-only threads, excluded mailboxes |
| 2 | CRM | The spine: accounts, stages, owners and outcomes | Stale records feeding confident answers (Part 4) |
| 3 | Call notes and recordings | What was actually said, including objections | Consent to record; summaries replacing the source |
| 4 | Proposals and deliverables | What was offered, at what price and on what terms | Old versions treated as current |
| 5 | Chat channels | The informal reasoning behind decisions | Noise; private channels; jokes read as facts |
| Later | Finance, HR, delivery files | Useful, but outside the commercial line | Confidentiality and scope creep |

Test each step on real meetings before adding the next. If the assistant's brief for an upcoming pitch is not better than one a person would prepare, adding another source will not fix it.

## Permissions are inherited, including the bad ones

Permission-aware retrieval shows each person only what they could already open. That protects the firm only if the underlying permissions are right, and in most firms they are not. Shared drives accumulate "anyone in the organisation" links for years. Old project folders remain open after the project ends. A search tool makes all of this findable at once.

So the first connection is also an audit. Before the drive is connected, someone should check what "everyone" can see: compensation files, board papers, other clients' pricing, conflict notes. The fix is mundane and it is usually the most valuable afternoon in the build. Security guidance points the same way: as one analysis of the OWASP list put it, the right control point is the data access decision at retrieval time, so the model never sees data the requester is not allowed to see.

## Five definitions to agree first

A brain that returns three answers to the same question is worse than none. That happens when words drift, which we described in *Fifty people: when words start to mean different things*. For the commercial line, agree five definitions before automating anything:

1. **Active client.** Billed in the last twelve months, under contract now, or engaged in the last ninety days. Pick one.
2. **Qualified opportunity.** What must be true before an opportunity enters the pipeline.
3. **Won, lost and no decision.** Including what counts as "no decision" and when a stalled deal is closed.
4. **Account owner.** One person, not a team.
5. **Source.** Where an opportunity came from, chosen from a fixed list.

Write each definition down, name its owner, and put the definitions where every agent reads them.

## Give evidence a standing

Connecting nine sources solves the search problem and creates a new one. The assistant now finds both prices: the one in the March proposal and the one in the June email. Which is current?

In *Retrieval is not the bottleneck* we cited benchmark evidence that relevant material is usually retrievable and that failures come when systems weigh it, especially for questions about change over time. The fix is to give important items a standing: whether they are current, superseded, disputed or unverified; when they became true; who asserted them; and what they replaced. On the commercial line that means, at minimum, marking proposals and prices as current or superseded and preferring the CRM's recorded outcome to anyone's recollection.

> No connector can retrieve a decision nobody recorded.

## What the wiring cannot do

Connect all nine places and the assistant can now produce the meeting brief in minutes. It can say what was proposed, what was said and what was invoiced. It still cannot say why the first pitch was lost, because that reason was never written down. No connector retrieves what was never recorded.

That is the boundary between the wiring and the record, and it is why the context layer sits in the middle of the build order rather than at the end. The record (the commercial decisions worth keeping, with their reasons and outcomes) is what turns a well-informed assistant into one that knows what the firm does. In *A loop with good context* we described how the record then flows back in, as a precedent slot of three to five comparable past decisions placed in front of an agent before it acts.

## The risk nobody budgets for

Once the wiring is live, the assistant reads content the firm did not write: inbound email, web pages, attachments. If it can also act (send a message, update a record), untrusted content now sits beside a user's permissions and an outbound channel. OWASP's 2025 Top 10 for LLM applications ranks prompt injection first and excessive agency sixth for this reason. The practical answer for a mid-size firm is not a security programme. It is the gateway in Part 8: nothing sends without a person, and every tool call is logged.

## Where the order bends

| Industry | What is different at the context layer |
| --- | --- |
| Professional services | Conflict and confidentiality walls between clients |
| Financial services and fintech | Identity checks, credit files and account data stay outside the commercial build |
| Media and publishing | Sales context must never reach editorial systems |
| Crypto and digital assets | The richest context is public (on-chain, community), so connection is easy and permissions are loose |
| B2B SaaS | Product usage data joins early and is often the strongest signal |
| Retail, DTC and luxury | Client books and messaging apps hold the relationship; consent governs both |
| Industrial distribution | The ERP, price book and specification sheets are the context |
| Healthcare and life sciences | Patient data never enters the commercial layer |

Illustrative example: wiring the priority accounts

Decision
:   Connect email, calendar, CRM and call notes for the top 40 accounts first; proposals next; chat later.

Reason and owner
:   These four sources cover most meeting preparation. Owned by the head of operations; shared-drive permissions audited first.

What changed
:   Meeting preparation drops from a morning to under an hour. The reason the earlier pitch was lost is still missing, which becomes the case for the decision record.

Illustrative: a composite of a mid-size advisory firm, built from patterns across engagements.

## lowob takeaways

- **Rent the wiring; decide the order.** What you connect first matters more than which platform you choose.
- **Audit before you connect.** The assistant inherits every bad permission in the drive.
- **Agree five definitions.** Active client, qualified, won and lost, owner, source.
- **Know the limit.** The wiring retrieves what was recorded. It cannot retrieve a reason nobody wrote down.

Gateway card

### Context layer ready

- Email, calendar, CRM and call notes connected for priority accounts
- Shared-drive permissions audited
- Five definitions written, each with an owner
- Proposals and prices marked current or superseded
- Briefs tested against real meetings before adding sources

## Common questions

### What is a context layer in AI?

It is the wiring that lets AI read a company's own systems: connectors into email, CRM, documents and calls, retrieval that respects existing permissions, and shared definitions so every agent uses terms the same way.

### What is the Model Context Protocol (MCP)?

An open standard for connecting AI assistants and agents to tools and data. It was donated to the Linux Foundation's Agentic AI Foundation in December 2025, when more than 10,000 MCP servers had been published.

### What data should we connect to AI first?

For commercial teams: email and calendar, then the CRM, then call notes and recordings, then proposals, then chat. Finance, HR and delivery files come later.

### Is a context layer the same as an enterprise brain?

No. It is one part. A brain also needs a record of decisions and reasons, a reasoning layer, and outcomes written back. The context layer cannot retrieve a decision nobody recorded.

## Sources and notes

- [IT Brief, Anthropic donates MCP to new Agentic AI Foundation](https://itbrief.com.au/story/anthropic-donates-mcp-to-new-agentic-ai-foundation), January 2026; [IT Brief UK on the Agentic AI Foundation](https://itbrief.co.uk/story/linux-foundation-launches-agentic-ai-open-standards-hub).
- [Microsoft Learn, Work IQ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/). Vendor documentation.
- [Google Cloud, Gemini at work, 8 October 2026](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026). Vendor announcement.
- [OWASP Top 10 for LLM Applications 2025](https://www.hackerone.com/blog/owasp-top-10-llms-2025-how-genai-risks-are-evolving), via HackerOne; retrieval-time access control per [NHI Mgmt Group's summary](https://nhimg.org/articles/owasp-llm-top-10-shows-where-app-security-breaks-down/).
- The connection order and definitions are **lowob**'s recommendations for mid-size commercial teams; regulated firms will need more.

## Related research

- [Retrieval is not the bottleneck](https://lowob.com/research/retrieval-is-not-the-bottleneck/)
- [A loop with good context](https://lowob.com/research/a-loop-with-good-context/)
- [The 5 enterprise context platforms, ranked for regulated firms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/)
- [Fifty people: when words start to mean different things](https://lowob.com/research/fifty-people-when-words-start-to-mean-different-things/)

## Next Move

Pick your next client meeting and count the places someone would have to look to prepare for it. If the answer is more than three, the wiring is where to start.

[Start a conversation](https://lowob.com/contact/)
