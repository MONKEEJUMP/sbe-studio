import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * SBE's custom design-system tokens must be registered with
 * tailwind-merge so it doesn't misclassify e.g. `text-sbe-canvas`
 * (a color) as colliding with `text-body-lg` (a font-size).
 * Without this, `cn()` silently drops the color class and text
 * cascades to `color: inherit` \u2014 which at best is wrong and
 * at worst (like `bg-sbe-ink text-sbe-canvas`) produces invisible
 * text on a matching background.
 */
const SBE_COLOR_TOKENS = [
  "sbe-canvas",
  "sbe-ink",
  "sbe-graphite",
  "sbe-mist",
  "sbe-hairline",
  "sbe-surface",
  "sbe-chip",
  "sbe-copper",
  "sbe-cobalt",
  "sbe-electric",
  "sbe-plasma",
  "sbe-neon",
  "sbe-yellow",
  "sbe-live",
  "sbe-verified",
  "sbe-alert",
] as const;

const SBE_FONT_SIZE_TOKENS = [
  "display",
  "h1",
  "h2",
  "h3",
  "h4",
  "body-lg",
  "body",
  "caption",
  "micro",
  "stat",
] as const;

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [...SBE_FONT_SIZE_TOKENS] }],
      "text-color": [{ text: [...SBE_COLOR_TOKENS] }],
      "bg-color": [{ bg: [...SBE_COLOR_TOKENS] }],
      "border-color": [{ border: [...SBE_COLOR_TOKENS] }],
      "ring-color": [{ ring: [...SBE_COLOR_TOKENS] }],
      fill: [{ fill: [...SBE_COLOR_TOKENS] }],
      stroke: [{ stroke: [...SBE_COLOR_TOKENS] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

export function formatDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
