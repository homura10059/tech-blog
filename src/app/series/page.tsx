import Series from '../../components/page/series'
import { getAllSeries } from '../../domain/series'

export default async function Page() {
  const title = `All Series`
  const series = getAllSeries()

  return <Series title={title} series={series} />
}
