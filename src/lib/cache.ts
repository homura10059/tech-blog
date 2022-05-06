import { createHash } from 'crypto'
import NodeCache from 'node-cache'

import { OgpMeta } from './getOgp'

const cache = new NodeCache({ stdTTL: 24 * 60 * 60 })

export const readCache = async (url: string): Promise<OgpMeta | undefined> => {
  const hash = createHash('md5').update(url).digest('hex')
  return cache.get<OgpMeta>(hash)
}

export const writeCache = async (data: OgpMeta): Promise<void> => {
  const hash = createHash('md5').update(data.url).digest('hex')
  cache.set<OgpMeta>(hash, data)
}
