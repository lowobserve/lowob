# The 5 agent memory layers worth testing, and how to test them

Source: https://lowob.com/research/the-5-agent-memory-layers-worth-testing-and-how-to-test-them/
Publisher: lowob (https://lowob.com)
Published: 2026-10-19 · Updated: 2026-11-16
Function: Strategy

> Summary: No memory layer has yet shown, under independent test, that it makes agents better at long tasks. The best independent benchmark we found tested how well memory systems handle a fact that has changed, and every method scored poorly when the answer needed more than one step of reasoning. Vendor scores in the 90s are real results on the vendors' own harnesses, not independent reproductions. So this is a list of what is worth testing, with a protocol for testing it, not a list of what works. Zep ranks first because its graph records when a fact stopped being true instead of overwriting it.

*Figure: No single layer is a brain. The brain is the loop: what is stored, wired, recorded, reasoned over and learned from.*

## Key points

- This list is for teams adding long-term memory to an agent. If the agent only needs to remember one conversation, the frameworks and model platforms already do that natively.
- In MemoryAgentBench, an independent 2025 benchmark from UC San Diego, Mem0 scored 18% on single-step questions about changed facts and 2% on multi-step ones.
- Zep's Graphiti stores two timelines on every fact, when it was true and when the system learned it, and expires a contradicted fact rather than deleting it.
- Mem0 has the most traction: $24 million raised, 186 million API calls in the third quarter of 2025 and more than 13 million package downloads, by its own account.
- Test with 50 questions from your own history, with and without each layer, on the same model.

Agent memory is what lets an agent carry facts, preferences and past decisions from one session to the next. Our explainer on [what agent memory is](https://lowob.com/research/what-is-agent-memory/) covers the four types and their limits. The practical question for a buyer is narrower: when a fact changes, does the memory layer know which version is current, and can it tell you where each version came from? That is the failure **lowob** argues matters most, and the one our piece on [superseding rather than overwriting](https://lowob.com/research/supersede-never-overwrite/) makes the case for.

## What the independent evidence says

Most published memory scores come from the vendors. Zep's own paper, posted in January 2025, reports 94.8% on the Deep Memory Retrieval benchmark against 93.4% for MemGPT, and accuracy gains of up to 18.5% on LongMemEval. Those are genuine results, run by the vendor on public benchmarks, and they have not been independently reproduced.

The most useful independent test we found is MemoryAgentBench, published by Yuanzhe Hu, Yu Wang and Julian McAuley at UC San Diego in July 2025. It includes a "FactConsolidation" task that feeds a system facts, then contradicts some of them, then asks questions. The results are sobering:

| System tested | Single-step questions on changed facts | Multi-step questions on changed facts |
| --- | --- | --- |
| Mem0 | 18% | 2% |
| MemGPT (Letta's research ancestor) | 28% | 3% |
| GPT-4o with the full history in context | 60% | No higher than 7% |
| Best of all methods tested |  | About 7% |

The authors conclude that conflict resolution "remains a major challenge for memory mechanisms". They attribute part of Mem0's weakness to its design: it extracts facts from inputs, which "inherently discards a substantial portion of the original content". A reasoning model did much better on a small version of the task, then fell sharply as the history grew. Zep was discussed in the paper but not tested, and Letta's current product has moved on from MemGPT. The benchmark is a year old. It is still the clearest evidence that the hardest question in agent memory, how did this change, is unsolved.

> A memory layer that cannot tell you a fact has been superseded will answer confidently from the old one.

## How we ranked

| Criterion | Weight | Why it matters |
| --- | --- | --- |
| Handles change over time | 35% | The weakest category in every benchmark is "how did this change?" Memory that cannot mark a fact as superseded will blend old and new. |
| Independent evidence | 25% | Has anyone outside the vendor reproduced the claims, with a published harness? |
| Provenance and ownership | 20% | Can you see where a memory came from, export it and self-host? |
| Adoption and backing | 20% | Funding, integrations, and whether it will still exist in two years. |

## The list

**1. Zep (Graphiti)**

**Best for:** agents whose facts change, such as accounts, positions or policies.

**Why it ranks first:** it is built on a bi-temporal knowledge graph. Each edge carries two timelines: when the system recorded the fact and when it expired, and when the fact became true and stopped being true in the world. When a new episode contradicts an existing fact, Graphiti sets the old edge's expiry rather than deleting it, and rewrites its text to say the fact held until the change. If information arrives out of order, it compares the real-world dates and expires the earlier fact. That is the right structure for the hardest failure in agent memory, and it is what a [decision record](https://lowob.com/research/what-is-a-decision-record/) needs too.

**Watch out for:** its headline scores are its own and have not been reproduced. Graphs also cost more to keep fresh than to build: every ingested episode is billed, while retrieval is not.

**Pricing:** Free with 10,000 credits a month; Flex $125 a month for 50,000 credits; Flex Plus $375 a month for 200,000 credits; Enterprise custom (as listed in November 2026). An episode costs one credit per 350 bytes; retrieval and storage are unmetered. Zep states SOC 2 Type II certification and offers deployment in your own cloud through sales.

**What would change its rank:** an independent benchmark in which the temporal graph does no better than flat memory.

**2. Mem0**

**Best for:** teams that want the most widely adopted option and an AWS integration.

**Why it ranks here:** the most traction in the category. TechCrunch reported in October 2025 that Mem0 had raised $24 million across a seed and a Series A led by Basis Set Ventures, that API calls rose from 35 million in the first quarter of 2025 to 186 million in the third, and that its Python package had passed 13 million downloads. The same report carries Mem0's claim to be the exclusive memory provider for AWS's agent SDK. Its open-source edition is Apache 2.0 licensed and self-hostable, which scores well on ownership.

**Watch out for:** the widest gap between vendor and independent results on this list. Mem0's extraction design is the one MemoryAgentBench blamed for information loss, and it scored 2% on multi-step questions about changed facts. Pricing has also moved: a third-party tracker's 9 November 2026 snapshot of Mem0's pricing page shows the Starter and Pro tiers no longer sold to new accounts.

**Pricing:** Free tier with limited adds and retrievals; paid use on custom, sales-led pricing; open source free (per a third-party tracker's snapshot of Mem0's page, as listed in November 2026; we could not open Mem0's page directly).

**What would change its rank:** a published, reproducible harness that closes the gap with its own claims.

**3. Letta**

**Best for:** teams that want agent state they can inspect and control, from the research group behind MemGPT.

**Why it ranks here:** the operating-system-style "paging" design it descends from is one of the founding ideas in agent memory, and the lineage is academic: Letta is the company behind the MemGPT open-source project, spun out of UC Berkeley. Agent state is a first-class, inspectable object rather than a hidden store.

**Watch out for:** smaller and earlier. TechCrunch reported a $10 million seed led by Felicis at a $70 million post-money valuation in September 2024. The MemGPT design scored 3% on multi-step changed-fact questions in MemoryAgentBench, though Letta's product has developed since.

**Pricing:** Free for up to three stateful agents; Pro $20 a month including $20 of model credits and up to 20 agents; Enterprise custom with role-based access and SSO (as listed in November 2026).

**What would change its rank:** a new funding round, or an independent benchmark of the current product either way.

**4. Cognee**

**Best for:** teams already committed to a graph approach and willing to work with an early vendor.

**Why it ranks here:** a memory engine that combines graph and vector storage, with an open-source core of more than 12,000 GitHub stars. It raised a $7.5 million seed led by Pebblebed on 19 February 2026 and says it is live at more than 70 companies, with pipeline runs growing from about 2,000 to more than one million during 2025.

**Watch out for:** very early, every figure above is self-reported, and Cognee was among the systems that, like every method tested, scored poorly on MemoryAgentBench's multi-step changed-fact questions. We could not open its pricing page this month.

**Pricing:** open-source core free; check the cloud price directly.

**What would change its rank:** production references in regulated firms.

**5. Supermemory**

**Best for:** small teams and prototypes.

**Why it ranks here:** a lightweight memory API that builds a knowledge graph from files, documents, chats and email, backed by a $2.6 million seed reported in October 2025, with named early customers.

**Watch out for:** the smallest backing on the list, no independent results, and the self-hosted binary is free but not open source.

**Pricing:** Free; Pro $19 a month; Max $100; Scale $399, which adds SOC 2, a HIPAA agreement and a self-hosted option; Enterprise custom (as listed in November 2026).

**What would change its rank:** independent benchmark results or a larger round.

## Side by side

|  | Zep | Mem0 | Letta | Cognee | Supermemory |
| --- | --- | --- | --- | --- | --- |
| Memory structure | Bi-temporal knowledge graph | Extracted facts, vector plus graph | Inspectable agent state, paging design | Graph plus vector | Knowledge graph over ingested content |
| Handles changed facts | Expires old edge, keeps history | 2% multi-step in independent test | MemGPT ancestor scored 3% | Weak on multi-step in independent test | No independent evidence |
| Open source | Graphiti library | Yes, Apache 2.0 | MemGPT lineage | Core, yes | No |
| Self-host or own cloud | Own cloud via sales | Yes, open-source edition | Not stated on pricing page | Yes, core | Scale tier and above |
| Compliance stated | SOC 2 Type II | Not verified this month | SSO on Enterprise | Not verified | SOC 2, HIPAA on Scale |
| Entry paid price, November 2026 | $125 a month | Custom | $20 a month | Not verified | $19 a month |

## Left out, and why

**The platform-native options.** Google's Gemini agent, announced on 8 October 2026, ships four memory types: session, semantic, procedural and episodic. Microsoft's Work IQ, generally available since 16 June 2026, is a governed context layer that runs every request as a specific user. If you are already on one of those platforms, test its native memory before adding another vendor. They are bundled rather than standalone, so they are not ranked here; our [ranking of enterprise context platforms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/) covers them.

**A plain database with good discipline.** For many teams the right answer is records with a status, validity dates and supersession links in a database you already run. It is not a product, so it is not ranked, but it is often what wins.

## How to test any of them in two weeks

1. **Build 50 questions from your own history:** 20 lookups, 20 "how did this change?" questions, and 10 that assume something you have since reversed.
2. **Run your agent with no memory layer, then with each candidate, on the same model.** Include a run with the full history in the context window as a ceiling; in MemoryAgentBench, that beat every memory system on single-step questions.
3. **Score correctness, and separately score how often it corrects the false premise.** Our piece on [false premises](https://lowob.com/research/the-false-premise-is-the-expensive-failure/) explains why that second score matters more.
4. **Ask each vendor for its benchmark harness, not just its score.** A vendor that will not share one has told you something.

Our explainer on [AI evals](https://lowob.com/research/what-are-ai-evals/) covers how to keep a test set like this honest over time.

## lowob takeaways

- **No independent gain yet.** The best independent test found every memory method weak on multi-step questions about changed facts.
- **Zep ranks first on structure.** Its graph records when a fact stopped being true instead of overwriting it.
- **Mem0 leads on adoption, not evidence.** It has the most usage and the widest gap between its own and independent results.
- **Test on your own history.** Fifty questions, with and without each layer, on the same model, including a full-context ceiling.

Gateway card

### Buyer's checklist for an agent memory layer

- A changed fact is marked as superseded, with dates, and the old version stays readable
- Every memory shows where it came from
- Memories export in a documented format, or the store can be self-hosted
- The vendor shares its benchmark harness, not only its score
- Your own 50-question test beats a no-memory run on the same model
- Pricing is modelled on ingestion volume, not only retrieval

## Common questions

### Do AI agent memory layers like Mem0 and Zep actually improve performance?

Not yet under independent test. Vendor scores in the 90s come from the vendors' own runs. In MemoryAgentBench, an independent 2025 benchmark, every memory method scored poorly on multi-step questions about facts that had changed, and Mem0 scored 2%.

### Which agent memory layer is best for facts that change over time?

Zep, through its Graphiti library, because its bi-temporal knowledge graph records when each fact was true and expires a contradicted fact rather than overwriting it.

### How much does an agent memory layer cost?

As listed in November 2026, Zep starts at $125 a month for 50,000 credits, Letta Pro is $20 a month, Supermemory Pro is $19 a month, and Mem0's paid tiers are now custom. Most offer a free tier and bill on ingestion more than on retrieval.

### How do I test an agent memory layer?

Build 50 questions from your own history: 20 lookups, 20 "how did this change?" and 10 with a reversed premise. Run with no memory, with each candidate and with full history in context, on the same model, and ask vendors for their benchmark harness.

## Sources and notes

- [Hu, Wang and McAuley, Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions (MemoryAgentBench)](https://arxiv.org/html/2507.05257v1), arXiv, 7 July 2025. Independent academic benchmark; tests MemGPT, not Letta's current product, and does not test Zep.
- [Rasmussen et al., Zep: A Temporal Knowledge Graph Architecture for Agent Memory](https://arxiv.org/abs/2501.13956), arXiv, 20 January 2025. Vendor-authored paper; results not independently reproduced.
- [Zep, Beyond static knowledge graphs](https://blog.getzep.com/beyond-static-knowledge-graphs/), undated. Vendor technical blog describing Graphiti's temporal model.
- [Zep, Pricing](https://getzep.com/pricing), as listed in November 2026. Vendor pricing page; compliance details are inconsistent across the page.
- [TechCrunch, Mem0 raises $24M from YC, Peak XV and Basis Set](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps), 28 October 2025. Press report; usage figures and the AWS claim are the company's.
- [UsagePricing, Mem0 pricing blueprint](https://usagepricing.com/blueprint/mem0), snapshot of 9 November 2026. Third-party tracker of Mem0's pricing page; used because the vendor page could not be opened this month.
- [TechCrunch, Letta comes out of stealth](https://techcrunch.com/2024/09/23/letta-one-of-uc-berkeleys-most-anticipated-ai-startups-has-just-come-out-of-stealth), 23 September 2024. Press report.
- [Letta, Pricing](https://docs.letta.com/pricing), as listed in November 2026. Vendor pricing page.
- [Cognee, Cognee raises $7.5M seed](https://www.cognee.ai/cognee-raises-seven-million-five-hundred-thousand-dollars-seed), 19 February 2026. Vendor announcement; usage figures self-reported.
- [TechCrunch, A 19-year-old nabs backing from Google execs for his AI memory startup Supermemory](https://techcrunch.com/2025/10/06/a-19-year-old-nabs-backing-from-google-execs-for-his-ai-memory-startup-supermemory/), 6 October 2025. Press report.
- [Supermemory, Pricing](https://supermemory.ai/pricing.md), as listed in November 2026. Vendor pricing page.
- [Futurum Group, Google collapses enterprise AI into a single Gemini agent](https://futurumgroup.com/?p=96545), 9 October 2026. Analyst commentary on a vendor launch.
- The ranking criteria, weights and test protocol are **lowob**'s framework.

## Related research

- [What is agent memory?](https://lowob.com/research/what-is-agent-memory/)
- [What are AI evals?](https://lowob.com/research/what-are-ai-evals/)
- [What is a decision record?](https://lowob.com/research/what-is-a-decision-record/)
- [Supersede, never overwrite](https://lowob.com/research/supersede-never-overwrite/)
- [The 5 enterprise context platforms, ranked for regulated firms](https://lowob.com/research/the-5-enterprise-context-platforms-ranked-for-regulated-firms/)

## Next Move

Write the 20 "how did this change?" questions this week, from real reversals in your own accounts or policies. Run them against your agent with no memory layer first, so you have a baseline before any vendor demo.

[Start a conversation](https://lowob.com/contact/)
