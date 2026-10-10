import { existsSync } from "node:fs";

// Same files Next.js reads; values already set in the shell win, and .env.local beats .env
for (const file of [".env.local", ".env"]) if (existsSync(file)) process.loadEnvFile(file);
