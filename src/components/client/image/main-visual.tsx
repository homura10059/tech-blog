'use client'

import { BLOG_DESCRIPTION, BLOG_TITLE } from '../../../lib/constants'
import { getImgurUrl } from '../../../lib/image-loader'

const MainVisual = () => {
  const src = getImgurUrl('https://i.imgur.com/A81alGu.webp', 1200)
  return (
    <div className="relative h-screen">
      <figure className="relative h-screen">
        <img
          src={src}
          alt={BLOG_TITLE}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          loading="eager"
        />
      </figure>
      <div className="absolute inset-0 grid place-content-center">
        <div className="w-[90dvw] text-center text-surface @container">
          <p className="flex flex-col font-bold leading-none tracking-tighter">
            <span className="text-[12cqw] md:text-[6cqw]">{"HOMURA'S"}</span>
            <span className="text-[11cqw] md:text-[5cqw]">{'TECH BLOG'}</span>
          </p>
          <p className="text-[5cqw] font-bold leading-none tracking-tighter md:text-[2cqw]">
            {BLOG_DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainVisual
