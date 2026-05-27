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
    <footer className="border-t border-sbe-hairline mt-24">
      <Container as="div" className="py-20">
        <div className="mb-14 flex flex-col gap-6 border-b border-sbe-hairline pb-10 md:flex-row md:items-end md:justify-between">
          <BrandSignature variant="footer" />
          <p className="max-w-sm text-caption text-sbe-graphite md:text-right">
            Oklahoma City | Building AI that works.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <Wordmark href="/" forceFull showMotto={false} />
            <p className="mt-3 text-caption text-sbe-graphite">
              Practical AI systems, useful automation, and careful code for real teams.
            </p>
          </div>

          {/* Column 2 — Site */}
          <div>
            <h2 className="font-mono text-micro uppercase text-sbe-mist">
              Site
            </h2>
            <ul className="mt-4 space-y-2">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-body text-sbe-graphite hover:text-sbe-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Proof */}
          <div>
            <h2 className="font-mono text-micro uppercase text-sbe-mist">
              Proof
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/receipts"
                  className="text-body text-sbe-graphite hover:text-sbe-ink transition-colors"
                >
                  The Receipts →
                </Link>
              </li>
            </ul>
            <p className="mt-3 text-caption text-sbe-graphite max-w-xs">
              Every number on this site is verifiable.
            </p>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h2 className="font-mono text-micro uppercase text-sbe-mist">
              Contact
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:hello@sbe.studio"
                  className="font-mono text-body text-sbe-graphite hover:text-sbe-ink transition-colors"
                >
                  hello@sbe.studio
                </a>
              </li>
            </ul>
            <p className="mt-3 text-caption text-sbe-graphite">
              Mon–Fri · Central Time
            </p>
          </div>
        </div>

        <Rule className="mt-16" />

        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="text-caption text-sbe-graphite">
            © 2026 Space Bot Engineering Studio. Built in Oklahoma City.
          </p>
          <p className="font-mono text-micro text-sbe-mist">
            theme: {mounted ? resolvedTheme ?? "light" : "light"}
          </p>
        </div>
      </Container>
    </footer>
  );
}
