import Post from '../domain/models/post'
import PostPreview from './domain/post/post-preview'

type Props = {
  posts: Post[]
  postsOnly?: true
}

const MoreStories = ({ posts, postsOnly }: Props) => {
  return (
    <section>
      {!postsOnly && (
        <h2 className="mb-8 text-5xl font-bold tracking-tighter leading-tight md:text-7xl">
          More Stories
        </h2>
      )}
      <div className="grid grid-cols-1 gap-y-20 mb-32 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
