type Props = {
  title: string
  hash: string
}

const Series = ({ title, hash }: Props) => {
  return (
    <a href={`/series/${hash}`}>
      シリーズ：<span className="link">{title}</span>
    </a>
  )
}

export default Series
