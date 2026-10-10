'use client';

import { useState } from 'react';
import type { Story } from '@/db/schema';
import { saveStory } from '@/app/admin/(panel)/updates/actions';
import { slugify } from '@/lib/slug';
import ActionForm from './ActionForm';
import Field, { inputClass } from './Field';
import ImageField from './ImageField';
import RichTextEditor from './RichTextEditor';

interface StoryFormProps {
  story?: Story;
  coverUrl?: string | null;
  programs: string[];
}

export default function StoryForm({ story, coverUrl, programs }: StoryFormProps) {
  const [slug, setSlug] = useState(story?.slug ?? '');
  // New updates follow the title until the slug is edited by hand
  const [slugTouched, setSlugTouched] = useState(Boolean(story));
  const options =
    story && !programs.includes(story.program) ? [story.program, ...programs] : programs;
  const today = new Date().toISOString().slice(0, 10);

  return (
    <ActionForm
      action={saveStory.bind(null, story?.id ?? null)}
      submitLabel={story ? 'Save Changes' : 'Save Update'}
    >
      <Field label="Title" htmlFor="title">
        <input
          id="title"
          name="title"
          defaultValue={story?.title}
          required
          className={`${inputClass} font-heading text-lg font-bold`}
          onChange={(event) => !slugTouched && setSlug(slugify(event.target.value))}
        />
      </Field>
      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="Program" htmlFor="program">
          <select
            id="program"
            name="program"
            defaultValue={story?.program ?? options[0]}
            required
            className={inputClass}
          >
            {options.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Date" htmlFor="publishedAt">
          <input
            id="publishedAt"
            name="publishedAt"
            type="date"
            defaultValue={story?.publishedAt ?? today}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Web address" htmlFor="slug" hint={`/updates/${slug || '…'}`}>
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(event) => {
              setSlugTouched(true);
              setSlug(event.target.value);
            }}
            className={inputClass}
          />
        </Field>
      </div>
      <Field
        label="Summary"
        htmlFor="summary"
        hint="Two or three sentences, shown on cards and at the top of the article."
      >
        <textarea
          id="summary"
          name="summary"
          rows={3}
          defaultValue={story?.summary}
          required
          className={inputClass}
        />
      </Field>
      <Field
        label="Cover image"
        htmlFor="coverImage"
        hint="JPG, PNG or WebP up to 5 MB. Landscape works best."
      >
        <ImageField
          name="coverImage"
          initial={story?.coverImage && coverUrl ? { key: story.coverImage, url: coverUrl } : null}
        />
      </Field>
      <div>
        <p className="mb-2 text-sm font-semibold text-text">Article</p>
        <RichTextEditor name="body" initialHtml={story?.body ?? ''} />
      </div>
      <label className="flex items-center gap-3 text-sm text-text">
        <input
          type="checkbox"
          name="published"
          defaultChecked={story?.published ?? false}
          className="h-4 w-4 accent-secondary"
        />
        Published (visible on the website)
      </label>
    </ActionForm>
  );
}
