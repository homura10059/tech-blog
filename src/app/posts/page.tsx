import Posts from '../../components/page/posts'
import { getAllPostData } from '../../domain/posts'
import generatedRssFeed from '../../lib/feed'

export default async function Page() {
  await generatedRssFeed()

  const allPosts = getAllPostData()

  return <Posts allPosts={allPosts} />
}
