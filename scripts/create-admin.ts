import "./load-env.ts";
import { Writable } from "node:stream";
import { createInterface } from "node:readline/promises";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users } from "../src/db/schema.ts";
import { MIN_PASSWORD_LENGTH, hashPassword } from "../src/lib/password.ts";

// Creates an admin, or resets the password (and restores the admin role) when the email already exists

let muted = false;
const output = new Writable({
  write(chunk, _encoding, done) {
    if (!muted) process.stdout.write(chunk);
    done();
  },
});
const rl = createInterface({ input: process.stdin, output, terminal: Boolean(process.stdin.isTTY) });
// Reading lines in order also works when answers are piped in
const lines = rl[Symbol.asyncIterator]();

async function ask(prompt: string, hidden = false) {
  process.stdout.write(prompt);
  muted = hidden;
  const { value } = await lines.next();
  muted = false;
  if (hidden) process.stdout.write("\n");
  return String(value ?? "").trim();
}

const sql = postgres(process.env.DATABASE_URL ?? "", { max: 1 });
const db = drizzle(sql, { casing: "snake_case" });

try {
  const name = await ask("Name: ");
  const email = (await ask("Email: ")).toLowerCase();
  const password = await ask(`Password (min ${MIN_PASSWORD_LENGTH} characters): `, true);

  if (!name || !email.includes("@")) throw new Error("A name and a valid email are required.");
  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new Error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
  }
  if (password !== (await ask("Repeat password: ", true))) throw new Error("Passwords do not match.");

  const passwordHash = await hashPassword(password);
  await db
    .insert(users)
    .values({ name, email, passwordHash, role: "admin" })
    .onConflictDoUpdate({
      target: users.email,
      set: { name, passwordHash, role: "admin", mustChangePassword: false },
    });
  console.info(`Admin ${email} is ready. Sign in at /login.`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  rl.close();
  await sql.end();
}
