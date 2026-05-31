import { config } from 'dotenv';
import { sql } from 'drizzle-orm';
import { metric, type NewMetric } from './schema';
import { MANIFEST_DATA } from '../manifest-data';

// Load the real Supabase credentials from .env.local BEFORE the db client is
// imported — lib/db/index.ts reads DATABASE_URL at module-evaluation time, so the
// db import is deferred into main() to guarantee this runs first.
config({ path: '.env.local' });

/**
 * Per-field display label, provenance source, and optional unit.
 *
 * Labels and sources are transcribed from the live site's own consumers
 * (LiveStats, about, receipts, credibility hooks, work projects) so the database
 * reproduces exactly what the site shows today. Any MANIFEST_DATA field not listed
 * here falls back to a derived label and the manifest as its source — so every
 * field is still guaranteed a row.
 */
const META: Record<string, { label: string; source: string; unit?: string }> = {
  // Scale
  aiSignalFiles: { label: 'AI-Signal Files', source: 'AI_PROJECT_MANIFEST.md', unit: 'files' },
  projectRoots: { label: 'Project Roots', source: 'AI_PROJECT_MANIFEST.md', unit: 'roots' },
  flagshipProjects: { label: 'Flagship Projects', source: 'AI_PROJECT_MANIFEST.md', unit: 'projects' },
  vaultFilesIndexed: { label: 'Knowledge Base Files Indexed', source: 'vault-index.sqlite', unit: 'files' },
  vaultChunks: { label: 'Vault Chunks', source: 'vault-index.sqlite', unit: 'chunks' },
  vaultWords: { label: 'Vault Words', source: 'vault-index.sqlite', unit: 'words' },
  vaultTokens: { label: 'Indexed Tokens', source: 'AI_PROJECT_MANIFEST.md', unit: 'tokens' },
  vaultContentMB: { label: 'Vault Content Size', source: 'vault-index.sqlite', unit: 'MB' },
  vaultIndexSizeMB: { label: 'Vault Index Size', source: 'vault-index.sqlite', unit: 'MB' },
  architectureDocs: { label: 'Architecture Documents', source: 'vault-search.js stats', unit: 'docs' },
  skillsFiles: { label: 'Skills Files', source: 'vault-search.js stats', unit: 'files' },
  conversationSessions: { label: 'Conversation Sessions', source: 'vault-search.js stats', unit: 'sessions' },
  codeFiles: { label: 'Code Files', source: 'vault-search.js stats', unit: 'files' },
  configFiles: { label: 'Config Files', source: 'vault-search.js stats', unit: 'files' },
  sopFiles: { label: 'SOP Files', source: 'vault-search.js stats', unit: 'files' },
  // Languages
  typescriptFiles: { label: 'TypeScript Files', source: 'vault-search.js stats', unit: 'files' },
  tsxFiles: { label: 'TSX Files', source: 'vault-search.js stats', unit: 'files' },
  javascriptFiles: { label: 'JavaScript Files', source: 'vault-search.js stats', unit: 'files' },
  pythonFiles: { label: 'Python Files', source: 'vault-search.js stats', unit: 'files' },
  cssFiles: { label: 'CSS Files', source: 'vault-search.js stats', unit: 'files' },
  shellFiles: { label: 'Shell Files', source: 'vault-search.js stats', unit: 'files' },
  yamlFiles: { label: 'YAML Files', source: 'vault-search.js stats', unit: 'files' },
  sqlFiles: { label: 'SQL Files', source: 'vault-search.js stats', unit: 'files' },
  htmlFiles: { label: 'HTML Files', source: 'vault-search.js stats', unit: 'files' },
  // Live production
  productionDomains: { label: 'Live Production Domains', source: 'browser history + deployment notes', unit: 'domains' },
  spacebotVisits: { label: 'SpaceBot Production Visits', source: 'spacebot.space', unit: 'visits' },
  devSpacebotVisits: { label: 'Dev SpaceBot Visits', source: 'spacebot.space', unit: 'visits' },
  muniaVisits: { label: 'Munia Subdomain Visits', source: 'spacebot.space', unit: 'visits' },
  misskeyVisits: { label: 'Misskey Subdomain Visits', source: 'spacebot.space', unit: 'visits' },
  botspaceVisits: { label: 'BotSpace Visits', source: 'botspace.online', unit: 'visits' },
  directServerVisits: { label: 'Direct Server Visits', source: 'browser history + deployment notes', unit: 'visits' },
  botspaceBookmarks: { label: 'BotSpace Bookmarks', source: 'browser history + deployment notes', unit: 'bookmarks' },
  claudeAiVisits: { label: 'Claude.ai Visits', source: 'browser history + deployment notes', unit: 'visits' },
  claudeAiBookmarks: { label: 'Claude.ai Bookmarks', source: 'browser history + deployment notes', unit: 'bookmarks' },
  // Benchmarks (LUCY v3.2)
  grokBeatBySeconds: { label: 'Benchmark Lead Over Grok', source: 'DORYLUS_EVOLUTION_REPORT.md', unit: 'seconds' },
  deepseekBeatBySeconds: { label: 'Benchmark Lead Over DeepSeek', source: 'DORYLUS_EVOLUTION_REPORT.md', unit: 'seconds' },
  benchmarkAccuracy: { label: 'LUCY Benchmark Accuracy', source: 'DORYLUS_EVOLUTION_REPORT.md' },
  lucyV32ResponseTime: { label: 'LUCY v3.2 Response Time', source: 'DORYLUS_EVOLUTION_REPORT.md' },
  grokResponseTime: { label: 'Grok Response Time', source: 'DORYLUS_EVOLUTION_REPORT.md' },
  deepseekResponseTime: { label: 'DeepSeek Response Time', source: 'DORYLUS_EVOLUTION_REPORT.md' },
  // LUCY / DORYLUS
  lucyVersions: { label: 'LUCY Versions', source: 'DORYLUS_EVOLUTION_REPORT.md', unit: 'versions' },
  lucyAgents: { label: 'LUCY Agents', source: 'DORYLUS_EVOLUTION_REPORT.md', unit: 'agents' },
  lucyAlphaOne: { label: 'LUCY Alpha One', source: 'DORYLUS_EVOLUTION_REPORT.md' },
  lucyAlphaTwo: { label: 'LUCY Alpha Two', source: 'DORYLUS_EVOLUTION_REPORT.md' },
  lucyWingmen: { label: 'LUCY Wingmen', source: 'DORYLUS_EVOLUTION_REPORT.md', unit: 'agents' },
  apiArsenalCount: { label: 'API Arsenal Count', source: 'AI_PROJECT_MANIFEST.md', unit: 'APIs' },
  apiArsenalCategories: { label: 'API Arsenal Categories', source: 'AI_PROJECT_MANIFEST.md', unit: 'categories' },
  tavilyKeys: { label: 'Tavily API Keys', source: 'AI_PROJECT_MANIFEST.md', unit: 'keys' },
  cerebrasKeys: { label: 'Cerebras API Keys', source: 'AI_PROJECT_MANIFEST.md', unit: 'keys' },
  // vLLM / RunPod
  vllmVersions: { label: 'vLLM Versions', source: 'DORYLUS-RUNPOD-DEPLOYMENT-BIBLE.md', unit: 'versions' },
  runpodConsoleVisits: { label: 'RunPod Console Sessions', source: 'DORYLUS-RUNPOD-DEPLOYMENT-BIBLE.md', unit: 'sessions' },
  lucyV32VramGiB: { label: 'LUCY v3.2 VRAM', source: 'DORYLUS-RUNPOD-DEPLOYMENT-BIBLE.md', unit: 'GiB' },
  // CodeSpace
  messagingPlatforms: { label: 'Messaging Platforms', source: 'MEGATRON_REPORT.md', unit: 'platforms' },
  codespaceAgents: { label: 'CodeSpace Agent Implementations', source: 'MEGATRON_REPORT.md', unit: 'agents' },
  codespacePluginSdkFiles: { label: 'CodeSpace Plugin SDK Files', source: 'MEGATRON_REPORT.md', unit: 'files' },
  codespaceFoundationFiles: { label: 'CodeSpace Foundation Files', source: 'MEGATRON_REPORT.md', unit: 'files' },
  // BotSpace
  botPersonalities: { label: 'BotSpace Bot Personalities', source: 'botspace.online', unit: 'personalities' },
  heartbeatIterations: { label: 'Heartbeat Iterations', source: 'botspace.online', unit: 'iterations' },
  botspaceArchitectureDocs: { label: 'BotSpace Architecture Docs', source: 'botspace.online', unit: 'docs' },
  botspaceProductionFiles: { label: 'BotSpace Production Files', source: 'botspace.online', unit: 'files' },
  // Infrastructure
  cloudProviders: { label: 'Cloud Providers', source: 'AI_PROJECT_MANIFEST.md', unit: 'providers' },
  swarmNodes: { label: 'Swarm Nodes', source: 'ecosystem.config.cjs', unit: 'nodes' },
  swarmLogSizeGB: { label: 'Swarm Log Size', source: 'ecosystem.config.cjs', unit: 'GB' },
  gossipInboxFiles: { label: 'Gossip Inbox Files', source: 'ecosystem.config.cjs', unit: 'files' },
  gossipSyncPendingFiles: { label: 'Gossip Sync Pending Files', source: 'ecosystem.config.cjs', unit: 'files' },
  ollamaModelsGB: { label: 'Ollama Models Size', source: 'AI_PROJECT_MANIFEST.md', unit: 'GB' },
  ollamaModelFiles: { label: 'Ollama Model Files', source: 'AI_PROJECT_MANIFEST.md', unit: 'files' },
  oracleChicagoVisits: { label: 'Oracle Chicago Visits', source: 'browser history + deployment notes', unit: 'visits' },
  oracleOciVisits: { label: 'Oracle OCI Visits', source: 'browser history + deployment notes', unit: 'visits' },
  vastAiVisits: { label: 'Vast.ai Visits', source: 'browser history + deployment notes', unit: 'visits' },
  digitalOceanVisits: { label: 'DigitalOcean Visits', source: 'browser history + deployment notes', unit: 'visits' },
  supabaseVisits: { label: 'Supabase Visits', source: 'browser history + deployment notes', unit: 'visits' },
  vercelVisits: { label: 'Vercel Visits', source: 'browser history + deployment notes', unit: 'visits' },
  publicVercelDeployments: { label: 'Public Vercel Deployments', source: 'Vercel project inventory', unit: 'deployments' },
  // Research / Trading
  arxivPaperTSTR: { label: 'TSTR ArXiv Paper', source: 'arbitrage-paper-analysis.md' },
  arxivPaperTitle: { label: 'TSTR ArXiv Paper Title', source: 'arbitrage-paper-analysis.md' },
  tstrLanguage: { label: 'TSTR Runtime', source: 'arbitrage-paper-analysis.md' },
  // Browser intelligence
  browserAIHistoryUrls: { label: 'Browser AI History URLs', source: 'browser history + deployment notes', unit: 'urls' },
  browserAIBookmarks: { label: 'Browser AI Bookmarks', source: 'browser history + deployment notes', unit: 'bookmarks' },
  chromeProfiles: { label: 'Chrome Profiles', source: 'browser history + deployment notes', unit: 'profiles' },
  edgeProfiles: { label: 'Edge Profiles', source: 'browser history + deployment notes', unit: 'profiles' },
  chatExportFiles: { label: 'Chat Export Files', source: 'browser history + deployment notes', unit: 'files' },
  // Time
  activeDays: { label: 'Active Span', source: 'AI_PROJECT_MANIFEST.md', unit: 'days' },
  monthsToEmpire: { label: 'Months Active', source: 'AI_PROJECT_MANIFEST.md', unit: 'months' },
  originDate: { label: 'Origin Date', source: 'BCPilot Chrome extension compile date' },
  firstAISession: { label: 'First AI Session', source: 'picganize-prototype-v2-code.txt' },
  manifestGenerated: { label: 'Manifest Generated', source: 'AI_PROJECT_MANIFEST.md' },
  // Identifiers
  primaryModel: { label: 'Primary Model', source: 'AI_PROJECT_MANIFEST.md' },
  primaryModelProvider: { label: 'Primary Model Provider', source: 'AI_PROJECT_MANIFEST.md' },
  primaryInferenceProvider: { label: 'Primary Inference Provider', source: 'AI_PROJECT_MANIFEST.md' },
  primaryCloud: { label: 'Primary Cloud', source: 'AI_PROJECT_MANIFEST.md' },
  primaryAgentModel: { label: 'Primary Agent Model', source: 'AI_PROJECT_MANIFEST.md' },
  secondaryAgentModel: { label: 'Secondary Agent Model', source: 'AI_PROJECT_MANIFEST.md' },
  primaryGPU: { label: 'Primary GPU', source: 'AI_PROJECT_MANIFEST.md' },
  openclawVersion: { label: 'OpenClaw Version', source: 'AI_PROJECT_MANIFEST.md' },
  location: { label: 'Location', source: 'AI_PROJECT_MANIFEST.md' },
  timezone: { label: 'Timezone', source: 'AI_PROJECT_MANIFEST.md' },
};

