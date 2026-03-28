'use client'

import { getImgurUrl } from '../../../lib/image-loader'

export type CardProps = {
  title: string
  description?: string
  image: string
  url: string
}

export const Card = ({ image, url, title, description }: CardProps) => {
  const imgSrc = getImgurUrl(image, 200)
  return (
    <div className="not-prose">
      <a
        href={url}
        className="flex flex-row place-items-center rounded-lg bg-white shadow-lg shadow-surface @container hover:cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-l-lg @sm:h-48 @sm:w-48">
          <img
            src={imgSrc}
            alt={title}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
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
      </a>
    </div>
  )
}

export const SkeletonLoader = () => {
  return (
    <div className="not-prose">
      <div className="flex flex-row place-items-center rounded-lg bg-white shadow-lg shadow-surface @container hover:cursor-pointer">
        <div className="relative h-24 w-24 animate-pulse rounded bg-slate-300 @sm:h-48 @sm:w-48" />
        <div className="grid flex-1 animate-pulse grid-cols-3 p-3 @sm:p-6">
          <div className="col-span-2 h-6 rounded bg-slate-300" />
          <div className="col-span-3 mt-2 h-4 rounded bg-slate-300" />
          <div className="col-span-3 mt-2 h-4 rounded bg-slate-300" />
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
