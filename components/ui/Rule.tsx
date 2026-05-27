import { cn } from "@/lib/utils";

type RuleProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function Rule({ className, orientation = "horizontal" }: RuleProps) {
  if (orientation === "vertical") {
    return (
      <span
        aria-hidden="true"
        className={cn("inline-block w-px bg-sbe-hairline", className)}
      />
    );
  }
  return (
    <hr
      aria-hidden="true"
      className={cn("h-px w-full border-0 bg-sbe-hairline", className)}
    />
  );
}
