import { createHash } from 'crypto'

import { getAllPosts } from './services/post'

type Hash = string
type Title = string

export const getSeries = (allPosts: Record<string, string>[]) => {
  return Object.fromEntries(
    allPosts
      .flatMap(post => post.series)
      .filter(series => series !== undefined)
      .filter((elem, index, self) => self.indexOf(elem) === index)
      .map<[string, string]>(series => {
        const md5 = createHash('md5')
        const hash = md5.update(series, 'binary').digest('hex')
        return [hash, series]
      })
  )
}

export const getAllSeries = (): Record<Hash, Title> => {
  const allPosts = getAllPosts(['series'])
  return getSeries(allPosts)
}
