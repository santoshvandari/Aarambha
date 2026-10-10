import type { UserRole } from '@/db/schema';
import { inputClass } from './Field';

export const roleLabels: Record<UserRole, string> = {
  admin: 'Admin: everything, including users',
  editor: 'Editor: content and inbox',
};

export default function RoleSelect({
  defaultValue = 'editor',
  disabled,
}: {
  defaultValue?: UserRole;
  disabled?: boolean;
}) {
  return (
    <select
      id="role"
      name="role"
      defaultValue={defaultValue}
      disabled={disabled}
      className={inputClass}
    >
      {Object.entries(roleLabels).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
