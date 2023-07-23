import { createHash } from 'crypto'

import { getAllPosts } from './posts'

export type TagMetaData = {
  hash: string
  tag: string
  count: number
}
export const createTagHash = (title: string): string => {
  const md5 = createHash('md5')
  return md5.update(title, 'binary').digest('hex')
}

export const getTags = (allPosts: { tags?: string[] }[]): TagMetaData[] => {
  const nonUniqueTags = allPosts
    .flatMap(post => post.tags)
    .filter((tag): tag is string => tag !== undefined)

  const initialTagInfo: Record<string, number> = {}
  const tagCountMap = nonUniqueTags.reduce((previousValue, currentValue) => {
    const count = previousValue[currentValue] ?? 1
    previousValue[currentValue] = count + 1
    return previousValue
  }, initialTagInfo)

  const uniqueTags = Object.keys(tagCountMap)
  return uniqueTags.map(tag => {
    const hash = createTagHash(tag)
    const count = tagCountMap[tag]
    return {
      hash,
      tag,
      count
    }
  })
}

export const getAllTags = (): TagMetaData[] => {
  const allPosts = getAllPosts(['tags'])
  return getTags(allPosts)
}
