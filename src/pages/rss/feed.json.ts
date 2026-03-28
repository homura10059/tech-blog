import type { APIRoute } from 'astro'
import { buildRssFeed } from '../../lib/feed'

export const GET: APIRoute = async () => {
  const feed = await buildRssFeed()
  return new Response(feed.json1(), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}
