import Image from 'next/image'

type Props = {
  width: number
  height: number
}
const Logo: React.VFC<Props> = ({ width, height }) => (
  <Image
    src={'/assets/blog/logo.svg'}
    alt={'homura'}
    width={width}
    height={height}
  />
)

export default Logo
