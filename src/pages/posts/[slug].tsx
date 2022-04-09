import { differenceInYears, parseISO } from 'date-fns'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Warning from '../../components/domain/banners/warning'
import Layout from '../../components/domain/layout'
import PostBody from '../../components/domain/post/post-body'
import PostHeader from '../../components/domain/post/post-header'
import PostTitle from '../../components/domain/post/post-title'
import Container from '../../components/headless/container'
import PostType from '../../domain/model/post'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { createOGP } from '../../lib/ogp'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const date = parseISO(post.date)
  const diff = differenceInYears(new Date(), date)
  return (
    <Layout
      preview={preview}
      og={createOGP({
        title: post.title,
        path: router.asPath,
        description: post.excerpt,
        image: post.ogImage.url
      })}
    >
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              {diff > 1 && (
                <div className="mt-2 mb-5">
                  <Warning
                    text={`この記事は最終更新日から${diff}年以上が経過しています。`}
                  />
                </div>
              )}
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'ogImage',
    'coverImage'
  ])
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
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
