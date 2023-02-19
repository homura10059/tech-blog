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

import { Card, CardProps } from '../components/domain/card/card'
import Layout from '../components/domain/layout'
import Container from '../components/headless/container'
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

const cards: Record<string, CardProps[]> = {
  Display: [
    {
      title: '27UL850-W',
      description: 'メインで使っている LG の 27インチ/4K ディスプレイ',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/P/B07KM8RD34.09.LZZZZZZZ.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B07KM8RD34?tag=homura10059-22'
    },
    {
      title: 'FlexScan EV245',
      description: '90度回転させてサブモニターとして縦長に使っている',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/P/B01MU28MND.09.LZZZZZZZ.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B01MU28MND?tag=homura10059-22'
    },
    {
      title: 'Amazonベーシック デュアルモニターアーム',
      description: 'これを使って2枚のモニターを左右に並べている',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/P/B00MIBN71I.09.LZZZZZZZ.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B00MIBN71I?tag=homura10059-22'
    }
  ],
  Camera: [
    {
      title: 'α6600',
      description:
        'Sony α6600 普段は子供を撮るのに使っているが、平日は使わないのでウェブカメラとして使っている',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/P/B07X6HLHTV.09.LZZZZZZZ.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B07X6HLHTV?tag=homura10059-22'
    },
    {
      title: 'SEL11F18',
      description:
        '上のカメラつにつけてる単焦点広角レンズ APS-C用 / E 11mm F1.8',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/P/B0B2YZX69J.09.LZZZZZZZ.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B0B2YZX69J?tag=homura10059-22'
    },
    {
      title: 'グリーンハウス モニターアーム',
      description:
        'ウェブカメラとして使うときにカメラをマウントしているモニターアーム',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/P/B084YW5ZQS.09.LZZZZZZZ.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B084YW5ZQS?tag=homura10059-22'
    }
  ],
  Audio: [
    {
      title: 'YAMAHA ZG01',
      description:
        'ゲーム/配信用オーディオミキサー。マイク&ヘッドホンをこいつに繋ぎ一元管理している。HDMI切り替え機能もあるので、PS5とSwitchを切り替えるのにも使っている。',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/P/B09WQN5QP2.09.LZZZZZZZ.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B09WQN5QP2?tag=homura10059-22'
    },
    {
      title: 'MPM-1000J',
      description:
        'ZG01 のマイク入力がXLRなので一番安価だったこいつを使っている',
      imageUrl:
        'https://m.media-amazon.com/images/I/51-XcCgLBKL._AC_SL1500_.jpg',
      linkUrl: 'https://www.amazon.co.jp/dp/B07ZKNKTFD?tag=homura10059-22'
    }
  ]
}

const Profile: React.VFC = () => {
  const router = useRouter()
  return (
    <Layout og={createOGP({ title: 'Profile', path: router.asPath })}>
      <Container>
        <div className={'pt-20 bg-background-light'}></div>
        <div className="pb-10 mx-auto max-w-2xl">
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
            <ul className="flex gap-x-4 mt-8">
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
          <div className="flex flex-col gap-y-10 mt-10">
            {Object.entries(cards).map(([key, cards]) => (
              <div key={key}>
                <div className="grid place-content-center">
                  <h2 className="text-3xl font-normal leading-snug">{key}</h2>
                </div>
                <ul className="flex flex-col gap-y-6 mt-2">
                  {cards.map((item, i) => (
                    <li key={i}>
                      <Card {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Profile
