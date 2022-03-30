import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../components/domain/icon/logo'
import Layout from '../components/domain/layout'
import Container from '../components/headless/container'
import PageTitle from '../components/headless/Headding/page-title'
import SectionTitle from '../components/headless/Headding/section-title'
import LinkText from '../components/headless/link-text'

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

const Profile: React.VFC = () => {
  return (
    <Layout>
      <Container>
        <PageTitle>
          <div className="flex items-center">
            <Logo width={48} height={48} />
            homura (@homura10059)
          </div>
        </PageTitle>
        <SectionTitle>About</SectionTitle>
        <p>Web Developer & Engineering Manager</p>
        <SectionTitle>Account</SectionTitle>
        <ul>
          {accountList.map(({ name, icon, href }) => (
            <li key={name}>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={icon}
                  className="w-5 h-5 text-surface inline-block"
                />
                <LinkText href={href}>{name}</LinkText>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default Profile
