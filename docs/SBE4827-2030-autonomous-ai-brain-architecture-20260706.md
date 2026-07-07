# SBE4827-2030 Autonomous Ai Brain Architecture

Date: 2026-07-06  
Project: SBE Studio / Space Bot Engineering  
Repo: `C:\Users\DJ PAULIEWOOD\Dropbox\PC\Desktop\sbe-ai-consulting`  
Live site: `https://sbe.studio`  
Purpose: architecture plan for adding a real large language model to SBE Studio without breaking the public site, leaking private material, or pretending unsafe autonomy is ready before the proof gates exist.

## Executive Decision

SBE should not start with a generic public chatbot. SBE should build a staged "SBE Brain" that becomes the operating layer of the site:

1. Public-safe Ai concierge.
2. Structured intake and lead triage.
3. Receipts/evidence retrieval.
4. Blog/content draft factory with human approval.
5. Scheduled site maintenance and proof checks.
6. Private authenticated command center.
7. Agents SDK orchestration only after the simpler Responses API lanes are working.

The right first production stack is:

- Next.js Route Handlers for server-side API routes.
- OpenAI Responses API as the primary model runtime.
- OpenAI Structured Outputs for all model output consumed by code.
- OpenAI file search/vector stores for public SBE knowledge.
- OpenAI web search for current public research when allowed.
- Application-owned function tools for deterministic site actions.
- Vercel Cron for scheduled checks.
- Neon/Supabase/Postgres-style database for conversations, drafts, jobs, and receipts.
- Vercel Blob for screenshots, generated media, and file artifacts.
- Edge Config for feature flags and low-latency public config.

The public site can feel alive immediately, but write actions must stay gated.

## Current SBE Site State

The current site is clean and mostly static:

- Next.js 16 App Router.
- React 19 and TypeScript.
- Tailwind brand system.
- Static public pages: home, work, services, about, receipts, contact.
- One static JSON API: `app/api/stats/route.ts`.
- Manifest-backed stats in `lib/manifest-data.ts`.
- No current OpenAI SDK dependency.
- No `OPENAI_API_KEY` integration.
- No database.
- No auth.
- No blog/content system.
- No cron jobs.
- No chatbot or LLM route.
- No `vercel.json`.
- Public-safety guard exists: `scripts/check-public-safety.mjs`.

This is a good foundation because the public site is not tangled with half-built automation.

## Research Findings

### OpenAI

- The Responses API is OpenAI's advanced interface for stateful, tool-using model responses with built-in tools such as file search and web search, plus function calling.
- Current OpenAI guidance says GPT-5.5 is the latest model family and recommends the Responses API for reasoning, tool-calling, and multi-turn use cases.
- Structured Outputs should be used when code consumes model output.
- File search with vector stores is the hosted retrieval lane for private/product knowledge.
- Web search can be enabled as a Responses tool for current public facts.
- Function calling remains the right pattern for application-owned deterministic tools.
- Remote MCP/connectors can be used later, but require careful approvals because external tool definitions and outputs can expose data.
- Compaction is the OpenAI lane for long-running state.
- Agent evals/traces/datasets should be used as the system grows beyond one route.
- Agents SDK is the right later-stage orchestrator for handoffs, guardrails, sessions, tracing, and human-in-the-loop workflows.

### Vercel / Next.js

- Vercel AI SDK is strong for streaming chat UI, structured generation, tool calls, and provider switching.
- Vercel Cron can trigger scheduled Functions.
- Vercel Storage recommends Blob for files, Edge Config for low-latency config, and marketplace databases such as Neon/Supabase/Upstash for durable application data.
- Next.js Route Handlers are the correct home for server-side model calls.
- Next.js Server Functions/Actions are reachable by POST and must enforce authentication/authorization.
- New Redis work on Vercel should use Marketplace Redis/Upstash; Vercel KV is no longer the new-project default.

### GitHub / Example Projects

