import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectBrowser } from "@/components/work/ProjectBrowser";
import {
  FEATURED_VERCEL_PROJECTS,
  PORTFOLIO_STATS,
} from "@/lib/vercel-portfolio";

const HOME_PROJECTS = FEATURED_VERCEL_PROJECTS.slice(0, 4);
const CARD_SHADOWS = ["sbe-offset-blue", "sbe-offset-red", "sbe-offset-plasma"];

export function VercelShowcase() {
  const [lead, ...supporting] = HOME_PROJECTS;

  return (
    <section
      aria-labelledby="vercel-showcase-heading"
      className="relative overflow-hidden border-t-2 border-sbe-ink bg-sbe-canvas py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-sbe-canvas"
      />
      <BrandStamp
        tone="cobalt"
        className="-right-24 top-20 hidden md:block"
        opacity={0.12}
        rotate={8}
      />
      <BrandStamp
        tone="plasma"
        className="-left-24 bottom-16 hidden lg:block"
        opacity={0.16}
        rotate={-8}
        size="clamp(9rem, 18vw, 16rem)"
      />
      <BrandStamp
        tone="copper"
        className="left-[44%] top-[34rem] hidden xl:block"
        opacity={0.09}
        rotate={-11}
        size="clamp(5rem, 8vw, 7rem)"
      />
      <BrandStamp
        tone="electric"
        className="right-[31%] top-[12rem] hidden xl:block"
        opacity={0.08}
        rotate={21}
        size="clamp(2.6rem, 4vw, 3.8rem)"
      />
      <BrandStampField
        seed={404}
        count={34}
        className="hidden md:block"
        minOpacity={0.035}
        maxOpacity={0.14}
        minRem={3}
        maxRem={17}
      />
      <Container className="relative z-10">
        <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="cobalt">LIVE VERCEL WORK</Eyebrow>
            <h2
              id="vercel-showcase-heading"
              className="mt-6 max-w-[12ch] font-serif text-h1 text-sbe-ink sm:text-display"
            >
              A public portfolio of shipped digital products.
            </h2>
            <p className="mt-6 max-w-[58ch] text-body-lg text-sbe-graphite">
              These are live deployments from the SBE Vercel account: brand
              sites, local service engines, Ai products, event pages, and
              operating concepts moved from prompt to production.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:col-span-5">
            {[
              ["Live sites", PORTFOLIO_STATS.totalProjects],
              ["Pages shipped", PORTFOLIO_STATS.pagesShipped],
              ["Platform", PORTFOLIO_STATS.platform],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-5 ${
                  CARD_SHADOWS[index % CARD_SHADOWS.length]
                }`}
              >
                <p className="font-mono text-micro uppercase text-sbe-mist">
                  {label}
                </p>
                <p className="mt-3 font-mono text-h4 text-sbe-cobalt">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {lead && (
            <article className="lg:col-span-7">
              <ProjectBrowser
                project={lead}
                priority
                className="sbe-offset-plasma"
              />
              <div className="mt-6 max-w-2xl">
                <p className="font-mono text-micro uppercase text-sbe-copper">
                  Featured deployment
                </p>
                <h3 className="mt-3 font-serif text-h3 text-sbe-ink">
                  {lead.title}
                </h3>
                <p className="mt-3 text-body text-sbe-graphite">
                  {lead.summary}
                </p>
              </div>
            </article>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {supporting.map((project, index) => (
              <article
                key={project.slug}
                className={`grid grid-cols-1 gap-5 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] ${
                  CARD_SHADOWS[index % CARD_SHADOWS.length]
                }`}
              >
                <ProjectBrowser project={project} />
                <div>
                  <p className="font-mono text-micro uppercase text-sbe-mist">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-serif text-h4 text-sbe-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-caption text-sbe-graphite">
                    {project.highlight}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6">
          <Button href="/work" variant="primary" withArrow>
            Open the full work index
          </Button>
          <p className="font-mono text-caption text-sbe-mist">
            {PORTFOLIO_STATS.totalProjects} live production sites indexed
          </p>
        </div>
      </Container>
    </section>
  );
}
