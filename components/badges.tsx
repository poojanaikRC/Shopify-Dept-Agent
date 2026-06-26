// Badge components — no imports needed, using plain string props

const STATUS_CLASS: Record<string, string> = {
  "To Do":       "bg-[#F1F5F9] text-[#64748B]",
  "In Progress": "bg-[#FEF3C7] text-[#92400E]",
  "Scheduled":   "bg-[#DBEAFE] text-[#1E40AF]",
  "Done":        "bg-[#D1FAE5] text-[#065F46]",
};

export function StatusBadge({ status }: { status: string }) {
  const cls = STATUS_CLASS[status] ?? "bg-[#F1F5F9] text-[#64748B]";
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}>
      {status}
    </span>
  );
}

const TYPE_CLASS: Record<string, string> = {
  "Blog Post":         "bg-[#DBEAFE] text-[#1E40AF]",
  "Blog":              "bg-[#DBEAFE] text-[#1E40AF]",
  "Content":           "bg-[#DBEAFE] text-[#1E40AF]",
  "Whitepaper":        "bg-[#EDE9FE] text-[#5B21B6]",
  "LinkedIn Post":     "bg-[#E0F2FE] text-[#0369A1]",
  "Social":            "bg-[#E0F2FE] text-[#0369A1]",
  "Internal":          "bg-[#FEF3C7] text-[#92400E]",
  "Internal Milestone":"bg-[#FEF3C7] text-[#92400E]",
  "Review":            "bg-[#FEF3C7] text-[#92400E]",
  "Meetings":          "bg-[#FCE7F3] text-[#9D174D]",
  "Meeting":           "bg-[#FCE7F3] text-[#9D174D]",
  "Campaign":          "bg-[#FCE7F3] text-[#9D174D]",
  "Asset":             "bg-[#FEF9C3] text-[#854D0E]",
  "Asset Creation":    "bg-[#FEF9C3] text-[#854D0E]",
  "Demo":              "bg-[#F0FDF4] text-[#166534]",
  "Outreach":          "bg-[#ECFDF5] text-[#047857]",
  "Pipeline":          "bg-[#F0FDF4] text-[#14532D]",
  "Workshop":          "bg-[#FDF4FF] text-[#7E22CE]",
  "Partnership":       "bg-[#FFF7ED] text-[#9A3412]",
  "Build":             "bg-[#EFF6FF] text-[#1E40AF]",
  "Planning":          "bg-[#F5F3FF] text-[#5B21B6]",
  "QA":                "bg-[#FCE7F3] text-[#9D174D]",
  "Milestone":         "bg-[#D1FAE5] text-[#065F46]",
};

export function TypeBadge({ type }: { type: string }) {
  const cls = TYPE_CLASS[type] ?? "bg-[#F1F5F9] text-[#64748B]";
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}>
      {type}
    </span>
  );
}
