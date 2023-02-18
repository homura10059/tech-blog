import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../components/domain/layout'
import Container from '../components/headless/container'
import SectionTitle from '../components/headless/Headding/section-title'
import { customLoader } from '../lib/image-loader'
import { createOGP } from '../lib/ogp'

library.add(
  faGithub as IconDefinition,
  faTwitter as IconDefinition,
  faMedium as IconDefinition,
  faLinkedin as IconDefinition,
  faBlog as IconDefinition
)

type Account = {
  name: string
  icon: IconDefinition
  href: string
}

const accountList: Account[] = [
  {
    name: 'Github',
    href: 'https://github.com/homura10059',
    icon: faGithub as IconDefinition
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/homura10059',
    icon: faTwitter as IconDefinition
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@homura10059',
    icon: faMedium as IconDefinition
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/%E5%8B%87%E4%BA%BA-%E5%A4%A7%E6%9D%91-25067b128/',
    icon: faLinkedin as IconDefinition
  },
  {
    name: 'Zenn',
    href: 'https://zenn.dev/homura',
    icon: faBlog as IconDefinition
  }
]

type Gadget = {
  title: string
  description?: string
  imageUrl: string
  linkUrl: string
}
const deskGadgets: Gadget[] = [
  {
    title: '27UL850-W',
    description: 'メインで使っている LG の 27インチ/4K ディスプレイ',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/P/B07KM8RD34.09.LZZZZZZZ.jpg',
    linkUrl: 'https://www.amazon.co.jp/dp/B07KM8RD34?tag=homura10059-22'
  }
]

const Profile: React.VFC = () => {
  const router = useRouter()
  return (
    <Layout og={createOGP({ title: 'Profile', path: router.asPath })}>
      <Container>
        <div className={'pt-20 bg-background-light'}></div>
        <div className="mx-auto max-w-2xl">
          <div className="grid place-content-center place-items-center mt-[-50px]">
            <div className={'p-1 bg-black rounded-full'}>
              <Image
                loader={customLoader}
                src={'/assets/blog/logo.svg'}
                alt={'homura'}
                width={100}
                height={100}
                priority
              />
            </div>

            <h1 className="mt-2 text-3xl font-normal">homura / @homura10059</h1>

            <h2 className="sr-only">About</h2>
            <p className="mt-2">Web Developer & Engineering Manager</p>

            <h2 className="sr-only">Accounts</h2>
            <ul className="flex gap-x-4 mt-4">
              {accountList.map(({ name, icon, href }) => (
                <li key={name}>
                  <Link href={href}>
                    <a>
                      <FontAwesomeIcon
                        icon={icon}
                        className="inline-block w-7 h-7 text-surface hover:text-primary-dark hover:cursor-pointer"
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <SectionTitle>Desk Gadgets</SectionTitle>
          <ul className="">
            {deskGadgets.map(({ title, description, imageUrl, linkUrl }, i) => (
              // eslint-disable-next-line tailwindcss/no-custom-classname
              <li key={i} className="@container">
                <Link href={linkUrl}>
                  <a>
                    <div className="flex flex-row place-items-center bg-white rounded-lg shadow-lg shadow-surface hover:cursor-pointer">
                      <figure className="relative w-24 @sm:w-48 h-24 @sm:h-48">
                        <Image
                          loader={customLoader}
                          src={imageUrl}
                          alt={`Cover Image for ${title}`}
                          layout="fill"
                          objectFit="contain"
                          className={'rounded-lg'}
                        />
                      </figure>
                      <div className="flex flex-col flex-1 justify-start p-3 @sm:p-6">
                        <p className="text-xl font-medium text-gray-900">
                          {title}
                        </p>
                        {description && (
                          <p className="mt-2 text-base text-gray-700">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Layout>
  )
}

export default Profile
