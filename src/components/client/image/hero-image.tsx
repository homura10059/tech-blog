'use client'

import { format, parseISO } from 'date-fns'

import { getImgurUrl } from '../../../lib/image-loader'

type Props = {
  title: string
  coverImage: {
    url: string
    aspectRatio?: string
  }
  date: string
  description?: string
}

const HeroImage = ({ title, coverImage, date, description }: Props) => {
  const imgSrc = getImgurUrl(coverImage.url, 1200)
  return (
    <div className="relative">
      <figure className="relative h-screen">
        <img
          src={imgSrc}
          alt={title}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          loading="eager"
        />
      </figure>
      <div className="absolute inset-0 flex items-center bg-black/40 p-1 md:p-6">
        <div className="flex grow flex-col">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-6xl">
            {title}
          </h1>
          <p className="mt-2 text-center md:mt-4 md:text-2xl">
            <time dateTime={date}>{format(parseISO(date), 'yyyy-MM-dd')}</time>
          </p>
          {description && (
            <p className="mt-2 text-center md:mt-4 md:text-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroImage
