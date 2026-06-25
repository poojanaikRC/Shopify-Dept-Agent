import type { Metadata } from "next";
import Link from "next/link";
import { accelerators, type AcceleratorStatus } from "@/data/accelerators";

export const metadata: Metadata = {
  title: "Shopify Practice Accelerators — Royal Cyber",
};

const STATUS_STYLE: Record<AcceleratorStatus, { bg: string; text: string; dot: string }> = {
  "In Progress":   { bg: "bg-[#D1FAE5]", text: "text-[#065F46]", dot: "bg-[#10B981]" },
  "In Evaluation": { bg: "bg-[#FEF3C7]", text: "text-[#92400E]", dot: "bg-[#F59E0B]" },
  "Enablement":    { bg: "bg-[#DBEAFE]", text: "text-[#1E40AF]", dot: "bg-[#3B82F6]" },
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
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className={`text-[11px] font-bold uppercase tracking-widest ${ACCENT_TEXT[acc.color]}`}>
                    Accelerator {acc.number}
                  </div>
                  {acc.id === "b2b-subscriptions" && (
                    <span className="rounded-full bg-rc-blue px-2.5 py-0.5 text-[10px] font-bold text-white">
                      🛍 App Store
                    </span>
                  )}

                </div>
                <h2 className="text-[17px] font-bold leading-snug text-sh-dark">{acc.title}</h2>
                <div className="mt-1.5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_STYLE[acc.status].bg} ${STATUS_STYLE[acc.status].text}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${STATUS_STYLE[acc.status].dot}`} />
                    {acc.status}
                  </span>
                </div>
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

      {/* Why Royal Cyber for Shopify */}
      <section className="mt-14">
        <div className="mb-1 text-xs font-bold uppercase tracking-widest text-sh-green">Why Royal Cyber</div>
        <h2 className="mb-2 text-xl font-bold text-sh-dark">Your Shopify Plus Partner for Commerce Excellence</h2>
        <p className="mb-8 max-w-3xl text-sm text-sh-muted">
          Royal Cyber is a Shopify Plus Partner with deep expertise across migrations, B2B commerce, AI-powered discovery, and platform growth. We bring pre-built accelerators, proven delivery frameworks, and a dedicated Shopify practice — so your project moves faster and lands better.
        </p>

        {/* Credential cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {[
            { icon: "🏅", label: "Shopify Plus Partner", desc: "Certified Shopify Plus Partner with access to co-sell, early roadmap, and partner support channels." },
            { icon: "🚀", label: "Pre-Built Accelerators", desc: "4 production-ready accelerators covering migration, B2B, AI commerce, and growth assessment." },
            { icon: "🔁", label: "End-to-End Delivery", desc: "Strategy, solution design, build, integrations, QA, launch, and hypercare — all under one roof." },
            { icon: "🤝", label: "ERP & AI Ecosystem", desc: "Certified integrations with NetSuite, SAP, Dynamics, Algolia, Google Vertex AI, and Shopify Markets." },
          ].map((c, i) => (
            <div key={i} className="rounded-xl border border-sh-border bg-white p-5 shadow-sm">
              <div className="mb-3 text-2xl">{c.icon}</div>
              <div className="mb-1.5 font-bold text-sh-dark text-[14px]">{c.label}</div>
              <p className="text-[13px] leading-relaxed text-sh-muted">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Expertise areas */}
        <div className="rounded-2xl border border-sh-border bg-white p-6 mb-10">
          <div className="mb-4 text-sm font-bold text-sh-dark">Shopify Practice Expertise Areas</div>
          <div className="flex flex-wrap gap-2">
            {[
              "Shopify Plus Implementations","Commerce Modernization & Migration","Shopify B2B Commerce",
              "AI-Powered Search & Discovery","Headless Commerce (Hydrogen + Oxygen)","Shopify Markets & Cross-Border",
              "Checkout Extensibility","ERP & PIM Integrations","Managed Services & Optimisation",
              "Shopify POS & Unified Commerce","Performance & Core Web Vitals","Shopify Functions & Custom Logic",
            ].map((tag, i) => (
              <span key={i} className="rounded-full border border-sh-border bg-sh-chip px-3 py-1.5 text-[12px] font-medium text-sh-dark">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="rounded-2xl bg-gradient-to-r from-sh-dark to-sh-green p-8 text-white">
          <div className="mb-6">
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-white/70">Ready to get started?</div>
            <h3 className="text-xl font-extrabold">Book a free accelerator discovery call</h3>
            <p className="mt-1.5 max-w-2xl text-sm text-white/75">
              Every engagement starts with a no-cost assessment. Pick the accelerator that fits your challenge and we&apos;ll scope it with you in a single 60-minute session.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {accelerators.map((acc) => (
              <Link
                key={acc.id}
                href={`/accelerators/${acc.slug}`}
                className="whitespace-nowrap rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                {acc.icon} {acc.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
