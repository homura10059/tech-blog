import { Metadata } from 'next'

import PostBySlug from '../../../components/page/posts/slug'
import { getPostDataBySlug, getPostSlugs } from '../../../domain/posts'

type StaticParam = { slug: string }

export default async function Page({
  params
}: { params: Promise<StaticParam> }) {
  const { slug } = await params
  const post = await getPostDataBySlug(slug)

  return <PostBySlug post={post} />
}

export async function generateMetadata({
  params
}: {
  params: Promise<StaticParam>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostDataBySlug(slug)

  return {
    title: post.title,
    openGraph: {
      type: 'website',
      title: post.title,
      description: post.excerpt,
      images: post.ogImage
    }
  }
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const slugs = await getPostSlugs()
  return slugs.map(slug => ({ slug }))
}
