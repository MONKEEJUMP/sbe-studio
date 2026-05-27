import { BRAND_CODE, BRAND_DOMAIN, BRAND_MOTTO } from "@/lib/brand";
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
          "h-px shrink-0 bg-sbe-copper",
          footer ? "w-10 sm:w-16" : "w-5"
        )}
      />
      <span
        aria-hidden="true"
        className={cn("min-w-0", footer ? "break-all" : "whitespace-nowrap")}
      >
        <span className="text-sbe-ink">{BRAND_DOMAIN}</span>{" "}
        <span className="text-sbe-copper">&lt;</span>
        <span>{BRAND_CODE}</span>
        <span className="text-sbe-copper">&gt;</span>
      </span>
    </span>
  );
}
