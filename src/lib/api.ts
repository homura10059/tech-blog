import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = (): string[] => {
  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(x => x.isFile())
    .map(x => x.name.replace(/\.md$/, ''))
    .filter(slug => slug !== '.DS_Store')
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

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  return slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
