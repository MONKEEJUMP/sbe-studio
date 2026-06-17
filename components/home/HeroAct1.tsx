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
        tone="electric"
        className="-left-16 top-32 hidden lg:block"
        opacity={0.95}
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
          <p className="max-w-[34rem] bg-sbe-surface/95 px-4 py-1.5 text-center font-serif text-[clamp(1.24rem,1.89vw,2.02rem)] leading-none text-sbe-cobalt">
            &lt; the same{" "}
            <span className="text-sbe-copper">ai</span>{" "}
            we build for you
            <br />
            / is the same{" "}
            <span className="text-sbe-copper">ai</span>{" "}
            we build for us &gt;
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
              SBE turns useful Ai ideas into real production software, public
              websites, automations, and operating systems that a team can
              actually use.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a conversation
              </Button>
              <Button href="/work" variant="secondary" size="lg" withArrow>
                See the work wall
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 pt-4 md:grid-cols-3">
          {[
            {
              title: "Built-in Ai systems",
              body: "Assistants, agents, knowledge bases, internal tools, and workflows designed around the way your team already works.",
              tone: "bg-sbe-electric",
              accent: "sbe-offset-blue",
              label: "text-sbe-ink",
              heading: "text-sbe-ink",
              copy: "text-sbe-ink",
            },
            {
              title: "Live website launches",
              body: "Beautiful public sites, Vercel deployments, real URLs, screenshots, analytics, and maintenance after the launch.",
              tone: "bg-sbe-cobalt",
              accent: "sbe-offset-red",
              label: "text-sbe-neon",
              heading: "text-white",
              copy: "text-white",
            },
            {
              title: "Proof you can inspect",
              body: "Every claim points back to working systems, indexed files, production domains, and receipts we can open together.",
              tone: "bg-sbe-surface",
              accent: "sbe-offset-plasma",
              label: "text-sbe-plasma",
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
            className="font-serif text-h2 text-sbe-cobalt sm:text-display"
          >
            &lt; the same{" "}
            <span className="text-sbe-copper">ai</span>{" "}
            we build for you
            <br />
            / is the same{" "}
            <span className="text-sbe-copper">ai</span>{" "}
            we build for us &gt;
          </h1>
        </div>
      </Container>
    </section>
  );
}
