import { Container } from "@/components/layout/Container";
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LiveStats } from "@/components/home/LiveStats";
import { MANIFEST_DATA } from "@/lib/manifest-data";
import { formatDate } from "@/lib/utils";

export function HeroAct2() {
  const lastUpdated = formatDate(MANIFEST_DATA.manifestGenerated);

  return (
    <section
      aria-labelledby="proof-heading"
      className="relative overflow-hidden border-t-2 border-sbe-ink bg-sbe-cobalt py-24 text-sbe-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0 bg-sbe-cobalt"
      />
      <BrandStamp
        tone="plasma"
        className="-right-16 top-5 hidden sm:block"
        opacity={0.28}
        rotate={6}
        size="clamp(10rem, 26vw, 21rem)"
      />
      <BrandStamp
        tone="electric"
        className="-left-10 bottom-3 hidden lg:block"
        opacity={0.16}
        rotate={-10}
        size="clamp(5rem, 10vw, 8rem)"
      />
      <Container className="relative z-10">
        <div className="mb-16 flex justify-center">
          <Eyebrow className="rounded-full border-2 border-sbe-ink bg-sbe-surface px-4 py-2 text-sbe-copper">
            VERIFIABLE PROOF-OF-WORK · LAST UPDATED{" "}
            {lastUpdated.toUpperCase()}
          </Eyebrow>
        </div>
        <p className="mx-auto mb-12 max-w-4xl text-center font-serif text-h2 text-sbe-ink">
          Real numbers. Real systems. Real production.
        </p>
        <h2 id="proof-heading" className="sr-only">
          Verifiable proof of work
        </h2>
        <LiveStats />
      </Container>
    </section>
  );
}
