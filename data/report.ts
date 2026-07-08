// ---------------------------------------------------------------------------
// SHOPIFY PRACTICE — INTELLIGENCE REPORT (updated Jul 8, 2026)
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
  generated: "July 8, 2026",
  sub: "Weekly intelligence sweep for practice leads, solution architects, sales, and marketing across the Shopify ecosystem",
  tags: [
    { label: "Breakout: Shopify Spring '26 Edition — 150+ updates, agentic commerce goes GA", hot: true },
    { label: "Lookback: 30–90 day signal window (through Jul 8, 2026)" },
    { label: "Focus: Shopify Plus, B2B, AI Commerce, Migration, UCP" },
  ],
  trends: [
    {
      rank: 1,
      title: "Universal Commerce Protocol (UCP) — agentic commerce goes live",
      body: "Shopify's Spring '26 Edition (Jun 17, 2026) launched the Universal Commerce Protocol co-developed with Google — an open standard that lets AI agents (ChatGPT, Copilot, Perplexity, Google AI Mode) discover products, build carts, and complete checkout inside AI conversations. Endorsed by Amazon, Meta, Microsoft, Salesforce, Stripe, Etsy, Target, and Wayfair. All Shopify merchants are UCP-enabled by default. This is the biggest platform shift since Shopify's App Store launch — brands that don't optimize their product data for AI discovery will be invisible to AI buyers.",
      flags: [{ kind: "ai", label: "AI relevance" }, { kind: "ent", label: "Enterprise relevance" }],
    },
    {
      rank: 2,
      title: "B2B on all Shopify plans — the Plus barrier is gone",
      body: "Spring '26 Edition opened company profiles, volume pricing, and up to three B2B catalogs to Basic, Grow, and Advanced plans at no extra cost — previously requiring Shopify Plus at ~£2,000/month. Automated vaulted payments for B2B via Shopify Flow, B2B taxes for tax-inclusive pricing, and QuickBooks/Mailchimp integrations also shipped. This dramatically expands the addressable B2B market for Royal Cyber's B2B Accelerator — manufacturers and distributors no longer need a Plus budget to get started.",
      flags: [{ kind: "ent", label: "Enterprise relevance" }, { kind: "gap", label: "Practice opportunity: B2B Accelerator" }],
    },
    {
      rank: 3,
      title: "Shopify Catalog — AI channel syndication for every merchant",
      body: "Shopify Catalog is now the global structured product database powering AI channel distribution. Clean, well-organized product data drives ~2x more conversion on AI channels per Shopify's own data. The Catalog API is open to any developer. Brands not on Shopify can now join via the new Agentic Plan to sync products into the Catalog and sell across AI channels. This creates an immediate consulting opportunity: product data audits, catalog optimization, and AI discoverability assessments.",
      flags: [{ kind: "ai", label: "AI relevance" }, { kind: "gap", label: "Practice opportunity: Intelligent Commerce Accelerator" }],
    },
    {
      rank: 4,
      title: "Shopify Scripts deprecated Jun 30 — migration wave to Shopify Functions",
      body: "Shopify Scripts executed for the last time on June 30, 2026. Any checkout customizations still on Scripts stopped working. The replacement is Shopify Functions or a public app. This is creating an urgent migration wave for merchants who missed the deadline — a fast-start engagement opportunity. The 2026-07 API version (live Jul 1) also adds draft order deposits for Plus, channel markets, and market-driven shipping configuration.",
      flags: [{ kind: "ent", label: "Enterprise relevance" }, { kind: "gap", label: "Urgent: Scripts migration engagements" }],
    },
    {
      rank: 5,
      title: "Sidekick expands — AI assistant now inside partner apps",
      body: "Spring '26 expanded Shopify's Sidekick AI across the entire admin and into 15+ partner apps (Klaviyo, Loop, Judge.me, Smile). Sidekick Pulse proactively surfaces next best actions from store analytics. Sidekick can now write ShopifyQL queries for web performance and payments data. For the first time, it's available in the mobile Online Store Editor. This creates AI commerce advisory opportunities — helping merchants activate and get value from Sidekick across their app stack.",
      flags: [{ kind: "ai", label: "AI relevance" }, { kind: "ent", label: "Enterprise relevance" }],
    },
    {
      rank: 6,
      title: "Hydrogen rebuilt for any JavaScript framework",
      body: "A developer preview of Hydrogen rebuilt to run on any JavaScript framework (not just Remix) — including Next.js — shipped in Spring '26. This removes the biggest adoption barrier for headless Shopify storefronts. Combined with Oxygen's global CDN and the new Shopify AI Toolkit (for building with Claude Code, Cursor, and Codex), headless Shopify implementation timelines are shortening significantly.",
      flags: [{ kind: "ai", label: "AI relevance" }, { kind: "ent", label: "Enterprise relevance" }],
    },
    {
      rank: 7,
      title: "EU €3 customs duty live — Shopify Markets Pro opportunity",
      body: "From July 1, 2026, the EU applies a €3 customs duty per tariff line to qualifying low-value imports (orders up to €150). Shopify supports two compliance methods at checkout. Merchants using Managed Markets have Global-e remitting duties as merchant of record. This is creating urgency for cross-border merchants to implement Shopify Markets Pro — a high-value engagement type for the practice.",
      flags: [{ kind: "ent", label: "Enterprise relevance" }, { kind: "gap", label: "Shopify Markets Pro engagements" }],
    },
  ],
  releases: [
    { product: "Shopify Spring '26 Edition", date: "Jun 17, 2026", highlight: "150+ updates shipped: Universal Commerce Protocol (UCP) with Google, Shopify Catalog for AI channel syndication, Sidekick expanded to partner apps, B2B on all plans, POS v11, Campaign Autopilot, redesigned checkout, native A/B testing.", source: "shopify.com/news/spring-26-edition-merchant", type: "Major Edition release" },
    { product: "Shopify API 2026-07", date: "Jul 1, 2026", highlight: "New API version adds draft order deposits (Plus), channel markets in GraphQL Admin, order attribution definitions, market-driven shipping configuration, and new Collection model with variant-level membership.", source: "shopify.dev/changelog", type: "API release" },
    { product: "Shopify Scripts", date: "Jun 30, 2026", highlight: "Shopify Scripts deprecated and stopped executing. All checkout customizations must migrate to Shopify Functions or public apps. Breaking change for merchants who missed the deadline.", source: "changelog.shopify.com", type: "Deprecation — breaking" },
    { product: "EU Customs Duty — Shopify Markets", date: "Jul 1, 2026", highlight: "EU €3 customs duty per tariff line now live for qualifying low-value imports (orders up to €150). Shopify supports duty calculation at checkout. Merchants using Managed Markets have Global-e remitting duties.", source: "huptechweb.com/blogs/shopify-changelog-guide", type: "Compliance — live" },
    { product: "Shopify B2B — Spring '26", date: "Jun 17, 2026", highlight: "Company profiles, volume pricing, and 3 B2B catalogs now on Basic/Grow/Advanced plans at no extra cost. Automated vaulted payments via Flow, B2B tax-inclusive pricing, QuickBooks sync, and Mailchimp B2B segments.", source: "shopify.com/editions/spring2026", type: "Feature release" },
    { product: "Shopify POS v11", date: "Jun 17, 2026", highlight: "Materially faster POS performance. New Verifone Victa Mobile handheld available for pre-order (US/Canada). Staff attribution redesigned. POS staff permissions unified with admin permissions in Settings > Users.", source: "shopify.com/blog/retail-release-roundup", type: "Feature release" },
    { product: "Shopify Checkout", date: "Jun 17, 2026", highlight: "Redesigned checkout with payment methods reordering by conversion likelihood. Native A/B testing and scheduled publishing for checkout configurations (Plus). Ship and pickup in one order now in feature test drive.", source: "shopify.com/editions/spring2026", type: "Enhancement" },
    { product: "Shopify Sidekick", date: "Jun 17, 2026", highlight: "Sidekick App Extensions connect 15+ partner apps (Klaviyo, Loop, Judge.me, Smile). Sidekick Pulse proactively surfaces next best actions. Available in mobile Online Store Editor and can now write ShopifyQL queries.", source: "shopify.com/editions/spring2026", type: "Enhancement" },
  ],
  events: [
    { event: "Shopify DotDev 2026", when: "Jul 21–22, 2026 · Toronto · In-person + Virtual", focus: "Shopify's flagship developer & partner event. Sessions on UCP, Catalog API, B2B API deep-dives, App Store submission, Hydrogen on any framework, and Shopify Functions migration from Scripts. Direct access to Shopify App Review and Partner teams.", register: "https://dotdev.shopify.com/" },
    { event: "Online Retailer Expo — ICC Sydney", when: "Jul 22–23, 2026 · Sydney · In-person", focus: "Australia's largest ecommerce conference with 3,500+ professionals. Platform migration, AI commerce, and growth optimization session tracks. Strong APAC pipeline opportunity for all 5 Royal Cyber accelerators.", register: "https://www.onlineretailer.com/" },
    { event: "Shoptalk Fall 2026", when: "Sep 29–Oct 1, 2026 · Nashville · In-person", focus: "'Retooling Your Ecommerce Tech Stack', 'Master B2B', 'Delivering Personalization that Drives Engagement', and 'The Next Evolution of Ecommerce' tracks. 3,500+ retail and ecommerce leaders. Top event for migration, B2B, and intelligent commerce pipeline.", register: "https://fall.shoptalk.com/" },
    { event: "Shopify Partner Summit", when: "Q3 2026 · Virtual", focus: "Exclusive partner-only briefings on H2 product roadmap, partner programme updates, co-sell opportunities, and Built for Shopify requirements. Critical for B2B Subscriptions App Store positioning.", register: "https://partners.shopify.com" },
  ],
  roadmap: [
    { product: "Shopify UCP & Catalog API", phase: "Live + H2 2026 expansion", items: ["UCP open to all developers — any surface can build agentic commerce", "Shopify Catalog feeds AI channels: ChatGPT, Copilot, Perplexity, Google AI Mode", "Agentic Plan: non-Shopify brands can sync to Catalog and sell via Shop Pay", "Sponsored products through Catalog API rolling out H2 2026", "Five demo apps showing UCP + Catalog in action (trip planning, horoscope, TV show shopping)"], link: "https://www.shopify.com/editions/spring2026" },
    { product: "Shopify B2B", phase: "Live + H2 2026 roadmap", items: ["B2B on all plans GA — company profiles, volume pricing, 3 catalogs at no extra cost", "Automated vaulted payment charging via Flow (fulfillment, due dates, invoicing)", "B2B draft order deposits via API 2026-07 (Plus)", "Multi-entity selling for Plus retail organizations", "ERP integration templates (NetSuite, SAP, Dynamics) — partner-built"], link: "https://www.shopify.com/b2b" },
    { product: "Shopify Sidekick & AI", phase: "Live + expanding", items: ["Sidekick App Extensions: 15+ partner apps connected at launch", "Sidekick Pulse: proactive next-best-action recommendations from store data", "AI sales associate in Shopify Inbox — answers questions, suggests products, handles orders", "Campaign Autopilot: AI-run cross-channel marketing that learns over time", "SimGym: AI-simulated shoppers testing your storefront before real customers"], link: "https://www.shopify.com/magic" },
    { product: "Hydrogen & Headless", phase: "Developer preview live", items: ["Hydrogen rebuilt for any JavaScript framework — Next.js now supported", "Shopify AI Toolkit: build and edit with Claude Code, Cursor, and Codex", "Themes now emit standardized events and expose actions for agents", "Oxygen CDN edge regions expanding globally H2 2026", "Storefront API GraphQL subscriptions in 2026-10 API version"], link: "https://hydrogen.shopify.dev" },
    { product: "Shopify Markets & Cross-Border", phase: "Live + H2 2026", items: ["EU €3 customs duty compliance live Jul 1, 2026", "Market-driven shipping via API 2026-07 — feature preview available now", "Channel markets in GraphQL Admin 2026-07 — per-channel pricing and currency", "Discounts by market: region-specific and B2B-specific promotions", "Managed Markets expansion to additional countries Q3 2026"], link: "https://www.shopify.com/markets" },
  ],
  blogs: [
    { title: "What Shopify's Universal Commerce Protocol Means for Your Brand in 2026", why: "UCP is the #1 trending Shopify topic. Merchants need practical guidance — clean data, native storefront code, structured catalog — not just hype.", audience: "Shopify Plus merchants, ecommerce directors, DTC brands", difficulty: "Intermediate", engagement: 9, uniqueness: 9, priority: 9.5 },
    { title: "Shopify Scripts Are Gone: What Every Shopify Merchant Must Do Right Now", why: "Scripts deprecated Jun 30. Merchants who missed the deadline have broken checkout logic right now. Urgent content, high inbound search volume.", audience: "Shopify merchants, developers, IT leaders", difficulty: "Intermediate", engagement: 9, uniqueness: 8, priority: 9.2 },
    { title: "B2B on Every Shopify Plan: What Manufacturers Need to Know", why: "B2B features now available without Plus. Opens a new mid-market audience for the B2B Accelerator — manufacturers who couldn't afford Plus before.", audience: "Manufacturers, distributors, wholesalers", difficulty: "Beginner", engagement: 9, uniqueness: 8, priority: 9.0 },
    { title: "Adobe Commerce to Shopify Plus: What the Migration Actually Costs in 2026", why: "TCO pressure from Adobe's licensing model + Scripts deprecation is accelerating migration intent. High-intent, high-value search traffic.", audience: "Enterprise buyers, IT leaders, VP Ecommerce", difficulty: "Intermediate", engagement: 8, uniqueness: 9, priority: 8.8 },
    { title: "Can AI Find Your Products? How to Prepare Your Shopify Store for UCP", why: "22 of 27 founders surveyed post-Spring '26 said their product data isn't clean enough for AI channels yet. Practical how-to fills this gap.", audience: "Shopify Plus merchants, marketing leaders", difficulty: "Intermediate", engagement: 9, uniqueness: 9, priority: 9.0 },
    { title: "Shopify Sidekick App Extensions: What's Connected and Why It Matters", why: "New Sidekick integrations with Klaviyo, Loop, Judge.me — practical explainer for merchants and agencies on what changed and how to activate.", audience: "Shopify Plus merchants, agency leads, operations teams", difficulty: "Beginner", engagement: 8, uniqueness: 8, priority: 8.2 },
  ],
  whitepapers: [
    { title: "The Agentic Commerce Readiness Guide for Shopify Merchants", why: "UCP is live, but most merchants' product data isn't ready. A practical readiness framework is the widest open content gap in the market right now.", audience: "Ecommerce directors, solution architects, CDOs", difficulty: "Intermediate", engagement: 9, uniqueness: 9, priority: 9.5 },
    { title: "The B2B Commerce Migration Playbook: From Legacy Platforms to Shopify B2B", why: "B2B on all plans removes the Plus cost barrier. Migration from custom portals, Magento B2B, and legacy ERPs is accelerating sharply.", audience: "Enterprise buyers, IT leaders, operations directors", difficulty: "Advanced", engagement: 8, uniqueness: 9, priority: 9.0 },
    { title: "Shopify Scripts to Functions: The Complete Migration Guide", why: "Urgent, time-sensitive. Merchants who missed Jun 30 deadline have broken checkouts. High-value engagement opportunity — fast-start project.", audience: "Shopify developers, CTOs, technical operations leads", difficulty: "Advanced", engagement: 8, uniqueness: 8, priority: 8.5 },
  ],
  linkedin: [
    { title: '"Shopify Scripts stopped running on June 30. Here is what happens next."', why: "Urgent, time-sensitive. High engagement from merchants and developers realising they may have broken checkouts.", audience: "Shopify merchants, developers, technical leads", engagement: 9, uniqueness: 9 },
    { title: '"B2B on Shopify is now free. What that means for manufacturers in 2026."', why: "B2B on all plans is the most business-impactful Spring \'26 change for mid-market manufacturers. Drives B2B Accelerator pipeline.", audience: "Manufacturers, distributors, wholesalers, VP Digital", engagement: 9, uniqueness: 8 },
    { title: '"We reviewed 50 Shopify product catalogs. 44 of them won\'t surface in AI search."', why: "Data-led, shareable. Directly tied to UCP and Shopify Catalog — drives AI readiness assessments.", audience: "Shopify Plus merchants, DTC brand leaders", engagement: 9, uniqueness: 9 },
    { title: '"Adobe Commerce → Shopify Plus: the 2026 migration is faster than you think."', why: "Scripts deprecation adds urgency. TCO pressure from Adobe licensing is at an all-time high. Migration pipeline driver.", audience: "Enterprise buyers, IT leaders, VP Ecommerce", engagement: 8, uniqueness: 8 },
    { title: '"One diagram: how UCP, Shopify Catalog, and AI channels connect."', why: "Technical visual that gets shared widely among architects. Positions Royal Cyber as the go-to guide for agentic commerce implementation.", audience: "Solution architects, developers, ecommerce technical leads", engagement: 8, uniqueness: 9 },
  ],
  competitive: [
    { theme: "Agentic Commerce / UCP", shopify: "UCP live GA — co-developed with Google, endorsed by Amazon, Meta, Microsoft, Salesforce, Stripe. All Shopify merchants UCP-enabled by default. Shopify Catalog syndicates products to ChatGPT, Copilot, Perplexity.", competitor: "Adobe Commerce: AI assistant announced, not GA. Salesforce Agentforce B2B announced Spring '26 but limited availability. commercetools: no native agentic commerce standard, requires custom MCP builds.", opportunity: "Shopify is the clear leader in production-ready agentic commerce infrastructure. Publish an AI readiness assessment and position Royal Cyber as the implementation guide." },
    { theme: "B2B Commerce", shopify: "B2B on all plans GA (Spring '26) — company accounts, price lists, 3 catalogs, payment terms. No Shopify Plus required. Automated vaulted payments via Flow.", competitor: "Salesforce B2B Commerce Cloud: heavy SI investment, Plus-level costs. Adobe Commerce B2B: complex, expensive licensing. Both require significant custom development.", opportunity: "Shopify B2B now accessible without Plus budget. Drive B2B Accelerator pipeline at mid-market manufacturers and distributors who couldn't afford legacy B2B platforms." },
    { theme: "Shopify Scripts Migration", shopify: "Scripts deprecated Jun 30, 2026. Shopify Functions + public apps are the replacements. API 2026-07 adds new Functions capabilities.", competitor: "Not a competitive threat — internal migration. But merchants on competing platforms (Magento, WooCommerce) don't face this disruption, giving them a short-term talking point.", opportunity: "Create urgent migration engagement content. Target Shopify merchants with broken checkout logic — fast-start Functions migration is a high-value, fast-close project type." },
    { theme: "AI Search & Discovery", shopify: "Smarter search GA (Spring '26): handles typos, unusual phrasing, intent-based queries. Shopify Catalog powers AI channel discovery. SimGym runs AI-simulated shoppers on any theme.", competitor: "Bloomreach Commerce Search: mature enterprise solution. Constructor.io for large catalogs. Both require separate licensing and integration overhead.", opportunity: "For large catalogs, third-party search (Algolia, Constructor) + Shopify Catalog AI optimization is the strongest positioning. Search audits remain the fastest-close engagement." },
    { theme: "Cross-Border / Markets", shopify: "EU €3 duty live Jul 1 with Shopify checkout support. Market-driven shipping in API 2026-07. Channel markets per-sales-channel pricing. Managed Markets expansion.", competitor: "BigCommerce Multi-Storefront: more complex setup. SFCC International: heavy implementation cost and timeline. Adobe Commerce: market-specific pricing requires significant custom work.", opportunity: "EU duty compliance is creating urgency now. Shopify Markets Pro implementation is a fast, high-value engagement for brands selling cross-border." },
  ],
  actions: [
    { n: 1, title: "Publish UCP + AI Catalog readiness content immediately", why: "Spring '26 Edition is the biggest Shopify news cycle of 2026. UCP content gap is wide open. First-mover advantage for Royal Cyber's Intelligent Commerce positioning.", priority: 9.5, format: "Blog + LinkedIn post + whitepaper outline" },
    { n: 2, title: "Launch Scripts-to-Functions migration outreach to existing Shopify clients", why: "Scripts deprecated Jun 30. Merchants with broken checkouts need help now. Fast-start, fast-close engagement with existing relationships.", priority: 9.2, format: "Email to existing clients + blog + direct outreach" },
    { n: 3, title: "Reposition B2B Accelerator for mid-market — B2B now on all plans", why: "B2B on Basic/Grow/Advanced plans removes the £2k/month Plus barrier. New mid-market manufacturer and distributor audience is now accessible.", priority: 9.0, format: "Updated campaign messaging + outreach to non-Plus B2B prospects" },
    { n: 4, title: "Launch Migration Assessment campaign targeting Adobe Commerce merchants", why: "Scripts deprecation + Adobe licensing pressure = peak migration intent. TCO comparison content drives high-intent inbound. Free Migration Assessment is the best lead gen offer.", priority: 8.8, format: "Email campaign + Blog + landing page" },
    { n: 5, title: "Attend Shopify DotDev 2026 (Jul 21–22, Toronto)", why: "Direct access to Shopify App Review for B2B Subscriptions App submission, B2B API team, and UCP/Catalog API sessions. Critical for Q3 execution.", priority: 8.5, format: "In-person attendance + partner meeting schedule" },
  ],
  next7: [
    { bold: "Publish UCP readiness blog", text: "— 'Can AI Find Your Products?' is the #1 open content gap in the Shopify ecosystem right now and directly supports the Intelligent Commerce Accelerator." },
    { bold: "Email existing Shopify clients about Scripts deprecation", text: "— merchants who missed Jun 30 have broken checkouts today. Fast-start Functions migration is a fast-close, high-value project." },
    { bold: "Update B2B Accelerator messaging for mid-market", text: "— B2B on all plans removes the Plus cost barrier. Reframe outreach to target manufacturers on Basic/Grow/Advanced plans who were previously priced out." },
  ],
};
