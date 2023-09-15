import Tags from '../../components/page/tags'
import { getAllTags } from '../../domain/tags'

export default async function Page() {
  const title = `All Tags`
  const tags = await getAllTags()

  return <Tags title={title} tags={tags} />
}
