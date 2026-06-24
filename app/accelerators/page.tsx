import type { Metadata } from "next";
import Link from "next/link";
import { accelerators } from "@/data/accelerators";

export const metadata: Metadata = {
  title: "Shopify Practice Accelerators — Royal Cyber",
};

const ACCENT_BG: Record<string, string> = {
  "sh-green":  "bg-sh-green",
  "sh-teal":   "bg-sh-teal",
  "rc-blue":   "bg-rc-blue",
  "rc-accent": "bg-rc-accent",
};
const ACCENT_TEXT: Record<string, string> = {
  "sh-green":  "text-sh-green",
  "sh-teal":   "text-sh-teal",
  "rc-blue":   "text-rc-blue",
  "rc-accent": "text-rc-accent",
};
const ACCENT_BORDER: Record<string, string> = {
  "sh-green":  "border-sh-green",
  "sh-teal":   "border-sh-teal",
  "rc-blue":   "border-rc-blue",
  "rc-accent": "border-rc-accent",
};
const ACCENT_LIGHT: Record<string, string> = {
  "sh-green":  "bg-sh-chip",
  "sh-teal":   "bg-[#F0FDFA]",
  "rc-blue":   "bg-[#EFF6FF]",
  "rc-accent": "bg-[#FFF7ED]",
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
        Each accelerator combines Shopify capabilities with AI, integrations, and proven commerce frameworks — helping customers modernize, optimize, and unlock measurable business value. Click any accelerator to see the full breakdown.
      </p>

      {/* Cards */}
      <div className="mt-10 grid gap-7 sm:grid-cols-2">
        {accelerators.map((acc) => (
          <Link
            key={acc.id}
            href={`/accelerators/${acc.slug}`}
            className={`group flex flex-col rounded-2xl border-2 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${ACCENT_BORDER[acc.color]}`}
          >
            {/* Card top strip */}
            <div className={`flex items-center gap-4 rounded-t-2xl px-6 py-5 ${ACCENT_LIGHT[acc.color]}`}>
              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-2xl ${ACCENT_BG[acc.color]} text-white shadow-sm`}>
                {acc.icon}
              </div>
              <div>
                <div className={`text-[11px] font-bold uppercase tracking-widest ${ACCENT_TEXT[acc.color]}`}>
                  Accelerator {acc.number}
                </div>
                <h2 className="text-[17px] font-bold leading-snug text-sh-dark">{acc.title}</h2>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-4 px-6 py-5">
              {/* Tagline */}
              <p className="text-[14px] font-medium leading-relaxed text-sh-dark">{acc.tagline}</p>

              {/* Problem solved */}
              <div>
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-sh-muted">Problem it solves</div>
                <p className="line-clamp-3 text-[13px] leading-relaxed text-sh-muted">{acc.problemStatement}</p>
              </div>

              {/* Outcomes row */}
              <div className="grid grid-cols-2 gap-2">
                {acc.outcomes.slice(0, 2).map((o, i) => (
                  <div key={i} className={`rounded-lg border p-3 ${ACCENT_LIGHT[acc.color]} ${ACCENT_BORDER[acc.color]}`}>
                    <div className={`text-lg font-extrabold ${ACCENT_TEXT[acc.color]}`}>{o.metric}</div>
                    <div className="text-[11px] text-sh-muted">{o.label}</div>
                  </div>
                ))}
              </div>

              {/* Ideal for */}
              <div>
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-sh-muted">Ideal for</div>
                <ul className="space-y-1">
                  {acc.idealFor.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-sh-muted">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${ACCENT_BG[acc.color]}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <span className={`flex items-center gap-1 text-sm font-semibold ${ACCENT_TEXT[acc.color]}`}>
                  Full details <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Roadmap table */}
      <section className="mt-14">
        <h2 className="mb-1 text-xl font-bold text-sh-dark">Shopify Practice Roadmap — Q2 &amp; Q3 2026</h2>
        <p className="mb-6 text-sm text-sh-muted">How all four accelerators map to marketing activities, sales motions, and practice deliverables.</p>
        <div className="overflow-x-auto rounded-xl border border-sh-border">
          <table className="w-full border-collapse bg-white text-[13px]">
            <thead>
              <tr className="bg-sh-dark text-left text-xs text-white">
                <th className="px-4 py-3 font-semibold">Accelerator</th>
                <th className="px-4 py-3 font-semibold">Value Proposition</th>
                <th className="px-4 py-3 font-semibold">Marketing Activities</th>
                <th className="px-4 py-3 font-semibold">Sales Motion</th>
                <th className="px-4 py-3 font-semibold">Practice Deliverables</th>
              </tr>
            </thead>
            <tbody>
              {accelerators.map((acc, i) => (
                <tr key={acc.id} className="odd:bg-white even:bg-sh-light align-top">
                  <td className="border-t border-sh-border px-4 py-3">
                    <Link href={`/accelerators/${acc.slug}`} className={`font-semibold hover:underline ${ACCENT_TEXT[acc.color]}`}>
                      {acc.title}
                    </Link>
                  </td>
                  <td className="border-t border-sh-border px-4 py-3 text-sh-muted">{acc.tagline}</td>
                  <td className="border-t border-sh-border px-4 py-3">
                    <ul className="space-y-1 text-sh-muted">
                      {acc.gtm.marketing.slice(0, 2).map((m, j) => <li key={j} className="flex items-start gap-1.5"><span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${ACCENT_BG[acc.color]}`}/>{m}</li>)}
                    </ul>
                  </td>
                  <td className="border-t border-sh-border px-4 py-3">
                    <ul className="space-y-1 text-sh-muted">
                      {acc.gtm.sales.slice(0, 2).map((s, j) => <li key={j} className="flex items-start gap-1.5"><span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${ACCENT_BG[acc.color]}`}/>{s}</li>)}
                    </ul>
                  </td>
                  <td className="border-t border-sh-border px-4 py-3">
                    <ul className="space-y-1 text-sh-muted">
                      {acc.whatsIncluded[0]?.deliverables.slice(0, 2).map((d, j) => <li key={j} className="flex items-start gap-1.5"><span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${ACCENT_BG[acc.color]}`}/>{d}</li>)}
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
