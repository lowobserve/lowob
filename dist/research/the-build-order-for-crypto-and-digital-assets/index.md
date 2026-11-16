# The Build Order for Crypto and Digital Assets

Source: https://lowob.com/research/the-build-order-for-crypto-and-digital-assets/
Publisher: lowob (https://lowob.com)
Published: 2026-09-30 · Updated: 2026-11-16
Function: Distribution

> Summary: Crypto and digital-asset firms run The Build Order as written, but Gateway 1 is stricter than anywhere else, because public posts can be marketing communications under MiCA and financial promotions in the UK. The commercial line is distribution: integrations, listings, grants, incentives and creator campaigns. The wall is signing keys, treasury wallets and non-public token information.

Crypto and digital-asset companies can run The Build Order as written. The commercial line is distribution: which integrations to pursue, which grants to fund, which creators to pay and how much to spend on incentives. Two things are different. First, Gateway 1 is stricter than in any other sector, because a post on X, Telegram or Discord can be a marketing communication under the EU's MiCA regulation or a financial promotion under UK law, and MiCA's transitional period for unauthorised providers ended on 1 July 2026. Second, the wall is physical as well as informational: signing keys, treasury wallets and deployment credentials must never be reachable by any agent. Chainalysis counted more than $3.4bn stolen from crypto services and users in 2025, with attacks on private key infrastructure and signing processes behind the largest losses.

*Figure: The Build Order, end to end. This piece maps the whole route.*

This is the fourth industry edition of The Build Order. In *The RFP nobody can answer yet* we said the order holds for crypto and digital assets, and that public statements make Gateway 1 strict. This piece explains why, sets out the sector's build order, and names the context that should never be connected to any AI system.

Crypto firms adopt tools early. Many already run community bots, AI-written threads and automated monitoring of on-chain activity. That makes it tempting to start at the far end of the build, with an agent that posts. The evidence in this sector argues for starting at the other end.

## Where the commercial line sits

For most crypto companies, the commercial line is distribution rather than a sales pipeline. A protocol grows when wallets, exchanges, fintechs and developers integrate it. An exchange grows through listings, market makers and partner channels. An infrastructure provider grows through API customers and ecosystem programmes. Our piece *Issuers, integrations and curators* describes the channel structure.

| Lens | What it looks like in crypto and digital assets |
| --- | --- |
| Commercial line | Integrations and partnerships, listings, grants, incentive and points programmes, creator and KOL campaigns |
| Store | Often a spreadsheet, Telegram groups and Notion; sometimes a CRM; on-chain data alongside |
| Outcome lag | Days for on-chain activity; 30 to 90 days for retained users and integrations that stay live |
| Who defends the decision | Head of growth or business development, the foundation's grants committee, finance |
| Main rules | MiCA in the EU; the UK financial promotions regime; US securities law, with market structure legislation unresolved |
| The wall | Signing keys, treasury and deployer wallets, and non-public information on listings, token releases or treasury moves |
| Gateway that bites | Gateway 1: public statements |

The decisions pass the test from *Where judgment arrives first*. A growth team decides weekly which integration partners to prioritise, which grant applications to fund, which creators to pay and how to set incentive rates. The decisions resemble each other and have an owner who must defend the spend.

The outcome lag is the sector's distinctive feature. On-chain data is public and fast: deposits, transactions, active addresses and volume arrive within days. That means the record can pay back sooner than in almost any other sector. It also means the obvious outcome measure is easy to inflate. Incentive programmes attract capital that leaves when rewards end, and campaign metrics can be bought. Our pieces *Community that survives the airdrop* and *Web3 KOL campaign measurement* cover how to choose outcomes that survive; the short version is to grade on retained users and integrations still live at 90 days, not on the first week.

## What the evidence says

**Security.** Chainalysis reported more than $3.4bn stolen in 2025, including $1.5bn from the February compromise of the Bybit exchange. It attributed at least $2.02bn to North Korean actors. Sophisticated attacks on private key infrastructure and signing processes drove the largest losses at centralised services. Personal wallets were compromised in 158,000 incidents affecting at least 80,000 victims. For an AI build, the lesson is direct: anything that can reach a signing process is part of the attack surface, and an agent with tool access is one more path to it. Our explainer *What is prompt injection?* explains why a model that reads untrusted text, such as Discord messages, cannot be trusted with privileged tools.

**EU marketing rules.** MiCA's Article 7 requires marketing communications for crypto-assets to be clearly identifiable as such, fair, clear and not misleading, and consistent with the white paper where one is required. They must state that a white paper has been published and carry a prescribed statement that the communication has not been reviewed or approved by any competent authority. ESMA's public statement of 23 June 2026 said that, from 1 July 2026, providers without MiCA authorisation must stop onboarding new EU clients and stop marketing and solicitation. Serving EU clients from outside the EU is permitted only on the client's own exclusive initiative.

**UK promotions.** Since 8 October 2023 every firm marketing crypto-assets to UK consumers, including overseas firms, must use one of four permitted routes, apply prescribed risk warnings and a 24-hour cooling-off period, and keep promotions fair, clear and not misleading. The FCA describes the regime as technology neutral and applying to social media. A promotion outside the permitted routes is a criminal offence under section 21 of FSMA, carrying up to two years' imprisonment, an unlimited fine or both.

**US position.** The SEC's 2022 settlement with Kim Kardashian, who was paid $250,000 to promote a token on Instagram without disclosing the payment and agreed to pay $1.26m, remains the reference case on undisclosed paid promotion. Federal market structure law is unresolved. Orrick reported that the CLARITY Act passed the House in July 2025, then failed a Senate cloture vote 49 to 50 on 15 September 2026. The SEC proposed its own Regulation Crypto Assets in August 2026, and the SEC and CFTC issued a joint interpretation setting out a crypto-asset taxonomy in March 2026. The GENIUS Act of 2025 covers payment stablecoins.

Taken together, a crypto firm's public statements are regulated in every major market, its keys are the most targeted assets in the sector, and the rules are still moving. That is the setting for the build.

## The build order, stage by stage

| Stage | What it means in crypto and digital assets | Main risk |
| --- | --- | --- |
| Gateway 0 | Owner, suite and a real CRM replacing the spreadsheet; a security lead as data-access approver | Telegram stays the system of record |
| Tooling | Seats for business development, growth and partnerships; capture of partner chats into the CRM where terms allow | Personal accounts and bots with broad permissions |
| Context | CRM, partner and grant pipelines, approved public materials, on-chain analytics read-only | A connector with any path to signing or deployment |
| Record | Integration priorities, grants, incentive rates and creator deals, each with expected 90-day outcome | Grading on first-week volume |
| Reasoning | A first agent that prepares partner briefs and triages grant applications into a queue | An agent that reads community channels and holds tools |
| Gateway 1 | Nothing public posts without a named person; anything on price, yield, listings or rewards gets compliance review | Community bots that reply on their own |
| Gateway 2 | Value at stake on each grant, incentive or creator deal; retained outcome written back | Mercenary capital counted as growth |
| Gateway 3 | Extension to treasury reporting and operations, read-only, under security sign-off | Read access becoming write access |

**Gateway 0.** The three standing decisions apply, with a sector twist on the third. Many crypto teams have no CRM; relationships live in Telegram groups and one person's head. Choosing a CRM people will keep current is the most important Gateway 0 decision here, and the build should budget for moving partner history into it. The data-access approver is the security lead, not the head of growth. Part 3, *Gateway 0*, sets out the rest.

**Tooling.** Seats for the business development, growth and partnerships teams. Community bots are tooling too, and should be inventoried: what each can read, what it can post, and under whose account.

**Context.** Connect the CRM, the integration and grant pipelines, the library of approved public materials (white paper, documentation, approved announcements) and read-only on-chain analytics. Read-only means a data provider or indexer, never a node or wallet connection that can sign.

**Record.** The first decision classes are integration priorities and grants. Each record holds the reason, the owner, the value at stake and the expected outcome at 90 days: for an integration, live and carrying activity; for a grant, the milestone delivered. Incentive rates and creator deals follow, with the same 90-day check. Part 9 lists the fields.

**Reasoning.** The first agent prepares business development staff for partner calls and triages grant applications against the programme's criteria, with a person deciding. It does not read public community channels while holding any tool beyond drafting. Part 7, *The first AI agent should be boring*, makes the general case.

## Gateway 1: why public statements make it strict

*Figure: Autonomy is a dial, not a switch. Client-facing work stays at level 2 or below until there is evidence to move it.*

The autonomy dial runs from 0 (answer) to 4 (act alone). In most sectors a first agent sits at 1, drafting. In crypto, anything that faces the public should stay at 1 for longer than elsewhere, and some categories should never move past it.

Three features of the sector make Gateway 1 strict:

- **Every channel is a promotion channel.** A post in a project's Telegram, a reply on X or an announcement in Discord may be a marketing communication under MiCA or a financial promotion in the UK. Under MiCA it must be consistent with the white paper. An agent that improvises a description of token utility or rewards can breach that in a sentence.
- **Statements move prices.** A drafted post that hints at a listing, a token release or a partnership before it is public can move a market. Information of that kind is treated as inside information under MiCA's market abuse rules.
- **Paid promotion must be disclosed.** The SEC's Kardashian settlement and the FCA's guidance to influencers both turn on undisclosed or unauthorised promotion. An agent drafting creator briefs must include the disclosure terms every time.

The rules for this sector are tighter than "nothing sends without a person". Nothing posts publicly without a named person. Anything that mentions price, yield, rewards, listings or token releases passes compliance review as well. Community support agents may answer from approved documentation only, and hand off anything about funds, rewards or eligibility to a person. Part 8, *Nothing sends without a person*, explains how to log approvals.

> In crypto, every public sentence is potentially a regulated communication, and every tool an agent holds is potentially a path to the keys.

## The wall: keys and non-public information

Two categories must never be connected to any AI system, at any gateway.

**Keys and the processes that use them.** Private keys, seed phrases, multisig signing, treasury and deployer wallets, and admin credentials for contracts and exchanges. No agent should hold credentials that can sign, deploy, move funds or change contract parameters, and no agent that reads untrusted input should share an environment with one that can. Chainalysis's account of 2025 losses is the reason.

**Non-public information.** Listing negotiations, vesting and token release schedules not yet published, treasury moves, market maker terms and security incidents under investigation. These stay with named people. The decision record can note that a listing decision was made and by whom, but its details stay out of the commercial context until they are public.

The wall is recorded: every connector has an entry naming what it reads, who approved it, and confirming it has no path to signing or deployment.

## Gateways 2 and 3

**Gateway 2.** Most crypto commercial decisions spend money directly: grant amounts, incentive budgets, creator fees. Put the figure on each record and write back the retained outcome at 90 days. The first uncomfortable finding is usually that a large share of incentive spend bought activity that left when rewards ended. Our piece *Protocol revenue, fees, real yield and what to report* explains which numbers to trust.

**Gateway 3.** The record extends to treasury reporting and operations, read-only and under the security lead's sign-off. Read access to treasury balances for reporting is reasonable. Any path from that access to a signing process is not.

Illustrative example: an infrastructure provider records its grants and locks down its bots

Decision
:   Record every integration priority and ecosystem grant with an expected 90-day outcome, and restrict the community bot to approved documentation with no tools.

Reason and owner
:   The team was paying grants and incentives on first-week activity and could not say which integrations were still live a quarter later. Its community bot could post announcements under the project's account. Owned by the head of business development, with the security lead as data-access approver.

What changed
:   The first agent prepares partner briefs and triages grant applications into a queue. Public posts need a named approver, and any mention of rewards, listings or token releases also goes to compliance. After one quarter, the 90-day checks showed fewer than half of funded integrations still carrying activity, and the grants committee moved to milestone-based payments.

Illustrative: a composite of a crypto infrastructure company of around 90 people selling APIs to exchanges and fintechs, built from patterns across engagements.

## lowob takeaways

- **Start with distribution decisions.** Integrations, grants, incentives and creator deals are frequent, costly and quickly graded.
- **Grade at 90 days, not seven.** On-chain outcomes are fast, but first-week numbers are the easiest to inflate.
- **Make Gateway 1 stricter than elsewhere.** Nothing posts without a named person; price, yield, rewards, listings and token releases get compliance review.
- **Keep keys out of reach.** No agent holds signing, deployment or treasury credentials, at any gateway.
- **Treat non-public token information as walled.** Listings, token releases and treasury moves stay with named people.

Gateway card

### Before a crypto company connects its first agent

- A CRM chosen and partner history moved out of Telegram and spreadsheets
- A security lead named as data-access approver, separate from the build owner
- An inventory of bots and agents: what each reads, posts and holds
- Written confirmation that no connector has a path to signing, deployment or treasury movement
- Integration and grant decisions recorded with a value and a 90-day expected outcome
- A public-statement rule: named approver for every post, compliance review for price, yield, rewards, listings and token releases

## Sources and notes

- [Chainalysis, 2025 crypto theft reaches $3.4 billion](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/), 18 December 2025. Vendor research from a blockchain analytics company; figures cover January to early December 2025.
- [ESMA, Interactive single rulebook: MiCA Article 7, marketing communications](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-7-marketing-communications). Regulation text; Articles 29 and 53 set parallel rules for other token types.
- [ESMA, Public statement on the end of the MiCA transitional period](https://www.esma.europa.eu/sites/default/files/2026-06/ESMA75-113276571-1710_Public_Statement_MiCA_transitional_period_ends.pdf), 23 June 2026. Supervisory statement; national authorities apply it.
- [Financial Conduct Authority, Cryptoasset firms marketing to UK consumers](https://www.fca.org.uk/firms/cryptoassets/marketing-uk-consumers). Regulator guidance; the UK's wider crypto regime is still being implemented.
- [US Securities and Exchange Commission, SEC charges Kim Kardashian for unlawfully touting crypto security](https://www.sec.gov/news/press-release/2022-183), 3 October 2022. Settled without admitting or denying findings.
- [Orrick, The CLARITY Act stalls in the Senate](https://www.orrick.com/en/Insights/2026/10/The-CLARITY-Act-Stalls-in-the-Senate-Whats-Next-for-Digital-Asset-Regulation), October 2026. Law firm summary; US market structure rules are still in proposal.
- The infrastructure provider is a composite drawn from patterns across **lowob**'s engagements; the 90-day finding describes a recurring pattern, not a measured study.

## Related research

- [Nothing sends without a person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Community that survives the airdrop](https://lowob.com/research/community-that-survives-the-airdrop/)
- [Web3 KOL campaign measurement](https://lowob.com/research/web3-kol-campaign-measurement/)
- [Issuers, integrations and curators](https://lowob.com/research/issuers-integrations-and-curators/)
- [What is prompt injection?](https://lowob.com/research/what-is-prompt-injection/)

## Next move

List every bot and agent that can post under your project's name, and every credential each one holds. If any list contains a key that can sign, remove it this week, before any new tool is added.

[Start a conversation](https://lowob.com/contact/)
