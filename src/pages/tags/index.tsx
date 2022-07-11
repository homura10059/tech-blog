import { useRouter } from 'next/router'

import Layout from '../../components/domain/layout'
import TagCards from '../../components/domain/tags/tagCards'
import Container from '../../components/headless/container'
import { getAllPosts } from '../../domain/services/post'
import { createOGP } from '../../lib/ogp'

type Props = {
  tags: Record<string, number>
}

const TagPage = ({ tags }: Props) => {
  const router = useRouter()
  const title = `Tags`
  return (
    <>
      <Layout
        og={createOGP({
          title: `${title}`,
          path: router.asPath
        })}
      >
        <Container>
          <section className="flex flex-col items-center pt-8 pb-16 md:flex-row md:justify-between md:pb-6">
            <h1 className="mb-6 text-5xl font-bold tracking-tighter leading-tight md:pr-8 md:text-8xl ">
              {title}
            </h1>
          </section>
          <div className="mb-6">
            <TagCards tags={tags} />
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default TagPage

export async function getStaticProps() {
  const allPosts = getAllPosts(['tags'])
  const initialTagInfo: Record<string, number> = {}
  const tags = allPosts
    .flatMap(post => post.tags)
    .reduce((previousValue, currentValue) => {
      const count = previousValue[currentValue] ?? 1
      previousValue[currentValue] = count + 1
      return previousValue
    }, initialTagInfo)

  return {
    props: {
      tags
    }
  }
}
