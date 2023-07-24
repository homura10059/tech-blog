import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { createSeriesHash } from './series'
import { createTagHash } from './tags'

const postsDirectory = join(process.cwd(), '_posts')
export const getPostSlugs = (): string[] => {
  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(x => x.isFile())
    .map(x => x.name.replace(/\.md$/, ''))
    .filter(slug => slug !== '.DS_Store')
    .filter(slug => !slug.startsWith('draft'))
}

export type PostData = Omit<PostType, 'series' | 'tags'> & {
  tags: {
    title: string
    hash: string
  }[]
  series: {
    title: string
    hash: string
  } | null
}

const isTags = (unk: unknown): unk is string[] =>
  Array.isArray(unk) && unk.every(x => typeof x === 'string')
export const getPostDataBySlug = (slug: string): PostData => {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const series =
    data.series && typeof data.series === 'string'
      ? {
          title: data.series,
          hash: createSeriesHash(data.series)
        }
      : null

  const tags = isTags(data.tags)
    ? data.tags.map(title => {
        return {
          title,
          hash: createTagHash(title)
        }
      })
    : []

  return {
    slug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    excerpt: data.excerpt,
    ogImage: data.ogImage,
    content,
    tags,
    series
  }
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllPostData = (): PostData[] => {
  const slugs = getPostSlugs()
  return slugs
    .map(slug => getPostDataBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  return slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
export const getAllPostsMetadata = () => {
  return getAllPosts(['series', 'tags', 'slug']) as {
    slug?: string
    tags?: string[]
    series?: string
  }[]
}

export type PostType = {
  slug: string
  title: string
  date: string
  coverImage: {
    url: string
  }
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  tags: string[]
  series?: string
}
