import { Metadata } from 'next'
import Link from 'next/link'

import MoreStories from '../../../components/server/post/more-stories'
import { getAllPostData } from '../../../domain/posts'
import { getAllTags } from '../../../domain/tags'

type StaticParam = { slug: string }

export default async function Page({ params }: { params: StaticParam }) {
  const tagMetaData = getAllTags().find(tag => tag.hash === params.slug)
  const tag = tagMetaData?.tag ?? ''
  const title = `#${tag}の記事一覧`
  const allPosts = await getAllPostData()
  const targetPosts = allPosts.filter(x =>
    x.tags.some(y => y.hash === params.slug)
  )

  return (
    <>
      <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter before:mr-2 before:content-['#'] md:pr-8 md:text-8xl ">
          {title}
        </h1>
        <Link href="/tags" className="link mb-6 self-end text-lg">
          All Tags
        </Link>
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
  const tagMetaData = getAllTags().find(tag => tag.hash === params.slug)
  const tag = tagMetaData?.tag ?? ''
  const title = `#${tag}の記事一覧`
  const allPosts = await getAllPostData()
  const targetPosts = allPosts.filter(x =>
    x.tags.some(y => y.hash === params.slug)
  )
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
  const tags = getAllTags()
  return tags.map(series => ({ slug: series.hash }))
}
