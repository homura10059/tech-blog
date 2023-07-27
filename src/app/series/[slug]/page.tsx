import { Metadata } from 'next'

import MoreStories from '../../../components/server/post/more-stories'
import { getAllPostData } from '../../../domain/posts'
import { getAllSeries } from '../../../domain/series'

type StaticParam = { slug: string }

export default async function Page({ params }: { params: StaticParam }) {
  const series = getAllSeries()
  const target = series.find(x => x.hash === params.slug)
  const title = `シリーズ：${target?.title ?? ''}`
  const allPosts = await getAllPostData()
  const targetPosts = allPosts.filter(x => x.series?.hash === params.slug)

  return (
    <>
      <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter before:mr-2 md:pr-8 md:text-8xl ">
          {title}
        </h1>
      </section>
      <MoreStories posts={targetPosts} postsOnly />
    </>
  )
}

export async function generateMetadata({
  params
}: {
  params: StaticParam
}): Promise<Metadata> {
  const series = getAllSeries()
  const target = series.find(x => x.hash === params.slug)
  const title = `シリーズ：${target?.title ?? ''}`
  const allPosts = await getAllPostData()
  const targetPosts = allPosts.filter(x => x.series?.hash === params.slug)
  const images = targetPosts.flatMap(x => x.ogImage ?? [])
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
  const series = getAllSeries()
  return series.map(series => ({ slug: series.hash }))
}
