import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    source: "AI_PROJECT_MANIFEST.md",
  },
  {
    claim: "Architecture documents",
    value: String(MANIFEST_DATA.architectureDocs),
    source: "vault-search.js stats",
  },
  {
    claim: "Production domains",
    value: String(MANIFEST_DATA.productionDomains),
    source: "browser history + deployment notes",
  },
  {
    claim: "SpaceBot production visits",
    value: formatNumber(MANIFEST_DATA.spacebotVisits),
    source: "spacebot.space",
  },
  {
    claim: "LUCY benchmark accuracy",
    value: MANIFEST_DATA.benchmarkAccuracy,
    source: "DORYLUS_EVOLUTION_REPORT.md",
  },
  {
    claim: "Messaging platforms",
    value: `${MANIFEST_DATA.messagingPlatforms}+`,
    source: "MEGATRON_REPORT.md",
  },
  {
    claim: "BotSpace bot personalities",
    value: String(MANIFEST_DATA.botPersonalities),
    source: "botspace.online",
  },
];

export const metadata: Metadata = {
  title: "Receipts",
  description:
    "Every number on the Space Bot Engineering Studio website is verifiable. Here are the receipts.",
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
          <Container className="relative z-10">
            <Eyebrow>THE RECEIPTS</Eyebrow>
            <h1 className="mt-8 font-serif text-h1 text-sbe-ink max-w-[22ch]">
              Every number on this site is verifiable.
            </h1>
            <p className="mt-10 max-w-[62ch] text-body-lg text-sbe-graphite">
              This page exposes the public receipt layer for the current site.
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
