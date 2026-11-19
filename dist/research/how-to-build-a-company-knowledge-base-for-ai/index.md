# How to Build a Company Knowledge Base for AI

Source: https://lowob.com/research/how-to-build-a-company-knowledge-base-for-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-11-16 · Updated: 2026-11-17
Function: Strategy

> Summary: A company knowledge base for AI is a curated, permissioned set of authoritative sources that assistants and agents retrieve from. Build it around one set of recurring questions: gather one current copy of each source, structure and tag it, fix permissions before rollout, link the decision records that explain why policies are what they are, and test it against real questions before widening scope.

To build a company knowledge base for AI, choose one set of recurring questions, gather one authoritative copy of each source, remove duplicates and outdated versions, add owners, dates and metadata, fix permissions before rollout, and test answers against real questions before widening scope. Then link each policy to the decision record that explains it, because an assistant can retrieve a rule but cannot tell why it changed unless someone recorded that.

*Figure: Where this piece sits in The Build Order: the context layer.*

A knowledge base is the store and part of the wiring in **lowob**'s model of the enterprise brain, a loop of store, wiring, record, reasoning and learning. [The enterprise brain is a record, not a mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/) explains why the store is necessary and not sufficient. This guide covers building the store well, and where it has to connect to the record.

## What is a company knowledge base for AI?

It is a curated, permissioned set of authoritative documents that AI assistants and agents retrieve from to ground their answers. Unlike a file share, it has one current copy of each answer, an owner per source and usable metadata.

