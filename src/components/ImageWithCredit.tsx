import * as React from 'react'
import { CSSProperties, type FC } from 'react'

interface Props {
    data: Queries.CommissionsYaml
}

const boxStyle: CSSProperties = {
    background: "black",
}

const imageStyle: CSSProperties = {
    padding: "2em",
    background: "cornflowerblue",
}

const creditStyle: CSSProperties = {
    display: "block",
    textAlign: "right",
    color: "#7F6500",
}

const ImageWithCredit: FC<Props> = ({ data }) => (
    <div style={boxStyle}>
        {/* <GatsbyImage image={ } /> */}
        <div style={imageStyle}>{data.file}</div>
        <span style={creditStyle}>by <a href={data.artistUrl!} style={{ color: 'inherit' }}>{data.artistName}</a></span>
    </div>
)

export default ImageWithCredit
