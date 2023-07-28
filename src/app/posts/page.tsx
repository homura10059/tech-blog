import Posts from '../../components/page/posts'
import { getAllPostData } from '../../domain/posts'

export default async function Page() {
  const allPosts = await getAllPostData()

  return <Posts allPosts={allPosts} />
}
