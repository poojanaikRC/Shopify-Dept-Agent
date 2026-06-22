import Link from "next/link";
import { report } from "@/data/report";
import { weeklyPlan } from "@/data/weeklyPlan";

export default function HomePage() {
  const totalTasks = weeklyPlan.weeks.reduce((n, w) => n + w.tasks.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
          Royal Cyber · Shopify Practice
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-sh-dark sm:text-4xl">
          Shopify Practice Insights Dashboard
        </h1>
        <p className="mt-3 max-w-3xl text-[17px] text-sh-muted">
          A single home for what our Shopify Practice agents produce each week — the
          Department Agent&apos;s GTM intelligence sweep, and the rolling
          six-week execution plan. Pick an agent to dive in.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Link
          href="/newsletter"
          className="group rounded-2xl border border-sh-dark bg-gradient-to-br from-sh-dark to-sh-green p-7 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-sh-accent">
            Shopify Department Agent · Weekly Sweep
          </div>
          <h2 className="mt-2 text-2xl font-bold">{report.title}</h2>
          <p className="mt-3 line-clamp-4 text-sm text-white/70">{report.sub}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
            <span><b className="text-white">{report.trends.length}</b> trends</span>
            <span><b className="text-white">{report.blogs.length}</b> blog ideas</span>
            <span><b className="text-white">{report.releases.length}</b> releases</span>
            <span><b className="text-white">{report.roadmap.length}</b> roadmaps</span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sh-accent">
            Open newsletter
            <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link
          href="/weekly-plan"
          className="group rounded-2xl border border-sh-border bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
            {weeklyPlan.org} · Weekly Plan Agent
          </div>
          <h2 className="mt-2 text-2xl font-bold text-sh-dark">
            Shopify Practice Weekly Plan
          </h2>
          <p className="mt-3 text-sm text-sh-muted">
            A {weeklyPlan.weeks.length}-week execution plan covering Migration, AI Commerce, B2B, Search &amp; Discovery, and Platform Modernization — broken into team focus areas, day-by-day tasks with owners, and a RACI matrix.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-sh-muted">
            <span><b className="text-sh-dark">{weeklyPlan.weeks.length}</b> weeks</span>
            <span><b className="text-sh-dark">{totalTasks}</b> tasks</span>
            <span><b className="text-sh-dark">{weeklyPlan.raci.rows.length}</b> RACI rows</span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sh-green">
            Open weekly plan
            <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>
      </section>

      <section className="mt-10 rounded-xl border border-sh-border bg-white p-6">
        <div className="grid gap-4 sm:grid-cols-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-sh-muted">Target Meetings</div>
            <div className="mt-1 text-2xl font-extrabold text-sh-green">10</div>
            <div className="text-xs text-sh-muted">Jul–Dec 2026</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-sh-muted">Campaigns</div>
            <div className="mt-1 text-2xl font-extrabold text-sh-green">6</div>
            <div className="text-xs text-sh-muted">Active GTM campaigns</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-sh-muted">Packaged Offers</div>
            <div className="mt-1 text-2xl font-extrabold text-sh-green">5</div>
            <div className="text-xs text-sh-muted">Assessment + migration packages</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-sh-muted">Last Updated</div>
            <div className="mt-1 text-lg font-bold text-sh-dark">{report.generated}</div>
            <div className="text-xs text-sh-muted">Plan: {weeklyPlan.generated}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
