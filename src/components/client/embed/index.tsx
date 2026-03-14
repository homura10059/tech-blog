'use client'
import { type VFC } from 'react'

import Twitter from './twitter'
import Youtube from './youtube'

type Props = {
  href: string
}

/**
 * Embed component for client-side rendering of Twitter/YouTube embeds.
 * Used for any runtime embed needs.
 */
const Embed: VFC<Props> = ({ href }) => {
  if (
    href.includes('https://twitter.com/') ||
    href.includes('https://x.com/')
  ) {
    return <Twitter href={href} />
  }
  if (
    href.includes('https://www.youtube.com/') ||
    href.includes('https://youtu.be/')
  ) {
    return <Youtube href={href} />
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  )
}

export default Embed
