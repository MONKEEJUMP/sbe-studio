"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? `Switch to ${next} theme`
          : "Toggle theme"
      }
      onClick={() => setTheme(next)}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-sm text-sbe-ink hover:bg-sbe-hairline transition-colors duration-200",
        className
      )}
    >
      <Sun
        size={20}
        strokeWidth={1.5}
        aria-hidden="true"
        className={cn(
          "absolute transition-opacity duration-200",
          isDark ? "opacity-0" : "opacity-100"
        )}
      />
      <Moon
        size={20}
        strokeWidth={1.5}
        aria-hidden="true"
        className={cn(
          "absolute transition-opacity duration-200",
          isDark ? "opacity-100" : "opacity-0"
        )}
      />
    </button>
  );
}
