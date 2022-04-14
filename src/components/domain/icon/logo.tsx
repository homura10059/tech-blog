import Image from 'next/image'

import { customLoader } from '../../../lib/image-loader'

type Props = {
  width: number
  height: number
}
const Logo: React.VFC<Props> = ({ width, height }) => (
  <Image
    loader={customLoader}
    src={'/assets/blog/logo.svg'}
    alt={'homura'}
    width={width}
    height={height}
  />
)

export default Logo
