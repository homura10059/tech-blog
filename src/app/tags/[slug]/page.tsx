import { Metadata } from 'next'

import TagsBySlug from '../../../components/page/tags/slug'
import { getAllPostData } from '../../../domain/posts'
import { getAllTags } from '../../../domain/tags'

type StaticParam = { slug: string }

const getPostsAndTitle = async (tagSlug: string) => {
  const tagMetaData = getAllTags().find(tag => tag.hash === tagSlug)
  const tag = tagMetaData?.tag ?? ''
  const title = `#${tag}の記事一覧`
  const allPosts = await getAllPostData()
  const targetPosts = allPosts.filter(x => x.tags.some(y => y.hash === tagSlug))

  return { title, posts: targetPosts }
}

export default async function Page({ params }: { params: StaticParam }) {
  const { title, posts } = await getPostsAndTitle(params.slug)

  return <TagsBySlug title={title} posts={posts} />
}

export async function generateMetadata({
  params
}: {
  params: StaticParam
}): Promise<Metadata> {
  const { title, posts } = await getPostsAndTitle(params.slug)
  const images = posts.flatMap(x => x.ogImage ?? [])
  return {
    title: title,
    openGraph: {
      type: 'website',
      title,
      images
    }
  }
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const tags = getAllTags()
  return tags.map(series => ({ slug: series.hash }))
}
