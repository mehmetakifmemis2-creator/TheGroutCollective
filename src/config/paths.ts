// GitHub Pages alt klasörü ve özel domain için ortak görsel yolu.
export function publicAsset(source: string): string {
  if (!source.startsWith("/")) return source;
  return (process.env.NEXT_PUBLIC_BASE_PATH || "") + source;
}
