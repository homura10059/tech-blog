import Image from 'next/image'

import { customLoader } from '../../../lib/image-loader'
import DateFormatter from '../../date-formatter'
import PostTitle from '../post/post-title'

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
          layout="fill"
          objectFit="cover"
          priority={true} // hero image なので preload する
        />
      </figure>
      <div className="absolute inset-0 flex items-center bg-black/40 p-1 md:p-6">
        <div className="flex grow flex-col">
          <PostTitle>{title}</PostTitle>
          <p className="mt-2 text-center md:mt-4 md:text-2xl">
            <DateFormatter dateString={date} />
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
