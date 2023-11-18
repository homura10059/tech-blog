import axios from 'axios'
import { JSDOM } from 'jsdom'

import { getAmazonImageUrl, getAmazonShortUrl } from './amazon'
import { readCache, writeCache } from './cache'

export type OgpMeta = {
  title: string
  description: string
  image: string
  url: string
}

const trimTitle = (title: string) => title.trim()

const getImageUrl = (imageUrl: string, url: string) => {
  if (imageUrl.charAt(0) !== '/') return imageUrl
  const parsed = new URL(url)
  return `https//${parsed.hostname}${imageUrl}`
}

type HasImageURL = {
  'og:image:secure_url'?: string
  'og:image'?: string
}
const getOgpImageUrl = (mergedData: HasImageURL, encodedUri: string) => {
  const imageUrl =
    mergedData['og:image:secure_url'] ?? mergedData['og:image'] ?? ''
  return getImageUrl(imageUrl, encodedUri)
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
    title: trimTitle(mergedData['og:title'] ?? mergedData.title),
    description: mergedData['og:description'] ?? mergedData.description,
    image: isAmazon
      ? getAmazonImageUrl(encodedUri) ?? ''
      : getOgpImageUrl(mergedData, encodedUri),
    url: encodedUri
  }

  await writeCache(ogpMeta)

  return ogpMeta
}
