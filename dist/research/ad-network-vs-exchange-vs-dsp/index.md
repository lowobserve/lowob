# Ad Network vs Ad Exchange vs DSP: The Middlemen

Source: https://lowob.com/research/ad-network-vs-exchange-vs-dsp/
Publisher: lowob (https://lowob.com)
Published: 2026-07-09 · Updated: 2026-11-16
Function: Distribution

> Summary: Ad networks bundle and resell publisher inventory with little visibility, ad exchanges run real-time auctions, and DSPs are the software buyers use to bid. The DSP is where control lives. Audits by ISBA, PwC and the ANA show how much of a dollar each layer absorbs, and IAB Tech Lab standards show how to check who is selling.

Ad networks bundle and resell publisher inventory with little visibility, ad exchanges run real-time auctions, and demand-side platforms (DSPs) are the software buyers use to bid. The DSP is where control lives. Audits show what is at stake: ISBA and PwC found UK publishers received 51% of advertiser spend in 2020, and the ANA found 29% of each US programmatic dollar went to transaction costs in 2023. Buyers should know which intermediary they are paying, what it charges and what it lets them see.

Between a company's media budget and the page where its ad appears sit several intermediaries with overlapping names. Three of them account for most of the confusion: ad networks, ad exchanges and demand-side platforms. Knowing which one you are dealing with tells you what you are paying for and what you can control. Our [plain-English guide to programmatic](https://lowob.com/research/what-is-programmatic-advertising/) covers the auction itself; this piece is about the companies in it.

## Ad networks

An ad network aggregates inventory from many publishers, packages it and sells it to advertisers. The network buys or represents the publishers' ad space, often at a negotiated rate, and resells it, usually as bundles by category, audience or format. The advertiser deals with the network's sales team or interface; the network decides where the ads run within the bundle.

Networks are the oldest model and the simplest to buy from. Their weakness is opacity: the advertiser rarely sees exactly which sites ran the ads, at what cost to the network, or how much of the budget reached the publisher. The network's margin is the difference between what it charges and what it pays, and the advertiser does not see it. The ANA's 2023 study told advertisers to establish whether their agency was buying media as their agent or selling them inventory as a principal, because the incentives differ. A network is usually the second kind: it sells inventory it controls, at a price it sets.

Networks still matter, particularly in specialised verticals and in regions and categories the large platforms do not serve well, including some restricted categories that vertical networks were built to carry.

## Ad exchanges

An ad exchange is a marketplace where ad impressions are auctioned in real time. Publishers, usually through a supply-side platform (SSP), offer impressions to the exchange; buyers, through DSPs, bid on them. The exchange runs the auction and takes a fee, typically a percentage of the winning bid.

Advertisers do not usually deal with an exchange directly. They reach it through a DSP. The exchange is infrastructure, and the practical questions about it are which exchanges a DSP is connected to, what fees each charges, and how well each polices fraud and low-quality inventory. The same impression is often offered through several exchanges at once, so a buyer can end up bidding against itself for one person's attention through different routes. Reducing those duplicate routes is what the industry calls supply path optimisation.

## Demand-side platforms

A DSP is the software an advertiser or its agency uses to buy programmatically: to define audiences, set budgets and bid rules, upload creative, connect to exchanges, apply verification and report. The DSP charges a platform fee, typically a percentage of media spent through it, plus fees for data and verification features.

The DSP is where control lives. Inclusion lists, verification standards, frequency caps and optimisation goals are set here. A buyer who does not set them accepts the DSP's defaults, and the defaults favour volume. The ANA found the average campaign in its study ran across more than 40,000 websites, and recommended that advertisers negotiate access to log-level data so they could see where the money went.

|  | Ad network | Ad exchange | DSP |
| --- | --- | --- | --- |
| What it does | Packages and resells publisher inventory | Runs real-time auctions between sellers and buyers | Lets a buyer bid, target, verify and report across exchanges |
| Who uses it | Advertiser buys from it | Reached through SSPs and DSPs | Advertiser or agency operates it |
| How it is paid | Margin between buy and sell price | Fee on the winning bid | Percentage of media, plus data and feature fees |
| What the buyer sees | Usually a bundle, often without site-level detail | Little, directly | Placements, bids and costs, if the contract allows log-level data |
| Where control sits | With the network | With the auction rules | With whoever sets the DSP's settings |

## The money, end to end

An advertiser's dollar spent programmatically passes through the DSP fee, data fees, verification fees, the exchange fee, the SSP fee and, if there is one, an agency fee, before reaching the publisher. ISBA and PwC's 2020 UK study matched impressions end to end for 15 advertisers and 12 publishers and found publishers received 51% of advertiser spend on average. A further 15%, roughly a third of all supply chain costs, could not be attributed to any party. ISBA called it the "unknown delta".

The picture has improved where buyers have pushed. The second ISBA and PwC study, on data from late 2022, found the publisher share had risen to 65% and the unknown delta had fallen to 3%, with 58% of impressions matched. The ANA's 2023 US study, of 21 advertisers, put transaction costs at about 29% of each dollar entering a DSP. Each intermediary is providing a service. The question for a buyer is whether it knows what each one charged.

> If a partner cannot show you the placements, the fees and the rejection rate, you do not yet know which kind of middleman you are paying.

## How to check who is selling

IAB Tech Lab has published three standards that make the chain visible. Publishers post an ads.txt file listing who is authorised to sell their inventory. In April 2019 the Tech Lab released sellers.json, published by ad systems to identify the sellers they represent, and the SupplyChain object, which travels inside the OpenRTB bid request and lists every party that touched the sale. A buyer can use the three together to see whether the seller of an impression was authorised and how many resellers stood between the buyer and the publisher.

Most DSPs can filter on these signals. Asking for it is cheap. A buy restricted to impressions sold directly by the publisher, or through one authorised reseller, removes much of the inventory where fees stack up and nobody can say who took what.

## Which one you are dealing with

| What you see | What you are dealing with | The question to ask |
| --- | --- | --- |
| A salesperson sells a bundle of sites and you never see the auction | A network | Which sites ran the ads, and what did the network pay for them? |
| You or your desk operate software that bids on impressions across many sources | A DSP, with exchanges behind it | What are the fees per layer, and do we get log-level data? |
| A partner "has access to premium inventory" but cannot show placements, fees or rejections | Unknown | Find out before the next invoice |

Networks bundle and resell inventory opaquely; exchanges run the auctions; DSPs are the software buyers use to bid, and where control lives. Know which one you are paying, what it charges, and what it lets you see. The same logic applies to how the desk itself is paid: our piece on [percentage-of-spend media fees](https://lowob.com/research/percent-of-spend-media-fees/) explains why a fee tied to volume works against rejection. For a wider view of how intermediary costs sit inside acquisition economics, see [demand generation economics](https://lowob.com/research/demand-generation-economics/) and the board-level discipline in [commercial KPIs a board will trust](https://lowob.com/research/commercial-kpis-a-board-will-trust/).

## lowob takeaways

- **Name the middleman.** Network, exchange and DSP are paid differently and show you different things.
- **Control lives in the DSP.** Set inclusion lists, verification, caps and goals, or accept defaults that favour volume.
- **Ask for the fee per layer.** Audits have traced between 3% and 15% of spend to nobody, depending on how hard buyers pushed.
- **Use the supply chain standards.** ads.txt, sellers.json and the SupplyChain object show who sold each impression.

## Sources and notes

- [News Media Association, ISBA programmatic study: publishers receive half of advertiser spend](https://newsmediauk.org/blog/2020/05/07/isba-programmatic-study-publishers-receive-half-of-advertiser-spend/), 7 May 2020. Trade body summary; 15 advertisers, 12 publishers, UK only.
- [ISBA and PwC, Programmatic supply chain study II (summary)](https://www.isba.org.uk/system/files/media/documents/2023-01/ISBA%20%20PwC%20programmatic%20supply%20chain%20study%20II%20%28summary%29-%2018%20January%202023.pdf), January 2023. UK; two months of 2022 data; 58% of impressions matched.
- [ANA, Programmatic Media Supply Chain Transparency Study](https://ana.net/programmatic), December 2023. Trade body study of 21 advertisers; full report members-only.
- [Katten, ANA Study Finds Over $20 Billion in Efficiency Gains Possible in Programmatic Advertising Spend](https://quickreads.ext.katten.com/post/102iufy/ana-study-finds-over-20-billion-in-efficiency-gains-possible-in-programmatic-a), 2023. Law firm summary of the ANA study and its recommendations.
- [MarTech, IAB Tech Lab releases new specs for ad seller transparency: sellers.json and SupplyChain object](https://martech.org/iab-tech-lab-releases-new-specs-for-ad-seller-transparency-sellers-json-and-supplychain-object), 12 April 2019. Trade press report of the specifications at release.

## Related research

- [What is programmatic advertising? A plain-English guide](https://lowob.com/research/what-is-programmatic-advertising/)
- [Percent of spend is a conflict of interest with a logo on it](https://lowob.com/research/percent-of-spend-media-fees/)
- [Demand generation economics](https://lowob.com/research/demand-generation-economics/)
- [Commercial KPIs a board will trust](https://lowob.com/research/commercial-kpis-a-board-will-trust/)

## Next move

Take last month's programmatic invoice and list every layer between your budget and the publisher: DSP, data, verification, exchange, SSP, agency. Ask your partner to fill in the fee for each. Any blank is the next conversation.

[Start a conversation](https://lowob.com/contact/)
