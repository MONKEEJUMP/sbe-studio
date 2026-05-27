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
    headline: "We read your stack and write you a report.",
    description:
      "A fixed-scope engagement. We audit an existing AI system, a proposed AI initiative, or a broader technical footprint, and we deliver a written architecture document with findings and recommendations. You get the same rigor we apply to our own systems \u2014 written down, shareable, defensible.",
    deliverables: [
      "Written technical report, 20\u201340 pages",
      "Prioritized risk register with severity and effort",
      "Implementation roadmap with sequenced milestones",
      "One 90-minute findings walkthrough",
    ],
    duration: "1\u20132 weeks",
    bestFor: [
      "Companies evaluating whether to build, buy, or wait",
      "Investors doing technical due diligence before a round",
      "Teams stuck on an existing AI project with no clear path",
    ],
    outcome: "You get clarity. We don\u2019t sell you anything after.",
  },
  {
    numeral: "II",
    slug: "build",
    title: "Build",
    headline: "We ship the system. Measured in production.",
    description:
      "We design, build, and deploy a specific AI system \u2014 a retrieval engine, an agentic workflow, an internal tool, a customer-facing feature. We hand it over running in production with full documentation and a runbook. The system works the day we leave, and the day after, and the day after that.",
    deliverables: [
      "Live production system under real load",
      "Architecture document matching what actually shipped",
      "Operational runbook covering incidents and rollbacks",
      "All source code in your repository, with your licenses",
      "Structured handoff session with your engineers",
    ],
    duration: "4\u201312 weeks, scoped per engagement",
    bestFor: [
      "Companies with a defined AI problem and a willingness to ship",
      "Teams who need an AI system but don\u2019t have an AI team",
      "Founders who want to move before competitors can catch up",
    ],
    outcome: "A working system running under real load, owned by you.",
  },
  {
    numeral: "III",
    slug: "operate",
    title: "Operate",
    headline: "We run it. You don\u2019t hire an ML team.",
    description:
      "Monthly retainer engagements where we operate and evolve AI systems in production \u2014 either systems we built for you in a Tier II engagement, or systems your team built that need ongoing AI expertise. Incidents, improvements, model upgrades, cost optimization, security reviews.",
    deliverables: [
      "Named on-call engineer with your team\u2019s Slack or email",
      "Monthly operational report with metrics and cost",
      "Continuous improvement queue, prioritized with you",
      "Emergency response for system incidents",
    ],
    duration: "Monthly retainer, six-month minimum",
    bestFor: [
      "Companies with AI systems in production that need specialist operators",
      "Teams whose AI budget cannot support a full-time hire",
      "Businesses that want AI leverage without AI overhead",
    ],
    outcome: "A running system, improved month over month, on a fixed cadence.",
  },
];
