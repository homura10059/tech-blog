'use client'
import cx from 'classnames'

import { NAVIGATIONS, type Nav } from '../../../lib/constants'

const NavLinks = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  const isCurrent = (nav: Nav) => {
    return (
      pathname === nav.href ||
      nav.asCurrent.some(path => pathname.includes(path))
    )
  }
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {NAVIGATIONS.map(item => (
          <a
            key={item.name}
            href={item.href}
            className={cx(
              isCurrent(item)
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
            aria-current={isCurrent(item) ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavLinks
