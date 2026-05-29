import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LiveStats } from "@/components/home/LiveStats";
import { MANIFEST_DATA } from "@/lib/manifest-data";
import { formatDate } from "@/lib/utils";

export function HeroAct2() {
  const lastUpdated = formatDate(MANIFEST_DATA.manifestGenerated);

  return (
    <section
      aria-labelledby="proof-heading"
      className="relative overflow-hidden border-t-2 border-sbe-ink bg-sbe-cobalt py-24 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]"
      />
      <Container>
        <div className="mb-16 flex justify-center">
          <Eyebrow className="rounded-full border border-white/40 bg-white px-4 py-2 text-sbe-copper">
            VERIFIABLE PROOF-OF-WORK · LAST UPDATED{" "}
            {lastUpdated.toUpperCase()}
          </Eyebrow>
        </div>
        <p className="mx-auto mb-12 max-w-4xl text-center font-serif text-h2 text-white">
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
