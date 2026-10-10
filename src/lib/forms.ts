export interface FormState {
  error?: string;
  // Success message shown under the form; the form is cleared when one arrives
  notice?: string;
}

export function text(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

export function checked(formData: FormData, name: string) {
  return formData.get(name) === 'on';
}

// Guards database lookups from malformed ids in the URL, which Postgres would reject with an error
export function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}

// Display order: a whole number in a sane range, or null so the action can reject it
export function sortOrder(formData: FormData): number | null {
  const raw = text(formData, 'sortOrder');
  if (!raw) return 0;
  const value = Number(raw);
  return Number.isInteger(value) && Math.abs(value) <= 100_000 ? value : null;
}

export const SORT_ORDER_ERROR = 'Order must be a whole number between -100000 and 100000.';
