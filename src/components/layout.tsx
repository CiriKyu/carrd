import { HeadFC, graphql, useStaticQuery } from "gatsby"
import React, { FC, ReactNode } from "react"
import "./layout.css"

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => <div id="wrapper">{children}</div>

export default Layout

export const Head: HeadFC = () => {
    const query: Queries.Query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)
    const { title, description } = query.site!.siteMetadata!

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description!} />
        </>
    )
}
