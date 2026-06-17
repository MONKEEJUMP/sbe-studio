export type ServiceTier = {
  numeral: "I" | "II" | "III";
  slug: "audit" | "build" | "operate";
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  duration: string;
  bestFor: string[];
  outcome: string;
};

/**
 * Three service tiers. Every engagement ends in production.
 * No pricing anywhere \u2014 pricing is a discovery-call conversation.
 */
export const SERVICE_TIERS: ServiceTier[] = [
  {
    numeral: "I",
    slug: "audit",
    title: "Audit",
    headline: "Technical due diligence for the system in front of you.",
    description:
      "A fixed-scope technical review for an existing Ai system, proposed Ai initiative, or broader software footprint. SBE evaluates architecture, risk, implementation path, operational readiness, and evidence quality, then delivers a written report a founder, executive, investor, or engineering team can use.",
    deliverables: [
      "Written technical report with architecture findings",
      "Prioritized risk register with severity, effort, and sequence",
      "Implementation roadmap with milestones and owner-ready next steps",
      "Findings walkthrough with direct technical Q&A",
    ],
    duration: "1\u20132 weeks",
    bestFor: [
      "Companies deciding whether to build, buy, repair, or wait",
      "Investors doing technical due diligence before a round",
      "Teams with an Ai project that has stalled without a clear operating path",
    ],
    outcome: "A decision-ready technical record with risks, options, and next steps.",
  },
  {
    numeral: "II",
    slug: "build",
    title: "Build",
    headline: "Production implementation for a defined system outcome.",
    description:
      "A build engagement turns a defined technical objective into a running production system. That may be a retrieval engine, agent workflow, internal tool, customer-facing feature, public website, or operating automation. SBE designs the architecture, implements the system, deploys it, documents it, and hands it over in a maintainable state.",
    deliverables: [
      "Live production system under real load",
      "Architecture document matching the production implementation",
      "Operational runbook covering incidents and rollbacks",
      "All source code in your repository, with your licenses",
      "Structured handoff session with your engineers",
    ],
    duration: "4\u201312 weeks, scoped per engagement",
    bestFor: [
      "Companies with a defined Ai problem and a production deadline",
      "Teams that need an Ai system without staffing a full Ai team",
      "Founders who need working software before the market window closes",
    ],
    outcome: "A working production system with code, documentation, and ownership transferred.",
  },
  {
    numeral: "III",
    slug: "operate",
    title: "Operate",
    headline: "Ongoing technical operations for systems that must stay useful.",
    description:
      "A monthly operating partnership for production Ai systems, automation stacks, and public software that need expert stewardship after launch. SBE handles incident review, model or workflow upgrades, cost controls, security review, documentation updates, and prioritized improvements.",
    deliverables: [
      "Named technical operator connected to your team",
      "Monthly operating report with metrics, cost, and risk notes",
      "Continuous improvement queue, prioritized with you",
      "Incident response and recovery planning for production issues",
    ],
    duration: "Monthly retainer, six-month minimum",
    bestFor: [
      "Companies with Ai systems in production that need specialist operators",
      "Teams whose Ai budget cannot support a full-time hire",
      "Businesses that want Ai leverage without unmanaged technical overhead",
    ],
    outcome: "A production system that is monitored, improved, and kept accountable.",
  },
];
