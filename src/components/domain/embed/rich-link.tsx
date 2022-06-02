import Image from 'next/image'
import Link from 'next/link'
import { VFC } from 'react'

import { customLoader } from '../../../lib/image-loader'

type Props = {
  title: string
  description: string
  image: string
  url: string
}

const RichLink: VFC<Props> = ({ url, title, description, image }) => {
  const parsedUrl = new URL(url)
  return (
    <div className="not-prose my-2">
      <Link href={url}>
        <a className="">
          <div className="flex w-full border border-primary-light items-center divide-x divide-primary-light justify-between hover:bg-background-light">
            <div className="text-surface flex flex-col gap-1 px-2">
              <span className="font-bold line-clamp-1">{title}</span>
              <span className="text-xs text-background-light line-clamp-1">
                {description}
              </span>
              <span className="text-sm">{parsedUrl.hostname}</span>
            </div>
            <div className="h-full p-2">
              <figure className="relative w-[120px] h-[120px]">
                <Image
                  loader={customLoader}
                  src={image}
                  alt={`Cover Image for ${title}`}
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

const SkeletonLoader: VFC = () => {
  return (
    <div className="not-prose my-2">
      <div className="flex w-full border border-primary-light items-center divide-x divide-primary-light justify-between">
        <div className="flex-1 grid grid-cols-3 gap-2 animate-pulse px-2">
          <div className="col-span-2 h-6 bg-slate-700 rounded" />
          <div className="col-span-3 h-4 bg-slate-700 rounded" />
          <div className="col-span-1 h-4 bg-slate-700 rounded" />
        </div>
        <div className="h-full p-2 animate-pulse">
          <div className="h-[120px] w-[120px] bg-slate-700 rounded" />
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
      meta: Props
      isLoading?: undefined
    }
const Connect: VFC<ConnectProps> = ({ meta, isLoading }) => {
  if (isLoading) return <SkeletonLoader />
  return <RichLink {...meta} />
}

export default Connect
