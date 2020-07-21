import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface ImageProps {
  src: string
  width?: string
  height?: string
}

export const ImgFluid: React.FC<ImageProps> = ({ src, ...props }) => {
  // console.log(imageName)
  // const { placeholderImage } = useStaticQuery(graphql`
  //   query GET_IMAGE {
  //     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () =>
      allFile.edges.find(
        ({ node }: { node: { relativePath: string } }) =>
          src === node.relativePath
      ),
    [allFile, src]
  )

  return match ? (
    <Img fluid={match.node.childImageSharp.fluid} {...props} />
  ) : null
}
