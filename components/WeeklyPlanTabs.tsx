"use client";

import { useState } from "react";
import type { WeeklyPlan, AcceleratorStatus } from "@/data/weeklyPlan";
import { StatusBadge, TypeBadge } from "@/components/badges";

type Raci2 = "R" | "A" | "C" | "I" | "";

const RACI_CLASS: Record<Exclude<Raci2, "">, string> = {
  R: "bg-[#DBEAFE] text-[#1E40AF]",
  A: "bg-[#D1FAE5] text-[#065F46]",
  C: "bg-[#FEF3C7] text-[#92400E]",
  I: "bg-[#F1F5F9] text-[#64748B]",
};

const ACC_STATUS: Record<AcceleratorStatus, { bg: string; dot: string; text: string }> = {
  "In Progress":   { bg: "bg-[#D1FAE5] text-[#065F46]", dot: "bg-[#10B981]", text: "In Progress" },
  "In Evaluation": { bg: "bg-[#FEF3C7] text-[#92400E]", dot: "bg-[#F59E0B]", text: "In Evaluation" },
  "Enablement":    { bg: "bg-[#DBEAFE] text-[#1E40AF]", dot: "bg-[#3B82F6]", text: "Enablement" },
};

export default function WeeklyPlanTabs({ plan }: { plan: WeeklyPlan }) {
  const [active, setActive] = useState(plan.weeks[0]?.id ?? "");
  const isRaci = active === "raci";
  const week = plan.weeks.find((w) => w.id === active) ?? plan.weeks[0];

  const done  = week.tasks.filter((t) => t.status === "Done").length;
  const prog  = week.tasks.filter((t) => t.status === "In Progress").length;
  const todo  = week.tasks.filter((t) => t.status === "To Do").length;
  const st    = ACC_STATUS[week.acceleratorStatus];

  return (
    <div>
      {/* ── Tab bar ── */}
      <div className="sticky top-0 z-10 -mx-6 flex flex-wrap gap-1 border-b-2 border-sh-border bg-sh-light px-6 pt-3">
        {plan.weeks.map((w) => (
          <button
            key={w.id}
            onClick={() => setActive(w.id)}
            className={`rounded-t-lg border border-b-0 px-4 py-2 text-sm font-semibold transition ${
              w.id === active
                ? "border-sh-green bg-sh-green text-white"
                : "border-sh-border bg-white text-sh-muted hover:bg-sh-chip"
            }`}
          >
            {w.label}
          </button>
        ))}
        <button
          onClick={() => setActive("raci")}
          className={`rounded-t-lg border border-b-0 px-4 py-2 text-sm font-semibold transition ${
            isRaci
              ? "border-sh-teal bg-sh-teal text-white"
              : "border-sh-teal bg-[#F0FDFA] text-sh-teal hover:bg-[#CCFBF1]"
          }`}
        >
          RACI Matrix
        </button>
      </div>

      {isRaci ? (
        <RaciPane plan={plan} />
      ) : (
        <div className="pt-6 space-y-8">

          {/* ── Header ── */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-lg font-bold text-sh-dark sm:text-xl">{week.title}</h2>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${st.bg}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${st.dot}`} />
                {st.text}
              </span>
            </div>
            <p className="text-sm text-sh-muted">{week.subtitle}</p>
            <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-sh-muted">
              <span><b className="text-sh-dark">{week.tasks.length}</b> tasks</span>
              <span><b className="text-[#10B981]">{done}</b> done</span>
              <span><b className="text-[#F59E0B]">{prog}</b> in progress</span>
              <span><b className="text-sh-muted">{todo}</b> to do</span>
            </div>
          </div>

          {/* ── Quarter Objectives ── */}
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-sh-green">Quarter Objectives — {week.quarter}</div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {week.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-sh-border bg-white p-3.5 shadow-sm">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sh-green text-[11px] font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-[13px] leading-relaxed text-sh-dark">{obj.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Team Focus ── */}
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-sh-muted">Team Focus</div>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {week.focus.map((f, i) => (
                <div key={i} className="rounded-md border border-sh-border border-l-4 border-l-sh-green bg-white p-3">
                  <div className="text-xs font-bold uppercase text-sh-dark mb-1">{f.team}</div>
                  <div className="text-[12px] text-sh-muted whitespace-pre-line">{f.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Task Table ── */}
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-sh-muted">Tasks</div>
            <div className="overflow-x-auto rounded-lg border border-sh-border">
              <table className="w-full border-collapse bg-white text-[13px]">
                <thead>
                  <tr className="bg-sh-dark text-left text-xs text-white">
                    {["Day","Date","Task / Activity","Team","Type","KPI / Goal","Status","Notes"].map(h => (
                      <th key={h} className="px-2.5 py-2.5 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {week.tasks.map((t, i) => (
                    <tr key={i} className="odd:bg-white even:bg-sh-light">
                      <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.day}</td>
                      <td className="border-t border-sh-border px-2.5 py-2 align-top whitespace-nowrap">{t.date}</td>
                      <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.activity}</td>
                      <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.team}</td>
                      <td className="border-t border-sh-border px-2.5 py-2 align-top"><TypeBadge type={t.type as any} /></td>
                      <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.kpi}</td>
                      <td className="border-t border-sh-border px-2.5 py-2 align-top"><StatusBadge status={t.status as any} /></td>
                      <td className="border-t border-sh-border px-2.5 py-2 align-top text-sh-muted">{t.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Events & Webinars ── */}
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-sh-muted">Relevant Events & Webinars</div>
            <div className="grid gap-3 sm:grid-cols-3">
              {week.events.map((ev, i) => (
                <a key={i} href={ev.url} target="_blank" rel="noopener noreferrer"
                  className="group block rounded-xl border border-sh-border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sh-green hover:shadow-md">
                  <div className="mb-1 text-[11px] font-bold text-sh-green uppercase tracking-wide">{ev.date}</div>
                  <div className="font-semibold text-sh-dark text-[14px] group-hover:text-sh-green mb-2">{ev.event}</div>
                  <p className="text-[12px] text-sh-muted leading-relaxed">{ev.why}</p>
                  <div className="mt-3 text-[12px] font-semibold text-sh-green">View event →</div>
                </a>
              ))}
            </div>
          </div>

          {/* ── End of Quarter Review ── */}
          <div className="rounded-xl border border-sh-border bg-white p-5">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-sh-muted">End of Quarter Review</div>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Pipeline review: meetings booked vs. target, opportunities in progress, conversion rate from assessment to project.",
                "Content review: blogs published, LinkedIn posts live, campaign performance (open rate, click-through, reply rate).",
                "Partnership review: co-sell motions active, partner meetings held, referrals received.",
                "Adjust Q4 plan based on Q3 learnings — update priorities, owners, and targets accordingly.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[13px] text-sh-muted">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sh-green" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

function RaciPane({ plan }: { plan: WeeklyPlan }) {
  const { roles, rows } = plan.raci;
  return (
    <div className="pt-6">
      <h2 className="text-lg font-bold text-sh-dark sm:text-xl">RACI Matrix — Roles &amp; Responsibilities</h2>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] text-sh-muted">
        {[["R","#1E40AF","#DBEAFE","Responsible"],["A","#065F46","#D1FAE5","Accountable"],["C","#92400E","#FEF3C7","Consulted"],["I","#64748B","#F1F5F9","Informed"]].map(([l,tc,bg,label])=>(
          <span key={l} className="flex items-center gap-1.5">
            <span style={{background:bg,color:tc}} className="rounded-full px-2 py-0.5 text-[11px] font-bold">{l}</span>
            {label}
          </span>
        ))}
      </div>
      <div className="mt-4 overflow-x-auto rounded-lg border border-sh-border">
        <table className="w-full border-collapse bg-white text-[13px]">
          <thead>
            <tr className="bg-sh-dark text-left text-xs text-white">
              <th className="px-2.5 py-2.5 font-semibold">Deliverable / Activity</th>
              {roles.map((r) => (
                <th key={r} className="px-2 py-2.5 text-center font-semibold">{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="odd:bg-white even:bg-sh-light">
                <td className="border-t border-sh-border px-2.5 py-2 font-semibold text-sh-dark">{row.deliverable}</td>
                {row.values.map((v, j) => {
                  const cls = v ? RACI_CLASS[v as Exclude<Raci2,"">] : "";
                  return (
                    <td key={j} className={`border-t border-sh-border px-2 py-2 text-center font-bold ${cls}`}>
                      {v}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
