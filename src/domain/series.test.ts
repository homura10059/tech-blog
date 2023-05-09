import { createHash } from 'crypto'
import fc from 'fast-check'
import { describe, expect, test } from 'vitest'

import { getSeries } from './series'

describe('getSeries', () => {
  test('md5 と title の組みが全て正しい', async () => {
    const post = fc.record({
      series: fc.option(fc.string(), { nil: undefined })
    })

    fc.assert(
      fc.property(fc.array(post), posts => {
        const actual = getSeries(posts)
        actual.forEach(({ hash, title }) => {
          const md5 = createHash('md5')
          const expected = md5.update(title, 'binary').digest('hex')
          expect(hash).toEqual(expected)
        })
      })
    )
  })
})
