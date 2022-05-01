import axios from 'axios'
import { createHash } from 'crypto'
import fs from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

import { getAmazonImageUrl, getAmazonShortUrl } from './amazon'

export type OgpMeta = {
  title: string
  description: string
  image: string
  url: string
}

const CACHE_DIR = '.cache/ogp'
const readCache = async (key: string): Promise<OgpMeta | null> => {
  const hash = createHash('md5').update(key).digest('hex')
  const cacheFile = path.join(CACHE_DIR, hash)
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR)
    }
    const file = await fs.promises.readFile(cacheFile, 'utf-8')
    return JSON.parse(file) as OgpMeta
  } catch (_e) {
    return null
  }
}

const writeCache = async (data: OgpMeta): Promise<void> => {
  const hash = createHash('md5').update(data.url).digest('hex')
  const cacheFile = path.join(CACHE_DIR, hash)
  try {
    return fs.promises.writeFile(cacheFile, JSON.stringify(data))
  } catch (_e) {
    return Promise.resolve()
  }
}

const trimTitle = (title: string) => title.trim()

const getImageUrl = (imageUrl: string, url: string) => {
  if (imageUrl.charAt(0) !== '/') return imageUrl
  const parsed = new URL(url)
  return `${parsed.protocol}//${parsed.hostname}${imageUrl}`
}

export const getOgp = async (url: string): Promise<OgpMeta> => {
  const isAmazon = url.includes('https://www.amazon.co.jp/')
  const encodedUri = encodeURI(isAmazon ? getAmazonShortUrl(url) ?? url : url)

  const cache = await readCache(encodedUri)
  if (cache) return cache

  const headers = { 'User-Agent': 'bot' }

  const res = await axios.get(encodedUri, { headers: headers })
  const html = res.data
  const dom = new JSDOM(html)
  const meta = isAmazon
    ? dom.window.document.body.querySelectorAll('meta')
    : dom.window.document.head.querySelectorAll('meta')

  const metaTags = Array.from(meta.values())
  const metaData = Object.fromEntries(
    metaTags
      .filter(element => element.name !== '')
      .map(element => [element.name, element.content])
  )
  const propertyData = Object.fromEntries(
    metaTags
      .filter(element => element.hasAttribute('property'))
      .map(element => [
        element.getAttribute('property')?.trim(),
        element.content
      ])
  )

  const mergedData = { ...metaData, ...propertyData }

  const ogpMeta: OgpMeta = {
    title: trimTitle(mergedData['og:title'] ?? mergedData['title']),
    description: mergedData['og:description'] ?? mergedData['description'],
    image: isAmazon
      ? getAmazonImageUrl(encodedUri) ?? ''
      : getImageUrl(mergedData['og:image'], encodedUri),
    url: encodedUri
  }

  await writeCache(ogpMeta)

  return ogpMeta
}
