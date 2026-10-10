import { sql } from '@/db';
import { removeUnusedImages } from './image-cleanup';
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

  // Production only, so a dev database pointed at a shared bucket can never delete live images.
  // Runs in the background; a failure here is logged and never stops the server
  if (process.env.NODE_ENV === 'production') {
    removeUnusedImages().catch((error) => console.error('[Cleanup] Failed:', error));
  }
}
