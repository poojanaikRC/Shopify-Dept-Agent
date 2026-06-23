import type { Metadata } from "next";
import Link from "next/link";
import { accelerators } from "@/data/accelerators";

export const metadata: Metadata = {
  title: "Shopify Practice Accelerators — Royal Cyber",
};

const ACCENT: Record<string, string> = {
  "sh-green":   "border-sh-green bg-sh-green",
  "sh-teal":    "border-sh-teal bg-sh-teal",
  "rc-blue":    "border-rc-blue bg-rc-blue",
  "rc-accent":  "border-rc-accent bg-rc-accent",
};

const BORDER: Record<string, string> = {
  "sh-green":  "border-sh-green",
  "sh-teal":   "border-sh-teal",
  "rc-blue":   "border-rc-blue",
  "rc-accent": "border-rc-accent",
};

const TEXT: Record<string, string> = {
  "sh-green":  "text-sh-green",
  "sh-teal":   "text-sh-teal",
  "rc-blue":   "text-rc-blue",
  "rc-accent": "text-rc-accent",
};

export default function AcceleratorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sh-green bg-sh-chip px-3 py-1">
        <span className="h-2 w-2 rounded-full bg-sh-green" />
        <span className="text-xs font-bold uppercase tracking-widest text-sh-green">Our Accelerators</span>
      </div>
      <h1 className="mt-3 text-3xl font-extrabold leading-tight text-sh-dark sm:text-4xl">
        Our Accelerators, Built for Customer Value
      </h1>
      <p className="mt-3 max-w-3xl text-[16px] text-sh-muted">
        Each accelerator combines Shopify capabilities with AI, integrations, and proven commerce frameworks — helping customers modernize, optimize, and unlock measurable business value.
      </p>

      {/* Cards grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {accelerators.map((acc) => (
          <Link
            key={acc.id}
            href={`/accelerators/${acc.slug}`}
            className={`group relative flex flex-col rounded-2xl border-2 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${BORDER[acc.color]}`}
          >
            {/* Number badge */}
            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${ACCENT[acc.color]} text-white shadow-sm`}>
              {acc.icon}
            </div>
            <div className={`mb-1 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>
              {acc.number}
            </div>
            <h2 className="text-[18px] font-bold text-sh-dark leading-snug">{acc.title}</h2>
            <p className="mt-3 flex-1 text-[14px] text-sh-muted leading-relaxed">{acc.tagline}</p>

            <div className="mt-4 rounded-lg bg-sh-panel p-3 border border-sh-border">
              <div className={`text-[11px] font-bold uppercase tracking-wide mb-1 ${TEXT[acc.color]}`}>Customer Value</div>
              <p className="text-[13px] text-sh-muted">{acc.customerValue}</p>
            </div>

            {/* Quarter chips */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] text-sh-muted font-medium">Quarterly 2026:</span>
              {[1,2,3,4].map(q => (
                <span key={q} className={`text-[11px] font-bold px-2 py-0.5 rounded ${acc.activeQuarters.includes(q) ? `${ACCENT[acc.color]} text-white` : "bg-[#F1F5F9] text-[#9CA3AF]"}`}>
                  Q{q}
                </span>
              ))}
            </div>

            <div className={`mt-5 flex items-center gap-1 text-sm font-semibold ${TEXT[acc.color]}`}>
              View accelerator details
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Roadmap summary table */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-sh-dark mb-1">Shopify — Roadmap Q2 and Q3</h2>
        <p className="text-sm text-sh-muted mb-5">All four accelerators mapped to value proposition, marketing activities, sales motion, and practice deliverables.</p>
        <div className="overflow-x-auto rounded-xl border border-sh-border">
          <table className="w-full border-collapse bg-white text-[13px]">
            <thead>
              <tr className="bg-sh-dark text-white text-xs">
                <th className="px-4 py-3 text-left font-semibold">Accelerator / Product</th>
                <th className="px-4 py-3 text-left font-semibold text-sh-accent">Value Proposition</th>
                <th className="px-4 py-3 text-left font-semibold text-sh-accent">Marketing Activities</th>
                <th className="px-4 py-3 text-left font-semibold text-sh-accent">Sales Motion</th>
                <th className="px-4 py-3 text-left font-semibold text-sh-accent">Practice Deliverables</th>
              </tr>
            </thead>
            <tbody>
              {accelerators.map((acc, i) => (
                <tr key={acc.id} className={i % 2 === 0 ? "bg-white" : "bg-sh-light"}>
                  <td className="border-t border-sh-border px-4 py-3 font-semibold text-sh-dark align-top">
                    <Link href={`/accelerators/${acc.slug}`} className={`hover:underline ${TEXT[acc.color]}`}>
                      {acc.title}
                    </Link>
                  </td>
                  <td className="border-t border-sh-border px-4 py-3 text-sh-muted align-top">{acc.roadmap.valueProp}</td>
                  <td className="border-t border-sh-border px-4 py-3 text-sh-muted align-top">
                    <ul className="space-y-0.5">
                      {acc.roadmap.marketingActivities.map((m, j) => <li key={j}>• {m}</li>)}
                    </ul>
                  </td>
                  <td className="border-t border-sh-border px-4 py-3 text-sh-muted align-top">
                    <ul className="space-y-0.5">
                      {acc.roadmap.salesMotion.map((s, j) => <li key={j}>• {s}</li>)}
                    </ul>
                  </td>
                  <td className="border-t border-sh-border px-4 py-3 text-sh-muted align-top">
                    <ul className="space-y-0.5">
                      {acc.roadmap.practiceDeliverables.map((d, j) => <li key={j}>• {d}</li>)}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
