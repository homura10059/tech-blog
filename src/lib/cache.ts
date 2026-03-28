import { createHash } from 'crypto'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import type { OgpMeta } from './getOgp'

const CACHE_FILE = resolve(process.cwd(), 'ogp-cache.json')

const loadFromDisk = (): Record<string, OgpMeta> => {
  if (!existsSync(CACHE_FILE)) return {}
  try {
    return JSON.parse(readFileSync(CACHE_FILE, 'utf-8'))
  } catch {
    return {}
  }
}

const cache: Record<string, OgpMeta> = loadFromDisk()

const hash = (url: string) => createHash('md5').update(url).digest('hex')

export const readCache = async (url: string): Promise<OgpMeta | undefined> => {
  return cache[hash(url)]
}

export const writeCache = async (data: OgpMeta): Promise<void> => {
  cache[hash(data.url)] = data
  try {
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8')
  } catch {
    // キャッシュ書き込みに失敗しても続行する
  }
}
