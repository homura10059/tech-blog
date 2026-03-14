'use client'

import { getImgurUrl } from '../../../lib/image-loader'

type Props = {
  title: string
  image: string
  url: string
}

const Github = ({ title, image, url }: Props) => {
  const imgSrc = getImgurUrl(image, 200)
  return (
    <div className="not-prose">
      <a
        href={url}
        className="flex flex-row place-items-center rounded-lg bg-white shadow-lg shadow-surface @container hover:cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-l-lg @sm:h-48 @sm:w-48">
          <img
            src={imgSrc}
            alt={title}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            className={'rounded-lg'}
          />
        </figure>
      </a>
    </div>
  )
}

export default Github
