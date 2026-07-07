import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActiveSpanCounter } from "@/components/ui/ActiveSpanCounter";
import { MANIFEST_DATA } from "@/lib/manifest-data";
import { formatDate, formatNumber } from "@/lib/utils";

const RECEIPTS = [
  {
    claim: "Knowledge base files indexed",
    value: formatNumber(MANIFEST_DATA.vaultFilesIndexed),
    source: "vault-index.sqlite",
  },
  {
    claim: "Indexed tokens",
    value: `${MANIFEST_DATA.vaultTokens / 1_000_000}M`,
    source: "Ai project manifest",
  },
  {
    claim: "Architecture documents",
    value: formatNumber(MANIFEST_DATA.architectureDocs),
    source: "vault-search.js stats",
  },
  {
    claim: "Live production domains",
    value: String(MANIFEST_DATA.productionDomains),
    source: "browser history + deployment notes",
  },
  {
    claim: "Public/live portfolio sites",
    value: String(MANIFEST_DATA.publicVercelDeployments),
    source: "Vercel project inventory",
  },
  {
    claim: "Pages shipped",
    value: formatNumber(MANIFEST_DATA.pagesShipped),
    source: "89 live sites x 7 average pages",
  },
  {
    claim: "Platform signal",
    value: "www",
    source: "public web portfolio",
  },
  {
    claim: "SpaceBot production visits",
    value: formatNumber(MANIFEST_DATA.spacebotVisits),
    source: "spacebot.space",
  },
  {
    claim: "SpaceBot production agents",
    value: "18",
    source: "spacebot.space",
  },
  {
    claim: "LUCY benchmark accuracy",
    value: MANIFEST_DATA.benchmarkAccuracy,
    source: "DORYLUS_EVOLUTION_REPORT.md",
  },
  {
    claim: "Benchmark lead over frontier models",
    value: `${MANIFEST_DATA.frontierBenchmarkLeadSeconds}s`,
    source: "DORYLUS_EVOLUTION_REPORT.md",
  },
  {
    claim: "LUCY response time",
    value: MANIFEST_DATA.lucyV32ResponseTime,
    source: "DORYLUS_EVOLUTION_REPORT.md",
  },
  {
    claim: "vLLM iterations / versions",
    value: String(MANIFEST_DATA.vllmVersions),
    source: "DORYLUS-RUNPOD-DEPLOYMENT-BIBLE.md",
  },
  {
    claim: "RunPod console sessions",
    value: formatNumber(MANIFEST_DATA.runpodConsoleVisits),
    source: "RunPod console history",
  },
  {
    claim: "Messaging platforms",
    value: `${MANIFEST_DATA.messagingPlatforms}+`,
    source: "MEGATRON_REPORT.md",
  },
  {
    claim: "CodeSpace agent implementations",
    value: formatNumber(MANIFEST_DATA.codespaceAgents),
    source: "MEGATRON_REPORT.md",
  },
  {
    claim: "CodeSpace SDK files",
    value: formatNumber(MANIFEST_DATA.codespacePluginSdkFiles),
    source: "MEGATRON_REPORT.md",
  },
  {
    claim: "BotSpace bot personalities",
    value: String(MANIFEST_DATA.botPersonalities),
    source: "botspace.online",
  },
  {
    claim: "BotSpace heartbeat iterations",
    value: String(MANIFEST_DATA.heartbeatIterations),
    source: "botspace.online",
  },
  {
    claim: "BotSpace architecture files",
    value: `${MANIFEST_DATA.botspaceArchitectureDocs}+`,
    source: "botspace.online",
  },
  {
    claim: "Distributed Ai swarm nodes",
    value: String(MANIFEST_DATA.swarmNodes),
    source: "ecosystem.config.cjs",
  },
  {
    claim: "Gossip inbox messages",
    value: `${formatNumber(MANIFEST_DATA.gossipInboxFiles)}+`,
    source: "IMMORTAL SWARM logs",
  },
  {
    claim: "Active swarm log data",
    value: `${MANIFEST_DATA.swarmLogSizeGB}+ GB`,
    source: "IMMORTAL SWARM logs",
  },
  {
    claim: "TSTR reference paper",
    value: MANIFEST_DATA.arxivPaperTSTR,
    source: "arbitrage-paper-analysis.md",
  },
  {
    claim: "TSTR runtime",
    value: MANIFEST_DATA.tstrLanguage,
    source: "arbitrage-paper-analysis.md",
  },
  {
    claim: "Active span",
    value: <ActiveSpanCounter originDate={MANIFEST_DATA.originDate} />,
    source: "SBE origin date",
  },
  {
    claim: "Flagship projects",
    value: String(MANIFEST_DATA.flagshipProjects),
    source: "Ai project manifest",
  },
  {
    claim: "Project roots",
    value: formatNumber(MANIFEST_DATA.projectRoots),
    source: "Ai project manifest",
  },
];

export const metadata: Metadata = {
  title: "Receipts",
  description:
    "The public verification ledger for Space Bot Engineering Studio: statistics, source references, and production evidence.",
};

export default function ReceiptsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        <section className="relative overflow-hidden py-32">
          <BrandStamp
            tone="electric"
            className="-right-24 top-20 hidden md:block"
            opacity={0.12}
            rotate={7}
          />
          <BrandStamp
            tone="copper"
            className="-left-20 bottom-8 hidden lg:block"
            opacity={0.1}
            rotate={-9}
            size="clamp(6rem, 10vw, 9rem)"
          />
          <BrandStampField
            seed={4111}
            count={24}
            className="hidden md:block"
            minOpacity={0.035}
            maxOpacity={0.14}
            minRem={3}
            maxRem={16}
          />
          <Container className="relative z-10">
            <Eyebrow>THE RECEIPTS</Eyebrow>
            <h1 className="mt-8 font-serif text-h1 text-sbe-ink max-w-[22ch]">
              Every number on this site is verifiable.
            </h1>
            <p className="mt-10 max-w-[62ch] text-body-lg text-sbe-graphite">
              This page is the public verification layer for the current site.
              The source of truth is the local manifest generated on{" "}
              {formatDate(MANIFEST_DATA.manifestGenerated)}.
            </p>
          </Container>
        </section>

        <section className="relative overflow-hidden border-t border-sbe-hairline pb-28">
          <BrandStamp
            tone="plasma"
            className="-left-24 top-8 hidden lg:block"
            opacity={0.12}
            rotate={-8}
            size="clamp(8rem, 18vw, 16rem)"
          />
          <BrandStamp
            tone="cobalt"
            className="-right-20 bottom-8 hidden lg:block"
            opacity={0.1}
            rotate={9}
            size="clamp(5rem, 8vw, 7rem)"
          />
          <BrandStampField
            seed={4222}
            count={24}
            tones={["plasma", "cobalt", "electric"]}
            className="hidden md:block"
            minOpacity={0.035}
            maxOpacity={0.13}
            minRem={3}
            maxRem={14}
          />
          <Container className="relative z-10">
            <div className="divide-y divide-sbe-hairline">
              {RECEIPTS.map((receipt) => (
                <div
                  key={receipt.claim}
                  className="grid grid-cols-1 gap-6 py-8 md:grid-cols-12"
                >
                  <div className="md:col-span-5">
                    <p className="text-body text-sbe-ink">{receipt.claim}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="font-mono text-body text-sbe-ink">
                      {receipt.value}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="font-mono text-caption text-sbe-graphite">
                      {receipt.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
