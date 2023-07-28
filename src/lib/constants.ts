export const BLOG_TITLE = "homura's tech blog"
export const BLOG_DESCRIPTION = 'programming memo & tech posts.'

export const STORY_BOOK_URL = 'https://o-hayato.github.io/tech-blog/storybook/'

export const TWITTER_ACCOUNT = '@homura10059'
export const BASE_URL = 'https://tech-blog.homura10059.dev'

export const AMAZON_AFFILIATE_TAG = 'homura10059-22'

export type Nav = {
  name: string
  href: string
  asCurrent: string[]
}
export const NAVIGATIONS: Nav[] = [
  { name: 'Blog', href: '/posts', asCurrent: [] },
  { name: 'Profile', href: '/profile', asCurrent: [] },
  { name: 'About', href: '/about', asCurrent: [] }
]

export const RSS_FEEDS = [
  { name: 'feed', href: '/rss/feed.xml' },
  { name: 'atom', href: '/rss/atom.xml' },
  { name: 'json', href: '/rss/feed.json' }
]
