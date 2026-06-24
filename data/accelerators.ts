// ---------------------------------------------------------------------------
// SHOPIFY PRACTICE — ACCELERATORS DATA (redesigned, no duplication)
// ---------------------------------------------------------------------------

export interface Accelerator {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  color: string;
  icon: string;
  activeQuarters: number[];

  // What it is & the problem it solves
  problemStatement: string;   // The pain we see in the market
  solution: string;           // What this accelerator does about it
  description: string;        // Longer "what is it" narrative
  customerValue: string;      // Single customer value headline

  // Outcomes — concrete, measurable results
  outcomes: { metric: string; label: string }[];

  // Who it's for
  idealFor: string[];

  // What's included — the actual deliverables, not process steps
  whatsIncluded: { phase: string; deliverables: string[] }[];

  // Go-to-market — distinct from deliverables, no overlap
  gtm: {
    marketing: string[];
    sales: string[];
    partners: string[];
  };

  // Roadmap quarter focus
  roadmapFocus: { quarter: string; theme: string; milestone: string }[];
}

export const accelerators: Accelerator[] = [
  {
    id: "migration",
    number: "01",
    slug: "migration",
    title: "Migration Accelerator",
    tagline: "De-risk your move to Shopify from legacy platforms — faster, cheaper, and with zero surprises.",
    color: "sh-green",
    icon: "🔄",
    activeQuarters: [3],

    problemStatement:
      "Most commerce migrations fail not because of technology — but because of poor planning, underestimated data complexity, and lack of a structured playbook. Teams moving from Adobe Commerce, Salesforce Commerce Cloud, SAP, commercetools, or WooCommerce face months of uncertainty, spiralling costs, and business disruption.",

    solution:
      "The Migration Accelerator gives businesses a structured, proven path to Shopify. We bring a pre-built assessment framework, a phased migration playbook, reusable migration scripts, and a dedicated team that has run this exact motion dozens of times — so you don't pay for us to learn on the job.",

    description:
      "A full-cycle migration offering covering discovery, data migration, theme/storefront build, integration replatforming, QA, and go-live. We handle the complexity of migrating product catalogs, customer data, order history, loyalty programs, and third-party integrations — while keeping your existing store live until launch day.",

    customerValue:
      "Faster time-to-market, lower migration risk, and a measurably reduced total cost of ownership vs. staying on legacy infrastructure.",

    outcomes: [
      { metric: "40%", label: "faster go-live vs. custom-built migration" },
      { metric: "60%", label: "lower TCO vs. Adobe Commerce or SFCC" },
      { metric: "Zero", label: "downtime on launch day with blue/green cutover" },
      { metric: "100%", label: "data fidelity — products, customers, orders, history" },
    ],

    idealFor: [
      "Businesses currently on Adobe Commerce, Salesforce Commerce Cloud, SAP Commerce, commercetools, WooCommerce, or BigCommerce",
      "Teams with a migration project budgeted but no internal Shopify expertise",
      "Brands that have outgrown their current platform's flexibility or cost model",
      "Retailers or B2B sellers needing to consolidate multi-storefront complexity",
    ],

    whatsIncluded: [
      {
        phase: "Discovery & Assessment",
        deliverables: [
          "Migration Readiness Scorecard — platform audit, data complexity rating, integration map",
          "Risk & effort estimation matrix with tiered migration options (Bronze / Silver / Gold)",
          "Data migration strategy: products, customers, orders, content, SEO redirects",
          "Integration dependency map (ERP, WMS, PIM, loyalty, marketing tools)",
        ],
      },
      {
        phase: "Migration Planning",
        deliverables: [
          "Phased migration roadmap with parallel-run strategy (old store stays live)",
          "Shopify Plus store setup: theme, navigation, checkout, tax, payments",
          "Custom migration scripts for bulk product, metafield, and customer data import",
          "Integration replatforming plan (API mapping from legacy to Shopify APIs)",
        ],
      },
      {
        phase: "Build & Data Migration",
        deliverables: [
          "Full product catalog migration with variants, metafields, and media",
          "Customer account migration with order history and loyalty point carryover",
          "Third-party integration builds (ERP, PIM, WMS, loyalty, email marketing)",
          "301 redirect map to protect SEO rankings post-migration",
        ],
      },
      {
        phase: "Testing & Go Live",
        deliverables: [
          "End-to-end QA across all devices, payment methods, and user flows",
          "Performance benchmarking (Core Web Vitals, TTFB, LCP)",
          "Blue/green cutover plan: zero-downtime DNS switch",
          "30-day hypercare support post-launch",
        ],
      },
    ],

    gtm: {
      marketing: [
        "Migration Readiness Scorecard (free, gated lead gen tool)",
        "Blog series: 'Adobe Commerce → Shopify Plus: What the Migration Actually Costs'",
        "LinkedIn thought leadership targeting VP Ecommerce and IT Directors",
        "Migration campaign email sequence to Adobe / SFCC / CT prospect list",
      ],
      sales: [
        "Free Migration Assessment offer as discovery call CTA",
        "Target account list: 300 Adobe Commerce, SFCC, commercetools, WooCommerce brands",
        "Outreach sequence: LinkedIn + email, personalized to platform",
        "Migration workshop: 2-hour architecture review with live Shopify demo",
      ],
      partners: [
        "Shopify Partner Manager co-sell: migration is Shopify's #1 partner motion",
        "Technology partners: recharge (subscriptions), Yotpo (loyalty), Klaviyo (email)",
        "Referral partner list: agencies, system integrators, and ISVs with migration leads",
      ],
    },

    roadmapFocus: [
      { quarter: "Q2", theme: "Foundation", milestone: "Migration assessment framework finalized; Bronze/Silver/Gold packages priced and published" },
      { quarter: "Q3", theme: "Pipeline Growth", milestone: "Migration campaign live; 5 active migration assessments; first 2 projects signed" },
      { quarter: "Q4", theme: "Conversion", milestone: "3 migration projects in delivery; case study published; partner co-sell motions active" },
    ],
  },

  {
    id: "b2b",
    number: "02",
    slug: "b2b",
    title: "B2B Accelerator",
    tagline: "Move your B2B commerce off spreadsheets, phone orders, and legacy portals — in 4 months.",
    color: "sh-teal",
    icon: "🏭",
    activeQuarters: [3],

    problemStatement:
      "Manufacturers, distributors, and wholesalers are still processing orders through phone, email, and spreadsheets — or running custom-built portals that are expensive to maintain and painful to use. Their B2B customers expect the same experience they get on consumer sites: self-service, real-time pricing, and instant order status.",

    solution:
      "The B2B Accelerator is a structured 4-month program that designs, builds, and launches a modern Shopify B2B storefront — with customer-specific pricing, company account management, quote workflows, and self-service ordering — using Shopify's native B2B capabilities and our pre-built configuration templates.",

    description:
      "Built specifically for manufacturers, distributors, and wholesalers, this accelerator combines Shopify Plus B2B (company accounts, price lists, payment terms, draft orders) with our pre-built B2B configuration framework. We handle discovery, solution design, build, integrations (ERP, PIM), and enablement — delivering a production-ready B2B storefront faster and at lower cost than a custom build.",

    customerValue:
      "Higher digital adoption, improved buyer experience, and a measurable reduction in order processing costs.",

    outcomes: [
      { metric: "4 months", label: "from discovery to production launch" },
      { metric: "30%", label: "reduction in manual order processing cost" },
      { metric: "Self-service", label: "ordering for 100% of B2B product catalog" },
      { metric: "ERP-native", label: "pricing sync — no manual price list management" },
    ],

    idealFor: [
      "Manufacturers, distributors, and wholesalers with complex B2B pricing and account structures",
      "Businesses currently taking B2B orders by phone, email, EDI, or sales rep",
      "Companies running custom-built B2B portals that are expensive to maintain",
      "Shopify Plus merchants looking to extend into B2B without a separate platform",
    ],

    whatsIncluded: [
      {
        phase: "Discovery & Solution Design",
        deliverables: [
          "B2B Commerce Maturity Assessment — current state audit, gap analysis, and roadmap",
          "B2B requirements workshop: pricing rules, account hierarchies, approval workflows",
          "Solution architecture: Shopify B2B + ERP + PIM integration design",
          "B2B storefront design: buyer portal UX, account dashboard, quote flow wireframes",
        ],
      },
      {
        phase: "Accelerator Build & Configuration",
        deliverables: [
          "Shopify Plus B2B storefront configuration (company accounts, price lists, payment terms)",
          "Customer-specific pricing: tiered pricing, volume discounts, contract pricing by account",
          "Draft order and quote workflow: request a quote → approve → convert to order",
          "Buyer portal: order history, invoice tracking, reorder functionality, account management",
        ],
      },
      {
        phase: "Integrations",
        deliverables: [
          "ERP integration: real-time inventory, pricing sync, order writeback (NetSuite, SAP, Dynamics)",
          "PIM integration: product data, specifications, and B2B-specific attributes",
          "Payment terms: net 30/60/90, purchase orders, credit limits via Shopify B2B",
          "Sales rep assignment and territory management",
        ],
      },
      {
        phase: "Testing, Launch & Enablement",
        deliverables: [
          "End-to-end B2B buyer journey QA across all account types and pricing tiers",
          "Sales rep and buyer training: platform walkthrough, order management, account setup",
          "Admin enablement: how to manage company accounts, update pricing, handle quotes",
          "30-day hypercare with dedicated support for buyer onboarding",
        ],
      },
    ],

    gtm: {
      marketing: [
        "B2B Commerce Maturity Assessment (free, gated — drives workshop bookings)",
        "Blog: 'Why Manufacturers Are Moving to Shopify B2B: A 2026 Migration Guide'",
        "LinkedIn campaign targeting distributors, wholesalers, and manufacturing operations leaders",
        "Industry-focused outreach: industrial supply, food & beverage distribution, building materials",
      ],
      sales: [
        "Free B2B Maturity Assessment as discovery entry point",
        "Target account list: 100 manufacturers, distributors, and wholesalers",
        "B2B Commerce Workshop: 2-hour demo of Shopify B2B with live pricing and quote scenarios",
        "Co-sell motion with Shopify Partner Manager for B2B-qualified leads",
      ],
      partners: [
        "Shopify Plus: B2B is a top Shopify investment area — strong co-sell support available",
        "ERP partners: NetSuite, SAP, Microsoft Dynamics — joint solution positioning",
        "AI partners: Google Vertex AI for B2B product recommendations and guided selling",
      ],
    },

    roadmapFocus: [
      { quarter: "Q2", theme: "Foundation", milestone: "B2B demo environment live; pricing workflow and quote demo scenarios ready" },
      { quarter: "Q3", theme: "Pipeline Growth", milestone: "B2B campaign live; 5 B2B workshops delivered; 2 B2B projects in scoping" },
      { quarter: "Q4", theme: "Conversion", milestone: "2 B2B projects in delivery; B2B case study published with ROI metrics" },
    ],
  },

  {
    id: "intelligent-commerce",
    number: "03",
    slug: "intelligent-commerce",
    title: "Intelligent Commerce & Product Discovery Accelerator",
    tagline: "Turn your Shopify store into a revenue engine with AI-powered search, personalization, and discovery.",
    color: "rc-blue",
    icon: "🧠",
    activeQuarters: [3],

    problemStatement:
      "Shopify merchants are losing revenue every day to poor product discovery. Customers who can't find what they're looking for abandon — and most Shopify stores are still running keyword-only search with no personalization, no merchandising intelligence, and no visibility into why customers are leaving. As AI shopping agents emerge, brands that haven't optimized for semantic discovery will be invisible to AI buyers.",

    solution:
      "The Intelligent Commerce Accelerator audits your current search and discovery performance, identifies the conversion gaps, and then builds an AI-powered discovery layer on top of Shopify — using semantic search, personalization engines, intelligent merchandising, and AI readiness optimization for the agentic commerce era.",

    description:
      "A four-phase engagement covering audit, strategy, build, and optimization. We assess your current search performance (zero-result rate, search abandonment, click-through rate), design a discovery strategy tailored to your catalog and customer segments, and implement an AI-powered search and personalization solution — integrating Shopify's native capabilities with best-in-class third-party tools (Algolia, Coveo, Constructor, Google Vertex AI) where needed.",

    customerValue:
      "Better product discoverability, higher conversion, increased basket size, and future-ready AI commerce experiences.",

    outcomes: [
      { metric: "25%+", label: "lift in search-driven conversion rate" },
      { metric: "40%", label: "reduction in zero-result search queries" },
      { metric: "15%+", label: "increase in average order value via personalized recommendations" },
      { metric: "AI-ready", label: "product data structured for ChatGPT, Gemini, and Perplexity discovery" },
    ],

    idealFor: [
      "Shopify Plus merchants with large or complex product catalogs (500+ SKUs)",
      "DTC brands experiencing high search abandonment or low search conversion",
      "Retailers preparing for the shift to AI-powered shopping agents",
      "Brands with personalization gaps: same experience for every customer",
    ],

    whatsIncluded: [
      {
        phase: "Discovery & Search Audit",
        deliverables: [
          "Search performance audit: zero-result rate, abandonment rate, query analysis, CTR by search term",
          "Commerce Maturity Assessment: search, merchandising, personalization, and AI readiness scoring",
          "Customer journey mapping: how shoppers navigate, search, and abandon across device types",
          "Competitive benchmarking: how your discovery experience compares to category leaders",
        ],
      },
      {
        phase: "Personalization & Merchandising Strategy",
        deliverables: [
          "Discovery strategy: search relevance rules, synonym groups, category merchandising hierarchy",
          "Personalization strategy: segment-based product recommendations, dynamic landing pages",
          "AI readiness plan: structured data, schema markup, and product content for AI discoverability",
          "Tool selection: Shopify native vs. Algolia vs. Coveo vs. Constructor recommendation",
        ],
      },
      {
        phase: "Build & Optimization",
        deliverables: [
          "Search implementation: semantic search, AI-powered ranking, synonym tuning, faceted filtering",
          "Recommendation engine: homepage, PDP, cart, post-purchase, and email recommendation placements",
          "Merchandising tooling: visual merchandising dashboard, manual pinning, boost/bury rules",
          "AI discoverability optimization: structured data, product feed, and schema for AI agent indexing",
        ],
      },
      {
        phase: "Analytics & Continuous Optimization",
        deliverables: [
          "KPI dashboard: search conversion, click-through rate, revenue per search, basket size",
          "A/B testing framework for ranking algorithms and recommendation placements",
          "Monthly merchandising optimization cadence with performance reporting",
          "AI readiness scorecard: track discoverability across ChatGPT, Gemini, and Perplexity",
        ],
      },
    ],

    gtm: {
      marketing: [
        "Free Search Conversion Audit — gated tool scoring zero-result rate and search abandonment",
        "Intelligent Commerce Campaign: 'Can AI Find Your Products?'",
        "Blog series: 'Your Search Bar Is Costing You Revenue' + 'How Shopify Brands Prepare for AI Buyers'",
        "LinkedIn thought leadership: search conversion data, AI discoverability trends",
      ],
      sales: [
        "Search Conversion Audit as no-cost discovery offer — highest-converting entry point",
        "Commerce Optimization workshops: live search audit with prospect's own store data",
        "Target accounts: Shopify Plus merchants, large DTC brands, and high-SKU retailers",
        "AI readiness assessment: 30-minute call scoring AI discoverability gaps",
      ],
      partners: [
        "Shopify Plus: search and discovery is a top merchant pain point — strong referral motion",
        "Algolia / Constructor / Coveo: ISV co-sell partnerships for search technology",
        "Google Vertex AI, Analytics Partners: personalization and AI infrastructure co-sell",
      ],
    },

    roadmapFocus: [
      { quarter: "Q2", theme: "Foundation", milestone: "Search audit framework and AI readiness scorecard finalized; demo environment built" },
      { quarter: "Q3", theme: "Pipeline Growth", milestone: "Intelligent Commerce campaign live; 5 search audits delivered; 2 projects in scoping" },
      { quarter: "Q4", theme: "Conversion", milestone: "3 projects in delivery; published case study with conversion lift metrics" },
    ],
  },

  {
    id: "growth-assessment",
    number: "04",
    slug: "growth-assessment",
    title: "Shopify Growth Assessment",
    tagline: "Identify exactly where your Shopify store is leaving money on the table — with a clear roadmap to fix it.",
    color: "rc-accent",
    icon: "📈",
    activeQuarters: [2, 3],

    problemStatement:
      "Most Shopify merchants know their store isn't performing as well as it could — but they don't know where to focus. Conversion is low, but is it a UX problem, a search problem, a checkout problem, or a merchandising problem? Without a structured audit, optimization efforts are scattered and ROI is hard to prove.",

    solution:
      "The Shopify Growth Assessment is a structured, expert-led audit that benchmarks your store across five dimensions — conversion, search and discovery, merchandising, customer experience, and platform utilization — and delivers a prioritized roadmap with specific, ROI-quantified recommendations.",

    description:
      "A 2–3 week engagement that combines data analysis, expert review, and customer journey mapping to produce a Growth Roadmap. We audit your Shopify analytics, search performance, conversion funnel, checkout flow, merchandising strategy, and platform configuration — then prioritize recommendations by revenue impact and implementation effort. The output is a clear, actionable plan your team can execute immediately or with Royal Cyber's support.",

    customerValue:
      "A clear growth roadmap with prioritized, ROI-quantified optimization opportunities across conversion, search, merchandising, and platform utilization.",

    outcomes: [
      { metric: "2–3 weeks", label: "from kickoff to prioritized growth roadmap" },
      { metric: "5 dimensions", label: "audited: conversion, search, merchandising, CX, platform" },
      { metric: "ROI-quantified", label: "recommendations — each scored by revenue impact and effort" },
      { metric: "Actionable", label: "roadmap your team can execute immediately" },
    ],

    idealFor: [
      "Shopify Plus merchants who know they're underperforming but aren't sure where to focus",
      "Brands that have built their store but haven't done a structured performance audit",
      "DTC brands, manufacturers, and distributors targeting growth in H2 2026",
      "Teams that want an independent expert view before investing in optimization or replatforming",
    ],

    whatsIncluded: [
      {
        phase: "Data & Analytics Audit",
        deliverables: [
          "Shopify analytics deep-dive: conversion funnel, session data, drop-off analysis",
          "Search performance audit: zero-result rate, search abandonment, query analysis",
          "Revenue attribution: channel performance, product performance, customer segment analysis",
          "Checkout funnel audit: abandonment rate by step, payment method optimization",
        ],
      },
      {
        phase: "UX & Merchandising Review",
        deliverables: [
          "Customer journey mapping: homepage → category → PDP → cart → checkout on mobile and desktop",
          "Merchandising audit: category hierarchy, product sorting, featured placement, cross-sell logic",
          "Mobile UX review: tap targets, load performance, navigation patterns",
          "Competitive benchmarking: how your experience compares to category leaders",
        ],
      },
      {
        phase: "Platform Utilization Assessment",
        deliverables: [
          "Shopify Plus feature utilization: which capabilities you're underusing (Functions, B2B, Markets, Checkout Extensibility)",
          "App stack audit: redundant apps, performance-heavy apps, consolidation opportunities",
          "Integration health check: data sync reliability, API performance, error rates",
          "Technical performance: Core Web Vitals, TTFB, LCP, CLS benchmarking",
        ],
      },
      {
        phase: "Growth Roadmap & Recommendations",
        deliverables: [
          "Prioritized recommendation matrix: each item scored by revenue impact, effort, and time-to-value",
          "Quick wins list: 10 changes implementable within 30 days with high ROI",
          "Strategic initiatives: 3–5 longer-term investments with ROI projections",
          "Maturity Scorecard: benchmark your store across 5 dimensions with peer comparison",
        ],
      },
    ],

    gtm: {
      marketing: [
        "Shopify Growth Assessment landing page with self-serve maturity quiz",
        "Growth campaign blog: '10 Growth Bottlenecks We See in Shopify Stores'",
        "LinkedIn campaign: 'Is Your Shopify Store Performing at Its Potential?'",
        "Email campaign targeting Shopify Plus merchants with H2 growth goals",
      ],
      sales: [
        "Growth Assessment as a fixed-fee, fast-start engagement — easy first project",
        "Target accounts: Shopify Plus merchants, DTC brands, manufacturers preparing for H2 growth",
        "Outreach sequence: personalized to merchant's industry vertical",
        "Assessment → project conversion: roadmap delivery creates natural next-engagement momentum",
      ],
      partners: [
        "Shopify Plus: growth assessments drive platform adoption and feature utilization",
        "Analytics partners: integrate with Shopify analytics, GA4, and BI tools",
        "Conversion optimization partners: heat mapping, session recording, A/B testing tool co-sell",
      ],
    },

    roadmapFocus: [
      { quarter: "Q2", theme: "Foundation", milestone: "Assessment framework, audit templates, and maturity scorecard finalized" },
      { quarter: "Q3", theme: "Pipeline Growth", milestone: "Growth campaign live; 5 assessments delivered; 3 projects converted from assessment" },
      { quarter: "Q4", theme: "Expansion", milestone: "Assessment becomes standard entry point for all new Shopify Plus engagements" },
    ],
  },
];
