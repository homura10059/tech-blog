import { BASE_URL, BLOG_DESCRIPTION, BLOG_TITLE } from './constants'

type OGP = {
  url: string
  type: 'website' | 'article'
  title: string // 20文字程度
  description: string // 80~90文字程度
  site_name: string
  image: string
}
type BlogMeta = {
  path: string
  title?: string
  description?: string
  image?: string
}

export const createOGP = ({
  title,
  description,
  path,
  image
}: BlogMeta): OGP => {
  return {
    title: title ?? BLOG_TITLE,
    description: description ?? BLOG_DESCRIPTION,
    type: title ? 'article' : 'website',
    url: `${BASE_URL}${path}`,
    image: image ? `${image}m.jpeg` : 'https://i.imgur.com/oZCMyWE.webp',
    site_name: BLOG_TITLE
  }
}
