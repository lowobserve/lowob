# From funded account to lifetime value

Source: https://lowob.com/research/from-funded-account-to-lifetime-value/
Publisher: lowob (https://lowob.com)
Published: 2026-06-30 · Updated: 2026-11-16
Function: Revenue

> Summary: Revenue in fintech is a chain from acquisition to lifetime value, and the two leaks that break it are accounts that never fund and accounts that fund once and go dormant. Losses are the third line most models leave out: LexisNexis Risk Solutions estimates that each dollar of fraud loss now costs US financial services firms $5.75 in total, up from $4.00 in 2021. Build the chain per channel, not blended, because channels that cost the same to acquire through can retain very differently.

*This is an operating note on how to measure a business, not financial advice.*

## Key points

- Name each revenue line and the rate it earns per funded account. "Multiple revenue streams" without a per-account figure means they have not been measured.
- Onboarding is where the first leak starts: Signicat's 2022 survey found 68% of European consumers had abandoned a financial application in the previous year.
- Dormancy is hidden churn. Report funded accounts and active funded accounts as two numbers; the gap is the real retention problem.
- Channels differ in retention, not only cost: a study of a German bank found referred customers had an 18% lower hazard of leaving than comparable customers acquired otherwise.
- Allocate fraud, credit losses and compliance cost per funded account, by channel and cohort. A cheap channel with high losses is not cheap.

## Name your revenue model

Fintech revenue per funded account comes from a short list of sources. Which ones apply depends on the product, so name them and write down the rate each earns.

| Revenue line | Applies if you | What sets the rate | Watch for |
| --- | --- | --- | --- |
| Interchange | Issue cards | Network rates and, in the US, whether the issuing bank is capped | Rule changes; the issuing partner's size |
| Transaction or FX fees | Move money | Your pricing and the corridor | Competitor price cuts |
| Interest margin | Lend | Cost of funds and credit losses | Loss rate by cohort |
| Subscription | Sell software to businesses | Plan mix | Downgrades hidden by new sales |
| Interest on balances | Hold customer funds and earn on them | Rates and the share passed to customers | Rate cycle |

Interchange shows why the detail matters. In the US, Regulation II caps debit interchange for issuers with $10 billion or more in assets at 21 cents plus 5 basis points of the transaction, plus a 1 cent fraud-prevention adjustment. Issuers below $10 billion are exempt from the cap. The Federal Reserve proposed in 2023 to lower the cap to 14.4 cents plus 4.0 basis points and a 1.3 cent adjustment; we could not confirm whether a final rule had taken effect at the time of writing. A card programme's revenue per account therefore depends on which bank issues the card, and can change with a rule.

Most products have one primary line and one or two secondary lines. A deck that says "multiple revenue streams" without a per-account figure is hiding that the lines have not been measured. [Raising in a regulated category](https://lowob.com/research/raising-in-a-regulated-category/) made the same point to investors. This piece makes it to you.

## The unit economics chain

Every funded account travels a chain. Each link has a cost or a yield. The table is the whole model.

| Link | What you measure | Typical leak |
| --- | --- | --- |
| Acquire | Cost per sign-up, by channel | Paying for sign-ups that never verify |
| Verify and onboard | Cost per verified account, pass rate | Drop-off at identity checks, manual review cost |
| Activate | Share of verified accounts with a first funded transaction | Accounts that never fund |
| Earn | Monthly revenue per funded account | Low usage, wrong product mix |
| Retain | 30, 90 and 365-day retention of funded accounts | Dormancy after first use |
| Lifetime value | Revenue per funded account over its retained life, less losses and compliance cost | Unallocated losses hiding the real number |

Run the numbers per channel, not blended. [Distribute through whoever already holds the customer](https://lowob.com/research/distribute-through-whoever-already-holds-the-customer/) showed that a partner channel and a paid channel can have the same cost per funded account and very different retention. The academic evidence points the same way. Schmitt, Skiera and Van den Bulte tracked about 10,000 customers of a German bank over 33 months. Referred customers had a roughly 18% lower hazard of leaving, with 82.0% retained at the end against 79.2% for others, and were at least 16% more valuable over six years. A blended figure would have hidden that difference.

> If the board asks for a growth number, give them funded accounts that are still active. That is the only growth that compounds.

## The two leaks

The first leak is accounts that never fund. They passed verification, they cost money, and they sit at zero. The cause is usually friction between "approved" and "first transaction": a funding method that does not work with the customer's bank, a limit that is too low, or no reason to move money today.

The friction starts before approval. Signicat's 2022 survey of 7,600 consumers in 14 European countries found 68% had abandoned a financial application in the previous year, the highest since the study began in 2016. The most cited reason, at 38%, was lacking the right identity credentials. Average time before abandoning was just under 19 minutes. This is vendor research from an identity verification company, but it shows how much of the chain is lost before an account exists.

Fix: measure time from verification to first funding. Set a target in days. Anything beyond it gets a prompt, a person or a smaller first step.

The second leak is dormancy. An account funds once, does the thing it came for, and goes quiet. It still counts as a funded account. It earns nothing. This is the hidden churn in fintech, because nobody closes the account. They just stop.

Define dormant in your product's terms, for example no transaction in sixty days. Then report funded accounts and active funded accounts as two numbers. The gap between them is your real retention problem. Our explainer on [customer churn](https://lowob.com/research/what-is-customer-churn/) covers the formulas.

## Activation and habit

Activation is the first funded transaction. Habit is the tenth.

Design for both. Activation needs the smallest possible first step: a low minimum, a pre-filled funding route, a clear reason to act now. Habit needs a recurring reason: a payroll date, a monthly transfer, a card used for one specific category of spend.

Find the behaviour that predicts retention in your own data. It is usually a single action done twice within the first month. Build onboarding to get customers to that action, and measure the share who reach it.

Illustrative example: two channels, one acquisition cost

Decision
:   Shift budget from a paid social channel to an accounting-software partner, although both cost about the same per funded account.

Reason and owner
:   Cohort reporting by channel showed the partner's funded accounts were still active at 365 days at a much higher rate, with lower fraud losses per account. Owned by the head of growth, with finance confirming the loss allocation.

What changed
:   Lifetime value per funded account, net of losses and compliance cost, rose for the blended book, and payback shortened, without any change to the product.

Illustrative: a composite of a small-business payments product, built from patterns across engagements. No figures are from a real company.

## Cross-sell, losses and compliance

Once an account is funded and active, the main lever on lifetime value is the second product. A customer who trusts you with payments will consider you for savings, lending or FX, and the cost to sell that second product is a fraction of acquisition cost. Measure products per funded account, and track which first product leads to which second one. [Trust is the product](https://lowob.com/research/trust-is-the-product/) argued that trust is the product. Cross-sell is where that trust pays back.

Then the lines most founders leave out. Fraud and credit losses, allocated per funded account by channel and cohort. Compliance cost per account: monitoring, manual review, reporting. The LexisNexis True Cost of Fraud study, a 2025 survey of 507 risk and fraud executives, found each dollar of fraud cost US financial services firms $5.75, up from $4.00 in 2021, and that 30% of their fraud occurred at new account creation. That last figure ties losses directly to acquisition channels. A channel with cheap acquisition and high loss rates is not cheap. You only see it when losses sit in the same table as revenue.

## What to report monthly

[Stop reporting reach](https://lowob.com/research/stop-reporting-reach/) made the general case. In fintech, the monthly report has eight lines.

| Line | Cut by |
| --- | --- |
| Funded accounts, new and total active | Channel, cohort |
| Activation rate from verified to funded | Channel |
| Retention of funded accounts at 30, 90 and 365 days | Cohort and channel |
| Revenue per funded account | Product |
| Loss rate | Channel, cohort |
| Cost per funded account | Channel |
| Payback period | Channel |
| Products per funded account | First product |

Stop reporting downloads, sign-ups and total accounts. They are inputs, not outcomes, and they inflate every number downstream. Our [Commercial KPIs a board will trust](https://lowob.com/research/commercial-kpis-a-board-will-trust/) covers how to define each measure once and reconcile it to finance, and [LTV:CAC vs CAC payback](https://lowob.com/research/ltv-cac-vs-cac-payback/) covers which ratio to lead with.

## lowob takeaways

- **Name every revenue line with a rate per funded account.** Check which rules and partners set each rate.
- **Build the chain per channel.** Channels with the same acquisition cost can retain very differently.
- **Measure time from verification to first funding.** Set a target in days and intervene when it slips.
- **Report active funded accounts separately.** Dormancy is churn that nobody announces.
- **Put losses and compliance cost in the same table as revenue.** Allocate them by channel and cohort.

## Common questions

### What are the biggest revenue leaks in a fintech app?

Accounts that pass verification but never fund, and accounts that fund once and go dormant. Dormancy is hidden churn because nobody closes the account; they just stop.

### How do you calculate lifetime value for a fintech customer?

Revenue per funded account over its retained life, less fraud and credit losses and compliance cost. Run it per channel and cohort, not blended.

### What metrics should a fintech report to its board each month?

Funded accounts new and total active, activation rate from verified to funded, retention at 30, 90 and 365 days by cohort and channel, revenue per funded account, loss rate, cost per funded account by channel, payback by channel and products per funded account.

### How much does debit card interchange earn a US fintech?

It depends on the issuing bank. Regulation II caps debit interchange for issuers with $10 billion or more in assets at 21 cents plus 5 basis points and a 1 cent fraud adjustment; smaller issuers are exempt. A 2023 proposal would lower the cap.

## Sources and notes

- [Federal Reserve, Debit Card Interchange Fees and Routing, proposed rule](https://www.govinfo.gov/content/pkg/FR-2023-11-14/html/2023-24034.htm), Federal Register, 14 November 2023. Primary source for the current cap and the proposal; final status not confirmed for this article.
- [LexisNexis Risk Solutions, Every dollar lost to fraud costs North America's financial institutions $5](https://risk.lexisnexis.com/about-us/press-room/press-release/20250910-fraud-multiplier), 10 September 2025. Vendor research; survey of 507 executives by KS&R, April to May 2025.
- [The Fintech Times, 68% of European consumers abandon financial applications during onboarding, finds Signicat](https://thefintechtimes.com/68-of-european-consumers-abandon-financial-applications-during-onboarding-finds-signicat/), 1 April 2022. Vendor survey of 7,600 consumers in 14 countries; older than the other sources.
- [Schmitt, Skiera and Van den Bulte, Referral Programs and Customer Value](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Schmitt-Skiera-vandenBulte-2011-Referral-Programs-Customer-Value.pdf), Journal of Marketing, 2011. Academic study of one German bank, 2006 to 2008.
- The revenue table, unit economics chain, monthly report and example are **lowob**'s framework and illustration.

## Related research

- [LTV:CAC vs CAC payback](https://lowob.com/research/ltv-cac-vs-cac-payback/)
- [Commercial KPIs a board will trust](https://lowob.com/research/commercial-kpis-a-board-will-trust/)
- [The Build Order for financial services and fintech](https://lowob.com/research/the-build-order-for-financial-services-and-fintech/)
- [Raising in a regulated category](https://lowob.com/research/raising-in-a-regulated-category/)
- [In fintech, trust is the product and the channel is whoever already has it](https://lowob.com/research/fintech-gtm-trust-distribution/)

## Next Move

Pull last quarter's verified accounts and split them by channel into never funded, funded and active, and funded and dormant. If you cannot produce that split, make it the first report you build.

[Start a conversation](https://lowob.com/contact/)
