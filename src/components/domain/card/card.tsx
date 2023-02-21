import Image from 'next/image'
import Link from 'next/link'
import { VFC } from 'react'

import { customLoader } from '../../../lib/image-loader'

export type CardProps = {
  title: string
  description?: string
  image: string
  url: string
}

export const Card = ({ image, url, title, description }: CardProps) => {
  return (
    <Link href={url}>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="flex flex-row place-items-center bg-white rounded-lg shadow-lg shadow-surface hover:cursor-pointer @container not-prose">
        <figure className="relative w-24 @sm:w-48 h-24 @sm:h-48">
          <Image
            loader={customLoader}
            src={image}
            alt={`Cover Image for ${title}`}
            layout="fill"
            objectFit="contain"
            className={'rounded-lg'}
          />
        </figure>
        <div className="flex flex-col flex-1 justify-start ml-2">
          <p className="text-xl font-medium text-gray-900 line-clamp-1">
            {title}
          </p>
          {description && (
            <p className="mt-2 text-base text-gray-700 line-clamp-3">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export const SkeletonLoader = () => {
  return (
    <div className="not-prose">
      <div className="flex flex-row place-items-center bg-white rounded-lg shadow-lg shadow-surface hover:cursor-pointer @container">
        <div className="relative w-24 @sm:w-48 h-24 @sm:h-48 bg-slate-300 rounded animate-pulse"></div>
        <div className="grid flex-1 grid-cols-3 p-3 @sm:p-6 animate-pulse">
          <div className="col-span-2 h-6 bg-slate-300 rounded"></div>
          <div className="col-span-3 mt-2 h-4 bg-slate-300 rounded"></div>
          <div className="col-span-3 mt-2 h-4 bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  )
}

type ConnectProps =
  | {
      meta?: undefined
      isLoading: true
    }
  | {
      meta: CardProps
      isLoading?: undefined
    }
const Connect = ({ meta, isLoading }: ConnectProps) => {
  if (isLoading) return <SkeletonLoader />
  return <Card {...meta} />
}

export default Connect
