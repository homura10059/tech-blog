import { PostData } from '../../domain/posts'
import PostCards from '../client/posts/post-card'
import Container from '../server/headless/container'

type Props = {
  allPosts: PostData[]
}

const Posts = ({ allPosts }: Props) => {
  return (
    <Container>
      <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
          All Posts
        </h1>
      </section>
      <PostCards posts={allPosts} />
    </Container>
  )
}

export default Posts
