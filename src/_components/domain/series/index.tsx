import Link from 'next/link'

type Props = {
  title: string
  hash: string
}

const Series = ({ title, hash }: Props) => {
  return (
    <Link href={`/series/${hash}`}>
      シリーズ：<span className="link">{title}</span>
    </Link>
  )
}

export default Series
