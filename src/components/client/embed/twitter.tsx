'use client'
import { VFC } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

type Props = {
  href: string
}

const Twitter: VFC<Props> = ({ href }) => {
  const url = new URL(href)
  const paths = url.pathname.split('/')
  const tweetId = paths[paths.length - 1]
  return <TwitterTweetEmbed tweetId={tweetId} />
}

export default Twitter
