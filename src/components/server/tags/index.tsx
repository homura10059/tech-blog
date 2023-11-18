import Tag from './tag'

type Props = {
  tags: {
    title: string
    hash: string
  }[]
}

const Tags = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap gap-x-2">
      {tags.map(tag => (
        <Tag {...tag} key={tag.hash} />
      ))}
    </div>
  )
}

export default Tags
