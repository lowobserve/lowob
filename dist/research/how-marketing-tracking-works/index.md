# How Marketing Tracking Works: Pixels to Server-Side

Source: https://lowob.com/research/how-marketing-tracking-works/
Publisher: lowob (https://lowob.com)
Published: 2026-04-03 · Updated: 2026-11-16
Function: Distribution

> Summary: Every marketing number depends on tracking: connecting a person who saw or clicked something with a person who later did something. Pixels see less every year, because Safari blocks third-party cookies by default, Apple requires permission before apps track users, and consent rules cover much of the rest. Platforms fill the gaps with modelled estimates. First-party data, server-side tracking, tagged links and consent are the measurement layer that survives, and the company should own it, not whoever runs its media.

## Key points

- Each platform's pixel counts conversions independently, so the platforms' reported totals have always exceeded actual customers.
- Safari has blocked third-party cookies by default since iOS 13.4 and macOS 10.15.4 in March 2020.
- Since iOS 14.5, apps need permission through App Tracking Transparency to track users or read the advertising identifier.
- Google kept third-party cookies in Chrome and in October 2025 retired most Privacy Sandbox advertising APIs, including Topics and Protected Audience.
- Server-side tracking records events on the company's own server and forwards them through platform conversion APIs; the company should own that layer.

The mechanics of tracking have changed a great deal in six years, and the changes explain why numbers that used to agree no longer do. A finance lead looking at three platform dashboards that each claim the same customers is not looking at an error. They are looking at how the system was built.

## The old model: pixels and third-party cookies

A pixel is a small piece of code on a website that reports back to a platform when a page loads or an event happens. Each ad platform issues its own. The pixel sets or reads a cookie, a small file in the visitor's browser that lets the platform recognise the same browser later.

For a decade this worked well enough. A person clicked an ad, the platform's cookie followed them to the purchase, and the platform reported a conversion. Every platform did this independently, which is why the sum of all platforms' reported conversions has always exceeded the number of actual customers. A buyer who saw a social ad, clicked a search ad and opened an affiliate email can be claimed three times.

## What changed

Four changes, in roughly this order.

| Change | Date | What it did | Effect on measurement |
| --- | --- | --- | --- |
| Safari full third-party cookie blocking | March 2020 (iOS 13.4, macOS 10.15.4) | Blocked cross-site cookies by default | Cross-site pixels lost Safari users |
| Apple App Tracking Transparency | iOS 14.5 and later | Apps need permission to track or read the advertising identifier | Declined users show an identifier of all zeros |
| Consent regimes and consent mode | Ongoing; EU, UK, several US states | Consent needed for non-essential tracking | Unconsented conversions are modelled, not measured |
| Chrome keeps third-party cookies | April 2025 decision; October 2025 Sandbox retirement | Users keep a choice; most Sandbox ad APIs retired | No industry replacement; fragmentation persists |

Apple's developer guidance is explicit. Tracking means linking data from your app with data from other companies' apps, websites or offline properties for advertising or measurement. Without permission, "the device's advertising identifier value will be all zeros", and developers may not use a hashed email or phone number to track a user who declined.

Chrome went the other way. Google spent years planning to phase out third-party cookies, then announced in 2025 that Chrome would keep its current approach, which leaves the choice with users. In October 2025 its Privacy Sandbox lead announced the retirement of most of the replacement advertising technologies, including the Attribution Reporting API, Topics and Protected Audience, citing low adoption. CHIPS, FedCM and Private State Tokens remain.

The result is not a cookieless world. It is a fragmented one. Pixels see a shrinking and uneven fraction of what happens, and platforms fill the gaps with modelled estimates. Google's guide to conversion modelling describes estimating conversions for users who decline consent, and says the modelling recovers, on average, more than half of the click-to-conversion journeys that would otherwise be lost. Reported conversions became partly measured and partly inferred, and the inference is done by the party being measured.

## First-party data

First-party data is information a company collects directly from its own customers and visitors, on its own properties, with their consent: email addresses, account activity, purchases, product usage. It is not affected by third-party cookie blocking because there is no third party.

It has become the foundation of measurement because it is the one source that does not depend on a platform's cooperation. A company that knows which of its own customers came from which source, by asking, by tagging links, by matching emails, can measure channels the pixels cannot see. Our comparison of [intent data and first-party data](https://lowob.com/research/intent-data-vs-first-party-data/) covers the B2B side, and our explainer on [lead source attribution](https://lowob.com/research/what-is-lead-source-attribution/) covers how to record the source on each record.

## Server-side tracking

Instead of the visitor's browser reporting events to each platform, the company's own server records the event and forwards what is appropriate to each platform through their conversion APIs. The company controls what is sent, the data is not blocked by browser tools, and the record exists in the company's own systems first.

Meta's documentation describes the intended setup as "redundant": the Conversions API runs alongside the Pixel, and the two are deduplicated by sending the same event ID and event name from browser and server. Duplicates arriving within 48 hours are discarded. That detail matters for anyone reading the numbers. A server-side setup without deduplication double-counts; one with it recovers events the browser lost.

Server-side tracking is more work to set up and requires care about consent and what is shared. Sending data through a server does not make consent optional, and Apple's rules on tracking apply whatever the transport. It is also the only way to keep platform reporting meaningful as browser-based tracking degrades, and it is the natural home for first-party data.

> The measurement layer underneath the media should be in the company's name, because it is the record of what the money did.

## Tagged links, codes and consent

The oldest tools still work. Parameters appended to URLs identify the source, medium and campaign of a visit in the company's own analytics. Unique codes and landing pages per partner or creator attribute outcomes without any cookie at all. For affiliate, creator and clipping programmes, these are the primary tracking method, and they should be in the company's analytics, not only in the partner's.

Consent is not a formality. In most jurisdictions where a company sells, some form of it is required before tracking beyond what is strictly necessary. A consent management platform, a clear policy and tracking that respects the visitor's choice are the minimum. Google's conversion modelling, for example, requires consent mode or the IAB Transparency and Consent Framework to be implemented correctly. Numbers gathered without consent are a liability, not an asset.

Where individual tracking fails entirely, aggregate methods take over. A [marketing mix model](https://lowob.com/research/what-is-marketing-mix-modeling/) works from weekly spend and outcomes, and a geographic holdout needs no cookie at all.

## What a company should own, regardless of who runs the media

| Asset | Why it must be in the company's name | What breaks if it is not |
| --- | --- | --- |
| Analytics account | It holds the outcome history | Switching partner resets the baseline |
| Tag manager | It controls what fires, where | Changes happen without the company's knowledge |
| Server-side configuration and conversion API keys | It decides what data leaves the company | Data sharing outside the company's control |
| Consent platform | It records the legal basis for tracking | Liability without visibility |
| First-party data | It survives every platform change | The one durable asset is held elsewhere |
| Link-tagging convention | It makes sources comparable over time | Every partner names things differently |
| Tracking plan document | It says which events are tracked, where, and how each channel's outcomes are confirmed | Nobody can audit the numbers |

A media partner can and should run the accounts on the company's behalf. The measurement layer underneath them should be in the company's name.

## lowob takeaways

- **Platform totals always exceed customers.** Each platform counts independently, and modelled conversions now fill the gaps.
- **Cookies were not abolished; they fragmented.** Safari blocks them, Apple gates app tracking, Chrome leaves the choice to users.
- **Server-side tracking needs deduplication.** Same event ID from browser and server, or the numbers double.
- **Own the measurement layer.** Analytics, tag manager, server-side setup, consent platform, first-party data and the tracking plan.

## Common questions

### Why don't my ad platform conversion numbers match my actual sales?

Each platform counts conversions independently and credits itself, and as browser tracking degrades, platforms fill gaps with modelled estimates. Reported conversions are partly measured and partly inferred by the party being measured.

### Is Google still getting rid of third-party cookies?

No. In 2025 Google said Chrome would keep its current approach, leaving users a choice, and in October 2025 it retired most Privacy Sandbox advertising APIs. Safari still blocks them by default.

### What is server-side tracking?

The company's own server records events and forwards what is appropriate to each platform through their conversion APIs, instead of the visitor's browser reporting to each platform. It must be deduplicated against the pixel.

### What parts of marketing measurement should a company own if an agency runs its ads?

The analytics account, tag manager, server-side tracking configuration, consent platform, first-party data, link-tagging convention, and a document describing what is tracked and how outcomes are confirmed.

## Sources and notes

- [Apple Developer, User privacy and data use](https://developer.apple.com/app-store/user-privacy-and-data-use/). Apple's own definition of tracking and the App Tracking Transparency rules.
- [MacRumors, Safari in new versions of iOS and macOS includes full third-party cookie blocking](https://www.macrumors.com/2020/03/24/safari-full-third-party-cookie-blocking), 24 March 2020. Trade press report of the WebKit announcement.
- [Google Privacy Sandbox, Update on plans for Privacy Sandbox technologies](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies), Anthony Chavez, 17 October 2025. Google's own announcement; retirement timelines are on Google's status page and may change.
- [PPC Land, Chrome kills most Privacy Sandbox technologies after adoption fails](https://ppc.land/chrome-kills-most-privacy-sandbox-technologies-after-adoption-fails/), October 2025. Trade press; source for the April 2025 decision to keep third-party cookies.
- [Meta for Developers, Handling duplicate Pixel and Conversions API events](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events). Platform documentation; describes Meta's own deduplication rules.
- [Google Ads Help, Your guide to conversion modeling](https://support.google.com/google-ads/answer/12284070). Platform documentation; the recovery figure is Google's own average and is not independently verified.
- The timeline and ownership tables are **lowob**'s synthesis.

## Related research

- [Intent data vs first-party data](https://lowob.com/research/intent-data-vs-first-party-data/)
- [What is lead source attribution?](https://lowob.com/research/what-is-lead-source-attribution/)
- [Attribution vs incrementality](https://lowob.com/research/attribution-vs-incrementality/)
- [What is marketing mix modeling?](https://lowob.com/research/what-is-marketing-mix-modeling/)
- [How to read a media plan before you approve it](https://lowob.com/research/how-to-read-a-media-plan/)

## Next Move

List who holds admin rights on your analytics account, tag manager, consent platform and each ad account. Any of them not in the company's name, move this month, before the next partner change makes it harder.

[Start a conversation](https://lowob.com/contact/)
