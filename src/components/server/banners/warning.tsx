import { ExclamationIcon } from '@heroicons/react/outline'

type Props = {
  text: string
}
const Warning: React.VFC<Props> = ({ text }) => {
  return (
    <div className="mx-auto min-w-full max-w-7xl bg-yellow-300 p-1 sm:px-3 sm:py-2 lg:px-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex w-0 flex-1 items-center justify-center">
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
