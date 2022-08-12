import Link from 'next/link'

import DateFormatter from '../../date-formatter'

type PostCardProps = {
  title: string
  coverImage: {
    url: string
  }
  date: string
  slug: string
  tags: string[]
}

const PostCard = ({ title, coverImage, date, slug, tags }: PostCardProps) => {
  return (
    <div className="relative mb-4">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full rounded-md"
            src={`${coverImage}.webp`}
            alt={`Cover Image for ${title}`}
          />
          <div className="flex absolute inset-0 flex-col p-4 bg-black/40">
            <div className="relative p-1">
              <h1 className="mb-1 text-xl font-bold">{title}</h1>
              <DateFormatter dateString={date} />
            </div>
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="py-1 px-2 text-black bg-white/60 rounded-md"
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
    <div className="columns-1 relative p-4 md:columns-2 lg:columns-3 xl:columns-4">
      {posts.map(post => (
        <PostCard {...post} key={post.slug} />
      ))}
    </div>
  )
}

export default PostCards
