import { createHash } from 'crypto'
import fc from 'fast-check'
import { describe, expect, test } from 'vitest'

import { getTags } from './tags'

describe('getTags', () => {
  test('md5 と title の組みが全て正しい', async () => {
    const tags = fc.option(fc.array(fc.string()), { nil: undefined })
    const post = fc.record({ tags: tags })

    fc.assert(
      fc.property(fc.array(post), posts => {
        const actual = getTags(posts)
        actual.forEach(meta => {
          const md5 = createHash('md5')
          const hash = md5.update(meta.tag, 'binary').digest('hex')
          expect(meta.hash).toEqual(hash)
        })
      })
    )
  })
})
