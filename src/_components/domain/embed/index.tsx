import { useEffect, useState, VFC } from 'react'

import Card from '../../../components/client/card/card'
import { OgpMeta } from '../../../lib/getOgp'
import Twitter from './twitter'
import Youtube from './youtube'

type Props = {
  href: string
}

const Embed: VFC<Props> = ({ href }) => {
  const [meta, setMeta] = useState<OgpMeta | undefined | 'loading'>('loading')

  useEffect(() => {
    if (
      ['https://twitter.com/', 'https://www.youtube.com/'].some(url =>
        href.includes(url)
      )
    ) {
      setMeta(undefined)
      return
    }
    const params = { url: encodeURI(href) }
    const query = new URLSearchParams(params)
    fetch(`/api/ogp?${query}`)
      .then(res => {
        if (!res.ok) {
          setMeta(undefined)
          return
        }
        res.json().then(meta => setMeta(meta))
      })
      .catch(_e => setMeta(undefined))
  }, [href])

  if (href.includes('https://twitter.com/')) {
    return <Twitter href={href} />
  }
  if (href.includes('https://www.youtube.com/')) {
    return <Youtube href={href} />
  }

  if (meta === 'loading') {
    return (
      <div className="my-2">
        <Card isLoading={true} />
      </div>
    )
  }

  if (meta) {
    return (
      <div className="my-4">
        <Card meta={meta} />{' '}
      </div>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  )
}

export default Embed
