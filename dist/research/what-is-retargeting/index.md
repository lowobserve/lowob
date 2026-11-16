# What Is Retargeting, and Why It Overclaims Credit

Source: https://lowob.com/research/what-is-retargeting/
Publisher: lowob (https://lowob.com)
Published: 2026-06-25 · Updated: 2026-11-16
Function: Distribution

> Summary: Retargeting, also called remarketing, is advertising shown to people who have already visited a website, used an app or otherwise identified themselves to a company. It is cheap, it reports extraordinary results, and it is the channel most likely to be taking credit for customers who were coming anyway. Controlled experiments find its real effect is positive but modest: in one retailer's campaign, retargeting lifted purchases by about 11%, while an attribution report would have credited it with every purchase among the people it reached. Exclude converters, cap frequency, shorten windows, test with a holdout, and remember that email is retargeting you own.

## Key points

- Retargeting reaches people already likely to convert, so attribution credits it with conversions that would have happened anyway.
- A randomised test of an online retailer's retargeting found purchases up about 11% and site visits up about 17%.
- Lambrecht and Tucker found ads showing the exact product a person viewed performed worse, on average, than generic brand ads.
- eBay's paid search experiments found frequent buyers largely unaffected by ads, yet they received most of the spend.
- A random holdout is the cheapest honest test: if held-out people convert nearly as well, the channel is observing, not causing.

## How it works

A visitor arrives. A pixel or server-side event records the visit and adds the visitor to an audience. Ad platforms then show that audience the company's ads as they move around the web and social platforms. Audiences can be segmented: everyone who visited, people who viewed pricing, people who started an application and stopped, existing customers to be excluded or upsold.

The identity layer underneath has been shifting. Other browsers had already moved away from third-party cookies, and Google spent years planning to remove them from Chrome. In April 2025 Google announced it would keep its current approach to third-party cookies in Chrome and would not introduce a standalone prompt, and the wider Privacy Sandbox effort was later wound down. Retargeting has moved toward audiences built from first-party data anyway: email lists matched to platforms, logged-in users and platform-internal signals, and toward the walled gardens where the platform can recognise its own users without cookies. Our explainer on [intent data versus first-party data](https://lowob.com/research/intent-data-vs-first-party-data/) covers why the first-party route is more reliable regardless of what browsers do.

## What it is good for

Bringing back people who were interrupted: an application abandoned at the identity step, a cart left, a trial that stalled. Reminding people who compared options and left. Reaching existing customers with something new. Sequencing a message: a visitor who read an explainer sees proof next, then an offer.

For considered purchases, which describes most financial and business products, some of that is valuable. People do return, and a well-timed reminder with the right message does move some of them. The evidence supports timing the message to the person's stage. Lambrecht and Tucker's field experiment with an online travel firm, published in the Journal of Marketing Research in 2013, found dynamic retargeted ads showing the exact products a person had viewed were, on average, less effective than generic brand ads. The exception was people whose preferences had narrowed, for example those who had visited review sites: for them, specific ads stopped underperforming.

## Why the reported results are inflated

Retargeting reaches people who already know the company and were already likely to convert. Under any attribution model that counts a view or a click before conversion, retargeting is credited with a large share of conversions that would have happened without it. The channel looks like the best performer in the account because it stands closest to the checkout.

The experimental evidence is consistent: the true contribution is real, and a fraction of the attributed one.

| Study | Setting | Finding |
| --- | --- | --- |
| Johnson, Lewis and Nubbemeyer, Journal of Marketing Research, 2017 | Randomised test of an online retailer's display retargeting | Site visits up about 17%, purchases up about 11% |
| Lambrecht and Tucker, Journal of Marketing Research, 2013 | Field experiment at an online travel firm | Product-specific retargeting less effective on average than generic ads |
| Blake, Nosko and Tadelis, Econometrica, 2015 | Large-scale paid search experiments at eBay | Returns a fraction of non-experimental estimates; frequent buyers largely unaffected yet received most spend |

The eBay study is about search rather than retargeting, but the mechanism is the same: ads aimed at people who were already going to buy get credit for the purchase. A simple calculation shows the scale. If retargeting lifts purchases by 11% among the people it reaches, then of every 111 purchases in that group, about 11 were caused by the ads. An attribution report that credits retargeting with all 111 overstates its contribution roughly tenfold.

> This is not an argument against retargeting. It is an argument against believing its dashboard.

Our pieces on [attribution versus incrementality](https://lowob.com/research/attribution-vs-incrementality/) and [lead source attribution](https://lowob.com/research/what-is-lead-source-attribution/) cover why click-based credit and causal effect diverge, and how to record sources so the gap can be seen.

## How to run it without paying twice

| Setting | What to do | Why |
| --- | --- | --- |
| Exclusions | Exclude people who already converted, unless the message is specifically for them | Paying to show an ad to someone who already bought is the most common and most avoidable waste |
| Frequency | Cap it, start low, and test a higher cap rather than assuming more is better | Following a person around the internet with the same ad for a month annoys them |
| Segments | Segment by intent and message accordingly | An abandoned application needs a different message from a first visit, as Lambrecht and Tucker's results suggest |
| Window | Set a short window and extend it only if a test shows the later days add anything | Audiences that stretch to ninety days mostly pay for people who have moved on or will return anyway |
| Holdout | Hold out a random share of the audience and compare conversion rates | If the held-out group converts nearly as well, the budget belongs elsewhere |

The holdout is the one that matters most, and it is cheap. Many ad platforms offer lift or holdout tools, and a company can create one itself by randomly excluding a share of its own audience list. Our piece on [campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/) sets out how large the holdout needs to be at the volumes a mid-size company sees, and how to write the decision rule before the test starts.

## For restricted categories

Retargeting depends on the platforms that carry the category. Where the large platforms will not run the ads, retargeting through them is not available, and the company relies on programmatic retargeting against its own audiences and on email, which is retargeting the company owns. That is a reasonable place to be: email reaches the same people at a fraction of the cost and does not need anyone's approval. Our pieces on [owned channels](https://lowob.com/research/owned-channels-email-content/) and [email deliverability](https://lowob.com/research/email-deliverability-explained/) cover how to make that channel carry the job.

Illustrative example: the holdout that moved the budget

Decision
:   Hold out a random 20% of the retargeting audience for six weeks and compare application completion rates.

Reason and owner
:   Retargeting was reported as the account's best channel by cost per application, and the growth lead was asked to double it. Owned by the growth lead, with finance agreeing the decision rule in advance.

What changed
:   The held-out group completed applications at a rate close to the exposed group. The retargeting window was cut from 60 days to 7, converters were excluded, and the freed budget moved to a prospecting test.

Illustrative: a composite of a mid-size consumer lending company, built from patterns across engagements.

## lowob takeaways

- **Retargeting stands closest to the checkout.** That is why its dashboard looks best.
- **Its real effect is positive and modest.** One randomised study found about 11% more purchases, not all of them.
- **Match the message to the stage.** Product-specific ads work better once preferences have narrowed.
- **Exclude, cap and shorten.** Converters, frequency and windows are where the waste sits.
- **Test with a holdout.** It is the cheapest honest measure available.

## Common questions

### What is retargeting?

Advertising shown to people who have already visited a website, used an app or otherwise identified themselves to a company. It is also called remarketing.

### Why does retargeting look so effective in reports?

It reaches people already likely to convert, so attribution models credit it with conversions that would have happened anyway. A randomised study of one retailer's retargeting found purchases rose about 11%, far less than attribution would claim.

### How do I test whether retargeting actually works?

Hold out a random share of the audience and compare conversion rates. If the held-out group converts nearly as well, the channel is observing, not causing.

### Does retargeting still work without third-party cookies?

Yes, through first-party data such as email lists matched to platforms and logged-in users. Google decided in April 2025 to keep third-party cookies in Chrome, but other browsers restrict them, so first-party audiences are the more durable route.

## Sources and notes

- [London Business School, When does retargeting work? Information specificity in online advertising](https://www.london.edu/faculty-and-research/academic-research/w/when-does-retargeting-work-information-specificity-in-online-adver), Journal of Marketing Research, 2013. Peer-reviewed field experiment at one travel firm; older data.
- [NBER conference paper, Ghost Ads: Improving the Economics of Measuring Ad Effectiveness](https://conference.nber.org/conf_papers/f84173.pdf), February 2016 version; published in the Journal of Marketing Research, 2017. One retailer's campaign; working paper version opened.
- [NBER, Consumer Heterogeneity and Paid Search Effectiveness: A Large Scale Field Experiment](https://www.nber.org/papers/w20171), 2014; published in Econometrica, 2015. Paid search at eBay, not retargeting; the mechanism is analogous.
- [Google Privacy Sandbox, Next steps for Privacy Sandbox and tracking protections in Chrome](https://privacysandbox.google.com/blog/privacy-sandbox-next-steps), 22 April 2025. Company announcement.
- [Center for Democracy and Technology, Google's Privacy Sandbox is dead](https://cdt.org/insights/googles-privacy-sandbox-is-dead-the-fight-for-real-online-privacy-continues/), 9 June 2025. Advocacy group commentary on the decision.
- The calculation and the example are **lowob**'s illustration.

## Related research

- [Attribution vs incrementality: what did your marketing actually cause?](https://lowob.com/research/attribution-vs-incrementality/)
- [Campaign testing that reaches a decision](https://lowob.com/research/campaign-testing-that-reaches-a-decision/)
- [What is lead source attribution?](https://lowob.com/research/what-is-lead-source-attribution/)
- [Intent data vs first-party data](https://lowob.com/research/intent-data-vs-first-party-data/)
- [The channels nobody can take away from you](https://lowob.com/research/owned-channels-email-content/)

## Next Move

Set up a random holdout of 10 to 20% of your retargeting audience this week and agree with finance, in writing, what conversion gap would justify keeping the budget. Run it for a full purchase cycle before deciding.

[Start a conversation](https://lowob.com/contact/)
