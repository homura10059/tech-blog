import MainVisual from '../components/client/image/main-visual'
import HeroPost from '../components/server/post/hero-post'
import { getAllPostData } from '../domain/posts'
import generatedRssFeed from '../lib/feed'

export default async function Page() {
  await generatedRssFeed()

  const allPosts = getAllPostData()
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

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
      <div className="container mx-auto p-5">
        {/*{morePosts.length > 0 && <MoreStories posts={morePosts} />}*/}
      </div>
    </>
  )
}
