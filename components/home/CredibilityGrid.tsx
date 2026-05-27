import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CREDIBILITY_HOOKS } from "@/lib/credibility";

export function CredibilityGrid() {
  return (
    <section
      aria-labelledby="credibility-heading"
      className="py-28"
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <Eyebrow>WHY SBE · 10 PROOFS</Eyebrow>
          <h2
            id="credibility-heading"
            className="mt-6 font-serif text-h2 text-sbe-ink"
          >
            Every claim links to a file on a hard drive.
          </h2>
          <p className="mt-6 max-w-[55ch] text-body-lg text-sbe-graphite">
            AI consulting is a noisy market. Here is how we are different,
            one verifiable fact at a time.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3"
        >
          {CREDIBILITY_HOOKS.map((hook) => {
            const n = hook.id.toString().padStart(2, "0");
            return (
              <li
                key={hook.id}
                className="group flex flex-col border-t border-sbe-hairline py-10"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-micro uppercase text-sbe-copper">
                    {n}
                  </span>
                  {hook.stat && (
                    <span className="font-mono text-micro uppercase text-sbe-mist">
                      {hook.stat.label}
                    </span>
                  )}
                </div>

                {hook.stat && (
                  <span className="mt-2 font-mono text-h3 text-sbe-ink tabular-nums">
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
                  <p className="mt-6 font-mono text-micro uppercase text-sbe-mist">
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
