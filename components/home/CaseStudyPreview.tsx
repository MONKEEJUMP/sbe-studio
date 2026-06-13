import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BrandStamp, BrandStampField } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WORK_PROJECTS } from "@/lib/work";

const PREVIEW_PROJECTS = WORK_PROJECTS.slice(0, 3);

export function CaseStudyPreview() {
  return (
    <section
      aria-labelledby="work-heading"
      className="relative overflow-hidden border-t-2 border-sbe-ink bg-sbe-electric py-28"
    >
      <BrandStamp
        tone="plasma"
        className="-right-20 top-16 hidden md:block"
        opacity={0.32}
        rotate={7}
      />
      <BrandStamp
        tone="copper"
        className="-left-24 bottom-8 hidden lg:block"
        opacity={0.2}
        rotate={-9}
        size="clamp(8rem, 19vw, 17rem)"
      />
      <BrandStamp
        tone="plasma"
        className="left-[44%] top-44 hidden xl:block"
        opacity={0.24}
        rotate={10}
        size="clamp(5rem, 8vw, 7rem)"
      />
      <BrandStampField
        seed={707}
        count={28}
        tones={["plasma", "copper", "cobalt"]}
        className="hidden md:block"
        minOpacity={0.05}
        maxOpacity={0.2}
        minRem={3.2}
        maxRem={15}
      />
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl">
          <Eyebrow>SELECTED WORK</Eyebrow>
          <h2
            id="work-heading"
            className="mt-6 font-serif text-h1 text-sbe-ink"
          >
            Built it. Shipped it. Still running it.
          </h2>
        </div>

        <ul
          className="flex flex-col"
        >
          {PREVIEW_PROJECTS.map((project) => (
            <li
              key={project.slug}
              className="group mb-5 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-6 transition-transform duration-200 hover:-translate-y-1 sbe-offset-blue"
            >
              <Link
                href={`/work#${project.slug}`}
                className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-micro uppercase text-sbe-mist">
                    CASE
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-h3 text-sbe-ink group-hover:text-sbe-copper transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-caption text-sbe-graphite">
                    {project.stack}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-body text-sbe-graphite max-w-[58ch]">
                    {project.summary}
                  </p>
                  <p className="mt-4 font-mono text-micro uppercase text-sbe-mist">
                    {project.metrics[0].label} · {project.metrics[0].value}
                  </p>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <span className="font-mono text-micro uppercase text-sbe-graphite group-hover:text-sbe-copper transition-colors">
                    Read →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
