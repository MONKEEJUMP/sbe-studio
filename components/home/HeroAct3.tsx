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
      className="border-y-2 border-sbe-ink bg-sbe-cream py-7"
    >
      <div className="mb-6 flex justify-center px-6">
        <Eyebrow className="rounded-full border-2 border-sbe-ink bg-sbe-surface px-4 py-2 text-sbe-cobalt">
          TECHNICAL STACK · ACTIVELY IN PRODUCTION
        </Eyebrow>
      </div>
      <h2 id="stack-heading" className="sr-only">
        Technical stack actively in production
      </h2>
      <Marquee items={TECH_STACK} speedSeconds={40} />
    </section>
  );
}
