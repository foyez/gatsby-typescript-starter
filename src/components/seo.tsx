import React from "react"

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const defaultProps = {
  lang: `en`,
  description: ``,
  meta: [],
}

type SEOProps = {
  title: string
  lang?: string
  description?: string
  meta?: any[]
}

type MetaDataProps = {
  site: {
    siteMetadata: {
      title: string
      author: string
      description: string
    }
  }
}

export const SEO: React.FC<SEOProps> = ({ lang, description, meta, title }) => {
  const { site } = useStaticQuery<MetaDataProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `twitter:title`,
          content: title,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = defaultProps
