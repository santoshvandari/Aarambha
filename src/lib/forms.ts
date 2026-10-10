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
