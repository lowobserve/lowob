# What Is an AI SDR?

Source: https://lowob.com/research/what-is-an-ai-sdr/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Revenue

> Summary: An AI SDR is software that performs sales development tasks with some autonomy: researching accounts, drafting and sending prospecting emails, answering replies and booking meetings. Salesforce and HubSpot both ship versions. The evaluation questions are less about writing quality than about sending controls, deliverability, consent law and whether the vendor's own claims can be checked.

An AI SDR is an AI agent that does the work of a sales development representative: it researches target accounts, writes and sends prospecting emails, answers replies and books meetings for human sellers. Products differ mainly in how much they may do without a person. The safe starting point is to let it research and draft, and to have a person approve every message before it sends.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What an AI SDR means

A sales development representative does the early part of outbound sales. The role finds accounts that fit, identifies the right people, writes first messages, follows up and hands qualified conversations to an account executive. An AI SDR is software that does some or all of those steps.

The category sits between two older tools: a sales engagement platform sends sequences a person writes, and a data provider supplies contacts and signals. An AI SDR adds the writing and the decision about what to send next.

Two large CRM vendors show the range. Salesforce's Agentforce SDR agent has three topics: Send Outreach, Respond to Prospect and Manage Opt-Out. It runs under a dedicated SDR agent user, and event logs record its conversations. HubSpot's prospecting agent detects "companies that match the buying signals that are most important to you", identifies contacts and generates "personalized outreach based on CRM data". Admins set a daily limit on new contacts and a maximum number of emails. Each lead's outreach consumes HubSpot Credits, a usage charge on top of the seat.

| Task | What the AI SDR does | Suggested autonomy level |
| --- | --- | --- |
| Account and contact research | Finds fitting accounts and people from signals and CRM data | 0 or 1 |
| First-touch email | Drafts personalised outreach | 1 (draft) or 2 (send on approval) |
| Follow-ups in a sequence | Writes and schedules later steps | 2 |
| Replies to prospects | Answers questions, handles opt-outs | 2; opt-outs can run at 3 |
| Meeting booking | Offers times and books calendars | 2 or 3 once error rates are known |

## Why it matters for a commercial team

Outbound volume is cheap to raise and expensive to repair. Three constraints decide the outcome.

**Deliverability.** Mailbox providers judge the sending domain, not the software. Google's sender guidelines require bulk senders, those sending more than 5,000 messages a day to Gmail accounts, to use SPF, DKIM and DMARC. Spam rates in Postmaster Tools should stay below 0.10% and never reach 0.30%. Marketing messages must support one-click unsubscribe. An agent that sends at scale from the company's main domain puts all of the firm's email at risk.

**Consent law.** Rules differ by country and by recipient. In the UK, the ICO says the PECR rule on electronic mail marketing "does not apply to corporate subscribers". Sole traders and some partnerships are treated as individuals and need consent or the soft opt-in. Every message must identify the sender and give a valid opt-out address. The UK GDPR applies wherever the email address identifies a person.

**Vendor claims.** The category is young, and claims are hard to verify. In March 2025, TechCrunch reported that 11x had shown logos of companies, including ZoomInfo and Airtable, that said they were not customers or had only trialled the product. 11x said it had "promptly removed any undesired or inaccurate customer mentions" when asked. The lesson for buyers is general: ask for references you can call.

## How to evaluate an AI SDR

| Criterion | Question to ask |
| --- | --- |
| Sending controls | Can every message require approval, and can that be set per task? |
| Limits | Are there daily caps on new contacts and emails, set by the buyer? |
| Domain and authentication | Which domain sends, and are SPF, DKIM and DMARC in place? |
| Opt-outs | Are unsubscribes honoured across all tools and written back to the CRM? |
| Sources | Does each message show the signals and data it relied on? |
| Write-back | Are activities and outcomes recorded in the CRM as the system of record? |
| Pricing | Is it per seat, per lead, per credit or per meeting? |
| References | Can you speak to two current customers at a similar size? |

Start narrow. Pick one segment, let the agent research and draft, and have a named person approve each message for the first few weeks. Track edit rates, replies and unsubscribes per batch. Raise autonomy only on tasks where the record supports it.

## lowob takeaways

- **An AI SDR writes and decides, not just sends.** That is what separates it from a sequencing tool.
- **Deliverability is the first risk.** Authentication, spam rates and unsubscribes apply to every message it sends.
- **Consent rules vary by recipient.** Corporate subscribers, sole traders and named individuals are treated differently in the UK.
- **Verify the vendor.** Call references before relying on logos.

## Sources and notes

- [Salesforce Trailhead, Configure and Activate Your Agentforce SDR Agent](https://trailhead.salesforce.com/content/learn/projects/build-an-agent-to-nurture-leads/configure-and-activate-your-agentforce-sdr-agent), undated. Vendor training documentation.
- [HubSpot Knowledge Base, Use the prospecting agent](https://knowledge.hubspot.com/prospecting/use-the-prospecting-agent?cid=482), undated. Vendor product documentation.
- [Google Workspace Admin Help, Email sender guidelines](https://support.google.com/a/answer/81126?hl=en-GB), undated. Mailbox provider requirements; bulk sender rules effective February 2024.
- [UK Information Commissioner's Office, Business-to-business marketing](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/). Regulator guidance; UK only.
- [TechCrunch, a16z- and Benchmark-backed 11x has been claiming customers it doesn't have](https://techcrunch.com/2025/03/24/a16z-and-benchmark-backed-11x-has-been-claiming-customers-it-doesnt-have), 24 March 2025. News report based on sources and company statements; includes the company's response.

## Related research

- [AI Agents in Sales: What They Can Do Now, Task by Task](https://lowob.com/research/ai-agents-in-sales-what-they-can-do-now/)
- [Gateway 1: Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)
- [Email Deliverability Explained](https://lowob.com/research/email-deliverability-explained/)
- [What Is a Sales Engagement Platform?](https://lowob.com/research/what-is-a-sales-engagement-platform/)

## Next move

Before any trial, check your sending domain's SPF, DKIM and DMARC records and its current spam rate in Google Postmaster Tools. If any is missing or high, fix that before an agent sends a single message.

[Start a conversation](https://lowob.com/contact/)
