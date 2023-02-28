import Link from 'next/link'

import { getCopyright } from '../../../lib/copyright'
import Container from '../../headless/container'

const Footer: React.VFC = () => {
  return (
    <footer className="bg-background-light text-surface">
      <Container>
        <div className="flex flex-col items-center py-8 lg:flex-row">
          <div className="flex items-center justify-center lg:w-1/2 lg:pl-4">
            <Link href={'/about/privacy_policy'}>
              <a className="mx-3 font-bold hover:underline">Privacy Policy</a>
            </Link>
            <Link href={'/about/disclaimer'}>
              <a className="mx-3 font-bold hover:underline">Disclaimer</a>
            </Link>
          </div>
          <p>{getCopyright()}</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
