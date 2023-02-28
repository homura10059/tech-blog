import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-6xl">
      {children}
    </h1>
  )
}

export default PostTitle
