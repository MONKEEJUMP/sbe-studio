import { MANIFEST_DATA } from "./manifest-data";

export type VercelProject = {
  slug: string;
  projectName: string;
  title: string;
  url: string;
  category: string;
  summary: string;
  tags: string[];
  highlight: string;
  image: string;
  featured?: boolean;
};

export const VERCEL_PROJECTS: VercelProject[] = [
  {
    slug: "dirty-tequila",
    projectName: "dirty-tequila",
    title: "Dirty Tequila",
    url: "https://dirty-tequila.vercel.app",
    category: "Beverage brand",
    summary:
      "A cinematic product site for a flavored tequila brand, built around nightlife positioning, product clarity, and launch-ready brand storytelling.",
    tags: ["Brand", "Beverage", "Launch"],
    highlight: "A launch-ready tequila presence with nightlife energy and product focus.",
    image: "/work-sites/dirty-tequila.png",
    featured: true,
  },
  {
    slug: "botspace",
    projectName: "botspace",
    title: "BotSpace",
    url: "https://botspace.online",
    category: "Ai media platform",
    summary:
      "A live Ai-native media property with autonomous agents, persistent publishing behavior, and a product identity built around machine-made editorial work.",
    tags: ["Ai", "Media", "Agents"],
    highlight: "The first home for every Ai in the universe.",
    image: "/work-sites/botspace.png",
    featured: true,
  },
  {
    slug: "route-66-beach-bash",
    projectName: "route-66-beach-bash",
    title: "Route 66 Beach Bash",
    url: "https://route-66-beach-bash.vercel.app",
    category: "Festival site",
    summary:
      "A premium event site for the Route 66 centennial celebration at the Santa Monica Pier, built for sponsor clarity, audience excitement, and large-scale festival positioning.",
    tags: ["Events", "Festival", "Landing"],
    highlight: "A centennial event presence with sponsor-ready scale.",
    image: "/work-sites/route-66-beach-bash.png",
    featured: true,
  },
  {
    slug: "scissortail-laboratory",
    projectName: "scissortail-laboratory",
    title: "Scissortail Laboratory",
    url: "https://scissortail-laboratory.vercel.app",
    category: "Compliance laboratory",
    summary:
      "A laboratory website for cannabis and hemp testing, balancing scientific credibility, pricing visibility, compliance language, and regional service coverage.",
    tags: ["Lab", "Compliance", "B2B"],
    highlight: "Scientific testing positioned for regulated product markets.",
    image: "/work-sites/scissortail-laboratory.png",
    featured: true,
  },
  {
    slug: "john-gibson-miller",
    projectName: "john-gibson-miller",
    title: "John Gibson Miller",
    url: "https://john-gibson-miller.vercel.app",
    category: "Luxury real estate",
    summary:
      "A polished real-estate brand presence for a Tulsa luxury advisor, built around editorial authority, market confidence, and cinematic service positioning.",
    tags: ["Real Estate", "Luxury", "Personal Brand"],
    highlight: "Concierge-level real estate positioning with editorial discipline.",
    image: "/work-sites/john-gibson-miller.png",
    featured: true,
  },
  {
    slug: "ftautogarage",
    projectName: "ftautogarage",
    title: "Full Throttle Auto Garage",
    url: "https://ftautogarage.com",
    category: "Automotive service",
    summary:
      "A local service website for Oklahoma City automotive repair, diagnostics, custom builds, lift work, performance services, and shop authority.",
    tags: ["Local Service", "Automotive", "OKC"],
    highlight: "A service site built for diagnostics, performance, and trust.",
    image: "/work-sites/ftautogarage.png",
    featured: true,
  },
  {
    slug: "rod-goodman",
    projectName: "rod-goodman",
    title: "The Wellness Revolution",
    url: "https://rod-goodman.vercel.app",
    category: "Wellness brand",
    summary:
      "A personal brand and wellness-business site centered on plant-based living, practical entrepreneurship, and mobile-first business development.",
    tags: ["Wellness", "Personal Brand", "Business"],
    highlight: "Wellness, Ai-era entrepreneurship, and practical business momentum.",
    image: "/work-sites/rod-goodman.png",
  },
  {
    slug: "rockarita",
    projectName: "rockarita",
    title: "RockaRita",
    url: "https://rockarita.vercel.app",
    category: "Beverage brand",
    summary:
      "A bright premium margarita-mix site shaped around beach culture, music, retail readiness, and product-led celebration.",
    tags: ["Brand", "Beverage", "CPG"],
    highlight: "A premium beverage brand with retail-ready summer energy.",
    image: "/work-sites/rockarita.png",
  },
  {
    slug: "event-solutions",
    projectName: "event-solutions",
    title: "GCK Productions",
    url: "https://gckproductions.com",
    category: "Event production",
    summary:
      "A production-company site for concerts, festivals, hospitality, and large-scale entertainment operations with clear service positioning.",
    tags: ["Events", "Production", "Entertainment"],
    highlight: "Event production positioned for larger venues and bigger programs.",
    image: "/work-sites/event-solutions.png",
  },
  {
    slug: "campusspark",
    projectName: "campusspark",
    title: "CampusSpark",
    url: "https://campusspark.vercel.app",
    category: "Campus app",
    summary:
      "A verified student-matching concept with .edu enrollment language, mutual opt-in mechanics, and safety-forward product framing.",
    tags: ["Product", "Campus", "Safety"],
    highlight: "A campus product concept built around verification and consent.",
    image: "/work-sites/campusspark.png",
  },
  {
    slug: "techno-3",
    projectName: "techno-3",
    title: "Technotainment",
    url: "https://techno-3.vercel.app",
    category: "Web3 entertainment",
    summary:
      "A show-business-meets-Web3 site with a high-concept entertainment pitch, platform positioning, and media-forward launch language.",
    tags: ["Entertainment", "Web3", "Media"],
    highlight: "Entertainment strategy translated into a Web3-ready public presence.",
    image: "/work-sites/techno-3.png",
  },
  {
    slug: "mam-massage-spa",
    projectName: "mam-massage-spa",
    title: "MaM Massage and Spa",
    url: "https://mam-massage-spa.vercel.app",
    category: "Wellness service",
    summary:
      "A local wellness site for Oklahoma City massage services, designed around calm navigation, service clarity, and appointment-ready content.",
    tags: ["Local Service", "Wellness", "OKC"],
    highlight: "A calm local-service site built for bookings and trust.",
    image: "/work-sites/mam-massage-spa.png",
  },
  {
    slug: "chute-boss",
    projectName: "chute-boss",
    title: "Chute Boss",
    url: "https://chute-boss.vercel.app",
    category: "Facility services",
    summary:
      "A corporate-grade service site for trash chute cleaning, odor control, compactor rooms, and building maintenance programs.",
    tags: ["B2B", "Facilities", "Maintenance"],
    highlight: "Facilities maintenance positioned for property operators.",
    image: "/work-sites/chute-boss.png",
  },
  {
    slug: "music-giving-hope",
    projectName: "music-giving-hope",
    title: "Music Giving Hope",
    url: "https://music-giving-hope.vercel.app",
    category: "Nonprofit",
    summary:
      "A nonprofit presence built around music, healing, community impact, and a clear public mission for donors, partners, and participants.",
    tags: ["Nonprofit", "Music", "Community"],
    highlight: "A mission-driven site for community impact through music.",
    image: "/work-sites/music-giving-hope.png",
  },
  {
    slug: "putnam-high-school",
    projectName: "putnam-high-school",
    title: "Putnam City Alumni",
    url: "https://putnam-high-school.vercel.app",
    category: "Alumni association",
    summary:
      "A rebuilt alumni home for connection, giving, class contacts, reunions, memorial records, and institutional history.",
    tags: ["Community", "Education", "Alumni"],
    highlight: "A public archive for alumni connection and school continuity.",
    image: "/work-sites/putnam-high-school.png",
  },
  {
    slug: "sd-assembly-pro",
    projectName: "sd-assembly-pro",
    title: "SD Assembly Pros",
    url: "https://sd-assembly-pro.vercel.app",
    category: "Home services",
    summary:
      "A San Diego home-service site for assembly, handyman work, TV mounting, light plumbing, and same-day availability.",
    tags: ["Local Service", "Home", "San Diego"],
    highlight: "A local-service site built for speed, trust, and scheduling.",
    image: "/work-sites/sd-assembly-pro.png",
  },
  {
    slug: "work-source",
    projectName: "work-source",
    title: "Work Source Live",
    url: "https://work-source-zeta.vercel.app",
    category: "Staffing",
    summary:
      "A staffing website for hospitality and operations crews across hotels, venues, restaurants, stadiums, and event environments.",
    tags: ["Staffing", "Hospitality", "Operations"],
    highlight: "Operational staffing positioned for venues and hospitality teams.",
    image: "/work-sites/work-source.png",
  },
  {
    slug: "presidential-blunts",
    projectName: "presidential-blunts",
    title: "Presidential Blunts",
    url: "https://presidential-blunts.vercel.app",
    category: "Cannabis brand",
    summary:
      "A premium infused-product brand page built around moonrock craft, pre-rolls, product hierarchy, and elevated retail positioning.",
    tags: ["Brand", "Cannabis", "Retail"],
    highlight: "A premium cannabis brand presence with clear product architecture.",
    image: "/work-sites/presidential-blunts.png",
  },
  {
    slug: "presidential-moonrocks",
    projectName: "presidential-moonrocks",
    title: "Presidential Moon Rocks",
    url: "https://presidential-moonrocks.vercel.app",
    category: "Cannabis brand",
    summary:
      "A premium cannabis brand site for an infused product house: moon rocks, blunts, and pre-rolls presented through luxury packaging language.",
    tags: ["Brand", "Cannabis", "Luxury"],
    highlight: "Luxury cannabis positioning with a strong product narrative.",
    image: "/work-sites/presidential-moonrocks.png",
  },
  {
    slug: "strategic-website",
    projectName: "strategic-website",
    title: "Strategic Sanitation Services",
    url: "https://strategic-website.vercel.app",
    category: "Property services",
    summary:
      "A property-services site for apartment and HOA trash management, designed around compliance, cleanliness, operations, and reliability.",
    tags: ["B2B", "Property", "Sanitation"],
    highlight: "Property sanitation positioned for operators and communities.",
    image: "/work-sites/strategic-website.png",
  },
  {
    slug: "777-roofing",
    projectName: "777-roofing",
    title: "777 Roofing",
    url: "https://777-roofing.vercel.app",
    category: "Roofing contractor",
    summary:
      "A roofing contractor site for Oklahoma homeowners and businesses, with clear service coverage, storm-readiness language, and trust-building content.",
    tags: ["Local Service", "Roofing", "Oklahoma"],
    highlight: "Roof repair and replacement positioned for Oklahoma weather.",
    image: "/work-sites/777-roofing.png",
  },
  {
    slug: "bell-carpet-cleaning",
    projectName: "bell-carpet-cleaning",
    title: "Bell Carpet Cleaning",
    url: "https://bell-carpet-cleaning.vercel.app",
    category: "Cleaning service",
    summary:
      "A local service website for carpet cleaning, tile and grout cleaning, upholstery, rugs, and repair across the Oklahoma City metro.",
    tags: ["Local Service", "Cleaning", "OKC"],
    highlight: "A service site built around care, coverage, and credibility.",
    image: "/work-sites/bell-carpet-cleaning.png",
  },
  {
    slug: "mist-me-by-meg",
    projectName: "mist-me-by-meg",
    title: "Mist Me by Meg",
    url: "https://mist-me-by-meg.vercel.app",
    category: "Beauty studio",
    summary:
      "A boutique spray-tan studio site for custom airbrush tans, bridal services, memberships, and product-ready beauty offerings.",
    tags: ["Beauty", "Local Service", "OKC"],
    highlight: "A beauty-service site built for bookings and repeat clients.",
    image: "/work-sites/mist-me-by-meg.png",
  },
  {
    slug: "esthetics-at-mam",
    projectName: "esthetics-at-mam",
    title: "Esthetics at MaM",
    url: "https://esthetics-at-mam.vercel.app",
    category: "Beauty studio",
    summary:
      "A luxury esthetician studio page for facials, waxing, brow design, and head-spa rituals inside MaM Massage and Spa.",
    tags: ["Beauty", "Wellness", "OKC"],
    highlight: "Premium esthetics presented inside a trusted wellness brand.",
    image: "/work-sites/esthetics-at-mam.png",
  },
  {
    slug: "sbe-studio",
    projectName: "sbe-studio",
    title: "SBE Studio",
    url: "https://sbe.studio",
    category: "Studio home",
    summary:
      "The studio hub for proof of work, services, receipts, production stats, and the public archive of websites shipping from the Vercel account.",
    tags: ["Studio", "Portfolio", "Vercel"],
    highlight: "sbe.studio (abc)</always/be/coding>",
    image: "/work-sites/sbe-studio.png",
  },
];

export const FEATURED_VERCEL_PROJECTS = VERCEL_PROJECTS.filter(
  (project) => project.featured
);

export const PORTFOLIO_STATS = {
  totalProjects: MANIFEST_DATA.publicVercelDeployments,
  featuredProjects: FEATURED_VERCEL_PROJECTS.length,
  categories: new Set(VERCEL_PROJECTS.map((project) => project.category)).size,
  pagesShipped: MANIFEST_DATA.pagesShipped,
  platform: "www",
};

export function getProjectHost(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}
