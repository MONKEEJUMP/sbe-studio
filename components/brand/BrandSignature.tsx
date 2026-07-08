import {
  BRAND_CODE_PATH,
  BRAND_CODE_PREFIX,
  BRAND_DOMAIN,
  BRAND_MOTTO,
} from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandSignatureProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function BrandSignature({
  className,
  variant = "header",
}: BrandSignatureProps) {
  const footer = variant === "footer";

  return (
    <span
      aria-label={BRAND_MOTTO}
      className={cn(
        "inline-flex max-w-full min-w-0 items-center gap-3 font-mono lowercase text-sbe-graphite",
        footer ? "flex-wrap text-body sm:text-h4" : "text-micro",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px shrink-0 bg-sbe-plasma",
          footer ? "w-10 sm:w-16" : "w-5"
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "min-w-0 rounded-sm px-2 py-1",
          footer ? "bg-white/10" : "bg-sbe-chip",
          footer ? "break-all" : "whitespace-nowrap"
        )}
      >
        <span className="text-sbe-ink">{BRAND_DOMAIN}</span>{" "}
        <span>{BRAND_CODE_PREFIX}</span>
        <span className="text-sbe-cobalt">&lt;/</span>
        <span>{BRAND_CODE_PATH}</span>
        <span className="text-sbe-cobalt">&gt;</span>
      </span>
    </span>
  );
}
