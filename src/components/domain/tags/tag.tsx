import Link from 'next/link'

type Props = {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${text}`}>
      <a>
        <span className="border rounded-full border-primary-light before:content-['#'] before:mr-0.5 px-2 py-1 text-primary-light hover:bg-background-light">
          {text}
        </span>
      </a>
    </Link>
  )
}

export default Tag
