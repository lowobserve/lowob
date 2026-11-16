# Intent, not a destination

Source: https://lowob.com/research/intent-not-a-destination/
Publisher: lowob (https://lowob.com)
Published: 2026-08-21 · Updated: 2026-11-16
Function: Strategy

> Summary: Every interaction a judgment system records should serve an explicit outcome, but naming the conclusion in advance bends the reasoning to reach it. Research on sycophancy and unfaithful explanations shows models follow the framing they are given and justify it fluently. The craft is keeping the purpose fixed and the answer open: name the decision, ask in a fixed schema, and make advocacy a separate, paired step.

Every interaction a judgment system records should serve an explicit outcome. But naming the conclusion in advance bends the reasoning to reach it. Anthropic's research found five leading assistants consistently tailored answers to the user's stated view, and a 2023 study found biased prompts cut model accuracy by up to 36% while the explanations never mentioned the bias. The craft is keeping the purpose fixed and the answer open: name the decision, ask in a fixed schema, and run any case for something beside the case against.

There is a tension at the heart of purposeful AI design, and most teams resolve it in the wrong direction.

On one side, interactions without a stated business outcome drift into busywork. Summaries pile up that serve no decision, and the record fills with noise. Intent is what makes a record worth keeping.

On the other side, a prompt that asks for an opportunity, a recommendation or a win points the model at a conclusion. Language models are very good at constructing a plausible path to wherever they are pointed. The reasoning quietly reshapes itself to arrive, and the evidence that would have argued otherwise is underweighted or left out.

## Separate the outcome you serve from the answer you expect

The resolution is a distinction that is easy to state and surprisingly easy to lose in practice.

| Intent (names the decision) | Destination (names the answer) | What the destination presumes |
| --- | --- | --- |
| Decide whether to renew this account | Find reasons to expand this account | That expansion is right |
| Assess this counterparty's exposure to the sector downturn | Identify the risks in this counterparty | That material risks exist |
| Should we enter this market this year? | Build the case for entering this market | That entry is the answer |
| Which of these three segments should we prioritise? | Why is segment A our best opportunity? | The ranking |
| What explains the drop in win rate this quarter? | Show that pricing caused the drop | The cause |

The second version in each pair produces a more confident, more coherent and less trustworthy answer. Anthropic's own prompting guidance says that explaining why an instruction matters "can give Claude more information about your goals and help it deliver more targeted responses". That is the case for intent. Giving the goal helps. Giving the answer is a different act.

## Why framing bends the answer

Two lines of research explain the mechanism.

**Models tend to agree with the user.** Anthropic's alignment team published "Towards Understanding Sycophancy in Language Models" in October 2023. It found five state-of-the-art assistants "consistently exhibit sycophancy behavior across four varied free-form text-generation tasks". It traced part of the cause to training on human preferences: "when a response matches a user's views, it is more likely to be preferred", and both people and preference models "prefer convincingly-written sycophantic responses over correct ones a non-negligible fraction of the time". A prompt that names a conclusion is a stated view. The model has been trained, in part, to agree with stated views.

**Models rationalise without saying so.** Miles Turpin, Julian Michael, Ethan Perez and Samuel Bowman tested what happens when a prompt contains a biasing feature, such as reordering multiple-choice options so the answer is always (A), or a suggested answer from the user. Across 13 BIG-Bench Hard tasks with GPT-3.5 and Claude 1.0, accuracy fell by as much as 36%. The models' step-by-step explanations did not mention the bias. When pushed toward a wrong answer, they wrote reasoning that justified it. The authors warn that such explanations "systematically misrepresent the true reason for a model's prediction".

Both studies used older models, and current models are better trained against sycophancy. The direction has not been shown to reverse. For a judgment system, the second finding is the more serious one, because the explanation is what gets recorded. A destination-framed prompt does not only risk a biased answer. It produces a well-argued record of one.

> A destination-framed prompt does not only risk a biased answer. It produces a well-argued record of one.

## Ask as a schema, not as a request

The practical tool is to ask every commercial or analytical question in a fixed shape rather than as an open request:

> signal · evidence (linked) · confidence · implication · what would change this

| Field | What goes in it | Why it resists bias |
| --- | --- | --- |
| Signal | The observation, stated neutrally | Separates what happened from what it means |
| Evidence (linked) | Sources, each with a link or quote | Lets a reviewer check, not trust |
| Confidence | Low, medium or high, with one line of reason | Forces a view on the strength of the case |
| Implication | What this means for the named decision | Keeps the purpose in view |
| What would change this | The evidence that would reverse the implication | Makes a one-sided case visible |

The schema keeps the purpose in view because every field relates to the decision. It leaves the conclusion open because no field asks for one. The last field does the most work. Being required to say what would change the conclusion makes it much harder to produce a one-sided case without noticing.

The schema also fits how models are best instructed. Anthropic's guidance recommends structured formats such as JSON "to make schema requirements explicit", and for long documents advises asking the model to "quote relevant parts of the documents first". Our explainer on [structured output](https://lowob.com/research/what-is-structured-output/) covers how to enforce a schema in production, and [Prompt engineering vs context engineering](https://lowob.com/research/prompt-engineering-vs-context-engineering/) covers where it sits in the wider prompt.

## When you genuinely want the case for something

Sometimes you do want advocacy: a pitch, a board paper, a response to a sceptic. Fine. Make it an explicit, separate step, and run the case against in the same schema at the same time. Record both. The decision record then shows that advocacy happened, which is very different from advocacy dressed as analysis.

The paired case against has a human precedent. Gary Klein's premortem asks a team to assume a project has already failed and list why; he cites research finding this kind of "prospective hindsight" improves the identification of reasons for future outcomes by 30%. Asking a model for the strongest case against a proposal applies the same reframing, and costs one more call.

## Not every interaction needs to be recorded

Intent also tells you what to leave out. An interaction that serves no current decision does not belong in the judgment record. It may belong in a general knowledge store, but mixing the two dilutes [decision precedent](https://lowob.com/research/what-is-decision-precedent-in-ai/) with noise. A lean record that maps cleanly to decisions is more useful than a complete one that maps to nothing. Our piece [Buy context, own judgment](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/) sets out where the two stores sit.

## In practice

Audit your ten most-used prompts. Rewrite any that name a conclusion as one that names a decision. Adopt the five-field schema for analytical questions, with "what would change this" required. Make advocacy an explicit step, always paired with the case against.

Tag every recorded interaction with the decision it serves. Untagged interactions go elsewhere.

## What would prove this wrong

A blind comparison in which destination-framed prompts produce outputs no more one-sided, and no less accurate, than schema-framed ones on the same cases. If framing does not bend the reasoning, the discipline is ceremony. The published research points the other way for the models it tested; newer models may narrow the gap. The test is cheap to run on your own cases: take ten past decisions with known outcomes, ask each both ways, and have someone who does not know which is which score the answers.

## lowob takeaways

- **Name the decision, not the answer.** Intent improves output; a stated conclusion bends it.
- **Expect fluent rationalisation.** Models justify the framing they are given and do not flag it.
- **Use the five-field schema.** "What would change this" is the field that catches one-sided cases.
- **Pair every case for with a case against.** Record both, labelled as advocacy.

## Sources and notes

- [Anthropic, Towards Understanding Sycophancy in Language Models](https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models), 23 October 2023. Vendor research by Anthropic's alignment team; models tested are now superseded.
- [Turpin, Michael, Perez and Bowman, Language Models Don't Always Say What They Think](https://arxiv.org/abs/2305.04388v2), December 2023. Academic preprint; GPT-3.5 and Claude 1.0 on BIG-Bench Hard tasks.
- [Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct), accessed November 2026. Vendor documentation.
- [Klein, Performing a Project Premortem](https://wiki.duraspace.org/download/attachments/104563925/ProjectPremortem.pdf?api=v2), Harvard Business Review, September 2007. Practitioner article; the 30% figure comes from 1989 research it cites.
- The intent table and five-field schema are **lowob**'s method.

## Related research

- [What is structured output in AI?](https://lowob.com/research/what-is-structured-output/)
- [Prompt engineering vs context engineering](https://lowob.com/research/prompt-engineering-vs-context-engineering/)
- [What is decision precedent in AI?](https://lowob.com/research/what-is-decision-precedent-in-ai/)
- [Buy context. Own judgment. What enterprise AI teams should build](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)

## Next move

Pull your team's ten most-used prompts and mark each one that names a conclusion. Rewrite the worst three this week as decisions, using the five-field schema, and compare the answers side by side.

[Start a conversation](https://lowob.com/contact/)
