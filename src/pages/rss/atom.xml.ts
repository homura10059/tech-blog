import type { APIRoute } from 'astro'
import { buildRssFeed } from '../../lib/feed'

export const GET: APIRoute = async () => {
  const feed = await buildRssFeed()
  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8'
    }
  })
}
