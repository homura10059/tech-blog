import Image from 'next/image'
import Link from 'next/link'

import { customLoader } from '../../../lib/image-loader'

export type CardProps = {
  title: string
  description?: string
  imageUrl: string
  linkUrl: string
}

export const Card = ({ imageUrl, linkUrl, title, description }: CardProps) => {
  return (
    <Link href={linkUrl}>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="flex flex-row place-items-center bg-white rounded-lg shadow-lg shadow-surface hover:cursor-pointer @container">
        <figure className="relative w-24 @sm:w-48 h-24 @sm:h-48">
          <Image
            loader={customLoader}
            src={imageUrl}
            alt={`Cover Image for ${title}`}
            layout="fill"
            objectFit="contain"
            className={'rounded-lg'}
          />
        </figure>
        <div className="flex flex-col flex-1 justify-start p-3 @sm:p-6">
          <p className="text-xl font-medium text-gray-900">{title}</p>
          {description && (
            <p className="mt-2 text-base text-gray-700">{description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
