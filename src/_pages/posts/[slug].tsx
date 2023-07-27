import { differenceInYears, parseISO } from 'date-fns'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'

import Warning from '../.././_components/domain/banners/warning'
import Layout from '../.././_components/domain/layout'
import Series from '../.././_components/domain/series'
import Tags from '../.././_components/domain/tags'
import Container from '../../components/server/headless/container'
import PostBody from '../../components/server/post/post-body'
import PostHeader from '../../components/server/post/post-header'
import PostTitle from '../../components/server/post/post-title'
import { getPostDataBySlug, getPostSlugs, PostData } from '../../domain/posts'
import markdownToHtml from '../../lib/markdownToHtml'
import { createOGP } from '../../lib/ogp'

type Props = {
  post: PostData
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 })

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const date = parseISO(post.date)
  const diff = differenceInYears(new Date(), date)
  return (
    <Layout
      og={createOGP({
        title: post.title,
        path: router.asPath,
        description: post.excerpt,
        image: post.ogImage.url
      })}
      hiddenHeader={inView}
    >
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article className="mb-32">
          <div ref={ref}>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
          </div>
          <Container>
            {diff > 1 && (
              <Warning
                text={`この記事は最終更新日から${diff}年以上が経過しています。`}
              />
            )}
            {post.tags.length > 0 && (
              <div className="mx-auto mt-4 max-w-2xl">
                <Tags tags={post.tags} />
                {post.series && (
                  <div className="mt-2">
                    <Series {...post.series} />
                  </div>
                )}
              </div>
            )}
            <PostBody content={post.content} />
          </Container>
        </article>
      )}
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostDataBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const slugs = getPostSlugs()

  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug
        }
      }
    }),
    fallback: false
  }
}
