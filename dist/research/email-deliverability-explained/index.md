# Email Deliverability Explained: SPF, DKIM, DMARC

Source: https://lowob.com/research/email-deliverability-explained/
Publisher: lowob (https://lowob.com)
Published: 2026-06-16 · Updated: 2026-11-16
Function: Distribution

> Summary: Deliverability is whether your email reaches the inbox, and it rests on three layers: authentication, reputation, and content and behaviour. Since February 2024, Gmail and Yahoo have required bulk senders to authenticate with SPF, DKIM and DMARC, offer one-click unsubscribe and keep spam complaints below 0.3%. Outlook began rejecting non-compliant bulk mail in May 2025, and Gmail ramped up enforcement from November 2025. Set up the records once, warm the domain, send only to people who asked, clean the list and monitor the reports.

## Key points

- SPF lists the servers allowed to send for your domain, DKIM signs each message, and DMARC tells receivers what to do when both fail.
- Gmail, Yahoo and Outlook require all three from senders of more than about 5,000 messages a day to their users.
- The spam complaint ceiling is 0.3% at Gmail and Yahoo; Google recommends staying below 0.1%.
- One-click unsubscribe follows RFC 8058; Yahoo requires unsubscribes honoured within two days.
- DMARC was updated in May 2026: RFC 9989 is now a Proposed Standard, replacing RFC 7489.

An email list is the most durable channel a company owns, and it is worth nothing if the messages do not arrive. Deliverability has become more technical in the last three years, and the largest mailbox providers now enforce it with rejections rather than warnings.

## The three layers

**Authentication** proves that an email claiming to come from your domain did. Three standards do this, and all three are entries in your domain's DNS.

| Standard | What it does | Current specification |
| --- | --- | --- |
| SPF | Publishes which servers may send mail for your domain | RFC 7208 |
| DKIM | Signs each message so the receiver can verify it came from an authorised source and was not altered | RFC 6376; Google requires keys of at least 1024 bits and recommends 2048 |
| DMARC | Tells receivers what to do with mail that fails SPF and DKIM alignment, and sends you reports on who is sending as your domain | RFC 9989 (May 2026), with reporting in RFC 9990 and 9991 |

DMARC changed this year. The IETF published RFC 9989 in May 2026 as a Proposed Standard on the Internet Standards Track, obsoleting the 2015 specification, RFC 7489. Existing records still begin `v=DMARC1` and keep working. The practical changes are small: updated receivers ignore the `pct` tag, and a new `np` tag sets policy for non-existent subdomains. There is no migration to run.

Setting up the three records is a few hours of work, once. Skipping it means the large providers will throttle or reject your mail regardless of content.

**Reputation.** Mailbox providers score sending domains and IP addresses on how recipients respond: opens, replies, deletions without reading, spam complaints, bounces from dead addresses, and whether people move messages out of spam. A new domain has no reputation and has to build one gradually. A domain that sends a large blast to a cold list on day one earns a bad reputation that takes months to repair.

**Content and behaviour.** Link shorteners, image-only emails, deceptive subject lines and mismatched sender names hurt. So does sending to people who did not ask, sending to addresses that bounce, and ignoring unsubscribe requests, which is also illegal in most places.

## What the major providers now require

Google's sender guidelines took effect on 1 February 2024 and Yahoo began enforcement the same month. Microsoft followed for Outlook.com, Hotmail and Live addresses, with rejection of non-compliant mail from 5 May 2025.

| Requirement | Gmail (over 5,000 a day) | Yahoo (bulk senders) | Outlook.com (over 5,000 a day) |
| --- | --- | --- | --- |
| SPF and DKIM | Both required | Both required | Both must pass |
| DMARC | Record required; p=none allowed; From domain must align | p=none or stricter; must pass; relaxed alignment allowed | p=none or stricter; align with SPF or DKIM |
| Spam rate | Below 0.30%; aim below 0.10% | Below 0.3% | Not specified in the announcement |
| One-click unsubscribe | Required for marketing mail, plus a visible link | Required; RFC 8058 POST method "highly recommended" | Not specified in the announcement |
| Unsubscribe processing | 48 hours recommended | Within 2 days | Not specified |
| Enforcement | Ramping up since November 2025; temporary and permanent rejections | Gradual from February 2024 | Rejection with error 550 5.7.515 since May 2025 |

All senders to Gmail, not only bulk senders, must use SPF or DKIM, valid forward and reverse DNS, TLS and a spam rate below 0.3%.

One-click unsubscribe means two headers. RFC 8058, published in January 2017, specifies a `List-Unsubscribe-Post: List-Unsubscribe=One-Click` header alongside a `List-Unsubscribe` header containing an HTTPS address. The mailbox provider sends a POST request to that address when the user clicks unsubscribe, and the message must carry a DKIM signature covering both headers. Most email platforms set this up for you; check that yours does.

> Authentication is a few hours of work, once. Reputation is earned or lost with every send.

## Why legitimate email lands in spam

Usually one of six things:

1. Authentication missing or misconfigured, often a third-party tool sending as your domain without being added to SPF or DKIM.
2. A purchased or scraped list, which produces complaints and bounces.
3. Sending volume that jumped suddenly from a new domain.
4. A list that has not been cleaned, so a large share of addresses are dead.
5. Content that looks like what spammers send.
6. A shared sending service whose other customers behaved badly.

DMARC aggregate reports find the first cause quickly: they list every source sending as your domain.

## The practical setup

| Step | What to do | When |
| --- | --- | --- |
| Authenticate | SPF, DKIM (2048-bit where supported) and DMARC at p=none with reporting | Before any volume |
| Separate | Send marketing from a subdomain so a problem there does not affect transactional or personal mail | At setup |
| Tighten | Move DMARC to quarantine once reports show only legitimate sources | After two to four weeks of clean reports |
| Warm | Start with small volumes to engaged recipients and increase over several weeks | Every new domain or IP |
| Consent | Double opt-in, or at minimum clear consent | Every sign-up |
| Clean | Remove hard bounces immediately and unengaged addresses after a defined period | Every send and quarterly |
| Unsubscribe | One-click headers and a visible link, honoured within two days | Every marketing message |
| Monitor | DMARC reports, bounce rate, complaint rate in Google Postmaster Tools, inbox placement | Weekly |

Outbound sales email is not exempt: a sequence tool sending from the company domain counts towards the same reputation. Our piece on [signal-based outbound](https://lowob.com/research/signal-based-outbound/) argues for lower volume on relevance grounds; the 0.3% ceiling makes the same argument on technical ones. If your sellers use a [sales engagement platform](https://lowob.com/research/what-is-a-sales-engagement-platform/), check which domain it sends from and whether it is authenticated.

## For regulated senders

Financial, health and crypto senders face two additional constraints: content rules that apply to the message body as they would to an ad, and heightened scrutiny from mailbox providers whose filters have learned that those categories attract fraud. Compliant, consistent, well-authenticated mail from a warmed domain gets through. Anything that looks like a shortcut does not.

## Why it matters more than it seems

Email is the layer that keeps working when every rented channel changes its rules. A company that has built a list carefully and can reliably reach it has distribution that no platform can suspend. A company that has neglected deliverability has a list of addresses and no way to use them. Our piece on [owned channels](https://lowob.com/research/owned-channels-email-content/) makes the wider case.

## lowob takeaways

- **Authenticate everything that sends as you.** SPF, DKIM and DMARC, including every third-party tool.
- **Stay well under 0.3%.** Aim for Google's 0.1% guideline, and treat complaints as an early warning.
- **Make leaving easy.** One-click unsubscribe, honoured within two days.
- **Watch the reports.** DMARC aggregates and Postmaster Tools show problems before customers do.

## Common questions

### Why are my legitimate emails going to spam?

Usually one of six things: missing or misconfigured authentication, a purchased or scraped list, a sudden volume jump from a new domain, an uncleaned list, spam-like content, or a shared sending service whose other customers behaved badly.

### What are the Gmail and Yahoo bulk sender requirements?

Senders of more than about 5,000 messages a day must use SPF and DKIM, publish a DMARC record (p=none is allowed), keep spam complaints below 0.3%, and offer one-click unsubscribe. Yahoo requires unsubscribes to be honoured within two days.

### What is RFC 8058 one-click unsubscribe?

It is the standard for unsubscribing with one click from the mail client. The message carries a List-Unsubscribe header with an HTTPS address and a List-Unsubscribe-Post header; the mailbox provider sends a POST request to unsubscribe the user.

### How do I warm up a new email sending domain?

Start with small volumes to engaged recipients and increase over several weeks while watching bounces and complaints. A large blast to a cold list on day one earns a reputation that takes months to repair.

## Sources and notes

- [Google, Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en), current page consulted November 2026. Platform requirements for sending to Gmail.
- [Google, Email sender guidelines FAQ](https://support.google.com/mail/answer/14229414?hl=en-2), consulted November 2026. Source for the November 2025 enforcement ramp-up and the 48-hour unsubscribe recommendation.
- [Yahoo Sender Hub, Sender best practices](https://senders.yahooinc.com/best-practices), consulted November 2026. Platform requirements; enforcement from February 2024.
- [Microsoft, Strengthening email ecosystem: Outlook's new requirements for high-volume senders](https://techcommunity.microsoft.com/blog/outlook/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730), 2 April 2025, updated 30 April 2025. Platform announcement; covers consumer Outlook.com domains only.
- [IETF, RFC 8058: Signaling one-click functionality for list email headers](https://www.rfc-editor.org/rfc/rfc8058), January 2017. Proposed Standard.
- [RFC Editor, RFC 9989: Domain-based Message Authentication, Reporting, and Conformance (DMARC)](https://www.rfc-editor.org/info/rfc9989), May 2026. Proposed Standard; obsoletes RFC 7489 and RFC 9091.
- [Suped, DMARCbis is now published as RFC 9989, 9990 and 9991](https://www.suped.com/blog/dmarcbis-is-now-published-as-rfc-9989-9990-9991), 1 June 2026. Vendor summary of the changes; used for the tag-level detail.
- The setup and causes tables are **lowob**'s framework.

## Related research

- [The channels nobody can take away from you](https://lowob.com/research/owned-channels-email-content/)
- [What is a sales engagement platform?](https://lowob.com/research/what-is-a-sales-engagement-platform/)
- [What is CRM data hygiene?](https://lowob.com/research/what-is-crm-data-hygiene/)
- [Cold outreach works better with a real reason to talk](https://lowob.com/research/signal-based-outbound/)

## Next Move

Look up your domain's DMARC record this week. If there is none, publish one at p=none with a reporting address, then list every tool in the first report that sends as your domain and check each is authenticated.

[Start a conversation](https://lowob.com/contact/)
