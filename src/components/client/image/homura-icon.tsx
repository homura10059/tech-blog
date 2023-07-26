'use client'

import Image from 'next/image'

import { customLoader } from '../../../lib/image-loader'

const HomuraIcon = () => (
  <Image
    loader={customLoader}
    src={'/assets/blog/logo.svg'}
    alt={'homura'}
    width={100}
    height={100}
    priority
    unoptimized
  />
)

export default HomuraIcon
