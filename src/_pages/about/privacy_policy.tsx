import { useRouter } from 'next/router'

import Layout from '../.././_components/domain/layout'
import PageTitle from '../.././_components/headless/Headding/page-title'
import SectionTitle from '../.././_components/headless/Headding/section-title'
import Container from '../../components/server/headless/container'
import { createOGP } from '../../lib/ogp'

const PrivacyPolicy: React.VFC = () => {
  const router = useRouter()

  return (
    <Layout og={createOGP({ title: 'Privacy Policy', path: router.asPath })}>
      <Container>
        <div className="mx-auto mt-4 max-w-2xl">
          <PageTitle>プライバシーポリシー</PageTitle>
          <SectionTitle>アクセス解析ツールについて</SectionTitle>
          <p>
            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <SectionTitle>広告について</SectionTitle>
          <p>
            当ブログは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicy