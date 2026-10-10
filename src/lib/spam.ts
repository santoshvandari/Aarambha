import { createHmac, timingSafeEqual } from 'node:crypto';

// Keyless spam protection: a signed render timestamp and a link filter (rate limits live in rate-limit.ts).
// The signing key is derived from DATABASE_URL, so no extra environment variable is needed.

const MIN_FILL_MS = 3_000;
const MAX_FILL_MS = 24 * 60 * 60 * 1_000;
const MAX_LINKS = 2;

function signingKey() {
  return createHmac('sha256', process.env.DATABASE_URL ?? 'aarambha-dev')
    .update('form-timestamp')
    .digest();
}

function sign(timestamp: string) {
  return createHmac('sha256', signingKey()).update(timestamp).digest('base64url');
}

export function createFormToken(now = Date.now()) {
  const timestamp = String(now);
  return `${timestamp}.${sign(timestamp)}`;
}

// Rejects missing or forged tokens, and forms submitted faster than a person can type
export function isHumanPaced(token: string, now = Date.now()) {
  const [timestamp, signature] = token.split('.');
  if (!timestamp || !signature) return false;

  const expected = Buffer.from(sign(timestamp));
  const received = Buffer.from(signature);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return false;

  const elapsed = now - Number(timestamp);
  return elapsed >= MIN_FILL_MS && elapsed <= MAX_FILL_MS;
}

export function hasTooManyLinks(text: string) {
  return (text.match(/https?:\/\/|www\./gi)?.length ?? 0) > MAX_LINKS;
}
