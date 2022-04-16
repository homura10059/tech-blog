import cx from 'classnames'
import Link from 'next/link'

type Props = {
  href: string
  className?: string
}

const LinkText: React.FC<Props> = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <a className={cx(['link', className ?? ''])}>{children}</a>
    </Link>
  )
}

export default LinkText
