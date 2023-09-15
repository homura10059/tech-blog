import { Metadata } from 'next'

import PostBySlug from '../../../components/page/posts/slug'
import { getPostDataBySlug, getPostSlugs } from '../../../domain/posts'

type StaticParam = { slug: string }

export default async function Page({ params }: { params: StaticParam }) {
  const post = await getPostDataBySlug(params.slug)

  return <PostBySlug post={post} />
}

export async function generateMetadata({
  params
}: {
  params: StaticParam
}): Promise<Metadata> {
  const post = await getPostDataBySlug(params.slug)

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
