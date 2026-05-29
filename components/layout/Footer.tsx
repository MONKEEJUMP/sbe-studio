"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrandSignature } from "@/components/brand/BrandSignature";
import { Rule } from "@/components/ui/Rule";

const SITE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="sbe-vivid-band mt-24 border-t-2 border-sbe-ink text-white">
      <Container as="div" className="py-20">
        <div className="mb-14 flex flex-col gap-6 border-b border-white/30 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="[&_*]:text-white">
            <BrandSignature variant="footer" />
          </div>
          <p className="max-w-sm text-caption text-white/80 md:text-right">
            Oklahoma City | Building AI that works.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <div className="[&_*]:text-white">
              <Wordmark href="/" forceFull showMotto={false} />
            </div>
            <p className="mt-3 text-caption text-white/80">
              Practical AI systems, useful automation, and careful code for real teams.
            </p>
          </div>

          {/* Column 2 — Site */}
          <div>
            <h2 className="font-mono text-micro uppercase text-white/60">
              Site
            </h2>
            <ul className="mt-4 space-y-2">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                  href={l.href}
                    className="text-body text-white/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Proof */}
          <div>
            <h2 className="font-mono text-micro uppercase text-white/60">
              Proof
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/receipts"
                  className="text-body text-white/80 transition-colors hover:text-white"
                >
                  The Receipts →
                </Link>
              </li>
            </ul>
            <p className="mt-3 max-w-xs text-caption text-white/80">
              Every number on this site is verifiable.
            </p>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h2 className="font-mono text-micro uppercase text-white/60">
              Contact
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:hello@sbe.studio"
                  className="font-mono text-body text-white/80 transition-colors hover:text-white"
                >
                  hello@sbe.studio
                </a>
              </li>
            </ul>
            <p className="mt-3 text-caption text-white/80">
              Mon–Fri · Central Time
            </p>
          </div>
        </div>

        <Rule className="mt-16 bg-white/30" />

        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="text-caption text-white/80">
            © 2026 Space Bot Engineering Studio. Built in Oklahoma City.
          </p>
          <p className="font-mono text-micro text-white/70">
            theme: {mounted ? resolvedTheme ?? "light" : "light"}
          </p>
        </div>
      </Container>
    </footer>
  );
}
