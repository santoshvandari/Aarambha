import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/db/schema";
import { formatDate } from "@/lib/content";
import { publicUrl } from "@/lib/storage";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all hover:border-slate-400 hover:shadow-md dark:hover:border-slate-600">
      {story.coverImage && (
        <div className="relative aspect-[16/9] border-b border-border bg-muted">
          <Image src={publicUrl(story.coverImage)} alt="" fill unoptimized className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-textLight">
          {story.program} · <time dateTime={story.publishedAt}>{formatDate(story.publishedAt)}</time>
        </p>
        <h2 className="mt-3 font-heading text-xl font-bold leading-snug tracking-tight text-text">
          <Link href={`/updates/${story.slug}`} className="after:absolute after:inset-0 group-hover:underline">
            {story.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-textLight">{story.summary}</p>
      </div>
    </article>
  );
}
