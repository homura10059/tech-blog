import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'

const Disclaimer: React.VFC = () => {
  return (
    <Layout>
      <Container>
        <h2 className="mb-4 pb-1 font-normal leading-snug">免責事項</h2>
        <p>
          当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
          また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      </Container>
    </Layout>
  )
}

export default Disclaimer
