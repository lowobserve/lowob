# What Is Robotic Process Automation (RPA) in the Age of Agents?

Source: https://lowob.com/research/what-is-robotic-process-automation/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: Robotic process automation uses software robots to repeat a person's actions on screen, which makes it useful for legacy systems with no API. Vendors now position RPA robots as the deterministic executors inside agentic automation, with agents handling judgment and people approving. The practical order is API first, RPA for legacy screens, and an agent only where a decision is needed.

Robotic process automation (RPA) is software that repeats a person's actions on a screen, such as clicking, typing and copying data between applications, to run rule-based tasks. It is most useful where a system has no API or connector. In the age of agents, RPA has become the dependable executor that agents and workflows call, while models handle the judgment that RPA scripts never could.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What RPA means

An RPA robot is a script that drives a user interface. It opens an application, reads a value from a field, pastes it into another system and clicks submit, exactly as a person would. Microsoft's training material describes Power Automate for desktop recording "mouse clicks, keyboard inputs, and data entry" and extracting information from the screen.

The appeal is that no integration project is needed. Many older finance, logistics and insurance systems expose no API, so the screen is the only way in. Microsoft says desktop flows are a valid route "when no other alternative is available, or when developing an integration would be expensive and time-consuming."

The weaknesses follow from the same design. A robot that depends on a screen layout breaks when the layout changes. It handles structured inputs well and unstructured ones poorly. It follows its script even when the situation calls for a different action.

| RPA is | RPA is not |
| --- | --- |
| A script that repeats on-screen actions | A model that interprets or decides |
| Strong on stable, rule-based, high-volume tasks | Suited to emails, contracts or call transcripts on its own |
| A way into systems with no API | A replacement for a proper integration where one exists |
| Predictable and easy to audit step by step | Tolerant of screens or fields that change without notice |

## How RPA and agents fit together

The vendors that built the RPA market now sell it as one layer of a larger system. UiPath describes agentic automation as "the orchestration of agents, robots, and humans in a unified automation ecosystem." In that design an agent reads an unstructured input and decides what should happen, a robot carries out the fixed steps in the systems that have no API, and a person approves anything with consequences.

Gartner's evaluation of the market has moved the same way. Its business orchestration and automation technologies category covers platforms that automate processes "with varying levels of autonomy", and requires support for agent orchestration and governance. Listings in the category show the incumbents positioning around it: one RPA vendor describes its platform as extending "existing RPA and BPM investments rather than replacing them."

| Layer | Role | Commercial example (illustrative) |
| --- | --- | --- |
| Model or agent | Reads unstructured input, proposes a decision | Reads a customer email asking to change an order |
| Workflow or orchestrator | Routes the case and enforces approval rules | Sends the proposed change to the account owner |
| RPA robot | Executes fixed steps in a legacy screen | Updates the order in an older ERP with no API |
| Person | Approves or rejects | Account owner confirms before anything changes |

This is the **lowob** autonomy dial applied to automation. The agent sits at level 1 or 2, drafting or acting with approval. The robot executes only what has been approved.

## When to use RPA, an API or an agent

The order of preference is straightforward. Use an API or a native connector first, because it is faster and does not break when a screen changes. Use RPA second, for legacy systems where the screen is the only interface. Add a model or an agent only where a step needs interpretation or judgment.

| Situation | Better choice |
| --- | --- |
| The system has an API and the rules are fixed | Workflow automation over the API |
| No API, stable screens, fixed rules | RPA |
| Unstructured input, fixed destination | Workflow with a model step, RPA if the destination has no API |
| Steps vary case by case and need judgment | Agent proposing, robot executing, person approving |

Three mistakes recur. The first is automating a broken process: a robot that copies bad data between systems copies it faster. The second is leaving robots without owners. Unattended robots log in with credentials, so each one needs a named owner, scoped access and an entry in the AI and automation inventory, the same as an agent identity. The third is treating an agent as a cheaper robot. Where the steps are fixed, a deterministic robot is more predictable and easier to audit than a model choosing its own path.

## lowob takeaways

- **RPA drives screens, not decisions.** It repeats fixed actions where no API exists.
- **APIs come first.** Use RPA for legacy systems, not where a connector already works.
- **Agents decide, robots execute.** Vendor platforms now combine the two, with people approving.
- **Every robot needs an owner.** Unattended bots hold credentials and belong in the inventory.

## Sources and notes

- [Microsoft Learn, Power Automate for desktop](https://learn.microsoft.com/en-us/training/modules/robotic-process-automation/2-pad), accessed November 2026. Vendor training material on RPA, legacy apps, attended and unattended runs.
- [UiPath, About agents](https://docs.uipath.com/agents/automation-cloud/latest/user-guide/about-agents), accessed November 2026. Vendor documentation on robots, agents and agentic automation.
- [Gartner Peer Insights, Business orchestration and automation technologies](https://www.gartner.com/reviews/market/business-orchestration-and-automation-technologies), accessed November 2026. Market definition and vendor listings; listing text is vendor-supplied.
- [Reuters via The Star, Over 40% of agentic AI projects will be scrapped by 2027, Gartner says](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says), 25 June 2025. Analyst predictions, including the 2028 decision forecast.

## Related research

- [What is agentic AI?](https://lowob.com/research/what-is-agentic-ai/)
- [What is agent identity?](https://lowob.com/research/what-is-agent-identity/)
- [The first AI agent should be boring](https://lowob.com/research/the-first-ai-agent-should-be-boring/)
- [What is an AI agent?](https://lowob.com/research/what-is-an-ai-agent/)

## Next move

Ask IT for a list of every unattended robot and scheduled automation running today, with the account each one logs in as. Give each an owner, and mark the ones that touch customer data for review first.

[Start a conversation](https://lowob.com/contact/)
