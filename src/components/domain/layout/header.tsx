import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, RssIcon, XIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import { customLoader } from '../../../lib/image-loader'

type Nav = {
  name: string
  href: string
  asCurrent: string[]
}
const navigation: Nav[] = [
  { name: 'Blog', href: '/', asCurrent: ['/post'] },
  { name: 'Profile', href: '/profile', asCurrent: [] },
  { name: 'About', href: '/about', asCurrent: [] }
]

const rssFeeds = [
  { name: 'feed', href: '/rss/feed.xml' },
  { name: 'atom', href: '/rss/atom.xml' },
  { name: 'json', href: '/rss/feed.json' }
]

const Header: React.VFC = () => {
  const router = useRouter()
  const isCurrent = (nav: Nav) => {
    const pathname = router.pathname
    return (
      pathname === nav.href ||
      nav.asCurrent.some(path => pathname.includes(path))
    )
  }

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-background-dark shadow-lg"
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex relative justify-between items-center h-16">
              <div className="flex absolute inset-y-0 left-0 items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Left menu*/}
              <div className="flex flex-1 justify-center items-center sm:justify-start sm:items-stretch">
                <div className="flex shrink-0 items-center">
                  <Link href={'/'}>
                    <a>
                      <Image
                        loader={customLoader}
                        src={'/assets/blog/logo.svg'}
                        alt={'homura'}
                        width={36}
                        height={36}
                        priority
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
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
              </div>
              {/* Right menu*/}
              <div className="flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0 sm:ml-6">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="p-1 text-gray-400 hover:text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">RSS Feeds</span>
                      <RssIcon className="w-6 h-6" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
                      {rssFeeds.map(feed => (
                        <Menu.Item key={feed.name}>
                          {({ active }) => (
                            <Link href={feed.href}>
                              <a
                                className={cx(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {feed.name}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
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
        </>
      )}
    </Disclosure>
  )
}

export default Header
