import { ImageLoader } from 'next/image'

export const customLoader: ImageLoader = ({ src, width, quality }) => {
  if (!src.includes('https://i.imgur.com')) return src
  if (width >= 1024) return `${src}h.webp`
  if (width >= 640) return `${src}l.webp`
  return `${src}m.webp`
}
