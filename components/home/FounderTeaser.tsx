import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function FounderTeaser() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="border-t-2 border-sbe-ink bg-sbe-surface py-28"
    >
      <Container>
        <div
          className="mx-auto flex max-w-4xl flex-col items-center rounded-[8px] border-2 border-sbe-ink bg-sbe-electric p-10 text-center sbe-offset-red"
        >
          <span
            aria-hidden="true"
            className="font-serif text-[7rem] text-sbe-copper leading-none"
          >
            &ldquo;
          </span>

          <h2
            id="founder-heading"
            className="sr-only"
          >
            A note from the founder
          </h2>

          <p className="-mt-6 font-serif text-h3 text-sbe-ink">
            Build the architecture. Ship the system. Keep the receipts.
          </p>
          <p className="mt-6 max-w-[54ch] text-body-lg text-sbe-graphite">
            SBE is organized around a simple rule: public claims should trace
            back to working systems, measured outputs, and files we can point
            to when the work is questioned.
          </p>

          <div className="mt-16">
            <Eyebrow tone="graphite">
              PAULIEWOOD · FOUNDER · SPACE BOT ENGINEERING STUDIO
            </Eyebrow>
          </div>

          <div className="mt-12">
            <Button href="/about" variant="secondary">
              Read the origin story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
