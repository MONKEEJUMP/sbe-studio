import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getManifest, getManifestWithProvenance } from "@/lib/loaders/manifest";
import { getReceipts } from "@/lib/receipts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Receipts",
  description:
    "Every number on the Space Bot Engineering Studio website is verifiable. Here are the receipts.",
};

export default async function ReceiptsPage() {
  const manifest = await getManifest();
  const provenance = await getManifestWithProvenance();
  const receipts = getReceipts(manifest);

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
              This page exposes the public receipt layer for the current site.
              The source of truth is the local manifest generated on{" "}
              {formatDate(manifest.manifestGenerated)}.
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
              {receipts.map((receipt) => {
                const prov = provenance[receipt.key];
                return (
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
                      <p
                        className="font-mono text-caption text-sbe-graphite"
                        title={`Measured ${prov.measured_at
                          .toISOString()
                          .slice(0, 10)}`}
                      >
                        {prov.source}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
