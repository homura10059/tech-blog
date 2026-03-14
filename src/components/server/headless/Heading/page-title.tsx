import { type FC, type ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PageTitle: FC<Props> = ({ children }) => {
  return (
    <h1 className="mb-4 border-b border-background-light pb-1 text-3xl font-normal leading-snug">
      {children}
    </h1>
  )
}

export default PageTitle
