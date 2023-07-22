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
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B07KM8RD34.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B07KM8RD34?tag=homura10059-22'
    },
    {
      title: 'FlexScan EV245',
      description: '90度回転させてサブモニターとして縦長に使っている',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B01MU28MND.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B01MU28MND?tag=homura10059-22'
    },
    {
      title: 'Amazonベーシック デュアルモニターアーム',
      description: 'これを使って2枚のモニターを左右に並べている',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B00MIBN71I.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B00MIBN71I?tag=homura10059-22'
    }
  ],
  Camera: [
    {
      title: 'α6600',
      description:
        'Sony α6600 普段は子供を撮るのに使っているが、平日は使わないのでウェブカメラとして使っている',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B07X6HLHTV.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B07X6HLHTV?tag=homura10059-22'
    },
    {
      title: 'SEL11F18',
      description:
        '上のカメラつにつけてる単焦点広角レンズ APS-C用 / E 11mm F1.8',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B0B2YZX69J.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B0B2YZX69J?tag=homura10059-22'
    },
    {
      title: 'グリーンハウス モニターアーム',
      description:
        'ウェブカメラとして使うときにカメラをマウントしているモニターアーム',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B084YW5ZQS.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B084YW5ZQS?tag=homura10059-22'
    }
  ],
  Audio: [
    {
      title: 'YAMAHA ZG01',
      description:
        'ゲーム/配信用オーディオミキサー。マイク&ヘッドホンをこいつに繋ぎ一元管理している。HDMI切り替え機能もあるので、PS5とSwitchを切り替えるのにも使っている。',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B09WQN5QP2.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B09WQN5QP2?tag=homura10059-22'
    },
    {
      title: 'MPM-1000J',
      description:
        'ZG01 のマイク入力がXLRなので一番安価だったこいつを使っている',
      image: 'https://m.media-amazon.com/images/I/51-XcCgLBKL._AC_SL1500_.jpg',
      url: 'https://www.amazon.co.jp/dp/B07ZKNKTFD?tag=homura10059-22'
    }
  ],
  'User Interface': [
    {
      title: 'REALFORCE91UBK-S',
      description:
        'テンキーレス 変荷重 静音タイプ。Macしか持ってないのにWindows用のキーボードを使っているのは、Windowsしか使えない職場で働いていた頃の名残',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B003XKNX76.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B003XKNX76?tag=homura10059-22'
    },
    {
      title: 'Magic Trackpad',
      description:
        'MBPのキーボードを使った時と使用感が変わらないようにキーボードと縦に並べている',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B09BTT6FJ9.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B09BTT6FJ9?tag=homura10059-22'
    }
  ],
  Desk: [
    {
      title: 'FlexiSpot7',
      description: '電動昇降デスク。健康のためにたまに立つようにしてる。',
      image: 'https://m.media-amazon.com/images/I/51fkl31TUHL._AC_SX679_.jpg',
      url: 'https://www.amazon.co.jp/dp/B08F7772MB?tag=homura10059-22'
    },
    {
      title: 'BOARD - POLAR for FlexiSpot',
      description: 'PREDUCTSの天板。モジュラーシステムが便利で気に入っている。',
      image:
        'http://preducts.jp/cdn/shop/products/board-polar-flexispot-01_2ffc3dee-7d5a-467b-bd75-60fb72d10909_1200x1200.png?v=1674586574',
      url: 'https://preducts.jp/products/board-polar-flexispot'
    },
    {
      title: 'オカムラ バロンチェア',
      description:
        '背が高いためなかなか体に合う椅子に出会えなかったがこれに落ち着いた',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B000NMQWC0.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B000NMQWC0?tag=homura10059-22'
    },
    {
      title: 'Bauhutte デスクごとチェアマット',
      description:
        'L字デスクと椅子が動く範囲全てをカバーしている。掃除しやすさを重視して、カーペットタイプではなくPVCのもの使用',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B01N9AYNP1.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B01N9AYNP1?tag=homura10059-22'
    }
  ],
  Network: [
    {
      title: 'EdgeRouter X',
      description:
        '宅内の routing とインターネット接続を一挙に受け持つルーター。無線機のは無いので別の機器を無線APとしている',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B010MZFH5A.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B010MZFH5A?tag=homura10059-22'
    },
    {
      title: 'AmpliFi Instant Router',
      description:
        'イーサネットバックボーンをもつ無線APとしてブリッジモードで使っている(2台)',
      image:
        'https://cdn.shopify.com/s/files/1/0214/4921/2004/products/AFi-INS_Front_Angle_c0044a3f-97b8-4ab9-8375-fff78294f21d_grande.png?v=1603191125',
      url: 'https://www.amazon.co.jp/dp/B07PHHG47X?tag=homura10059-22'
    },
    {
      title: 'NETGEAR GS305',
      description: '有線LAN接続も大量にあるのでL2スイッチとして導入',
      image:
        'https://images-na.ssl-images-amazon.com/images/P/B07YPG5GWD.09.LZZZZZZZ.jpg',
      url: 'https://www.amazon.co.jp/dp/B07YPG5GWD?tag=homura10059-22'
    }
  ]
}

const Profile: React.VFC = () => {
  const router = useRouter()
  return (
    <Layout og={createOGP({ title: 'Profile', path: router.asPath })}>
      <Container>
        <div className={'bg-background-light pt-20'}></div>
        <div className="mx-auto max-w-2xl pb-10">
          <div className="mt-[-50px] grid place-content-center place-items-center">
            <div className={'rounded-full bg-black p-1'}>
              <Image
                loader={customLoader}
                src={'/assets/blog/logo.svg'}
                alt={'homura'}
                width={100}
                height={100}
                priority
                unoptimized
              />
            </div>

            <h1 className="mt-2 text-3xl font-normal">homura / @homura10059</h1>

            <h2 className="sr-only">About</h2>
            <p className="mt-2">Web Developer & Engineering Manager</p>

            <h2 className="sr-only">Accounts</h2>
            <ul className="mt-8 flex gap-x-4">
              {accountList.map(({ name, icon, href }) => (
                <li key={name}>
                  <Link href={href}>
                    <a>
                      <FontAwesomeIcon
                        icon={icon}
                        className="inline-block h-7 w-7 text-surface hover:cursor-pointer hover:text-primary-dark"
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-col gap-y-10">
            {Object.entries(cards).map(([key, cards]) => (
              <div key={key}>
                <div className="grid place-content-center">
                  <h2 className="text-3xl font-normal leading-snug">{key}</h2>
                </div>
                <ul className="mt-2 flex flex-col gap-y-6">
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
