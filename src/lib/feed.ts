import { parseISO } from 'date-fns'
import { Feed } from 'feed'
import fs from 'fs'

import { getAllPosts } from '../domain/posts'
import { BLOG_DESCRIPTION, BLOG_TITLE } from './constants'
import { getCopyright } from './copyright'
import markdownToHtml from './markdownToHtml'

const createFeed = async (baseUrl: string, post: Record<string, string>) => {
  const url = `${baseUrl}/posts/${post.slug}`
  const content = await markdownToHtml(post.content || '')
  const date = parseISO(post.date)
  return {
    title: post.title,
    description: post.description,
    id: post.slug,
    link: url,
    content: content,
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

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'excerpt'
  ])
  const feeds = await Promise.all(
    allPosts.map(post => createFeed(baseUrl, post))
  )
  feeds.forEach(item => {
    feed.addItem(item)
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}

export default generatedRssFeed