- `openai/openai-responses-starter-app` is the closest OpenAI starter: Next.js, Responses API, streaming responses/tool calls, web search, file search/vector store creation, MCP server configuration, and function calling.
- `openai/openai-support-agent-demo` demonstrates a human-in-the-loop customer support pattern with file search, knowledge base display, suggested responses, suggested actions, and auto-execution only for non-sensitive actions.
- `vercel/chatbot` demonstrates a full Next.js AI chat app with AI SDK, persistence, file storage, and auth.
- `openai/openai-node` supports streaming Responses API calls from Node/TypeScript.
- `openai/openai-agents-js` is useful later for multi-agent orchestration, but it currently expects Node 22+ and should not be the first dependency unless the runtime is ready.

## Target Product Shape

The SBE Brain should have five personalities/lanes, all running from one policy core:

1. Public Concierge
   - Lives on the public website.
   - Answers questions about SBE services, work, receipts, process, contact, and public proof.
   - Uses only public SBE knowledge and allowed web search.
   - Refuses private project questions.

2. Intake Architect
   - Converts a visitor conversation into a structured project intake.
   - Extracts business problem, current stack, desired outcome, risks, timeline, and contact intent.
   - Does not promise pricing or accept legal/payment commitments.

3. Receipts Librarian
   - Answers "where did this number come from?"
   - Pulls from public receipts/evidence objects.
   - Returns source labels and proof confidence.

4. Content Studio
   - Drafts blog posts, launch notes, proof updates, and case-study outlines.
   - Stores drafts as `draft` or `needs_review`.
   - PAULIEWOOD approves before publishing.

5. Maintenance Operator
   - Runs scheduled checks.
   - Verifies routes, screenshots, stats/receipts consistency, blocked terms, and deploy health.
   - Produces a daily/weekly report.
   - Does not push code or publish content without approval in the first versions.

## Core Architecture

### Public Runtime

- `components/ai/SbeBrainLauncher.tsx`
- `components/ai/SbeBrainPanel.tsx`
- `app/api/ai/chat/route.ts`
- `lib/ai/openai-client.ts`
- `lib/ai/brain-policy.ts`
- `lib/ai/schemas.ts`
- `lib/ai/public-knowledge.ts`

The route handler keeps the OpenAI API key server-side. No API key goes to the browser.

### Knowledge Layer

Use two tiers:

1. Local public knowledge files
   - `content/knowledge/public/sbe-site.md`
   - `content/knowledge/public/services.md`
   - `content/knowledge/public/receipts.md`
   - `content/knowledge/public/work.md`
   - `content/knowledge/public/refusals.md`

2. OpenAI vector store
   - Upload only public-safe knowledge.
   - Store vector store ID in Vercel env or database config.
   - Never upload private Obsidian, Cactus, BigC, Waterfall, Kalshi, client, credential, or raw repo content to a public-facing assistant.

### Data Layer

Add a database before serious autonomy:

- `conversations`
- `messages`
- `intake_submissions`
- `ai_runs`
- `ai_tool_calls`
- `content_drafts`
- `evidence_items`
- `maintenance_reports`
- `agent_jobs`

Recommended first DB: Neon Postgres or Supabase Postgres via Vercel Marketplace.

### Storage Layer

- Vercel Blob for screenshots, generated images, export files, draft attachments, and archived maintenance reports.
- Edge Config for feature flags:
  - `sbe_brain_enabled`
  - `sbe_public_chat_enabled`
  - `sbe_blog_autodraft_enabled`
  - `sbe_autopublish_enabled` should remain `false` until explicit approval.

### Scheduled Autonomy

Add `vercel.json` only when the first cron route exists.

Candidate cron routes:

- `app/api/cron/site-health/route.ts`
- `app/api/cron/portfolio-refresh/route.ts`
- `app/api/cron/content-draft/route.ts`
- `app/api/cron/receipt-audit/route.ts`

Vercel Cron timing and plan limits must be checked before choosing frequency. Hobby accounts can be more restrictive than Pro.

## Responses API Contract

### Model Choice

Default:

- `gpt-5.5`
- `reasoning.effort: "low"` for normal public concierge turns.
- `reasoning.effort: "medium"` for intake, receipts, draft generation, and tool-heavy tasks.
- Higher effort only after evals show it is worth the latency/cost.

Fast classifier:

- Use a smaller/lower-cost model later if the app needs high-volume intent classification.

### Prompt Layout

Stable prompt prefix:

