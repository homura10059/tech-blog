import { Metadata } from 'next'

import SeriesBySlug from '../../../components/page/series/slug'
import { getAllPostData } from '../../../domain/posts'
import { getAllSeries } from '../../../domain/series'

type StaticParam = { slug: string }

const getPostsAndTitle = async (seriesSlug: string) => {
  const series = await getAllSeries()
  const target = series.find(x => x.hash === seriesSlug)
  const title = `シリーズ：${target?.title ?? ''}`
  const allPosts = await getAllPostData()
  const targetPosts = allPosts.filter(x => x.series?.hash === seriesSlug)

  return { title, posts: targetPosts }
}

export default async function Page({ params }: { params: StaticParam }) {
  const { title, posts } = await getPostsAndTitle(params.slug)

  return <SeriesBySlug title={title} posts={posts} />
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
  const series = await getAllSeries()
  return series.map(series => ({ slug: series.hash }))
}
