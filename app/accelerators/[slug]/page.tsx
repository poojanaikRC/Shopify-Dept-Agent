import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accelerators } from "@/data/accelerators";

export function generateStaticParams() {
  return accelerators.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const acc = accelerators.find((a) => a.slug === params.slug);
  if (!acc) return {};
  return { title: `${acc.title} — Royal Cyber Shopify Practice` };
}

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
  "sh-green":  "bg-sh-chip border-sh-border",
  "sh-teal":   "bg-[#F0FDFA] border-[#99F6E4]",
  "rc-blue":   "bg-[#EFF6FF] border-[#BFDBFE]",
  "rc-accent": "bg-[#FFF7ED] border-[#FED7AA]",
};

const STEP_ICONS: Record<string, string> = {
  "01": "📋",
  "02": "💼",
  "03": "🤝",
  "04": "🚀",
};

export default function AcceleratorPage({ params }: { params: { slug: string } }) {
  const acc = accelerators.find((a) => a.slug === params.slug);
  if (!acc) notFound();

  const others = accelerators.filter((a) => a.slug !== params.slug);

  return (
    <div>
      {/* Hero */}
      <div className={`${ACCENT_BG[acc.color]} text-white`}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link href="/accelerators" className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition">
            ← Back to all accelerators
          </Link>
          <div className="flex items-start gap-5 mt-2">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl">
              {acc.icon}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-1">
                Accelerator {acc.number}
              </div>
              <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">{acc.title}</h1>
              <p className="mt-2 max-w-2xl text-base text-white/80">{acc.tagline}</p>
            </div>
          </div>
          {/* Quarter strip */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm text-white/70 font-medium">Quarterly 2026:</span>
            {[1,2,3,4].map(q => (
              <span key={q} className={`px-3 py-1 rounded-full text-sm font-bold transition ${acc.activeQuarters.includes(q) ? "bg-white text-sh-dark" : "bg-white/15 text-white/50"}`}>
                Q{q}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Overview */}
        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-sh-dark mb-3">Overview</h2>
            <p className="text-[15px] text-sh-muted leading-relaxed">{acc.description}</p>
          </div>
          <div className={`rounded-xl border-2 p-5 ${ACCENT_LIGHT[acc.color]} ${ACCENT_BORDER[acc.color]}`}>
            <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${ACCENT_TEXT[acc.color]}`}>Customer Value</div>
            <p className="text-[14px] text-sh-dark font-medium leading-relaxed">{acc.customerValue}</p>
          </div>
        </div>

        {/* Process Flow */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-sh-dark mb-6">Process Flow</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {acc.processSteps.map((step, i) => (
              <div key={i} className="relative rounded-xl border border-sh-border bg-white p-5 shadow-sm">
                {/* Arrow connector (not on last) */}
                {i < acc.processSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full ${ACCENT_BG[acc.color]} text-white text-xs font-bold`}>›</div>
                  </div>
                )}
                <div className={`mb-3 flex items-center gap-2`}>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white ${ACCENT_BG[acc.color]}`}>
                    {step.number}
                  </span>
                  <span className="text-sm">{STEP_ICONS[step.number]}</span>
                </div>
                <h3 className="font-bold text-sh-dark text-[14px] mb-3">{step.title}</h3>
                <ul className="space-y-1.5">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] text-sh-muted">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${ACCENT_BG[acc.color]}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap detail */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-sh-dark mb-6">Roadmap Detail — Q2 &amp; Q3 2026</h2>
          <div className={`rounded-xl border-2 ${ACCENT_BORDER[acc.color]} overflow-hidden`}>
            <div className={`${ACCENT_BG[acc.color]} px-6 py-4`}>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Value Proposition</div>
              <p className="text-white font-semibold text-[15px]">{acc.roadmap.valueProp}</p>
            </div>
            <div className="grid gap-0 sm:grid-cols-3 bg-white">
              {[
                { label: "Marketing Activities", items: acc.roadmap.marketingActivities, icon: "📣" },
                { label: "Sales Motion",          items: acc.roadmap.salesMotion,         icon: "💼" },
                { label: "Practice Deliverables", items: acc.roadmap.practiceDeliverables, icon: "📦" },
              ].map((col, i) => (
                <div key={i} className={`p-5 ${i < 2 ? "border-r border-sh-border" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span>{col.icon}</span>
                    <span className={`text-xs font-bold uppercase tracking-wide ${ACCENT_TEXT[acc.color]}`}>{col.label}</span>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] text-sh-muted">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${ACCENT_BG[acc.color]}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other accelerators */}
        <section>
          <h2 className="text-xl font-bold text-sh-dark mb-5">Explore Other Accelerators</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.id}
                href={`/accelerators/${o.slug}`}
                className={`group rounded-xl border-2 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md ${ACCENT_BORDER[o.color]}`}
              >
                <div className="text-2xl mb-2">{o.icon}</div>
                <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${ACCENT_TEXT[o.color]}`}>{o.number}</div>
                <h3 className="font-bold text-sh-dark text-[14px] leading-snug">{o.title}</h3>
                <p className="mt-1.5 text-[12px] text-sh-muted line-clamp-2">{o.tagline}</p>
                <div className={`mt-3 text-sm font-semibold ${ACCENT_TEXT[o.color]} flex items-center gap-1`}>
                  View <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
