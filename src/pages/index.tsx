import React from "react"
import { Link, PageProps, graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { ImgFluid } from "../components/img-fluid"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello world!</h1>
      <h2>I'm Foyez, a full-stack developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <ImgFluid src="foyez.jpg" />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
