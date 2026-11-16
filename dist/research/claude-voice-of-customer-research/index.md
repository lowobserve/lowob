# Your Customers Already Wrote Your Messaging. Claude Can Help You Find It.

Source: https://lowob.com/research/claude-voice-of-customer-research/
Publisher: lowob (https://lowob.com)
Published: 2026-07-29 · Updated: 2026-11-16
Function: Strategy

> Summary: The strongest messaging is recovered from the market, not invented in a workshop, and the evidence sits scattered across calls, tickets, reviews and lost-deal notes. Claude can read that material at scale if the method is disciplined: structured extraction with quoted excerpts first, clustering by buying situation, a disagreement report against internal copy, and a monthly refresh. Research on AI coding shows why quotes matter: models match humans on explicit themes and fall short on interpretive ones.

Most companies write messaging from the inside out, and sales then discovers that buyers use different language for the problem. The strongest messaging is recovered from the market. Claude is useful as a qualitative research layer across calls, tickets, reviews and lost-deal notes, provided the team uses a disciplined method: extract fields with quoted excerpts before summarising, cluster by buying situation, and compare customer language with the company's own. A 2024 study found GPT-4 matched human coders on explicit themes but fell short on interpretive ones, which is why every finding needs its quote.

Most companies write messaging from the inside out. The product team describes what was built. The founder explains the vision. Marketing turns those descriptions into benefits. Sales then discovers that buyers use completely different language for the problem.

The strongest messaging is rarely invented in a workshop. It is recovered from the market. Customers explain what was happening before they searched for a solution, what triggered urgency, what alternatives they tried, what made them sceptical and what outcome finally mattered. The difficulty is that this evidence is scattered across call transcripts, emails, support tickets, community channels, reviews, CRM notes and private conversations.

Claude is particularly useful as a qualitative research layer across that material, provided the team uses a disciplined method rather than asking for a generic summary. Our piece on [positioning vs messaging vs branding](https://lowob.com/research/positioning-vs-messaging-vs-branding/) covers which of the three this work fixes.

## Build the evidence set

Start with material that records actual customer language:

- discovery and sales-call transcripts
- onboarding and implementation notes
- churn interviews and lost-deal explanations
- support requests and community questions
- product reviews, your own and competitors'
- successful customer emails and public forum discussions.

Remove information the model should not receive, follow the company's data policies, and separate current customers, prospects, churned users and non-buyers. Those groups may describe the same product very differently. If the material comes through connectors, note that Anthropic's documentation says Claude "inherits each person's permissions from the connected service", and that connected services process data under their own terms. The researcher's access sets the boundary of the evidence set, so check it covers what the study needs and nothing it should not.

A Claude Project is a practical container: its knowledge base holds the evidence set and its instructions hold the extraction schema, so every analyst works from the same material and rules. Our explainer on [win-loss analysis](https://lowob.com/research/what-is-win-loss-analysis/) covers how to collect the lost-deal row properly.

## Do not ask for "key themes" yet

A general theme summary compresses the evidence too early. Begin with structured extraction. For every conversation, ask Claude to record ten fields.

| Field | What to capture |
| --- | --- |
| Situation before | What was happening before they looked for a solution |
| Trigger | The event that created urgency |
| Job | What they were trying to get done |
| Cost of inaction | What leaving the problem unresolved would cost |
| Alternatives | What they considered or tried |
| Objections and risks | Fears, doubts, perceived risks |
| Problem in their words | The exact phrases used |
| Desired outcome | What success looks like to them |
| Proof required | What they needed to believe it would work |
| Stakeholders | Who else was involved in the decision |

Require short supporting excerpts and source labels for every field. This allows a human reviewer to distinguish a repeated pattern from a polished inference.

The evidence explains why. Elisabeth Kirsten and colleagues compared GPT-3.5 and GPT-4 with human coders on 47 interview transcripts in 2024. On a descriptive coding task, GPT-4 matched the humans' agreement, with a Cohen's kappa of 0.97. On the most interpretive task, the two human coders agreed at 0.63 and GPT-4 reached 0.55 to 0.58. On one task, GPT-3.5 invented 47 codes that were not in the codebook. The study was small and the models are now older, but the shape matches practice: explicit statements extract well, and inferred meaning needs a person.

Anthropic's own prompting guidance points the same way. For long documents it advises asking Claude "to quote relevant parts of the documents first before carrying out its task". Teams building on the API can go further with its Citations feature, which returns the exact passages behind each claim; the documentation says citations "are guaranteed to contain valid pointers to the provided documents". A pointer that resolves still has to be read: it shows where a claim came from, not that the claim is a fair reading.

> A quote lets a reviewer tell a repeated pattern from a polished inference. Without one, every theme is a guess written well.

## Cluster by buying situation, not demographics

Teams often segment evidence by company size or industry because those fields are already in the CRM. Those attributes can matter, but they do not necessarily explain behaviour. More useful clusters often emerge around the buying situation:

| Buying situation | What it usually changes |
| --- | --- |
| A new executive has been hired | Appetite for change; a short window to act |
| A product is approaching launch | A fixed deadline and low tolerance for risk |
| An incumbent vendor failed | Scepticism; proof matters more than vision |
| New regulation changed the risk calculation | Compliance and legal join the buying group |
| A partnership created unexpected demand | Capacity, not budget, is the constraint |
| A team is overwhelmed by manual work | Time saved is the outcome that sells |
| Revenue pressure created a deadline | Speed to value outranks features |

These triggers help explain why two otherwise similar companies move at different speeds. Ask Claude to assign each conversation to a situation, quote the evidence, and flag conversations that fit none. The unassigned pile is where new situations appear first.

## Convert the findings into a message architecture

Once the evidence has been reviewed, translate it into five layers.

**Problem.** Use the customer's clearest description of what is not working.

**Consequence.** State the operational, financial, reputational or long-term cost.

**Change.** Explain what becomes possible after the problem is resolved.

**Mechanism.** Describe how the product creates that change without drowning the buyer in features.

**Proof.** Match evidence to the buyer's perceived risk.

For example, "AI-powered community intelligence" describes a capability. "See emerging customer complaints across Discord, Reddit and Telegram before they become a launch problem" describes a situation, consequence and outcome a buyer can recognise. Our piece on [positioning for complex markets](https://lowob.com/research/positioning-for-complex-markets/) covers how the architecture sits under a positioning statement.

## Create a disagreement report

One of the most valuable Claude workflows is comparing internal messaging with external language. Give it the website, the main deck and the extraction output, and ask it to identify:

1. phrases the company uses that customers never use
2. problems customers repeat that the website barely mentions
3. benefits marketing emphasises that do not influence decisions
4. objections sales encounters that content never addresses
5. segments whose language differs enough to need separate messaging.

Each item should cite both sides: the company's sentence and the customers' quotes. This is not an instruction to copy every customer phrase literally. Customers understand their pain better than they understand the architecture of the solution. The company still needs judgment. But messaging should begin from recognisable market reality.

## Make voice-of-customer research continuous

Do not conduct this exercise once and declare the positioning complete. Create a monthly workflow in which new calls and community conversations are classified with the same schema, compared with the previous period and reviewed for emerging language. Track which phrases appear in successful deals, which objections are growing and which promised outcomes correlate with retention. Packaging the schema and steps as a Claude Skill keeps the method identical month to month, which is what makes the comparison valid. Our piece [Claude is not your intern](https://lowob.com/research/claude-gtm-operating-system/) shows where this fits in a weekly GTM system.

The value compounds when the findings update sales enablement, landing pages, product education, content priorities and the questions asked in future calls. Your customers have already written much of your messaging. The job is to listen carefully enough to find it, and exercise enough judgment to know what deserves to become the company's story. Use Claude to increase the surface area of listening, not to replace contact with the market.

## lowob takeaways

- **Extract before summarising.** Ten fields per conversation, each with a quote and a source.
- **Trust explicit, check interpretive.** Models match humans on what was said, not on what it meant.
- **Cluster by situation.** Triggers explain buying speed better than firmographics.
- **Run the disagreement report monthly.** Your copy against their words, with both sides quoted.

## Sources and notes

- [Kirsten et al., Decoding Complexity: Exploring Human-AI Concordance in Qualitative Coding](https://arxiv.org/html/2403.06607v1), March 2024. Preliminary workshop paper; 47 German interview transcripts; GPT-3.5 and GPT-4.
- [Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct), accessed November 2026. Vendor documentation.
- [Anthropic, Citations](https://platform.claude.com/docs/en/build-with-claude/citations), accessed November 2026. Vendor API documentation; the guarantee covers pointers to source text, not the accuracy of the claim.
- [Anthropic, About connectors](https://support.claude.com/en/articles/11176164), help centre article, accessed November 2026. Vendor documentation.
- [Anthropic, What are projects?](https://support.claude.com/en/articles/9517075), help centre article, accessed November 2026. Vendor documentation.
- The extraction schema, situation clusters, message architecture and disagreement report are **lowob**'s method.

## Related research

- [Positioning for complex markets](https://lowob.com/research/positioning-for-complex-markets/)
- [What is win-loss analysis?](https://lowob.com/research/what-is-win-loss-analysis/)
- [Positioning vs messaging vs branding: which is broken?](https://lowob.com/research/positioning-vs-messaging-vs-branding/)
- [Claude is not your intern. Build a repeatable GTM workflow](https://lowob.com/research/claude-gtm-operating-system/)

## Next move

Pull ten recent discovery-call transcripts. Run the ten-field extraction on each with quotes required, then put the "problem in their words" column next to your homepage headline and count how many customers used any of its words.

[Start a conversation](https://lowob.com/contact/)
