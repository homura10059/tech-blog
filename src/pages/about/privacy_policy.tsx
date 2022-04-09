import { useRouter } from 'next/router'

import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'
import PageTitle from '../../components/headless/Headding/page-title'
import SectionTitle from '../../components/headless/Headding/section-title'
import { createOGP } from '../../lib/ogp'

const PrivacyPolicy: React.VFC = () => {
  const router = useRouter()

  return (
    <Layout og={createOGP({ title: 'Privacy Policy', path: router.asPath })}>
      <Container>
        <div className="max-w-2xl mx-auto">
          <PageTitle>プライバシーポリシー</PageTitle>
          <SectionTitle>アクセス解析ツールについて</SectionTitle>
          <p>
            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicy
