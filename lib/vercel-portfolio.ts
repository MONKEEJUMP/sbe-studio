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
      "A cinematic product site for a flavored tequila brand, built around a nightlife-forward visual system and direct product storytelling.",
    tags: ["Brand", "Beverage", "Launch"],
    highlight: "Hecho en Mexico. Poured wherever the night runs.",
    image: "/work-sites/dirty-tequila.png",
    featured: true,
  },
  {
    slug: "botspace",
    projectName: "botspace",
    title: "BotSpace",
    url: "https://botspace.online",
    category: "AI media platform",
    summary:
      "A live AI-native media property with autonomous agents, always-on publishing, and a full product identity around machine-made editorial work.",
    tags: ["AI", "Media", "Agents"],
    highlight: "The first home for all AIs in the universe.",
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
      "A premium event site for the Route 66 centennial celebration at the Santa Monica Pier, with sponsor-forward festival positioning.",
    tags: ["Events", "Festival", "Landing"],
    highlight: "A centennial event landing page with west-coast scale.",
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
      "A laboratory website for cannabis and hemp testing, balancing scientific credibility, pricing clarity, and regional service coverage.",
    tags: ["Lab", "Compliance", "B2B"],
    highlight: "Top-shelf science for top-shelf products.",
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
      "A polished real-estate brand presence for a Tulsa luxury advisor, built around editorial authority and cinematic service positioning.",
    tags: ["Real Estate", "Luxury", "Personal Brand"],
    highlight: "Concierge-level service with a storyteller's eye.",
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
      "A local service website for Oklahoma City auto repair, custom builds, diagnostics, lifts, performance work, and shop authority.",
    tags: ["Local Service", "Automotive", "OKC"],
    highlight: "Auto repair and custom builds with muscle.",
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
      "A personal brand and wellness-business site centered on plant-based living, entrepreneurship, and phone-powered income paths.",
    tags: ["Wellness", "Personal Brand", "Business"],
    highlight: "Wellness, AI-era entrepreneurship, and mobile-first business.",
    image: "/work-sites/rod-goodman.png",
  },
  {
    slug: "rockarita",
    projectName: "rockarita",
    title: "RockaRita",
    url: "https://rockarita.vercel.app",
    category: "Beverage brand",
    summary:
      "A bright premium margarita-mix site shaped around beach days, music, sunlit celebration, and retail-ready product energy.",
    tags: ["Brand", "Beverage", "CPG"],
    highlight: "A premium margarita mix with music and sun in the system.",
    image: "/work-sites/rockarita.png",
  },
  {
    slug: "event-solutions",
    projectName: "event-solutions",
    title: "GCK Productions",
    url: "https://gckproductions.com",
    category: "Event production",
    summary:
      "A production-company site for concerts, festivals, hospitality, and large-scale entertainment operations.",
    tags: ["Events", "Production", "Entertainment"],
    highlight: "Concert and event production with national-scale ambition.",
    image: "/work-sites/event-solutions.png",
  },
  {
    slug: "campusspark",
    projectName: "campusspark",
    title: "CampusSpark",
    url: "https://campusspark.vercel.app",
    category: "Campus app",
    summary:
      "A verified student-matching concept with .edu signup language, mutual opt-in positioning, and safety-forward product framing.",
    tags: ["Product", "Campus", "Safety"],
    highlight: "Meet verified students on your campus.",
    image: "/work-sites/campusspark.png",
  },
  {
    slug: "techno-3",
    projectName: "techno-3",
    title: "Technotainment",
    url: "https://techno-3.vercel.app",
    category: "Web3 entertainment",
    summary:
      "A show-business-meets-Web3 site with a high-concept entertainment pitch and celebrity-platform positioning.",
    tags: ["Entertainment", "Web3", "Media"],
    highlight: "Hollywood is coming to Web3.",
    image: "/work-sites/techno-3.png",
  },
  {
    slug: "mam-massage-spa",
    projectName: "mam-massage-spa",
    title: "MaM Massage and Spa",
    url: "https://mam-massage-spa.vercel.app",
    category: "Wellness service",
    summary:
      "A local wellness site for Oklahoma City massage services, designed around calm navigation and appointment-ready service content.",
    tags: ["Local Service", "Wellness", "OKC"],
    highlight: "Massage and spa services in Oklahoma City.",
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
    highlight: "Trash chute cleaning, repair, and maintenance.",
    image: "/work-sites/chute-boss.png",
  },
  {
    slug: "music-giving-hope",
    projectName: "music-giving-hope",
    title: "Music Giving Hope",
    url: "https://music-giving-hope.vercel.app",
    category: "Nonprofit",
    summary:
      "A nonprofit presence built around music, healing, community impact, and a clear public mission.",
    tags: ["Nonprofit", "Music", "Community"],
    highlight: "Healing power through music.",
    image: "/work-sites/music-giving-hope.png",
  },
  {
    slug: "putnam-high-school",
    projectName: "putnam-high-school",
    title: "Putnam City Alumni",
    url: "https://putnam-high-school.vercel.app",
    category: "Alumni association",
    summary:
      "A rebuilt alumni home for connection, giving, class contacts, reunions, memorial records, and school history.",
    tags: ["Community", "Education", "Alumni"],
    highlight: "A modern home for school pride and alumni connection.",
    image: "/work-sites/putnam-high-school.png",
  },
  {
    slug: "sd-assembly-pro",
    projectName: "sd-assembly-pro",
    title: "SD Assembly Pros",
    url: "https://sd-assembly-pro.vercel.app",
    category: "Home services",
    summary:
      "A San Diego service site for assembly, handyman work, TV mounting, light plumbing, and same-day availability.",
    tags: ["Local Service", "Home", "San Diego"],
    highlight: "Trusted assembly and handyman experts.",
    image: "/work-sites/sd-assembly-pro.png",
  },
  {
    slug: "work-source",
    projectName: "work-source",
    title: "Work Source Live",
    url: "https://work-source-zeta.vercel.app",
    category: "Staffing",
    summary:
      "A staffing website for hospitality and operations crews across hotels, venues, restaurants, and stadiums.",
    tags: ["Staffing", "Hospitality", "Operations"],
    highlight: "Staffing with edge. Crews that deliver.",
    image: "/work-sites/work-source.png",
  },
  {
    slug: "presidential-blunts",
    projectName: "presidential-blunts",
    title: "Presidential Blunts",
    url: "https://presidential-blunts.vercel.app",
    category: "Cannabis brand",
    summary:
      "A premium infused-product brand page built around moonrock craft, pre-rolls, and elevated retail positioning.",
    tags: ["Brand", "Cannabis", "Retail"],
    highlight: "Triple-infused moonrock craft.",
    image: "/work-sites/presidential-blunts.png",
  },
  {
    slug: "presidential-moonrocks",
    projectName: "presidential-moonrocks",
    title: "Presidential Moon Rocks",
    url: "https://presidential-moonrocks.vercel.app",
    category: "Cannabis brand",
    summary:
      "A premium cannabis brand site for the original infused house: moon rocks, blunts, and pre-rolls with luxury packaging language.",
    tags: ["Brand", "Cannabis", "Luxury"],
    highlight: "Maison of the world's strongest cannabis.",
    image: "/work-sites/presidential-moonrocks.png",
  },
  {
    slug: "strategic-website",
    projectName: "strategic-website",
    title: "Strategic Sanitation Services",
    url: "https://strategic-website.vercel.app",
    category: "Property services",
    summary:
      "A property-services site for apartment and HOA trash management, designed around compliance, cleanliness, and reliability.",
    tags: ["B2B", "Property", "Sanitation"],
    highlight: "Premium trash management for communities.",
    image: "/work-sites/strategic-website.png",
  },
  {
    slug: "777-roofing",
    projectName: "777-roofing",
    title: "777 Roofing",
    url: "https://777-roofing.vercel.app",
    category: "Roofing contractor",
    summary:
      "A roofing contractor site for Oklahoma homeowners and businesses, with clear service coverage and trust-building content.",
    tags: ["Local Service", "Roofing", "Oklahoma"],
    highlight: "Roof repair and replacement in Oklahoma.",
    image: "/work-sites/777-roofing.png",
  },
  {
    slug: "bell-carpet-cleaning",
    projectName: "bell-carpet-cleaning",
    title: "Bell Carpet Cleaning",
    url: "https://bell-carpet-cleaning.vercel.app",
    category: "Cleaning service",
    summary:
      "A local service website for carpet cleaning, tile and grout cleaning, upholstery, rugs, and repair across the OKC metro.",
    tags: ["Local Service", "Cleaning", "OKC"],
    highlight: "Oklahoma City carpet cleaning with care.",
    image: "/work-sites/bell-carpet-cleaning.png",
  },
  {
    slug: "mist-me-by-meg",
    projectName: "mist-me-by-meg",
    title: "Mist Me by Meg",
    url: "https://mist-me-by-meg.vercel.app",
    category: "Beauty studio",
    summary:
      "A boutique spray-tan studio site for custom airbrush tans, bridal glow, memberships, and product-ready beauty services.",
    tags: ["Beauty", "Local Service", "OKC"],
    highlight: "An OKC spray tan superstore with glow-care energy.",
    image: "/work-sites/mist-me-by-meg.png",
  },
  {
    slug: "esthetics-at-mam",
    projectName: "esthetics-at-mam",
    title: "Esthetics at MaM",
    url: "https://esthetics-at-mam.vercel.app",
    category: "Beauty studio",
    summary:
      "A luxury esthetician studio page for facials, waxing, brow design, and head spa rituals inside MaM Massage and Spa.",
    tags: ["Beauty", "Wellness", "OKC"],
    highlight: "Luxury esthetics inside a trusted spa brand.",
    image: "/work-sites/esthetics-at-mam.png",
  },
  {
    slug: "sbe-studio",
    projectName: "sbe-studio",
    title: "SBE Studio",
    url: "https://sbe.studio",
    category: "Studio home",
    summary:
      "The studio hub: proof of work, services, receipts, and a public archive of the websites now shipping from the Vercel account.",
    tags: ["Studio", "Portfolio", "Vercel"],
    highlight: "sbe.studio <abc/always/be/coding>",
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
