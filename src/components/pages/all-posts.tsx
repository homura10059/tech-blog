import { useRouter } from 'next/router'

import Post from '../../domain/posts'
import { createOGP } from '../../lib/ogp'
import Layout from '../domain/layout'
import PostCards from '../domain/post/post-card'
import Container from '../headless/container'

type Props = {
  allPosts: Post[]
}

const AllPosts = ({ allPosts }: Props) => {
  const router = useRouter()
  return (
    <>
      <Layout
        og={createOGP({
          title: `Blog記事一覧`,
          path: router.asPath
        })}
      >
        <Container>
          <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
              All Posts
            </h1>
          </section>
          <PostCards posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default AllPosts
