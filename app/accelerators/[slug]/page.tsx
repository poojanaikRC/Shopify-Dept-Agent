import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accelerators, type AcceleratorStatus } from "@/data/accelerators";

export function generateStaticParams() {
  return accelerators.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const acc = accelerators.find((a) => a.slug === params.slug);
  if (!acc) return {};
  return { title: `${acc.title} — Royal Cyber Shopify Practice` };
}

const BG: Record<string, string>     = { "sh-green":"bg-sh-green", "sh-teal":"bg-sh-teal", "rc-blue":"bg-rc-blue", "rc-accent":"bg-rc-accent" };
const TEXT: Record<string, string>   = { "sh-green":"text-sh-green", "sh-teal":"text-sh-teal", "rc-blue":"text-rc-blue", "rc-accent":"text-rc-accent" };
const BORDER: Record<string, string> = { "sh-green":"border-sh-green", "sh-teal":"border-sh-teal", "rc-blue":"border-rc-blue", "rc-accent":"border-rc-accent" };
const LIGHT: Record<string, string>  = { "sh-green":"bg-sh-chip border-sh-border", "sh-teal":"bg-[#F0FDFA] border-[#99F6E4]", "rc-blue":"bg-[#EFF6FF] border-[#BFDBFE]", "rc-accent":"bg-[#FFF7ED] border-[#FED7AA]" };

const STATUS_STYLE: Record<AcceleratorStatus, { bg: string; text: string; dot: string }> = {
  "In Progress":   { bg: "bg-white/20", text: "text-white", dot: "bg-[#10B981]" },
  "In Evaluation": { bg: "bg-[#FEF3C7]", text: "text-[#92400E]", dot: "bg-[#F59E0B]" },
  "Enablement":    { bg: "bg-[#DBEAFE]", text: "text-[#1E40AF]", dot: "bg-[#3B82F6]" },
};

