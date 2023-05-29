import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { CSSProperties, type FC } from 'react'

interface Props {
    data: Queries.CommissionsYaml
    loading: "eager" | "lazy"
}

// TODO extract into classes
const boxStyle: CSSProperties = {
    display: "inline-block",
    background: "black",
}

const imageStyle: CSSProperties = {
}

const videoStyles: CSSProperties = {
    display: "block",
    // constrain the video to the parent div
    maxWidth: "100%",
    height: "auto",
}

const creditStyle: CSSProperties = {
    display: "inline-block",
    width: "100%",
    textAlign: "right",
    color: "#7F6500",
}

const ImageWithCredit: FC<Props> = ({ data, loading }) => {
    const altText = `Artwork by ${data.artistName}`
    const path = data.file?.publicURL!

    let artworkComp
    if (path.endsWith(".gif")) {
        artworkComp = <img src={path} alt={altText} loading={loading} />
    } else if (path.endsWith(".mp4")) {
        // specify size of the video so the poster gets stretched to "max-width"
        // if we ever have different video resolutions we should read this from the query
        artworkComp = <video controls muted preload="none" poster={data.poster?.publicURL} width="1920" height="1080" style={videoStyles}>
            <source src={path} type="video/mp4" />
        </video>
    } else {
        const image: IGatsbyImageData = getImage(data.file!)!
        artworkComp = <GatsbyImage image={image} loading={loading} alt={altText} />
    }

    return (
        <div style={boxStyle}>
            <div style={imageStyle}>
                {artworkComp}
            </div>
            <span style={creditStyle}>by <a href={data.artistUrl!} style={{ color: 'inherit' }}>{data.artistName}</a></span>
        </div>
    )
}

export default ImageWithCredit
