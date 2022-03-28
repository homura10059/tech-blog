import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'

const PrivacyPolicy: React.VFC = () => {
  return (
    <Layout>
      <Container>
        <h2 className="mb-4 pb-1 font-normal leading-snug text-2xl">
          プライバシーポリシー
        </h2>
        <h3 className="mb-4 border-b border-background-light pb-1 font-normal leading-snug">
          アクセス解析ツールについて
        </h3>
        <p>
          当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicy
