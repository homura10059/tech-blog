import PageTitle from '../../components/server/headless/Headding/page-title'
import SectionTitle from '../../components/server/headless/Headding/section-title'
import LinkText from '../../components/server/headless/link-text'

export default async function Page() {
  return (
    <div className="mx-auto mt-4 max-w-2xl">
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
          className={'mr-1'}
        >
          blog-starter-typescript
        </LinkText>{' '}
        を基に Next.js & TypeScript & tailwindcss を使って作られています
      </p>
      <SectionTitle>リンク</SectionTitle>
      <ul className="list-inside list-disc">
        <li>
          <LinkText href={'/about/privacy_policy'}>Privacy Policy</LinkText>
        </li>
        <li>
          <LinkText href={'/about/disclaimer'}>Disclaimer</LinkText>
        </li>
      </ul>
    </div>
  )
}
