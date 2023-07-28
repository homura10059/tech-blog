import { PostData } from '../../../domain/posts'
import Warning from '../../server/banners/warning'
import Container from '../../server/headless/container'
import PostBody from '../../server/post/post-body'
import PostHeader from '../../server/post/post-header'
import Series from '../../server/series'
import Tags from '../../server/tags'

type Props = {
  post: PostData
  diff: number
}
const PostBySlug = ({ post, diff }: Props) => {
  return (
    <article className="mb-32">
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
        {post.tags.length > 0 && (
          <div className="mx-auto mt-4 max-w-2xl">
            <Tags tags={post.tags} />
            {post.series && (
              <div className="mt-2">
                <Series {...post.series} />
              </div>
            )}
          </div>
        )}
        <PostBody content={post.content} />
      </Container>
    </article>
  )
}

export default PostBySlug
