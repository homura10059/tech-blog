import { unique } from '../lib/arrays'
import { getAllPostData } from './posts'

export type Series = {
  hash: string
  title: string
}

export const getAllSeries = async (): Promise<Series[]> => {
  const allPosts = await getAllPostData()
  const allSeries = allPosts
    .flatMap(post => post.series)
    .filter((series): series is Series => series !== null)
  return Array.from(
    new Map(allSeries.map(series => [series.hash, series])).values()
  )
}
