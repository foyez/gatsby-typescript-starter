import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import { Footer } from "./footer"

interface DataProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<DataProps>(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
