import type { TeamMember } from '@/db/schema';
import { publicUrl } from '@/lib/storage';
import { saveTeamMember } from '@/app/admin/(panel)/team/actions';
import ActionForm from './ActionForm';
import Field, { inputClass } from './Field';
import ImageField from './ImageField';

export default function TeamMemberForm({ member }: { member?: TeamMember }) {
  return (
    <ActionForm
      action={saveTeamMember.bind(null, member?.id ?? null)}
      submitLabel={member ? 'Save Changes' : 'Add Member'}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            defaultValue={member?.name}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Position" htmlFor="position">
          <input
            id="position"
            name="position"
            defaultValue={member?.position}
            required
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Bio" htmlFor="bio" hint="Two or three sentences.">
        <textarea
          id="bio"
          name="bio"
          rows={4}
          defaultValue={member?.bio}
          required
          className={inputClass}
        />
      </Field>
      <Field
        label="Photo"
        htmlFor="photo"
        hint="Portrait, shown at 4:5. JPG, PNG or WebP up to 5 MB."
      >
        <ImageField
          name="photo"
          folder="team"
          previewClass="aspect-[4/5] w-40"
          initial={member?.photo ? { key: member.photo, url: publicUrl(member.photo) } : null}
        />
      </Field>
      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="LinkedIn" htmlFor="linkedin" hint="Optional.">
          <input
            id="linkedin"
            name="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/…"
            defaultValue={member?.linkedin ?? ''}
            className={inputClass}
          />
        </Field>
        <Field label="Twitter / X" htmlFor="twitter" hint="Optional.">
          <input
            id="twitter"
            name="twitter"
            type="url"
            placeholder="https://x.com/…"
            defaultValue={member?.twitter ?? ''}
            className={inputClass}
          />
        </Field>
        <Field label="Order" htmlFor="sortOrder" hint="Lower numbers come first.">
          <input
            id="sortOrder"
            name="sortOrder"
            type="number"
            defaultValue={member?.sortOrder ?? 0}
            className={inputClass}
          />
        </Field>
      </div>
    </ActionForm>
  );
}
