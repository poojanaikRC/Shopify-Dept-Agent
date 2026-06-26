import type { Metadata } from "next";
import { weeklyPlan } from "@/data/weeklyPlan";
import WeeklyPlanTabs from "@/components/WeeklyPlanTabs";

export const metadata: Metadata = {
  title: "Shopify Practice Quarterly Plan — Royal Cyber",
};

export default function WeeklyPlanPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
          Royal Cyber · Shopify Practice
        </p>
        <h1 className="mt-1 text-2xl font-extrabold text-sh-dark">
          {weeklyPlan.org} — Shopify Practice Quarterly Plan
        </h1>
        <p className="mt-1 text-sm text-sh-muted">
          Generated: {weeklyPlan.generated} · {weeklyPlan.weeks.length} accelerator plans · Q3–Q4 2026 execution
        </p>
      </div>
      <WeeklyPlanTabs plan={weeklyPlan} />
    </div>
  );
}
