# Claude Is Not Your Intern. Build a Repeatable GTM Workflow

Source: https://lowob.com/research/claude-gtm-operating-system/
Publisher: lowob (https://lowob.com)
Published: 2026-07-01 · Updated: 2026-11-16
Function: Strategy

> Summary: Starting from a blank AI chat every day creates a lot of disconnected drafts. The better use is to give Claude maintained product facts, named commercial workflows and a clear human review rule. As documented in November 2026, Claude's Projects hold shared knowledge and instructions, Skills package repeatable procedures, and connectors reach company systems with per-tool approval settings. Those features make the model a context-aware operating layer. The durable advantage is the company-specific context and procedures, because competitors have the same model.

## Key points

- The foundation is a maintained GTM context pack, not a clever prompt: product facts, positioning, and commercial operations.
- Claude Projects provide "self-contained workspaces with their own chat histories and knowledge bases"; Team and Enterprise plans can share them with view or edit rights.
- Skills are "folders of instructions, scripts, and resources" that load only when a task needs them; organisation owners can provision them to everyone.
- Connectors inherit each user's permissions in the source system, and admins can set each tool to always allow, needs approval or blocked.
- Automate preparation and pattern recognition before automating consequential decisions.

Most teams use Claude like a talented intern with amnesia. They open a blank chat, paste a vague request, receive a competent answer and start again the next day. The model never receives a durable picture of the company, the market, the customer, the sales process or the standard by which good work should be judged. The result is helpful output without organisational advantage.

Claude becomes substantially more useful when it is treated as a context-aware operating layer: a system that works from the same commercial source material, follows repeatable procedures, produces standard outputs and knows when human approval is required. This is not specific to Claude. McKinsey's 2025 State of AI survey found the organisations getting most value from AI were nearly three times as likely as others to have redesigned individual workflows, and more likely to have defined when outputs need human validation. The features below are how one assistant supports that work. Our piece [Which AI assistant, which seats](https://lowob.com/research/which-ai-assistant-which-seats/) covers the choice of tool.

## Start with a GTM context pack

The foundation is not a clever prompt. It is a maintained set of company knowledge.

**Company and product facts.** Define what the business does, who it serves, what the product can and cannot do, and which claims are approved.

**Customers and positioning.** Keep priority segments, buying triggers, objections, qualification criteria, competitor alternatives and evidence in one maintained place.

**Commercial operations.** Document pipeline stages, handoffs, content voice, source rules and required approvals. These should be short, current records that a teammate can verify.

Keep each component short enough to maintain. A stale 80-page brand book is less useful than eight precise documents that reflect the current business. Our explainer on [context engineering](https://lowob.com/research/what-is-context-engineering/) covers why the selection matters more than the volume.

In Claude, this pack lives in a Project. Anthropic's help centre describes Projects as "self-contained workspaces with their own chat histories and knowledge bases", each with its own instructions. On paid plans, retrieval expands project knowledge "by up to 10x" when content nears the context limit. On Team and Enterprise plans, a project can be shared with named people or the whole organisation, with "can view" or "can edit" rights. That last point matters: only the people who own the facts should be able to change them.

| Context pack component | Where it lives in Claude | Owner | Review cadence |
| --- | --- | --- | --- |
| Product facts and approved claims | Project knowledge | Product lead | On every release |
| Segments, triggers, objections, evidence | Project knowledge | Commercial lead | Monthly |
| Pipeline stages and handoffs | Project knowledge | Revenue operations | Quarterly |
| Voice, source rules, approval rules | Project instructions | Marketing lead | Quarterly |
| Named workflows | Skills | Workflow owner | When the output changes |

Feature descriptions are as documented by Anthropic in November 2026; plan availability changes, so check the current help centre before rollout.

## Turn repeated work into named workflows

Once the context is stable, identify tasks the team performs repeatedly. Give each workflow a name, a required input, a sequence, a defined output and an approval point.

Start with the work that repeats every week: a market signal brief, an account research dossier, sales-call preparation or analysis of customer conversations. Campaign reviews and competitor changes can use the same approach once the first workflows are reliable.

For a priority account dossier, Claude should not merely "research the account". The workflow should specify what matters.

| Dossier field | What it contains | Verification |
| --- | --- | --- |
| Company priorities | Stated goals from filings, results or leadership statements | Source link required |
| Current initiatives | Projects, launches, hiring patterns | Source link required |
| Relevant executives | Names and roles tied to the likely problem | Checked against the company's own site |
| Likely problem and buying trigger | The hypothesis, labelled as one | Marked "inference" |
| Existing stack and partner overlap | Known tools and shared partners | Source or "unknown" |
| Risk factors | Reasons the account may not buy | Required, even if short |
| Opening thesis | One sentence the account owner could test | Approved by the account owner |
| Open questions | What needs verifying before outreach | Listed, not guessed |

That consistency makes the output comparable across accounts and useful to a team.

Claude's Skills feature is built for this. Anthropic describes skills as "folders of instructions, scripts, and resources that Claude loads dynamically", loaded by progressive disclosure so only the relevant skill enters the context. On Team and Enterprise plans, owners can provision a skill for every member, so the dossier runs the same way for every seller. Skills require code execution to be enabled.

## Separate generation from decision-making

An operating system needs boundaries.

| Claude can | A person decides |
| --- | --- |
| Propose priority accounts | A commercial lead approves the prioritisation |
| Draft outbound language | The account owner verifies the premise and sends it |
| Identify patterns in calls | The team decides whether they justify repositioning |
| Produce a campaign brief | A person approves claims, budget and audience |

The principle is simple:

*Automate preparation and pattern recognition before automating consequential decisions.*

This keeps the system fast without allowing plausible but unverified output to enter the market as fact. On **lowob**'s autonomy dial, most GTM work belongs at level 1, draft, or level 2, act with approval. Our piece [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/) sets out the rule.

Connectors are where the boundary is enforced. Anthropic's documentation says connectors "let Claude access your apps and services, retrieve your data, and take actions", and custom connectors can reach any service that supports the Model Context Protocol. "Claude inherits each person's permissions from the connected service", so it cannot see a CRM record the user cannot. On Team and Enterprise plans, admins can set each tool to always allow, needs approval or blocked, with read-only and write or delete tools grouped separately, and users cannot override those limits. A sensible default is read-only tools allowed and every write tool set to needs approval. Our explainer on [AI connectors](https://lowob.com/research/what-is-an-ai-connector/) covers the security questions.

> The durable advantage is not access to Claude. Competitors have that too. It is the context, procedures and learning loop built around it.

## Connect the commercial loop

The highest-value design is not a collection of independent prompts. It is a loop.

Market research identifies a new buying signal. That signal changes account priority. Account conversations produce objections and language. Those conversations update the messaging system. The revised message informs content and campaigns. Campaign and pipeline performance create new evidence. The evidence updates the next market brief.

Claude can help maintain continuity across this loop because its role is not limited to drafting. It can compare new inputs with the established context, flag contradictions, identify missing evidence and prepare the next decision. The loop only works if someone writes outcomes back into the project knowledge. A context pack that is never updated becomes the stale brand book it replaced.

## The minimum viable Claude GTM system

A small company can begin with four workflows, each a Skill working from the same Project.

| When | Workflow | Output | Approved by |
| --- | --- | --- | --- |
| Monday | Market and account signal brief | One page of changes, each with a source | Commercial lead |
| Before calls | Standard preparation dossier | The dossier fields above | Account owner |
| After calls | Notes to objections, next steps and CRM-ready fields | Structured fields plus messaging insights | Account owner, before CRM write |
| Friday | What changed in market, pipeline and customer language | Recommended experiments | Team review |

That alone can improve the quality and continuity of a small GTM team without pretending the model should operate the business autonomously. Our piece on [the commercial operating rhythm](https://lowob.com/research/the-commercial-operating-rhythm/) shows how the weekly cadence connects to monthly and quarterly reviews.

## lowob takeaways

- **Context before prompts.** A short, owned, current context pack in a shared Project.
- **Name the workflows.** Input, sequence, output and approval point, packaged so every seller runs the same one.
- **Set approvals in the connector.** Read tools allowed; write tools need approval.
- **Write outcomes back.** The loop is what competitors cannot copy.

## Common questions

### How do I use Claude for go-to-market work?

Put a maintained context pack of product facts, positioning and commercial rules in a Claude Project, package recurring tasks such as account dossiers as Skills, and keep claims, prioritisation, spend and outreach approvals with people.

### What is the difference between Claude Projects and Skills?

Projects are workspaces with their own knowledge and instructions; Skills are packaged procedures with instructions and scripts that Claude loads when a task needs them. A project holds what the team knows, a skill holds how a task is done.

### Is it safe to connect Claude to a CRM?

Connectors inherit each user's permissions in the source system, and on Team and Enterprise plans admins can require approval for write actions. Start with read-only access and add write tools with approval required.

### Should Claude send outbound emails automatically?

Not as a starting point. Let it draft and prepare; the account owner verifies the premise and sends. Automate preparation before consequential decisions.

## Sources and notes

- [Anthropic, What are projects?](https://support.claude.com/en/articles/9517075), help centre article, accessed November 2026. Vendor documentation; no update date shown; plan details change.
- [Anthropic, What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills), help centre article, accessed November 2026. Vendor documentation; no update date shown.
- [Anthropic, About connectors](https://support.claude.com/en/articles/11176164), help centre article, accessed November 2026. Vendor documentation; no update date shown.
- [McKinsey, The state of AI in 2025: Agents, innovation, and transformation](https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025), 5 November 2025. 1,993 respondents; self-reported; consultancy research.
- The context pack, dossier specification and weekly system are **lowob**'s method.

## Related research

- [Which AI assistant, which seats](https://lowob.com/research/which-ai-assistant-which-seats/)
- [What is an AI connector?](https://lowob.com/research/what-is-an-ai-connector/)
- [The commercial operating rhythm](https://lowob.com/research/the-commercial-operating-rhythm/)
- [Your customers already wrote your messaging. Claude can help you find it.](https://lowob.com/research/claude-voice-of-customer-research/)

## Next Move

Write the eight documents of your context pack this week, one page each, with a named owner on every one. Put them in a single shared Project before building any workflow.

[Start a conversation](https://lowob.com/contact/)
