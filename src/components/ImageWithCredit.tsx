import * as React from 'react'
import { CSSProperties } from 'react'
import { type FC } from 'react'

export interface ImageWithCreditProps {
    file: string
    artistName: string
    artistLink: string
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

const ImageWithCredit: FC<ImageWithCreditProps> = ({ file, artistName, artistLink }) => (
    <div style={boxStyle}>
        <div style={imageStyle}>{file}</div>
        <a href={artistLink} style={creditStyle}>{artistName}</a>
    </div>
)

export default ImageWithCredit
