import ImageWithUnknownDimensions from './headless/ImageWithUnknownDimensions'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      <ImageWithUnknownDimensions
        src={picture}
        alt={name}
        sizeClassName="w-12 h-12"
        imageClassName="rounded-full mr-"
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
