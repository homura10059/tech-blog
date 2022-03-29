import Link from 'next/link'

import Layout from '../../components/domain/layout'
import Container from '../../components/headless/container'
import PageTitle from '../../components/headless/Headding/page-title'
import SectionTitle from '../../components/headless/Headding/section-title'

const About: React.VFC = () => {
  return (
    <Layout>
      <Container>
        <PageTitle>このブログについて</PageTitle>
        <SectionTitle>概要</SectionTitle>
        <p>
          このブログは個人の見解に基づいて書かれており、所属する会社、組織とは全く関係ありません
        </p>
        <SectionTitle>技術スタック</SectionTitle>
        <p>
          <Link
            href={
              'https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript'
            }
          >
            <a className="mx-3 font-bold text-primary-light hover:underline">
              blog-starter-typescript
            </a>
          </Link>
          を基に Next.js & TypeScript & tailwindcss を使って作られています
        </p>
        <SectionTitle>リンク</SectionTitle>
        <ul>
          <li>
            <Link href={'/about/privacy_policy'}>
              <a className="mx-3 font-bold text-primary-light hover:underline">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/about/disclaimer'}>
              <a className="mx-3 font-bold text-primary-light hover:underline">
                Disclaimer
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default About
