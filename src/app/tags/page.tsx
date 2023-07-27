import TagCards from '../../components/server/tags/tagCards'
import { getAllTags } from '../../domain/tags'

export default async function Page() {
  const title = `All Tags`
  const tags = getAllTags()

  return (
    <>
      <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl ">
          {title}
        </h1>
      </section>
      <div className="mb-6">
        <TagCards tags={tags} />
      </div>
    </>
  )
}
