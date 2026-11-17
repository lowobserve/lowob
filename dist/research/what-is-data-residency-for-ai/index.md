# What Is Data Residency for AI Tools?

Source: https://lowob.com/research/what-is-data-residency-for-ai/
Publisher: lowob (https://lowob.com)
Published: 2026-09-10 · Updated: 2026-11-17
Function: Strategy

> Summary: Data residency for AI tools covers two separate questions: where data is stored at rest and where model inference runs. Vendors now offer both, but differently: OpenAI lists ten residency regions, while Anthropic's API offers US-only inference at a 10% premium. GDPR does not require residency, so the right setting depends on contracts, sector rules and what buyers ask.

Data residency for AI tools is the ability to control the geographic location where your prompts, files, conversation history and outputs are stored, and where the model processes them. For AI the second part matters as much as the first: a vendor can store data in Europe and still run inference in another region. Residency is usually a contract or security requirement rather than a legal one, so the right choice depends on what customers, sector rules and your own data map require.

*Figure: Where this piece sits in The Build Order: the context layer.*

## What data residency means for AI

A traditional SaaS application stores records in a database in a chosen region. An AI tool handles data in more places, and each can sit in a different country.

| Where data goes | Example | Residency question |
| --- | --- | --- |
| Storage at rest | Saved conversations, uploaded files, custom assistants | Which region holds the stored copy? |
| Inference | The model call that processes a prompt | Which region's servers run the model? |
| Logs and safety review | Abuse monitoring logs, flagged content | Where are logs held, and for how long? |
| Support access | Engineers investigating a ticket | From which countries can staff see data? |
| Subprocessors | Cloud hosts, search tools, connectors | Do third parties process data elsewhere? |

Residency is not the same as zero data retention, which is about whether data is stored at all. A vendor can offer one without the other. It is also not the same as sovereignty: storing data in a region controls where it sits, not by itself which governments can compel a provider to produce it.

## What vendors offer in 2026

Offerings differ in what they localise and who can use them.

| Provider | What is offered | Notes |
| --- | --- | --- |
| OpenAI ChatGPT Enterprise and Edu | Conversations, files, custom GPTs and image outputs stored at rest in the selected region | New workspaces; announcement covers storage, not inference location |
| OpenAI API | Region-specific projects with in-region request handling | For enterprise customers approved for advanced data controls |
| Anthropic Claude API | Inference geo "us" or "global"; workspace geo for storage | Only "us" storage available; US inference at 1.1 times standard price |
| Microsoft cloud services | EU Data Boundary for customer data, pseudonymised personal data and support data | Core services in EU and EFTA; limited global security transfers |

Two points are easy to miss. First, residency usually applies to new workspaces or projects, so an existing account may need migrating. Second, features differ: on Anthropic's API, for example, older models do not support the inference geography setting and return an error if it is set.

## Is data residency legally required?

For most commercial data, no. The GDPR regulates transfers of personal data outside the EEA rather than requiring storage inside it. Transfers to US providers certified under the EU-US Data Privacy Framework rely on an adequacy decision that the General Court upheld in September 2025 in Latombe v Commission. That decision is under appeal, which is one reason some European buyers ask for EU residency as a fallback.

Residency requirements more often come from three other places: customer contracts and security questionnaires, sector rules in areas such as financial services, health and the public sector, and internal policy for sensitive categories of data.

## What to ask an AI vendor

| Question | Why it matters |
| --- | --- |
| Is residency for storage, inference, or both? | Many offers cover one only |
| Which products, models and features are included? | Tools, connectors and older models may fall outside |
| Where are abuse monitoring and safety logs held? | Logs are a copy of your data |
| Can it apply to our existing workspace? | Some vendors require a new workspace or project |
| What is the price difference? | Regional inference can cost more per token |
| Which subprocessors handle data outside the region? | Contractual commitments should list them |

Before asking any of these, map which AI uses touch personal or client-confidential data. **lowob**'s Gateway 0 places that question before tool choice. A sales assistant drafting outreach from public information has different needs from a service agent reading support tickets with account details. Residency settings belong on the inventory line for each use, alongside the owner and the autonomy level.

## lowob takeaways

- **Ask about inference, not only storage.** For AI the model call is a separate location from the database.
- **Residency is not retention.** Where data is kept and whether it is kept are different controls.
- **GDPR regulates transfers, not location.** Residency demands usually come from contracts and sector rules.
- **Check the fine print.** New workspaces, supported models and price premiums vary by vendor.

## Common questions

### What is data residency in AI?

Control over the geographic region where an AI tool stores prompts, files and outputs, and where the model processes them.

### Does GDPR require data to be stored in the EU?

No. GDPR regulates transfers of personal data outside the EEA, for example through adequacy decisions or standard contractual clauses, rather than requiring EU storage.

### Does ChatGPT Enterprise offer EU data residency?

Yes. OpenAI offers residency in Europe and nine other regions for new ChatGPT Enterprise and Edu workspaces, storing content at rest in the chosen region.

### What is the difference between data residency and zero data retention?

Residency controls where data is stored and processed. Zero data retention means the provider does not store prompts and outputs after responding.

## Sources and notes

- [OpenAI, Expanding data residency access to business customers worldwide](https://openai.com/index/expanding-data-residency-access-to-business-customers-worldwide), 25 November 2025. Vendor announcement; regions and scope.
- [Anthropic, Data residency (Claude Platform docs)](https://platform.claude.com/docs/en/manage-claude/data-residency), accessed November 2026. Vendor documentation; inference and workspace geography, pricing.
- [Microsoft, Microsoft completes landmark EU Data Boundary](https://blogs.microsoft.com/on-the-issues/2025/02/26/microsoft-completes-landmark-eu-data-boundary-offering-enhanced-data-residency-and-transparency/), 26 February 2025. Vendor announcement.
- [Wilson Sonsini, EU court upholds the validity of the EU-U.S. Data Privacy Framework](https://www.wsgr.com/en/insights/eu-court-upholds-the-validity-of-the-eu-us-data-privacy-framework.html), September 2025, and [WilmerHale, European Court of Justice to review challenge to EU-U.S. Data Privacy Framework](https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20251201-european-court-of-justice-to-review-challenge-to-eu-us-data-privacy-framework), 1 December 2025. Law firm analyses of the judgment and appeal.

## Related research

- [Which AI Assistant, Which Seats](https://lowob.com/research/which-ai-assistant-which-seats/)
- [Gateway 0: Three Decisions Before Any AI Tool](https://lowob.com/research/gateway-zero-three-decisions-before-any-ai-tool/)
- [The Pilot That Survives Security Review](https://lowob.com/research/the-pilot-that-survives-security-review/)
- [The RFP Nobody Can Answer Yet](https://lowob.com/research/the-rfp-nobody-can-answer-yet/)
- [What Is an AI Impact Assessment?](https://lowob.com/research/what-is-an-ai-impact-assessment/)

## Next move

For each AI tool your teams use, find out this week whether storage and inference each run in a known region, and record both on the inventory. Flag any tool that handles client data with neither answer.

[Start a conversation](https://lowob.com/contact/)
