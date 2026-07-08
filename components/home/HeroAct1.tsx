import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";

export function HeroAct1() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-16 h-[45rem] bg-sbe-canvas"
      />
      <BrandStamp
        tone="neon"
        className="-left-16 top-32 hidden lg:block"
        opacity={0.82}
        size="13rem"
      />
      <BrandStamp
        tone="plasma"
        className="left-[39%] top-28 hidden xl:block"
        opacity={0.07}
        rotate={18}
        size="clamp(2.8rem, 5vw, 4.2rem)"
      />
      <BrandStampField
        seed={101}
        count={24}
        className="hidden lg:block"
        minOpacity={0.035}
        maxOpacity={0.13}
        minRem={3.8}
        maxRem={18}
      />

      <Container className="relative">
        <div className="pointer-events-none absolute inset-x-4 -top-[4.5rem] z-20 hidden justify-center lg:flex">
          <p className="max-w-[34rem] rounded-sm bg-sbe-chip/95 px-4 py-1.5 text-center font-serif text-[clamp(1.24rem,1.89vw,2.02rem)] leading-none text-sbe-copper">
            &lt; the same{" "}
            <span className="text-sbe-cobalt">ai</span>{" "}
            we build for us
            <br />
            / is the same{" "}
            <span className="text-sbe-cobalt">ai</span>{" "}
            we build for you &gt;
          </p>
        </div>
        <div className="flex min-h-[560px] items-center justify-center py-12 text-center lg:min-h-[620px]">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>SPACE BOT ENGINEERING STUDIO · OKLAHOMA CITY</Eyebrow>

            <h1
              id="hero-heading"
              className="mx-auto mt-8 max-w-[13ch] font-serif text-h2 text-sbe-ink sm:text-display"
            >
              The studio that keeps Ai shipping.
            </h1>

            <p className="mx-auto mt-8 max-w-[36ch] text-h3 font-bold leading-tight text-sbe-ink">
              Build the system. Launch the site. Keep the receipts.
            </p>

            <p className="mx-auto mt-6 max-w-[54ch] text-body-lg text-sbe-graphite">
              SBE turns useful Ai ideas into production software, public
              websites, automations, and operating systems that teams can
              adopt, maintain, and verify.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a conversation
              </Button>
              <Button href="/work" variant="secondary" size="lg" withArrow>
                See the work index
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 pt-4 md:grid-cols-3">
          {[
            {
              title: "Production Ai systems",
              body: "Assistants, agent workflows, retrieval knowledge bases, internal tools, and operating processes engineered around how the team already works.",
              tone: "bg-sbe-electric",
              accent: "sbe-offset-neon",
              label: "text-sbe-ink",
              heading: "text-sbe-ink",
              copy: "text-sbe-ink",
            },
            {
              title: "Live digital launches",
              body: "Public websites, Vercel deployments, real URLs, screenshots, analytics, DNS coordination, and launch support that remains accountable after day one.",
              tone: "bg-sbe-cobalt",
              accent: "sbe-offset-red",
              label: "text-sbe-ink",
              heading: "text-sbe-ink",
              copy: "text-sbe-ink",
            },
            {
              title: "Proof you can inspect",
              body: "Every claim points back to working systems, indexed files, production domains, and receipt records that can be opened and reviewed.",
              tone: "bg-sbe-surface",
              accent: "sbe-offset-plasma",
              label: "text-sbe-cobalt",
              heading: "text-sbe-ink",
              copy: "text-sbe-graphite",
            },
          ].map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[8px] border-2 border-sbe-ink p-7 ${
                card.tone
              } ${card.accent}`}
            >
              <p className={`font-mono text-micro uppercase ${card.label}`}>
                0{index + 1} / Studio mode
              </p>
              <h2 className={`mt-5 font-serif text-h3 ${card.heading}`}>
                {card.title}
              </h2>
              <p className={`mt-4 text-body font-semibold ${card.copy}`}>
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 border-y-2 border-sbe-ink py-5">
          <h1
            aria-hidden="true"
            className="font-serif text-h2 text-sbe-copper sm:text-display"
          >
            &lt; the same{" "}
            <span className="text-sbe-cobalt">ai</span>{" "}
            we build for us
            <br />
            / is the same{" "}
            <span className="text-sbe-cobalt">ai</span>{" "}
            we build for you &gt;
          </h1>
        </div>
      </Container>
    </section>
  );
}
