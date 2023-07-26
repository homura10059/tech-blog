import { useRouter } from 'next/router'

import Layout from '../.././_components/domain/layout'
import CustomLink from '../.././_components/headless/custom-link'
import Container from '../../components/server/headless/container'
import { getAllSeries, Series } from '../../domain/series'
import { createOGP } from '../../lib/ogp'

type Props = {
  series: Series[]
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
            {series.map(({ hash, title }) => {
              return (
                <div
                  className="mb-6 text-primary-dark hover:underline"
                  key={hash}
                >
                  <CustomLink href={`/series/${hash}`}>{title}</CustomLink>
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
