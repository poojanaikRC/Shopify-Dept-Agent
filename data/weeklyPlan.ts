// ---------------------------------------------------------------------------
// SHOPIFY PRACTICE WEEKLY PLAN AGENT — output data
// ---------------------------------------------------------------------------
// Structured output of the Shopify Weekly Plan agent.
// To refresh the dashboard, replace the `weeklyPlan` object below with the
// agent's latest run. Keep the shape the same and the UI updates automatically.
// ---------------------------------------------------------------------------

export type TaskStatus = "todo" | "prog" | "sched" | "done";

export type TaskType =
  | "Blog Post"
  | "Blog"
  | "Whitepaper"
  | "LinkedIn Post"
  | "Internal Milestone"
  | "Review"
  | "Meeting"
  | "Campaign"
  | "Accelerator"
  | "Integration"
  | "Asset"
  | "Demo"
  | "Outreach"
  | "Pipeline"
  | "Workshop"
  | "Partnership"
  | "Social";

export interface PlanTask {
  day: string;
  date: string;
  activity: string;
  team: string;
  type: TaskType;
  kpi: string;
  owner: string;
  department: string;
  status: TaskStatus;
}

export interface FocusCard {
  team: string;
  text: string;
}

export interface PlanWeek {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  focus: FocusCard[];
  tasks: PlanTask[];
}

export type Raci = "R" | "A" | "C" | "I" | "";

export interface RaciMatrix {
  roles: string[];
  rows: { deliverable: string; values: Raci[] }[];
}

export interface WeeklyPlan {
  org: string;
  generated: string;
  weeks: PlanWeek[];
  raci: RaciMatrix;
}

