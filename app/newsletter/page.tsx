import type { Metadata } from "next";
import { report, type FlagKind } from "@/data/report";

export const metadata: Metadata = {
  title: "Shopify Practice Intelligence Report — Royal Cyber",
};

const FLAG_CLASS: Record<FlagKind, string> = {
  ai:  "border-[#1E40AF] text-[#BFDBFE]",
  ent: "border-[#065F46] text-[#A7F3D0]",
  gap: "border-[#92400E] text-[#FDE68A]",
};

function Section({ n, title, intro, children }: { n: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section className="my-9">
      <h2 className="text-[19px] font-semibold tracking-tight">
        <span className="mr-2 font-semibold text-sh-accent">{n}</span>
        {title}
      </h2>
      {intro ? (
        <p className="mb-4 mt-1 max-w-3xl text-[13.5px] text-white/60">{intro}</p>
      ) : (
        <div className="mb-2" />
      )}
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-2xl border border-sh-line bg-sh-panel p-5">
      {children}
    </div>
  );
}

function Scores({ items }: { items: { label: string; pri?: boolean }[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {items.map((s, i) => (
        <span key={i} className={`rounded-md border px-2.5 py-1 text-[11.5px] ${s.pri ? "border-sh-green bg-sh-green font-semibold text-white" : "border-sh-border bg-sh-chip text-sh-muted"}`}>
          {s.label}
        </span>
      ))}
    </div>
  );
}

const TH = "px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-sh-accent";
const TD = "border-b border-sh-line px-3 py-2.5 align-top";

export default function ReportPage() {
  return (
    <div className="bg-gradient-to-b from-sh-dark to-[#003D30]">
      <div className="mx-auto max-w-5xl px-6 py-10 text-white">
        <header className="mb-7 border-b border-white/10 pb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-sh-accent">Royal Cyber · Shopify Practice Intelligence</p>
          <h1 className="text-[27px] font-bold tracking-tight">{report.title}</h1>
          <p className="mt-1.5 text-sm text-white/60">{report.sub} · Generated {report.generated}</p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {report.tags.map((t, i) => (
              <span key={i} className={`rounded-full border px-2.5 py-1 text-xs ${t.hot ? "border-sh-accent bg-sh-accent text-sh-dark font-semibold" : "border-white/20 bg-white/10 text-white/70"}`}>
                {t.label}
              </span>
            ))}
          </div>
        </header>

        <Section n="01" title="Top Emerging Trends" intro="Clusters ranked by momentum — signal volume, recency weighting, and source diversity. Each cluster is anchored to dated releases, roadmap items, or market evidence.">
          {report.trends.map((t) => (
            <div key={t.rank} className="flex items-start gap-3.5 border-b border-white/10 py-3.5 last:border-b-0">
              <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg bg-sh-green text-sm font-bold text-white">
                {t.rank}
              </div>
              <div className="flex-1">
                <h3 className="text-[15.5px] font-semibold">{t.title}</h3>
                <p className="mt-0.5 text-[13.5px] text-white/60">{t.body}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {t.flags.map((f, i) => (
                    <span key={i} className={`rounded-[5px] border px-2 py-0.5 text-[11px] ${FLAG_CLASS[f.kind]}`}>
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section>

        <Section n="02" title="Release Updates" intro="Dated entries from Shopify's official changelog and developer docs within the lookback window, newest first.">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>Product</th>
                  <th className={TH}>Date</th>
                  <th className={TH}>Release Highlight</th>
                  <th className={TH}>Type</th>
                </tr>
              </thead>
              <tbody>
                {report.releases.map((r, i) => (
                  <tr key={i}>
                    <td className={`${TD} whitespace-nowrap font-medium`}>{r.product}</td>
                    <td className={`${TD} whitespace-nowrap text-white/60`}>{r.date}</td>
                    <td className={`${TD} text-white/60`}>
                      {r.highlight}
                      <span className="mt-1.5 block break-all text-[11.5px] text-white/40">{r.source}</span>
                    </td>
                    <td className={TD}>
                      <span className="whitespace-nowrap rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-[11.5px] text-white/60">
                        {r.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section n="03" title="Upcoming Events" intro="Key events for the Shopify practice — partner conferences, webinars, and certification opportunities.">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>Event</th>
                  <th className={TH}>When / Format</th>
                  <th className={TH}>Focus</th>
                  <th className={TH}>Register</th>
                </tr>
              </thead>
              <tbody>
                {report.events.map((e, i) => (
                  <tr key={i}>
                    <td className={`${TD} font-medium`}>{e.event}</td>
                    <td className={`${TD} text-white/60`}>{e.when}</td>
                    <td className={`${TD} text-white/60`}>{e.focus}</td>
                    <td className={TD}>
                      <a href={e.register} target="_blank" rel="noopener noreferrer"
                        className="inline-block whitespace-nowrap rounded-lg bg-sh-green px-3 py-1.5 text-[13px] font-semibold text-white hover:bg-sh-dark">
                        Register
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section n="04" title="Product Roadmap" intro="Near-term items from Shopify's product roadmap across key practice areas. Forward-looking and informational only.">
          <div className="grid gap-3.5 sm:grid-cols-2">
            {report.roadmap.map((c, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-sh-accent">{c.phase}</div>
                <h3 className="mt-0.5 text-[15px] font-semibold">{c.product}</h3>
                <ul className="my-2.5 list-disc space-y-1 pl-[18px] text-[13.5px] text-white/60">
                  {c.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
                <a href={c.link} target="_blank" rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-sh-accent hover:underline">
                  View roadmap →
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section n="05" title="High-Value Blog Opportunities" intro="Blog angles tied to in-window releases, roadmap items, and market demand. Composite priority weights AI relevance, enterprise relevance, momentum, uniqueness, and search trend.">
          {report.blogs.map((b, i) => (
            <Card key={i}>
              <h3 className="text-base font-semibold text-sh-dark">{b.title}</h3>
              <p className="my-2 text-[13.5px] text-sh-muted">{b.why}</p>
              <Scores items={[
                { label: `Audience: ${b.audience}` },
                { label: `Difficulty: ${b.difficulty}` },
                { label: `Engagement ${b.engagement}` },
                { label: `Uniqueness ${b.uniqueness}` },
                { label: `Priority ${b.priority}`, pri: true },
              ]} />
            </Card>
          ))}
        </Section>

        <Section n="06" title="Whitepaper Opportunities" intro="Longer-form assets for enterprise buyers, architecture reviews, and buying committees.">
          {report.whitepapers.map((w, i) => (
            <Card key={i}>
              <h3 className="text-base font-semibold text-sh-dark">{w.title}</h3>
              <p className="my-2 text-[13.5px] text-sh-muted">{w.why}</p>
              <Scores items={[
                { label: `Audience: ${w.audience}` },
                { label: `Difficulty: ${w.difficulty}` },
                { label: `Engagement ${w.engagement}` },
                { label: `Uniqueness ${w.uniqueness}` },
                { label: `Priority ${w.priority}`, pri: true },
              ]} />
            </Card>
          ))}
        </Section>

        <Section n="07" title="LinkedIn Post Ideas" intro="Short, evidence-led posts that ride current releases, trends, and market dynamics.">
          {report.linkedin.map((l, i) => (
            <Card key={i}>
              <h3 className="text-base font-semibold text-sh-dark">{l.title}</h3>
              <p className="my-2 text-[13.5px] text-sh-muted">{l.why}</p>
              <Scores items={[
                { label: `Audience: ${l.audience}` },
                { label: `Engagement ${l.engagement}` },
                { label: `Uniqueness ${l.uniqueness}` },
              ]} />
            </Card>
          ))}
        </Section>

        <Section n="08" title="Competitive Intelligence" intro="Each focus cluster benchmarked against the competitor set — Adobe Commerce, Salesforce B2B Commerce, commercetools, and Bloomreach.">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>Theme</th>
                  <th className={TH}>Shopify Position</th>
                  <th className={TH}>Competitor Position</th>
                  <th className={TH}>Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {report.competitive.map((c, i) => (
                  <tr key={i}>
                    <td className={`${TD} font-medium`}>{c.theme}</td>
                    <td className={`${TD} text-white/60`}>{c.shopify}</td>
                    <td className={`${TD} text-white/60`}>{c.competitor}</td>
                    <td className={`${TD} text-white/60`}>{c.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section n="09" title="Recommended Immediate Actions" intro="Top items by composite priority — blending AI relevance, enterprise relevance, momentum, uniqueness, and freshness of the underlying signal.">
          {report.actions.map((a) => (
            <Card key={a.n}>
              <h3 className="text-base font-semibold text-sh-dark">{a.n}. {a.title}</h3>
              <p className="my-2 text-[13.5px] text-sh-muted">{a.why}</p>
              <Scores items={[
                { label: `Priority ${a.priority}`, pri: true },
                { label: `Format: ${a.format}` },
              ]} />
            </Card>
          ))}
        </Section>

        <Section n="10" title="Next 7 Days">
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/60">
            {report.next7.map((it, i) => (
              <li key={i}><b className="text-white">{it.bold}</b> {it.text}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
