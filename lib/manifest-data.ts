/**
 * Source of truth for every statistic on the SBE website.
 *
 * Upstream source: private Ai project manifest.
 *
 * Every value below is verifiable against that manifest or against
 * a file enumerated in the manifest's EVIDENCE INDEX section. When a
 * value changes in the manifest, it changes here \u2014 nowhere else.
 */
export const MANIFEST_DATA = {
  // Scale
  aiSignalFiles: 1121255,
  projectRoots: 1521,
  flagshipProjects: 20,
  vaultFilesIndexed: 900867,
  vaultChunks: 581267,
  vaultWords: 79567503,
  vaultTokens: 159000000,
  vaultContentMB: 803.7,
  vaultIndexSizeMB: 2395.9,
  architectureDocs: 256997,
  skillsFiles: 1992,
  conversationSessions: 555,
  codeFiles: 36198,
  configFiles: 60673,
  sopFiles: 688,

  // Languages
  typescriptFiles: 20457,
  tsxFiles: 4352,
  javascriptFiles: 5416,
  pythonFiles: 3058,
  cssFiles: 1718,
  shellFiles: 330,
  yamlFiles: 491,
  sqlFiles: 97,
  htmlFiles: 748,

  // Live production
  productionDomains: 89,
  spacebotVisits: 4810,
  devSpacebotVisits: 432,
  muniaVisits: 277,
  misskeyVisits: 156,
  botspaceVisits: 115,
  directServerVisits: 148,
  botspaceBookmarks: 4,
  claudeAiVisits: 2025,
  claudeAiBookmarks: 14,

  // Benchmarks (LUCY v3.2)
  grokBeatBySeconds: 12,
  deepseekBeatBySeconds: 14,
  benchmarkAccuracy: "11/11",
  lucyV32ResponseTime: "5-8 seconds",
  grokResponseTime: "17-20 seconds",
  deepseekResponseTime: "19-22 seconds",

  // LUCY / DORYLUS
  lucyVersions: 5,
  lucyAgents: 6, // 1 ALPHA + 5 WINGMEN
  lucyAlphaOne: "ALPHA ONE",
  lucyAlphaTwo: "ALPHA TWO",
  lucyWingmen: 5,
  apiArsenalCount: 1565,
  apiArsenalCategories: 42,
  tavilyKeys: 5,
  cerebrasKeys: 7,

  // vLLM / RunPod
  vllmVersions: 55,
  runpodConsoleVisits: 490,
  lucyV32VramGiB: 37.5,

  // CodeSpace
  messagingPlatforms: 22,
  codespaceAgents: 672,
  codespacePluginSdkFiles: 319,
  codespaceFoundationFiles: 5350,

  // BotSpace
  botPersonalities: 192,
  heartbeatIterations: 14,
  botspaceArchitectureDocs: 80,
  botspaceProductionFiles: 4575,

  // Infrastructure
  cloudProviders: 5,
  swarmNodes: 7,
  swarmLogSizeGB: 3.5,
  gossipInboxFiles: 32836,
  gossipSyncPendingFiles: 24215,
  ollamaModelsGB: 105.7,
  ollamaModelFiles: 31,
  oracleChicagoVisits: 678,
  oracleOciVisits: 341,
  vastAiVisits: 109,
  digitalOceanVisits: 235,
  supabaseVisits: 175,
  vercelVisits: 87,
  publicVercelDeployments: 89,
  pagesShipped: 623,

  // Research / Trading
  arxivPaperTSTR: "2508.03474",
  arxivPaperTitle: "Unravelling the Probabilistic Forest",
  tstrLanguage: "Python 3.14",

  // Browser intelligence
  browserAIHistoryUrls: 4111,
  browserAIBookmarks: 636,
  chromeProfiles: 48,
  edgeProfiles: 7,
  chatExportFiles: 400,

  // Time
  activeDays: 856, // fallback only; live UI derives from originDate
  monthsToEmpire: 5, // per manifest: "Total active span: 5 months"
  originDate: "2024-02-12", // SBE full-time Ai web journey start
  firstAISession: "2025-12-15", // picganize-prototype-v2-code.txt
  manifestGenerated: "2026-04-23",

  // Identifiers
  primaryModel: "QWEN 235B",
  primaryModelProvider: "Alibaba/Dashscope",
  primaryInferenceProvider: "Cerebras",
  primaryCloud: "DigitalOcean",
  primaryAgentModel: "Claude Opus 4.7",
  secondaryAgentModel: "Claude Sonnet 4.6",
  primaryGPU: "RunPod A40",
  openclawVersion: "2026.3.13",
  location: "Oklahoma City",
  timezone: "America/Chicago",
} as const;

export type ManifestData = typeof MANIFEST_DATA;
