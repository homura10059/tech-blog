import HeroImage from '../image/hero-image'

type Props = {
  title: string
  coverImage: {
    url: string
  }
  date: string
  tags: string[]
}

const PostHeader = (props: Props) => {
  return (
    <div className="mb-4 sm:mx-0 md:mb-8">
      <HeroImage {...props} />
    </div>
  )
}

export default PostHeader
