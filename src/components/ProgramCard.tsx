import type { Program } from "@/db/schema";
import { ProgramIcon } from "@/lib/icons";
import Card from "./Card";

interface ProgramCardProps {
  program: Program;
  // "summary" shows the short line used on the home page
  variant?: "summary" | "full";
}

export default function ProgramCard({ program, variant = "full" }: ProgramCardProps) {
  const upcoming = program.status === "upcoming";

  return (
    <Card className="flex h-full flex-col">
      <div className="mb-6 flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-muted text-secondary">
          <ProgramIcon name={program.icon} className="h-5 w-5" />
        </span>
        <span
          className={`rounded-sm border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
            upcoming ? "border-accent text-text" : "border-border text-textLight"
          }`}
        >
          {upcoming ? "Upcoming" : "Active"}
        </span>
      </div>
      <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-text">{program.title}</h3>
      <p className="text-sm leading-relaxed text-textLight">
        {variant === "summary" ? program.summary : program.description}
      </p>
    </Card>
  );
}
