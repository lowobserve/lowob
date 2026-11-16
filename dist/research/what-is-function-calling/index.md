# What Is Function Calling (Tool Use) in AI?

Source: https://lowob.com/research/what-is-function-calling/
Publisher: lowob (https://lowob.com)
Published: 2026-11-17
Function: Strategy

> Summary: Function calling, also called tool use, is the mechanism that lets a language model ask for an action. The application tells the model which functions exist and what each one does. The model replies with a structured request naming a function and its arguments, the application runs it, and the result goes back to the model. The model never runs anything itself. Function calling is the building block under agents, connectors and MCP, and it is where permissions and approvals belong.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## Key points

- OpenAI added function calling to its API on 13 June 2023, letting models "output a JSON object containing arguments to call those functions".
- The same announcement warned that untrusted data in a tool's output can instruct the model to take unintended actions, and recommended user confirmation before actions such as sending an email.
- Anthropic separates client tools, which run in the customer's application, from server tools such as web search, which run on Anthropic's infrastructure.
- The model chooses a tool from its written description, so the description is part of the control surface.
- The Berkeley Function Calling Leaderboard (ICML 2025) found models handle single calls well, while memory, dynamic decision-making and long-horizon reasoning remain open challenges.

## What function calling means

Before function calling, getting a model to trigger software meant asking for text and parsing it, which broke whenever the wording changed. Function calling makes the request structured. Each function is described with a name, a plain-language description and a schema for its inputs.

An illustrative commercial example. A team defines a tool called `find\_open\_deals` that takes an account name. A seller asks: "What is still open with this client?" The round trip runs like this:

1. The application sends the question and the tool definition to the model.
2. The model replies with a tool call: `find\_open\_deals`, account name filled in.
3. The application checks the request, queries the CRM and returns the result.
4. The model writes its answer from that result.

In Anthropic's API the model's reply carries a `tool\_use` stop reason, and the application returns a `tool\_result` that references the call. OpenAI's API follows the same pattern with different field names.

| Term | Meaning |
| --- | --- |
| Tool or function definition | Name, description and input schema the model reads |
| Tool call | The model's structured request to run one function with given arguments |
| Tool result | What the application sends back after running it |
| Tool choice | Whether the model may decide (auto), must call a tool, or may not call one |
| Parallel calls | Several tool calls in one reply, run together |
| Client tool | Runs in your application, under your permissions |
| Server tool | Runs on the model provider's infrastructure, such as web search |
| Strict mode | Forces calls to match the schema exactly |

## Why it matters for a commercial team

Every action an agent takes passes through a function call, which makes it the natural checkpoint. The model proposes; the application disposes. Three design choices follow.

**Design tools at the autonomy level you want.** If an agent should never send email, do not give it a `send\_email` tool. Give it `create\_draft`. A tool that does not exist cannot be misused. This is how **lowob**'s rule that nothing sends without a person is enforced in practice.

**Validate arguments in code, not in the prompt.** If discounts above 10% need finance approval, the function that applies a discount should check the figure and refuse or route it. A prompt instruction can be ignored or overridden; a check in code cannot.

**Treat tool output as data.** OpenAI's 2023 warning still stands: text returned by a tool, such as an inbound email or a web page, can contain instructions. Our explainers on [prompt injection](https://lowob.com/research/what-is-prompt-injection/) and [excessive agency](https://lowob.com/research/what-is-excessive-agency/) cover the attacks and the controls.

Function calling also explains how MCP fits. The [Model Context Protocol](https://lowob.com/research/what-is-the-model-context-protocol/) standardises how tools are described and served across applications. Function calling is how the model then asks to use them.

## Common mistakes

- **Vague descriptions.** Anthropic's documentation notes the model "determines when to call a tool based on the user's request and the tool's description". "Gets data" is not a description.
- **Too many tools.** Each definition takes context, and every extra tool is another wrong choice available.
- **Tools that do too much.** A single `update\_crm` tool with free-form fields is harder to check than `set\_deal\_stage` with fixed values.
- **Trusting benchmark scores for long tasks.** BFCL's results suggest single calls are largely solved; multi-step sequences with state are not. Test your own sequences.

## lowob takeaways

- **The model asks; your software acts.** Function calling returns a structured request, never an executed action.
- **The tool list is a permission list.** Leave out actions the agent should not take.
- **Put rules in code.** Validate arguments where the function runs.
- **Tool output can carry instructions.** Treat it as untrusted data.

## Common questions

### What is the difference between function calling and tool use?

They are the same mechanism. OpenAI mostly says function calling; Anthropic mostly says tool use. Both mean the model returns a structured request for your application to run.

### Does the AI model execute the function itself?

No, for functions you define. The model only proposes the call; your application decides whether to run it. Some providers also offer server tools, such as web search, that they run on their own infrastructure.

### How is function calling related to MCP?

MCP is a standard for describing and serving tools so any compatible application can use them. Function calling is the model-side mechanism that requests those tools.

### Is function calling safe for sending emails or updating records?

Only with controls. Expose draft actions rather than send actions, validate arguments in code and require a person's approval for anything client-facing.

## Sources and notes

- [OpenAI, Function calling and other API updates](https://openai.com/index/function-calling-and-other-api-updates), 13 June 2023. Vendor announcement.
- [Anthropic, Tool use with Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview), accessed November 2026. Vendor documentation.
- [Patil et al., The Berkeley Function Calling Leaderboard (BFCL): From Tool Use to Agentic Evaluation of Large Language Models](https://proceedings.mlr.press/v267/patil25a.html), ICML 2025. Academic benchmark; tasks are general, not commercial.
- The draft-not-send tool design is **lowob**'s working method.

## Related research

- [MCP vs API Integrations: What Changes and What Does Not](https://lowob.com/research/mcp-vs-api-integrations/)
- [What Is an Agent Loop?](https://lowob.com/research/what-is-an-agent-loop/)
- [What Is Excessive Agency?](https://lowob.com/research/what-is-excessive-agency/)
- [Nothing Sends Without a Person](https://lowob.com/research/nothing-sends-without-a-person/)

## Next Move

List every tool your current assistant or agent can call. Strike out any that send, delete or pay, and replace each with a draft or request version that a person completes.

[Start a conversation](https://lowob.com/contact/)
