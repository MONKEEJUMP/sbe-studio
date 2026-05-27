import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectBrowser } from "@/components/work/ProjectBrowser";
import type { VercelProject } from "@/lib/vercel-portfolio";
import { VERCEL_PROJECTS } from "@/lib/vercel-portfolio";

type DeploymentStripProps = {
  eyebrow?: string;
  title: string;
  body: string;
  slugs: string[];
};

export function DeploymentStrip({
  eyebrow = "LIVE DEPLOYMENTS",
  title,
  body,
  slugs,
}: DeploymentStripProps) {
  const projects = slugs
    .map((slug) => VERCEL_PROJECTS.find((project) => project.slug === slug))
    .filter((project): project is VercelProject => Boolean(project));

  return (
    <section className="border-t border-sbe-hairline py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Eyebrow tone="cobalt">{eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-h2 text-sbe-ink">{title}</h2>
            <p className="mt-6 max-w-[58ch] text-body-lg text-sbe-graphite">
              {body}
            </p>
          </div>
          <Button href="/work" variant="secondary" withArrow>
            View the work wall
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug}>
              <ProjectBrowser project={project} />
              <p className="mt-5 font-mono text-micro uppercase text-sbe-mist">
                {project.category}
              </p>
              <h3 className="mt-2 font-serif text-h4 text-sbe-ink">
                {project.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
