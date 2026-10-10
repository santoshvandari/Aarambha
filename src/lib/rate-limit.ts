import { headers } from "next/headers";
import { lt, sql } from "drizzle-orm";
import { db } from "@/db";
import { rateLimits } from "@/db/schema";

const MINUTE = 60 * 1_000;

export const RATE_LIMITS = {
  contact: { max: 5, windowMs: 10 * MINUTE },
  "login-ip": { max: 10, windowMs: 15 * MINUTE },
  "login-email": { max: 5, windowMs: 15 * MINUTE },
  password: { max: 5, windowMs: 15 * MINUTE },
  upload: { max: 30, windowMs: 10 * MINUTE },
  "user-admin": { max: 10, windowMs: 60 * MINUTE },
} as const;

export async function getClientIp() {
  const requestHeaders = await headers();
  return (
    requestHeaders.get("cf-connecting-ip") ??
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    requestHeaders.get("x-real-ip") ??
    "unknown"
  );
}

// Counts one attempt and reports whether the caller is over the limit for the current window
export async function isRateLimited(rule: keyof typeof RATE_LIMITS, identifier: string) {
  const { max, windowMs } = RATE_LIMITS[rule];
  const resetAt = new Date(Date.now() + windowMs);

  const [row] = await db
    .insert(rateLimits)
    .values({ key: `${rule}:${identifier}`, count: 1, resetAt })
    .onConflictDoUpdate({
      target: rateLimits.key,
      set: {
        count: sql`case when ${rateLimits.resetAt} < now() then 1 else ${rateLimits.count} + 1 end`,
        resetAt: sql`case when ${rateLimits.resetAt} < now() then excluded.reset_at else ${rateLimits.resetAt} end`,
      },
    })
    .returning({ count: rateLimits.count });

  // Occasionally clear expired rows so the table stays small
  if (Math.random() < 0.01) await db.delete(rateLimits).where(lt(rateLimits.resetAt, new Date()));

  return row.count > max;
}
