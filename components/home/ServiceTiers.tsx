import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SERVICE_TIERS } from "@/lib/services";

export function ServiceTiers() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-t-2 border-sbe-ink bg-sbe-copper py-28"
    >
      <BrandStamp
        tone="electric"
        className="-right-24 top-10 hidden sm:block"
        opacity={0.22}
        rotate={8}
      />
      <BrandStamp
        tone="cobalt"
        className="-left-28 bottom-12 hidden lg:block"
        opacity={0.2}
        rotate={-8}
        size="clamp(9rem, 20vw, 18rem)"
      />
      <BrandStamp
        tone="electric"
        className="left-[46%] top-[24rem] hidden xl:block"
        opacity={0.16}
        rotate={-12}
        size="clamp(5rem, 9vw, 7rem)"
      />
      <BrandStamp
        tone="plasma"
        className="right-[22%] bottom-[7rem] hidden xl:block"
        opacity={0.12}
        rotate={19}
        size="clamp(2.7rem, 4vw, 3.9rem)"
      />
      <BrandStampField
        seed={606}
        count={34}
        tones={["electric", "cobalt", "plasma"]}
        className="hidden md:block"
        minOpacity={0.045}
        maxOpacity={0.18}
        minRem={3.2}
        maxRem={17}
      />
      <Container className="relative z-10">
        <div className="mb-20 max-w-4xl">
          <Eyebrow>HOW WE WORK</Eyebrow>
          <h2
            id="services-heading"
            className="mt-6 font-serif text-h1 text-sbe-ink sm:text-display"
          >
            Three engagement paths. Every one ends in production.
          </h2>
          <p className="mt-6 max-w-[55ch] text-body-lg text-sbe-graphite">
            Choose the level of intervention: a technical audit, a production
            build, or an operating partnership. If the fit is not right, we say
            so early.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {SERVICE_TIERS.map((tier) => (
            <div
              key={tier.slug}
              className="rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-8 sbe-offset-blue"
            >
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-serif text-display leading-none text-sbe-copper"
                >
                  {tier.numeral}
                </span>
                <span className="font-mono text-micro uppercase text-sbe-mist">
                  {tier.duration}
                </span>
              </div>

              <h3 className="mt-8 font-serif text-h2 text-sbe-ink">
                {tier.title}
              </h3>
              <p className="mt-2 text-body-lg text-sbe-graphite max-w-[34ch]">
                {tier.headline}
              </p>

              <p className="mt-8 font-mono text-micro uppercase text-sbe-mist">
                OUTCOME
              </p>
              <p className="mt-2 text-body text-sbe-ink">{tier.outcome}</p>

              <div className="mt-10">
                <Button href={`/services#${tier.slug}`} variant="link">
                  Learn more about {tier.title} →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button href="/services" variant="secondary">
            See all three tiers in detail
          </Button>
        </div>
      </Container>
    </section>
  );
}
