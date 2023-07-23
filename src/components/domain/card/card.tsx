import Image from 'next/image'
import Link from 'next/link'

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
      <div className="not-prose flex flex-row place-items-center rounded-lg bg-white shadow-lg shadow-surface @container hover:cursor-pointer">
        <figure className="relative h-24 w-24 @sm:h-48 @sm:w-48">
          <Image
            loader={customLoader}
            src={image}
            alt={`Cover Image for ${title}`}
            layout="fill"
            objectFit="contain"
            className={'rounded-lg'}
          />
        </figure>
        <div className="ml-2 flex flex-1 flex-col justify-start">
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
      <div className="flex flex-row place-items-center rounded-lg bg-white shadow-lg shadow-surface @container hover:cursor-pointer">
        <div className="relative h-24 w-24 animate-pulse rounded bg-slate-300 @sm:h-48 @sm:w-48"></div>
        <div className="grid flex-1 animate-pulse grid-cols-3 p-3 @sm:p-6">
          <div className="col-span-2 h-6 rounded bg-slate-300"></div>
          <div className="col-span-3 mt-2 h-4 rounded bg-slate-300"></div>
          <div className="col-span-3 mt-2 h-4 rounded bg-slate-300"></div>
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
