'use client';

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  type FormEvent,
  type ReactNode,
} from 'react';
import type { FormState } from '@/lib/forms';
import Button from '@/components/Button';

interface ActionFormProps {
  action: (prev: FormState, formData: FormData) => Promise<FormState>;
  submitLabel: string;
  children: ReactNode;
  className?: string;
}

// Shows the server's error or success message and keeps what was typed until the action succeeds
export default function ActionForm({
  action,
  submitLabel,
  children,
  className = 'space-y-6',
}: ActionFormProps) {
  const [state, formAction, pending] = useActionState(action, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.notice) formRef.current?.reset();
  }, [state]);

  // Submitting via onSubmit (not the form action prop) stops React from clearing the fields on error
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={className}>
      {children}
      {state.error && (
        <p
          role="alert"
          className="rounded-md border-l-4 border-red-600 bg-muted p-4 text-sm font-medium text-text"
        >
          {state.error}
        </p>
      )}
      {state.notice && (
        <p
          role="status"
          className="rounded-md border-l-4 border-secondary bg-muted p-4 text-sm font-medium text-text"
        >
          {state.notice}
        </p>
      )}
      <Button type="submit" disabled={pending}>
        {pending ? 'Saving…' : submitLabel}
      </Button>
    </form>
  );
}
