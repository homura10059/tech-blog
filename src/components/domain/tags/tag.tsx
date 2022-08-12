import Link from 'next/link'

type Props = {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${text}`}>
      <a>
        <span className="py-1 px-2 before:mr-0.5 text-black before:content-['#'] bg-white/60 hover:bg-white/80 rounded-md">
          {text}
        </span>
      </a>
    </Link>
  )
}

export default Tag
