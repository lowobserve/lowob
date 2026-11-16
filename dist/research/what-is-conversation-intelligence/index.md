# What Is Conversation Intelligence?

Source: https://lowob.com/research/what-is-conversation-intelligence/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Revenue

> Summary: Conversation intelligence is software that records, transcribes and analyses sales calls and meetings. It flags topics such as competitor mentions, pricing questions and next steps, and gives managers material for coaching and deal reviews. Its limits are legal as much as technical: recording needs the right consent, and in the EU, inferring employees' emotions at work is prohibited.

*Figure: Where this piece sits in The Build Order: the context layer.*

## Key points

- Salesforce's conversation intelligence transcribes calls, tracks keywords set by admins, including competitors, and flags next steps, which it warns "can vary widely by language".
- Gong's consent profiles can show a consent page, play an audio prompt or send a pre-call email; they are set by an admin and "apply to all calls".
- California Penal Code section 632 requires the consent of all parties to record a confidential communication, with fines of up to $2,500 per violation.
- Article 5(1)(f) of the EU AI Act prohibits AI systems that infer emotions of people in the workplace, except for medical or safety reasons; the prohibitions applied from 2 February 2025.
- A transcript is part of the store; the commercial value comes when confirmed commitments and objections are written into the CRM and decision record.

## What conversation intelligence means

A sales team holds hundreds of conversations a month. Most of what is said never reaches the CRM. Conversation intelligence captures those calls and turns them into searchable text and structured signals.

The typical feature set has four parts. **Capture:** recording calls from a dialler or video meetings. **Transcription:** speech converted to text. **Detection:** flagging keywords, topics, questions and next steps. **Analysis:** dashboards that show trends across calls, such as how often a competitor comes up.

Salesforce's Trailhead module shows the shape. Recordings "undergo processing through our AI system for transcription and detection of insights". Admins choose keywords, and dashboards show "how keywords are trending over time". Competitors are a keyword category, so a manager can see "which competitors are mentioned the most". Recording sources include Salesforce's own dialler and Service Cloud Voice, with other recording systems connecting through partners.

| Conversation intelligence is | It is not |
| --- | --- |
| A record of what was said on calls | A record of what was decided, until someone confirms it |
| A source for coaching and deal reviews | A substitute for a manager listening to key calls |
| A feed of signals into the CRM | The system of record for deals |
| Subject to recording consent law | Exempt because the call is business-to-business |

## Why it matters for a commercial team

The case is that the best evidence about a deal is in the conversation. Objections, pricing questions, named competitors and promised next steps are all spoken before they are typed. A tool that captures them reduces the distance between what the buyer said and what the forecast assumes.

The constraints are legal first.

**Recording consent.** Rules vary by jurisdiction. California's Penal Code section 632 makes it an offence to record a confidential communication "without the consent of all parties", with a fine of up to $2,500 per violation. A team calling buyers across states and countries needs a consent approach that meets the strictest rule it faces. Gong's consent settings show how vendors handle this. A consent page "displays a consent page before the participant joins the meeting". An audio prompt plays when someone joins. Settings are fixed by an admin, and "you can't disable the settings for an individual call".

**Emotion recognition.** Some tools score sentiment or emotion. Article 5(1)(f) of the EU AI Act prohibits AI systems used "to infer emotions of a natural person in the areas of workplace and education institutions", except for medical or safety reasons. Lewis Silkin's summary of the Commission's guidance gives tracking call centre employees' emotions as an example of prohibited use. A firm with EU staff should check what any sentiment feature measures, and about whom.

**Accuracy.** Automatic insights are approximations. Salesforce itself notes that detected next steps "can vary widely by language". A next step a tool infers is a draft, not a commitment.

In **lowob**'s terms, transcripts belong to the store. The useful step is extraction: the commitments, objections and decisions in a call, confirmed by the seller and written to the CRM and the decision record with an owner.

## How to evaluate a conversation intelligence tool

| Criterion | Question to ask |
| --- | --- |
| Capture coverage | Does it record the dialler, video platforms and in-person meetings you use? |
| Consent controls | Can it show consent pages, play prompts and handle refusals per region? |
| Detection | Can admins define keywords, competitors and topics, and check accuracy? |
| Language support | How well does it handle the languages your buyers speak? |
| CRM write-back | Do confirmed next steps and fields land in the CRM, with a person confirming? |
| Emotion features | Can sentiment or emotion scoring be switched off where the law requires? |
| Retention and access | How long are recordings kept, and who can hear them? |

Start with one use: deal reviews on late-stage opportunities, or onboarding new sellers. Measure whether the extracted next steps match what sellers confirm.

## lowob takeaways

- **It captures what was said.** What was decided still needs a person to confirm it.
- **Consent comes first.** Meet the strictest recording rule among the places you call.
- **Check emotion features in the EU.** Inferring employees' emotions at work is prohibited.
- **Value arrives at write-back.** Confirmed commitments belong in the CRM and decision record.

## Common questions

### What is conversation intelligence software?

Software that records, transcribes and analyses sales calls and meetings, flagging topics, keywords, competitors and next steps for sellers and managers.

### What is the difference between conversation intelligence and an AI notetaker?

A notetaker mainly produces summaries of individual meetings. Conversation intelligence adds analysis across many calls, such as keyword trends and coaching.

### Is it legal to record sales calls?

It depends on location. Some jurisdictions, such as California for confidential communications, require the consent of all parties. Check every place you call.

### Can conversation intelligence detect emotions?

Some tools offer sentiment scoring. In the EU, AI systems that infer employees' emotions in the workplace are prohibited except for medical or safety reasons.

## Sources and notes

- [Salesforce Trailhead, Find Out How Einstein Conversation Insights Works](https://trailhead.salesforce.com/content/learn/modules/einstein-call-coaching/optimize-sales-performance-with-einstein-call-coaching), undated. Vendor training documentation.
- [Gong Help Center, Call recording and consent settings](https://help.gong.io/docs/call-recording-and-consent-settings), undated. Vendor product documentation; not legal advice.
- [California Penal Code section 632, via Justia](https://law.justia.com/codes/california/code-pen/part-1/title-15/chapter-1-5/section-632), 2024 code. Statute text; applies to confidential communications.
- [European Commission AI Act Service Desk, Article 5: Prohibited AI practices](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5). Official text.
- [Lewis Silkin, Understanding the EU AI Act's prohibited practices](https://www.lewissilkin.com/insights/2025/02/17/understanding-the-eu-ai-acts-prohibited-practices-key-workplace-and-advertising-102k011), 17 February 2025. Law firm summary of the Commission's guidelines.

## Related research

- [The Context Layer, Followed Through One Account](https://lowob.com/research/the-context-layer-followed-through-one-account/)
- [Top 5 AI Notetakers for Decision Capture](https://lowob.com/research/top-5-ai-notetakers-for-decision-capture/)
- [What Is a Decision Record?](https://lowob.com/research/what-is-a-decision-record/)
- [What Is Win-Loss Analysis?](https://lowob.com/research/what-is-win-loss-analysis/)

## Next Move

List every place your sellers call buyers from and into. For each, write down the recording consent rule, and check that your current call tool's consent setting meets the strictest one.

[Start a conversation](https://lowob.com/contact/)
