import type { CSSProperties } from "react";
import {
  Activity,
  Code2,
  Cpu,
  LockKeyhole,
  Sparkles,
  Workflow,
} from "lucide-react";

const paletteVars = [
  "var(--sbe-copper)",
  "var(--sbe-cobalt)",
  "var(--sbe-copper)",
  "var(--sbe-cobalt)",
  "var(--sbe-plasma)",
  "var(--sbe-neon)",
];

const signalCells = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  color: paletteVars[(index * 3 + Math.floor(index / 4)) % paletteVars.length],
  delay: `${(index * 0.11).toFixed(2)}s`,
  duration: `${(2.4 + (index % 4) * 0.18).toFixed(2)}s`,
}));

const waveBars = [42, 72, 56, 88, 64, 46, 78, 52, 68, 44].map(
  (height, index) => ({
    id: index,
    height,
    delay: `${(index * 0.08).toFixed(2)}s`,
  }),
);

const footerModes = [
  { label: "Prompt", icon: Sparkles },
  { label: "Build", icon: Workflow },
  { label: "Deploy", icon: Cpu },
  { label: "Prove", icon: LockKeyhole },
];

function SignalMatrix() {
  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-8 gap-2 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 shadow-[6px_6px_0_var(--sbe-plasma)]"
    >
      {signalCells.map((cell) => (
        <span
          key={cell.id}
          className="sbe-probot-signal h-3 w-3 rounded-[3px] border border-sbe-ink"
          style={
            {
              "--signal-color": cell.color,
              "--signal-delay": cell.delay,
              "--signal-duration": cell.duration,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function RobotCore() {
  return (
    <div className="sbe-probot-idle relative mx-auto w-full max-w-[24rem]">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 -bottom-6 h-12 border-2 border-sbe-ink bg-sbe-cobalt"
      />

      <div className="relative border-2 border-sbe-ink bg-sbe-ink p-4 shadow-[12px_12px_0_var(--sbe-cobalt)] sm:p-5">
        <div
          aria-hidden="true"
          className="absolute inset-4 border border-sbe-electric"
        />
        <div
          aria-hidden="true"
          className="absolute inset-8 border border-sbe-copper"
        />

        <div className="relative z-10 bg-sbe-surface p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between border-b-2 border-sbe-ink pb-3">
            <span className="font-mono text-micro uppercase text-sbe-ink">
              SBE / AI CORE
            </span>
            <span className="flex items-center gap-2 font-mono text-micro uppercase text-sbe-copper">
              <span className="h-2.5 w-2.5 rounded-full border border-sbe-ink bg-sbe-neon" />
              Live
            </span>
          </div>

          <div className="relative overflow-hidden border-2 border-sbe-ink bg-sbe-electric p-4 shadow-[8px_8px_0_var(--sbe-cobalt)]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-sbe-ink"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="sbe-probot-eye h-16 border-2 border-sbe-ink bg-sbe-surface p-2">
                <span className="block h-full bg-sbe-ink" />
              </div>
              <div className="sbe-probot-eye h-16 border-2 border-sbe-ink bg-sbe-surface p-2">
                <span className="block h-full bg-sbe-ink" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border-2 border-sbe-ink bg-sbe-cobalt">
                <Code2
                  className="h-7 w-7 text-white"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </div>
              <div className="h-14 min-w-0 flex-1 border-2 border-sbe-ink bg-sbe-surface px-3 py-2">
                <div className="flex h-full items-end justify-between gap-1.5">
                  {waveBars.map((bar) => (
                    <span
                      key={bar.id}
                      className="sbe-probot-wave w-full bg-sbe-ink"
                      style={
                        {
                          "--wave-height": `${bar.height}%`,
                          "--wave-delay": bar.delay,
                        } as CSSProperties
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["S", "System"],
              ["B", "Build"],
              ["E", "Proof"],
            ].map(([letter, label]) => (
              <div
                key={letter}
                className="border-2 border-sbe-ink bg-sbe-surface p-2 text-center"
              >
                <span className="block font-mono text-h4 font-bold leading-none text-sbe-ink">
                  {letter}
                </span>
                <span className="mt-1 block truncate font-mono text-[0.55rem] uppercase leading-none text-sbe-copper">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StudioMechanism() {
  return (
    <figure
      aria-label="A polished SBE AI robot core inside a square bot-engine frame."
      className="sbe-robot-stage relative mx-auto w-full max-w-[calc(100vw-4rem)] pb-10 pt-10 sm:max-w-[680px]"
    >
      <div
        aria-hidden="true"
        className="sbe-vivid-band absolute inset-x-10 bottom-4 h-20 rounded-[8px]"
      />

      <div className="relative rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 shadow-[10px_10px_0_var(--sbe-copper)] sm:p-4">
        <div className="flex h-10 items-center gap-3 border-b-2 border-sbe-ink px-2">
          <span className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-sbe-copper" />
            <span className="h-3 w-3 rounded-full bg-sbe-cobalt" />
            <span className="h-3 w-3 rounded-full border border-sbe-ink bg-sbe-neon" />
          </span>
          <span className="min-w-0 flex-1 truncate font-mono text-micro uppercase text-sbe-graphite">
            sbe.studio / pro bot
          </span>
          <Activity className="h-4 w-4 text-sbe-cobalt" aria-hidden="true" />
        </div>

        <div className="studio-grid-pro relative mt-3 overflow-hidden rounded-[6px] border-2 border-sbe-ink bg-sbe-surface px-4 pb-5 pt-5 sm:px-7 sm:pb-7">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 z-10 h-3 sbe-vivid-band"
          />

          <div className="relative z-10 grid min-h-[34rem] items-center gap-6 lg:grid-cols-[minmax(0,1fr)_8rem]">
            <RobotCore />

            <aside className="grid gap-4 lg:self-center">
              <SignalMatrix />
              <div
                aria-hidden="true"
                className="rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-3 shadow-[6px_6px_0_var(--sbe-cobalt)]"
              >
                <div className="mb-3 flex items-center justify-between font-mono text-micro uppercase text-sbe-ink">
                  <span>Core</span>
                  <span className="text-sbe-copper">92%</span>
                </div>
                <div className="h-3 border-2 border-sbe-ink bg-sbe-surface">
                  <div className="h-full w-[92%] bg-sbe-electric" />
                </div>
                <div className="mt-3 h-3 border-2 border-sbe-ink bg-sbe-surface">
                  <div className="h-full w-[64%] bg-sbe-plasma" />
                </div>
              </div>
            </aside>
          </div>

          <div className="relative z-10 mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {footerModes.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 rounded-[8px] border-2 border-sbe-ink bg-sbe-surface px-3 py-3"
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
