'use client'

import cx from 'classnames'

import { getImgurUrl } from '../../../lib/image-loader'

type Props = {
  title: string
  src: string
  slug?: string
  isHero?: boolean
}

const CoverImage = ({ title, src, slug, isHero }: Props) => {
  const height = isHero ? 'clamp(200px,50vw,1000px)' : 'clamp(200px,30vw,500px)'
  const imgSrc = getImgurUrl(src, isHero ? 1200 : 640)
  const image = (
    <figure
      style={{ position: 'relative', height: `${height}` }}
      className={cx('relative shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug
      })}
    >
      <img
        src={imgSrc}
        alt={title}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        loading={isHero ? 'eager' : 'lazy'}
      />
    </figure>
  )
  return (
    <div className="sm:mx-0">
      {slug ? <a href={`/posts/${slug}`}>{image}</a> : image}
    </div>
  )
}

export default CoverImage
