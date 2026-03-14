import { parseISO } from 'date-fns'
import { Feed } from 'feed'

import { type PostData, getAllPostData } from '../domain/posts'
import { BASE_URL, BLOG_DESCRIPTION, BLOG_TITLE } from './constants'
import { getCopyright } from './copyright'

const createFeedItem = async (baseUrl: string, post: PostData) => {
  const url = `${baseUrl}/posts/${post.slug}`
  const date = parseISO(post.date)
  return {
    title: post.title,
    description: post.excerpt,
    id: post.slug,
    link: url,
    content: post.content,
    date
  }
}

export const buildRssFeed = async (): Promise<Feed> => {
  const baseUrl = import.meta.env.SITE ?? BASE_URL
  const date = new Date()

  const feed = new Feed({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/favicon/favicon-16x16.png`,
    copyright: getCopyright(),
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`
    }
  })

  const allPosts = await getAllPostData()
  const feedItems = await Promise.all(
    allPosts.map(post => createFeedItem(baseUrl, post))
  )

  // biome-ignore lint/complexity/noForEach: <explanation>
  feedItems.forEach(item => {
    feed.addItem(item)
  })

  return feed
}

/**
 * @deprecated Use buildRssFeed() instead. This function is kept for backward compatibility
 * with the home page generation during build.
 */
const generatedRssFeed = async (): Promise<void> => {
  // In Astro, RSS feeds are generated via API endpoints (src/pages/rss/*.ts)
  // This function is a no-op to avoid breaking existing imports
}

export default generatedRssFeed
