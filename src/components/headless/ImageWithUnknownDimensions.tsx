import cx from 'classnames'
import Image from 'next/image'

import { customLoader } from '../../lib/image-loader'

type Props = {
  src: string
  alt: string
  sizeClassName: string
  imageClassName: string
}

const ImageWithUnknownDimensions = ({
  src,
  alt,
  sizeClassName,
  imageClassName
}: Props) => {
  return (
    <div className={cx([sizeClassName, 'relative'])}>
      <Image
        loader={customLoader}
        className={imageClassName}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

export default ImageWithUnknownDimensions
