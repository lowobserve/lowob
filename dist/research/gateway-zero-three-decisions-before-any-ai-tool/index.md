# Gateway 0: Three Decisions Before Any AI Tool

Source: https://lowob.com/research/gateway-zero-three-decisions-before-any-ai-tool/
Publisher: lowob (https://lowob.com)
Published: 2026-06-22 · Updated: 2026-11-16
Function: Strategy

> Summary: Gateway 0 is three decisions made before any AI tool is purchased: a named owner with protected time, the suite of record (Google Workspace or Microsoft 365), and a CRM chosen for how people will actually use it. Regulated firms add a fourth: who signs off on data access.

Before buying any AI tool, answer three questions. Who owns the build, with protected time each week? Which suite is the company's system of record, Google Workspace or Microsoft 365? And which CRM will people actually keep current? Regulated firms add a fourth: who decides what data the system may see. Most stalled builds we encounter skipped at least one of these, and each is cheaper to answer up front than to unwind later.

*Figure: Where this piece sits in The Build Order: Gateway 0.*

*Figure: Gateway 0 is three decisions. Nothing gets bought until all three are answered.*

The commonest pattern in a stalled AI build is not a bad tool. It is a good tool bought before anyone decided who would make it work. Licences arrive, a launch email goes out, and usage settles at a small fraction of seats within weeks.

The pattern is visible at the largest scale. Fewer than 4.5% of Microsoft 365's commercial customers pay for Copilot, and only 20% to 30% of those who pay use it in a given week, according to figures reported by Windows Latest in July 2026. Seats are a purchase. Use is a project, and projects need an owner.

That is why the build order starts with a gateway rather than a tool. Gateway 0 is three decisions. Until all three are made, nothing gets bought.

## Decision 1: who owns the build

One named person, with protected hours every week. Not "the partners", not "IT", and not a steering group that meets monthly.

The owner's first month has four jobs:

1. Confirm the other two decisions below.
2. Choose the one commercial workflow the build will serve first, using the test in Part 2.
3. Set the single measure that will show it worked, with a review date.
4. Decide who approves anything the system drafts before it reaches a client.

The owner does not need to be technical. They need to understand the commercial line, have authority to change how people record their work, and have time. In the mid-size firms we work with, four ring-fenced hours a week is usually enough for the first quarter; less than two rarely is. That is a smaller commitment than a steering group assumes and a larger one than most firms actually make.

### What the owner is accountable for

| Area | The owner decides | The owner does not need to |
| --- | --- | --- |
| Scope | Which workflow comes first, and what waits | Design the architecture |
| Measure | The one number and its review date | Build dashboards |
| Data | What may be connected, with any approver in regulated firms | Configure connectors |
| Approvals | Who signs off on anything that leaves the firm | Approve every draft personally |
| Vendors | Which tools are bought, and on what terms | Run procurement alone |

## Decision 2: Google Workspace or Microsoft 365

The suite decides more than it appears to. It shapes which assistant fits most naturally, which connectors work without extra plumbing, and where the company's email, files and meetings can be searched. Microsoft's paid Copilot add-on reads email, files and meetings through Microsoft Graph; Google's assistant is built into Workspace in the same way. Each sees its own suite best, and both now sell the context layer on top of it.

The rule is simple: pick the suite your email already lives in. Migrating suites to suit an assistant is almost never worth it, because the assistant is the faster-changing layer and the suite is the slower one. Models improve every few months, and most now work across suites. The suite should anchor the build.

Where a firm genuinely runs on both (one office in Google, another in Microsoft, or a merger not yet integrated), the owner's job is to decide which suite is the system of record for client communication and to accept that the other will be connected second.

## Decision 3: the CRM people will actually update

Not the best CRM. The one your least patient senior person will open.

The brain needs a store for the commercial line to read from and write outcomes into. That store is only as good as the people who keep it, and in many firms the people closest to the client are the least willing to type. Validity's 2025 survey of CRM users found 37% reporting revenue lost as a direct consequence of poor data quality, and its 2026 survey found only 21% of marketers considered their CRM data very well prepared for AI.

So choose by behaviour rather than features:

- **Automatic capture.** Does it sync email and calendar so activity is recorded without typing?
- **Speed of update.** Can a senior person move a deal or add a next step in under a minute, from a phone?
- **Required reasons.** Will people accept a short closed-lost reason as a required field?
- **Exportable history.** Can every record and its history be exported in a documented format? (*Buy context, own judgment* sets out why this matters at renewal.)

A simpler CRM kept current beats a powerful one maintained by a junior colleague on Friday afternoons. If the firm already has a CRM, the decision is usually to keep it and clean it, which is the subject of Part 4.

## A fourth decision for regulated firms

In financial services, healthcare, and any firm with client-confidentiality or conflict duties, add one more: who signs off on what the system may see. Identity checks, credit files, patient records and conflict files should usually stay outside the commercial build entirely. Name the person who decides this before any connector is switched on, and record their decisions in the same way as any other. Our guide *The pilot that survives security review* covers what reviewers will ask.

> Seats are a purchase. Use is a project, and projects need an owner.

## What skipping the gateway costs

Builds that skip Gateway 0 tend to fail in one of three recognisable ways:

| Skipped decision | What it looks like six months later | Cost to unwind |
| --- | --- | --- |
| No owner | Seats unused, renewal questioned, no measure to defend | A relaunch, and lost credibility with staff |
| No suite decision | Two half-connected suites; an assistant that sees neither well | Re-scoping connectors and permissions |
| No CRM decision | Confident AI answers drawn from stale, duplicated records | Data clean-up under time pressure, after trust is lost |

Each is more expensive to fix than the decision would have been to make.

Illustrative example: a Gateway 0 decision

Decision
:   The head of operations owns the build; Microsoft 365 is the suite of record; the existing CRM stays and is cleaned.

Reason and owner
:   Email and files already live in Microsoft 365; the CRM is under-used rather than unsuitable. Signed off by the managing partner.

What changed
:   Unused assistant seats are cut at renewal; the remaining users become the first commercial cohort, with meeting preparation time as the measure.

Illustrative: a composite of a mid-size advisory firm, built from patterns across engagements.

## lowob takeaways

- **Name an owner before you name a vendor.** One person, protected time, authority over how work is logged.
- **Let the suite anchor the build.** Pick the one your email lives in; the assistant follows.
- **Choose the CRM by behaviour.** The one people keep current beats the one with more features.
- **Regulated firms add a data-access approver.** Decide what stays out before the first connector goes live.

Gateway card

### Gateway 0

- A named owner, with hours protected weekly
- The suite of record confirmed
- The CRM chosen, with email and calendar sync switched on
- One commercial measure agreed, with a review date
- Regulated firms: a named data-access approver

## Common questions

### What should a company decide before buying AI tools?

Who owns the build with protected time, which suite (Google Workspace or Microsoft 365) is the system of record, and which CRM people will actually keep current. Regulated firms should also name who approves data access.

### Should we switch from Google Workspace to Microsoft 365 to use Copilot, or the reverse?

Almost never. The suite changes slowly and the assistant changes quickly; build on the suite your email already lives in and connect the other if needed.

### Who should own an AI rollout in a mid-size firm?

One named person who understands the commercial workflow, has authority to change how work is recorded, and has protected time each week. They do not need to be technical.

### How do I choose a CRM for AI?

Choose by behaviour: automatic capture of email and calendar activity, quick updates from a phone, a required reason for lost deals, and full export of records and history.

## Sources and notes

- [Windows Latest, 7 July 2026](https://www.windowslatest.com/2026/07/07/microsoft-365-copilot-adoption-is-under-4-5-after-3-years-only-1-use-it-weekly-yet-prices-went-up/). Industry figures; also describes what the paid Copilot add-on can access.
- [Validity, State of CRM Data Management in 2025](https://validity.com/resource-center/the-state-of-crm-data-management-in-2025). Survey of 602 CRM users and stakeholders.
- Validity, State of CRM Data 2026, as reported by [MarTech](https://martech.org/marketers-know-ai-is-using-bad-data-to-make-decisions/).
- Owner time estimates and failure patterns are drawn from **lowob**'s engagements, described in aggregate.

## Related research

- [Buy Context. Own Judgment. What Enterprise AI Teams Should Build](https://lowob.com/research/buy-context-own-judgment-what-to-build-at-each-size/)
- [The Pilot That Survives Security Review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [Claude Is Not Your Intern. Build a Repeatable GTM Workflow](https://lowob.com/research/claude-gtm-operating-system/)
- [Why the Brain Starts at the Commercial Line](https://lowob.com/research/why-the-brain-starts-at-the-commercial-line/)
- [Gateway 3: When Commercial Is Ready to Share Its Brain](https://lowob.com/research/gateway-three-when-commercial-is-ready-to-share-its-brain/)
- [Prompt Engineering vs Context Engineering](https://lowob.com/research/prompt-engineering-vs-context-engineering/)

## Next move

Can you name your build's owner, its suite of record and its CRM in one sentence? If not, that is the first decision to make, before any vendor conversation.

[Start a conversation](https://lowob.com/contact/)
