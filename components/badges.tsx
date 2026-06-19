import type { TaskStatus, TaskType } from "@/data/weeklyPlan";

const STATUS_LABEL: Record<TaskStatus, string> = {
  todo: "To Do",
  prog: "In Progress",
  sched: "Scheduled",
  done: "Done",
};

const STATUS_CLASS: Record<TaskStatus, string> = {
  todo: "bg-[#F1F5F9] text-[#64748B]",
  prog: "bg-[#FEF3C7] text-[#92400E]",
  sched: "bg-[#DBEAFE] text-[#1E40AF]",
  done: "bg-[#D1FAE5] text-[#065F46]",
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_CLASS[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}

const TYPE_CLASS: Record<string, string> = {
  "Blog Post":         "bg-[#DBEAFE] text-[#1E40AF]",
  "Blog":              "bg-[#DBEAFE] text-[#1E40AF]",
  "Whitepaper":        "bg-[#EDE9FE] text-[#5B21B6]",
  "LinkedIn Post":     "bg-[#E0F2FE] text-[#0369A1]",
  "Social":            "bg-[#E0F2FE] text-[#0369A1]",
  "Internal Milestone":"bg-[#FEF3C7] text-[#92400E]",
  "Review":            "bg-[#FEF3C7] text-[#92400E]",
  "Meeting":           "bg-[#FCE7F3] text-[#9D174D]",
  "Campaign":          "bg-[#FCE7F3] text-[#9D174D]",
  "Accelerator":       "bg-[#D1FAE5] text-[#065F46]",
  "Integration":       "bg-[#D1FAE5] text-[#065F46]",
  "Asset":             "bg-[#FEF9C3] text-[#854D0E]",
  "Demo":              "bg-[#F0FDF4] text-[#166534]",
  "Outreach":          "bg-[#ECFDF5] text-[#047857]",
  "Pipeline":          "bg-[#F0FDF4] text-[#14532D]",
  "Workshop":          "bg-[#FDF4FF] text-[#7E22CE]",
  "Partnership":       "bg-[#FFF7ED] text-[#9A3412]",
};

export function TypeBadge({ type }: { type: TaskType }) {
  const cls = TYPE_CLASS[type] ?? "bg-[#F1F5F9] text-[#64748B]";
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}>
      {type}
    </span>
  );
}
