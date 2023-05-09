import { createHash } from 'crypto'

import { unique } from '../lib/arrays'
import { getAllPosts } from './posts'

export type Series = {
  hash: string
  title: string
}

export const getSeries = (allPosts: { series?: string }[]): Series[] =>
  unique(
    allPosts
      .flatMap(post => post.series)
      .filter((series): series is string => series !== undefined)
  ).map(title => {
    const md5 = createHash('md5')
    const hash = md5.update(title, 'binary').digest('hex')
    return { hash, title }
  })

export const getAllSeries = (): Series[] => {
  const allPosts = getAllPosts(['series'])
  return getSeries(allPosts)
}
