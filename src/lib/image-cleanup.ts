import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { db } from '@/db';
import { stories, teamMembers } from '@/db/schema';
import { config, deleteObject, s3Client } from './storage';

// Only files the upload route creates are ever considered; anything else in the bucket is left alone
const UPLOAD_KEY = /^(stories|team)\/[0-9a-f-]{36}\.(jpg|png|webp)$/;
const KEY_IN_HTML = /(?:stories|team)\/[0-9a-f-]{36}\.(?:jpg|png|webp)/g;
// Uploads younger than this may belong to a form that is still being filled in
const GRACE_MS = 24 * 60 * 60 * 1_000;

async function listUploads() {
  const keys: string[] = [];
  const cutoff = Date.now() - GRACE_MS;
  for (const prefix of ['stories/', 'team/']) {
    let token: string | undefined;
    do {
      const page = await s3Client.send(
        new ListObjectsV2Command({
          Bucket: config.bucketName,
          Prefix: prefix,
          ContinuationToken: token,
        })
      );
      for (const object of page.Contents ?? []) {
        if (object.Key && UPLOAD_KEY.test(object.Key) && object.LastModified) {
          if (object.LastModified.getTime() < cutoff) keys.push(object.Key);
        }
      }
      token = page.IsTruncated ? page.NextContinuationToken : undefined;
    } while (token);
  }
  return keys;
}

// Covers, team photos and every image inside an article body, drafts included
async function usedKeys() {
  const [storyRows, teamRows] = await Promise.all([
    db.select({ cover: stories.coverImage, body: stories.body }).from(stories),
    db.select({ photo: teamMembers.photo }).from(teamMembers),
  ]);
  const used = new Set<string>();
  for (const { cover, body } of storyRows) {
    if (cover) used.add(cover);
    for (const [key] of body.matchAll(KEY_IN_HTML)) used.add(key);
  }
  for (const { photo } of teamRows) if (photo) used.add(photo);
  return used;
}

// Deletes uploads that nothing references any more: replaced picks, abandoned forms, images
// removed from articles, and the inline images of deleted updates
export async function removeUnusedImages() {
  const uploads = await listUploads();
  if (uploads.length === 0) return;
  const used = await usedKeys();
  const unused = uploads.filter((key) => !used.has(key));
  if (unused.length === 0) return;

  // A database that doesn't match this bucket (an empty or wrong DATABASE_URL) would make most
  // images look unused; refuse instead of wiping them
  if (unused.length > 10 && unused.length > uploads.length / 2) {
    console.warn(
      `[Cleanup] Skipped: ${unused.length} of ${uploads.length} images look unused. ` +
        'Check that DATABASE_URL and the bucket belong together.'
    );
    return;
  }

  for (const key of unused) await deleteObject(key);
  console.info(`[Cleanup] Removed ${unused.length} unused image(s): ${unused.join(', ')}`);
}
