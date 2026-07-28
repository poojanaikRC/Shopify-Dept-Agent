// ---------------------------------------------------------------------------
// SHOPIFY PRACTICE — QUARTERLY PLAN DATA (updated from Shopify_Practice_Plan_2026_Q.xlsx)
// ---------------------------------------------------------------------------

export type TaskStatus = "To Do" | "In Progress" | "Done" | "Scheduled";
export type AcceleratorStatus = "In Progress" | "In Evaluation" | "Enablement";

export interface PlanTask {
  day: string;
  date: string;
  activity: string;
  team: string;
  type: string;
  kpi: string;
  status: TaskStatus;
  notes: string;
}

export interface FocusCard {
  team: string;
  text: string;
}

export interface QuarterObjective {
  text: string;
}

export interface PlanEvent {
  date: string;
  event: string;
  why: string;
  url: string;
}

export interface PlanWeek {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  quarter: string;
  acceleratorStatus: AcceleratorStatus;
  focus: FocusCard[];
  tasks: PlanTask[];
  objectives: QuarterObjective[];
  events: PlanEvent[];
}

export interface RaciMatrix {
  roles: string[];
  rows: { deliverable: string; values: string[] }[];
}

export interface WeeklyPlan {
  org: string;
  generated: string;
  weeks: PlanWeek[];
  raci: RaciMatrix;
}

