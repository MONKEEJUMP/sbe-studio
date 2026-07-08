import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { VercelProject } from "@/lib/vercel-portfolio";
import { getProjectHost } from "@/lib/vercel-portfolio";
import { cn } from "@/lib/utils";

type ProjectBrowserProps = {
  project: VercelProject;
  priority?: boolean;
  className?: string;
};

export function ProjectBrowser({
  project,
  priority = false,
  className,
}: ProjectBrowserProps) {
  const host = getProjectHost(project.url);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block overflow-hidden rounded-[8px] border-2 border-sbe-ink bg-sbe-surface",
        "transition-transform duration-200 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex h-10 items-center gap-3 border-b-2 border-sbe-ink px-4">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-sbe-copper" />
          <span className="h-3 w-3 rounded-full bg-sbe-cobalt" />
          <span className="h-3 w-3 rounded-full bg-sbe-neon" />
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-caption text-sbe-ink">
          {host}
        </span>
        <ExternalLink
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
          className="shrink-0 text-sbe-mist transition-colors group-hover:text-sbe-copper"
        />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-sbe-hairline">
        <Image
          src={project.image}
          alt={`${project.title} website screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 80vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
      </div>
    </a>
  );
}
