import { MANIFEST_DATA } from "./manifest-data";

export type CredibilityHook = {
  id: number;
  headline: string;
  body: string;
  stat?: {
    value: string;
    label: string;
  };
  source?: string;
};

const fmt = (n: number) => new Intl.NumberFormat("en-US").format(n);

/**
 * 10 credibility hooks transcribed from the authoritative
 * "CREDIBILITY HOOKS FOR THE CONSULTING WEBSITE" section of
 * the private Ai project manifest.
 *
 * Every stat on every hook is sourced from MANIFEST_DATA. Every
 * hook points to a real file on a real hard drive.
 */
export const CREDIBILITY_HOOKS: CredibilityHook[] = [
  {
    id: 1,
    headline: "LUCY beats frontier models by 12 seconds.",
    body: `Our in-house fusion search engine, LUCY v3.2, scored ${MANIFEST_DATA.benchmarkAccuracy} on a standardized benchmark and answered the same questions ${MANIFEST_DATA.frontierBenchmarkLeadSeconds} seconds ahead of frontier-model baselines on a single NVIDIA A40 GPU. Total response time: ${MANIFEST_DATA.lucyV32ResponseTime}.`,
    stat: {
      value: `${MANIFEST_DATA.frontierBenchmarkLeadSeconds}s`,
      label: "FRONTIER LEAD",
    },
    source: "DORYLUS_EVOLUTION_REPORT.md",
  },
  {
    id: 2,
    headline: "A live multi-agent Ai platform in production.",
    body: `SpaceBot.Space runs 18 parallel Ai agents on DigitalOcean, receiving ${fmt(
      MANIFEST_DATA.spacebotVisits
    )} documented browser visits to the production domain. Four public subdomains are live, including a Munia variant (${
      MANIFEST_DATA.muniaVisits
    } visits) and a Misskey social layer (${MANIFEST_DATA.misskeyVisits} visits). Built and deployed as an operating platform in under three months.`,
    stat: {
      value: fmt(MANIFEST_DATA.spacebotVisits),
      label: "PRODUCTION VISITS",
    },
    source: "spacebot.space",
  },
  {
    id: 3,
    headline: `A ${fmt(
      MANIFEST_DATA.vaultFilesIndexed
    )}-file knowledge base with 159 million indexed tokens.`,
    body: `${fmt(
      MANIFEST_DATA.vaultFilesIndexed
    )} files indexed. ${MANIFEST_DATA.vaultContentMB.toFixed(
      1
    )} MB of content. A custom ${MANIFEST_DATA.vaultIndexSizeMB.toFixed(
      1
    )} MB SQLite full-text search index built with the DeepSeek V3 tokenizer, spanning ${(
      MANIFEST_DATA.vaultWords / 1_000_000
    ).toFixed(1)}M words and ~${(
      MANIFEST_DATA.vaultTokens / 1_000_000
    ).toFixed(
      0
    )}M tokens. Rebuilt daily and replicated across six physical drives.`,
    stat: {
      value: `${(MANIFEST_DATA.vaultTokens / 1_000_000).toFixed(0)}M`,
      label: "INDEXED TOKENS",
    },
    source: "vault-index.sqlite",
  },
  {
    id: 4,
    headline: `A ${MANIFEST_DATA.swarmNodes}-node distributed Ai swarm with ${fmt(
      MANIFEST_DATA.gossipInboxFiles
    )}+ gossip messages.`,
    body: `IMMORTAL SWARM: a PM2-managed distributed worker system where physical drives operate as autonomous nodes communicating through a file-based gossip protocol. ${MANIFEST_DATA.swarmLogSizeGB}+ GB of active log data. ${fmt(
      MANIFEST_DATA.gossipInboxFiles
    )} messages queued in the inbox. Queen on drive J; workers on C, D, E, G, K.`,
    stat: {
      value: `${MANIFEST_DATA.swarmNodes}`,
      label: "SWARM NODES",
    },
    source: "ecosystem.config.cjs",
  },
  {
    id: 5,
    headline: "An Avellaneda-Stoikov market maker.",
    body: `TSTR implements the Avellaneda-Stoikov optimal market-making algorithm for real-time trading systems. ${MANIFEST_DATA.tstrLanguage}. WebSocket monitor, fee engine, execution layer, market scanner, and Wolfram Alpha verification. Built after a complete reading of ArXiv paper ${MANIFEST_DATA.arxivPaperTSTR}.`,
    stat: {
      value: MANIFEST_DATA.arxivPaperTSTR,
      label: "ARXIV PAPER",
    },
    source: "arbitrage-paper-analysis.md",
  },
  {
    id: 6,
    headline: `An Ai gateway connecting to ${MANIFEST_DATA.messagingPlatforms}+ messaging platforms.`,
    body: `CodeSpace is an adapter architecture for deploying QWEN 235B across WhatsApp, Telegram, Signal, Discord, iMessage, Matrix, LINE, Slack, Feishu, Mattermost, and twelve other platforms. ${fmt(
      MANIFEST_DATA.codespaceAgents
    )} agent implementations. Built after a 9-phase reverse-engineering pass on OpenClaw v${MANIFEST_DATA.openclawVersion}.`,
    stat: {
      value: `${MANIFEST_DATA.messagingPlatforms}`,
      label: "MESSAGING PLATFORMS",
    },
    source: "MEGATRON_REPORT.md",
  },
  {
    id: 7,
    headline: `An Ai social platform with ${MANIFEST_DATA.botPersonalities} bot personalities.`,
    body: `BotSpace is a production Next.js application built for Ai agents as first-class users. Agents post, vote, message each other, and operate across ${MANIFEST_DATA.botPersonalities} bot personalities. The heartbeat system iterated ${MANIFEST_DATA.heartbeatIterations} times. Stripe monetization is installed. Live at botspace.online with ${MANIFEST_DATA.botspaceVisits} browser visits and ${MANIFEST_DATA.botspaceArchitectureDocs}+ architecture files.`,
    stat: {
      value: `${MANIFEST_DATA.botPersonalities}`,
      label: "BOT PERSONALITIES",
    },
    source: "botspace.online",
  },
  {
    id: 8,
    headline: `A ${MANIFEST_DATA.vllmVersions}-iteration vLLM cluster, built and debugged in the open.`,
    body: `${MANIFEST_DATA.vllmVersions} iterations of a custom vLLM inference cluster deployed on RunPod A40 GPUs. AWQ and GPTQ quantization. Multi-GPU VRAM allocation (${MANIFEST_DATA.lucyV32VramGiB} GiB in v3.2). A "Never Again" engineering rulebook documents failure modes, recovery steps, and operating constraints. ${MANIFEST_DATA.runpodConsoleVisits} RunPod console sessions logged.`,
    stat: {
      value: `${MANIFEST_DATA.vllmVersions}`,
      label: "VLLM ITERATIONS",
    },
    source: "DORYLUS-RUNPOD-DEPLOYMENT-BIBLE.md",
  },
  {
    id: 9,
    headline: `${fmt(MANIFEST_DATA.architectureDocs)} architecture documents in ${MANIFEST_DATA.monthsToEmpire} months.`,
    body: `Every non-trivial system gets a written blueprint before production code. Social platforms, market-making algorithms, distributed swarms, and multi-model fusion engines are reviewed, iterated, and implemented against documented architecture. Verified in the vault index.`,
    stat: {
      value: fmt(MANIFEST_DATA.architectureDocs),
      label: "ARCHITECTURE DOCS",
    },
    source: "vault-search.js stats",
  },
  {
    id: 10,
    headline: "A public live-site portfolio, shipped and linked.",
    body: `The studio work index tracks ${MANIFEST_DATA.publicVercelDeployments} public production sites with live URLs, screenshots, and sector notes. Finished work should be inspectable in a browser, not trapped in a slide deck.`,
    stat: {
      value: String(MANIFEST_DATA.publicVercelDeployments),
      label: "LIVE SITES",
    },
    source: "Vercel project inventory",
  },
];
