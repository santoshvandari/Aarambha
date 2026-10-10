import Link from "next/link";
import AdminPage from "@/components/admin/AdminPage";
import Button from "@/components/Button";
import { requireUser } from "@/lib/auth";
import { getStats } from "@/lib/content";

const placements = [
  { key: "home", title: "Home page" },
  { key: "programs", title: "Programs page" },
] as const;

export default async function StatsAdminPage() {
  await requireUser();
  const lists = await Promise.all(placements.map((p) => getStats(p.key)));

  return (
    <AdminPage
      title="Impact numbers"
      description="The figures shown in the Impact sections."
      actions={<Button href="/admin/stats/new">Add Number</Button>}
    >
      <div className="grid gap-8 md:grid-cols-2">
        {placements.map((placement, i) => (
          <section key={placement.key}>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-textLight">{placement.title}</h2>
            <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
              {lists[i].length === 0 && <li className="p-4 text-sm text-textLight">None yet; the section is hidden.</li>}
              {lists[i].map((stat) => (
                <li key={stat.id} className="flex items-center gap-4 p-4">
                  <span className="w-24 shrink-0 font-heading text-xl font-extrabold text-text">{stat.value}</span>
                  <span className="flex-1 text-sm text-textLight">{stat.label}</span>
                  <Link href={`/admin/stats/${stat.id}`} className="text-sm font-semibold text-secondaryText hover:underline">
                    Edit
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </AdminPage>
  );
}
