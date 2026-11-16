# What Is Programmatic Advertising? A Plain-English Guide

Source: https://lowob.com/research/what-is-programmatic-advertising/
Publisher: lowob (https://lowob.com)
Published: 2026-02-10 · Updated: 2026-11-16
Function: Distribution

> Summary: Programmatic advertising is the buying and selling of ad space by software, through auctions that take place in the time it takes a page to load. That sentence covers most of what a buyer needs to know. The rest is vocabulary, and the vocabulary is where the money hides: the Association of National Advertisers (ANA) found in 2023 that only 36 cents of each dollar entering a buying platform reached a consumer. Programmatic is useful, but only to buyers who set standards before they spend.

## Key points

- Programmatic is software buying ad space impression by impression, usually through real-time auctions run by exchanges.
- The ANA's 2023 study of 21 advertisers found 29% of each dollar went to transaction costs and about 35% to unproductive media.
- The average campaign in that study ran on more than 40,000 websites; the ANA suggested 5,000 would be enough.
- IAB Tech Lab's ads.txt, sellers.json and SupplyChain object let buyers check who is selling, but they do not prove a human saw the ad.
- Three settings separate media from a bag of impressions: an inclusion list, a verification standard and an outcome beyond the click.

## What happens in the auction

A person opens a page or an app. The publisher has ad space to fill. Before the page finishes loading, the publisher's software announces the space to an exchange, along with what it knows: the page, the device, the location, an anonymous identifier, sometimes an audience segment. The format for that announcement is a bid request, and most of the industry writes it to IAB Tech Lab's OpenRTB protocol.

Buyers' software, watching the exchange, decides in a few milliseconds whether that impression matches what the buyer wants and what it is worth. Bids are placed. The highest wins. The ad is served. The person sees it, or does not, depending on whether it was on screen at all. The Media Rating Council (MRC) counts a display ad as viewable only when at least 50% of its pixels are in view for one continuous second, and a video ad for two.

This happens billions of times a day. No human looks at any individual impression. The ANA's study analysed 35.5 billion impressions from 21 advertisers over five months, which gives a sense of the scale a single buyer's log can reach.

## The parts, named

| Term | What it is | What to ask about it |
| --- | --- | --- |
| DSP, demand-side platform | The software buyers use to bid. It holds the budget, audience rules, creative and bidding logic. | What is the platform fee, and can we see log-level data? |
| SSP, supply-side platform | The software publishers use to offer space to buyers. | Which SSPs does our spend pass through, and what do they take? |
| Exchange | The marketplace where the two meet. In practice SSPs and exchanges are often the same companies. | Which exchanges are switched on by default? |
| Inventory | Ad space: display, video, native, connected television, audio, in-app. | Which formats are in the plan, and why? |
| Open exchange | Anyone can bid on anything. The cheapest inventory and the least accountable. | What share of spend is here? |
| Private marketplace, PMP | A publisher offers inventory to selected buyers, often at a fixed floor price. More expensive, more predictable. | Which publishers, and at what floor? |
| Programmatic guaranteed | A direct deal executed programmatically: a fixed volume at a fixed price. | Is the volume and price written down? |
| Verification | Third-party checks on whether an impression was viewable, served to a human, in the right country, and on a page that is safe and real. | Pre-bid or post-bid, and who is accredited by the MRC? |

The market has been moving away from the open exchange. The ANA's quarterly benchmark, run with TAG TrustNet and Fiducia, found private marketplaces made up more than 92% of median spend in the fourth quarter of 2025. That is a sign that larger buyers have learned what the open exchange costs them, not that the open exchange has improved.

## Who takes a cut

Between a buyer's dollar and the publisher's revenue sit the DSP, the exchange, the SSP, verification vendors, data providers and, if there is one, the agency. The two largest audits agree on the shape of the problem. ISBA and PwC's 2020 UK study found publishers received 51% of advertiser spend on average, and 15% could not be attributed to anyone, which ISBA called the "unknown delta". Their 2023 follow-up found the publisher share had risen to 65% and the unknown delta had fallen to 3%, on a better-matched sample.

The ANA's 2023 US study measured something stricter: not what reached the publisher, but what reached a consumer. Of each dollar entering a DSP, about 29 cents went to transaction costs and about 35 cents was lost to impressions that were non-viewable, unmeasurable, on made-for-advertising sites or served to non-human traffic. That left 36 cents. The ANA put the loss at roughly $22 billion a year across US open-web programmatic.

> The question for a buyer is not whether intermediaries take a cut. It is whether the buyer knows what each one charged and what the rest of the money bought.

That is not an argument against programmatic. It is an argument for buying it with standards.

## What it is good for, and what it is bad for

| Good for | Bad for |
| --- | --- |
| Reaching audiences the buyer defines, across many sites and apps, at a price set by competition rather than by rate card | Explaining anything: banner and short video are attention formats, not comprehension formats |
| Reaching categories the large social platforms restrict, because many exchanges carry what the walled gardens will not | Building trust from nothing |
| Testing cheaply, because budgets can be small and results arrive quickly | Producing honest numbers without effort |
| Retargeting people who have already visited | Any buy left on default settings |

The last row matters most. Left alone, a programmatic buy drifts toward the cheapest inventory the exchange can find, which is the inventory least likely to matter. The ANA found made-for-advertising sites took about 21% of impressions and 15% of spend in its sample, and that the average campaign ran across more than 40,000 websites. Nobody chooses 40,000 websites. A default chooses them.

For restricted categories the breadth is a genuine advantage. Our piece on [restricted categories](https://lowob.com/research/what-is-a-restricted-category/) explains why the platforms that refuse a fintech or crypto advertiser are not the whole market, and programmatic inventory is often where the rest of the market is reached. The same breadth means the buyer has to do the filtering the platform would otherwise have done.

## The three settings that matter most

**An inclusion list.** The sites and apps the buy may appear on, rather than a list of ones to avoid. The ANA called exclusion lists "largely ineffective" because new domains appear daily, and recommended inclusion lists instead.

**A verification standard.** What an impression must pass to be paid for: viewable to the MRC definition, free of invalid traffic, in the right geography, on a page the buyer would have chosen. Pre-bid filtering is better than post-bid reporting, because it stops the spend rather than describing it.

**An outcome further down the funnel than a click.** Clicks and views are cheap to fake and cheap to buy on poor inventory. A qualified lead, an application or a sale is not. Our piece on [demand generation economics](https://lowob.com/research/demand-generation-economics/) sets out how to price acquisition against an outcome the finance team will accept.

A buy with those three settings is media. A buy without them is a bag of impressions.

## What the transparency standards do and do not prove

IAB Tech Lab publishes three standards that help a buyer investigate a supply path. Publishers post an ads.txt file (or app-ads.txt for apps) listing the companies authorised to sell their inventory. Ad systems publish a sellers.json file identifying the sellers they represent. The SupplyChain object, carried in the OpenRTB bid request, lists every party that touched the sale. Together they let a buyer see whether the seller of an impression was authorised and how many intermediaries stood in between.

These standards are necessary and not sufficient. They show that a seller was authorised. They do not show that a genuine person was on the page, that the page was worth reaching, or that the impression produced a sale. That is why they sit alongside verification and outcome measurement rather than replacing them. Our companion pieces on [the middlemen](https://lowob.com/research/ad-network-vs-exchange-vs-dsp/) and on [which numbers to trust](https://lowob.com/research/programmatic-media-numbers-you-can-trust/) take each of those steps further.

## lowob takeaways

- **Know the parts.** DSP, SSP, exchange and verification each take a fee and each control a different part of the outcome.
- **Expect leakage.** Audits have found between a third and two-thirds of a dollar reaching something useful, depending on what is measured.
- **Set the three settings.** Inclusion list, verification standard and an outcome your business can validate.
- **Use the standards, then go further.** ads.txt and sellers.json check the seller; only verification and outcomes check the result.

## Common questions

### What is programmatic advertising in simple terms?

It is the automated buying and selling of digital ad space by software, usually through real-time auctions that run while a page or app loads. Buyers bid through a demand-side platform and publishers sell through a supply-side platform or exchange.

### How much of a programmatic ad budget reaches the publisher?

It depends on the study and the measure. ISBA and PwC found publishers received 51% in 2020 and 65% in their 2023 follow-up. The ANA's 2023 study found only 36 cents of each dollar reached a consumer once fees and unproductive impressions were removed.

### What is the difference between open exchange and private marketplace buying?

In the open exchange anyone can bid on any impression, which is cheapest and least accountable. A private marketplace is a publisher offering inventory to selected buyers, often at a floor price, which costs more and is more predictable.

### Does ads.txt stop ad fraud?

No. ads.txt lets a publisher list who is authorised to sell its inventory, which makes domain spoofing harder. It does not show whether a human saw the ad or whether the page was worth reaching.

## Sources and notes

- [ANA, Programmatic Media Supply Chain Transparency Study](https://ana.net/programmatic), December 2023, with later benchmark updates. Trade body study of log-level data from 21 advertisers; full report is members-only.
- [Katten, ANA Study Finds Over $20 Billion in Efficiency Gains Possible in Programmatic Advertising Spend](https://quickreads.ext.katten.com/post/102iufy/ana-study-finds-over-20-billion-in-efficiency-gains-possible-in-programmatic-a), 2023. Law firm summary of the ANA study; secondary source for the 40,000-site and MFA figures.
- [ANA, Q4 2025 Programmatic Transparency Benchmark](https://www.ana.net/content/show/id/pr-2026-02-programatic), 25 February 2026. Press release; benchmark built with TAG TrustNet and Fiducia; sample size not stated.
- [News Media Association, ISBA programmatic study: publishers receive half of advertiser spend](https://newsmediauk.org/blog/2020/05/07/isba-programmatic-study-publishers-receive-half-of-advertiser-spend/), 7 May 2020. Trade body summary of the ISBA and PwC study; 15 advertisers, UK only.
- [ISBA and PwC, Programmatic supply chain study II (summary)](https://www.isba.org.uk/system/files/media/documents/2023-01/ISBA%20%20PwC%20programmatic%20supply%20chain%20study%20II%20%28summary%29-%2018%20January%202023.pdf), January 2023. UK; data from September to October 2022; 58% impression match rate.
- [MarTech, IAB Tech Lab releases new specs for ad seller transparency: sellers.json and SupplyChain object](https://martech.org/iab-tech-lab-releases-new-specs-for-ad-seller-transparency-sellers-json-and-supplychain-object), 12 April 2019. Trade press report of the specifications at release.
- [ANA, Media Rating Council updates viewable ad impression measurement guidelines](https://ana.net/content/show/id/36327), 18 August 2015. Viewability is a minimum standard, not a measure of attention.

## Related research

- [Ad network vs ad exchange vs DSP: the middlemen](https://lowob.com/research/ad-network-vs-exchange-vs-dsp/)
- [You are buying media and you do not trust the numbers](https://lowob.com/research/programmatic-media-numbers-you-can-trust/)
- [Demand generation economics](https://lowob.com/research/demand-generation-economics/)
- [Campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/)
- [What is a restricted category in advertising?](https://lowob.com/research/what-is-a-restricted-category/)

## Next Move

Ask whoever runs your programmatic buy for three things this week: the inclusion list, the verification standard each impression must pass, and the outcome the buy optimises toward. If any of the three is missing, set it before the next invoice.

[Start a conversation](https://lowob.com/contact/)
