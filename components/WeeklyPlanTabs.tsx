"use client";

import { useState } from "react";
import type { WeeklyPlan, Raci } from "@/data/weeklyPlan";
import { StatusBadge, TypeBadge } from "@/components/badges";

const RACI_CLASS: Record<Exclude<Raci, "">, string> = {
  R: "bg-[#DBEAFE] text-[#1E40AF]",
  A: "bg-[#D1FAE5] text-[#065F46]",
  C: "bg-[#FEF3C7] text-[#92400E]",
  I: "bg-[#F1F5F9] text-[#64748B]",
};

export default function WeeklyPlanTabs({ plan }: { plan: WeeklyPlan }) {
  const [active, setActive] = useState(plan.weeks[0]?.id ?? "");
  const isRaci = active === "raci";
  const week = plan.weeks.find((w) => w.id === active) ?? plan.weeks[0];

  const completed = week.tasks.filter((t) => t.status === "done").length;
  const open = week.tasks.length - completed;

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-6 flex flex-wrap gap-1 border-b-2 border-sh-border bg-sh-light px-6 pt-3">
        {plan.weeks.map((w) => (
          <button
            key={w.id}
            onClick={() => setActive(w.id)}
            className={`rounded-t-lg border border-b-0 px-5 py-2 text-sm font-semibold transition ${
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
          className={`rounded-t-lg border border-b-0 px-5 py-2 text-sm font-semibold transition ${
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
        <div className="pt-6">
          <h2 className="text-lg font-bold text-sh-dark sm:text-xl">{week.title}</h2>
          <p className="mt-1 text-sm text-sh-muted">{week.subtitle}</p>
          <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-sh-muted">
            <span><b className="text-sh-dark">{week.tasks.length}</b> tasks</span>
            <span><b className="text-sh-dark">{completed}</b> completed</span>
            <span><b className="text-sh-dark">{open}</b> open</span>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {week.focus.map((f, i) => (
              <div key={i} className="rounded-md border border-sh-border border-l-4 border-l-sh-green bg-white p-3">
                <div className="text-xs font-bold uppercase text-sh-dark">{f.team}</div>
                <div className="mt-0.5 text-[13px] text-sh-muted">{f.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-x-auto rounded-lg border border-sh-border">
            <table className="w-full border-collapse bg-white text-[13px]">
              <thead>
                <tr className="bg-sh-dark text-left text-xs text-white">
                  <th className="px-2.5 py-2.5 font-semibold">Day</th>
                  <th className="px-2.5 py-2.5 font-semibold">Date</th>
                  <th className="px-2.5 py-2.5 font-semibold">Task / Activity</th>
                  <th className="px-2.5 py-2.5 font-semibold">Team</th>
                  <th className="px-2.5 py-2.5 font-semibold">Type</th>
                  <th className="px-2.5 py-2.5 font-semibold">KPI / Goal</th>
                  <th className="px-2.5 py-2.5 font-semibold">Owner</th>
                  <th className="px-2.5 py-2.5 font-semibold">Department</th>
                  <th className="px-2.5 py-2.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {week.tasks.map((t, i) => (
                  <tr key={i} className="odd:bg-white even:bg-sh-light">
                    <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.day}</td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top whitespace-nowrap">{t.date}</td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.activity}</td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.team}</td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top"><TypeBadge type={t.type} /></td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top">{t.kpi}</td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top whitespace-nowrap">{t.owner}</td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top whitespace-nowrap">{t.department}</td>
                    <td className="border-t border-sh-border px-2.5 py-2 align-top"><StatusBadge status={t.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        <span className="rounded-full bg-[#DBEAFE] px-2 py-0.5 text-[11px] font-bold text-[#1E40AF]">R</span> Responsible
        <span className="rounded-full bg-[#D1FAE5] px-2 py-0.5 text-[11px] font-bold text-[#065F46]">A</span> Accountable
        <span className="rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[11px] font-bold text-[#92400E]">C</span> Consulted
        <span className="rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[11px] font-bold text-[#64748B]">I</span> Informed
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
                {row.values.map((v, j) => (
                  <td key={j} className={`border-t border-sh-border px-2 py-2 text-center font-bold ${v ? RACI_CLASS[v] : ""}`}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
