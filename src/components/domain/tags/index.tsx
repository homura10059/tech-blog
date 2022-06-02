import Link from 'next/link'

import Tag from './tag'

type Props = {
  tags: string[]
}

const Tags = ({ tags }: Props) => {
  return (
    <div className="flex gap-x-2">
      {tags.map((tag, index) => (
        <Link href={`/tags/${tag}`} key={index}>
          <a>
            <Tag text={tag} />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Tags
