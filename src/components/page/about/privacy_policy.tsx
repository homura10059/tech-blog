import PageTitle from '../../server/headless/Headding/page-title'
import SectionTitle from '../../server/headless/Headding/section-title'

const PrivacyPolicy = () => {
  return (
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
  )
}

export default PrivacyPolicy
