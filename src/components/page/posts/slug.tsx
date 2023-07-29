import { differenceInYears, parseISO } from 'date-fns'

import { PostData } from '../../../domain/posts'
import Warning from '../../server/banners/warning'
import Container from '../../server/headless/container'
import PostBody from '../../server/post/post-body'
import PostHeader from '../../server/post/post-header'
import {
  PostMetadataDesktop,
  PostMetadataMobile
} from '../../server/post/post-metadata'

type Props = {
  post: PostData
}
const PostBySlug = ({ post }: Props) => {
  const diff = differenceInYears(new Date(), parseISO(post.date))

  return (
    <article className="">
      <div>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
      </div>
      <Container>
        {diff > 1 && (
          <Warning
            text={`この記事は最終更新日から${diff}年以上が経過しています。`}
          />
        )}
        <PostMetadataMobile post={post} />
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-3">
            <PostBody content={post.content} />
          </div>
          <div className="h-0 md:col-span-1 md:h-full">
            <PostMetadataDesktop post={post} />
          </div>
        </div>
      </Container>
    </article>
  )
}

export default PostBySlug
