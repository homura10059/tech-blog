import Home from '../components/pages/home'
import { getAllPosts } from '../domain/services/post'
import generatedRssFeed from '../lib/feed'

export default Home

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
