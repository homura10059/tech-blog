import type { APIRoute } from 'astro'
import { buildRssFeed } from '../../lib/feed'

export const GET: APIRoute = async () => {
  const feed = await buildRssFeed()
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  })
}
