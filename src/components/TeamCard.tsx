import Image from 'next/image';
import { LuLinkedin, LuTwitter } from 'react-icons/lu';
import type { TeamMember } from '@/db/schema';
import { publicUrl } from '@/lib/storage';

export default function TeamCard({ member }: { member: TeamMember }) {
  const { name, position, bio, photo } = member;
  const links = [
    { href: member.linkedin, label: 'LinkedIn', icon: LuLinkedin },
    { href: member.twitter, label: 'Twitter', icon: LuTwitter },
  ].filter((l) => l.href);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-200 hover:border-slate-400 hover:shadow-md dark:hover:border-slate-600">
      <div className="relative aspect-4/5 overflow-hidden border-b border-border bg-muted">
        {photo && (
          <Image
            src={publicUrl(photo)}
            alt={`Portrait of ${name}`}
            fill
            unoptimized
            className="object-cover grayscale-[35%] transition duration-300 group-hover:grayscale-0"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1 text-xs font-semibold tracking-[0.14em] text-textLight uppercase">
          {position}
        </p>
        <h3 className="font-heading text-lg font-bold tracking-tight text-text">{name}</h3>
        <span className="my-4 h-0.5 w-8 bg-secondary" aria-hidden="true" />
        <p className="flex-1 text-sm leading-relaxed text-textLight">{bio}</p>
        {links.length > 0 && (
          <div className="mt-5 flex gap-2 border-t border-border pt-5">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on ${label}`}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-textLight transition-colors hover:border-text hover:text-text"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
