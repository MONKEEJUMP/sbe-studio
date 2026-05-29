import { Code2, Cpu, LockKeyhole, Sparkles, Workflow } from "lucide-react";

const blinkBlocks = Array.from({ length: 12 }, (_, index) => index);
const signalDots = Array.from({ length: 5 }, (_, index) => index);
const footerModes = [
  { label: "Prompt", icon: Sparkles },
  { label: "Build", icon: Workflow },
  { label: "Deploy", icon: Cpu },
  { label: "Prove", icon: LockKeyhole },
];

export function StudioMechanism() {
  return (
    <figure
      aria-label="An animated SBE robot avatar inside a square bot-engine frame."
      className="relative mx-auto w-full max-w-[calc(100vw-4rem)] pb-10 pt-12 sm:max-w-[680px]"
    >
      <div
        aria-hidden="true"
        className="sbe-vivid-band absolute inset-x-6 bottom-4 h-28 rounded-[8px] sm:inset-x-10"
      />

      <div className="relative rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 sbe-offset-red sm:p-4">
        <div className="flex h-10 items-center gap-3 border-b-2 border-sbe-ink px-2">
          <span className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-sbe-copper" />
            <span className="h-3 w-3 rounded-full bg-sbe-cobalt" />
            <span className="h-3 w-3 rounded-full bg-sbe-ink" />
          </span>
          <span className="min-w-0 flex-1 truncate font-mono text-micro uppercase text-sbe-graphite">
            sbe.studio / bot-avatar
          </span>
          <LockKeyhole className="h-4 w-4 text-sbe-cobalt" aria-hidden="true" />
        </div>

        <div className="studio-grid relative mt-3 overflow-hidden rounded-[6px] border-2 border-sbe-ink bg-sbe-surface px-4 pb-4 pt-8 sm:px-6 sm:pb-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-3 sbe-vivid-band"
          />

          <div className="relative mx-auto flex min-h-[27rem] max-w-[30rem] items-center justify-center py-8 sm:min-h-[30rem]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-4 flex -translate-x-1/2 flex-col items-center gap-3"
            >
              {signalDots.map((dot) => (
                <span
                  key={dot}
                  className="sbe-signal-dot h-2 w-2 rounded-full bg-sbe-ink"
                />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="sbe-star-float absolute left-[16%] top-16 z-20 flex h-16 w-20 items-center justify-center"
            >
              <span className="absolute h-12 w-16 rounded-[50%] border-2 border-sbe-ink bg-sbe-surface shadow-[inset_0_0_0_7px_var(--sbe-plasma)]" />
              <Sparkles className="relative h-9 w-9 text-sbe-ink" strokeWidth={1.8} />
            </div>

            <div
              aria-hidden="true"
              className="sbe-star-float-delayed absolute right-[14%] top-24 z-20 flex h-10 w-12 items-center justify-center"
            >
              <span className="absolute h-8 w-10 rounded-[50%] border-2 border-sbe-ink bg-sbe-electric" />
              <Sparkles className="relative h-6 w-6 text-sbe-ink" strokeWidth={1.8} />
            </div>

            <div
              aria-hidden="true"
              className="absolute right-0 top-14 z-30 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 shadow-[8px_8px_0_var(--sbe-cobalt)] sm:-right-8"
            >
              <div className="grid grid-cols-6 gap-2">
                {blinkBlocks.map((block) => (
                  <span
                    key={block}
                    className="sbe-blink-tile h-4 w-4 rounded-[4px] border border-sbe-ink bg-sbe-copper"
                  />
                ))}
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-[22rem] rounded-[14px] border-2 border-sbe-ink bg-sbe-ink p-6 shadow-[12px_12px_0_var(--sbe-cobalt)] sm:max-w-[24rem]">
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-[10px] border border-sbe-electric"
              />
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-[10px] border border-sbe-copper"
              />

              <div className="sbe-robot-idle relative flex h-full items-center justify-center">
                <div
                  aria-hidden="true"
                  className="absolute -top-2 left-1/2 h-12 w-2 -translate-x-1/2 rounded-full border-2 border-sbe-ink bg-sbe-surface"
                />
                <div
                  aria-hidden="true"
                  className="sbe-antenna-pulse absolute -top-10 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-sbe-ink bg-sbe-copper"
                />

                <div
                  aria-hidden="true"
                  className="absolute left-[13%] top-1/2 h-20 w-9 -translate-y-1/2 rounded-[10px] border-2 border-sbe-ink bg-sbe-copper"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-[13%] top-1/2 h-20 w-9 -translate-y-1/2 rounded-[10px] border-2 border-sbe-ink bg-sbe-cobalt"
                />

                <div className="relative w-[70%] rounded-[22px] border-2 border-sbe-ink bg-sbe-electric p-4 shadow-[8px_8px_0_var(--sbe-copper)]">
                  <div className="rounded-[16px] border-2 border-sbe-ink bg-sbe-surface px-4 py-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="sbe-robot-eye flex h-14 flex-1 items-center justify-center rounded-[10px] border-2 border-sbe-ink bg-sbe-plasma">
                        <span className="h-5 w-5 rounded-full bg-sbe-ink" />
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] border-2 border-sbe-ink bg-sbe-cobalt">
                        <Code2 className="h-7 w-7 text-sbe-ink" strokeWidth={2.2} />
                      </div>
                      <div className="sbe-robot-eye flex h-14 flex-1 items-center justify-center rounded-[10px] border-2 border-sbe-ink bg-sbe-plasma">
                        <span className="h-5 w-5 rounded-full bg-sbe-ink" />
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-4">
                      <span className="h-0 w-0 border-x-[12px] border-b-[22px] border-x-transparent border-b-sbe-copper" />
                      <span className="h-7 w-7 rounded-full border-2 border-sbe-ink bg-sbe-electric" />
                    </div>

                    <div className="mt-5 rounded-[10px] border-2 border-sbe-ink bg-sbe-ink p-2">
                      <div className="grid grid-cols-6 gap-1">
                        {Array.from({ length: 18 }, (_, index) => (
                          <span
                            key={index}
                            className="sbe-mouth-pixel h-2 rounded-full bg-sbe-electric"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["S", "B", "E"].map((label) => (
                      <span
                        key={label}
                        className="rounded-[6px] border-2 border-sbe-ink bg-sbe-surface py-2 text-center font-mono text-micro font-bold text-sbe-ink"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-10 left-0 hidden rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-4 shadow-[8px_8px_0_var(--sbe-plasma)] sm:block"
            >
              <div className="mb-3 h-3 w-24 bg-sbe-ink" />
              <div className="mb-2 h-3 w-16 bg-sbe-copper" />
              <div className="h-3 w-28 bg-sbe-cobalt" />
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
            {footerModes.map(({ label, icon: Icon }) => (
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