1. SBE Brain role and boundaries.
2. Public/private firewall.
3. Brand voice.
4. Tool policy.
5. Structured output schema.
6. Refusal examples.

Dynamic suffix:

1. User message.
2. Current page context.
3. Retrieved public sources.
4. Session state.

This layout improves prompt caching because the stable prefix stays identical.

### Structured Output: Public Chat

Minimum schema:

```json
{
  "schema_version": "1.0.0",
  "status": "answer|needs_clarification|refused|handoff",
  "public_answer": "string",
  "source_cards": [
    {
      "title": "string",
      "url_or_path": "string",
      "source_type": "site_page|receipt|work_item|knowledge_file|web",
      "confidence": "high|medium|low"
    }
  ],
  "recommended_next_action": "none|contact|view_work|view_receipts|start_intake",
  "safety_notes": ["string"]
}
```

### Structured Output: Intake

Minimum schema:

```json
{
  "schema_version": "1.0.0",
  "status": "ready|incomplete|needs_review",
  "project_type": "audit|build|operate|unknown",
  "business_problem": "string",
  "current_stack": ["string"],
  "desired_outcome": "string",
  "timeline": "string",
  "risk_flags": ["private_data|payment|legal|medical|financial|unknown_scope"],
  "contact_intent": "low|medium|high",
  "next_question": "string"
}
```

### Structured Output: Content Draft

Minimum schema:

```json
{
  "schema_version": "1.0.0",
  "status": "draft|needs_sources|refused",
  "title": "string",
  "slug": "string",
  "summary": "string",
  "body_markdown": "string",
  "source_requirements": ["string"],
  "publish_risk": "low|medium|high",
  "required_human_review": true
}
```

## Tool Contracts

First safe tools:

1. `get_site_manifest`
   - Reads public `MANIFEST_DATA`.
   - No side effects.

2. `get_public_work_items`
   - Reads `lib/work.ts` or exported public work data.
   - No side effects.

3. `get_receipt_items`
   - Reads typed receipt/evidence data once that exists.
   - No side effects.

4. `submit_intake`
   - Writes a new intake submission.
   - Must validate email/contact fields.
   - No outreach side effect.

5. `save_content_draft`
   - Writes a draft only.
   - Requires human review before publish.

6. `run_public_safety_check`
   - Executes deterministic checks.
   - No model override of pass/fail.

7. `create_maintenance_report`
   - Writes a report.
   - Does not deploy or publish.

Later gated tools:

- `publish_blog_post`
- `open_github_issue`
- `create_github_pr`
- `trigger_vercel_deploy`
- `update_receipt_status`

These require authentication, logs, and human approval.

## Public Safety Rules

The public assistant must refuse or route away from:

- Private client/project details.
- Private Obsidian content.
- Cactus/BigC/Waterfall/Kalshi-style proprietary terms.
- Credential/API key requests.
- Payment/legal/account changes.
- Promises about guaranteed outcomes.
- Unsupported stats.
- Requests to deploy, delete, commit, or publish without authenticated approval.

It may answer:

- SBE services.
- Public work.
- Public receipts.
- How SBE works.
- How to start a project conversation.
- High-level agent-native engineering philosophy.
- Public-safe blog content.

## Blog Autonomy Plan

Phase 1:

- Add `/blog`.
- Add static MD/MDX or database-backed posts.
- AI drafts only.
- PAULIEWOOD approves.

Phase 2:

- Weekly scheduled draft suggestions.
- Drafts use web search for current public research and public SBE receipts.
- Every factual claim has source cards.

Phase 3:

- Admin button publishes approved drafts.
- Build/check/deploy remains explicit.

Phase 4:

- The site can propose PRs for content changes.
- No direct auto-publish unless PAULIEWOOD explicitly approves that operating mode later.

## Build Roadmap

### Phase 0 - Design The Brain Contract

- Create `docs/SBE4827-2031-sbe-brain-contract.md`.
- Define public-safe knowledge corpus.
- Define refusal topics.
- Define schemas.
- Define tool contracts.

### Phase 1 - Public Concierge MVP

- Add `openai` dependency.
- Add secure API key setup through Vercel env.
- Add `app/api/ai/chat/route.ts`.
- Add public chat UI component.
- Use Responses API with Structured Outputs.
- Start without file search; inject a small local public corpus.
- Add tests for private-term refusal and source-bound answers.

