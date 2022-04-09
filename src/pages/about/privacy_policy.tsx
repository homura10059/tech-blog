import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'
import PageTitle from '../../components/headless/Headding/page-title'
import SectionTitle from '../../components/headless/Headding/section-title'

const PrivacyPolicy: React.VFC = () => {
  return (
    <Layout title="Privacy Policy">
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
