'use client'

import Image from 'next/image'

import { BLOG_DESCRIPTION, BLOG_TITLE } from '../../../lib/constants'
import { customLoader } from '../../../lib/image-loader'

const MainVisual = () => (
  <div className="relative h-screen">
    <figure className="relative h-screen">
      <Image
        loader={customLoader}
        src={'https://i.imgur.com/A81alGu.png'}
        alt={`Hero Image for ${BLOG_TITLE}`}
        fill={true}
        style={{ objectFit: 'cover' }}
        priority={true} // hero image なので preload する
      />
    </figure>
    <div className="absolute inset-0 grid place-content-center">
      <div className="w-[90dvw] text-center text-surface @container">
        <p className="flex flex-col font-bold leading-none tracking-tighter">
          <div className="text-[10cqw]">{"HOMURA'S"}</div>
          <div className="text-[8cqw]">{'TECH BLOG'}</div>
        </p>
        <p className="text-[3cqw] font-bold leading-none tracking-tighter">
          {BLOG_DESCRIPTION}
        </p>
      </div>
    </div>
  </div>
)

export default MainVisual
