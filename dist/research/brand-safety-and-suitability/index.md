# Brand Safety vs Brand Suitability: What They Cost You

Source: https://lowob.com/research/brand-safety-and-suitability/
Publisher: lowob (https://lowob.com)
Published: 2026-07-15 · Updated: 2026-11-16
Function: Distribution

> Summary: Brand safety keeps a company's ads away from content that would harm it by association. Brand suitability keeps them near content that fits the brand and away from content that is legal and harmless but wrong for it. Both matter, and both are enforced by blunt tools that over-block by default: an analysis by Integral Ad Science and Reuters found a typical keyword blocklist would flag 54% of brand-suitable URLs in Reuters' news section. The industry's shared framework, GARM, was discontinued in August 2024. Set standards from actual risk, prefer category controls to keyword lists, allow reputable news and review what was blocked.

## Key points

- Safety is about harm (violence, hate, illegal activity, adult material, misinformation); suitability is about fit, and only the brand can judge it.
- Keyword blocklists are crude: a list containing "crash" can block a report on a market recovery.
- IAS and Reuters found 54% of brand-suitable Reuters news URLs would trip a typical keyword blocklist, against 4.27% in lifestyle.
- GARM, the World Federation of Advertisers' brand safety initiative, shut down in August 2024 after X sued it; its framework is no longer maintained.
- Publishers apply their own rules to advertisers, so restricted categories can be blocked in ways that show up only as low delivery.

Brand safety is the practice of keeping a company's ads away from content that would harm it by association: violence, hate, illegal activity, adult material, misinformation. Brand suitability is the narrower practice of keeping ads near content that fits the brand and away from content that is legal and harmless but wrong for it: a children's product beside crime reporting, a wealth product beside a story about layoffs.

Both matter. Both are also enforced by blunt tools that cost advertisers more reach than they realise.

## How enforcement works

| Tool | How it works | Strength | Weakness |
| --- | --- | --- | --- |
| Keyword blocklists | The ad does not serve if listed words appear on the page | Simple and widespread | Crude: "shooting" blocks a photography site, "crash" blocks a market recovery story |
| Category classification | Verification vendors classify pages by content category and risk level; buyers choose which to allow | More precise than keywords | Depends on the vendor's classifier, and vendors disagree |
| Inclusion lists | The buyer names the sites and apps where ads may appear | The most protective approach | Limits reach the most |
| Pre-bid verification | Filters an impression before the buyer bids | Protects | Only as good as the rules set |
| Post-bid verification | Measures what happened after the ad served and, at best, refunds it | Reports | Money is already spent |

Pre-bid protects; post-bid reports. A buyer relying on post-bid reports is paying to learn what went wrong.

Classifiers disagree more than buyers assume. An independent analysis by Adalytics found that on WSJ.com two verification vendors' labels agreed on only 58.7% of a sample of 25,730 articles. IAS disputed parts of that analysis, and it was observational rather than a test of live campaigns. But it is a reason to treat a vendor's "unsafe" label as an opinion to be checked, not a fact.

## What over-blocking costs

Blunt safety settings have defunded quality journalism, particularly news, by blocking ads on any page that mentions difficult subjects, which is most of the news. The evidence comes from verification vendors and independent researchers rather than from neutral industry bodies, so read it with that in mind, but it points one way.

| Study | Finding | Caveat |
| --- | --- | --- |
| Integral Ad Science and Reuters, reported April 2026 | 54% of brand-suitable URLs in Reuters' news section would be flagged by a typical keyword blocklist; 4.27% in lifestyle | Vendor analysis; URLs, not impressions; no live campaigns |
| Adalytics, updated February 2021 | 21.4% of sampled Economist articles and 30.3% of sampled New York Times articles carried "unsafe" labels; an Economist obituary of Diego Maradona was among them | Independent, observational; IAS disputed the findings |

The advertiser loses reach among engaged, affluent readers; the publisher loses revenue; and the budget flows instead toward content designed to trip no filter, which is often the made-for-advertising inventory that adds nothing. The ANA's 2023 programmatic study found such sites took about 21% of impressions in its sample. Over-blocking and MFA growth are two halves of the same mistake.

> The cost of over-blocking is invisible on the report, because the report shows what was blocked, not what was lost.

## After GARM

For five years the industry had a shared reference point. The World Federation of Advertisers launched the Global Alliance for Responsible Media (GARM) in 2019, after footage of the Christchurch mosque shootings was live-streamed on Facebook. GARM published a Brand Safety Floor, content no advertiser should fund, and an adjacency standards framework setting out how close an ad could sit to sensitive content. It gave buyers, platforms and vendors a common vocabulary.

GARM was discontinued in August 2024, days after X filed an antitrust lawsuit against it, the WFA and several members, alleging an organised advertiser boycott. GARM said the case had drained its resources. Its documents can still be read, but they are no longer maintained, so buyers cannot treat them as a current industry standard.

The practical consequence is that there is no longer an industry default to defer to. Each buyer has to set and document its own standard. That is more work, and it is also an opportunity: suitability was always a judgment about fit that should be made by the brand, and our piece on [positioning for complex markets](https://lowob.com/research/positioning-for-complex-markets/) is a better starting point for that judgment than any vendor's default list.

## Setting standards that work

Start from what would actually harm the brand, not from a vendor's default list. Then work through five settings.

1. **Prefer category and risk-level controls over raw keyword lists.** Review any keyword list for words that are only dangerous in context.
2. **Split the buy.** Use inclusion lists for the core buy and controlled category rules for the reach buy.
3. **Allow reputable news with sensible exclusions** rather than excluding news wholesale. The IAS and Reuters gap between 54% in news and 4.27% in lifestyle shows where blunt rules do the most damage.
4. **Review the blocked-inventory report monthly** for false positives, and ask the vendor which rule blocked each high-value domain.
5. **Write the standard down,** with an owner and a review date, so that it survives staff changes and vendor changes.

Treat verification as a setting to be managed, not a box to be ticked.

## The other direction: suitability for restricted categories

For companies in reviewed categories the question runs the other way as well. Publishers and platforms apply their own suitability rules to advertisers, and a financial or crypto product can be excluded from inventory by the publisher's standards regardless of the buyer's. Roku's self-serve ad policies, for example, require prior approval for any crypto ad and limit approvals to the US. Google Ads requires certification for crypto exchanges and wallets and runs them only in approved countries.

That is another reason the band map matters: some of the inventory that appears open on a DSP is closed by the publisher when the ad arrives, and the rejection appears as low delivery rather than as a message. Our piece on [what a restricted category is](https://lowob.com/research/what-is-a-restricted-category/) explains the band map, and [the build order for media and publishing](https://lowob.com/research/the-build-order-for-media-and-publishing/) covers how publishers themselves record and apply those advertiser decisions.

## The honest summary

Brand safety protects against a real, if rare, harm. Brand suitability is a judgment about fit that should be made by the brand, not by a default. Both are enforced by tools that block far more than they should when left alone. The buyer who manages them gains reach that competitors have blocked themselves out of, and the buyer who ignores them is paying for both the harm and the waste.

## lowob takeaways

- **Separate safety from suitability.** One is harm, the other is fit, and only the brand can judge fit.
- **Distrust keyword lists.** They block more than half of brand-suitable news in at least one vendor's analysis.
- **There is no industry default now.** GARM ended in 2024; write your own standard.
- **Review what was blocked.** The report shows blocks, not lost reach.
- **Expect publishers to judge you too.** In restricted categories, low delivery can be a silent rejection.

## Common questions

### What is the difference between brand safety and brand suitability?

Brand safety keeps ads away from content that would harm the brand, such as violence, hate or misinformation. Brand suitability keeps ads away from content that is harmless but wrong for that particular brand.

### Why is my brand safety setup reducing my reach?

Blunt keyword lists and default settings block far more than they should, including safe news pages. IAS and Reuters found a typical keyword blocklist would flag 54% of brand-suitable Reuters news URLs.

### What happened to GARM?

The Global Alliance for Responsible Media, run by the World Federation of Advertisers, was discontinued in August 2024, days after X filed an antitrust lawsuit against it. Its framework is no longer maintained.

### Why is my crypto or fintech campaign under-delivering on a DSP?

Publishers and platforms apply their own suitability rules to advertisers, so some inventory that looks open on a DSP is closed when the ad arrives, and the rejection appears as low delivery.

## Sources and notes

- [AdExchanger, Keyword blocking demonetized more than half of Reuters' brand-safe stories](https://www.adexchanger.com/publishers/keyword-blocking-demonetized-more-than-half-of-reuters-brand-safe-stories/), 6 April 2026. Reports an IAS and Reuters analysis; vendor research; URLs, not impressions.
- [Adalytics, Tens of thousands of news articles are labeled as unsafe for advertisers](https://adalytics.io/blog/tens-of-thousands-of-news-articles-are-labeled-as-unsafe-for-advertisers), updated 2 February 2021. Independent observational analysis; IAS disputed parts of it.
- [Marketing Dive, report on GARM's discontinuation after the X antitrust lawsuit](https://www.marketingdive.com/news/garm-wfa-x-advertising-antitrust-lawsuit-elon-musk/723830/), August 2024. Trade press report of the discontinuation and GARM's history.
- [Katten, ANA Study Finds Over $20 Billion in Efficiency Gains Possible in Programmatic Advertising Spend](https://quickreads.ext.katten.com/post/102iufy/ana-study-finds-over-20-billion-in-efficiency-gains-possible-in-programmatic-a), 2023. Law firm summary of the ANA's study of 21 advertisers.
- [Roku Ads Manager, Ad policies](https://help.ads.roku.com/en/articles/7134032-ad-policies), accessed November 2026. Platform policy for the self-serve product.
- [Google Ads Help, Cryptocurrencies and related products](https://support.google.com/adspolicy/answer/14009787?hl=en), accessed November 2026. Platform policy; varies by country.

## Related research

- [What is ad fraud? Bots, MFA sites, and controls](https://lowob.com/research/what-is-ad-fraud/)
- [Positioning for complex markets](https://lowob.com/research/positioning-for-complex-markets/)
- [The build order for media and publishing](https://lowob.com/research/the-build-order-for-media-and-publishing/)
- [What is a restricted category in advertising?](https://lowob.com/research/what-is-a-restricted-category/)

## Next Move

Pull last month's blocked-inventory report and sort it by the domains that were blocked most often. Check the top twenty by hand; every reputable publisher on the list is reach you are paying to lose.

[Start a conversation](https://lowob.com/contact/)
