'use client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, RssIcon, XIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import Link from 'next/link'
import { Fragment } from 'react'

import { RSS_FEEDS } from '../../../lib/constants'
import Logo from '../image/logo'
import HamburgerMenu from './hamburger-menu'
import NavLinks from './nav-links'

type Props = {
  hidden?: boolean
}
const Header = ({ hidden }: Props) => {
  return (
    <Disclosure
      as="nav"
      className={cx('sticky top-0 z-50 bg-background-dark shadow-lg', {
        hidden: hidden
      })}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Left menu*/}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <Link href={'/'}>
                    <Logo width={36} height={36} />
                  </Link>
                </div>
                <NavLinks />
              </div>
              {/* Right menu*/}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">RSS Feeds</span>
                      <RssIcon className="h-6 w-6" aria-hidden="true" />
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
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/50 focus:outline-none">
                      {RSS_FEEDS.map(feed => (
                        <Menu.Item key={feed.name}>
                          {({ active }) => (
                            <Link
                              href={feed.href}
                              className={cx(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {feed.name}
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

          <HamburgerMenu />
        </>
      )}
    </Disclosure>
  )
}

export default Header
