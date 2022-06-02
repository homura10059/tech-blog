import { useRouter } from 'next/router'

import Layout from '../../components/domain/layout'
import HeroPost from '../../components/domain/post/hero-post'
import Container from '../../components/headless/container'
import Intro from '../../components/intro'
import MoreStories from '../../components/more-stories'
import Post from '../../domain/models/post'
import { getAllPosts } from '../../domain/services/post'
import { unique } from '../../lib/arrays'
import { BLOG_TITLE } from '../../lib/constants'
import { createOGP } from '../../lib/ogp'

type Props = {
  tag: string
  allPosts: Post[]
}

const TagPage = ({ tag, allPosts }: Props) => {
  const router = useRouter()
  const title = `#${tag}の記事一覧`
  return (
    <>
      <Layout
        og={createOGP({
          title: `${title} | ${BLOG_TITLE}`,
          path: router.asPath
        })}
      >
        <Container>
          <section className="flex flex-col items-center pt-8 pb-16 md:flex-row md:justify-between md:pb-6">
            <h1 className="mb-6 before:content-['#'] before:mr-2 text-5xl font-bold tracking-tighter leading-tight md:pr-8 md:text-8xl ">
              {tag}
            </h1>
          </section>
          <MoreStories posts={allPosts} postsOnly />
        </Container>
      </Layout>
    </>
  )
}

export default TagPage

type Params = {
  params: {
    tag: string
  }
}

export async function getStaticProps({ params }: Params) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'ogImage',
    'coverImage',
    'tags'
  ]).filter(post => post.tags.includes(params.tag))

  return {
    props: {
      tag: params.tag,
      allPosts
    }
  }
}

export async function getStaticPaths() {
  const allPosts = getAllPosts(['tags'])
  const tags = unique(allPosts.flatMap(post => post.tags))

  return {
    paths: tags.map(tag => {
      return {
        params: {
          tag
        }
      }
    }),
    fallback: false
  }
}
