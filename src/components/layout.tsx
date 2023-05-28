import React, { ReactNode } from "react"
import "./layout.css"
import { FC } from "react"
import { HeadFC, graphql, useStaticQuery } from "gatsby"

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => <div id="wrapper">{children}</div>

export default Layout

export const Head: HeadFC = () => {
    const data = useStaticQuery(graphql`
    query{site{siteMetadata{
        title
        description
    }}}`)

    return (
        <>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
        </>
    )
}
