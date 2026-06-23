import Link from "next/link";
import { report } from "@/data/report";
import { weeklyPlan } from "@/data/weeklyPlan";
import { accelerators } from "@/data/accelerators";

export default function HomePage() {
  const totalTasks = weeklyPlan.weeks.reduce((n, w) => n + w.tasks.length, 0);

  const ACCENT_TEXT: Record<string, string> = {
    "sh-green":  "text-sh-green",
    "sh-teal":   "text-sh-teal",
    "rc-blue":   "text-rc-blue",
    "rc-accent": "text-rc-accent",
  };
  const ACCENT_BG: Record<string, string> = {
    "sh-green":  "bg-sh-green",
    "sh-teal":   "bg-sh-teal",
    "rc-blue":   "bg-rc-blue",
    "rc-accent": "bg-rc-accent",
  };
  const ACCENT_BORDER: Record<string, string> = {
    "sh-green":  "border-sh-green",
    "sh-teal":   "border-sh-teal",
    "rc-blue":   "border-rc-blue",
    "rc-accent": "border-rc-accent",
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Hero */}
      <section className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
          Royal Cyber · Shopify Practice
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-sh-dark sm:text-4xl">
          Shopify Practice Insights Dashboard
        </h1>
        <p className="mt-3 max-w-3xl text-[17px] text-sh-muted">
          A single home for what our Shopify Practice agents produce — GTM intelligence, the 6-week execution plan, and our four accelerators.
        </p>
      </section>

      {/* Agent cards */}
      <section className="grid gap-6 md:grid-cols-2 mb-10">
        <Link href="/newsletter"
          className="group rounded-2xl border border-sh-dark bg-gradient-to-br from-sh-dark to-sh-green p-7 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-sh-accent">Shopify Department Agent · Weekly Sweep</div>
          <h2 className="mt-2 text-2xl font-bold">{report.title}</h2>
          <p className="mt-3 line-clamp-3 text-sm text-white/70">{report.sub}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
            <span><b className="text-white">{report.trends.length}</b> trends</span>
            <span><b className="text-white">{report.blogs.length}</b> blog ideas</span>
            <span><b className="text-white">{report.releases.length}</b> releases</span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sh-accent">
            Open newsletter <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link href="/weekly-plan"
          className="group rounded-2xl border border-sh-border bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">{weeklyPlan.org} · Weekly Plan Agent</div>
          <h2 className="mt-2 text-2xl font-bold text-sh-dark">Shopify Practice Weekly Plan</h2>
          <p className="mt-3 text-sm text-sh-muted">
            A {weeklyPlan.weeks.length}-week execution plan covering Migration, AI Commerce, B2B, Search &amp; Discovery, and Platform Modernization.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-sh-muted">
            <span><b className="text-sh-dark">{weeklyPlan.weeks.length}</b> weeks</span>
            <span><b className="text-sh-dark">{totalTasks}</b> tasks</span>
            <span><b className="text-sh-dark">{weeklyPlan.raci.rows.length}</b> RACI rows</span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sh-green">
            Open weekly plan <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>
      </section>

      {/* Accelerators section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-sh-green bg-sh-chip px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-sh-green" />
              <span className="text-xs font-bold uppercase tracking-widest text-sh-green">Our Accelerators</span>
            </div>
            <h2 className="text-2xl font-extrabold text-sh-dark">Accelerators, Built for Customer Value</h2>
          </div>
          <Link href="/accelerators" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-sh-green hover:underline">
            View all <span>→</span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {accelerators.map((acc) => (
            <Link key={acc.id} href={`/accelerators/${acc.slug}`}
              className={`group flex flex-col rounded-xl border-2 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${ACCENT_BORDER[acc.color]}`}>
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-xl ${ACCENT_BG[acc.color]} text-white`}>
                {acc.icon}
              </div>
              <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${ACCENT_TEXT[acc.color]}`}>{acc.number}</div>
              <h3 className="font-bold text-sh-dark text-[14px] leading-snug mb-2">{acc.title}</h3>
              <p className="text-[12px] text-sh-muted flex-1 line-clamp-3">{acc.tagline}</p>
              <div className={`mt-3 pt-3 border-t border-sh-border text-[11px] text-sh-muted`}>
                <span className={`font-semibold ${ACCENT_TEXT[acc.color]}`}>Customer value: </span>
                {acc.customerValue}
              </div>
              <div className={`mt-3 flex items-center gap-1 text-xs font-semibold ${ACCENT_TEXT[acc.color]}`}>
                View details <span className="transition group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KPI strip */}
      <section className="rounded-xl border border-sh-border bg-white p-6">
        <div className="grid gap-4 sm:grid-cols-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-sh-muted">Target Meetings</div>
            <div className="mt-1 text-2xl font-extrabold text-sh-green">10</div>
            <div className="text-xs text-sh-muted">Jul–Dec 2026</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-sh-muted">Accelerators</div>
            <div className="mt-1 text-2xl font-extrabold text-sh-green">{accelerators.length}</div>
            <div className="text-xs text-sh-muted">Migration, B2B, AI, Growth</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-sh-muted">Campaigns</div>
            <div className="mt-1 text-2xl font-extrabold text-sh-green">6</div>
            <div className="text-xs text-sh-muted">Active GTM campaigns</div>
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
