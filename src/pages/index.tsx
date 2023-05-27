import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import ImageWithCredit, { ImageWithCreditProps } from "../components/ImageWithCredit"
import { CSSProperties } from "react"
import Layout from "../components/layout"

const pageStyles: CSSProperties = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles: CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const imageListStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
}

const images: Array<ImageWithCreditProps> = [
  {
    file: "test.jpg",
    artistName: "@test",
    artistLink: "https://test",
  },
  {
    file: "test.jpg",
    artistName: "@test",
    artistLink: "https://test",
  },
  {
    file: "test.jpg",
    artistName: "@test",
    artistLink: "https://test",
  },
  {
    file: "test.jpg",
    artistName: "@test",
    artistLink: "https://test",
  },
  {
    file: "test.jpg",
    artistName: "@test",
    artistLink: "https://test",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Cirina Q(ualli)'tea</h1>
        <h2>Steppe Warrior</h2>

        <div style={imageListStyle}>
          {images.map(image => (
            <ImageWithCredit file={image.file} artistName={image.artistName} artistLink={image.artistLink}></ImageWithCredit>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Cirina Q'tea</title>
