import { type FC, type ReactNode } from 'react'

import Embed from '../../client/embed'

type Props = {
  href: string
  children?: ReactNode
}

const CustomLink: FC<Props> = ({ children, href }) => {
  if (
    children === undefined ||
    children === null ||
    children.toString() === '' ||
    children.toString() === href
  ) {
    // a-tagの中身が空 or URL と同じ文字列 ならembedに変換する
    return <Embed href={href} />
  }

  // a-tagに中身がある場合は必要に応じてリンクに変換する
  return href.startsWith('/') || href === '' ? (
    <a href={href}>{children}</a>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default CustomLink
