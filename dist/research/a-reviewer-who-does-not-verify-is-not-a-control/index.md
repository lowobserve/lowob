# A Reviewer Who Does Not Verify Is Not a Control

Source: https://lowob.com/research/a-reviewer-who-does-not-verify-is-not-a-control/
Publisher: lowob (https://lowob.com)
Published: 2026-09-21 · Updated: 2026-11-17
Function: Strategy

> Summary: Human-in-the-loop is a design pattern, not a defence. Courts, regulators and clients now look for evidence that the human actually checked, and the human factors research shows that instructions alone do not make people check. Design the review gate so that it produces verification evidence as a by-product.

Human-in-the-loop is a design pattern, not a defence. Courts, regulators and clients now look for evidence that the human actually checked, and a review box on a process diagram is not that evidence. By late July 2026 one tracked database held 1,240 reported US court filings with AI-fabricated content, hundreds of them signed by lawyers. Design the review gate so that proof of verification is a by-product: sources one click away, a log of what the reviewer opened, edit classes, blind second looks and seeded errors.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Review happened on paper

US courts are the clearest public record of what nominal review looks like. Damien Charlotin's AI Hallucination Cases database, as summarised by the Maryland State Bar Association in July 2026, counted 11 reported US instances in 2023, 37 in 2024, 524 in 2025 and 668 in 2026 up to 27 July. In 2025, 208 of the 524 involved lawyers rather than self-represented litigants, 97 led to monetary sanctions and 59 to disciplinary referrals. The MSBA describes courts responding with "less patience, fewer warnings" and referrals to disciplinary bodies.

In every one of the lawyer cases, a qualified professional signed the filing. A person was in the loop. The loop did not include verification.

The same pattern has reached advisory work. In October 2025 Deloitte agreed to repay the final instalment of an AU$440,000 contract with Australia's Department of Employment and Workplace Relations. A published report had been found to contain phantom footnotes, citations to reports that did not exist and a fabricated quote attributed to a judge. The firm had used a GPT-4o tool licensed by the department. The report passed through delivery review before publication.

Liability follows the organisation, not the tool. In *Moffatt v Air Canada* (2024 BCCRT 149), British Columbia's Civil Resolution Tribunal held the airline liable for negligent misrepresentation by its website chatbot. It rejected the argument that the airline could not be responsible for information given by its agents, including a chatbot. Our explainer on [AI hallucination](https://lowob.com/research/what-is-ai-hallucination/) covers why fluent, wrong output is a structural feature of these systems rather than a passing bug.

The lesson is not that review is useless. It is that a review step on a process diagram is not evidence that review happened.

## Why people in the loop stop checking

Raja Parasuraman and Dietrich Manzey's 2010 review in *Human Factors* is still the most useful map of the problem. They treat complacency and automation bias as overlapping effects with attention at their centre. Complacency appears under multiple-task load, when manual work competes with automated work for attention, and it persists with practice. Automation bias produces two kinds of error when an aid is imperfect: omissions, where the person misses a problem the aid did not flag, and commissions, where the person follows the aid's wrong advice. The finding that matters most for operators is that automation bias was not prevented by training or instructions.

That rules out the usual fix. Telling reviewers to be careful does not work reliably. The gate has to be designed so that checking is the path of least resistance and so that not checking is visible.

Standards bodies now describe the risk the same way. NIST's generative AI profile (AI 600-1, July 2024) lists confabulation, "the production of confidently stated but erroneous or false content", as one risk. It lists human-AI configuration as another, covering automation bias and over-reliance. The second framing is the useful one: the risk is not only that the model errs, but that the arrangement of people and system lets errors through.

The EU AI Act puts the same idea into law for high-risk systems. Article 14(4)(b) requires that overseers can "remain aware of the possible tendency of automatically relying or over-relying on the output". Article 14(4)(d) and (e) require that they can override or reverse the output and interrupt the system through a "stop" button. Under Regulation (EU) 2026/1744, which entered into force on 27 July 2026, the Annex III high-risk obligations apply from 2 December 2027. Most commercial uses are not high-risk, but Article 14 is the clearest regulatory statement of what oversight means. Our explainer on [human-in-the-loop AI](https://lowob.com/research/what-is-human-in-the-loop-ai/) sets out the wider regulatory picture.

| Failure mode | What it looks like in a review queue | Design response |
| --- | --- | --- |
| Omission error | Reviewer misses a fabricated citation the tool did not flag | Flag every number, date and citation visually |
| Commission error | Reviewer accepts a confident claim that is wrong | One-click source link for every factual claim |
| Complacency under load | Approvals in seconds late in a long session | Queue limits and time-on-item logging |
| Unmeasured gate | Nobody knows the catch rate | Seeded errors and blind second review |

## Design the gate to leave evidence

**Verification affordances.** Every factual claim in an output links to its source, and the reviewer can open each in one click. Claims with numbers, dates or citations are visually flagged, because those are where the court and consultancy failures above occurred.

**Verification telemetry.** Log which sources the reviewer actually opened, and how long they spent on the item. "Approved after opening four of six cited sources in three minutes" is evidence. "Approved" is not.

**Edit classes.** When a reviewer changes something, record what kind of change it was: factual correction, tone, structure or scope. Factual corrections are the signal that the gate is catching real errors. A month with none is either a very good month or a gate that has stopped looking.

**Second looks.** Sample a small share of approved items for blind second review, and seed a few known-flawed items into queues to measure catch rates. This is an established practice in other inspection work. The US Transportation Security Administration projects fictional threat images onto X-ray scans of real bags, and screeners who fall below a target identification rate are sent to remedial training. The GAO's 2016 review also carries a warning: up to 14% of airports reported no such data in one year, and the agency had not analysed results nationally. Seeded tests only work if someone collects and reads the results.

**Queue limits.** Cap the number of items per reviewer per session. Parasuraman and Manzey's finding that complacency rises under competing load is the reason: a reviewer clearing forty items between meetings is the condition the research describes.

> "Approved" is a claim. "Approved after opening four of six cited sources in three minutes" is evidence.

## What the evidence is for

The log serves three audiences, and each wants something slightly different.

| Audience | What they ask | What the gate log shows |
| --- | --- | --- |
| A court, client or counterparty in a dispute | Did anyone check before this went out? | Sources opened, time on item, the version approved |
| A regulator or auditor | Can you reconstruct the chain from input to outcome? | Who approved, on what evidence, with what edits |
| The business itself | Is the gate catching anything? | Factual-correction rate, seeded-error catch rate, second-review disagreement |

In [Regulators want the chain, not the model](https://lowob.com/research/regulators-want-the-chain-not-the-model/) we argued that supervisors inspect the sequence of evidence, approval and outcome rather than model internals. A verification log is the human link in that chain, and our explainer on the [AI audit trail](https://lowob.com/research/what-is-an-ai-audit-trail/) covers how to store it.

None of this needs to slow good reviewers down. Logging what they opened costs them nothing, because the system already knows. The point is that "a human approved it" now has to be provable, and the proof is cheap to collect at the time and impossible to reconstruct afterwards. In [Gateway 1: Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/) we set out the approval queue this log sits inside.

## What would prove this wrong

Organisations with nominal review and no verification evidence experiencing no more incidents, sanctions or disputes than those with evidenced review, over a meaningful period. Then the evidence is overhead. The court record so far points the other way, but it records failures, not the firms that avoided them, so it cannot settle the question alone.

## lowob takeaways

- **A signature is not a check.** Dozens of sanctioned court filings were signed by a qualified professional.
- **Instructions do not fix automation bias.** The research says design the gate, not the memo.
- **Log what the reviewer opened.** Sources opened and time on item turn "approved" into evidence.
- **Measure the gate itself.** Edit classes, blind second review and seeded errors show whether it catches anything.

## Common questions

### Is having a human review AI output enough to count as a control?

No. A review step on a process diagram is not evidence that review happened. Courts, regulators and clients now look for evidence that the person actually checked, such as which sources they opened and what they corrected.

### How do you prove a human actually verified AI-generated content?

Link every claim to its source, log which sources the reviewer opened and how long they spent, and record the class of each edit. "Approved after opening four of six cited sources in three minutes" is evidence; "approved" is not.

### How many AI hallucinated citations have appeared in US court filings?

Damien Charlotin's database recorded 1,240 reported US instances by 27 July 2026: 11 in 2023, 37 in 2024, 524 in 2025 and 668 in 2026 to that date, according to the Maryland State Bar Association.

### What is automation bias in AI review?

The tendency to rely on an automated aid's output, missing problems it did not flag or following its wrong advice. Research by Parasuraman and Manzey found training and instructions do not prevent it, so the review process must be designed around it.

## Sources and notes

- [Maryland State Bar Association, Confronting the hard numbers behind lawyers, AI and phantom precedents](https://msba.org/site/content/News-and-Publications/News/General-News/Confronting_the_Hard%20Numbers_Behind_Lawyers_AI_and_Phantom_Precedents.aspx), Pamela Langham, 27 July 2026. Bar association summary of Damien Charlotin's database; counts reported instances only, so true numbers are likely higher.
- [Parasuraman and Manzey, Complacency and Bias in Human Use of Automation: An Attentional Integration](https://trid.trb.org/View/1085175), *Human Factors* 52(3), June 2010. Peer-reviewed review of laboratory and field studies; predates generative AI.
- [NIST, AI 600-1: Artificial Intelligence Risk Management Framework, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024. US standards body guidance; voluntary.
- [Regulation (EU) 2024/1689 (AI Act), Article 14: Human oversight](https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/), Official Journal text via SpringLex. Applies to high-risk systems only.
- [National Law Review, EU Digital Omnibus on AI enters into force](https://natlawreview.com/article/eu-digital-omnibus-ai-enters-force), 31 July 2026. Law firm summary of Regulation (EU) 2026/1744 and the revised high-risk timeline.
- [The Register, Deloitte refunds Aussie gov after AI fabrications slip into $440K welfare report](https://www.theregister.com/2025/10/06/deloitte_ai_report_australia/), 6 October 2025. Trade press; Deloitte did not comment, and a reported internal review blamed human error.
- [McCarthy Tétrault, TechLex blog on Moffatt v. Air Canada](https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot), February 2024. Law firm commentary on a small-claims tribunal decision.
- [US GAO, GAO-16-704: TSA should ensure testing data are complete and fully used](https://www.gao.gov/assets/gao-16-704.pdf), September 2016. Government audit of airport screening tests; a different domain used here for the seeded-test method.
- The failure-mode and audience tables are **lowob**'s framework.

## Related research

- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [What Is Human-in-the-Loop AI?](https://lowob.com/research/what-is-human-in-the-loop-ai/)
- [What Is an AI Audit Trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [Approval Rate Measures Fatigue Too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [Regulators Want the Chain, Not the Model](https://lowob.com/research/regulators-want-the-chain-not-the-model/)

## Next move

Pick one AI-assisted output that leaves your firm and add two fields to its approval: which sources the reviewer opened, and the class of any edit. Read the factual-correction rate after a month.

[Start a conversation](https://lowob.com/contact/)
