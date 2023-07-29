import { FunctionComponent, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container mx-auto md:px-5">{children}</div>
}

export default Container
