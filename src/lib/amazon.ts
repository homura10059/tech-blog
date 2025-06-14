import { AMAZON_AFFILIATE_TAG } from './constants'

const imageSizes = [
  'THUMBZZZ', // サムネ  75 × 75
  'TZZZZZZZ', // 小    110 × 110
  'MZZZZZZZ', // 中    160 × 160
  'LZZZZZZZ' // 大    500 × 500
] as const

export type ImageSize = typeof imageSizes[number]

const asinRegex = /[^0-9A-Z]([0-9A-Z]{10})([^0-9A-Z]|$)/

export const getASIN = (url: string) => {
  const asin = (url.match(asinRegex) ?? [])[1]
  if (asin === null || asin === undefined || asin === '') return null
  return asin
}

export const getAmazonShortUrl = (url: string) => {
  const asin = getASIN(url)
  if (asin === null) return null
  return `https://www.amazon.co.jp/dp/${asin}?tag=${AMAZON_AFFILIATE_TAG}`
}

export const getAmazonImageUrl = (url: string, size?: ImageSize) => {
  const asin = getASIN(url)
  if (asin === null) return null
  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.09.${
    size ?? 'LZZZZZZZ'
  }.jpg`
}
