# How AI Answer Engines Choose Which Sources to Cite

Source: https://lowob.com/research/how-llms-choose-sources/
Publisher: lowob (https://lowob.com)
Published: 2026-03-17 · Updated: 2026-11-16
Function: Distribution

> Summary: AI assistants answer from what the model learned in training and from pages they retrieve at the time of the question. Citation studies show the retrieved sources change from day to day and often differ from the pages that rank in search. Content that answers a real question with checkable, sourced facts gives an engine something to use; content written only to persuade rarely does.

AI answer engines draw on two things: what the model learned in training, and pages a search system retrieves when the question is asked. The retrieved sources vary by engine, by question and by day. Ahrefs found half or more of the citations in five AI tools had gone by the next day's answer, and only about 12% of URLs cited by ChatGPT, Gemini and Copilot ranked in Google's top 10 for the same prompt. No single trick guarantees a citation. The best starting point is useful, specific, verifiable information that a crawler can reach.

A growing share of the questions people once typed into a search engine is now asked of an AI assistant and answered in a paragraph rather than a list of links. For anyone whose business depends on being found, that changes what "being found" means. Pew Research Center tracked 900 US adults' Google searches in March 2025 and found an AI summary on 18% of them. Users clicked a link inside the summary on 1% of those visits.

This article explains, as plainly as the subject allows, how these systems choose what to say and what to cite. A companion piece, the [LLM optimization checklist](https://lowob.com/research/llm-optimization-checklist/), covers what to do about it.

## Two ways a model knows something

**Training.** A model generates responses from patterns learned before its knowledge cutoff. That does not mean it can show which websites supplied a particular claim, or that any one brand mention will make it recommend a company. Our explainer on [large language models](https://lowob.com/research/what-is-a-large-language-model/) covers how training works.

**Retrieval.** Many assistants also search a live index at the time of the question and ground the answer in what they find. This is the route that produces citations. Google's documentation says AI Overviews and AI Mode "may use a 'query fan-out' technique, issuing multiple related searches across subtopics and data sources" to build a response. Other products use their own indexes and crawlers; our explainer on [retrieval-augmented generation](https://lowob.com/research/what-is-retrieval-augmented-generation/) covers the mechanism.

| Route | Where the information comes from | Can it be cited? | What a company controls |
| --- | --- | --- | --- |
| Training | Text gathered before the model's cutoff | No direct link to a page | Little, and only over years |
| Retrieval | A search index queried at answer time | Yes, as a linked source | Crawl access, page content, accuracy |
| Both | Model knowledge shaped by retrieved pages | Partly | The retrieved pages |

Most marketing effort is aimed at neither route. It is aimed at persuading a human who has already arrived.

## What the citation studies show

Measurement of AI citations is young and mostly comes from SEO tool vendors. Read the figures as direction. Three findings are consistent enough to plan around.

**Citations are unstable.** Ahrefs tracked about 37,500 citations daily for 20 days across Google AI Mode, AI Overviews, ChatGPT, Gemini and Copilot, publishing in October 2026. By day two, 50% of AI Overview citations had gone, 58% for AI Mode, 59% for ChatGPT, 81% for Gemini and 83% for Copilot. Only 0.2% to 6.8% were still cited after 20 days. About 75% of dropped citations came back at some point, and citations that lasted eight days or more returned 96% to 99% of the time.

**Ranking in search helps, but is not the same thing.** Ahrefs' study of 15,000 long-tail queries in July 2025 found only about 12% of links cited by ChatGPT, Gemini and Copilot appeared in Google's top 10 for the same prompt. Perplexity was the outlier, at about 29%. For Google's own AI Overviews, a separate Ahrefs study of 863,000 results in March 2026 found about 38% of cited URLs ranked in the top 10, down from about 76% in its July 2025 study, though Ahrefs notes its method changed between the two. Its explanation is fan-out: the engine cites pages that rank for related sub-questions. Ranking still correlates with durability. In the stability study, pages ranking in Google for the question were cited for seven days or more about 28% to 29% of the time in Google's tools, against 4% for pages that did not rank.

**Being cited and being named are different.** In the same stability study, the cited site's brand was not named in the answer 54% to 84% of the time, depending on the tool. A company can supply the facts and receive no mention.

> An answer engine cites pages that help it answer the question it has broken yours into. A page written to persuade answers none of them.

## What makes a page easier to discover and use

Start with the basics: make the page accessible to the relevant crawlers, answer a real question clearly, publish specific and accurate information, and link to supporting evidence. Clear headings and a helpful structure improve readability for people too.

The only controlled study of what changes visibility in generated answers points the same way. Pranjal Aggarwal and colleagues built GEO-bench, a benchmark of queries paired with web sources, and tested nine rewriting methods on a simulated engine (published at KDD 2024). Adding quotations improved a source's visibility measure by about 41%, adding statistics by about 31%, and citing sources by about 27%. Keyword stuffing, the oldest SEO habit, lowered it by about 8%. On Perplexity, a live engine, they reported gains of up to 37%. The authors found effects "vary across domains". This is one research setup with a 2023-era model, so treat it as evidence that substance helps, not as a formula.

Do not promise that placing an answer in the opening paragraph or adding schema will secure an AI citation. [Google's official guidance](https://developers.google.com/search/docs/appearance/ai-features) says there are "no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary". A page must be "indexed and eligible to be shown in Google Search with a snippet".

Credible third-party reporting and partner documentation can help customers verify important claims. We do not know a universal formula by which every assistant weighs mentions, links or corroboration.

## Why your content might not appear

Most absences have ordinary causes.

| Cause | How to check | What to do |
| --- | --- | --- |
| Not indexed, or blocked to the engine's crawler | Search Console indexing report; robots.txt rules by user agent | Fix crawl access deliberately, engine by engine |
| Content rendered only by script | View the raw HTML | Serve the main text in HTML |
| Does not answer the question asked | Ask the assistant the question and read what it cites | Write the answer, with evidence, on one page |
| Outdated or contradicted elsewhere | Compare your page with the sources it is cited beside | Update, date and source the claim |
| Outcompeted by stronger resources | Note which sources win, and why | Add what they lack: data, first-hand detail, a usable tool |
| Cited one day, gone the next | Ask the same question across several days | Measure over weeks, not single checks |

That last row is why monitoring has to be repeated. Record the questions customers ask, note which sources appear across several runs, check what they get right or wrong, and improve the underlying page when there is a real information gap. Our piece on [content with a job](https://lowob.com/research/content-with-a-job/) sets out how to give each page a reader, a decision and a measure.

## What this means for a regulated or restricted-category business

AI answers can become another discovery channel, but they are not a guaranteed replacement for search, partnerships or advertising. Crawl permissions are set per engine and per purpose. [OpenAI documents OAI-SearchBot separately from GPTBot](https://developers.openai.com/api/docs/bots): OAI-SearchBot "is used to surface websites in search results in ChatGPT's search features", while disallowing GPTBot "indicates a site's content should not be used in training", and "each setting is independent of the others". Anthropic's help centre describes the same split: ClaudeBot for training, Claude-SearchBot for search indexing and Claude-User for retrieval when a user asks a question. A site can allow search access without permitting training.

Keep product claims, availability, risk disclosures and contact details current. An assistant citing an out-of-date page can repeat a withdrawn product to a customer. Make information clear enough for customers to verify independently, and do not treat AI visibility as a channel that cannot change or be disrupted. Our guide to [restricted categories](https://lowob.com/research/what-is-a-restricted-category/) covers the wider distribution problem.

## lowob takeaways

- **There is no single formula.** Engines retrieve and cite differently, and the same engine changes its sources daily.
- **Substance is what gets used.** Quotations, figures and cited evidence raised visibility in the only controlled study; keyword stuffing lowered it.
- **Crawl access is a decision.** Search, training and user retrieval are separate permissions on the main engines.
- **Measure over time.** Repeat the same questions across days and record citations, mentions and accuracy.

## Common questions

### How do AI answer engines decide which sources to cite?

Most retrieve pages from a search index when the question is asked, often by running several related sub-searches, and cite the pages that best support parts of the answer. The selection varies by engine, by question and from day to day.

### Do AI Overviews only cite pages that rank in Google's top 10?

No. Ahrefs found about 38% of AI Overview citations ranked in the top 10 for the query in early 2026, with many of the rest ranking for related sub-queries. Ranking still helps a citation last longer.

### Why does my website not appear in ChatGPT or Perplexity answers?

Common causes are blocked crawlers, content rendered only by script, pages that do not answer the question directly, outdated facts, and stronger competing sources. Citations also change daily, so check across several days.

### Can I block AI training but still appear in AI search?

On the main engines, yes. OpenAI and Anthropic use separate crawlers for search and for training, and each can be allowed or blocked in robots.txt independently.

## In the news

- 29 October 2026 · Ahrefs[Ahrefs measures how stable AI citations are](https://lowob.com/news/#2026-10-29-ahrefs-measures-how-stable-ai-citations-are)About 37,500 citations tracked over 20 days. Being cited once is not the same as being cited next week, so track it.

Tracked on the [**lowob** News Desk](https://lowob.com/news/).

## Sources and notes

- [Google Search Central, AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), last updated 10 December 2025. Google's own documentation; its statement that AI Overview clicks are "higher quality" is not backed by published data.
- [Pew Research Center, Google users are less likely to click on links when an AI summary appears](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/), 22 July 2025. Browsing data from 900 US adults, March 2025; consumer searches.
- [Ahrefs, How Stable Are AI Citations?](https://ahrefs.com/blog/how-stable-are-ai-citations/), 29 October 2026. Vendor research; about 37,500 citations over 20 days; correlations only.
- [Ahrefs, Only 12% of AI Cited URLs Rank in Google's Top 10 for the Original Prompt](https://ahrefs.com/fr/blog/ai-search-overlap/), 11 August 2025. Vendor research; 15,000 long-tail queries, July 2025.
- [Ahrefs, Update: 38% of AI Overview Citations Pull From the Top 10](https://ahrefs.com/blog/ai-overview-citations-top-10), 2 March 2026. Vendor research; 863,000 SERPs; method changed from the earlier 76% study.
- [Aggarwal et al., GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735), KDD 2024. Peer-reviewed; simulated engine using GPT-3.5 plus a Perplexity test; percentages computed from the paper's Table 1.
- [OpenAI, Overview of crawlers](https://developers.openai.com/api/docs/bots). Vendor documentation.
- [Anthropic, Does Anthropic crawl data from the web?](https://support.claude.com/en/articles/8896518), help centre article, accessed November 2026. Vendor documentation; no update date shown.

## Related research

- [LLM Optimization Checklist for Content and Marketing](https://lowob.com/research/llm-optimization-checklist/)
- [What SEO Is Now: How Search Ranking Works Today](https://lowob.com/research/what-seo-is-now/)
- [Content With a Job](https://lowob.com/research/content-with-a-job/)
- [What Is Retrieval-Augmented Generation (RAG)?](https://lowob.com/research/what-is-retrieval-augmented-generation/)
- [What Is App Store Optimization? Fintech and Crypto Apps](https://lowob.com/research/what-is-app-store-optimization/)
- [AI Did Not Fix Your Marketing. It Made Your Mediocrity Cheaper.](https://lowob.com/research/ai-made-average-marketing-cheaper/)

## Next move

Pick five questions a buyer asks before contacting you. Ask each of them in two assistants on three different days this week, and record which sources are cited, whether you are named, and what the answer gets wrong.

[Start a conversation](https://lowob.com/contact/)
