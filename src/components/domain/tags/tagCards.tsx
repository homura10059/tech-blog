import TagCard from './tagCard'

type Props = {
  tags: Record<string, number>
}

const TagCards = ({ tags }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Object.entries(tags)
        .sort((a, b) => b[1] - a[1])
        .map(([tag, count], index) => (
          <TagCard tag={tag} count={count} key={index} />
        ))}
    </div>
  )
}

export default TagCards
