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
      className="border-t border-sbe-hairline py-8"
    >
      <div className="mb-8 flex justify-center px-6">
        <Eyebrow tone="cobalt">
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
