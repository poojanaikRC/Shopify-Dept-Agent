"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/data/projects";

type GroupBy = "project" | "pm" | "delivery" | "account";
type StatusFilter = "current" | "past";

function initials(name: string) {
  return name === "Unassigned"
    ? "—"
    : name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

const AVATAR_COLORS = [
  "bg-sh-green", "bg-sh-teal", "bg-rc-blue", "bg-rc-accent",
  "bg-[#7C3AED]", "bg-[#DB2777]", "bg-[#D97706]", "bg-[#059669]",
];

function avatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const sz = size === "sm" ? "h-7 w-7 text-[10px]" : "h-9 w-9 text-[11px]";
  return (
    <div className={`flex flex-shrink-0 items-center justify-center rounded-full font-bold text-white ${sz} ${avatarColor(name)}`}>
      {initials(name)}
    </div>
  );
}

function RolePill({ label }: { label: string }) {
  const map: Record<string, string> = {
    "Project Manager":            "bg-[#DBEAFE] text-[#1E40AF]",
    "Senior Project Manager":     "bg-[#DBEAFE] text-[#1E40AF]",
    "Technical Lead":             "bg-[#D1FAE5] text-[#065F46]",
    "Senior Technical Lead":      "bg-[#D1FAE5] text-[#065F46]",
    "Senior Technical Lead (Contractor)": "bg-[#D1FAE5] text-[#065F46]",
    "Technical Lead (Contractor)":"bg-[#D1FAE5] text-[#065F46]",
    "Software Engineer":          "bg-[#F1F5F9] text-[#475569]",
    "Senior Software Engineer":   "bg-[#FEF3C7] text-[#92400E]",
    "Solution Architect":         "bg-[#EDE9FE] text-[#5B21B6]",
    "Senior Solution Architect":  "bg-[#EDE9FE] text-[#5B21B6]",
    "QA Technical Lead":          "bg-[#FCE7F3] text-[#9D174D]",
    "Delivery Manager":           "bg-[#FFF7ED] text-[#9A3412]",
    "Account Manager":            "bg-[#ECFDF5] text-[#047857]",
    "Practice Head":              "bg-sh-chip text-sh-green",
    "Trainee":                    "bg-[#F1F5F9] text-[#94A3B8]",
  };
  const base = Object.keys(map).find((k) => label.startsWith(k)) ?? "";
  const cls = map[base] ?? "bg-[#F1F5F9] text-[#64748B]";
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap ${cls}`}>
      {label}
    </span>
  );
}

interface Props {
  projects: Project[];
  updatedDate: string;
  totalPeople: number;
  totalSeats: number;
}

export default function ProjectsClient({ projects, updatedDate, totalPeople, totalSeats }: Props) {
  const [status, setStatus] = useState<StatusFilter>("current");
  const [groupBy, setGroupBy] = useState<GroupBy>("project");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = projects.filter((p) => p.status === status);

  // Build groups
  const groups = useMemo(() => {
    if (groupBy === "project") {
      return filtered.map((p) => ({ key: p.name, projects: [p] }));
    }
    const field = groupBy === "pm" ? "pm" : groupBy === "delivery" ? "delivery" : "account";
    const map = new Map<string, Project[]>();
    filtered.forEach((p) => {
      const k = p[field] || "Unassigned";
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(p);
    });
    return Array.from(map.entries()).map(([key, projs]) => ({ key, projects: projs }));
  }, [filtered, groupBy]);

  const displayedProjects = activeFilter
    ? filtered.filter((p) => {
        if (groupBy === "project") return p.name === activeFilter;
        if (groupBy === "pm") return p.pm === activeFilter;
        if (groupBy === "delivery") return p.delivery === activeFilter;
        return p.account === activeFilter;
      })
    : filtered;

  const maxMembers = Math.max(...groups.map((g) =>
    g.projects.reduce((n, p) => n + p.team.length, 0)
  ));

  const groupLabel = { project: "Project", pm: "Project Manager", delivery: "Delivery Manager", account: "Account Manager" }[groupBy];

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-2">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
          Royal Cyber · Shopify Practice
        </p>
        <h1 className="mt-1 text-3xl font-extrabold text-sh-dark sm:text-4xl">Project Teams</h1>
        <p className="mt-2 max-w-3xl text-[15px] text-sh-muted">
          Live view of Royal Cyber&apos;s Shopify engagements — every project, who is on the team, and their designation.
          Switch the <strong>Group by</strong> view to explore by project, project manager, account manager, or delivery manager,
          and click any bar to filter. Currently showing{" "}
          <strong>{filtered.length} running project{filtered.length !== 1 ? "s" : ""}</strong> across{" "}
          <strong>{totalPeople} people</strong> · Updated {updatedDate}.
        </p>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {/* Status toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-sh-border bg-white p-1">
          {(["current", "past"] as StatusFilter[]).map((s) => (
            <button
              key={s}
              onClick={() => { setStatus(s); setActiveFilter(null); }}
              className={`rounded-md px-4 py-1.5 text-sm font-semibold capitalize transition ${
                status === s ? "bg-sh-dark text-white" : "text-sh-muted hover:bg-sh-light"
              }`}
            >
              {s === "current" ? "Current projects" : "Past projects"}
            </button>
          ))}
        </div>

        {/* Group by */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-sh-muted">Group by</span>
          {(["project", "pm", "account", "delivery"] as GroupBy[]).map((g) => (
            <button
              key={g}
              onClick={() => { setGroupBy(g); setActiveFilter(null); }}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                groupBy === g
                  ? "border-sh-green bg-sh-green text-white"
                  : "border-sh-border bg-white text-sh-muted hover:border-sh-green hover:text-sh-green"
              }`}
            >
              {g === "project" ? "By Project" : g === "pm" ? "By Project Manager" : g === "account" ? "By Account Manager" : "By Delivery Manager"}
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { num: filtered.length,  label: "Projects" },
          { num: totalPeople,      label: "People" },
          { num: totalSeats,       label: "Team seats" },
          { num: filtered.length,  label: "projects" },
        ].map((s, i) => (
          <div key={i} className="rounded-xl border border-sh-border bg-white p-4 text-center">
            <div className="text-2xl font-extrabold text-sh-dark">{s.num}</div>
            <div className="mt-0.5 text-xs font-medium text-sh-muted capitalize">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="mt-8 rounded-xl border border-sh-border bg-white p-6">
        <div className="mb-1 text-sm font-bold text-sh-dark">
          Team members by {groupLabel.toLowerCase()}
        </div>
        <p className="mb-5 text-xs text-sh-muted">Click a bar to filter the projects below</p>
        <div className="space-y-3">
          {groups.map((g) => {
            const count = g.projects.reduce((n, p) => n + p.team.length, 0);
            const pct = maxMembers > 0 ? (count / maxMembers) * 100 : 0;
            const isActive = activeFilter === g.key;
            return (
              <button
                key={g.key}
                onClick={() => setActiveFilter(isActive ? null : g.key)}
                className={`group flex w-full items-center gap-4 rounded-lg p-2 text-left transition hover:bg-sh-light ${isActive ? "bg-sh-chip ring-1 ring-sh-green" : ""}`}
              >
                <div className="w-48 flex-shrink-0 truncate text-sm font-semibold text-sh-dark">{g.key}</div>
                <div className="flex flex-1 items-center gap-3">
                  <div className="flex-1 rounded-full bg-[#E5F7F0] h-4 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-sh-green transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="w-24 flex-shrink-0 text-xs text-sh-muted">
                    <span className="font-bold text-sh-dark">{count}</span> member{count !== 1 ? "s" : ""} · {g.projects.length} project{g.projects.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            className="mt-4 text-xs font-semibold text-sh-green hover:underline"
          >
            ✕ Clear filter
          </button>
        )}
      </div>

      {/* Project cards */}
      <div className="mt-8 space-y-6">
        {displayedProjects.length === 0 ? (
          <div className="rounded-xl border border-sh-border bg-white p-10 text-center text-sh-muted">
            No {status} projects found.
          </div>
        ) : (
          displayedProjects.map((project) => (
            <div key={project.id} className="rounded-xl border border-sh-border bg-white shadow-sm overflow-hidden">
              {/* Project header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-sh-border bg-sh-panel px-6 py-4">
                <div>
                  <h2 className="text-lg font-bold text-sh-dark">{project.name}</h2>
                  <div className="mt-1.5 flex flex-wrap gap-4 text-[13px] text-sh-muted">
                    <span>
                      PM:{" "}
                      <strong className="text-sh-dark">{project.pm}</strong>
                    </span>
                    <span>
                      Delivery:{" "}
                      <strong className={project.delivery === "Unassigned" ? "text-sh-muted italic" : "text-sh-dark"}>
                        {project.delivery}
                      </strong>
                    </span>
                    <span>
                      Account:{" "}
                      <strong className={project.account === "Unassigned" ? "text-sh-muted italic" : "text-sh-dark"}>
                        {project.account}
                      </strong>
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-sh-border bg-white px-3 py-1 text-xs font-semibold text-sh-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-sh-green" />
                  {project.team.length} member{project.team.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Team table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr className="bg-sh-dark text-left text-xs text-white">
                      <th className="px-4 py-2.5 font-semibold w-10">#</th>
                      <th className="px-4 py-2.5 font-semibold">Team Member</th>
                      <th className="px-4 py-2.5 font-semibold">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.team.map((member, idx) => (
                      <tr key={idx} className="odd:bg-white even:bg-sh-light">
                        <td className="border-t border-sh-border px-4 py-2.5 text-sh-muted">{member.sr}</td>
                        <td className="border-t border-sh-border px-4 py-2.5">
                          <div className="flex items-center gap-3">
                            <Avatar name={member.name} size="sm" />
                            <span className="font-medium text-sh-dark">{member.name}</span>
                          </div>
                        </td>
                        <td className="border-t border-sh-border px-4 py-2.5">
                          <RolePill label={member.designation} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
