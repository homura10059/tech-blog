import { afterEach, beforeEach, expect, test, vi } from 'vitest'

import { getOgp } from './getOgp'

vi.mock('./cache', () => ({
  readCache: vi.fn().mockResolvedValue(undefined),
  writeCache: vi.fn().mockResolvedValue(undefined)
}))

const HTML_FIXTURES: Record<string, string> = {
  'https://tech-blog.homura10059.dev/': `
    <html><head>
      <meta property="og:title" content="homura's tech blog">
      <meta property="og:description" content="programming memo &amp; tech posts.">
      <meta property="og:image" content="https://i.imgur.com/oZCMyWE.png">
    </head></html>
  `,
  'https://tech-blog.homura10059.dev/posts/2022-04-23-1': `
    <html><head>
      <meta property="og:title" content="ブログ内のリンクを Next.js の &lt;Link&gt; や Embed に変換したい | homura's tech blog">
      <meta property="og:description" content="このブログ内のリンクを Next.js の &lt;Link&gt; や Twitter の Embed に変換したいので対応した">
      <meta property="og:image" content="https://i.imgur.com/W7bKLLUm.jpeg">
    </head></html>
  `,
  'https://www.amazon.co.jp/dp/B09RQGMYKZ?tag=homura10059-22': `
    <html><body></body></html>
  `,
  'https://www.bbiq.jp/': `
    <html><head>
      <meta property="og:title" content="BBIQ(ビビック)公式｜九州の光インターネット回線＆プロバイダー">
      <meta property="og:description" content="九州の光インターネット回線＆プロバイダーBBIQ(ビビック)公式サイト。光回線とプロバイダー料金込みの月額料金がずっとおトク！料金やサポート、回線品質において多くのお客さまにご満足いただいています。">
      <meta property="og:image" content="https://www.bbiq.jp/common/img/og.jpg">
    </head></html>
  `,
  'https://preducts.jp/products/mount-switch': `
    <html><head>
      <meta property="og:title" content="Mount for Switch | PREDUCTS">
      <meta property="og:description" content="PREDUCTS DESKにNintendo Switchを装着するための専用マウント ※レールに装着するためのBase Sliderは付属しません デスク装着に必要なBase Slider数 × 0-2">
      <meta property="og:image" content="https://res.cloudinary.com/preducts-inc/image/upload/w_1200/w_1920,f_auto/shop/photo/items/mount-switch/mount-switch-ogp.jpg">
    </head></html>
  `
}

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockImplementation((url: string) => {
      const html = HTML_FIXTURES[url] ?? ''
      return Promise.resolve({
        text: () => Promise.resolve(html)
      })
    })
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

test.each`
  url
  ${'https://tech-blog.homura10059.dev/'}
  ${'https://tech-blog.homura10059.dev/posts/2022-04-23-1'}
  ${'https://www.amazon.co.jp/dp/B09RQGMYKZ/'}
  ${'https://www.bbiq.jp/'}
  ${'https://preducts.jp/products/mount-switch'}
`('getOgp for $url', async ({ url }) => {
  const actual = await getOgp(url)
  expect(actual).toMatchSnapshot()
})
