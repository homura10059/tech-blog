import { createClient } from 'microcms-js-sdk'
import NodeCache from 'node-cache'

import { OgpMeta } from './getOgp'

export const client = createClient({
  serviceDomain: 'homura-tech-blog',
  apiKey: process.env.MICRO_CMS_API_KEY ?? ''
})

const cache = new NodeCache()

export const cachedAllMicroCmsContents = async <T>(
  endpoint: string,
  offset = 0,
  limit = 10
): Promise<MicroCmsContent<T>[]> => {
  const cacheKey = `micro-cms-${endpoint}`
  const cacheData = cache.get<MicroCmsContent<T>[]>(cacheKey)
  if (cacheData) return cacheData
  const data = await getAllMicroCmsContents<T>(endpoint, offset, limit)
  cache.set<MicroCmsContent<T>[]>(cacheKey, data)
  return data
}

export const getAllMicroCmsContents = async <T>(
  endpoint: string,
  offset = 0,
  limit = 10
): Promise<MicroCmsContent<T>[]> => {
  const { contents, totalCount } = await client.get<MicroCmsListResponse<T>>({
    endpoint,
    queries: { offset, limit, orders: '-publishedAt' }
  })

  if (offset >= totalCount) {
    return contents
  }
  const nextRes = await getAllMicroCmsContents<T>(
    endpoint,
    offset + contents.length,
    limit
  )
  return [...contents, ...nextRes]
}

export type MicroCmsContent<T> = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
} & T

export type MicroCmsListResponse<T> = {
  contents: MicroCmsContent<T>[]
  totalCount: number
  offset: number
  limit: number
}

export type Series = {
  title: string
}
export type Tag = {
  title: string
}

export type Post = {
  slug: string
  title: string
  eyecatch: string
  aspectRatio: string[]
  excerpt: string
  content: string
  series: MicroCmsContent<Series> | null
  tags: MicroCmsContent<Tag>[]
}
