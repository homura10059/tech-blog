import Head from 'next/head'

import { TWITTER_ACCOUNT } from '../lib/constants'

export type OgpProps = {
  url: string
  type: 'website' | 'article'
  title: string // 20文字程度
  description: string // 80~90文字程度
  site_name: string
  image: string
}

type Props = {
  og: OgpProps
}

const Meta: React.VFC<Props> = ({
  og: { title, type, site_name, image, url, description }
}) => {
  const pageTitle = title !== site_name ? `${title} | ${site_name}` : site_name

  return (
    <Head>
      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      {/* RSSフィード */}
      <link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" />
      {/* CSS */}
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      {/* OGP */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:image" content={image} />
      {/* Twitterカード */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={TWITTER_ACCOUNT} />
    </Head>
  )
}

export default Meta
