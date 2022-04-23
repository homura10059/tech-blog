import Link from 'next/link'
import { FC, VFC } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

type Props = {
  href: string
}

const Embed: VFC<Props> = ({ href }) => {
  if (href.includes('https://twitter.com/')) {
    const url = new URL(href)
    const paths = url.pathname.split('/')
    const tweetId = paths[paths.length - 1]
    return <TwitterTweetEmbed tweetId={tweetId} />
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  )
}

const CustomLink: FC<Props> = ({ children, href }) => {
  if (children === undefined || children === null || children === '') {
    // a-tagの中身が空ならembedに変換する
    return <Embed href={href} />
  }

  // a-tagに中身がある場合は必要に応じてLinkに変換する
  return href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default CustomLink
