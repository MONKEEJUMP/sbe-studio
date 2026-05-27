import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SERVICE_TIERS } from "@/lib/services";

export function ServiceTiers() {
  return (
    <section
      aria-labelledby="services-heading"
      className="border-t border-sbe-hairline py-28"
    >
      <Container>
        <div className="mb-20 max-w-3xl">
          <Eyebrow>HOW WE WORK</Eyebrow>
          <h2
            id="services-heading"
            className="mt-6 font-serif text-h2 text-sbe-ink"
          >
            Three ways in. Every engagement ends in production.
          </h2>
          <p className="mt-6 max-w-[55ch] text-body-lg text-sbe-graphite">
            A short audit. A full build. A long-term operator.
            Pick the one that fits. We&rsquo;ll tell you on the call if it
            doesn&rsquo;t.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0"
        >
          {SERVICE_TIERS.map((tier, i) => (
            <div
              key={tier.slug}
              className={
                i === 0
                  ? "md:pr-10 lg:pr-12"
                  : i === SERVICE_TIERS.length - 1
                  ? "md:border-l md:border-sbe-hairline md:pl-10 lg:pl-12"
                  : "md:border-l md:border-sbe-hairline md:px-10 lg:px-12"
              }
            >
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-serif text-display text-sbe-copper leading-none"
                >
                  {tier.numeral}
                </span>
                <span className="font-mono text-micro uppercase text-sbe-mist">
                  {tier.duration}
                </span>
              </div>

              <h3 className="mt-8 font-serif text-h3 text-sbe-ink">
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
