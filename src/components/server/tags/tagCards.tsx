import Link from 'next/link'

import { TagMetaData } from '../../../domain/tags'

type TagCardProps = {
  meta: TagMetaData
}
const TagCard = ({ meta }: TagCardProps) => {
  return (
    <Link href={`/tags/${meta.hash}`}>
      <div className="flex flex-col items-center rounded-lg border border-primary-light p-4 text-primary-light hover:bg-background-light">
        <span className="text-xl before:mr-0.5 before:content-['#']">
          {meta.title}
        </span>
      </div>
    </Link>
  )
}

type Props = {
  tags: TagMetaData[]
}
const TagCards = ({ tags }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {tags.map(meta => (
        <TagCard meta={meta} key={meta.hash} />
      ))}
    </div>
  )
}

export default TagCards
