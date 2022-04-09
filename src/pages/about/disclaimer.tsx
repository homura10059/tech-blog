import { useRouter } from 'next/router'

import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'
import PageTitle from '../../components/headless/Headding/page-title'
import { createOGP } from '../../lib/ogp'

const Disclaimer: React.VFC = () => {
  const router = useRouter()

  return (
    <Layout og={createOGP({ title: 'Disclaimer', path: router.asPath })}>
      <Container>
        <div className="max-w-2xl mx-auto">
          <PageTitle>免責事項</PageTitle>
          <p>
            当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default Disclaimer
