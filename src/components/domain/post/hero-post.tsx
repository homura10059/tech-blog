import Link from 'next/link'

import HeroImage from '../image/hero-image'

type Props = {
  title: string
  coverImage: {
    url: string
  }
  date: string
  description: string
  slug: string
}

const HeroPost = ({ title, coverImage, date, description, slug }: Props) => {
  return (
    <section className="p-2">
      <h2 className="m-2 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Latest Post
      </h2>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <HeroImage
          title={title}
          coverImage={coverImage}
          date={date}
          description={description}
        />
      </Link>
    </section>
  )
}

export default HeroPost
