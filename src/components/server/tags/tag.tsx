type Props = {
  title: string
  hash: string
}

const Tag = ({ title, hash }: Props) => {
  return (
    <a href={`/tags/${hash}`}>
      <span className="rounded-md bg-white/60 px-2 py-1 text-black before:mr-0.5 before:content-['#'] hover:bg-white/80">
        {title}
      </span>
    </a>
  )
}

export default Tag
