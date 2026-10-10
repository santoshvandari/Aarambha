'use client';

import { useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { inputClass } from './Field';

type PasswordInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'className'>;

export default function PasswordInput(props: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? LuEyeOff : LuEye;

  return (
    <div className="relative">
      <input {...props} type={visible ? 'text' : 'password'} className={`${inputClass} pr-11`} />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        aria-pressed={visible}
        className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-md text-textLight hover:text-text focus-visible:ring-2 focus-visible:ring-secondary/30 focus-visible:outline-none"
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
