import { createHash } from 'crypto'
import Link from 'next/link'

type Props = {
  text: string
}

const Tag = ({ text }: Props) => {
  const md5 = createHash('md5')
  const hash = md5.update(text, 'binary').digest('hex')
  return (
    <Link href={`/tags/${hash}`}>
      <a>
        <span className="rounded-md bg-white/60 px-2 py-1 text-black before:mr-0.5 before:content-['#'] hover:bg-white/80">
          {text}
        </span>
      </a>
    </Link>
  )
}

export default Tag
