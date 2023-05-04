import { useRouter } from 'next/router'

import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'
import CustomLink from '../../components/headless/custom-link'
import { getAllSeries } from '../../domain/series'
import { createOGP } from '../../lib/ogp'

type Hash = string
type Title = string
type Props = {
  series: Record<Hash, Title>
}

const SeriesPage = ({ series }: Props) => {
  const router = useRouter()
  const title = `Series`
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
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl ">
              {title}
            </h1>
          </section>
          <div className="mb-6">
            {Object.entries(series).map(([key, val]) => {
              return (
                <div
                  className="mb-6 text-primary-dark hover:underline"
                  key={key}
                >
                  <CustomLink href={`/series/${key}`}>{val}</CustomLink>
                </div>
              )
            })}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default SeriesPage

export async function getStaticProps() {
  const series = getAllSeries()

  return {
    props: {
      series
    }
  }
}
