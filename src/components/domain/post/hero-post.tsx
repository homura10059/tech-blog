import Link from 'next/link'

import CoverImage from '../../cover-image'
import DateFormatter from '../../date-formatter'

type Props = {
  title: string
  coverImage: {
    url: string
  }
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage.url} slug={slug} isHero />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
        <div>
          <div className="mb-4 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
