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
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="my-2 not-prose">
      <Link href={url}>
        <a className="">
          <div className="flex justify-between items-center w-full hover:bg-background-light border border-primary-light divide-x divide-primary-light">
            <div className="flex flex-col gap-1 px-2 text-surface">
              <span className="font-bold line-clamp-1">{title}</span>
              <span className="text-xs text-background-light line-clamp-1">
                {description}
              </span>
              <span className="text-sm">{parsedUrl.hostname}</span>
            </div>
            <div className="p-2 h-full">
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
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="my-2 not-prose">
      <div className="flex justify-between items-center w-full border border-primary-light divide-x divide-primary-light">
        <div className="grid flex-1 grid-cols-3 gap-2 px-2 animate-pulse">
          <div className="col-span-2 h-6 bg-slate-700 rounded" />
          <div className="col-span-3 h-4 bg-slate-700 rounded" />
          <div className="col-span-1 h-4 bg-slate-700 rounded" />
        </div>
        <div className="p-2 h-full animate-pulse">
          <div className="w-[120px] h-[120px] bg-slate-700 rounded" />
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
