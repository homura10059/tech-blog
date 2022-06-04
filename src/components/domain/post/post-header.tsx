import CoverImage from '../../cover-image'
import DateFormatter from '../../date-formatter'
import Tags from '../tags'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
  tags: string[]
}

const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-4 sm:mx-0 md:mb-8">
        <CoverImage title={title} src={coverImage} isHero />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-2 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <Tags tags={tags} />
      </div>
    </>
  )
}

export default PostHeader