export default function AcceleratorPage({ params }: { params: { slug: string } }) {
  const acc = accelerators.find((a) => a.slug === params.slug);
  if (!acc) notFound();
  const others = accelerators.filter((a) => a.slug !== acc.slug);

  return (
    <div>
      {/* ── HERO ── */}
      <div className={`${BG[acc.color]} text-white`}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link href="/accelerators" className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white">
            ← All accelerators
          </Link>
          <div className="mt-2 flex items-start gap-5">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl">
              {acc.icon}
            </div>
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Accelerator {acc.number}
              </div>
              <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">{acc.title}</h1>
              <p className="mt-2 max-w-2xl text-[15px] text-white/85 font-medium">{acc.tagline}</p>
              {acc.id === "b2b-subscriptions" && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">🛍 Shopify App Store listing</span>
                  <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-bold text-[#92400E]">Coming Q4 2026</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">Beta partners open now</span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold ${STATUS_STYLE[acc.status].bg} ${STATUS_STYLE[acc.status].text}`}>
              <span className={`h-2 w-2 rounded-full ${STATUS_STYLE[acc.status].dot}`} />
              {acc.status}
            </span>
            <span className="text-sm text-white/50">·</span>
            <span className="text-sm text-white/70 font-medium">Active in 2026:</span>
            {[1,2,3,4].map(q => (
              <span key={q} className={`rounded-full px-3 py-1 text-sm font-bold ${acc.activeQuarters.includes(q) ? "bg-white text-sh-dark" : "bg-white/15 text-white/40"}`}>
                Q{q}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 space-y-14">

        {/* ── 1. THE PROBLEM ── */}
        <section>
          <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>The Problem</div>
          <h2 className="mb-4 text-xl font-bold text-sh-dark">Market Problem</h2>
          <div className={`rounded-2xl border-2 p-6 ${BORDER[acc.color]} ${LIGHT[acc.color]}`}>
            <p className="text-[15px] leading-relaxed text-sh-dark">{acc.problemStatement}</p>
          </div>
        </section>

        {/* ── 2. THE SOLUTION ── */}
        <section>
          <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>The Solution</div>
          <h2 className="mb-4 text-xl font-bold text-sh-dark">How we solve it</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-[15px] leading-relaxed text-sh-muted">{acc.solution}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-sh-muted">{acc.description}</p>
            </div>
            <div className={`rounded-xl border-2 p-5 ${BORDER[acc.color]} ${LIGHT[acc.color]}`}>
              <div className={`mb-3 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>Customer Value</div>
              <p className="text-[14px] font-semibold leading-relaxed text-sh-dark">{acc.customerValue}</p>
            </div>
          </div>
        </section>

        {/* ── 3. OUTCOMES ── */}
        <section>
          <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>Measurable Outcomes</div>
          <h2 className="mb-5 text-xl font-bold text-sh-dark">What you can expect</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {acc.outcomes.map((o, i) => (
              <div key={i} className={`rounded-xl border-2 p-5 text-center ${BORDER[acc.color]} ${LIGHT[acc.color]}`}>
                <div className={`text-2xl font-extrabold ${TEXT[acc.color]}`}>{o.metric}</div>
                <div className="mt-1 text-[12px] leading-snug text-sh-muted">{o.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. IDEAL FOR ── */}
        <section>
          <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>Who It's For</div>
          <h2 className="mb-5 text-xl font-bold text-sh-dark">Is this accelerator right for you?</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {acc.idealFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-sh-border bg-white p-4">
                <div className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${BG[acc.color]}`}>
                  ✓
                </div>
                <p className="text-[14px] leading-relaxed text-sh-dark">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. WHAT'S INCLUDED ── */}
        <section>
          <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>What's Included</div>
          <h2 className="mb-5 text-xl font-bold text-sh-dark">Deliverables — phase by phase</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {acc.whatsIncluded.map((phase, i) => (
              <div key={i} className="rounded-xl border border-sh-border bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${BG[acc.color]}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-sh-dark">{phase.phase}</h3>
                </div>
                <ul className="space-y-2.5">
                  {phase.deliverables.map((d, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-sh-muted">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${BG[acc.color]}`} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. GO-TO-MARKET ── */}
        <section>
          <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>Go-to-Market</div>
          <h2 className="mb-5 text-xl font-bold text-sh-dark">How we bring this to market</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { label: "Marketing", icon: "📣", items: acc.gtm.marketing },
              { label: "Sales Motion", icon: "💼", items: acc.gtm.sales },
              { label: "Partners Involved", icon: "🤝", items: acc.gtm.partners },
            ].map((col, i) => (
              <div key={i} className="rounded-xl border border-sh-border bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg">{col.icon}</span>
                  <span className={`text-xs font-bold uppercase tracking-wide ${TEXT[acc.color]}`}>{col.label}</span>
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] leading-relaxed text-sh-muted">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${BG[acc.color]}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. ROADMAP FOCUS ── */}
        <section>
          <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${TEXT[acc.color]}`}>2026 Roadmap Focus</div>
          <h2 className="mb-5 text-xl font-bold text-sh-dark">Quarter-by-quarter milestones</h2>
          <div className="relative flex flex-col gap-0">
            {acc.roadmapFocus.map((r, i) => (
              <div key={i} className="flex items-start gap-5">
                {/* Timeline spine */}
                <div className="flex flex-col items-center">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white ${BG[acc.color]}`}>
                    {r.quarter}
                  </div>
                  {i < acc.roadmapFocus.length - 1 && (
                    <div className={`my-1 w-0.5 flex-1 ${BG[acc.color]} opacity-30`} style={{height:"32px"}} />
                  )}
                </div>
                <div className={`mb-4 flex-1 rounded-xl border p-4 ${LIGHT[acc.color]} ${BORDER[acc.color]}`}>
                  <div className={`mb-1 text-xs font-bold uppercase tracking-wide ${TEXT[acc.color]}`}>{r.theme}</div>
                  <p className="text-[14px] leading-relaxed text-sh-dark">{r.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── OTHER ACCELERATORS ── */}
        <section>
          <h2 className="mb-5 text-xl font-bold text-sh-dark">Explore Other Accelerators</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.id} href={`/accelerators/${o.slug}`}
                className={`group rounded-xl border-2 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md ${BORDER[o.color]}`}>
                <div className="mb-2 text-2xl">{o.icon}</div>
                <div className={`mb-1 text-xs font-bold uppercase tracking-wide ${TEXT[o.color]}`}>{o.number}</div>
                <h3 className="font-bold text-sh-dark text-[14px] leading-snug">{o.title}</h3>
                <p className="mt-1.5 text-[12px] text-sh-muted line-clamp-2">{o.tagline}</p>
                <div className={`mt-3 flex items-center gap-1 text-sm font-semibold ${TEXT[o.color]}`}>
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
