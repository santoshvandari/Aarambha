import { sql } from '@/db';
import { initializeBucket } from './storage';

// Runs once when the server starts; a missing database or bucket stops the server instead of failing later
export async function checkServices() {
  try {
    await sql`select 1`;
    console.info('[Startup] Database connection OK.');
    await initializeBucket();
    console.info('[Startup] Storage OK.');
  } catch (error) {
    console.error('[Startup] Service check failed:', error);
    process.exit(1);
  }
}
