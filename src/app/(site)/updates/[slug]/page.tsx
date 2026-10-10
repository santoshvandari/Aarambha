import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LuArrowLeft } from 'react-icons/lu';
import Ridgeline from '@/components/Ridgeline';
import { formatDate, getPublishedStory } from '@/lib/content';
import { publicUrl } from '@/lib/storage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = await getPublishedStory((await params).slug);
  if (!story) return {};
  return { title: `${story.title} — Aarambha`, description: story.summary };
}

export default async function StoryPage({ params }: Props) {
  const story = await getPublishedStory((await params).slug);
  if (!story) notFound();

  // story.body is sanitized when it is saved (src/lib/sanitize.ts), so it is safe to render as HTML

  return (
    <article>
      <header className="relative overflow-hidden border-b border-heroBorder bg-hero text-heroText">
        <div className="relative mx-auto max-w-3xl px-6 pt-16 pb-32 sm:pt-20 sm:pb-40">
          <Link
            href="/updates"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-heroMuted hover:text-heroText"
          >
            <LuArrowLeft className="h-4 w-4" aria-hidden="true" />
            All updates
          </Link>
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-heroMuted uppercase">
            <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />
            {story.program} ·{' '}
            <time dateTime={story.publishedAt}>{formatDate(story.publishedAt)}</time>
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            {story.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-heroMuted">{story.summary}</p>
        </div>
        <Ridgeline />
      </header>

      <div className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {story.coverImage && (
            <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src={publicUrl(story.coverImage)}
                alt=""
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>
          )}
          <div className="article" dangerouslySetInnerHTML={{ __html: story.body }} />
        </div>
      </div>
    </article>
  );
}
