import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl font-bold tracking-tighter leading-tight text-center md:text-5xl md:leading-none md:text-left lg:text-6xl">
      {children}
    </h1>
  )
}

export default PostTitle
