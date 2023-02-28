import Link from 'next/link'

type Props = {
  tag: string
  count: number
}

const TagCard = ({ tag, count }: Props) => {
  return (
    <Link href={`/tags/${tag}`}>
      <a>
        <div className="flex flex-col items-center rounded-lg border border-primary-light p-4 text-primary-light hover:bg-background-light">
          <span className="text-xl before:mr-0.5 before:content-['#']">
            {tag}
          </span>
          <span>count: {count}</span>
        </div>
      </a>
    </Link>
  )
}

export default TagCard