An [enterprise brain](https://lowob.com/research/enterprise-brain-vs-knowledge-base/) is wider: it also records what was decided, why, by whom and whether it worked.

## How do you build a company knowledge base for AI?

In seven steps, each with a test for when it is done.

| Step | What to do | Done when |
| --- | --- | --- |
| 1. Pick the questions | List 20 to 50 real questions one team asks every week | Each question has a named person who can judge a good answer |
| 2. Gather the sources | Find the document that answers each question, and its owner | Every question maps to at least one source with an owner |
| 3. Keep one authoritative copy | Archive duplicates and outdated versions; turn on versioning | A search for each topic returns one current document |
| 4. Structure for retrieval | Summary first, consistent headings, metadata such as product, segment, owner and review date | A reader can tell the topic, owner and date in the first lines |
| 5. Fix permissions first | Review who can see what before connecting an assistant | Restricted material is invisible to unauthorised users in ordinary search |
| 6. Link the decisions | Point each policy to the decision record that set it | Each policy shows what it replaced, when and why |
| 7. Test with real questions | Run the step 1 questions; score answers; fix sources, not prompts | An agreed share of answers is correct, current and cited |

Steps 3 and 5 come before any assistant is connected, because an assistant amplifies whatever disorder the store holds.

## Which questions should a knowledge base answer first?

The ones a team asks every week, whose answers are documented and change occasionally: on the commercial line, pricing rules, approved product claims, discount policy and partner terms.

Starting narrow keeps the test honest: 20 questions with a named judge give a measurable pass rate within days. [Why the brain starts at the commercial line](https://lowob.com/research/why-the-brain-starts-at-the-commercial-line/) sets out why commercial decisions are the best first scope: they recur weekly and their outcomes show within a quarter.

## How do you prepare documents so AI can use them?

Keep one current copy, put a summary first, use consistent headings and add metadata.

Microsoft's guidance for its Employee Self-Service agents, updated 3 November 2026, is specific. "A concise summary helps large language models (LLMs) quickly understand the main topic, purpose, and intended audience." "Consistent use of header styles (H1, H2, and so on) reduces confusion for both AI and human readers." It calls metadata "a proven best practice for improving both the accuracy and completeness of LLM responses." It recommends versioning so "only the latest approved version is visible," and archiving duplicates so "only one authoritative copy exists."

Retrieval design matters as much as the documents. Anthropic reported on 19 September 2024 that prepending a short explanatory context to each chunk before indexing, which it calls contextual retrieval, cut the top-20-chunk retrieval failure rate by 49% when combined with keyword search, and by 67% with reranking, in its own evaluations. The same post noted that a knowledge base under 200,000 tokens, about 500 pages, may not need retrieval at all: it can go in the prompt whole.

Anthropic's 29 September 2025 context engineering guidance adds a reason to stay lean: aim for "the smallest possible set of high-signal tokens," because recall degrades as context fills.

## How do you keep permissions intact?

Fix access in source systems first; the assistant inherits it. Microsoft describes Copilot as "grounding responses in the data users already have permission to access."

That design moves the risk: a folder overshared by mistake was once hard to find, and an assistant finds it on request. Microsoft's deployment guidance for Copilot with SharePoint Advanced Management, published 11 November 2026, starts with identifying high-risk sites and files and remediating oversharing before rollout. The [permission-aware retrieval explainer](https://lowob.com/research/what-is-permission-aware-retrieval/) covers how the access check works, and [The permission problem](https://lowob.com/research/the-permission-problem-when-commercial-context-leaks/) covers commercial material in particular.

## How do you keep the knowledge base current?

Give every source an owner and a review date, and let use drive improvement.

The Consortium for Service Innovation's KCS v6 guide improves knowledge "based on demand and usage with the concept 'reuse is review.'" Its techniques include "Search Early Search Often" and "Flag It or Fix It": whoever finds an article wrong either corrects it or flags it.

Articles can be edited to stay current. Decisions should not be: when a pricing rule changes, the article updates, and a new [decision record](https://lowob.com/research/what-is-a-decision-record/) supersedes the old one, with the reason and the trigger. [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/) sets out the rule.

## How do you test a knowledge base for AI?

Run the step 1 questions and score each answer: correct, current and cited. Fix failures in the sources, not in the prompt.

Include questions whose answer changed recently, questions where sources conflict and at least one the knowledge base should decline. The MemTrace benchmark, posted to arXiv on 15 June 2026, found memory systems failed mostly through "evidence use, not retrieval," so a test that only checks whether the right document was found will miss the commonest failure. Gartner's 26 February 2025 release, based on a July 2024 survey of 1,203 data management leaders, treats AI-ready data as an ongoing practice, so test on a schedule, not only at launch.

## lowob takeaways

- **Start with real questions.** Between 20 and 50, with a named judge, before any indexing.
- **One authoritative copy.** Versioning on, duplicates archived, owner and review date on every source.
- **Permissions before rollout.** The assistant inherits every sharing mistake.
- **Link policies to decisions.** Edit the article; supersede the decision record.

## Common questions

### How do I build a knowledge base for AI?

Choose 20 to 50 recurring questions from one team, find the source that answers each and its owner, keep one current copy with versioning, add a summary, headings and metadata, fix permissions, and test answers against the questions. Link each policy to the decision record that set it, so the assistant can explain changes as well as state rules.

### What is the best format for documents in an AI knowledge base?

Documents that start with a short summary, use consistent headings, carry metadata such as owner, product and review date, and exist as one authoritative copy. Microsoft's November 2026 guidance for SharePoint recommends exactly these, and advises keeping tables simple. Microsoft also notes its agent cannot read content in list-based accordion web parts, so check that page elements are readable.

### Do I need RAG for a company knowledge base?

Not always. Anthropic noted in September 2024 that a knowledge base under 200,000 tokens, about 500 pages, can sometimes be placed in the prompt whole, with prompt caching to reduce cost. Larger collections need retrieval, and techniques such as adding context to each chunk and reranking results reduced retrieval failures substantially on Anthropic's tests.

### How do you stop an AI assistant from exposing confidential documents?

Fix access in the source systems before connecting it. Assistants such as Microsoft 365 Copilot answer from data the user already has permission to see, so a folder overshared by mistake becomes visible on request. Review high-risk sites and files, remove broad sharing, label sensitive material, and check that restricted content stays invisible to unauthorised users.

### How often should an AI knowledge base be updated?

Continuously for content, and on a schedule for testing. Give every source an owner and a review date, apply expiry policies, and follow the KCS principle that reuse is review: whoever finds an article wrong fixes or flags it. Re-run the test questions monthly, and after any policy change, to catch answers that have gone stale.

## Sources and notes

- [Microsoft Learn, Optimizing SharePoint content for Employee Self-Service agents](https://learn.microsoft.com/microsoft-365/copilot/employee-self-service/optimization-sharepoint), updated 3 November 2026. Vendor documentation for Microsoft products.
- [Microsoft Learn, Get ready for Microsoft 365 Copilot and agents with SharePoint Advanced Management](https://learn.microsoft.com/sharepoint/sharepoint-copilot-best-practices), published 11 November 2026. Vendor deployment guidance.
- [Anthropic, Introducing Contextual Retrieval](https://anthropic.com/research/contextual-retrieval), 19 September 2024. Vendor engineering post; results from the authors' own evaluations.
- [Anthropic, Effective context engineering for AI agents](https://anthropic.com/engineering/effective-context-engineering-for-ai-agents), 29 September 2025. Vendor engineering guidance.
- [Consortium for Service Innovation, KCS v6 Practices Guide, Section 2: The KCS Practices](https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide/030), first published February 2018, modified March 2026. Practitioner standard.
- [Gartner, Lack of AI-Ready Data Puts AI Projects at Risk](https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk), 26 February 2025. Analyst survey and forecast.
- [Long et al., MemTrace: Probing What Final Accuracy Misses in Long-Term Memory](https://arxiv.org/abs/2606.17328), arXiv, 15 June 2026. Research preprint.
- The seven-step checklist, the question-first scope and the test design are **lowob**'s working method.

## Related research

- [The Enterprise Brain Is a Record, Not a Mind](https://lowob.com/research/the-enterprise-brain-is-a-record-not-a-mind/)
- [Enterprise Brain vs Knowledge Base: What Is the Difference?](https://lowob.com/research/enterprise-brain-vs-knowledge-base/)
- [What Is Permission-Aware Retrieval?](https://lowob.com/research/what-is-permission-aware-retrieval/)
- [Decision Record Template: Fields, Example and How to Use It](https://lowob.com/research/decision-record-template/)
- [Business Decision Records vs Architecture Decision Records](https://lowob.com/research/business-decision-records-vs-architecture-decision-records/)

## Next move

Ask one team for the 20 questions they answer every week, and find the single current document that answers each. Where there is no document, or more than one, you have found the first fixes.

[Start a conversation](https://lowob.com/contact/)
