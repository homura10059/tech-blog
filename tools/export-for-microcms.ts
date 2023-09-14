import fs from 'fs'

import { getAllPostData } from '../src/domain/posts'
import { getAllSeries } from '../src/domain/series'
import { getAllTags } from '../src/domain/tags'

const exportTags = async () => {
  const tags = getAllTags()

  tags.forEach(({ tag, hash }) => {
    const row = `${hash},${tag}\n`
    fs.appendFileSync('./tags.csv', row, 'utf8')
  })
}

const exportSeries = async () => {
  const series = getAllSeries()

  series.forEach(({ title, hash }) => {
    const row = `${hash},"${title}"\n`
    fs.appendFileSync('./series.csv', row, 'utf8')
  })
}

const exportPosts = async () => {
  const posts = await getAllPostData()

  posts.forEach(
    ({ slug, title, coverImage, excerpt, content, series, tags }) => {
      const row = `,"${slug}","${title}","${coverImage.url}","${
        coverImage.aspectRatio ?? ''
      }","${excerpt}",,"${series?.hash ?? ''}","${tags
        .map(tags => tags.hash)
        .join(',')}"\n`
      fs.appendFileSync('./posts.csv', row, 'utf8')
    }
  )
}

exportPosts()

export {}
