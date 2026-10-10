import { randomUUID } from "node:crypto";
import { getCurrentUser } from "@/lib/auth";
import { isRateLimited } from "@/lib/rate-limit";
import { publicUrl, uploadObject } from "@/lib/storage";

const MAX_BYTES = 5 * 1024 * 1024;
const EXTENSIONS: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

// Stores one image for a field update (cover or inline) and returns its public URL
export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user || user.mustChangePassword) return Response.json({ error: "Please sign in again." }, { status: 401 });
  if (await isRateLimited("upload", user.id)) {
    return Response.json({ error: "Too many uploads. Please wait a few minutes." }, { status: 429 });
  }

  const file = (await request.formData()).get("file");
  if (!(file instanceof File)) return Response.json({ error: "No image was sent." }, { status: 400 });

  const extension = EXTENSIONS[file.type];
  if (!extension) return Response.json({ error: "Use a JPG, PNG or WebP image." }, { status: 400 });
  if (file.size > MAX_BYTES) return Response.json({ error: "Images must be 5 MB or smaller." }, { status: 400 });

  const key = `stories/${randomUUID()}.${extension}`;
  try {
    await uploadObject(key, new Uint8Array(await file.arrayBuffer()), file.type);
  } catch (error) {
    console.error("[Upload] Failed to store image:", error);
    return Response.json({ error: "The image could not be saved. Please try again." }, { status: 502 });
  }
  return Response.json({ key, url: publicUrl(key) });
}
