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
    src={'/assets/blog/logo.svg'}
    alt={'homura'}
    width={width}
    height={height}
    priority
    unoptimized
  />
)

export default Logo
