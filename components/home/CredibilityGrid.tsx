import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getCredibilityHooks } from "@/lib/credibility";
import type { ManifestData } from "@/lib/manifest-data";

export function CredibilityGrid({ manifest }: { manifest: ManifestData }) {
  const hooks = getCredibilityHooks(manifest);
  return (
    <section
      aria-labelledby="credibility-heading"
      className="relative overflow-hidden bg-sbe-canvas py-28"
    >
      <BrandStamp
        tone="copper"
        className="-right-20 top-24 hidden md:block"
        opacity={0.1}
        rotate={-6}
      />
      <BrandStamp
        tone="electric"
        className="-left-28 bottom-10 hidden lg:block"
        opacity={0.14}
        rotate={7}
      />
      <BrandStamp
        tone="plasma"
        className="left-[48%] top-[38rem] hidden xl:block"
        opacity={0.12}
        rotate={-10}
        size="clamp(5rem, 8vw, 7rem)"
      />
      <BrandStamp
        tone="cobalt"
        className="right-[20%] bottom-[11rem] hidden xl:block"
        opacity={0.075}
        rotate={24}
        size="clamp(2.6rem, 4vw, 3.8rem)"
      />
      <BrandStampField
        seed={505}
        count={32}
        tones={["electric", "cobalt", "plasma"]}
        className="hidden md:block"
        minOpacity={0.035}
        maxOpacity={0.13}
        minRem={3}
        maxRem={16}
      />
      <Container className="relative z-10">
        <div className="mb-16 max-w-4xl">
          <Eyebrow>WHY SBE · 10 PROOFS</Eyebrow>
          <h2
            id="credibility-heading"
            className="mt-6 font-serif text-h1 text-sbe-ink sm:text-display"
          >
            Every claim links to a file on a hard drive.
          </h2>
          <p className="mt-6 max-w-[55ch] text-body-lg text-sbe-graphite">
            AI consulting is a noisy market. Here is how we are different,
            one verifiable fact at a time.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {hooks.map((hook) => {
            const n = hook.id.toString().padStart(2, "0");
            return (
              <li
                key={hook.id}
                className="group flex min-h-[25rem] flex-col rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-7 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-caption uppercase text-sbe-copper">
                    {n}
                  </span>
                  {hook.stat && (
                    <span className="font-mono text-micro uppercase text-sbe-mist">
                      {hook.stat.label}
                    </span>
                  )}
                </div>

                {hook.stat && (
                  <span className="mt-3 font-mono text-h2 text-sbe-cobalt tabular-nums">
                    {hook.stat.value}
                  </span>
                )}

                <h3 className="mt-6 font-sans text-h4 font-semibold text-sbe-ink">
                  <span className="relative inline-block">
                    {hook.headline}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-px left-0 h-px w-0 bg-sbe-copper transition-all duration-200 group-hover:w-full"
                    />
                  </span>
                </h3>

                <p className="mt-4 max-w-[42ch] text-body text-sbe-graphite">
                  {hook.body}
                </p>

                {hook.source && (
                  <p className="mt-auto pt-8 font-mono text-micro uppercase text-sbe-mist">
                    SOURCE · {hook.source}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
