import Link from 'next/link'

import { PostData } from '../../../domain/posts'
import MoreStories from '../../server/post/more-stories'

type Props = {
  title: string
  posts: PostData[]
}
const TagsBySlug = ({ title, posts }: Props) => {
  return (
    <>
      <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter before:mr-2 before:content-['#'] md:pr-8 md:text-8xl ">
          {title}
        </h1>
        <Link href="/tags" className="link mb-6 self-end text-lg">
          All Tags
        </Link>
      </section>
      <MoreStories posts={posts} postsOnly />
    </>
  )
}

export default TagsBySlug
