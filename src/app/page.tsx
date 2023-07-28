import Home from '../components/page/home'
import { getAllPostData } from '../domain/posts'
import generatedRssFeed from '../lib/feed'

export default async function Page() {
  await generatedRssFeed()

  const allPosts = await getAllPostData()
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return <Home heroPost={heroPost} morePosts={morePosts} />
}
