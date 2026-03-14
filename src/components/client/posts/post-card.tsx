'use client'
import { format, parseISO } from 'date-fns'

import type { PostData } from '../../../domain/posts'
import { getImgurUrl } from '../../../lib/image-loader'

const PostCard = ({ title, coverImage, date, slug, tags }: PostData) => {
  const imgSrc = getImgurUrl(coverImage.url, 640)
  return (
    <div className="relative mb-4 block break-inside-avoid">
      <a href={`/posts/${slug}`}>
        <figure
          style={{
            position: 'relative',
            aspectRatio: coverImage.aspectRatio ?? '4/3'
          }}
          className="w-full rounded-md overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={title}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </figure>
        <div className="absolute inset-0 flex flex-col bg-black/40 p-2">
          <div className="">
            <h1 className="mb-1 text-xl font-bold">{title}</h1>
            <time dateTime={date}>{format(parseISO(date), 'yyyy-MM-dd')}</time>
          </div>
          <div className="mt-auto flex flex-wrap gap-1">
            {tags.map(tag => (
              <span
                key={tag.hash}
                className="rounded-md bg-white/60 px-2 text-black"
              >
                #{tag.title}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}

type Props = {
  posts: PostData[]
}

const PostCards = ({ posts }: Props) => {
  return (
    <div className="columns-1 p-4 md:columns-2 lg:columns-3 xl:columns-4">
      {posts.map(post => (
        <PostCard {...post} key={post.slug} />
      ))}
    </div>
  )
}

export default PostCards
