import Link from 'next/link'

type Props = {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${text}`}>
      <a>
        <span className="py-1 px-2 before:mr-0.5 text-primary-light before:content-['#'] hover:bg-background-light rounded-full border border-primary-light">
          {text}
        </span>
      </a>
    </Link>
  )
}

export default Tag
