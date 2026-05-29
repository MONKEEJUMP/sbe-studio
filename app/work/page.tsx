import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProjectBrowser } from "@/components/work/ProjectBrowser";
import { WORK_PROJECTS } from "@/lib/work";
import {
  FEATURED_VERCEL_PROJECTS,
  PORTFOLIO_STATS,
  VERCEL_PROJECTS,
  getProjectHost,
} from "@/lib/vercel-portfolio";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Live websites, Vercel deployments, and selected engineering case studies from Space Bot Engineering Studio.",
};

export default function WorkPage() {
  const leadProject = FEATURED_VERCEL_PROJECTS[0];
  const supportingProjects = FEATURED_VERCEL_PROJECTS.slice(1);

  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        <section className="relative overflow-hidden py-28 lg:py-32">
          <BrandStamp
            tone="plasma"
            className="-right-24 top-14 hidden md:block"
            opacity={0.14}
            rotate={7}
          />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow>LIVE WORK INDEX</Eyebrow>
                <h1 className="mt-8 max-w-[18ch] font-serif text-h1 text-sbe-cobalt">
                  Built it. Shipped it. Put it on Vercel.
                </h1>
                <p className="mt-8 max-w-[62ch] text-body-lg text-sbe-graphite">
                  A public wall of SBE deployments: brand sites, product
                  experiments, AI platforms, local service engines, nonprofits,
                  event pages, and the studio systems behind them.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 border-t border-sbe-hairline pt-8 lg:col-span-5 lg:border-t-0 lg:pt-0">
                <div>
                  <p className="font-mono text-micro uppercase text-sbe-mist">
                    Deployments
                  </p>
                  <p className="mt-2 font-mono text-h3 text-sbe-ink">
                    {PORTFOLIO_STATS.totalProjects}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-micro uppercase text-sbe-mist">
                    Featured
                  </p>
                  <p className="mt-2 font-mono text-h3 text-sbe-ink">
                    {PORTFOLIO_STATS.featuredProjects}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-micro uppercase text-sbe-mist">
                    Host
                  </p>
                  <p className="mt-2 font-mono text-h3 text-sbe-ink">Vercel</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden border-t border-sbe-hairline py-28">
          <BrandStamp
            tone="electric"
            className="-left-24 top-20 hidden lg:block"
            opacity={0.12}
            rotate={-8}
          />
          <Container className="relative z-10">
            <div className="mb-16 max-w-3xl">
              <Eyebrow tone="cobalt">FEATURED DEPLOYMENTS</Eyebrow>
              <h2 className="mt-6 font-serif text-h2 text-sbe-ink">
                The front row.
              </h2>
              <p className="mt-6 max-w-[58ch] text-body-lg text-sbe-graphite">
                A few of the strongest public builds get the big treatment
                here. Every screen links directly to the live website.
              </p>
            </div>

            {leadProject && (
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <ProjectBrowser project={leadProject} priority />
                </div>
                <div className="lg:col-span-5">
                  <p className="font-mono text-micro uppercase text-sbe-copper">
                    01 · {leadProject.category}
                  </p>
                  <h3 className="mt-5 font-serif text-h2 text-sbe-cobalt">
                    {leadProject.title}
                  </h3>
                  <p className="mt-6 text-body-lg text-sbe-graphite">
                    {leadProject.summary}
                  </p>
                  <p className="mt-6 font-mono text-caption text-sbe-ink">
                    {leadProject.highlight}
                  </p>
                  <div className="mt-10">
                    <Button
                      href={leadProject.url}
                      external
                      variant="secondary"
                      withArrow
                    >
                      Visit live site
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {supportingProjects.map((project, index) => (
                <article key={project.slug}>
                  <ProjectBrowser project={project} />
                  <p className="mt-5 font-mono text-micro uppercase text-sbe-copper">
                    {String(index + 2).padStart(2, "0")} · {project.category}
                  </p>
                  <h3 className="mt-3 font-serif text-h3 text-sbe-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-body text-sbe-graphite">
                    {project.summary}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden border-t border-sbe-hairline py-28">
          <BrandStamp
            tone="cobalt"
            className="-right-28 top-16 hidden lg:block"
            opacity={0.1}
            rotate={8}
          />
          <Container className="relative z-10">
            <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <Eyebrow>ALL LIVE WEBSITES</Eyebrow>
                <h2 className="mt-6 font-serif text-h2 text-sbe-ink">
                  The Vercel wall.
                </h2>
                <p className="mt-6 max-w-[62ch] text-body-lg text-sbe-graphite">
                  Each item is pulled from the current Vercel account inventory
                  and linked to its live production URL.
                </p>
              </div>
              <p className="font-mono text-caption text-sbe-mist">
                {VERCEL_PROJECTS.length} deployments · last inventoried May 27,
                2026
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {VERCEL_PROJECTS.map((project) => (
                <article key={project.slug} id={project.slug} className="group">
                  <ProjectBrowser project={project} />
                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-micro uppercase text-sbe-mist">
                          {project.category}
                        </p>
                        <h3 className="mt-2 font-serif text-h3 text-sbe-ink transition-colors group-hover:text-sbe-cobalt">
                          {project.title}
                        </h3>
                      </div>
                      <p className="shrink-0 font-mono text-micro text-sbe-copper">
                        live
                      </p>
                    </div>
                    <p className="mt-4 text-body text-sbe-graphite">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.slug}-${tag}`}
                          className="border border-sbe-hairline px-2.5 py-1 font-mono text-micro uppercase text-sbe-graphite"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block font-mono text-caption text-sbe-ink underline decoration-sbe-copper decoration-1 underline-offset-4 transition-all hover:decoration-2"
                    >
                      {getProjectHost(project.url)}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden border-t border-sbe-hairline py-28">
          <BrandStamp
            tone="copper"
            className="-left-28 bottom-14 hidden lg:block"
            opacity={0.1}
            rotate={-7}
          />
          <Container className="relative z-10">
            <div className="mb-12 max-w-3xl">
              <Eyebrow tone="cobalt">ENGINEERING RECEIPTS</Eyebrow>
              <h2 className="mt-6 font-serif text-h2 text-sbe-ink">
                The deeper systems behind the sites.
              </h2>
              <p className="mt-6 max-w-[62ch] text-body-lg text-sbe-graphite">
                The public websites are the visible layer. The studio also
                keeps receipts for the research systems, benchmarked engines,
                and production architecture that power the work.
              </p>
            </div>

            <div className="divide-y divide-sbe-hairline">
              {WORK_PROJECTS.map((project, index) => (
                <article
                  key={project.slug}
                  id={project.slug}
                  className="grid scroll-mt-24 grid-cols-1 gap-10 py-14 lg:grid-cols-12"
                >
                  <div className="lg:col-span-2">
                    <p className="font-mono text-micro uppercase text-sbe-copper">
                      {String(index + 1).padStart(2, "0")} · {project.status}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="font-mono text-micro uppercase text-sbe-mist">
                      {project.kicker}
                    </p>
                    <h2 className="mt-4 font-serif text-h3 text-sbe-ink">
                      {project.title}
                    </h2>
                    <p className="mt-5 max-w-[56ch] text-body text-sbe-graphite">
                      {project.summary}
                    </p>
                    <p className="mt-5 font-mono text-caption text-sbe-graphite">
                      {project.stack}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div key={`${project.slug}-${metric.label}`}>
                          <p className="font-mono text-micro uppercase text-sbe-mist">
                            {metric.label}
                          </p>
                          <p className="mt-2 font-mono text-body text-sbe-ink">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 font-mono text-micro uppercase text-sbe-mist">
                      Source · {project.source}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <Button href="/contact" variant="secondary" withArrow>
                Talk through a build
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
