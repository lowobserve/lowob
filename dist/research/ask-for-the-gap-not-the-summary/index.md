# Ask for the gap, not the summary

Source: https://lowob.com/research/ask-for-the-gap-not-the-summary/
Publisher: lowob (https://lowob.com)
Published: 2026-08-25 · Updated: 2026-11-16
Function: Strategy

> Summary: A good judgment system does not ask people to summarise everything. It compares each live decision record against a template of what that decision class needs, finds the most important missing item, and asks one specific question of the person most likely to know. Alert-fatigue and context research explain why one question beats five.

A good judgment system does not ask people to tell it everything. It knows what the next decision will need, notices what it is missing, and asks for exactly that, of the person most likely to know. The method is simple: write a needs template for each decision class, compare the live record against it, rank the gaps, and ask only the top one. One sharp question is answered in seconds. Five are an interrogation, and the research on alert fatigue shows what people do with too many prompts.

*Figure: Where this piece sits in The Build Order: the context layer.*

The default capture prompt is "summarise the meeting". It produces long, generic text in which the one thing that mattered is buried or absent. People learn quickly that nobody reads the summary, and they stop writing good ones.

The better pattern is gap-seeking, and it is more tractable to build than it sounds.

## Why the summary fails

Summaries fail for two reasons, one about machines and one about people.

For the machine, more text is not more context. Anthropic's engineering guidance treats context as "a finite resource with diminishing marginal returns", cites research showing recall falls as context grows, and advises finding "the smallest set of high-signal tokens that maximize the likelihood of your desired outcome." A long meeting summary is the opposite: many tokens, little signal, and the critical fact somewhere in the middle. Our explainer on [context engineering](https://lowob.com/research/what-is-context-engineering/) covers the mechanics.

For people, a summary records what was discussed, and what was discussed is mostly what everyone already knew. Stasser and Titus's 1985 experiments found group discussion centres on shared information, while facts held by only one member are rarely raised. A summary of that discussion inherits the bias. The item that would change the next decision is often the one nobody said aloud. [Conversation intelligence](https://lowob.com/research/what-is-conversation-intelligence/) tools can transcribe everything; they cannot record what was never said.

## How to compute a gap

Every decision class has an implicit list of what a good decision needs. Make that list explicit as a template for each class, in the same spirit as the structured fields of a decision record: Martin Fowler's architecture decision record and the UK government's 2025 framework both specify the fields up front so that nothing important depends on someone remembering to include it.

| Decision class | What a good decision needs |
| --- | --- |
| Renewal | Budget holder, usage trend, competitive threat, relationship temperature, open support issues, contract terms |
| Credit review | Recent financials, loan-condition status, ownership changes, sector view, covenant headroom |
| Discount exception | Deal size, standard terms, precedent for similar exceptions, approver, competitive pressure |
| Partnership | Partner's incentive, exclusivity terms, owner on each side, exit terms, first milestone |

Then, after any interaction touching a live decision, compare the record's current state with the template. The difference is the gap list. The ten decision types in [The ten commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/) are a reasonable place to start writing templates.

## Rank, then ask one

Rank gaps by three things: how much the next decision depends on the item, how stale the current information is, and how cheap it is to answer. Ask only the top one.

| Gap in a renewal record | Decision depends on it | Staleness | Cost to answer | Ask now |
| --- | --- | --- | --- | --- |
| Budget holder after the reorganisation | High | Six months old | One sentence | Yes |
| Competitor in the account | High | Three months old | One sentence, may be unknown | Next time |
| Usage trend | Medium | Available from product data | Zero, fetch it | Fetch, do not ask |
| Relationship temperature | Medium | Two weeks old | One word | No |

The discipline of one question is not politeness. It is what keeps the questions answered. In a review of 17 studies, Heleen van der Sijs and colleagues found clinicians overrode drug safety alerts in roughly 49% to 96% of cases. Among the system flaws they identified were low specificity, unclear information and unnecessary disruption to work. A capture system that sends five questions after every call is building the same habit. Gartner's 2023 survey of 501 sellers found 77% struggled to complete their assigned tasks efficiently; a question queue adds to that load unless every question earns its place.

> A single, sharp question is answered in seconds. Five questions feel like an interrogation and get skipped.

## Good gap questions are specific and answerable

"Did the budget holder change after the reorganisation?" "Was the objection about price, or about timing?" "Is the March waiver of the loan condition still in force?"

Each can be answered in a few words. "I don't know" is a valid answer and itself useful: it marks an item the next person should verify, not assume.

**Route the question to whoever knows.** Gap-seeking does not have to ask the person who just finished the interaction. The system often knows who touched the account last, who owns the relationship, or who analysed the sector. Route the question to the person most likely to answer it well. Given what the group research shows about knowledge held by one person, this is often the only way that knowledge reaches the record. It turns the system from a form into something closer to a well-informed colleague who knows who to ask.

## Gaps that recur are schema problems

Track which gaps appear most often across records. A gap that recurs across many decisions is usually a field the schema lacks, or a source the system is not connected to. In the ranking table above, usage trend should never be a question: it is a data connection waiting to be made. Recurring gaps are the cheapest product research you will ever get, because the system is telling you, in aggregate, what it does not know.

**Mind the tone.** A system that only ever asks what is missing can feel like an auditor. Pair every gap question with a give: the precedent, the warning, the drafted brief. And never ask the same person more than one gap question per interaction. Our review of [AI notetakers for decision capture](https://lowob.com/research/top-5-ai-notetakers-for-decision-capture/) covers which tools can be configured to work this way.

## What would prove this wrong

Records built from free-form summaries proving as complete and as useful for later decisions as records built from targeted gap questions, at similar cost in time. Then the summary is good enough. This is testable: run both on one decision class for a quarter and compare how often each record answered the questions asked of it later.

## lowob takeaways

- **Template first.** Write the six to ten things a good decision in each class needs.
- **Compare, rank, ask one.** Dependence, staleness and cost to answer decide which gap comes first.
- **Route to whoever knows.** The person who just left the meeting is not always the right one.
- **Fix recurring gaps in the schema.** A question asked every week is a missing field or connection.

## Sources and notes

- [Anthropic, Effective context engineering for AI agents](https://anthropic.com/engineering/effective-context-engineering-for-ai-agents), 29 September 2025. Vendor engineering guidance.
- [Stasser and Titus, Pooling of unshared information in group decision making](https://www.uni-muenster.de/imperia/md/content/psyifp/aeechterhoff/vorlesungkommunikation/stasser_titus_unsharedinfogroupdisc_jpsp1985.pdf), *Journal of Personality and Social Psychology* 48(6), 1985. Laboratory experiment with student groups.
- [van der Sijs, Aarts, Vulto and Berg, Overriding of drug safety alerts in computerized physician order entry](https://repub.eur.nl/pub/60465), *JAMIA* 13(2), 2006. Peer-reviewed review of 17 clinical studies; an analogue, not a study of business capture tools.
- [Gartner, Survey finds 77% of sellers struggle to complete their assigned tasks efficiently](https://www.gartner.com/en/newsroom/press-releases/2023-11-02-gartner-survey-finds-77-percent-of-sellers-struggle-to-complete-their-assigned-tasks-efficiently), 2 November 2023. Analyst survey of 501 sellers; self-reported.
- [Martin Fowler, Architecture Decision Record](https://www.martinfowler.com/bliki/ArchitectureDecisionRecord.html), 24 March 2026. Practitioner reference.
- [GOV.UK, Architectural Decision Record framework](https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework), 4 November 2025. Public-sector standard.
- The templates and ranking table are **lowob**'s illustrations and working method.

## Related research

- [The ten commercial decisions worth recording](https://lowob.com/research/the-commercial-decisions-worth-recording/)
- [What is context engineering?](https://lowob.com/research/what-is-context-engineering/)
- [What is conversation intelligence?](https://lowob.com/research/what-is-conversation-intelligence/)
- [Top 5 AI notetakers for decision capture](https://lowob.com/research/top-5-ai-notetakers-for-decision-capture/)

## Next move

Write a needs template for one decision class this week, renewals are the usual choice, and compare your five most recent renewal records against it. The gap that appears in most of them is your first new field.

[Start a conversation](https://lowob.com/contact/)
