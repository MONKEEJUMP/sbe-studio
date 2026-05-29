import { Code2, Cpu, LockKeyhole, Sparkles, Workflow } from "lucide-react";

const signalDots = ["top", "upper", "middle", "lower", "bottom"];
const blinkBlocks = Array.from({ length: 10 }, (_, index) => index);
const mouthBars = [28, 44, 34, 54, 24];
const footerModes = [
  { label: "Prompt", icon: Sparkles },
  { label: "Build", icon: Workflow },
  { label: "Deploy", icon: Cpu },
  { label: "Prove", icon: LockKeyhole },
];

export function StudioMechanism() {
  return (
    <figure
      aria-label="An animated SBE robot head machine with blinking code blocks, floating stars, and signal dots."
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
            sbe.studio / bot-engine
          </span>
          <LockKeyhole className="h-4 w-4 text-sbe-cobalt" aria-hidden="true" />
        </div>

        <div className="studio-grid relative mt-3 overflow-hidden rounded-[6px] border-2 border-sbe-ink bg-sbe-surface px-4 pb-4 pt-12 sm:px-6 sm:pb-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-3 sbe-vivid-band"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-8 h-40 w-px -translate-x-1/2 bg-sbe-ink"
          />

          <div
            aria-hidden="true"
            className="sbe-star-float absolute left-[38%] top-5 z-20 flex h-16 w-24 items-center justify-center"
          >
            <span className="absolute h-12 w-20 rounded-[50%] border-2 border-sbe-ink bg-sbe-surface shadow-[inset_0_0_0_8px_var(--sbe-plasma)]" />
            <Sparkles className="relative h-10 w-10 text-sbe-ink" strokeWidth={1.8} />
          </div>

          <div
            aria-hidden="true"
            className="sbe-star-float-delayed absolute left-[54%] top-16 z-20 flex h-10 w-12 items-center justify-center"
          >
            <span className="absolute h-8 w-10 rounded-[50%] border-2 border-sbe-ink bg-sbe-surface shadow-[inset_0_0_0_5px_var(--sbe-electric)]" />
            <Sparkles className="relative h-6 w-6 text-sbe-ink" strokeWidth={1.8} />
          </div>

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[5.75rem] z-20 flex -translate-x-1/2 flex-col items-center gap-3"
          >
            {signalDots.map((dot) => (
              <span
                key={dot}
                className="sbe-signal-dot h-2 w-2 rounded-full bg-sbe-ink"
              />
            ))}
          </div>

          <div className="relative mx-auto mt-28 max-w-[30rem] sm:mt-32">
            <div className="sbe-robot-idle relative mx-auto w-full max-w-[27rem]">
              <div className="absolute -left-5 top-28 hidden h-16 w-16 rounded-[8px] border-2 border-sbe-ink bg-sbe-plasma sm:block" />
              <div className="absolute -right-5 top-28 hidden h-16 w-16 rounded-[8px] border-2 border-sbe-ink bg-sbe-cobalt sm:block" />

              <div className="relative rounded-[42px] border-2 border-sbe-ink bg-sbe-surface p-5 shadow-[12px_12px_0_var(--sbe-copper)]">
                <div className="absolute -top-14 left-1/2 h-14 w-2 -translate-x-1/2 rounded-full border-2 border-sbe-ink bg-sbe-surface" />
                <div className="sbe-antenna-pulse absolute -top-[4.55rem] left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-sbe-ink bg-sbe-electric" />

                <div className="rounded-[30px] border-2 border-sbe-ink bg-sbe-electric p-4">
                  <div className="rounded-[24px] border-2 border-sbe-ink bg-sbe-surface p-5">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                      <div className="sbe-robot-eye h-16 rounded-[10px] border-2 border-sbe-ink bg-sbe-plasma" />
                      <div className="flex h-16 w-16 items-center justify-center rounded-[16px] border-2 border-sbe-ink bg-sbe-cobalt">
                        <Code2 className="h-8 w-8 text-sbe-ink" strokeWidth={2} />
                      </div>
                      <div className="sbe-robot-eye h-16 rounded-[10px] border-2 border-sbe-ink bg-sbe-plasma" />
                    </div>

                    <div className="mt-6 flex items-end justify-center gap-3">
                      {mouthBars.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className="sbe-mouth-bar w-5 rounded-t-[4px] border-2 border-sbe-ink bg-sbe-ink"
                          style={{ height }}
                        />
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {["AI", "WEB", "OPS"].map((label) => (
                        <div
                          key={label}
                          className="rounded-[6px] border-2 border-sbe-ink bg-sbe-surface px-2 py-3 text-center font-mono text-micro font-bold text-sbe-ink"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-5 gap-2">
                  {mouthBars.map((_, index) => (
                    <span
                      key={index}
                      className="h-3 rounded-full bg-sbe-ink"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-5 top-8 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 shadow-[8px_8px_0_var(--sbe-cobalt)] sm:-right-16"
            >
              <div className="grid grid-cols-5 gap-2">
                {blinkBlocks.map((block) => (
                  <span
                    key={block}
                    className="sbe-blink-tile h-4 w-4 rounded-[4px] border border-sbe-ink bg-sbe-copper"
                  />
                ))}
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -left-4 top-36 hidden rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-4 shadow-[8px_8px_0_var(--sbe-plasma)] sm:block"
            >
              <div className="mb-3 h-3 w-24 bg-sbe-ink" />
              <div className="mb-2 h-3 w-16 bg-sbe-copper" />
              <div className="h-3 w-28 bg-sbe-cobalt" />
            </div>
          </div>

          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
