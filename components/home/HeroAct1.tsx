import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function HeroAct1() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[85vh] items-center pt-24 pb-20"
    >
      <Container>
        <div className="max-w-5xl">
          <Eyebrow>SPACE BOT ENGINEERING STUDIO · OKLAHOMA CITY</Eyebrow>

          <h1
            id="hero-heading"
            className="mt-12 font-serif text-display text-sbe-cobalt max-w-[42ch]"
          >
            &lt; the same{" "}
            <span className="text-sbe-copper">ai</span>{" "}
            we build for you
            <br />
            {"\u00a0\u00a0"}/ the same{" "}
            <span className="text-sbe-copper">ai</span>{" "}
            we build for us &gt;
          </h1>

          <p className="mt-10 text-body-lg text-sbe-graphite max-w-[55ch]">
            An engineering studio in Oklahoma City. Building AI systems that
            run in production.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Start a conversation
            </Button>
            <Button href="/work" variant="link">
              See what we&rsquo;ve built →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
