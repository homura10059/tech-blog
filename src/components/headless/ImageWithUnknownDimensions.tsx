import cx from 'classnames'
import Image from 'next/image'

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
