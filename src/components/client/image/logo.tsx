'use client'

import Image from 'next/image'

import { customLoader } from '../../../lib/image-loader'

type Props = {
  width?: number
  height?: number
}

const Logo = ({ width = 100, height = 100 }: Props) => (
  <Image
    loader={customLoader}
    src={'https://i.imgur.com/H2X0iCp.png'}
    alt={'homura'}
    width={width}
    height={height}
    priority
    unoptimized
    className={'rounded-full'}
  />
)

export default Logo
