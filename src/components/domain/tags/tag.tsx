import Link from 'next/link'

type Props = {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${text}`}>
      <a>
        <span className="rounded-md bg-white/60 py-1 px-2 text-black before:mr-0.5 before:content-['#'] hover:bg-white/80">
          {text}
        </span>
      </a>
    </Link>
  )
}

export default Tag
