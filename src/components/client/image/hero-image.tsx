'use client'

import { format, parseISO } from 'date-fns'
import Image from 'next/image'

import { customLoader } from '../../../lib/image-loader'

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
  return (
    <div className="relative">
      <figure className="relative h-screen">
        <Image
          loader={customLoader}
          src={coverImage.url}
          alt={`Cover Image for ${title}`}
          fill={true}
          priority={true} // hero image なので preload する
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
