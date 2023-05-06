import { useRouter } from 'next/router'

import Layout from '../../components/domain/layout'
import TagCards from '../../components/domain/tags/tagCards'
import Container from '../../components/headless/container'
import { getAllTags, TagMetaData } from '../../domain/tags'
import { createOGP } from '../../lib/ogp'

type Props = {
  tags: TagMetaData[]
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
          <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl ">
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
  const tags = getAllTags()
  return {
    props: {
      tags
    }
  }
}
