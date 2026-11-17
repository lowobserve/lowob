# What Is AI Hallucination?

Source: https://lowob.com/research/what-is-ai-hallucination/
Publisher: lowob (https://lowob.com)
Published: 2026-08-20 · Updated: 2026-11-17
Function: Distribution

> Summary: AI hallucination is a plausible but false statement produced by a language model. OpenAI's 2025 research argues models hallucinate partly because training and evaluation reward guessing over admitting uncertainty. Retrieval reduces the problem but does not remove it, and a 2024 tribunal ruling confirmed that firms remain liable for what their chatbots say.

AI hallucination is when a language model produces a statement that sounds plausible but is false, such as an invented figure, policy or citation. NIST calls it confabulation. It happens because models generate likely text rather than checking facts, and because standard training and testing reward a confident guess over "I don't know". It can be reduced but not eliminated, so outputs that reach clients need a person to check them.

*Figure: Where this piece sits: the commercial line, where the build starts.*

## What AI hallucination means

A language model writes by predicting the next token from patterns in its training data and its input. Nothing in that process checks the output against a source. When the model lacks the information, it can still produce fluent text that fills the gap.

OpenAI's research paper "Why language models hallucinate", published in September 2025, gives a second reason. Standard training and evaluation reward guessing over acknowledging uncertainty. Under accuracy-only scoring, a lucky guess scores better than an honest abstention, so models learn to guess.

Its SimpleQA example makes the trade visible. One model abstained on 52% of questions, answered 22% correctly and was wrong on 26%. An older model abstained on 1%, was correct on 24% and wrong on 75%. The second looks slightly more accurate on a leaderboard and is far more likely to tell you something false.

| Type | What it looks like at work |
| --- | --- |
| Fabricated fact | A revenue figure, date or product feature that does not exist |
| Fabricated source | A citation, case or link that was never published |
| Misgrounded answer | A real source cited for a claim it does not support |
| Wrong policy | A confident statement of terms, pricing or eligibility that is out of date or invented |
| Unfaithful summary | A call summary that adds a commitment nobody made |

## Why it matters for a commercial team

The risk is not that a model is wrong sometimes. People are wrong sometimes. The risk is that a model is wrong in the same confident tone it uses when it is right, and at volume.

Retrieval helps but does not solve it. Stanford's RegLab and Human-Centered AI researchers tested legal research tools that ground answers in case law databases. In their May 2024 preprint, the tools hallucinated on more than 17% of benchmark queries, less often than a general model but far from zero. Thomson Reuters said the study tested the wrong product, and LexisNexis said its own analysis found a lower rate. The study also counted misgrounded citations as hallucinations. Even with those caveats, the finding holds: a retrieval system can still invent or misattribute.

Liability stays with the business. In Moffatt v. Air Canada, decided on 14 February 2024, the airline's website chatbot told a customer he could claim a bereavement fare after travel. The policy said otherwise. The British Columbia Civil Resolution Tribunal rejected Air Canada's argument that the chatbot was a separate legal entity and awarded about CA$650 in damages, plus interest and fees. The amount was small. The principle is that what an AI tool tells a customer is what the company told the customer.

For a revenue team the exposure sits in client-facing text: proposals, questionnaire answers, renewal emails and support replies. That is where **lowob**'s rule applies: nothing sends without a person.

## How to reduce hallucination in practice

| Control | What it does | Limit |
| --- | --- | --- |
| Ground in supplied sources | Retrieval or attached documents give the model facts to use | Retrieval can miss or misrank; the model can still misread |
| Require citations | Each claim points to a source a reviewer can open | Citations can themselves be wrong; check a sample |
| Allow "I don't know" | Instructions and scoring that accept abstention | Fewer answers, more escalations |
| Automated grounding checks | Guardrail tools flag responses not supported by the source | Catch some errors, not all |
| Evaluation sets | A test set of real questions with known answers | Only measures what you thought to test |
| Human review before send | A named person approves client-facing output | Costs time; reviewers fatigue |

Two design choices do most of the work. First, keep facts that change, such as prices, terms and product details, in a maintained record and supply them at run time. Second, set the autonomy dial by consequence. Internal research notes can run at level 1, draft only. Anything a client or regulator reads should stay at level 2, act with approval, until evaluation data shows the error rate is acceptable for that task.

## lowob takeaways

- **Hallucination is built in.** Models generate likely text; they do not check it.
- **Accuracy scores can hide it.** A model that guesses more can look better and be wrong more.
- **Retrieval reduces, not removes.** Grounded legal tools still erred on more than one query in six.
- **The firm is liable.** A tribunal has ruled that a chatbot's answer is the company's answer.

## Common questions

### What is an AI hallucination?

It is a false statement produced by an AI model and presented as fact, such as an invented statistic, policy or citation. NIST's term for it is confabulation.

### Why do AI models hallucinate?

They predict likely text rather than verifying facts. OpenAI's 2025 research adds that training and evaluation reward guessing over admitting uncertainty, so models learn to answer anyway.

### Does RAG stop hallucinations?

No. Retrieval reduces them by supplying sources, but a 2024 Stanford study found retrieval-based legal tools still hallucinated on more than 17% of test queries.

### Is a company liable for what its AI chatbot says?

In Moffatt v. Air Canada in 2024, a Canadian tribunal held the airline responsible for its chatbot's incorrect advice. Firms should assume the same applies to their own tools.

## Sources and notes

- [OpenAI, Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/), 5 September 2025. Vendor research; examples use OpenAI's own models.
- [NIST, AI 600-1: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024. US standards body guidance.
- [LawSites, Stanford will augment its study finding AI legal research tools hallucinate in 17% of queries](https://www.lawnext.com/2024/05/stanford-will-augment-its-study-finding-that-ai-legal-research-tools-hallucinate-in-17-of-queries-as-some-raise-questions-about-the-results.html), May 2024. Trade press report of a preprint, including vendor objections.
- [American Bar Association, BC tribunal confirms companies remain liable for information provided by AI chatbot](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/), February 2024. Legal commentary on a small-claims tribunal decision.

## Related research

- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [What Is Retrieval-Augmented Generation (RAG)?](https://lowob.com/research/what-is-retrieval-augmented-generation/)
- [What Is Human-in-the-Loop AI?](https://lowob.com/research/what-is-human-in-the-loop-ai/)
- [The RFP Nobody Can Answer Yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/)

## Next move

List every place an AI tool currently writes text a client could read. For each, name the person who approves it before it goes out, and fix any gap this week.

[Start a conversation](https://lowob.com/contact/)
