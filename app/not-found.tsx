import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BrandStamp } from "@/components/brand/BrandStamp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 · Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
          <BrandStamp
            tone="plasma"
            className="-right-24 top-20 hidden md:block"
            opacity={0.14}
            rotate={8}
          />
          <Container className="relative z-10">
            <Eyebrow>ERROR · 404</Eyebrow>
            <h1 className="mt-8 font-serif text-display text-sbe-ink max-w-[18ch]">
              This page is outside the current operating record.
            </h1>
            <p className="mt-8 max-w-[55ch] text-body-lg text-sbe-graphite">
              Every claim on this site links to a file, deployment, or source
              record. This URL is not part of the current public index.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button href="/" variant="primary" withArrow>
                Back to home
              </Button>
              <Button href="/work" variant="link">
                See our work →
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
