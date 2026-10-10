import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const REQUIRED_ENV = [
  "DATABASE_URL",
  "OBJECT_STORAGE_ENDPOINT",
  "OBJECT_STORAGE_ACCESS_KEY",
  "OBJECT_STORAGE_SECRET_KEY",
];

export default function config(phase: string): NextConfig {
  // Fail the build early instead of deploying a site that cannot reach its data
  if (phase === PHASE_PRODUCTION_BUILD) {
    const missing = REQUIRED_ENV.filter((name) => !process.env[name]);
    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(", ")}. See .env.example.`);
    }
  }
  return {};
}
