# Ten People: The First Stranger

Source: https://lowob.com/research/ten-people-the-first-stranger/
Publisher: lowob (https://lowob.com)
Published: 2026-10-09 · Updated: 2026-11-17
Function: Strategy

> Summary: Somewhere between the third and tenth hire, a company gains people who were not there when anything was decided. The decision record's job becomes answering 'why do we do it this way?' without a founder in the room. A topic wiki is the trap; a time-ordered ledger readable by strangers, with a few 'why we do it' pages and first definitions, is the defence.

Somewhere between the third and the tenth hire, the company gains people who were not there when anything was decided. The enterprise brain's job becomes answering "why do we do it this way?" without a founder in the room. The founders' ledger stays, rewritten so strangers can read it, with three additions: short "why we do it this way" pages, a handful of first definitions with owners, and onboarding through the record. The trap is a topic wiki.

This is the second rung of [*The scale ladder*](https://lowob.com/research/the-scale-ladder/). The previous rung, [*Two people: the founders' ledger*](https://lowob.com/research/two-people-the-founders-ledger/), dealt with false shared memory. At ten people the problem is the first stranger.

The first employees join a company whose habits, choices and quirks all have reasons, and almost none of the reasons are written down. They ask. The founders answer. That works for a while, and then it becomes the founders' main job without anyone noticing.

## The founders become the memory

The arithmetic changes quickly. Brooks's formula for communication paths, n(n-1)/2, gives one channel at two people and 45 at ten. Most of those channels carry questions about history toward the same one or two people. J. Richard Hackman, the Harvard team researcher, warned in 2009 that the links a team must manage grow "at an accelerating, almost exponential rate", and gave "no double digits" as his rule for team size.

The cost of searching for context is well measured in larger firms. McKinsey Global Institute estimated in 2012 that interaction workers spend nearly 20% of their time looking for internal information or tracking down colleagues who can help with specific tasks, and that a searchable record of knowledge could cut that search time by as much as 35%. At ten people, "tracking down a colleague" usually means interrupting a founder.

The symptom is easy to spot. Count how many questions in a week end with a founder answering them. If that number grows with every hire, the founders have become the organisation's memory, and memory does not scale by working longer hours.

> If the questions founders answer each week grow with every hire, the founders have become the company's memory.

## What changes

The founders' ledger stays, but it must now be readable by people who were not there. That means writing entries so a stranger can follow them: context in the first line, no private shorthand, links to the evidence.

Michael Nygard's 2011 case for architecture decision records describes exactly what happens without this. A newcomer who finds a past decision without its reasoning has two options: blindly accept it, which is harmful when the context has changed, or blindly change it, which can break something nobody wrote down.

Three additions earn their place.

**"Why we do it this way" pages.** Short explanations of the five to ten practices new people question most: pricing, how leads are qualified, why a particular tool, why a market was deprioritised. Each links to the ledger entries behind it.

**First definitions.** The handful of terms that already cause confusion. What counts as a qualified lead. What "launched" means. When a customer is "active". Write them down once, with an owner. This is the seed of the glossary the next rung needs.

**Onboarding through the record.** Every new hire spends part of their first week reading the ledger. It is the fastest way to absorb how the company thinks, and their questions reveal which entries are unclear.

| Addition | What it contains | Owner | Done when |
| --- | --- | --- | --- |
| Readable ledger | Every entry rewritten with context in the first line | Founders | A new hire can follow the last 20 entries unaided |
| "Why we do it" pages | Five to ten practices, each linked to its ledger entries | The founder who made the call | New hires stop asking about those practices |
| First definitions | Five to ten terms that already cause confusion | One named person per term | Two people give the same answer to "what counts as active?" |
| Record-based onboarding | Reading the ledger in week one, questions logged | Hiring manager | Each new hire's questions produce at least one clarified entry |

## AI at this stage

This is the first point where an assistant over the record is clearly worth it. A new hire asks "why did we stop selling to agencies?" and gets the ledger entry, the date and the reason. The question no longer interrupts a founder. If the record cannot answer, the question is logged, and the founder writes the missing entry once instead of answering it five times.

The mechanism is ordinary retrieval, covered in our explainer [*What is retrieval-augmented generation?*](https://lowob.com/research/what-is-retrieval-augmented-generation/). Two conditions make it work at this size. The assistant must answer from the ledger and cite the entry, not from a model's general knowledge. And the unanswered-question log must be reviewed weekly, in the same 30 minutes as the ledger review, or the gaps never close.

## The trap

The trap at ten people is a wiki. Someone sets up a large knowledge base, populates it enthusiastically for two weeks, and then it decays. Wikis organised by topic go stale because nobody owns keeping them current. A decision record organised by time does not go stale in the same way, because old entries are meant to be old; they are superseded, not updated.

|  | Topic wiki | Time-ordered decision record |
| --- | --- | --- |
| Organised by | Subject | Date of decision |
| What "out of date" means | A page that is silently wrong | An entry that has been superseded, with a link to its successor |
| Who maintains it | Nobody in particular | Whoever made the decision |
| What a newcomer learns | What someone once wrote about a topic | What was decided, why, and what replaced it |
| Failure mode | Decays within weeks of launch | Gaps where decisions were not written down, visible in the question log |

Our piece [*Supersede, never overwrite*](https://lowob.com/research/supersede-never-overwrite/) explains why keeping the old view, linked to the new one, is safer than editing it away. The first hire is one of [*the transitions that break the brain*](https://lowob.com/research/the-transitions-that-break-the-brain/), and our explainer [*What is a system of record?*](https://lowob.com/research/what-is-a-system-of-record/) shows where the ledger fits.

**In practice:** count questions answered by founders each week, and aim for that number to fall as headcount rises. Rewrite ledger entries so someone who was not there can follow them. Write "why we do it this way" pages for the five most-questioned practices, and make reading the ledger part of every new hire's first week.

## What would prove this wrong

Ten-person companies where founders answer every contextual question without strain or slowdown. Then the record is premature at this size, and the effort belongs at the next rung, [*Fifty people: when words start to mean different things*](https://lowob.com/research/fifty-people-when-words-start-to-mean-different-things/), where teams form and vocabularies drift.

## lowob takeaways

- **Measure founder load.** If the questions founders answer each week grow with every hire, the founders have become the memory.
- **Write for strangers.** Context in the first line, no private shorthand, links to evidence.
- **Add three things only.** "Why we do it" pages, first definitions with owners, onboarding through the record.
- **Let the assistant log its gaps.** An unanswered question becomes one written entry, not five interruptions.
- **Avoid the wiki.** Topic pages decay; time-ordered records are superseded, not updated.

## Common questions

### How do startups stop founders being the bottleneck for every question?

Make the founders' decision ledger readable by people who were not there, write "why we do it this way" pages for the most-questioned practices, write down first definitions with an owner, and onboard new hires through the record.

### Should a 10-person startup set up a wiki?

Usually not. Topic wikis decay because nobody owns keeping them current. A decision record organised by time does not go stale the same way, because old entries are superseded with a link to the new one.

### When is an AI assistant over company knowledge worth it?

From about ten people, when it answers from the decision record, cites the entry, and logs questions it cannot answer so a founder writes the missing entry once.

### What should new hires read in their first week at a startup?

The decision ledger and the "why we do it this way" pages. They are the fastest way to absorb how the company thinks, and a new hire's questions show which entries are unclear.

## Sources and notes

- [McKinsey Global Institute, The social economy](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy), July 2012. Consultancy estimate across large firms; predates generative AI.
- [Diane Coutu, Why Teams Don't Work (interview with J. Richard Hackman)](https://bu.edu/sph/files/2019/01/Why-Teams-Don%E2%80%99t-Work.pdf), Harvard Business Review, May 2009. Interview, hosted copy; about teams, not companies.
- [Michael Nygard, Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), 15 November 2011. Practitioner essay on software teams.
- [Project Wizards, Brooks's law (glossary)](https://www.projectwizards.net/en/project-management-glossary/brooks-law). Vendor glossary summarising Brooks's 1975 book.
- The additions table and the wiki comparison are **lowob**'s framework.

## Related research

- [The Scale Ladder](https://lowob.com/research/the-scale-ladder/)
- [Two People: The Founders' Ledger](https://lowob.com/research/two-people-the-founders-ledger/)
- [Fifty People: When Words Start to Mean Different Things](https://lowob.com/research/fifty-people-when-words-start-to-mean-different-things/)
- [What Is a System of Record?](https://lowob.com/research/what-is-a-system-of-record/)
- [What Is Retrieval-Augmented Generation (RAG)?](https://lowob.com/research/what-is-retrieval-augmented-generation/)

## Next move

For one week, tally every question a founder answers about why something is done. Turn the three most frequent into "why we do it this way" pages linked to their ledger entries.

[Start a conversation](https://lowob.com/contact/)
