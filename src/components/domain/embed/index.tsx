import { VFC } from 'react'

import Twitter from './twitter'
import Youtube from './youtube'

type Props = {
  href: string
}

const Embed: VFC<Props> = ({ href }) => {
  if (href.includes('https://twitter.com/')) {
    return <Twitter href={href} />
  }
  if (href.includes('https://www.youtube.com/')) {
    return <Youtube href={href} />
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  )
}

export default Embed
