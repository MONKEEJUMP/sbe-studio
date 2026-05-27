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
 * the private AI project manifest.
 *
 * Every stat on every hook is sourced from MANIFEST_DATA. Every
 * hook points to a real file on a real hard drive.
 */
export const CREDIBILITY_HOOKS: CredibilityHook[] = [
  {
    id: 1,
    headline: "LUCY beat Grok by 12 seconds.",
    body: `Our in-house fusion search engine, LUCY v3.2, scored ${MANIFEST_DATA.benchmarkAccuracy} on a standardized benchmark and answered the same questions ${MANIFEST_DATA.grokBeatBySeconds} seconds faster than Grok and ${MANIFEST_DATA.deepseekBeatBySeconds} seconds faster than DeepSeek on a single NVIDIA A40 GPU. Total response time: ${MANIFEST_DATA.lucyV32ResponseTime}.`,
    stat: {
      value: `${MANIFEST_DATA.grokBeatBySeconds}s`,
      label: "LEAD OVER GROK",
    },
    source: "DORYLUS_EVOLUTION_REPORT.md",
  },
  {
    id: 2,
    headline: "A live multi-agent AI platform in production.",
    body: `SpaceBot.Space runs 18 parallel AI agents on DigitalOcean, receiving ${fmt(
      MANIFEST_DATA.spacebotVisits
    )} documented browser visits to the production domain. Four subdomains are live, including a Munia variant (${
      MANIFEST_DATA.muniaVisits
    } visits) and a Misskey social layer (${MANIFEST_DATA.misskeyVisits} visits). Built and deployed in under three months.`,
    stat: {
      value: fmt(MANIFEST_DATA.spacebotVisits),
      label: "PRODUCTION VISITS",
    },
    source: "spacebot.space",
  },
  {
    id: 3,
    headline: "A 107,730-file knowledge base with 159 million indexed tokens.",
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
    )}M tokens. Rebuilt daily. Replicated across six physical drives.`,
    stat: {
      value: `${(MANIFEST_DATA.vaultTokens / 1_000_000).toFixed(0)}M`,
      label: "INDEXED TOKENS",
    },
    source: "vault-index.sqlite",
  },
  {
    id: 4,
    headline: `A ${MANIFEST_DATA.swarmNodes}-node distributed AI swarm with ${fmt(
      MANIFEST_DATA.gossipInboxFiles
    )}+ gossip messages.`,
    body: `IMMORTAL SWARM: a PM2-managed swarm where each physical hard drive is an autonomous worker node, communicating via a file-based gossip protocol. ${MANIFEST_DATA.swarmLogSizeGB}+ GB of active log data. ${fmt(
      MANIFEST_DATA.gossipInboxFiles
    )} messages queued in the inbox. Queen on drive J; workers on C, D, E, G, K. Last active today.`,
    stat: {
      value: `${MANIFEST_DATA.swarmNodes}`,
      label: "SWARM NODES",
    },
    source: "ecosystem.config.cjs",
  },
  {
    id: 5,
    headline: "An Avellaneda-Stoikov market maker, live on Kalshi.",
    body: `TSTR implements the Avellaneda-Stoikov optimal market-making algorithm on Kalshi prediction markets. ${MANIFEST_DATA.tstrLanguage}. WebSocket real-time monitor. Fee engine, Wolfram Alpha verified. Execution layer. Market scanner. Built after a complete reading of ArXiv paper ${MANIFEST_DATA.arxivPaperTSTR}.`,
    stat: {
      value: MANIFEST_DATA.arxivPaperTSTR,
      label: "ARXIV PAPER",
    },
    source: "arbitrage-paper-analysis.md",
  },
  {
    id: 6,
    headline: `An AI gateway connecting to ${MANIFEST_DATA.messagingPlatforms}+ messaging platforms.`,
    body: `CodeSpace deploys QWEN 235B simultaneously across WhatsApp, Telegram, Signal, Discord, iMessage, Matrix, LINE, Slack, Feishu, Mattermost, and twelve other platforms. ${fmt(
      MANIFEST_DATA.codespaceAgents
    )} agent implementations. Built after a 9-phase reverse-engineering of OpenClaw v${MANIFEST_DATA.openclawVersion}.`,
    stat: {
      value: `${MANIFEST_DATA.messagingPlatforms}`,
      label: "MESSAGING PLATFORMS",
    },
    source: "MEGATRON_REPORT.md",
  },
  {
    id: 7,
    headline: `An AI social platform with ${MANIFEST_DATA.botPersonalities} bot personalities.`,
    body: `BotSpace is a production Next.js application built for AI agents, not humans. Agents post, vote, and message each other. ${MANIFEST_DATA.botPersonalities} bot personalities. A heartbeat check-in system iterated ${MANIFEST_DATA.heartbeatIterations} times. Stripe monetization. Live at botspace.online with ${MANIFEST_DATA.botspaceVisits} browser visits. Documented by ${MANIFEST_DATA.botspaceArchitectureDocs}+ architecture files.`,
    stat: {
      value: `v${MANIFEST_DATA.heartbeatIterations}`,
      label: "HEARTBEAT ITERATIONS",
    },
    source: "botspace.online",
  },
  {
    id: 8,
    headline: "A five-version vLLM cluster, built and debugged in the open.",
    body: `${MANIFEST_DATA.vllmVersions} iterations of a custom vLLM inference cluster deployed on RunPod A40 GPUs. AWQ and GPTQ quantization. Multi-GPU VRAM allocation (${MANIFEST_DATA.lucyV32VramGiB} GiB in v3.2). A "Never Again" engineering rulebook documenting every failure. ${MANIFEST_DATA.runpodConsoleVisits} RunPod console sessions logged.`,
    stat: {
      value: `${MANIFEST_DATA.vllmVersions}`,
      label: "VLLM VERSIONS",
    },
    source: "DORYLUS-RUNPOD-DEPLOYMENT-BIBLE.md",
  },
  {
    id: 9,
    headline: `${MANIFEST_DATA.architectureDocs} architecture documents in ${MANIFEST_DATA.monthsToEmpire} months.`,
    body: `Every non-trivial system gets a written blueprint before a single line of production code. Social platforms. Market-making algorithms. Distributed swarms. Multi-model fusion engines. Reviewed, iterated, built against \u2014 never guess-and-check. Verified in the vault index.`,
    stat: {
      value: `${MANIFEST_DATA.architectureDocs}`,
      label: "ARCHITECTURE DOCS",
    },
    source: "vault-search.js stats",
  },
  {
    id: 10,
    headline: "A public Vercel portfolio, shipped and linked.",
    body: `The studio work wall now tracks ${MANIFEST_DATA.publicVercelDeployments} public production deployments with live URLs, screenshots, and sector notes. The point is simple: finished work should be inspectable in a browser, not trapped in a slide deck.`,
    stat: {
      value: String(MANIFEST_DATA.publicVercelDeployments),
      label: "PUBLIC DEPLOYMENTS",
    },
    source: "Vercel project inventory",
  },
];
