import React, { ReactNode } from "react"
import "./layout.css"
import { FC } from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => <div id="wrapper">{children}</div>

export default Layout 
