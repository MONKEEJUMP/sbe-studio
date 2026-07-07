import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const scanTargets = [
  "app",
  "components",
  "lib",
  "README.md",
  "ops/README.md",
];

const extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".css"]);

const blockedPatterns = [
  {
    pattern: /\bGrok\b/g,
    reason: "Use frontier-model wording instead of naming this competitor.",
  },
  {
    pattern: /\bKalshi\b/g,
    reason: "Do not publish this platform reference on the public SBE site.",
  },
  {
    pattern: /\bCactus\b/g,
    reason: "Do not publish this proprietary project reference.",
  },
  {
    pattern: /\bBigC\b/g,
    reason: "Do not publish this proprietary project reference.",
  },
  {
    pattern: /\bWaterfall\b/g,
    reason: "Do not publish this proprietary project reference.",
  },
  {
    pattern: /grokBeatBySeconds|grokResponseTime|deepseekBeatBySeconds|deepseekResponseTime/g,
    reason: "Internal benchmark identifiers must stay frontier-model neutral.",
  },
  {
    pattern: /#FF6B00|#5200FF|#F900FF|#B22234|#3C3B6E|#FAFAF7/gi,
    reason: "Stale palette value; use the current SBE green signal palette.",
  },
  {
    pattern: /Launch the website/g,
    reason: "Current hero language is 'Launch the site.'",
  },
  {
    pattern: /(?<![A-Za-z0-9_])AIs?(?![A-Za-z0-9_])/g,
    reason: "Brand prose uses 'Ai' except the lowercase motto.",
  },
];

const lowercaseAiPattern = /(?<![A-Za-z0-9_])ai(?![A-Za-z0-9_])/g;

const requiredSnippets = [
  {
    file: "lib/manifest-data.ts",
    snippet: "frontierBenchmarkLeadSeconds",
    reason: "Manifest should use frontier-model-neutral benchmark naming.",
  },
  {
    file: "app/receipts/page.tsx",
    snippet: "MANIFEST_DATA.frontierBenchmarkLeadSeconds",
    reason: "Receipts must point to the neutral benchmark field.",
  },
  {
    file: "components/home/LiveStats.tsx",
    snippet: "MANIFEST_DATA.frontierBenchmarkLeadSeconds",
    reason: "Homepage stats must point to the neutral benchmark field.",
  },
  {
    file: "app/work/page.tsx",
    snippet: "PORTFOLIO_STATS.platform",
    reason: "Work page platform stat should use the shared portfolio value.",
  },
];

function collectFiles(target) {
  const absolute = path.join(root, target);
  if (!fs.existsSync(absolute)) return [];

  const stat = fs.statSync(absolute);
  if (stat.isFile()) {
    return extensions.has(path.extname(absolute)) ? [absolute] : [];
  }

  const files = [];
  for (const entry of fs.readdirSync(absolute, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const next = path.join(target, entry.name);
    files.push(...collectFiles(next));
  }
  return files;
}

function lineNumber(content, index) {
  return content.slice(0, index).split(/\r?\n/).length;
}

function isAllowedLowercaseAi(file, content, index) {
  const relative = path.relative(root, file).replaceAll("\\", "/");
  const line = content.split(/\r?\n/)[lineNumber(content, index) - 1] ?? "";

  if (line.includes("abc/always/be/coding")) return true;
  if (line.includes("same ai we build")) return true;
  if (relative === "components/home/HeroAct1.tsx" && line.includes(">ai</span>")) {
    return true;
  }

  return false;
}

const files = scanTargets.flatMap(collectFiles);
const failures = [];

for (const file of files) {
  const relative = path.relative(root, file).replaceAll("\\", "/");
  const content = fs.readFileSync(file, "utf8");

  for (const check of blockedPatterns) {
    check.pattern.lastIndex = 0;
    for (const match of content.matchAll(check.pattern)) {
      failures.push(
        `${relative}:${lineNumber(content, match.index ?? 0)} ${check.reason} Found "${match[0]}".`,
      );
    }
  }

  lowercaseAiPattern.lastIndex = 0;
  for (const match of content.matchAll(lowercaseAiPattern)) {
    const index = match.index ?? 0;
    if (!isAllowedLowercaseAi(file, content, index)) {
      failures.push(
        `${relative}:${lineNumber(content, index)} Brand prose uses "Ai"; lowercase "ai" is only allowed in the motto/tagline.`,
      );
    }
  }
}

for (const required of requiredSnippets) {
  const absolute = path.join(root, required.file);
  const content = fs.existsSync(absolute) ? fs.readFileSync(absolute, "utf8") : "";
  if (!content.includes(required.snippet)) {
    failures.push(`${required.file}: ${required.reason}`);
  }
}

if (failures.length > 0) {
  console.error("SBE public safety checks failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SBE public safety checks passed across ${files.length} files.`);
