import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Space Bot Engineering Studio. Oklahoma City · Central Time.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        <section className="py-32">
          <Container>
            <Eyebrow>START A CONVERSATION</Eyebrow>
            <h1 className="mt-8 font-serif text-h1 text-sbe-ink max-w-[22ch]">
              Tell us what you&rsquo;re trying to build.
            </h1>
            <p className="mt-10 max-w-[58ch] text-body-lg text-sbe-graphite">
              Send a short note with the problem, the current stack, and what
              would count as a working outcome. If there is a fit, the next
              step is a focused discovery call and a written scope.
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
              Oklahoma City · Central Time · Responses are handled directly by
              the studio.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
