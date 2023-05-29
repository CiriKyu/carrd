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
        // TODO poster image
        artworkComp = <video controls muted preload="none" width="100%" height="100%">
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
