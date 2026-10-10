import type { Stat } from '@/db/schema';
import { saveStat } from '@/app/admin/(panel)/stats/actions';
import ActionForm from './ActionForm';
import Field, { inputClass } from './Field';

export default function StatForm({ stat }: { stat?: Stat }) {
  return (
    <ActionForm
      action={saveStat.bind(null, stat?.id ?? null)}
      submitLabel={stat ? 'Save Changes' : 'Add Number'}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Number" htmlFor="value" hint={'For example "500+" or "10K+".'}>
          <input
            id="value"
            name="value"
            defaultValue={stat?.value}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Label" htmlFor="label">
          <input
            id="label"
            name="label"
            defaultValue={stat?.label}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Shown on" htmlFor="placement">
          <select
            id="placement"
            name="placement"
            defaultValue={stat?.placement ?? 'home'}
            className={inputClass}
          >
            <option value="home">Home page</option>
            <option value="programs">Programs page</option>
          </select>
        </Field>
        <Field label="Order" htmlFor="sortOrder" hint="Lower numbers come first.">
          <input
            id="sortOrder"
            name="sortOrder"
            type="number"
            defaultValue={stat?.sortOrder ?? 0}
            className={inputClass}
          />
        </Field>
      </div>
    </ActionForm>
  );
}
