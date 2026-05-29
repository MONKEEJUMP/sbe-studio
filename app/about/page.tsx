import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DeploymentStrip } from "@/components/work/DeploymentStrip";
import { MANIFEST_DATA } from "@/lib/manifest-data";
import { formatDate, formatNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "The origin story of Space Bot Engineering Studio — 130 days, 20 flagship projects, one knowledge base.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        <section className="relative overflow-hidden py-32">
          <BrandStamp
            tone="electric"
            className="-right-20 top-20 hidden md:block"
            opacity={0.12}
            rotate={8}
          />
          <BrandStamp
            tone="copper"
            className="-left-20 bottom-8 hidden lg:block"
            opacity={0.1}
            rotate={-9}
            size="clamp(6rem, 10vw, 9rem)"
          />
          <Container className="relative z-10">
            <Eyebrow>ABOUT</Eyebrow>
            <h1 className="mt-8 font-serif text-h1 text-sbe-ink max-w-[22ch]">
              A one-person firm, with a knowledge base the size of planet earth.
            </h1>
            <p className="mt-10 max-w-[62ch] text-body-lg text-sbe-graphite">
              Space Bot Engineering Studio is the public consulting face of a
              private AI engineering practice in Oklahoma City. The work is
              practical: architecture, retrieval, agents, deployment,
              operations, and the unglamorous pieces that make AI systems keep
              running after the demo.
            </p>
          </Container>
        </section>

        <section className="relative overflow-hidden border-t border-sbe-hairline py-28">
          <BrandStamp
            tone="plasma"
            className="-left-24 bottom-10 hidden lg:block"
            opacity={0.16}
            rotate={-8}
            size="clamp(9rem, 20vw, 18rem)"
          />
          <BrandStamp
            tone="cobalt"
            className="right-[18%] top-12 hidden xl:block"
            opacity={0.1}
            rotate={10}
            size="clamp(5rem, 8vw, 7rem)"
          />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow tone="graphite">OPERATING SHAPE</Eyebrow>
                <h2 className="mt-6 font-serif text-h2 text-sbe-ink">
                  Small studio. Large evidence base.
                </h2>
              </div>
              <div className="space-y-8 lg:col-span-8">
                <p className="max-w-[68ch] text-body-lg text-sbe-ink">
                  The current manifest tracks {formatNumber(MANIFEST_DATA.aiSignalFiles)} AI-signal
                  files, {formatNumber(MANIFEST_DATA.projectRoots)} project
                  roots, and {MANIFEST_DATA.flagshipProjects} flagship
                  projects. The point is not volume for its own sake. The point
                  is a working memory of what was built, what failed, and what
                  can be reused.
                </p>
                <p className="max-w-[68ch] text-body-lg text-sbe-graphite">
                  Every engagement starts with architecture and ends with
                  ownership: a running system, a written runbook, or a clear
                  technical report the client can hand to another engineer.
                </p>
                <div className="grid grid-cols-1 gap-8 border-t border-sbe-hairline pt-10 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-micro uppercase text-sbe-mist">
                      Active span
                    </p>
                    <p className="mt-2 font-mono text-body text-sbe-ink">
                      {MANIFEST_DATA.activeDays} days
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-micro uppercase text-sbe-mist">
                      Origin date
                    </p>
                    <p className="mt-2 font-mono text-body text-sbe-ink">
                      {formatDate(MANIFEST_DATA.originDate)}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-micro uppercase text-sbe-mist">
                      Location
                    </p>
                    <p className="mt-2 font-mono text-body text-sbe-ink">
                      {MANIFEST_DATA.location}
                    </p>
                  </div>
                </div>
                <div>
                  <Button href="/receipts" variant="secondary" withArrow>
                    Read the receipts
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <DeploymentStrip
          eyebrow="THE PUBLIC ARCHIVE"
          title="The studio has receipts you can click."
          body="The Vercel portfolio is a living archive of the work: consumer brands, Oklahoma service businesses, AI products, nonprofits, and event builds."
          slugs={["botspace", "ftautogarage", "music-giving-hope"]}
        />
      </main>
      <Footer />
    </>
  );
}
