export const FORM_TYPES = ['query', 'volunteer', 'member'] as const;

export type FormType = (typeof FORM_TYPES)[number];

export const FORM_TYPE_LABELS: Record<FormType, string> = {
  query: 'General Inquiry',
  volunteer: 'Volunteer',
  member: 'Membership',
};

export type ContactField = 'name' | 'email' | 'message';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
}

export const initialContactFormState: ContactFormState = { status: 'idle', message: '' };

export function isFormType(value: unknown): value is FormType {
  return typeof value === 'string' && (FORM_TYPES as readonly string[]).includes(value);
}

export const LIMITS = { name: 120, email: 254, message: 2000 } as const;
