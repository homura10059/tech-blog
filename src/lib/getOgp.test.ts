import { afterEach, expect, test, vi } from 'vitest'

import { getOgp } from './getOgp'

vi.mock('./cache', () => ({
  readCache: vi.fn().mockResolvedValue(undefined),
  writeCache: vi.fn().mockResolvedValue(undefined)
}))

const mockFetch = (html: string) => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      text: () => Promise.resolve(html)
    })
  )
}

afterEach(() => {
  vi.unstubAllGlobals()
})

test('standard OGP extraction', async () => {
  mockFetch(`
    <html>
      <head>
        <meta property="og:title" content="Test Title" />
        <meta property="og:description" content="Test Description" />
        <meta property="og:image" content="https://example.com/image.png" />
      </head>
    </html>
  `)

  const result = await getOgp('https://example.com/')
  expect(result).toEqual({
    title: 'Test Title',
    description: 'Test Description',
    image: 'https://example.com/image.png',
    url: 'https://example.com/'
  })
})

test('og:image:secure_url takes priority over og:image', async () => {
  mockFetch(`
    <html>
      <head>
        <meta property="og:title" content="Secure Title" />
        <meta property="og:description" content="Secure Description" />
        <meta property="og:image" content="https://example.com/image.png" />
        <meta property="og:image:secure_url" content="https://example.com/secure-image.png" />
      </head>
    </html>
  `)

  const result = await getOgp('https://example.com/')
  expect(result.image).toBe('https://example.com/secure-image.png')
})

test('relative image URL is converted to absolute', async () => {
  mockFetch(`
    <html>
      <head>
        <meta property="og:title" content="Relative Image" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/assets/image.png" />
      </head>
    </html>
  `)

  const result = await getOgp('https://example.com/some/page')
  expect(result.image).toBe('https://example.com/assets/image.png')
})

test('falls back to name meta tags when og: tags are absent', async () => {
  mockFetch(`
    <html>
      <head>
        <meta name="title" content="Fallback Title" />
        <meta name="description" content="Fallback Description" />
      </head>
    </html>
  `)

  const result = await getOgp('https://example.com/')
  expect(result.title).toBe('Fallback Title')
  expect(result.description).toBe('Fallback Description')
  expect(result.image).toBe('')
})

test('cache hit returns cached data without fetching', async () => {
  const { readCache } = await import('./cache')
  const cached = {
    title: 'Cached Title',
    description: 'Cached Description',
    image: 'https://example.com/cached.png',
    url: 'https://example.com/'
  }
  vi.mocked(readCache).mockResolvedValueOnce(cached)

  const fetchMock = vi.fn()
  vi.stubGlobal('fetch', fetchMock)

  const result = await getOgp('https://example.com/')
  expect(result).toEqual(cached)
  expect(fetchMock).not.toHaveBeenCalled()
})

test('Amazon URL uses short URL and image from ASIN', async () => {
  mockFetch(`
    <html>
      <body>
        <meta property="og:title" content="Some Product" />
      </body>
    </html>
  `)

  const result = await getOgp('https://www.amazon.co.jp/dp/B09RQGMYKZ/')
  expect(result.url).toContain('https://www.amazon.co.jp/dp/B09RQGMYKZ')
  expect(result.image).toBe(
    'https://images-na.ssl-images-amazon.com/images/P/B09RQGMYKZ.09.LZZZZZZZ.jpg'
  )
})
