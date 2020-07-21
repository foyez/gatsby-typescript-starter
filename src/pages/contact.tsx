import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>
      The best way to reach me via{" "}
      <a href="https://twitter.com/foyezar" target="_blank">
        twitter
      </a>
      .
    </p>
  </Layout>
)

export default ContactPage
