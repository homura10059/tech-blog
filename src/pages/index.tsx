import { useRouter } from 'next/router'

import Layout from '../components/domain/layout'
import HeroPost from '../components/domain/post/hero-post'
import Container from '../components/headless/container'
import Intro from '../components/intro'
import MoreStories from '../components/more-stories'
import Post from '../domain/model/post'
import { getAllPosts } from '../lib/api'
import generatedRssFeed from '../lib/feed'
import { createOGP } from '../lib/ogp'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
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

export default Index

export const getStaticProps = async () => {
  // フィード情報の生成
  await generatedRssFeed()

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
