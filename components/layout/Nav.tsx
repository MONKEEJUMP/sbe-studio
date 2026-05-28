"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrandSignature } from "@/components/brand/BrandSignature";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/receipts", label: "Receipts" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-16 border-b border-sbe-hairline",
          "bg-sbe-canvas"
        )}
      >
        <Container className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-4">
          <Wordmark showMotto={false} />

          <div className="hidden min-w-0 justify-center sm:flex md:hidden lg:flex">
            <BrandSignature className="max-w-full" />
          </div>

          <div className="flex items-center justify-end gap-6">
            <nav
              aria-label="Main navigation"
              className="hidden md:block"
            >
              <ul className="flex items-center gap-8">
                {LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group relative inline-block py-2 text-body transition-colors duration-200",
                          active
                            ? "text-sbe-ink"
                            : "text-sbe-graphite hover:text-sbe-ink"
                        )}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute -bottom-px left-0 h-px bg-sbe-copper transition-all duration-200 ease-in-out",
                            active ? "w-full" : "w-0 group-hover:w-full"
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-sbe-ink transition-colors hover:bg-sbe-hairline md:hidden"
              >
                {open ? (
                  <X size={20} strokeWidth={1.5} aria-hidden="true" />
                ) : (
                  <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-sbe-canvas md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex h-full flex-col items-center justify-center gap-12 pt-16"
          >
            <BrandSignature className="sm:hidden" />
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-h3 text-sbe-ink hover:text-sbe-copper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
