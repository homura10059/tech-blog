import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'
import MoreStories from '../../components/more-stories'
import Post from '../../domain/models/post'
import { getAllSeries } from '../../domain/series'
import { getAllPosts } from '../../domain/services/post'
import { unique } from '../../lib/arrays'
import { createOGP } from '../../lib/ogp'

type Props = {
  hash: string
  seriesTitle: string
  allPosts: Post[]
}

const SeriesPage = ({ seriesTitle, allPosts }: Props) => {
  const router = useRouter()
  const title = `シリーズ：${seriesTitle}`
  return (
    <>
      <Layout
        og={createOGP({
          title: `${title}`,
          path: router.asPath
        })}
      >
        <Container>
          <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter before:mr-2 md:pr-8 md:text-8xl ">
              {seriesTitle}
            </h1>
          </section>
          <MoreStories posts={allPosts} postsOnly />
        </Container>
      </Layout>
    </>
  )
}

export default SeriesPage

type Params = {
  params: {
    series: string
  }
}

export async function getStaticProps({ params }: Params) {
  const series = getAllSeries()
  const seriesTitle = series[params.series]

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'ogImage',
    'coverImage',
    'series'
  ]).filter(post => post.series === seriesTitle)

  return {
    props: {
      hash: params.series,
      seriesTitle,
      allPosts
    }
  }
}

export async function getStaticPaths() {
  const series = getAllSeries()

  return {
    paths: Object.keys(series).map(series => {
      return {
        params: {
          series
        }
      }
    }),
    fallback: false
  }
}
