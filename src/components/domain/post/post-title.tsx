import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-5xl font-bold tracking-tighter leading-tight text-center md:text-7xl md:leading-none md:text-left lg:text-8xl">
      {children}
    </h1>
  )
}

export default PostTitle
