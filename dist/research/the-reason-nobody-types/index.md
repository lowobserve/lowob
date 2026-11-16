# The reason nobody types

Source: https://lowob.com/research/the-reason-nobody-types/
Publisher: lowob (https://lowob.com)
Published: 2026-08-26 · Updated: 2026-11-16
Function: Strategy

> Summary: The operative reason for many decisions is political, personal, embarrassing or legally sensitive, so a system that records only the sayable reason produces clean, coherent and quietly false records. Research on organisational silence, psychological safety and premortems explains why, and AI-drafted rationales make it worse. No design fully fixes this, but a completeness flag, scoped visibility, a cynic's question and outcome write-back make it much better.

The operative reason for many decisions is political, personal, embarrassing or legally sensitive. A system that only records the sayable reason produces clean, coherent and quietly false records, and precedent built on them misleads. Research on organisational silence and psychological safety explains why people withhold, and Gary Klein's premortem shows that changing the frame of a question changes what people will say. No design fully fixes this, but a completeness flag, scoped visibility, a cynic's question and outcome write-back make it much better.

Ask anyone who has run decision reviews: the stated reason and the operative reason often differ. The deal was approved partly because the sponsor is leaving and wanted a win. The vendor was chosen because the alternative's team burned someone two years ago. The launch slipped because nobody had the capacity, not because of the market conditions in the memo. None of that gets typed into a shared system.

This matters more for judgment systems than for any other kind of record. A [decision record](https://lowob.com/research/what-is-a-decision-record/) exists to be reused as precedent. If the stated reasons are systematically incomplete, precedent misleads. The next person sees a coherent rationale and copies a decision whose real driver no longer applies.

## Why the sayable reason wins

Organisational research has described this for a quarter of a century. Elizabeth Morrison and Frances Milliken's 2000 paper in the Academy of Management Review introduced "organisational silence": the collective withholding of concerns, information and opinions, made the default by managerial beliefs and organisational structures. A decision log does not escape those forces. It inherits them, and adds permanence.

Amy Edmondson's 1999 study of 51 work teams in a manufacturing company defined team psychological safety as "a shared belief held by members of a team that the team is safe for interpersonal risk taking". Teams with more of it showed more learning behaviour: seeking feedback, discussing errors, experimenting. Writing the real reason for a decision into a system colleagues can read is interpersonal risk taking of a very direct kind.

A new problem arrives with AI. Teams increasingly ask a model to draft the rationale from meeting notes or an email thread. The model will produce the reason that reads best from the material it was given, which is the sayable one. Miles Turpin and colleagues showed in 2023 that model explanations can "systematically misrepresent the true reason for a model's prediction", producing plausible justifications that omit what actually drove the answer. A drafted rationale is fluent by construction. Fluency is not evidence that it is the reason.

> A record that contains only the sayable reason is not incomplete. It is coherent, which is worse.

## Four kinds of unsayable reason

It helps to separate them, because each needs a different response.

| Kind | Example | Why it goes unrecorded | Response |
| --- | --- | --- | --- |
| Political | Sponsorship, internal alliances, timing around people | Naming it exposes colleagues | Scoped visibility; cynic's question |
| Relational | History with a counterparty; personal trust or distrust | Feels unprofessional to write | Completeness flag |
| Embarrassing | Lack of time or skill; a mistake being quietly corrected | Exposes the writer | Builders go first; cynic's question |
| Legally sensitive | Reasons that should not be written casually at all | Records are discoverable | Counsel's design, not more capture |

The last category deserves a direct statement. Some reasons genuinely should not be in a broadly accessible record. Under Rule 26(b)(1) of the US Federal Rules of Civil Procedure, parties "may obtain discovery regarding any nonprivileged matter that is relevant to any party's claim or defense", subject to proportionality. Other jurisdictions differ in detail, not in principle. The right answer is counsel's design, not more capture. A judgment system in a regulated firm should be designed with legal and compliance from the start, including what is written, where, and who can see it. Our piece on [the permission problem](https://lowob.com/research/the-permission-problem-when-commercial-context-leaks/) covers access design.

## What helps with the rest

**A completeness flag.** Let people mark "stated reason, not the whole story" without requiring the whole story. It is honest and cheap, and it tells later readers to weight the precedent accordingly. A system that retrieves precedent should show the flag beside the rationale, not bury it in metadata.

**Scoped visibility.** Some reasoning can be visible only to the decision owner and the review gate. Narrower audiences produce franker records. The scope should be set at the field level, so the decision and outcome stay broadly visible while the frank rationale does not. Our explainer on [permission-aware retrieval](https://lowob.com/research/what-is-permission-aware-retrieval/) covers how AI search respects those scopes.

**The cynic's question.** Ask, as an optional field: "What would a sceptical colleague say was the real reason?" It gives people a deniable way to record the operative driver, and it is often answered with surprising candour. The mechanism has a well-studied cousin. Gary Klein's premortem, described in Harvard Business Review in 2007, asks a team to assume a project has already failed and write down why. Klein cites research finding that this "prospective hindsight" increases the ability to correctly identify reasons for future outcomes by 30%, and argues the method works partly by "making it safe for dissenters" to speak. Both techniques change the frame from confession to analysis.

**Outcomes as a truth serum.** Over time, [outcome write-back](https://lowob.com/research/what-is-outcome-write-back/) exposes the gap. Decisions whose stated reasons repeatedly fail to predict their results are telling you that the stated reasons are not the real ones. You do not need anyone to confess; the pattern shows itself.

| Design | What it costs | What it catches | What it misses |
| --- | --- | --- | --- |
| Completeness flag | One checkbox | Records known to be partial | Records the writer thinks are complete |
| Scoped visibility | Field-level permissions | Political and relational reasons | Reasons nobody will write anywhere |
| Cynic's question | One optional field | Embarrassing and political drivers | Writers who skip optional fields |
| Outcome write-back | A review step at a set date | Systematic gaps, after the fact | Single decisions; it needs a pattern |

## The builders go first

The first test of any judgment system is whether its own builders record their unflattering reasons. If the team running the programme writes only polished rationales, everyone else will too. Model the behaviour publicly, in your own records, before asking it of anyone else. Edmondson's finding cuts both ways: psychological safety is a property of the team, and the team learns what is safe from what its leaders do. Our piece [Dissent is the data you are throwing away](https://lowob.com/research/dissent-is-the-data-you-are-throwing-away/) covers the related problem of recording the views that lost.

## In practice

Add a completeness flag and the optional cynic's question to the record. Agree visibility scopes with legal and compliance before launch, not after the first awkward record. If a model drafts rationales, label them as drafts and require the owner to edit or confirm them. Quarterly, list decisions whose stated reasons failed to predict their outcomes, and review them privately with the owners.

Write three of your own honest, unflattering records in the first month.

## What would prove this wrong

Evidence that stated reasons in a well-designed system predict outcomes as well as private, candid accounts of the same decisions. Then the gap between stated and operative reasons is smaller than practitioners believe, and the extra fields are ceremony. We know of no study that has tested this directly. Running the comparison on your own records, once outcomes are in, is the honest way to find out.

## lowob takeaways

- **Coherent is not complete.** A record with only the sayable reason misleads every later reader.
- **Match the fix to the kind.** Flag, scope, ask the cynic's question, or hand it to counsel.
- **Treat AI-drafted rationales as drafts.** Fluent explanations can omit the real driver.
- **Let outcomes do the auditing.** Stated reasons that keep failing to predict results are not the real ones.

## Sources and notes

- [Morrison and Milliken, Organisational silence: a barrier to change and development in a pluralistic world, summary](https://explore.psychsafety.com/n/morrison-milliken-2000/), Academy of Management Review 25(4), 2000. Summary page of a peer-reviewed paper; the full text is paywalled.
- [Edmondson, Psychological Safety and Learning Behavior in Work Teams](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Performance/Edmondson%20Psychological%20safety.pdf), Administrative Science Quarterly 44(2), 1999. Peer-reviewed; 51 teams in one manufacturing firm.
- [Klein, Performing a Project Premortem](https://wiki.duraspace.org/download/attachments/104563925/ProjectPremortem.pdf?api=v2), Harvard Business Review, September 2007. Practitioner article; the 30% figure comes from 1989 research it cites.
- [Cornell Legal Information Institute, Federal Rules of Civil Procedure, Rule 26](https://www.law.cornell.edu/rules/frcp/rule_26), accessed November 2026. US federal civil procedure only; not legal advice.
- [Turpin et al., Language Models Don't Always Say What They Think](https://arxiv.org/abs/2305.04388v2), December 2023. Academic preprint; tested GPT-3.5 and Claude 1.0 on reasoning tasks, not business rationales.
- The four-kind classification and the design table are **lowob**'s framework.

## Related research

- [What is a decision record?](https://lowob.com/research/what-is-a-decision-record/)
- [What is outcome write-back?](https://lowob.com/research/what-is-outcome-write-back/)
- [The field that makes a record a judgment](https://lowob.com/research/the-field-that-makes-a-record-a-judgment/)
- [Dissent is the data you are throwing away](https://lowob.com/research/dissent-is-the-data-you-are-throwing-away/)

## Next move

Add two fields to your decision template this week: a "stated reason, not the whole story" checkbox and the optional cynic's question. Then fill both in honestly on your own next three decisions.

[Start a conversation](https://lowob.com/contact/)
