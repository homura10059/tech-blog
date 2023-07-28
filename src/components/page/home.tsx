import { PostData } from '../../domain/posts'
import MainVisual from '../client/image/main-visual'
import HeroPost from '../server/post/hero-post'
import MoreStories from '../server/post/more-stories'

type Props = {
  heroPost?: PostData
  morePosts: PostData[]
}

const Home = ({ heroPost, morePosts }: Props) => {
  return (
    <>
      <MainVisual />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          description={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && (
        <div className="container mx-auto p-5">
          <MoreStories posts={morePosts} />
        </div>
      )}
    </>
  )
}

export default Home
