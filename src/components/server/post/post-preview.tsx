import { format, parseISO } from 'date-fns'
import Link from 'next/link'

import CoverImage from '../../client/image/cover-image'

type Props = {
  title: string
  coverImage: {
    url: string
  }
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage.url} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <time dateTime={date}>{format(parseISO(date), 'yyyy-MM-dd')}</time>
      </div>
      <p className="text-lg leading-relaxed">{excerpt}</p>
    </div>
  )
}

export default PostPreview
