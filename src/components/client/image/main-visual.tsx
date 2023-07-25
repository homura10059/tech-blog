'use client'

import Image from 'next/image'

import { BLOG_DESCRIPTION, BLOG_TITLE } from '../../../lib/constants'
import { customLoader } from '../../../lib/image-loader'

const MainVisual = () => (
  <div className="relative h-screen">
    <figure className="relative h-screen">
      <Image
        loader={customLoader}
        src={'https://i.imgur.com/5l84MIZh.webp'}
        alt={`Hero Image for ${BLOG_TITLE}`}
        fill={true}
        priority={true} // hero image なので preload する
      />
    </figure>
    <div className="absolute inset-0 grid place-content-center">
      <div className="w-[90dvw] text-center text-surface @container">
        <p className="text-[12cqw] font-bold leading-none tracking-tighter">
          {BLOG_TITLE}
        </p>
        <p className="text-[4cqw] font-bold leading-none tracking-tighter">
          {BLOG_DESCRIPTION}
        </p>
      </div>
    </div>
  </div>
)

export default MainVisual
