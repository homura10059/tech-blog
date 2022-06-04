import Link from 'next/link'

import Tag from './tag'

type Props = {
  tag: string
  count: number
}

const TagCard = ({ tag, count }: Props) => {
  return (
    <Link href={`/tags/${tag}`}>
      <a>
        <div className="text-primary-light hover:bg-background-light flex flex-col items-center p-4 border rounded-lg border-primary-light">
          <span className="before:content-['#'] before:mr-0.5 text-xl">
            {tag}
          </span>
          <span>count: {count}</span>
        </div>
      </a>
    </Link>
  )
}

export default TagCard
