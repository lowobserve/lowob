# What Is a Computer-Use Agent?

Source: https://lowob.com/research/what-is-a-computer-use-agent/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: A computer-use agent reads screenshots and decides where to click and what to type, so it can work in software with no API. Benchmarks show it well below human success rates, and anything on screen can try to instruct it. Providers advise an isolated machine, minimal access and a person confirming every consequential action.

A computer-use agent is an AI agent that operates software the way a person does: it looks at screenshots and decides where to click, what to type and when to scroll. It can work in applications that have no API or connector. It is also slower, less reliable and more exposed to manipulation than an agent working through APIs. Providers advise running it on an isolated machine with minimal access, and asking a person to confirm anything with real-world consequences.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What a computer-use agent means

Most agents act through [function calls](https://lowob.com/research/what-is-function-calling/): structured requests to an API, a database or an [MCP](https://lowob.com/research/what-is-the-model-context-protocol/) server. A computer-use agent acts through the screen. Microsoft's documentation describes the loop in three stages. Perception captures a screenshot. Reasoning judges the current state against the goal. Action clicks, types or scrolls. The loop repeats until the task is done or needs a person.

Anthropic's documentation is explicit that the model never touches the machine. The application receives the model's requests, translates them into actions in its own computing environment, captures screenshots and returns them. The available actions include taking a screenshot, zooming, clicking, dragging, scrolling, typing and pressing keys.

|  | API-based agent | Computer-use agent | RPA robot |
| --- | --- | --- | --- |
| How it acts | Structured calls to APIs and tools | Clicks and keystrokes chosen from screenshots | Scripted clicks and keystrokes |
| Needs an API | Yes | No | No |
| When a screen changes | Not affected | Often copes, by reading the new screen | Usually breaks |
| Speed | Fast | Slow | Fast |
| Predictability | High | Low to medium | High |
| Main risk | Excessive permissions | Instructions hidden on screen; wrong clicks | Silent failure after a layout change |

## Why it matters for a commercial team

The appeal is reach. Many commercial teams still depend on systems with no usable API, such as a partner portal or an old quoting tool. Microsoft describes computer use as "especially useful in scenarios where APIs aren't available". Unlike [robotic process automation](https://lowob.com/research/what-is-robotic-process-automation/), it can cope with a button that has moved.

The evidence on reliability is sobering. OSWorld tested agents on 369 tasks in real operating systems and applications. At publication in April 2024, humans completed over 72.36% and the best model 12.24%. Most failures came from locating elements on screen and from operational knowledge. OpenAI's Computer-Using Agent, announced in January 2025, reached 38.1% on OSWorld and 58.1% on the browser benchmark WebArena, against human scores of 72.4% and 78.2%. Scores have risen since, but public benchmarks rarely match a firm's own screens.

Providers' own limitations lists agree. Anthropic warns that the model "might make mistakes or hallucinate when outputting specific coordinates", that reliability may be lower in niche applications, and that it may be too slow compared with a person. Microsoft notes its tool can struggle with dropdowns, date pickers and custom widgets, and "might repeat actions or get stuck". In OpenAI's own examples, one text-editing task succeeded 4 times in 10.

It is also costly in tokens. Anthropic's pricing page, accessed 16 November 2026, lists about 4,520 tokens of overhead for its computer-use toolset definition, before any screenshots are added.

Security is the larger issue. A computer-use agent reads everything on screen, including text placed there by others. Anthropic's documentation states that instructions on webpages or in images "might override your instructions". It now scans screenshots with classifiers for [prompt injection](https://lowob.com/research/what-is-prompt-injection/), but says its other precautions remain important. Microsoft warns that pauses for clarification "might not trigger in every situation where a person would want a pause", and that they should not be relied on as a fail-safe.

This is why **lowob** places computer use low on the [autonomy dial](https://lowob.com/research/what-is-an-ai-autonomy-level/). Reading a portal and drafting what it found is level 0 or 1. Submitting an order, a form or a message has consequences, so it sits at level 2 at most, with a named person approving each one. OpenAI's agent asked for confirmation before submitting orders or sending email and declined banking transactions. Anthropic advises confirmation before financial transactions or agreeing to terms of service.

## How to pilot one safely

| Control | What it means in practice |
| --- | --- |
| Isolated machine | A dedicated virtual machine or container, never a person's own laptop |
| Least-privilege account | Its own login, read-only where possible; see [agent identity](https://lowob.com/research/what-is-agent-identity/) |
| No credentials in reach | Anthropic advises against giving the model login details |
| Domain allowlist | Only the sites the task needs |
| Approval before submit | A person confirms every form, order or message at an [approval gate](https://lowob.com/research/what-is-an-approval-gate/) |
| Logs and screenshots kept | Every action reviewable after the run |
| API first | If an API or connector exists, use it instead |

Start with a read-only task, such as collecting order status from a partner portal into a draft summary.

## lowob takeaways

- **It works through the screen.** Screenshots in, clicks and keystrokes out.
- **Reach comes at a price.** Slower and less reliable than API-based agents.
- **The screen can carry instructions.** Treat on-screen content as untrusted.
- **Isolate it and gate its actions.** A separate machine, minimal access and a person approving every submission.

## Sources and notes

- [Xie et al., OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://arxiv.org/abs/2404.07972), April 2024. Academic benchmark; scores reflect models available at publication.
- [OpenAI, Computer-Using Agent](https://openai.com/index/computer-using-agent/), 23 January 2025. Vendor-reported benchmark results.
- [Anthropic, Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool), accessed November 2026. Vendor documentation; the feature is labelled beta.
- [Microsoft, FAQ for computer use in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-computer-use), accessed November 2026. Vendor documentation.
- [Anthropic, Pricing (Claude API documentation)](https://platform.claude.com/docs/en/about-claude/pricing), accessed 16 November 2026. Vendor list prices and token overheads; change often.

## Related research

- [What Is Robotic Process Automation (RPA) in the Age of Agents?](https://lowob.com/research/what-is-robotic-process-automation/)
- [What Is Prompt Injection?](https://lowob.com/research/what-is-prompt-injection/)
- [What Is an AI Autonomy Level?](https://lowob.com/research/what-is-an-ai-autonomy-level/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)

## Next move

List the systems your commercial team uses that have no API or connector. For the one used most, run a computer-use agent read-only on a separate virtual machine for a week, and compare its summaries with a person's.

[Start a conversation](https://lowob.com/contact/)