const DEFAULT_SOURCE = 'AI_PROJECT_MANIFEST.md';

/**
 * Verified corrections applied over the raw manifest value. The manifest claims 26
 * public Vercel deployments, but the enumerable inventory (lib/vercel-portfolio.ts)
 * lists exactly 25 and the work page renders 25, so 25 is the verifiable truth and
 * the metric table (the source of truth) stores 25.
 */
const VALUE_OVERRIDES: Record<string, number | string> = {
  publicVercelDeployments: 25,
};

/** Fallback humaniser for any field missing an explicit label. */
function deriveLabel(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .split(/[\s_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function main(): Promise<void> {
  // Deferred import: see the dotenv note above.
  const { db } = await import('./index');

  const measuredAt = new Date(MANIFEST_DATA.manifestGenerated);

  const rows: NewMetric[] = Object.entries(MANIFEST_DATA).map(([key, value]) => {
    const meta = META[key];
    const resolved = key in VALUE_OVERRIDES ? VALUE_OVERRIDES[key] : value;
    const isNumber = typeof resolved === 'number';
    return {
      key,
      label: meta?.label ?? deriveLabel(key),
      valueText: isNumber ? null : String(resolved),
      valueNum: isNumber ? (resolved as number) : null,
      unit: meta?.unit ?? null,
      source: meta?.source ?? DEFAULT_SOURCE,
      measuredAt,
      updatedBy: 'seed',
    };
  });

  const expected = Object.keys(MANIFEST_DATA).length;
  if (rows.length !== expected) {
    throw new Error(`Row count mismatch: built ${rows.length}, expected ${expected}`);
  }

  // Idempotent upsert keyed on the metric key, so re-running the seed is safe.
  await db
    .insert(metric)
    .values(rows)
    .onConflictDoUpdate({
      target: metric.key,
      set: {
        label: sql`excluded.label`,
        valueText: sql`excluded.value_text`,
        valueNum: sql`excluded.value_num`,
        unit: sql`excluded.unit`,
        source: sql`excluded.source`,
        measuredAt: sql`excluded.measured_at`,
        updatedBy: sql`excluded.updated_by`,
        updatedAt: sql`now()`,
      },
    });

  const all = await db.select().from(metric);
  console.log(
    `\n✓ Seed complete. metric rows in database: ${all.length} (expected ${expected})\n`,
  );
  console.table(
    all.slice(0, 5).map((row) => ({
      key: row.key,
      label: row.label,
      value: row.valueNum ?? row.valueText,
      unit: row.unit,
      source: row.source,
      updated_by: row.updatedBy,
    })),
  );

  process.exit(0);
}

main().catch((err: unknown) => {
  console.error('✗ Seed failed:', err);
  process.exit(1);
});
