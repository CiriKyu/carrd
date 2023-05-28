import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import ImageWithCredit, { ImageWithCreditProps } from "../components/ImageWithCredit"
import { CSSProperties } from "react"
import Layout from "../components/layout"

const pageStyles: CSSProperties = {
  "--component-gap": "1.5rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Alegreya Sans', sans-serif",
}
const innerStyles: CSSProperties = {
  width: "32.5rem",
  maxWidth: "100%",
  padding: "3rem",
}
const headingStyles: CSSProperties = {
  fontFamily: "'Poiret One', sans-serif",
  textAlign: "center",
  marginBottom: "var(--component-gap)"
}
const mainHeadingStyles: CSSProperties = {
  fontSize: "2.7rem",
}
const subHeadingStyles: CSSProperties = {
  fontSize: "1.625rem",
}
const imageListStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--component-gap)",
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
        <div style={innerStyles}>
          <div style={headingStyles}>
            <h1 style={mainHeadingStyles}>Cirina Q(ualli)'tea</h1>
            <h2 style={subHeadingStyles}>~ Steppe Warrior ~</h2>
          </div>

          <div style={imageListStyle}>
            {images.map(image => (
              <ImageWithCredit file={image.file} artistName={image.artistName} artistLink={image.artistLink}></ImageWithCredit>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export { Head } from "../components/layout"
