'use client';

import { useRef, useState } from 'react';
import { uploadImage, type UploadFolder } from './uploadImage';

interface ImageFieldProps {
  name: string;
  initial?: { key: string; url: string } | null;
  folder?: UploadFolder;
  previewClass?: string;
}

// Uploads as soon as a file is picked; the form only submits the stored object key
export default function ImageField({
  name,
  initial = null,
  folder = 'stories',
  previewClass = 'aspect-[16/9] w-full',
}: ImageFieldProps) {
  const [image, setImage] = useState(initial);
  const [status, setStatus] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setStatus('Uploading…');
    try {
      setImage(await uploadImage(file, folder));
      setStatus('');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Upload failed.');
    } finally {
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div>
      <input type="hidden" name={name} value={image?.key ?? ''} />
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.url}
          alt=""
          className={`mb-3 rounded-md border border-border object-cover ${previewClass}`}
        />
      )}
      <div className="flex flex-wrap items-center gap-3">
        <label className="cursor-pointer rounded-md border border-slate-400 px-4 py-2 text-sm font-semibold text-text hover:bg-text hover:text-background dark:border-slate-500">
          {image ? 'Replace image' : 'Upload image'}
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            onChange={(event) => handleFile(event.target.files?.[0])}
          />
        </label>
        {image && (
          <button
            type="button"
            onClick={() => setImage(null)}
            className="text-sm font-semibold text-textLight hover:text-text"
          >
            Remove
          </button>
        )}
        {status && (
          <span role="status" className="text-sm text-textLight">
            {status}
          </span>
        )}
      </div>
    </div>
  );
}
