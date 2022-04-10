import cx from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const srcSet = [
    `${src}h.webp 1024w`,
    `${src}l.webp 640w`,
    `${src}m.webp 320w`
  ]
  const image = (
    <picture>
      <source
        type="image/webp"
        className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        srcSet={srcSet.join(',')}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${src}l.jpeg`}
        alt={`Cover Image for ${title}`}
        loading="lazy"
        className={cx('shadow-sm', {
          'hover:shadow-lg transition-shadow duration-200': slug
        })}
      />
    </picture>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
