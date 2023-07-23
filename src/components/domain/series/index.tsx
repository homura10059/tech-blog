import Link from 'next/link'

type Props = {
  title: string
  hash: string
}

const Series = ({ title, hash }: Props) => {
  return (
    <Link href={`/series/${hash}`}>
      <a>
        シリーズ：<span className="link">{title}</span>
      </a>
    </Link>
  )
}

export default Series