### Phase 2 - Intake MVP

- Add database.
- Add contact/intake form.
- Add structured intake extraction.
- Store submissions.
- Add admin-only review route.

### Phase 3 - File Search

- Build public knowledge files.
- Create vector store.
- Upload only public-safe files.
- Add file search tool.
- Show source cards in the UI.

### Phase 4 - Receipts Engine

- Move receipts into typed data.
- Add evidence statuses.
- Teach the brain to answer receipt questions.
- Add stat/receipt regression tests.

### Phase 5 - Blog Draft Factory

- Add `/blog`.
- Add draft storage.
- Add content draft schema.
- Add admin review/publish flow.
- Add weekly cron draft suggestions.

### Phase 6 - Maintenance Agent

- Add Vercel Cron.
- Run route checks, screenshot checks, public-safety checks, and stale-source checks.
- Store reports.
- Show reports in private command center.

### Phase 7 - Agents SDK Command Center

- Upgrade to Node 22 if needed.
- Add `@openai/agents`.
- Split agents into Concierge, Receipts, Content, Maintenance, and Operator.
- Use handoffs, tracing, guardrails, and human-in-the-loop approvals.

### Phase 8 - Realtime Voice Layer

- Add voice only after text concierge and tool safety are stable.
- Use Realtime API/WebRTC for browser voice.
- Keep server-side controls for tools and business logic.

## Immediate Implementation Recommendation

Do not jump straight to full autonomy.

Next commit should be:

1. Add `docs/SBE4827-2031-sbe-brain-contract.md`.
2. Add `content/knowledge/public/` files.
3. Add `lib/ai/schemas.ts`.
4. Add `lib/ai/brain-policy.ts`.
5. Add `scripts/check-ai-brain-fixtures.mjs`.
6. Add test fixtures:
   - normal service question.
   - receipt/source question.
   - private project request.
   - fake stat request.
   - prompt injection request.
   - publish/delete/deploy request.

Only after those pass should SBE add live API calls.

## Required Secrets / Setup

No secret should be committed.

Needed later:

- `OPENAI_API_KEY`
- `OPENAI_VECTOR_STORE_ID` after file search setup
- `DATABASE_URL`
- `BLOB_READ_WRITE_TOKEN` if using Vercel Blob
- `CRON_SECRET` for scheduled route protection
- `ADMIN_SECRET` or proper auth provider for private command center

Use the secure OpenAI API key flow in Codex/OpenAI Platform when the implementation starts.

## Sources

- OpenAI Responses overview: https://developers.openai.com/api/reference/responses/overview
- OpenAI latest model guide: https://developers.openai.com/api/docs/guides/latest-model
- OpenAI web search tool: https://developers.openai.com/api/docs/guides/tools-web-search
- OpenAI file search tool: https://developers.openai.com/api/docs/guides/tools-file-search
- OpenAI function calling: https://developers.openai.com/api/docs/guides/function-calling
- OpenAI Structured Outputs: https://developers.openai.com/api/docs/guides/structured-outputs
- OpenAI MCP/connectors: https://developers.openai.com/api/docs/guides/tools-connectors-mcp
- OpenAI compaction: https://developers.openai.com/api/docs/guides/compaction
- OpenAI agent evals: https://developers.openai.com/api/docs/guides/agent-evals
- OpenAI Node SDK: https://github.com/openai/openai-node
- OpenAI Responses starter app: https://github.com/openai/openai-responses-starter-app
- OpenAI support agent demo: https://github.com/openai/openai-support-agent-demo
- OpenAI Agents JS: https://github.com/openai/openai-agents-js
- Vercel AI SDK: https://vercel.com/docs/ai-sdk
- Vercel Cron Jobs: https://vercel.com/docs/cron-jobs/quickstart
- Vercel Storage: https://vercel.com/docs/storage
- Vercel Redis/Upstash direction: https://vercel.com/docs/redis
- Vercel Chatbot template: https://github.com/vercel/chatbot
- Next.js Server Functions and mutations: https://nextjs.org/docs/app/getting-started/mutating-data
- Next.js Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers

