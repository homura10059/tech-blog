import AllPosts from '../../components/pages/all-posts'
import { getAllPosts } from '../../domain/services/post'
import generatedRssFeed from '../../lib/feed'

export default AllPosts

export const getStaticProps = async () => {
  // フィード情報の生成
  await generatedRssFeed()

  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'tags'])

  return {
    props: { allPosts }
  }
}
