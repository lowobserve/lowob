# Human-in-the-Loop vs Human-on-the-Loop

Source: https://lowob.com/research/human-in-the-loop-vs-human-on-the-loop/
Publisher: lowob (https://lowob.com)
Published: 2026-10-18 · Updated: 2026-11-17
Function: Strategy

> Summary: Human-in-the-loop means a person approves each AI output before it takes effect; human-on-the-loop means the system acts while a person monitors and can intervene. The terms come from defence and EU ethics guidance, and the EU AI Act asks for oversight in proportion to risk and autonomy. The right choice is per task, set by reversibility and who is affected.

Human-in-the-loop means a person approves each AI output before it takes effect. Human-on-the-loop means the system acts on its own while a person monitors, reviews afterwards and can intervene or stop it. In the loop is safer and slower; on the loop is faster and depends on the monitoring being real. The choice should be made task by task, based on whether the action can be undone and who it reaches.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What the two terms mean

Our explainer on [human-in-the-loop AI](https://lowob.com/research/what-is-human-in-the-loop-ai/) covers the in-the-loop pattern and what regulators expect of it. This page compares it with the on-the-loop alternative.

The vocabulary comes from two places. In defence, the US Department of Defense's Directive 3000.09, updated in January 2023, distinguishes a semi-autonomous weapon system, which engages only targets "selected by an operator", from an autonomous one that, once activated, selects and engages targets "without further intervention by an operator." Within the autonomous class it names operator-supervised systems, designed so that operators can override them. That is the original in-the-loop and on-the-loop split: a person chooses each action, or a person watches and can halt.

In civilian AI policy, the European Commission's High-Level Expert Group on AI set out three models in its Ethics Guidelines for Trustworthy AI, presented on 8 April 2019. Human-in-the-loop (HITL) is the "capability for human intervention in every decision cycle of the system." Human-on-the-loop (HOTL) is intervention during the design cycle and "monitoring the system's operation." Human-in-command (HIC) is the capability to oversee the system's overall activity and "decide when and how to use the system in any particular situation."

The guidelines also state the trade-off plainly: the less oversight a human can exercise, "the more extensive testing and stricter governance is required."

|  | Human-in-the-loop | Human-on-the-loop |
| --- | --- | --- |
| When the person acts | Before each output takes effect | During or after; the system does not wait |
| What the person does | Approves, edits or rejects each item | Monitors, samples, reviews exceptions, can stop |
| Speed | Limited by reviewer capacity | Limited by the system |
| Main failure | Rubber-stamping under volume | Nobody notices a drift until damage accumulates |
| Suits | Client-facing, irreversible or regulated actions | Internal, reversible, high-volume actions |
| Evidence it works | Edit and return rates, seeded-error catch rate | Exception reports read, time to halt, errors found in sampling |
| **lowob** autonomy dial | Level 1 draft, level 2 act with approval | Level 3 act and report |

Human-in-command sits above both. It is the person or group who decides whether a system is used at all, for which tasks, and who holds the [kill switch](https://lowob.com/research/what-is-an-ai-kill-switch/).

## What regulators expect from each

**The EU AI Act does not mandate one model.** Article 14 requires high-risk systems to allow effective oversight, and says measures shall be "commensurate with the risks, level of autonomy and context of use." The overseer must be able to understand the system's limits, stay aware of over-reliance on its output, "disregard, override or reverse" an output, and interrupt it through a "stop" button or similar. Those requirements fit either model, but on-the-loop designs must make the stop path genuinely available.

**UK data protection pushes significant decisions in the loop.** Article 22 of the UK GDPR restricts solely automated decisions with legal or similarly significant effects. The ICO's guidance says that, for human review to be meaningful, involvement "should come after the automated decision has taken place and it must relate to the actual outcome." A person who only supplies input data is not meaningfully involved. Monitoring a dashboard of completed decisions is unlikely to meet that test for a decision about an individual.

**Each model fails differently.** In the loop, the risk is automation bias: approvals become reflex as volume rises, which is why the AI Act names over-reliance explicitly. On the loop, the risk is silence: the system acts correctly for weeks, monitoring lapses, and an error repeats a thousand times before anyone reads a report.

## Which to choose

Put each task through four tests. If any answer points left, keep the task in the loop.

| Test | In the loop | On the loop |
| --- | --- | --- |
| Can the action be undone cheaply? | No: a sent email, a signed quote, a payment | Yes: a CRM field, a tag, an internal note |
| Does it reach a client or the public? | Yes | No |
| Does it affect an individual's rights or money? | Yes, and the ICO test applies | No |
| Is there a track record on this task? | Not yet | Weeks of logged runs with low edit rates |

Commercial examples, all illustrative:

- **In the loop:** follow-up emails to prospects, proposal text, discount approvals, contract changes, anything posted publicly.
- **On the loop:** updating deal stages from meeting notes, filling missing CRM fields, tagging inbound leads, deduplicating contacts, with a daily change report and a named reviewer.
- **Not yet automated:** pricing decisions and anything where the reason matters more than the speed.

Moving a task from in the loop to on the loop should be a recorded decision with evidence, not drift. A rising approval rate is weak evidence, because it also rises with reviewer fatigue. Seeded errors, sampled audits and edit rates are stronger.

## The **lowob** view

**lowob**'s [autonomy dial](https://lowob.com/research/what-is-an-ai-autonomy-level/) maps directly onto the two terms: levels 1 and 2 are in the loop, level 3 is on the loop, and level 4 is out of it. Our rule for the commercial line is that nothing sends without a person, so anything client-facing stays at level 1 or 2.

In the enterprise brain loop of store, wiring, record, reasoning and learning, both models only work if the record is kept. In the loop, the record holds who approved what, when and on which evidence. On the loop, it holds every action taken, so the monitor has something to read and the learning stage has outcomes to write back. An on-the-loop agent without that log is an out-of-the-loop agent with a dashboard.

## lowob takeaways

- **In the loop means approval first.** Use it for anything client-facing, irreversible or affecting an individual.
- **On the loop means monitoring after.** Use it for internal, reversible, high-volume work with a track record.
- **Name the person in command.** Someone decides where each system is used and holds the stop button.
- **Move tasks on evidence.** Seeded errors and audits, not approval rates, justify moving a task along the dial.

## Common questions

### What is the difference between human-in-the-loop and human-on-the-loop?

Human-in-the-loop means a person approves each AI output before it takes effect. Human-on-the-loop means the system acts and a person monitors, reviews afterwards and can intervene or stop it.

### What is human-in-command in AI?

A term from the EU's 2019 Ethics Guidelines for Trustworthy AI for the capability to oversee an AI system's overall activity and decide when and how it is used in any situation.

### Does the EU AI Act require human-in-the-loop?

No single model is mandated. Article 14 requires oversight proportionate to risk, autonomy and context, including the ability to override outputs and stop the system.

### When is human-on-the-loop acceptable?

For actions that are internal, cheap to reverse and have a logged track record, with a named reviewer reading exception reports and able to halt the system.

## Sources and notes

- [European Commission High-Level Expert Group on AI, Ethics Guidelines for Trustworthy AI: Requirements of Trustworthy AI](https://ec.europa.eu/futurium/en/ai-alliance-consultation/guidelines/1.html), text hosted on the Commission's Futurium platform; publication date confirmed by the [Commission's library page](https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai), 8 April 2019. Non-binding expert guidance.
- [Regulation (EU) 2024/1689 (AI Act), Article 14: Human oversight](https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/), Official Journal text via SpringLex, 12 July 2024. Applies to high-risk systems only.
- [UK Information Commissioner's Office, What is the impact of Article 22 of the UK GDPR on fairness?](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-fairness-in-ai/what-is-the-impact-of-article-22-of-the-uk-gdpr-on-fairness), regulator guidance. Applies to decisions about individuals under UK law.
- [DefenseScoop, Pentagon updates guidance for development, fielding and employment of autonomous weapon systems](https://defensescoop.com/2023/01/25/pentagon-updates-guidance-for-development-fielding-and-employment-of-autonomous-weapon-systems/), 25 January 2023. Trade press report of DoD Directive 3000.09; definitions as quoted there.
- The four tests, commercial examples and dial mapping are **lowob**'s working method.

## Related research

- [What Is Human-in-the-Loop AI?](https://lowob.com/research/what-is-human-in-the-loop-ai/)
- [Approval Rate Measures Fatigue Too](https://lowob.com/research/approval-rate-measures-fatigue-too/)
- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [What Is an Approval Gate for AI Agents?](https://lowob.com/research/what-is-an-approval-gate/)
- [What Is AI Red Teaming?](https://lowob.com/research/what-is-ai-red-teaming/)

## Next move

List every AI task your team runs and mark it in the loop or on the loop. For each on-the-loop task, name the person who reads its change report and check when they last did.

[Start a conversation](https://lowob.com/contact/)