export const weeklyPlan: WeeklyPlan = {
  org: "Royal Cyber",
  generated: "Jul 28, 2026",
  weeks: [
    {
      id: "q3-migration",
      label: "Migration",
      title: "Q3 Plan: Migration Accelerator",
      subtitle: "Q3 2026 (Jul–Sep)  ·  Campaign 1 — Migration Readiness  ·  Target: 5 new meetings",
      quarter: "Q3 2026",
      acceleratorStatus: "In Progress",
      focus: [
        { team: "Marketing", text: "Launch Migration Campaign #1 · Publish Blog #1 · Create Migration Readiness Scorecard · Build migration-focused target list · LinkedIn Post: 'How Do You Know You've Outgrown Your Commerce Platform?'" },
        { team: "Sales", text: "Build migration prospect list · Start outreach sequence · Book migration discovery calls · Engage previous prospects · Sales offer: Free Migration Assessment" },
        { team: "Practice", text: "Create Migration Assessment Framework · Create Migration Package Offerings (Bronze/Silver/Gold) · Create Migration Discovery Workshop Template" },
        { team: "Partnerships", text: "Align with Shopify Partner Manager · Identify technology partners · Create referral partner list" },
      ],
      tasks: [
        { day: "Mon", date: "Week 1 Day 1", activity: "Kickoff meeting and ownership alignment", team: "All Teams", type: "Internal", kpi: "Alignment complete", status: "To Do", notes: "Review targets" },
        { day: "Mon", date: "Week 1 Day 1", activity: "Build migration target account list (Adobe, SFCC, CT, Woo)", team: "Sales", type: "Pipeline", kpi: "300 contacts", status: "In Progress", notes: "Adobe, SFCC, CT, Woo" },
        { day: "Mon", date: "Week 1 Day 1", activity: "Draft Blog #1 — 'Is Your Ecommerce Platform Holding Back Growth?'", team: "Marketing", type: "Content", kpi: "Blog draft completed", status: "To Do", notes: "Migration Readiness" },
        { day: "Tue", date: "Week 1 Day 2", activity: "Publish Blog #1", team: "Marketing", type: "Content", kpi: "Blog published", status: "To Do", notes: "Website + LinkedIn" },
        { day: "Tue", date: "Week 1 Day 2", activity: "Launch Email Campaign #1", team: "Marketing", type: "Campaign", kpi: "Email sent", status: "In Progress", notes: "Migration readiness" },
        { day: "Tue", date: "Week 1 Day 2", activity: "LinkedIn outreach to VP Ecommerce targets (30 messages)", team: "Sales", type: "Outreach", kpi: "30 messages", status: "To Do", notes: "VP Ecommerce targets" },
        { day: "Wed", date: "Week 1 Day 3", activity: "Create Migration Assessment deck (platform review, cost compare, risk, roadmap)", team: "Practice", type: "Asset", kpi: "Migration Readiness Scorecard", status: "To Do", notes: "Sales enablement — Free Migration Assessment" },
        { day: "Wed", date: "Week 1 Day 3", activity: "Discovery calls with assessment offer", team: "Sales", type: "Meetings", kpi: "2 meetings", status: "In Progress", notes: "Assessment offer" },
        { day: "Thu", date: "Week 1 Day 4", activity: "Migration package workshop — finalize Bronze/Silver/Gold tiers", team: "Practice", type: "Internal", kpi: "Packages finalized", status: "Done", notes: "Bronze/Silver/Gold" },
        { day: "Thu", date: "Week 1 Day 4", activity: "Shopify ecosystem partner outreach", team: "Partnerships", type: "Outreach", kpi: "5 partner meetings", status: "To Do", notes: "Shopify ecosystem" },
        { day: "Fri", date: "Week 1 Day 5", activity: "Weekly pipeline review — adjust next week plan", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "In Progress", notes: "Adjust next week" },
      ],
      objectives: [
        { text: "Launch Migration Readiness Campaign and generate 5 qualified discovery meetings from Adobe Commerce, SFCC, commercetools, and WooCommerce prospects." },
        { text: "Complete Migration Assessment Framework and finalize Bronze/Silver/Gold migration package offerings with pricing." },
        { text: "Deliver at least 2 free Migration Assessment workshops and convert 1 into a scoped migration project by end of Q3." },
        { text: "Align with Shopify Partner Manager on co-sell motion and identify 3 referral partners for migration pipeline." },
        { text: "Publish Blog #1 and LinkedIn Post #1 targeting VP Ecommerce and IT decision-makers at legacy platform accounts." },
      ],
      events: [
        { date: "Jul 21–22", event: "Shopify DotDev 2026 — Toronto", why: "Shopify's flagship developer & partner event. Sessions on migration APIs, Storefront API v3, and Shopify Functions replacing Scripts. Ideal for migration technical positioning.", url: "https://dotdev.shopify.com/" },
        { date: "Jul 22–23", event: "Online Retailer Expo — ICC Sydney", why: "Australia's largest ecommerce conference. Session track on platform migration and modernization — source APAC migration leads and regional Shopify partner contacts.", url: "https://www.onlineretailer.com/" },
        { date: "Sep 29–Oct 1", event: "Shoptalk Fall — Nashville", why: "'Retooling Your Ecommerce Tech Stack' and 'The Next Evolution of Ecommerce' sessions directly relevant to migration positioning. 3,500+ retail and ecommerce leaders.", url: "https://fall.shoptalk.com/" },
      ],
    },
    {
      id: "q3-b2b",
      label: "B2B",
      title: "Q3 Plan: B2B Accelerator",
      subtitle: "Q3 2026 (Jul–Sep)  ·  Campaign 5 — Shopify for B2B Growth  ·  Target: 5 new meetings",
      quarter: "Q3 2026",
      acceleratorStatus: "In Evaluation",
      focus: [
        { team: "Marketing", text: "B2B campaign · Blog #5 · LinkedIn Post #5 — LinkedIn campaign focused on distributors and wholesalers · B2B Commerce Maturity Assessment" },
        { team: "Sales", text: "Target: Manufacturers · Industrial suppliers · Wholesalers" },
        { team: "Practice", text: "Build: B2B demo · Customer-specific pricing scenarios · Quote workflows" },
        { team: "Partnerships", text: "Engage Shopify B2B specialists for joint GTM" },
      ],
      tasks: [
        { day: "Mon", date: "Week 4", activity: "Publish Blog #2: Why Manufacturers Are Moving to Shopify", team: "Marketing", type: "Content", kpi: "Blog published", status: "To Do", notes: "B2B growth focus" },
        { day: "Mon", date: "Week 4", activity: "Build manufacturing and distribution target list", team: "Sales", type: "Pipeline", kpi: "100 accounts", status: "To Do", notes: "Industrial focus" },
        { day: "Tue", date: "Week 4", activity: "Launch B2B Commerce Campaign", team: "Marketing", type: "Campaign", kpi: "Campaign live", status: "To Do", notes: "Workshop CTA" },
        { day: "Tue", date: "Week 4", activity: "B2B outreach to manufacturers and distributors", team: "Sales", type: "Outreach", kpi: "50 contacts", status: "To Do", notes: "Manufacturing focus" },
        { day: "Wed", date: "Week 4", activity: "Publish LinkedIn Post #4", team: "Marketing", type: "Social", kpi: "Post published", status: "To Do", notes: "B2B commerce trends" },
        { day: "Wed", date: "Week 4", activity: "Build B2B demo environment (pricing, quotes, accounts)", team: "Practice", type: "Demo", kpi: "Demo completed", status: "In Progress", notes: "Pricing, quotes, accounts" },
        { day: "Thu", date: "Week 4", activity: "Conduct B2B Commerce Workshops — B2B Commerce Maturity Assessment", team: "Sales", type: "Workshop", kpi: "2 workshops", status: "In Progress", notes: "Discovery sessions" },
        { day: "Thu", date: "Week 4", activity: "Shopify B2B Partner alignment", team: "Partnerships", type: "Partnership", kpi: "1 meeting", status: "In Progress", notes: "Joint GTM" },
        { day: "Fri", date: "Week 4", activity: "Weekly KPI review", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "In Progress", notes: "Review outcomes" },
        { day: "Thu", date: "Week 1", activity: "Shopify Partner Manager alignment call", team: "Partnerships", type: "Partnership", kpi: "1 meeting completed", status: "In Progress", notes: "Discuss co-selling opportunities" },
        { day: "Fri", date: "Week 1", activity: "Weekly KPI review and pipeline review", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "In Progress", notes: "Identify gaps" },
      ],
      objectives: [
        { text: "Build manufacturing and distribution target account list of 100 prospects (manufacturers, industrial suppliers, wholesalers) and launch outreach sequence." },
        { text: "Deliver 2 B2B Commerce Maturity Assessment workshops and progress 1 prospect to solution design stage." },
        { text: "Complete B2B demo environment with customer-specific pricing scenarios, quote workflows, and company account management." },
        { text: "Align with Shopify B2B Partner Manager on co-sell motion and identify ERP partners (NetSuite, SAP, Dynamics) for joint positioning." },
        { text: "Publish Blog #5 and LinkedIn Post #5 targeting VP/Director of Digital Commerce at manufacturers and distributors." },
      ],
      events: [
        { date: "May 4–6", event: "B2B Online Chicago 2026 — Chicago (content reference)", why: "World's largest B2B ecommerce conference for manufacturers and distributors. Content and session recordings available — use for sales messaging and prospect insights.", url: "https://b2bmarketing.wbresearch.com/" },
        { date: "Jul 21–22", event: "Shopify DotDev 2026 — Toronto", why: "Deep dive into Shopify B2B APIs: company accounts, ACH payments, approval workflows, and the 2,048 variant ceiling lift. Critical for B2B technical positioning.", url: "https://dotdev.shopify.com/" },
        { date: "Sep 29–Oct 1", event: "Shoptalk Fall — Nashville", why: "Dedicated B2B commerce sessions and peer discussions for B2B leaders. 'Master B2B' program track for wholesale and B2B commerce strategy.", url: "https://fall.shoptalk.com/" },
      ],
    },
    {
      id: "q3-subscriptions",
      label: "B2B Subs App",
      title: "Q3–Q4 Plan: B2B Subscriptions App",
      subtitle: "Q3–Q4 2026  ·  Shopify App Store — Recurring Orders, Contract Billing & Buyer Self-Service  ·  Target: Beta launch + 5 design partners",
      quarter: "Q3–Q4 2026",
      acceleratorStatus: "In Evaluation",
      focus: [
        { team: "Marketing", text: "Shopify App Store listing — optimised app page with screenshots and demo video · Launch blog: 'Shopify Has No B2B Subscription App — So We Built One' · LinkedIn campaign: 'How Manufacturers Are Moving Repeat Orders to Shopify Subscriptions'" },
        { team: "Sales", text: "Beta programme: onboard 5 design partners from existing Royal Cyber Shopify B2B client base · Direct outreach to Shopify Plus merchants using Recharge/Bold/Seal for B2B · Bundle offer: B2B Accelerator + B2B Subscriptions App" },
        { team: "Practice", text: "Build recurring order engine: weekly/monthly/quarterly cadence per company account · Build buyer self-service portal: pause, skip, resume, modify, order history · Build contract billing module: Net 30/60/90 terms, invoice generation, credit limit enforcement · Build merchant admin dashboard: MRR, churn, renewal calendar, at-risk accounts" },
        { team: "Partnerships", text: "Shopify Plus Partner programme: App Store co-marketing and Built partner endorsement · ERP partners: NetSuite, SAP, Dynamics — automated order writeback · Shopify Payments/Stripe: payment processing for automated billing cycles" },
      ],
      tasks: [
        { day: "Mon", date: "Q3 Wk 1", activity: "Define B2B Subscriptions App product requirements and feature scope", team: "Practice", type: "Planning", kpi: "PRD completed", status: "In Progress", notes: "Recurring orders + contract billing + buyer portal" },
        { day: "Mon", date: "Q3 Wk 1", activity: "Identify and shortlist 5 beta design partners from existing B2B client base", team: "Sales", type: "Pipeline", kpi: "5 design partners confirmed", status: "To Do", notes: "Collectivus, Lancer, VPG + 2 prospects" },
        { day: "Tue", date: "Q3 Wk 1", activity: "Set up Shopify App development environment and Partner Dashboard", team: "Practice", type: "Build", kpi: "Dev environment live", status: "To Do", notes: "Shopify App Store submission prep" },
        { day: "Tue", date: "Q3 Wk 1", activity: "Outreach to Shopify Plus merchants using Recharge/Bold/Seal for B2B", team: "Sales", type: "Outreach", kpi: "50 contacts", status: "To Do", notes: "Positioned as purpose-built B2B alternative" },
        { day: "Wed", date: "Q3 Wk 1", activity: "Build recurring order engine — weekly/monthly/quarterly cadence per company account", team: "Practice", type: "Build", kpi: "Recurring order engine v1", status: "To Do", notes: "Honours Shopify B2B price lists automatically" },
        { day: "Wed", date: "Q3 Wk 1", activity: "Draft launch blog: 'Shopify Has No B2B Subscription App — So We Built One'", team: "Marketing", type: "Content", kpi: "Blog draft completed", status: "To Do", notes: "Target: Shopify Plus merchants + B2B operators" },
        { day: "Thu", date: "Q3 Wk 1", activity: "Build buyer self-service portal: pause, skip, resume, modify, order history", team: "Practice", type: "Build", kpi: "Buyer portal v1 completed", status: "To Do", notes: "Embedded in Shopify B2B storefront" },
        { day: "Thu", date: "Q3 Wk 1", activity: "Shopify B2B Partner alignment — App Store co-marketing discussion", team: "Partnerships", type: "Partnership", kpi: "1 meeting completed", status: "To Do", notes: "Seek Shopify Built partner endorsement" },
        { day: "Fri", date: "Q3 Wk 1", activity: "Weekly build review — demo recurring order engine to internal team", team: "All Teams", type: "Review", kpi: "Demo delivered internally", status: "To Do", notes: "Validate scope before beta" },
        { day: "Mon", date: "Q3 Wk 2", activity: "Build contract billing module: Net 30/60/90 terms + invoice generation", team: "Practice", type: "Build", kpi: "Contract billing module v1", status: "To Do", notes: "Integrated with Shopify B2B payment terms" },
        { day: "Mon", date: "Q3 Wk 2", activity: "Build manufacturing and distribution target list for beta outreach", team: "Sales", type: "Pipeline", kpi: "100 accounts", status: "To Do", notes: "Manufacturers, distributors, wholesalers" },
        { day: "Tue", date: "Q3 Wk 2", activity: "Launch B2B Subscriptions App awareness campaign", team: "Marketing", type: "Campaign", kpi: "Campaign live", status: "To Do", notes: "App Store listing CTA" },
        { day: "Tue", date: "Q3 Wk 2", activity: "B2B outreach to manufacturers and distributors — subscription offer", team: "Sales", type: "Outreach", kpi: "50 contacts", status: "To Do", notes: "Beta programme pitch" },
        { day: "Wed", date: "Q3 Wk 2", activity: "Publish LinkedIn Post — B2B recurring orders on Shopify", team: "Marketing", type: "Social", kpi: "Post published", status: "To Do", notes: "B2B subscriptions gap messaging" },
        { day: "Wed", date: "Q3 Wk 2", activity: "Build merchant admin dashboard: MRR, churn, renewal calendar, at-risk accounts", team: "Practice", type: "Build", kpi: "Admin dashboard completed", status: "To Do", notes: "Shopify Flow integration" },
        { day: "Thu", date: "Q3 Wk 2", activity: "Conduct B2B Subscriptions discovery workshops with design partners", team: "Sales", type: "Workshop", kpi: "2 workshops — B2B Subscriptions Demo", status: "To Do", notes: "Validate recurring order + billing flows" },
        { day: "Thu", date: "Q3 Wk 2", activity: "ERP partner alignment: NetSuite/SAP/Dynamics — order writeback from subscriptions", team: "Partnerships", type: "Partnership", kpi: "2 meetings completed", status: "To Do", notes: "Joint GTM for ERP-integrated merchants" },
        { day: "Fri", date: "Q3 Wk 2", activity: "Internal QA: end-to-end subscription lifecycle test across all account types", team: "Practice", type: "QA", kpi: "QA pass — zero critical bugs", status: "To Do", notes: "All pricing tiers and payment terms" },
        { day: "Mon", date: "Q3 Wk 3", activity: "Onboard beta design partners — configure subscriptions for each account", team: "Practice", type: "Milestone", kpi: "5 beta partners onboarded", status: "To Do", notes: "Real B2B accounts running live subscriptions" },
        { day: "Wed", date: "Q3 Wk 3", activity: "Publish launch blog + LinkedIn campaign", team: "Marketing", type: "Content", kpi: "Blog + LinkedIn live", status: "To Do", notes: "App Store organic SEO launch" },
        { day: "Thu", date: "Q3 Wk 3", activity: "Submit app to Shopify App Store for review", team: "Practice", type: "Milestone", kpi: "App Store submission sent", status: "To Do", notes: "Target: App Store approval in Q4" },
        { day: "Fri", date: "Q3 Wk 3", activity: "Weekly KPI review — beta feedback, pipeline, and App Store submission status", team: "All Teams", type: "Review", kpi: "Beta live + submission confirmed", status: "To Do", notes: "Adjust roadmap based on beta learnings" },
      ],
      objectives: [
        { text: "Complete product requirements document (PRD) covering recurring order engine, contract billing module, and buyer self-service portal." },
        { text: "Set up Shopify App development environment and Partner Dashboard; build recurring order engine v1 with per-company-account cadence support." },
        { text: "Onboard 5 beta design partners from existing Royal Cyber B2B client base (Collectivus, Lancer, VPG + 2 new) by end of Q3." },
        { text: "Submit B2B Subscriptions App to Shopify App Store for review by end of Q3 — target approval and public launch in Q4 2026." },
        { text: "Publish launch blog and LinkedIn campaign: 'Shopify Has No B2B Subscription App — So We Built One' to generate early App Store awareness." },
      ],
      events: [
        { date: "Jul 21–22", event: "Shopify DotDev 2026 — Toronto", why: "Critical for app development: Shopify Functions, Storefront API v3, App Store submission best practices, and B2B API deep-dives. Direct access to App Review and Partner teams.", url: "https://dotdev.shopify.com/" },
        { date: "Sep 29–Oct 1", event: "Shoptalk Fall — Nashville", why: "'Master B2B' program track and dedicated B2B commerce sessions. Use for beta partner outreach and subscription app positioning to manufacturers and distributors.", url: "https://fall.shoptalk.com/" },
        { date: "Q4 2026", event: "Shopify App Store — Public Launch", why: "Target App Store approval and public listing in Q4 2026. Organic discovery via keywords: 'B2B subscriptions Shopify', 'recurring orders B2B', 'wholesale subscriptions Shopify'.", url: "https://apps.shopify.com/" },
      ],
    },
    {
      id: "q3-growth",
      label: "Growth Assessment",
      title: "Q3 Plan: Shopify Growth Assessment",
      subtitle: "Q3 2026 (Jul–Sep)  ·  Campaign 2 — Growth Assessment  ·  Target: 5 new meetings",
      quarter: "Q3 2026",
      acceleratorStatus: "Enablement",
      focus: [
        { team: "Marketing", text: "Launch Growth Assessment Campaign · Publish Blog #2 · Create landing page · LinkedIn Post #2: '10 Growth Bottlenecks We See in Shopify Stores'" },
        { team: "Sales", text: "Build target list: Shopify Plus merchants · Fast-growing DTC brands · Manufacturers · Distributors · Share LinkedIn posts in outreach" },
        { team: "Practice", text: "Create assessment framework · Create audit template · Maturity Scorecard" },
        { team: "Partnerships", text: "Meet Shopify Partner Manager · Identify referral and co-selling opportunities" },
      ],
      tasks: [
        { day: "Mon", date: "Week 1", activity: "KICK-OFF: Align Marketing, Sales, Practice & Partnerships on 6-week GTM plan", team: "All Teams", type: "Internal", kpi: "Alignment completed", status: "To Do", notes: "Review targets, owners and KPIs" },
        { day: "Mon", date: "Week 1", activity: "Build Shopify prospect list (Retail, B2B, DTC) — segment by industry", team: "Sales", type: "Pipeline", kpi: "300 contacts", status: "To Do", notes: "Segment by industry" },
        { day: "Mon", date: "Week 1", activity: "Draft Blog #4: 10 Growth Bottlenecks We See in Shopify Stores", team: "Marketing", type: "Content", kpi: "Blog draft completed", status: "To Do", notes: "Growth Assessment CTA" },
        { day: "Tue", date: "Week 1", activity: "Launch Shopify Growth Assessment Campaign", team: "Marketing", type: "Campaign", kpi: "Email campaign live", status: "To Do", notes: "Growth Assessment offer" },
        { day: "Tue", date: "Week 1", activity: "Personalized outreach to 50 target accounts", team: "Sales", type: "Outreach", kpi: "50 emails sent", status: "To Do", notes: "Personalized by industry" },
        { day: "Tue", date: "Week 1", activity: "Define Shopify Growth Assessment framework", team: "Practice", type: "Asset Creation", kpi: "Assessment completed", status: "To Do", notes: "5 dimensions: conversion, search, merchandising, CX, platform" },
        { day: "Wed", date: "Week 1", activity: "Publish LinkedIn Post #1 — Growth Assessment", team: "Marketing", type: "Social", kpi: "Post published", status: "To Do", notes: "10 bottlenecks topic" },
        { day: "Wed", date: "Week 1", activity: "Send 25 LinkedIn messages to VP Ecommerce & Directors", team: "Sales", type: "Outreach", kpi: "25 DMs sent", status: "To Do", notes: "VP Ecommerce + Directors" },
        { day: "Wed", date: "Week 1", activity: "Create Growth Assessment discovery workshop deck", team: "Practice", type: "Asset Creation", kpi: "Deck completed", status: "To Do", notes: "Discovery workshop asset" },
        { day: "Thu", date: "Week 1", activity: "Discovery calls with interested prospects — assessment offer", team: "Sales", type: "Meetings", kpi: "2 meetings booked", status: "To Do", notes: "Free Growth Assessment offer" },
        { day: "Thu", date: "Week 1", activity: "Shopify Partner Manager alignment call — co-selling opportunities", team: "Partnerships", type: "Partnership", kpi: "1 meeting completed", status: "To Do", notes: "Referral + co-sell motion" },
        { day: "Fri", date: "Week 1", activity: "Weekly KPI review and pipeline review", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "To Do", notes: "Identify gaps" },
      ],
      objectives: [
        { text: "Finalize Shopify Growth Assessment framework, audit template, and Maturity Scorecard covering 5 dimensions: conversion, search, merchandising, CX, and platform utilization." },
        { text: "Build Growth Assessment landing page and launch Campaign 2 email sequence to 300-contact Shopify Plus prospect list (Retail, B2B, DTC)." },
        { text: "Deliver 5 Growth Assessments across Shopify Plus merchants, DTC brands, and manufacturers — convert 3 into follow-on project engagements." },
        { text: "Publish Blog #2 and LinkedIn Post #2 targeting VP Ecommerce at Shopify Plus merchants with H2 growth goals." },
        { text: "Meet Shopify Partner Manager to identify referral and co-selling opportunities for assessment-driven pipeline." },
      ],
      events: [
        { date: "Jul 22–23", event: "Online Retailer Expo — ICC Sydney", why: "Australia's largest ecommerce conference with 3,500+ professionals. Ideal for growth assessment positioning with APAC Shopify Plus merchants and DTC brands.", url: "https://www.onlineretailer.com/" },
        { date: "Jul 21–22", event: "Shopify DotDev 2026 — Toronto", why: "Learn latest Shopify analytics, Sidekick for store data querying, and platform optimization features. Strengthens assessment methodology with current platform intelligence.", url: "https://dotdev.shopify.com/" },
        { date: "Sep 29–Oct 1", event: "Shoptalk Fall — Nashville", why: "'Retail & Ecommerce Excellence' and 'Understanding the Customer of 2027' tracks directly relevant to growth assessment conversations with senior ecommerce leaders.", url: "https://fall.shoptalk.com/" },
      ],
    },
    {
      id: "q3-modernization",
      label: "Modernization",
      title: "Q3 Plan: Modernization & Migration",
      subtitle: "Q3 2026 (Jul–Sep)  ·  Campaign 6 — Is It Time to Reevaluate Your Commerce Platform?  ·  Target: 5 new meetings",
      quarter: "Q3 2026",
      acceleratorStatus: "In Progress",
      focus: [
        { team: "Marketing", text: "Migration campaign · Blog #6 · LinkedIn Post #6 — Migration Assessment Workshop · Targets: Adobe Commerce · SFCC · commercetools · WooCommerce" },
        { team: "Sales", text: "Adobe, SFCC, commercetools outreach — TCO comparison positioning" },
        { team: "Practice", text: "Migration playbooks — QuickStart & Enterprise tiers" },
        { team: "Partnerships", text: "Migration-focused co-selling with Shopify Partner team" },
      ],
      tasks: [
        { day: "Mon", date: "Week 5", activity: "Publish Blog #5: Adobe, SFCC, commercetools or WooCommerce — Is It Time to Reevaluate?", team: "Marketing", type: "Content", kpi: "Blog published", status: "To Do", notes: "Migration-focused" },
        { day: "Mon", date: "Week 5", activity: "Build migration prospect list (Adobe, SFCC, CT, Woo)", team: "Sales", type: "Pipeline", kpi: "100 accounts", status: "In Progress", notes: "Adobe, SFCC, CT, Woo" },
        { day: "Tue", date: "Week 5", activity: "Launch Migration Assessment Campaign — assessment CTA", team: "Marketing", type: "Campaign", kpi: "Campaign launched", status: "In Progress", notes: "Assessment CTA" },
        { day: "Tue", date: "Week 5", activity: "Personalized migration outreach (50 contacts)", team: "Sales", type: "Outreach", kpi: "50 contacts", status: "In Progress", notes: "Personalized by platform" },
        { day: "Wed", date: "Week 5", activity: "Publish LinkedIn Post #6 — platform modernization", team: "Marketing", type: "Social", kpi: "Post published", status: "To Do", notes: "Modernization topic" },
        { day: "Wed", date: "Week 5", activity: "Finalize migration packages (QuickStart & Enterprise tiers)", team: "Practice", type: "Asset Creation", kpi: "Packages completed", status: "In Progress", notes: "Scope, timeline, pricing" },
        { day: "Thu", date: "Week 5", activity: "Migration assessment workshops — architecture review (2 sessions)", team: "Sales", type: "Workshop", kpi: "2 workshops", status: "In Progress", notes: "Live Shopify Plus comparison" },
        { day: "Thu", date: "Week 5", activity: "Joint Shopify migration planning session — co-selling", team: "Partnerships", type: "Partnership", kpi: "1 meeting", status: "To Do", notes: "Co-sell motion" },
        { day: "Fri", date: "Week 5", activity: "Weekly review — opportunity tracking", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "To Do", notes: "Pipeline analysis" },
        { day: "Thu", date: "Week 1", activity: "Shopify Partner Manager alignment call", team: "Partnerships", type: "Partnership", kpi: "1 meeting completed", status: "In Progress", notes: "Discuss co-selling opportunities" },
        { day: "Fri", date: "Week 1", activity: "Weekly KPI review and pipeline review", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "In Progress", notes: "Identify gaps" },
      ],
      objectives: [
        { text: "Launch Campaign 6 targeting Adobe Commerce, SFCC, and commercetools merchants with TCO comparison content and free Migration Assessment offer." },
        { text: "Publish Blog #6 'Is It Time to Reevaluate Your Commerce Platform?' and LinkedIn Post #6 targeting IT Directors and VP Ecommerce at legacy platform accounts." },
        { text: "Build and finalize migration playbooks for QuickStart (SMB) and Enterprise tiers with scope, timeline, and pricing." },
        { text: "Deliver 2 Migration Assessment workshops — architecture review sessions with live Shopify Plus comparison." },
        { text: "Initiate joint Shopify migration planning session with Shopify Partner Manager for co-selling motion on Adobe and SFCC accounts." },
      ],
      events: [
        { date: "Jul 21–22", event: "Shopify DotDev 2026 — Toronto", why: "Shopify migration tooling, Storefront API v3, and latest platform capabilities that directly address objections from Adobe/SFCC prospects. Use for migration messaging refresh.", url: "https://dotdev.shopify.com/" },
        { date: "Jul 22–23", event: "Online Retailer Expo — ICC Sydney", why: "Platform modernization and tech stack sessions. Strong APAC opportunity for migration pipeline from legacy platforms — many ANZ retailers still on Magento/WooCommerce.", url: "https://www.onlineretailer.com/" },
        { date: "Sep 29–Oct 1", event: "Shoptalk Fall — Nashville", why: "'Retooling Your Ecommerce Tech Stack' session on Sep 29 directly supports migration positioning. 3,500+ ecommerce leaders actively planning 2027 tech stack decisions.", url: "https://fall.shoptalk.com/" },
      ],
    },
    {
      id: "q4-intelligent",
      label: "Intelligent Commerce",
      title: "Q3–Q4 Plan: Intelligent Commerce & Product Discovery",
      subtitle: "Q3–Q4 2026  ·  Campaign 3 & 4 — AI Commerce + Search & Product Discovery  ·  Target: 10 new meetings",
      quarter: "Q3–Q4 2026",
      acceleratorStatus: "Enablement",
      focus: [
        { team: "Marketing", text: "AI Commerce Campaign — Can AI Find Your Products? · Blog #3 + Blog #4 · LinkedIn Posts #3 & #4 · Messaging: SEO is no longer enough — brands must optimize for ChatGPT, Gemini, Perplexity · Your Search Bar May Be Costing You Revenue" },
        { team: "Sales", text: "AI Commerce: AI readiness outreach to Shopify Plus merchants · Search & Discovery: Target large catalogs, B2B distributors, retail brands · Offer: Free AI Readiness Assessment + Free Search Conversion Audit" },
        { team: "Practice", text: "Build AI Commerce Demo: AI Search · AI Assistant · Product Recommendations · Guided Selling · Build Search Assessment Framework + AI Search Demo · AI ecosystem mapping" },
        { team: "Partnerships", text: "Connect with AI technology partners (Google Vertex AI, Algolia, Coveo, Constructor) · Connect with search technology partners · Explore Shopify AI roadmap co-marketing" },
      ],
      tasks: [
        { day: "Mon", date: "Week 2", activity: "Publish Blog #3: How AI Shopping Agents Are Changing Ecommerce", team: "Marketing", type: "Content", kpi: "Blog published", status: "To Do", notes: "AI Commerce campaign" },
        { day: "Mon", date: "Week 2", activity: "Build AI-focused target account list (100 Shopify Plus merchants)", team: "Sales", type: "Pipeline", kpi: "100 accounts", status: "To Do", notes: "Shopify Plus merchants" },
        { day: "Mon", date: "Week 2", activity: "Create AI Commerce Assessment checklist", team: "Practice", type: "Asset Creation", kpi: "Checklist completed", status: "To Do", notes: "AI readiness framework" },
        { day: "Tue", date: "Week 2", activity: "Launch AI Commerce campaign — AI readiness assessment CTA", team: "Marketing", type: "Campaign", kpi: "Email sent", status: "To Do", notes: "AI readiness assessment" },
        { day: "Tue", date: "Week 2", activity: "Outreach to AI-focused prospects (50 contacts)", team: "Sales", type: "Outreach", kpi: "50 contacts", status: "To Do", notes: "Personalized outreach" },
        { day: "Wed", date: "Week 2", activity: "Publish LinkedIn Post #2 — AI discoverability", team: "Marketing", type: "Social", kpi: "Post published", status: "To Do", notes: "AI discoverability" },
        { day: "Wed", date: "Week 2", activity: "Build AI Search & Shopping Assistant demo", team: "Practice", type: "Demo", kpi: "Demo completed", status: "To Do", notes: "Client showcase" },
        { day: "Thu", date: "Week 2", activity: "Conduct AI readiness assessment calls (AI Commerce Readiness Checklist)", team: "Sales", type: "Meetings", kpi: "2 assessments", status: "To Do", notes: "Discovery workshops" },
        { day: "Thu", date: "Week 2", activity: "Engage AI technology partners (Google Vertex AI, Algolia, Coveo)", team: "Partnerships", type: "Partnership", kpi: "2 meetings", status: "To Do", notes: "Google, AI vendors" },
        { day: "Fri", date: "Week 2", activity: "Review campaign performance and update CRM", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "To Do", notes: "Update CRM" },
        { day: "Thu", date: "Week 1", activity: "Shopify Partner Manager alignment call", team: "Partnerships", type: "Partnership", kpi: "1 meeting completed", status: "To Do", notes: "Co-selling opportunities" },
        { day: "Fri", date: "Week 1", activity: "Weekly KPI review and pipeline review", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "To Do", notes: "Identify gaps" },
        { day: "Mon", date: "Week 3", activity: "Publish Blog #4: Why Customers Can't Find Products on Your Shopify Store", team: "Marketing", type: "Content", kpi: "Blog published", status: "To Do", notes: "Search optimization" },
        { day: "Mon", date: "Week 3", activity: "Identify large catalog retailers & distributors (100 search-focused targets)", team: "Sales", type: "Pipeline", kpi: "100 accounts", status: "To Do", notes: "Search-focused targets" },
        { day: "Tue", date: "Week 3", activity: "Launch Search Audit Campaign — Search Assessment CTA", team: "Marketing", type: "Campaign", kpi: "Email campaign live", status: "To Do", notes: "Search Assessment CTA" },
        { day: "Tue", date: "Week 3", activity: "Outreach to search optimization prospects — search audit offer", team: "Sales", type: "Outreach", kpi: "50 contacts", status: "To Do", notes: "Search audit offer" },
        { day: "Wed", date: "Week 3", activity: "Publish LinkedIn Post #3 — search conversion topic", team: "Marketing", type: "Social", kpi: "Post published", status: "To Do", notes: "Search conversion topic" },
        { day: "Wed", date: "Week 3", activity: "Create Search Assessment Scorecard for sales enablement", team: "Practice", type: "Asset Creation", kpi: "Scorecard completed", status: "To Do", notes: "Sales enablement" },
        { day: "Thu", date: "Week 3", activity: "Run 2 search discovery workshops — demo search improvements", team: "Sales", type: "Workshop", kpi: "2 workshops", status: "To Do", notes: "Demo search improvements" },
        { day: "Thu", date: "Week 3", activity: "Meet search technology partners — Shopify search ecosystem", team: "Partnerships", type: "Partnership", kpi: "2 meetings", status: "To Do", notes: "Search ecosystem" },
        { day: "Fri", date: "Week 3", activity: "Weekly review — pipeline analysis", team: "All Teams", type: "Review", kpi: "5 meetings booked", status: "To Do", notes: "Pipeline analysis" },
      ],
      objectives: [
        { text: "Launch Intelligent Commerce Campaign ('Can AI Find Your Products?') and Search Conversion Audit campaign — generate 10 qualified meetings across both tracks." },
        { text: "Deliver 5 free Search Conversion Audits to Shopify Plus merchants with large catalogs — convert 2 into search optimization projects." },
        { text: "Complete AI Commerce demo environment: AI Search, AI Shopping Assistant, Product Recommendations, and Guided Selling flows." },
        { text: "Build Search Assessment Scorecard and AI Readiness Scorecard as sales enablement assets for workshop delivery." },
        { text: "Engage Algolia, Coveo, Constructor, and Google Vertex AI as ISV partners for co-sell and joint workshop motions." },
      ],
      events: [
        { date: "Jul 21–22", event: "Shopify DotDev 2026 — Toronto", why: "Shopify Sidekick AI, semantic search improvements, agentic storefronts, and Unified Commerce Protocol (UCP) with Google. Critical for AI commerce and search positioning.", url: "https://dotdev.shopify.com/" },
        { date: "Jul 22–23", event: "Online Retailer Expo — ICC Sydney", why: "AI in retail and product discovery sessions. Strong APAC Shopify Plus merchant audience for search optimization and AI commerce workshop pipeline.", url: "https://www.onlineretailer.com/" },
        { date: "Sep 29–Oct 1", event: "Shoptalk Fall — Nashville", why: "'Delivering Personalization that Drives Engagement and Transactions' and 'The Next Evolution of Ecommerce' sessions. Intelligent commerce is a centrepiece theme of Shoptalk Fall 2026.", url: "https://fall.shoptalk.com/" },
      ],
    },
  ],
  raci: {
    roles: ["Practice Head","Solution Architect","Content Writer","Marketing Manager","Sales Lead","Sales Rep","Partner Manager","All Teams"],
    rows: [
      { deliverable: "Blog Posts",                          values: ["A","C","R","C","","","","I"] },
      { deliverable: "LinkedIn Posts",                      values: ["I","C","R","A","","","C","I"] },
      { deliverable: "Email Campaigns",                     values: ["I","","C","R","C","","","I"] },
      { deliverable: "Target Account Lists",                values: ["C","","","","R","A","","I"] },
      { deliverable: "Prospect Outreach",                   values: ["I","","","","A","R","","I"] },
      { deliverable: "Discovery Calls / Meetings",          values: ["C","C","","","A","R","","I"] },
      { deliverable: "Practice Assets (Assessments, Decks)",values: ["A","R","","","C","","","I"] },
      { deliverable: "Demos (AI, B2B, Search)",             values: ["C","R","","","C","","","I"] },
      { deliverable: "Migration Packages",                  values: ["A","R","","","C","","","I"] },
      { deliverable: "Partner Alignment Calls",             values: ["C","C","","","","","R","I"] },
      { deliverable: "Workshops",                           values: ["C","C","","","A","R","","I"] },
      { deliverable: "Quarterly Pipeline Reviews",          values: ["A","R","R","R","R","R","R","R"] },
    ],
  },
};
