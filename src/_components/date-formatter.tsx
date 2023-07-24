import { format, parseISO } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return (
    <time dateTime={dateString}>
      {format(parseISO(dateString), 'yyyy-MM-dd')}
    </time>
  )
}

export default DateFormatter
