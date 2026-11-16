# What Is Intent Data, and How Reliable Is It?

Source: https://lowob.com/research/what-is-intent-data/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Growth

> Summary: Intent data records research behaviour, such as content consumption on publisher networks or visits to your own site, and infers which companies may be in market. Forrester finds most users report benefits but fall short of expectations, especially in sales. This explainer covers the types of intent data, how third-party signals are built, and how to test a provider before trusting it.

Intent data is behavioural evidence that an organisation is researching a topic, used to infer that it may be preparing to buy. It comes from your own channels, from partner sites and from third-party publisher networks. It is a useful timing signal at account level and a weak one at person level, so it should prioritise attention, not replace qualification.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What intent data means

Intent data is a record of research behaviour attributed to an organisation.

There are three common sources. First-party intent comes from your own properties: website visits, content downloads, pricing page views, product usage and email engagement. Second-party intent is another company's first-party data shared with you, typically a review site or marketplace reporting which accounts viewed your category. Third-party intent is aggregated from networks of publishers you have no relationship with, then resolved to companies and sold as a feed.

| Type | Where it comes from | Strength | Weakness |
| --- | --- | --- | --- |
| First-party | Your site, product, emails | You control it and know the context | Only sees buyers already aware of you |
| Second-party | Review sites, marketplaces, partners | Close to a buying decision | Narrow coverage, one source's audience |
| Third-party | Publisher co-ops and networks | Sees research before buyers find you | Inferred, account-level, hard to audit |

## How third-party intent is built

The mechanics explain most of the reliability questions, so they are worth understanding.

### Collection

Bombora, a third-party intent provider, collects through a data co-op of publishers, most specialising in B2B content. In a 2021 post it said the co-op captures "over 1 billion visits worth of data per day", uses consented data, mainly first-party cookies, and does not use bidstream data. Topics are assigned by analysing the content and metadata of the pages consumed.

### Identity resolution

Each visit then has to be attributed to a company. Bombora describes matching consented IP addresses, publisher logins with business email, partner identity graphs and behavioural modelling. Bombora itself acknowledged that the shift to remote work from spring 2020 made identity resolution harder across the industry, because home connections do not map to employers.

### Scoring

Most feeds report a change against a baseline rather than an absolute count. Documentation for Bombora's Company Surge score, published by data platform Ocean.io, describes a score from 60 to 100, where 60 or above signals a significant increase, calculated by comparing the past week's topic consumption with the prior 12 weeks, with new data added weekly. A relative score means a small company with little baseline activity can surge on a handful of visits, while a large company's genuine project can be diluted across thousands of employees.

## How reliable it is

Forrester's survey, summarised by principal analyst Brett Kahnke in October 2023, gives a balanced picture. Adoption is high and most users report gains, most often higher outbound response rates and better prospecting. But expectations outran results, particularly for sales and overall revenue growth. Only half used intent data for pipeline acceleration and fewer than a third for any customer-focused use. Many lacked reporting that tied intent to revenue.

The practical limits follow from the mechanics:

- **Account, not person.** Most third-party intent tells you a company is researching, not who. Forrester names this as the top execution challenge.
- **Research, not buying.** A surge can come from a competitor, a consultant or a student.
- **Topic taxonomy.** You choose from the provider's topic list. If your category is new, the topics may not describe it.
- **Overlap.** Using three providers that draw on similar publishers can triple-count the same signal.

## How to test a provider before trusting it

Run a test that compares accounts with and without the signal, rather than asking whether surging accounts ever converted.

1. **Fix the population.** Take accounts that already match your ICP, so intent is tested on top of fit.
2. **Split by signal.** Record which accounts surged on your chosen topics during a fixed window, and which did not.
3. **Treat them the same.** Give both groups the same outreach, or none, for 60 to 90 days.
4. **Compare outcomes.** Meetings booked, opportunities created and stage progression. If the surging group does not convert measurably better, the signal is not earning its cost for you.
5. **Record the decision.** Write down which topics you kept, why, and the review date. Signals and topics drift.

In **lowob**'s terms, intent data belongs in the context layer: rented wiring that helps a person decide where to look. The decision to contact an account, and the reason, belongs in your own record.

## lowob takeaways

- **Use intent for timing, not qualification.** It suggests when to look, not whether an account is a fit.
- **Expect account-level signals.** Plan how you will find the right people before you buy the feed.
- **Test against a control group.** Conversion of surging accounts alone proves nothing.
- **Watch for overlap.** More providers can mean the same signal counted several times.

## Sources and notes

- [Forrester, Intent Data Expectations Vs. Reality: What's Working, And Where Are The Gaps?](https://www.forrester.com/blogs/intent-data-expectations-vs-reality-whats-working-and-where-are-the-gaps), October 2023. Analyst blog summarising Forrester's Q1 2023 Global B2B Intent Data Survey; sample size not stated in the post.
- [Bombora, Company Surge intent data still works despite challenges like remote work and the cookieless future](https://bombora.com/blog/bomboras-company-surge-intent-data-still-works-despite-challenges-like-remote-work-and-the-cookieless-future/), October 2021. Vendor's own account of its collection and identity methods.
- [Ocean.io, Intent and Surge Score explained](https://support.ocean.io/en/articles/7039013-intent-and-surge-score-explained). Third-party product documentation describing Bombora's score scale and baseline; not Bombora's own documentation.

## Related research

- [Cold Outreach Works Better With a Real Reason to Talk](https://lowob.com/research/signal-based-outbound/)
- [What Is Account-Based Marketing?](https://lowob.com/research/what-is-account-based-marketing/)
- [Attribution vs Incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [How to Write an ICP](https://lowob.com/research/how-to-write-an-icp/)

## Next move

Pull the accounts that surged on your intent topics last quarter and the ICP accounts that did not. Compare how many in each group became opportunities, and decide whether the feed is earning its cost.

[Start a conversation](https://lowob.com/contact/)
