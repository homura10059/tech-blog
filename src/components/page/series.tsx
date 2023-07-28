import { Series } from '../../domain/series'
import CustomLink from '../server/links/custom-link'

type Props = {
  title: string
  series: Series[]
}
const Series = ({ title, series }: Props) => {
  return (
    <>
      <section className="flex flex-col items-center pb-16 pt-8 md:flex-row md:justify-between md:pb-6">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl ">
          {title}
        </h1>
      </section>
      <div className="mb-6">
        {series.map(({ hash, title }) => {
          return (
            <div className="mb-6 text-primary-dark hover:underline" key={hash}>
              <CustomLink href={`/series/${hash}`}>{title}</CustomLink>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Series
