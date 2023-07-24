import { VFC } from 'react'

type Props = {
  href: string
}

const Youtube: VFC<Props> = ({ href }) => {
  const url = new URL(href)
  const videoId = url.searchParams.get('v')
  if (videoId === null) return null
  return (
    <iframe
      id="ytplayer"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
      frameBorder="0"
    />
  )
}

export default Youtube
