import { createHash } from 'crypto'

import { unique } from '../lib/arrays'
import { getAllPosts } from './services/post'

type Hash = string
type Title = string

export const getSeries = (
  allPosts: { series?: string }[]
): Record<Hash, Title> =>
  Object.fromEntries(
    unique(
      allPosts
        .flatMap(post => post.series)
        .filter((series): series is string => series !== undefined)
    ).map<[string, string]>(series => {
      const md5 = createHash('md5')
      const hash = md5.update(series, 'binary').digest('hex')
      return [hash, series]
    })
  )

export const getAllSeries = (): Record<Hash, Title> => {
  const allPosts = getAllPosts(['series'])
  return getSeries(allPosts)
}
