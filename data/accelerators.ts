// ---------------------------------------------------------------------------
// SHOPIFY PRACTICE — ACCELERATORS DATA
// ---------------------------------------------------------------------------

export interface ProcessStep {
  number: string;
  title: string;
  items: string[];
}

export interface Accelerator {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  customerValue: string;
  quarter: string;
  activeQuarters: number[]; // 1-4, highlighted quarters
  color: string; // tailwind bg class for card accent
  icon: string; // emoji icon
  processSteps: ProcessStep[];
  roadmap: {
    valueProp: string;
    marketingActivities: string[];
    salesMotion: string[];
    practiceDeliverables: string[];
  };
}

export const accelerators: Accelerator[] = [
  {
    id: "migration",
    number: "01",
    slug: "migration",
    title: "Migration Accelerator",
    tagline: "Seamless migration to Shopify from legacy and composable platforms",
    description:
      "A structured Shopify migration offering that helps businesses seamlessly transition from SAP, Adobe Commerce, Salesforce Commerce Cloud, commercetools, WooCommerce, or BigCommerce to Shopify with reduced risk, faster time-to-market, and minimal business disruption.",
    customerValue:
      "Faster time-to-market, lower migration risk, and reduced total cost of ownership.",
    quarter: "Q3",
    activeQuarters: [3],
    color: "sh-green",
    icon: "🔄",
    processSteps: [
      {
        number: "01",
        title: "Plan & Execution",
        items: [
          "Discovery & Assessment",
          "Migration Planning",
          "Build & Data Migration",
          "Testing & Go Live",
        ],
      },
      {
        number: "02",
        title: "Sales",
        items: [
          "Build migration prospect list",
          "Start outreach sequence",
          "Book migration discovery calls",
          "Engage previous prospects",
          "Sales offer: Free Migration Assessment",
        ],
      },
      {
        number: "03",
        title: "Partnership",
        items: [
          "Align with Shopify Partner Manager",
          "Identify technology partners & ideal customers",
          "Create referral partner list",
        ],
      },
      {
        number: "04",
        title: "Release & Marketing",
        items: [
          "Launch Migration Campaign",
          "Publish Blog",
          "Create Migration Readiness Scorecard",
          "Build migration-focused target list",
          "LinkedIn Post",
        ],
      },
    ],
    roadmap: {
      valueProp:
        "Assess migration readiness and identify modernization opportunities",
      marketingActivities: [
        "Migration campaign",
        "Blog",
        "LinkedIn thought leadership",
        "Readiness scorecard",
      ],
      salesMotion: [
        "Migration assessment workshops",
        "Target account outreach",
        "Discovery calls",
      ],
      practiceDeliverables: [
        "Migration assessment framework & accelerator",
        "Migration package offerings",
        "Workshop templates",
      ],
    },
  },
  {
    id: "b2b",
    number: "02",
    slug: "b2b",
    title: "B2B Accelerator",
    tagline: "Enable modern B2B commerce with personalized catalogs, pricing, and self-service",
    description:
      "The Shopify B2B Accelerator enables manufacturers, distributors, and wholesalers to rapidly assess, design, and implement modern B2B commerce capabilities on Shopify through a structured 4-month program combining strategy, technology, AI-driven commerce, and industry best practices.",
    customerValue:
      "Higher digital adoption, improved customer experience, and lower operational costs.",
    quarter: "Q3",
    activeQuarters: [3],
    color: "sh-teal",
    icon: "🏭",
    processSteps: [
      {
        number: "01",
        title: "Plan & Execution",
        items: [
          "Discovery & Assessment",
          "Solution Design",
          "Accelerator Build & Configuration",
          "Testing, Launch & Enablement",
        ],
      },
      {
        number: "02",
        title: "Sales",
        items: [
          "Build migration prospect list",
          "Start outreach sequence",
          "Book migration discovery calls",
          "Engage previous prospects",
          "Sales offer: Free Migration Assessment",
        ],
      },
      {
        number: "03",
        title: "Partners Involved",
        items: [
          "Shopify Plus",
          "ERP & AI partners",
          "Co-selling opportunities",
        ],
      },
      {
        number: "04",
        title: "Release & Marketing",
        items: [
          "B2B campaign",
          "Blog",
          "LinkedIn Post",
          "LinkedIn campaign focused on distributors and wholesalers",
          "B2B Commerce Maturity Assessment",
        ],
      },
    ],
    roadmap: {
      valueProp: "Accelerate B2B digital commerce adoption",
      marketingActivities: [
        "B2B campaign",
        "Blog",
        "Industry-focused outreach",
      ],
      salesMotion: [
        "Workshops for manufacturers",
        "Wholesalers and distributors",
      ],
      practiceDeliverables: [
        "B2B demo environment",
        "Pricing workflows",
        "Quote management scenarios",
      ],
    },
  },
  {
    id: "intelligent-commerce",
    number: "03",
    slug: "intelligent-commerce",
    title: "Intelligent Commerce & Product Discovery Accelerator",
    tagline: "Maximize product discovery through intelligent search, personalization, and AI",
    description:
      "Enable merchants to maximize product discovery and customer engagement through intelligent search, personalization, merchandising, and AI-powered commerce experiences. Helps merchants improve product discoverability, search relevance, merchandising, personalization, and AI readiness to drive better customer experiences and revenue growth.",
    customerValue:
      "Better product discoverability, higher conversions, increased basket value, and future-ready commerce experiences.",
    quarter: "Q3",
    activeQuarters: [3],
    color: "rc-blue",
    icon: "🔍",
    processSteps: [
      {
        number: "01",
        title: "Plan & Execution",
        items: [
          "Discovery & Assessment",
          "Search & Merchandising Audit",
          "Personalization Strategy",
          "Optimization & Enablement",
        ],
      },
      {
        number: "02",
        title: "Sales",
        items: [
          "Commerce Optimization Outreach",
          "Search & Discovery Workshops",
          "AI Readiness Assessment",
          "Conversion Optimization Assessment",
        ],
      },
      {
        number: "03",
        title: "Partners Involved",
        items: [
          "Shopify Plus",
          "Google Vertex AI",
          "Algolia / Coveo / Constructor",
          "Search & Personalization partners",
          "Analytics Partners",
        ],
      },
      {
        number: "04",
        title: "Release & Marketing",
        items: [
          "Intelligent Commerce Campaign",
          "Commerce Optimization Blog Series",
          "LinkedIn Thought Leadership",
          "Webinar & Email Outreach",
          "Search & Discovery Assessment",
        ],
      },
    ],
    roadmap: {
      valueProp:
        "Drive revenue growth through improved search, product discovery, personalization, and customer experience optimization",
      marketingActivities: [
        "Conversion optimization campaign",
        "Product discovery webinar",
        "Thought leadership blogs",
        "LinkedIn campaign",
        "Customer success stories",
      ],
      salesMotion: [
        "Discovery workshops",
        "Search audits",
        "Conversion assessments",
        "Shopify Plus account reviews",
        "Account expansion plays",
      ],
      practiceDeliverables: [
        "Commerce maturity assessment",
        "Discovery optimization framework",
        "Merchandising accelerator",
        "AI readiness assessment",
        "Search tuning templates",
        "KPI dashboard",
      ],
    },
  },
  {
    id: "growth-assessment",
    number: "04",
    slug: "growth-assessment",
    title: "Shopify Growth Assessment",
    tagline: "Identify opportunities across conversion, search, merchandising, and UX",
    description:
      "Identify opportunities across conversion, search, merchandising, customer experience, and platform optimization to maximize Shopify business value. A structured assessment that delivers a clear growth roadmap, prioritized recommendations, and measurable performance improvements.",
    customerValue:
      "Clear growth roadmap, prioritized recommendations, and measurable performance improvements.",
    quarter: "Q2–Q3",
    activeQuarters: [2, 3],
    color: "rc-accent",
    icon: "📈",
    processSteps: [
      {
        number: "01",
        title: "Plan & Execution",
        items: [
          "Shopify Store Audit",
          "Conversion & UX Analysis",
          "Search & Merchandising Review",
          "Growth Roadmap Delivery",
        ],
      },
      {
        number: "02",
        title: "Sales",
        items: [
          "Target Shopify Plus merchants",
          "DTC brands outreach",
          "Manufacturers and distributors",
          "Growth Assessment offer",
        ],
      },
      {
        number: "03",
        title: "Partners Involved",
        items: [
          "Shopify Plus Partner team",
          "Analytics & CRO partners",
          "UX & design partners",
        ],
      },
      {
        number: "04",
        title: "Release & Marketing",
        items: [
          "Growth campaign",
          "Landing page",
          "Blog",
          "LinkedIn campaign",
          "Shopify Growth Maturity Assessment",
        ],
      },
    ],
    roadmap: {
      valueProp:
        "Identify conversion, search, merchandising and UX improvement opportunities",
      marketingActivities: [
        "Growth campaign",
        "Landing page",
        "Blog",
        "LinkedIn campaign",
      ],
      salesMotion: [
        "Target Shopify Plus merchants",
        "DTC brands",
        "Manufacturers and distributors",
      ],
      practiceDeliverables: [
        "Assessment framework",
        "Audit template",
        "Maturity scorecard",
      ],
    },
  },
];
