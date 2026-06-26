// ---------------------------------------------------------------------------
// SHOPIFY PRACTICE DEPARTMENT AGENT — weekly intelligence sweep
// ---------------------------------------------------------------------------
export type FlagKind = "ai" | "ent" | "gap";

export interface TrendFlag { kind: FlagKind; label: string; }
export interface Trend { rank: number; title: string; body: string; flags: TrendFlag[]; }
export interface ReleaseUpdate { product: string; date: string; highlight: string; source: string; type: string; }
export interface EventItem { event: string; when: string; focus: string; register: string; }
export interface RoadmapCard { product: string; phase: string; items: string[]; link: string; }
export interface ContentIdea { title: string; why: string; audience: string; difficulty?: string; engagement?: number; uniqueness?: number; priority?: number; }
export interface CompetitiveRow { theme: string; shopify: string; competitor: string; opportunity: string; }
export interface ActionItem { n: number; title: string; why: string; priority: number; format: string; }
export interface NextItem { bold: string; text: string; }

export interface Report {
  title: string; generated: string; sub: string;
  tags: { label: string; hot?: boolean }[];
  trends: Trend[];
  releases: ReleaseUpdate[];
  events: EventItem[];
  roadmap: RoadmapCard[];
  blogs: ContentIdea[];
  whitepapers: ContentIdea[];
  linkedin: ContentIdea[];
  competitive: CompetitiveRow[];
  actions: ActionItem[];
  next7: NextItem[];
}

