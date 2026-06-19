# Royal Cyber — Shopify Practice Insights

Agent-powered GTM intelligence and weekly execution planning for the Royal Cyber Shopify Practice.

## What this is

Two agents in one dashboard:

1. **Shopify Department Agent** (`/newsletter`) — weekly intelligence sweep covering Shopify ecosystem trends, release updates, competitive insights, blog opportunities, and recommended immediate actions.

2. **Shopify Weekly Plan Agent** (`/weekly-plan`) — 6-week GTM execution plan (Jun–Jul 2026) covering Migration Accelerator, Growth Assessment, AI Commerce, Search & Discovery, Shopify B2B, and Platform Modernization. Includes daily tasks with owners, team focus areas, and a full RACI matrix.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (Shopify green brand system)
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Refreshing the data

- **Weekly Plan**: update `data/weeklyPlan.ts` — swap in the agent's latest output
- **Intelligence Report**: update `data/report.ts` — swap in the department agent's latest run

Both files are fully typed. The UI updates automatically when data changes.

## Structure

```
app/
  page.tsx              — Dashboard home
  weekly-plan/page.tsx  — 6-week execution plan
  newsletter/page.tsx   — Intelligence report
components/
  SiteHeader.tsx
  SiteFooter.tsx
  WeeklyPlanTabs.tsx    — Tab UI with RACI matrix
  badges.tsx            — Status + type badges
data/
  weeklyPlan.ts         — Weekly plan data (replace to refresh)
  report.ts             — Intelligence report data (replace to refresh)
```
