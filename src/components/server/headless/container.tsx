import { type FunctionComponent, type ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent<Props> = ({ children }) => {
  return <div className="mx-auto w-full max-w-7xl px-4 md:px-5">{children}</div>
}

export default Container
