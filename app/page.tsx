import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroAct1 } from "@/components/home/HeroAct1";
import { HeroAct2 } from "@/components/home/HeroAct2";
import { HeroAct3 } from "@/components/home/HeroAct3";
import { CredibilityGrid } from "@/components/home/CredibilityGrid";
import { ServiceTiers } from "@/components/home/ServiceTiers";
import { CaseStudyPreview } from "@/components/home/CaseStudyPreview";
import { FounderTeaser } from "@/components/home/FounderTeaser";
import { VercelShowcase } from "@/components/home/VercelShowcase";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        <HeroAct1 />
        <HeroAct2 />
        <HeroAct3 />
        <VercelShowcase />
        <CredibilityGrid />
        <ServiceTiers />
        <CaseStudyPreview />
        <FounderTeaser />
      </main>
      <Footer />
    </>
  );
}
