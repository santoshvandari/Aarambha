export interface UploadedImage {
  key: string;
  url: string;
}

export type UploadFolder = 'stories' | 'team';

export async function uploadImage(
  file: File,
  folder: UploadFolder = 'stories'
): Promise<UploadedImage> {
  const body = new FormData();
  body.append('file', file);
  body.append('folder', folder);
  const response = await fetch('/api/admin/upload', { method: 'POST', body });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error ?? 'Upload failed.');
  return result;
}
