import Image from 'next/image'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'

import { PostType } from '../../domain/posts'
import { BLOG_DESCRIPTION, BLOG_TITLE } from '../../lib/constants'
import { customLoader } from '../../lib/image-loader'
import { createOGP } from '../../lib/ogp'
import Layout from '../domain/layout'
import HeroPost from '../domain/post/hero-post'
import MoreStories from '../more-stories'

type Props = {
  allPosts: PostType[]
}

const Home = ({ allPosts }: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 })

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const router = useRouter()
  return (
    <>
      <Layout og={createOGP({ path: router.asPath })} hiddenHeader={inView}>
        <div className="h-screen snap-y snap-mandatory overflow-scroll">
          <div className="relative h-screen snap-start" ref={ref}>
            <figure className="relative h-screen">
              <Image
                loader={customLoader}
                src={'https://i.imgur.com/5l84MIZh.webp'}
                alt={`Hero Image for ${BLOG_TITLE}`}
                layout="fill"
                objectFit="cover"
                priority={true} // hero image なので preload する
              />
            </figure>
            <div className="absolute inset-0 grid place-content-center">
              <div className="w-[90dvw] text-center @container">
                <p className="text-[12cqw] font-bold leading-none tracking-tighter">
                  {BLOG_TITLE}
                </p>
                <p className="text-[4cqw] font-bold leading-none tracking-tighter">
                  {BLOG_DESCRIPTION}
                </p>
              </div>
            </div>
          </div>
          <div className="h-screen snap-start @container">
            {/*{heroPost && (*/}
            {/*  <HeroPost*/}
            {/*    title={heroPost.title}*/}
            {/*    coverImage={heroPost.coverImage}*/}
            {/*    date={heroPost.date}*/}
            {/*    slug={heroPost.slug}*/}
            {/*    description={heroPost.excerpt}*/}
            {/*  />*/}
            {/*)}*/}
          </div>
        </div>
        <div className="container mx-auto p-5">
          {/*{morePosts.length > 0 && <MoreStories posts={morePosts} />}*/}
        </div>
      </Layout>
    </>
  )
}

export default Home
