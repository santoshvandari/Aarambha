'use client';

import { useRef, useState, type ReactNode } from 'react';
import { EditorContent, useEditor, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import {
  LuBold,
  LuHeading2,
  LuHeading3,
  LuImage,
  LuItalic,
  LuLink,
  LuList,
  LuListOrdered,
  LuMinus,
  LuQuote,
  LuRedo2,
  LuUndo2,
} from 'react-icons/lu';
import { uploadImage } from './uploadImage';

interface ToolProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

function Tool({ label, active, disabled, onClick, children }: ToolProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-md text-base transition-colors disabled:opacity-40 ${
        active ? 'bg-text text-background' : 'text-text hover:bg-muted'
      }`}
    >
      {children}
    </button>
  );
}

function setLink(editor: Editor) {
  const previous = editor.getAttributes('link').href as string | undefined;
  const url = window.prompt(
    'Link address (leave empty to remove the link)',
    previous ?? 'https://'
  );
  if (url === null) return;
  if (url.trim() === '') editor.chain().focus().unsetLink().run();
  else editor.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run();
}

// Article editor; keeps its HTML in a hidden input so it submits with the surrounding form
export default function RichTextEditor({
  name,
  initialHtml,
}: {
  name: string;
  initialHtml: string;
}) {
  const [html, setHtml] = useState(initialHtml);
  const [status, setStatus] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        code: false,
        codeBlock: false,
        link: { openOnClick: false, autolink: true },
      }),
      Image,
    ],
    content: initialHtml,
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    editorProps: {
      attributes: {
        class: 'article min-h-[24rem] px-5 py-4 focus:outline-none',
        'aria-label': 'Article body',
      },
    },
    onUpdate: ({ editor }) => setHtml(editor.isEmpty ? '' : editor.getHTML()),
  });

  async function insertImage(file: File | undefined) {
    if (!file || !editor) return;
    setStatus('Uploading image…');
    try {
      const { url } = await uploadImage(file);
      editor.chain().focus().setImage({ src: url, alt: '' }).run();
      setStatus('');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Upload failed.');
    } finally {
      if (fileRef.current) fileRef.current.value = '';
    }
  }

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface focus-within:border-secondary">
      <input type="hidden" name={name} value={html} />
      {editor && (
        <div
          className="flex flex-wrap items-center gap-1 border-b border-border bg-background p-1.5"
          role="toolbar"
        >
          <Tool
            label="Heading"
            active={editor.isActive('heading', { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >
            <LuHeading2 />
          </Tool>
          <Tool
            label="Subheading"
            active={editor.isActive('heading', { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          >
            <LuHeading3 />
          </Tool>
          <Tool
            label="Bold"
            active={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <LuBold />
          </Tool>
          <Tool
            label="Italic"
            active={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <LuItalic />
          </Tool>
          <Tool label="Link" active={editor.isActive('link')} onClick={() => setLink(editor)}>
            <LuLink />
          </Tool>
          <Tool
            label="Bullet list"
            active={editor.isActive('bulletList')}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <LuList />
          </Tool>
          <Tool
            label="Numbered list"
            active={editor.isActive('orderedList')}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <LuListOrdered />
          </Tool>
          <Tool
            label="Quote"
            active={editor.isActive('blockquote')}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            <LuQuote />
          </Tool>
          <Tool label="Divider" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <LuMinus />
          </Tool>
          <Tool label="Insert image" onClick={() => fileRef.current?.click()}>
            <LuImage />
          </Tool>
          <span className="mx-1 h-6 w-px bg-border" aria-hidden="true" />
          <Tool
            label="Undo"
            disabled={!editor.can().undo()}
            onClick={() => editor.chain().focus().undo().run()}
          >
            <LuUndo2 />
          </Tool>
          <Tool
            label="Redo"
            disabled={!editor.can().redo()}
            onClick={() => editor.chain().focus().redo().run()}
          >
            <LuRedo2 />
          </Tool>
          {status && (
            <span role="status" className="ml-2 text-xs text-textLight">
              {status}
            </span>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            tabIndex={-1}
            onChange={(event) => insertImage(event.target.files?.[0])}
          />
        </div>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}