export const weeklyPlan: WeeklyPlan = {
  org: "Royal Cyber",
  generated: "Jun 19, 2026",
  weeks: [
    {
      id: "wk1",
      label: "Week 1",
      title: "Shopify Practice — Week 1: Migration Accelerator",
      subtitle: "Jun 1–5, 2026  |  Campaign 1 — Migration Readiness  |  Target: 5 new meetings",
      focus: [
        { team: "Marketing", text: "Launch Migration Campaign #1, publish Blog #1, create Migration Readiness Scorecard, LinkedIn Post: 'How Do You Know You've Outgrown Your Commerce Platform?'" },
        { team: "Sales", text: "Build migration prospect list (Adobe/SFCC/CT/Woo), start outreach sequence, book discovery calls, offer free Migration Assessment." },
        { team: "Practice", text: "Create Migration Assessment Framework, Bronze/Silver/Gold package offerings, Discovery Workshop Template." },
        { team: "Partnerships", text: "Align with Shopify Partner Manager, identify technology partners, build referral partner list." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 01", activity: "Kickoff: assign owners & review targets for Week 1", team: "All Teams", type: "Internal Milestone", kpi: "Alignment complete", owner: "Practice Head", department: "Practice", status: "todo" },
        { day: "Mon", date: "Jun 01", activity: "Build migration target account list (Adobe, SFCC, CT, WooCommerce)", team: "Sales", type: "Pipeline", kpi: "300 contacts", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Mon", date: "Jun 01", activity: "Draft Blog #1 — 'Is Your Ecommerce Platform Holding Back Growth?'", team: "Marketing", type: "Blog Post", kpi: "Blog draft completed", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 02", activity: "Publish Blog #1 on website + LinkedIn", team: "Marketing", type: "Blog Post", kpi: "Blog published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 02", activity: "Launch Email Campaign #1 — Migration Readiness", team: "Marketing", type: "Campaign", kpi: "Email sent", owner: "Marketing Manager", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 02", activity: "LinkedIn outreach to VP Ecommerce targets (30 messages)", team: "Sales", type: "Outreach", kpi: "30 messages", owner: "Sales Rep", department: "Sales", status: "todo" },
        { day: "Wed", date: "Jun 03", activity: "Create Migration Assessment deck (platform review, cost compare, risk, roadmap)", team: "Practice", type: "Asset", kpi: "Migration Readiness Scorecard", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Wed", date: "Jun 03", activity: "Discovery calls with assessment offer", team: "Sales", type: "Meeting", kpi: "2 meetings", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Thu", date: "Jun 04", activity: "Migration package workshop — finalize Bronze/Silver/Gold tiers", team: "Practice", type: "Internal Milestone", kpi: "Packages finalized", owner: "Practice Head", department: "Practice", status: "todo" },
        { day: "Thu", date: "Jun 04", activity: "Shopify ecosystem partner outreach", team: "Partnerships", type: "Outreach", kpi: "5 partner meetings", owner: "Partner Manager", department: "Partnerships", status: "todo" },
        { day: "Fri", date: "Jun 05", activity: "Weekly pipeline review — adjust next week plan", team: "All Teams", type: "Review", kpi: "5 meetings booked", owner: "Practice Head", department: "All", status: "todo" },
      ],
    },
    {
      id: "wk2",
      label: "Week 2",
      title: "Shopify Practice — Week 2: Shopify Growth Assessment",
      subtitle: "Jun 8–12, 2026  |  Campaign 2 — Growth Assessment Campaign  |  Target: 5 new meetings",
      focus: [
        { team: "Marketing", text: "Launch Growth Assessment Campaign, publish Blog #2, create landing page, LinkedIn Post: '10 Growth Bottlenecks We See in Shopify Stores'." },
        { team: "Sales", text: "Build Shopify Plus / DTC / manufacturer prospect list, engage LinkedIn commenters, personalize outreach using posts." },
        { team: "Practice", text: "Create Shopify Growth Assessment framework, audit template, and Maturity Scorecard." },
        { team: "Partnerships", text: "Meet Shopify Partner Manager, identify referral and co-selling opportunities." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 08", activity: "GTM kickoff — align all teams on 6-week plan, owners, and KPIs", team: "All Teams", type: "Internal Milestone", kpi: "Alignment completed", owner: "Practice Head", department: "All", status: "todo" },
        { day: "Mon", date: "Jun 08", activity: "Build Shopify prospect list (Retail, B2B, DTC) — segment by industry", team: "Sales", type: "Pipeline", kpi: "300 contacts", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Mon", date: "Jun 08", activity: "Draft Blog #2: 10 Growth Bottlenecks We See in Shopify Stores", team: "Marketing", type: "Blog Post", kpi: "Blog draft completed", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 09", activity: "Launch Shopify Growth Assessment Campaign", team: "Marketing", type: "Campaign", kpi: "Email campaign live", owner: "Marketing Manager", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 09", activity: "Personalized outreach to 50 target accounts", team: "Sales", type: "Outreach", kpi: "50 emails sent", owner: "Sales Rep", department: "Sales", status: "todo" },
        { day: "Tue", date: "Jun 09", activity: "Define Shopify Growth Assessment framework", team: "Practice", type: "Asset", kpi: "Assessment completed", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Wed", date: "Jun 10", activity: "Publish LinkedIn Post #1 — promote Growth Assessment", team: "Marketing", type: "LinkedIn Post", kpi: "Post published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jun 10", activity: "Send 25 LinkedIn messages to VP Ecommerce & Directors", team: "Sales", type: "Outreach", kpi: "25 DMs sent", owner: "Sales Rep", department: "Sales", status: "todo" },
        { day: "Wed", date: "Jun 10", activity: "Create Growth Assessment discovery workshop deck", team: "Practice", type: "Asset", kpi: "Deck completed", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Thu", date: "Jun 11", activity: "Discovery calls with interested prospects — assessment offer", team: "Sales", type: "Meeting", kpi: "2 meetings booked", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Thu", date: "Jun 11", activity: "Shopify Partner Manager alignment call — co-selling opportunities", team: "Partnerships", type: "Partnership", kpi: "1 meeting completed", owner: "Partner Manager", department: "Partnerships", status: "sched" },
        { day: "Fri", date: "Jun 12", activity: "Weekly KPI review and pipeline review", team: "All Teams", type: "Review", kpi: "5 meetings booked", owner: "Practice Head", department: "All", status: "todo" },
      ],
    },
    {
      id: "wk3",
      label: "Week 3",
      title: "Shopify Practice — Week 3: AI Commerce & Agentic Shopping",
      subtitle: "Jun 15–19, 2026  |  Campaign 3 — Can AI Find Your Products?  |  Target: 5 new meetings",
      focus: [
        { team: "Marketing", text: "AI campaign launch, Blog #3, LinkedIn Post: 'SEO is no longer enough — brands must optimize for ChatGPT, Gemini, Perplexity'." },
        { team: "Sales", text: "AI readiness outreach to 50 Shopify Plus merchants." },
        { team: "Practice", text: "Build AI commerce demo: AI Search, AI Assistant, Product Recommendations, Guided Selling." },
        { team: "Partnerships", text: "AI ecosystem mapping — explore Shopify AI roadmap and co-marketing opportunities." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 15", activity: "Publish Blog #3: How AI Shopping Agents Are Changing Ecommerce", team: "Marketing", type: "Blog Post", kpi: "Blog published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Mon", date: "Jun 15", activity: "Build AI-focused target account list (100 Shopify Plus merchants)", team: "Sales", type: "Pipeline", kpi: "100 accounts", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Mon", date: "Jun 15", activity: "Create AI Commerce Assessment checklist", team: "Practice", type: "Asset", kpi: "Checklist completed", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Tue", date: "Jun 16", activity: "Launch AI Commerce Campaign — AI readiness assessment CTA", team: "Marketing", type: "Campaign", kpi: "Email sent", owner: "Marketing Manager", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 16", activity: "Personalized outreach to 50 AI-focused prospects", team: "Sales", type: "Outreach", kpi: "50 contacts", owner: "Sales Rep", department: "Sales", status: "todo" },
        { day: "Wed", date: "Jun 17", activity: "Publish LinkedIn Post #2 — AI discoverability", team: "Marketing", type: "LinkedIn Post", kpi: "Post published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jun 17", activity: "Build AI Search & Shopping Assistant demo for client showcase", team: "Practice", type: "Demo", kpi: "Demo completed", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Thu", date: "Jun 18", activity: "Conduct AI readiness assessment calls (AI Commerce Readiness Checklist)", team: "Sales", type: "Meeting", kpi: "2 assessments", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Thu", date: "Jun 18", activity: "Engage AI technology partners (Google, Shopify AI vendors)", team: "Partnerships", type: "Partnership", kpi: "2 meetings", owner: "Partner Manager", department: "Partnerships", status: "todo" },
        { day: "Fri", date: "Jun 19", activity: "Review campaign performance and update CRM", team: "All Teams", type: "Review", kpi: "5 meetings booked", owner: "Practice Head", department: "All", status: "todo" },
      ],
    },
    {
      id: "wk4",
      label: "Week 4",
      title: "Shopify Practice — Week 4: Search & Product Discovery",
      subtitle: "Jun 22–26, 2026  |  Campaign 4 — Search Conversion Audit  |  Target: 5 new meetings",
      focus: [
        { team: "Marketing", text: "Search campaign, Blog #4, LinkedIn Post: 'Your Search Bar May Be Costing You Revenue' — zero results, poor relevance, search abandonment." },
        { team: "Sales", text: "Target large-catalog retailers and B2B distributors — search audit offer." },
        { team: "Practice", text: "Build Search Assessment Framework and AI Search demo." },
        { team: "Partnerships", text: "Connect with Shopify search technology partners." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 22", activity: "Publish Blog #4: Why Customers Can't Find Products on Your Shopify Store", team: "Marketing", type: "Blog Post", kpi: "Blog published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Mon", date: "Jun 22", activity: "Identify large catalog retailers & distributors (100 search-focused targets)", team: "Sales", type: "Pipeline", kpi: "100 accounts", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Tue", date: "Jun 23", activity: "Launch Search Audit Campaign — Search Assessment CTA", team: "Marketing", type: "Campaign", kpi: "Email campaign live", owner: "Marketing Manager", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 23", activity: "Outreach to 50 search optimization prospects — search audit offer", team: "Sales", type: "Outreach", kpi: "50 contacts", owner: "Sales Rep", department: "Sales", status: "todo" },
        { day: "Wed", date: "Jun 24", activity: "Publish LinkedIn Post #3 — search conversion topic", team: "Marketing", type: "LinkedIn Post", kpi: "Post published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jun 24", activity: "Create Search Assessment Scorecard for sales enablement", team: "Practice", type: "Asset", kpi: "Scorecard completed", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Thu", date: "Jun 25", activity: "Run 2 search discovery workshops — demo search improvements", team: "Sales", type: "Workshop", kpi: "2 workshops", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Thu", date: "Jun 25", activity: "Meet search technology partners — Shopify search ecosystem", team: "Partnerships", type: "Partnership", kpi: "2 meetings", owner: "Partner Manager", department: "Partnerships", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Weekly review — pipeline analysis", team: "All Teams", type: "Review", kpi: "5 meetings booked", owner: "Practice Head", department: "All", status: "todo" },
      ],
    },
    {
      id: "wk5",
      label: "Week 5",
      title: "Shopify Practice — Week 5: Shopify B2B Commerce",
      subtitle: "Jun 29–Jul 3, 2026  |  Campaign 5 — Shopify for B2B Growth  |  Target: 5 new meetings",
      focus: [
        { team: "Marketing", text: "B2B campaign, Blog #5, LinkedIn Post: B2B Commerce Maturity Assessment targeting distributors and wholesalers." },
        { team: "Sales", text: "Target manufacturers, industrial suppliers, and wholesalers." },
        { team: "Practice", text: "Build B2B demo — customer-specific pricing scenarios and quote workflows." },
        { team: "Partnerships", text: "Engage Shopify B2B specialists for joint GTM." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 29", activity: "Publish Blog #5: Why Manufacturers Are Moving to Shopify (self-service ordering, distributor portals)", team: "Marketing", type: "Blog Post", kpi: "Blog published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Mon", date: "Jun 29", activity: "Build manufacturing and distribution target list (100 industrial accounts)", team: "Sales", type: "Pipeline", kpi: "100 accounts", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Tue", date: "Jun 30", activity: "Launch B2B Commerce Campaign — workshop CTA", team: "Marketing", type: "Campaign", kpi: "Campaign live", owner: "Marketing Manager", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 30", activity: "B2B outreach to manufacturers and distributors (50 contacts)", team: "Sales", type: "Outreach", kpi: "50 contacts", owner: "Sales Rep", department: "Sales", status: "todo" },
        { day: "Wed", date: "Jul 01", activity: "Publish LinkedIn Post #4 — B2B commerce trends", team: "Marketing", type: "LinkedIn Post", kpi: "Post published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jul 01", activity: "Build B2B demo environment (pricing, quotes, company accounts)", team: "Practice", type: "Demo", kpi: "Demo completed", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Thu", date: "Jul 02", activity: "Conduct 2 B2B Commerce Workshops — B2B Commerce Maturity Assessment", team: "Sales", type: "Workshop", kpi: "2 workshops", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Thu", date: "Jul 02", activity: "Shopify B2B Partner alignment — joint GTM", team: "Partnerships", type: "Partnership", kpi: "1 meeting", owner: "Partner Manager", department: "Partnerships", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Weekly KPI review — review all outcomes", team: "All Teams", type: "Review", kpi: "5 meetings booked", owner: "Practice Head", department: "All", status: "todo" },
      ],
    },
    {
      id: "wk6",
      label: "Week 6",
      title: "Shopify Practice — Week 6: Modernization & Migration",
      subtitle: "Jul 6–10, 2026  |  Campaign 6 — Is It Time to Reevaluate Your Commerce Platform?  |  Target: 5 new meetings",
      focus: [
        { team: "Marketing", text: "Migration campaign, Blog #6, LinkedIn Post: Migration Assessment Workshop targeting Adobe/SFCC/commercetools/WooCommerce." },
        { team: "Sales", text: "Outreach to Adobe Commerce, SFCC, commercetools, WooCommerce prospects." },
        { team: "Practice", text: "Finalize migration playbooks — QuickStart & Enterprise tiers." },
        { team: "Partnerships", text: "Migration-focused co-selling with Shopify Partner team." },
      ],
      tasks: [
        { day: "Mon", date: "Jul 06", activity: "Publish Blog #6: Adobe, SFCC, commercetools or WooCommerce — Is It Time to Reevaluate?", team: "Marketing", type: "Blog Post", kpi: "Blog published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Mon", date: "Jul 06", activity: "Build migration prospect list (100 — Adobe, SFCC, CT, WooCommerce)", team: "Sales", type: "Pipeline", kpi: "100 accounts", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Tue", date: "Jul 07", activity: "Launch Migration Assessment Campaign — assessment CTA", team: "Marketing", type: "Campaign", kpi: "Campaign launched", owner: "Marketing Manager", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jul 07", activity: "Personalized migration outreach (50 contacts)", team: "Sales", type: "Outreach", kpi: "50 contacts", owner: "Sales Rep", department: "Sales", status: "todo" },
        { day: "Wed", date: "Jul 08", activity: "Publish LinkedIn Post #6 — platform modernization", team: "Marketing", type: "LinkedIn Post", kpi: "Post published", owner: "Content Writer", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jul 08", activity: "Finalize migration packages — QuickStart & Enterprise tiers", team: "Practice", type: "Asset", kpi: "Packages completed", owner: "Solution Architect", department: "Practice", status: "todo" },
        { day: "Thu", date: "Jul 09", activity: "Migration assessment workshops — architecture review (2 sessions)", team: "Sales", type: "Workshop", kpi: "2 workshops", owner: "Sales Lead", department: "Sales", status: "todo" },
        { day: "Thu", date: "Jul 09", activity: "Joint Shopify migration planning session — co-selling", team: "Partnerships", type: "Partnership", kpi: "1 meeting", owner: "Partner Manager", department: "Partnerships", status: "todo" },
        { day: "Fri", date: "Jul 10", activity: "Final weekly review — opportunity tracking and 2027 planning kick-off", team: "All Teams", type: "Review", kpi: "5 meetings booked", owner: "Practice Head", department: "All", status: "todo" },
      ],
    },
  ],
  raci: {
    roles: [
      "Practice Head",
      "Solution Architect",
      "Content Writer",
      "Marketing Manager",
      "Sales Lead",
      "Sales Rep",
      "Partner Manager",
      "Designer",
      "All Teams",
    ],
    rows: [
      { deliverable: "Blog Posts", values: ["A", "C", "R", "C", "", "", "", "", "I"] },
      { deliverable: "LinkedIn Posts", values: ["I", "C", "R", "A", "", "", "", "C", "I"] },
      { deliverable: "Email Campaigns", values: ["I", "", "C", "R", "C", "", "", "", "I"] },
      { deliverable: "Target Account Lists", values: ["C", "", "", "", "R", "A", "", "", "I"] },
      { deliverable: "Prospect Outreach", values: ["I", "", "", "", "A", "R", "", "", "I"] },
      { deliverable: "Discovery Calls / Meetings", values: ["C", "C", "", "", "A", "R", "", "", "I"] },
      { deliverable: "Practice Assets (Assessments, Decks)", values: ["A", "R", "", "", "C", "", "", "", "I"] },
      { deliverable: "Demos (AI, B2B, Search)", values: ["C", "R", "", "", "C", "", "", "", "I"] },
      { deliverable: "Migration Packages", values: ["A", "R", "", "", "C", "", "", "", "I"] },
      { deliverable: "Partner Alignment Calls", values: ["C", "C", "", "", "", "", "R", "", "I"] },
      { deliverable: "Workshops", values: ["C", "C", "", "", "A", "R", "", "", "I"] },
      { deliverable: "Weekly Pipeline Reviews", values: ["A", "R", "R", "R", "R", "R", "R", "R", "R"] },
    ],
  },
};
