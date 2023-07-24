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
      {tags.map((tag, index) => (
        <Tag {...tag} key={index} />
      ))}
    </div>
  )
}

export default Tags
