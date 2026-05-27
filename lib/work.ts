import { MANIFEST_DATA } from "./manifest-data";
import { formatNumber } from "./utils";

export type WorkMetric = {
  label: string;
  value: string;
};

export type WorkProject = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  stack: string;
  status: string;
  source: string;
  metrics: WorkMetric[];
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "lucy-fusion-search",
    title: "LUCY v3.2 Fusion Search",
    kicker: "Inference + retrieval",
    summary:
      "An in-house fusion search system benchmarked against Grok and DeepSeek on a single RunPod A40 GPU.",
    stack: "QWEN 235B · Cerebras · RunPod A40 · vLLM",
    status: "Benchmarked",
    source: "DORYLUS_EVOLUTION_REPORT.md",
    metrics: [
      {
        label: "Accuracy",
        value: MANIFEST_DATA.benchmarkAccuracy,
      },
      {
        label: "Lead over Grok",
        value: `${MANIFEST_DATA.grokBeatBySeconds}s`,
      },
      {
        label: "Response time",
        value: MANIFEST_DATA.lucyV32ResponseTime,
      },
    ],
  },
  {
    slug: "spacebot-production-platform",
    title: "SpaceBot.Space Production Platform",
    kicker: "Multi-agent production system",
    summary:
      "A live AI platform running parallel agents on DigitalOcean with multiple production subdomains and documented traffic.",
    stack: "DigitalOcean · Next.js · PM2 · Agent orchestration",
    status: "Live",
    source: "spacebot.space",
    metrics: [
      {
        label: "Production visits",
        value: formatNumber(MANIFEST_DATA.spacebotVisits),
      },
      {
        label: "Production domains",
        value: String(MANIFEST_DATA.productionDomains),
      },
      {
        label: "Agents",
        value: "18",
      },
    ],
  },
  {
    slug: "vault-knowledge-base",
    title: "Vault Knowledge Base",
    kicker: "Search + indexing",
    summary:
      "A local knowledge base with a SQLite full-text index, tokenizer-aware chunks, and file-backed evidence pointers.",
    stack: "SQLite FTS · DeepSeek tokenizer · Local file index",
    status: "Operational",
    source: "vault-index.sqlite",
    metrics: [
      {
        label: "Files indexed",
        value: formatNumber(MANIFEST_DATA.vaultFilesIndexed),
      },
      {
        label: "Indexed tokens",
        value: `${MANIFEST_DATA.vaultTokens / 1_000_000}M`,
      },
      {
        label: "Index size",
        value: `${MANIFEST_DATA.vaultIndexSizeMB.toFixed(1)} MB`,
      },
    ],
  },
  {
    slug: "botspace-agent-social",
    title: "BotSpace Agent Social Layer",
    kicker: "AI-native social software",
    summary:
      "A production Next.js application where AI agents post, vote, message each other, and run heartbeat check-ins.",
    stack: "Next.js · Stripe · Agent workflows",
    status: "Live",
    source: "botspace.online",
    metrics: [
      {
        label: "Bot personalities",
        value: String(MANIFEST_DATA.botPersonalities),
      },
      {
        label: "Heartbeat iterations",
        value: String(MANIFEST_DATA.heartbeatIterations),
      },
      {
        label: "Architecture docs",
        value: `${MANIFEST_DATA.botspaceArchitectureDocs}+`,
      },
    ],
  },
  {
    slug: "codespace-gateway",
    title: "CodeSpace Messaging Gateway",
    kicker: "Cross-platform AI gateway",
    summary:
      "A gateway design for deploying one AI capability across many messaging surfaces without rebuilding the core logic.",
    stack: "QWEN 235B · OpenClaw · TypeScript · Platform adapters",
    status: "Designed",
    source: "MEGATRON_REPORT.md",
    metrics: [
      {
        label: "Messaging platforms",
        value: `${MANIFEST_DATA.messagingPlatforms}+`,
      },
      {
        label: "Agent implementations",
        value: formatNumber(MANIFEST_DATA.codespaceAgents),
      },
      {
        label: "SDK files",
        value: formatNumber(MANIFEST_DATA.codespacePluginSdkFiles),
      },
    ],
  },
  {
    slug: "tstr-market-maker",
    title: "TSTR Market Maker",
    kicker: "Trading systems research",
    summary:
      "An Avellaneda-Stoikov market-making implementation for Kalshi prediction markets with a real-time monitor and fee engine.",
    stack: "Python · Kalshi API · WebSocket · Wolfram Alpha",
    status: "Research build",
    source: "arbitrage-paper-analysis.md",
    metrics: [
      {
        label: "Paper",
        value: MANIFEST_DATA.arxivPaperTSTR,
      },
      {
        label: "Runtime",
        value: MANIFEST_DATA.tstrLanguage,
      },
      {
        label: "Method",
        value: "Avellaneda-Stoikov",
      },
    ],
  },
];
