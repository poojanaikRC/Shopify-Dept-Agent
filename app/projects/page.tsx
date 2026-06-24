import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { projects, updatedDate } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project Teams — Royal Cyber Shopify Practice",
};

export default function ProjectsPage() {
  const totalPeople = Array.from(
    new Set(projects.flatMap((p) => p.team.map((m) => m.name)))
  ).length;
  const totalSeats = projects.reduce((n, p) => n + p.team.length, 0);

  return (
    <ProjectsClient
      projects={projects}
      updatedDate={updatedDate}
      totalPeople={totalPeople}
      totalSeats={totalSeats}
    />
  );
}
