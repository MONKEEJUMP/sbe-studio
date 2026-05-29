import Image from "next/image";
import { Code2, Cpu, LockKeyhole, Sparkles, Workflow } from "lucide-react";

const previewSites = [
  {
    title: "SBE studio",
    image: "/work-sites/sbe-studio.png",
  },
  {
    title: "BotSpace",
    image: "/work-sites/botspace.png",
  },
  {
    title: "Scissortail",
    image: "/work-sites/scissortail-laboratory.png",
  },
];

export function StudioMechanism() {
  return (
    <figure
      aria-label="A stylized SBE studio engine showing code, live Vercel work, and production proof."
      className="relative mx-auto w-full max-w-[calc(100vw-4rem)] pb-10 pt-12 sm:max-w-[680px]"
    >
      <div
        aria-hidden="true"
        className="sbe-vivid-band absolute inset-x-6 bottom-4 h-28 rounded-[8px] sm:inset-x-10"
      />

      <div
        aria-hidden="true"
        className="absolute right-3 top-2 z-10 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-4 sbe-offset-blue sm:right-10 sm:top-0"
      >
        <Sparkles className="h-9 w-9 text-sbe-plasma" strokeWidth={1.8} />
      </div>

      <div className="relative rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 sbe-offset-red sm:p-4">
        <div className="flex h-10 items-center gap-3 border-b-2 border-sbe-ink px-2">
          <span className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-sbe-copper" />
            <span className="h-3 w-3 rounded-full bg-sbe-cobalt" />
            <span className="h-3 w-3 rounded-full bg-sbe-mist" />
          </span>
          <span className="min-w-0 flex-1 truncate font-mono text-micro uppercase text-sbe-graphite">
            sbe.studio / workbench
          </span>
          <LockKeyhole className="h-4 w-4 text-sbe-cobalt" aria-hidden="true" />
        </div>

        <div className="studio-grid relative mt-3 overflow-hidden rounded-[6px] border-2 border-sbe-ink bg-sbe-cream p-4 sm:p-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-3 sbe-vivid-band"
          />

          <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-micro uppercase text-sbe-copper">
                    Studio engine
                  </p>
                  <h2 className="mt-2 font-serif text-h3 text-sbe-ink">
                    Always be coding.
                  </h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border-2 border-sbe-ink bg-sbe-cobalt text-white">
                  <Code2 className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-6 space-y-3" aria-hidden="true">
                <div className="h-3 w-11/12 rounded-full bg-sbe-cobalt" />
                <div className="h-3 w-8/12 rounded-full bg-sbe-plasma" />
                <div className="h-3 w-10/12 rounded-full bg-sbe-copper" />
                <div className="h-3 w-6/12 rounded-full bg-sbe-ink" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {["AI", "WEB", "OPS"].map((label) => (
                  <div
                    key={label}
                    className="rounded-[6px] border border-sbe-ink bg-white px-2 py-3 text-center font-mono text-micro font-bold text-sbe-ink"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {previewSites.map((site, index) => (
                <div
                  key={site.title}
                  className="grid grid-cols-[72px_1fr] gap-3 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-2 sm:grid-cols-[88px_1fr]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] border border-sbe-hairline bg-sbe-hairline">
                    <Image
                      src={site.image}
                      alt=""
                      fill
                      priority
                      sizes="(min-width: 640px) 88px, 72px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <p className="truncate font-mono text-micro uppercase text-sbe-mist">
                      Live build 0{index + 1}
                    </p>
                    <p className="truncate font-sans text-caption font-bold text-sbe-ink">
                      {site.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Prompt", icon: Sparkles },
              { label: "Build", icon: Workflow },
              { label: "Deploy", icon: Cpu },
              { label: "Prove", icon: LockKeyhole },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-[8px] border-2 border-sbe-ink bg-white px-3 py-3"
              >
                <Icon className="h-4 w-4 text-sbe-copper" aria-hidden="true" />
                <span className="font-mono text-micro uppercase text-sbe-ink">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
