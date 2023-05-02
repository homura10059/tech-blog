import { createHash } from 'crypto'
import fc from 'fast-check'
import { describe, expect, test } from 'vitest'

import { getSeries } from './series'

describe('getSeries', () => {
  test('md5 と title の組みが全て正しい', async () => {
    fc.assert(
      fc.property(fc.array(fc.string().map(a => ({ series: a }))), posts => {
        const actual = getSeries(posts)
        Object.entries(actual).forEach(([key, value]) => {
          const md5 = createHash('md5')
          const hash = md5.update(value, 'binary').digest('hex')
          expect(key).toEqual(hash)
        })
      })
    )
  })
})
