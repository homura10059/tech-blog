import Head from 'next/head'

import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'
import PageTitle from '../../components/headless/Headding/page-title'
import SectionTitle from '../../components/headless/Headding/section-title'
import LinkText from '../../components/headless/link-text'
import { BLOG_TITLE } from '../../lib/constants'

const About: React.VFC = () => {
  return (
    <Layout>
      <Container>
        <Head>
          <title>About | {BLOG_TITLE}</title>
        </Head>
        <PageTitle>このブログについて</PageTitle>
        <SectionTitle>概要</SectionTitle>
        <p>
          このブログは個人の見解に基づいて書かれており、所属する会社、組織とは全く関係ありません
        </p>
        <SectionTitle>技術スタック</SectionTitle>
        <p>
          <LinkText
            href={
              'https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript'
            }
          >
            blog-starter-typescript
          </LinkText>
          を基に Next.js & TypeScript & tailwindcss を使って作られています
        </p>
        <SectionTitle>リンク</SectionTitle>
        <ul>
          <li>
            <LinkText href={'/about/privacy_policy'}>Privacy Policy</LinkText>
          </li>
          <li>
            <LinkText href={'/about/disclaimer'}>Disclaimer</LinkText>
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default About
