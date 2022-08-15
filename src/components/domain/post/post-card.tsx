import Image from 'next/image'
import Link from 'next/link'

import { customLoader } from '../../../lib/image-loader'
import DateFormatter from '../../date-formatter'

type PostCardProps = {
  title: string
  coverImage: {
    url: string
    aspectRatio?: string
  }
  date: string
  slug: string
  tags: string[]
}

const PostCard = ({ title, coverImage, date, slug, tags }: PostCardProps) => {
  return (
    <div className="break-inside-avoid block relative mb-4">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <figure
            style={{
              position: 'relative',
              aspectRatio: coverImage.aspectRatio ?? '4/3'
            }}
            className="w-full rounded-md"
          >
            <Image
              loader={customLoader}
              src={coverImage.url}
              alt={`Cover Image for ${title}`}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <div className="flex absolute inset-0 flex-col p-2 bg-black/40">
            <div className="">
              <h1 className="mb-1 text-xl font-bold">{title}</h1>
              <DateFormatter dateString={date} />
            </div>
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 text-black bg-white/60 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

type Props = {
  posts: PostCardProps[]
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
