import { type MicroCMSListContent, createClient } from 'microcms-js-sdk'

const apiKey = process.env.MICRO_CMS_API_KEY
if (!apiKey) {
  throw new Error('MICRO_CMS_API_KEY is not set')
}

const client = createClient({
  serviceDomain: 'homura-tech-blog',
  apiKey
})

export const getAllMicroCmsContents = async <T>(
  endpoint: string,
  offset = 0,
  limit = 10
): Promise<MicroCmsTypedListContent<T>[]> => {
  const { contents, totalCount } = await client.getList<T>({
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

export type MicroCmsTypedListContent<T> = T & MicroCMSListContent

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
  series: MicroCmsTypedListContent<Series> | null
  tags: MicroCmsTypedListContent<Tag>[]
}
