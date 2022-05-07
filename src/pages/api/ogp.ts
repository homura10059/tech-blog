import type { NextApiRequest, NextApiResponse } from 'next'

import { getOgp } from '../../lib/getOgp'

const ogp = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.query.url
  if (!url || Array.isArray(url)) return res.status(400).end()
  const meta = await getOgp(url)
  return res.status(200).json(meta)
}

export default ogp
