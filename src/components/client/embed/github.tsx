'use client'

import Image from 'next/image'
import Link from 'next/link'

import { customLoader } from '../../../lib/image-loader'

type Props = {
  title: string
  image: string
  url: string
}

const Github = ({ title, image, url }: Props) => (
  <div className="not-prose">
    <Link
      href={url}
      className="flex flex-row place-items-center rounded-lg bg-white shadow-lg shadow-surface @container hover:cursor-pointer"
    >
      <figure className="h-24 w-24 @sm:h-48 @sm:w-48">
        <Image
          loader={customLoader}
          src={image}
          alt={`Cover Image for ${title}`}
          layout="fill"
          objectFit="contain"
          className={'rounded-lg'}
        />
      </figure>
    </Link>
  </div>
)

export default Github
