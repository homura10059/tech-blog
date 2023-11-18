import SeriesPage from '../../components/page/seriesPage'
import { getAllSeries } from '../../domain/series'

export default async function Page() {
  const title = 'All Series'
  const series = await getAllSeries()

  return <SeriesPage title={title} series={series} />
}
