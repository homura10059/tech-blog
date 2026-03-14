'use client'

import { getImgurUrl } from '../../../lib/image-loader'

type Props = {
  width?: number
  height?: number
}

const Logo = ({ width = 100, height = 100 }: Props) => {
  const src = getImgurUrl('https://i.imgur.com/H2X0iCp.png', width)
  return (
    <img
      src={src}
      alt={'homura'}
      width={width}
      height={height}
      className={'rounded-full'}
      loading="eager"
    />
  )
}

export default Logo
