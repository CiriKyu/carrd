import { PageProps, graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { FC } from 'react'
import ImageWithCredit from '../components/image-with-credit'
import Layout from '../components/layout'
import './index.css'

const IndexPage: FC<PageProps> = () => {
  const query: Queries.Query = useStaticQuery(graphql`
    query {
      allCommissionsYaml {
        nodes {
          id
          file {
            publicURL
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                # set to width of the inner container
                sizes: "(min-width: 32.5rem) 32.5rem, 100vw"
                outputPixelDensities: [0.25, 0.5, 0.7, 1, 2]
              )
            }
          }
          artistName
          artistUrl
          poster {
            publicURL
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <main className='page'>
        <div className='inner'>
          <div className='header'>
            <h1>Cirina Q<span className='dimmed-text'>(ualli)</span>'tea</h1>
            <h2>~ Steppe Warrior ~</h2>
          </div>

          <div className='image-list'>
            {query.allCommissionsYaml.nodes.map((comm, index) => {
              // load the first two images eagerly
              const loading = index < 2 ? 'eager' : 'lazy'
              return (
                <ImageWithCredit key={comm.id} data={comm} loading={loading} />
              )
            })}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export { Head } from '../components/layout'
