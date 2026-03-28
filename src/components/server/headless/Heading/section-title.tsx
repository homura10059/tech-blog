import { type FC, type ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const SectionTitle: FC<Props> = ({ children }) => {
  return (
    <h2 className="mb-4 mt-12 border-b border-background-light pb-1 text-2xl font-normal leading-snug">
      {children}
    </h2>
  )
}

export default SectionTitle
