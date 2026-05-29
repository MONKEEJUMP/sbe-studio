import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { StudioMechanism } from "@/components/home/StudioMechanism";

export function HeroAct1() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-16 h-[45rem] bg-[radial-gradient(circle_at_18%_24%,rgba(178,34,52,0.16),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(81,71,217,0.20),transparent_30%),linear-gradient(180deg,var(--sbe-canvas),rgba(255,243,216,0.68))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-32 hidden rotate-[-7deg] font-serif text-[13rem] leading-none text-sbe-hairline opacity-60 lg:block"
      >
        sbe
      </div>

      <Container className="relative">
        <div className="grid min-h-[720px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1fr)] lg:items-center">
          <div className="max-w-4xl">
            <Eyebrow>SPACE BOT ENGINEERING STUDIO · OKLAHOMA CITY</Eyebrow>

            <h1
              id="hero-heading"
              className="mt-8 max-w-[11ch] font-serif text-h2 text-sbe-ink sm:text-display lg:max-w-[12ch]"
            >
              The studio that keeps AI shipping.
            </h1>

            <p className="mt-8 max-w-[32ch] text-h3 font-bold leading-tight text-sbe-ink">
              Build the system. Launch the website. Keep the receipts.
            </p>

            <p className="mt-6 max-w-[48ch] text-body-lg text-sbe-graphite">
              SBE turns useful AI ideas into real production software, public
              websites, automations, and operating systems that a team can
              actually use.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a conversation
              </Button>
              <Button href="/work" variant="secondary" size="lg" withArrow>
                See the work wall
              </Button>
            </div>
          </div>

          <StudioMechanism />
        </div>

        <div className="grid gap-5 pt-4 md:grid-cols-3">
          {[
            {
              title: "Built-in AI systems",
              body: "Assistants, agents, knowledge bases, internal tools, and workflows designed around the way your team already works.",
              tone: "bg-sbe-cobalt-soft",
            },
            {
              title: "Live website launches",
              body: "Beautiful public sites, Vercel deployments, real URLs, screenshots, analytics, and maintenance after the launch.",
              tone: "bg-sbe-copper-soft",
            },
            {
              title: "Proof you can inspect",
              body: "Every claim points back to working systems, indexed files, production domains, and receipts we can open together.",
              tone: "bg-sbe-cream",
            },
          ].map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[8px] border-2 border-sbe-ink p-7 ${
                card.tone
              } ${index === 1 ? "sbe-offset-red" : ""}`}
            >
              <p className="font-mono text-micro uppercase text-sbe-copper">
                0{index + 1} / Studio mode
              </p>
              <h2 className="mt-5 font-serif text-h3 text-sbe-ink">
                {card.title}
              </h2>
              <p className="mt-4 text-body font-semibold text-sbe-graphite">
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
            {"\u00a0\u00a0"}/ the same{" "}
            <span className="text-sbe-copper">ai</span>{" "}
            we build for us &gt;
          </h1>
        </div>
      </Container>
    </section>
  );
}
