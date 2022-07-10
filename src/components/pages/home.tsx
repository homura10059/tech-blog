import { useRouter } from 'next/router'

import Post from '../../domain/models/post'
import { createOGP } from '../../lib/ogp'
import Layout from '../domain/layout'
import HeroPost from '../domain/post/hero-post'
import Container from '../headless/container'
import Intro from '../intro'
import MoreStories from '../more-stories'

type Props = {
  allPosts: Post[]
}

const Home = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const router = useRouter()
  return (
    <>
      <Layout og={createOGP({ path: router.asPath })}>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Home
