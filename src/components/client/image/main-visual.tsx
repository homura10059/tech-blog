'use client'

import Image from 'next/image'

import { BLOG_DESCRIPTION, BLOG_TITLE } from '../../../lib/constants'
import { customLoader } from '../../../lib/image-loader'

const MainVisual = () => (
  <div className="relative h-screen">
    <Image
      loader={customLoader}
      src={'https://i.imgur.com/8ci2n3y.png'}
      alt={`${BLOG_TITLE}`}
      fill={true}
      style={{ objectFit: 'cover' }}
      priority={true} // hero image なので preload する
    />
  </div>
)

export default MainVisual
