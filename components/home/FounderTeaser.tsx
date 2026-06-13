import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function FounderTeaser() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="relative overflow-hidden border-t-2 border-sbe-ink bg-sbe-surface py-28"
    >
      <BrandStamp
        tone="cobalt"
        className="-left-20 top-14 hidden md:block"
        opacity={0.12}
        rotate={-6}
      />
      <BrandStamp
        tone="plasma"
        className="-right-24 bottom-10 hidden lg:block"
        opacity={0.18}
        rotate={8}
        size="clamp(9rem, 20vw, 18rem)"
      />
      <BrandStamp
        tone="copper"
        className="left-[58%] top-20 hidden lg:block"
        opacity={0.09}
        rotate={-10}
        size="clamp(5rem, 8vw, 7rem)"
      />
      <BrandStampField
        seed={808}
        count={24}
        className="hidden md:block"
        minOpacity={0.035}
        maxOpacity={0.14}
        minRem={3}
        maxRem={16}
      />
      <Container className="relative z-10">
        <div
          className="mx-auto flex max-w-4xl flex-col items-center rounded-[8px] border-2 border-sbe-ink bg-sbe-electric p-10 text-center sbe-offset-blue"
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
