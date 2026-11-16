# What Is Ad Fraud? Bots, MFA Sites, and Controls

Source: https://lowob.com/research/what-is-ad-fraud/
Publisher: lowob (https://lowob.com)
Published: 2026-07-20 · Updated: 2026-11-16
Function: Distribution

> Summary: Ad fraud is any scheme that generates fake advertising activity so someone is paid for attention that never happened, and it hides inside good-looking reports. Estimates range from under 1% invalid traffic in TAG Certified channels to 22% of all online spend. Buy through inclusion lists with pre-bid verification, validate outcomes in your own systems and use partners not paid more when volume rises.

Ad fraud is any scheme that generates fake advertising activity (impressions, clicks, installs, views, leads) so that someone is paid for attention that never happened. It hides inside good-looking reports, because most of it is recorded as performance. How much a buyer loses depends on how it buys: TAG found invalid traffic under 1% in its certified US channels in 2024, while Juniper Research estimated 22% of all online ad spend was lost to fraud in 2023. Buy through inclusion lists with pre-bid verification, validate outcomes in your own systems, watch for numbers that are too clean, and use partners who are not paid more when volume rises.

## The main forms

| Form | How it works | Where it shows up | First control |
| --- | --- | --- | --- |
| Invalid traffic | Bots and scripts load pages, view ads and click; ranges from crude data-centre traffic to hijacked residential devices | Impressions, clicks, video views | Pre-bid verification from an MRC-accredited vendor |
| Made-for-advertising sites | Pages built only to host ads, filled with cheap or scraped content and fed with bought traffic | Low CPMs, high viewability, no outcomes | Inclusion lists |
| Domain and app spoofing | Low-quality inventory misrepresented in the auction as a premium publisher or app | Premium prices for junk | Buy only from sellers authorised in ads.txt and sellers.json |
| Ad stacking and pixel stuffing | Many ads layered in one slot, or an ad rendered in a one-pixel frame | Impressions nobody could have seen | Viewability measurement |
| Click and install fraud | Fake clicks, click injection that claims credit for organic installs, device farms | Cost-per-click and cost-per-install campaigns | Attribution windows and install validation |
| Lead and affiliate fraud | Fabricated form submissions, stolen identities, cookie stuffing, coupon-code abuse | Lead and affiliate programmes | Validation periods and checks in your own systems |

The Media Rating Council's invalid traffic guidelines, first issued in 2015, give the industry its working vocabulary. General invalid traffic (GIVT) is what routine, list-based filtering catches: known bots, spiders, crawlers and non-browser traffic. Sophisticated invalid traffic (SIVT) needs "advanced analytics, multipoint corroboration, human intervention" to find, and includes hijacked devices, adware, malware and misappropriated content. The distinction matters to a buyer because a vendor that filters only GIVT will report a clean campaign that is not clean.

Made-for-advertising inventory sits in an awkward place. The visitors may be human, so it is not always classed as invalid traffic, and the ANA counted it as a loss of media productivity alongside non-viewable and non-human impressions rather than as fraud. To the buyer the effect is the same: money spent on pages with no audience anyone wanted to reach. The ANA's 2023 study found such sites took about 21% of impressions and 15% of spend among the 21 advertisers it examined.

## How large the problem is

Estimates vary by method and vary widely, which is itself informative.

| Estimate | Figure | What it measures | Caveat |
| --- | --- | --- | --- |
| TAG, US Fraud Benchmark 2024 | Invalid traffic under 1% | Impressions in TAG Certified channels, January to June 2024 | Covers only channels that meet TAG's standards |
| TAG, October 2024 analysis | $10.8 billion saved in 2023 | Losses avoided by industry anti-fraud programmes | Industry body estimate |
| Juniper Research | $84 billion, 22% of online ad spend, in 2023 | Global losses across 45 countries | Analyst model; far above certified-channel rates |

The range is the point. A buyer that works only through certified, verified channels with inclusion lists is close to the bottom of it. A buyer on the open exchange with no verification is nearer the top. The number that matters is not the global one. It is the share of your own buy that verification rejected, and if you do not have that figure, assume it is not small.

> Fraud scales instantly, and real audiences do not. When a cheap channel suddenly grows, look before you celebrate.

Newer channels are not immune. Industry reporting on the IAB's 2026 video study cited DoubleVerify data showing CTV fraud schemes up 140% in the first quarter of 2026 against a year earlier, and the IAB found 56% of buyers who mistrust the open exchange for CTV cite fraud as a reason.

## How it is detected

Third-party verification vendors accredited by the MRC measure invalid traffic, viewability and placement quality, pre-bid where possible and post-bid otherwise. TAG's benchmark, run by The 614 Group, analysed all impressions from agency holding companies and their MRC-accredited vendors across display, video, mobile, in-app and CTV.

Platforms filter the crude forms themselves and report the invalid activity they caught; they are less forthcoming about what they missed. IAB Tech Lab's ads.txt, sellers.json and SupplyChain object make spoofing harder by letting buyers see whether the seller of an impression was authorised. Affiliate networks apply validation periods and fraud scoring to conversions.

The company's own analytics, compared with partner reports, is the final check. Outcomes a partner claims that the company's systems cannot see are the signal. Our piece on [lead source attribution](https://lowob.com/research/what-is-lead-source-attribution/) covers how to record where each lead came from in a way that can be reconciled against partner claims.

## The practical controls

Buy through inclusion lists, not blocklists. Require pre-bid verification on every programmatic buy and read the rejection report. Optimise toward outcomes further down the funnel than clicks or installs; fraud is cheapest at the top. Validate every paid outcome in your own systems before paying for it, with a delay long enough to catch reversals.

Watch for the tells: conversion rates too good, traffic from unexpected geographies, activity at unusual hours, a partner whose numbers never fluctuate. Cap any single partner or placement so that one bad source cannot swamp the rest. And pay attention when a cheap channel suddenly scales.

For affiliate and referral programmes the controls are contractual as well as technical: a validation window before commission is paid, the right to claw back reversed conversions, and a ban on brand-term bidding and coupon sites unless agreed. Our piece on [referral partners without leakage](https://lowob.com/research/referral-partners-without-leakage/) sets out where those programmes lose value and how to close each gap.

## Why the fee structure matters here too

Every intermediary paid on volume has a reduced incentive to reject volume. A desk paid a flat fee, with rejection rate as a reported metric, is structurally aligned with catching fraud. A partner paid a percentage of spend is not. The controls above work best when the person applying them is not paid less for applying them. Our piece on [programmatic numbers you can trust](https://lowob.com/research/programmatic-media-numbers-you-can-trust/) shows how to put the rejection rate on the monthly report.

## lowob takeaways

- **Know the forms.** Invalid traffic, MFA sites, spoofing, stacking, click and install fraud, and lead fraud need different controls.
- **Ask for SIVT, not just GIVT.** Routine filters miss the sophisticated forms.
- **Your rate depends on how you buy.** Certified, verified channels sit near 1%; unverified open buys can be far higher.
- **Validate outcomes yourself.** If your systems cannot see it, do not pay for it.
- **Align the fee.** A partner paid on volume is paid to accept fraud.

## Sources and notes

- [PR Newswire, Media Rating Council issues final version of invalid traffic detection and filtration guidelines addendum](https://prnewswire.com/news-releases/media-rating-council-mrc-issues-final-version-of-invalid-traffic-detection-and-filtration-guidelines-addendum-300166843.html), 27 October 2015. MRC release; the guidelines have been supplemented since.
- [PR Newswire, US ad industry extends success in fight against fraud with fourth straight year of sub-1% IVT in TAG Certified channels](https://prnewswire.com/news-releases/us-ad-industry-extends-success-in-fight-against-fraud-with-fourth-straight-year-of-sub-1-ivt-in-tag-certified-channels-302290249.html), 29 October 2024. Industry body report; covers certified channels only.
- [Search Engine Land, $84 billion of ad spend lost due to ad fraud in 2023](https://searchengineland.com/ad-spend-lost-ad-fraud-2023-432610), 2023. Reports a Juniper Research analyst estimate; figures for 2028 are inconsistent in the article.
- [Katten, ANA Study Finds Over $20 Billion in Efficiency Gains Possible in Programmatic Advertising Spend](https://quickreads.ext.katten.com/post/102iufy/ana-study-finds-over-20-billion-in-efficiency-gains-possible-in-programmatic-a), 2023. Law firm summary of the ANA's study of 21 advertisers.
- [Marketing Brew, ANA report finds that only around a third of ad dollars reach intended audiences](https://www.marketingbrew.com/stories/2023/12/05/ana-report-finds-that-only-around-a-third-of-ad-dollars-reach-intended-audiences), 5 December 2023. Trade press; shows how the ANA grouped MFA with non-viewable and non-human impressions.
- [PPC Land, IAB: 43% of CTV buyers doubt where their ads actually ran](https://ppc.land/iab-43-of-ctv-buyers-doubt-where-their-ads-actually-ran/), July 2026. Trade press summary of the IAB's 2026 video study; the DoubleVerify figure is vendor research.
- [MarTech, IAB Tech Lab releases new specs for ad seller transparency: sellers.json and SupplyChain object](https://martech.org/iab-tech-lab-releases-new-specs-for-ad-seller-transparency-sellers-json-and-supplychain-object), 12 April 2019. Trade press report of the specifications.

## Related research

- [You are buying media and you do not trust the numbers](https://lowob.com/research/programmatic-media-numbers-you-can-trust/)
- [Referral partners without leakage](https://lowob.com/research/referral-partners-without-leakage/)
- [What is lead source attribution?](https://lowob.com/research/what-is-lead-source-attribution/)
- [What is programmatic advertising? A plain-English guide](https://lowob.com/research/what-is-programmatic-advertising/)
- [Build an affiliate program without paying for coupon leaks](https://lowob.com/research/affiliate-program-asset-or-coupon-leak/)

## Next move

Ask your verification vendor for last month's rejection report split into general and sophisticated invalid traffic, by partner. Then pick the channel with the cleanest-looking numbers and check its claimed conversions against your own systems.

[Start a conversation](https://lowob.com/contact/)
