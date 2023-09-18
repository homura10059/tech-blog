import markdownToHtml from '../lib/markdownToHtml'
import {
  getAllMicroCmsContents,
  MicroCmsTypedListContent,
  Post,
  Series,
  Tag
} from '../lib/micro-cms-client'

export const getPostSlugs = async (): Promise<string[]> => {
  const allPosts = await getAllPostData()
  return allPosts.map(post => post.slug)
}

export type PostData = {
  slug: string
  title: string
  date: string
  coverImage: {
    url: string
    aspectRatio?: string
  }
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  tags: {
    title: string
    hash: string
  }[]
  series: {
    title: string
    hash: string
  } | null
}

export const getPostDataBySlug = async (slug: string): Promise<PostData> => {
  const allPosts = await getAllPostData()
  return allPosts.filter(post => post.slug === slug)[0]
}

const intoTags = (tags: MicroCmsTypedListContent<Tag>[]): PostData['tags'] =>
  tags.map(tag => ({
    title: tag.title,
    hash: tag.id
  }))

const intoSeries = (
  series: MicroCmsTypedListContent<Series> | null
): PostData['series'] => {
  if (series === null) return null
  return {
    title: series.title,
    hash: series.id
  }
}

export const intoPostData = async (
  post: MicroCmsTypedListContent<Post>
): Promise<PostData> => ({
  slug: post.slug,
  title: post.title,
  date: post.publishedAt ?? '',
  coverImage: {
    url: post.eyecatch,
    aspectRatio: post.aspectRatio[0]
  },
  excerpt: post.excerpt,
  ogImage: {
    url: `${post.eyecatch}m.jpeg`
  },
  content: await markdownToHtml(post.content || ''),
  tags: intoTags(post.tags),
  series: intoSeries(post.series)
})

export const getAllPostData = async (): Promise<PostData[]> => {
  const contents = await getAllMicroCmsContents<Post>('posts')
  const allContents = await Promise.all(contents.map(intoPostData))
  return allContents
}
