import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { type FC } from 'react'
import './image-with-credit.css'

interface Props {
  data: Queries.CommissionsYaml
  loading: 'eager' | 'lazy'
}

interface VideoType {
  av1: Queries.VideoFFMPEGTranscoded
  vp9: Queries.VideoFFMPEGTranscoded
  h264: Queries.VideoFFMPEGTranscoded
}

const ImageWithCredit: FC<Props> = ({ data, loading }) => {
  const altText = `Artwork by ${data.artistName as string ?? 'ERROR'}`
  const path = data.file?.publicURL as string ?? 'ERROR'

  let artworkComp
  if (data.file?.childImageSharp != null) {
    const image: IGatsbyImageData = getImage(data.file)
    artworkComp = (
      <GatsbyImage image={image} loading={loading} alt={altText} />
    )
  } else if (data.file?.childVideoFfmpeg != null) {
    const video: VideoType = data.file.childVideoFfmpeg
    // specify size of the video so the poster gets stretched to "max-width"
    // AV1 needs a specific codec param (0=Main profile, 08=Level 4.0, M=seq_tier 0, 08=bit depth 8) - this should probably be automated but tbh does it matter if it's slightly off…
    artworkComp = (
      <video controls muted preload='none' poster={data.poster?.publicURL} width={video.h264.width} height={video.h264.height}>
        <source src={video.av1.src} type='video/webm; codecs=av01.0.08M.08' />
        <source src={video.vp9.src} type='video/webm; codecs=vp9' />
        <source src={video.h264.src} type='video/mp4; codecs=avc1' />
      </video>
    )
  } else {
    artworkComp = (
      <img src={path} alt={altText} loading={loading} />
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
