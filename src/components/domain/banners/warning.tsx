import { ExclamationIcon } from '@heroicons/react/outline'

type Props = {
  text: string
}
const Warning: React.VFC<Props> = ({ text }) => {
  return (
    <div className="p-1 mx-auto min-w-full max-w-7xl bg-yellow-300 sm:py-2 sm:px-3 lg:px-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-1 justify-center items-center w-0">
          <ExclamationIcon
            className="w-8 h-8 stroke-black"
            aria-hidden="true"
          />
          <p className="ml-3 text-black">{text}</p>
        </div>
      </div>
    </div>
  )
}
export default Warning
