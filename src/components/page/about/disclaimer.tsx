import PageTitle from '../../server/headless/Headding/page-title'

const Disclaimer = () => {
  return (
    <div className="mx-auto mt-4 max-w-2xl">
      <PageTitle>免責事項</PageTitle>
      <p>
        当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
        また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </p>
    </div>
  )
}

export default Disclaimer
