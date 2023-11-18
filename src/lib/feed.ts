import fs from 'fs'
import { parseISO } from 'date-fns'
import { Feed } from 'feed'

import { PostData, getAllPostData } from '../domain/posts'
import { BLOG_DESCRIPTION, BLOG_TITLE } from './constants'
import { getCopyright } from './copyright'
import markdownToHtml from './markdownToHtml'

const createFeed = async (baseUrl: string, post: PostData) => {
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

const generatedRssFeed = async (): Promise<void> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const date = new Date()

  // デフォルトになる feed の情報
  const feed = new Feed({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/favicon/favicon-16x16.png`, // image には OGP 画像でなくファビコンを指定
    copyright: getCopyright(),
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`
    }
  })

  const allPosts = await getAllPostData()
  const feeds = await Promise.all(
    allPosts.map(post => createFeed(baseUrl, post))
  )

  // biome-ignore lint/complexity/noForEach: <explanation>
  feeds.forEach(item => {
    feed.addItem(item)
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}

export default generatedRssFeed
