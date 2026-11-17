# Keep the Sources; Let the Summary Regenerate

Source: https://lowob.com/research/keep-the-sources-let-the-summary-regenerate/
Publisher: lowob (https://lowob.com)
Published: 2026-09-03 · Updated: 2026-11-17
Function: Strategy

> Summary: A generated summary must never be the only surviving copy of a decision, because every summary is a lossy compression made by one model on one day. Research finds model summaries drop qualifiers and add unsupported content. Keep immutable source snapshots, treat each summary as a regenerable, versioned view over them, and handle deletion with tombstones.

A generated summary must never be the only surviving copy of a decision. Every summary is a lossy compression made by one model on one day, and research shows what gets lost: a 2025 study found model summaries of scientific papers were nearly five times more likely than expert summaries to turn hedged findings into broad generalisations. Provenance is the asset. The summary is a view. Keep immutable sources, version every summary with the model and prompt that made it, and regenerate when models improve.

*Figure: Where this piece sits in The Build Order: the context layer.*

The tempting design stores what is useful. Each interaction becomes a clean summary, tagged and embedded. The raw notes, transcripts and documents are discarded, or left in some other system with a different retention policy. Within a year the summaries are all that remain, and nobody decided that on purpose. Our review of [AI notetakers for decision capture](https://lowob.com/research/top-5-ai-notetakers-for-decision-capture/) shows how easily this happens by default.

## Why that is dangerous

Every summary is a compression made with a particular model, prompt and set of assumptions. It keeps what that model judged important and drops the rest. Often what it dropped is a hedge, a caveat, a minority view, or the exact wording of a commitment. Those are precisely the things a later dispute turns on.

The evidence on what gets dropped is specific. Uwe Peters and Benjamin Chin-Yee had 10 large language models produce 4,900 summaries of scientific abstracts and articles, in tests run in early 2024 and March 2025, for a paper forthcoming in *Royal Society Open Science* at the time of the draft. Model summaries were "nearly five times more likely to contain broad generalizations" than expert summaries of the same articles. Some models overgeneralised in 26% to 73% of cases, while Claude models did not differ significantly from the originals. Newer models tended to do worse than older ones, and prompting for accuracy roughly doubled the odds of a generalised conclusion.

The older problem is content that was never there. Maynez and colleagues reported at ACL 2020 that human annotators found "substantial amounts of hallucinated content in all model generated summaries" they evaluated. Models have improved since, but the failure has not disappeared: Stanford researchers found retrieval-backed legal research tools still gave incorrect information in more than 17% of queries in 2024. Our explainer on [AI hallucination](https://lowob.com/research/what-is-ai-hallucination/) covers the causes.

| What a summary tends to lose | Why a later review needs it |
| --- | --- |
| Hedges and qualifiers | "Likely in this segment" becomes "works" |
| Minority views and dissent | The objection that turned out right disappears |
| Exact wording of a commitment | Disputes turn on what was actually promised |
| Who said what | Accountability and a person to ask |
| What was left undecided | Open questions read as settled |

> When a decision is challenged, the organisation should not be left defending what a model once wrote about what happened.

## Summaries of summaries drift further

Summaries are often summarised again: a meeting summary feeds a weekly digest, which feeds a quarterly review. Each step compresses the last. A related effect is documented in model training. Shumailov and colleagues showed in *Nature* in 2024 that models trained on model-generated data lose the rare, low-probability parts of the original distribution and produce a narrower range of output, which they called model collapse. A chain of summaries is not model training, but the mechanism rhymes: each pass keeps the typical and drops the unusual, and the unusual is often what mattered.

When a decision is challenged eighteen months later, by a regulator, an auditor, a counterparty or a new owner, there is nothing to go back to. And models change. The summary written in 2026 reflects a 2026 model's sense of salience. In 2028 you will have a better one and nothing for it to read.

## The rule

Keep immutable source snapshots. Each carries a retrieval timestamp, its origin, and who verified it if anyone did. Treat every summary as a regenerable view over those sources, versioned with the model and prompt that produced it.

| Object | Mutable | Stored with it |
| --- | --- | --- |
| Source snapshot (transcript, email, document) | No | Timestamp, origin, verifier, retention basis |
| Summary | Replaced, never edited | Model, prompt version, date, links to sources |
| Decision record | Superseded, never edited | Links to the sources and summaries it relied on |
| Tombstone | No | What was deleted, when, why, under which obligation, dependants |

Then three things become easy. When the model improves, regenerate the summaries. When a decision is challenged, open the sources. When two summaries disagree, check whether they came from different sources or different models. The same principle, that a changed view is a new record rather than an edit, is set out in [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/).

## The one hard case: deletion

Immutability collides with obligations to delete: privacy requests, retention limits, the end of a client relationship. Under Article 17 of the GDPR, a controller must erase personal data "without undue delay" where one of the listed grounds applies, though the duty does not apply where processing is needed for a legal obligation or "for the establishment, exercise or defence of legal claims". Those exceptions are for lawyers to apply, case by case, not for a system to assume.

Handle this explicitly rather than quietly. Deleting a source should leave a tombstone: what was deleted, when, why, under which obligation, and which summaries and decisions depended on it. Those dependent records are then marked as resting on removed evidence. That is honest, auditable, and much better than a summary that silently outlives its source. Our explainer on [zero data retention](https://lowob.com/research/what-is-zero-data-retention/) covers the vendor side of retention.

## The economics

Storage is cheap. Reconstructing why a decision was made a year and a half ago, from people who have moved on and a summary nobody trusts, is not. Even for heavy document estates, keeping sources is almost always the cheaper side of that trade. Where regulation applies, keeping records is not optional anyway: the EU AI Act requires deployers of high-risk systems to keep automatically generated logs for at least six months once those obligations apply.

## In practice

Store raw sources immutably with timestamp, origin and verifier. Version every summary with the model and prompt that produced it, and link it to its sources. Regenerate summaries when you change models, and compare old and new for drift, paying particular attention to dropped qualifiers.

Design deletion as tombstones that flag dependent records, working with legal and compliance.

**What would prove this wrong:** evidence that summary-only stores resolve later disputes and reviews as reliably as source-backed ones. If compression loses nothing that matters, keeping sources is overhead.

## lowob takeaways

- **Summaries drop hedges.** Model summaries were nearly five times more likely than expert ones to overgeneralise.
- **Keep sources immutable.** Timestamp, origin and verifier on every snapshot.
- **Version every summary.** Model, prompt and links to sources, regenerated when models change.
- **Delete with a tombstone.** Flag every summary and decision that rested on the removed source.

## Common questions

### Should I keep raw meeting transcripts if I have AI summaries?

Yes, where the law allows. A summary keeps what one model judged important and drops the rest, often the caveat or exact wording a later dispute depends on. Keep immutable sources and treat summaries as regenerable views.

### Do AI summaries leave out important details?

Often. A 2025 study of 4,900 summaries from 10 models found they were nearly five times more likely than expert summaries to turn qualified findings into broad generalisations, and asking for accuracy made it worse.

### How do you reconcile keeping sources with data deletion obligations?

Deleting a source should leave a tombstone recording what was deleted, when, why and under which obligation, and mark dependent summaries and decisions as resting on removed evidence.

### What should be stored alongside an AI-generated summary?

The model and prompt version that produced it, the date, and links to the source snapshots it was made from.

## Sources and notes

- [Peters and Chin-Yee, Generalization Bias in Large Language Model Summarization of Scientific Research](https://arxiv.org/pdf/2504.00025), 2025. Academic paper (penultimate draft for *Royal Society Open Science*); scientific texts, not business records.
- [Maynez et al., On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2020.acl-main.173), ACL 2020. Academic paper; models tested predate current LLMs.
- [Shumailov et al., AI models collapse when trained on recursively generated data](https://ideas.repec.org/a/nat/nature/v631y2024i8022d10.1038_s41586-024-07566-y.html), *Nature* 631, July 2024. Academic paper on model training; applied here by analogy.
- [Stanford HAI, AI on Trial: Legal Models Hallucinate in 1 out of 6 (or More) Benchmarking Queries](https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries), May 2024. Academic study of commercial legal tools; products have changed since.
- [UK legislation.gov.uk, GDPR Article 17: Right to erasure](https://www.legislation.gov.uk/eur/2016/679/article/17/adopted/data.htm), text as adopted 2016. Official text; national implementation and later amendments apply.
- [EU AI Act Service Desk, Article 26](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26), consolidated text as of 27 July 2026. Official Commission resource; high-risk systems only.
- The object table and tombstone design are **lowob**'s working method; take legal advice on retention.

## Related research

- [What Is AI Hallucination?](https://lowob.com/research/what-is-ai-hallucination/)
- [What Is an AI Audit Trail?](https://lowob.com/research/what-is-an-ai-audit-trail/)
- [Supersede, Never Overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [Top 5 AI Notetakers for Decision Capture](https://lowob.com/research/top-5-ai-notetakers-for-decision-capture/)
- [Business Decision Records vs Architecture Decision Records](https://lowob.com/research/business-decision-records-vs-architecture-decision-records/)

## Next move

Check where the transcripts behind last quarter's three biggest decisions now live, and under what retention policy. If only the summaries survive, change the notetaker's retention settings this week and start versioning summaries with model and prompt.

[Start a conversation](https://lowob.com/contact/)
