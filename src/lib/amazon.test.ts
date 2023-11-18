import { expect, test } from 'vitest'

import { ImageSize, getAmazonImageUrl, getAmazonShortUrl } from './amazon'

test.each([
  {
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ/?coliid=I3P0NUAHDS5OEV&colid=2VJWMFFVPSTEP&psc=0&ref_=lv_ov_lig_dp_it',
    expected: 'https://www.amazon.co.jp/dp/B09RQGMYKZ?tag=homura10059-22'
  },
  {
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ',
    expected: 'https://www.amazon.co.jp/dp/B09RQGMYKZ?tag=homura10059-22'
  }
])('getAmazonShortUrl', async ({ url, expected }) => {
  const actual = getAmazonShortUrl(url)
  expect(actual).toEqual(expected)
})

test.each([
  {
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ',
    size: undefined,
    expected:
      'https://images-na.ssl-images-amazon.com/images/P/B09RQGMYKZ.09.LZZZZZZZ.jpg'
  },
  {
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ',
    size: 'THUMBZZZ',
    expected:
      'https://images-na.ssl-images-amazon.com/images/P/B09RQGMYKZ.09.THUMBZZZ.jpg'
  },
  {
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ',
    size: 'TZZZZZZZ',
    expected:
      'https://images-na.ssl-images-amazon.com/images/P/B09RQGMYKZ.09.TZZZZZZZ.jpg'
  },
  {
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ',
    size: 'MZZZZZZZ',
    expected:
      'https://images-na.ssl-images-amazon.com/images/P/B09RQGMYKZ.09.MZZZZZZZ.jpg'
  },
  {
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ',
    size: 'LZZZZZZZ',
    expected:
      'https://images-na.ssl-images-amazon.com/images/P/B09RQGMYKZ.09.LZZZZZZZ.jpg'
  }
])('getAmazonImageUrl', async ({ url, size, expected }) => {
  const actual = getAmazonImageUrl(url, size as ImageSize | undefined)
  expect(actual).toEqual(expected)
})
