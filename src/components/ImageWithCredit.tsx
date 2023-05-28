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
    const image: IGatsbyImageData = getImage(data.file!)!

    return (
        <div style={boxStyle}>
            <div style={imageStyle}>
                <GatsbyImage image={image} loading={loading} alt={"Artwork by " + data.artistName} />
            </div>
            <span style={creditStyle}>by <a href={data.artistUrl!} style={{ color: 'inherit' }}>{data.artistName}</a></span>
        </div>
    )
}

export default ImageWithCredit
