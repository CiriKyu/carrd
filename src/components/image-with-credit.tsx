import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { type FC } from 'react'
import './image-with-credit.css'

interface Props {
  data: Queries.CommissionsYaml
  loading: 'eager' | 'lazy'
}

const ImageWithCredit: FC<Props> = ({ data, loading }) => {
  const altText = `Artwork by ${data.artistName as string ?? 'ERROR'}`
  const path = data.file?.publicURL as string ?? 'ERROR'

  let artworkComp
  if (path.endsWith('.gif')) {
    artworkComp = (
      <img src={path} alt={altText} loading={loading} />
    )
  } else if (path.endsWith('.mp4')) {
    // specify size of the video so the poster gets stretched to "max-width"
    // if we ever have different video resolutions we should read this from the query
    artworkComp = (
      <video controls muted preload='none' poster={data.poster?.publicURL} width='1920' height='1080'>
        <source src={path} type='video/mp4' />
      </video>
    )
  } else {
    const image: IGatsbyImageData = getImage(data.file)
    artworkComp = (
      <GatsbyImage image={image} loading={loading} alt={altText} />
    )
  }

  return (
    <div className='image-box'>
      <div className='image-main'>
        {artworkComp}
      </div>
      <span className='image-credit'>by <a href={data.artistUrl}>{data.artistName}</a></span>
    </div>
  )
}

export default ImageWithCredit
