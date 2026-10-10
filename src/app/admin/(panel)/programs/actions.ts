"use server";

import { and, eq, ne } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { programs } from "@/db/schema";
import { requireUser } from "@/lib/auth";
import { checked, text, type FormState } from "@/lib/forms";
import { programIcons } from "@/lib/icons";
import { slugify } from "@/lib/slug";

export async function saveProgram(id: string | null, _prev: FormState, formData: FormData): Promise<FormState> {
  await requireUser();
  const title = text(formData, "title");
  const values = {
    title,
    slug: slugify(text(formData, "slug") || title),
    summary: text(formData, "summary"),
    description: text(formData, "description"),
    icon: text(formData, "icon"),
    status: text(formData, "status") === "upcoming" ? ("upcoming" as const) : ("active" as const),
    featured: checked(formData, "featured"),
    sortOrder: Number(text(formData, "sortOrder")) || 0,
  };

  if (!values.title || !values.summary || !values.description) {
    return { error: "Title, summary and description are required." };
  }
  if (!values.slug) return { error: "The title needs at least one letter or number." };
  if (!(values.icon in programIcons)) return { error: "Please choose an icon." };

  const [clash] = await db
    .select({ id: programs.id })
    .from(programs)
    .where(id ? and(eq(programs.slug, values.slug), ne(programs.id, id)) : eq(programs.slug, values.slug));
  if (clash) return { error: "Another program already uses this slug." };

  if (id) await db.update(programs).set(values).where(eq(programs.id, id));
  else await db.insert(programs).values(values);

  revalidatePath("/admin/programs");
  redirect("/admin/programs");
}

export async function deleteProgram(id: string) {
  await requireUser();
  await db.delete(programs).where(eq(programs.id, id));
  revalidatePath("/admin/programs");
  redirect("/admin/programs");
}
