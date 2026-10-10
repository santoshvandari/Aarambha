"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { submissions } from "@/db/schema";
import { requireUser } from "@/lib/auth";

export async function setRead(id: string, read: boolean) {
  await requireUser();
  await db.update(submissions).set({ read }).where(eq(submissions.id, id));
  revalidatePath("/admin/submissions");
}

export async function deleteSubmission(id: string) {
  await requireUser();
  await db.delete(submissions).where(eq(submissions.id, id));
  revalidatePath("/admin/submissions");
}
