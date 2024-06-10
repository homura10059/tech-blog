import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { Card, CardProps } from '../block/card/card'
import Logo from '../client/image/logo'

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
      title: 'Dell U4025QW',
      description: '40インチ/5K2K ウルトラワイドな曲面ディスプレイ',
      image:
        'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u4025qw/media-gallery/monitor-ultrasharp-u4025qw-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=735&qlt=100,1&resMode=sharp2&size=735,476&chrss=full',
      url: 'https://www.dell.com/ja-jp/shop/dell%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB-%E3%83%8F%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%89-%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA40%E6%9B%B2%E9%9D%A2thunderbolt-%E3%83%8F%E3%83%96-%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC-u4025qw/apd/210-bmcw/%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC-%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC'
    },
    {
      title: 'エルゴトロン HX デスクモニターアーム',
      description: 'デスクの天板が白いのでモニターアームも白にしている',
      image: 'https://m.media-amazon.com/images/I/51zhd8n9SOL._AC_SX679_.jpg',
      url: 'https://www.amazon.co.jp/dp/B01N5FTCJE?tag=homura10059-22'
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
    },
    {
      title: 'Aulumu M01 ワイヤレス充電器',
      description:
        '4 in 1 の充電器。ガジェットガジェットした見た目が気に入っている。',
      image: 'https://m.media-amazon.com/images/I/61alhj85lVL._AC_SX679_.jpg',
      url: 'https://www.amazon.co.jp/dp/B0CBPPNJFT?tag=homura10059-22'
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
        'https://preducts.jp/cdn/shop/products/board-polar-flexispot-01_2ffc3dee-7d5a-467b-bd75-60fb72d10909_1200x1200.png?v=1674586574',
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

const Profile = () => {
  return (
    <>
      <div className={'bg-background-light pt-20'} />
      <div className="mx-auto max-w-2xl pb-10">
        <div className="mt-[-50px] grid place-content-center place-items-center">
          <div className={'rounded-full bg-black p-1'}>
            <Logo />
          </div>

          <h1 className="mt-2 text-3xl font-normal">homura / @homura10059</h1>

          <h2 className="sr-only">About</h2>
          <p className="mt-2">Web Developer & Engineering Manager</p>

          <h2 className="sr-only">Accounts</h2>
          <ul className="mt-8 flex gap-x-4">
            {accountList.map(({ name, icon, href }) => (
              <li key={name}>
                <Link href={href}>
                  <FontAwesomeIcon
                    icon={icon}
                    className="inline-block h-7 w-7 text-surface hover:cursor-pointer hover:text-primary-dark"
                  />
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
                {cards.map(item => (
                  <li key={item.url}>
                    <Card {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
