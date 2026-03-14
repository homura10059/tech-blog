import cx from 'classnames'
import { type FC, type ReactNode } from 'react'

type Props = {
  href: string
  className?: string
  children?: ReactNode
}

const LinkText: FC<Props> = ({ href, className, children }) => {
  return (
    <a href={href} className={cx(['link', className ?? ''])}>
      {children}
    </a>
  )
}

export default LinkText