export const report: Report = {
  title: "Shopify Practice — Trend & GTM Intelligence Report",
  generated: "June 26, 2026",
  sub: "Weekly intelligence sweep for practice leads, solution architects, sales, and marketing across the Shopify ecosystem",
  tags: [
    { label: "Breakout: Shopify B2B & Agentic Commerce", hot: true },
    { label: "Lookback: 30–90 day signal window (through Jun 2026)" },
    { label: "Focus: Shopify Plus, B2B, AI Commerce, Migration" },
  ],
  trends: [
    {
      rank: 1,
      title: "Agentic Commerce: AI agents completing purchases",
      body: "Shopify's partnership with Google (Unified Commerce Protocol) and growing MCP integrations signal that AI agents are now first-class buyers. Brands optimizing only for Google are missing ChatGPT, Gemini, and Perplexity — creating a new AI discoverability layer that Shopify practices must address.",
      flags: [{ kind: "ai", label: "AI relevance" }, { kind: "ent", label: "Enterprise relevance" }],
    },
    {
      rank: 2,
      title: "Shopify B2B hitting enterprise scale",
      body: "Shopify B2B (company accounts, customer-specific pricing, draft orders, payment terms) is now being adopted by manufacturers and industrial distributors at scale. The Q2 2026 release of expanded B2B APIs and buyer portal customization closes the gap with Salesforce B2B Commerce and Magento. Migration from legacy B2B platforms is accelerating.",
      flags: [{ kind: "ent", label: "Enterprise relevance" }, { kind: "gap", label: "Practice opportunity: B2B migration" }],
    },
    {
      rank: 3,
      title: "Migration wave from Adobe Commerce, SFCC, and commercetools",
      body: "Total cost of ownership pressure from Adobe Commerce's licensing model and commercetools' complexity is driving a migration wave to Shopify Plus. The migration assessment offer is the highest-converting entry point for new practice engagements in H2 2026.",
      flags: [{ kind: "ent", label: "Enterprise relevance" }, { kind: "gap", label: "High-volume migration pipeline" }],
    },
    {
      rank: 4,
      title: "Shopify Search & Discovery — AI-powered conversion lever",
      body: "Shopify's native semantic search and third-party solutions (Boost Commerce, SearchPie) are closing the gap with dedicated discovery platforms. Brands with large catalogs are leaving significant conversion on the table. Search Conversion Audits are emerging as a fast-win, high-ROI engagement type.",
      flags: [{ kind: "ai", label: "AI relevance" }, { kind: "ent", label: "Enterprise relevance" }],
    },
    {
      rank: 5,
      title: "Shopify Markets: cross-border expansion demand",
      body: "Shopify Markets Pro enables brands to sell globally with localized pricing, duties, and payments — without a multi-storefront architecture. Q2 2026 enhancements to Markets (automatic duty calculation, local payment methods expansion) are driving international expansion projects for Shopify Plus merchants.",
      flags: [{ kind: "ent", label: "Enterprise relevance" }],
    },
    {
      rank: 6,
      title: "Hydrogen + Oxygen: headless adoption growing",
      body: "Shopify's Hydrogen framework and Oxygen edge hosting are now production-ready for enterprise headless storefronts. The developer experience improvements in Hydrogen 2.0 and Oxygen's global CDN are driving headless adoption among performance-focused brands — creating delivery and architecture engagements.",
      flags: [{ kind: "ai", label: "AI relevance" }, { kind: "ent", label: "Enterprise relevance" }],
    },
    {
      rank: 7,
      title: "Shopify POS and unified commerce",
      body: "Shopify POS Pro's expansion into unified commerce (shared inventory, customer profiles, omnichannel loyalty) is opening door to brick-and-mortar retail brands. The POS Hardware ecosystem and staff apps are now enterprise-grade, competing directly with MPOS solutions.",
      flags: [{ kind: "ent", label: "Enterprise relevance" }],
    },
  ],
  releases: [
    { product: "Shopify B2B", date: "Jun 2026", highlight: "Expanded B2B APIs: buyer portal customization, multi-location price lists, draft order automation, and payment terms by company location.", source: "shopify.dev/changelog", type: "Feature release" },
    { product: "Shopify Markets", date: "Jun 2026", highlight: "Automatic duty and import tax calculation at checkout for 175+ countries; local payment method expansion including Klarna, Afterpay, and regional wallets.", source: "shopify.com/changelog", type: "Feature release" },
    { product: "Shopify Search & Discovery", date: "May 2026", highlight: "Semantic search improvements — natural language queries now match intent, not just keywords. Synonym groups and metafield filtering expanded.", source: "shopify.dev/changelog", type: "Enhancement" },
    { product: "Hydrogen 2.0", date: "May 2026", highlight: "Remix-based Hydrogen framework GA with improved Oxygen deployment, streaming SSR, and built-in Cart API hooks. Sub-second TTFB on Oxygen CDN.", source: "shopify.dev/changelog", type: "GA release" },
    { product: "Shopify Functions", date: "Apr 2026", highlight: "New Functions APIs for custom shipping methods, payment methods, and cart transforms. Functions now support Rust and AssemblyScript.", source: "shopify.dev/changelog", type: "New capability" },
    { product: "Checkout Extensibility", date: "Apr 2026", highlight: "Checkout UI extensions GA for Shopify Plus — custom sections, loyalty integrations, and post-purchase pages now fully supported.", source: "shopify.dev/changelog", type: "GA release" },
  ],
  events: [
    { event: "Shopify Unite 2026", when: "Aug 2026 · In-person + Virtual", focus: "Annual developer and partner conference. New product announcements, API updates, partner program changes.", register: "https://www.shopify.com/unite" },
    { event: "Shoptalk Fall 2026", when: "Oct 2026 · Chicago · In-person", focus: "Retail technology leadership summit. Shopify presence, brand case studies, B2B commerce track.", register: "https://shoptalk.com" },
    { event: "Shopify Partner Summit", when: "Q3 2026 · Virtual", focus: "Exclusive partner-only briefings on product roadmap, partner program updates, and co-sell opportunities.", register: "https://partners.shopify.com" },
    { event: "Shopify B2B Webinar Series", when: "Monthly · Virtual", focus: "Shopify-hosted webinars on B2B features, case studies, and implementation guides for plus partners.", register: "https://www.shopify.com/b2b" },
  ],
  roadmap: [
    { product: "Shopify B2B", phase: "H2 2026 Roadmap", items: ["Company account hierarchies with parent/child relationships", "Sales rep assignment and commission tracking", "B2B-specific checkout flows and approval workflows", "ERP integration templates (NetSuite, SAP, Dynamics)"], link: "https://www.shopify.com/b2b" },
    { product: "Shopify AI / Sidekick", phase: "Upcoming", items: ["Sidekick for analytics — natural language querying of store data", "AI product descriptions and SEO copy at scale", "Agentic order management — AI handling returns and exchanges", "Predictive inventory recommendations"], link: "https://www.shopify.com/magic" },
    { product: "Hydrogen & Headless", phase: "Q3 2026", items: ["Hydrogen component library expansion (50+ new components)", "Oxygen edge regions expansion to APAC and LATAM", "Storefront API v3 with GraphQL subscriptions", "Built-in A/B testing hooks for headless storefronts"], link: "https://hydrogen.shopify.dev" },
    { product: "Shopify Markets", phase: "Q3 2026", items: ["Markets Pro expansion to 30 additional countries", "Currency conversion guardrails and margin protection", "Localized content management from Shopify admin", "B2B cross-border pricing and terms"], link: "https://www.shopify.com/markets" },
    { product: "Shopify POS", phase: "H2 2026", items: ["POS Pro unified loyalty across online and in-store", "Staff performance analytics in POS dashboard", "Tap-to-pay expansion to additional markets", "POS hardware bundle for enterprise retail"], link: "https://www.shopify.com/pos" },
  ],
  blogs: [
    { title: "Why Manufacturers Are Moving to Shopify B2B: A 2026 Migration Guide", why: "B2B adoption is accelerating and migration intent from legacy platforms is high. First-mover opportunity.", audience: "Practice leads, solution architects, sales", difficulty: "Intermediate", engagement: 9, uniqueness: 8, priority: 9.2 },
    { title: "Your Search Bar Is Costing You Revenue: A Shopify Search Conversion Audit", why: "Fast-win engagement type. Large-catalog brands leave conversion on the table — this drives inbound leads.", audience: "Shopify Plus merchants, DTC brands", difficulty: "Beginner", engagement: 9, uniqueness: 7, priority: 8.8 },
    { title: "Adobe Commerce to Shopify Plus: What the Migration Actually Costs", why: "TCO comparison drives high-intent traffic. Adobe's licensing pressure is creating migration urgency.", audience: "Enterprise buyers, IT leaders", difficulty: "Intermediate", engagement: 8, uniqueness: 9, priority: 8.7 },
    { title: "Can AI Find Your Products? How Shopify Brands Must Prepare for Agentic Commerce", why: "Agentic commerce is the fastest-moving trend. AI discoverability is an urgent concern for brands.", audience: "Shopify Plus merchants, marketing leaders", difficulty: "Intermediate", engagement: 9, uniqueness: 9, priority: 9.0 },
    { title: "Hydrogen 2.0 vs. Shopify Liquid: When Headless Makes Business Sense", why: "Hydrogen GA drives consideration. Architecture decision guide positions practice as expert.", audience: "Solution architects, CTOs", difficulty: "Advanced", engagement: 7, uniqueness: 8, priority: 7.8 },
    { title: "Shopify Markets Pro: Your 30-Day Go-Global Playbook", why: "International expansion is a H2 priority for many Plus merchants. Practical playbook drives project inquiries.", audience: "Shopify Plus merchants, ecommerce directors", difficulty: "Intermediate", engagement: 7, uniqueness: 7, priority: 7.5 },
  ],
  whitepapers: [
    { title: "The B2B Commerce Migration Playbook: From Legacy Platforms to Shopify Plus", why: "High — positions practice as the go-to guide for manufacturers and distributors moving to Shopify B2B.", audience: "Enterprise buyers, IT leaders, operations directors", difficulty: "Advanced", engagement: 8, uniqueness: 9, priority: 9.0 },
    { title: "Agentic Commerce Readiness: How Shopify Brands Prepare for AI Buyers", why: "Highest-trending topic. Shopify-specific governance and readiness guidance is an open content gap.", audience: "Ecommerce directors, solution architects", difficulty: "Intermediate", engagement: 8, uniqueness: 9, priority: 8.5 },
    { title: "The Shopify Plus Architecture Decision Guide: Liquid vs. Hydrogen vs. Headless", why: "Evergreen architecture asset that captures high-intent architect and CTO audiences during platform evaluation.", audience: "Solution architects, CTOs, ecommerce platform leads", difficulty: "Advanced", engagement: 7, uniqueness: 8, priority: 8.0 },
  ],
  linkedin: [
    { title: '"AI agents are buying products. Is your Shopify store ready?"', why: "Controversial hook on agentic commerce. Drives engagement from Shopify Plus community.", audience: "Ecommerce directors, Shopify Plus merchants", engagement: 9, uniqueness: 9 },
    { title: '"We reviewed 50 Shopify search bars. Here\'s what we found."', why: "Data-led, highly shareable. Drives search audit inquiries.", audience: "Shopify Plus merchants, DTC brands", engagement: 9, uniqueness: 8 },
    { title: '"Adobe Commerce → Shopify Plus: the real migration timeline"', why: "Controversial: stop sugarcoating the timeline. Drives high-intent migration leads.", audience: "Enterprise buyers, IT leaders", engagement: 8, uniqueness: 8 },
    { title: '"Shopify B2B can now replace your legacy distributor portal"', why: "Concrete product capability post. Targets manufacturers and distributors actively evaluating.", audience: "Manufacturers, industrial distributors", engagement: 8, uniqueness: 7 },
    { title: '"One architecture diagram: Shopify Hydrogen + B2B + Oxygen"', why: "Technical visual that gets shared widely among architects and developers.", audience: "Solution architects, developers", engagement: 7, uniqueness: 8 },
  ],
  competitive: [
    { theme: "B2B Commerce", shopify: "Shopify B2B GA with company accounts, price lists, draft orders, payment terms. Q2 2026 API expansion.", competitor: "Salesforce B2B Commerce Cloud (Spring '26 Guided Shopping Agents); Adobe Commerce B2B with complex approval workflows. Both require heavy SI investment.", opportunity: "Position Shopify B2B as faster to deploy, lower TCO, and natively integrated — drive migration assessments." },
    { theme: "Agentic / AI Commerce", shopify: "UCP partnership with Google; Shopify Magic; Sidekick for analytics.", competitor: "Adobe pushing AI assistant for Commerce; Bloomreach Loomi Connect; Salesforce Agentforce B2B. All announced but few in GA.", opportunity: "Shopify is furthest along in actual GA capabilities. Publish an AI readiness framework and position practice as the guide." },
    { theme: "Migration from Adobe / SFCC", shopify: "Shopify Plus migration accelerators; Shopify-certified partner program.", competitor: "Adobe Commerce TCO increasing with licensing; SFCC requires significant SI overhead; commercetools complexity slowing GTM.", opportunity: "TCO comparison content and free migration assessment offer is highest-converting lead gen. Prioritize this campaign." },
    { theme: "Headless Storefronts", shopify: "Hydrogen 2.0 GA on Oxygen CDN; fastest time-to-production for headless.", competitor: "commercetools + Contentful require multi-vendor coordination; VTEX headless maturing but complex.", opportunity: "Hydrogen's DX advantage and Oxygen's global CDN are differentiators. Build architecture comparison content." },
    { theme: "Search & Discovery", shopify: "Native semantic search + Shopify Search & Discovery app. Third-party ecosystem (Boost, SearchPie) mature.", competitor: "Bloomreach Commerce Search and Merchandising; Constructor.io for enterprise catalogs.", opportunity: "For large catalogs, third-party search integration is the play. Search audit offer drives fast-win engagements." },
  ],
  actions: [
    { n: 1, title: "Launch Migration Assessment campaign targeting Adobe/SFCC merchants", why: "Highest composite priority — TCO pressure is creating immediate migration intent. Free assessment is the best lead gen offer.", priority: 9.5, format: "Email campaign + blog + landing page" },
    { n: 2, title: "Publish AI Commerce readiness blog and framework", why: "Fastest-trending topic. Shopify-specific agentic commerce guidance is an open content gap competitors haven't filled.", priority: 9.0, format: "Blog + LinkedIn + whitepaper outline" },
    { n: 3, title: "B2B Commerce Maturity Assessment workshop offer", why: "B2B adoption is accelerating. Workshop offer converts manufacturer and distributor prospects into active projects.", priority: 8.8, format: "Workshop + campaign + demo" },
    { n: 4, title: "Search Conversion Audit offer for large-catalog brands", why: "Fast-win, high-ROI engagement type. Drives immediate project inquiries from retailers with large product catalogs.", priority: 8.5, format: "Audit offer + blog + outreach" },
    { n: 5, title: "Shopify B2B migration whitepaper for enterprise buyers", why: "Longest sales cycle but highest contract value. Whitepaper captures decision-stage enterprise buyers evaluating Shopify B2B.", priority: 8.0, format: "Whitepaper + executive webinar" },
  ],
  next7: [
    { bold: "Launch Migration Assessment campaign", text: "— target Adobe Commerce and SFCC merchants with a free assessment offer while TCO pressure is highest." },
    { bold: "Publish AI Commerce readiness blog", text: "— Shopify-specific agentic commerce guidance is the widest open content gap in the market right now." },
    { bold: "Book 2 B2B Commerce discovery workshops", text: "— use the B2B Maturity Assessment framework to convert manufacturer and distributor prospects into active projects." },
  ],
};
