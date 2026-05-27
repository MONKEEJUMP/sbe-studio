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
      className="border-t border-sbe-hairline py-28"
    >
      <Container>
        <div className="mb-16 flex justify-center">
          <Eyebrow tone="copper">
            VERIFIABLE PROOF-OF-WORK · LAST UPDATED{" "}
            {lastUpdated.toUpperCase()}
          </Eyebrow>
        </div>
        <h2 id="proof-heading" className="sr-only">
          Verifiable proof of work
        </h2>
        <LiveStats />
      </Container>
    </section>
  );
}
