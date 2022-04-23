import { ExclamationIcon } from '@heroicons/react/outline'

type Props = {
  text: string
}
const Warning: React.VFC<Props> = ({ text }) => {
  return (
    <div className="bg-yellow-300 max-w-7xl mx-auto py-1 px-1 sm:py-2 sm:px-3 lg:px-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center justify-center">
          <ExclamationIcon
            className="h-8 w-8 stroke-black"
            aria-hidden="true"
          />
          <p className="ml-3 text-black">{text}</p>
        </div>
      </div>
    </div>
  )
}
export default Warning
