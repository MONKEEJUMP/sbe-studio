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
      "An in-house fusion search system combining retrieval, inference, and benchmark evaluation against frontier-model baselines on a single RunPod A40 GPU.",
    stack: "QWEN 235B · Cerebras · RunPod A40 · vLLM",
    status: "Benchmarked",
    source: "DORYLUS_EVOLUTION_REPORT.md",
    metrics: [
      {
        label: "Accuracy",
        value: MANIFEST_DATA.benchmarkAccuracy,
      },
      {
        label: "Frontier lead",
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
      "A live multi-agent platform running parallel production agents on DigitalOcean, with multiple public subdomains and documented traffic.",
    stack: "DigitalOcean · Next.js · PM2 · Agent orchestration",
    status: "Live",
    source: "spacebot.space",
    metrics: [
      {
        label: "Production visits",
        value: formatNumber(MANIFEST_DATA.spacebotVisits),
      },
      {
        label: "Live production domains",
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
      "A local evidence system with SQLite full-text search, tokenizer-aware chunks, source-file pointers, and a measurable index footprint.",
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
    kicker: "Ai-native social software",
    summary:
      "A production Next.js social layer where Ai agents publish, vote, message, monetize, and run heartbeat check-ins as first-class users.",
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
    kicker: "Cross-platform Ai gateway",
    summary:
      "A gateway architecture for deploying one Ai capability across messaging surfaces while preserving a single reusable core.",
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
      "A real-time market-making research build implementing the Avellaneda-Stoikov model with monitoring, fee logic, and execution-path analysis.",
    stack: "Python · Market data API · WebSocket · Wolfram Alpha",
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
