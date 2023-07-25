'use client'

import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { customLoader } from '../../../lib/image-loader'

type Props = {
  title: string
  src: string
  slug?: string
  isHero?: boolean
}

const CoverImage = ({ title, src, slug, isHero }: Props) => {
  // HeroImageとして使うかそうでないかでサイズを分ける
  const height = isHero ? 'clamp(200px,50vw,1000px)' : 'clamp(200px,30vw,500px)'
  const image = (
    <figure
      style={{ position: 'relative', height: `${height}` }}
      className={cx('relative shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug
      })}
    >
      <Image
        loader={customLoader}
        src={src}
        alt={`Cover Image for ${title}`}
        fill={true}
        priority={isHero} // hero image のときは preload する
      />
    </figure>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
