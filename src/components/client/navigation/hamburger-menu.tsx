'use client'
import { Disclosure } from '@headlessui/react'
import cx from 'classnames'
import { usePathname } from 'next/navigation'

import { NAVIGATIONS, Nav } from '../../../lib/constants'

const HamburgerMenu = () => {
  const pathname = usePathname()

  const isCurrent = (nav: Nav) => {
    return (
      pathname === nav.href ||
      nav.asCurrent.some(path => pathname.includes(path))
    )
  }

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {NAVIGATIONS.map(item => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={cx(
              isCurrent(item)
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium'
            )}
            aria-current={isCurrent(item) ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  )
}

export default HamburgerMenu
