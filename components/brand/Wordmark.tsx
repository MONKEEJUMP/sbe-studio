"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandSignature } from "@/components/brand/BrandSignature";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  href?: string;
  forceFull?: boolean;
  showMotto?: boolean;
};

export function Wordmark({
  className,
  href = "/",
  forceFull = false,
  showMotto = true,
}: WordmarkProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (forceFull || !showMotto) return;
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceFull, showMotto]);

  const showAscender = showMotto && (forceFull || !scrolled);

  const inner = (
    <span className={cn("inline-flex items-center", className)}>
      <span
        aria-label="Space Bot Engineering"
        className="font-serif text-h3 font-bold text-sbe-ink"
      >
        SBE
      </span>
      <span
        aria-hidden={!showAscender}
        className={cn(
          "items-center overflow-hidden transition-[max-width,opacity] duration-300 ease-out",
          forceFull ? "inline-flex" : "hidden sm:inline-flex",
          showAscender ? "max-w-96 opacity-100" : "max-w-0 opacity-0"
        )}
      >
        <span
          aria-hidden="true"
          className="mx-3 inline-block h-5 w-px bg-sbe-hairline"
        />
        <BrandSignature className="shrink-0" />
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="Space Bot Engineering home"
        className="inline-flex items-center rounded-sm outline-none"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
