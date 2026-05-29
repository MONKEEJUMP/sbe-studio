import { BrandStamp } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/ui/Marquee";

const TECH_STACK = [
  "QWEN 235B",
  "Claude Opus 4.7",
  "Cerebras",
  "DigitalOcean",
  "RunPod A40",
  "Next.js 16",
  "TypeScript",
  "Drizzle ORM",
  "Supabase",
  "Clerk",
  "vLLM",
  "Tavily",
  "PM2",
  "Playwright",
  "sqlite-vec",
  "Ollama",
  "Oracle Cloud",
  "Vercel",
  "Python 3.14",
  "Kalshi API",
  "Avellaneda-Stoikov",
  "OpenClaw",
  "Tesseract.js",
  "FFmpeg",
  "ngrok",
];

export function HeroAct3() {
  return (
    <section
      aria-labelledby="stack-heading"
      className="relative overflow-hidden border-y-2 border-sbe-ink bg-sbe-electric py-7"
    >
      <BrandStamp
        tone="plasma"
        className="-left-8 -top-10"
        opacity={0.32}
        rotate={-10}
        size="8rem"
      />
      <div className="relative z-10 mb-6 flex justify-center px-6">
        <Eyebrow className="rounded-full border-2 border-sbe-ink bg-sbe-surface px-4 py-2 text-sbe-cobalt">
          TECHNICAL STACK · ACTIVELY IN PRODUCTION
        </Eyebrow>
      </div>
      <h2 id="stack-heading" className="sr-only">
        Technical stack actively in production
      </h2>
      <div className="relative z-10">
        <Marquee items={TECH_STACK} speedSeconds={40} />
      </div>
    </section>
  );
}
