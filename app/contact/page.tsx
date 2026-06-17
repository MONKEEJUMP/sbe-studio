import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a production engineering conversation with Space Bot Engineering Studio. Oklahoma City · Central Time.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        <section className="relative overflow-hidden py-32">
          <BrandStamp
            tone="copper"
            className="-right-24 top-16 hidden md:block"
            opacity={0.12}
            rotate={8}
          />
          <BrandStamp
            tone="electric"
            className="-left-24 bottom-6 hidden lg:block"
            opacity={0.14}
            rotate={-8}
            size="clamp(9rem, 20vw, 18rem)"
          />
          <BrandStamp
            tone="plasma"
            className="left-[54%] bottom-24 hidden xl:block"
            opacity={0.12}
            rotate={10}
            size="clamp(5rem, 8vw, 7rem)"
          />
          <BrandStampField
            seed={5111}
            count={30}
            tones={["copper", "electric", "plasma", "cobalt"]}
            className="hidden md:block"
            minOpacity={0.035}
            maxOpacity={0.14}
            minRem={3}
            maxRem={17}
          />
          <Container className="relative z-10">
            <Eyebrow>START A CONVERSATION</Eyebrow>
            <h1 className="mt-8 font-serif text-h1 text-sbe-ink max-w-[22ch]">
              Tell us what needs to ship.
            </h1>
            <p className="mt-10 max-w-[58ch] text-body-lg text-sbe-graphite">
              Send a short note with the business problem, the current stack,
              the systems involved, and what would count as a production
              outcome. If there is a fit, the next step is a focused discovery
              call and a written scope.
            </p>
            <p className="mt-8">
              <a
                href="mailto:hello@sbe.studio"
                className="font-mono text-body-lg text-sbe-ink underline decoration-sbe-copper decoration-2 underline-offset-4 hover:decoration-4 transition-all"
              >
                hello@sbe.studio
              </a>
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <Button
                href="mailto:hello@sbe.studio?subject=SBE%20Studio%20Discovery"
                variant="primary"
                withArrow
              >
                Email the studio
              </Button>
              <Button href="/services" variant="secondary">
                Review services
              </Button>
            </div>
            <p className="mt-10 font-mono text-caption text-sbe-mist">
              Oklahoma City · Central Time · Every inquiry is reviewed directly
              by the studio.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
