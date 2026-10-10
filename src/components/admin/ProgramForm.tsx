import type { Program } from '@/db/schema';
import { programIcons } from '@/lib/icons';
import { saveProgram } from '@/app/admin/(panel)/programs/actions';
import ActionForm from './ActionForm';
import Field, { inputClass } from './Field';

export default function ProgramForm({ program }: { program?: Program }) {
  return (
    <ActionForm
      action={saveProgram.bind(null, program?.id ?? null)}
      submitLabel={program ? 'Save Changes' : 'Add Program'}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Title" htmlFor="title">
          <input
            id="title"
            name="title"
            defaultValue={program?.title}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Slug" htmlFor="slug" hint="Leave empty to create it from the title.">
          <input id="slug" name="slug" defaultValue={program?.slug} className={inputClass} />
        </Field>
      </div>
      <Field label="Summary" htmlFor="summary" hint="One line, shown on the home page.">
        <input
          id="summary"
          name="summary"
          defaultValue={program?.summary}
          required
          className={inputClass}
        />
      </Field>
      <Field label="Description" htmlFor="description" hint="Shown on the Programs page.">
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={program?.description}
          required
          className={inputClass}
        />
      </Field>
      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="Icon" htmlFor="icon">
          <select
            id="icon"
            name="icon"
            defaultValue={program?.icon ?? 'education'}
            className={inputClass}
          >
            {Object.entries(programIcons).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Status" htmlFor="status">
          <select
            id="status"
            name="status"
            defaultValue={program?.status ?? 'active'}
            className={inputClass}
          >
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </Field>
        <Field label="Order" htmlFor="sortOrder" hint="Lower numbers come first.">
          <input
            id="sortOrder"
            name="sortOrder"
            type="number"
            defaultValue={program?.sortOrder ?? 0}
            className={inputClass}
          />
        </Field>
      </div>
      <label className="flex items-center gap-3 text-sm text-text">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={program?.featured}
          className="h-4 w-4 accent-secondary"
        />
        Feature on the home page
      </label>
    </ActionForm>
  );
}
