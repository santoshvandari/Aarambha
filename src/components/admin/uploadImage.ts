export interface UploadedImage {
  key: string;
  url: string;
}

export async function uploadImage(file: File): Promise<UploadedImage> {
  const body = new FormData();
  body.append('file', file);
  const response = await fetch('/api/admin/upload', { method: 'POST', body });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error ?? 'Upload failed.');
  return result;
}
