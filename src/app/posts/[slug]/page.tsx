import { differenceInYears, parseISO } from 'date-fns'

import Warning from '../../../_components/domain/banners/warning'
import Series from '../../../_components/domain/series'
import Tags from '../../../_components/domain/tags'
import Container from '../../../components/server/headless/container'
import PostBody from '../../../components/server/post/post-body'
import PostHeader from '../../../components/server/post/post-header'
import { getPostDataBySlug, getPostSlugs } from '../../../domain/posts'

type StaticParam = { slug: string }

export default async function Page({ params }: { params: StaticParam }) {
  const post = await getPostDataBySlug(params.slug)
  const date = parseISO(post.date)
  const diff = differenceInYears(new Date(), date)
  return (
    <article className="mb-32">
      <div>
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
  )
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const slugs = getPostSlugs()
  return slugs.map(slug => ({ slug }))
}
