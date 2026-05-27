import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectBrowser } from "@/components/work/ProjectBrowser";
import {
  FEATURED_VERCEL_PROJECTS,
  PORTFOLIO_STATS,
  VERCEL_PROJECTS,
} from "@/lib/vercel-portfolio";

const HOME_PROJECTS = FEATURED_VERCEL_PROJECTS.slice(0, 4);

export function VercelShowcase() {
  const [lead, ...supporting] = HOME_PROJECTS;

  return (
    <section
      aria-labelledby="vercel-showcase-heading"
      className="border-t border-sbe-hairline py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="cobalt">LIVE VERCEL WORK</Eyebrow>
            <h2
              id="vercel-showcase-heading"
              className="mt-6 max-w-[18ch] font-serif text-h2 text-sbe-cobalt"
            >
              A studio wall of shipped websites.
            </h2>
            <p className="mt-6 max-w-[58ch] text-body-lg text-sbe-graphite">
              These are live deployments from the SBE Vercel account: brand
              sites, local service engines, AI experiments, event pages, and
              product concepts that moved from prompt to production.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-sbe-hairline pt-8 lg:col-span-5 lg:border-t-0 lg:pt-0">
            <div>
              <p className="font-mono text-micro uppercase text-sbe-mist">
                Live sites
              </p>
              <p className="mt-2 font-mono text-h3 text-sbe-ink">
                {PORTFOLIO_STATS.totalProjects}
              </p>
            </div>
            <div>
              <p className="font-mono text-micro uppercase text-sbe-mist">
                Sectors
              </p>
              <p className="mt-2 font-mono text-h3 text-sbe-ink">
                {PORTFOLIO_STATS.categories}
              </p>
            </div>
            <div>
              <p className="font-mono text-micro uppercase text-sbe-mist">
                Platform
              </p>
              <p className="mt-2 font-mono text-h3 text-sbe-ink">Vercel</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {lead && (
            <article className="lg:col-span-7">
              <ProjectBrowser project={lead} priority />
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
            {supporting.map((project) => (
              <article
                key={project.slug}
                className="grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
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
            {VERCEL_PROJECTS.length} live deployments indexed
          </p>
        </div>
      </Container>
    </section>
  );
}
