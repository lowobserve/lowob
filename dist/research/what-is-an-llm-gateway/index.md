# What Is an LLM Gateway?

Source: https://lowob.com/research/what-is-an-llm-gateway/
Publisher: lowob (https://lowob.com)
Published: 2026-11-15 · Updated: 2026-11-16
Function: Strategy

> Summary: An LLM gateway is a proxy that every AI request passes through on its way to a model provider. It gives a firm one place to issue keys, cap spend, route between models and keep logs. It is wiring, so rent it; the value appears once more than one app or provider is in use.

An LLM gateway is a proxy that sits between a company's applications and the AI model providers they call. Every request passes through it, so the gateway can check who is calling, enforce budgets and rate limits, route to a different model if one fails, filter sensitive data and log each call. It turns many separate API keys and bills into one control point.

*Figure: Agents are the reasoning layer, and they touch every stage of the build.*

## What an LLM gateway means

Without a gateway, each application or agent holds its own API key for each model provider. Spend appears on several invoices, logs live in several places, and switching models means changing code in several systems. A gateway puts one layer in the middle.

LiteLLM's documentation describes its gateway as "one OpenAI-compatible endpoint for 100+ LLM providers, MCP tools, and A2A agents". Cloudflare's AI Gateway offers a hosted equivalent. Both sit in the request path, which is what makes their controls enforceable rather than advisory.

| An LLM gateway is | An LLM gateway is not |
| --- | --- |
| A proxy every model call passes through | A model, or a replacement for one |
| The place to issue, limit and revoke keys | An evaluation tool that scores answers |
| A source of call-level logs and cost data | A full trace of an agent's reasoning |
| Rented wiring | Something a mid-size firm should build |

## How it works

### Identity and spend

LiteLLM lets an administrator give "each user, team, and project a virtual key". Each key carries its own allowed models, budget and rate limit, and the gateway records the cost of every request by key, team and tag. Cloudflare offers spend limits, in beta at the time of writing, that track cumulative dollar spend by model, provider or user, and custom costs so negotiated rates show correctly.

For agents this matters more than for people. If each agent has its own key, its spend, volume and errors can be seen separately, and its access can be cut without affecting anything else. That is the practical form of agent identity.

### Routing and resilience

Both products route requests between models. LiteLLM describes load balancing, fallbacks and retries that "move traffic between deployments when a provider has a problem". Cloudflare offers routing that changes models without changing application code, fallbacks when a model is unavailable and caching that serves identical requests from its cache.

### Filtering and logs

Gateways increasingly add guardrails. LiteLLM applies content filters and personal data masking to requests and responses; Cloudflare lists guardrails and data loss prevention, both in beta. Logs flow to observability tools: LiteLLM names Langfuse, Datadog, OpenTelemetry and Prometheus.

## Why it matters for a commercial team

### Runaway cost is a listed risk

OWASP's 2025 Top 10 for LLM applications includes unbounded consumption (LLM10). It covers denial of wallet, where an attacker exploits pay-per-use pricing to run up unsustainable costs. The first mitigation OWASP lists is rate limiting and user quotas. An agent stuck in a loop has the same effect without an attacker. Usage-based pricing makes caps a commercial control, not only a technical one.

### One switch for every agent

**lowob**'s governance model requires a named person able to stop every agent at once. A gateway is the natural place for that switch: revoke or suspend the keys, and every model call stops, whichever tool made it.

> If every model call passes through one place, that place is where you set the budget, keep the log and pull the plug.

## How to evaluate one

| Question | Why it matters |
| --- | --- |
| Can each agent and team have its own key? | Separate spend, limits and revocation |
| Are budgets hard caps or alerts? | Alerts do not stop a loop at 3am |
| Which providers and models are supported? | Avoid a second gateway later |
| Where do logs go, and for how long? | Retention must match your data policy |
| Is it hosted or self-hosted? | Hosted is faster; self-hosted keeps traffic in your network |
| Does it support your data residency needs? | Requests and logs may cross borders |

Rent, do not build. Open-source and hosted gateways already cover the common needs. The work for the firm is policy: which keys exist, who owns each, what each may spend and who can revoke them.

## lowob takeaways

- **One path for every call.** A gateway makes keys, limits and logs enforceable in one place.
- **Key per agent.** Separate keys give each agent its own budget, log and off switch.
- **Caps beat alerts.** Unbounded consumption is a listed risk; hard limits contain it.
- **It records, it does not judge.** Pair the gateway with evals and observability for quality.

## Sources and notes

- [LiteLLM Docs, LiteLLM AI Gateway](https://docs.litellm.ai/docs/simple_proxy/). Open-source project documentation; feature list changes with releases.
- [Cloudflare Docs, AI Gateway features](https://developers.cloudflare.com/ai-gateway/features/). Vendor documentation; several features marked beta.
- [OWASP Gen AI Security Project, LLM10:2025 Unbounded Consumption](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/), 2025. Community standard; mitigations are recommendations.

## Related research

- [What Is LLM Observability?](https://lowob.com/research/what-is-llm-observability/)
- [What Is Agent Identity and an Agent Registry?](https://lowob.com/research/what-is-agent-identity/)
- [What Is an AI Kill Switch?](https://lowob.com/research/what-is-an-ai-kill-switch/)
- [What Is Usage-Based Pricing for AI?](https://lowob.com/research/what-is-usage-based-pricing-for-ai/)

## Next move

Count the API keys for AI providers your firm holds and who holds each. If any agent shares a key with a person or another agent, give it its own key this week.

[Start a conversation](https://lowob.com/contact/)
