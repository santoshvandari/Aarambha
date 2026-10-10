"use client";

import type { ReactNode } from "react";

interface ConfirmButtonProps {
  message: string;
  children: ReactNode;
  className?: string;
}

// Submit button for a delete form that asks before the form is sent
export default function ConfirmButton({ message, children, className }: ConfirmButtonProps) {
  return (
    <button
      type="submit"
      className={className}
      onClick={(event) => {
        if (!window.confirm(message)) event.preventDefault();
      }}
    >
      {children}
    </button>
  );
}
