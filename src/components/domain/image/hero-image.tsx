import Image from 'next/image'

import { customLoader } from '../../../lib/image-loader'
import DateFormatter from '../../date-formatter'
import PostTitle from '../post/post-title'
import Tags from '../tags'

type Props = {
  title: string
  coverImage: {
    url: string
    aspectRatio?: string
  }
  date: string
  tags: string[]
}

const HeroImage = ({ title, coverImage, date, tags }: Props) => {
  return (
    <div className="relative">
      <figure
        style={{
          position: 'relative',
          aspectRatio: coverImage.aspectRatio ?? '4/3'
        }}
      >
        <Image
          loader={customLoader}
          src={coverImage.url}
          alt={`Cover Image for ${title}`}
          layout="fill"
          objectFit="contain"
          priority={true} // hero image なので preload する
        />
      </figure>
      <div className="flex absolute inset-0 items-center p-1 bg-black/40 md:p-6">
        <div className="flex flex-col grow">
          <PostTitle>{title}</PostTitle>
          <div className="mt-2 text-center md:mt-4 md:text-2xl">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
