import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DeploymentStrip } from "@/components/work/DeploymentStrip";
import { SERVICE_TIERS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three production engagement tiers from Space Bot Engineering Studio: Audit, Build, and Operate.",
};

const TIER_STAMP_TONES = ["electric", "cobalt", "plasma"] as const;

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-28 lg:py-32">
          <BrandStamp
            tone="cobalt"
            className="-right-24 top-16 hidden md:block"
            opacity={0.12}
            rotate={7}
          />
          <BrandStamp
            tone="plasma"
            className="-left-20 bottom-8 hidden lg:block"
            opacity={0.12}
            rotate={-9}
            size="clamp(6rem, 10vw, 9rem)"
          />
          <BrandStamp
            tone="electric"
            className="left-[54%] top-24 hidden xl:block"
            opacity={0.07}
            rotate={-21}
            size="clamp(2.6rem, 4vw, 3.8rem)"
          />
          <BrandStampField
            seed={2111}
            count={28}
            className="hidden md:block"
            minOpacity={0.035}
            maxOpacity={0.14}
            minRem={3}
            maxRem={17}
          />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <Eyebrow>HOW WE WORK</Eyebrow>
              <h1 className="mt-10 font-serif text-h1 text-sbe-ink max-w-[20ch]">
                Three engagement paths. Every one ends in production.
              </h1>
              <p className="mt-10 max-w-[60ch] text-body-lg text-sbe-graphite">
                SBE works where strategy has to become shipped infrastructure.
                Most client work fits one of three engagement models: diagnose
                the system, build the system, or operate the system after it is
                live.
              </p>
            </div>

            {/* Jump links */}
            <nav
              aria-label="Tier navigation"
              className="mt-16 flex flex-wrap items-center gap-8"
            >
              {SERVICE_TIERS.map((tier) => (
                <a
                  key={tier.slug}
                  href={`#${tier.slug}`}
                  className="group font-mono text-micro uppercase text-sbe-graphite hover:text-sbe-ink transition-colors"
                >
                  <span className="text-sbe-copper">{tier.numeral}</span>
                  <span className="mx-3 inline-block h-3 w-px bg-sbe-hairline align-middle" />
                  <span className="relative">
                    {tier.title}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-px left-0 h-px w-0 bg-sbe-copper transition-all duration-200 group-hover:w-full"
                    />
                  </span>
                </a>
              ))}
            </nav>
          </Container>
        </section>

        {/* Tier sections */}
        {SERVICE_TIERS.map((tier, index) => (
          <section
            key={tier.slug}
            id={tier.slug}
            aria-labelledby={`${tier.slug}-heading`}
            className="relative scroll-mt-24 overflow-hidden border-t border-sbe-hairline py-28"
          >
            <BrandStamp
              tone={TIER_STAMP_TONES[index % TIER_STAMP_TONES.length]}
              className={
                index % 2 === 0
                  ? "-right-24 top-10 hidden md:block"
                  : "-left-24 bottom-10 hidden md:block"
              }
              opacity={0.1}
              rotate={index % 2 === 0 ? 8 : -8}
              size="clamp(8rem, 19vw, 17rem)"
            />
            <BrandStamp
              tone={index % 2 === 0 ? "plasma" : "electric"}
              className={
                index % 2 === 0
                  ? "left-[48%] bottom-12 hidden xl:block"
                  : "right-[18%] top-20 hidden xl:block"
              }
              opacity={0.1}
              rotate={index % 2 === 0 ? -11 : 10}
              size="clamp(4.5rem, 7vw, 6rem)"
            />
            <BrandStampField
              seed={2200 + index * 137}
              count={22}
              tones={
                index % 2 === 0
                  ? ["electric", "cobalt", "plasma"]
                  : ["plasma", "copper", "electric"]
              }
              className="hidden md:block"
              minOpacity={0.03}
              maxOpacity={0.13}
              minRem={3}
              maxRem={15}
            />
            <Container className="relative z-10">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                {/* Left rail: numeral + title */}
                <div className="lg:col-span-4">
                  <span
                    aria-hidden="true"
                    className="block font-serif text-[5rem] text-sbe-copper leading-none"
                  >
                    {tier.numeral}
                  </span>
                  <h2
                    id={`${tier.slug}-heading`}
                    className="mt-8 font-serif text-h1 text-sbe-ink"
                  >
                    {tier.title}
                  </h2>
                  <p className="mt-6 text-body-lg text-sbe-graphite max-w-[28ch]">
                    {tier.headline}
                  </p>
                </div>

                {/* Right rail \u2014 detail */}
                <div className="lg:col-span-8">
                  <p className="text-body-lg text-sbe-ink max-w-[62ch]">
                    {tier.description}
                  </p>

                  <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                      <h3 className="font-mono text-micro uppercase text-sbe-mist">
                        DELIVERABLES
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {tier.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex gap-3 text-body text-sbe-ink"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 inline-block h-px w-4 flex-shrink-0 bg-sbe-copper"
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-mono text-micro uppercase text-sbe-mist">
                        BEST FOR
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {tier.bestFor.map((b) => (
                          <li
                            key={b}
                            className="flex gap-3 text-body text-sbe-graphite"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 inline-block h-px w-4 flex-shrink-0 bg-sbe-hairline"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 border-t border-sbe-hairline pt-10">
                    <div>
                      <p className="font-mono text-micro uppercase text-sbe-mist">
                        DURATION
                      </p>
                      <p className="mt-2 font-mono text-body text-sbe-ink">
                        {tier.duration}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-micro uppercase text-sbe-mist">
                        OUTCOME
                      </p>
                      <p className="mt-2 text-body text-sbe-ink">
                        {tier.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Button href="/contact" variant="primary" withArrow>
                      Start a {tier.title} conversation
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}

        <DeploymentStrip
          eyebrow="PROOF OF DELIVERY"
          title="Strategy is useful when it ships."
          body="The engagement model is built for finished work: production domains, client-ready interfaces, documented systems, and outcomes that can be inspected in a browser."
          slugs={["scissortail-laboratory", "chute-boss", "strategic-website"]}
        />

        {/* What happens next */}
        <section
          aria-labelledby="next-heading"
          className="relative overflow-hidden border-t border-sbe-hairline py-28"
        >
          <BrandStamp
            tone="copper"
            className="-right-20 bottom-10 hidden md:block"
            opacity={0.1}
            rotate={8}
          />
          <BrandStamp
            tone="cobalt"
            className="left-[54%] top-16 hidden lg:block"
            opacity={0.1}
            rotate={-10}
            size="clamp(5rem, 8vw, 7rem)"
          />
          <BrandStampField
            seed={2444}
            count={26}
            tones={["copper", "electric", "cobalt", "plasma"]}
            className="hidden md:block"
            minOpacity={0.035}
            maxOpacity={0.13}
            minRem={3}
            maxRem={16}
          />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <Eyebrow>WHAT HAPPENS NEXT</Eyebrow>
              <h2
                id="next-heading"
                className="mt-8 font-serif text-h2 text-sbe-ink max-w-[22ch]"
              >
                A focused call. A written scope. Then accountable delivery.
              </h2>
              <p className="mt-8 max-w-[60ch] text-body-lg text-sbe-graphite">
                Every engagement starts with a direct discovery conversation.
                If the opportunity is real, SBE follows with a written scope
                that names the system, the deliverables, the implementation
                path, and the operating risks.
              </p>
              <p className="mt-6 max-w-[60ch] text-body-lg text-sbe-graphite">
                Pricing is discussed after the technical shape is understood.
                Scope, timeline, integration risk, and production responsibility
                determine the engagement.
              </p>
              <div className="mt-12">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Start a conversation
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
