import { expect, test } from 'vitest'

import { getOgp } from './getOgp'

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
