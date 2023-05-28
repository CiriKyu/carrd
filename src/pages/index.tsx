import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { CSSProperties, FC } from "react"
import ImageWithCredit from "../components/ImageWithCredit"
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

const IndexPage: FC<PageProps> = () => {
  const query: Queries.Query = useStaticQuery(graphql`
    query {
      allCommissionsYaml {
        edges {
          node {
            file
            artistName
            artistUrl
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <main style={pageStyles}>
        <div style={innerStyles}>
          <div style={headingStyles}>
            <h1 style={mainHeadingStyles}>Cirina Q(ualli)'tea</h1>
            <h2 style={subHeadingStyles}>~ Steppe Warrior ~</h2>
          </div>

          <div style={imageListStyle}>
            {query.allCommissionsYaml.edges.map(comm => (
              <ImageWithCredit data={comm.node}></ImageWithCredit>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export { Head } from "../components/layout"
