/**
 * Returns the appropriate Imgur CDN URL for the given source and viewport width.
 */
export const getImgurUrl = (src: string, width: number): string => {
  if (!src.includes('https://i.imgur.com')) return src
  if (width >= 1024) return `${src}h.webp`
  if (width >= 640) return `${src}l.webp`
  return `${src}m.webp`
}
