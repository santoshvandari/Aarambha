'use client';

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { LuSend, LuCircleCheck, LuCircleAlert } from 'react-icons/lu';
import { getFormToken, submitContactForm } from '@/app/(site)/contact/actions';
import {
  FORM_TYPES,
  FORM_TYPE_LABELS,
  LIMITS,
  initialContactFormState,
  isFormType,
  type ContactField,
  type FormType,
} from '@/lib/contact';
import Button from './Button';

const inputClass =
  'w-full rounded-md border bg-surface px-4 py-3 text-base text-text placeholder:text-textLight transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get('type');
  const [formType, setFormType] = useState<FormType>(isFormType(requested) ? requested : 'query');
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactFormState);
  const [token, setToken] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    getFormToken()
      .then(setToken)
      .catch(() => setToken(''));
  }, []);

  useEffect(() => {
    if (state.status === 'success') formRef.current?.reset();
    if (state.fieldErrors)
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  // Submitting via onSubmit (not the form action prop) stops React from clearing the fields when the server returns an error
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  const errorFor = (name: ContactField) => state.fieldErrors?.[name];
  const borderFor = (name: ContactField) =>
    errorFor(name) ? 'border-red-600' : 'border-border focus:border-secondary';

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-text">I want to</legend>
        <div className="grid grid-cols-3 overflow-hidden rounded-md border border-border">
          {FORM_TYPES.map((type) => (
            <label
              key={type}
              className={`cursor-pointer border-r border-border px-3 py-3 text-center text-sm font-semibold transition-colors last:border-r-0 has-focus-visible:ring-2 has-focus-visible:ring-secondary has-focus-visible:ring-inset ${
                formType === type
                  ? 'bg-primary text-white dark:bg-text dark:text-background'
                  : 'bg-surface text-text hover:bg-muted'
              }`}
            >
              <input
                type="radio"
                name="formType"
                value={type}
                checked={formType === type}
                onChange={() => setFormType(type)}
                className="sr-only"
              />
              {FORM_TYPE_LABELS[type]}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-text">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={LIMITS.name}
            aria-invalid={Boolean(errorFor('name'))}
            aria-describedby={errorFor('name') ? 'name-error' : undefined}
            className={`${inputClass} ${borderFor('name')}`}
          />
          {errorFor('name') && (
            <p id="name-error" className="mt-2 text-sm text-red-700 dark:text-red-400">
              {errorFor('name')}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={LIMITS.email}
            aria-invalid={Boolean(errorFor('email'))}
            aria-describedby={errorFor('email') ? 'email-error' : undefined}
            className={`${inputClass} ${borderFor('email')}`}
          />
          {errorFor('email') && (
            <p id="email-error" className="mt-2 text-sm text-red-700 dark:text-red-400">
              {errorFor('email')}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-text">
          {formType === 'query' ? 'Your Message' : 'Tell us a little about yourself (optional)'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={LIMITS.message}
          required={formType === 'query'}
          aria-invalid={Boolean(errorFor('message'))}
          aria-describedby={errorFor('message') ? 'message-error' : undefined}
          className={`${inputClass} resize-y ${borderFor('message')}`}
        />
        {errorFor('message') && (
          <p id="message-error" className="mt-2 text-sm text-red-700 dark:text-red-400">
            {errorFor('message')}
          </p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <input type="hidden" name="formToken" value={token} />

      <Button type="submit" size="lg" disabled={pending || !token} className="w-full sm:w-auto">
        {pending ? 'Sending…' : 'Send Message'}
        <LuSend className="h-4 w-4" aria-hidden="true" />
      </Button>

      <div aria-live="polite">
        {state.status !== 'idle' && !state.fieldErrors && (
          <p
            className={`flex items-start gap-3 rounded-md border-l-4 p-4 text-sm font-medium ${
              state.status === 'success'
                ? 'border-secondary bg-muted text-text'
                : 'border-red-600 bg-muted text-text'
            }`}
          >
            {state.status === 'success' ? (
              <LuCircleCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                aria-hidden="true"
              />
            ) : (
              <LuCircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
            )}
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
