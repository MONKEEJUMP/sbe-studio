import type { CSSProperties } from "react";
import { Code2, Cpu, LockKeyhole, Sparkles, Workflow } from "lucide-react";

const paletteVars = [
  "var(--sbe-electric)",
  "var(--sbe-cobalt)",
  "var(--sbe-copper)",
  "var(--sbe-plasma)",
  "var(--sbe-surface)",
];

const blinkBlocks = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  color: paletteVars[(index * 5 + 2) % paletteVars.length],
  delay: `${(index * 0.17).toFixed(2)}s`,
  duration: `${(1.1 + (index % 5) * 0.18).toFixed(2)}s`,
}));

const gridPulseCells = Array.from({ length: 96 }, (_, index) => ({
  id: index,
  color: paletteVars[(index * 7 + Math.floor(index / 3)) % paletteVars.length],
  delay: `${((index * 0.19) % 4.2).toFixed(2)}s`,
  duration: `${(2.1 + ((index * 0.11) % 2.4)).toFixed(2)}s`,
}));

const mouthPixels = Array.from({ length: 18 }, (_, index) => {
  const row = Math.floor(index / 6);
  const column = index % 6;

  return {
    id: index,
    delay: `${(column * 0.08 + row * 0.23).toFixed(2)}s`,
    duration: `${(1.05 + row * 0.13 + (column % 2) * 0.07).toFixed(2)}s`,
  };
});

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
            className="pointer-events-none absolute inset-0 z-0 grid grid-cols-12 grid-rows-8"
          >
            {gridPulseCells.map((cell) => (
              <span
                key={cell.id}
                className="sbe-grid-pulse"
                style={
                  {
                    "--pulse-color": cell.color,
                    "--pulse-delay": cell.delay,
                    "--pulse-duration": cell.duration,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 z-10 h-3 sbe-vivid-band"
          />

          <div className="relative z-10 mx-auto flex min-h-[27rem] max-w-[30rem] items-center justify-center py-8 sm:min-h-[30rem]">
            <div
              aria-hidden="true"
              className="sbe-badge-float absolute left-[16%] top-16 z-20 flex h-16 w-20 items-center justify-center"
            >
              <span className="absolute h-12 w-16 rounded-[50%] border-2 border-sbe-ink bg-sbe-surface shadow-[inset_0_0_0_7px_var(--sbe-plasma)]" />
              <span className="relative -rotate-6 font-mono text-sm font-bold tracking-normal text-sbe-ink">
                \@\@
              </span>
            </div>

            <div
              aria-hidden="true"
              className="absolute right-0 top-14 z-30 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 shadow-[8px_8px_0_var(--sbe-cobalt)] sm:-right-8"
            >
              <div className="grid grid-cols-6 gap-2">
                {blinkBlocks.map((block) => (
                  <span
                    key={block.id}
                    className="sbe-blink-tile h-4 w-4 rounded-[4px] border border-sbe-ink bg-sbe-copper"
                    style={
                      {
                        "--tile-color": block.color,
                        "--tile-delay": block.delay,
                        "--tile-duration": block.duration,
                      } as CSSProperties
                    }
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
                        {mouthPixels.map((pixel) => (
                          <span
                            key={pixel.id}
                            className="sbe-mouth-pixel h-2 rounded-full bg-sbe-electric"
                            style={
                              {
                                "--mouth-delay": pixel.delay,
                                "--mouth-duration": pixel.duration,
                              } as CSSProperties
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["S", "B", "E"].map((label, index) => (
                      <span
                        key={label}
                        className="sbe-letter-blink rounded-[6px] border-2 border-sbe-ink bg-sbe-surface py-2 text-center font-mono text-micro font-bold text-sbe-ink"
                        style={
                          {
                            "--letter-delay": `${(index * 0.18).toFixed(2)}s`,
                          } as CSSProperties
                        }
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
              <div
                className="sbe-diagnostic-line mb-3 h-3 w-24 bg-sbe-ink"
                style={
                  {
                    "--line-delay": "0s",
                    "--line-duration": "1.9s",
                  } as CSSProperties
                }
              />
              <div
                className="sbe-diagnostic-line mb-2 h-3 w-16 bg-sbe-copper"
                style={
                  {
                    "--line-delay": "0.31s",
                    "--line-duration": "1.55s",
                  } as CSSProperties
                }
              />
              <div
                className="sbe-diagnostic-line h-3 w-28 bg-sbe-cobalt"
                style={
                  {
                    "--line-delay": "0.18s",
                    "--line-duration": "2.15s",
                  } as CSSProperties
                }
              />
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
