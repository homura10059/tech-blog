import { getAllPostData } from './posts'

export type TagMetaData = {
  hash: string
  title: string
}

export const getAllTags = async (): Promise<TagMetaData[]> => {
  const allPosts = await getAllPostData()
  const allTags = allPosts.flatMap(post => post.tags).sort()
  return Array.from(new Map(allTags.map(tags => [tags.hash, tags])).values())
}
