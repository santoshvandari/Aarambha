import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import StoryCard from '@/components/StoryCard';
import Reveal from '@/components/Reveal';
import CtaBlock from '@/components/CtaBlock';
import { getPublishedStories } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Field Updates — Aarambha',
  description: "News and reports from Aarambha's programs and volunteers in Jhapa, Nepal.",
};

export default async function UpdatesPage() {
  const stories = await getPublishedStories();

  return (
    <>
      <PageHeader
        eyebrow="Field Updates"
        title="From the community"
        description="Reports from our programs, written by the volunteers who run them."
      />

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {stories.length === 0 ? (
            <p className="text-center text-textLight">No updates yet. Check back soon.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, i) => (
                <Reveal key={story.id} index={i % 3}>
                  <StoryCard story={story} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBlock
        title="Want to be part of the next story?"
        description="Every update here was made possible by volunteers. Join a program and help write the next one."
        primary={{ label: 'Volunteer With Us', href: '/contact?type=volunteer' }}
      />
    </>
  );
}
