import { format, parseISO } from 'date-fns'

import { PostData } from '../../../domain/posts'
import Series from '../series'
import Tags from '../tags'

type Props = {
  post: PostData
}

export const PostMetadataMobile = ({ post }: Props) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-y-4 md:invisible md:h-0">
      {post.series && (
        <div className="">
          <Series {...post.series} />
        </div>
      )}
      {post.tags.length > 0 && (
        <div className="">
          <Tags tags={post.tags} />
        </div>
      )}
    </div>
  )
}

export const PostMetadataDesktop = ({ post }: Props) => {
  return (
    <div className="invisible sticky top-[70px] z-50 grid h-fit w-0 grid-cols-1 divide-y-[1px] md:visible md:w-fit md:px-2">
      <div className="py-2">{post.title}</div>
      <div className="py-2">
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'yyyy-MM-dd')}
        </time>
      </div>
      {post.series && (
        <div className="py-2">
          <Series {...post.series} />
        </div>
      )}
      {post.tags.length > 0 && (
        <div className="py-2">
          <Tags tags={post.tags} />
        </div>
      )}
    </div>
  )
}
